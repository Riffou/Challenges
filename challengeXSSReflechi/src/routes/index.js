var express = require('express');
var router = express.Router();
var index = require('../controllers/indexController');


router.get('/', index.run);
router.post('/', index.runCheckJS);
router.get('/test', index.runTestFaille);
router.post('/test', index.checkTestFaille);

module.exports = router;
