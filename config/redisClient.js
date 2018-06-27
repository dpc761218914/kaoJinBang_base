/**
 * 功能： 缓存模块，从ioredis_express项目中导出
 * 作者： dpc
 * 日期： 2018/5/27.
 * 用法，在使用的页面引入 var redis = require('../config/redisClient');接着调用即可。
 */


var Redis = require('ioredis');
var redis = new Redis();
module.exports = redis;

