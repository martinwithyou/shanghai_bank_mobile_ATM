webpackJsonp([3],{519:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var A,s,c=n(5),a=n.n(c),p=n(52),m=(n.n(p),n(113)),u=n(185),f=n(7),B=n.n(f),d=n(184),C=n(186),g=n(540),b=(n.n(g),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),y=[{title:"\u96f7\u5cf0\u5854",product_name:"\u96f7\u5cf0\u5854",introduce:"\u8fd9\u91cc\u662f\u676d\u5dde\u7684\u96f7\u5cf0\u5854\uff0c\u676d\u5dde\u6b22\u8fce\u60a8",selectNum:0,img:"",selectStatus:!0,style:"bg-c"},{title:"\u4e9a\u8fd0\u4f1a\u573a",product_name:"\u4e9a\u8fd0\u4f1a\u573a",introduce:"\u8fd9\u91cc\u662f\u676d\u5dde\u7684\u4e9a\u8fd0\u4f1a\u573a\uff0c\u676d\u5dde\u6b22\u8fce\u60a8",selectNum:0,img:"",selectStatus:!0,style:"bg-e"},{title:"\u4e4b\u6c5f\u5927\u6865",product_name:"\u4e4b\u6c5f\u5927\u6865",introduce:"\u8fd9\u91cc\u662f\u676d\u5dde\u7684\u4e4b\u6c5f\u5927\u6865\uff0c\u676d\u5dde\u6b22\u8fce\u60a8",selectNum:0,img:"",selectStatus:!0,style:"bg-d"},{title:"\u897f\u6e56",product_name:"\u897f\u6e56",introduce:"\u8fd9\u91cc\u662f\u676d\u5dde\u7684\u897f\u6e56\uff0c\u676d\u5dde\u6b22\u8fce\u60a8",selectNum:0,img:"",selectStatus:!0,style:"bg-a"}],h=(s=A=function(e){function t(){var e,n,r,l;o(this,t);for(var A=arguments.length,s=Array(A),c=0;c<A;c++)s[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={alertStatus:!1,alertTip:""},r.closeAlert=function(){r.setState({alertStatus:!1,alertTip:""})},r.showTip=function(e){r.setState({alertStatus:!0,alertTip:"item"})},l=n,i(r,l)}return l(t,e),b(t,[{key:"shouldComponentUpdate",value:function(e,t){return!Object(p.is)(Object(p.fromJS)(this.props),Object(p.fromJS)(e))||!Object(p.is)(Object(p.fromJS)(this.state),Object(p.fromJS)(t))}},{key:"componentDidMount",value:function(){this.props.proData.dataList.length}},{key:"render",value:function(){var e=this;return a.a.createElement("main",{className:"common-con-top"},a.a.createElement(d.a,{title:"\u9996\u9875",confirm:!0}),a.a.createElement("section",{className:"pro-list-con"},a.a.createElement("div",{className:"pro-list-title"},"openAnAccount"),a.a.createElement("ul",{className:"pro-list-ul"},y.map(function(t,n){var o;return a.a.createElement("li",{className:"pro-item",key:n},a.a.createElement("div",{className:"pro-item-select"},a.a.createElement("span",{className:"icon-xuanze1 pro-select-status "+(t.selectStatus?"pro-selected":"")}),a.a.createElement("span",{className:"pro-name"},t.product_name)),a.a.createElement("div",(o={className:"pic-style"},r(o,"className",t.style),r(o,"onClick",function(){e.setState({alertStatus:!0,alertTip:t.introduce})}),o)))})),a.a.createElement(C.a,{closeAlert:this.closeAlert,alertTip:this.state.alertTip,alertStatus:this.state.alertStatus})))}}]),t}(c.Component),A.propTypes={proData:B.a.object.isRequired,getProData:B.a.func.isRequired,togSelectPro:B.a.func.isRequired,editPro:B.a.func.isRequired},s);t.default=Object(m.b)(function(e){return{proData:e.proData}},{getProData:u.c,togSelectPro:u.d,editPro:u.b})(h)},540:function(e,t,n){var r=n(541);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(511)(r,o);r.locals&&(e.exports=r.locals)},541:function(e,t,n){t=e.exports=n(183)(!0),t.i(n(512),""),t.push([e.i,".pro-list-con{padding-top:.4rem}.pro-list-con .pro-list-title{color:#975ec9;width:100%;height:.8rem;background:#fff;font-size:.5rem;line-height:.8rem;padding-left:.266667rem;border-bottom:.013333rem solid #eee}.pro-list-ul{background-color:#fff}.pro-list-ul .pro-item{min-height:1.866667rem;padding:.4rem;border-bottom:1px solid #eee;-ms-flex-pack:justify;justify-content:space-between}.pro-list-ul .pro-item,.pro-list-ul .pro-item .pro-item-select{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.pro-list-ul .pro-item .pro-item-select{-ms-flex-pack:center;justify-content:center}.pro-list-ul .pro-item .pro-item-select .pro-select-status{font-size:.6rem;color:#ccc;text-align:left}.pro-list-ul .pro-item .pro-item-select .pro-selected{color:#975ec9}.pro-list-ul .pro-item .pro-item-select .pro-name{font-size:.48rem;color:#333;text-align:left;margin-left:.266667rem;margin-top:.16rem}.pro-list-ul .pro-item .pro-item-select .introduce-style{font-size:.4rem;margin-left:.266667rem;margin-top:.133333rem;color:#333}.pro-list-ul .pro-item .pic-style{width:60%;height:2.933333rem;background-color:aqua;float:right;background-size:100%}.pro-list-ul .pro-item .pro-item-edit{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.pro-list-ul .pro-item .pro-item-edit .icon-jian{font-size:.666667rem;color:#ccc;text-align:left}.pro-list-ul .pro-item .pro-item-edit .pro-num{font-size:.4rem;color:#333;text-align:center;min-width:.8rem}.pro-list-ul .pro-item .pro-item-edit .icon-jia{font-size:.666667rem;color:#975ec9;text-align:left}.pro-list-ul .pro-item .pro-item-edit .edit-active{color:#975ec9}","",{version:3,sources:["/Users/dezhu/project/react-pxq/src/pages/openAnAccount/openAnAccount.less"],names:[],mappings:"AAEA,cACE,iBAAoB,CACrB,AAED,8BACE,cAAe,AACf,WAAY,AACZ,aAAe,AACf,gBAAiB,AACjB,gBAAkB,AAClB,kBAAoB,AACpB,wBAA0B,AAC1B,mCAAyC,CAC1C,AAED,aACE,qBAAuB,CACxB,AAED,uBACE,uBAAwB,AACxB,cAAgB,AAChB,6BAA8B,AAG9B,sBAAuB,AACvB,6BAA+B,CAGhC,AAED,+DARE,oBAAqB,AACrB,aAAc,AAGd,sBAAuB,AACvB,kBAAoB,CAUrB,AAPD,wCAGE,qBAAsB,AACtB,sBAAwB,CAGzB,AAED,2DACE,gBAAkB,AAClB,WAAY,AACZ,eAAiB,CAClB,AAED,sDACE,aAAe,CAChB,AAED,kDACE,iBAAmB,AACnB,WAAY,AACZ,gBAAiB,AACjB,uBAAyB,AACzB,iBAAoB,CACrB,AAED,yDACE,gBAAkB,AAClB,uBAAyB,AACzB,sBAAwB,AACxB,UAAY,CACb,AAED,kCACE,UAAW,AACX,mBAAoB,AACpB,sBAAuB,AACvB,YAAa,AACb,oBAAsB,CACvB,AAED,sCACE,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,uBAAwB,AACxB,sBAAuB,AACvB,kBAAoB,CACrB,AAED,iDACE,qBAAuB,AACvB,WAAY,AACZ,eAAiB,CAClB,AAED,+CACE,gBAAkB,AAClB,WAAY,AACZ,kBAAmB,AACnB,eAAkB,CACnB,AAED,gDACE,qBAAuB,AACvB,cAAe,AACf,eAAiB,CAClB,AAED,mDACE,aAAe,CAChB",file:"openAnAccount.less",sourcesContent:['@import "../../assets/iconfonts/iconfont.css";\n\n.pro-list-con {\n  padding-top: 0.4rem;\n}\n\n.pro-list-con .pro-list-title {\n  color: #975ec9;\n  width: 100%;\n  height: 0.8rem;\n  background: #fff;\n  font-size: 0.5rem;\n  line-height: 0.8rem;\n  padding-left: 0.266667rem;\n  border-bottom: 0.013333rem solid #eeeeee;\n}\n\n.pro-list-ul {\n  background-color: #fff;\n}\n\n.pro-list-ul .pro-item {\n  min-height: 1.866667rem;\n  padding: 0.4rem;\n  border-bottom: 1PX solid #eee;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.pro-list-ul .pro-item .pro-item-select {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.pro-list-ul .pro-item .pro-item-select .pro-select-status {\n  font-size: 0.6rem;\n  color: #ccc;\n  text-align: left;\n}\n\n.pro-list-ul .pro-item .pro-item-select .pro-selected {\n  color: #975ec9;\n}\n\n.pro-list-ul .pro-item .pro-item-select .pro-name {\n  font-size: 0.48rem;\n  color: #333;\n  text-align: left;\n  margin-left: 0.266667rem;\n  margin-top: 0.16rem;\n}\n\n.pro-list-ul .pro-item .pro-item-select .introduce-style {\n  font-size: 0.4rem;\n  margin-left: 0.266667rem;\n  margin-top: 0.133333rem;\n  color: #333;\n}\n\n.pro-list-ul .pro-item .pic-style {\n  width: 60%;\n  height: 2.933333rem;\n  background-color: aqua;\n  float: right;\n  background-size: 100%;\n}\n\n.pro-list-ul .pro-item .pro-item-edit {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.pro-list-ul .pro-item .pro-item-edit .icon-jian {\n  font-size: 0.666667rem;\n  color: #ccc;\n  text-align: left;\n}\n\n.pro-list-ul .pro-item .pro-item-edit .pro-num {\n  font-size: 0.4rem;\n  color: #333;\n  text-align: center;\n  min-width: 0.8rem;\n}\n\n.pro-list-ul .pro-item .pro-item-edit .icon-jia {\n  font-size: 0.666667rem;\n  color: #975ec9;\n  text-align: left;\n}\n\n.pro-list-ul .pro-item .pro-item-edit .edit-active {\n  color: #975ec9;\n}'],sourceRoot:""}])}});