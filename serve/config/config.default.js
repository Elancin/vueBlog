/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1663924509795_5459';

  // add your middleware config here
  config.middleware = [];
  
  // 设置允许跨域
  config.cors={
    origin:'*',
    allowMethods:'GET,POST,HEAD,PUT,DELETE,PATCH'
  }
  // 关闭post的安全认证
  config.security={
    csrf:{
      enable:false,
      ignoreJSON:true
    }
  }
  // 配置mysql数据库
  config.mysql={
    client:{
      host:'localhost',
      port:'3306',
      user:'root',
      password:'root',
      database:'test'
    },
    // 挂载配置
    app: true,
    Agent:false
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
