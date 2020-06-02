
import Base from './base.js'
import superagent from 'superagent';
import Md5 from './md5_ch.js'

/**
 * 接口配置
 * @type {{server_url: string, time_out: number}}
 */

const ajaxConfig = {
  server_url: 'http://192.168.8.169/PhpstormProjects/Ball/index.php',
  time_out: 3000,
  lazy: 200,
  source: 'wap',
  type: '1',
  debug: false
};

if (ajaxConfig.debug == true) {
  ajaxConfig.server_url = 'http://192.168.8.169/PhpstormProjects/Ball/index.php';
} else if (ajaxConfig.debug == false) {
  ajaxConfig.server_url = 'https://www.31un.com';
}

export default {

  /**
   * 获取用户ID
   * @returns {number}
   */
  getUserId() {

    // return '09081d3e210e4bfebd59ff2c33b6f559';

    const userInfo = Base.getCookie("userInfo");
    if (Base.isNull(userInfo)) {
      return 0;
    } else {
      return JSON.parse(userInfo).user_id;
    }
  },

  /**
   * 获取渠道/来源
   */
  getSource(){
    let tmp =  Base.getParmar('source');

    if(Base.isNull(tmp)){
      return 'wap';
    }
    // source #/ page
    let i1 = tmp.indexOf('&');

    if(i1 == -1){

      //继续查询i1
      i1 = tmp.indexOf('#/');
      if(i1 == -1){
        i1 = tmp.indexOf('#');
      }
    }

    if(i1 == -1){
      return 'wap';
    }

    return tmp.substring(0,i1);
  },

  getSourceName(){
    let source = this.getSource();

    if(source == 'wap'){
      return '稳赢体育';
    }else if(source == 'wyjc'){
      return '稳赢体育';
    }else if(source == 'tianqi'){
      return '中央天气预报';
    }

    return '稳赢体育';

  },

  getLazy(){
    return ajaxConfig.lazy;
  },

  /**
   * 获取设备ID
   */
  getDeviceID() {

    let deviceID = Base.getCookie('deviceID');
    if (Base.isNull(deviceID)) {
      deviceID = Base.getUuid();
      Base.setCookie('deviceID', deviceID, 365);
    }
    return deviceID;
  },

  /**
   * 获取用户余额
   */
  getBalance() {

    const userInfo = Base.getCookie("userInfo");
    if (Base.isNull(userInfo)) {
      return 0;
    } else {
      return JSON.parse(userInfo).coinsQty;
    }
  },

  /**
   * 获取通用签名
   * @returns {string}
   */
  getSign(params) {

    let arr = [];

    let str = '';

    if (Base.isNull(params)) {
      params = {};
    }
    $.each(params, (key, value) => {
      arr.push(key);
    });

    arr = arr.sort();

    for (let i = 0; i < arr.length; i++) {
      str += `${params[arr[i]]}`;
    }

    str = this.privateKey(str,[107,101,121,61]);
    params.signKey = str.split('.6419')[0];
    params.privateKey = str.split('.6419')[1];
    params.sha1Code =  str.split('529.')[0];
    params.md5Code =  str.split('529.')[1];
    params.s = str.split('@@@')[0];
    params.key = str.split('@@@')[1];

    return params;
  },

  privateKey(s,arr){
    let r = '';

    if(!arr)
      arr.split(",");

    for(var i=0; i<arr.length; i++){
      r += String.fromCharCode(arr[i]);
    }

    return this.privateLottery(s+r);
  },

  privateLottery(r){
    return this.groupKey(r,['01101100','01101111','01110100','01110100','01100101','01110010','01111001']);
  },

  groupKey(r,arr){

    if(!arr){
      arr.split(",");
    }

    for(var i=0; i<arr.length; i++){
      r += String.fromCharCode(this.formateTwoInt(arr[i]));
    }

    return this.privateStr(r);
  },

  symbolKey(s){
    return [parseInt(s.split('.')[0], 8),parseInt(s.split('.')[1], 8)];
  },

  stringKey(arr){
    let r = '';

    if(!arr)
      arr.split(",");

    for(var i=0; i<arr.length; i++){
      r += String.fromCharCode(arr[i]).toLowerCase();
    }
    return r;
  },

  privateS1(r){

    r = Md5(r) + this.privateS5(2,6,3);


    let s = this.symbolKey('205.49');

    r += s;

    return this.privateS2(r);

  },

  privateS2(r){
    r = this.privateS3(r);
    return r + Base.factorial(101);
  },

  privateS3(r){
    return r + this.privateS4('23.64');
  },

  privateS4(r){
    return r + this.symbolKey(r);
  },

  privateS5(num, i1, i2){

    let n = 1;

    let s = '';

    for(let i=0; i<i1; i++){
      n*= num;
    }

    for(let i=0; i<i2; i++){
      s+= String.fromCharCode(n);
    }

    return s;
  },

  privateStr(r){
    let s = this.symbolKey('100.41');

    s = ['@','!'];

    r += s[0];

    let v = Base.group([true, false, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a' , 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'z'], s.length).length + Base.factorial(0) + s.length;

    r+= v;

    r+= this.stringKey([67,66,83]);

    r+= s[1];

    return this.privateS1(r);

  },

  /**
   * ascii转码
   */
  formateAscii(k){
    return String.fromCharCode(k);
  },

  /**
   * 二进制转换
   */
  formateTwoInt(s){
    return  parseInt(s,2);
  },


  /**
   * 互推作品配置选项
   * @param callback
   */
  getConfig(callback) {
    superagent
      .post(ajaxConfig.server_url + "/Ks/Hutui/config")
      .type('form')
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body.data);
        }else{
          callback(false, res.body.msg);
        }
      })
  },

  /**
   * 获取用户作品
   * @param userid
   * @param callback
   */
  getUserVideo(callback) {
    superagent
      .post(ajaxConfig.server_url + "/Ks/Hutui/getUserVideo")
      .type('form')
      .send({
        userid: this.getUserId(),
      })
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body.data);
        }else{
          callback(false, res.body.msg);
        }
      })
  },

  /**
   * 添加互推任务
   * @param userid                  用户id(快手id)
   * @param photo_id                互推作品id
   * @param cover_img               互推作品封面图片链接
   * @param comment                 他人评论指定内容
   * @param limit_num               互推限制(数量限制)
   * @param like_score              点赞奖励积分(评论不用传)
   * @param comment_score           评论奖励积分(点赞不用传)
   * @param type                    互推任务类型(like:点赞 cmnt:评论)
   * @param callback
   */
  htAddTask(photo_id, cover_img, comment, limit_num, point, type, callback) {

    let data = {
      userid: this.getUserId(),
      photo_id,
      cover_img,
      comment,
      limit_num,
      type,
    }
    if(type == 'like'){
      data.like_score = point;
    }else{
      data.comment_score = point;
    }
    superagent
      .post(ajaxConfig.server_url + "/Ks/Hutui/addTask")
      .type('form')
      .send(data)
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body);
        }else{
          callback(false, res.body.msg);
        }
      })
  },

  /**
   * 获取互推列表
   * @param userid
   * @param type
   * @param page
   * @param count
   * @param callback
   */
  getList(type, page, count, callback) {
    superagent
      .post(ajaxConfig.server_url + "/Ks/Hutui/getList")
      .type('form')
      .send({
        userid: this.getUserId(),
        type,
        page,
        count,
      })
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body.data);
        }else{
          callback(false, res.body.msg);
        }
      })
  },

  /**
   * 互推操作
   * @param userid
   * @param photo_id
   * @param type
   * @param callback
   */
  click(photo_id, type, callback) {
    superagent
      .post(ajaxConfig.server_url + "/Ks/Hutui/click")
      .type('form')
      .send({
        userid: this.getUserId(),
        photo_id,
        type,
      })
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body);
        }else{
          callback(false, res.body.msg);
        }
      })
  },

  /**
   * 确认完成互推
   * @param userid
   * @param photo_id
   * @param type
   * @param callback
   */
  complete(photo_id, type, callback) {
    superagent
      .post(ajaxConfig.server_url + "/Ks/Hutui/complete")
      .type('form')
      .send({
        userid: this.getUserId(),
        photo_id,
        type,
      })
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body);
        }else{
          callback(false, res.body.msg);
        }
      })
  },


  /**
   * 登录
   * @param userid
   * @param callback
   */
  login(userid, callback) {
    superagent
      .post(ajaxConfig.server_url + "/Ks/User/login")
      .type('form')
      .send({ userid })
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body.data);
        }else{
          callback(false, res.body.msg);
        }
      })
  },

  /**
   * 绑定用户数字id
   * @param userName
   * @param callback
   */
  getKsUserByName(name, callback) {
    superagent
      .post(ajaxConfig.server_url + "/Ks/User/getKsUserByName")
      .type('form')
      .send({
        name,
      })
      .end((req,res) =>{
          callback(res.body.data);
      })
  },

  /**
   * 获取当前用户
   * @param callback
   */
  getInfo(callback) {
    superagent
      .post(ajaxConfig.server_url + "/Ks/User/getInfo")
      .type('form')
      .send({ userid: this.getUserId()})
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body.data);
        }else{
          callback(false, res.body.msg);
        }
      })
  },

  /**
   * 获取当前用户
   * @param callback
   */
  getInfoByID(userid, callback) {
    superagent
      .post(ajaxConfig.server_url + "/Ks/User/getInfo")
      .type('form')
      .send({ userid: userid})
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body.data);
        }else{
          callback(false, res.body.msg);
        }
      })
  },

  /**
   * 赚取积分
   * @param callback
   */
  gainWays(callback) {
    superagent
      .post(ajaxConfig.server_url + "/Ks/Score/gainWays")
      .type('form')
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body.data);
        }else{
          callback(false, res.body.msg);
        }
      })
  },

  /**
   * 积分商品列表
   * @param userid
   * @param callback
   */
  scoreList(callback) {
    superagent
      .post(ajaxConfig.server_url + "/Ks/Score/scoreList")
      .type('form')
      .send({ userid: this.getUserId() })
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body.data);
        }else{
          callback(false, res.body.msg);
        }
      })
  },

  /**
   * 积分购买下单
   * @param userid
   * @param goods_id
   * @param pay_type
   * @param callback
   */
  buyScore(goods_id, pay_type, callback) {

    const sign = this.getSign({
      userid : this.getUserId(),
      goods_id,
      pay_type
    });

    superagent
      .post(ajaxConfig.server_url + "/Ks/Score/buyScore")
      .type('form')
      .send({
        userid: sign.userid,
        goods_id: sign.goods_id,
        pay_type: sign.pay_type,
        sign: sign.s,
      })
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body.data);
        }else{
          callback(false, res.body.msg);
        }
      })
  },

  /**
   * 刷量类型列表
   * @param callback
   */
  getType(callback) {
    superagent
      .post(ajaxConfig.server_url + "/Ks/Yun/type")
      .type('form')
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body.data);
        }else{
          callback(false, res.body.msg);
        }
      })
  },


  /**
   * 刷量所需积分列表
   * @param type_id
   * @param userid
   * @param callback
   */
  numScore(type_id, callback) {
    superagent
      .post(ajaxConfig.server_url + "/Ks/Yun/numScore")
      .type('form')
      .send({
        type_id,
        userid: this.getUserId(),
      })
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body.data);
        }else{
          callback(false, res.body.msg);
        }
      })
  },

  /**
   * 刷量任务添加
   * @param userid
   * @param id
   * @param photo_id
   * @param sign
   * @param callback
   */
  cloudAddTask(id, photo_id, c_type, callback) {

    let data = {
      userid : this.getUserId(),
      id,
      photo_id
    };

    if(!Base.isNull(c_type)){
      data.c_type = c_type;
    }

    const sign = this.getSign(data);

    superagent
      .post(ajaxConfig.server_url + "/Ks/Yun/addTask")
      .type('form')
      .send({
        userid: sign.userid,
        id: sign.id,
        photo_id: sign.photo_id,
        c_type: c_type,
        sign: sign.s,
      })
      .end((req,res) =>{
        if(res.body.code == 1){
          callback(res.body.data);
        }else{
          callback(false, res.body.msg);
        }
      })
  },

};
