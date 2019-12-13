const HOST='127.0.0.1' //本地服务器域名

//const HOST ='www.baidu.com' //以后项目上线需要的定位地址方便修改

const DB_NAME=1910

const DB_URL=`mongodb://${ HOST }:27017/${ DB_NAME }`;


module.exports={
	DB_URL
}