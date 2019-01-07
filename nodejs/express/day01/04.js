var express = require("express");
var app = express();

app.all("/student/:id",function(req,resp){
  var id = req.params["id"];
  var reg = /^[\d]{6}$/;    //正则表达式
  if(reg.test(id)){
    resp.send(id);
  }else{
    resp.send("请检查格式")
  }
})

app.get("/:username/:oid",function(req,resp){
  var username = req.params.username;
  var oid = req.params.oid;

  resp.write(username);
  resp.end(oid);
})



app.listen(3000,"127.0.0.1",function(){
  console.log("端口号为3000的服务器已经启动..");
})