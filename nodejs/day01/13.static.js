var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");

http.createServer(function(req,res){
    // 得到用户的路径
    var pathname = url.parse(req.url).pathname;
    // 默认首页
    if(pathname=="/"){
      pathname = "index.html";
    }
    var extname = path.extname(pathname);
    // 读取文件
    fs.readFile("./static/"+pathname,function(err,data){
      if(err){
        fs.readFile("./static/404.html",function(err,data){
          res.writeHead(404,{"Content-type":"text/html;charset=utf8"});
          res.end(data);
        })
        return ;
      }
      var mime = getMime(extname);
      res.writeHead(200,{"Content-type":mime})
      res.end(data);
    })
}).listen(3000,"127.0.0.1");

function getMime(extname){
  switch(extname){
    case ".html":
      return "text/html";
      break;
    case ".jpg" :
      return "image/jpg";
      break;
    case ".css" :
      return "text/css";
      break;
  }
}