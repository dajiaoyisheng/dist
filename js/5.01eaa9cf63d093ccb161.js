webpackJsonp([5],{"0Tre":function(t,e){t.exports="data:image/gif;base64,R0lGODlhBQAsALMAAFNzmsfa8pOYm7vQ66/G4qS926C41sfa8////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAFACwAAAQzUEgZBinmWKxv3p/XceAYkmKppizKISKCvHImy8cN5AhgAxxA60Q0GVeuIlI5PDZBE0kEADs="},N3Qq:function(t,e){},VOw2:function(t,e){},mGbH:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("0Tre"),i=a.n(n),s=a("oXX7"),l=a.n(s),o=a("wa1j"),r=a.n(o),c=a("QcOD"),p=a.n(c),d={data:function(){return{message:"人员点名",pnAside:!0,pnMainAside:!1,pnAsideLeft:250,pnMainAsideLeft:257,images:{left:i.a,right:l.a,video:r.a,warning:p.a},topPagination:{pageSize:10,currentPage:1,totalRows:100},bottomPagination:{pageSize:10,currentPage:1,totalRows:100},parameter:{name:""},treeData:[],topTableData:[],bottomTableData:[]}},methods:{handleNodeClick:function(t){alert("获取下级")},showVideo:function(t,e,a){this.pnMainAside=!0},closeVideo:function(){this.pnMainAside=!1},doQuery:function(){alert("服刑人员:"+this.parameter.name)},topTableChange:function(){alert("切换分页")},bottomTableChange:function(){alert("切换分页")},showItem:function(t,e){this.$router.push({path:"/personnelposition"})}},mounted:function(){var t=this;this.$ajxj.get("/getPrisonareatree").then(function(e){t.treeData=e.data}).catch(function(t){}).then(function(){}),this.$ajxj.get("/getPointNameDatas").then(function(e){t.topTableData=e.data.topTableData,t.bottomTableData=e.data.bottomTableData}).catch(function(t){}).then(function(){})}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"pointname"}},[t.pnAside?a("section",{staticClass:"pn-left"},[a("el-tree",{attrs:{data:t.treeData,"node-key":"id","default-expand-all":"","expand-on-click-node":!1},on:{"node-click":t.handleNodeClick},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.node,i=e.data;return a("span",{staticClass:"custom-tree-node"},[0==i.isWarning?a("span",[a("i",{class:n.icon}),t._v(t._s(n.label))]):t._e(),t._v(" "),1==i.isWarning?a("span",[a("i",[a("img",{attrs:{src:t.images.warning}})]),t._v(t._s(n.label))]):t._e()])}}])})],1):t._e(),t._v(" "),a("section",{staticClass:"pn-center",style:{left:t.pnAsideLeft+"px"}},[a("div",{staticStyle:{position:"absolute",top:"50%"}},[t.pnAside?a("img",{attrs:{src:t.images.right},on:{click:function(e){t.pnAside=!1,t.pnAsideLeft=0,t.pnMainAsideLeft=7}}}):t._e(),t._v(" "),t.pnAside?t._e():a("img",{attrs:{src:t.images.left},on:{click:function(e){t.pnAside=!0,t.pnAsideLeft=250,t.pnMainAsideLeft=257}}})])]),t._v(" "),a("section",{staticClass:"pn-right",class:{"pn-right-show":!t.pnAside,"pn-right-hidden":t.pnAside}},[a("section",{staticClass:"pn-right-header"},[a("span",{staticStyle:{"font-size":"14px"}},[t._v("服刑人员:")]),t._v(" "),a("el-input",{staticClass:"pn-right-header-input",attrs:{size:"small",placeholder:"请输入服刑人员姓名或编号",clearable:""},model:{value:t.parameter.name,callback:function(e){t.$set(t.parameter,"name",e)},expression:"parameter.name"}}),t._v(" "),a("el-button",{staticClass:"search-btn",attrs:{size:"mini"},on:{click:function(e){t.doQuery()}}},[t._v("查询")])],1),t._v(" "),a("section",{staticClass:"pn-right-main",style:{left:t.pnMainAsideLeft+"px"}},[a("el-container",[a("el-main",{staticClass:"pn-right-main-main"},[a("section",{staticClass:"pn-right-main-main-top"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"pn-card-label",attrs:{slot:"header"},slot:"header"},[t._v("未到人员列表("),a("span",{staticStyle:{color:"red"}},[t._v(t._s(t.topTableData.length)+"人")]),t._v(")")]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.topTableData,stripe:"",height:"175"}},[a("el-table-column",{attrs:{prop:"number",label:"编号","min-width":"100px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"姓名","min-width":"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"btn",on:{click:function(a){t.showItem(e.$index,e.row)}}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"warningType",label:"预警事件类型","min-width":"120px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"lastArea",label:"最后一次被定位区域","min-width":"230px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"lastTime",label:"最后一次被定位时间","min-width":"200px"}}),t._v(" "),a("el-table-column",{attrs:{label:"视频",width:"100px",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"btn",attrs:{type:"text",size:"mini"},on:{click:function(a){t.showVideo("topTableData",e.$index,e.row)}}},[a("img",{staticStyle:{display:"inline-block","line-height":"20px","vertical-align":"middle"},attrs:{src:t.images.video}}),t._v(" "),a("span",{staticStyle:{display:"inline-block","line-height":"20px","vertical-align":"middle"}},[t._v("查看")])])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{layout:"prev, pager, next, jumper","current-page":t.topPagination.currentPage,"page-size":t.topPagination.pageSize,total:t.topPagination.totalRows},on:{"current-change":function(e){t.topTableChange()},"update:currentPage":function(e){t.$set(t.topPagination,"currentPage",e)}}})],1)],1),t._v(" "),a("section",{staticClass:"pn-main-main-bottom"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"pn-card-label",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("已到人员列表("+t._s(t.bottomTableData.length)+"人)")])]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.bottomTableData,stripe:"",height:"380"}},[a("el-table-column",{attrs:{prop:"number",label:"编号","min-width":"100px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"姓名","min-width":"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"btn",on:{click:function(a){t.showItem(e.$index,e.row)}}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"area",label:"当前区域","min-width":"230px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"time",label:"识别时间","min-width":"200px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"func",label:"识别方法","min-width":"100px"}}),t._v(" "),a("el-table-column",{attrs:{label:"视频",width:"100px",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"btn",attrs:{type:"text",size:"mini"},on:{click:function(a){t.showVideo("bottomTableData",e.$index,e.row)}}},[a("img",{staticStyle:{display:"inline-block","line-height":"20px","vertical-align":"middle"},attrs:{src:t.images.video}}),t._v(" "),a("span",{staticStyle:{display:"inline-block","line-height":"20px","vertical-align":"middle"}},[t._v("查看")])])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{layout:"prev, pager, next, jumper","current-page":t.bottomPagination.currentPage,"page-size":t.bottomPagination.pageSize,total:t.bottomPagination.totalRows},on:{"current-change":function(e){t.bottomTableChange()},"update:currentPage":function(e){t.$set(t.bottomPagination,"currentPage",e)}}})],1)],1)]),t._v(" "),t.pnMainAside?a("el-aside",{staticClass:"pn-right-main-aside",staticStyle:{width:"400px"}},[a("el-card",{staticClass:"box-card"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"pn-card-label"},[t._v("监控视频")]),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.closeVideo()}}},[t._v("关闭")])],1),t._v(" "),a("div",[t._v("\n              视频内容\n            ")])])],1):t._e()],1)],1)])])},staticRenderFns:[]};var u=a("VU/8")(d,A,!1,function(t){a("N3Qq"),a("VOw2")},"data-v-cd50f17a",null);e.default=u.exports},oXX7:function(t,e){t.exports="data:image/gif;base64,R0lGODlhBQAsALMAAFNzmsfa8pOYm7vQ66/G4qS926C41sfa8////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAFACwAAAQzUEgZBinmWKxv3p/XceAYkmKppizKISKCvHImy8cN5AhgAxxA60Q0GVeuIlI5PDZBE0kEADs="}});
//# sourceMappingURL=5.01eaa9cf63d093ccb161.js.map