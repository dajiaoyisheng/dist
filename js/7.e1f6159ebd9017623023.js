webpackJsonp([7],{"3zX0":function(e,a,t){e.exports=t.p+"img/pp-p.37dec19.png"},LP7K:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t("esw1"),s=t.n(l),n={name:"personnelposition",components:{tablePagination:t("zeeE").a},data:function(){return{currentPos:s.a,input:"",loading:!1,pPositionData:[],pageSize:10,currentPage:1,count:0,pPTableData:[],options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:"",currentPage3:1,page:1,activeName:"second",value6:"",value7:""}},created:function(){var e=this;this.$ajxj.get("/pPositionData").then(function(a){e.pPositionData=a.data.data,e.page=a.data.total}).catch(function(e){}).then(function(){}),this.getTableData()},mounted:function(){},methods:{pageChange:function(e){this.currentPage=e,this.getTableData(e)},getTableData:function(e){var a=this;this.$ajxj.post("/pPTableData",{page:e||1}).then(function(e){a.count=e.data.total,a.pPTableData=e.data.data,a.page=e.data.total}).catch(function(e){}).then(function(){})},handleSizeChange:function(e){},handleCurrentChange:function(e){this.getTableData(e)},handleEdit:function(e,a){window.open(a.tv)},handleClick:function(e,a){}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"pp-wrap"},[t("section",{staticClass:"pposition-l fl"},[t("table",[e._m(0),e._v(" "),t("tbody",e._l(e.pPositionData,function(a,l){return t("tr",{key:a.name},[t("td",[t("div",{staticClass:"cell"},[e._v(e._s(l+1))])]),e._v(" "),t("td",[t("div",{staticClass:"cell"},[e._v(e._s(a.name))])]),e._v(" "),t("td",[t("div",{staticClass:"cell"},[e._v(e._s(a.numbering))])])])}))])]),e._v(" "),t("section",{staticClass:"pposition-r"},[t("section",{staticClass:"pp-r-t"},[t("span",[e._v("监区:")]),e._v(" "),t("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),t("span",[e._v("监舍:")]),e._v(" "),t("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),t("span",[e._v("房间:")]),e._v(" "),t("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),t("span",[e._v("监管类型:")]),e._v(" "),t("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),t("span",[e._v("服刑人员:")]),e._v(" "),t("el-input",{staticClass:"pp-input",attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}}),e._v(" "),t("el-button",{attrs:{size:"small",type:"primary"}},[e._v("搜索")])],1),e._v(" "),t("section",{staticClass:"pp-r-d clearfix"},[t("section",{staticClass:"pp-r-d-l fl"},[t("p",{staticClass:"h-line"},[e._v("基本信息")]),e._v(" "),t("div",{staticClass:"pp-r-d-l-l fl"},[t("div",[t("span",[e._v("编号:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}})],1),e._v(" "),t("div",[t("span",[e._v("姓名:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}})],1),e._v(" "),t("div",[t("span",[e._v("性别:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}})],1),e._v(" "),t("div",[t("span",[e._v("民族:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}})],1),e._v(" "),t("div",[t("span",[e._v("出生日期:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}})],1),e._v(" "),t("div",[t("span",[e._v("文化程度:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}})],1),e._v(" "),t("div",[t("span",[e._v("婚姻状况:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}})],1),e._v(" "),t("div",[t("span",[e._v("罪名:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}})],1),e._v(" "),t("div",[t("span",[e._v("刑期:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}})],1),e._v(" "),t("div",[t("span",[e._v("已服刑时长:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}})],1),e._v(" "),t("div",[t("span",[e._v("剩余时长:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}})],1),e._v(" "),t("div",{staticClass:"div-select"},[t("span",[e._v("监区:")]),e._v(" "),t("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("div",{staticClass:"div-select"},[t("span",[e._v("监舍:")]),e._v(" "),t("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("div",{staticClass:"div-select"},[t("span",[e._v("楼层:")]),e._v(" "),t("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("div",{staticClass:"div-select"},[t("span",[e._v("房间:")]),e._v(" "),t("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("div",{staticClass:"div-select"},[t("span",[e._v("监管类型:")]),e._v(" "),t("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("div",[t("span",[e._v("责任预警:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}})],1),e._v(" "),t("div",[t("span",[e._v("籍贯:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}}),e._v(" "),t("span",[e._v("省")])],1),e._v(" "),t("div",[t("span"),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}}),e._v(" "),t("span",[e._v("市")])],1),e._v(" "),t("div",[t("span",[e._v("家庭联系人:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}})],1),e._v(" "),t("div",[t("span",[e._v("联系电话:")]),e._v(" "),t("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}})],1)]),e._v(" "),e._m(1)]),e._v(" "),t("section",{staticClass:"pp-r-d-r"},[t("p",{staticClass:"h-line"},[e._v("当日预警事件")]),e._v(" "),t("section",{staticClass:"el-table-wrap clearfix"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pPTableData,stripe:""}},[t("el-table-column",{attrs:{prop:"starttime",label:"预警开始时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"endtime",label:"预警结束时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"during",label:"预警时长"}}),e._v(" "),t("el-table-column",{attrs:{prop:"tyle",label:"预警事件类型"}}),e._v(" "),t("el-table-column",{attrs:{prop:"area",label:"所在区域"}}),e._v(" "),t("el-table-column",{attrs:{label:"监控视频"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{staticClass:"operating"},[t("span",{on:{click:function(t){e.handleEdit(a.$index,a.row)}}},[e._v("视频")])])]}}])})],1),e._v(" "),t("div",{staticClass:"el-pagination-wrap"},[t("table-pagination",{attrs:{"page-index":e.currentPage,total:e.count,"page-size":e.pageSize},on:{change:e.pageChange}})],1)],1)]),e._v(" "),t("section",{staticClass:"pp-r-d-r pp-r-d-r-d"},[t("p",{staticClass:"h-line"},[t("el-tabs",{staticClass:"pos-res",on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"当前活动区域",name:"first"}},[t("img",{attrs:{src:e.currentPos,alt:""}}),e._v(" "),t("video",{attrs:{width:"320",height:"240",controls:"controls"}},[t("source",{attrs:{src:"movie.ogg",type:"video/ogg"}}),e._v(" "),t("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),e._v(" Your browser does not support the video tag.\n              ")]),e._v(" "),t("video",{attrs:{width:"320",height:"240",controls:"controls"}},[t("source",{attrs:{src:"movie.ogg",type:"video/ogg"}}),e._v(" "),t("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),e._v(" Your browser does not support the video tag.\n              ")])]),e._v(" "),t("el-tab-pane",{attrs:{label:"历史活动区域",name:"second"}},[t("section",{staticClass:"filter-wrap"},[t("span",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("时间")]),e._v(" "),t("el-date-picker",{attrs:{size:"mini",type:"datetime",placeholder:"选择开始时间"},model:{value:e.value7,callback:function(a){e.value7=a},expression:"value7"}}),e._v(" "),t("span",[e._v("-")]),e._v(" "),t("el-date-picker",{attrs:{size:"mini",type:"datetime",placeholder:"选择结束时间"},model:{value:e.value7,callback:function(a){e.value7=a},expression:"value7"}})],1)]),e._v(" "),t("section",{staticClass:"el-table-wrap clearfix"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pPTableData,stripe:""}},[t("el-table-column",{attrs:{prop:"starttime",label:"进时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"endtime",label:"出时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"during",label:"区域"}}),e._v(" "),t("el-table-column",{attrs:{prop:"tyle",label:"停留时间"}}),e._v(" "),t("el-table-column",{attrs:{label:"监控视频"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{staticClass:"operating"},[t("span",{on:{click:function(t){e.handleEdit(a.$index,a.row)}}},[e._v("视频")])])]}}])})],1),e._v(" "),t("div",{staticClass:"el-pagination-wrap"},[t("table-pagination",{attrs:{"page-index":e.currentPage,total:e.count,"page-size":e.pageSize},on:{change:e.pageChange}})],1)],1)])],1)],1)]),e._v(" "),t("section")])])])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("thead",[a("tr",[a("th",[a("div",{staticClass:"cell"},[this._v("序号")])]),this._v(" "),a("th",[a("div",{staticClass:"cell"},[this._v("姓名")])]),this._v(" "),a("th",[a("div",{staticClass:"cell"},[this._v("编号")])])])])},function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"pp-r-d-l-r fr"},[l("div",{staticClass:"imgWrap",attrs:{title:"照片"}},[l("span",{staticClass:"pp-photo"}),e._v(" "),l("div",[l("img",{attrs:{src:t("3zX0"),alt:""}}),e._v(" "),l("span",[e._v("正面")])]),e._v(" "),l("div",[l("img",{attrs:{src:t("3zX0"),alt:""}}),e._v(" "),l("span",[e._v("低头")])]),e._v(" "),l("div",[l("img",{attrs:{src:t("3zX0"),alt:""}}),e._v(" "),l("span",[e._v("侧面")])]),e._v(" "),l("div",[l("img",{attrs:{src:t("3zX0"),alt:""}}),e._v(" "),l("span",[e._v("抬头")])])]),e._v(" "),l("div",{staticClass:"imgWrap",attrs:{title:"视觉识别码"}},[l("span"),e._v(" "),l("div",[l("img",{attrs:{src:t("3zX0"),alt:""}}),e._v(" "),l("span",[e._v("正面")])]),e._v(" "),l("div",[l("img",{attrs:{src:t("3zX0"),alt:""}}),e._v(" "),l("span",[e._v("低头")])])])])}]};var o=t("VU/8")(n,i,!1,function(e){t("Wd1v")},"data-v-c1e2e688",null);a.default=o.exports},Wd1v:function(e,a){},esw1:function(e,a,t){e.exports=t.p+"img/currentPos.3a25300.png"}});
//# sourceMappingURL=7.e1f6159ebd9017623023.js.map