(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[30765],{39190:(t,e,i)=>{"use strict";i.r(e),i.d(e,{Feature:()=>m,LLayer:()=>d,LMap:()=>u,MeasurementSupport:()=>p,Overview:()=>f,ScaleBar:()=>l,default:()=>c});var n=i(130072),o=i(145697),s=i(790596),r=i(505904),a=i(722404),h=i(809056),m=n.Z,d=o.Z,u=s.Z,p=r.Z,f=a.Z,l=h.Z;const c={LLayer:d,LMap:u,MeasurementSupport:p,Overview:f,ScaleBar:l,Feature:m}},808797:(t,e,i)=>{"use strict";i.d(e,{rp:()=>h,Ov:()=>d,wd:()=>u,L0:()=>p}),i(701469);var n=i(91175),o=i.n(n),s=i(807654),r=i.n(s);function a(t){var e=Math.floor(t),i=60*(t-e),n=Math.floor(i),o=60*(i-n);return e+"° "+n+"' "+Math.floor(o)+"'' "}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.measureTrueBearing,n=void 0!==i&&i,o=e.fractionDigits,s=void 0===o?0:o,r="";if(n){var h="";t>=0&&t<10?h="00":t>10&&t<100&&(h="0");var m=s>0?t.toFixed(s):Math.floor(t);r=h+m+"°"}else t>=0&&t<90?r="N "+a(t)+"E":t>90&&t<=180?r="S "+a(180-t)+"E":t>180&&t<270?r="S "+a(t-180)+"W":t>=270&&t<=360&&(r="N "+a(360-t)+"W");return r}var m={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return m[e]&&m[e][i]?t*m[e][i]:t}var u=function(t){return!r()(parseFloat(t[0]))&&!r()(parseFloat(t[1]))},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.coordinates,i=t.type,n=e;if("LineString"===i){if((n=e.filter(u)).length<2)return[]}else if("Polygon"===i){if((n=o()(e).filter(u)).length<3)return[[]];n=[n.concat([o()(n)])]}return n}},23279:(t,e,i)=>{var n=i(513218),o=i(707771),s=i(14841),r=Math.max,a=Math.min;t.exports=function(t,e,i){var h,m,d,u,p,f,l=0,c=!1,g=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var i=h,n=m;return h=m=void 0,l=e,u=t.apply(n,i)}function T(t){return l=t,p=setTimeout(P,e),c?y(t):u}function E(t){var i=t-f;return void 0===f||i>=e||i<0||g&&t-l>=d}function P(){var t=o();if(E(t))return _(t);p=setTimeout(P,function(t){var i=e-(t-f);return g?a(i,d-(t-l)):i}(t))}function _(t){return p=void 0,v&&h?y(t):(h=m=void 0,u)}function x(){var t=o(),i=E(t);if(h=arguments,m=this,f=t,i){if(void 0===p)return T(f);if(g)return clearTimeout(p),p=setTimeout(P,e),y(f)}return void 0===p&&(p=setTimeout(P,e)),u}return e=s(e)||0,n(i)&&(c=!!i.leading,d=(g="maxWait"in i)?r(s(i.maxWait)||0,e):d,v="trailing"in i?!!i.trailing:v),x.cancel=function(){void 0!==p&&clearTimeout(p),l=0,h=f=m=p=void 0},x.flush=function(){return void 0===p?u:_(o())},x}},807654:(t,e,i)=>{var n=i(281763);t.exports=function(t){return n(t)&&t!=+t}},707771:(t,e,i)=>{var n=i(555639);t.exports=function(){return n.Date.now()}},823493:(t,e,i)=>{var n=i(23279),o=i(513218);t.exports=function(t,e,i){var s=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(i)&&(s="leading"in i?!!i.leading:s,r="trailing"in i?!!i.trailing:r),n(t,e,{leading:s,maxWait:e,trailing:r})}},193409:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var n=i(540188),o=i(558493),s=i(12868),r=i(267644),a=i(85386),h=i(613002),m=i(421915),d="element",u="map",p="offset",f="position",l="positioning";const c=function(t){function e(e){t.call(this),this.options=e,this.id=e.id,this.insertFirst=void 0===e.insertFirst||e.insertFirst,this.stopEvent=void 0===e.stopEvent||e.stopEvent,this.element=document.createElement("div"),this.element.className=void 0!==e.className?e.className:"ol-overlay-container "+r.$A,this.element.style.position="absolute",this.autoPan=void 0!==e.autoPan&&e.autoPan,this.autoPanAnimation=e.autoPanAnimation||{},this.autoPanMargin=void 0!==e.autoPanMargin?e.autoPanMargin:20,this.rendered={bottom_:"",left_:"",right_:"",top_:"",visible:!0},this.mapPostrenderListenerKey=null,(0,h.oL)(this,(0,o.v_)(d),this.handleElementChanged,this),(0,h.oL)(this,(0,o.v_)(u),this.handleMapChanged,this),(0,h.oL)(this,(0,o.v_)(p),this.handleOffsetChanged,this),(0,h.oL)(this,(0,o.v_)(f),this.handlePositionChanged,this),(0,h.oL)(this,(0,o.v_)(l),this.handlePositioningChanged,this),void 0!==e.element&&this.setElement(e.element),this.setOffset(void 0!==e.offset?e.offset:[0,0]),this.setPositioning(void 0!==e.positioning?e.positioning:s.Z.TOP_LEFT),void 0!==e.position&&this.setPosition(e.position)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getElement=function(){return this.get(d)},e.prototype.getId=function(){return this.id},e.prototype.getMap=function(){return this.get(u)},e.prototype.getOffset=function(){return this.get(p)},e.prototype.getPosition=function(){return this.get(f)},e.prototype.getPositioning=function(){return this.get(l)},e.prototype.handleElementChanged=function(){(0,a.ep)(this.element);var t=this.getElement();t&&this.element.appendChild(t)},e.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&((0,a.ZF)(this.element),(0,h.bN)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=(0,h.oL)(t,n.Z.POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element)}},e.prototype.render=function(){this.updatePixelPosition()},e.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},e.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.get(f)&&this.autoPan&&this.panIntoView()},e.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},e.prototype.setElement=function(t){this.set(d,t)},e.prototype.setMap=function(t){this.set(u,t)},e.prototype.setOffset=function(t){this.set(p,t)},e.prototype.setPosition=function(t){this.set(f,t)},e.prototype.panIntoView=function(){var t=this.getMap();if(t&&t.getTargetElement()){var e=this.getRect(t.getTargetElement(),t.getSize()),i=this.getElement(),n=this.getRect(i,[(0,a.iO)(i),(0,a.Pb)(i)]),o=this.autoPanMargin;if(!(0,m.r4)(e,n)){var s=n[0]-e[0],r=e[2]-n[2],h=n[1]-e[1],d=e[3]-n[3],u=[0,0];if(s<0?u[0]=s-o:r<0&&(u[0]=Math.abs(r)+o),h<0?u[1]=h-o:d<0&&(u[1]=Math.abs(d)+o),0!==u[0]||0!==u[1]){var p=t.getView().getCenter(),f=t.getPixelFromCoordinate(p),l=[f[0]+u[0],f[1]+u[1]];t.getView().animate({center:t.getCoordinateFromPixel(l),duration:this.autoPanAnimation.duration,easing:this.autoPanAnimation.easing})}}}},e.prototype.getRect=function(t,e){var i=t.getBoundingClientRect(),n=i.left+window.pageXOffset,o=i.top+window.pageYOffset;return[n,o,n+e[0],o+e[1]]},e.prototype.setPositioning=function(t){this.set(l,t)},e.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},e.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var i=t.getPixelFromCoordinate(e),n=t.getSize();this.updateRenderedPosition(i,n)}else this.setVisible(!1)},e.prototype.updateRenderedPosition=function(t,e){var i=this.element.style,n=this.getOffset(),o=this.getPositioning();this.setVisible(!0);var r=n[0],a=n[1];if(o==s.Z.BOTTOM_RIGHT||o==s.Z.CENTER_RIGHT||o==s.Z.TOP_RIGHT){""!==this.rendered.left_&&(this.rendered.left_=i.left="");var h=Math.round(e[0]-t[0]-r)+"px";this.rendered.right_!=h&&(this.rendered.right_=i.right=h)}else{""!==this.rendered.right_&&(this.rendered.right_=i.right=""),o!=s.Z.BOTTOM_CENTER&&o!=s.Z.CENTER_CENTER&&o!=s.Z.TOP_CENTER||(r-=this.element.offsetWidth/2);var m=Math.round(t[0]+r)+"px";this.rendered.left_!=m&&(this.rendered.left_=i.left=m)}if(o==s.Z.BOTTOM_LEFT||o==s.Z.BOTTOM_CENTER||o==s.Z.BOTTOM_RIGHT){""!==this.rendered.top_&&(this.rendered.top_=i.top="");var d=Math.round(e[1]-t[1]-a)+"px";this.rendered.bottom_!=d&&(this.rendered.bottom_=i.bottom=d)}else{""!==this.rendered.bottom_&&(this.rendered.bottom_=i.bottom=""),o!=s.Z.CENTER_LEFT&&o!=s.Z.CENTER_CENTER&&o!=s.Z.CENTER_RIGHT||(a-=this.element.offsetHeight/2);var u=Math.round(t[1]+a)+"px";this.rendered.top_!=u&&(this.rendered.top_=i.top=u)}},e.prototype.getOptions=function(){return this.options},e}(o.ZP)},12868:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"}},19473:(t,e,i)=>{"use strict";i.d(e,{T:()=>o,Z:()=>s});var n=function(t,e,i,n){this.minX=t,this.maxX=e,this.minY=i,this.maxY=n};function o(t,e,i,o,s){return void 0!==s?(s.minX=t,s.maxX=e,s.minY=i,s.maxY=o,s):new n(t,e,i,o)}n.prototype.contains=function(t){return this.containsXY(t[1],t[2])},n.prototype.containsTileRange=function(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY},n.prototype.containsXY=function(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY},n.prototype.equals=function(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY},n.prototype.extend=function(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)},n.prototype.getHeight=function(){return this.maxY-this.minY+1},n.prototype.getSize=function(){return[this.getWidth(),this.getHeight()]},n.prototype.getWidth=function(){return this.maxX-this.minX+1},n.prototype.intersects=function(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY};const s=n},859900:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4,ABORT:5}},435211:(t,e,i)=>{"use strict";i.d(e,{m:()=>n,j:()=>o});var n=.5,o=!0},450596:(t,e,i)=>{"use strict";function n(t,e,i){return void 0===i&&(i=[0,0]),i[0]=t[0]+2*e,i[1]=t[1]+2*e,i}function o(t){return t[0]>0&&t[1]>0}function s(t,e,i){return void 0===i&&(i=[0,0]),i[0]=t[0]*e+.5|0,i[1]=t[1]*e+.5|0,i}function r(t,e){return Array.isArray(t)?t:(void 0===e?e=[t,t]:e[0]=e[1]=t,e)}i.d(e,{f3:()=>n,py:()=>o,bA:()=>s,Pq:()=>r})},810508:(t,e,i)=>{"use strict";i.d(e,{e:()=>n,S:()=>o});var n=42,o=256}}]);