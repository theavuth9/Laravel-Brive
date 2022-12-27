import{u as _,y as h,g as y,a,w as c,o as k,d as n,t as i,b as s,e as b,n as $,f as S}from"./app-de2156fa.js";import{_ as d,a as u,b as t}from"./TextInput-90511b4f.js";import{_ as C,a as U}from"./SecondaryButton-12d53cd0.js";import{_ as B}from"./PrimaryButton-2534134c.js";import{_ as E}from"./SelectInput-eadcd0dd.js";const j={class:"space-y-6"},N=["onSubmit"],q={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},F={class:"my-6 space-y-4"},O={class:"flex justify-end"},G={__name:"Edit",props:{show:Boolean,user:Object,roles:Object},emits:["close"],setup(v,{emit:p}){var g;const m=v,e=_({name:"",email:"",password:"",password_confirmation:"",role:""}),f=()=>{var l;e.put(route("user.update",(l=m.user)==null?void 0:l.id),{preserveScroll:!0,onSuccess:()=>{p("close"),e.reset()},onError:()=>null,onFinish:()=>null})};h(()=>{var l,o,r,w;m.show&&(e.name=(l=m.user)==null?void 0:l.name,e.email=(o=m.user)==null?void 0:o.email,e.role=((r=m.user)==null?void 0:r.roles)==0?"":(w=m.user)==null?void 0:w.roles[0].name)});const V=(g=m.roles)==null?void 0:g.map(l=>({label:l.name,value:l.name}));return(l,o)=>(k(),y("section",j,[a(C,{show:m.show,onClose:o[6]||(o[6]=r=>p("close"))},{default:c(()=>[n("form",{class:"p-6",onSubmit:S(f,["prevent"])},[n("h2",q,i(l.lang().label.edit)+" "+i(l.lang().label.user),1),n("div",F,[n("div",null,[a(d,{for:"name",value:l.lang().label.name},null,8,["value"]),a(u,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).name=r),required:"",placeholder:l.lang().placeholder.name},null,8,["modelValue","placeholder"]),a(t,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),n("div",null,[a(d,{for:"email",value:l.lang().label.email},null,8,["value"]),a(u,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).email=r),placeholder:l.lang().placeholder.email},null,8,["modelValue","placeholder"]),a(t,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),n("div",null,[a(d,{for:"password",value:l.lang().label.password},null,8,["value"]),a(u,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[2]||(o[2]=r=>s(e).password=r),placeholder:l.lang().placeholder.password},null,8,["modelValue","placeholder"]),a(t,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),n("div",null,[a(d,{for:"password_confirmation",value:l.lang().label.password_confirmation},null,8,["value"]),a(u,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>s(e).password_confirmation=r),placeholder:l.lang().placeholder.password_confirmation},null,8,["modelValue","placeholder"]),a(t,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),n("div",null,[a(d,{for:"role",value:l.lang().label.role},null,8,["value"]),a(E,{id:"role",class:"mt-1 block w-full",modelValue:s(e).role,"onUpdate:modelValue":o[4]||(o[4]=r=>s(e).role=r),required:"",dataSet:s(V)},null,8,["modelValue","dataSet"]),a(t,{class:"mt-2",message:s(e).errors.role},null,8,["message"])])]),n("div",O,[a(U,{disabled:s(e).processing,onClick:o[5]||(o[5]=r=>p("close"))},{default:c(()=>[b(i(l.lang().button.close),1)]),_:1},8,["disabled"]),a(B,{class:$(["ml-3",{"opacity-25":s(e).processing}]),disabled:s(e).processing,onClick:f},{default:c(()=>[b(i(s(e).processing?l.lang().button.save+"...":l.lang().button.save),1)]),_:1},8,["class","disabled"])])],40,N)]),_:1},8,["show"])]))}};export{G as default};