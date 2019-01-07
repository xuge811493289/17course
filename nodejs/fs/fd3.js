var fs = require("fs");

// fs.exists检测是否存在该文件
fs.exists("./d1/d.txt",function(exaits){
  console.log(exaits)
})

// fs.realpath获取真实路径
fs.realpath("./d1",function(err,path){
  if(err){return ;}
  console.log(path);
})