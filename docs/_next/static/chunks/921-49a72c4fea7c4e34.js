(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[921],{5624:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.ab1a421b.webp",height:400,width:378,blurDataURL:"data:image/webp;base64,UklGRpYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAABOZbLv/lgkAcaPQ1//PDFU5mqqKfU1FdTRbuogwQ3VtO3WgyoVEcmRnaIqOT2tlGIU7Q0NChxQAFmd3eWgTAABWUDggLgAAADABAJ0BKggACAACQDglpAADcAD++grBf0Yw0x4TGDtyzE3vsRbhYxdsLl6QoAA=",blurWidth:8,blurHeight:8}},7993:function(e,t,a){"use strict";a.d(t,{z:function(){return r}});var n=a(5893),o=a(7294),l=a(6528),s=a.n(l),c=a(2934),i=a(1163);let r=e=>{let{isSubmitted:t=!1,disabled:a=!1,status:l,href:r="",className:m=""}=e,d=(0,o.useRef)(0),[_,u]=(0,o.useState)(20),h=(0,i.useRouter)();return(0,n.jsx)(c.L,{as:"a",href:r,disabled:a,className:"".concat(s().button," ").concat(m," ").concat(t?s().success:""),onClick:e=>{window.matchMedia("(pointer: coarse)").matches&&(e.preventDefault(),h.push(r,void 0,{shallow:!0}))},onTouchStart:e=>{e.preventDefault(),d.current=e.touches[0].clientX,u(20)},onTouchMove:e=>{e.preventDefault(),u(20+Math.min(Math.max(0,e.touches[0].clientX-d.current)/(.8*e.target.offsetWidth)*100,100))},onTouchEnd:e=>{e.preventDefault(),_>=70&&r&&h.push(r,void 0,{shallow:!0}),u(20)},style:{"--progress-width":"".concat(_,"%")},children:l})}},2445:function(e,t,a){"use strict";a.d(t,{l:function(){return d}});var n=a(5893),o=a(7294),l=a(2718),s=a(5846);a(7993);var c=a(2645),i=a.n(c),r=a(740),m=a(2934);function d(e){let{isSubmitted:t,setIsSubmitted:a,type:c=""}=e,[d,_]=(0,o.useState)({name:"",phone:"",checkbox:!1}),[u]=(0,o.useState)(()=>Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),[h,p]=(0,o.useState)(""),[f,x]=(0,o.useState)({name:"",phone:"",checkbox:!1}),y=e=>{let{name:t,value:a}=e.target;if("checkbox"===t){_(a=>({...a,[t]:e.target.value})),x(a=>({...a,[t]:!e.target.value}));return}if("phone"===t){let e=(0,s.un)(a);_(a=>({...a,[t]:e})),x(a=>({...a,[t]:(0,s.a$)(e)}))}else _(e=>({...e,[t]:a})),x(e=>({...e,[t]:(0,s.Ol)(a)}))};return(0,n.jsx)(r.I,{children:(0,n.jsxs)("div",{className:i().form,children:[(0,n.jsxs)(m.L,{side:"left",className:i().form_content,children:[(0,n.jsx)("h3",{className:i().textTitle,children:"Готовы жить лучше?"}),(0,n.jsx)("p",{className:i().textDescription,children:"Запишитесь на бесплатную консультацию, и я свяжусь с Вами в ближайшее время."}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{className:i().textDescription,children:'Первая консультация 20 мин бесплатно. Подготовьте вопрос, который Вас интересует, и я раскрою и решу Вашу проблему, а Вы уже сможете сделать вывод, обращаться ко мне в дальнейшем или нет."'})]}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=(0,s.Ol)(d.name),n=(0,s.a$)(d.phone);x(e=>({...e,name:t,phone:n,checkbox:!d.checkbox})),t||n||!d.checkbox||fetch("https://api.telegram.org/bot".concat("7733350115:AAE6tcQZc-R2bRw8ewLKwvtiS3UKHTcgV9c","/sendMessage"),{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({chat_id:"-1002359699160",parse_mode:"html",text:"<b>Новая запись на консультацию</b>\n\n<b>Программа</b>: ".concat(null!=c?c:"отсутствует","\n<b>Имя</b>: ").concat(d.name,"\n<b>Номер телефона</b>: ").concat(d.phone,"\n")})}).then(()=>{console.log("<b>Новая запись на консультацию</b>\n\n<b>Программа</b>: ".concat(c||"отсутствует","\n<b>Имя</b>: ").concat(d.name,"\n<b>Номер телефона</b>: ").concat(d.phone,"\n")),p("success")}).catch(e=>{p("error")}).finally(()=>{_({name:"",phone:"",checkbox:!1}),a(!0)})},className:i().form__item,children:[(0,n.jsx)("div",{className:i().form_elem,children:(0,n.jsx)(l.I,{type:"text",name:"name",placeholder:"Введите Ваше имя",value:d.name,onChange:y,disabled:t,error:f.name})}),(0,n.jsx)("div",{className:i().form_elem,children:(0,n.jsx)(l.I,{type:"tel",name:"phone",placeholder:"Введите Ваш номер телефона",value:d.phone,onChange:y,disabled:t,error:f.phone})}),(0,n.jsxs)("div",{className:i().form_elem,style:{display:"flex",flexDirection:"column",gap:15,position:"relative"},children:[(0,n.jsx)(m.L,{as:"button",type:"submit",className:i().formbutton,disabled:t,children:"Записаться"}),(0,n.jsxs)(m.L,{className:i()["form-checkbox"],children:[(0,n.jsx)("input",{name:"checkbox",className:"".concat(i()["form-checkbox__input"]," ").concat(f.checkbox?i()["form-checkbox__input--error"]:""),type:"checkbox",id:u,disabled:t,onChange:e=>{y({target:{name:"checkbox",value:e.target.checked}})},checked:d.checkbox}),(0,n.jsxs)("label",{style:{opacity:t?.5:1},className:"".concat(i()["form-checkbox__label"]),htmlFor:u,children:["Я ознакомлен (ознакомлена) с"," ",(0,n.jsx)("a",{target:"_blank",className:i()["form-doc"],href:"/agreement-data.txt",children:"правилами"})," ","обработки персональных данных"]})]}),h?(0,n.jsxs)(m.L,{style:{marginTop:20},children:["error"===h?(0,n.jsxs)("p",{children:["Что-то пошло не так. Свяжитесь, пожалуйста, со мной в Телеграм по"," ",(0,n.jsx)("a",{target:"_blank",href:"https://t.me/Z44LP",style:{color:"var(--accent)",fontWeight:"bold",cursor:"pointer"},children:"ссылке"})]}):null,"success"===h?(0,n.jsx)("p",{children:"Спасибо, Ваша запись оформлена."}):null]}):null]})]})]})})}},2718:function(e,t,a){"use strict";a.d(t,{I:function(){return c}});var n=a(5893);a(7294);var o=a(8942),l=a.n(o),s=a(2934);function c(e){let{type:t,name:a,placeholder:o,value:c,onChange:i,disabled:r,error:m}=e;return(0,n.jsxs)(s.L,{className:"".concat(l().inputGroup," ").concat(m?l().error:""),children:[(0,n.jsx)("div",{className:l().inputWrapper,children:(0,n.jsx)("input",{type:t,name:a,placeholder:o,value:c,onChange:i,onKeyDown:e=>{-1===[8,46,9,27,13].indexOf(e.keyCode)&&(65!==e.keyCode||!0!==e.ctrlKey&&!0!==e.metaKey)&&(!(e.keyCode>=35)||!(e.keyCode<=40))&&("tel"!==t||/[0-9]/.test(e.key)||e.preventDefault())},disabled:r,className:l().input,autoComplete:(()=>{switch(a){case"name":return"name";case"phone":return"tel";default:return"off"}})()})}),m&&(0,n.jsx)("p",{className:l().errorMessage,children:m})]})}},7132:function(e,t,a){"use strict";a.d(t,{Z:function(){return E}});var n=a(5893),o=a(3397),l=a.n(o),s=a(7194),c=a.n(s),i=a(2235),r=a.n(i),m=a(7294),d=a(6411),_=a.n(d),u=a(5624),h=a(5675),p=a.n(h);function f(){return(0,n.jsx)("footer",{className:_().footer,children:(0,n.jsx)("div",{className:_().container,children:(0,n.jsxs)("div",{className:_().logo__container,children:[(0,n.jsx)(p(),{className:_().logo,src:u.Z,alt:"Company Logo"}),(0,n.jsxs)("ul",{className:_().list,children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#message",className:_().social__link,children:(0,n.jsx)("svg",{role:"presentation",width:"25px",height:"25px",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM51.8276 49.2076L74.191 33.6901C73.4347 32.6649 72.2183 32 70.8466 32H29.1534C27.8336 32 26.6576 32.6156 25.8968 33.5752L47.5881 49.172C48.8512 50.0802 50.5494 50.0945 51.8276 49.2076ZM75 63.6709V37.6286L53.4668 52.57C51.1883 54.151 48.1611 54.1256 45.9095 52.5066L25 37.4719V63.6709C25 65.9648 26.8595 67.8243 29.1534 67.8243H70.8466C73.1405 67.8243 75 65.9648 75 63.6709Z",fill:"#525252"})})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{rel:"nofollow","aria-label":"telegram",href:"https://t.me/Z44LP",target:"_blank",className:_().social__link,children:(0,n.jsx)("svg",{role:"presentation",width:"25px",height:"25px",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z",fill:"#525252"})})})})]}),(0,n.jsx)("p",{className:_().year,children:'\xa9 2024 Александр "Интеграл" Васильев'})]})})})}var x=a(8096),y=a.n(x),g=a(1664),b=a.n(g),v=a(3153);let j=()=>{let[e,t]=(0,m.useState)(!1),a=(a,n)=>{t(!e)};return(0,n.jsxs)("div",{children:[(0,n.jsxs)("header",{className:"".concat(y().header," ").concat(e?y().header_opened:""),children:[(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10},children:[(0,n.jsx)(p(),{src:u.Z,alt:"",className:y().header__logo,id:"logo"}),(0,n.jsxs)("p",{className:y().logo__title,children:[(0,n.jsx)("span",{className:y().logo__title_colored,children:"ИN"}),"TEGRAAL"]})]}),(0,n.jsx)("nav",{children:(0,n.jsx)("ul",{className:y().navigation,children:A.map((e,t)=>(0,n.jsx)(N,{text:e.parent.value,href:e.parent.path,childs:e.childs,onClick:a},t))})})]}),(0,n.jsxs)("button",{className:"".concat(y().burgerButton," ").concat(e?y().open:""),onClick:()=>t(!e),children:[(0,n.jsx)("div",{className:y().burgerLine}),(0,n.jsx)("div",{className:y().burgerLine}),(0,n.jsx)("div",{className:y().burgerLine})]})]})},N=e=>{let{text:t,href:a,childs:o,onClick:l}=e,[s,c]=(0,m.useState)(!1),[i,r]=(0,m.useState)(!1),d=()=>{window.innerWidth<768?r(!0):r(!1)};(0,m.useEffect)(()=>(d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}),[]);let _=(0,m.useCallback)(()=>{c(!0)},[]),u=(0,m.useCallback)(()=>{c(!1)},[]);return(0,n.jsxs)("li",{...i?{}:{onMouseEnter:_,onMouseLeave:u},className:y().navigation__item,children:[(0,n.jsxs)(b(),{prefetch:!1,style:{height:"100%",display:"block"},href:a,scroll:!1,onClick:e=>l(e,a),children:[t," ",o?(0,n.jsx)("span",{className:y().symbol,children:(0,n.jsx)("svg",{version:"1.1",width:"10",height:"10",fill:"#fff",id:"Capa_1",x:"50px",y:"0px",viewBox:"0 0 123.97 123.97",xmlSpace:"preserve",children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M51.802,96.062c2.801,2.801,6.5,4.2,10.2,4.2s7.4-1.399,10.2-4.2l47.3-47.3c5.5-5.5,6.101-14.6,0.8-20.3 c-5.6-6.1-15.1-6.3-20.899-0.5l-30.4,30.3c-3.899,3.9-10.2,3.9-14.1,0l-30.3-30.3c-5.801-5.8-15.301-5.7-20.9,0.5 c-5.3,5.7-4.8,14.8,0.8,20.3L51.802,96.062z"})})})}):""]}),o?(0,n.jsx)("div",{className:y().dropdown+" "+(s?y().visible:""),children:o.map(e=>(0,n.jsx)(b(),{prefetch:!1,href:e.path,onClick:t=>l(t,e.path),className:y().dropdownItem,scroll:!1,children:e.value},e.path))}):null]})},A=[{parent:{path:"/",value:"Главная"}},{parent:{path:"/#programs",value:"Программы"},childs:v.R.map(e=>({path:e.href,value:e.title}))},{parent:{path:"/#about",value:"Обо мне"}},{parent:{path:"/#reviews",value:"Отзывы"}},{parent:{path:"/#faq",value:"Вопросы и ответы"}}];var F=a(9008),w=a.n(F),k={src:"/_next/static/media/favicon32x32.e7e8fc9e.png"},C={src:"/_next/static/media/logo.ee934d9f.png",height:400,width:378,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBklEQVR42mMAAV+/AGF3J6eZHi6uOd6ubrtD/AL++3v7TgNKcYIV2JsYF7rZ2y32cHS84Ofmfj08KOS/r4fneaAUD4ONtlqoHiuDpa+n5yw/N7dV3s7OXb6e3rXGssK+1qpyrgw2OuqltjpqJnZmZtHeHp67PF3dOjREuAzsddSdrbRUSxmstVRzHY0NrL1dXUp9vXwWBPkFnvJxdW110NNwsdHVLGKwVFNIcbE0TQ/w9cvwcffs8vXw6gM60N9aRyPb0UgvlcFOV13CVke91URewtrJUMvZyUjb2VRF3snOQLvd295ahAEEXEz0xWx1NdKttNXLrXU0K231tDJczAyFXcwMGQDd1UKUJ/tPhAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},L=a(4927),R=a.n(L),D=a(1163);function S(e){let{onClick:t,classes:a}=e;return(0,n.jsx)("button",{onClick:t,className:"".concat(R()["arrow-button"]," ").concat(a),children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",version:"1.1",children:[(0,n.jsx)("path",{d:"",stroke:"none",fillRule:"evenodd"}),(0,n.jsx)("path",{d:"M 250.551 107.462 C 247.432 108.599, 220.984 134.498, 124.702 230.701 C 53.251 302.093, 2.223 353.832, 1.401 355.718 C -0.400 359.855, -0.392 366.355, 1.421 369.800 C 2.202 371.285, 9.964 379.546, 18.671 388.157 C 31.599 400.944, 35.259 404.016, 38.643 404.916 C 40.922 405.523, 43.397 405.828, 44.143 405.593 C 44.889 405.359, 46.850 404.876, 48.500 404.519 C 50.768 404.030, 76.440 378.951, 153.750 301.702 L 256 199.532 358.250 301.702 C 435.560 378.951, 461.232 404.030, 463.500 404.519 C 465.150 404.876, 467.111 405.359, 467.857 405.593 C 468.603 405.828, 471.078 405.523, 473.357 404.916 C 476.727 404.018, 480.365 400.983, 492.853 388.656 C 510.652 371.085, 513 367.916, 513 361.461 C 513 358.663, 512.611 357.122, 512 357.500 C 511.450 357.840, 511 357.308, 511 356.319 C 511 354.339, 268.170 110.757, 263.965 108.520 C 259.813 106.311, 254.796 105.915, 250.551 107.462 M 0.300 363 C 0.300 366.025, 0.487 367.262, 0.716 365.750 C 0.945 364.238, 0.945 361.762, 0.716 360.250 C 0.487 358.738, 0.300 359.975, 0.300 363",stroke:"none",fill:"#040404",fillRule:"evenodd"})]})})}var Z=()=>{let[e,t]=(0,m.useState)(!1),a=(0,D.useRouter)(),o=(0,m.useCallback)(()=>{if(document.body.scrollTop>50){t(!0);return}t(!1)},[]),l=(0,m.useCallback)(e=>{document.body.scrollTo({top:0,behavior:"smooth"}),a.push("",void 0,{shallow:!0})},[a]);return(0,m.useEffect)(()=>{var e;return null===(e=document.body)||void 0===e||e.addEventListener("scroll",o),()=>{var e;null===(e=document.body)||void 0===e||e.removeEventListener("scroll",o)}},[]),(0,n.jsx)(S,{classes:"".concat(R()["scroll-top-button"]," ").concat(e?R()["scroll-top-button--visible"]:""),onClick:l})};function E(e){let{children:t,metaConfig:a}=e,{title:o,description:s,keywords:i}=a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(w(),{children:[(0,n.jsx)(r(),{id:"cda874ca77c1ea58",dynamic:[l().style.fontFamily,c().style.fontFamily],children:":root{--heading:".concat(l().style.fontFamily,";--body-font:").concat(c().style.fontFamily,"}")}),(0,n.jsx)("title",{className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]]),children:o}),(0,n.jsx)("meta",{name:"description",content:s,className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("meta",{charSet:"utf-8",className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, user-scalable=0",className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8",className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("meta",{name:"author",content:"Александр Васильев",className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("meta",{name:"copyright",content:"Александр Васильев",className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("meta",{name:"keywords",content:i,className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("meta",{name:"robots",content:"index,follow",className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("meta",{property:"og:url",content:"https://alexandrvasilev.ru",className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("meta",{property:"og:title",content:o,className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("meta",{property:"og:description",content:s,className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("meta",{property:"og:type",content:"website",className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("meta",{property:"og:image",content:C,className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes",className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent",className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("link",{rel:"icon",href:"/_next/static/media/logo.a3e3d12c.ico",className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("link",{rel:"apple-touch-icon",href:k.src,className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"32x32",href:k.src,className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/_next/static/media/favicon180x180.dfa9d075.png",className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])}),(0,n.jsx)("link",{rel:"apple-touch-startup-image",href:k.src,className:r().dynamic([["cda874ca77c1ea58",[l().style.fontFamily,c().style.fontFamily]]])})]}),(0,n.jsx)(j,{}),(0,n.jsx)("main",{children:t}),(0,n.jsx)(f,{}),(0,n.jsx)(Z,{})]})}},740:function(e,t,a){"use strict";a.d(t,{I:function(){return c}});var n=a(5893),o=a(7294),l=a(5103),s=a.n(l);let c=(0,o.memo)(e=>{let{children:t}=e;return(0,n.jsxs)("section",{style:{position:"relative"},children:[(0,n.jsxs)("div",{className:s().line_animation,children:[(0,n.jsx)("div",{className:s().line_area}),(0,n.jsx)("div",{className:s().line_area}),(0,n.jsx)("div",{className:s().line_area}),(0,n.jsx)("div",{className:s().line_area}),(0,n.jsx)("div",{className:s().line_area}),(0,n.jsx)("div",{className:s().line_area}),(0,n.jsx)("div",{className:s().line_area}),(0,n.jsx)("div",{className:s().line_area})]}),t]})})},3153:function(e,t,a){"use strict";a.d(t,{R:function(){return o}});var n=a(5624);let o=[{id:1,title:"Полюбить жизнь",image:n.Z,href:"/love-life"},{id:2,title:"Полюбить себя",image:n.Z,href:"/love-myself"},{id:3,title:"Сессия релаксации",image:n.Z,href:"/relax-session"},{id:4,title:"Увеличить заработок",image:n.Z,href:"/grow-money"},{id:5,title:"Удалить плохие воспоминания",image:n.Z,href:"/remove-bad-memories"},{id:6,title:"Бросить курить легко",image:n.Z,href:"/drop-smoking"}]},2934:function(e,t,a){"use strict";a.d(t,{L:function(){return r}});var n=a(5893),o=a(7294),l=a(9231);let s={left:"translateX(-20px)",right:"translateX(20px)",bottom:"translateY(-20px)",top:"translateY(20px)",topmax:"translateY(100px)",opacity:"translateY(0)"},c={left:"translateX(0)",right:"translateX(0)",bottom:"translateY(0)",top:"translateY(0)",topmax:"translateY(0)",opacity:"translateY(0)"},i=o.memo(e=>{let{itemScope:t,itemType:a,itemProp:o,onInit:l=!0,id:i,as:r="section",inViewport:m,style:d,enterCount:_,forwardedRef:u,children:h,className:p,side:f="top",speed:x=2,delay:y=.3,onClick:g,disabled:b=!1}=e,v={};void 0!==t&&(v.itemScope=t),void 0!==a&&(v.itemType=a),void 0!==o&&(v.itemProp=o);let j={...d,willChange:"transform, opacity",transition:"transform ".concat(x,"s ").concat(y,"s, opacity ").concat(x,"s ").concat(y,"s, background-size ").concat(x,"s ").concat(y,"s, background-color 300ms ").concat(y,"s"),opacity:m||l&&_>0?1:0,transform:m||l&&_>0?c[f]:s[f]};return(0,n.jsx)(r,{...e,...v,id:i,ref:u,className:p,onClick:g,style:j,children:h})}),r=(0,l.ZP)(i)},8981:function(e,t,a){"use strict";a.d(t,{Y:function(){return l}});var n=a(1163),o=a(7294);let l=()=>{o.useRef(!1);let{asPath:e}=(0,n.useRouter)();o.useRef(e),o.useEffect(()=>{console.log("asPath",e),e&&e.includes("#")||document.body.scrollTo(0,0)},[])}},5846:function(e,t,a){"use strict";a.d(t,{Ol:function(){return n},a$:function(){return o},un:function(){return l}});let n=e=>e.trim().length<2?"Имя должно содержать не менее 2 символов":/^[A-Za-zА-Яа-я\s'\-\.]+$/.test(e.trim())?"":"Имя может содержать только буквы и пробелы",o=e=>11!==e.replace(/\D/g,"").length?"Номер телефона не заполнен до конца":"",l=e=>{let t=e.replace(/\D/g,"").slice(0,11);if(!t.length)return"";let a=t[0];return t.length>1&&(a+=" ("+t.slice(1,4),t.length>4&&(a+=") "+t.slice(4,7),t.length>7&&(a+="-"+t.slice(7,9),t.length>9&&(a+="-"+t.slice(9,11))))),a}},6528:function(e){e.exports={button:"Button_button__mg_cR",success:"Button_success__S80vN",fadeInRight:"Button_fadeInRight__jOQgV"}},6411:function(e){e.exports={footer:"Footer_footer__o4_Ec",container:"Footer_container__Mn8SS",logo__container:"Footer_logo__container__fIB29",logo:"Footer_logo__ZNv_V",navigation:"Footer_navigation__Yj_7L",contact:"Footer_contact__vepDU",list_title:"Footer_list_title__8bb_s",list:"Footer_list__FsWR4",social__link:"Footer_social__link__61XGe",year:"Footer_year__DzZKw"}},2645:function(e){e.exports={form:"Form_form__zp_JH",form__item:"Form_form__item__ARWR_",form_content:"Form_form_content__Wl3ld",success:"Form_success__WJvU7",form_elem:"Form_form_elem__T4eUV","form-checkbox":"Form_form-checkbox__W0mtR","form-checkbox__input":"Form_form-checkbox__input__zg97g","form-checkbox__input--error":"Form_form-checkbox__input--error__jKZUp","form-doc":"Form_form-doc__Qxpb3","form-checkbox__label":"Form_form-checkbox__label__CxtB5",formbutton:"Form_formbutton__rjUtE",textTitle:"Form_textTitle__sUfJG"}},8942:function(e){e.exports={inputGroup:"Input_inputGroup__1A1ls",inputWrapper:"Input_inputWrapper__GGCVO",input:"Input_input__MPP3N",error:"Input_error__1LZTs",errorMessage:"Input_errorMessage__zHQ6T"}},5103:function(e){e.exports={line_animation:"LineAnimation_line_animation__4KfHe",line_area:"LineAnimation_line_area__x5Nmj",line_animation_2:"LineAnimation_line_animation_2__z7r1k"}},8096:function(e){e.exports={header:"Navigation_header__6p4mC",header__logo:"Navigation_header__logo__b_jx0",logo__title:"Navigation_logo__title__Te9f3",logo__title_colored:"Navigation_logo__title_colored__635yO",navigation:"Navigation_navigation__fmHy5",navigation__item:"Navigation_navigation__item__ZmMBy",burgerButton:"Navigation_burgerButton____bjo",header_opened:"Navigation_header_opened__01cEt",burgerLine:"Navigation_burgerLine__S8uta",open:"Navigation_open__U_AAa",dropdown:"Navigation_dropdown__Tq6Db",dropdownItem:"Navigation_dropdownItem__0ZCS0",visible:"Navigation_visible__DDzdP",symbol:"Navigation_symbol__QxEgy"}},4927:function(e){e.exports={"arrow-button":"ScrollTopButton_arrow-button__eMZX0","scroll-top-button":"ScrollTopButton_scroll-top-button__Dx2Yx","scroll-top-button--visible":"ScrollTopButton_scroll-top-button--visible__s7yHC"}}}]);