
const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.get('/getWorksList',async (ctx)=>{
    const Works = mongoose.model('Works');
    await Works.find().sort({"createDate":-1}).exec().then((res)=>{
        ctx.body = res;
    })
})
router.get('/getWorkDetail',async (ctx)=>{
    const Works = mongoose.model('Works');
    await Works.findOne({_id:ctx.query.id}).exec().then((res)=>{
        ctx.body = res;
    })
})
router.post('/updataWorkTitle',async ctx=>{
    const Works = mongoose.model('Works');
    let id = ctx.request.body.id
    let info = ctx.request.body.info;
    await Works.updateOne({_id:id},{'$set':{'title':info}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updataWorkTime',async ctx=>{
    const Works = mongoose.model('Works');
    let id = ctx.request.body.id
    let info = ctx.request.body.info;
    await Works.updateOne({_id:id},{'$set':{'time':info}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updataWorkDescription',async ctx=>{
    const Works = mongoose.model('Works');
    let id = ctx.request.body.id
    let info = ctx.request.body.info;
    await Works.updateOne({_id:id},{'$set':{'description':info}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updataWorkUrl',async ctx=>{
    const Works = mongoose.model('Works');
    let id = ctx.request.body.id
    let info = ctx.request.body.info;
    await Works.updateOne({_id:id},{'$set':{'url':info}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/delWork',async ctx=>{
    const Works = mongoose.model('Works');
    let id = ctx.request.body.id
    await Works.remove({_id:id}).exec().then(res=>{
        ctx.body = res;
    })
})
module.exports = router;