webpackJsonp([10],{ldGv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("mvHQ"),o=n.n(s),a={name:"systemmanagement",data:function(){return{loading:!1,formData:{name:"",passwd:""}}},methods:{submit:function(){var e=this;this.loading=!0,provider.login(this,this.formData).then(function(t){e.loading=!1,1===t.body.header.status?(localStorage.setItem("token",t.body.body.token),localStorage.setItem("userInfo",o()(t.body.userInfo)),e.$router.push({path:"/systemmanagement"})):alert(t.body.body.errorMessage)})}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("span",[this._v("系统管理")]),this._v(" "),t("vue-loading",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],attrs:{type:"bars",color:"#d9544e",size:{width:"50px",height:"50px"}}})],1)},staticRenderFns:[]},i=n("VU/8")(a,r,!1,null,null,null);t.default=i.exports},mvHQ:function(e,t,n){e.exports={default:n("qkKv"),__esModule:!0}},qkKv:function(e,t,n){var s=n("FeBl"),o=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}}});
//# sourceMappingURL=10.85bcec4ea65f5e282990.js.map