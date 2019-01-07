// buffer专门处理二进制的类

var str = "hello world";
// 创建一个缓冲区
var buff = new Buffer(str);

console.log(str);
console.log(buff);
console.log("str",str.length);
console.log("buff",buff.length);
