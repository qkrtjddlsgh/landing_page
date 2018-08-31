var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/long', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(__dirname + '/lending.html');
});

router.get('/short', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(__dirname + '/lending_short.html');
});

module.exports = router;
