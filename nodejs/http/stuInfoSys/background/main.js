var http = require("http");
var url = require("url");
var fs = require("fs");
// 链接数据库
var mysql = require("mysql");
var connection = mysql.createConnection({
  host:"127.0.0.1",
  port:"3306",
  database:"stuinfosys",
  user:"root",
  password:"root",
})
connection.connect();
var server = http.createServer(function(req,resp){
  var urlobj = url.parse(req.url,true)
  var pathname = urlobj.pathname;
  var queryobj = urlobj.query;
  if(pathname == "/login"){
    // 还没有链接数据库
    /*if(queryobj.username == "terry" && queryobj.password == "123321"){
      resp.writeHead(200,{"content-type":"text/html;charset=utf8"});
      fs.readFile("./index.html",function(err,data){
        resp.write(data.toString());
        resp.end();
      })
    }*/
    // 已经连接好数据库
    connection.query("select * from stuinfo;",function(err,data){
      if(err){
        console.log(err);
        return ;
      }
      data.some(function(item){
        if(item.username == queryobj.username && item.password == queryobj.password ){
          resp.writeHead(200,{"content-type":"text/palin;charset=utf8"})
          resp.end("欢迎"+ item.username)
        }
      })
    })
  }
  if(pathname == "/findAllInfo"){
    connection.query("select * from stuinfo;",function(err,data){
      if(err){
        console.log(err);
        return ;
      }
      resp.writeHead(200,{"content-type":"text/palin;charset=utf8"})
      resp.write(JSON.stringify(data));
      resp.end();
    })
  }
})
server.listen("3000","127.0.0.1",function(){
  console.log("端口号为3000的服务器已经开启...")
});
