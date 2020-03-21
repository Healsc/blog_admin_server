const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');


router.get('/getArticleList', async (ctx) => {
    const Article = mongoose.model('Article')
    await Article.find().sort({"createDate":-1}).exec().then((res)=>{
        ctx.body = res
    }).catch((err)=>{
        ctx.body = err
    })  
});
router.post('/delArticle',async ctx=>{
    const Article = mongoose.model('Article');
    let id = ctx.request.body.id
    await Article.remove({_id:id}).exec().then(res=>{
        ctx.body = res;
    })
})
router.post('/addArticle', async (ctx) => {
    const Article = mongoose.model('Article');
    const article = new Article(ctx.request.body);
    await article.save().then(() => {
        ctx.body = {
            code: 200,
            message: '添加成功'
        };
    }).catch(err => {
        console.log(err);
        ctx.body = {
            code: 500,
            message: err
        };
    })
});
router.get('/getArticleDetail', async (ctx) => {
    const Article = mongoose.model('Article');
    await Article.findOne({ _id:ctx.query.id}).exec().then(res => {
        ctx.body = res;
    })
});

router.post('/updataIntroduction',async ctx=>{
    const Article = mongoose.model('Article');
    let id = ctx.request.body.id
    let after = ctx.request.body.after;
    await Article.updateOne({_id:id},{'$set':{'Introduction':after}}).then(res=>{
        ctx.body = res;
    })
})

router.post('/updataAuthor',async ctx=>{
    const Article = mongoose.model('Article');
  
    let after = ctx.request.body.after;
    let id = ctx.request.body.id
    await Article.updateOne({_id:id},{'$set':{'author':after}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updataTime',async ctx=>{
    const Article = mongoose.model('Article');
    let id = ctx.request.body.id
    let after = ctx.request.body.after;
    await Article.update({_id:id},{'$set':{'time':after}}).then(res=>{
        ctx.body = res;
    })
    
})
router.post('/updataTypes',async ctx=>{
    const Article = mongoose.model('Article');
    let id = ctx.request.body.id
    let after = ctx.request.body.after;
    await Article.update({_id:id},{'$set':{'types':after}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updataTitle',async ctx=>{
    const Article = mongoose.model('Article');
    let id = ctx.request.body.id
    let after = ctx.request.body.after;
    await Article.update({_id:id},{'$set':{'title':after}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updataBcImgUrl',async ctx=>{
    const Article = mongoose.model('Article');
    let id = ctx.request.body.id
    let after = ctx.request.body.after;
    await Article.update({_id:id},{'$set':{'bcImgUrl':after}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updatadescription',async ctx=>{
    const Article = mongoose.model('Article');
    let id = ctx.request.body.id
    let after = ctx.request.body.after;
    await Article.update({_id:id},{'$set':{'description':after}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updataContent',async ctx=>{
    const Article = mongoose.model('Article');
    let id = ctx.request.body.id
    let after = ctx.request.body.after;
    await Article.update({_id:id},{'$set':{'content':after}}).then(res=>{
        ctx.body = res;
    })
})
module.exports = router;