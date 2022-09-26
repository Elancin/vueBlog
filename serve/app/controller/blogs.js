'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 总览
  async bloglist() {
    const { ctx } = this;
    const data=await this.app.mysql.query('select * from blog')
    // console.log(data);
    ctx.body = data;
  }
  // detailsBlog
  // 详情
  async singleBlog() {
    const { ctx } = this;
    const { id } = this.ctx.request.query;
    const data= await this.app.mysql.query('select * from blog where id=1;',
    )
    console.log(id);
    // console.log(data);
    ctx.body = data;
  }
    // 添加
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
