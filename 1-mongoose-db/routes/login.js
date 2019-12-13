const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const path=require('path');
const fs=require('fs');
const {users}=require('../database');
router.route('/login')
	.post(async (req,res,next)=>{
		let results=req.body;
		if(!results.token){
			const private_key=fs.readFileSync(path.join(__dirname,'..','rsa/private_key.pem'))

			const token =jwt.sign({username:results.username}, private_key, { algorithm: 'RS256'})

			const searchitem = await users.query(results);
			res.json(
				JSON.stringify({
				status:searchitem.status,
				msg:searchitem.msg,
				token:searchitem.status==1 && token || '用户名密码错误，token不返回'
			}))
		}
	})

module.exports=router;