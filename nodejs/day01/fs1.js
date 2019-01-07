var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
  // 不处理小图标
  if(req.url == "/favicon.ico"){
    return ;
  }
  
  // 读文件夹
  /*
  错误案例
  var wenjianjia = [];
  fs.readdir("./album",function(err,files){
    var length = files.length;
    for(var I=0;I<files.length;I++){
      var thefilemame = files[I];
      fs.stat("./album/"+thefilemame,function(err,stats){
        if(stats.isDirectory){
          wenjianjia.push(thefilemame);
        }
      })
    }
  })*/
  // 正确案例
  fs.readdir("./album/",function(err,files){
    // files是存放文件或者文件夹的数组
    var wenjianjia = [];
    // 迭代
    function iterator(i){
      if(i==files.length){
        console.log(wenjianjia);
        return ;
      }
      fs.stat("./album/"+files[i],function(err,stats){
        if(stats.isDirectory()){
          wenjianjia.push(files[i]);
        }
        iterator(i+1);
      })
    }
    iterator(0)
    res.end();
  })
}).listen(3000,"127.0.0.1");