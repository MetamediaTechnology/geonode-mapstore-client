(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[55553],{147408:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(151257),o=/^\s+/;const i=function(e){return e?e.slice(0,(0,r.Z)(e)+1).replace(o,""):e}},151257:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=/\s/;const o=function(e){for(var t=e.length;t--&&r.test(e.charAt(t)););return t}},290808:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(589122),o=n(459641),i=n(147422),u=Math.max,c=Math.min;const a=function(e,t,n){var a,f,l,s,p,d,h=0,y=!1,v=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=a,r=f;return a=f=void 0,h=t,s=e.apply(r,n)}function g(e){var n=e-d;return void 0===d||n>=t||n<0||v&&e-h>=l}function O(){var e=(0,o.Z)();if(g(e))return w(e);p=setTimeout(O,function(e){var n=t-(e-d);return v?c(n,l-(e-h)):n}(e))}function w(e){return p=void 0,m&&a?b(e):(a=f=void 0,s)}function Z(){var e=(0,o.Z)(),n=g(e);if(a=arguments,f=this,d=e,n){if(void 0===p)return function(e){return h=e,p=setTimeout(O,t),y?b(e):s}(d);if(v)return clearTimeout(p),p=setTimeout(O,t),b(d)}return void 0===p&&(p=setTimeout(O,t)),s}return t=(0,i.Z)(t)||0,(0,r.Z)(n)&&(y=!!n.leading,l=(v="maxWait"in n)?u((0,i.Z)(n.maxWait)||0,t):l,m="trailing"in n?!!n.trailing:m),Z.cancel=function(){void 0!==p&&clearTimeout(p),h=0,a=d=f=p=void 0},Z.flush=function(){return void 0===p?s:w((0,o.Z)())},Z}},589122:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},197828:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(859197),o=n(623195);const i=function(e){return"symbol"==typeof e||(0,o.Z)(e)&&"[object Symbol]"==(0,r.Z)(e)}},459641:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(553249);const o=function(){return r.Z.Date.now()}},858848:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(290808),o=n(589122);const i=function(e,t,n){var i=!0,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return(0,o.Z)(n)&&(i="leading"in n?!!n.leading:i,u="trailing"in n?!!n.trailing:u),(0,r.Z)(e,t,{leading:i,maxWait:t,trailing:u})}},147422:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(147408),o=n(589122),i=n(197828),u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt;const l=function(e){if("number"==typeof e)return e;if((0,i.Z)(e))return NaN;if((0,o.Z)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,o.Z)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=(0,r.Z)(e);var n=c.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):u.test(e)?NaN:+e}},5729:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=function(e){var t=[],n=null,r=function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];t=o,n||(n=requestAnimationFrame((function(){n=null,e.apply(void 0,t)})))};return r.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},r}},733883:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}n.d(t,{Z:()=>c});const c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,i(t).apply(this,arguments))}var n,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(c=[{key:"render",value:function(){return this.props.children}}])&&o(n.prototype,c),t}(n(124852).PureComponent)},155553:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(124852),o=n.n(r),i=n(180307),u=n(961845),c=n(5729),a=n(675263),f=n(159181),l=n(733883);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?h(e):t}(this,d(t).call(this,e)),v(h(n),"cancelHandler",(function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)})),v(h(n),"rafClean",(function(){n.raf&&n.raf.cancel&&(n.raf.cancel(),n.raf=null)})),v(h(n),"toggleObserver",(function(e){var t=n.getElement();t&&n.resizeObserver[e]&&n.resizeObserver[e](t)})),v(h(n),"getElement",(function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(!(0,f.yF)()){if(t)return document.querySelector(t);if(r&&(0,f.aY)(r))return r;var o=n.element&&(0,i.findDOMNode)(n.element);if(o)return o.parentElement}})),v(h(n),"createUpdater",(function(){return n.rafClean(),n.raf=(0,c.Z)((function(e){var t=e.width,r=e.height,o=n.props.onResize;(0,f.mf)(o)&&o(t,r),n.setState({width:t,height:r})})),n.raf})),v(h(n),"createResizeHandler",(function(e){var t=n.state,r=t.width,o=t.height,i=n.props,u=i.handleWidth,c=i.handleHeight;if(u||c){var a=n.createUpdater();e.forEach((function(e){var t=e&&e.contentRect||{},i=t.width,l=t.height,s=u&&r!==i||c&&o!==l;!n.skipOnMount&&s&&!(0,f.yF)()&&a({width:i,height:l}),n.skipOnMount=!1}))}})),v(h(n),"onRef",(function(e){n.element=e})),v(h(n),"getRenderType",(function(){var e=n.props,t=e.render,o=e.children;return(0,f.mf)(t)?"renderProp":(0,f.mf)(o)?"childFunction":(0,r.isValidElement)(o)?"child":Array.isArray(o)?"childArray":"parent"})),v(h(n),"getTargetComponent",(function(){var e=n.props,t=e.render,o=e.children,i=e.nodeType,u=n.state,c={width:u.width,height:u.height};switch(n.getRenderType()){case"renderProp":return(0,r.cloneElement)(t(c),{key:"resize-detector"});case"childFunction":return(0,r.cloneElement)(o(c));case"child":return(0,r.cloneElement)(o,c);case"childArray":return o.map((function(e){return!!e&&(0,r.cloneElement)(e,c)}));default:return(0,r.createElement)(i)}}));var o=e.skipOnMount,a=e.refreshMode,l=e.refreshRate,p=e.refreshOptions;n.state={width:void 0,height:void 0},n.skipOnMount=o,n.raf=null,n.element=null,n.unmounted=!1;var y=(0,f.xD)(a);return n.resizeHandler=y?y(n.createResizeHandler,l,p):n.createResizeHandler,n.resizeObserver=new u.Z(n.resizeHandler),n}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){this.toggleObserver("observe")}},{key:"componentWillUnmount",value:function(){this.toggleObserver("unobserve"),this.rafClean(),this.cancelHandler(),this.unmounted=!0}},{key:"render",value:function(){return o().createElement(l.Z,{ref:this.onRef},this.getTargetComponent())}}])&&p(n.prototype,a),t}(r.PureComponent);m.propTypes={handleWidth:a.bool,handleHeight:a.bool,skipOnMount:a.bool,refreshRate:a.number,refreshMode:a.string,refreshOptions:(0,a.shape)({leading:a.bool,trailing:a.bool}),querySelector:a.string,targetDomEl:a.any,onResize:a.func,render:a.func,children:a.any,nodeType:a.node},m.defaultProps={handleWidth:!1,handleHeight:!1,skipOnMount:!1,refreshRate:1e3,refreshMode:void 0,refreshOptions:void 0,querySelector:null,targetDomEl:null,onResize:null,render:void 0,children:null,nodeType:"div"};const b=m},159181:(e,t,n)=>{"use strict";n.d(t,{xD:()=>u,mf:()=>c,yF:()=>a,aY:()=>f});var r=n(290808),o=n(858848),i={debounce:r.Z,throttle:o.Z},u=function(e){return i[e]},c=function(e){return"function"==typeof e},a=function(){return"undefined"==typeof window},f=function(e){return e instanceof Element||e instanceof HTMLDocument}}}]);