const router    = require('express').Router();
const csvController = require('../controller/generateCSVcontroller');

router.get('/', csvController.generateCSV);
module.exports = router;