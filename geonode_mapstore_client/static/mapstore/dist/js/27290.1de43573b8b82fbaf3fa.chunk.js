(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[27290],{989077:(e,n,t)=>{"use strict";t.d(n,{Yf:()=>ye,Lz:()=>Ne,LR:()=>be,RP:()=>ve,cX:()=>xe,bf:()=>he,UC:()=>Ee,zr:()=>Oe,BP:()=>Se,N:()=>je,IN:()=>Ce,xp:()=>we,jU:()=>de,mr:()=>ge});var r=t(178598),o=t.n(r),i=t(997995),a=t.n(i),u=t(279003),l=t.n(u),c=t(489597),s=t.n(c),m=t(966085),f=t.n(m),p=t(882702),y=t(727418),d=t.n(y),b=t(972163),v=t(505055),g=t(3674),h=t.n(g),x=t(252628),w=t.n(x),S=t(227361),O=t.n(S),j=t(91175),E=t.n(j),C=t(66604),N=t.n(C),P=t(187185),T=t.n(P),A=(t(630998),t(478718),t(218721)),k=t.n(A),B=(t(493220),t(423570)),L=t.n(B),F=t(957557),D=t.n(F),I=t(747037),M=t.n(I),R=t(385564),z=t.n(R);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){J(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function J(e,n,t){return(n=function(e){var n=function(e,n){if("object"!==_(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===_(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function U(e){return function(e){if(Array.isArray(e))return q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||X(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,n){if(e){if("string"==typeof e)return q(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?q(e,n):void 0}}function q(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t(313311),t(406557);var H=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=O()(n,"childObject",n);return h()(r).filter((function(e){return"$"!==e&&"_"!==e&&"$ns"!==e})).reduce((function(n,o){return[].concat(U(n),U(z()(r[o].map((function(n){var r=O()(n,"$ns",{});return r.uri!==e||r.local!==t?[]:[{params:O()(n,"$",{}),charContent:O()(n,"_"),childObject:D()(n,"$","_","$ns")}]})))))}),[])},W=function(e,n,t){return E()(H(e,n,t))},V=function(e,n,t){return w()(O()(n,"params",{})).reduce((function(n,r){return n||r.local===t&&r.uri===e&&r.value}),void 0)},Y=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return w()(O()(e,"params",{})).reduce((function(e,n){var r=t.reduce((function(e,t){var r=M()(t)?{local:t,paramName:t,uri:""}:t,o=r.local,i=r.uri,a=r.paramName;return e||o===n.local&&i===n.uri&&a}),null);return r?G(G({},e),{},J({},r,n.value)):e}),{})},Z=function(e,n,t,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return z()([[[/\&/g,"&amp;"]],e?[]:[[/\"/g,"&quot;"]],n?[]:[[/\'/g,"&apos;"]],t?[]:[[/\>/g,"&gt;"]],r?[]:[[/\</g,"&lt;"]]]).reduce((function(e,n){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,u=[],l=!0,c=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(u.push(r.value),u.length!==n);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,r)||X(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];return e.replace(i,a)}),o)};function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function Q(e){return function(e){if(Array.isArray(e))return ne(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ee(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,n){if(e){if("string"==typeof e)return ne(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ne(e,n):void 0}}function ne(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function te(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?te(Object(t),!0).forEach((function(n){oe(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function oe(e,n,t){return(n=function(e){var n=function(e,n){if("object"!==K(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===K(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}Z.bind(null,!0,!0,!0,!1),Z.bind(null,!1,!1,!0,!1),t(624262),t(986267);var ie={maxExtent:[0,0,1e4,1e4],projection:"EPSG:900913",layerType:"wms"},ae={root:{ns:"http://www.opengis.net/context"},xsi:{ns:"http://www.w3.org/2001/XMLSchema-instance",prefix:"xsi"},xlink:{ns:"http://www.w3.org/1999/xlink",prefix:"xlink"},ol:{ns:"http://openlayers.org/context",prefix:"ol"},ms:{ns:"http://geo-solutions.it/mapstore/context",prefix:"ms"}},ue={group:"background",id:"empty_background",source:"ol",title:"Empty Background",type:"empty",visibility:!0},le=function(e){return"OGC:WMS"===e?"wms":ie.layerType},ce=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase();return"true"===e||"1"===e},se=function(e){return h()(e).filter((function(n){return void 0!==e[n]})).reduce((function(n,t){return re(re({},n),{},oe({},t,e[t]))}),{})},me=function(e){return!!(e&&e.minx&&e.miny&&e.maxx&&e.maxy)},fe=function(e){return!!(e&&me(e.bounds)&&e.crs)},pe=new DOMParser,ye={avi:"video/avi",gpx:"application/gpx+xml",kmz:"application/vnd.google-earth.kmz",kml:"application/vnd.google-earth.kml+xml",zip:"application/zip",json:"application/json",geojson:"application/json",wmc:"application/vnd.wmc"},de=function(e){return e.split(".").slice(-1)[0]},be=function(e,n,t){var r=new Blob([e],{type:t});o().saveAs(r,n)},ve=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"snapshot.png",t=arguments.length>2?arguments[2]:void 0;be(a()(e),n,t)},ge=function(e){return[].concat(l().parseZip(e))},he=function(e){var n=function(e){return[].slice.call(e.documentElement.getElementsByTagName("StyleMap")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("Style")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("LineStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("PointStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("PolyStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("IconStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("LabelStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("ListStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("BallonStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("styleUrl")).map((function(e){return e.parentNode.removeChild(e)})),e}(e);return[].concat(s().kml(n)).map((function(e){return d()({},e,{fileName:n.getElementsByTagName("name")[0].innerHTML})}))},xe=function(e,n){return[].concat(s().gpx(e)).map((function(t){return d()({},t,{fileName:e.getElementsByTagName("name")[0]&&e.getElementsByTagName("name")[0].innerHTML||n})}))},we=function(e){return new p.Promise((function(n,t){var r=new FileReader;r.onload=function(){n(r.result)},r.onerror=function(){t(r.error.name)},r.readAsArrayBuffer(e)}))},Se=function(e){return new p.Promise((function(n,t){var r=new FileReader;r.onload=function(){n(pe.parseFromString(r.result,"text/xml"))},r.onerror=function(){t(r.error.name)},r.readAsText(e)}))},Oe=function(e){return new p.Promise((function(n,t){var r=new FileReader;r.onload=function(){try{n(JSON.parse(r.result))}catch(e){t(e)}},r.onerror=function(){t(r.error.name)},r.readAsText(e)}))},je=function(e){var n=new(f());return new p.Promise((function(t,r){n.loadAsync(e).then((function(e){e.filter((function(e){return-1!==e.indexOf("kml")})).forEach((function(e){return e.async("string").then((function(e){t(pe.parseFromString(e,"text/xml"))})).catch((function(e){r(e.message)}))}))}))}))},Ee=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new p.Promise((function(t,r){var o=new FileReader;o.onload=function(){try{var e=JSON.parse(o.result);t({geoJSON:e,errors:(0,b.$)(e).filter((function(e){return n||"message"!==e.level}))})}catch(e){r(e)}},o.onerror=function(){r(o.error.name)},o.readAsText(e)}))},Ce=function(e){return new p.Promise((function(n,t){var r=new FileReader;r.onload=function(){(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=new v.Parser({explicitRoot:!1,xmlns:!0});return new Promise((function(r){t.parseString(e,(function(e,t){if(e)throw new Error("General XML parsing error");var o=W.bind(null,ae.root.ns),i=H.bind(null,ae.root.ns),a=W.bind(null,ae.ol.ns),u=W.bind(null,ae.ms.ns),l=H.bind(null,ae.ms.ns),c=V.bind(null,""),s=V.bind(null,ae.xlink.ns),m=function(e){var n,t=Y(e,"name","type"),r=t.name,o=t.type;switch(o){case"number":n=parseFloat(e.charContent);break;case"object":n=JSON.parse(e.charContent);break;case"boolean":n=ce(e.charContent);break;default:n=e.charContent}return{name:r,type:o,value:n}},f=o({root:[t]},"ViewContext"),p=o(f,"General"),y=o(f,"LayerList"),d=c(f,"version");if(!f||!d)throw new Error("Not a WMC file!");var b=O()(o(p,"Title"),"charContent"),v=o(p,"Extension"),g=a(v,"maxExtent"),h=o(p,"BoundingBox"),x=N()(g&&Y(g,"minx","miny","maxx","maxy")||Y(h,"minx","miny","maxx","maxy"),parseFloat),w=me(x)&&[x.minx,x.miny,x.maxx,x.maxy]||ie.maxExtent,S=c(h,"SRS")||ie.projection,j={bounds:N()(Y(h,"minx","miny","maxx","maxy"),parseFloat),crs:c(h,"SRS")},C=fe(j)?j:void 0,P=n?L()():void 0,A=i(y,"Layer").map((function(e){var n=o(e,"Extension"),t=o(e,"Server"),r=E()(i(o(e,"StyleList"),"Style").filter((function(e){return ce(c(e,"current"))}))),m=O()(a(n,"transparent"),"charContent"),f=O()(a(n,"opacity"),"charContent"),p={maxExtent:N()(Y(a(n,"maxExtent"),"minx","maxx","miny","maxy"),parseFloat),tileSize:N()(Y(a(n,"tileSize"),"width","height"),parseInt),transparent:m&&ce(m),isBaseLayer:ce(O()(a(n,"isBaseLayer"),"charContent")),singleTile:ce(O()(a(n,"singleTile"),"charContent")),opacity:f&&parseFloat(f)},y=u(n,"search"),d=l(u(n,"DimensionList"),"Dimension"),b=O()(u(n,"filter"),"charContent"),v={group:O()(u(n,"group"),"charContent"),search:y&&{url:s(y,"href"),type:c(y,"type")},dimensions:d.map((function(e){return{name:c(e,"name"),source:{type:c(e,"type"),url:s(e,"href")}}})),filter:b&&function(){try{return JSON.parse(b)}catch(e){return null}}()||void 0},g=i(o(e,"DimensionList"),"Dimension").map((function(e){return{name:c(e,"name"),units:c(e,"units"),unitSymbol:c(e,"unitSymbol"),default:c(e,"default"),values:O()(e,"charContent","").split(",")}})),h={id:L()(),visibility:!ce(c(e,"hidden")),type:le(c(t,"service")),url:s(o(t,"OnlineResource"),"href"),name:O()(o(e,"Name"),"charContent"),title:O()(o(e,"Title"),"charContent"),format:O()(E()(i(o(e,"FormatList"),"Format").filter((function(e){return ce(c(e,"current"))}))),"charContent"),style:O()(o(r,"Name"),"charContent"),singleTile:p.singleTile,queryable:ce(c(e,"queryable")),bbox:me(p.maxExtent)?{bounds:p.maxExtent,crs:S}:void 0,group:v.group||(p.isBaseLayer?"background":P),opacity:p.opacity,search:v.search,layerFilter:v.filter,dimensions:T()([].concat(Q(v.dimensions),Q(g)),(function(e,n){return e.name===n.name}))};return re(re({},se(h)),{},{params:se(h.params)})})),B=[].concat(Q(A.filter((function(e){return"background"===e.group}))),Q(A.filter((function(e){return"background"!==e.group})))),F=0===B.filter((function(e){return"background"===e.group&&e.visibility})).length?[ue].concat(Q(B)):B,D=u(v,"GroupList"),I=l(D,"Group").map((function(e){return{id:c(e,"id"),title:c(e,"title"),expanded:ce(c(e,"expanded"))}})),M=D&&I||[].concat(Q(F.filter((function(e){return!e.group||"Default"===e.group})).length>0?[{id:"Default",title:"Default",expanded:!0}]:[]),Q(n?[{id:P,title:b||P}]:[])),R=u(v,"center"),z=re(re({},N()(Y(R,"x","y"),parseFloat)),{},{crs:c(R,"crs")}),_=parseFloat(O()(u(v,"zoom"),"charContent")),$=u(v,"CatalogServices"),G=c($,"selectedService"),J=l($,"Service").map((function(e){return[c(e,"serviceName"),l(e,"Attribute")]})).reduce((function(e,n){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,u=[],l=!0,c=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(u.push(r.value),u.length!==n);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,r)||ee(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];return re(re({},e),{},oe({},i,a.map(m).reduce((function(e,n){var t=n.name,r=n.value;return re(re({},e),{},oe({},t,r))}),{})))}),{}),U={catalogServices:$&&{selectedService:G,services:J},map:{maxExtent:w,bbox:_?void 0:C,projection:S,backgrounds:[],groups:M,layers:F,center:k()(z,"x","y","crs")?z:void 0,zoom:_},version:2};r(U)}))}))})(r.result,!0).then((function(e){return n(e)})).catch((function(e){return t(e)}))},r.onerror=function(){t(r.error.name)},r.readAsText(e)}))},Ne=function(e){var n=new(f());return new p.Promise((function(t){n.loadAsync(e).then((function(e){var n=e.files,r=void 0===n?{}:n,o=Object.keys(r).filter((function(e){return!r[e].dir&&0!==e.indexOf("__MACOSX")&&e.indexOf(".shp")===e.length-4})).map((function(e){return e.slice(0,-4)})).reduce((function(e,n){return e.concat(!r["".concat(n,".prj")]&&n||[])}),[]);t(o)}))}))}},272810:()=>{},486799:()=>{}}]);