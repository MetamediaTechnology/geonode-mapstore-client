(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[45522],{471707:(t,e,n)=>{!function(t){"use strict";var e="CodeMirror-hint",n="CodeMirror-hint-active";function i(t,e){this.cm=t,this.options=e,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length;var n=this;t.on("cursorActivity",this.activityFunc=function(){n.cursorActivity()})}t.showHint=function(t,e,n){if(!e)return t.showHint(n);n&&n.async&&(e.async=!0);var i={hint:e};if(n)for(var o in n)i[o]=n[o];return t.showHint(i)},t.defineExtension("showHint",(function(e){e=function(t,e,n){var i=t.options.hintOptions,o={};for(var r in h)o[r]=h[r];if(i)for(var r in i)void 0!==i[r]&&(o[r]=i[r]);if(n)for(var r in n)void 0!==n[r]&&(o[r]=n[r]);return o.hint.resolve&&(o.hint=o.hint.resolve(t,e)),o}(this,this.getCursor("start"),e);var n=this.listSelections();if(!(n.length>1)){if(this.somethingSelected()){if(!e.hint.supportsSelection)return;for(var o=0;o<n.length;o++)if(n[o].head.line!=n[o].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var r=this.state.completionActive=new i(this,e);r.options.hint&&(t.signal(this,"startCompletion",this),r.update(!0))}}));var o=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},r=window.cancelAnimationFrame||clearTimeout;function s(t){return"string"==typeof t?t:t.text}function c(t,e){for(;e&&e!=t;){if("LI"===e.nodeName.toUpperCase()&&e.parentNode==t)return e;e=e.parentNode}}function l(i,o){this.completion=i,this.data=o,this.picked=!1;var r=this,l=i.cm,a=this.hints=document.createElement("ul");a.className="CodeMirror-hints",this.selectedHint=o.selectedHint||0;for(var h=o.list,u=0;u<h.length;++u){var f=a.appendChild(document.createElement("li")),d=h[u],p=e+(u!=this.selectedHint?"":" "+n);null!=d.className&&(p=d.className+" "+p),f.className=p,d.render?d.render(f,o,d):f.appendChild(document.createTextNode(d.displayText||s(d))),f.hintId=u}var g=l.cursorCoords(i.options.alignWithWord?o.from:null),m=g.left,v=g.bottom,y=!0;a.style.left=m+"px",a.style.top=v+"px";var w=window.innerWidth||Math.max(document.body.offsetWidth,document.documentElement.offsetWidth),x=window.innerHeight||Math.max(document.body.offsetHeight,document.documentElement.offsetHeight);(i.options.container||document.body).appendChild(a);var b=a.getBoundingClientRect(),k=b.bottom-x,C=a.scrollHeight>a.clientHeight+1,S=l.getScrollInfo();if(k>0){var T=b.bottom-b.top;if(g.top-(g.bottom-b.top)-T>0)a.style.top=(v=g.top-T)+"px",y=!1;else if(T>x){a.style.height=x-5+"px",a.style.top=(v=g.bottom-b.top)+"px";var O=l.getCursor();o.from.ch!=O.ch&&(g=l.cursorCoords(O),a.style.left=(m=g.left)+"px",b=a.getBoundingClientRect())}}var M,H=b.right-w;if(H>0&&(b.right-b.left>w&&(a.style.width=w-5+"px",H-=b.right-b.left-w),a.style.left=(m=g.left-H)+"px"),C)for(var L=a.firstChild;L;L=L.nextSibling)L.style.paddingRight=l.display.nativeBarWidth+"px";return l.addKeyMap(this.keyMap=function(t,e){var n={Up:function(){e.moveFocus(-1)},Down:function(){e.moveFocus(1)},PageUp:function(){e.moveFocus(1-e.menuSize(),!0)},PageDown:function(){e.moveFocus(e.menuSize()-1,!0)},Home:function(){e.setFocus(0)},End:function(){e.setFocus(e.length-1)},Enter:e.pick,Tab:e.pick,Esc:e.close},i=t.options.customKeys,o=i?{}:n;function r(t,i){var r;r="string"!=typeof i?function(t){return i(t,e)}:n.hasOwnProperty(i)?n[i]:i,o[t]=r}if(i)for(var s in i)i.hasOwnProperty(s)&&r(s,i[s]);var c=t.options.extraKeys;if(c)for(var s in c)c.hasOwnProperty(s)&&r(s,c[s]);return o}(i,{moveFocus:function(t,e){r.changeActive(r.selectedHint+t,e)},setFocus:function(t){r.changeActive(t)},menuSize:function(){return r.screenAmount()},length:h.length,close:function(){i.close()},pick:function(){r.pick()},data:o})),i.options.closeOnUnfocus&&(l.on("blur",this.onBlur=function(){M=setTimeout((function(){i.close()}),100)}),l.on("focus",this.onFocus=function(){clearTimeout(M)})),l.on("scroll",this.onScroll=function(){var t=l.getScrollInfo(),e=l.getWrapperElement().getBoundingClientRect(),n=v+S.top-t.top,o=n-(window.pageYOffset||(document.documentElement||document.body).scrollTop);if(y||(o+=a.offsetHeight),o<=e.top||o>=e.bottom)return i.close();a.style.top=n+"px",a.style.left=m+S.left-t.left+"px"}),t.on(a,"dblclick",(function(t){var e=c(a,t.target||t.srcElement);e&&null!=e.hintId&&(r.changeActive(e.hintId),r.pick())})),t.on(a,"click",(function(t){var e=c(a,t.target||t.srcElement);e&&null!=e.hintId&&(r.changeActive(e.hintId),i.options.completeOnSingleClick&&r.pick())})),t.on(a,"mousedown",(function(){setTimeout((function(){l.focus()}),20)})),t.signal(o,"select",h[0],a.firstChild),!0}function a(t,e,n,i){if(t.async)t(e,i,n);else{var o=t(e,n);o&&o.then?o.then(i):i(o)}}i.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&t.signal(this.data,"close"),this.widget&&this.widget.close(),t.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(e,n){var i=e.list[n];i.hint?i.hint(this.cm,e,i):this.cm.replaceRange(s(i),i.from||e.from,i.to||e.to,"complete"),t.signal(e,"pick",i),this.close()},cursorActivity:function(){this.debounce&&(r(this.debounce),this.debounce=0);var t=this.cm.getCursor(),e=this.cm.getLine(t.line);if(t.line!=this.startPos.line||e.length-t.ch!=this.startLen-this.startPos.ch||t.ch<this.startPos.ch||this.cm.somethingSelected()||t.ch&&this.options.closeCharacters.test(e.charAt(t.ch-1)))this.close();else{var n=this;this.debounce=o((function(){n.update()})),this.widget&&this.widget.disable()}},update:function(t){if(null!=this.tick){var e=this,n=++this.tick;a(this.options.hint,this.cm,this.options,(function(i){e.tick==n&&e.finishUpdate(i,t)}))}},finishUpdate:function(e,n){this.data&&t.signal(this.data,"update");var i,o,r=this.widget&&this.widget.picked||n&&this.options.completeSingle;this.widget&&this.widget.close(),e&&this.data&&(i=this.data,o=e,t.cmpPos(o.from,i.from)>0&&i.to.ch-i.from.ch!=o.to.ch-o.from.ch)||(this.data=e,e&&e.list.length&&(r&&1==e.list.length?this.pick(e,0):(this.widget=new l(this,e),t.signal(e,"shown"))))}},l.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var t=this.completion.cm;this.completion.options.closeOnUnfocus&&(t.off("blur",this.onBlur),t.off("focus",this.onFocus)),t.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var t=this;this.keyMap={Enter:function(){t.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(e,i){if(e>=this.data.list.length?e=i?this.data.list.length-1:0:e<0&&(e=i?0:this.data.list.length-1),this.selectedHint!=e){var o=this.hints.childNodes[this.selectedHint];o.className=o.className.replace(" "+n,""),(o=this.hints.childNodes[this.selectedHint=e]).className+=" "+n,o.offsetTop<this.hints.scrollTop?this.hints.scrollTop=o.offsetTop-3:o.offsetTop+o.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=o.offsetTop+o.offsetHeight-this.hints.clientHeight+3),t.signal(this.data,"select",this.data.list[this.selectedHint],o)}},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1}},t.registerHelper("hint","auto",{resolve:function(e,n){var i,o=e.getHelpers(n,"hint");if(o.length){var r=function(t,e,n){var i=function(t,e){if(!t.somethingSelected())return e;for(var n=[],i=0;i<e.length;i++)e[i].supportsSelection&&n.push(e[i]);return n}(t,o);!function o(r){if(r==i.length)return e(null);a(i[r],t,n,(function(t){t&&t.list.length>0?e(t):o(r+1)}))}(0)};return r.async=!0,r.supportsSelection=!0,r}return(i=e.getHelper(e.getCursor(),"hintWords"))?function(e){return t.hint.fromList(e,{words:i})}:t.hint.anyword?function(e,n){return t.hint.anyword(e,n)}:function(){}}}),t.registerHelper("hint","fromList",(function(e,n){var i=e.getCursor(),o=e.getTokenAt(i),r=t.Pos(i.line,o.end);if(o.string&&/\w/.test(o.string[o.string.length-1]))var s=o.string,c=t.Pos(i.line,o.start);else s="",c=r;for(var l=[],a=0;a<n.words.length;a++){var h=n.words[a];h.slice(0,s.length)==s&&l.push(h)}if(l.length)return{list:l,from:c,to:r}})),t.commands.autocomplete=t.showHint;var h={hint:t.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnUnfocus:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null};t.defineOption("hintOptions",null)}(n(304631))},232095:(t,e,n)=>{!function(t){"use strict";var e=t.Pos;function n(t,n,o,r){if(this.atOccurrence=!1,this.doc=t,null==r&&"string"==typeof n&&(r=!1),o=o?t.clipPos(o):e(0,0),this.pos={from:o,to:o},"string"!=typeof n)n.global||(n=new RegExp(n.source,n.ignoreCase?"ig":"g")),this.matches=function(i,o){if(i){n.lastIndex=0;for(var r=t.getLine(o.line).slice(0,o.ch),s=0;;){n.lastIndex=s;var c=n.exec(r);if(!c)break;if(a=(l=c).index,(s=l.index+(l[0].length||1))==r.length)break}(h=l&&l[0].length||0)||(0==a&&0==r.length?l=void 0:a!=t.getLine(o.line).length&&h++)}else{n.lastIndex=o.ch,r=t.getLine(o.line);var l,a,h=(l=n.exec(r))&&l[0].length||0;(a=l&&l.index)+h==r.length||h||(h=1)}if(l&&h)return{from:e(o.line,a),to:e(o.line,a+h),match:l}};else{var s=n;r&&(n=n.toLowerCase());var c=r?function(t){return t.toLowerCase()}:function(t){return t},l=n.split("\n");if(1==l.length)n.length?this.matches=function(o,r){if(o){var l=t.getLine(r.line).slice(0,r.ch);if((h=(a=c(l)).lastIndexOf(n))>-1)return h=i(l,a,h),{from:e(r.line,h),to:e(r.line,h+s.length)}}else{var a,h;if(l=t.getLine(r.line).slice(r.ch),(h=(a=c(l)).indexOf(n))>-1)return h=i(l,a,h)+r.ch,{from:e(r.line,h),to:e(r.line,h+s.length)}}}:this.matches=function(){};else{var a=s.split("\n");this.matches=function(n,i){var o,r=l.length-1;if(n){if(i.line-(l.length-1)<t.firstLine())return;if(c(t.getLine(i.line).slice(0,a[r].length))!=l[l.length-1])return;for(var s=e(i.line,a[r].length),h=i.line-1,u=r-1;u>=1;--u,--h)if(l[u]!=c(t.getLine(h)))return;var f=(o=t.getLine(h)).length-a[0].length;if(c(o.slice(f))!=l[0])return;return{from:e(h,f),to:s}}if(!(i.line+(l.length-1)>t.lastLine())&&(f=(o=t.getLine(i.line)).length-a[0].length,c(o.slice(f))==l[0])){var d=e(i.line,f);for(h=i.line+1,u=1;u<r;++u,++h)if(l[u]!=c(t.getLine(h)))return;if(c(t.getLine(h).slice(0,a[r].length))==l[r])return{from:d,to:e(h,a[r].length)}}}}}}function i(t,e,n){if(t.length==e.length)return n;for(var i=Math.min(n,t.length);;){var o=t.slice(0,i).toLowerCase().length;if(o<n)++i;else{if(!(o>n))return i;--i}}}n.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var n=this,i=this.doc.clipPos(t?this.pos.from:this.pos.to);function o(t){var i=e(t,0);return n.pos={from:i,to:i},n.atOccurrence=!1,!1}for(;;){if(this.pos=this.matches(t,i))return this.atOccurrence=!0,this.pos.match||!0;if(t){if(!i.line)return o(0);i=e(i.line-1,this.doc.getLine(i.line-1).length)}else{var r=this.doc.lineCount();if(i.line==r-1)return o(r);i=e(i.line+1,0)}}},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(n,i){if(this.atOccurrence){var o=t.splitLines(n);this.doc.replaceRange(o,this.pos.from,this.pos.to,i),this.pos.to=e(this.pos.from.line+o.length-1,o[o.length-1].length+(1==o.length?this.pos.from.ch:0))}}},t.defineExtension("getSearchCursor",(function(t,e,i){return new n(this.doc,t,e,i)})),t.defineDocExtension("getSearchCursor",(function(t,e,i){return new n(this,t,e,i)})),t.defineExtension("selectMatches",(function(e,n){for(var i=[],o=this.getSearchCursor(e,this.getCursor("from"),n);o.findNext()&&!(t.cmpPos(o.to(),this.getCursor("to"))>0);)i.push({anchor:o.from(),head:o.to()});i.length&&this.setSelections(i,0)}))}(n(304631))},164020:(t,e,n)=>{!function(t){"use strict";function e(t){t.operation((function(){!function(t){if(!t.somethingSelected())return c(t);if(t.listSelections().length>1)return l(t);var e=t.getCursor("start"),n=t.getCursor("end"),o=t.state.markedSelection;if(!o.length)return s(t,e,n);var a=o[0].find(),h=o[o.length-1].find();if(!a||!h||n.line-e.line<i||r(e,h.to)>=0||r(n,a.from)<=0)return l(t);for(;r(e,a.from)>0;)o.shift().clear(),a=o[0].find();for(r(e,a.from)<0&&(a.to.line-e.line<i?(o.shift().clear(),s(t,e,a.to,0)):s(t,e,a.from,0));r(n,h.to)<0;)o.pop().clear(),h=o[o.length-1].find();r(n,h.to)>0&&(n.line-h.from.line<i?(o.pop().clear(),s(t,h.from,n)):s(t,h.to,n))}(t)}))}function n(t){t.state.markedSelection.length&&t.operation((function(){c(t)}))}t.defineOption("styleSelectedText",!1,(function(i,o,r){var s=r&&r!=t.Init;o&&!s?(i.state.markedSelection=[],i.state.markedSelectionStyle="string"==typeof o?o:"CodeMirror-selectedtext",l(i),i.on("cursorActivity",e),i.on("change",n)):!o&&s&&(i.off("cursorActivity",e),i.off("change",n),c(i),i.state.markedSelection=i.state.markedSelectionStyle=null)}));var i=8,o=t.Pos,r=t.cmpPos;function s(t,e,n,s){if(0!=r(e,n))for(var c=t.state.markedSelection,l=t.state.markedSelectionStyle,a=e.line;;){var h=a==e.line?e:o(a,0),u=a+i,f=u>=n.line,d=f?n:o(u,0),p=t.markText(h,d,{className:l});if(null==s?c.push(p):c.splice(s++,0,p),f)break;a=u}}function c(t){for(var e=t.state.markedSelection,n=0;n<e.length;++n)e[n].clear();e.length=0}function l(t){c(t);for(var e=t.listSelections(),n=0;n<e.length;n++)s(t,e[n].from(),e[n].to())}}(n(304631))},140656:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var i=n(923645),o=n.n(i)()((function(t){return t[1]}));o.push([t.id,".msgapi .CodeMirror-hints {\n  position: absolute;\n  z-index: 10;\n  overflow: hidden;\n  list-style: none;\n\n  margin: 0;\n  padding: 2px;\n\n  -webkit-box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  -moz-box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  border-radius: 3px;\n  border: 1px solid silver;\n\n  background: white;\n  font-size: 90%;\n  font-family: monospace;\n\n  max-height: 20em;\n  overflow-y: auto;\n}\n\n.msgapi .CodeMirror-hint {\n  margin: 0;\n  padding: 0 4px;\n  border-radius: 2px;\n  white-space: pre;\n  color: black;\n  cursor: pointer;\n}\n\n.msgapi li.CodeMirror-hint-active {\n  background: #08f;\n  color: white;\n}\n",""]);const r=o},807654:(t,e,n)=>{var i=n(281763);t.exports=function(t){return i(t)&&t!=+t}},410240:(t,e,n)=>{var i=n(829750),o=n(880531),r=n(640554),s=n(479833);t.exports=function(t,e,n){return t=s(t),n=null==n?0:i(r(n),0,t.length),e=o(e),t.slice(n,n+e.length)==e}},93054:(t,e,n)=>{"use strict";e.__esModule=!0,e.default=function(t){if("function"!=typeof t)throw new TypeError("You must provide a valid moment object");var e="function"==typeof t().locale?"locale":"lang";if(!t.localeData)throw new TypeError("The Moment localizer depends on the `localeData` api, please provide a moment object v2.2.0 or higher");function n(n,i,o){return n?t(i,o)[e](n):t(i,o)}var i={formats:{date:"L",time:"LT",default:"lll",header:"MMMM YYYY",footer:"LL",weekday:"dd",dayOfMonth:"DD",month:"MMM",year:"YYYY",decade:function(e,n,i){return i.format(e,"YYYY",n)+" - "+i.format(function(e){return t(e).add(10,"year").add(-1,"millisecond").toDate()}(e),"YYYY",n)},century:function(e,n,i){return i.format(e,"YYYY",n)+" - "+i.format(function(e){return t(e).add(100,"year").add(-1,"millisecond").toDate()}(e),"YYYY",n)}},firstOfWeek:function(e){return t.localeData(e).firstDayOfWeek()},parse:function(t,e,i){if(!t)return null;var o=n(i,t,e);return o.isValid()?o.toDate():null},format:function(t,e,i){return n(i,t).format(e)}};return o.default.setDateLocalizer(i),i};var i,o=(i=n(577036))&&i.__esModule?i:{default:i};t.exports=e.default},828878:(t,e,n)=>{"use strict";var i,o={fromESObservable:((i=n(49977))&&i.__esModule?i:{default:i}).default.Observable.from,toESObservable:function(t){return t}};e.Z=o},21090:(t,e)=>{"use strict";var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};e.ZP=function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];i=e.debug;var f={initialState:e.initialState,initTypes:u(e.initTypes,["@@redux/INIT","@@INIT"]),limit:e.limit,filter:e.filter||function(){return!0},undoType:e.undoType||s.UNDO,redoType:e.redoType||s.REDO};return f.history=e.initialHistory||h(f.initialState),0===f.initTypes.length&&console.warn("redux-undo: supply at least one action type in initTypes to ensure initial state"),function(e,s){!function(t,e){if(i){var n=["action",t.type];console.group?(n.unshift("%credux-undo","font-style: italic"),console.groupCollapsed.apply(console,n),console.log("received",{state:e,action:t})):o.apply(void 0,n)}}(s,e);var u=void 0;switch(s.type){case f.undoType:return u=function(t){o("undo",{history:t});var e=t.past,n=t.present,i=t.future;return e.length<=0?t:{past:e.slice(0,e.length-1),present:e[e.length-1],future:[n].concat(i)}}(e),o("after undo",u),r(),u?a(e,u):e;case f.redoType:return u=function(t){o("redo",{history:t});var e=t.past,n=t.present,i=t.future;return i.length<=0?t:{future:i.slice(1,i.length),present:i[0],past:[].concat(e,[n])}}(e),o("after redo",u),r(),u?a(e,u):e;default:if(u=t(e&&e.present,s),f.initTypes.some((function(t){return t===s.type})))return o("reset history due to init action"),r(),l(n({},e,h(u)));if(f.filter&&"function"==typeof f.filter&&!f.filter(s,u,e&&e.present))return o("filter prevented action, not storing it"),r(),l(n({},e,{present:u}));var d=function(t,e,n){o("insert",{state:e,history:t,free:n-c(t)});var i=t.past,r=t.present,s=n&&c(t)>=n;return void 0===r?{past:[],present:e,future:[]}:{past:[].concat(i.slice(s?1:0),[r]),present:e,future:[]}}(e&&void 0!==e.present?e:f.history,u,f.limit);return o("after insert",{history:d,free:f.limit-c(d)}),r(),l(n({},e,d))}}};var i=void 0;function o(){if(i){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];console.group||e.unshift("%credux-undo","font-style: italic"),console.log.apply(console,e)}}function r(){if(i)return console.groupEnd&&console.groupEnd()}var s={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO"};function c(t){var e=t.past,n=t.future;return e.length+1+n.length}function l(t){return n({},t,{history:t})}function a(t,e){return l(n({},t,e))}function h(t){return{past:[],present:t,future:[]}}function u(t){var e=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return Array.isArray(t)?t:"string"==typeof t?[t]:e}e.MF=s},316179:(t,e,n)=>{"use strict";var i=n(893379),o=n.n(i),r=n(140656);o()(r.Z,{insert:"head",singleton:!1}),r.Z.locals}}]);