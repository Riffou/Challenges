var express = require('express');
var router = express.Router();
var index = require('../controllers/indexController');


router.get('/', index.run);
router.post('/', index.insertCommentaire);

module.exports = router;
