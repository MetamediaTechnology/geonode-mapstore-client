(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[93038],{589602:(e,t,n)=>{"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{lD:()=>i,yK:()=>a,gf:()=>l,Qr:()=>s,Kx:()=>p,V:()=>u,Wt:()=>c,Qw:()=>d,GI:()=>f,MT:()=>m,XX:()=>y,sc:()=>g,qg:()=>v,Kf:()=>b,ES:()=>h,ud:()=>E,Bd:()=>O,pO:()=>S,Gd:()=>P,$3:()=>j,el:()=>T,CG:()=>w,h2:()=>C,NR:()=>M,RM:()=>x,dD:()=>A,wB:()=>F,Y_:()=>N,nl:()=>V,S1:()=>L});var i="CHANGE_MEASUREMENT_TOOL",a="CHANGE_MEASUREMENT_STATE",l="MEASUREMENT:CHANGE_UOM",s="MEASUREMENT:CHANGED_GEOMETRY",p="MEASUREMENT:SET_TEXT_LABELS",u="MEASUREMENT:SET_CURRENT_FEATURE",c="MEASUREMENT:ADD_AS_LAYER",d="MEASUREMENT:RESET_GEOMETRY",f="MEASUREMENT:CHANGE_FORMAT",m="MEASUREMENT:CHANGE_COORDINATES",y="MEASUREMENT:ADD_MEASURE_AS_ANNOTATION",g="MEASUREMENT:UPDATE_MEASURES",v="MEASUREMENT:INIT",b="MEASUREMENT:SET_MEASUREMENT_CONFIG",h="MEASUREMENT:SET_ANNOTATION_MEASUREMENT";function E(e,t,n,r,o){return{type:y,features:e,textLabels:t,uom:n,save:r,properties:o}}function O(e){return function(t){t(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({type:i},e)}(e))}}function S(e,t){return{type:h,features:e,properties:t}}function P(e,t,n){return{type:l,uom:e,value:t,previousUom:n}}function j(e){return{type:s,features:e}}function T(e,t){return{type:b,property:e,value:t}}function w(e){return{type:p,textLabels:e}}function C(e){return{type:u,featureIndex:e}}function M(e,t,n){return{type:c,features:e,textLabels:t,uom:n}}function x(e){return{type:f,format:e}}function A(e){return{type:m,coordinates:e}}function F(){return{type:d}}function N(e){return{type:g,measures:e}}function V(e){return{type:a,pointMeasureEnabled:e.pointMeasureEnabled,lineMeasureEnabled:e.lineMeasureEnabled,areaMeasureEnabled:e.areaMeasureEnabled,areaCircleEnabled:e.areaCircleEnabled,bearingMeasureEnabled:e.bearingMeasureEnabled,geomType:e.geomType,values:e.values,feature:e.feature,point:e.point,len:e.len,area:e.area,bearing:e.bearing,lenUnit:e.lenUnit,areaUnit:e.areaUnit}}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:v,defaultOptions:e}}},260024:(e,t,n)=>{"use strict";n.d(t,{Z:()=>K});var r=n(124852),o=n.n(r),i=n(675263),a=n.n(i),l=n(757588),s=n(743129),p=n(815135),u=n(91175),c=n.n(u),d=n(807654),f=n.n(d),m=n(227361),y=n.n(m),g=n(441609),v=n.n(g),b=n(86638),h=n(80717),E=n(245567),O=n(805346),S=n(658767),P=n(438261),j=n(281763),T=n.n(j),w=n(808797),C=n(986267),M=n(794192),x=n(867076),A=function(e,t,n){return T()(parseFloat(e))&&!isNaN(parseFloat(e))?(0,w.Ov)(parseFloat(e),t,n):e},F=function(e,t,n){return T()(parseFloat(e))&&!isNaN(parseFloat(e))?parseFloat((0,w.Ov)(e,n,t).toFixed(4)):e};const N=(0,x.compose)((0,x.defaultProps)({valueUom:"m",displayUom:"m",units:[{value:"degrees",label:"deg",originUom:"degrees"},{value:"ft",label:"ft",originUom:"m"},{value:"m",label:"m",originUom:"m"},{value:"km",label:"km",originUom:"m"},{value:"mi",label:"mi",originUom:"m"},{value:"nm",label:"nm",originUom:"m"}]}),(0,x.withStateHandlers)((function(e){var t=e.displayUom;return{uom:void 0===t?"nm":t}}),{setUom:function(){return function(e){return{uom:e}}}}),(0,x.withState)("localValue","setLocalValue"),(0,x.withPropsOnChange)(["value","localValue","uom","valueUom"],(function(e){var t=e.value,n=e.localValue,r=e.uom,o=e.valueUom;return{value:t===A(n,r,o)?n:F(t,r,o)}})),(0,x.withHandlers)({onChange:function(e){var t=e.uom,n=e.projection,r=e.valueUom,o=e.onChange,i=void 0===o?function(){}:o,a=e.setLocalValue,l=void 0===a?function(){}:a;return function(e){l(e),i(A(e,t,r),n)}}}))((function(e){var t=e.value,n=e.units,r=void 0===n?[]:n,i=e.uom,a=e.projection,s=void 0===a?"EPSG:3857":a,p=e.style,u=void 0===p?{display:"inline-flex",width:"100%"}:p,c=e.setUom,d=void 0===c?function(){}:c,f=e.onChange,m=void 0===f?function(){}:f,y=(0,C.getUnits)(s);return o().createElement(l.FormGroup,{style:u},o().createElement(M.Z,{value:t,placeholder:"radius",name:"radius",onChange:function(e){return m(e,i)},step:1,type:"number"}),o().createElement(l.FormControl,{componentClass:"select",placeholder:"select",value:i,onChange:function(e){return d(e.target.value)},style:{width:85}},r.filter((function(e){var t=e.originUom;return y===t})).map((function(e){return o().createElement("option",{key:e.value,value:e.value},e.label)}))))}));function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function G(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y=(0,p.Z)(l.Glyphicon),z=(0,p.Z)(l.DropdownButton),$=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(p,e);var t,n,r,i,a=(r=p,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(i){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function p(){var e;k(this,p);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Z(B(e=a.call.apply(a,[this].concat(n))),"getValidationStateRadius",(function(e){var t=parseFloat(e);return f()(t)?"error":null})),Z(B(e),"renderLabelTexts",(function(t,n){var r=n.textLabels,o=n.featurePropValue;return"Polygon"===e.props.type?!v()(r)&&r[t].text:0!==t?v()(r)?!v()(o)&&o[0].formattedValue:r[t-1].text:null})),Z(B(e),"validateCoordinates",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.components,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0;if(t&&t.length){var o=t.filter(S.Tl);return n?o.length>e.props.componentsValidation[e.props.type].min||o.length>=e.props.componentsValidation[e.props.type].min&&!(0,S.Tl)(t[r]):o.length>=e.props.componentsValidation[e.props.type].min}return!1})),Z(B(e),"validateCircle",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.components,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.props.properties.radius;if(t&&t.length){var r=c()(t);return!f()(parseFloat(n))&&(0,S.Tl)(r)}return!1})),Z(B(e),"validateText",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.components,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.props.properties.valueText;if(t&&t.length){var r=c()(t);return!!n&&(0,S.Tl)(r)}return!1})),Z(B(e),"isValid",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.components,n=arguments.length>1?arguments[1]:void 0;return e[e.props.componentsValidation[e.props.type].validation](t,!1,n)})),Z(B(e),"addCoordPolygon",(function(t){if("Polygon"===e.props.type){var n,r,o,i=t.filter(S.Tl),a=(null===(n=e.props.features[e.props.currentFeature])||void 0===n||null===(r=n.geometry)||void 0===r||null===(o=r.coordinates)||void 0===o?void 0:o[0])||[],l=void 0!==a?a.findIndex((function(e){return!(0,S.Tl)({lon:e[0],lat:e[1]})})):-1;return t.concat([i.length&&0!==l?i[0]:{lat:"",lon:""}])}return t})),Z(B(e),"change",(function(t,n){var r=e.props.components,o=f()(parseFloat(n.lat))?"":parseFloat(n.lat),i=f()(parseFloat(n.lon))?"":parseFloat(n.lon);r[t]={lat:o,lon:i};var a=e.addCoordPolygon(r);e.props.onChange(a,e.props.properties.radius,e.props.properties.valueText,e.props.mapProjection),e.isValid(r)?(e.props.isMouseEnterEnabled||"LineString"===e.props.type||"Polygon"===e.props.type)&&e.props.onHighlightPoint(r[t]):((e.props.isMouseLeaveEnabled||"LineString"===e.props.type||"Polygon"===e.props.type)&&e.props.onHighlightPoint(null),e.props.onSetInvalidSelected("coords",r.map(S.bh)))})),e}return t=p,(n=[{key:"renderCircle",value:function(){var e=this;return o().createElement("div",{style:{flex:1,overflowY:"auto",padding:"0 10px"}},o().createElement("div",null,o().createElement(l.FormGroup,{validationState:this.getValidationStateRadius(this.props.properties.radius)},o().createElement(l.ControlLabel,null,o().createElement(O.Z,{msgId:"annotations.editor.radius"})),o().createElement(N,D({placeholder:"radius"},this.props.measureOptions,{value:this.props.properties.radius,projection:this.props.mapProjection,name:"radius",onChange:function(t,n){e.props.onValidateFeature(),e.isValid(e.props.components,t)?e.props.onChangeRadius(parseFloat(t),e.props.components.map(S.bh),n):""!==t?e.props.onChangeRadius(parseFloat(t),[],n):(e.props.onChangeRadius(null,e.props.components.map(S.bh),n),e.props.onSetInvalidSelected("radius",e.props.components.map(S.bh)))},step:1,type:"number"})))))}},{key:"render",value:function(){var e=this,t=this.props.features[this.props.currentFeature||0],n=y()(t,"geometry.textLabels",[]),r=y()(t,"properties.values",[]),i=this.props,a=i.componentsValidation,p=i.type,u=U(this.props.components),d=u.filter(S.Tl).length===u.length,f=this[a[p].validation]()&&d,m=[{value:"decimal",text:o().createElement(O.Z,{msgId:"annotations.editor.decimal"})},{value:"aeronautical",text:o().createElement(O.Z,{msgId:"annotations.editor.aeronautical"})}],g=[{glyph:f?"ok-sign text-success":"exclamation-mark text-danger",tooltipId:f?"annotations.editor.valid":a[p].notValid,visible:!0},{Element:function(){return o().createElement(z,{noCaret:!0,title:o().createElement(Y,{glyph:"cog"}),pullRight:!0,className:"square-button-md no-border",tooltip:"Format"},m.map((function(t){var n=t.text,r=t.value;return o().createElement(l.MenuItem,{active:e.props.format===r,key:r,onClick:function(){return e.props.onChangeFormat(r)}},n)})))}},{glyph:"plus",tooltipId:"annotations.editor.add",disabled:"Bearing"!==p&&this.props.properties.disabled,visible:!a[p].add||!a[p].max||this.props.components.length!==a[p].max,onClick:function(){var t=U(e.props.components);t=t.concat([{lat:"",lon:""}]),e.props.onChange(t,e.props.properties.radius,e.props.properties.valueText,e.props.mapProjection)}}];return o().createElement("div",{className:"coordinates-editor",style:this.props.style},o().createElement("div",{className:"measure-feature-selector"},o().createElement("div",null,this.props.showFeatureSelector?o().createElement(s.ZP,{value:this.props.currentFeature,disabled:this.props.properties.disabled,options:[].concat(U(this.props.features.map((function(t,n){var r=y()(t,"properties.values",[]),o="bearing"===(r[0]||{}).type?"Bearing":t.geometry.type;if(o!==e.props.type)return null;var i="LineString"===o?"Length":"Bearing"===o?"Bearing":"Area",a=r.length>0?"".concat(i," ").concat(r[0].formattedValue):"",l=r.length>1&&"Polygon"===o?", Perimeter: ".concat(r[1].formattedValue):"";return{label:"".concat(o," (").concat(a).concat(l,")"),value:n}}))),[{label:(0,b.S$)(this.context.messages,"annotations.editor.newFeature"),value:this.props.features.length}]).filter((function(e){return!!e})),onChange:function(t){return e.props.onChangeCurrentFeature(null==t?void 0:t.value)}}):null),o().createElement("div",null,o().createElement(h.Z,{btnGroupProps:{className:"pull-right"},btnDefaultProps:{className:"square-button-md no-border"},buttons:g}))),"Circle"===this.props.type&&this.renderCircle(),"Circle"===this.props.type&&o().createElement("div",{style:{flex:1,overflowY:"auto",paddingLeft:10,marginTop:10}},o().createElement("div",null,o().createElement(l.ControlLabel,null,o().createElement(O.Z,{msgId:"annotations.editor.center"})))),o().createElement("div",{className:"coordinates-row-container coordinates-row-type-".concat(p)},this.props.components.map((function(t,i){return o().createElement(o().Fragment,null,e.props.showLengthAndBearingLabel&&o().createElement("div",{className:"label-texts"},o().createElement("span",null,e.renderLabelTexts(i,{textLabels:n,featurePropValue:r}))),o().createElement(P.Z,{format:e.props.format,aeronauticalOptions:e.props.aeronauticalOptions,sortId:i,key:i+" key",disabled:e.props.properties.disabled&&(0,S.Tl)(t),renderer:e.props.renderer,isDraggable:e.props.isDraggable,isDraggableEnabled:e.props.isDraggable&&e[a[p].validation]()&&!e.props.properties.disabled,showDraggable:e.props.isDraggable&&!("Point"===e.props.type||"Text"===e.props.type||"Circle"===e.props.type),formatVisible:!1,removeVisible:a[p].remove,removeEnabled:e[a[p].validation](e.props.components,a[p].remove,i),onSubmit:e.change,onMouseEnter:function(t){(e.props.isMouseEnterEnabled||"LineString"===e.props.type||"Polygon"===e.props.type||"MultiPoint"===e.props.type)&&e.props.onHighlightPoint(t)},onMouseLeave:function(){(e.props.isMouseLeaveEnabled||"LineString"===e.props.type||"Polygon"===e.props.type||"MultiPoint"===e.props.type)&&e.props.onHighlightPoint(null)},onSort:function(t,n){var r=e.props.components.reduce((function(r,o,i){return t===i?[].concat(U(r),t>n?[q({},o),c()(e.props.components.filter((function(e,t){return t===n})))]:[c()(e.props.components.filter((function(e,t){return t===n}))),q({},o)]):n===i?U(r):[].concat(U(r),[q({},o)])}),[]).filter((function(e){return e}));e.isValid(r)?e.props.onChange(r):e.props.properties.isValidFeature&&e.props.onSetInvalidSelected("coords",e.props.components.map(S.bh))},idx:i,component:t,onRemove:function(){var t=e.props.components.filter((function(e,t){return t!==i}));e.isValid(t)?(e.props.isMouseEnterEnabled||"LineString"===e.props.type&&i!==t.length||"Polygon"===e.props.type?e.props.onHighlightPoint(t[i]):e.props.onHighlightPoint(null),e.props.onChange(t)):e.props.properties.isValidFeature&&e.props.onSetInvalidSelected("coords",e.props.components.map(S.bh))},onValidateFeature:e.props.onValidateFeature}))}))),(!this.props.components||0===this.props.components.length)&&o().createElement("div",{className:"text-center",style:{padding:15,paddingBottom:30}},o().createElement("i",null,o().createElement(O.Z,{msgId:"annotations.editor.addByClick"}))))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(o().Component);Z($,"propTypes",{components:a().array,measureOptions:a().object,onSetInvalidSelected:a().func,onChange:a().func,onChangeRadius:a().func,onHighlightPoint:a().func,onChangeText:a().func,onChangeFormat:a().func,onChangeCurrentFeature:a().func,format:a().string,aeronauticalOptions:a().object,componentsValidation:a().object,transitionProps:a().object,properties:a().object,mapProjection:a().string,features:a().array,currentFeature:a().number,showFeatureSelector:a().bool,type:a().string,isDraggable:a().bool,isMouseEnterEnabled:a().bool,isMouseLeaveEnabled:a().bool,showLengthAndBearingLabel:a().bool,renderer:a().string,style:a().object,onValidateFeature:a().func}),Z($,"contextTypes",{messages:a().object}),Z($,"defaultProps",{components:[],measureOptions:{},onChange:function(){},onChangeRadius:function(){},onHighlightPoint:function(){},onChangeFormat:function(){},onChangeText:function(){},onChangeCurrentFeature:function(){},onSetInvalidSelected:function(){},onValidateFeature:function(){},componentsValidation:{Bearing:{min:2,max:2,add:!0,remove:!0,validation:"validateCoordinates",notValid:"annotations.editor.notValidPolyline"},Polygon:{min:3,add:!0,remove:!0,validation:"validateCoordinates",notValid:"annotations.editor.notValidPolyline"},LineString:{min:2,add:!0,remove:!0,validation:"validateCoordinates",notValid:"annotations.editor.notValidPolyline"},MultiPoint:{min:2,add:!0,remove:!0,validation:"validateCoordinates",notValid:"annotations.editor.notValidPolyline"},Point:{min:1,max:1,add:!0,remove:!1,validation:"validateCoordinates",notValid:"annotations.editor.notValidMarker"},Circle:{min:1,max:1,add:!0,remove:!1,validation:"validateCircle",notValid:"annotations.editor.notValidCircle"},Text:{min:1,max:1,add:!0,remove:!1,validation:"validateText",notValid:"annotations.editor.notValidText"}},transitionProps:{transitionName:"switch-panel-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300},features:[],isDraggable:!0,isMouseEnterEnabled:!1,isMouseLeaveEnabled:!1,properties:{},type:"Point",style:{display:"flex",flexDirection:"column",flex:1}});const K=(0,E.Z)($)},245567:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(124852),o=n.n(r),i=n(867076),a=["onSort","isDraggable","items","containerId"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c=(0,i.compose)((0,i.branch)((function(e){var t=e.isDraggable;return void 0===t||t}),(function(e){return function(t){var n=t.onSort,r=t.isDraggable,i=t.items,s=void 0===i?[]:i,u=t.containerId,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,a),d=s.map((function(e,t){return p(p({},e),{},{onSort:n,isDraggable:r,sortId:t,key:e.id||t,containerId:u})}));return o().createElement(e,l({},p(p({},c),{},{isDraggable:r}),{items:d}))}})))},808797:(e,t,n)=>{"use strict";n.d(t,{rp:()=>s,Ov:()=>u,wd:()=>c,L0:()=>d}),n(701469);var r=n(91175),o=n.n(r),i=n(807654),a=n.n(i);function l(e){var t=Math.floor(e),n=60*(e-t),r=Math.floor(n),o=60*(n-r);return t+"° "+r+"' "+Math.floor(o)+"'' "}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.measureTrueBearing,r=void 0!==n&&n,o=t.fractionDigits,i=void 0===o?0:o,a="";if(r){var s="";e>=0&&e<10?s="00":e>10&&e<100&&(s="0");var p=i>0?e.toFixed(i):Math.floor(e);a=s+p+"°"}else e>=0&&e<90?a="N "+l(e)+"E":e>90&&e<=180?a="S "+l(180-e)+"E":e>180&&e<270?a="S "+l(e-180)+"W":e>=270&&e<=360&&(a="N "+l(360-e)+"W");return a}var p={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803,wah:.5},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7,sqwa:.25,sqngan:.0025,sqrai:625e-6},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return p[t]&&p[t][n]?e*p[t][n]:e}var c=function(e){return!a()(parseFloat(e[0]))&&!a()(parseFloat(e[1]))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.coordinates,n=e.type,r=t;if("LineString"===n){if((r=t.filter(c)).length<2)return[]}else if("Polygon"===n){if((r=o()(t).filter(c)).length<3)return[[]];r=[r.concat([o()(r)])]}return r}},162192:(e,t,n)=>{"use strict";n.d(t,{zE:()=>P,k2:()=>T,tL:()=>M});var r=n(59854),o=n.n(r),i=n(385564),a=n.n(i),l=n(318029),s=n.n(l),p=n(944908),u=n.n(p),c=n(227361),d=n.n(c),f=n(423570),m=n.n(f),y=n(658767),g=n(808797),v=n(986267);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P="Measure",j=function(e,t){return{length:o()((0,g.Ov)(t,"m",e.length.label)||0,2)+" "+e.length.label,area:o()((0,g.Ov)(t,"sqm",e.area.label)||0,2)+" "+e.area.label,bearing:(0,g.rp)(o()(t||0,6)).toString()}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return u()(e.map((function(e){return"LineString"===e.geometry.type&&"bearing"===d()(e,"properties.values[0].type","")?"Bearing":e.geometry.type})))},w={offsetY:1,fontSize:"10",fontSizeUom:"px",fontFamily:"Courier New",font:"10px Courier New",textAlign:"center",color:"#000000",opacity:1,fillColor:"#000000",fillOpacity:1},C={offsetY:-15,fontSize:"13",fontSizeUom:"px",fontFamily:"Courier New",font:"13px Courier New",textAlign:"center",color:"#000000",opacity:1,fillColor:"#000000",fillOpacity:1},M=function(e,t,n,r,o,i){var l,p,c=(l=e,(p=u()(l.map((function(e){return d()(e,"properties.values[0].type","")})))).length>1?{title:"Multiple Measurement",iconGlyph:"geometry-collection"}:{title:P+" "+s()(p[0]),iconGlyph:"1-measure-"+p[0]});return{type:"FeatureCollection",features:[].concat(O(a()(e.map((function(e){return function(e,t,n){var r,o,i,a=n||C,l=!(null===(r=e.properties)||void 0===r||null===(o=r.values)||void 0===o||!o.find((function(e){return"bearing"===e.type})));return[{type:"Feature",geometry:{type:e.geometry.type,coordinates:(0,g.L0)(e.geometry),textLabels:e.geometry.textLabels},properties:{id:m()(),isValidFeature:!0,geometryGeodesic:"LineString"!==e.geometry.type||l?null:{type:"LineString",coordinates:(0,v.transformLineToArcs)(e.geometry.coordinates)},useGeodesicLines:"LineString"===e.geometry.type&&!l,values:(null===(i=e.properties)||void 0===i?void 0:i.values)||[]},style:[h(h({},y.z4[e.geometry.type]),{},{type:e.geometry.type,id:m()(),geometry:"LineString"!==e.geometry.type||l?null:"lineToArc",title:"".concat(e.geometry.type," Style"),filtering:!0})].concat("LineString"===e.geometry.type?(0,y.N_)():[])}].concat(O(e.properties.values.map((function(e){var n=e.value,r=e.formattedValue,o=e.type;return{type:"Feature",geometry:{type:"Point",coordinates:e.position},properties:{valueText:r||j(t,n)[o],isText:!0,isValidFeature:!0,id:m()()},style:h(h({},a),{},{id:m()(),filtering:!0,title:"Text Style",type:"Text"})}}))))}(e,n,i)})))),O(t.filter((function(e){return!!e})).map((function(e){var t=e.text;return{type:"Feature",geometry:{type:"Point",coordinates:e.position},properties:{valueText:t,isValidFeature:!0,isText:!0,id:m()()},style:h(h({},w),{},{id:m()(),filtering:!0,title:"Text Style",type:"Text"})}})))),properties:{id:r,description:o,type:P,title:c.title,iconGlyph:c.iconGlyph},style:{}}}}}]);