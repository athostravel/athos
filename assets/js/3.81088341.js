(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(t,e,n){var r=n(206)("wks"),o=n(207),i=n(171).Symbol,s="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=s&&i[t]||(s?i:o)("Symbol."+t))}).store=r},171:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},172:function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},173:function(t,e){t.exports={}},175:function(t,e,n){var r=n(179),o=n(187);t.exports=n(181)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},179:function(t,e,n){var r=n(180),o=n(228),i=n(229),s=Object.defineProperty;e.f=n(181)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},180:function(t,e,n){var r=n(186);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},181:function(t,e,n){t.exports=!n(200)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},182:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},185:function(t,e,n){var r=n(171),o=n(172),i=n(199),s=n(175),c=n(182),a=function(t,e,n){var u,l,f,h=t&a.F,p=t&a.G,v=t&a.S,m=t&a.P,d=t&a.B,g=t&a.W,w=p?o:o[e]||(o[e]={}),y=w.prototype,_=p?r:v?r[e]:(r[e]||{}).prototype;for(u in p&&(n=e),n)(l=!h&&_&&void 0!==_[u])&&c(w,u)||(f=l?_[u]:n[u],w[u]=p&&"function"!=typeof _[u]?n[u]:d&&l?i(f,r):g&&_[u]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):m&&"function"==typeof f?i(Function.call,f):f,m&&((w.virtual||(w.virtual={}))[u]=f,t&a.R&&y&&!y[u]&&s(y,u,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},186:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},187:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},188:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},189:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},190:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},191:function(t,e,n){var r=n(240),o=n(190);t.exports=function(t){return r(o(t))}},192:function(t,e,n){var r=n(206)("keys"),o=n(207);t.exports=function(t){return r[t]||(r[t]=o(t))}},199:function(t,e,n){var r=n(227);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},200:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},201:function(t,e,n){var r=n(186),o=n(171).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},202:function(t,e,n){"use strict";var r=n(233)(!0);n(203)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},203:function(t,e,n){"use strict";var r=n(204),o=n(185),i=n(234),s=n(175),c=n(173),a=n(235),u=n(209),l=n(244),f=n(167)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,v,m,d,g){a(n,e,v);var w,y,_,x=function(t){if(!h&&t in C)return C[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},b=e+" Iterator",T="values"==m,L=!1,C=t.prototype,S=C[f]||C["@@iterator"]||m&&C[m],A=S||x(m),O=m?T?x("entries"):A:void 0,M="Array"==e&&C.entries||S;if(M&&(_=l(M.call(new t)))!==Object.prototype&&_.next&&(u(_,b,!0),r||"function"==typeof _[f]||s(_,f,p)),T&&S&&"values"!==S.name&&(L=!0,A=function(){return S.call(this)}),r&&!g||!h&&!L&&C[f]||s(C,f,A),c[e]=A,c[b]=p,m)if(w={values:T?A:x("values"),keys:d?A:x("keys"),entries:O},g)for(y in w)y in C||i(C,y,w[y]);else o(o.P+o.F*(h||L),e,w);return w}},204:function(t,e){t.exports=!0},205:function(t,e,n){var r=n(189),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},206:function(t,e,n){var r=n(172),o=n(171),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(204)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},207:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},208:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},209:function(t,e,n){var r=n(179).f,o=n(182),i=n(167)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},210:function(t,e,n){var r=n(190);t.exports=function(t){return Object(r(t))}},211:function(t,e,n){var r=n(188),o=n(167)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},224:function(t,e,n){t.exports=n(225)},225:function(t,e,n){n(226),t.exports=n(172).Array.isArray},226:function(t,e,n){var r=n(185);r(r.S,"Array",{isArray:n(230)})},227:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},228:function(t,e,n){t.exports=!n(181)&&!n(200)((function(){return 7!=Object.defineProperty(n(201)("div"),"a",{get:function(){return 7}}).a}))},229:function(t,e,n){var r=n(186);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},230:function(t,e,n){var r=n(188);t.exports=Array.isArray||function(t){return"Array"==r(t)}},231:function(t,e,n){t.exports=n(232)},232:function(t,e,n){n(202),n(245),t.exports=n(172).Array.from},233:function(t,e,n){var r=n(189),o=n(190);t.exports=function(t){return function(e,n){var i,s,c=String(o(e)),a=r(n),u=c.length;return a<0||a>=u?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?t?c.charAt(a):i:t?c.slice(a,a+2):s-56320+(i-55296<<10)+65536}}},234:function(t,e,n){t.exports=n(175)},235:function(t,e,n){"use strict";var r=n(236),o=n(187),i=n(209),s={};n(175)(s,n(167)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(s,{next:o(1,n)}),i(t,e+" Iterator")}},236:function(t,e,n){var r=n(180),o=n(237),i=n(208),s=n(192)("IE_PROTO"),c=function(){},a=function(){var t,e=n(201)("iframe"),r=i.length;for(e.style.display="none",n(243).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[s]=t):n=a(),void 0===e?n:o(n,e)}},237:function(t,e,n){var r=n(179),o=n(180),i=n(238);t.exports=n(181)?Object.defineProperties:function(t,e){o(t);for(var n,s=i(e),c=s.length,a=0;c>a;)r.f(t,n=s[a++],e[n]);return t}},238:function(t,e,n){var r=n(239),o=n(208);t.exports=Object.keys||function(t){return r(t,o)}},239:function(t,e,n){var r=n(182),o=n(191),i=n(241)(!1),s=n(192)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,u=[];for(n in c)n!=s&&r(c,n)&&u.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(u,n)||u.push(n));return u}},240:function(t,e,n){var r=n(188);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},241:function(t,e,n){var r=n(191),o=n(205),i=n(242);t.exports=function(t){return function(e,n,s){var c,a=r(e),u=o(a.length),l=i(s,u);if(t&&n!=n){for(;u>l;)if((c=a[l++])!=c)return!0}else for(;u>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},242:function(t,e,n){var r=n(189),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},243:function(t,e,n){var r=n(171).document;t.exports=r&&r.documentElement},244:function(t,e,n){var r=n(182),o=n(210),i=n(192)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},245:function(t,e,n){"use strict";var r=n(199),o=n(185),i=n(210),s=n(246),c=n(247),a=n(205),u=n(248),l=n(249);o(o.S+o.F*!n(250)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,f,h=i(t),p="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,d=void 0!==m,g=0,w=l(h);if(d&&(m=r(m,v>2?arguments[2]:void 0,2)),null==w||p==Array&&c(w))for(n=new p(e=a(h.length));e>g;g++)u(n,g,d?m(h[g],g):h[g]);else for(f=w.call(h),n=new p;!(o=f.next()).done;g++)u(n,g,d?s(f,m,[o.value,g],!0):o.value);return n.length=g,n}})},246:function(t,e,n){var r=n(180);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},247:function(t,e,n){var r=n(173),o=n(167)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},248:function(t,e,n){"use strict";var r=n(179),o=n(187);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},249:function(t,e,n){var r=n(211),o=n(167)("iterator"),i=n(173);t.exports=n(172).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},250:function(t,e,n){var r=n(167)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],s=i[r]();s.next=function(){return{done:n=!0}},i[r]=function(){return s},t(i)}catch(t){}return n}},251:function(t,e,n){t.exports=n(252)},252:function(t,e,n){n(253),n(202),t.exports=n(257)},253:function(t,e,n){n(254);for(var r=n(171),o=n(175),i=n(173),s=n(167)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var u=c[a],l=r[u],f=l&&l.prototype;f&&!f[s]&&o(f,s,u),i[u]=i.Array}},254:function(t,e,n){"use strict";var r=n(255),o=n(256),i=n(173),s=n(191);t.exports=n(203)(Array,"Array",(function(t,e){this._t=s(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},255:function(t,e){t.exports=function(){}},256:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},257:function(t,e,n){var r=n(211),o=n(167)("iterator"),i=n(173);t.exports=n(172).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},282:function(t,e,n){},285:function(t,e,n){"use strict";var r=n(224),o=n.n(r);var i=n(231),s=n.n(i),c=n(251),a=n.n(c);function u(t){return function(t){if(o()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(a()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return u}))},397:function(t,e,n){"use strict";var r=n(282);n.n(r).a},406:function(t,e,n){"use strict";n.r(e);var r=n(285),o={data:function(){return{codeIsVisible:!1,demoIsFullscreen:!1,copied:!1,themeSelected:"Default",themeClass:"",showApplyBtn:!1,iconsTheme:"",fontsTheme:[],changedColor:!1}},computed:{globalTheme:function(){return this.$store.state.themes.currentTheme}},watch:{globalTheme:function(t,e){var n=this.$store.getters["themes/getThemeByName"](t);this.themeClass=n.class,this.themeSelected=t,this.showApplyBtn=!1,this.changeIconsTheme(n.icons),this.changeFontsTheme(n.fonts)}},mounted:function(){this.escapePress(),this.setGlobalTheme()},methods:{selectTheme:function(){var t=this.$store.getters["themes/getThemeByName"](this.themeSelected);this.themeClass=t.class,this.showApplyBtn=!0,this.changeIconsTheme(t.icons),this.changeFontsTheme(t.fonts)},selectGlobalTheme:function(){this.$store.commit("themes/selectTheme",this.themeSelected),this.showApplyBtn=!1},setGlobalTheme:function(){if(this.$store.state.themes.currentTheme){this.themeSelected=this.$store.state.themes.currentTheme;var t=this.$store.getters["themes/getThemeByName"](this.$store.state.themes.currentTheme);this.themeClass=t.class,this.changeIconsTheme(t.icons),this.changeFontsTheme(t.fonts)}else this.changeIconsTheme(this.$store.getters["themes/getThemeByName"]("Default").icons),this.changeFontsTheme(this.$store.getters["themes/getThemeByName"]("Default").fonts)},changeIconsTheme:function(t){this.iconsTheme=t,this.$emit("updateHead")},changeFontsTheme:function(t){this.fontsTheme=t,this.$emit("updateHead")},getFontsTheme:function(){return this.fontsTheme.map((function(t,e){return{rel:"stylesheet",href:t,id:"fontsThemes".concat(e)}}))},toggleCode:function(){this.codeIsVisible=!this.codeIsVisible},copyCode:function(){var t=this.$refs.codeSnippet;if(!window.getSelection)return console.warn("Could not select text in node: Unsupported browser.");var e=window.getSelection(),n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n),document.execCommand("copy"),e.removeAllRanges(),this.toggleCopied()},toggleDemo:function(){this.demoIsFullscreen=!this.demoIsFullscreen,this.$store.commit("overlay/toggleOverlay",this.demoIsFullscreen)},toggleCopied:function(){var t=this;this.copied=!this.copied,setTimeout((function(){t.copied=!t.copied}),1e3)},escapePress:function(){var t=this;document.addEventListener("keydown",(function(e){return 27===e.keyCode&&t.demoIsFullscreen&&t.toggleDemo()}))},toggleColor:function(){this.changedColor?this.$el.style.setProperty("--bg-color","transparent"):this.$el.style.setProperty("--bg-color","#383838"),this.changedColor=!this.changedColor}},metaInfo:function(){return{link:[{rel:"stylesheet",href:this.iconsTheme,id:"iconsThemes"}].concat(Object(r.a)(this.getFontsTheme()))}}},i=(n(397),n(0)),s=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview"},[n("div",{staticClass:"preview__actions"},[t.$store.state.themes.themes.length?n("div",{staticClass:"preview__theme-box"},[n("div",{staticClass:"preview__theme"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.themeSelected,expression:"themeSelected"}],staticClass:"preview__theme-select",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.themeSelected=e.target.multiple?n:n[0]},t.selectTheme]}},t._l(t.$store.state.themes.themes,(function(e){return n("option",{key:e.name,domProps:{value:e.name}},[t._v("\n                        "+t._s(e.name)+"\n                    ")])})),0),t._v(" "),n("span",{staticClass:"preview__theme-arrow"}),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.showApplyBtn,expression:"showApplyBtn"}],staticClass:"preview__theme-btn",on:{click:function(e){return e.preventDefault(),t.selectGlobalTheme(e)}}},[n("svg",{staticClass:"preview__theme-btn-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"18",viewBox:"0 0 19 18"}},[n("path",{attrs:{fill:"currentColor",d:"M14.9142136,8.33333333 L21.9142136,8.33333333 L21.9142136,10.3333333 L14.9142136,10.3333333 L14.9142136,8.33333333 Z M9.91421356,3 L11.9142136,3 L11.9142136,21 L9.91421356,21 L9.91421356,3 Z M14.9142136,3 L21.9142136,3 L21.9142136,5 L14.9142136,5 L14.9142136,3 Z M5.12132034,12.0355339 L3,9.91421356 L4.41421356,8.5 L6.53553391,10.6213203 L7.94974747,12.0355339 L4.41421356,15.5710678 L3,14.1568542 L5.12132034,12.0355339 Z M14.9142136,13.6666667 L21.9142136,13.6666667 L21.9142136,15.6666667 L14.9142136,15.6666667 L14.9142136,13.6666667 Z M14.9142136,19 L21.9142136,19 L21.9142136,21 L14.9142136,21 L14.9142136,19 Z",transform:"translate(-3 -3)"}})]),t._v(" "),n("span",{staticClass:"preview__theme-btn-text"},[t._v("Aplicar a todo")])])])]):t._e(),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.codeIsVisible,expression:"codeIsVisible"}],staticClass:"preview__action",on:{click:function(e){return e.preventDefault(),t.copyCode(e)}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.copied,expression:"copied"}],staticClass:"preview__copied"},[t._v("\n                Copied to Clipboard!\n            ")]),t._v(" "),n("svg",{directives:[{name:"show",rawName:"v-show",value:!t.copied,expression:"!copied"}],attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),t._v(" "),n("path",{attrs:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}})])]),t._v(" "),t.$slots.default?n("button",{staticClass:"preview__action",class:{"is-active":t.codeIsVisible},on:{click:function(e){return e.preventDefault(),t.toggleCode(e)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),t._v(" "),n("path",{attrs:{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}})])]):t._e(),t._v(" "),n("button",{staticClass:"preview__action",class:{"is-active":t.changedColor},on:{click:function(e){return e.preventDefault(),t.toggleColor(e)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M24 0H0v24h24z",fill:"none"}}),t._v(" "),n("path",{attrs:{d:"M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"}})])]),t._v(" "),n("button",{staticClass:"preview__action",on:{click:function(e){return e.preventDefault(),t.toggleDemo(e)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("path",{attrs:{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}})])])]),t._v(" "),n("div",{staticClass:"preview__inner"},[n("div",{staticClass:"preview__demo",class:[{"is-active":t.demoIsFullscreen},t.themeClass]},[t._t("demo"),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.demoIsFullscreen,expression:"demoIsFullscreen"}],staticClass:"preview__action preview__action--close",on:{click:function(e){return e.preventDefault(),t.toggleDemo(e)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("path",{attrs:{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"}})])])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.codeIsVisible,expression:"codeIsVisible"}],ref:"codeSnippet",staticClass:"preview__code"},[t._t("default")],2)])])}),[],!1,null,"ecd2bb22",null);e.default=s.exports}}]);