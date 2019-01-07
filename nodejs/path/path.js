var path = require("path");
var oldpath = "./node/day01/../day02";
/*
path.normalize输出规范格式的path字符串,并返回该字符串
*/
var newpath = path.normalize(oldpath);
console.log(newpath);


/*
path.join方法拼接路径，并返回该路径
*/ 
var join_path = path.join(__dirname,"/../day02");
console.log(join_path);
/*
path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径
*/
var resolve_path = path.resolve(__dirname, '/../day02');
console.log(resolve_path);
/*
path.extname输出后缀名，并返回后缀名
*/ 
var extname = path.extname("/../day02/index.html");
console.log(extname);
/*
path.dirname() 方法返回一个 path 的目录名，返回文件前面的目录
*/
var dirname = path.dirname("/abs/ddfff/index.html");
console.log(dirname);
/*
path.basename() 方法返回一个 path 的最后一部分
*/
var basename = path.basename('/foo/bar/baz/asdf/quux.html');
console.log(basename);
var base = path.basename('/foo/bar/baz/asdf/quux.html', '.html');
console.log(base);
