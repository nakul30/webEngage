const axios = require('axios');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const { type } = require('os');
const directory = path.join(__dirname, '../csvdata');

//<--- DATA USED FROM JSON FILES WHILE DEVELOPMENT --->
// const usersFilePath = path.join(directory, 'users.json');
// const postsFilePath = path.join(directory, 'posts.json');
// const commentsFilePath = path.join(directory, 'comments.json');
// const usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
// const postData = JSON.parse(fs.readFileSync(postsFilePath, 'utf8'));
// const commentsData = JSON.parse(fs.readFileSync(commentsFilePath, 'utf8'));



const getUniqueCsvFilePath = () => {
    // const uniqueId = uuidv4();
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const directory = path.join(__dirname, '../data');

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true }); 
    }
    return path.join(directory, `data_${timestamp}.csv`);
};
module.exports.generateCSV = async(req, res) => {
    // res.json({message: 'generateCSV controller'});

    console.log('generateCSV controller called');
    try{
        const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/comments')
        ]); 

        if (usersResponse.status !== 200 || postsResponse.status !== 200 || commentsResponse.status !== 200) {
            throw new Error('One or more API requests failed');
        }
        const usersData = usersResponse.data;
        const postData = postsResponse.data;
        const commentsData = commentsResponse.data;

        const data = usersData.map(user => {
            const userPosts = postData.filter(post => post.userId === user.id);
            const postTitles = userPosts.map(post => post.title).join('<---->'); 
            const postIds = userPosts.map(post => post.id);
            const userComments = commentsData.filter(comment => postIds.includes(comment.postId));
            const commentBodies = userComments.map(comment => comment.body.replace(/\n/g, ',')).join('<---->');
        
            return {
                name: user.name,
                posts: postTitles,
                comments: commentBodies
            };
        });

        const csvFilePath = getUniqueCsvFilePath();
        const csvWriter = createCsvWriter({
            path: csvFilePath, 
            header: [
                { id: 'name', title: 'Name' },
                { id: 'posts', title: 'Title' },
                { id: 'comments', title: 'Body' }
            ]
        });

        csvWriter.writeRecords(data)
        .then(()=>console.log('The CSV file was written successfully'))
        .catch((err)=>console.error('Error in writing CSV file', err));
        res.json({message: 'CSV file generated successfully', csvFilePath});
         
    }
    catch(err){
        console.error("Error in generateCSV",err);
        res.status(500).json({message: 'Internal Server Error.Try Restarting the server again or uncomment line 10-15 and comment line 34-45 from controller'});

    }

}
