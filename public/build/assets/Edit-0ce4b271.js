import{P as w,u as x,A as $,g as p,a as t,w as f,o as g,d as r,t as m,b as i,F as C,E as V,e as _,n as j,f as E,j as B,D as F}from"./app-c4c375be.js";import{_ as d,a as D,b as v}from"./TextInput-a9b98576.js";import{_ as N,a as U}from"./SecondaryButton-364db6e6.js";import{_ as A}from"./PrimaryButton-c43419de.js";import{_ as M}from"./Checkbox-2a5936eb.js";const O={class:"space-y-6"},q=["onSubmit"],z={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},L={class:"my-6 space-y-4"},P={class:"flex justify-start items-center space-x-2 mt-2"},T={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2"},G=["id","value"],H={class:"flex justify-end"},W={__name:"Edit",props:{show:Boolean,title:String,role:Object,permissions:Object},emits:["close"],setup(b,{emit:c}){const o=b,n=w({multipleSelect:!1}),e=x({name:"",permissions:[]}),h=()=>{var s;e.put(route("role.update",(s=o.role)==null?void 0:s.id),{preserveScroll:!0,onSuccess:()=>{c("close"),e.reset(),n.multipleSelect=!1},onError:()=>null,onFinish:()=>null})};$(()=>{var s,l,a;o.show&&(e.name=(s=o.role)==null?void 0:s.name,e.permissions=(l=o.role.permissions)==null?void 0:l.map(u=>u.id)),o.permissions.length==((a=o.role)==null?void 0:a.permissions.length)?n.multipleSelect=!0:n.multipleSelect=!1});const k=s=>{s.target.checked===!1?e.permissions=[]:(e.permissions=[],o.permissions.forEach(l=>{e.permissions.push(l.id)}))},y=()=>{o.permissions.length==e.permissions.length?n.multipleSelect=!0:n.multipleSelect=!1};return(s,l)=>(g(),p("section",O,[t(N,{show:o.show,onClose:l[4]||(l[4]=a=>c("close"))},{default:f(()=>[r("form",{class:"p-6",onSubmit:E(h,["prevent"])},[r("h2",z,m(s.lang().label.edit)+" "+m(o.title),1),r("div",L,[r("div",null,[t(d,{for:"name",value:s.lang().label.role},null,8,["value"]),t(D,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:i(e).name,"onUpdate:modelValue":l[0]||(l[0]=a=>i(e).name=a),required:"",placeholder:s.lang().placeholder.name},null,8,["modelValue","placeholder"]),t(v,{class:"mt-2",message:i(e).errors.name},null,8,["message"])]),r("div",null,[t(d,{value:s.lang().label.permission},null,8,["value"]),t(v,{class:"mt-2",message:i(e).errors.permissions},null,8,["message"]),r("div",P,[t(M,{id:"permission-all",checked:n.multipleSelect,"onUpdate:checked":l[1]||(l[1]=a=>n.multipleSelect=a),onChange:k},null,8,["checked"]),t(d,{for:"permission-all",value:s.lang().label.check_all},null,8,["value"])]),r("div",T,[(g(!0),p(C,null,V(o.permissions,(a,u)=>(g(),p("div",{class:"flex items-center justify-start space-x-2",key:u},[B(r("input",{onChange:y,class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",id:"permission_"+a.id,value:a.id,"onUpdate:modelValue":l[2]||(l[2]=S=>i(e).permissions=S)},null,40,G),[[F,i(e).permissions]]),t(d,{for:"permission_"+a.id,value:a.name},null,8,["for","value"])]))),128))])])]),r("div",H,[t(U,{disabled:i(e).processing,onClick:l[3]||(l[3]=a=>c("close"))},{default:f(()=>[_(m(s.lang().button.close),1)]),_:1},8,["disabled"]),t(A,{class:j(["ml-3",{"opacity-25":i(e).processing}]),disabled:i(e).processing,onClick:h},{default:f(()=>[_(m(i(e).processing?s.lang().button.save+"...":s.lang().button.save),1)]),_:1},8,["class","disabled"])])],40,q)]),_:1},8,["show"])]))}};export{W as default};
