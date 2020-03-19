const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.get('/getAbout', async (ctx) => {
    const About = mongoose.model('About');
    await About.findOne().exec().then(res => {
        ctx.body = res;
    })
});
router.post('/delAboutMe',async ctx=>{
    const About = mongoose.model('About');
    let item = ctx.request.body.item;
    await About.update({aboutMe:item},{'$pull':{'aboutMe':item}}).then(res=>{
        ctx.body=res
    })
})

router.post('/addAboutMe',async ctx=>{
    const About = mongoose.model('About');
    let aboutMeInfo = ctx.request.body.aboutMeInfo;
    let id = ctx.request.body.id;
    await About.updateOne({_id:id},{'$push':{'aboutMe':aboutMeInfo}}).then(res=>{
        ctx.body = res;
    })
})


router.post('/delSkill',async ctx=>{
    const About = mongoose.model('About');
    let info = ctx.request.body.info;
    await About.updateOne({skill:info},{'$pull':{'skill':info}}).then(res=>{
        ctx.body=res
    })
})

router.post('/addSkill',async ctx=>{
    const About = mongoose.model('About');
    let info = ctx.request.body.info;
    let id = ctx.request.body.id;
    await About.updateOne({_id:id},{'$push':{'skill':info}}).then(res=>{
        ctx.body = res;
    })
})

router.post('/delProject',async ctx=>{
    const About = mongoose.model('About');
    let info = ctx.request.body.info;
    await About.updateOne({projectExperience:info},{'$pull':{'projectExperience':info}}).then(res=>{
        ctx.body=res
    })
})

router.post('/addProject',async ctx=>{
    const About = mongoose.model('About');
    let info = ctx.request.body.info;
    let id = ctx.request.body.id;
    await About.updateOne({_id:id},{'$push':{'projectExperience':info}}).then(res=>{
        ctx.body = res;
    })
})

router.post('/delPerson',async ctx=>{
    const About = mongoose.model('About');
    let info = ctx.request.body.info;
    await About.updateOne({personExperience:info},{'$pull':{'personExperience':info}}).then(res=>{
        ctx.body=res
    })
})
router.post('/addPerson',async ctx=>{
    const About = mongoose.model('About');
    let info = ctx.request.body.info;
    let id = ctx.request.body.id;
    await About.updateOne({_id:id},{'$push':{'personExperience':info}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updataName',async ctx=>{
    const About = mongoose.model('About');
    let before = ctx.request.body.before;
    let after = ctx.request.body.after;
    /* await About.find().exec().then(res =>{
        ctx.body = {
            1:before,
            2:after
        }
    }) */
    await About.update({name:before},{'$set':{'name':after}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updataEmail',async ctx=>{
    const About = mongoose.model('About');
    let before = ctx.request.body.before;
    let after = ctx.request.body.after;
    await About.update({email:before},{'$set':{'email':after}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updataQq',async ctx=>{
    const About = mongoose.model('About');
    let before = ctx.request.body.before;
    let after = ctx.request.body.after;
    await About.update({qq:before},{'$set':{'qq':after}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updataTel',async ctx=>{
    const About = mongoose.model('About');
    let before = ctx.request.body.before;
    let after = ctx.request.body.after;
    await About.update({tel:before},{'$set':{'tel':after}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updataSchool',async ctx=>{
    const About = mongoose.model('About');
    let before = ctx.request.body.before;
    let after = ctx.request.body.after;
    await About.update({school:before},{'$set':{'school':after}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updataSchoolEN',async ctx=>{
    const About = mongoose.model('About');
    let before = ctx.request.body.before;
    let after = ctx.request.body.after;
    await About.update({schoolEN:before},{'$set':{'schoolEN':after}}).then(res=>{
        ctx.body = res;
    })
})
router.post('/updataMajor',async ctx=>{
    const About = mongoose.model('About');
    let before = ctx.request.body.before;
    let after = ctx.request.body.after;
    await About.update({major:before},{'$set':{'major':after}}).then(res=>{
        ctx.body = res;
    })
})
module.exports = router;