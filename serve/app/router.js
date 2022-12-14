'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/blogs', controller.blogs.bloglist);
  router.post('/addblog', controller.blogs.addblog);
  router.get('/detailBlog/', controller.blogs.detailBlog);
};
