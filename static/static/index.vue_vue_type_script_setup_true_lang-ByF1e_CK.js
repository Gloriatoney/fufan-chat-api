import{f as g}from"./index-DqMa_eN-.js";import{D as v}from"./element-jUUjv72Y.js";import{d as C,ai as o,o as l,O as p,P as e,V as r,c as T,a8 as V,u as i,a as _,U as B,F as P}from"./vue-39WfQX0x.js";const E=C({__name:"index",setup(b){const{themeList:u,activeThemeName:h,setTheme:f}=g(),w=({clientX:n,clientY:a},d)=>{const m=Math.hypot(Math.max(n,window.innerWidth-n),Math.max(a,window.innerHeight-a)),t=document.documentElement.style;t.setProperty("--v3-theme-x",n+"px"),t.setProperty("--v3-theme-y",a+"px"),t.setProperty("--v3-theme-r",m+"px");const s=()=>{f(d)};document.startViewTransition?document.startViewTransition(s):s()};return(n,a)=>{const d=o("el-icon"),m=o("el-tooltip"),t=o("el-dropdown-item"),s=o("el-dropdown-menu"),x=o("el-dropdown");return l(),p(x,{trigger:"click"},{dropdown:e(()=>[r(s,null,{default:e(()=>[(l(!0),T(P,null,V(i(u),(c,k)=>(l(),p(t,{key:k,disabled:i(h)===c.name,onClick:y=>{w(y,c.name)}},{default:e(()=>[_("span",null,B(c.title),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),default:e(()=>[_("div",null,[r(m,{effect:"dark",content:"主题模式",placement:"bottom"},{default:e(()=>[r(d,{size:20},{default:e(()=>[r(i(v))]),_:1})]),_:1})])]),_:1})}}});export{E as _};
