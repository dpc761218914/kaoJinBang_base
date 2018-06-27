/**
 * 功能： 用户端路由接口路由文件
 * 作者： dpc
 * 日期： 2018/6/3.
 */

var User = require('../controller/user/user');
var base_url = require('../config/url_config');


//v1版本url
var url=base_url.user_url.url_v1;


module.exports = function(app) {

    //进入index页面
    app.get(url+'/index',User.index);
    //返回mock各种格式的测试数据
    app.get(url+'/mock_users', User.mockUsers);

};
