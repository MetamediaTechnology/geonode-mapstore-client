(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[48216],{647310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(375875),o=r.n(n),i=r(472500),c=r.n(i),u=r(727418),l=r.n(u),a={format:"json",bounded:0,polygon_geojson:1,priority:5};const f={geocode:function(e,t){var r=l()({q:e},a,t||{}),n=c().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=l()({lat:e.lat,lon:e.lng},t||{},a),n=c().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},615402:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(675263),o=r.n(n),i=r(124852),c=r.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function s(e,t,r){return(t=p(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}var y=r(868195).FormattedHTMLMessage,b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(s,e);var t,r,n,o,i=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(o){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),i.apply(this,arguments)}return t=s,(r=[{key:"render",value:function(){return this.context.intl?c().createElement(y,{id:this.props.msgId,values:this.props.msgParams}):c().createElement("span",null,this.props.msgId||"")}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(c().Component);s(b,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),s(b,"contextTypes",{intl:o().object});const m=b},965539:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(124852),o=r.n(n);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=function(e){var t=e.id,r=e.children,n=e.header,i=e.footer,c=e.columns,l=e.height,a=e.style,f=void 0===a?{}:a,s=e.className,p=e.bodyClassName,y=void 0===p?"ms2-border-layout-body":p;return o().createElement("div",{id:t,className:s,style:u({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},f)},n,o().createElement("div",{className:y,style:{display:"flex",flex:1,overflowY:"auto"}},o().createElement("main",{className:"ms2-border-layout-content",style:{flex:1,overflowX:"hidden"}},l?o().createElement("div",{style:{height:l}},r):r),l?o().createElement("div",{style:{height:l}},c):c),i)}},532425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(675263),o=r.n(n),i=r(124852),c=r.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return c().createElement("div",{className:o,style:a({width:t,height:t,overflow:"hidden"},n)},!i&&c().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const y=p},82110:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(124852),o=r.n(n),i=r(496259),c=r(532425);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s=function(e){var t=e.width,r=e.height,n=e.className,u=void 0===n?"loader-container":n,l=e.contentStyle,f=void 0===l?{}:l;return o().createElement("div",{className:u},o().createElement(i.Z,null,(function(e){var n=e.width,i=void 0===n?200:n,u=e.height,l=void 0===u?200:u,s=t||(l>0?Math.min(i,l):i),p=r||(l>0?Math.min(i,l):i),y=Math.min(s,p);return o().createElement(c.Z,{size:y,style:a({padding:y/10,margin:"auto",display:"flex"},f)})})))}},212610:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(124852),o=r.n(n),i=r(867076),c=r(957557),u=r.n(c),l=r(815135);const a=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled;return!(void 0!==r&&r&&t)}),l.Z,(function(e){return function(t){return o().createElement(e,u()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(124852),o=r.n(n),i=r(867076),c=r(675263),u=r.n(c),l=r(957557),a=r.n(l),f=r(757588),s=r(950966);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function v(e,t,r){return(t=d(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}const h=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(v,t);var r,n,c,u,l=(c=v,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(c);if(u){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function v(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),l.apply(this,arguments)}return r=v,(n=[{key:"renderPopover",value:function(){return o().createElement(f.Popover,a()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,a()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(s.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&y(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),v}(o().Component),v(t,"propTypes",{popover:u().object}),v(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(124852),o=r.n(n),i=r(819081),c=r.n(i),u=r(757588),l=r(90085),a=["visible","Element","renderButton"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}const s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,i=void 0===n?{}:n,s=e.btnDefaultProps,p=void 0===s?{}:s,y=e.transitionProps,b=void 0===y?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:y,m=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,i=e.Element,c=e.renderButton,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a);return n?c||i&&o().createElement(i,f({key:u.key||t},u))||o().createElement(l.Z,f({key:u.key||t},p,u)):null}))};return o().createElement(u.ButtonGroup,i,b?o().createElement(c(),b,m()):m())}},90085:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(867076),c=r(805346),u=r(957557),l=r.n(u),a=r(757588),f=r(532425),s=r(212610),p=r(617252),y=r(282467),b=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}const v=(0,i.compose)(s.Z,p.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,i=void 0===n?"":n,u=e.textId,s=e.glyphClassName,p=void 0===s?"":s,v=e.loaderProps,d=void 0===v?{}:v,h=e.children,g=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,b);return o().createElement(y.Z,l()(g,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(a.Glyphicon,{glyph:t,className:p}):null,u?o().createElement(c.Z,{msgId:u}):i,r?o().createElement(f.Z,m({className:"ms-loader".concat(g.bsStyle&&" ms-loader-"+g.bsStyle||"").concat(g.bsSize&&" ms-loader-"+g.bsSize||"")},d)):null,h)}))},23279:(e,t,r)=>{var n=r(513218),o=r(707771),i=r(14841),c=Math.max,u=Math.min;e.exports=function(e,t,r){var l,a,f,s,p,y,b=0,m=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=l,n=a;return l=a=void 0,b=t,s=e.apply(n,r)}function g(e){var r=e-y;return void 0===y||r>=t||r<0||v&&e-b>=f}function O(){var e=o();if(g(e))return j(e);p=setTimeout(O,function(e){var r=t-(e-y);return v?u(r,f-(e-b)):r}(e))}function j(e){return p=void 0,d&&l?h(e):(l=a=void 0,s)}function w(){var e=o(),r=g(e);if(l=arguments,a=this,y=e,r){if(void 0===p)return function(e){return b=e,p=setTimeout(O,t),m?h(e):s}(y);if(v)return clearTimeout(p),p=setTimeout(O,t),h(y)}return void 0===p&&(p=setTimeout(O,t)),s}return t=i(t)||0,n(r)&&(m=!!r.leading,f=(v="maxWait"in r)?c(i(r.maxWait)||0,t):f,d="trailing"in r?!!r.trailing:d),w.cancel=function(){void 0!==p&&clearTimeout(p),b=0,l=y=a=p=void 0},w.flush=function(){return void 0===p?s:j(o())},w}},435161:(e,t,r)=>{var n=r(829932),o=r(267206),i=r(269199),c=r(701469);e.exports=function(e,t){return(c(e)?n:i)(e,o(t,3))}},707771:(e,t,r)=>{var n=r(555639);e.exports=function(){return n.Date.now()}}}]);