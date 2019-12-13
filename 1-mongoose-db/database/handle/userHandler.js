const {userSchema}=require('../schema');
const model=require('../model')
const userModel=model('users',userSchema)
const users = {
  add (data) {
  	return new Promise((resolved,rejected)=>{
  		userModel.find({},(err,docs)=>{
  			const f=docs.some(item=>data.username==item.username)
  			if(f){
  				resolved({
  					status:2,
  					info:'用户名重复'
  				})
  			}else{
  				const userEnity=new userModel(data)
  				userEnity.save(err=>{
  					if(err){
  						rejected({
  							status:0,
  							info:'注册失败'
  						})
  					}else{
  						resolved({
  							status:1,
  							info:'注册成功'
  						})
  					}
  				})
  			}
  		})
  	})
  },
  del () {},
  update(data) {
     return new Promise((resolved,rejected)=>{
          userModel.find({username:data.username,password:data.password},(err,docs)=>{
           if(docs.length!=0){
            userModel.findById(docs[0]._id,(err,doc)=>{
              doc.password=data.newpassword;
              doc.save(err=>{
                if(err){
                  rejected({
                    status:0,
                    msg:'修改失败'
                  })
                }else{
                  resolved({
                    status:1,
                    msg:'修改成功'
                  })
                }
              })
            })
            }else{
              resolved({
                status:2,
                msg:'账号或密码不正确，无法修改'
              })
            }
          })
     })
  },
  query (data) {
    return new Promise((resolved,rejected)=>{
      userModel.find({},(err,docs)=>{
        const f=docs.some(item=>(item.username==data.username&&item.password==data.password))
        if(f){
          resolved({
            status:1,
            msg:"登录成功"
          })
        }else{
          rejected({
            status:2,
            msg:"登陆失败,用户名或是密码不正确"
          })
        }
      })
    }).catch((err)=>{
      return err;
    })
  }
}

module.exports = users