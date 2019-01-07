var express = require("express");
var app = express();
// 如果我的的get、post回调函数中，没有next参数，那么就匹配上第一个路由，就不会往下匹配了。
// 下面两个路由实际上是冲突的，要求我们在设计路由的时候，越具体的需要越写在上面
app.get("/:username/:userid",function(req,resp){
    console.log(req.params,'---');
})
app.get("/login/123",function(req,resp){
    console.log(req.params,'+++');
})


app.listen(3000,"127.0.0.1",function(){
    console.log("端口号为3000的服务器已经开启....");
})