'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async bloglist() {
    const { ctx } = this;
    const data=await this.app.mysql.query('select * from blog')
    // console.log(data);
    ctx.body = data;
  }
}

module.exports = HomeController;
