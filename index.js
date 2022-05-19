const Koa = require('koa');
const bodyParser = require('koa-bodyParser');
const router = require('koa-router')();
const blogManage = require('./blog_manage/blogManage.js')
const app = new Koa();
app.use(bodyParser());
app.use(async (ctx, next)=> {
  ctx.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
});
router.get('/api/getContactInfor',async (ctx, next) => {
  ctx.response.body = 'hhhhhh';
});
router.use('/api/blogManage',blogManage);
app.use(router.routes());
app.listen(8080);
console.log('监听8080端口');