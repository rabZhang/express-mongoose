const express =require('express')
const router =express.Router();
const {users} =require('../database');

router.route('/modify')
	.post(async (req,res,next)=>{
		const data =req.body;
		const results=await users.update(data);
		res.json(JSON.stringify({
			status:results.status,
			msg:results.msg
		}))
	})

module.exports=router