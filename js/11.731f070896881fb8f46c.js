webpackJsonp([11],{ASkb:function(t,e){},SpcO:function(t,e){},"ioZ+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"workbench-wrap w1200"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("犯人总数")])]),t._v(" "),a("div",{staticClass:"bench-item"},[a("div",{staticClass:"bench-item-left v-c"},[a("router-link",{staticClass:"num-big num-color",attrs:{to:"/personnelposition"}},[t._v(t._s(t.criminalStatistics.personnum)+"人")])],1),t._v(" "),a("div",{staticClass:"bench-item-right v-c"},[a("ul",t._l(t.criminalStatistics.prisonsers,function(e){return a("li",{key:e.area},[a("span",[t._v(t._s(e.area)+"：")]),t._v(" "),a("router-link",{staticClass:"num-color word-width",attrs:{to:{path:"/personnelposition",query:{area:e.area}}}},[t._v(t._s(e.pNumItem)+"人")])],1)}))])])])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("人员分类")])]),t._v(" "),a("div",{staticClass:"bench-item"},[[a("ve-pie",{attrs:{width:"100%",height:"100%","judge-width":!0,data:t.benchChartPieData,extend:t.pieExtend,"after-config":t.pieAfterConfig}})]],2)])],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("预警事件分类")])]),t._v(" "),a("div",{staticClass:"bench-item"},[[a("ve-histogram",{attrs:{data:t.benchChartbarData,height:"100%",width:"100%",extend:t.histogramExtend,settings:t.chartSettings}})]],2)])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("人员状态")])]),t._v(" "),a("div",{staticClass:"bench-item p-status-wrap"},[a("ul",{staticClass:"p-status clearfix"},t._l(t.pStatus,function(e){return a("li",{key:e.status},[a("span",[t._v(t._s(e.status)+":")]),t._v(" "),a("router-link",{staticClass:"num-color word-width",attrs:{to:{path:"/personnelposition",query:{status:e.status}}}},[t._v(t._s(e.pNum)+"人")])],1)}))])])],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[t._v("\n      平面图\n    ")])],1)],1)},staticRenderFns:[]};var i=a("VU/8")({data:function(){return{pStatus:[],benchChartbarData:[],benchChartPieData:[],criminalStatistics:{personnum:"",prisonsers:[]},pieExtend:{},histogramExtend:{},chartSettings:{labelMap:{action:"违规行为",number:"个数",pNumber:"人数"}}}},mounted:function(){this.getPSum(),this.getPClass(),this.getPStatus(),this.getPictureList(),this.getPreWarningClass()},methods:{getPSum:function(){var t=this;this.$get(this.urlconfig.wkGetPrisonersData).then(function(e){0===e.status&&(t.criminalStatistics=e.data)}).catch(function(t){})},getPClass:function(){var t=this;this.$get(this.urlconfig.wkGetBenchChartPie).then(function(e){0===e.status&&(t.benchChartPieData=e.data.pieData,t.setPieExtend())}).catch(function(t){})},getPreWarningClass:function(){var t=this;this.$get(this.urlconfig.wkGetBenchChartbarData).then(function(e){0===e.status&&(t.benchChartbarData=e.data,t.setHistogramExtend())}).catch(function(t){})},getPStatus:function(){var t=this;this.$get(this.urlconfig.wkGetPStatus).then(function(e){0===e.status&&(t.pStatus=e.data)}).catch(function(t){})},getPictureList:function(){},displayBImg:function(t,e){},pieAfterConfig:function(t){return t.legend&&(t.legend.formatter=function(e){var a;return t.series[0].data.map(function(t){t.name===e&&(a=t.value)}),e+"  "+a}),t},setHistogramExtend:function(){var t=this;this.histogramExtend={color:["#00c6dd","#5867c2"],tooltip:{enterable:!0,position:["20%","20%"],trigger:"axis",extraCssText:"z-index: 99",formatter:function(e){var a="",s="",i=e[0].dataIndex;t.benchChartbarData.rows[i].detils.map(function(t){a=a+'<div class="class-r-span text-center">'+t.detil+"</div>",s=s+'<div>\n                    <a class="fontcolor wordspacing num-color text-decoration" href="/#/querystats/violation?warnclass='+t.detil+'">'+t.pNumber+'</a>\n                    <a class="fontcolor wordspacing num-color text-decoration" href="/#/querystats/violation?warnclass='+t.detil+'">'+t.number+"</a>\n                  </div>"});var n=e[0]||e,r=e[1]||e;return'<div class="tooltip-wrap clearfixe">\n                    <div class="tooltip-left fl">\n                      <div class="tooltip-header text-center">分类</div>\n                      '+a+'\n                    </div>\n                    <div class="tooltip-right fr">\n                      <div class="tooltip-header">\n                        <span>'+r.seriesName+"</span>\n                        <span>"+n.seriesName+"</span>\n                      </div>\n                      "+s+"\n                    </div>\n                  </div>"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:{label:{show:!0,position:"top"},barMaxWidth:30,barGap:0,type:"bar"},legend:{right:"5%",itemWidth:10,itemHeight:10,itemGap:20,textStyle:{padding:[0,0,0,10]}}}},setPieExtend:function(){this.pieExtend={tooltip:{enterable:!0,trigger:"item",position:"inside",extraCssText:"z-index: 99",formatter:function(t){var e=t[0]||t;return"<div>\n                <p>"+e.name+'</p>\n                <p>\n                  <a class="fontcolor num-color text-decoration" href="/#/personnelposition?level='+e.name+'">'+e.value+"</a>\n                </p>\n                <p>"+e.percent+"%</p>\n              </div>"}},legend:{orient:"vertical",top:"middle",right:"5%",itemWidth:10,itemHeight:10,itemGap:20,textStyle:{padding:[0,0,0,10]}},series:{center:["30%","50%"],label:{show:!1},itemStyle:{normal:{borderWidth:4,borderColor:"#ffffff"}}}}}}},s,!1,function(t){a("ASkb"),a("SpcO")},"data-v-2ccca394",null);e.default=i.exports}});
//# sourceMappingURL=11.731f070896881fb8f46c.js.map