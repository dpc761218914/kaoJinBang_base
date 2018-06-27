/**
 * 功能： nzd与java同行的node模块
 * 作者： dpc
 * 日期： 2018/6/27.
 */
//引入nzd配置
var nzd_config = require("../config/nzd_config.js");

var userServices_opt={
    application:{name:nzd_config.application},
    register:nzd_config.register,
    dubboVer:nzd_config.dubboVer,
    root:nzd_config.root,
    dependencies:{
        Foo:{
            interface:'com.jzy.edu.exam.service.UserService',
            timeout:6000,
            methodSignature: {
                getById : (id) => [ {'$class': 'int', '$': id} ],
                listUser : (parameters,order,offset,limit) => [{'$class': 'java.util.Map', '$': parameters},{'$class': 'java.lang.String', '$': order},
                    {'$class': 'int', '$': offset},{'$class': 'int', '$': limit} ],
                saveUser : (dto) => [ {'$class': 'com.jzy.edu.exam.dto.UserDTO', '$': dto} ],
                saveUserJson : (json) => [ {'$class': 'java.lang.String', '$': json} ],
                saveBook : (book) => [ {'$class': 'com.jzy.edu.exam.dto.Book', '$': book} ],
            }
        },
    }
};

exports.userServices_opt=userServices_opt;

