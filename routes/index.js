const router = require('express').Router();
const generateCSV = require('./generateCSV');
router.get('/', (req, res) => {
    res.send('add /generate-csv on route');   
});

router.use('/generate-csv', generateCSV);  

module.exports = router; 