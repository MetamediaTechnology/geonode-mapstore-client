(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[16528],{604206:(e,t,r)=>{"use strict";r.d(t,{hZ:()=>n,pb:()=>o,kD:()=>a,DI:()=>i,IC:()=>c,iU:()=>l,W7:()=>u,uB:()=>s,Rh:()=>f,G_:()=>y,vU:()=>p,Vw:()=>b,KD:()=>d,uj:()=>m,lo:()=>v,Yf:()=>g,fo:()=>h,PY:()=>E,bp:()=>O,oJ:()=>S,k4:()=>P,sc:()=>w,Li:()=>j});var n="CHANGE_DRAWING_STATUS",o="DRAW:END_DRAWING",a="DRAW:SET_CURRENT_STYLE",i="DRAW:GEOMETRY_CHANGED",c="DRAW:DRAW_SUPPORT_STOPPED",l="DRAW:FEATURES_SELECTED",u="DRAW:DRAWING_FEATURES",s="DRAW:SET_SNAPPING_LAYER",f="DRAW:SNAPPING_IS_LOADING",y="DRAW:TOGGLE_SNAPPING",p="DRAW:SET_SNAPPING_CONFIG";function b(e,t,r,n,o){return{type:i,features:e,owner:t,enableEdit:r,textChanged:n,circleChanged:o}}function d(){return{type:l,features:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}function m(){return{type:u,features:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}function v(){return{type:c}}function g(e,t,r,o,a,i){return{type:n,status:e,method:t,owner:r,features:o,options:a,style:i}}function h(e,t){return{type:o,geometry:e,owner:t}}function E(e){return{type:a,currentStyle:e}}var O=function(e){return g("clean","",e,[],{})};function S(){return{type:y}}function P(e){return{type:s,snappingLayer:e}}function w(){return{type:f}}function j(e,t,r){return{type:p,value:e,prop:t,pluginCfg:r}}},965539:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(124852),o=r.n(n);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=function(e){var t=e.id,r=e.children,n=e.header,a=e.footer,i=e.columns,l=e.height,u=e.style,s=void 0===u?{}:u,f=e.className,y=e.bodyClassName,p=void 0===y?"ms2-border-layout-body":y;return o().createElement("div",{id:t,className:f,style:c({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},s)},n,o().createElement("div",{className:p,style:{display:"flex",flex:1,overflowY:"auto"}},o().createElement("main",{className:"ms2-border-layout-content",style:{flex:1,overflowX:"hidden"}},l?o().createElement("div",{style:{height:l}},r):r),l?o().createElement("div",{style:{height:l}},i):i),a)}},993451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(86638),o=r(675263),a=r.n(o),i=r(984596),c=r.n(i),l=r(701469),u=r.n(l),s=r(414293),f=r.n(s),y=r(747037),p=r.n(y),b=r(867076),d=["messages"];function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===m(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(u()(t))return t.map((function(o){var a=(0,n.S$)(e,o[r]||p()(o)&&o||"");return g(g({},o),{},h({},r,f()(a)?t:a))}));var o=(0,n.S$)(e,t);return f()(o)?t:o},O=function(e,t,r){return function(){var n=arguments.length>1?arguments[1]:void 0;return g(g({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},h({},n,e[n]&&E(t,e[n],r)))}};const S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,b.compose)((0,b.getContext)({messages:a().object}),(0,b.mapProps)((function(r){var n=r.messages,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,d);return g(g({},o),c()(e).reduce(O(o,n,t),{}))})))}},16528:(e,t,r)=>{"use strict";r.r(t),r.d(t,{TOGGLE_CONTROL:()=>Q,default:()=>ce});var n=r(423570),o=r.n(n),a=r(727418),i=r.n(a),c=r(124852),l=r.n(c),u=r(375875),s=r.n(u),f=r(49977),y=r.n(f),p=r(675263),b=r.n(p),d=r(185552),m=r.n(d),v=r(168898),g=r(282467),h=r(732833),E=r(965539),O=r(496259),S=r(743129),P=r(441609),w=r.n(P);function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var N=(0,r(993451).Z)(["placeholder","clearValueText","noResultsText"])(S.ZP),x=function(e){var t=e.responses,r=e.index,n=e.setIndex,o=A((0,c.useState)([]),2),a=o[0],i=o[1],u=A((0,c.useState)(""),2),s=u[0],f=u[1];return(0,c.useEffect)((function(){w()(t)||(t.reverse(),i(t.map((function(e,t){var r=null==e?void 0:e.title;return{label:r,value:r,idx:t,style:{display:"block"}}}))))}),[t]),(0,c.useEffect)((function(){var e;f((null===(e=t[r])||void 0===e?void 0:e.title)||"")}),[t,r]),l().createElement("div",{id:"identify-layer-select",style:{flex:"1 1 0%"}},l().createElement(N,j({},{clearable:!1,isSearchable:!0},{onChange:function(e){var t=(null==e?void 0:e.idx)||0;n(t)},value:s||"",options:a,noResultsText:"identifyLayerSelectNoResult"})))};x.defaultProps={responses:[],index:-1},x.propTypes={responses:b().array,setIndex:b().func,index:b().number};const _=x;var C=r(227361),T=r.n(C),L=r(782904),k=r(757588),D=r(607147),I=r(22222),G=r(171703),F=r(604206),Y=r(675110);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){V(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U.apply(this,arguments)}function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,$(n.key),n)}}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Z(e,t)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}function V(e,t,r){return(t=$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $(e){var t=function(e,t){if("object"!==B(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===B(t)?t:String(t)}function K(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||X(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){if(e){if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(e,t):void 0}}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Q="TOGGLE_CONTROL";(0,D.Yq)("nearby");var ee=function(e){return{type:"SET_NEARBY_CENTER",center:e}},te=function(e){return{type:"NEARBY_FEATURE_LOADED",features:e}},re=function(e,t,r,n){n||(n={});var a="/geoserver/wfs";return function(i){s().get(n.url||a,{params:{service:"WFS",version:n.version,request:"DescribeFeatureType",typeName:n.name,outputFormat:"application/json"}}).then((function(c){var l=c.data.featureTypes[0];try{var u=l.properties.find((function(e){return"Point"===e.localType}));if(null!==u.name||"undefined"!==u.name){var f=t.y+" "+t.x;s().get("".concat(n.url||a),{params:{service:"WFS",version:n.version,request:"GetFeature",typeNames:n.name,outputFormat:"application/json",SRSName:"EPSG:4326",cql_filter:"DWithin(".concat(u.name,",POINT(").concat(f,"),").concat(e,",meters)")}}).then((function(e){var t=e.data.features;t.map((function(e){"Point"===e.geometry.type&&(e.style={iconGlyph:"map-marker",iconShape:"circle",iconColor:"blue",highlight:!1,id:o()()})})),t.push(r),i(te(t))}))}}catch(e){console.error(e),i(te([]))}})).catch((function(e){console.error(e),i(te([]))}))}},ne=function(e,t){return{type:"Feature",geometry:t,properties:{isCircle:!0,radius:e,id:o()(),crs:"EPSG:3857",isGeodesic:!0},style:[{color:"#48C9B0",opacity:1,weight:5,fillColor:"#ffffff",fillOpacity:.3,highlight:!1,type:"Circle",title:"Near by",id:o()}]}},oe={radius:1,center:null,centerLocked:!1,centerFixed:{},results:[],nearbyLists:[],layer:{},layerIndex:-1,totalPage:0,pageSize:25,currentPage:1},ae=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Z(e,t)}(i,e);var t,r,n,o,a=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(n);if(o){var r=q(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return H(e)}(this,e)});function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return V(H(e=a.call.apply(a,[this].concat(r))),"onClose",(function(){e.props.onClose(!1)})),V(H(e),"onChangeRadius",(function(t){e.props.onChangeRadius(t)})),V(H(e),"onLayerChange",(function(t){var r=e.props.layersNode[t];e.props.onChangeLayer(r,t)})),V(H(e),"onLockCenter",(function(){e.props.onLockCenter()})),V(H(e),"changePage",(function(t){e.props.onChangePage(t)})),V(H(e),"start",{x:.5*(window.innerWidth-600),y:.5*(window.innerHeight-100)}),V(H(e),"dialogStyle",{position:"fixed",top:"0px",left:"0px"}),e}return t=i,(r=[{key:"renderHeader",value:function(){return l().createElement("div",{style:{width:"100%"}},l().createElement("div",{style:{display:"flex",alignItems:"center"}},l().createElement("div",null,l().createElement(g.Z,{className:"square-button no-events"},l().createElement(k.Glyphicon,{glyph:"record"}))),l().createElement("div",{style:{flex:"1 1 0%",padding:8,textAlign:"center"}},l().createElement("h4",null,"Nearby")),l().createElement("div",null,l().createElement(g.Z,{className:"square-button no-border",onClick:this.onClose},l().createElement(k.Glyphicon,{glyph:"1-close"})))))}},{key:"render",value:function(){var e,t,r,n=this,o=[],a=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=X(e))){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}(this.props.results.entries());try{for(a.s();!(e=a.n()).done;){var i=(t=e.value,r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,r)||X(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],u=i[1];o.push(l().createElement("li",{key:c},u.properties.title_en||"No title"))}}catch(e){a.e(e)}finally{a.f()}return this.props.show?l().createElement(O.Z,null,(function(e){var t=e.width;return l().createElement("span",{className:"react-dock-no-resize"},l().createElement(h.default,U({fluid:!0,dockStyle:n.props.dockStyle},n.props.dockProps,{isVisible:n.props.show,size:330/t>1?1:330/t}),l().createElement(E.Z,{header:n.renderHeader()},l().createElement("div",{style:{padding:"10px"}},l().createElement("label",null,"Layers"),l().createElement("div",null,l().createElement(_,{responses:n.props.layersNode,index:n.props.layerIndex,setIndex:n.onLayerChange})),l().createElement("div",{className:"btn-toolbar",style:{marginTop:"10px"}},l().createElement("div",{className:"row"},l().createElement("div",{className:"col-md-6"},l().createElement("label",null,"Radius (km)")),l().createElement("div",{className:"col-md-6 text-right"},l().createElement("button",{onClick:n.onLockCenter,style:{float:"right"},className:n.props.centerLocked?"btn btn-xs active":"btn btn-xs"},l().createElement(k.Glyphicon,{glyph:"lock"}))))),l().createElement("div",{className:"mapstore-slider with-tooltip"},l().createElement(m(),{tooltips:!0,step:.1,start:[n.props.radius],range:{min:[0],max:[20]},onChange:function(e){n.onChangeRadius(e[0])}})),l().createElement("div",{className:"location-list"},l().createElement("div",{className:"locations"},o),o.length>0?l().createElement("div",{style:{textAlign:"center"}},l().createElement(k.Pagination,{prev:!0,next:!0,first:!0,last:!0,ellipsis:!0,boundaryLinks:!0,bsSize:"small",items:n.props.totalPage,maxButtons:5,activePage:n.props.currentPage,onSelect:n.changePage})):l().createElement("div",null))))))})):null}}])&&z(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(l().Component);V(ae,"propTypes",{show:b().bool,radius:b().number,results:b().array,nearbyLists:b().array,centerLocked:b().bool,centerFixed:b().object,onLockCenter:b().func,onClose:b().func,onChangeRadius:b().func,onChangeLayer:b().func,dockProps:b().object,layersGroups:b().array,layersNode:b().array,layerIndex:b().number,totalPage:b().number,pageSize:b().number,currentPage:b().number,changePage:b().func}),V(ae,"defaultProps",{show:!1,radius:1,centerLocked:!1,centerFixed:{},results:[],nearbyLists:[],dockProps:{dimMode:"none",size:.3,fluid:!0,position:"right",zIndex:1030},dockStyle:{},layersGroups:[],layersNode:[],layerIndex:-1,totalPage:0,pageSize:5,currentPage:1,changePage:function(){}});var ie=(0,G.connect)((0,I.P1)([function(e){return{radius:e.nearby.radius,center:e.nearby.center,centerLocked:e.nearby.centerLocked,centerFixed:e.nearby.centerFixed,results:e.nearby.results,layer:e.nearby.layer,layerIndex:e.nearby.layerIndex,totalPage:e.nearby.totalPage,pageSize:e.nearby.pageSize,currentPage:e.nearby.currentPage}},function(e){return function(e){return T()(e,"controls.nearby.enabled")}(e)},Y.Bt],(function(e,t,r){return M(M({},e),{},{show:t,layersGroups:r,layersNode:(n=r,o=[],n.map((function(e){o.push.apply(o,K(e.nodes))})),o)});var n,o})),{onClose:function(){return{type:Q,control:"nearby",property:null,layer:{},index:-1}},onChangeRadius:function(e){return{type:"SET_NEARBY_RADIUS",radius:Number(e)||1}},onChangeLayer:function(e,t){return{type:"SET_LAYER_FILTER",layer:e,index:t}},onLockCenter:function(){return{type:"NEARBY:CENTER_MAP_LOCK"}},onChangePage:function(e){return{type:"NEARBY:CHANGE_PAGE_NUMBER",page:e}}},null,{pure:!1})(ae);const ce={NearbyPlugin:i()(ie,{BurgerMenu:{name:"nearby",position:9,panel:!1,help:"help",tooltip:"tooltip",text:"Nearby",icon:l().createElement(k.Glyphicon,{glyph:"record"}),action:function(){return(0,L.Xg)("nearby","enabled",!0)}}}),reducers:{nearby:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEARBY_RADIUS":return i()({},e,{radius:t.radius});case"SET_LAYER_FILTER":return i()({},e,{layer:t.layer,layerIndex:t.index});case"SET_NEARBY_CENTER":return i()({},e,{center:t.center});case"NEARBY_FEATURE_LOADED":return i()({},e,{nearbyLists:t.features,results:t.features.length>e.pageSize?t.features.slice(0,e.pageSize):t.features,totalPage:t.features.length>e.pageSize?Math.floor(t.features.length/e.pageSize):1,currentPage:1});case"NEARBY:CENTER_MAP_LOCK":return i()({},e,{centerFixed:e.center,centerLocked:!e.centerLocked});case"NEARBY:CHANGE_PAGE_NUMBER":return i()({},e,{results:e.nearbyLists.slice((t.page-1)*e.pageSize,t.page*e.pageSize),currentPage:t.page});case Q:return i()({},e,{layer:t.layer,layerIndex:t.index});default:return e}}},epics:{changeCenterEpic:function(e,t){var r=t.getState,n=void 0===r?function(){}:r;return e.ofType("CHANGE_MAP_VIEW").filter((function(){return(n().controls.nearby||{}).enabled||!1})).switchMap((function(e){var t=e.center,r=n().nearby.radius,o=n().nearby.layer,a=n().nearby.centerFixed,i=n().nearby.centerLocked,c=(0,v.Z)([i?a.x:t.x,i?a.y:t.y],r,{steps:100,units:"kilometers"}).geometry,l=ne(r,c);return i?y().Observable.empty():y().Observable.from([ee(t),re(1e3*r,t,l,o)])}))},changeRadiusEpic:function(e,t){var r=t.getState,n=void 0===r?function(){}:r;return e.ofType("SET_NEARBY_RADIUS").filter((function(){return(n().controls.nearby||{}).enabled||!1})).switchMap((function(e){var t=e.radius,r=n().map.present.center,o=n().nearby.centerFixed,a=n().nearby.centerLocked,i=n().nearby.layer,c=(0,v.Z)([a?o.x:r.x,a?o.y:r.y],t,{steps:100,units:"kilometers"}).geometry,l=ne(t,c);return y().Observable.from([re(1e3*t,r,l,i)])}))},nearbyResultLoadedEpic:function(e,t){var r=t.getState,n=void 0===r?function(){}:r;return e.ofType("NEARBY_FEATURE_LOADED").filter((function(){return(n().controls.nearby||{}).enabled||!1})).switchMap((function(){var e=n().map.present.center,t=n().nearby.radius,r=(0,v.Z)([e.x,e.y],t,{steps:100,units:"kilometers"}).geometry,a=ne(t,r),i=n().nearby.results,c=[{type:"FeatureCollection",newFeature:!0,id:o()(),geometry:null,properties:o()(),features:[].concat(K(i),[a])}];return y().Observable.from([(0,F.Yf)("drawOrEdit","Point","nearbyResult",c,{featureProjection:"EPSG:4326",stopAfterDrawing:!0,editEnabled:!1,selectEnabled:!0,translateEnabled:!1,drawEnabled:!1})])}))},changeLayerEpic:function(e,t){var r=t.getState,n=void 0===r?function(){}:r;return e.ofType("SET_LAYER_FILTER").filter((function(){return(n().controls.nearby||{}).enabled||!1})).switchMap((function(e){var t=e.layer,r=n().map.present.center,o=n().nearby.radius,a=(0,v.Z)([r.x,r.y],o,{steps:100,units:"kilometers"}).geometry,i=ne(o,a);return y().Observable.from([re(1e3*o,r,i,t)])}))},closeNearbyDock:function(e,t){var r=t.getState,n=void 0===r?function(){}:r;return e.ofType(Q).filter((function(){return n().controls.nearby||{}||!1})).switchMap((function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),y().Observable.from([function(e){e(te([]))},(0,F.Yf)("clean","","nearbyResult",[],{})])}))},changePageEpic:function(e,t){var r=t.getState,n=void 0===r?function(){}:r;return e.ofType("NEARBY:CHANGE_PAGE_NUMBER").filter((function(){return(n().controls.nearby||{}).enabled||!1})).switchMap((function(){var e=n().map.present.center,t=n().nearby.radius,r=n().nearby.centerFixed,a=n().nearby.centerLocked,i=(0,v.Z)([a?r.x:e.x,a?r.y:e.y],t,{steps:100,units:"kilometers"}).geometry,c=ne(t,i),l=n().nearby.results,u=[{type:"FeatureCollection",newFeature:!0,id:o()(),geometry:null,properties:o()(),features:[].concat(K(l),[c])}];return y().Observable.from([(0,F.Yf)("drawOrEdit","Point","nearbyResult",u,{featureProjection:"EPSG:4326",stopAfterDrawing:!0,editEnabled:!1,selectEnabled:!0,translateEnabled:!1,drawEnabled:!1})])}))}}}}}]);