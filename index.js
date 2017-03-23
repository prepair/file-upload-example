var app = require('koa')();
var multer = require('koa-multer');
var serve = require('koa-static-folder');

app.use(multer({ dest: './uploads/'}));
app.use(function *(next) {
  if (this.request.method == 'POST') {
    console.log(this.request.body, this.request);
  }
  yield next;
});
app.use(serve('.'));
console.log('listening on port 5000');
app.listen(5000)
