import{O as w,P as x,f as u,a as l,w as p,o as f,b as t,t as d,u as r,F as C,E as $,d as _,n as V,e as j,j as B,D as E}from"./app-11bf830f.js";import{_ as m,a as D,b as h}from"./TextInput-dc7b9220.js";import{_ as F,a as N}from"./SecondaryButton-ee37c190.js";import{_ as U}from"./PrimaryButton-f0788832.js";import{_ as M}from"./Checkbox-70384e30.js";const O={class:"space-y-6"},q=["onSubmit"],z={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},A={class:"my-6 space-y-4"},L={class:"flex justify-start items-center space-x-2 mt-2"},P={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2"},T=["id","value"],G={class:"flex justify-end"},R={__name:"Create",props:{show:Boolean,title:String,permissions:Object},emits:["close"],setup(b,{emit:c}){const i=b,n=w({multipleSelect:!1}),e=x({name:"",guard_name:"web",permissions:[]}),g=()=>{e.post(route("role.store"),{preserveScroll:!0,onSuccess:()=>{c("close"),e.reset(),n.multipleSelect=!1},onError:()=>null,onFinish:()=>null})},v=a=>{a.target.checked===!1?e.permissions=[]:(e.permissions=[],i.permissions.forEach(s=>{e.permissions.push(s.id)}))},k=()=>{i.permissions.length==e.permissions.length?n.multipleSelect=!0:n.multipleSelect=!1};return(a,s)=>(f(),u("section",O,[l(F,{show:i.show,onClose:s[4]||(s[4]=o=>c("close"))},{default:p(()=>[t("form",{class:"p-6",onSubmit:j(g,["prevent"])},[t("h2",z,d(a.lang().label.add)+" "+d(i.title),1),t("div",A,[t("div",null,[l(m,{for:"name",value:a.lang().label.role},null,8,["value"]),l(D,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:r(e).name,"onUpdate:modelValue":s[0]||(s[0]=o=>r(e).name=o),required:"",placeholder:a.lang().placeholder.name},null,8,["modelValue","placeholder"]),l(h,{class:"mt-2",message:r(e).errors.name},null,8,["message"])]),t("div",null,[l(m,{value:a.lang().label.permission},null,8,["value"]),l(h,{class:"mt-2",message:r(e).errors.permissions},null,8,["message"]),t("div",L,[l(M,{id:"permission-all",checked:n.multipleSelect,"onUpdate:checked":s[1]||(s[1]=o=>n.multipleSelect=o),onChange:v},null,8,["checked"]),l(m,{for:"permission-all",value:a.lang().label.check_all},null,8,["value"])]),t("div",P,[(f(!0),u(C,null,$(i.permissions,(o,y)=>(f(),u("div",{class:"flex items-center justify-start space-x-2",key:y},[B(t("input",{onChange:k,class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",id:"permission_"+o.id,value:o.id,"onUpdate:modelValue":s[2]||(s[2]=S=>r(e).permissions=S)},null,40,T),[[E,r(e).permissions]]),l(m,{for:"permission_"+o.id,value:o.name},null,8,["for","value"])]))),128))])])]),t("div",G,[l(N,{disabled:r(e).processing,onClick:s[3]||(s[3]=o=>c("close"))},{default:p(()=>[_(d(a.lang().button.close),1)]),_:1},8,["disabled"]),l(U,{class:V(["ml-3",{"opacity-25":r(e).processing}]),disabled:r(e).processing,onClick:g},{default:p(()=>[_(d(r(e).processing?a.lang().button.add+"...":a.lang().button.add),1)]),_:1},8,["class","disabled"])])],40,q)]),_:1},8,["show"])]))}};export{R as default};
