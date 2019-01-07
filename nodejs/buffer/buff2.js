var buff = new Buffer(10);
var str = "h1";

buff.write(str,0,2);
console.log(buff.slice(0,2).toString());