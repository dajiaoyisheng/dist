webpackJsonp([10],{lA1m:function(t,e){},ldGv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{labelPosition:"right",form:{userName:"",passWord:"",insurePwd:""},rules:{userName:[{required:!0,message:"请输入用户名称",trigger:"blur"}],passWord:[{required:!0,message:"请输入用户密码",trigger:"blur"}],insurePwd:[{required:!0,message:"请再次确认密码",trigger:"blur"}]}}},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.$post("/saveUser",e.form).then(function(t){0===t.status&&(e.$message.success(response.statusinfo),e.resetForm("form"))}).catch(function(t){}).then(function(){})})},resetForm:function(t){this.$refs[t].resetFields()},queryUser:function(t){var e=this;this.$post("/getUser",t).then(function(t){0===t.status&&(e.form=t.data)}).catch(function(t){}).then(function(){})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"userDialog"}},[a("el-form",{ref:"form",staticClass:"demo-form",attrs:{"label-position":t.labelPosition,"label-width":"100px",model:t.form,rules:t.rules}},[a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[a("el-input",{staticStyle:{width:"220px"},attrs:{clearable:""},model:{value:t.form.userName,callback:function(e){t.$set(t.form,"userName",e)},expression:"form.userName"}})],1)],1)],1),t._v(" "),a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"用户密码",prop:"passWord"}},[a("el-input",{staticStyle:{width:"220px"},attrs:{type:"password",clearable:""},model:{value:t.form.passWord,callback:function(e){t.$set(t.form,"passWord",e)},expression:"form.passWord"}})],1)],1)],1),t._v(" "),a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"确认密码",prop:"insurePwd"}},[a("el-input",{staticStyle:{width:"220px"},attrs:{type:"password",clearable:""},model:{value:t.form.insurePwd,callback:function(e){t.$set(t.form,"insurePwd",e)},expression:"form.insurePwd"}})],1)],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.submitForm("form")}}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(e){t.resetForm("form")}}},[t._v("重置")])],1)],1)],1)},staticRenderFns:[]};var n={data:function(){return{dialogTitle:"新增用户",count:0,tabId:"tab-0",addUser:!1,parameter:{name:""},loggerList:[],userList:[]}},methods:{queryLoggers:function(){var t=this,e={searchKey:this.parameter,currPage:this.$refs.loggerPagination.index,pageSize:this.$refs.loggerPagination.pageSize};this.$post("/getLoggers",e).then(function(e){0===e.status&&(t.count=e.data.count,t.loggerList=e.data.data)}).catch(function(t){}).then(function(){})},queryUsers:function(){var t=this,e={searchKey:this.parameter,currPage:this.$refs.userPagination.index,pageSize:this.$refs.userPagination.pageSize};this.$post("/getUsers",e).then(function(e){0===e.status&&(t.count=e.data.count,t.userList=e.data.data)}).catch(function(t){}).then(function(){})},addUserClose:function(t){var e=this;this.$confirm("确认关闭？").then(function(){t(),e.$refs.addUserDialog.resetForm("form"),e.queryUsers()}).catch(function(t){})},initModifyUser:function(t){var e=this;this.addUser=!0,this.dialogTitle="修改用户",this.$nextTick(function(){e.$refs.addUserDialog.queryUser(t.guid)})},deleteUser:function(t,e){var a=this;this.$confirm("是否删除用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$post("/deleteUser",e.guid).then(function(e){0===e.status&&(a.userList.splice(t,1),a.$message.success(response.statusinfo))}).catch(function(t){}).then(function(){})}).catch(function(t){})},changeTabs:function(t,e){this.parameter.name="",this.tabId=e.target.getAttribute("id"),"tab-0"==this.tabId?(this.$refs.loggerPagination.index=1,this.queryLoggers()):"tab-1"==this.tabId&&(this.$refs.userPagination.index=1,this.queryUsers())},changeCurrent:function(){"tab-0"==this.tabId?this.queryLoggers():"tab-1"==this.tabId&&this.queryUsers()}},mounted:function(){this.queryLoggers()},components:{userDialog:a("VU/8")(s,r,!1,function(t){a("lA1m")},"data-v-8c91ea70",null).exports,tablePagination:a("zeeE").a}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w1200",attrs:{id:"systemmanagement"}},[a("el-container",[a("el-header",[a("el-row",[a("el-col",{staticClass:"stm-header-title",attrs:{span:21}},[a("span",[t._v("系统管理")])])],1)],1),t._v(" "),a("el-main",[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.changeTabs}},[a("el-tab-pane",{attrs:{label:"日志管理"}},[a("section",[a("el-row",{staticClass:"logger-params"},[a("el-col",{attrs:{span:20}},[a("span",{staticStyle:{color:"#666"}},[t._v("用户操作日志")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-input",{staticClass:"logger-params-input",attrs:{size:"mini",placeholder:"搜索关键词",clearable:""},model:{value:t.parameter.name,callback:function(e){t.$set(t.parameter,"name",e)},expression:"parameter.name"}}),t._v(" "),a("el-button",{staticClass:"search-btn",attrs:{size:"mini"},on:{click:function(e){t.queryLoggers()}}},[t._v("搜索")])],1)],1)],1),t._v(" "),a("section",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.loggerList}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"操作内容："}},[a("span",[t._v(t._s(e.row.optionContent))])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作人",prop:"optionUser"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作IP",prop:"optionIP"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作名称",prop:"optionName"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作时间",prop:"optionTime"}})],1),t._v(" "),a("div",{staticClass:"el-pagination-wrap text-center"},[a("table-pagination",{ref:"loggerPagination",attrs:{total:t.count},on:{change:t.changeCurrent}})],1)],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:"用户管理"}},[a("section",[a("el-row",{staticClass:"logger-params"},[a("el-col",{attrs:{span:20}},[a("span",{staticStyle:{color:"#666"}},[t._v("用户列表")]),t._v(" "),a("el-button",{staticStyle:{color:"#666","margin-left":"20px"},attrs:{type:"text",icon:"el-icon-plus"},on:{click:function(e){t.addUser=!0,t.dialogTitle="新增用户"}}},[t._v("添加用户")]),t._v(" "),a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.addUser,width:"400px","before-close":t.addUserClose},on:{"update:visible":function(e){t.addUser=e}}},[a("userDialog",{ref:"addUserDialog"})],1)],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-input",{staticClass:"logger-params-input",attrs:{size:"mini",placeholder:"搜索用户",clearable:""},model:{value:t.parameter.name,callback:function(e){t.$set(t.parameter,"name",e)},expression:"parameter.name"}}),t._v(" "),a("el-button",{staticClass:"search-btn",attrs:{size:"mini"},on:{click:function(e){t.queryUsers()}}},[t._v("搜索")])],1)],1)],1),t._v(" "),a("section",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.userList,stripe:""}},[a("el-table-column",{attrs:{prop:"userName",label:"用户名称",align:"center",width:"200px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"el-icon-edit",staticStyle:{padding:"0px 15px"},attrs:{type:"text"},on:{click:function(a){t.initModifyUser(e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{staticClass:"el-icon-delete",staticStyle:{padding:"0px 15px"},attrs:{type:"text"},nativeOn:{click:function(a){a.preventDefault(),t.deleteUser(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"el-pagination-wrap text-center"},[a("table-pagination",{ref:"userPagination",attrs:{total:t.count},on:{change:t.changeCurrent}})],1)],1)])],1)],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(n,i,!1,function(t){a("uaEU"),a("xu1m")},null,null);e.default=o.exports},uaEU:function(t,e){},xu1m:function(t,e){}});
//# sourceMappingURL=10.e15f0e89b2f7126c6f7a.js.map