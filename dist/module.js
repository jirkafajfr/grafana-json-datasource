/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/data","@grafana/runtime","emotion","lodash"],(function(__WEBPACK_EXTERNAL_MODULE__0__,__WEBPACK_EXTERNAL_MODULE__1__,__WEBPACK_EXTERNAL_MODULE__2__,__WEBPACK_EXTERNAL_MODULE__8__,__WEBPACK_EXTERNAL_MODULE__9__,__WEBPACK_EXTERNAL_MODULE__20__){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=56)}([function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE__0__},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE__1__},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE__2__},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,r){"use strict";(function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,e,r){return(u=i()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&a(o,r.prototype),o}).apply(null,arguments)}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return u(t,arguments,o(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,t)})(t)}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}r.d(e,"a",(function(){return b}));var s=eval,f=["value","path","pointer","parent","parentProperty","all"],p=Object.prototype.hasOwnProperty,h=function(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(t){return!1}}()?r(23):{runInNewContext:function(t,e){var r=Object.keys(e),n=[];!function(t,e,r){for(var n=t.length,o=0;o<n;o++){r(t[o])&&e.push(t.splice(o--,1)[0])}}(r,n,(function(t){return"function"==typeof e[t]}));var o=n.reduce((function(t,r){var n=e[r].toString();return/function/.exec(n)||(n="function "+n),"var "+r+"="+n+";"+t}),"")+r.reduce((function(t,r){return"var "+r+"="+JSON.stringify(e[r]).replace(/\u2028|\u2029/g,(function(t){return"\\u202"+("\u2028"===t?"8":"9")}))+";"+t}),t);return s(o)}};function y(t,e){return(t=t.slice()).push(e),t}function v(t,e){return(e=e.slice()).unshift(t),e}var d=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=l(this,o(e).call(this,'JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'))).avoidNew=!0,r.value=t,r.name="NewError",r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,t),e}(c(Error));function b(t,e,r,o,a){if(!(this instanceof b))try{return new b(t,e,r,o,a)}catch(t){if(!t.avoidNew)throw t;return t.value}"string"==typeof t&&(a=o,o=r,r=e,e=t,t={}),t=t||{};var i=p.call(t,"json")&&p.call(t,"path");if(this.json=t.json||r,this.path=t.path||e,this.resultType=t.resultType&&t.resultType.toLowerCase()||"value",this.flatten=t.flatten||!1,this.wrap=!p.call(t,"wrap")||t.wrap,this.sandbox=t.sandbox||{},this.preventEval=t.preventEval||!1,this.parent=t.parent||null,this.parentProperty=t.parentProperty||null,this.callback=t.callback||o||null,this.otherTypeCallback=t.otherTypeCallback||a||function(){throw new Error("You must supply an otherTypeCallback callback option with the @other() operator.")},!1!==t.autostart){var u=this.evaluate({path:i?t.path:e,json:i?t.json:r});if(!u||"object"!==n(u))throw new d(u);return u}}b.prototype.evaluate=function(t,e,r,o){var a=this,i=this.parent,u=this.parentProperty,c=this.flatten,l=this.wrap;if(this.currResultType=this.resultType,this.currPreventEval=this.preventEval,this.currSandbox=this.sandbox,r=r||this.callback,this.currOtherTypeCallback=o||this.otherTypeCallback,e=e||this.json,(t=t||this.path)&&"object"===n(t)){if(!t.path)throw new Error('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');e=p.call(t,"json")?t.json:e,c=p.call(t,"flatten")?t.flatten:c,this.currResultType=p.call(t,"resultType")?t.resultType:this.currResultType,this.currSandbox=p.call(t,"sandbox")?t.sandbox:this.currSandbox,l=p.call(t,"wrap")?t.wrap:l,this.currPreventEval=p.call(t,"preventEval")?t.preventEval:this.currPreventEval,r=p.call(t,"callback")?t.callback:r,this.currOtherTypeCallback=p.call(t,"otherTypeCallback")?t.otherTypeCallback:this.currOtherTypeCallback,i=p.call(t,"parent")?t.parent:i,u=p.call(t,"parentProperty")?t.parentProperty:u,t=t.path}if(i=i||null,u=u||null,Array.isArray(t)&&(t=b.toPathString(t)),t&&e&&f.includes(this.currResultType)){this._obj=e;var s=b.toPathArray(t);"$"===s[0]&&s.length>1&&s.shift(),this._hasParentSelector=null;var h=this._trace(s,e,["$"],i,u,r).filter((function(t){return t&&!t.isParentSelector}));return h.length?1!==h.length||l||Array.isArray(h[0].value)?h.reduce((function(t,e){var r=a._getPreferredOutput(e);return c&&Array.isArray(r)?t=t.concat(r):t.push(r),t}),[]):this._getPreferredOutput(h[0]):l?[]:void 0}},b.prototype._getPreferredOutput=function(t){var e=this.currResultType;switch(e){default:throw new TypeError("Unknown result type");case"all":return t.pointer=b.toPointer(t.path),t.path="string"==typeof t.path?t.path:b.toPathString(t.path),t;case"value":case"parent":case"parentProperty":return t[e];case"path":return b.toPathString(t[e]);case"pointer":return b.toPointer(t.path)}},b.prototype._handleCallback=function(t,e,r){if(e){var n=this._getPreferredOutput(t);t.path="string"==typeof t.path?t.path:b.toPathString(t.path),e(n,r,t)}},b.prototype._trace=function(t,e,r,o,a,i,u){var c,l=this;if(!t.length)return c={path:r,value:e,parent:o,parentProperty:a},this._handleCallback(c,i,"value"),c;var s=t[0],f=t.slice(1),h=[];function d(t){Array.isArray(t)?t.forEach((function(t){h.push(t)})):h.push(t)}if(("string"!=typeof s||u)&&e&&p.call(e,s))d(this._trace(f,e[s],y(r,s),e,s,i));else if("*"===s)this._walk(s,f,e,r,o,a,i,(function(t,e,r,n,o,a,i,u){d(l._trace(v(t,r),n,o,a,i,u,!0))}));else if(".."===s)d(this._trace(f,e,r,o,a,i)),this._walk(s,f,e,r,o,a,i,(function(t,e,r,o,a,i,u,c){"object"===n(o[t])&&d(l._trace(v(e,r),o[t],y(a,t),o,t,c))}));else{if("^"===s)return this._hasParentSelector=!0,r.length?{path:r.slice(0,-1),expr:f,isParentSelector:!0}:[];if("~"===s)return c={path:y(r,s),value:a,parent:o,parentProperty:null},this._handleCallback(c,i,"property"),c;if("$"===s)d(this._trace(f,e,r,null,null,i));else if(/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(s))d(this._slice(s,f,e,r,o,a,i));else if(0===s.indexOf("?(")){if(this.currPreventEval)throw new Error("Eval [?(expr)] prevented in JSONPath expression.");this._walk(s,f,e,r,o,a,i,(function(t,e,r,n,o,a,i,u){l._eval(e.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/,"$1"),n[t],t,o,a,i)&&d(l._trace(v(t,r),n,o,a,i,u))}))}else if("("===s[0]){if(this.currPreventEval)throw new Error("Eval [(expr)] prevented in JSONPath expression.");d(this._trace(v(this._eval(s,e,r[r.length-1],r.slice(0,-1),o,a),f),e,r,o,a,i))}else if("@"===s[0]){var b=!1,m=s.slice(1,-2);switch(m){default:throw new TypeError("Unknown value type "+m);case"scalar":e&&["object","function"].includes(n(e))||(b=!0);break;case"boolean":case"string":case"undefined":case"function":n(e)===m&&(b=!0);break;case"number":n(e)===m&&isFinite(e)&&(b=!0);break;case"nonFinite":"number"!=typeof e||isFinite(e)||(b=!0);break;case"object":e&&n(e)===m&&(b=!0);break;case"array":Array.isArray(e)&&(b=!0);break;case"other":b=this.currOtherTypeCallback(e,r,o,a);break;case"integer":e!==Number(e)||!isFinite(e)||e%1||(b=!0);break;case"null":null===e&&(b=!0)}if(b)return c={path:r,value:e,parent:o,parentProperty:a},this._handleCallback(c,i,"value"),c}else if("`"===s[0]&&e&&p.call(e,s.slice(1))){var g=s.slice(1);d(this._trace(f,e[g],y(r,g),e,g,i,!0))}else if(s.includes(",")){var _=s.split(","),F=!0,x=!1,E=void 0;try{for(var w,j=_[Symbol.iterator]();!(F=(w=j.next()).done);F=!0){var D=w.value;d(this._trace(v(D,f),e,r,o,a,i))}}catch(t){x=!0,E=t}finally{try{F||null==j.return||j.return()}finally{if(x)throw E}}}else!u&&e&&p.call(e,s)&&d(this._trace(f,e[s],y(r,s),e,s,i,!0))}if(this._hasParentSelector)for(var O=0;O<h.length;O++){var P=h[O];if(P.isParentSelector){var S=l._trace(P.expr,e,P.path,o,a,i);if(Array.isArray(S)){h[O]=S[0];for(var C=S.length,N=1;N<C;N++)O++,h.splice(O,0,S[N])}else h[O]=S}}return h},b.prototype._walk=function(t,e,r,o,a,i,u,c){if(Array.isArray(r))for(var l=r.length,s=0;s<l;s++)c(s,t,e,r,o,a,i,u);else if("object"===n(r))for(var f in r)p.call(r,f)&&c(f,t,e,r,o,a,i,u)},b.prototype._slice=function(t,e,r,n,o,a,i){if(Array.isArray(r)){var u=r.length,c=t.split(":"),l=c[2]&&parseInt(c[2])||1,s=c[0]&&parseInt(c[0])||0,f=c[1]&&parseInt(c[1])||u;s=s<0?Math.max(0,s+u):Math.min(u,s),f=f<0?Math.max(0,f+u):Math.min(u,f);for(var p=[],h=s;h<f;h+=l){var y=this._trace(v(h,e),r,n,o,a,i);Array.isArray(y)?y.forEach((function(t){p.push(t)})):p.push(y)}return p}},b.prototype._eval=function(t,e,r,n,o,a){if(!this._obj||!e)return!1;t.includes("@parentProperty")&&(this.currSandbox._$_parentProperty=a,t=t.replace(/@parentProperty/g,"_$_parentProperty")),t.includes("@parent")&&(this.currSandbox._$_parent=o,t=t.replace(/@parent/g,"_$_parent")),t.includes("@property")&&(this.currSandbox._$_property=r,t=t.replace(/@property/g,"_$_property")),t.includes("@path")&&(this.currSandbox._$_path=b.toPathString(n.concat([r])),t=t.replace(/@path/g,"_$_path")),t.match(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/)&&(this.currSandbox._$_v=e,t=t.replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g,"_$_v$1"));try{return h.runInNewContext(t,this.currSandbox)}catch(e){throw console.log(e),new Error("jsonPath: "+e.message+": "+t)}},b.cache={},b.toPathString=function(t){for(var e=t,r=e.length,n="$",o=1;o<r;o++)/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(e[o])||(n+=/^[\*0-9]+$/.test(e[o])?"["+e[o]+"]":"['"+e[o]+"']");return n},b.toPointer=function(t){for(var e=t,r=e.length,n="",o=1;o<r;o++)/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(e[o])||(n+="/"+e[o].toString().replace(/~/g,"~0").replace(/\//g,"~1"));return n},b.toPathArray=function(t){var e=b.cache;if(e[t])return e[t].concat();var r=[],n=t.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g,";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g,(function(t,e){return"[#"+(r.push(e)-1)+"]"})).replace(/\['((?:[\0-&\(-\\\^-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)'\]/g,(function(t,e){return"['"+e.replace(/\./g,"%@%").replace(/~/g,"%%@@%%")+"']"})).replace(/~/g,";~;").replace(/'?\.'?(?!(?:[\0-Z\\-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*\])|\['?/g,";").replace(/%@%/g,".").replace(/%%@@%%/g,"~").replace(/(?:;)?(\^+)(?:;)?/g,(function(t,e){return";"+e.split("").join(";")+";"})).replace(/;;;|;;/g,";..;").replace(/;$|'?\]|'$/g,"").split(";").map((function(t){var e=t.match(/#([0-9]+)/);return e&&e[1]?r[e[1]]:t}));return e[t]=n,e[t]}}).call(this,r(10))},function(t,e,r){var n=r(13),o=r(33),a=r(34),i=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},function(t,e,r){var n=r(14),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();t.exports=a},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE__8__},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE__9__},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){t.exports=function(t){return t}},function(t,e,r){var n=r(5),o=r(3);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,r){var n=r(6).Symbol;t.exports=n},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(10))},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var n=r(12),o=r(17);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE__20__},function(t,e,r){"use strict";function n(){var t=Object.create(null),e=0,r=0,n=0,o=!1;function a(e){n--,delete t[e]}this.put=function(e,r,i,u){if(o&&console.log("caching: %s = %j (@%s)",e,r,i),void 0!==i&&("number"!=typeof i||isNaN(i)||i<=0))throw new Error("Cache timeout must be a positive number");if(void 0!==u&&"function"!=typeof u)throw new Error("Cache timeout callback must be a function");var c=t[e];c?clearTimeout(c.timeout):n++;var l={value:r,expire:i+Date.now()};return isNaN(l.expire)||(l.timeout=setTimeout(function(){a(e),u&&u(e,r)}.bind(this),i)),t[e]=l,r},this.del=function(e){var r=!0,n=t[e];return n?(clearTimeout(n.timeout),!isNaN(n.expire)&&n.expire<Date.now()&&(r=!1)):r=!1,r&&a(e),r},this.clear=function(){for(var a in t)clearTimeout(t[a].timeout);n=0,t=Object.create(null),o&&(e=0,r=0)},this.get=function(a){var i=t[a];if(void 0!==i){if(isNaN(i.expire)||i.expire>=Date.now())return o&&e++,i.value;o&&r++,n--,delete t[a]}else o&&r++;return null},this.size=function(){return n},this.memsize=function(){var e,r=0;for(e in t)r++;return r},this.debug=function(t){o=t},this.hits=function(){return e},this.misses=function(){return r},this.keys=function(){return Object.keys(t)},this.exportJson=function(){var e={};for(var r in t){var n=t[r];e[r]={value:n.value,expire:n.expire||"NaN"}}return JSON.stringify(e)},this.importJson=function(e,r){var n=JSON.parse(e),a=Date.now(),i=r&&r.skipDuplicates;for(var u in n)if(n.hasOwnProperty(u)){if(i)if(t[u]){o&&console.log("Skipping duplicate imported key '%s'",u);continue}var c=n[u],l=c.expire-a;if(l<=0){this.del(u);continue}l=l>0?l:void 0,this.put(u,c.value,l)}return this.size()}}t.exports=new n,t.exports.Cache=n},function(t,e,r){var n=r(24),o=r(15),a=r(40),i=r(41),u=Object.prototype,c=u.hasOwnProperty,l=n((function(t,e){t=Object(t);var r=-1,n=e.length,l=n>2?e[2]:void 0;for(l&&a(e[0],e[1],l)&&(n=1);++r<n;)for(var s=e[r],f=i(s),p=-1,h=f.length;++p<h;){var y=f[p],v=t[y];(void 0===v||o(v,u[y])&&!c.call(t,y))&&(t[y]=s[y])}return t}));t.exports=l},function(module,exports){var indexOf=function(t,e){if(t.indexOf)return t.indexOf(e);for(var r=0;r<t.length;r++)if(t[r]===e)return r;return-1},Object_keys=function(t){if(Object.keys)return Object.keys(t);var e=[];for(var r in t)e.push(r);return e},forEach=function(t,e){if(t.forEach)return t.forEach(e);for(var r=0;r<t.length;r++)e(t[r],r,t)},defineProp=function(){try{return Object.defineProperty({},"_",{}),function(t,e,r){Object.defineProperty(t,e,{writable:!0,enumerable:!1,configurable:!0,value:r})}}catch(t){return function(t,e,r){t[e]=r}}}(),globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];function Context(){}Context.prototype={};var Script=exports.Script=function(t){if(!(this instanceof Script))return new Script(t);this.code=t};Script.prototype.runInContext=function(t){if(!(t instanceof Context))throw new TypeError("needs a 'context' argument.");var e=document.createElement("iframe");e.style||(e.style={}),e.style.display="none",document.body.appendChild(e);var r=e.contentWindow,n=r.eval,o=r.execScript;!n&&o&&(o.call(r,"null"),n=r.eval),forEach(Object_keys(t),(function(e){r[e]=t[e]})),forEach(globals,(function(e){t[e]&&(r[e]=t[e])}));var a=Object_keys(r),i=n.call(r,this.code);return forEach(Object_keys(r),(function(e){(e in t||-1===indexOf(a,e))&&(t[e]=r[e])})),forEach(globals,(function(e){e in t||defineProp(t,e,r[e])})),document.body.removeChild(e),i},Script.prototype.runInThisContext=function(){return eval(this.code)},Script.prototype.runInNewContext=function(t){var e=Script.createContext(t),r=this.runInContext(e);return t&&forEach(Object_keys(e),(function(r){t[r]=e[r]})),r},forEach(Object_keys(Script.prototype),(function(t){exports[t]=Script[t]=function(e){var r=Script(e);return r[t].apply(r,[].slice.call(arguments,1))}})),exports.isContext=function(t){return t instanceof Context},exports.createScript=function(t){return exports.Script(t)},exports.createContext=Script.createContext=function(t){var e=new Context;return"object"==typeof t&&forEach(Object_keys(t),(function(r){e[r]=t[r]})),e}},function(t,e,r){var n=r(11),o=r(25),a=r(27);t.exports=function(t,e){return a(o(t,e,n),t+"")}},function(t,e,r){var n=r(26),o=Math.max;t.exports=function(t,e,r){return e=o(void 0===e?t.length-1:e,0),function(){for(var a=arguments,i=-1,u=o(a.length-e,0),c=Array(u);++i<u;)c[i]=a[e+i];i=-1;for(var l=Array(e+1);++i<e;)l[i]=a[i];return l[e]=r(c),n(t,this,l)}}},function(t,e){t.exports=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}},function(t,e,r){var n=r(28),o=r(39)(n);t.exports=o},function(t,e,r){var n=r(29),o=r(30),a=r(11),i=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:n(e),writable:!0})}:a;t.exports=i},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e,r){var n=r(31),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,r){var n=r(32),o=r(38);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},function(t,e,r){var n=r(12),o=r(35),a=r(3),i=r(37),u=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,s=c.toString,f=l.hasOwnProperty,p=RegExp("^"+s.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(n(t)?p:u).test(i(t))}},function(t,e,r){var n=r(13),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=n?n.toStringTag:void 0;t.exports=function(t){var e=a.call(t,u),r=t[u];try{t[u]=void 0;var n=!0}catch(t){}var o=i.call(t);return n&&(e?t[u]=r:delete t[u]),o}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e,r){var n,o=r(36),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!a&&a in t}},function(t,e,r){var n=r(6)["__core-js_shared__"];t.exports=n},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e){var r=Date.now;t.exports=function(t){var e=0,n=0;return function(){var o=r(),a=16-(o-n);if(n=o,a>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e,r){var n=r(15),o=r(16),a=r(18),i=r(3);t.exports=function(t,e,r){if(!i(r))return!1;var u=typeof e;return!!("number"==u?o(r)&&a(e,r.length):"string"==u&&e in r)&&n(r[e],t)}},function(t,e,r){var n=r(42),o=r(53),a=r(16);t.exports=function(t){return a(t)?n(t,!0):o(t)}},function(t,e,r){var n=r(43),o=r(44),a=r(46),i=r(47),u=r(18),c=r(49),l=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=a(t),s=!r&&o(t),f=!r&&!s&&i(t),p=!r&&!s&&!f&&c(t),h=r||s||f||p,y=h?n(t.length,String):[],v=y.length;for(var d in t)!e&&!l.call(t,d)||h&&("length"==d||f&&("offset"==d||"parent"==d)||p&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||u(d,v))||y.push(d);return y}},function(t,e){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},function(t,e,r){var n=r(45),o=r(7),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(t){return o(t)&&i.call(t,"callee")&&!u.call(t,"callee")};t.exports=c},function(t,e,r){var n=r(5),o=r(7);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){(function(t){var n=r(6),o=r(48),a=e&&!e.nodeType&&e,i=a&&"object"==typeof t&&t&&!t.nodeType&&t,u=i&&i.exports===a?n.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;t.exports=c}).call(this,r(19)(t))},function(t,e){t.exports=function(){return!1}},function(t,e,r){var n=r(50),o=r(51),a=r(52),i=a&&a.isTypedArray,u=i?o(i):n;t.exports=u},function(t,e,r){var n=r(5),o=r(17),a=r(7),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!i[n(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,r){(function(t){var n=r(14),o=e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===o&&n.process,u=function(){try{var t=a&&a.require&&a.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=u}).call(this,r(19)(t))},function(t,e,r){var n=r(3),o=r(54),a=r(55),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return a(t);var e=o(t),r=[];for(var u in t)("constructor"!=u||!e&&i.call(t,u))&&r.push(u);return r}},function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},function(t,e,r){"use strict";r.r(e);var n=r(2),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};var a=function(){return(a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function i(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{c(n.next(t))}catch(t){a(t)}}function u(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,u)}c((n=n.apply(t,e||[])).next())}))}function u(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function c(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,a=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}var l=r(20),s=r.n(l);function f(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function p(t){f(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function h(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var y={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},v=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,d=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,b=/^([+-])(\d{2})(?::?(\d{2}))?$/;function m(t,e){f(1,arguments);var r=e||{},n=null==r.additionalDigits?2:h(r.additionalDigits);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var o,a=g(t);if(a.date){var i=_(a.date,n);o=F(i.restDateString,i.year)}if(isNaN(o)||!o)return new Date(NaN);var u,c=o.getTime(),l=0;if(a.time&&(l=E(a.time),isNaN(l)||null===l))return new Date(NaN);if(!a.timezone){var s=new Date(c+l),p=new Date(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate(),s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds());return p.setFullYear(s.getUTCFullYear()),p}return u=j(a.timezone),isNaN(u)?new Date(NaN):new Date(c+l+u)}function g(t){var e,r={},n=t.split(y.dateTimeDelimiter);if(n.length>2)return r;if(/:/.test(n[0])?(r.date=null,e=n[0]):(r.date=n[0],e=n[1],y.timeZoneDelimiter.test(r.date)&&(r.date=t.split(y.timeZoneDelimiter)[0],e=t.substr(r.date.length,t.length))),e){var o=y.timezone.exec(e);o?(r.time=e.replace(o[1],""),r.timezone=o[1]):r.time=e}return r}function _(t,e){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),n=t.match(r);if(!n)return{year:null};var o=n[1]&&parseInt(n[1]),a=n[2]&&parseInt(n[2]);return{year:null==a?o:100*a,restDateString:t.slice((n[1]||n[2]).length)}}function F(t,e){if(null===e)return null;var r=t.match(v);if(!r)return null;var n=!!r[4],o=x(r[1]),a=x(r[2])-1,i=x(r[3]),u=x(r[4]),c=x(r[5])-1;if(n)return function(t,e,r){return e>=1&&e<=53&&r>=0&&r<=6}(0,u,c)?function(t,e,r){var n=new Date(0);n.setUTCFullYear(t,0,4);var o=n.getUTCDay()||7,a=7*(e-1)+r+1-o;return n.setUTCDate(n.getUTCDate()+a),n}(e,u,c):new Date(NaN);var l=new Date(0);return function(t,e,r){return e>=0&&e<=11&&r>=1&&r<=(D[e]||(O(t)?29:28))}(e,a,i)&&function(t,e){return e>=1&&e<=(O(t)?366:365)}(e,o)?(l.setUTCFullYear(e,a,Math.max(o,i)),l):new Date(NaN)}function x(t){return t?parseInt(t):1}function E(t){var e=t.match(d);if(!e)return null;var r=w(e[1]),n=w(e[2]),o=w(e[3]);return function(t,e,r){if(24===t)return 0===e&&0===r;return r>=0&&r<60&&e>=0&&e<60&&t>=0&&t<25}(r,n,o)?36e5*r+6e4*n+1e3*o:NaN}function w(t){return t&&parseFloat(t.replace(",","."))||0}function j(t){if("Z"===t)return 0;var e=t.match(b);if(!e)return 0;var r="+"===e[1]?-1:1,n=parseInt(e[2]),o=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,o)?r*(36e5*n+6e4*o):NaN}var D=[31,null,31,30,31,30,31,31,30,31,30,31];function O(t){return t%400==0||t%4==0&&t%100}var P=r(4),S=r(8),C=r(21),N=r.n(C),T=function(){function t(t,e){this.baseUrl=t,this.params=e,this.cache=new N.a.Cache}return t.prototype.get=function(){return i(this,void 0,void 0,(function(){var t;return u(this,(function(e){switch(e.label){case 0:return t={url:this.baseUrl+(this.params.length?"?"+this.params:""),method:"GET"},[4,Object(S.getBackendSrv)().datasourceRequest(t)];case 1:return[2,e.sent().data]}}))}))},t.prototype.test=function(){return i(this,void 0,void 0,(function(){var t;return u(this,(function(e){return t={url:this.baseUrl+(this.params.length?"?"+this.params:""),method:"GET"},[2,Object(S.getBackendSrv)().datasourceRequest(t)]}))}))},t.prototype.cachedGet=function(t,e){return i(this,void 0,void 0,(function(){var e,r,n;return u(this,(function(o){switch(o.label){case 0:return 0!==t?[3,2]:[4,this.get()];case 1:return[2,o.sent()];case 2:return(e=this.lastCacheDuration!==t)&&this.cache.del(this.baseUrl),(r=this.cache.get(this.baseUrl))&&!e?[2,Promise.resolve(r)]:(this.lastCacheDuration=t,[4,this.get()]);case 3:return n=o.sent(),this.cache.put(this.baseUrl,n,Math.max(1e3*t,1)),[2,n]}}))}))},t}(),A=function(t){function e(e){var r=t.call(this,e)||this;return r.api=new T(e.url,e.jsonData.queryParams||""),r}return function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e.prototype.query=function(t){return i(this,void 0,Promise,(function(){var e,r=this;return u(this,(function(o){return e=t.targets.map((function(t){return i(r,void 0,void 0,(function(){var e,r;return u(this,(function(o){switch(o.label){case 0:return[4,this.api.cachedGet(t.cacheDurationSeconds)];case 1:if(e=o.sent(),r=t.fields.filter((function(t){return t.jsonPath})).map((function(t){var r=Object(P.a)({path:t.jsonPath,json:e}),n=P.a.toPathArray(t.jsonPath),o=c(k(r),2),a=o[0],i=o[1];return{name:t.name||n[n.length-1],type:a,values:i}})),Array.from(new Set(r.map((function(t){return t.values.length})))).length>1)throw new Error("Fields have different lengths");return[2,Object(n.toDataFrame)({refId:t.refId,fields:r})]}}))}))})),[2,Promise.all(e).then((function(t){return{data:t}}))]}))}))},e.prototype.metricFindQuery=function(t){return i(this,void 0,Promise,(function(){var e,r;return u(this,(function(n){switch(n.label){case 0:return t.jsonPath?(e=P.a,r={path:t.jsonPath},[4,this.api.get()]):[2,[]];case 1:return[2,e.apply(void 0,[(r.json=n.sent(),r)]).map((function(t){return{text:t}}))]}}))}))},e.prototype.testDatasource=function(){return i(this,void 0,void 0,(function(){var t,e,r,n;return u(this,(function(o){switch(o.label){case 0:t="Cannot connect to API",o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.api.test()];case 2:return 200===(e=o.sent()).status?[2,{status:"success",message:"Success"}]:[2,{status:"error",message:e.statusText?e.statusText:t}];case 3:return r=o.sent(),s.a.isString(r)?[2,{status:"error",message:r}]:(n="JSON API: ",n+=r.statusText?r.statusText:t,r.data&&r.data.error&&r.data.error.code&&(n+=": "+r.data.error.code+". "+r.data.error.message),[2,{status:"error",message:n}]);case 4:return[2]}}))}))},e}(n.DataSourceApi),k=function(t){if(t.every((function(t){return function(t){f(1,arguments);var e=p(t);return!isNaN(e)}(m(t))})))return[n.FieldType.time,t.map((function(t){return m(t).valueOf()}))];if(t.every((function(t){return"number"==typeof t}))){var e=Array.from(new Set(t.map((function(t){return t.toString().length}))));return 1===e.length&&13===e[0]?[n.FieldType.time,t]:1===e.length&&10===e[0]?[n.FieldType.time,t.map((function(t){return 1e3*t}))]:[n.FieldType.number,t]}return t.every((function(t){return"boolean"==typeof t}))?[n.FieldType.boolean,t]:[n.FieldType.string,t]},B=r(0),U=r.n(B),R=r(1),I=R.LegacyForms.Input,$=R.LegacyForms.FormField,M=r(22),L=r.n(M),q={fields:[{name:"",jsonPath:""}],cacheDurationSeconds:300},J=function(t){var e=t.query,r=t.onBlur,n=t.onChange;return U.a.createElement("div",{style:{marginRight:"4px",width:"100%"}},U.a.createElement(R.QueryField,{query:e,onBlur:r,onChange:n,portalOrigin:"jsonapi",placeholder:"$.items[*].name"}))},W=r(9),K=function(t){return void 0===t&&(t=300),t<60?t+"s":t<3600?t/60+"m":t/3600+"h"};r.d(e,"plugin",(function(){return X}));var X=new n.DataSourcePlugin(A).setConfigEditor((function(t){var e=t.options,r=t.onOptionsChange;return U.a.createElement(U.a.Fragment,null,U.a.createElement(R.DataSourceHttpSettings,{defaultUrl:"http://localhost:8080",dataSourceConfig:e,onChange:r}),U.a.createElement("h3",{className:"page-heading"},"Misc"),U.a.createElement("div",{className:"gf-form-group"},U.a.createElement("div",{className:"gf-form-inline"},U.a.createElement("div",{className:"gf-form max-width-30"},U.a.createElement($,{label:"Custom query parameters",labelWidth:14,tooltip:"Add custom parameters to your queries.",inputEl:U.a.createElement(I,{className:"width-25",value:e.jsonData.queryParams,onChange:function(t){r(a(a({},e),{jsonData:a(a({},e.jsonData),{queryParams:t.currentTarget.value})}))},spellCheck:!1,placeholder:"page=1&limit=100"})})))))})).setQueryEditor((function(t){var e=t.onRunQuery,r=t.onChange,n=t.query,o=L()(n,q).fields,i=function(t){return function(i){o[t]=a(a({},o[t]),{name:i.target.value}),r(a(a({},n),{fields:o})),e()}},u=function(t){return function(){o&&o.splice(t+1,0,{name:"",jsonPath:""}),r(a(a({},n),{fields:o}))}},c=function(t){return function(){o&&o.splice(t,1),r(a(a({},n),{fields:o})),e()}};return U.a.createElement(U.a.Fragment,null,U.a.createElement("div",{className:"gf-form-inline"},U.a.createElement(R.InlineFormLabel,{width:7,className:"query-keyword",tooltip:"Time in seconds that the response will be cached in Grafana after receiving it."},"Cache Time"),U.a.createElement(R.Segment,{value:{label:K(n.cacheDurationSeconds),value:n.cacheDurationSeconds},options:[0,5,10,30,60,120,300,600,1800,3600,7200,18e3].map((function(t){return{label:K(t),value:t,description:t?"":"Response is not cached at all"}})),onChange:function(t){var e=t.value;return r(a(a({},n),{cacheDurationSeconds:e}))}}),U.a.createElement("div",{className:"gf-form gf-form--grow"},U.a.createElement("div",{className:"gf-form-label gf-form-label--grow"}))),o?o.map((function(t,l){return U.a.createElement("div",{key:l,className:"gf-form"},U.a.createElement(R.InlineFormLabel,{width:7,className:"query-keyword",tooltip:U.a.createElement("p",null,"A ",U.a.createElement("a",{href:"https://goessner.net/articles/JsonPath/"},"JSON Path")," query that selects one or more values from a JSON object.")},"Query"),U.a.createElement(J,{onBlur:e,onChange:(s=l,function(t){o[s]=a(a({},o[s]),{jsonPath:t}),r(a(a({},n),{fields:o}))}),query:t.jsonPath}),U.a.createElement(R.InlineFormLabel,{width:3,className:"query-keyword"},"Alias"),U.a.createElement("input",{className:"gf-form-input width-14",value:t.name||"",onChange:i(l)}),U.a.createElement("a",{className:Object(W.cx)("gf-form-label","gf-form-label--grow"),onClick:u(l)},U.a.createElement(R.Icon,{name:"plus"})),o.length>1?U.a.createElement("a",{className:Object(W.cx)("gf-form-label","gf-form-label--grow"),onClick:c(l)},U.a.createElement(R.Icon,{name:"minus"})):null);var s})):null)})).setVariableQueryEditor((function(t){var e=t.onChange,r=t.query,n=c(Object(B.useState)(r),2),o=n[0],i=n[1];return U.a.createElement("div",{className:"gf-form"},U.a.createElement(R.InlineFormLabel,{width:10,tooltip:U.a.createElement("p",null,"A ",U.a.createElement("a",{href:"https://goessner.net/articles/JsonPath/"},"JSON Path")," query that selects one or more values from a JSON object.")},"Query"),U.a.createElement(J,{onBlur:function(){e(o,o.jsonPath)},onChange:function(t){return i(a(a({},o),{jsonPath:t}))},query:o.jsonPath}))}))}])}));
//# sourceMappingURL=module.js.map