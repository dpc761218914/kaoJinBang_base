/**
 * 功能：考金榜项目入口文件
 * 作者： dpc
 * 日期： 2018/5/27.
 */
var express = require('express');
var app = express();



//使用user文件处理user路由
require('./routers/user')(app);

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});