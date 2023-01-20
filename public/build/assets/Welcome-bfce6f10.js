import{A as x}from"./index-73ed916b.js";import{_ as p,a as _}from"./SwitchLangNavBar-e09e1cf0.js";import{f as n,a,u as i,b as e,t as s,c as m,w as c,F as g,h,d as l,o as r,X as f,g as d}from"./app-11bf830f.js";const u={class:"relative flex justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 items-center sm:pt-0"},v={class:"max-w-2xl mx-auto sm:px-6 lg:px-8"},y={class:"flex items-center pt-8 px-4 sm:px-0 justify-between sm:pt-0"},b={class:"flex items-center"},k={class:"text-3xl sm:text-5xl ml-4 text-primary"},w={class:"flex space-x-2 items-center"},B={class:"mt-4 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg"},V={class:"grid grid-cols-1"},j={class:"p-6"},C={class:"flex items-center"},L=e("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",class:"w-8 h-8 text-gray-500"},[e("path",{d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})],-1),$={class:"ml-4 text-lg leading-7 font-semibold"},D={href:"https://github.com/erikwibowo/Laravel-Brive/blob/master/README.md",class:"underline text-gray-900 dark:text-white"},E={class:"ml-12"},N={class:"mt-2 text-gray-600 dark:text-gray-400 text-sm"},S={key:0,class:"flex items-center justify-start space-x-4 mt-4"},A={class:"sm:flex justify-between mt-4 text-sm text-gray-500"},F={class:"flex mx-4 sm:mx-0 flex-row justify-center text-center"},R={href:"https://brive.erikwibowo.com",target:"_blank"},M=e("a",{href:"https://github.com/erikwibowo",target:"_blank",class:"text-primary"},"Erik Wibowo",-1),P={class:"flex mx-4 sm:mx-0 justify-center text-center"},Y={__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String},setup(o){return(t,W)=>(r(),n(g,null,[a(i(f),{title:t.lang().label.welcome},null,8,["title"]),e("div",u,[e("div",v,[e("div",y,[e("div",b,[a(x,{class:"h-10 w-auto text-primary fill-current sm:h-16"}),e("p",k,s(t.$page.props.app.name),1)]),e("div",w,[a(p),a(_)])]),e("div",B,[e("div",V,[e("div",j,[e("div",C,[L,e("div",$,[e("a",D,s(t.lang().label.documentation),1)])]),e("div",E,[e("div",N,s(t.lang().label.documentation_detail),1),o.canLogin?(r(),n("div",S,[t.$page.props.auth.user?(r(),m(i(d),{key:0,href:t.route("dashboard"),class:"text-lg text-gray-700 dark:text-gray-500 underline"},{default:c(()=>[l("Dashboard")]),_:1},8,["href"])):(r(),n(g,{key:1},[a(i(d),{href:t.route("login"),class:"text-lg text-gray-700 dark:text-gray-500 underline"},{default:c(()=>[l(s(t.lang().label.login),1)]),_:1},8,["href"]),o.canRegister?(r(),m(i(d),{key:0,href:t.route("register"),class:"ml-4 text-lg text-gray-700 dark:text-gray-500 underline"},{default:c(()=>[l(s(t.lang().label.register),1)]),_:1},8,["href"])):h("",!0)],64))])):h("",!0)])])])]),e("div",A,[e("div",F,[e("p",null,[e("a",R,s(t.$page.props.app.name),1),l(" ©️ "+s(new Date().getFullYear())+" ",1),M])]),e("div",P," Laravel v"+s(o.laravelVersion)+" (PHP v"+s(o.phpVersion)+") ",1)])])])],64))}};export{Y as default};
