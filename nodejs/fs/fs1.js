// 模块化  fs.module.exports = {};
var fs = require("fs");
// 以同步的方式读取fd1.js文件中的内容，将其转换为二进制保存到buff中
/*var buff = fs.readFileSync("./fs1.js");
console.log(buff);
console.log(buff.toString());*/

// 以异步的方式读取文件，将其内容转换为二进制文件保存到buff中

/*var buff = fs.readFile("./fd1.js",function(err,data){
  if(err){return ;}
  console.log(data);
  console.log(data.toString());
})*/


// 如果是同步读取文件的话，那么肯定最后一个才会打印end
// 如果是异步读取文件的话，那么可能end不是最后一个打印
console.log("end");

