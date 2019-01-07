var querystring = require("querystring");

var str = "username=terry&passwd=123&gender=male";

// 1.将字符串解析为对象
console.log("parse：",querystring.parse(str));
// 2.将一个对象序列化成一个字符串
console.log("stringify：",querystring.stringify(querystring.parse(str)));
// 3.escape可使传入的字符串进行编码
console.log("escape：",querystring.escape(str));
// 4.unescape方法可将含有%的字符串进行解码
console.log("unescape：",querystring.unescape(querystring.escape(str)));