(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[93995],{604206:(e,t,n)=>{"use strict";n.d(t,{hZ:()=>r,pb:()=>o,kD:()=>i,DI:()=>a,IC:()=>l,iU:()=>u,W7:()=>c,uB:()=>s,Rh:()=>p,G_:()=>d,vU:()=>f,Vw:()=>y,KD:()=>m,uj:()=>g,lo:()=>h,Yf:()=>b,fo:()=>v,PY:()=>E,bp:()=>O,oJ:()=>S,k4:()=>w,sc:()=>P,Li:()=>T});var r="CHANGE_DRAWING_STATUS",o="DRAW:END_DRAWING",i="DRAW:SET_CURRENT_STYLE",a="DRAW:GEOMETRY_CHANGED",l="DRAW:DRAW_SUPPORT_STOPPED",u="DRAW:FEATURES_SELECTED",c="DRAW:DRAWING_FEATURES",s="DRAW:SET_SNAPPING_LAYER",p="DRAW:SNAPPING_IS_LOADING",d="DRAW:TOGGLE_SNAPPING",f="DRAW:SET_SNAPPING_CONFIG";function y(e,t,n,r,o){return{type:a,features:e,owner:t,enableEdit:n,textChanged:r,circleChanged:o}}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:u,features:e}}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:c,features:e}}function h(){return{type:l}}function b(e,t,n,o,i,a){return{type:r,status:e,method:t,owner:n,features:o,options:i,style:a}}function v(e,t){return{type:o,geometry:e,owner:t}}function E(e){return{type:i,currentStyle:e}}var O=function(e){return b("clean","",e,[],{})};function S(){return{type:d}}function w(e){return{type:s,snappingLayer:e}}function P(){return{type:p}}function T(e,t,n){return{type:f,value:e,prop:t,pluginCfg:n}}},965539:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(124852),o=n.n(r);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=function(e){var t=e.id,n=e.children,r=e.header,i=e.footer,l=e.columns,u=e.height,c=e.style,s=void 0===c?{}:c,p=e.className,d=e.bodyClassName,f=void 0===d?"ms2-border-layout-body":d;return o().createElement("div",{id:t,className:p,style:a({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},s)},r,o().createElement("div",{className:f,style:{display:"flex",flex:1,overflowY:"auto"}},o().createElement("main",{className:"ms2-border-layout-content",style:{flex:1,overflowX:"hidden"}},u?o().createElement("div",{style:{height:u}},n):n),u?o().createElement("div",{style:{height:u}},l):l),i)}},532425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(675263),o=n.n(r),i=n(124852),a=n.n(i);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,n=e.style,r=void 0===n?{}:n,o=e.className,i=e.hidden;return a().createElement("div",{className:o,style:u({width:t,height:t,overflow:"hidden"},r)},!i&&a().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const d=p},893995:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>se});var r=n(727418),o=n.n(r),i=n(124852),a=n.n(i),l=n(171703),u=n(22222),c=n(675263),s=n.n(c),p=n(227361),d=n.n(p),f=n(732833),y=n(496259),m=n(282467),g=n(532425),h=n(965539),b=n(782904),v=n(757588),E=n(607147),O=n(737275),S=n(452992),w=n(423570),P=n.n(w),T=function(e){switch(e){case"START":default:return{iconGlyph:"map-marker",iconShape:"square",iconColor:"blue",highlight:!1,id:P()()};case"END":return{iconGlyph:"stop-circle",iconShape:"square",iconColor:"blue",highlight:!1,id:P()()}}};function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=n(409669).create(),A=O.ZP.getConfigProp("geoNodeSettings").routeApiUrl,C=(O.ZP.getConfigProp("geoNodeSettings").searchApiUrl,O.ZP.getConfigProp("geoNodeSettings").longdoApiKey),I=function(e){return{type:"ROUTING_FEATURE_LOADED",features:e}},_=function(e,t,n,r){return function(o){return N.get(SERVICE_SEARCH_API_URL,{params:{lat:n.y,lon:n.x,keyword:t,locale:"th",key:r||C}}).then((function(t){o(function(e,t){return{type:"ROUTING_SEARCH_LOADED",index:e,result:t}}(e,t.data))}))}};const x={start:{x:.5*(window.innerWidth-600),y:.5*(window.innerHeight-500)},dialogStyle:{position:"fixed",top:"0px",left:"0px"},routingGuideList:{marginTop:"10px",paddingRight:"10px",overflow:"auto"},guideStyle:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",cursor:"pointer"},turnStyle:{width:"36px",height:"36px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"stretch",padding:"12px 0px"},turnImageStyle:{width:"16px",height:"16px"},distanceStyle:{marginLeft:"auto"},resultListStyle:{borderLeft:"1px solid #dddddd",borderRight:"1px solid #dddddd",position:"absolute",background:"white",maxHeight:"600px",overflowY:"auto",width:"90.5%",zIndex:20,marginTop:"11.5%"},resultListStyleWithRemove:{borderLeft:"1px solid #dddddd",borderRight:"1px solid #dddddd",position:"absolute",background:"white",maxHeight:"600px",overflowY:"auto",width:"80.5%",marginTop:"12.1%",zIndex:20},resultStyle:{padding:"6px 12px",cursor:"pointer"}};var k={displaySetting:!1,pointList:[{lat:null,lon:null,keyword:"",searchResult:{}},{lat:null,lon:null,keyword:"",searchResult:{}}],features:[],routeType:[],routeMode:null},L=n(49977),j=n.n(L),G=n(604206),D=n(801550),U=n(340708);function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y=O.ZP.getConfigProp("geoNodeSettings").longdoApiKey;function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||X(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function q(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=X(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}function X(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ee(e,t){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ee(e,t)}function te(e,t){if(t&&("object"===Z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ne(e)}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e){return re=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},re(e)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(0,E.Yq)("routing");var ie=b.Xi.bind(null,"routing",null),ae=O.ZP.getConfigProp("geoNodeSettings").mapApiUrl,le=O.ZP.getConfigProp("geoNodeSettings").longdoApiKey,ue=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ee(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=re(r);if(o){var n=re(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return te(this,e)});function l(){var e;J(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return oe(ne(e=i.call.apply(i,[this].concat(n))),"onClose",(function(){e.props.onClose(!1)})),oe(ne(e),"onAddPoint",(function(){e.props.onAddPoint()})),oe(ne(e),"onSwapPoint",(function(){e.props.onSwapPoint()})),oe(ne(e),"onRemovePoint",(function(t){return function(){e.props.onRemovePoint(t)}})),oe(ne(e),"onDisplaySetting",(function(){e.props.onDisplaySetting()})),oe(ne(e),"onSearch",(function(){var t=e.props.pointList.find((function(e){if(!e.lat||!e.lon)return e})),n=e.props.routeMode,r=e.props.routeType;!t||t.lat?(document.getElementById("find-route").innerHTML="กำลังค้นหา...",e.props.onSearch(e.props.pointList,n,r,e.props.mapApiKey||le)):document.getElementById("find-route").innerHTML="ค้นหาเส้นทาง"})),oe(ne(e),"onClearSearch",(function(){e.props.onClearSearch(e.props)})),oe(ne(e),"onChangePointInput",(function(t){return function(n){e.props.onChangePointInput(t,n.nativeEvent.target.value)}})),oe(ne(e),"onClickGuide",(function(t){return function(){e.props.onClickGuide(t)}})),oe(ne(e),"onClickSearchResult",(function(t,n,r){return function(){e.props.onClickSearchResult(t,n,r)}})),oe(ne(e),"onChangeRouteMode",(function(t){return e.props.onChangeRouteMode(t.target.value)})),oe(ne(e),"onChangeRouteType",(function(t){return e.props.onChangeRouteType(t.target.value)})),oe(ne(e),"renderEastimateTime",(function(e){var t=~~(e/3600),n=~~(e%3600/60),r="";return t>0&&(r+=t+" ชั่วโมง "+(n<10?"0":"")),r+(n+" นาที ")})),oe(ne(e),"renderGuideList",(function(t,n,r){return a().createElement("div",null,a().createElement("div",{className:"panel panel-primary",style:{marginTop:"10px"}},a().createElement("div",{className:"panel-heading"},a().createElement(v.Row,null,a().createElement(v.Col,{md:6},e.renderEastimateTime(n)),a().createElement(v.Col,{md:6,style:{textAlign:"right"}},"ระยะทาง:"," ",r>1e3?(r/1e3).toFixed(2)+" กม.":r+" เมตร"))),a().createElement("div",{className:"panel-body"},a().createElement("div",{style:x.routingGuideList,key:"routing-guide"},t))))})),oe(ne(e),"renderLoading",(function(){return a().createElement("div",{className:"loading"},a().createElement(g.Z,{size:176}))})),e}return t=l,(n=[{key:"componentDidMount",value:function(){new Promise((function(e){var t="map-js-api";if(window.document.getElementById(t))e();else{var n=window.document.createElement("script");n.setAttribute("id",t),n.setAttribute("src",ae+"?key="+le),n.onload=function(){e()},window.document.head.appendChild(n)}}))}},{key:"renderHeader",value:function(){return a().createElement("div",{style:{width:"100%"}},a().createElement("div",{style:{display:"flex",alignItems:"center"}},a().createElement("div",null,a().createElement(m.Z,{className:"square-button no-events"},a().createElement(v.Glyphicon,{glyph:"record"}))),a().createElement("div",{style:{flex:"1 1 0%",padding:8,textAlign:"center"}},a().createElement("h4",null,"Routes")),a().createElement("div",null,a().createElement(m.Z,{className:"square-button no-border",onClick:this.onClose},a().createElement(v.Glyphicon,{glyph:"1-close"})))))}},{key:"render",value:function(){var e,t=this,n=[],r=q(this.props.pointList.entries());try{for(r.s();!(e=r.n()).done;){var o,i=z(e.value,2),l=i[0],u=i[1],c="".concat(0===l?"กำหนดจุดเริ่มต้น":"เลือกจุดหมาย"),s=u.keyword,p=u.searchResult.data||[],d=[],m=q(p.entries());try{for(m.s();!(o=m.n()).done;){var g=z(o.value,2),b=g[0],E=g[1];d.push(a().createElement("div",{style:x.resultStyle,key:"result-".concat(b,"-input-").concat(l),onClick:this.onClickSearchResult(l,b,E)},E.name))}}catch(e){m.e(e)}finally{m.f()}n.push(a().createElement("div",{style:{position:"relative"}},a().createElement("div",{key:"point-".concat(l+1),className:"input-group"},a().createElement("span",{className:"input-group-addon",style:{border:"none",background:"none"}},0===l?a().createElement(v.Glyphicon,{glyph:"pushpin"}):a().createElement(v.Glyphicon,{glyph:"record"})),a().createElement("input",{type:"text",key:"point-input-".concat(l+1),value:s,className:"form-control",style:{marginTop:"7px"},onChange:this.onChangePointInput(l),placeholder:c}),a().createElement("div",{style:l>=2?x.resultListStyleWithRemove:x.resultListStyle},d),l>=2?a().createElement("span",{onClick:this.onRemovePoint(l),className:"input-group-addon",id:"btn-rm-".concat(l),style:{border:"none",background:"none"}},a().createElement(v.Glyphicon,{glyph:"remove"})):a().createElement("span",{className:"input-group-addon",onClick:this.onRemovePoint(l),id:"btn-rm-".concat(l),style:{display:"none",border:"none",background:"none"}},a().createElement(v.Glyphicon,{glyph:"remove"})))))}}catch(e){r.e(e)}finally{r.f()}var O,S=[],w=0,P=0,T=q(this.props.features.entries());try{for(T.s();!(O=T.n()).done;){var R=z(O.value,2),N=(R[0],R[1]);if("LineString"===N.geometry.type){w+=N.properties.interval,P+=N.properties.distance;var A="https://api.longdo.com/RouteService/images/turn".concat(N.properties.turn,".png"),C=N.properties.distance<1e3?"".concat(N.properties.distance," m"):"".concat((N.properties.distance/1e3).toFixed(1)," km");S.push(a().createElement("div",{className:"routing-guide",style:x.guideStyle,onClick:this.onClickGuide(N)},a().createElement("div",{className:"turn",style:x.turnStyle},a().createElement("img",{style:x.turnImageStyle,src:A})),a().createElement("div",{className:"detail"},N.properties.name),a().createElement("div",{className:"distance",style:x.distanceStyle},C)))}}}catch(e){T.e(e)}finally{T.f()}return this.props.show?a().createElement(y.Z,{id:"routingContainer"},(function(e){var r=e.width;return a().createElement("span",{className:"react-dock-no-resize"},a().createElement(f.default,V({fluid:!0,dockStyle:t.props.dockStyle},t.props.dockProps,{isVisible:t.props.show,size:330/r>1?1:330/r}),a().createElement(h.Z,{header:t.renderHeader()},a().createElement("div",{key:"routing-body",role:"body",style:{padding:"10px"}},n,a().createElement("br",null),t.props.displaySetting?a().createElement("div",{className:"route-option",style:{textAlign:"center",paddingLeft:"10%",marginBottom:"5%"}},a().createElement(v.Row,null,a().createElement(v.Col,{md:6,style:{textAlign:"left"}},a().createElement("label",null,"โหมดการเดินทาง"),a().createElement("div",{onChange:t.onChangeRouteMode},a().createElement("div",{className:"radio"},a().createElement("label",null,a().createElement("input",{type:"radio",name:"routeMode",value:"t"}),"ระยะเวลาน้อยสุด")),a().createElement("div",{className:"radio"},a().createElement("label",null,a().createElement("input",{type:"radio",name:"routeMode",value:"d"}),"ระยะทางน้อยสุด")),a().createElement("div",{className:"radio"},a().createElement("label",null,a().createElement("input",{type:"radio",name:"routeMode",value:"c"}),"ประหยัดค่าใช้จ่าย")))),a().createElement(v.Col,{md:6,style:{textAlign:"left"}},a().createElement("label",null,"วิธีการเดินทาง"),a().createElement("div",{onChange:t.onChangeRouteType},a().createElement("div",{className:"checkbox"},a().createElement("label",null,a().createElement("input",{type:"checkbox",name:"routeType",value:"1"}),"ถนนหลัก")),a().createElement("div",{className:"checkbox"},a().createElement("label",null,a().createElement("input",{type:"checkbox",value:"16",name:"routeType"}),"ทางด่วน")),a().createElement("div",{className:"checkbox"},a().createElement("label",null,a().createElement("input",{type:"checkbox",value:"32",name:"routeType"}),"รถประจำทาง")),a().createElement("div",{className:"checkbox"},a().createElement("label",null,a().createElement("input",{type:"checkbox",value:"64",name:"routeType"}),"รถไฟฟ้า")),a().createElement("div",{className:"checkbox"},a().createElement("label",null,a().createElement("input",{type:"checkbox",value:"4",name:"routeType"}),"รถไฟ")),a().createElement("div",{className:"checkbox"},a().createElement("label",null,a().createElement("input",{type:"checkbox",value:"8",name:"routeType"}),"เรือ")),a().createElement("div",{className:"checkbox"},a().createElement("label",null,a().createElement("input",{type:"checkbox",value:"2",name:"routeType"}),"อากาศ")))))):a().createElement("div",null),a().createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a().createElement("div",null,a().createElement("button",{key:"add-point",className:"btn btn-circle-sm",onClick:t.onAddPoint},a().createElement(v.Glyphicon,{glyph:"plus"})),a().createElement("button",{key:"swap-point",className:"btn btn-circle-sm",style:{marginLeft:"5px"},onClick:t.onSwapPoint},a().createElement(v.Glyphicon,{glyph:"sort"})),a().createElement("button",{key:"setting",className:"btn btn-circle-sm",style:{marginLeft:"5px"},onClick:t.onDisplaySetting},a().createElement(v.Glyphicon,{glyph:"cog"}))),a().createElement("div",null,a().createElement("button",{key:"clear-routing",onClick:t.onClearSearch,className:"btn btn-outline-default btn-rounded",style:{minWidth:"90px",marginRight:"5px"}},"ล้าง"),a().createElement("button",{key:"search-routing",onClick:t.onSearch,className:"btn btn-outline-info btn-rounded",style:{minWidth:"100px"},id:"find-route"},"ค้นหาเส้นทาง"))),0!==S.length?t.renderGuideList(S,w,P):a().createElement("div",null)))))})):null}}])&&Q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(a().Component);oe(ue,"propTypes",{mapApiKey:s().string,show:s().bool,displaySetting:s().bool,dockProps:s().object,loading:s().bool,pointList:s().array,features:s().array,routeMode:s().string,routeType:s().array,onClose:s().func,onSwapPoint:s().func,onAddPoint:s().func,onRemovePoint:s().func,onSearch:s().func,onChangePointInput:s().func,onClickGuide:s().func,onClickSearchResult:s().func,onChangeRouteMode:s().func}),oe(ue,"defaultProps",{mapApiKey:le,show:!1,displaySetting:!1,dockProps:{dimMode:"none",size:.3,fluid:!0,position:"right",zIndex:1030},loading:!1,routeMode:null,routeType:[],pointList:[{lat:null,lon:null},{lat:null,lon:null}],features:[]});var ce=(0,l.connect)((0,u.P1)([function(e){return{pointList:e.routing.pointList,displaySetting:e.routing.displaySetting,features:e.routing.features,routeMode:e.routing.routeMode,routeType:e.routing.routeType}},function(e){return function(e){return d()(e,"controls.routing.enabled")}(e)},S.getResourceMapKeyApi],(function(e,t,n){return B(B({},e),{},{show:t,mapApiKey:n})})),{onClose:ie,onDisplaySetting:function(){return{type:"ROUTING_DISPLAY_SETTING"}},onAddPoint:function(){return{type:"ROUTING_ADD_POINT"}},onSwapPoint:function(){return{type:"ROUTING_SWAP_POINT"}},onRemovePoint:function(e){return{type:"ROUTING_REMOVE_POINT",index:e}},onSearch:function(e,t,n,r){return function(o){var i=0===n.length?null:n.reduce((function(e,t){return Number.parseInt(e,10)+Number.parseInt(t,10)}),0);new Promise((function(n){setTimeout((function(){var o=N.get(A,{params:{flon:e[0].lon,flat:e[0].lat,tlon:e[1].lon,tlat:e[1].lat,locale:"th",mode:t,type:i,key:r||C}});n(o)}),2e3)})).then((function(n){var a=n.data.features,l=a.length,u=a[l-1].geometry.coordinates.length,c=a[l-1].geometry.coordinates[u-1][0],s=a[l-1].geometry.coordinates[u-1][1];if(2===e.length)a.push({type:"Feature",style:[T("START")],geometry:{type:"Point",coordinates:[a[0].geometry.coordinates[0][0],a[0].geometry.coordinates[0][1]]}}),a.push({type:"Feature",style:[T("END")],geometry:{type:"Point",coordinates:[c,s]}}),o(I(a)),document.getElementById("find-route").innerHTML="ค้นหาเส้นทาง";else{a.push({type:"Feature",style:[T("START")],geometry:{type:"Point",coordinates:[a[0].geometry.coordinates[0][0],a[0].geometry.coordinates[0][1]]}}),a.push({type:"Feature",style:[T("START")],geometry:{type:"Point",coordinates:[c,s]}});for(var p=function(n){var l=c,u=s;new Promise((function(o){setTimeout((function(){var a=N.get(A,{params:{flon:l,flat:u,tlon:e[n].lon,tlat:e[n].lat,locale:"th",mode:t,type:i,key:r||C}});o(a)}),2e3)})).then((function(t){var r,i=t.data.features[t.data.features.length-1].geometry.coordinates.length,l=t.data.features[t.data.features.length-1].geometry.coordinates[i-1][0],u=t.data.features[t.data.features.length-1].geometry.coordinates[i-1][1];a.push({type:"Feature",style:[T("START")],geometry:{type:"Point",coordinates:[l,u]}}),a.push.apply(a,function(e){if(Array.isArray(e))return R(e)}(r=t.data.features)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n+1===e.length&&(o(I(a)),document.getElementById("find-route").innerHTML="ค้นหาเส้นทาง")}))},d=2;d<e.length;d++)p(d)}}))}},onClearSearch:function(e){return{type:"ROUTING_FEATURE_CLEAR",features:e.features}},onChangePointInput:function(e,t){return{type:"ROUTING_CHANGE_POINT_LIST",index:e,value:t}},onClickGuide:function(e){return{type:"ROUTING_CLICK_GUIDE",value:e}},onClickSearchResult:function(e,t,n){return{type:"ROUTING_CLICK_SEARCH_RESULT",i:e,j:t,result:n}},onChangeRouteMode:function(e){return{type:"ROUTING_CHANGE_MODE",value:e}},onChangeRouteType:function(e){return{type:"ROUTING_CHANGE_TYPE",value:e}}},null,{pure:!1})(ue);const se={RoutingPlugin:o()(ce,{BurgerMenu:{name:"routing",position:9,panel:!1,help:"help",tooltip:"tooltip",text:"Routing",icon:a().createElement(v.Glyphicon,{glyph:"search"}),action:function(){return(0,b.Xg)("routing","enabled",!0)}}}),reducers:{routing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROUTING_ADD_POINT":return e.pointList.length>=2&&e.pointList.map((function(e,t){document.getElementById("btn-rm-".concat(t)).style.display=null})),o()({},e,{pointList:e.pointList.concat([{lat:null,lon:null,keyword:"",searchResult:{}}])});case"ROUTING_REMOVE_POINT":return 2===e.pointList.length?e:(e.pointList.splice(t.index,1),e.pointList.length<=2&&e.pointList.map((function(e,t){document.getElementById("btn-rm-".concat(t)).style.display="none"})),o()({},e,{}));case"ROUTING_SWAP_POINT":return o()({},e,{pointList:e.pointList.reverse()});case"ROUTING_CHANGE_POINT_LIST":var n=t.value.trim().split(","),r=n[0],i=n.length>1?n[1]:null;return o()({},e,{pointList:e.pointList.map((function(e,n){return t.index===n?o()({},e,{lat:r,lon:i,keyword:t.value}):e}))});case"ROUTING_DISPLAY_SETTING":return o()({},e,{displaySetting:!e.displaySetting});case"ROUTING_CHANGE_MODE":return o()({},e,{routeMode:t.value});case"ROUTING_CHANGE_TYPE":var a=e.routeType.indexOf(t.value);return-1===a?o()({},e,{routeType:e.routeType.concat(t.value)}):o()({},e,{routeType:0===a?[]:e.routeType.splice(t.value,1)});case"ROUTING_FEATURE_LOADED":return o()({},e,{features:t.features});case"ROUTING_SEARCH_LOADED":return o()({},e,{pointList:e.pointList.map((function(e,n){return t.index===n?o()({},e,{searchResult:t.result}):e}))});case"ROUTING_CLICK_SEARCH_RESULT":return o()({},e,{pointList:e.pointList.map((function(e,n){return t.i===n?o()({},e,{lat:Number(t.result.lat),lon:Number(t.result.lon),keyword:t.result.name,searchResult:[]}):e}))});case"ROUTING_FEATURE_CLEAR":return o()({},e,{features:[],pointList:[{lat:null,lon:null,keyword:"",searchResult:{}},{lat:null,lon:null,keyword:"",searchResult:{}}]});default:return e}}},epics:{routingResultLoadedEpic:function(e,t){var n=t.getState,r=void 0===n?function(){}:n;return e.ofType("ROUTING_FEATURE_LOADED").filter((function(){return(r().controls.routing||{}).enabled||!1})).switchMap((function(e){var t=e.features,n=[];t.forEach((function(e){n=n.concat(e.geometry.coordinates.map((function(e){return{lat:e[1],lon:e[0]}})))}));var r,o=t.map((function(e){return e.properties=W(W({},e.properties),{},{id:P()(),isValidFeature:!0,canEdit:!1}),"LineString"===e.geometry.type&&(e.style=[{color:"#006994",opacity:1,weight:4,editing:{fill:1},highlight:!1,id:P()()}]),e})),i=(0,U.Ii)(n),a=[{type:"FeatureCollection",newFeature:!0,id:P()(),geometry:null,properties:P()(),features:(r=o,function(e){if(Array.isArray(e))return M(e)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}];return j().Observable.from([(0,G.Yf)("clean","","routingResult",[],{}),(0,G.Yf)("drawOrEdit","LineString","routingResult",a,{featureProjection:"EPSG:4326",stopAfterDrawing:!0,editEnabled:!1,selectEnabled:!0,translateEnabled:!1,drawEnabled:!1},{highlight:!1}),(0,D.Px)([i.minLon,i.minLat,i.maxLon,i.maxLat],"EPSG:4326",10,{nearest:!0})])}))},routingClickGuideEpic:function(e,t){var n=t.getState,r=void 0===n?function(){}:n;return e.ofType("ROUTING_CLICK_GUIDE").filter((function(){return(r().controls.routing||{}).enabled||!1})).switchMap((function(e){var t=e.value.geometry.coordinates.map((function(e){return{lat:e[1],lon:e[0]}})),n=(0,U.Ii)(t);return j().Observable.from([(0,D.Px)([n.minLon,n.minLat,n.maxLon,n.maxLat],"EPSG:4326",16,{nearest:!0})])}))},routingChangePointInputEpic:function(e,t){var n=t.getState,r=void 0===n?function(){}:n;return e.ofType("ROUTING_CHANGE_POINT_LIST").debounceTime(300).filter((function(){return(r().controls.routing||{}).enabled||!1})).switchMap((function(e){var t,n,o=e.index,i=e.value,a=r().map.present.center,l=(null===(t=r().gnresource)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.map_key)||!1;return j().Observable.from([_(o,i,a,l||Y)])}))},onSwapRoutingEpic:function(e,t){var n=t.getState,r=void 0===n?function(){}:n;return e.ofType("ROUTING_SWAP_POINT").filter((function(){return(r().controls.routing||{}).enabled||!1})).switchMap((function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e)}))},clearRoutingResult:function(e,t){var n=t.getState,r=void 0===n?function(){}:n;return e.ofType("ROUTING_FEATURE_CLEAR").filter((function(){return(r().controls.routing||{}).enabled||!1})).switchMap((function(){return j().Observable.from([(0,G.Yf)("clean","","routingResult",[],{})])}))}}}}}]);