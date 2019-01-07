var http = require("http");
var path = require("path");
var fs = require("fs");
var querystring = require("querystring");
var server = http.createServer();

// 当客户端像服务器发送请求，则激发该服务器上的request事件
server.on("request",function(req,resp){
  var url = req.url;
  var file_path = path.join(__dirname,"www",url);
  var ext = path.extname(file_path);
  // 如果有后缀，代表请求静态资源
  if(ext){
    // 判断用户请求的资源是否存在
    fs.exists(file_path,function(flag){
      if(flag){
        //通过流将用户请求的资源发送给用户
        resp.writeHead(200,"OK",{});
        var readStream = fs.createReadStream(file_path);
        readStream.pipe(resp);
      }else{
        resp.writeHead(404,"Not Fount",{
          "content-type":"text/html;charset=utf8"
        })
        resp.write("找不到了...");
        resp.end();
      }
    })
  }else{
    // 没有后缀，代表处理动态资源
    switch(url){
      case "/cms/login":
        console.log("登录cms");
        var buff = new Buffer(0);
        req.on("data",function(data){
          buff += data;
        })
        req.on("end",function(){
          var params = querystring.parse(buff.toString());
          var name = params.name;
          var password = params.password;
          resp.writeHead(200,"OK",{
            "content-type":"text/html;charset=utf8"
          });
          if(name == "briup" && password == "briup"){
            resp.write("登录成功");
          }else{
            resp.write("登录失败");
          }
          resp.end();
        })
        break;
      case "sms/login":
        console.log("登录sms");
        break;
    }
  }
});
server.listen("8888","127.0.0.1",function(){
  console.log("端口号为8888的服务器已经开始监听...")
})