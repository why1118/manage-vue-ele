(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39ff4e83"],{"072a":function(t,e,i){},9245:function(t,e,i){"use strict";var a=i("072a"),n=i.n(a);n.a},a076:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("p",{attrs:{id:"userShow"}},[t._v("用户展示")]),t._v(" "),i("div",{staticClass:"nav",attrs:{id:"nav"}},t._l(t.nav,function(e,a){return i("span",{key:a,class:t.idx===a?"blue":"",attrs:{"data-val":a},on:{click:function(e){return t.change(a)}}},[t._v(t._s(e))])}),0),t._v(" "),i("h2",{attrs:{id:"tits"}},[t._v(t._s(t.tit))]),t._v(" "),i("div",{attrs:{id:"table"}},[t.idx?i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.data}},t._l(t.tits[t.idx],function(e,a){return i("el-table-column",{key:a,style:{width:"100%"/t.tabNav[t.idx].length},attrs:{prop:e,label:t.tabNav[t.idx][a]}})}),1):i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.data}},[i("el-table-column",{attrs:{prop:"user_name",label:"用户名",width:NaN}}),t._v(" "),i("el-table-column",{attrs:{prop:"user_pwd",label:"密码",width:"650"}}),t._v(" "),i("el-table-column",{attrs:{prop:"identity_text",label:"身份",width:NaN}})],1)],1),t._v(" "),i("div",{attrs:{id:"pagination"}},[i("el-pagination",{attrs:{"current-page":t.dftPage,layout:"prev, pager, next",total:t.totals},on:{"update:currentPage":function(e){t.dftPage=e},"update:current-page":function(e){t.dftPage=e},"current-change":t.handleCurrentChange}})],1)])},n=[],r=(i("4453"),i("ee95")),s=i("3f47"),o=i("cd3f"),u=i.n(o),d=(i("11dd"),i("fbde")),h=i("52c1"),p={name:"Guide",data:function(){return{nav:["用户数据","身份数据","api接口权限","身份和api接口关系","视图接口权限","身份和视图权限关系"],tabNav:[["用户名","密码","身份"],["身份名称"],["api权限名称","api权限接口","api权限方法"],["身份名称","api权限名称","api权限url","api权限方法"],["视图权限名称","视图id"],["身份","视图名称","视图id"]],tits:[["user_name","user_pwd","identity_text"],["identity_text"],["api_authority_text","api_authority_url","api_authority_method"],["identity_text","api_authority_text","api_authority_url","api_authority_method"],["view_authority_text","view_id"],["identity_text","view_authority_text","view_id"]],idx:0,tit:"用户数据",page:1,pageTit:["userData","identitysData","apiAuthoritysData","identityApiAuthorityRelationsData","viewAuthoritysData","identityViewAuthorityRelationsData"],dftPage:1,driver:null,totals:0}},mounted:function(){this.driver=new u.a},computed:Object(s["a"])({},Object(h["e"])({data:function(t){return t.userShow.data},pageSize:function(t){return t.userShow.pageSize},userData:function(t){return t.userShow.userData},identitysData:function(t){return t.userShow.identitysData},apiAuthoritysData:function(t){return t.userShow.apiAuthoritysData},identityApiAuthorityRelationsData:function(t){return t.userShow.identityApiAuthorityRelationsData},viewAuthoritysData:function(t){return t.userShow.viewAuthoritysData},identityViewAuthorityRelationsData:function(t){return t.userShow.identityViewAuthorityRelationsData}})),created:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.setUserData();case 2:return t.next=4,this.setidentity();case 4:return t.next=6,this.setApiAuthority();case 6:return t.next=8,this.setIdentityApiAuthorityRelation();case 8:return t.next=10,this.setViewAuthority();case 10:return t.next=12,this.setidentityViewAuthorityRelation();case 12:this.totals=this.userData.length,e=localStorage.getItem("guide_userShow"),e||(this.driver.defineSteps(d["a"]),this.driver.start(),localStorage.setItem("guide_userShow","true"));case 15:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:Object(s["a"])({},Object(h["b"])({setUserData:"userShow/setUserData",setidentity:"userShow/setidentity",setApiAuthority:"userShow/setApiAuthority",setIdentityApiAuthorityRelation:"userShow/setIdentityApiAuthorityRelation",setViewAuthority:"userShow/setViewAuthority",setidentityViewAuthorityRelation:"userShow/setidentityViewAuthorityRelation"}),Object(h["d"])({tableList:"userShow/list"}),{handleCurrentChange:function(t){this.page=t,this.tableList({data:this.pageTit[this.idx],pages:this.page})},change:function(t){this.dftPage=1,this.tableList({idx:t,data:this.pageTit[t],pages:1}),this.idx=t,this.tit=this.nav[t],this.totals=this[this.pageTit[this.idx]].length}})},l=p,c=(i("9245"),i("17cc")),y=Object(c["a"])(l,a,n,!1,null,"619c996c",null);e["default"]=y.exports},fbde:function(t,e,i){"use strict";var a=[{element:"#addUsers",popover:{title:"添加用户",description:"标题",position:"bottom"}},{element:"#box",popover:{title:"填写位置",description:"填写需要添加的内容",position:"bottom"}},{element:"#userShow",popover:{title:"用户展示",description:"标题",position:"bottom"}},{element:"#nav",popover:{title:"tab导航切换",description:"点击切换不同内容",position:"bottom"}},{element:"#tits",popover:{title:"数据类型",description:"根据tab导航切换不同数据类型",position:"bottom"}},{element:"#table",popover:{title:"数据展示",description:"根据tab导航切换不同数据内容",position:"bottom"},padding:0},{element:"#pagination",popover:{title:"分页器",description:"点击切换页码，页数",position:"top"},padding:0}];e["a"]=a}}]);