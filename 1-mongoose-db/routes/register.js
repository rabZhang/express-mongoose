const express=require('express');
const router=express.Router();
const {users}=require('../database')
router.route('/register')
	.post(async (req,res,next)=>{
		const results=await users.add(req.body);
		res.json(
			JSON.stringify({
				status:results.status,
				info:results.info
			})
		)
	})

module.exports=router	