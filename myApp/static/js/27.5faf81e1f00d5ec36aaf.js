webpackJsonp([27],{CCmw:function(t,s,e){s=t.exports=e("BkJT")(!0),s.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"NewsList.vue",sourceRoot:""}])},OMmX:function(t,s,e){"use strict";function i(t){e("gC+H")}Object.defineProperty(s,"__esModule",{value:!0});var a=e("Yueb"),l=e.n(a),A=e("RZTu"),n=e("46Yf"),c=i,o=n(l.a,A.a,!1,c,null,null);s.default=o.exports},RZTu:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"warpper-black-4 wb100",style:"min-height: "+t.myHeight+"px;",attrs:{id:"news_list_page"}},[i("loader",{attrs:{show:t.fullscreenLoading}}),t._v(" "),i("navTitle",{attrs:{title:"更多资讯",back:!0,fixed:!0}}),t._v(" "),t.showTitle?[i("div",{staticClass:"clear h50px"})]:t._e(),t._v(" "),i("div",{staticClass:"wb100 warpper-black-3"},[i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getData,expression:"getData"}],staticClass:"wb100",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"5"}},t._l(t.newsList,function(s,e){return 0==t.empty?i("div",[0==s.picImgs.length?[i("div",{staticClass:"clear1"}),t._v(" "),i("div",{staticClass:"bor-black2 bor-solid-1b relative",on:{click:function(e){t.toDetail(s.newsID)}}},[i("div",{staticClass:"pal15 par15"},[i("p",{staticClass:"text-over-hidden1 h25px lh25px F16 Fwhite-1"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"clear h10px"}),t._v(" "),i("p",{staticClass:"text-over-hidden2 h50px lh25px F14 Fblack-1"},[t._v(t._s(s.mcontent))]),t._v(" "),i("div",{staticClass:"clear h10px"}),t._v(" "),i("p",{staticClass:"h20px lh20px Fblack-1 F14"},[i("span",{staticClass:"fl"},[t._v(" "+t._s(t.formatDate(s.date))+" ")])])]),t._v(" "),i("div",{staticClass:"clear1"})])]:t._e(),t._v(" "),s.picImgs.length<3&&s.picImgs.length>0?[i("div",{staticClass:"clear1"}),t._v(" "),i("div",{staticClass:"bor-black2 bor-solid-1b relative",staticStyle:{"padding-right":"150px"},on:{click:function(e){t.toDetail(s.newsID)}}},[i("div",{staticClass:"w120px h180px absolute img-area",staticStyle:{top:"0",right:"15px"}},[i("img",{attrs:{src:s.picImgs[0]+"?x-oss-process=image/resize,m_fill,h_160,w_240"}})]),t._v(" "),i("div",{staticClass:"pal15"},[i("p",{staticClass:"text-over-hidden2 h50px lh25px F16 Fwhite-1"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"clear h10px"}),t._v(" "),i("p",{staticClass:"h20px lh20px Fblack-1 F14"},[i("span",{staticClass:"fl"},[t._v(" "+t._s(t.formatDate(s.date))+" ")])])]),t._v(" "),i("div",{staticClass:"clear1"})])]:t._e(),t._v(" "),s.picImgs.length>=3?[i("div",{staticClass:"clear1"}),t._v(" "),i("div",{staticClass:"bor-black2 bor-solid-1b relative",on:{click:function(e){t.toDetail(s.newsID)}}},[i("div",{staticClass:"pal15 par15"},[i("p",{staticClass:"text-over-hidden1 h30px lh30px F16 Fwhite-1"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"clear h10px"}),t._v(" "),i("div",{staticClass:"wb100"},[i("div",{staticClass:"wb33333 fl img-area"},[i("div",{staticClass:"center",style:"width:"+t.newsWidth+"px; height:"+.75*t.newsWidth+"px; "},[i("img",{attrs:{src:s.picImgs[0]+"?x-oss-process=image/resize,m_fill,w_"+2*t.newsWidth+",h_"+Math.ceil(1.5*t.newsWidth)}})])]),t._v(" "),i("div",{staticClass:"wb33333 fl img-area"},[i("div",{staticClass:"center",style:"width:"+t.newsWidth+"px; height:"+.75*t.newsWidth+"px; "},[i("img",{attrs:{src:s.picImgs[1]+"?x-oss-process=image/resize,m_fill,w_"+2*t.newsWidth+",h_"+Math.ceil(1.5*t.newsWidth)}})])]),t._v(" "),i("div",{staticClass:"wb33333 fl img-area"},[i("div",{staticClass:"center",style:"width:"+t.newsWidth+"px; height:"+.75*t.newsWidth+"px; "},[i("img",{attrs:{src:s.picImgs[2]+"?x-oss-process=image/resize,m_fill,w_"+2*t.newsWidth+",h_"+Math.ceil(1.5*t.newsWidth)}})])])]),t._v(" "),i("div",{staticClass:"clear h10px"}),t._v(" "),i("p",{staticClass:"h20px lh20px Fblack-1 F14"},[i("span",{staticClass:"fl"},[t._v(" "+t._s(t.formatDate(s.date))+" ")])])]),t._v(" "),i("div",{staticClass:"clear1"})])]:t._e()],2):t._e()})),t._v(" "),1==t.last?[t._m(0)]:1==t.empty?[i("div",{staticClass:"wb100 text-center"},[i("img",{staticClass:"wb55 center ",staticStyle:{"margin-top":"68px"},attrs:{src:e("W6BW")}}),t._v(" "),i("p",{staticClass:"Fgray-2 F16 lh25px h25px"},[t._v("还没有明细记录哦~")]),t._v(" "),i("p",{staticClass:"Fgray-1 F14 lh25px h25px"},[t._v("不要让大奖溜走，快去购彩吧！")]),t._v(" "),i("div",{staticClass:"clear1"}),t._v(" "),i("router-link",{attrs:{to:{name:"Index"}}},[i("div",{staticClass:"radius5  bor-red  bor-solid-1a wb40 center h40px lh40px"},[i("p",{staticClass:"Fred"},[t._v("立即去购彩")])])])],1)]:[i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"wb100"},[t._m(1)])]],2)],2)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wb100 Fblack-2"},[e("div",{staticClass:"text-center h40px lh40px center w120px F14"},[e("span",{staticClass:"fl mal10"},[t._v("暂无更多数据")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"text-center Fblack-2 h40px lh40px center w120px F14"},[i("img",{staticClass:"h20px fl mat10",attrs:{src:e("uPAG")}}),t._v(" "),i("span",{staticClass:"fl mal10"},[t._v("数据加载中...")])])}],l={render:i,staticRenderFns:a};s.a=l},W6BW:function(t,s,e){t.exports=e.p+"static/img/kb_mx.dd079da.png"},Yueb:function(t,s,e){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e("1+AF"),l=i(a),A=e("Ra4H"),n=i(A);s.default={data:function(){return{fullscreenLoading:!0,myHeight:0,newsWidth:0,page:0,pageSize:20,type:"",newsList:[],loading:!0,showTitle:!0,empty:!1,last:!1}},methods:{formatDate:function(t){var s=l.default.stringToDate(t);return(new Date).getTime()-s.getTime()>1728e5?t.substring(5,t.length-3):l.default.getDateDiff(s.getTime())},toDetail:function(t){l.default.setCookie("NewsList_scrollY",window.scrollY),this.$router.push({name:"NewsDetail",params:{newsID:t}})},getData:function(){var t=this,s=this;if(s.loading=!0,s.last||s.empty)return s.loading=!1,void(0==s.page&&setTimeout(function(){s.fullscreenLoading=!1,window.scrollTo(0,0)},100));s.page++,n.default.getNewsList(this.page,this.pageSize,this.type,function(e){if(e){0==e.returnJSON.queryResult.length?1==s.page?s.empty=!0:(s.empty=!1,s.last=!0):e.returnJSON.queryResult.length<s.pageSize&&(s.empty=!1,s.last=!0);for(var i=e.returnJSON.queryResult,a=0;a<i.length;a++)l.default.isNull(i[a].picImg)?i[a].picImgs=[]:i[a].picImgs=i[a].picImg.split("|");t.newsList=t.newsList.concat(i);var A=l.default.getCookie("NewsList_Read");if(l.default.isNull(A)&&(A=!1),1==A||"true"==A){for(var n=l.default.getCookie("NewsList_newsID"),c=l.default.getCookie("NewsList_scrollY"),o=t.newsList,r=!0,h=0;h<o.length;h++)o[h].newsID==n&&(r=!1);r?t.getData():(t.loading=!1,setTimeout(function(){s.fullscreenLoading=!1,window.scrollTo(0,c)},100))}else t.loading=!1,1==s.page&&setTimeout(function(){s.fullscreenLoading=!1,window.scrollTo(0,0)},100)}})}},mounted:function(){_czc.push(["_setAccount","1271278320"]),_czc.push(["_trackEvent","NewsList_page","onInit","新闻列表页","inited","NewsList_init"]),this.myHeight=t(window).height(),this.newsWidth=Math.ceil((t(window).width()-30-6)/3),this.type=this.$route.query.type,"wap"!=n.default.getSource()&&(this.showTitle=!1),l.default.versions.isWeiXin&&(this.showTitle=!1),this.getData()},beforeRouteEnter:function(t,s,e){"NewsDetail"==s.name?(l.default.setCookie("NewsList_Read",!0),l.default.setCookie("NewsList_newsID",s.params.newsID)):(l.default.setCookie("NewsList_Read",!1),l.default.setCookie("NewsList_scrollY",0)),e()}}}).call(s,e("fu2u"))},"gC+H":function(t,s,e){var i=e("CCmw");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("8bSs")("70303e68",i,!0)},uPAG:function(t,s){t.exports="data:image/gif;base64,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"}});
//# sourceMappingURL=27.5faf81e1f00d5ec36aaf.js.map