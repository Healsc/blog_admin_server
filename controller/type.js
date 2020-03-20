const Koa = require("koa");
const Router = require("koa-router");
let router = new Router();
const mongoose = require("mongoose");

router.get("/getTypes", async ctx => {
  const Type = mongoose.model("Type");
  await Type.find({})
    .exec()
    .then(res => {
      ctx.body = res;
    });
});
router.post("/delType", async ctx => {
  const Type = mongoose.model("Type");
  let name = ctx.request.body.typeName;
  await Type.remove({ typeName: name }).then(res => {
    ctx.body = res;
  });
});
router.post('/addType', async (ctx) => {
    const Type = mongoose.model('Type');
    const type = new Type(ctx.request.body);
    await type.save().then(() => {
        ctx.body = {
            1:ctx.request.body,
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
module.exports = router;
