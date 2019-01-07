var fs = require("fs");
// path - 文件的路径。
// flags - 文件打开的行为。
fs.open(__dirname + '/fd1.js', 'r', '0666', function (err, fd) {
  if(err){return;}
  // 第二个fd为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄
  console.log(fd);
})