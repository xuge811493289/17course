var http = require("http");
var url = require("url");

var server = http.createServer(function (req,res) {
  var path1 = url.parse(req.url).path;          //除了主机名和端口号的内容
  var query1 = url.parse(req.url,true).query;        //从问号之后的内容
  var pathname = url.parse(req.url).pathname;   //问号和主机名端口号之间的内容
  var search = url.parse(req.url).search;       //问号以及查询字符串
  var port = url.parse(req.url).port;       //端口号
  console.log("path1",path1);
  console.log("query",query1);
  console.log(typeof query1);
  console.log("pathname",pathname);
  console.log("search",search);
  console.log("port",port);
  res.end();
})

server.listen(3000,"127.0.0.1");
