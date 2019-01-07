var foo = require("./foo.js");
console.log(foo.msg);
console.log(foo.info);
console.log(foo.test());



var People = require("./People.js");
var xiaoming = new People("xiaoming","男","12");
xiaoming.sayHello();
