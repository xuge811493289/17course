var http = require("http");
var server = http.createServer(function(req,res){
  res.writeHead(200,{"Content-type":"text/plain;charset=UTF8"})
  var userurl = req.url;
  if(userurl.substr(0,9)=="/student/"){
    var studentid = userurl.substr(9);
    if(/\d{10}/.test(studentid)){
      res.end("您要查询的学生信息，id为"+studentid.toString());
    }else{
      res.end("学生学号位数不对")
    }
  }else if(userurl.substr(0,9)=="/teacher/"){
    var teacherid = userurl.substr(9);
    if(/\d{6}/.test(teacherid)){
      res.end("您要查询的教师信息，id为"+teacherid.toString())
    }else{
      res.end("教师教工号位数不对")
    }
  }

}).listen(3000,"127.0.0.1");