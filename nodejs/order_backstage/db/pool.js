require('babel-polyfill');
let mysql = require('mysql');
let pool = global.pool;

// 创建一个连接池
if(!pool){
	pool = mysql.createPool({
		database:'forum',
		user:'root',
		password:'root'
	});
	//将连接挂在到global
	global.pool = pool;
}

// 链接到连接池方法
function toConnect(){
	return new Promise(function(resolv,reject){
		// mysql连接池中的方法
		pool.getConnection(function(err,conn){
			if(!err){
				resolv(conn);
			}else{
				reject(err);
			}
		})
	})
}

module.exports = { toConnect };