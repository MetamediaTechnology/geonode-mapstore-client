(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[77272],{496829:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(675263),o=n.n(r),c=n(124852),a=n.n(c),l=n(757588);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function f(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(i,e);var t,n,r,o,c=(r=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function i(){var e;u(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return d(b(e=c.call.apply(c,[this].concat(n))),"onChange",(function(){e.props.onChange(!e.refs.input.props.checked)})),d(b(e),"isEnabled",(function(){return e.props.isEnabled?e.props.isEnabled(e.props.layouts):0===e.props.layouts.length||e.props.layouts.some((function(t){return t.name.match(e.props.enableRegex)}))})),e}return t=i,(n=[{key:"render",value:function(){return a().createElement(l.Checkbox,{disabled:!this.isEnabled(),ref:"input",checked:this.props.checked,onChange:this.onChange},this.props.label)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(a().Component);d(v,"propTypes",{layouts:o().array,enableRegex:o().oneOfType([o().object,o().string]),label:o().string,onChange:o().func,checked:o().bool,isEnabled:o().func}),d(v,"defaultProps",{layouts:[],enableRegex:/^.*$/,label:"Option",onChange:function(){},checked:!1});const O=v},832395:(e,t,n)=>{"use strict";n.d(t,{W:()=>y});var r=n(124852),o=n.n(r),c=n(675263),a=n.n(c),l=n(322843),i=n(86638),u=n(496829),p=n(227361),s=n.n(p);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e,t){var n=e.spec,c=e.property,a=e.label,p=e.onChangeParameter,y=e.enabled,d=void 0===y||y,v=e.actions,O=e.path,m=void 0===O?"params.":O,h=e.additionalProperty,g=void 0===h||h,j=m+c;return(0,r.useEffect)((function(){var e;g&&(null==v||v.addParameter(c,null!==(e=s()(n,j))&&void 0!==e&&e))}),[]),(0,l.CU)({},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),"{"+d+"}")?o().createElement(u.Z,{checked:!!s()(n,j),label:(0,i.S$)(t.messages,a),onChange:function(e){return p(j,e)}}):null};y.contextTypes={messages:a().object}},1842:(e,t,n)=>{"use strict";n.r(t),n.d(t,{defaultFormat:()=>m,Scale:()=>g,default:()=>j});var r=n(124852),o=n.n(r),c=n(832395),a=n(322843),l=n(171703),i=n(986069),u=n(805346),p=n(134049),s=n(720289),f=n(145959),b=["map","scale","locale","label","optionLabel","actions","onAddParameter"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",n=new Intl.NumberFormat(t,{maximumFractionDigits:0}).format(e);return"1:".concat(n)}var h=function(e){var t,n,r,o,c,a;return{spec:null!==(t=null==e||null===(n=e.print)||void 0===n?void 0:n.spec)&&void 0!==t?t:{},scale:null==e||null===(r=e.print)||void 0===r||null===(o=r.map)||void 0===o?void 0:o.scale,locale:null!==(c=null==e||null===(a=e.locale)||void 0===a?void 0:a.current)&&void 0!==c?c:"en-US"}},g=function(e){var t,n=e.map,a=e.scale,l=e.locale,i=e.label,s=void 0===i?"print.scale":i,f=e.optionLabel,d=void 0===f?"print.includeScale":f,O=(e.actions,e.onAddParameter),g=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,b),j=e.format||m;return(0,r.useEffect)((function(){var e;(0,p.addTransformer)("scale",(e=j,function(t,n){var r,o,c=null==n||null===(r=n.pages)||void 0===r||null===(o=r[0])||void 0===o?void 0:o.scale,a=h(t).locale;return Promise.resolve(v(v({},n),{},{mapScale:null!=n&&n.includeScale?"".concat(e(c,a,!0)):""}))}),4)}),[]),o().createElement("div",{id:"print-scale"},o().createElement("div",{style:{float:"left",marginRight:5}},o().createElement(u.Z,{msgId:s})," ",j(null!==(t=null==n?void 0:n.scale)&&void 0!==t?t:a,l)),o().createElement(c.W,y({},g,{actions:{addParameter:O},property:"includeScale",label:d})))};const j=(0,a.rx)("PrintScale",{component:(0,l.connect)(h,{onChangeParameter:i.d$,onAddParameter:i.eT})(g),reducers:{locale:s.Z,print:f.Z},containers:{Print:{priority:1,target:"left-panel",position:3}}})}}]);