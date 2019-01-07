var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
  if(req.url == "/favicon.ico"){
    return ;
  }


  var userid = parseInt(Math.random()*89999)+10000;
  console.log("欢迎user"+userid);

  res.writeHead(200,{'Content-type':'image/jpeg'})
  fs.readFile("./1.jpg",function(err,data){
    if(err){
      throw err;
    }
    console.log(1);
    res.end(data);
  })
  console.log(2);

}).listen(3000,"127.0.0.1");