webpackJsonp([51],{"/j7m":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"warpper-black-4 wb100",style:"min-height: "+e.myHeight+"px;",attrs:{id:"id_card_bind_page"}},[a("loader",{attrs:{show:e.fullscreenLoading}}),e._v(" "),a("navTitle",{attrs:{title:"绑定身份证",back:!0}}),e._v(" "),a("div",{staticClass:"wb100"},[a("div",{staticClass:"clear1"}),e._v(" "),""==e.identityCard?[a("p",{staticClass:"pal15 Fwhite-1 lh30px F14"},[e._v("请验证您的手机号确认是本人操作")]),e._v(" "),a("div",{staticClass:"clear1"}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.step1,expression:"step1 == true"}],staticClass:"Fgray-3 wb100"},[a("div",{staticClass:"pal15 par15 relative F14 warpper-black-3"},[a("div",{staticStyle:{"padding-left":"60px"}},[a("div",{staticClass:"w50px absolute Fblack-2",staticStyle:{top:"0",left:"15px",height:"47px","line-height":"47px"}},[e._v("\n              手机号\n            ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"bor-none wb100 h45px lh45px Fnum warpper-none Fwhite-1",attrs:{type:"tel",placeholder:"请输入手机号"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"clear"})]),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"pal15 par15 relative F14 warpper-black-3"},[a("div",{staticStyle:{"padding-left":"60px"}},[a("div",{staticClass:"w50px absolute Fblack-2",staticStyle:{top:"0",left:"15px",height:"47px","line-height":"47px"}},[e._v("\n              验证码\n            ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"bor-none wb50 h45px lh45px fl Fnum warpper-none Fwhite-1",attrs:{type:"tel",placeholder:"请输入验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),a("input",{staticClass:"warpper-gray bor-none h45px lh45px wb45 fr code-btn",class:11!=e.mobile.length||e.lock?"Fgray-2":"Fblue",attrs:{type:"button","data-role":"none",disabled:11!=e.mobile.length||e.lock,value:e.codeText},on:{click:e.sendCode}})]),e._v(" "),a("div",{staticClass:"clear"})]),e._v(" "),a("div",{staticClass:"clear1"}),e._v(" "),a("div",{staticClass:"clear1"}),e._v(" "),a("div",{staticClass:"clear1"}),e._v(" "),a("div",{staticClass:"pa15"},[a("div",{staticClass:"wb100 h45px lh45px warpper-red Fwhite F16 text-center radius5 btn-login",class:e.mobile.length>0&&e.code.length>0?"warpper-red Fwhite":"warpper-pink Fwhite",on:{click:e.next}},[e._v("下一步")])]),e._v(" "),a("div",{staticClass:"clear1"})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.step1,expression:"step1 == false"}],staticClass:"wb100"},[a("div",{staticClass:"wb100"},[a("div",{staticClass:"pal15 par15 relative F14 warpper-black-3"},[a("div",{staticStyle:{"padding-left":"80px"}},[a("div",{staticClass:"w70px absolute Fblack-2",staticStyle:{top:"0",left:"15px",height:"47px","line-height":"47px"}},[e._v("\n                真实姓名\n              ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"bor-none wb100 h45px lh45px warpper-none Fwhite-1",attrs:{type:"text",placeholder:"请输入真实姓名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"clear"})]),e._v(" "),a("div",{staticClass:"pal15 par15 relative F14 warpper-white"},[a("div",{staticStyle:{"padding-left":"80px"}},[a("div",{staticClass:"w70px absolute Fblack-2",staticStyle:{top:"0",left:"15px",height:"47px","line-height":"47px"}},[e._v("\n                身份证号\n              ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.cardNum,expression:"cardNum"}],staticClass:"bor-none wb100 h45px lh45px Fnum warpper-none Fwhite-1",attrs:{type:"text",placeholder:"请输入身份证号"},domProps:{value:e.cardNum},on:{input:function(t){t.target.composing||(e.cardNum=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"clear"})]),e._v(" "),a("div",{staticClass:"clear1"}),e._v(" "),a("div",{staticClass:"clear1"}),e._v(" "),a("div",{staticClass:"pa15"},[a("div",{staticClass:"wb100 h45px lh45px warpper-red Fwhite F16 text-center radius5 btn-login",class:e.name.length>0&&e.cardNum.length>0?"warpper-red Fwhite":"warpper-pink Fwhite",on:{click:function(t){e.dialogBindId=!0}}},[e._v("确定")])]),e._v(" "),a("div",{staticClass:"clear1"}),e._v(" "),e._m(1)])]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogBindId,size:"large","show-close":!1},on:{"update:visible":function(t){e.dialogBindId=t}}},[a("p",{staticClass:"text-center F18",staticStyle:{"margin-top":"-30px"}},[e._v("身份核对")]),e._v(" "),a("div",{staticClass:"clear1"}),e._v(" "),a("p",{staticClass:"text-center F14 Fred"},[e._v("实名认证后身份信息将不可更改，请仔细核对！")]),e._v(" "),a("div",{staticClass:"clear1"}),e._v(" "),a("p",{staticClass:"lh30px Fgray-3 F14"},[e._v("真实姓名 "+e._s(e.name))]),e._v(" "),a("div",{staticClass:"clear"}),e._v(" "),a("p",{staticClass:"lh30px Fgray-3 F14"},[e._v("身份证号 "+e._s(e.cardNum))]),e._v(" "),a("div",{staticClass:"clear1"}),e._v(" "),a("div",{staticClass:"wb100"},[a("div",{staticClass:"wb40 text-center radius5 Fred h38px lh38px bor-red bor-solid-1a F16 fl",on:{click:function(t){e.dialogBindId=!1}}},[e._v("\n            修改\n          ")]),e._v(" "),a("div",{staticClass:"wb40 text-center radius5 h38px lh38px pa1 fr warpper-red Fwhite F16",on:{click:e.submit}},[e._v("\n            确定\n          ")])]),e._v(" "),a("div",{staticClass:"clear"})])]:[a("div",{staticClass:"clear1"}),e._v(" "),a("div",{staticClass:"pal15 par15 warpper-black-3 lh50px F14 Fwhite-1"},[a("p",[a("span",{staticClass:"w70px fl"},[e._v("真实姓名")]),e._v(" "),a("span",{staticClass:"fl"},[e._v(e._s(e.realName))])]),e._v(" "),a("div",{staticClass:"clear bor-gray bor-solid-1b"}),e._v(" "),a("p",[a("span",{staticClass:"w70px fl"},[e._v("身份证号")]),e._v(" "),a("span",{staticClass:"fl Fnum"},[e._v(e._s(e.identityCard))])]),e._v(" "),a("div",{staticClass:"clear"})])]],2)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pal15"},[a("div",{staticClass:"clear bor-black2 bor-solid-1b"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pal15 par15 F12 lh20px Fblack-2"},[a("p",{staticClass:"Fred lh30px F14"},[e._v("温馨提示：")]),e._v(" "),a("p",[e._v("*真实姓名和身份是作为大奖领取信息的唯一凭证，提交之后不可更改，请谨慎操作！")])])}],l={render:s,staticRenderFns:i};t.a=l},UOXf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("ctCP"),i=a.n(s),l=a("/j7m"),r=a("46Yf"),n=r(i.a,l.a,!1,null,null,null);t.default=n.exports},ctCP:function(e,t,a){"use strict";(function(e){function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a("1+AF"),l=s(i),r=a("Ra4H"),n=s(r);t.default={data:function(){return{fullscreenLoading:!0,dialogBindId:!1,step1:!0,myHeight:0,infoMsg:"",name:"",realName:"",cardNum:"",identityCard:"",code:"",mobile:"",call:"",codeText:"获取验证码",timeID:0,timer:60,lock:!1}},methods:{sendCode:function(){var e=this;if(this.lock)return!1;this.lock=!0,n.default.realNameAuthCode(this.mobile,function(t){t&&(e.timeID=setInterval(e.clock,1e3))})},clock:function(){this.timer--,this.codeText=this.timer+"秒后重发",this.timer<=0&&(clearInterval(this.timeID),this.lock=!1,this.timer=60,this.codeText="重发验证码")},myBack:function(){this.$router.go(-1)},next:function(){return l.default.isNull(this.mobile)?(this.$message({type:"error",message:"手机号不能为空"}),!1):l.default.isNull(this.code)?(this.$message({type:"error",message:"验证码不能为空"}),!1):void(this.step1=!1)},submit:function(){var e=this;return l.default.isChinese(this.name)?15!=this.cardNum.length&&18!=this.cardNum.length?(this.$message({type:"error",message:"身份证号不合法"}),!1):void n.default.realNameAuth(this.code,this.mobile,this.name,this.cardNum,function(t,a){t?(e.$message({type:"success",message:"身份证绑定成功"}),e.identityCard=e.cardNum,e.realName=e.name):e.$message({type:"error",message:a}),e.dialogBindId=!1}):(this.$message({type:"error",message:"姓名只能为中文"}),!1)}},mounted:function(){var t=this;this.myHeight=e(window).height(),n.default.securityInfo(function(e){if(e){var a=e.returnJSON;if(l.default.isNull(a))return t.$router.replace({name:"Login"}),!1;l.default.isNull(a.identityCard)?t.identityCard="":t.identityCard=a.identityCard}t.fullscreenLoading=!1,console.log(e)}),n.default.userInfo(function(e){e?(l.default.isNull(e.returnJSON)||(t.realName=e.returnJSON.realName),t.login=!0):t.login=!1,t.fullscreenLoading=!1})}}}).call(t,a("fu2u"))}});
//# sourceMappingURL=51.f7055acf88b0f1caa9a0.js.map