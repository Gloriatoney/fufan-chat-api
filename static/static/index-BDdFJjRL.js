import{g as T,d as D}from"./index-B1NUBlQL.js";import{V as s,d as P,r as y,_,n as $,ai as x,o as M,c as S,P as p,T as b,L as k}from"./vue-39WfQX0x.js";import{A as E,E as w}from"./element-jUUjv72Y.js";import"./index-DqMa_eN-.js";import"./vxe-DW97H3iJ.js";const R={default:({row:h,column:l})=>{const i=h[l.field];return[s("span",{class:`el-tag el-tag--${i==="admin"?"primary":"warning"} el-tag--plain`},[i])]}},U=R,F={default:({row:h,column:l})=>{const i=h[l.field],[c,g]=i?["success","启用"]:["danger","禁用"];return[s("span",{class:`el-tag el-tag--${c} el-tag--plain`},[g])]}},O=F,V={class:"app-container"},G=P({name:"VxeTable",__name:"index",setup(h){const l=y(),i=_({loading:!0,autoResize:!0,pagerConfig:{align:"right"},formConfig:{items:[{field:"username",itemRender:{name:"$input",props:{placeholder:"用户名",clearable:!0}}},{field:"phone",itemRender:{name:"$input",props:{placeholder:"手机号",clearable:!0}}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},toolbarConfig:{refresh:!0,custom:!0,slots:{buttons:"toolbar-btns"}},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},columns:[{type:"checkbox",width:"50px"},{field:"username",title:"用户名"},{field:"roles",title:"角色",slots:U},{field:"phone",title:"手机号"},{field:"email",title:"邮箱"},{field:"status",title:"状态",slots:O},{field:"createTime",title:"创建时间"},{title:"操作",width:"150px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:t})=>(i.loading=!0,r.clearTable(),new Promise(o=>{let a=0,u=[];const d=n=>{n!=null&&n.data&&(a=n.data.total,u=n.data.list),i.loading=!1,o({total:a,result:u})},f={username:t.username||void 0,phone:t.phone||void 0,size:e.pageSize,currentPage:e.currentPage};T(f).then(d).catch(d)}))}}}),c=y(),g=_({title:"",showClose:!0,escClosable:!0,maskClosable:!0,beforeHideMethod:()=>{var e;return(e=v.value)==null||e.clearValidate(),Promise.resolve()}}),v=y(),m=_({span:24,titleWidth:"100px",loading:!1,titleColon:!1,data:{username:"",password:""},items:[{field:"username",title:"用户名",itemRender:{name:"$input",props:{placeholder:"请输入"}}},{field:"password",title:"密码",itemRender:{name:"$input",props:{placeholder:"请输入"}}},{align:"right",itemRender:{name:"$buttons",children:[{props:{content:"取消"},events:{click:()=>{var e;return(e=c.value)==null?void 0:e.close()}}},{props:{type:"submit",content:"确定",status:"primary"},events:{click:()=>r.onSubmitForm()}}]}}],rules:{username:[{required:!0,validator:({itemValue:e})=>{switch(!0){case!e:return new Error("请输入");case!e.trim():return new Error("空格无效")}}}],password:[{required:!0,validator:({itemValue:e})=>{switch(!0){case!e:return new Error("请输入");case!e.trim():return new Error("空格无效")}}}]}}),r=_({isUpdate:!0,commitQuery:()=>{var e;return(e=l.value)==null?void 0:e.commitProxy("query")},clearTable:()=>{var e;return(e=l.value)==null?void 0:e.reloadData([])},onShowModal:e=>{var o,a,u,d;e?(r.isUpdate=!0,g.title="修改用户",m.data.username=e.username):(r.isUpdate=!1,g.title="新增用户");const t=(u=(a=(o=m.items)==null?void 0:o[0])==null?void 0:a.itemRender)==null?void 0:u.props;t&&(t.disabled=r.isUpdate),(d=c.value)==null||d.open(),$(()=>{var f,n;!r.isUpdate&&((f=v.value)==null||f.reset()),(n=v.value)==null||n.clearValidate()})},onSubmitForm:()=>{var e;m.loading||(e=v.value)==null||e.validate(t=>{if(t)return;m.loading=!0;const o=()=>{var a;m.loading=!1,(a=c.value)==null||a.close(),w.success("操作成功"),!r.isUpdate&&r.afterInsert(),r.commitQuery()};r.isUpdate?setTimeout(()=>o(),1e3):setTimeout(()=>o(),1e3)})},afterInsert:()=>{var t,o;const e=(o=(t=l.value)==null?void 0:t.getProxyInfo())==null?void 0:o.pager;e&&e.currentPage*e.pageSize===e.total&&++e.currentPage},onDelete:e=>{const t=`确定 <strong style="color: var(--el-color-danger);"> 删除 </strong> 用户 <strong style="color: var(--el-color-primary);"> ${e.username} </strong> ？`,o={type:"warning",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0};E.confirm(t,"提示",o).then(()=>{D(e.id).then(()=>{w.success("删除成功"),r.afterDelete(),r.commitQuery()})})},afterDelete:()=>{var o,a;const e=l.value.getData(),t=(a=(o=l.value)==null?void 0:o.getProxyInfo())==null?void 0:a.pager;t&&t.currentPage>1&&e.length===1&&--t.currentPage},moreFn:()=>{}});return(e,t)=>{const o=x("vxe-button"),a=x("el-button"),u=x("vxe-grid"),d=x("vxe-form"),f=x("vxe-modal");return M(),S("div",V,[s(u,k({ref_key:"xGridDom",ref:l},i),{"toolbar-btns":p(()=>[s(o,{status:"primary",icon:"vxe-icon-add",onClick:t[0]||(t[0]=n=>r.onShowModal())},{default:p(()=>[b("新增用户")]),_:1}),s(o,{status:"danger",icon:"vxe-icon-delete"},{default:p(()=>[b("批量删除")]),_:1})]),"row-operate":p(({row:n})=>[s(a,{link:"",type:"primary",onClick:C=>r.onShowModal(n)},{default:p(()=>[b("修改")]),_:2},1032,["onClick"]),s(a,{link:"",type:"danger",onClick:C=>r.onDelete(n)},{default:p(()=>[b("删除")]),_:2},1032,["onClick"])]),_:1},16),s(f,k({ref_key:"xModalDom",ref:c},g),{default:p(()=>[s(d,k({ref_key:"xFormDom",ref:v},m),null,16)]),_:1},16)])}}});export{G as default};
