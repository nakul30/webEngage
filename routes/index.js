const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('in router');   
});


module.exports = router; 