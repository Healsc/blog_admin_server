const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.get('/getAbout', async (ctx) => {
    const About = mongoose.model('About');
    await About.findOne().exec().then(res => {
        ctx.body = res;
    })
});

module.exports = router;