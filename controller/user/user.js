
/**
 * 功能：用户控制器
 * 作者： dpc
 * 日期： 2018/5/9.
 */
var Mock = require('mockjs');

var log4js = require('log4js');
log4js.configure('./config/log4j.json');
var logger = require('log4js').getLogger("user");
//引入nzd配置
var nzd_config_test = require("../../nzd_controller/userServices_opt.js");
const nzd=require('node-zookeeper-dubbo');
opt=nzd_config_test.userServices_opt;
//为opt赋值
opt.java = require('js-to-java');
//定义dubbo对象
var Dubbo=new nzd(opt);

/**
 * Created by Administrator on 2018/6/3.
 */
exports.index= function(req, res) {
    //配置日志模块
    logger.info('用户进入主页!测试日志等级info');
    //调用dubbo函数
    Dubbo.Foo
        .getById(1)
        .then( //执行操作成功
            function(data){
            res.send(data);
        })
        .catch(//执行操作失败
            function(err){
            es.send(err);
        })

    console.log("index"+nzd_config_test.userServices_opt.register);
    res.json({"index":"index"});
};

/**
 * Created by Administrator on 2018/5/9.
 * MOCK user测试
 */

exports.mockUsers= function(req, res) {
    //声明一个随机生成函数
    var Random = Mock.Random;
    res.json(Mock.mock({
        "fixed":"这是固定好的数字",
        "string|3": "★★★",
        "image":Random.image('900x200', '#50B347', '#FFF', 'Mock.js'),  //模拟发送图片，可以控制普片颜色，图片大小，文字
        "data":Random.date('yyyy-MM-dd'),    //模拟时间  可以发送各种格式时间
        "text":'@paragraph',                  //模拟发送段落， 可以控制长度
        "sentence":Mock.mock('@sentence(5)'),   //模拟发送五个词的句子
        "word":Mock.mock('@word'),              //模拟发送单词
        "title":Mock.mock('@title(5)'),   //模拟发送标题
        "cParagraph":Mock.mock('@cparagraph(8)'), //模拟发送中文段落
        "cSentence": Mock.mock('@csentence()'),           //模拟发送中文句子
        "cWord":Mock.mock('@cword("零一二三四五六七八九十")'),   //模拟一个中文词语
        "cTitle": Mock.mock('@ctitle(5)'),     //模拟中文标题
        "cName": Mock.mock('@cname'),          //模拟用户姓名，可以单独模拟姓、也可以模拟名
        "cEmail":Mock.mock('@email'),         //模拟邮箱
        "cAddress":Mock.mock('@county(true)'),   //模拟地址
        "number":Mock.mock('@increment(100)'),    //模拟比一百大的数组
        "sectionNumber|1-100": 100,                //模拟1到100的随机数
        "boolean|1": true,                       //模拟boolean类型数据
        "objects|2":  {                          //模拟返回两个对象数组
            "310000": "上海市",
            "320000": "江苏省",
            "330000": "浙江省",
            "340000": "安徽省"
        },
        "array|1": [                              //模拟返回数组类型数据，从数组中取出随机数
            "AMD",
            "CMD",
            "UMD"
        ]

    }));
};

