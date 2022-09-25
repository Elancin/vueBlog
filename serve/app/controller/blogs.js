'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async bloglist() {
    const { ctx } = this;
    const data=await this.app.mysql.query('select * from blog')
    // console.log(data);
    ctx.body = data;
  }
  async addblog(){
    const { ctx } = this;
    const { title, content } = this.ctx.request.query;
    const data = await this.app.mysql.query(
      "SELECT title, content FROM blog WHERE (title = ? && content = ?);",
      [title, content]
    );
    ctx.body = data;
  }
}

module.exports = HomeController;
