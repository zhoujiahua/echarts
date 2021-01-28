const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const path = require('path');
const app = new Koa();
const routers = new Router();

app.use(static(path.join(__dirname, 'public')));
app.use(routers.routes());

routers.get('/', async ctx => {
    ctx.body = 'Hi,Welcome';
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`http://localhost:${port}`));