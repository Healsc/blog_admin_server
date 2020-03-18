const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/loginUser',async(ctx)=>{
    let loginUser = ctx.request.body;
    let userName = loginUser.userName;
    let password = loginUser.password;
    const User = mongoose.model('User')
    await User.findOne({userName:userName}).exec().then(async (res)=>{
        if(res){
            if(password == res.password){
                ctx.body={
                    code:200,
                    message:"登录成功",
                    userName:res.userName
                }
            }else{
                ctx.body={
                    code:"201",
                    message:"密码错误"
                }
            }
        }else{
            ctx.body={
                code:202,
                message:"用户名不存在"
            }
        }
    })
})
module.exports = router;