// 缓冲区对象
var buff = new Buffer("hello");
console.log(buff);

var json = JSON.stringify(buff);
console.log(json);

var obj = JSON.parse(json);
console.log(obj);

var bf = new Buffer(obj);
console.log(bf);