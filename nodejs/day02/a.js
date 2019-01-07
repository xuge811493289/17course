var b = require("./test/b.js");
var fs = require("fs");


console.log(__dirname);
fs.readFile(__dirname+"/1.txt",function(err,data){
  if(err){
    return ;
  }
  console.log(data.toString());
})
