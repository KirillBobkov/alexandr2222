(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{5624:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.fcfac5b1.webp",height:207,width:200,blurDataURL:"data:image/webp;base64,UklGRpYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAmYeLPehwoAb6K8uP7JDEVUaZd5elNDb0NXw6A7RnJuQ3ag3JNNaVOEe7GtWHlZC4NRRU9JhBAAC2V+f2gQAABWUDggLgAAANABAJ0BKggACAACQDglpAADFmJyhrcAAP77yhPGPFBY+tfOSLyw3iL9uDVwAAA=",blurWidth:8,blurHeight:8}},5921:function(e,t,a){"use strict";a.d(t,{z:function(){return i}});var n=a(5893);a(7294);var o=a(6528),l=a.n(o),s=a(2934);function i(e){let{isSubmitted:t=!1,disabled:a=!1,status:o,href:i="",className:c=""}=e;return i?(0,n.jsx)(s.L,{as:"a",href:i,className:"".concat(l().button," ").concat(c," ").concat(t?l().success:""),children:o}):(0,n.jsx)(s.L,{as:"button",type:"submit",disabled:a,className:"".concat(l().button," ").concat(c," ").concat(t?l().success:""),children:"".concat(o)})}},2445:function(e,t,a){"use strict";a.d(t,{l:function(){return _}});var n=a(5893),o=a(7294),l=a(2718),s=a(5921),i=a(5846),c=a(2645),r=a.n(c),m=a(740),d=a(2934);function _(e){let{isSubmitted:t,setIsSubmitted:a,type:c=""}=e,[_,u]=(0,o.useState)({name:"",phone:"",checkbox:!1}),[h]=(0,o.useState)(()=>Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),[p,f]=(0,o.useState)(""),[x,y]=(0,o.useState)({name:"",phone:"",checkbox:!1}),b=e=>{let{name:t,value:a}=e.target;if("checkbox"===t){u(a=>({...a,[t]:e.target.value})),y(a=>({...a,[t]:!e.target.value}));return}if("phone"===t){let e=(0,i.un)(a);u(a=>({...a,[t]:e})),y(a=>({...a,[t]:(0,i.a$)(e)}))}else u(e=>({...e,[t]:a})),y(e=>({...e,[t]:(0,i.Ol)(a)}))};return(0,n.jsx)(m.I,{children:(0,n.jsxs)("div",{className:r().form,children:[(0,n.jsxs)(d.L,{side:"left",className:r().form_content,children:[(0,n.jsx)("h3",{className:r().textTitle,children:"Готовы измениться?"}),(0,n.jsx)("p",{className:r().textDescription,children:"Запишитесь на благотворительную консультацию, и я свяжусь с Вами в ближайшее время"})]}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=(0,i.Ol)(_.name),n=(0,i.a$)(_.phone);y(e=>({...e,name:t,phone:n,checkbox:!_.checkbox})),t||n||!_.checkbox||fetch("https://api.telegram.org/bot".concat("7733350115:AAE6tcQZc-R2bRw8ewLKwvtiS3UKHTcgV9c","/sendMessage"),{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({chat_id:"-1002359699160",parse_mode:"html",text:"<b>Новая запись на консультацию</b>\n\n<b>Программа</b>: ".concat(null!=c?c:"отсутствует","\n<b>Имя</b>: ").concat(_.name,"\n<b>Номер телефона</b>: ").concat(_.phone,"\n")})}).then(()=>{console.log("<b>Новая запись на консультацию</b>\n\n<b>Программа</b>: ".concat(c||"отсутствует","\n<b>Имя</b>: ").concat(_.name,"\n<b>Номер телефона</b>: ").concat(_.phone,"\n")),f("success")}).catch(e=>{f("error")}).finally(()=>{u({name:"",phone:"",checkbox:!1}),a(!0)})},className:r().form__item,children:[(0,n.jsx)("div",{className:r().form_elem,children:(0,n.jsx)(l.I,{type:"text",name:"name",placeholder:"Введите ваше имя",value:_.name,onChange:b,disabled:t,error:x.name})}),(0,n.jsx)("div",{className:r().form_elem,children:(0,n.jsx)(l.I,{type:"tel",name:"phone",placeholder:"Введите ваш номер телефона",value:_.phone,onChange:b,disabled:t,error:x.phone})}),(0,n.jsxs)("div",{className:r().form_elem,style:{display:"flex",flexDirection:"column",gap:15,position:"relative"},children:[(0,n.jsx)(s.z,{status:"Записаться",isSubmitted:t,disabled:t,className:r().formbutton}),(0,n.jsxs)(d.L,{className:r()["form-checkbox"],children:[(0,n.jsx)("input",{name:"checkbox",className:"".concat(r()["form-checkbox__input"]," ").concat(x.checkbox?r()["form-checkbox__input--error"]:""),type:"checkbox",id:h,disabled:t,onChange:e=>{b({target:{name:"checkbox",value:e.target.checked}})},checked:_.checkbox}),(0,n.jsxs)("label",{style:{opacity:t?.5:1},className:"".concat(r()["form-checkbox__label"]),htmlFor:h,children:["Я ознакомлен (ознакомлена) с"," ",(0,n.jsx)("a",{target:"_blank",className:r()["form-doc"],href:"/agreement-data.txt",children:"правилами"})," ","обработки персональных данных"]})]}),p?(0,n.jsxs)(d.L,{style:{marginTop:20},children:["error"===p?(0,n.jsxs)("p",{children:["Что-то пошло не так. Свяжитесь, пожалуйста, со мной в Телеграм по"," ",(0,n.jsx)("a",{target:"_blank",href:"https://t.me/Z44LP",style:{color:"var(--accent)",fontWeight:"bold",cursor:"pointer"},children:"ссылке"})]}):null,"success"===p?(0,n.jsx)("p",{children:"Спасибо, ваша запись оформлена."}):null]}):null]})]})]})})}},2718:function(e,t,a){"use strict";a.d(t,{I:function(){return i}});var n=a(5893);a(7294);var o=a(8942),l=a.n(o),s=a(2934);function i(e){let{type:t,name:a,placeholder:o,value:i,onChange:c,disabled:r,error:m}=e;return(0,n.jsxs)(s.L,{className:"".concat(l().inputGroup," ").concat(m?l().error:""),children:[(0,n.jsx)("div",{className:l().inputWrapper,children:(0,n.jsx)("input",{type:t,name:a,placeholder:o,value:i,onChange:c,onKeyDown:e=>{-1===[8,46,9,27,13].indexOf(e.keyCode)&&(65!==e.keyCode||!0!==e.ctrlKey&&!0!==e.metaKey)&&(!(e.keyCode>=35)||!(e.keyCode<=40))&&("tel"!==t||/[0-9]/.test(e.key)||e.preventDefault())},disabled:r,className:l().input,autoComplete:(()=>{switch(a){case"name":return"name";case"phone":return"tel";default:return"off"}})()})}),m&&(0,n.jsx)("p",{className:l().errorMessage,children:m})]})}},6896:function(e,t,a){"use strict";a.d(t,{Z:function(){return B}});var n=a(5893),o=a(4074),l=a.n(o),s=a(7738),i=a.n(s),c=a(2235),r=a.n(c),m=a(7294),d=a(6411),_=a.n(d),u=a(5624),h=a(5675),p=a.n(h);function f(){return(0,n.jsx)("footer",{className:_().footer,children:(0,n.jsx)("div",{className:_().container,children:(0,n.jsxs)("div",{className:_().logo__container,children:[(0,n.jsx)(p(),{className:_().logo,src:u.Z,alt:"Company Logo"}),(0,n.jsxs)("ul",{className:_().list,children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#message",className:_().social__link,children:(0,n.jsx)("svg",{role:"presentation",width:"25px",height:"25px",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM51.8276 49.2076L74.191 33.6901C73.4347 32.6649 72.2183 32 70.8466 32H29.1534C27.8336 32 26.6576 32.6156 25.8968 33.5752L47.5881 49.172C48.8512 50.0802 50.5494 50.0945 51.8276 49.2076ZM75 63.6709V37.6286L53.4668 52.57C51.1883 54.151 48.1611 54.1256 45.9095 52.5066L25 37.4719V63.6709C25 65.9648 26.8595 67.8243 29.1534 67.8243H70.8466C73.1405 67.8243 75 65.9648 75 63.6709Z",fill:"#525252"})})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{rel:"nofollow","aria-label":"telegram",href:"https://t.me/Z44LP",target:"_blank",className:_().social__link,children:(0,n.jsx)("svg",{role:"presentation",width:"25px",height:"25px",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z",fill:"#525252"})})})})]}),(0,n.jsx)("p",{className:_().year,children:'\xa9 2024 Александр "Интеграл" Васильев'})]})})})}var x=a(8096),y=a.n(x),b=a(1664),g=a.n(b),v=a(3153);let j=()=>{let[e,t]=(0,m.useState)(!1);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("header",{className:"".concat(y().header," ").concat(e?y().header_opened:""),children:[(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10},children:[(0,n.jsx)(p(),{src:u.Z,alt:"",className:y().header__logo,id:"logo"}),(0,n.jsxs)("p",{className:y().logo__title,children:[(0,n.jsx)("span",{className:y().logo__title_colored,children:"ИN"}),"TEGRAAL"]})]}),(0,n.jsx)("nav",{children:(0,n.jsx)("ul",{className:y().navigation,children:F.map(e=>(0,n.jsx)(N,{text:e.parent.value,href:e.parent.path,childs:e.childs,onClick:()=>t(!1)}))})}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("button",{className:"".concat(y().burgerButton," ").concat(e?y().open:""),onClick:()=>{t(!e)},children:[(0,n.jsx)("div",{className:y().burgerLine}),(0,n.jsx)("div",{className:y().burgerLine}),(0,n.jsx)("div",{className:y().burgerLine})]})]})},N=e=>{let{text:t,href:a,childs:o,onClick:l}=e,[s,i]=(0,m.useState)(!1),c=(0,m.useCallback)(()=>{i(!0)},[]),r=(0,m.useCallback)(()=>{i(!1)},[]);return(0,n.jsxs)("li",{onMouseEnter:c,onMouseLeave:r,className:y().navigation__item,children:[(0,n.jsxs)(g(),{prefetch:!1,href:a,onClick:l,children:[t," ",o?(0,n.jsx)("span",{className:y().symbol,children:(0,n.jsx)("svg",{version:"1.1",width:"10",height:"10",fill:"#fff",id:"Capa_1",x:"50px",y:"0px",viewBox:"0 0 123.97 123.97",xmlSpace:"preserve",children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M51.802,96.062c2.801,2.801,6.5,4.2,10.2,4.2s7.4-1.399,10.2-4.2l47.3-47.3c5.5-5.5,6.101-14.6,0.8-20.3 c-5.6-6.1-15.1-6.3-20.899-0.5l-30.4,30.3c-3.899,3.9-10.2,3.9-14.1,0l-30.3-30.3c-5.801-5.8-15.301-5.7-20.9,0.5 c-5.3,5.7-4.8,14.8,0.8,20.3L51.802,96.062z"})})})}):""]}),o?(0,n.jsx)("div",{className:y().dropdown+" "+(s?y().visible:""),children:o.map(e=>(0,n.jsx)(g(),{prefetch:!1,href:e.path,onClick:l,className:y().dropdownItem,children:e.value},e.path))}):null]})},F=[{parent:{path:"/",value:"Главная"}},{parent:{path:"/#programs",value:"Программы"},childs:v.R.map(e=>({path:e.href,value:e.title}))},{parent:{path:"/#about",value:"Обо мне"}},{parent:{path:"/#message",value:"Контакты"}},{parent:{path:"/#reviews",value:"Отзывы"}}];var k=a(9008),C=a.n(k),w={src:"/_next/static/media/favicon32x32.e7e8fc9e.png"},A=a(4927),L=a.n(A),Z=a(1163);function R(e){let{onClick:t,classes:a}=e;return(0,n.jsx)("button",{onClick:t,className:"".concat(L()["arrow-button"]," ").concat(a),children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",version:"1.1",children:[(0,n.jsx)("path",{d:"",stroke:"none",fillRule:"evenodd"}),(0,n.jsx)("path",{d:"M 250.551 107.462 C 247.432 108.599, 220.984 134.498, 124.702 230.701 C 53.251 302.093, 2.223 353.832, 1.401 355.718 C -0.400 359.855, -0.392 366.355, 1.421 369.800 C 2.202 371.285, 9.964 379.546, 18.671 388.157 C 31.599 400.944, 35.259 404.016, 38.643 404.916 C 40.922 405.523, 43.397 405.828, 44.143 405.593 C 44.889 405.359, 46.850 404.876, 48.500 404.519 C 50.768 404.030, 76.440 378.951, 153.750 301.702 L 256 199.532 358.250 301.702 C 435.560 378.951, 461.232 404.030, 463.500 404.519 C 465.150 404.876, 467.111 405.359, 467.857 405.593 C 468.603 405.828, 471.078 405.523, 473.357 404.916 C 476.727 404.018, 480.365 400.983, 492.853 388.656 C 510.652 371.085, 513 367.916, 513 361.461 C 513 358.663, 512.611 357.122, 512 357.500 C 511.450 357.840, 511 357.308, 511 356.319 C 511 354.339, 268.170 110.757, 263.965 108.520 C 259.813 106.311, 254.796 105.915, 250.551 107.462 M 0.300 363 C 0.300 366.025, 0.487 367.262, 0.716 365.750 C 0.945 364.238, 0.945 361.762, 0.716 360.250 C 0.487 358.738, 0.300 359.975, 0.300 363",stroke:"none",fill:"#040404",fillRule:"evenodd"})]})})}var S=()=>{let[e,t]=(0,m.useState)(!1),a=(0,Z.useRouter)(),o=(0,m.useCallback)(()=>{if(document.body.scrollTop>50){t(!0);return}t(!1)},[]),l=(0,m.useCallback)(()=>{document.body.scrollTo({top:0,behavior:"smooth"});let{pathname:e}=a;a.push({pathname:e},void 0,{shallow:!0})},[a]);return(0,m.useEffect)(()=>{var e;return null===(e=document.body)||void 0===e||e.addEventListener("scroll",o),()=>{var e;null===(e=document.body)||void 0===e||e.removeEventListener("scroll",o)}},[]),(0,n.jsx)(R,{classes:"".concat(L()["scroll-top-button"]," ").concat(e?L()["scroll-top-button--visible"]:""),onClick:l})};function B(e){let{children:t,metaConfig:a}=e,{title:o,description:s,keywords:c}=a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(C(),{children:[(0,n.jsx)(r(),{id:"335d30802edb52ea",dynamic:[l().style.fontFamily,i().style.fontFamily],children:":root{--heading:".concat(l().style.fontFamily,";--body-font:").concat(i().style.fontFamily,"}")}),(0,n.jsx)("title",{className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]]),children:o}),(0,n.jsx)("meta",{name:"description",content:s,className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("meta",{charSet:"utf-8",className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, user-scalable=0",className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8",className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("meta",{name:"author",content:"Александр Васильев",className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("meta",{name:"copyright",content:"Александр Васильев",className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("meta",{name:"keywords",content:c,className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("meta",{name:"robots",content:"index,follow",className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("meta",{property:"og:url",content:"https://alexandrvasilev.ru",className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("meta",{property:"og:title",content:o,className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("meta",{property:"og:description",content:s,className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("meta",{property:"og:type",content:"website",className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("meta",{property:"og:image",content:u.Z,className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes",className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent",className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("link",{rel:"icon",href:"/_next/static/media/logo.a3e3d12c.ico",className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("link",{rel:"apple-touch-icon",href:w.src,className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"32x32",href:w.src,className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/_next/static/media/favicon180x180.dfa9d075.png",className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])}),(0,n.jsx)("link",{rel:"apple-touch-startup-image",href:w.src,className:r().dynamic([["335d30802edb52ea",[l().style.fontFamily,i().style.fontFamily]]])})]}),(0,n.jsx)(j,{}),(0,n.jsx)("main",{children:t}),(0,n.jsx)(f,{}),(0,n.jsx)(S,{})]})}},740:function(e,t,a){"use strict";a.d(t,{I:function(){return s}});var n=a(5893),o=a(5103),l=a.n(o);let s=e=>{let{children:t}=e;return(0,n.jsxs)("section",{style:{position:"relative"},children:[(0,n.jsxs)("div",{class:l().line_animation,children:[(0,n.jsx)("div",{class:l().line_area}),(0,n.jsx)("div",{class:l().line_area}),(0,n.jsx)("div",{class:l().line_area}),(0,n.jsx)("div",{class:l().line_area}),(0,n.jsx)("div",{class:l().line_area}),(0,n.jsx)("div",{class:l().line_area}),(0,n.jsx)("div",{class:l().line_area}),(0,n.jsx)("div",{class:l().line_area})]}),(0,n.jsx)(n.Fragment,{children:t})]})}},3153:function(e,t,a){"use strict";a.d(t,{R:function(){return o}});var n=a(5624);let o=[{id:1,title:"Полюбить жизнь",image:n.Z,href:"/love-life"},{id:2,title:"Полюбить себя",image:n.Z,href:"/love-myself"},{id:3,title:"Сессия релаксации",image:n.Z,href:"/relax-session"},{id:4,title:"Увеличить заработок",image:n.Z,href:"/grow-money"},{id:5,title:"Удалить плохие воспоминания",image:n.Z,href:"/remove-bad-memories"},{id:6,title:"Бросить курить легко",image:n.Z,href:"/drop-smoking"}]},2934:function(e,t,a){"use strict";a.d(t,{L:function(){return r}});var n=a(5893),o=a(7294),l=a(9231);let s={left:"translateX(-20px)",right:"translateX(20px)",bottom:"translateY(-20px)",top:"translateY(20px)",topmax:"translateY(100px)",opacity:"translateY(0)"},i={left:"translateX(0)",right:"translateX(0)",bottom:"translateY(0)",top:"translateY(0)",topmax:"translateY(0)",opacity:"translateY(0)"},c=o.memo(e=>{let{itemScope:t,itemType:a,itemProp:o,onInit:l=!0,id:c,as:r="section",inViewport:m,style:d,enterCount:_,forwardedRef:u,children:h,className:p,side:f="top",speed:x=2,delay:y=.3,onClick:b,disabled:g=!1}=e,v={};void 0!==t&&(v.itemScope=t),void 0!==a&&(v.itemType=a),void 0!==o&&(v.itemProp=o);let j={...d,willChange:"transform, opacity",transition:"transform ".concat(x,"s ").concat(y,"s, opacity ").concat(x,"s ").concat(y,"s, background-size ").concat(x,"s ").concat(y,"s, background-color 300ms ").concat(y,"s"),opacity:m||l&&_>0?1:0,transform:m||l&&_>0?i[f]:s[f]};return(0,n.jsx)(r,{...e,...v,id:c,ref:u,className:p,onClick:b,style:j,children:(0,n.jsx)(n.Fragment,{children:h})})}),r=(0,l.ZP)(c)},8981:function(e,t,a){"use strict";a.d(t,{Y:function(){return l}});var n=a(1163),o=a(7294);let l=()=>{o.useRef(!1);let{asPath:e}=(0,n.useRouter)();o.useRef(e),o.useEffect(()=>{console.log("asPath",e),e&&e.includes("#")||document.body.scrollTo(0,0)},[])}},5846:function(e,t,a){"use strict";a.d(t,{Ol:function(){return n},a$:function(){return o},un:function(){return l}});let n=e=>e.trim().length<2?"Имя должно содержать не менее 2 символов":/^[A-Za-zА-Яа-я\s'\-\.]+$/.test(e.trim())?"":"Имя может содержать только буквы и пробелы",o=e=>11!==e.replace(/\D/g,"").length?"Номер телефона не заполнен до конца":"",l=e=>{let t=e.replace(/\D/g,"").slice(0,11);if(!t.length)return"";let a=t[0];return t.length>1&&(a+=" ("+t.slice(1,4),t.length>4&&(a+=") "+t.slice(4,7),t.length>7&&(a+="-"+t.slice(7,9),t.length>9&&(a+="-"+t.slice(9,11))))),a}},6528:function(e){e.exports={button:"Button_button__mg_cR",fadeInRight:"Button_fadeInRight__jOQgV",success:"Button_success__S80vN"}},6411:function(e){e.exports={footer:"Footer_footer__o4_Ec",container:"Footer_container__Mn8SS",logo__container:"Footer_logo__container__fIB29",logo:"Footer_logo__ZNv_V",navigation:"Footer_navigation__Yj_7L",contact:"Footer_contact__vepDU",list_title:"Footer_list_title__8bb_s",list:"Footer_list__FsWR4",social__link:"Footer_social__link__61XGe",year:"Footer_year__DzZKw"}},2645:function(e){e.exports={form:"Form_form__zp_JH",form__item:"Form_form__item__ARWR_",form_content:"Form_form_content__Wl3ld",success:"Form_success__WJvU7",form_elem:"Form_form_elem__T4eUV","form-checkbox":"Form_form-checkbox__W0mtR","form-checkbox__input":"Form_form-checkbox__input__zg97g","form-checkbox__input--error":"Form_form-checkbox__input--error__jKZUp","form-doc":"Form_form-doc__Qxpb3","form-checkbox__label":"Form_form-checkbox__label__CxtB5",formbutton:"Form_formbutton__rjUtE",textTitle:"Form_textTitle__sUfJG"}},8942:function(e){e.exports={inputGroup:"Input_inputGroup__1A1ls",inputWrapper:"Input_inputWrapper__GGCVO",input:"Input_input__MPP3N",error:"Input_error__1LZTs",errorMessage:"Input_errorMessage__zHQ6T"}},5103:function(e){e.exports={line_animation:"LineAnimation_line_animation__4KfHe",line_area:"LineAnimation_line_area__x5Nmj",line_animation_2:"LineAnimation_line_animation_2__z7r1k"}},8096:function(e){e.exports={header:"Navigation_header__6p4mC",header__logo:"Navigation_header__logo__b_jx0",logo__title:"Navigation_logo__title__Te9f3",logo__title_colored:"Navigation_logo__title_colored__635yO",navigation:"Navigation_navigation__fmHy5",navigation__item:"Navigation_navigation__item__ZmMBy",burgerButton:"Navigation_burgerButton____bjo",header_opened:"Navigation_header_opened__01cEt",burgerLine:"Navigation_burgerLine__S8uta",open:"Navigation_open__U_AAa",dropdown:"Navigation_dropdown__Tq6Db",dropdownItem:"Navigation_dropdownItem__0ZCS0",visible:"Navigation_visible__DDzdP",symbol:"Navigation_symbol__QxEgy"}},4927:function(e){e.exports={"arrow-button":"ScrollTopButton_arrow-button__eMZX0","scroll-top-button":"ScrollTopButton_scroll-top-button__Dx2Yx","scroll-top-button--visible":"ScrollTopButton_scroll-top-button--visible__s7yHC"}}}]);