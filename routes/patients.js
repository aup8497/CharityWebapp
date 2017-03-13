var express;
express = require('express');
var router = express.Router();

router.route('/')
    .get(function (req, res) {
    return res.render('savedInfo.ejs', {});
});

module.exports = router;