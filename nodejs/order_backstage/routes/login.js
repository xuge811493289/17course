var express = require('express');
var cookieParser = require('cookie-parser');
var router = express.Router();
var db = require('../db/order');
var cookies = require('cookies');
var pool = require('../db/pool');

// 登录
router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  // console.log(new Buffer(password, 'base64').toString());  解码
  var sql = "select id,username from user where username='"+username+"' and password='"+password+"';";
  login(sql,req,res,username);
});
// 注册
router.post('/register', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var regtime = Date.parse(new Date())
  // 检查数据库中是否有改用户名
  pool.toConnect().then(function(conn){
    connection = conn;
    conn.query('SELECT `id` FROM `user` WHERE `username`=?', [username],function(err,results){
      if(err) throw err;
      if(results.length){
        res.send(JSON.stringify({status:403,data:"改用户名已存在！"}));
      }else{
        var sql = "insert into user(id,username,password,regtime) values(null,'"+username+"','"+password+"','"+regtime+"');";
        register(sql,res);
      }
    })
  }).catch(function(err){
    reject(err);
  }).finally(function(){
    connection.release();
  })
});

// 登录
function login(sql,req,resp,username){
  db.All(sql).then(function(data){
    if(data.length == 0){
      resp.end(JSON.stringify({status:200,data:"用户名或密码错误！"}));
    }else{
      // 设置cookies
      resp.cookie("userInfo", data, {maxAge: 600000 , httpOnly: false});
      resp.send(JSON.stringify({status:200,data:data}));
    }
  }).catch(function(err){
    resp.end(err);
  })
}

// 注册
function register(sql,resp){
  db.All(sql).then(function(data){
    resp.end(JSON.stringify({status:200,data:"操作成功!"}));
  }).catch(function(err){
    resp.end(err);
  })
}

module.exports = router;