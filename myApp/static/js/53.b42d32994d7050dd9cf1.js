webpackJsonp([53],{"4EYJ":function(t,e,a){"use strict";(function(t){function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=a("1+AF"),r=s(l),c=a("Ra4H"),i=s(c);e.default={data:function(){return{fullscreenLoading:!0,myHeight:0,showDetail:!0,showDetail2:!1,showRule:!1,ticketID:"",call:"",ticket:{},matchData:{},matchList:[],ticketInfo:{title:"",icon:"",lotteryType:"",type:1}}},methods:{myBack:function(){r.default.isNull(this.call)?this.toLottery():this.$router.push({name:this.call})},stringToDate:function(t){if(t){var e=t.split(" "),a=e[0].split("-"),s=e[1].split(":");return new Date(a[0],a[1]-1,a[2],s[0],s[1],s[2])}},playTypeformat:function(t){var e="";return"502"!=t&&502!=t||(e="二串一"),"503"!=t&&503!=t||(e="三串一"),"504"!=t&&504!=t||(e="四串一"),"505"!=t&&505!=t||(e="五串一"),"506"!=t&&506!=t||(e="六串一"),"507"!=t&&507!=t||(e="七串一"),"508"!=t&&508!=t||(e="八串一"),e},dateShort:function(t){return t.substring(t.length-8)},dateShort2:function(t){return t.substring(5,t.length-3)},dateFormat:function(t){return t.substring(0,4)+"-"+t.substring(4,6)+"-"+t.substring(6)},dayFormat:function(t){return t.substring(5,10)},timeFormat:function(t){return t.substring(10,16)},formatModifyOn:function(t){return r.default.isNull(t)?"-":t.substring(t.length-14)},formatLotteryType:function(t){return"502"==t||502==t?"2串1":"503"==t||503==t?"3串1":"504"==t||504==t?"4串1":"505"==t||505==t?"5串1":"506"==t||506==t?"6串1":"507"==t||507==t?"7串1":"508"==t||508==t?"8串1":void 0},playValFormat:function(t){return t},getLotValue:function(t,e){e+="";var a="",s=[];e=e.split(",");for(var l=0;l<e.length;l++){var r=e[l];if("FT001"==t)"3"==r?a="主胜":"1"==r?a="平":"0"==r&&(a="客胜");else if("FT002"==t)if("90"==r)a="胜其他";else if("99"==r)a="平其他";else if("09"==r)a="负其他";else{var c=r.split("");a=c[0]+":"+c[1]}else"FT003"==t?a=r>=7?"7+球":r+"球":"FT004"==t?"33"==r?a="胜胜":"31"==r?a="胜平":"31"==r?a="胜负":"13"==r?a="平胜":"11"==r?a="平平":"10"==r?a="平负":"03"==r?a="负胜":"01"==r?a="负平":"00"==r&&(a="负负"):"FT006"==t&&("3"==r?a="让球主胜":"1"==r?a="让球平":"0"==r&&(a="让球客胜"));s.push(a)}return s.join("，")},playTypeFormat:function(t){return"FT001"==t?"胜平负":"FT002"==t?"比分":"FT003"==t?"总进球":"FT004"==t?"半全场":"FT005"==t?"混合玩法":"FT006"==t?"让胜平负":void 0},weekFormat:function(t){return 1==t?"周一":2==t?"周二":3==t?"周三":4==t?"周四":5==t?"周五":6==t?"周六":7==t?"周日":void 0},formatNum:function(t){if(r.default.isNull(t))return"-"},twoDecimal:function(t){var e=parseFloat(t);if(isNaN(e))return!1;var e=Math.round(100*t)/100,a=e.toString(),s=a.indexOf(".");for(s<0&&(s=a.length,a+=".");a.length<=s+2;)a+="0";return a},ticketGroup:function(t,e){if(e<2)return null;var a=[];if(2==e)for(var s=0;s<t[0].selectData.length;s++)for(var l=0;l<t[1].selectData.length;l++){var r=[];r.push(t[0].selectData[s]),r.push(t[1].selectData[l]),a.push(r)}else if(3==e)for(var c=0;c<t[0].selectData.length;c++)for(var i=0;i<t[1].selectData.length;i++)for(var n=0;n<t[2].selectData.length;n++){var u=[];u.push(t[0].selectData[c]),u.push(t[1].selectData[i]),u.push(t[2].selectData[n]),a.push(u)}else if(4==e)for(var o=0;o<t[0].selectData.length;o++)for(var h=0;h<t[1].selectData.length;h++)for(var p=0;p<t[2].selectData.length;p++)for(var v=0;v<t[3].selectData.length;v++){var f=[];f.push(t[0].selectData[o]),f.push(t[1].selectData[h]),f.push(t[2].selectData[p]),f.push(t[3].selectData[v]),a.push(f)}else if(5==e)for(var D=0;D<t[0].selectData.length;D++)for(var _=0;_<t[1].selectData.length;_++)for(var g=0;g<t[2].selectData.length;g++)for(var d=0;d<t[3].selectData.length;d++)for(var F=0;F<t[4].selectData.length;F++){var m=[];m.push(t[0].selectData[D]),m.push(t[1].selectData[_]),m.push(t[2].selectData[g]),m.push(t[3].selectData[d]),m.push(t[4].selectData[F]),a.push(m)}else if(6==e)for(var b=0;b<t[0].selectData.length;b++)for(var y=0;y<t[1].selectData.length;y++)for(var k=0;k<t[2].selectData.length;k++)for(var w=0;w<t[3].selectData.length;w++)for(var x=0;x<t[4].selectData.length;x++)for(var C=0;C<t[5].selectData.length;C++){var T=[];T.push(t[0].selectData[b]),T.push(t[1].selectData[y]),T.push(t[2].selectData[k]),T.push(t[3].selectData[w]),T.push(t[4].selectData[x]),T.push(t[5].selectData[C]),a.push(T)}else if(7==e)for(var S=0;S<t[0].selectData.length;S++)for(var L=0;L<t[1].selectData.length;L++)for(var M=0;M<t[2].selectData.length;M++)for(var N=0;N<t[3].selectData.length;N++)for(var I=0;I<t[4].selectData.length;I++)for(var R=0;R<t[5].selectData.length;R++)for(var O=0;O<t[6].selectData.length;O++){var $=[];$.push(t[0].selectData[S]),$.push(t[1].selectData[L]),$.push(t[2].selectData[M]),$.push(t[3].selectData[N]),$.push(t[4].selectData[I]),$.push(t[5].selectData[R]),$.push(t[6].selectData[O]),a.push($)}else if(8==e)for(var E=0;E<t[0].selectData.length;E++)for(var H=0;H<t[1].selectData.length;H++)for(var J=0;J<t[2].selectData.length;J++)for(var j=0;j<t[3].selectData.length;j++)for(var q=0;q<t[4].selectData.length;q++)for(var B=0;B<t[5].selectData.length;B++)for(var V=0;V<t[6].selectData.length;V++)for(var Y=0;Y<t[7].selectData.length;Y++){var z=[];z.push(t[0].selectData[E]),z.push(t[1].selectData[H]),z.push(t[2].selectData[J]),z.push(t[3].selectData[j]),z.push(t[4].selectData[q]),z.push(t[5].selectData[B]),z.push(t[6].selectData[V]),z.push(t[7].selectData[Y]),a.push(z)}return a}},mounted:function(){var e=this;_czc.push(["_setAccount","1271278320"]),_czc.push(["_trackEvent","SoccerDeal_page","onInit","购彩明细","inited","SoccerDeal_init"]),this.call=this.$route.params.call,this.myHeight=t(window).height();var a=this.$route.params.ticketID;this.fullscreenLoading=!1,r.default.isNull(a)?this.$message({type:"error",message:"未知错误"}):(this.ticketID=a,i.default.orderTicket(a,function(t){console.log(t),e.matchList=t.returnJSON}))}}}).call(e,a("fu2u"))},Qqui:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4EYJ"),l=a.n(s),r=a("pBtq"),c=a("46Yf"),i=c(l.a,r.a,!1,null,null,null);e.default=i.exports},pBtq:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warpper-black-4 wb100",style:"min-height: "+t.myHeight+"px;",attrs:{id:"ticket_detail_page"}},[a("loader",{attrs:{show:t.fullscreenLoading}}),t._v(" "),a("navTitle",{attrs:{title:"购票明细",back:!0}}),t._v(" "),a("div",{staticClass:"wb100"},[a("div",{staticClass:"pa15"},[t._l(t.matchList,function(e,s){return[a("div",{staticClass:"wb100 warpper-black-3"},[a("div",{staticClass:" relative",staticStyle:{padding:"10px 85px 0 35px"}},[a("div",{staticClass:"w20px lh40px absolute F14 Fblack-2",staticStyle:{top:"15px",left:"15px"}},[t._v("\n              "+t._s(s+1)+"\n            ")]),t._v(" "),a("div",{staticClass:"wb100 lh20px Fwhite-1 F12"},[t._l(e.lotMatchList,function(e){return[a("p",[t._v("\n                  "+t._s(t.weekFormat(e.weekId))+"\n                  "+t._s(e.teamId)+"\n                  "+t._s(e.hTeam)+" vs "+t._s(e.vTeam)+"\n                ")]),t._v(" "),t._l(e.lotList,function(e){return[a("p",{class:1==e.checkResult?"Fred":"Fblack-2"},[t._v(t._s(t.getLotValue(e.LotId,e.lotResult))+"（"+t._s(e.lossRadio||"-")+"）")])]}),t._v(" "),a("div",{staticClass:"clear h10px"})]})],2),t._v(" "),a("div",{staticClass:"w80px text-right absolute Fgray-3 lh40px F14",staticStyle:{top:"15px",right:"15px"}},[1==e.ticketStatus?[a("p",{staticClass:"Fblack-2 lh30px"},[t._v("等待委托")])]:t._e(),t._v(" "),2==e.ticketStatus?[a("p",{staticClass:"Fblue lh60px"},[t._v("等待开奖")])]:t._e(),t._v(" "),3==e.ticketStatus?[a("p",{staticClass:"Fred lh30px"},[t._v("已中奖")])]:t._e(),t._v(" "),4==e.ticketStatus?[a("p",{staticClass:"Fblack-2 lh30px"},[t._v("未中奖")])]:t._e(),t._v(" "),5==e.ticketStatus?[a("p",{staticClass:"Fred lh30px"},[t._v("出票失败")])]:t._e(),t._v(" "),6==e.ticketStatus?[a("p",{staticClass:"Fblue lh30px"},[t._v("等待出票")])]:t._e(),t._v(" "),8==e.ticketStatus?[a("p",{staticClass:"Fred lh30px"},[t._v("赛事取消")])]:t._e()],2)]),t._v(" "),a("div",{staticClass:"clear bor-black4 bor-solid-1b"}),t._v(" "),a("div",{staticClass:"pa15 lh20px Fwhite-1 F14"},[a("div",{staticClass:"wb50 fl lh40px"},[t._v("\n              "+t._s(t.playTypeformat(e.playType))+" "+t._s(e.betNumber)+"注"+t._s(e.lotMulti)+"倍\n            ")]),t._v(" "),a("div",{staticClass:"wb50 fr text-right"},[a("p",[t._v("金额："),a("span",{staticClass:"Fnum"},[t._v(t._s(t.twoDecimal(e.lotMoney)))]),t._v(" 元")]),t._v(" "),a("p",[t._v("奖金："),a("span",{staticClass:"Fnum Fred"},[t._v(t._s(t.twoDecimal(e.rewardMoney)||"0.00"))]),t._v(" 元")])])]),t._v(" "),a("div",{staticClass:"clear1"})]),t._v(" "),a("div",{staticClass:"clear1"})]})],2)])],1)},l=[],r={render:s,staticRenderFns:l};e.a=r}});
//# sourceMappingURL=53.b42d32994d7050dd9cf1.js.map