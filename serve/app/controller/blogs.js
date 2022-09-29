'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 总览
  async bloglist() {
    const { ctx } = this;
    const data=await this.app.mysql.query('select * from blog')
    ctx.body = data;
  }

    // 详情
    async singleBlog() {
      const { ctx } = this;
      const { id } = this.ctx.request.body;
      console.log('singleid',id);
      ctx.body = id;
      
    }

  async detailBlog() {
    const { ctx } = this;
    const data= await this.app.mysql.query('select * from blog where id=1')
    ctx.body = data;
  }
    // 添加
    async addblog(){
      const { ctx } = this;
      const { title, content } = this.ctx.request.body;
      const data = await this.app.mysql.query(
        "insert into blog (title, content) values (?, ?)",
        [title, content]
      );
      console.log(title,content);

      ctx.body = data;
    }
}

module.exports = HomeController;
