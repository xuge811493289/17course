var http = require("http");
http.createServer(function(req,res){
  res.writeHead(200,{"Content-type":"text/palin;charset=UTF8"});
  res.write("一段随意的文本");
  res.end();
}).listen(3000,"127.0.0.1")
