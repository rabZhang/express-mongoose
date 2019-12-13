  /* 
  这个就是数据库操作模块
  * 什么是mongoose?
    * 它就是一个用于操作MongoDB数据库的一个对象，是一个封装对象
  * mongoose使用？
    *  1. 引入mongoose
    *  2. 连接数据库
    *  3. 创建骨架【 定义字段 】   
    *  4. 创建模型 -> 用于操作数据库 
    *  5. 创建实体 -> 用于数据库增加操作
*/
//引入mongoose

  const mongoose = require('mongoose')

//连接数据库
  const connect=require('./connect');
  connect();
// 创建骨架

  const {users,shops}=require('./handle')


 module.exports = {
    users,shops
  }
// const db=mongoose.connection;

// // db.on('error',(err)=>{
// //     console.log('连接错误')
// // });
// // db.on('open', function() {
// //   console.log('连接ok')
// // });

// let UserSchema=new mongoose.Schema({
// 	name:String,
// 	pass:String,
// 	test:String
// })
// let usermodel=mongoose.model('Usertest',UserSchema);
// let user=new usermodel({"name":"weiqiang","pass":"dasdasd","test":"sadsadas"});
// user.save();
