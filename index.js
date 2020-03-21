const Koa = require('koa');
const app = new Koa();

const session = require('koa-session');
app.keys = ['some secret hurr'];
let config = require('./config.js')
app.use(session(config,app))

// 解决跨域问题
const cors = require('koa2-cors');
app.use(cors({
    //origin: ['http://localhost:8080'],
    origin: 'http://localhost:8080',
    credentials: true
}));

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// 加载路由
const Router = require('koa-router');
let user = require('./controller/user.js');
let about = require('./controller/about.js');
let type = require('./controller/type.js');
let article = require('./controller/article.js');
let works = require('./controller/works.js');

let router = new Router();
router.use('/user',user.routes());
router.use('/about', about.routes());
router.use('/type', type.routes());
router.use('/article', article.routes());
router.use('/works', works.routes());

app.use(router.routes());
app.use(router.allowedMethods());

const { connect, initSchemas } = require('./init.js');
(async () => {
    await connect();
    initSchemas();
})();




app.use(async (ctx) => {
    ctx.body = 'hello koa';
})

app.listen(3000, () => {
    console.log('start blog_admin server');
});