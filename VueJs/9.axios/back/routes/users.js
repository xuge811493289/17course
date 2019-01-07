var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});
//get请求方式		http://ip:3000/users
router.get('/save', function(req, res, next) {
	console.log('get save:')
	var result = req.query;
	console.log(result);
  res.send(result);
});
//post请求方式		
router.post('/save', function(req, res, next) {
	console.log('post save:')
	var result = req.body;
	console.log(result);
  res.send(result);
});


module.exports = router;
