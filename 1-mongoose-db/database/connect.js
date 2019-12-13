const mongoose = require('mongoose');

const {DB_URL}=require('./constant.js')


function connect(){
	mongoose.connect(DB_URL,{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},err=>{
		if(err){
			console.log(err)
		}else{
			console.log('数据库连接成功');
		}
	})
}

module.exports=connect
