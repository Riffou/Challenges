var express = require('express');
var router = express.Router();
var index = require('../controllers/indexController');


router.get('/', index.run);
router.post('/', index.runConnexion);

module.exports = router;
