require('babel-polyfill');
var pool = require('./pool');

module.exports = {
	//执行所有的增删改查
	All(sql){
		return new Promise(function(resolv,reject){
			pool.toConnect().then(function(conn){
				// 先保存一次连接池的状态，用于随后的释放操作
				connection = conn;
				conn.query(sql,function(err,results){
					if(!err){
						resolv(results);
					}else{
						reject(err);
					}
				})
			}).catch(function(err){
				console.log('catch');
				reject(err);
			}).finally(function(){
				connection.release();
				console.log('释放完成');
			})
		})
	}
}