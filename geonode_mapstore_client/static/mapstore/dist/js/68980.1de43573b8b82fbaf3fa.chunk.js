(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[68980],{921914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>i,Ih:()=>a,Xw:()=>u,Pn:()=>c,DZ:()=>s,e8:()=>l,E0:()=>p,F9:()=>f,X_:()=>d,pb:()=>y,qb:()=>m,Re:()=>b,ih:()=>v,xy:()=>h,jL:()=>g,oz:()=>O,ph:()=>E,lF:()=>w,gG:()=>P,cb:()=>_,GI:()=>S,B1:()=>j,fv:()=>I,gc:()=>D,zX:()=>N,ZF:()=>T,Zb:()=>R,DW:()=>C,Xp:()=>F,Fm:()=>x,sV:()=>A,Mn:()=>M,LU:()=>G,XP:()=>k,WU:()=>K,JB:()=>L,g:()=>U,ws:()=>Y,HP:()=>H,aN:()=>q,Pg:()=>V,u0:()=>W,TM:()=>B,PM:()=>X,lK:()=>z,sv:()=>Q,MO:()=>J,oO:()=>$,Mc:()=>ee,Zw:()=>te,RA:()=>ne,am:()=>re,ZM:()=>oe,wm:()=>ie,Y$:()=>ae,Qu:()=>ue,kT:()=>ce});var r=n(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",u="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",l="CHANGE_MAPINFO_FORMAT",p="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",d="SHOW_REVERSE_GEOCODE",y="HIDE_REVERSE_GEOCODE",m="GET_VECTOR_INFO",b="NO_QUERYABLE_LAYERS",v="CLEAR_WARNING",h="FEATURE_INFO_CLICK",g="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",O="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",E="TOGGLE_MAPINFO_STATE",w="UPDATE_CENTER_TO_MARKER",P="IDENTIFY:CHANGE_PAGE",_="IDENTIFY:CLOSE_IDENTIFY",S="IDENTIFY:CHANGE_FORMAT",j="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",I="IDENTIFY:EDIT_LAYER_FEATURES",D="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",N="IDENTIFY:SET_MAP_TRIGGER",T="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",R="IDENTIFY:SET_SHOW_IN_MAP_POPUP",C="IDENTIFY:IDENTIFY_IS_MOUNTED",F="IDENTIFY:INIT_PLUGIN";function x(e,t,n,r,i){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:i}}function A(e,t,n,r){return{type:i,error:t,reqId:e,requestParams:n,layerMetadata:r}}function M(e,t,n,r){return{type:a,reqId:e,exceptions:t,requestParams:n,layerMetadata:r}}function G(){return{type:b}}function k(){return{type:v}}function K(e,t){return{type:c,reqId:e,request:t}}function L(e,t,n,r){return{type:m,layer:e,request:t,metadata:n,queryableLayers:r}}function U(){return{type:s}}function Y(e){return{type:l,infoFormat:e}}function H(){return{type:p}}function q(){return{type:f}}function Z(e){return{type:d,reverseGeocodeData:e.data}}function V(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(Z(e))})).catch((function(e){t(Z(e))}))}}function W(){return{type:y}}function B(){return{type:E}}function X(e){return{type:w,status:e}}function z(e,t){return{type:h,point:e,layer:t,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null}}function Q(e){return{type:g,point:e}}function J(e){return{type:O,enabled:e}}function $(e){return{type:P,index:e}}var ee=function(){return{type:_}},te=function(e){return{type:S,format:e}},ne=function(e){return{type:j,showCoordinateEditor:e}},re=function(e){return{type:I,layer:e}},oe=function(e){return{type:D,query:e}},ie=function(e){return{type:N,trigger:e}},ae=function(e){return{type:R,value:e}},ue=function(e){return{type:C,isMounted:e}},ce=function(e){return{type:F,cfg:e}}},647310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(375875),o=n.n(r),i=n(472500),a=n.n(i),u=n(727418),c=n.n(u),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const l={geocode:function(e,t){var n=c()({q:e},s,t||{}),r=a().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=c()({lat:e.lat,lon:e.lng},t||{},s),r=a().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},799509:(e,t,n)=>{"use strict";n.d(t,{Z:()=>X});var r=n(124852),o=n.n(r),i=n(675263),a=n.n(i),u=n(548403),c=n.n(u),s=n(757588),l=n(794192);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function b(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(i){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}(this,e)});function u(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(y(e=a.call.apply(a,[this].concat(n))),"verifyOnKeyDownEvent",(function(t){69===t.keyCode&&t.preventDefault(),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown(t))})),b(y(e),"validateDecimalLon",(function(t){var n=e.props.constraints[e.props.format].lon.min,r=e.props.constraints[e.props.format].lon.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),b(y(e),"validateDecimalLat",(function(t){var n=e.props.constraints[e.props.format].lat.min,r=e.props.constraints[e.props.format].lat.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),e}return t=u,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.coordinate,r=t.value,i=t.onChange,a=t.disabled,u="validateDecimal"+c()(n);return o().createElement(s.FormGroup,{validationState:this[u](r)},o().createElement(l.Z,{disabled:a,key:n,value:r,placeholder:n,onChange:function(t){""===t?i(""):null===e[u](t)?i(t):i(r)},onKeyDown:this.verifyOnKeyDownEvent,step:1,validateNameFunc:this[u],type:"number"}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);b(h,"propTypes",{idx:a().number,value:a().number,constraints:a().object,format:a().string,coordinate:a().string,onChange:a().func,onKeyDown:a().func,onSubmit:a().func,disabled:a().bool}),b(h,"defaultProps",{format:"decimal",coordinate:"lat",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:function(){},disabled:!1});const g=h;var O=n(414293),E=n.n(O),w=n(867076);const P=(0,w.withProps)((function(e){var t=e.coordinate,n=void 0===t?"lat":t;return{maxDegrees:"lat"===n?90:180,directions:"lat"===n?["N","S"]:["E","W"]}}));var _=n(562395);const S=(0,w.compose)((0,w.withProps)((function(e){return{isValid:""!==e.value}})),(0,w.withState)("initial","setInitial",{}),(0,w.withProps)((function(e){var t=e.isValid,n=e.initial,r=e.degrees,o=e.minutes,i=e.seconds;return t||""===r&&""===o&&""===i?{}:n})),(0,w.withHandlers)({onChange:function(e){return function(t){var n=t.degrees,r=t.minutes,o=t.seconds,i=t.direction;isNaN(n)?e.setInitial({degrees:"",minutes:r,seconds:o,direction:i}):isNaN(r)?e.setInitial({degrees:n,minutes:"",seconds:o,direction:i}):isNaN(o)&&e.setInitial({degrees:n,minutes:r,seconds:"",direction:i}),e.onChange({degrees:n,minutes:r,seconds:o,direction:i})}}}));function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function F(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){var t=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===j(t)?t:String(t)}var A="degrees",M="seconds",G="minutes",k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(i){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}(this,e)});function u(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return F(R(e=a.call.apply(a,[this].concat(n))),"onChange",(function(t,n){var r=e.getUpdatedCoordinateValue(t,n);e.props.onChange(r)})),F(R(e),"getUpdatedCoordinateValue",(function(t,n){try{var r=F({degrees:e.props.degrees,minutes:e.props.minutes,seconds:e.props.seconds,direction:e.props.direction},t,t===A?Math.min(n,e.props.maxDegrees):n),o=r.seconds,i=r.minutes+e.getSexagesimalStep(o),a=Math.min(e.props.maxDegrees,r.degrees+e.getSexagesimalStep(i)),u=r.direction;return o=e.roundToNextSexagesimalStep(o),i=e.roundToNextSexagesimalStep(i),a===e.props.maxDegrees&&(i=0,o=0),u=a<0?u===e.props.directions[0]?e.props.directions[1]:e.props.directions[0]:u,-1===a&&(r.degrees<0&&r.minutes>=0?a=r.degrees:r.minutes<0&&r.degrees<=0?(a=0,i=r.minutes):(a=0,i=0,o=1e-4)),{degrees:a,minutes:i,seconds:o,direction:u}}catch(e){return null}})),F(R(e),"getSexagesimalStep",(function(e){return e>=60?1:e<0?-1:0})),F(R(e),"getInputStyle",(function(e){return isNaN(e)||""===e?{borderColor:"#a94442"}:{}})),F(R(e),"getNewValue",(function(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A;if(""===t)n="";else{var o=r===M?parseFloat(t):parseInt(t,10),i=r===A?e.props.maxDegrees:60;n=Math.round(10*o)/10<i?o:e.props[r]}return n})),F(R(e),"verifyOnKeyDownEvent",(function(t){var n;69===t.keyCode&&t.preventDefault(),"0"===(null==t||null===(n=t.target)||void 0===n?void 0:n.value)&&t.target.setSelectionRange(-1,-1),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown())})),F(R(e),"roundToNextSexagesimalStep",(function(e){return e<0?60+e:e>=60?e-60:e})),F(R(e),"isValid",(function(t){var n=t.minutes,r=t.seconds,o=t.degrees,i=t.direction;return!E()(n)&&n>0&&n<60&&!E()(r)&&r>0&&r<60&&!E()(o)&&o>0&&o<e.props.maxDegrees&&i})),e}return t=u,(n=[{key:"render",value:function(){var e,t,n,r=this,i={padding:0,textAlign:"center",borderRight:"none"},a=this.getInputStyle(this.props.degrees),u=this.getInputStyle(this.props.minutes),c=this.getInputStyle(this.props.seconds),p={position:"relative",top:0,overflow:"visible",zIndex:3,left:-25,width:0,height:0},f=(null!==(e=null==this||null===(t=this.props)||void 0===t||null===(n=t.aeronauticalOptions)||void 0===n?void 0:n.seconds)&&void 0!==e?e:{}).step;return o().createElement(s.FormGroup,{style:{display:"inline-flex"}},o().createElement("div",{className:A,style:{width:40,display:"flex"}},o().createElement(l.Z,{key:this.props.coordinate+A,value:this.props.degrees,disabled:this.props.disabled,placeholder:"d",onChange:function(e){return r.onChange(A,r.getNewValue(e))},step:1,size:3,max:this.props.maxDegrees,min:-1,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},style:D(D({width:"100%"},i),a),type:"number"}),o().createElement("span",{style:p},"°")),o().createElement("div",{className:G,style:{width:40,display:"flex"}},o().createElement(l.Z,{disabled:this.props.disabled,key:this.props.coordinate+G,placeholder:"m",size:3,value:this.props.minutes,onChange:function(e){return r.onChange(G,r.getNewValue(e,G))},max:60,min:-1,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},style:D(D({width:"100%"},i),u),step:1,type:"number"}),o().createElement("span",{style:p},"′")),o().createElement("div",{className:M,style:{display:"flex"}},o().createElement(l.Z,{disabled:this.props.disabled,key:this.props.coordinate+M,value:this.props.seconds,placeholder:"s",onChange:function(e){return r.onChange(M,r.getNewValue(e,M))},step:f,max:60,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},min:-1,style:D(D({width:"100%"},i),c),type:"number"}),o().createElement("span",{style:p},"″")),o().createElement("div",{className:"direction-select"},o().createElement(s.FormControl,{disabled:this.props.disabled,componentClass:"select",placeholder:"select",value:this.props.direction,onChange:function(e){return r.onChange("direction",e.target.value)},style:{paddingLeft:4,paddingRight:4,flex:"1 1 0%"}},this.props.directions.map((function(e){return o().createElement("option",{key:e,value:e},e)})))))}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);F(k,"propTypes",{idx:a().number,maxDegrees:a().number,degrees:a().number,minutes:a().number,seconds:a().number,directions:a().array,direction:a().string,aeronauticalOptions:a().object,coordinate:a().string,onChange:a().func,onKeyDown:a().func,disabled:a().bool}),F(k,"defaultProps",{coordinate:"lat",maxDegrees:90,directions:["N","S"],aeronauticalOptions:{seconds:{decimals:4,step:1e-4}},onKeyDown:function(){},disabled:!1});const K=(0,w.compose)(P,_.Z,S)(k),L=(0,w.compose)((0,w.withHandlers)({onChange:function(e){var t=e.onChange,n=void 0===t?function(){}:t,r=e.maxLatitude,o=void 0===r?89.9997222222:r,i=e.coordinate;return function(e){return n(Math.abs(parseFloat(e))>o&&"lat"===i?Math.sign(e)*o:e)}}}));function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,W(r.key),r)}}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}function V(e,t,n){return(t=W(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(e){var t=function(e,t){if("object"!==U(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===U(t)?t:String(t)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Z(r);if(i){var n=Z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),a.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e=this.props.format;return"decimal"===e||E()(e)?o().createElement(g,Y({},this.props,{format:this.props.format||"decimal"})):o().createElement(K,this.props)}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);V(B,"propTypes",{idx:a().number,value:a().number,constraints:a().object,format:a().string,aeronauticalOptions:a().object,coordinate:a().string,onChange:a().func,onKeyDown:a().func}),V(B,"defaultProps",{format:"decimal",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}}});const X=L(B)},562395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(807654),o=n.n(r),i=n(59854),a=n.n(i),u=n(867076);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p=(0,u.compose)((0,u.withProps)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},function(e,t){var n,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).seconds,i=e>=0?Math.floor(e):Math.ceil(e),u=Math.abs(60*(e-i)),c=Math.floor(u),s=60*(u-c),l=a()(s,null!==(n=null==r?void 0:r.decimals)&&void 0!==n?n:4);return i=Math.abs(i),60===l&&(c++,l=0),60===c&&(i++,c=0),o()(i)||""===e?{degrees:"",minutes:"",seconds:"",direction:t?"E":"N"}:{degrees:i,minutes:c,seconds:l,direction:e<0?t?"W":"S":t?"E":"N"}}(e.value,"lon"===e.coordinate,e.aeronauticalOptions))})),(0,u.withHandlers)({onChange:function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.degrees,r=t.minutes,i=t.seconds,a=t.direction,u=0,c=0,s=0;void 0===n&&void 0===r&&void 0===i&&e.onChange(void 0),o()(n)||(u=n),o()(r)||(c=r),o()(i)||(s=i);var l=u+c/60+s/3600;(l>0&&("S"===a||"W"===a)||l<0&&("N"===a||"E"===a))&&(l*=-1),e.onChange(l.toPrecision(12))}}}))},777900:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(757588),o=n(815135),i=n(124852),a=n.n(i),u=n(423570),c=n.n(u);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var l=(0,o.Z)(r.DropdownButton),p={disabled:!1,className:"square-button-md",noCaret:!0,idDropDown:c()()};const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.menuOptions,n=void 0===t?[]:t,o=e.buttonConfig,i=void 0===o?{}:o;return a().createElement(l,s({},p,i),n.length?n.map((function(e,t){var n=e.glyph,o=e.text,i=e.onClick,u=e.active,c=void 0!==u&&u;return a().createElement(r.MenuItem,{active:c,eventKey:t,onClick:i,key:t},n&&a().createElement(r.Glyphicon,{glyph:n})," ",o)})):null)}}}]);