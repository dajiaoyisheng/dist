webpackJsonp([12],{"82Sr":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"posunusual",components:{tablePagination:t("zeeE").a},data:function(){return{count:0,message:"定位异常预警",params:{warningType:"0",prisonerType:"0",prisonerName:"",period:[new Date,new Date]},prisonerInfo:[],warningTypes:[],prisonerTypes:[],ppuTableDatas:[]}},methods:{pageChange:function(e){this.currentPage=e,this.getCameraList(e)},filter:function(){},clear:function(){this.params.period=[new Date,new Date],this.params.warningType="",this.params.prisonerType="",this.params.prisonerName=""},showVideo:function(e,a){this.$router.push({path:"/personnelposition"})},getCameraList:function(e){var a=this;this.$ajxj.post("/getCameraList",{page:e}).then(function(e){a.prisonerInfo=e.data.items,a.count=e.data.totalRows}).catch(function(e){}).then(function(e){})}},mounted:function(){this.getCameraList()}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"posunusual"}},[t("p",{staticClass:"contentInfo"},[e._v("摄像头列表")]),e._v(" "),t("section",{staticClass:"contentMain"},[t("section",{staticClass:"puu-params"},[t("el-row",[t("el-col",{attrs:{span:3}},[t("span",[e._v("监区:")]),e._v(" "),t("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.params.warningType,callback:function(a){e.$set(e.params,"warningType",a)},expression:"params.warningType"}},e._l(e.warningTypes,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-col",{attrs:{span:3}},[t("span",[e._v("区域:")]),e._v(" "),t("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.params.warningType,callback:function(a){e.$set(e.params,"warningType",a)},expression:"params.warningType"}},e._l(e.warningTypes,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-col",{attrs:{span:5}},[t("span",[e._v("摄像头类型:")]),e._v(" "),t("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.params.warningType,callback:function(a){e.$set(e.params,"warningType",a)},expression:"params.warningType"}},e._l(e.warningTypes,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-col",{attrs:{span:5}},[t("span",[e._v("视频服务地址:")]),e._v(" "),t("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.params.warningType,callback:function(a){e.$set(e.params,"warningType",a)},expression:"params.warningType"}},e._l(e.warningTypes,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-col",{attrs:{span:7}},[t("span",[e._v("摄像头:")]),e._v(" "),t("el-input",{staticClass:"pp-input",attrs:{size:"small",placeholder:"请输入摄像头编号或名称",clearable:""},model:{value:e.params.prisonerName,callback:function(a){e.$set(e.params,"prisonerName",a)},expression:"params.prisonerName"}},[t("el-button",{attrs:{slot:"append"},on:{click:e.filter},slot:"append"},[e._v("查询")])],1)],1),e._v(" "),t("el-col",{attrs:{span:1}},[t("el-button",{staticClass:"primary",attrs:{size:"small"},on:{click:function(a){e.clear()}}},[e._v("保存")])],1)],1)],1),e._v(" "),t("section",{staticClass:"el-table-wrap"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.prisonerInfo,stripe:""}},[t("el-table-column",{attrs:{prop:"startTime",label:"监区"}}),e._v(" "),t("el-table-column",{attrs:{prop:"endTime",label:"楼宇"}}),e._v(" "),t("el-table-column",{attrs:{prop:"timeLen",label:"楼层"}}),e._v(" "),t("el-table-column",{attrs:{prop:"prisonerType",label:"房间/过道"}}),e._v(" "),t("el-table-column",{attrs:{prop:"warningType",label:"摄像头编号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"prisonerName",label:"摄像头名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"warningArea",label:"摄像头类型"}}),e._v(" "),t("el-table-column",{attrs:{prop:"warningArea",label:"所在区域"}}),e._v(" "),t("el-table-column",{attrs:{prop:"warningArea",label:"坐标位置"}}),e._v(" "),t("el-table-column",{attrs:{prop:"warningArea",label:"摄像头方向"}}),e._v(" "),t("el-table-column",{attrs:{prop:"warningArea",label:"相邻摄像头"}}),e._v(" "),t("el-table-column",{attrs:{prop:"warningArea",label:"视频服务地址"}}),e._v(" "),t("el-table-column",{attrs:{label:"查看视频"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){e.showVideo(a.$index,a.row)}}},[e._v("查看")])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"warningArea",label:"备注"}})],1),e._v(" "),t("div",{staticClass:"el-pagination-wrap text-center"},[t("table-pagination",{attrs:{total:e.count},on:{change:e.pageChange}})],1)],1)])])},staticRenderFns:[]};var r=t("VU/8")(n,l,!1,function(e){t("x/t7")},"data-v-7ec4e795",null);a.default=r.exports},"x/t7":function(e,a){}});
//# sourceMappingURL=12.f414f8d48db71ec82f47.js.map