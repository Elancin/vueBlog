'use strict';

const Controller = require('egg').Controller;

class singleController extends Controller {
  async singlBlog() {
    const { ctx } = this;
    const data=await this.app.mysql.query('select * from blog where id=1')
    // console.log(data);
    ctx.body = data;
  }
}

module.exports = singleController;
