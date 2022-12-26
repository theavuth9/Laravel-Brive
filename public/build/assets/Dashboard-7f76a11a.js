import{_ as b,a as c,r as u,b as o,c as m,d as h}from"./AuthenticatedLayout-1472c065.js";import{g,a as s,b as t,w as d,F as f,o as p,H as _,d as e,t as l,L as a}from"./app-944e845c.js";import"./index-fda8c77b.js";const v={class:"space-y-4"},x={class:"text-white dark:text-gray-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4 overflow-hidden shadow-sm"},w={class:"rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-blue-600/70 dark:bg-blue-600/60 items-center overflow-hidden"},y={class:"flex justify-between items-center"},k={class:"text-4xl mr-2 font-bold mb-2"},j={class:"text-md md:text-xl uppercase text-right"},N={class:"bg-blue-600 dark:bg-blue-600/50 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-blue-600/90 dark:hover:bg-blue-600/40"},$={class:"rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-green-600/70 dark:bg-green-600/60 items-center overflow-hidden"},D={class:"flex justify-between items-center"},B={class:"text-4xl mr-2 font-bold mb-2"},F={class:"text-md md:text-xl uppercase text-right"},H={class:"bg-green-600 dark:bg-green-600/50 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-green-600/90 dark:hover:bg-green-600/40"},L={class:"rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-amber-600/70 dark:bg-amber-600/60 items-center overflow-hidden"},V={class:"flex justify-between items-center"},C={class:"text-4xl mr-2 font-bold mb-2"},E={class:"text-md md:text-xl uppercase text-right"},S={class:"bg-amber-600 dark:bg-amber-600/50 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-amber-600/90 dark:hover:bg-amber-600/40"},I={__name:"Dashboard",props:{users:Number,roles:Number,permissions:Number},setup(i){const n=i;return(r,q)=>(p(),g(f,null,[s(t(_),{title:"Dashboard"}),s(b,null,{default:d(()=>[s(c,{title:"Dashboard",breadcrumbs:[]}),e("div",v,[e("div",x,[e("div",null,[e("div",w,[e("div",null,[s(t(u),{class:"w-12 h-12"})]),e("div",y,[e("p",k,l(n.users),1),e("p",j,l(r.lang().label.user),1)])]),e("div",N,[s(t(a),{href:r.route("user.index"),class:"flex justify-between items-center"},{default:d(()=>[e("p",null,l(r.lang().label.more),1),s(t(o),{class:"w-5 h-5"})]),_:1},8,["href"])])]),e("div",null,[e("div",$,[e("div",null,[s(t(m),{class:"w-12 h-12"})]),e("div",D,[e("p",B,l(n.roles),1),e("p",F,l(r.lang().label.role),1)])]),e("div",H,[s(t(a),{href:r.route("role.index"),class:"flex justify-between items-center"},{default:d(()=>[e("p",null,l(r.lang().label.more),1),s(t(o),{class:"w-5 h-5"})]),_:1},8,["href"])])]),e("div",null,[e("div",L,[e("div",null,[s(t(h),{class:"w-12 h-12"})]),e("div",V,[e("p",C,l(n.permissions),1),e("p",E,l(r.lang().label.permission),1)])]),e("div",S,[s(t(a),{href:r.route("permission.index"),class:"flex justify-between items-center"},{default:d(()=>[e("p",null,l(r.lang().label.more),1),s(t(o),{class:"w-5 h-5"})]),_:1},8,["href"])])])])])]),_:1})],64))}};export{I as default};
