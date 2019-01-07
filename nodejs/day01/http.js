// 这个案例是简单讲解http模块
var http = require("http");

// 创建一个服务器，回调函数表示接收到请求之后做的事情
var server = http.createServer(function (req,res) {
  // req请求  res表示响应
  if(req.url=='/'){
    // 每接收一次请求做一次
    console.log("服务器接收到了请求"+req.url);
    // 响应头部
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
    // 回写内容
    res.write("<h1>这是一个1标题</h1>");
    res.write("<h2>这是一个2标题</h2>");
    res.write("<h3>这是一个3标题</h3>");
    // 每一个http请求必须有一个res.end方法，表示结束请求
    res.end("<h1>这是一个标题</h1>");
  }
})

server.listen(3000,"127.0.0.1");
