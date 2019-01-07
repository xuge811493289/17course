var fs = require("fs");

var arrDir = [];
var arrFile = new Array();
fs.readdir("./d1",function(err,files){
  iterator(files);
})

function iterator(files){
  files.forEach(function(file){
    var path = "./d1/"+file;
    fs.stat(path,function(err,state){
      if(err){
          return ;
      }else{
        console.log(path,"是文件吗？",state.isFile());
        console.log(path,"是文件夹吗？",state.isDirectory());
      }
    })
  })
}