'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/blogs', controller.blogs.bloglist);
  router.get('/singleBlog', controller.singleBlog.singlBlog);
  router.get('/addblog', controller.blogs.addblog);
};
