var fs = require("fs");

// 读取文件1，并将文件1的内容写入到文件2
fs.readFile("./fd1.js",function(err,data){
  if(err){return;}
  fs.writeFile("./file1.txt",data,function(err){
    if(err){return;}
    console.log("写入成功");
  })
})

console.log("end");