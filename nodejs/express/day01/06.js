var http = require("http");
// 用户每次执行的时候不访问这行语句，只有服务器才会访问这条语句
var a = 100;
var server = http.createServer(function(req,resp){
    // 用户从这里开始访问
    a++;
    resp.end(a.toString());
})
server.listen(3000,"127.0.0.1",function(){
    console.log("端口号为3000的服务已经开启.....");
})