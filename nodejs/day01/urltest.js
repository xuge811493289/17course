var http = require("http");
var url = require("url");

var server = http.createServer(function (req,res) {
  var query = url.parse(req.url,true).query;
  res.end(JSON.stringify(query));
})

server.listen(3000,"127.0.0.1");
