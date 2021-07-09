(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=a(7),i=a(8),u=a(12),s=a(11),d=(a(19),a(13)),m=a(4),p=a(1),g=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14],v=[5,5,0,0,5,5,0,0,0,0,0,0,0,0,0,0,5,5,0,0,0,0,5,5,5,5,5,5,5],f=Object(n.createContext)();var h=function(e){var t=Object(n.useState)(0),a=Object(p.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)({status:!1}),i=Object(p.a)(o,2),u=i[0],s=i[1],h=Object(n.useState)({character:"A",signalData:8,signalParity:"even",signalStop:1,signalMode:"TTL"}),b=Object(p.a)(h,2),y=b[0],E=b[1];Object(n.useEffect)((function(){w()}),[y]);var O=function(){return y.character.charCodeAt(0).toString(2).padStart(y.signalData,0).split("").reverse().map((function(e){return parseInt(e)}))},S=function(){var e=Array.apply(null,Array(8===y.signalData?5:6).fill(1));return e[0]=function(){var e=O().reduce((function(e,t){return e+t}),0),t=1;return"odd"===y.signalParity?t=(e+1)%2:"even"===y.signalParity&&(t=(e+1)%2===0?1:0),t}(),e},j=function(e,t,a){return{type:"rect",xref:"x",yref:"paper",line:{width:0},opacity:.2,layer:"below",y0:0,y1:1,fillcolor:a,x0:e,x1:t}},k=function(e,t,a){return{showarrow:!1,align:"center",yanchor:"top",xanchor:"left",x:e,y:t,text:a}},C=function(){var e=7===y.signalData,t="none"===y.signalParity,a=e?9:10,n=t?a:a+1,r=1===y.signalStop?n+1:n+2,l="TTL"===y.signalMode?0:-8;return{shapes:[j(0,1,"black"),j(1,2,"blue"),j(2,a,"red"),j(a,n,"yellow"),j(n,r,"green"),j(r,14,"black")],annotations:[k(0,l,"idle"),k(1,l,"start"),k(5,l,"data"),t?[]:k(a,l,"parity"),k(n,l,"stop"),k(13,l,"idle")]}},T=function(){var e=y.character,t=e.charCodeAt(0).toString(10),a=e.charCodeAt(0).toString(2).padStart(y.signalData,0),n=e.charCodeAt(0).toString(16);return"".concat(y.signalMode," timing diagram<br>\n    '").concat(e,"' - ").concat(t," - 0b").concat(a," - 0x").concat(n)},w=function(){var e=[1,0].concat(Object(m.a)(O()),Object(m.a)(S())),t=[];t.t=function(){var e=1,t=Array.apply(null,Array(29));t[0]=0;for(var a=1;a<29;a+=2)t[a]=e,t[a+1]=e++;return t}(),t.y=function(e){var t=0,a=Array.apply(null,Array(29));a[0]=e[0];for(var n=1;n<29;n+=2)a[n]=e[t++],a[n+1]=e[t];if("TTL"===y.signalMode)for(var r=0;r<29;r++)a[r]=1===a[r]?5:0;else for(var l=0;l<29;l++)a[l]=1===a[l]?-8:8;return a}(e),c(l+1),s({status:!1}),D(x(t.t,t.y))},x=function(e,t){return{data:[{x:e,y:t,hoverinfo:"skip",line:{width:3,color:"black"}}],layout:Object(d.a)({title:T(),autoresize:!0,xaxis:{dtick:1,showticklabels:!1},yaxis:{dtick:"TTL"===y.signalMode?5:8}},C()),config:{displayModeBar:!1},revision:l}},A=Object(n.useState)(x(g,v)),M=Object(p.a)(A,2),P=M[0],D=M[1];return r.a.createElement(f.Provider,{value:{update:function(e,t,a,n,r){E({character:e,signalData:t,signalParity:a,signalStop:n,signalMode:r})},plotter:P,error:u,setError:s}},e.children)};var b=function(){var e=Object(n.useContext)(f),t=e.update,a=e.setError,l=Object(n.useState)("A"),c=Object(p.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(8),s=Object(p.a)(u,2),d=s[0],m=s[1],g=Object(n.useState)("even"),v=Object(p.a)(g,2),h=v[0],b=v[1],y=Object(n.useState)(1),E=Object(p.a)(y,2),O=E[0],S=E[1],j=Object(n.useState)("TTL"),k=Object(p.a)(j,2),C=k[0],T=k[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{id:"plotForm",onSubmit:function(e){e.preventDefault();var n=o.trim().split(""),r=n[0];n.length<1?a({status:!0,message:0}):n.length>1?a({status:!0,message:1}):r.charCodeAt(0)<32||r.charCodeAt(0)>127?a({status:!0,message:2}):(a({status:!1}),t(r,d,h,O,C))}},r.a.createElement("div",{id:"plotFormNoButton"},r.a.createElement("label",{htmlFor:"character"},"Character"),r.a.createElement("input",{id:"character",type:"text",value:o,onChange:function(e){return i(e.target.value)}}),r.a.createElement("label",{htmlFor:"signalData"},"Data"),r.a.createElement("fieldset",null,r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"signalData7",name:"7",value:"7",checked:7===d,onChange:function(e){return m(parseInt(e.target.value))}}),"7 bits"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"signalData8",name:"8",value:"8",checked:8===d,onChange:function(e){return m(parseInt(e.target.value))}}),"8 bits")),r.a.createElement("label",{htmlFor:"signalParity"},"Parity"),r.a.createElement("fieldset",null,r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"signalParityNone",name:"none",value:"none",checked:"none"===h,onChange:function(e){return b(e.target.value)}}),"None"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"signalParityEven",name:"even",value:"even",checked:"even"===h,onChange:function(e){return b(e.target.value)}}),"Even"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"signalParityOdd",name:"odd",value:"odd",checked:"odd"===h,onChange:function(e){return b(e.target.value)}}),"Odd")),r.a.createElement("label",{htmlFor:"signalStop"},"Stop"),r.a.createElement("fieldset",null,r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"signalStop1",name:"1",value:"1",checked:1===O,onChange:function(e){return S(parseInt(e.target.value))}}),"1 bit"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"signalStop2",name:"2",value:"2",checked:2===O,onChange:function(e){return S(parseInt(e.target.value))}}),"2 bits")),r.a.createElement("label",{htmlFor:"signalMode"},"Mode"),r.a.createElement("fieldset",null,r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"signalModeTTL",name:"TTL",value:"TTL",checked:"TTL"===C,onChange:function(e){return T(e.target.value)}}),"TTL"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"signalModeRS232",name:"RS232",value:"RS232",checked:"RS232"===C,onChange:function(e){return T(e.target.value)}}),"RS232"))),r.a.createElement("div",{id:"plotFormButton"},r.a.createElement("button",{type:"submit"},"Update plot"))))},y=a(9),E=a.n(y),O=a(10),S=a.n(O)()(E.a);var j=function(e){return r.a.createElement("div",{className:"overlay"},r.a.createElement("p",null,"Error : ",["no character specified","only one character is permitted","only ASCII characters are permitted"][e]))},k=function(){var e=Object(n.useContext)(f),t=e.plotter,a=e.error;return r.a.createElement("div",{className:"plot-container"},a.status?j(a.message):" ",r.a.createElement(S,{data:t.data,layout:t.layout,revision:t.revision,config:t.config,style:{width:"100%"}}))};var C=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"This app is still at an early developpement stage.",r.a.createElement("br",null),"Please feel free to contact me with any feedback."))},T=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(h,null,r.a.createElement(b,null),r.a.createElement(k,null))),r.a.createElement(C,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);