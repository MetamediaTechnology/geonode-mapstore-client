(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[91234],{838167:(e,t,n)=>{"use strict";n.d(t,{k9:()=>P,v0:()=>O,ZP:()=>w});var r=n(675263),o=n.n(r),a=n(124852),c=n.n(a),i=n(868195);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function b(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,r,o,a=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(){return s(this,u),a.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){return this.context.intl?c().createElement(i.FormattedDate,l({value:this.props.value},this.props.dateParams)):c().createElement("span",null,this.props.value&&this.props.value.toString()||"")}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c().Component);y(d,"propTypes",{value:o().object,dateParams:o().object}),y(d,"contextTypes",{intl:o().object}),y(d,"defaultProps",{value:new Date});const g=d;var v=n(615402),h=n(805346),O=h.Z,P=v.Z,j=g;const w={Message:h.Z,HTML:P,DateFormat:j}},271231:(e,t,n)=>{"use strict";n.d(t,{Q:()=>m});var r=n(701469),o=n.n(r),a=n(124852),c=n.n(a),i=n(867076),u=n(828878),l=n(749902);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(0,i.setObservableConfig)(u.Z);var b=(0,i.mapPropsStreamWithConfig)(u.Z)((function(e){return e.take(1).switchMap((function(t){return t.autocompleteStreamFactory(e)})).combineLatest(e,(function(e,t){return{data:o()(e&&e.fetchedData&&e.fetchedData.values)?e.fetchedData.values.map((function(e){return{label:e,value:e}})):[],valuesCount:e&&e.fetchedData&&e.fetchedData.size,currentPage:t&&t.currentPage,maxFeatures:t&&t.maxFeatures,select:t&&t.select,focus:t&&t.focus,loadNextPage:t&&t.loadNextPage,loadPrevPage:t&&t.loadPrevPage,toggle:t&&t.toggle,change:t.change,open:t.open,selected:t&&t.selected,value:t.value,busy:e.busy,dropUp:t.dropUp,attribute:t.column&&t.column.key,changeAttribute:t.changeAttribute}}))}))((function(e){var t=e.open,n=e.toggle,r=e.select,o=e.focus,a=e.change,i=e.value,u=e.valuesCount,s=e.loadNextPage,p=e.loadPrevPage,f=e.maxFeatures,b=e.currentPage,m=e.busy,y=e.data,d=e.loading,g=void 0!==d&&d,v=e.dropUp,h=void 0!==v&&v,O=e.attribute,P=e.changeAttribute,j=Math.ceil(u/f);return c().createElement(l.Z,{pagination:{firstPage:1===b,lastPage:b===j,paginated:!0,loadPrevPage:p,loadNextPage:s},busy:m,dropUp:h,data:y,attribute:O,open:t,onFocus:o,onToggle:n,onChange:a,onSelect:r,onChangeAttribute:P,selectedValue:i,loading:g})})),m=(0,i.compose)((0,i.withStateHandlers)((function(e){return{delayDebounce:0,performFetch:!1,open:!1,openOnFocus:e.openOnFocus,currentPage:1,maxFeatures:5,url:e.url,typeName:e.typeName,value:e.value,attribute:e.column&&e.column.key,autocompleteStreamFactory:e.autocompleteStreamFactory,onChange:e.onChange}}),{select:function(e){return function(){return p(p({},e),{},{selected:!0})}},change:function(e){return function(t){if(e.selected&&e.changingPage)return p(p({},e),{},{delayDebounce:e.selected?0:500,selected:!1,changingPage:!1,performFetch:!(e.selected&&!e.changingPage),value:e.value,currentPage:e.changingPage?e.currentPage:1});var n="string"==typeof t?t:t.value;return e.onChange&&e.onChange(n),p(p({},e),{},{delayDebounce:e.selected?0:500,selected:!1,changingPage:!1,performFetch:!(e.selected&&!e.changingPage),value:n,currentPage:e.changingPage?e.currentPage:1})}},focus:function(e){return function(t){return t&&0===t.length&&""===e.value?p(p({},e),{},{delayDebounce:0,currentPage:1,performFetch:!0,isToggled:!1},e.openOnFocus?{open:!0}:{}):e}},toggle:function(e){return function(){return p(p({},e),{},{open:!!e.changingPage||!e.open})}},loadNextPage:function(e){return function(){return p(p({},e),{},{currentPage:e.currentPage+1,performFetch:!0,changingPage:!0,delayDebounce:0,value:e.value})}},loadPrevPage:function(e){return function(){return p(p({},e),{},{currentPage:e.currentPage-1,performFetch:!0,changingPage:!0,delayDebounce:0,value:e.value})}},changeAttribute:function(e){return function(t){return p(p({},e),{},{attribute:t})}}}))(b)},399534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(461365),o=n(569334);const a=(0,r.Z)(o.h_)},1036:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(618446),o=n.n(r);const a=(0,n(867076).shouldUpdate)((function(e,t){return!o()(e.start,t.start)||e.disabled!==t.disabled}))(n(185552))},638064:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(675263),o=n.n(r),a=n(124852),c=n.n(a),i=n(757588),u=n(876424);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function m(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(l,e);var t,n,r,o,a=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function l(){return p(this,l),a.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.cardComponent,n=e.items,r=e.colProps,o=e.onItemClick,a=e.size,l=t||u.Z;return c().createElement("div",{className:"msSideGrid"+(this.props.className?" "+this.props.className:"")},c().createElement(i.Row,{className:"items-list"},n.map((function(e,t){return c().createElement(i.Col,s({key:e.id||t},r),c().createElement(l,s({onClick:function(){return o(e)},size:a},e)))}))))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(c().Component);d(g,"propTypes",{size:o().string,onItemClick:o().func,colProps:o().object,items:o().array,cardComponent:o().oneOfType([o().string,o().func]),className:o().string}),d(g,"defaultProps",{size:"",onItemClick:function(){},colProps:{xs:12},className:"",items:[]});const v=g},906724:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(124852),o=n.n(r),a=n(867076),c=function(e,t,n){var r=n.maskContainerStyle,c=n.maskStyle,i=n.className,u=n.white;return function(n){return(0,a.nest)((function(n){return o().createElement("div",{className:"ms2-mask-container ".concat(i||""," ").concat(e(n)?"":"ms2-mask-empty"),style:r},n.children,e(n)?o().createElement("div",{className:"ms2-mask"+(u?" white-mask":""),style:c},t(n)):null)}),n)}};const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.alwaysWrap,o=void 0===r||r,i=n.white,u=void 0!==i&&i,l=n.maskContainerStyle,s=void 0===l?{}:l,p=n.maskStyle,f=void 0===p?{}:p,b=n.className;return o?c(e,t,{maskContainerStyle:s,maskStyle:f,className:b,white:u}):(0,a.branch)(e,c((function(){return!0}),t,{maskContainerStyle:s,maskStyle:f,white:u}))}},212961:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(124852),o=n.n(r),a=n(675263),c=n.n(a),i=n(757588),u=n(857037);function l(e){var t=e.color,n=e.format,r=e.line,a=e.onChangeColor,c=e.disableAlpha,l=e.containerNode,s=e.onOpen,p=e.disabled,f=e.presetColors,b=e.placement;return o().createElement("div",{className:"ms-color-selector"},o().createElement(u.Z,{text:o().createElement(i.Glyphicon,{glyph:"dropper"}),format:n,line:r,value:t,onChangeColor:a,pickerProps:{disableAlpha:c,presetColors:f},containerNode:l,disabled:p,onOpen:s,placement:b}))}l.propTypes={color:c().oneOfType([c().string,c().shape({r:c().number,g:c().number,b:c().number,a:c().number})]),format:c().string,line:c().bool,onChangeColor:c().func,disableAlpha:c().bool,containerNode:c().node,disabled:c().bool,onOpen:c().func,presetColors:c().array,placement:c().string},l.defaultProps={line:!1,onChangeColor:function(){},onOpen:function(){}};const s=l},10208:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var r=n(124852),o=n.n(r),a=n(675263),c=n.n(a),i=n(757588),u=n(212961),l=n(281763),s=n.n(l),p=n(414293),f=n.n(p),b=n(509886),m=n.n(b),y=n(200020),d=n(727418),g=n.n(d),v=n(805346),h=n(576364),O=n(271231),P=n(737275),j=n(443143),w=n(455877),C=n.n(w);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function R(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}m()();var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(l,e);var t,n,r,a,c=(r=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(a){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function l(){var e;D(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return A(_(e=c.call.apply(c,[this].concat(n))),"renderFieldByClassification",(function(t,n,r,a){var c;if(f()(t.unique))c=f()(t.min)?o().createElement(o().Fragment,null,o().createElement(i.FormControl,{value:t.label,type:"text",onChange:function(t){return e.updateRaster(n,t.target.value)}}),o().createElement(y.NumberPicker,{format:"- ###.###",value:t.quantity,onChange:function(t){return e.updateRaster(n,t,"number")}})):o().createElement(o().Fragment,null,o().createElement(y.NumberPicker,{format:"- ###.###",value:t.min,onChange:function(t){return e.updateMin(n,t)}}),o().createElement(y.NumberPicker,{format:"- ###.###",value:t.max,precision:3,onChange:function(t){return e.updateMax(n,t)}}));else if(s()(t.unique))c=o().createElement(y.NumberPicker,{format:"- ###.###",value:t.unique,onChange:function(t){return e.updateUnique(n,t,"number")}});else if(r&&a){var u=a.dropUpAutoComplete,l=a.classificationAttribute,p=a.layer;c=o().createElement(O.Q,{dropUp:u,openOnFocus:!1,autocompleteEnabled:!0,column:{key:l},onChange:function(t){return e.updateUnique(n,t)},dataType:"string",typeName:p.name,url:P.ZP.getParsedUrl(p.url,{outputFormat:"json"}),value:t.unique,filter:"contains",autocompleteStreamFactory:h.Vd})}else c=o().createElement(i.FormControl,{value:t.unique,type:"text",onChange:function(t){return e.updateUnique(n,t.target.value)}});return c})),A(_(e),"renderClasses",(function(){return e.props.classification.map((function(t,n,r){var a;return o().createElement(i.FormGroup,{key:null!==(a=t.id)&&void 0!==a?a:n},o().createElement(u.Z,{key:t.color,color:t.color,disableAlpha:!0,format:"hex",onChangeColor:function(t){return e.updateColor(n,t)}}),e.renderFieldByClassification(t,n,e.props.uniqueValuesClasses,e.props.autoCompleteOptions),e.props.customLabels&&o().createElement(i.FormControl,{value:t.title,type:"text",onChange:function(t){return e.updateCustomLabel(n,t.target.value)}}),o().createElement(i.DropdownButton,{style:{flex:0},className:"square-button-md no-border add-rule",noCaret:!0,pullRight:!0,title:o().createElement(i.Glyphicon,{glyph:"option-vertical"}),dropup:e.props.dropUpMenu},[{labelId:"styleeditor.addRuleBefore",glyph:"add-row-before",value:"before"},{labelId:"styleeditor.addRuleAfter",glyph:"add-row-after",value:"after"}].concat(x(e.props.allowEmpty||n?[{labelId:"styleeditor.remove",glyph:"trash",value:"remove"}]:[])).map((function(t){return o().createElement(i.MenuItem,{key:t.value,onClick:function(){return e.updateClassification(n,t.value,r,e.props.customLabels)}},o().createElement(o().Fragment,null,o().createElement(i.Glyphicon,{glyph:t.glyph}),o().createElement(v.Z,{msgId:t.labelId})))}))))}))})),A(_(e),"updateColor",(function(t,n){if(n){var r=e.props.classification.map((function(e,r){return r===t?g()({},e,{color:n}):e}));e.props.onUpdateClasses(r,"color")}})),A(_(e),"updateUnique",(function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",o=e.props.classification.map((function(e,o){return o===t?g()({},e,{unique:f()(n)?"number"===r?0:"":n}):e}));e.props.onUpdateClasses(o,"interval")})),A(_(e),"updateRaster",(function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",o="number"===r?"quantity":"label",a=e.props.classification.map((function(e,r){return r===t?g()({},e,A({},o,n)):e}));e.props.onUpdateClasses(a,"interval")})),A(_(e),"updateMin",(function(t,n){if(!isNaN(n)){var r=e.props.classification.map((function(e,r){return r===t?g()({},e,{min:n}):e}));e.props.onUpdateClasses(r,"interval")}})),A(_(e),"updateMax",(function(t,n){if(!isNaN(n)){var r=e.props.classification.map((function(e,r){return r===t?g()({},e,{max:n}):r===t+1?g()({},e,{min:n}):e}));e.props.onUpdateClasses(r,"interval")}})),A(_(e),"updateClassification",(function(t,n,r,o){var a,c,i=0,u=x(e.props.classification),l=u[t],p=r.map((function(e){return e.color}));if("before"===n){var b=0===t;a=b?0:t,c={min:b?f()(l.min)?l.min:0:l.min,max:l.min}}else"after"===n?(a=t===u.length-1?u.length:t+1,c={min:l.max,max:l.max}):(a=t,i=1);var m=[a,i];if("remove"!==n){var y,d=e.props.usePresetColors?(0,j.TM)(p):"#ffffff";if(f()(l.unique))y=f()(l.quantity)?k(k(k({},l),{},{id:C().v1()},c),{},{color:d,title:o?"":" >= ".concat(c.min," AND <").concat(c.max)}):k(k({},l),{},{id:C().v1(),color:d,label:"0",quantity:0});else{var g=s()(l.unique)?0:"";y=k(k({},l),{},{id:C().v1(),color:d,title:g,unique:g})}m=m.concat(y)}u.splice.apply(u,x(m)),e.props.onUpdateClasses(u,"interval")})),A(_(e),"updateCustomLabel",(function(t,n){if(void 0!==n){var r=e.props.classification.map((function(e,r){return r===t?g()({},e,{title:n}):e}));e.props.onUpdateClasses(r,"title")}})),e}return t=l,(n=[{key:"render",value:function(){return o().createElement("div",{className:"thema-classes-editor "+this.props.className},this.renderClasses())}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(o().Component);A(T,"propTypes",{classification:c().array,onUpdateClasses:c().func,className:c().string,allowEmpty:c().bool,customLabels:c().bool,uniqueValuesClasses:c().bool,autoCompleteOptions:c().object,dropUpMenu:c().bool,usePresetColors:c().bool}),A(T,"defaultProps",{classification:[],onUpdateClasses:function(){},className:"",allowEmpty:!0,customLabels:!1,uniqueValuesClasses:!1,dropUpMenu:!1});const Z=T},398360:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(124852),o=n.n(r),a=n(675263),c=n.n(a),i=n(443143),u=n(743129),l=n(313311),s=n.n(l),p=n(701469),f=n.n(p),b=n(805346),m=["options"];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){var t=e.ramp,n=e.name,r=e.label,a=1/t.length,c="linear-gradient(to right";return c="global.colors.custom"===n&&f()(t[0])?(t[0]||[]).reduce((function(e,n,r){var o=100/t[0].length,a="".concat(Math.ceil(o*r),"%"),c="".concat(Math.ceil(o*(r+1)),"%");return"".concat(e,", ").concat(n," ").concat(a,", ").concat(n," ").concat(c)}),c):(t||[]).reduce((function(e,n,r){return"".concat(e,", ").concat(n," ").concat(r/t.length*100,"%, ").concat(n," ").concat(100*(r/t.length+a),"%")}),c),o().createElement("div",{style:{backgroundImage:"".concat(c,")"),width:"100%",display:"inline-block",verticalAlign:"middle",padding:"0 2px"}},o().createElement("span",{style:{color:"#000000",backgroundColor:"rgba(255, 255, 255, 0.75)",padding:"0 4px"}},o().createElement(b.Z,{msgId:r||n,msgParams:{number:t.length}})))};function h(e){var t=e.value,n=e.samples,r=e.onChange,a=e.items,c=e.rampFunction,l=e.disabled,p=a.map((function(e){var t=e.options,r=void 0===t?{}:t,o=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,m);return d(d({},o),{},{options:r,ramp:o.ramp?[o.ramp]:c?c(o,r):((0,i.qH)(r.base,r.range,n+1,r.options)||["#AAA"]).splice(1)})})),f=s()(p,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e===t||e.name===(t&&t.name)}));return o().createElement(u.ZP,{valueKey:"name",className:"color-ramp-selector",clearable:!1,value:f,options:p,disabled:l,valueRenderer:v,optionRenderer:v,onChange:function(e){e&&r(e)}})}h.propTypes={value:c().oneOfType([c().string,c().object]),samples:c().number,onChange:c().func,items:c().array,rampFunction:c().func,disabled:c().bool},h.defaultProps={samples:5,onChange:function(){},items:[{name:"global.colors.blue",schema:"sequencial",options:{base:190,range:20}},{name:"global.colors.red",schema:"sequencial",options:{base:10,range:4}},{name:"global.colors.green",schema:"sequencial",options:{base:120,range:4}},{name:"global.colors.brown",schema:"sequencial",options:{base:30,range:4,s:1,v:.5}},{name:"global.colors.purple",schema:"sequencial",options:{base:300,range:4}},{name:"global.colors.random",schema:"qualitative",options:{base:190,range:340,options:{base:10,range:360,s:.67,v:.67}}}],disabled:!1};const O=h},680833:(e,t,n)=>{"use strict";n.d(t,{kB:()=>d,HI:()=>g});var r=n(472500),o=n.n(r),a=(n(91175),n(490173)),c=n(49977),i=n(501157),u=n(375875),l=n.n(u),s=(n(986267),n(624262)),p=n(510284),f=n(233044);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}a.default;var d=function(e){return c.Observable.defer((function(){return i.ZP.getCapabilities((0,s.Fh)(e))})).let(p.oB).map((function(t){return i.ZP.parseLayerCapabilities(t,e)}))},g=function(e){return function(e){return c.Observable.defer((function(){return l().get(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,n=e.search,r=void 0===n?{}:n,a=e.url,c=o().parse(r.url||a,!0);return o().format(m(m({},c),{},{search:void 0,query:m(m({},c.query),{},{service:"WMS",version:"1.1.1",layers:t,outputFormat:"application/json",request:"DescribeLayer"})}))}(e))})).let(p.oB)}(e).map((function(e){var t=e.data,n=void 0===t?{}:t;return n&&n.layerDescriptions[0]})).map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.owsURL;return m(m({},e),{},{params:{},search:n?{type:"wfs",url:(0,f.cleanAuthParamsFromURL)(n)}:void 0})}))}}}]);