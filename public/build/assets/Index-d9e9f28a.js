import{P as j,z as I,R as b,S as V,g,a as r,b as d,w as u,F as k,o as i,H as B,d as t,j as p,v as m,e as x,t as n,c as w,E as P,C as D,D as N}from"./app-c4c375be.js";import{_ as U,a as E,e as A}from"./AuthenticatedLayout-76a652ba.js";import{a as F}from"./TextInput-a9b98576.js";import{_ as H}from"./PrimaryButton-c43419de.js";import{r as $,a as _,_ as z,b as L,c as M}from"./InfoButton-d7e45790.js";import{_ as R}from"./SelectInput-0091200f.js";import{_ as O}from"./DangerButton-6ee1c70b.js";import T from"./Create-63b33d10.js";import q from"./Edit-4398b171.js";import G from"./Delete-63f35c69.js";import J from"./DeleteBulk-f7ac10ba.js";import{_ as K}from"./Checkbox-2a5936eb.js";import"./index-7d72fd52.js";import"./SecondaryButton-364db6e6.js";const Q={class:"space-y-4"},W={class:"px-4 sm:px-0"},X={class:"rounded-lg overflow-hidden w-fit"},Y={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},Z={class:"flex justify-between p-2"},ee={class:"flex space-x-2"},te={class:"overflow-x-auto scrollbar-table"},se={class:"w-full"},le={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},ae={class:"dark:bg-gray-900/50 text-left"},re={class:"px-2 py-4 text-center"},oe=t("th",{class:"px-2 py-4 text-center"},"#",-1),ne={class:"flex justify-between items-center"},de={class:"flex justify-between items-center"},ie={class:"px-2 py-4"},pe={class:"flex justify-between items-center"},ce={class:"flex justify-between items-center"},ue=t("th",{class:"px-2 py-4 sr-only"},"Action",-1),me={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},fe=["value"],he={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},_e={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ye={class:"flex justify-start items-center"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge={class:"whitespace-nowrap py-4 px-2 sm:py-3"},we={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ve={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ke={class:"whitespace-nowrap py-4 px-2 sm:py-3"},xe={class:"flex justify-center items-center"},$e={class:"rounded-md overflow-hidden"},Oe={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},ze={__name:"Index",props:{title:String,filters:Object,users:Object,roles:Object,breadcrumbs:Object,perPage:Number},setup(f){const o=f,e=j({params:{search:o.filters.search,field:o.filters.field,order:o.filters.order,perPage:o.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,user:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),h=a=>{e.params.field=a,e.params.order=e.params.order==="asc"?"desc":"asc"};I(()=>b.exports._.cloneDeep(e.params),b.exports.debounce(()=>{let a=b.exports.pickBy(e.params);V.Inertia.get(route("user.index"),a,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const C=a=>{var s;a.target.checked===!1?e.selectedId=[]:(s=o.users)==null||s.data.forEach(c=>{e.selectedId.push(c.id)})},S=()=>{var a;((a=o.users)==null?void 0:a.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(a,s)=>{const c=D("tooltip");return i(),g(k,null,[r(d(B),{title:o.title},null,8,["title"]),r(U,null,{default:u(()=>[r(E,{title:f.title,breadcrumbs:f.breadcrumbs},null,8,["title","breadcrumbs"]),t("div",Q,[t("div",W,[t("div",X,[p(r(H,{class:"rounded-none",onClick:s[0]||(s[0]=l=>e.createOpen=!0)},{default:u(()=>[x(n(a.lang().button.add),1)]),_:1},512),[[m,a.can(["create user"])]]),r(T,{show:e.createOpen,onClose:s[1]||(s[1]=l=>e.createOpen=!1),roles:o.roles,title:o.title},null,8,["show","roles","title"]),r(q,{show:e.editOpen,onClose:s[2]||(s[2]=l=>e.editOpen=!1),user:e.user,roles:o.roles,title:o.title},null,8,["show","user","roles","title"]),r(G,{show:e.deleteOpen,onClose:s[3]||(s[3]=l=>e.deleteOpen=!1),user:e.user,title:o.title},null,8,["show","user","title"]),r(J,{show:e.deleteBulkOpen,onClose:s[4]||(s[4]=l=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId,title:o.title},null,8,["show","selectedId","title"])])]),t("div",Y,[t("div",Z,[t("div",ee,[r(R,{modelValue:e.params.perPage,"onUpdate:modelValue":s[5]||(s[5]=l=>e.params.perPage=l),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),p((i(),w(O,{onClick:s[6]||(s[6]=l=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:u(()=>[r(d($),{class:"w-5 h-5"})]),_:1})),[[m,e.selectedId.length!=0&&a.can(["delete user"])],[c,a.lang().tooltip.delete_selected]])]),r(F,{modelValue:e.params.search,"onUpdate:modelValue":s[7]||(s[7]=l=>e.params.search=l),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:a.lang().placeholder.search},null,8,["modelValue","placeholder"])]),t("div",te,[t("table",se,[t("thead",le,[t("tr",ae,[t("th",re,[r(K,{checked:e.multipleSelect,"onUpdate:checked":s[8]||(s[8]=l=>e.multipleSelect=l),onChange:C},null,8,["checked"])]),oe,t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[9]||(s[9]=l=>h("name"))},[t("div",ne,[t("span",null,n(a.lang().label.name),1),r(d(_),{class:"w-4 h-4"})])]),t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[10]||(s[10]=l=>h("email"))},[t("div",de,[t("span",null,n(a.lang().label.email),1),r(d(_),{class:"w-4 h-4"})])]),t("th",ie,n(a.lang().label.role),1),t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[11]||(s[11]=l=>h("created_at"))},[t("div",pe,[t("span",null,n(a.lang().label.created),1),r(d(_),{class:"w-4 h-4"})])]),t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[12]||(s[12]=l=>h("updated_at"))},[t("div",ce,[t("span",null,n(a.lang().label.updated),1),r(d(_),{class:"w-4 h-4"})])]),ue])]),t("tbody",null,[(i(!0),g(k,null,P(f.users.data,(l,v)=>(i(),g("tr",{key:v,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[t("td",me,[p(t("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",onChange:S,value:l.id,"onUpdate:modelValue":s[13]||(s[13]=y=>e.selectedId=y)},null,40,fe),[[N,e.selectedId]])]),t("td",he,n(++v),1),t("td",_e,[t("span",ye,[x(n(l.name)+" ",1),p(r(d(A),{class:"ml-[2px] w-4 h-4 text-primary dark:text-white"},null,512),[[m,l.email_verified_at]])])]),t("td",be,n(l.email),1),t("td",ge,n(l.roles.length==0?"not selected":l.roles[0].name),1),t("td",we,n(l.created_at),1),t("td",ve,n(l.updated_at),1),t("td",ke,[t("div",xe,[t("div",$e,[p((i(),w(L,{type:"button",onClick:y=>(e.editOpen=!0,e.user=l),class:"px-2 py-1.5 rounded-none"},{default:u(()=>[r(d(M),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[m,a.can(["update user"])],[c,a.lang().tooltip.edit]]),p((i(),w(O,{type:"button",onClick:y=>(e.deleteOpen=!0,e.user=l),class:"px-2 py-1.5 rounded-none"},{default:u(()=>[r(d($),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[m,a.can(["delete user"])],[c,a.lang().tooltip.delete]])])])])]))),128))])])]),t("div",Oe,[r(z,{links:o.users,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{ze as default};
