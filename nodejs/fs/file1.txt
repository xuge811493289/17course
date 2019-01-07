var fs = require("fs");

// 创建文件夹
/*
fs.mkdir("./d1",function(err){
  if(err){
    return ;
  }
  console.log("创建成功");
})*/

// 创建空文件，并写入内容123
fs.writeFile("./d1/c.txt","123",function(err){
  if(!err){
    console.log("创建成功");
  }else{
    console.log(err);
  }
})

