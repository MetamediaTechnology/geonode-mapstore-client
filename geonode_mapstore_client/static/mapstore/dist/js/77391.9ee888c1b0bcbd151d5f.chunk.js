(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[77391],{881058:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var r=n(22222),o=n(322843),c=n(171703),a=n(124852),i=n.n(a),u=n(757588),l=n(282467),f=n(950966),s=n(805346);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function w(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,c=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(){var e;b(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return O(v(e=c.call.apply(c,[this].concat(n))),"downloadGeoJson",(function(){var t={type:"FeatureCollection",features:y(e.props.selectedLayers[0].features)},n="data:text/json;chatset=utf-8,".concat(encodeURIComponent(JSON.stringify(t))),r=document.createElement("a");r.href=n,r.download="".concat(e.props.selectedLayers[0].title,".json"),r.click()})),e}return t=a,(n=[{key:"render",value:function(){return i().createElement(i().Fragment,null,"BufferedLayer"!==this.props.selectedLayers[0].name&&"MergeLayer"!==this.props.selectedLayers[0].name||this.props.settings.expanded||this.props.layerMetadata.expanded?null:i().createElement(f.Z,{key:"exportGeoJsonTool",placement:"top",overlay:i().createElement(u.Tooltip,{id:"toc-tooltip-downloadTool"},i().createElement(s.Z,{msgId:"exportGeoJsonPlugin.tooltip"}))},i().createElement(l.Z,{bsStyle:this.props.layerdownload.expanded?"success":"primary",className:"square-button-md",onClick:this.downloadGeoJson},i().createElement(u.Glyphicon,{glyph:"download"}))))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i().Component),E=(0,c.connect)((0,r.P1)([],(function(){return{}})))((function(){return i().createElement(i().Fragment,null)})),P=(0,c.connect)((0,r.P1)([],(function(){return{}})))(j);const S=(0,o.rx)("ExportGeoJson",{component:E,containers:{TOC:{doNotHide:!0,name:"ExportGeoJson",target:"toolbar",selector:function(e){return"LAYER"===e.status},Component:P}}})}}]);