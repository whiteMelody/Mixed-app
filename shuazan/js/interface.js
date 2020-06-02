"use strict";

/**
 * 接口配置
 * @type {{server_url: string, time_out: number}}
 */
var ajaxConfig = {
    server_url: "https://www.31un.com/App/",
    time_out: 3000,
    lazy: 500,
    type: 4,
    debug: true
};

// if (ajaxConfig.debug == true) {
//     ajaxConfig.server_url = "http://119.23.41.193/App/";
// }else if(ajaxConfig.debug == false){
//     ajaxConfig.server_url = "https://www.31un.com";
// }

var baseAjax = {

    /**
     * 新类型列表
     * @param callback
     * @param majia  马甲4
     * @param web
     */
    typeList: function typeList(majia,web,callback) {
        $.ajax({
            type: "post",
            url: ajaxConfig.server_url + "Type/newIndex.html",
            data: {majia:majia, web: web},
            dataType: "json",
            success: function success(data) {
                if (data.code == 4000) {
                    callback(data);
                } else {
                    callback(false, data.msg);
                }
            }
        });
    },


    /**
     * 登录
     * @param callback
     * @param web
     * */
    login: function typeList(web,callback) {
        $.ajax({
            type: "post",
            url: ajaxConfig.server_url + "Account/h5Login.html",
            data: { web: web},
            dataType: "json",
            success: function success(data) {
                if (data.code == 4000) {
                    callback(data);
                } else {
                    callback(false, data.msg);
                }
            }
        });
    },

    /**
     * 获取订单列表
     * @param callback
     * @param user_id   用户user_id ( 如果user_id为空字符串表示获取所有用户的订单列表 )
     * @param web       web端查询时传1
     * */
    orderList: function orderList(user_id,web,callback) {
        if(user_id) {
            var data = {user_id:user_id,web:web}
        }else {
            var data = {user_id:"",web:web}
        }
        $.ajax({
            type: "post",
            url: ajaxConfig.server_url + "Order/orderList.html",
            data: data,
            dataType: "json",
            success: function success(data) {
                if (data.code == 4000) {
                    callback(data);
                } else {
                    callback(false, data.msg);
                }
            }
        });
    },


    /**
     * 获取说说列表
     * @param callback
     * @param qq
     *
     * */
    getShuoshuo: function getShuoshuo(qq,callback) {
        $.ajax({
            type: "post",
            url: ajaxConfig.server_url + "Say/index.html",
            data: {qq:qq},
            dataType: "json",
            success: function success(data) {
                if (data.code == 400 || data.code == 4000) {
                    callback(data);
                } else {
                    callback(false, data.msg);
                }
            }
        });
    },


    /**
     * 赞列表
     * @param callback
     * @param type  赞类型
     *
     * */
    goVisit: function goVisit(type,callback) {
        $.ajax({
            type: "post",
            url: ajaxConfig.server_url + "Zan/index.html",
            data: {type:type},
            dataType: "json",
            success: function success(data) {
                console.info(data.code);
                if (data.code == 400) {
                    callback(data);
                } else {
                    callback(false, data.msg);
                }
            }
        });
    },

    /**
     * 下单刷空间访问量
     * @param callback
     * @param type  赞类型
     * @param qq    qq号
     * @param num   赞数量
     * */
    buy: function buy(type,qq,num,callback) {
        $.ajax({
            type: "post",
            url: ajaxConfig.server_url + "Order/webPrepare.html",
            data: {type:type,qq:qq,num:num},
            dataType: "json",
            success: function success(data) {
                console.info(data.code);
                if (data.code == 400) {
                    callback(data);
                } else {
                    callback(false, data.msg);
                }
            }
        });
    },


    /**
     * 获取昵称列表
     * @param callback
     * @param p  第几页
     * */
    getNickName: function getNickName(p,callback) {
        $.ajax({
            type: "post",
            url: ajaxConfig.server_url + "Zan/nickname.html",
            data: {p:p},
            dataType: "json",
            success: function success(data) {
                console.info(data.code);
                if (data.code == 4000) {
                    callback(data);
                } else {
                    callback(false, data.msg);
                }
            }
        });
    },


    /**
     * 获取头像列表
     * @param callback
     * @param p  第几页
     * */
    getHeadList: function getHeadList(p,callback) {
        $.ajax({
            type: "post",
            url: ajaxConfig.server_url + "Zan/img.html",
            data: {p:p},
            dataType: "json",
            success: function success(data) {
                console.info(data.code);
                if (data.code == 4000) {
                    callback(data);
                } else {
                    callback(false, data.msg);
                }
            }
        });
    },

    /**
     * 获取售后QQ群号
     * @param callback
     * */
    getQQGroup: function getQQGroup(callback) {
        $.ajax({
            type: "post",
            url: ajaxConfig.server_url + "Qqgroup/getQQGroup.html",
            data: {},
            dataType: "json",
            success: function success(data) {
                console.info(data.code);
                if (data.code == 4000) {
                    callback(data);
                } else {
                    callback(false, data.msg);
                }
            }
        });
    },



    /**
     * 购买
     * @param type         赞类型
     * @param pay_type     支付类型
     * @param account      充值账户
     * @param worksID      作品ID( 快手播放和快手双击需要传 )
     * @param num          充值次数
     * @param time         时间戳
     * @param sign         签名
     * @param callback     回调函数
     * */
    webPrepare: function webPrepare(type, pay_type, account, worksID, num, time, sign, callback) {
        var dataObject = {};
        // 快手
        if(type == 30 || type == 31) {
            dataObject = {
                type: type,
                pay_type: pay_type,
                ks_user: account,
                ks_photo: worksID,
                num: num,
                time: time,
                sign: sign
            };
        }
        if(type == 29) {
            dataObject = {
                type: type,
                pay_type: pay_type,
                ks_user: account,
                num: num,
                time: time,
                sign: sign
            };
        }
        // 全民k歌
        if(type == 32 || type == 33 || type == 34 || type == 35) {
            dataObject = {
                type: type,
                pay_type: pay_type,
                qm_mid: account,
                num: num,
                time: time,
                sign: sign
            };
        }
        // QQ相关
        if(type == 2 || type == 7 || type == 16) {
            dataObject = {
                type: type,
                pay_type: pay_type,
                qq: account,
                num: num,
                time: time,
                sign: sign
            };
        }
        if(type == 3 || type == 5){
            dataObject = {
                type: type,
                pay_type: pay_type,
                qq: account,
                pkid:worksID,
                num: num,
                time: time,
                sign: sign
            };
        }
        console.info(JSON.stringify(dataObject));
        $.ajax({
            type: "post",
            url: ajaxConfig.server_url + "Order/webPrepare.html",
            data: dataObject,
            dataType: "json",
            success: function success(data) {
                alert(JSON.stringify(data));

                if (data.code == 4000 || data.code == 400) {
                    callback(data);
                } else {
                    callback(false, data.msg);
                }
            }
        });
    }
};


//调用支付的函数
var pay = {
    payFunction:function (type, pay_type, account, worksID, num, call) {
        var time = Math.round(new Date().getTime() / 1000);
        var sign = md5(time + 'kjoxncvbeklasndfwefrz');
        baseAjax.webPrepare(type, pay_type, account, worksID, num, time, sign, function (data,msg) {
            call(data);
        });
    }
};