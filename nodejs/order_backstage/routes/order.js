var express = require('express');
var path = require('path');     //npm下载
var util = require('util');     //npm下载
var orderRouter = express.Router();
var formidable = require('formidable');

var order = require('../db/order');  //获取连接池

orderRouter.get('/findAll', function(req, resp, next) {
  var sql = "select * from order2";
  findAllInfo(sql,resp);
  // if(req.cookies.userInfo){
  //   var sql = "select * from order2";
  //   findAllInfo(sql,resp);
  // }
});

orderRouter.post("/submit",function (req,resp) {
  var form = new formidable.IncomingForm();
  form.encoding = 'utf-8';
  form.uploadDir = path.join(__dirname,'/files');
  form.keepExtensions = true;//保留后缀
  form.maxFieldsSize = 2 * 1024 * 1024;
  var files = [];   //返回前台的值
  var fields = {};  //保存到数据库的值
  form.on('field', function(field, value) {
    // 获取参数信息,field为参数的键, value为参数的值
    fields[field] = value;
  })
  .on('file', function(field, file) {
    // 获取文件信息
    files.push({filepath:file.path,filename:file.name});
    fields.file = util.inspect(file.path);
    var sql = "insert into order2(id,restaurant,sales,qisong,peisong,file) values(null,'"+fields.restaurant+"',0,"+fields.qisong+","+fields.peisong+","+fields.file+")";
    // 提前写好的存储到数据库中的函数
    findAllInfo(sql,resp);
  })
  .on('end', function() {
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.end(util.inspect(files));
  });
  form.parse(req);
});

function findAllInfo(sql,resp){
  order.All(sql).then(function(data){
    if(data.affectedRows == 1){
      resp.end(JSON.stringify({data:"操作成功！"}));
    }else{
      resp.end(JSON.stringify({status:200,data:data}));
    }
  }).catch(function(err){
    console.log(err);
  })
}
module.exports = orderRouter;
