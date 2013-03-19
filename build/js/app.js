/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.3";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?-1!=n.indexOf(t):E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2);return w.map(n,function(n){return(w.isFunction(t)?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t){return w.isEmpty(t)?[]:w.filter(n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=F(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(e>r||void 0===e)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return k(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i};var I=function(){};w.bind=function(n,t){var r,e;if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));if(!w.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));I.prototype=n.prototype;var u=new I;I.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},w.bindAll=function(n){var t=o.call(arguments,1);return 0==t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=S(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&S(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return S(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),w.isFunction=function(n){return"function"==typeof n},w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return void 0===n},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+(0|Math.random()*(t-n+1))};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};T.unescape=w.invert(T.escape);var M={escape:RegExp("["+w.keys(T.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(T.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(M[n],function(t){return T[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=""+ ++N;return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){r=w.defaults({},r,w.templateSettings);var e=RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(D,function(n){return"\\"+B[n]}),r&&(i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(i+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),a&&(i+="';\n"+a+"\n__p+='"),u=o+t.length,t}),i+="';\n",r.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=Function(r.variable||"obj","_",i)}catch(o){throw o.source=i,o}if(t)return a(t,w);var c=function(n){return a.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+i+"}",c},w.chain=function(n){return w(n).chain()};var z=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
/*

 Copyright (c) 2011 Sencha Labs - Author: Nicolas Garcia Belmonte (http://philogb.github.com/)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

*/
(function(){this.PhiloGL=null;(function(){PhiloGL=function(x,t){function z(s,a,b){s=s.canvas;var f=new PhiloGL.Camera(g.fov,s.width/s.height,g.near,g.far,g);f.update();var m=new PhiloGL.Scene(a,f,c);k.program=a;k.canvas=s;k.scene=m;k.camera=f;a.$$family=="program"&&a.use();h&&PhiloGL.Events.create(k,l.extend(h,{bind:k}));if(d.src.length)new PhiloGL.IO.Textures(l.extend(d,{onComplete:function(){b(k)}}),k);else b(k)}var l=PhiloGL.$;t=l.merge({context:{},camera:{fov:45,near:0.1,far:500},program:{from:"defaults",
vs:"Default",fs:"Default"},scene:{},textures:{src:[]},events:{},onLoad:l.empty,onError:l.empty},t||{});var n=t.context,g=t.camera,h=t.events,d=t.textures,i=l.splat(t.program),c=t.scene;program=null;var j=PhiloGL.WebGL.getContext(x,n);PhiloGL.glConstants=j;if(!j){t.onError("The WebGL context couldn't been initialized");return null}var k=new PhiloGL.WebGL.Application({gl:j}),o={defaults:"fromDefaultShaders",ids:"fromShaderIds",sources:"fromShaderSources",uris:"fromShaderURIs"},p=i.length,u=function(){var s=
p,a={},b=false;return{onSuccess:function(f,m){a[m.id||p-s]=f;s--;if(s===0&&!b)z(j,p==1?f:a,function(r){t.onLoad(r)})},onError:function(f){s--;t.onError(f);b=true}}}();i.forEach(function(s){var a=s.from,b;s.gl=j;s.app=k;for(var f in o)if(a==f){b=PhiloGL.Program[o[f]](l.extend(u,s));break}if(b)u.onSuccess(b,s)})}})();PhiloGL.version="1.5.2";(function(){function x(z){var l=t.type(z);if(l=="object"){l={};for(var n in z)l[n]=x(z[n]);return l}else if(l=="array"){l=[];n=0;for(var g=z.length;n<g;n++)l[n]=
x(z[n]);return l}else return z}PhiloGL.$=function(z){return document.getElementById(z)};var t=PhiloGL.$;t.empty=function(){};t.time=Date.now;t.uid=function(){var z=t.time();return function(){return z++}}();t.extend=function(z,l){for(var n in l)z[n]=l[n];return z};t.type=function(){var z=Object.prototype.toString;return function(l){var n;n=z.call(l);n=n.substr(8,n.length-9).toLowerCase();if(n!="object")return n;if(l.$$family)return l.$$family;return l&&l.nodeName&&l.nodeType==1?"element":n}}();t.merge=
function(){for(var z={},l=0,n=arguments.length;l<n;l++){var g=arguments[l];if(t.type(g)=="object")for(var h in g){var d=g[h],i=z[h];z[h]=i&&t.type(d)=="object"&&t.type(i)=="object"?t.merge(i,d):x(d)}}return z};t.splat=function(){var z=Array.isArray;return function(l){return z(l)&&l||[l]}}()})();(function(){function x(l){for(var n in l)this[n]=l[n];this.buffers={};this.bufferMemo={};this.frameBuffers={};this.frameBufferMemo={};this.renderBuffers={};this.renderBufferMemo={};this.textures={};this.textureMemo=
{}}var t=PhiloGL.$,z={getContext:function(l,n){l=typeof l=="string"?t(l):l;var g;(g=l.getContext("experimental-webgl",n))||(g=l.getContext("webgl",n));if(g&&n&&n.debug){gl={};for(var h in g){var d=g[h];gl[h]=typeof d=="function"?function(i,c){return function(){console.log(i,Array.prototype.join.call(arguments),Array.prototype.slice.call(arguments));try{var j=c.apply(g,arguments)}catch(k){throw i+" "+k;}for(var o=[],p;(p=g.getError())!==g.NO_ERROR;)o.push(p);if(o.length)throw o.join();return j}}(h,
d):d}}else gl=g;if(gl)gl.get=function(i){return typeof i=="string"?gl[i]:i};return gl}};x.prototype={$$family:"application",setBuffer:function(l,n,g){var h=this.gl;if(g===false||g===null){(g=this.bufferMemo[n])&&h.bindBuffer(g.bufferType,null);var d=g&&g.attribute||n;l=l.attributes[d];l!==undefined&&h.disableVertexAttribArray(l)}else{g=t.extend(this.bufferMemo[n]||{bufferType:h.ARRAY_BUFFER,size:1,dataType:h.FLOAT,stride:0,offset:0,drawType:h.STATIC_DRAW},g||{});d=g.attribute||n;var i=g.bufferType,
c=n in this.buffers,j=c?this.buffers[n]:h.createBuffer(),k="value"in g,o=g.value,p=g.size,u=g.dataType,s=g.stride,a=g.offset,b=g.drawType;l=l.attributes[d];var f=l!==undefined;c||(this.buffers[n]=j);f&&h.enableVertexAttribArray(l);h.bindBuffer(i,j);k&&h.bufferData(i,o,b);f&&h.vertexAttribPointer(l,p,u,false,s,a);delete g.value;this.bufferMemo[n]=g;if(f)this.bufferMemo[d]=g;return this}},setBuffers:function(l,n){for(var g in n)this.setBuffer(l,g,n[g]);return this},setFrameBuffer:function(l,n){var g=
this.gl;if(typeof n!="object")g.bindFramebuffer(g.FRAMEBUFFER,n?this.frameBuffers[l]:null);else{n=t.merge(this.frameBufferMemo[l]||{width:0,height:0,bindToTexture:false,textureOptions:{attachment:g.COLOR_ATTACHMENT0},bindToRenderBuffer:false,renderBufferOptions:{attachment:g.DEPTH_ATTACHMENT}},n||{});var h=n.bindToTexture,d=n.bindToRenderBuffer,i=l in this.frameBuffers,c=i?this.frameBuffers[l]:g.createFramebuffer();g.bindFramebuffer(g.FRAMEBUFFER,c);i||(this.frameBuffers[l]=c);if(h){h=t.merge({data:{width:n.width,
height:n.height}},t.type(h)=="object"?h:{});i=l+"-texture";c=n.textureOptions;this.setTexture(i,h);g.framebufferTexture2D(g.FRAMEBUFFER,c.attachment,this.textureMemo[i].textureType,this.textures[i],0)}if(d){d=t.extend({width:n.width,height:n.height},t.type(d)=="object"?d:{});h=l+"-renderbuffer";i=n.renderBufferOptions;this.setRenderBuffer(h,d);g.framebufferRenderbuffer(g.FRAMEBUFFER,i.attachment,g.RENDERBUFFER,this.renderBuffers[h])}g.bindTexture(g.TEXTURE_2D,null);g.bindRenderbuffer(g.RENDERBUFFER,
null);g.bindFramebuffer(g.FRAMEBUFFER,null);this.frameBufferMemo[l]=n;return this}},setFrameBuffers:function(l){for(var n in l)this.setFrameBuffer(n,l[n]);return this},setRenderBuffer:function(l,n){var g=this.gl;if(typeof n!="object")g.bindRenderbuffer(g.RENDERBUFFER,n?this.renderBufferMemo[l]:null);else{n=t.extend(this.renderBufferMemo[l]||{storageType:g.DEPTH_COMPONENT16,width:0,height:0},n||{});var h=l in this.renderBuffers,d=h?this.renderBuffers[l]:g.createRenderbuffer(g.RENDERBUFFER);h||(this.renderBuffers[l]=
d);g.bindRenderbuffer(g.RENDERBUFFER,d);g.renderbufferStorage(g.RENDERBUFFER,n.storageType,n.width,n.height);this.renderBufferMemo[l]=n;return this}},setRenderBuffers:function(l){for(var n in l)this.setRenderBuffer(n,l[n]);return this},setTexture:function(l,n){var g=this.gl;if(!n||typeof n!="object"){g.activeTexture(n||g.TEXTURE0);g.bindTexture(this.textureMemo[l].textureType||g.TEXTURE_2D,this.textures[l])}else{if(n.data&&n.data.type===g.FLOAT)if(!g.getExtension("OES_texture_float"))throw"OES_texture_float is not supported";
n=t.merge(this.textureMemo[l]||{textureType:g.TEXTURE_2D,pixelStore:[{name:g.UNPACK_FLIP_Y_WEBGL,value:true},{name:g.UNPACK_ALIGNMENT,value:1}],parameters:[{name:g.TEXTURE_MAG_FILTER,value:g.NEAREST},{name:g.TEXTURE_MIN_FILTER,value:g.NEAREST},{name:g.TEXTURE_WRAP_S,value:g.CLAMP_TO_EDGE},{name:g.TEXTURE_WRAP_T,value:g.CLAMP_TO_EDGE}],data:{format:g.RGBA,value:false,type:g.UNSIGNED_BYTE,width:0,height:0,border:0}},n||{});var h="textureType"in n?n.textureType=g.get(n.textureType):g.TEXTURE_2D,d="textureTarget"in
n?n.textureTarget=g.get(n.textureTarget):h,i=h==g.TEXTURE_CUBE_MAP,c=l in this.textures,j=c?this.textures[l]:g.createTexture(),k=n.pixelStore,o=n.parameters,p=n.data,u=p.value,s=p.type,a=p.format,b=!!p.value;c||(this.textures[l]=j);g.bindTexture(h,j);c||k.forEach(function(f){f.name=typeof f.name=="string"?g.get(f.name):f.name;g.pixelStorei(f.name,f.value)});if(b)if(i)for(j=0;j<6;++j)(p.width||p.height)&&!u.width&&!u.height?g.texImage2D(d[j],0,a,p.width,p.height,p.border,a,s,u[j]):g.texImage2D(d[j],
0,a,a,s,u[j]);else(p.width||p.height)&&!u.width&&!u.height?g.texImage2D(d,0,a,p.width,p.height,p.border,a,s,u):g.texImage2D(d,0,a,a,s,u);else if(p.width||p.height)g.texImage2D(d,0,a,p.width,p.height,p.border,a,s,null);if(!c)for(j=0;j<o.length;j++){d=o[j];d.name=g.get(d.name);d.value=g.get(d.value);g.texParameteri(h,d.name,d.value);d.generateMipmap&&g.generateMipmap(h)}n.isCube=i;if(b)n.data.value=false;this.textureMemo[l]=n;return this}},setTextures:function(l){for(var n in l)this.setTexture(n,l[n]);
return this},use:function(l){this.gl.useProgram(l.program);this.usedProgram=l;return this}};z.Application=x;(function(){try{var l=document.createElement("canvas");PhiloGL.hasWebGL=function(){return!!(window.WebGLRenderingContext&&(l.getContext("webgl")||l.getContext("experimental-webgl")))}}catch(n){PhiloGL.hasWebGL=function(){return false}}PhiloGL.hasExtension=function(g){if(!PhiloGL.hasWebGL())return false;var h=document.createElement("canvas");return(h.getContext("webgl")||h.getContext("experimental-webgl")).getExtension(g)}})();
PhiloGL.WebGL=z})();(function(){function x(a){return{get:function(){return this[a]},set:function(b){this[a]=b},configurable:false,enumerable:false}}var t=Math.sqrt,z=Math.sin,l=Math.cos,n=Math.tan,g=Math.PI,h=Array.prototype.slice,d=this.Float32Array,i=function(){if(!d||!d.call)return Array;try{d.call({},10)}catch(a){return Array}return d}(),c=i!=Array,j=function(a,b,f){if(c){d.call(this,3);this[0]=a||0;this[1]=b||0;this[2]=f||0}else this.push(a||0,b||0,f||0);this.typedContainer=new d(3)};j.create=
function(){return new d(3)};j.prototype=Object.create(i.prototype,{$$family:{value:"Vec3"},x:x(0),y:x(1),z:x(2)});var k={setVec3:function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];return a},set:function(a,b,f,m){a[0]=b;a[1]=f;a[2]=m;return a},add:function(a,b){return new j(a[0]+b[0],a[1]+b[1],a[2]+b[2])},$add:function(a,b){a[0]+=b[0];a[1]+=b[1];a[2]+=b[2];return a},add2:function(a,b,f){a[0]=b[0]+f[0];a[1]=b[1]+f[1];a[2]=b[2]+f[2];return a},sub:function(a,b){return new j(a[0]-b[0],a[1]-b[1],a[2]-b[2])},$sub:function(a,
b){a[0]-=b[0];a[1]-=b[1];a[2]-=b[2];return a},sub2:function(a,b,f){a[0]=b[0]-f[0];a[1]=b[1]-f[1];a[2]=b[2]-f[2];return a},scale:function(a,b){return new j(a[0]*b,a[1]*b,a[2]*b)},$scale:function(a,b){a[0]*=b;a[1]*=b;a[2]*=b;return a},neg:function(a){return new j(-a[0],-a[1],-a[2])},$neg:function(a){a[0]=-a[0];a[1]=-a[1];a[2]=-a[2];return a},unit:function(a){var b=j.norm(a);if(b>0)return j.scale(a,1/b);return j.clone(a)},$unit:function(a){var b=j.norm(a);if(b>0)return j.$scale(a,1/b);return a},cross:function(a,
b){var f=a[0],m=a[1],r=a[2],q=b[0],v=b[1],w=b[2];return new j(m*w-r*v,r*q-f*w,f*v-m*q)},$cross:function(a,b){var f=a[0],m=a[1],r=a[2],q=b[0],v=b[1],w=b[2];a[0]=m*w-r*v;a[1]=r*q-f*w;a[2]=f*v-m*q;return a},distTo:function(a,b){var f=a[0]-b[0],m=a[1]-b[1],r=a[2]-b[2];return t(f*f+m*m+r*r)},distToSq:function(a,b){var f=a[0]-b[0],m=a[1]-b[1],r=a[2]-b[2];return f*f+m*m+r*r},norm:function(a){var b=a[0],f=a[1];a=a[2];return t(b*b+f*f+a*a)},normSq:function(a){var b=a[0],f=a[1];a=a[2];return b*b+f*f+a*a},dot:function(a,
b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},clone:function(a){return a.$$family?new j(a[0],a[1],a[2]):j.setVec3(new d(3),a)},toFloat32Array:function(a){var b=a.typedContainer;if(!b)return a;b[0]=a[0];b[1]=a[1];b[2]=a[2];return b}},o=j.prototype,p;for(p in k){j[p]=k[p];o[p]=function(a){return function(){var b=h.call(arguments);b.unshift(this);return j[a].apply(j,b)}}(p)}var u=function(a,b,f,m,r,q,v,w,y,A,C,D,B,F,I,J){i.call(this,16);this.length=16;typeof a=="number"?this.set(a,b,f,m,r,q,v,w,y,A,C,D,B,
F,I,J):this.id();this.typedContainer=new d(16)};u.create=function(){return new d(16)};u.prototype=Object.create(i.prototype,{$$family:{value:"Mat4"},n11:x(0),n12:x(4),n13:x(8),n14:x(12),n21:x(1),n22:x(5),n23:x(9),n24:x(13),n31:x(2),n32:x(6),n33:x(10),n34:x(14),n41:x(3),n42:x(7),n43:x(11),n44:x(15)});k={id:function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a},clone:function(a){return a.$$family?new u(a[0],a[4],a[8],
a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15]):new d(a)},set:function(a,b,f,m,r,q,v,w,y,A,C,D,B,F,I,J,G){a[0]=b;a[4]=f;a[8]=m;a[12]=r;a[1]=q;a[5]=v;a[9]=w;a[13]=y;a[2]=A;a[6]=C;a[10]=D;a[14]=B;a[3]=F;a[7]=I;a[11]=J;a[15]=G;return a},mulVec3:function(a,b){var f=j.clone(b);return u.$mulVec3(a,f)},$mulVec3:function(a,b){var f=b[0],m=b[1],r=b[2],q=1/(a[3]*f+a[7]*m+a[11]*r+a[15]);b[0]=(a[0]*f+a[4]*m+a[8]*r+a[12])*q;b[1]=(a[1]*f+a[5]*m+a[9]*r+a[13])*q;b[2]=(a[2]*f+a[6]*m+a[10]*
r+a[14])*q;return b},mulMat42:function(a,b,f){var m=b[0],r=b[1],q=b[2],v=b[3],w=b[4],y=b[5],A=b[6],C=b[7],D=b[8],B=b[9],F=b[10],I=b[11],J=b[12],G=b[13],E=b[14];b=b[15];var H=f[0],K=f[1],M=f[2],N=f[3],O=f[4],P=f[5],U=f[6],S=f[7],T=f[8],Q=f[9],R=f[10],L=f[11],V=f[12],W=f[13],X=f[14];f=f[15];a[0]=H*m+K*w+M*D+N*J;a[1]=H*r+K*y+M*B+N*G;a[2]=H*q+K*A+M*F+N*E;a[3]=H*v+K*C+M*I+N*b;a[4]=O*m+P*w+U*D+S*J;a[5]=O*r+P*y+U*B+S*G;a[6]=O*q+P*A+U*F+S*E;a[7]=O*v+P*C+U*I+S*b;a[8]=T*m+Q*w+R*D+L*J;a[9]=T*r+Q*y+R*B+L*G;a[10]=
T*q+Q*A+R*F+L*E;a[11]=T*v+Q*C+R*I+L*b;a[12]=V*m+W*w+X*D+f*J;a[13]=V*r+W*y+X*B+f*G;a[14]=V*q+W*A+X*F+f*E;a[15]=V*v+W*C+X*I+f*b;return a},mulMat4:function(a,b){var f=u.clone(a);return u.mulMat42(f,a,b)},$mulMat4:function(a,b){return u.mulMat42(a,a,b)},add:function(a,b){var f=u.clone(a);return u.$add(f,b)},$add:function(a,b){a[0]+=b[0];a[1]+=b[1];a[2]+=b[2];a[3]+=b[3];a[4]+=b[4];a[5]+=b[5];a[6]+=b[6];a[7]+=b[7];a[8]+=b[8];a[9]+=b[9];a[10]+=b[10];a[11]+=b[11];a[12]+=b[12];a[13]+=b[13];a[14]+=b[14];a[15]+=
b[15];return a},transpose:function(a){a=u.clone(a);return u.$transpose(a)},$transpose:function(a){var b=a[8],f=a[12],m=a[1],r=a[9],q=a[13],v=a[2],w=a[6],y=a[14],A=a[3],C=a[7],D=a[11];a[1]=a[4];a[2]=b;a[3]=f;a[4]=m;a[6]=r;a[7]=q;a[8]=v;a[9]=w;a[11]=y;a[12]=A;a[13]=C;a[14]=D;return a},rotateAxis:function(a,b,f){a=u.clone(a);return u.$rotateAxis(a,b,f)},$rotateAxis:function(a,b,f){var m=z(b),r=l(b),q=1-r,v=f[0],w=f[1],y=f[2];f=v*v*q+r;b=v*w*q+y*m;var A=v*y*q-w*m,C=w*v*q-y*m,D=w*w*q+r,B=w*y*q+v*m,F=v*
y*q+w*m;m=w*y*q-v*m;r=y*y*q+r;q=a[0];v=a[1];w=a[2];y=a[3];var I=a[4],J=a[5],G=a[6],E=a[7],H=a[8],K=a[9],M=a[10],N=a[11];a[0]=q*f+I*b+H*A;a[1]=v*f+J*b+K*A;a[2]=w*f+G*b+M*A;a[3]=y*f+E*b+N*A;a[4]=q*C+I*D+H*B;a[5]=v*C+J*D+K*B;a[6]=w*C+G*D+M*B;a[7]=y*C+E*D+N*B;a[8]=q*F+I*m+H*r;a[9]=v*F+J*m+K*r;a[10]=w*F+G*m+M*r;a[11]=y*F+E*m+N*r;return a},rotateXYZ:function(a,b,f,m){a=u.clone(a);return u.$rotateXYZ(a,b,f,m)},$rotateXYZ:function(a,b,f,m){var r=a[0],q=a[1],v=a[2],w=a[3],y=a[4],A=a[5],C=a[6],D=a[7],B=a[8],
F=a[9],I=a[10],J=a[11],G=l(b),E=l(f),H=l(m);b=z(b);var K=z(f),M=z(m);m=E*H;f=-G*M+b*K*H;var N=b*M+G*K*H,O=E*M,P=G*H+b*K*M;H=-b*H+G*K*M;K=-K;b*=E;G*=E;a[0]=r*m+y*O+B*K;a[1]=q*m+A*O+F*K;a[2]=v*m+C*O+I*K;a[3]=w*m+D*O+J*K;a[4]=r*f+y*P+B*b;a[5]=q*f+A*P+F*b;a[6]=v*f+C*P+I*b;a[7]=w*f+D*P+J*b;a[8]=r*N+y*H+B*G;a[9]=q*N+A*H+F*G;a[10]=v*N+C*H+I*G;a[11]=w*N+D*H+J*G;return a},translate:function(a,b,f,m){a=u.clone(a);return u.$translate(a,b,f,m)},$translate:function(a,b,f,m){a[12]=a[0]*b+a[4]*f+a[8]*m+a[12];a[13]=
a[1]*b+a[5]*f+a[9]*m+a[13];a[14]=a[2]*b+a[6]*f+a[10]*m+a[14];a[15]=a[3]*b+a[7]*f+a[11]*m+a[15];return a},scale:function(a,b,f,m){a=u.clone(a);return u.$scale(a,b,f,m)},$scale:function(a,b,f,m){a[0]*=b;a[1]*=b;a[2]*=b;a[3]*=b;a[4]*=f;a[5]*=f;a[6]*=f;a[7]*=f;a[8]*=m;a[9]*=m;a[10]*=m;a[11]*=m;return a},invert:function(a){a=u.clone(a);return u.$invert(a)},$invert:function(a){var b=a[0],f=a[1],m=a[2],r=a[3],q=a[4],v=a[5],w=a[6],y=a[7],A=a[8],C=a[9],D=a[10],B=a[11],F=a[12],I=a[13],J=a[14],G=a[15],E=b*v-
f*q,H=b*w-m*q,K=b*y-r*q,M=f*w-m*v,N=f*y-r*v,O=m*y-r*w,P=A*I-C*F,U=A*J-D*F,S=A*G-B*F,T=C*J-D*I,Q=C*G-B*I,R=D*G-B*J,L=1/(E*R-H*Q+K*T+M*S-N*U+O*P);a[0]=(+v*R-w*Q+y*T)*L;a[1]=(-f*R+m*Q-r*T)*L;a[2]=(+I*O-J*N+G*M)*L;a[3]=(-C*O+D*N-B*M)*L;a[4]=(-q*R+w*S-y*U)*L;a[5]=(+b*R-m*S+r*U)*L;a[6]=(-F*O+J*K-G*H)*L;a[7]=(+A*O-D*K+B*H)*L;a[8]=(+q*Q-v*S+y*P)*L;a[9]=(-b*Q+f*S-r*P)*L;a[10]=(+F*N-I*K+G*E)*L;a[11]=(-A*N+C*K-B*E)*L;a[12]=(-q*T+v*U-w*P)*L;a[13]=(+b*T-f*U+m*P)*L;a[14]=(-F*M+I*H-J*E)*L;a[15]=(+A*M-C*H+D*E)*L;
return a},lookAt:function(a,b,f,m){f=j.sub(b,f);f.$unit();m=j.cross(m,f);m.$unit();var r=j.cross(f,m);r.$unit();return u.set(a,m[0],m[1],m[2],-m.dot(b),r[0],r[1],r[2],-r.dot(b),f[0],f[1],f[2],-f.dot(b),0,0,0,1)},frustum:function(a,b,f,m,r,q,v){var w=f-b,y=r-m,A=v-q;a[0]=q*2/w;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=q*2/y;a[6]=0;a[7]=0;a[8]=(f+b)/w;a[9]=(r+m)/y;a[10]=-(v+q)/A;a[11]=-1;a[12]=0;a[13]=0;a[14]=-(v*q*2)/A;a[15]=0;return a},perspective:function(a,b,f,m,r){b=m*n(b*g/360);var q=-b;return u.frustum(a,
q*f,b*f,q,b,m,r)},ortho:function(a,b,f,m,r,q,v){var w=f-b,y=r-m,A=v-q;a[0]=2/w;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=2/y;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=-2/A;a[11]=0;a[12]=-(b+f)/w;a[13]=-(r+m)/y;a[14]=-(v+q)/A;a[15]=1;return a},toFloat32Array:function(a){var b=a.typedContainer;if(!b)return a;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b}};o=u.prototype;for(p in k){u[p]=
k[p];o[p]=function(a){return function(){var b=h.call(arguments);b.unshift(this);return u[a].apply(u,b)}}(p)}var s=function(a,b,f,m){i.call(this,4);this[0]=a||0;this[1]=b||0;this[2]=f||0;this[3]=m||0;this.typedContainer=new d(4)};s.create=function(){return new d(4)};k={setQuat:function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];return a},set:function(a,b,f,m,r){a[0]=b||0;a[1]=f||0;a[2]=m||0;a[3]=r||0;return a},clone:function(a){return a.$$family?new s(a[0],a[1],a[2],a[3]):s.setQuat(new d(4),a)},
neg:function(a){return new s(-a[0],-a[1],-a[2],-a[3])},$neg:function(a){a[0]=-a[0];a[1]=-a[1];a[2]=-a[2];a[3]=-a[3];return a},add:function(a,b){return new s(a[0]+b[0],a[1]+b[1],a[2]+b[2],a[3]+b[3])},$add:function(a,b){a[0]+=b[0];a[1]+=b[1];a[2]+=b[2];a[3]+=b[3];return a},sub:function(a,b){return new s(a[0]-b[0],a[1]-b[1],a[2]-b[2],a[3]-b[3])},$sub:function(a,b){a[0]-=b[0];a[1]-=b[1];a[2]-=b[2];a[3]-=b[3];return a},scale:function(a,b){return new s(a[0]*b,a[1]*b,a[2]*b,a[3]*b)},$scale:function(a,b){a[0]*=
b;a[1]*=b;a[2]*=b;a[3]*=b;return a},mulQuat:function(a,b){var f=a[0],m=a[1],r=a[2],q=a[3],v=b[0],w=b[1],y=b[2],A=b[3];return new s(q*v+f*A+m*y-r*w,q*w+m*A+r*v-f*y,q*y+r*A+f*w-m*v,q*A-f*v-m*w-r*y)},$mulQuat:function(a,b){var f=a[0],m=a[1],r=a[2],q=a[3],v=b[0],w=b[1],y=b[2],A=b[3];a[0]=q*v+f*A+m*y-r*w;a[1]=q*w+m*A+r*v-f*y;a[2]=q*y+r*A+f*w-m*v;a[3]=q*A-f*v-m*w-r*y;return a},divQuat:function(a,b){var f=a[0],m=a[1],r=a[2],q=a[3],v=b[0],w=b[1],y=b[2],A=b[3],C=1/(A*A+v*v+w*w+y*y);return new s((f*A-q*v-m*
y+r*w)*C,(f*y-q*w+m*A-r*v)*C,(m*v+r*A-q*y-f*w)*C,(q*A+f*v+m*w+r*y)*C)},$divQuat:function(a,b){var f=a[0],m=a[1],r=a[2],q=a[3],v=b[0],w=b[1],y=b[2],A=b[3],C=1/(A*A+v*v+w*w+y*y);a[0]=(f*A-q*v-m*y+r*w)*C;a[1]=(f*y-q*w+m*A-r*v)*C;a[2]=(m*v+r*A-q*y-f*w)*C;a[3]=(q*A+f*v+m*w+r*y)*C;return a},invert:function(a){var b=a[0],f=a[1],m=a[2];a=a[3];var r=1/(b*b+f*f+m*m+a*a);return new s(-b*r,-f*r,-m*r,a*r)},$invert:function(a){var b=a[0],f=a[1],m=a[2],r=a[3],q=1/(b*b+f*f+m*m+r*r);a[0]=-b*q;a[1]=-f*q;a[2]=-m*q;
a[3]=r*q;return a},norm:function(a){var b=a[0],f=a[1],m=a[2];a=a[3];return t(b*b+f*f+m*m+a*a)},normSq:function(a){var b=a[0],f=a[1],m=a[2];a=a[3];return b*b+f*f+m*m+a*a},unit:function(a){return s.scale(a,1/s.norm(a))},$unit:function(a){return s.$scale(a,1/s.norm(a))},conjugate:function(a){return new s(-a[0],-a[1],-a[2],a[3])},$conjugate:function(a){a[0]=-a[0];a[1]=-a[1];a[2]=-a[2];return a}};o=s.prototype={};for(p in k){s[p]=k[p];o[p]=function(a){return function(){var b=h.call(arguments);b.unshift(this);
return s[a].apply(s,b)}}(p)}j.fromQuat=function(a){return new j(a[0],a[1],a[2])};s.fromVec3=function(a,b){return new s(a[0],a[1],a[2],b||0)};s.fromMat4=function(a){var b,f,m;if(a[0]>a[5]&&a[0]>a[10]){b=0;f=1;m=2}else if(a[5]>a[0]&&a[5]>a[10]){b=1;f=2;m=0}else{b=2;f=0;m=1}var r=t(1+a[b*5]-a[f*5]-a[m*5]),q=new s;q[b]=0.5*r;q[f]=0.5*(a["n"+f+""+b]+a["n"+b+""+f])/r;q[m]=0.5*(a["n"+b+""+m]+a["n"+m+""+b])/r;q[3]=0.5*(a["n"+f+""+m]-a["n"+m+""+f])/r;return q};s.fromXRotation=function(a){return new s(z(a/
2),0,0,l(a/2))};s.fromYRotation=function(a){return new s(0,z(a/2),0,l(a/2))};s.fromZRotation=function(a){return new s(0,0,z(a/2),l(a/2))};s.fromAxisRotation=function(a,b){var f=a[0],m=a[1],r=a[2],q=1/t(f*f+m*m+r*r),v=z(b/2),w=l(b/2);return new s(v*f*q,v*m*q,v*r*q,w)};u.fromQuat=function(a){var b=a[3],f=a[0],m=a[1];a=a[2];return new u(b*b+f*f-m*m-a*a,2*f*m-2*b*a,2*f*a+2*b*m,0,2*f*m+2*b*a,b*b-f*f+m*m-a*a,2*m*a-2*b*f,0,2*f*a-2*b*m,2*m*a+2*b*f,b*b-f*f-m*m+a*a,0,0,0,0,1)};PhiloGL.Vec3=j;PhiloGL.Mat4=u;
PhiloGL.Quat=s})();(function(){function x(h){return h!==true?h:false}var t=PhiloGL.$,z=function(h){h=h.getBoundingClientRect();return{x:h.left,y:h.top,bbox:h}},l={get:function(h,d){return h||(d||window).event},getWheel:function(h){return h.wheelDelta?h.wheelDelta/120:-(h.detail||0)/3},getKey:function(h){var d=h.which||h.keyCode,i;a:{i=g.Keys;for(var c in i)if(i[c]==d){i=c;break a}i=void 0}c=d-111;if(c>0&&c<13)i="f"+c;i=i||String.fromCharCode(d).toLowerCase();return{code:d,key:i,shift:h.shiftKey,control:h.ctrlKey,
alt:h.altKey,meta:h.metaKey}},isRightClick:function(h){return h.which==3||h.button==2},getPos:function(h,d){d=d||window;h=h||d.event;var i=d.document;i=i.documentElement||i.body;if(h.touches&&h.touches.length)h=h.touches[0];return{x:h.pageX||h.clientX+i.scrollLeft,y:h.pageY||h.clientY+i.scrollTop}},stop:function(h){h.stopPropagation&&h.stopPropagation();h.cancelBubble=true;if(h.preventDefault)h.preventDefault();else h.returnValue=false}},n=function(h,d){var i=h.canvas;this.scene=h.scene;this.domElem=
i;this.pos=z(i);this.opt=this.callbacks=d;this.size={width:i.width||i.offsetWidth,height:i.height||i.offsetHeight};this.attachEvents()};n.prototype={hovered:false,pressed:false,touched:false,touchMoved:false,moved:false,attachEvents:function(){var h=this.domElem,d=this;if(this.opt.disableContextMenu)h.oncontextmenu=function(){return false};["mouseup","mousedown","mousemove","mouseover","mouseout","touchstart","touchmove","touchend"].forEach(function(c){h.addEventListener(c,function(j,k){d[c](d.eventInfo(c,
j,k))},false)});["keydown","keyup"].forEach(function(c){document.addEventListener(c,function(j,k){d[c](d.eventInfo(c,j,k))},false)});var i="";i=!document.getBoxObjectFor&&window.mozInnerScreenX==null?"mousewheel":"DOMMouseScroll";h.addEventListener(i,function(c,j){d.mousewheel(d.eventInfo("mousewheel",c,j))},false)},eventInfo:function(h,d,i){var c=this.domElem,j=this.scene,k=this.opt,o=this.getSize(),p=k.relative,u=k.centerOrigin,s=k.cachePosition&&this.pos||z(c),a=l.get(d,i),b=l.getPos(d,i);d={};
i=b.x;c=b.y;if(p){i-=s.x;c-=s.y;if(u){i-=o.width/2;c-=o.height/2;c*=-1}}switch(h){case "mousewheel":d.wheel=l.getWheel(a);break;case "keydown":case "keyup":t.extend(d,l.getKey(a));break;case "mouseup":d.isRightClick=l.isRightClick(a)}var f;t.extend(d,{x:i,y:c,cache:false,stop:function(){l.stop(a)},getTarget:function(){if(f)return f;return f=!k.picking||j.pick(b.x-s.x,b.y-s.y,k.lazyPicking)||true}});d.event=a;return d},getSize:function(){if(this.cacheSize)return this.size;var h=this.domElem;return{width:h.width||
h.offsetWidth,height:h.height||h.offsetHeight}},mouseup:function(h){if(!this.moved)if(h.isRightClick)this.callbacks.onRightClick(h,this.hovered);else this.callbacks.onClick(h,x(this.pressed));if(this.pressed){if(this.moved)this.callbacks.onDragEnd(h,x(this.pressed));else this.callbacks.onDragCancel(h,x(this.pressed));this.pressed=this.moved=false}},mouseout:function(h){for(var d=h.relatedTarget,i=this.domElem;d&&d.parentNode;){if(i==d.parentNode)return;d=d.parentNode}if(this.hovered){this.callbacks.onMouseLeave(h,
this.hovered);this.hovered=false}if(this.pressed&&this.moved){this.callbacks.onDragEnd(h);this.pressed=this.moved=false}},mouseover:function(){},mousemove:function(h){if(this.pressed){this.moved=true;this.callbacks.onDragMove(h,x(this.pressed))}else{if(this.hovered){var d=x(h.getTarget());if(!d||d.hash!=this.hash){this.callbacks.onMouseLeave(h,this.hovered);if(this.hash=this.hovered=d){this.hash=d.hash;this.callbacks.onMouseEnter(h,this.hovered)}}else this.callbacks.onMouseMove(h,this.hovered)}else if(this.hash=
this.hovered=x(h.getTarget())){this.hash=this.hovered.hash;this.callbacks.onMouseEnter(h,this.hovered)}if(!this.opt.picking)this.callbacks.onMouseMove(h)}},mousewheel:function(h){this.callbacks.onMouseWheel(h)},mousedown:function(h){this.pressed=h.getTarget();this.callbacks.onDragStart(h,x(this.pressed))},touchstart:function(h){this.touched=h.getTarget();this.callbacks.onTouchStart(h,x(this.touched))},touchmove:function(h){if(this.touched){this.touchMoved=true;this.callbacks.onTouchMove(h,x(this.touched))}},
touchend:function(h){if(this.touched){if(this.touchMoved)this.callbacks.onTouchEnd(h,x(this.touched));else this.callbacks.onTouchCancel(h,x(this.touched));this.touched=this.touchMoved=false}},keydown:function(h){this.callbacks.onKeyDown(h)},keyup:function(h){this.callbacks.onKeyUp(h)}};var g={};g.create=function(h,d){d=t.extend({cachePosition:true,cacheSize:true,relative:true,centerOrigin:true,disableContextMenu:true,bind:false,picking:false,lazyPicking:false,onClick:t.empty,onRightClick:t.empty,
onDragStart:t.empty,onDragMove:t.empty,onDragEnd:t.empty,onDragCancel:t.empty,onTouchStart:t.empty,onTouchMove:t.empty,onTouchEnd:t.empty,onTouchCancel:t.empty,onMouseMove:t.empty,onMouseEnter:t.empty,onMouseLeave:t.empty,onMouseWheel:t.empty,onKeyDown:t.empty,onKeyUp:t.empty},d||{});var i=d.bind;if(i)for(var c in d)c.match(/^on[a-zA-Z0-9]+$/)&&function(j,k){d[j]=function(){return k.apply(i,Array.prototype.slice.call(arguments))}}(c,d[c]);new n(h,d);h.events=d};g.Keys={enter:13,up:38,down:40,left:37,
right:39,esc:27,space:32,backspace:8,tab:9,"delete":46};PhiloGL.Events=g})();(function(){function x(d,i){return t.merge(i||{},d.length==3?{vs:d[0],fs:d[1],gl:d[2]}:d[0]||{})}var t=PhiloGL.$,z=function(d,i,c){var j=d.createShader(c);if(j==null)throw"Error creating the shader with shader type: "+c;d.shaderSource(j,i);d.compileShader(j);if(!d.getShaderParameter(j,d.COMPILE_STATUS)){i=d.getShaderInfoLog(j);d.deleteShader(j);throw"Error while compiling the shader "+i;}return j},l=function(d){var i=d.lastIndexOf("/");
return i=="/"?"./":d.substr(0,i+1)},n=function(d,i,c,j,k){k=k||{};var o;if(o=i.match(/#include "(.*?)"/)){var p=PhiloGL.IO.XHR,u=l(d)+o[1];k[u]&&j("Recursive include");(new p({url:u,noCache:true,onError:function(s){j("Load included file `"+u+"` failed: Code "+s)},onSuccess:function(s){k[u]=true;return n(u,s,function(a){delete k[u];i=i.replace(/#include ".*?"/,a);i=i.replace(/\sHAS_EXTENSION\s*\(\s*([A-Za-z_\-0-9]+)\s*\)/g,function(b,f){return gl.getExtension(f)?" 1 ":" 0 "});return n(u,i,c,j,k)},
j,k)}})).send();return null}else return c(i)},g=function(d,i,c){var j=gl.getUniformLocation(d,i.name);d=i.type;var k=false,o=true,p,u;if(i.size>1&&c)switch(d){case gl.FLOAT:p=gl.uniform1fv;u=Float32Array;o=false;break;case gl.INT:case gl.BOOL:case gl.SAMPLER_2D:case gl.SAMPLER_CUBE:p=gl.uniform1iv;u=Uint16Array;o=false}if(o)switch(d){case gl.FLOAT:p=gl.uniform1f;break;case gl.FLOAT_VEC2:p=gl.uniform2fv;u=c?Float32Array:new Float32Array(2);break;case gl.FLOAT_VEC3:p=gl.uniform3fv;u=c?Float32Array:
new Float32Array(3);break;case gl.FLOAT_VEC4:p=gl.uniform4fv;u=c?Float32Array:new Float32Array(4);break;case gl.INT:case gl.BOOL:case gl.SAMPLER_2D:case gl.SAMPLER_CUBE:p=gl.uniform1i;break;case gl.INT_VEC2:case gl.BOOL_VEC2:p=gl.uniform2iv;u=c?Uint16Array:new Uint16Array(2);break;case gl.INT_VEC3:case gl.BOOL_VEC3:p=gl.uniform3iv;u=c?Uint16Array:new Uint16Array(3);break;case gl.INT_VEC4:case gl.BOOL_VEC4:p=gl.uniform4iv;u=c?Uint16Array:new Uint16Array(4);break;case gl.FLOAT_MAT2:k=true;p=gl.uniformMatrix2fv;
break;case gl.FLOAT_MAT3:k=true;p=gl.uniformMatrix3fv;break;case gl.FLOAT_MAT4:k=true;p=gl.uniformMatrix4fv}if(p.bind)p=p.bind(gl);else{var s=p;p=function(){s.apply(gl,arguments)}}return c&&u?function(a){p(j,new u(a))}:k?function(a){p(j,false,a.toFloat32Array())}:u?function(a){u.set(a.toFloat32Array?a.toFloat32Array():a);p(j,u)}:function(a){p(j,a)};throw"Unknown type: "+d;},h=function(d,i,c,j){var k=c.createProgram();c.attachShader(k,z(c,d,c.VERTEX_SHADER));c.attachShader(k,z(c,i,c.FRAGMENT_SHADER));
c.linkProgram(k);if(!c.getProgramParameter(k,c.LINK_STATUS))throw"Error linking the shader: "+c.getProgramInfoLog(k);if(!k)return false;d={};i={};for(var o,p,u=c.getProgramParameter(k,c.ACTIVE_ATTRIBUTES),s=0;s<u;s++){o=c.getActiveAttrib(k,s);p=o.name;o=c.getAttribLocation(k,o.name);d[p]=o}u=c.getProgramParameter(k,c.ACTIVE_UNIFORMS);for(s=0;s<u;s++){o=c.getActiveUniform(k,s);p=o.name;p=p[p.length-1]=="]"?p.substr(0,p.length-3):p;i[p]=g(k,o,o.name!=p)}this.program=k;this.attributes=d;this.attributeEnabled=
{};this.uniforms=i;this.app=j;this.gl=c;return this};h.prototype={$$family:"program",setUniform:function(d,i){if(this.uniforms[d])this.uniforms[d](i);return this},setUniforms:function(d){for(var i in d)this.setUniform(i,d[i]);return this}};["setBuffer","setBuffers","use"].forEach(function(d){h.prototype[d]=function(){var i=this.app,c=Array.prototype.slice.call(arguments);c.unshift(this);i[d].apply(i,c);return this}});["setFrameBuffer","setFrameBuffers","setRenderBuffer","setRenderBuffers","setTexture",
"setTextures"].forEach(function(d){h.prototype[d]=function(){var i=this.app;i[d].apply(i,arguments);return this}});h.fromShaderIds=function(){var d=PhiloGL.$,i=x(arguments),c=d(i.vs),j=d(i.fs),k=i.gl,o=i.app;program=null;n(i.path,c.innerHTML,function(p){return n(i.path,j.innerHTML,function(u){i.onSuccess(program=new h(p,u,k,o),i)})});return program};h.fromShaderSources=function(){var d=x(arguments,{path:"./"});gl=d.gl;app=d.app;return n(d.path,d.vs,function(i){return n(d.path,d.fs,function(c){try{var j=
new h(i,c,gl,app);if(d.onSuccess)d.onSuccess(j,d);else return j}catch(k){if(d.onError)d.onError(k,d);else throw k;}})})};h.fromDefaultShaders=function(d){d=d||{};var i=d.fs||"Default",c=PhiloGL.Shaders;d.vs=c.Vertex[d.vs||"Default"];d.fs=c.Fragment[i];return PhiloGL.Program.fromShaderSources(d)};h.fromShaderURIs=function(d){d=t.merge({path:"",vs:"",fs:"",noCache:false,onSuccess:t.empty,onError:t.empty},d||{});var i=d.path+d.vs,c=d.path+d.fs;(new PhiloGL.IO.XHR.Group({urls:[i,c],noCache:d.noCache,
onError:function(j){d.onError(j)},onComplete:function(j){try{return n(i,j[0],function(o){return n(c,j[1],function(p){d.vs=o;d.fs=p;return h.fromShaderSources(d)},d.onError)},d.onError)}catch(k){d.onError(k,d)}}})).send()};PhiloGL.Program=h})();(function(){var x=PhiloGL.$,t={},z=function(g){this.opt=g=x.merge({url:"http://philogljs.org/",method:"GET",async:true,noCache:false,sendAsBinary:false,responseType:false,onProgress:x.empty,onSuccess:x.empty,onError:x.empty,onAbort:x.empty,onComplete:x.empty},
g||{});this.initXHR()};z.State={};["UNINITIALIZED","LOADING","LOADED","INTERACTIVE","COMPLETED"].forEach(function(g,h){z.State[g]=h});z.prototype={initXHR:function(){var g=this.req=new XMLHttpRequest,h=this;["Progress","Error","Abort","Load"].forEach(function(d){if(g.addEventListener)g.addEventListener(d.toLowerCase(),function(i){h["handle"+d](i)},false);else g["on"+d.toLowerCase()]=function(i){h["handle"+d](i)}})},send:function(g){var h=this.req,d=this.opt,i=d.async;if(d.noCache)d.url+=(d.url.indexOf("?")>=
0?"&":"?")+x.uid();h.open(d.method,d.url,i);if(d.responseType)h.responseType=d.responseType;if(i)h.onreadystatechange=function(){if(h.readyState==z.State.COMPLETED)if(h.status==200)d.onSuccess(h.responseType?h.response:h.responseText);else d.onError(h.status)};d.sendAsBinary?h.sendAsBinary(g||d.body||null):h.send(g||d.body||null);if(!i)if(h.status==200)d.onSuccess(h.responseType?h.response:h.responseText);else d.onError(h.status)},setRequestHeader:function(g,h){this.req.setRequestHeader(g,h);return this},
handleProgress:function(g){if(g.lengthComputable)this.opt.onProgress(g,Math.round(g.loaded/g.total*100));else this.opt.onProgress(g,-1)},handleError:function(g){this.opt.onError(g)},handleAbort:function(){this.opt.onAbort(e)},handleLoad:function(g){this.opt.onComplete(g)}};z.Group=function(g){function h(k){return function(o){--c;g.onError(o,k);if(!c)g.onComplete(j)}}function d(k){return function(o){--c;j[k]=o;g.onSuccess(o,k);if(!c)g.onComplete(j)}}g=x.merge({urls:[],onError:x.empty,onSuccess:x.empty,
onComplete:x.empty,method:"GET",async:true,noCache:false,sendAsBinary:false,responseType:false},g||{});var i=x.splat(g.urls),c=i.length,j=Array(c);this.reqs=i.map(function(k,o){return new z({url:k,method:g.method,async:g.async,noCache:g.noCache,sendAsBinary:g.sendAsBinary,responseType:g.responseType,body:g.body,onError:h(o),onSuccess:d(o)})})};z.Group.prototype={send:function(){for(var g=0,h=this.reqs,d=h.length;g<d;++g)h[g].send()}};var l=function(g){g=x.merge({url:"http://philogljs.org/",data:{},
noCache:false,onComplete:x.empty,callbackKey:"callback"},g||{});var h=l.counter++,d=[],i;for(i in g.data)d.push(i+"="+g.data[i]);d=d.join("&");if(g.noCache)d+=(d.indexOf("?")>=0?"&":"?")+x.uid();d=g.url+(g.url.indexOf("?")>-1?"&":"?")+g.callbackKey+"=PhiloGL.IO.JSONP.requests.request_"+h+(d.length>0?"&"+d:"");var c=document.createElement("script");c.type="text/javascript";c.src=d;l.requests["request_"+h]=function(j){g.onComplete(j);c.parentNode&&c.parentNode.removeChild(c);c.clearAttributes&&c.clearAttributes()};
document.getElementsByTagName("head")[0].appendChild(c)};l.counter=0;l.requests={};var n=function(g){g=x.merge({src:[],noCache:false,onProgress:x.empty,onComplete:x.empty},g||{});var h=0,d=g.src.length,i=function(){g.onProgress(Math.round(++h/d*100));if(h==d)g.onComplete(o)},c=function(){if(++h==d)g.onComplete(o)},j=g.noCache,k=x.uid(),o=g.src.map(function(p,u){var s=new Image;s.index=u;s.onload=i;s.onerror=c;s.src=p+(j?(p.indexOf("?")>=0?"&":"?")+k:"");return s});return o};t.XHR=z;t.JSONP=l;t.Images=
n;t.Textures=function(g,h){g=x.merge({src:[],noCache:false,onComplete:x.empty},g||{});n({src:g.src,noCache:g.noCache,onComplete:function(d){var i={};d.forEach(function(c,j){i[g.id&&g.id[j]||g.src&&g.src[j]]=x.merge({data:{value:c}},g)});h.setTextures(i);g.onComplete()}})};PhiloGL.IO=t})();(function(){var x=PhiloGL.Vec3,t=PhiloGL.Mat4,z=function(l,n,g,h,d){d=d||{};var i=d.position,c=d.target,j=d.up;this.type=d.type?d.type:"perspective";this.fov=l;this.near=g;this.far=h;this.aspect=n;this.position=
i&&new x(i.x,i.y,i.z)||new x;this.target=c&&new x(c.x,c.y,c.z)||new x;this.up=j&&new x(j.x,j.y,j.z)||new x(0,1,0);if(this.type=="perspective")this.projection=(new t).perspective(l,n,g,h);else{l=g*Math.tan(l*Math.PI/360);d=-l;this.projection=(new t).ortho(d*n,l*n,d,l,g,h)}this.view=new t};z.prototype={update:function(){if(this.type=="perspective")this.projection=(new t).perspective(this.fov,this.aspect,this.near,this.far);else{var l=this.near*Math.tan(this.fov*Math.PI/360),n=-l,g=n*this.aspect,h=l*
this.aspect;this.projection=(new t).ortho(g,h,n,l,this.near,this.far)}this.view.lookAt(this.position,this.target,this.up)},setStatus:function(l){var n=this.position,g=this.view,h=this.projection,d=g.mulMat4(h),i=d.invert();l.setUniforms({cameraPosition:[n.x,n.y,n.z],projectionMatrix:h,viewMatrix:g,viewProjectionMatrix:d,viewInverseMatrix:g.invert(),viewProjectionInverseMatrix:i})}};PhiloGL.Camera=z})();(function(){function x(c,j){if(c&&c.length<j){for(var k=c[0],o=c[1],p=c[2],u=c[3],s=[k,o,p,u],a=
j/c.length,b;--a;){b=a*4;s[b]=k;s[b+1]=o;s[b+2]=p;s[b+3]=u}return new Float32Array(s)}else return c}var t=PhiloGL.$,z=PhiloGL.Vec3,l=PhiloGL.Mat4,n=Math.cos,g=Math.sin,h=Math.PI,d=Array.prototype.slice,i={attributeMap:{position:"vertices",normal:"normals",pickingColor:"pickingColors",colors:"color"}};i.Model=function(c){c=c||{};this.id=c.id||t.uid();this.pickable=!!c.pickable;this.pick=c.pick||function(){return false};this.vertices=c.vertices;this.normals=c.normals;this.textures=c.textures&&t.splat(c.textures);
this.colors=c.colors;this.indices=c.indices;this.shininess=c.shininess||0;this.reflection=c.reflection||0;this.refraction=c.refraction||0;if(c.pickingColors)this.pickingColors=c.pickingColors;if(c.texCoords)this.texCoords=c.texCoords;this.uniforms=c.uniforms||{};this.attributes=c.attributes||{};this.render=c.render;this.drawType=c.drawType||"TRIANGLES";this.display="display"in c?c.display:true;this.onBeforeRender=c.onBeforeRender||t.empty;this.onAfterRender=c.onAfterRender||t.empty;if(c.program)this.program=
c.program;this.position=new z;this.rotation=new z;this.scale=new z(1,1,1);this.matrix=new l;c.computeCentroids&&this.computeCentroids();c.computeNormals&&this.computeNormals()};i.Model.prototype=Object.create(null,{hash:{get:function(){return this.id+" "+this.$pickingIndex}},vertices:{set:function(c){if(c){var j=c.length;if(c.BYTES_PER_ELEMENT)this.$vertices=c;else if(this.$verticesLength==j)this.$vertices.set(c);else this.$vertices=new Float32Array(c);this.$verticesLength=j}else{delete this.$vertices;
delete this.$verticesLength}},get:function(){return this.$vertices}},normals:{set:function(c){if(c){var j=c.length;if(c.BYTES_PER_ELEMENT)this.$normals=c;else if(this.$normalsLength==j)this.$normals.set(c);else this.$normals=new Float32Array(c);this.$normalsLength=j}else{delete this.$normals;delete this.$normalsLength}},get:function(){return this.$normals}},colors:{set:function(c){if(c){var j=c.length;if(c.BYTES_PER_ELEMENT)this.$colors=c;else if(this.$colorsLength==j)this.$colors.set(c);else this.$colors=
new Float32Array(c);if(this.$vertices&&this.$verticesLength/3*4!=j)this.$colors=x(d.call(this.$colors),this.$verticesLength/3*4);this.$colorsLength=this.$colors.length}else{delete this.$colors;delete this.$colorsLength}},get:function(){return this.$colors}},pickingColors:{set:function(c){if(c){var j=c.length;if(c.BYTES_PER_ELEMENT)this.$pickingColors=c;else if(this.$pickingColorsLength==j)this.$pickingColors.set(c);else this.$pickingColors=new Float32Array(c);if(this.$vertices&&this.$verticesLength/
3*4!=j)this.$pickingColors=x(d.call(this.$pickingColors),this.$verticesLength/3*4);this.$pickingColorsLength=this.$pickingColors.length}else{delete this.$pickingColors;delete this.$pickingColorsLength}},get:function(){return this.$pickingColors}},texCoords:{set:function(c){if(c)if(t.type(c)=="object"){var j={},k;for(k in c){var o=c[k];j[k]=o.BYTES_PER_ELEMENT?o:new Float32Array(o)}this.$texCoords=j}else{j=c.length;if(c.BYTES_PER_ELEMENT)this.$texCoords=c;else if(this.$texCoordsLength==j)this.$texCoords.set(c);
else this.$texCoords=new Float32Array(c);this.$texCoordsLength=j}else{delete this.$texCoords;delete this.$texCoordsLength}},get:function(){return this.$texCoords}},indices:{set:function(c){if(c){var j=c.length;if(c.BYTES_PER_ELEMENT)this.$indices=c;else if(this.$indicesLength==j)this.$indices.set(c);else this.$indices=new Uint16Array(c);this.$indicesLength=j}else{delete this.$indices;delete this.$indicesLength}},get:function(){return this.$indices}}});t.extend(i.Model.prototype,{$$family:"model",
update:function(){var c=this.matrix,j=this.position,k=this.rotation,o=this.scale;c.id();c.$translate(j.x,j.y,j.z);c.$rotateXYZ(k.x,k.y,k.z);c.$scale(o.x,o.y,o.z)},computeCentroids:function(){var c=this.vertices,j=[];this.faces.forEach(function(k){var o=[0,0,0],p=0;k.forEach(function(u){u=c[u];o[0]+=u[0];o[1]+=u[1];o[2]+=u[2];p++});o[0]/=p;o[1]/=p;o[2]/=p;j.push(o)});this.centroids=j},computeNormals:function(){var c=this.vertices,j=[];this.faces.forEach(function(k){var o=c[k[0]],p=c[k[1]];k=c[k[2]];
o={x:o[0]-p[0],y:o[1]-p[1],z:o[2]-p[2]};z.$cross(o,{x:k[0]-p[0],y:k[1]-p[1],z:k[1]-p[2]});z.norm(o)>1.0E-6&&z.unit(o);j.push([o.x,o.y,o.z])});this.normals=j}});t.extend(i.Model.prototype,{setUniforms:function(c){c.setUniforms(this.uniforms)},setAttributes:function(c){var j=this.attributes,k;for(k in j){var o=j[k],p=this.id+"-"+k;if(Object.keys(o).length){o.attribute=k;c.setBuffer(p,o);delete o.value}else c.setBuffer(p,true)}},setVertices:function(c){if(this.$vertices)this.dynamic?c.setBuffer("position-"+
this.id,{attribute:"position",value:this.$vertices,size:3}):c.setBuffer("position-"+this.id)},setNormals:function(c){if(this.$normals)this.dynamic?c.setBuffer("normal-"+this.id,{attribute:"normal",value:this.$normals,size:3}):c.setBuffer("normal-"+this.id)},setIndices:function(c){var j=PhiloGL.glConstants;if(this.$indices)this.dynamic?c.setBuffer("indices-"+this.id,{bufferType:j.ELEMENT_ARRAY_BUFFER,drawType:j.STATIC_DRAW,value:this.$indices,size:1}):c.setBuffer("indices-"+this.id)},setPickingColors:function(c){if(this.$pickingColors)this.dynamic?
c.setBuffer("pickingColor-"+this.id,{attribute:"pickingColor",value:this.$pickingColors,size:4}):c.setBuffer("pickingColor-"+this.id)},setColors:function(c){if(this.$colors)this.dynamic?c.setBuffer("color-"+this.id,{attribute:"color",value:this.$colors,size:4}):c.setBuffer("color-"+this.id)},setTexCoords:function(c){if(this.$texCoords){var j=this.id,k,o,p,u;if(this.dynamic)if(t.type(this.$texCoords)=="object"){k=0;o=this.textures;for(p=o.length;k<p;k++){u=o[k];c.setBuffer("texCoord-"+k+"-"+j,{attribute:"texCoord"+
(k+1),value:this.$texCoords[u],size:2})}}else c.setBuffer("texCoord-"+j,{attribute:"texCoord1",value:this.$texCoords,size:2});else if(t.type(this.$texCoords)=="object"){k=0;o=this.textures;for(p=o.length;k<p;k++)c.setBuffer("texCoord-"+k+"-"+j)}else c.setBuffer("texCoord-"+j)}},setTextures:function(c){var j=c.app;glc=PhiloGL.glConstants;this.textures=this.textures?t.splat(this.textures):[];for(var k=0,o=this.textures,p=o.length,u=PhiloGL.Scene.MAX_TEXTURES;k<u;k++){if(k<p)if(j.textureMemo[o[k]].isCube){c.setUniform("hasTextureCube"+
(k+1),true);c.setTexture(o[k],glc["TEXTURE"+(k+5)])}else{c.setUniform("hasTexture"+(k+1),true);c.setTexture(o[k],glc["TEXTURE"+k])}else{c.setUniform("hasTextureCube"+(k+1),false);c.setUniform("hasTexture"+(k+1),false)}c.setUniform("sampler"+(k+1),k);c.setUniform("samplerCube"+(k+1),k+5)}},setState:function(c){this.setUniforms(c);this.setAttributes(c);this.setVertices(c);this.setColors(c);this.setPickingColors(c);this.setNormals(c);this.setTextures(c);this.setTexCoords(c);this.setIndices(c)},unsetState:function(c){var j=
c.attributes;c=c.gl;c.bindBuffer(c.ARRAY_BUFFER,null);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,null);for(var k in j)c.disableVertexAttribArray(j[k])}});i.Cube=function(c){i.Model.call(this,t.extend({vertices:[-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1],texCoords:[0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1],normals:[0,
0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0],indices:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]},c||{}))};i.Cube.prototype=Object.create(i.Model.prototype);i.Sphere=function(c){var j=c.nlat||10,k=c.nlong||10,o=c.radius||1,p=h-0,u=2*h-0,s=(j+1)*(k+1),a=new Float32Array(s*3),b=new Float32Array(s*3);s=new Float32Array(s*2);var f=new Uint16Array(j*
k*6);if(typeof o=="number"){var m=o;o=function(){return m}}for(var r=0;r<=j;r++)for(var q=0;q<=k;q++){var v=q/k,w=r/j,y=u*v,A=p*w,C=g(y);y=n(y);var D=g(A),B=n(A);A=y*D;y=B;C*=D;D=o(A,y,C,v,w);B=q+r*(k+1);var F=B*3;B*=2;a[F+0]=D*A;a[F+1]=D*y;a[F+2]=D*C;b[F+0]=A;b[F+1]=y;b[F+2]=C;s[B+0]=v;s[B+1]=w}o=j+1;for(q=0;q<j;q++)for(r=0;r<k;r++){B=(q*k+r)*6;f[B+0]=r*o+q;f[B+1]=r*o+q+1;f[B+2]=(r+1)*o+q;f[B+3]=(r+1)*o+q;f[B+4]=r*o+q+1;f[B+5]=(r+1)*o+q+1}i.Model.call(this,t.extend({vertices:a,indices:f,normals:b,
texCoords:s},c||{}))};i.Sphere.prototype=Object.create(i.Model.prototype);i.IcoSphere=function(c){var j=c.iterations||0,k=[],o=[],p=Math.sqrt,u=Math.acos,s=Math.atan2,a=Math.PI,b=a*2;c.onAddVertex=c.onAddVertex||t.empty;var f=(1+p(5))/2,m=p(1+f*f);k.push(-1/m,f/m,0,1/m,f/m,0,-1/m,-f/m,0,1/m,-f/m,0,0,-1/m,f/m,0,1/m,f/m,0,-1/m,-f/m,0,1/m,-f/m,f/m,0,-1/m,f/m,0,1/m,-f/m,0,-1/m,-f/m,0,1/m);o.push(0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,
4,11,6,2,10,8,6,7,9,8,1);var r=function(){var T={};return function(Q,R){Q*=3;R*=3;var L=(Q<R?Q:R)+"|"+(Q>R?Q:R);if(L in T)return T[L];var V=(k[Q]+k[R])/2,W=(k[Q+1]+k[R+1])/2,X=(k[Q+2]+k[R+2])/2,Y=p(V*V+W*W+X*X);V/=Y;W/=Y;X/=Y;k.push(V,W,X);return T[L]=k.length/3-1}}();for(f=0;f<j;f++){var q=[],v=0;for(m=o.length;v<m;v+=3){var w=r(o[v],o[v+1]),y=r(o[v+1],o[v+2]),A=r(o[v+2],o[v]);q.push(o[v],w,A,o[v+1],y,w,o[v+2],A,y,w,y,A)}o=q}m=o.length;j=new Float32Array(m*3);r=new Float32Array(m*2);for(f=0;f<m;f+=
3){y=o[f];A=o[f+1];var C=o[f+2];q=y*3;v=A*3;w=C*3;y*=2;A*=2;C*=2;var D=k[q],B=k[q+1],F=k[q+2],I=u(F/p(D*D+B*B+F*F)),J=s(B,D);I/=a;J=1-J/b;var G=k[v],E=k[v+1],H=k[v+2],K=u(H/p(G*G+E*E+H*H)),M=s(E,G);K/=a;M=1-M/b;var N=k[w],O=k[w+1],P=k[w+2],U=u(P/p(N*N+O*O+P*P)),S=s(O,N);U/=a;S=1-S/b;D=z.cross({x:N-G,y:O-E,z:P-H},{x:D-G,y:B-E,z:F-H}).$unit();j[q]=j[v]=j[w]=D.x;j[q+1]=j[v+1]=j[w+1]=D.y;j[q+2]=j[v+2]=j[w+2]=D.z;r[y]=J;r[y+1]=I;r[A]=M;r[A+1]=K;r[C]=S;r[C+1]=U}i.Model.call(this,t.extend({vertices:k,indices:o,
normals:j,texCoords:r},c||{}))};i.IcoSphere.prototype=Object.create(i.Model.prototype);i.TruncatedCone=function(c){var j=c.bottomRadius||0,k=c.topRadius||0,o=c.height||1,p=c.nradial||10,u=c.nvertical||10,s=!!c.topCap,a=!!c.bottomCap,b=(s?2:0)+(a?2:0),f=(p+1)*(u+1+b),m=new Float32Array(f*3),r=new Float32Array(f*3);f=new Float32Array(f*2);var q=new Uint16Array(p*(u+b)*6),v=p+1,w=Math,y=w.atan2(j-k,o),A=w.sin,C=w.cos;w=w.PI;var D=C(y);y=A(y);a=u+(a?2:0);var B=0,F=0;for(s=s?-2:0;s<=a;s++){var I=s/u,J=
o*I,G;if(s<0){J=0;I=1;G=j}else if(s>u){J=o;I=1;G=k}else G=j+(k-j)*(s/u);if(s==-2||s==u+2)I=G=0;J-=o/2;for(var E=0;E<v;E++){var H=A(E*w*2/p),K=C(E*w*2/p);m[B+0]=H*G;m[B+1]=J;m[B+2]=K*G;r[B+0]=s<0||s>u?0:H*D;r[B+1]=s<0?-1:s>u?1:y;r[B+2]=s<0||s>u?0:K*D;f[F+0]=E/p;f[F+1]=I;F+=2;B+=3}}for(s=0;s<u+b;s++)for(E=0;E<p;E++){j=(s*p+E)*6;q[j+0]=v*(s+0)+0+E;q[j+1]=v*(s+0)+1+E;q[j+2]=v*(s+1)+1+E;q[j+3]=v*(s+0)+0+E;q[j+4]=v*(s+1)+1+E;q[j+5]=v*(s+1)+0+E}i.Model.call(this,t.extend({vertices:m,normals:r,texCoords:f,
indices:q},c||{}))};i.TruncatedCone.prototype=Object.create(i.Model.prototype);i.Cone=function(c){c.topRadius=0;c.topCap=!!c.cap;c.bottomCap=!!c.cap;c.bottomRadius=c.radius||3;i.TruncatedCone.call(this,c)};i.Cone.prototype=Object.create(i.TruncatedCone.prototype);i.Cylinder=function(c){c.bottomRadius=c.radius;c.topRadius=c.radius;i.TruncatedCone.call(this,c)};i.Cylinder.prototype=Object.create(i.TruncatedCone.prototype);i.Plane=function(c){var j=c.type,k=j.split(","),o=c[k[0]+"len"],p=c[k[1]+"len"],
u=c["n"+k[0]]||1;k=c["n"+k[1]]||1;var s=c.offset,a=!!c.flipCull,b=(u+1)*(k+1),f=new Float32Array(b*3),m=new Float32Array(b*3);b=new Float32Array(b*2);var r=0,q=0;if(a)o=-o;for(var v=0;v<=k;v++)for(var w=0;w<=u;w++){var y=w/u,A=v/k;b[r+0]=a?1-y:y;b[r+1]=A;r+=2;switch(j){case "x,y":f[q+0]=o*y-o*0.5;f[q+1]=p*A-p*0.5;f[q+2]=s;m[q+0]=0;m[q+1]=0;m[q+2]=a?1:-1;break;case "x,z":f[q+0]=o*y-o*0.5;f[q+1]=s;f[q+2]=p*A-p*0.5;m[q+0]=0;m[q+1]=a?1:-1;m[q+2]=0;break;case "y,z":f[q+0]=s;f[q+1]=o*y-o*0.5;f[q+2]=p*A-
p*0.5;m[q+0]=a?1:-1;m[q+1]=0;m[q+2]=0}q+=3}j=u+1;o=[];for(v=0;v<k;v++)for(w=0;w<u;w++){p=(v*u+w)*6;o[p+0]=(v+0)*j+w;o[p+1]=(v+1)*j+w;o[p+2]=(v+0)*j+w+1;o[p+3]=(v+1)*j+w;o[p+4]=(v+1)*j+w+1;o[p+5]=(v+0)*j+w+1}i.Model.call(this,t.extend({vertices:f,normals:m,texCoords:b,indices:o},c))};i.Plane.prototype=Object.create(i.Model.prototype);i.id=t.time();PhiloGL.O3D=i})();(function(){var x={Vertex:{},Fragment:{}},t=x.Fragment;x.Vertex.Default="#define LIGHT_MAX 4\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec4 pickingColor;\nattribute vec2 texCoord1;\nuniform mat4 viewMatrix;\nuniform mat4 viewInverseMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nuniform mat4 worldInverseMatrix;\nuniform mat4 worldInverseTransposeMatrix;\nuniform mat4 objectMatrix;\nuniform vec3 cameraPosition;\nuniform bool enableLights;\nuniform vec3 ambientColor;\nuniform vec3 directionalColor;\nuniform vec3 lightingDirection;\nuniform vec3 pointLocation[LIGHT_MAX];\nuniform vec3 pointColor[LIGHT_MAX];\nuniform int numberPoints;\nuniform bool useReflection;\nvarying vec3 vReflection;\nvarying vec4 vColor;\nvarying vec4 vPickingColor;\nvarying vec2 vTexCoord;\nvarying vec4 vNormal;\nvarying vec3 lightWeighting;\nvoid main(void) {\nvec4 mvPosition = worldMatrix * vec4(position, 1.0);\nvec4 transformedNormal = worldInverseTransposeMatrix * vec4(normal, 1.0);\nif(!enableLights) {\nlightWeighting = vec3(1.0, 1.0, 1.0);\n} else {\nvec3 plightDirection;\nvec3 pointWeight = vec3(0.0, 0.0, 0.0);\nfloat directionalLightWeighting = max(dot(transformedNormal.xyz, lightingDirection), 0.0);\nfor (int i = 0; i < LIGHT_MAX; i++) {\nif (i < numberPoints) {\nplightDirection = normalize((viewMatrix * vec4(pointLocation[i], 1.0)).xyz - mvPosition.xyz);\npointWeight += max(dot(transformedNormal.xyz, plightDirection), 0.0) * pointColor[i];\n} else {\nbreak;\n}\n}\nlightWeighting = ambientColor + (directionalColor * directionalLightWeighting) + pointWeight;\n}\nif (useReflection) {\nvReflection = (viewInverseMatrix[3] - (worldMatrix * vec4(position, 1.0))).xyz;\n} else {\nvReflection = vec3(1.0, 1.0, 1.0);\n}\nvColor = color;\nvPickingColor = pickingColor;\nvTexCoord = texCoord1;\nvNormal = transformedNormal;\ngl_Position = projectionMatrix * worldMatrix * vec4(position, 1.0);\n}";
t.Default="#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vColor;\nvarying vec4 vPickingColor;\nvarying vec2 vTexCoord;\nvarying vec3 lightWeighting;\nvarying vec3 vReflection;\nvarying vec4 vNormal;\nuniform bool hasTexture1;\nuniform sampler2D sampler1;\nuniform bool hasTextureCube1;\nuniform samplerCube samplerCube1;\nuniform bool enablePicking;\nuniform bool hasPickingColors;\nuniform vec3 pickColor;\nuniform float reflection;\nuniform float refraction;\nuniform bool hasFog;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvoid main(){\nif (!hasTexture1) {\ngl_FragColor = vec4(vColor.rgb * lightWeighting, vColor.a);\n} else {\ngl_FragColor = vec4(texture2D(sampler1, vec2(vTexCoord.s, vTexCoord.t)).rgb * lightWeighting, 1.0);\n}\nif (hasTextureCube1) {\nvec3 nReflection = normalize(vReflection);\nvec3 reflectionValue;\nif (refraction > 0.0) {\nreflectionValue = refract(nReflection, vNormal.xyz, refraction);\n} else {\nreflectionValue = -reflect(nReflection, vNormal.xyz);\n}\nvec4 cubeColor = textureCube(samplerCube1, vec3(-reflectionValue.x, -reflectionValue.y, reflectionValue.z));\ngl_FragColor = vec4(mix(gl_FragColor.xyz, cubeColor.xyz, reflection), 1.0);\n}\nif (enablePicking) {\nif (hasPickingColors) {\ngl_FragColor = vPickingColor;\n} else {\ngl_FragColor = vec4(pickColor, 1.0);\n}\n}\nif (hasFog) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = smoothstep(fogNear, fogFar, depth);\ngl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w), fogFactor);\n}\n}";
PhiloGL.Shaders=x})();(function(){var x=PhiloGL.Vec3,t=PhiloGL.$,z=function(l,n,g){g=t.merge({lights:{enable:false,ambient:{r:0.2,g:0.2,b:0.2},directional:{direction:{x:1,y:1,z:1},color:{r:0,g:0,b:0}}},effects:{fog:false}},g||{});this.program=g.program?l[g.program]:l;this.app=this.program.app;this.camera=n;this.models=[];this.config=g};z.prototype={add:function(){for(var l=0,n=this.models,g=arguments.length;l<g;l++){var h=arguments[l];h.id=h.id||t.uid();n.push(h);this.defineBuffers(h)}},remove:function(l){var n=
this.models;l=n.indexOf(l);l>-1&&n.splice(l,1)},getProgram:function(l){var n=this.program;if(n.$$family!="program"&&l&&l.program){n=n[l.program];n.use()}return n},defineBuffers:function(l){var n=this.getProgram(l),g=l.dynamic;l.dynamic=true;l.setState(n);l.dynamic=g;l.unsetState(n)},beforeRender:function(l){this.setupLighting(l);this.setupEffects(l);this.camera&&this.camera.setStatus(l)},setupLighting:function(l){var n=this.config.lights,g=n.ambient,h=n.directional,d=h.color,i=h.direction,c=n.enable;
n=n.points&&t.splat(n.points)||[];h=n.length;var j=[],k=[],o=[],p=[];i=(new x(i.x,i.y,i.z)).$unit().$scale(-1);l.setUniform("enableLights",c);if(c){l.setUniform("ambientColor",[g.r,g.g,g.b]);l.setUniform("directionalColor",[d.r,d.g,d.b]);l.setUniform("lightingDirection",[i.x,i.y,i.z]);l.setUniform("numberPoints",h);for(g=0;g<h;g++){c=n[g];d=c.position;i=c.color||c.diffuse;c=c.specular;j.push(d.x,d.y,d.z);k.push(i.r,i.g,i.b);o.push(+!!c);c?p.push(c.r,c.g,c.b):p.push(0,0,0)}l.setUniforms({pointLocation:j,
pointColor:k});l.setUniforms({enableSpecular:o,pointSpecularColor:p})}},setupEffects:function(l){var n=this.config.effects.fog,g=n.color||{r:0.5,g:0.5,b:0.5};n?l.setUniforms({hasFog:true,fogNear:n.near,fogFar:n.far,fogColor:[g.r,g.g,g.b]}):l.setUniform("hasFog",false)},render:function(l){l=l||{};var n=this.camera,g=this.program,h=l.renderProgram,d=t.type(g);d=!h&&d=="object";l=t.extend({onBeforeRender:t.empty,onAfterRender:t.empty},l||{});!d&&this.beforeRender(h||g);for(var i=0,c=this.models,j=c.length;i<
j;++i){var k=c[i];if(k.display){g=h||this.getProgram(k);d&&this.beforeRender(g);k.onBeforeRender(g,n);l.onBeforeRender(k,i);this.renderObject(k,g);l.onAfterRender(k,i);k.onAfterRender(g,n)}}},renderToTexture:function(l,n){var g=this.app,h=g.gl;n=n||{};var d=g.textures[l+"-texture"];g=g.textureMemo[l+"-texture"];this.render(n);h.bindTexture(g.textureType,d)},renderObject:function(l,n){var g=this.camera,h=l.matrix,d=g.view.mulMat4(h),i=d.invert(),c=i.transpose();app=n.app;gl=app.gl;l.setState(n);n.setUniforms({objectMatrix:h,
worldMatrix:d,worldInverseMatrix:i,worldInverseTransposeMatrix:c});if(l.render)l.render(gl,n,g);else l.$indicesLength?gl.drawElements(l.drawType!==undefined?gl.get(l.drawType):gl.TRIANGLES,l.$indicesLength,gl.UNSIGNED_SHORT,0):gl.drawArrays(l.drawType!==undefined?gl.get(l.drawType):gl.TRIANGLES,0,l.$verticesLength/3);l.unsetState(n)},setupPicking:function(){var l=this.app,n=PhiloGL.Program.fromDefaultShaders({app:l,gl:l.gl});l.setFrameBuffer("$picking",{width:5,height:1,bindToTexture:{parameters:[{name:"TEXTURE_ MAG_FILTER",
value:"LINEAR"},{name:"TEXTURE_MIN_FILTER",value:"LINEAR",generateMipmap:false}]},bindToRenderBuffer:true});l.setFrameBuffer("$picking",false);this.pickingProgram=n},pick:function(l,n){this.pickingProgram||this.setupPicking();var g={},h=[],d=app.usedProgram,i=this.pickingProgram,c=this.camera,j=c.target,k=c.aspect,o=this.config,p=o.lights.enable,u=o.effects.fog,s=gl.canvas.width,a=gl.canvas.height,b=this.unproject([l*2/s-1,1-n*2/a,1],c),f=new Uint8Array(4);this.camera.target=b;this.camera.update();
o.lights.enable=false;o.effects.fog=false;app.setFrameBuffer("$picking",true);i.use();i.setUniform("enablePicking",true);gl.disable(gl.BLEND);gl.viewport(0,0,5,1);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.readPixels(0,0,1,1,gl.RGBA,gl.UNSIGNED_BYTE,f);this.renderPickingScene({background:f[0]+f[1]*256+f[2]*65536,o3dHash:g,o3dList:h,hash:[]});gl.readPixels(2,0,1,1,gl.RGBA,gl.UNSIGNED_BYTE,f);b=[f[0],f[1],f[2]].join();b=g[b];var m;if(!b)for(var r=0,q=h.length;r<q;r++){b=h[r];m=b.pick(f);if(m!==
false)b.$pickingIndex=m;else b=false}app.setFrameBuffer("$picking",false);app.setTexture("$picking-texture",false);i.setUniform("enablePicking",false);o.lights.enable=p;o.effects.fog=u;d&&d.use();gl.viewport(0,0,s,a);c.target=j;c.aspect=k;c.update();this.o3dHash=g;this.o3dList=h;this.pixel=f;this.capture=void 0;return b&&b.pickable&&b},unproject:function(l,n){return n.view.invert().mulMat4(n.projection.invert()).mulVec3(l)},renderPickingScene:function(l){if(this.config.renderPickingScene)this.config.renderPickingScene.call(this,
l);else{var n=this.pickingProgram,g=l.o3dHash,h=l.o3dList,d=l.background,i=l.hash,c=0;this.renderToTexture("$picking",{renderProgram:n,onBeforeRender:function(j,k){if(k==d)c=1;var o=k+c,p=!!j.pickingColors;n.setUniform("hasPickingColors",p);if(p)h.push(j);else{i[0]=o%256;i[1]=(o/256>>0)%256;i[2]=(o/65536>>0)%256;n.setUniform("pickColor",[i[0]/255,i[1]/255,i[2]/255]);g[i.join()]=j}}})}},resetPicking:t.empty};z.MAX_TEXTURES=10;z.MAX_POINT_LIGHTS=4;z.PICKING_RES=4;PhiloGL.Scene=z})();(function(){function x(t,
z){for(var l=this.workers=[];z--;)l.push(new Worker(t))}x.prototype={map:function(t){var z=this.workers,l=this.configs=[],n=0;for(z=z.length;n<z;n++)l.push(t&&t(n));return this},reduce:function(t){for(var z=t.reduceFn,l=this.workers,n=this.configs,g=l.length,h=t.initialValue,d=function(k){g--;h=h===undefined?k.data:z(h,k.data);if(g==0)t.onComplete(h)},i=0,c=g;i<c;i++){var j=l[i];j.onmessage=d;j.postMessage(n[i])}return this}};PhiloGL.WorkerGroup=x})();(function(){var x=PhiloGL.$,t=function(d){this.opt=
x.merge({delay:0,duration:1E3,transition:function(i){return i},onCompute:x.empty,onComplete:x.empty},d||{})},z=t.Queue=[];t.prototype={time:null,start:function(d){this.opt=x.merge(this.opt,d||{});this.time=x.time();this.animating=true;z.push(this)},step:function(){if(this.animating){var d=x.time(),i=this.time,c=this.opt,j=c.delay,k=c.duration,o=0;if(d<i+j)c.onCompute.call(this,o);else if(d<i+j+k){o=c.transition((d-i-j)/k);c.onCompute.call(this,o)}else{this.animating=false;c.onCompute.call(this,1);
c.onComplete.call(this)}}}};t.compute=function(d,i,c){return d+(i-d)*c};t.Transition={linear:function(d){return d}};var l=t.Transition;(function(){var d=function(j,k){k=x.splat(k);return x.extend(j,{easeIn:function(o){return j(o,k)},easeOut:function(o){return 1-j(1-o,k)},easeInOut:function(o){return o<=0.5?j(2*o,k)/2:(2-j(2*(1-o),k))/2}})},i={Pow:function(j,k){return Math.pow(j,k[0]||6)},Expo:function(j){return Math.pow(2,8*(j-1))},Circ:function(j){return 1-Math.sin(Math.acos(j))},Sine:function(j){return 1-
Math.sin((1-j)*Math.PI/2)},Back:function(j,k){k=k[0]||1.618;return Math.pow(j,2)*((k+1)*j-k)},Bounce:function(j){for(var k,o=0,p=1;;o+=p,p/=2)if(j>=(7-4*o)/11){k=p*p-Math.pow((11-6*o-11*j)/4,2);break}return k},Elastic:function(j,k){return Math.pow(2,10*--j)*Math.cos(20*j*Math.PI*(k[0]||1)/3)}},c;for(c in i)l[c]=d(i[c]);["Quad","Cubic","Quart","Quint"].forEach(function(j,k){l[j]=d(function(o){return Math.pow(o,[k+2])})})})();var n=self||window,g=function(){var d=[];if(z.length){for(var i=0,c=z.length,
j;i<c;i++){j=z[i];j.step();j.animating&&d.push(j)}t.Queue=z=d}};if(n){var h=false;["webkitAnimationTime","mozAnimationTime","animationTime","webkitAnimationStartTime","mozAnimationStartTime","animationStartTime"].forEach(function(d){if(d in n){t.animationTime=function(){return n[d]};h=true}});if(!h)t.animationTime=x.time;h=false;["webkitRequestAnimationFrame","mozRequestAnimationFrame","requestAnimationFrame"].forEach(function(d){if(d in n){t.requestAnimationFrame=function(i){n[d](function(){g();
i()})};h=true}});if(!h)t.requestAnimationFrame=function(d){setTimeout(function(){g();d()},1E3/60)}}PhiloGL.Fx=t})();(function(){var x=PhiloGL.$,t={},z=function(){};z.postProcess=function(){var l=new PhiloGL.O3D.Plane({type:"x,y",xlen:1,ylen:1,offset:0}),n=new PhiloGL.Camera(45,1,0.1,500,{position:{x:0,y:0,z:1.205}}),g=new PhiloGL.Scene({},n);return function(h,d){var i=d.gl,c=d.program.$$family?d.program:d.program[h.program],j=h.fromTexture?x.splat(h.fromTexture):[],k=h.toFrameBuffer,o=!!h.toScreen,
p=h.width||d.canvas.width,u=h.height||d.canvas.height;n.aspect=h.aspectRatio?h.aspectRatio:Math.max(u/p,p/u);n.update();g.program=c;l.textures=j;l.program=c;g.models.length||g.add(l);if(k){k in d.frameBufferMemo||d.setFrameBuffer(k,{width:p,height:u,bindToTexture:{parameters:[{name:"TEXTURE_MAG_FILTER",value:"LINEAR"},{name:"TEXTURE_MIN_FILTER",value:"LINEAR",generateMipmap:false}]},bindToRenderBuffer:false});c.use();d.setFrameBuffer(k,true);i.viewport(0,0,p,u);i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT);
c.setUniforms(h.uniforms||{});g.renderToTexture(k);d.setFrameBuffer(k,false)}if(o){c.use();i.viewport(0,0,p,u);i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT);c.setUniforms(h.uniforms||{});g.render()}return this}}();t.Image=z;PhiloGL.Media=t})()})();

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  PhiloGL.O3D.P3DModel = (function(_super) {

    __extends(P3DModel, _super);

    function P3DModel(opts, callback) {
      this.opts = opts != null ? opts : {};
      this.render = __bind(this.render, this);

      this._onP3DLoad = __bind(this._onP3DLoad, this);

      this.load = __bind(this.load, this);

      this.opts.render = this.render;
      PhiloGL.O3D.Model.call(this, this.opts);
      if (this.opts.src != null) {
        this.load(this.opts.src, callback);
      }
    }

    P3DModel.prototype.load = function(src, callback) {
      this.callback = callback;
      return new P3D(src, this.opts.p3d, this._onP3DLoad);
    };

    P3DModel.prototype._onP3DLoad = function(p3d) {
      var i, j, k, newColors, _i, _j, _k, _len, _ref, _ref1;
      _ref = ["vertices", "normals"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        this[k] = p3d[k];
      }
      newColors = new Float32Array(p3d.vertices.length * 4 / 3);
      for (j = _j = 0, _ref1 = p3d.vertices.length / 3; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; j = 0 <= _ref1 ? ++_j : --_j) {
        for (i = _k = 0; _k <= 3; i = ++_k) {
          newColors[i + j * 4] = this.colors[i];
        }
      }
      this.colors = new Float32Array(newColors);
      this._loadedP3D = true;
      return typeof this.callback === "function" ? this.callback(p3d, this) : void 0;
    };

    P3DModel.prototype.render = function(gl, program, camera) {
      var drawType;
      if (this._loadedP3D != null) {
        drawType = this.drawType != null ? gl.TRIANGLES : gl.get(this.drawType);
        return gl.drawArrays(drawType, 0, this.$verticesLength / 3);
      }
    };

    return P3DModel;

  })(PhiloGL.O3D.Model);

}).call(this);

// TODO!
/*
# Finding the max and min points
max = ( Number.MIN_VALUE for i in [0..2])
min = ( Number.MAX_VALUE for i in [0..2])

for i in [0 .. verts.length-1] by 3
  for j in [0..2]
    max[j] = verts[i+j] if verts[i+j] > max[j]
    min[j] = verts[i+j] if verts[i+j] < min[j]

# Finding the object's center
center = ( (max[i] + min[i])/2 for i in [0..2] )

# Centering the object
if opts.center
  verts[i+j] = verts[i+j] - center[j] for j in [0..2] for i in [0 .. verts.length-1] by 3

console.log min
console.log max
#console.log center
*/
/*
computeNormals = function(onlyMissingNormals) {
  var nonZeroNormals, vA, vB, vC;
  for (i = 0; i < $vertices.length-1; i+=3)
  {
    // Only add normals if they are missing (ie. all zero)
    if(onlyMissingNormals == true)
    {
      nonZeroNormals = false;
      for (j in [0,1,2])
      {
        if (normal[i+j] != 0) nonZeroNormals = true;
      }
      if (nonZeroNormals == true) continue;
    }

    for (var j = 0; j < 3; j++)
    {
      // Work in progress..
      vA = verts[i+j];
      vB = verts[i+j+3];
      vC = verts[i+j+6];
      vC - vB
    }
  }
}
*/
(function() {
  var ajax, attemptTransfer, base64_encode, capitalize, data, eachLine, fileExt, hermiteSpline, isWorker, parseXml, parserPipeline, sign, startsWith, webWorkerFn, webWorkerURL, workerOptKeys, workerReturnedKeys, _webWorkerURL,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  startsWith = function(str, substring) {
    return str.slice(0, (substring.length - 1) + 1 || 9e9) === substring;
  };

  eachLine = function(str, callback) {
    var i, line, _i, _len, _ref;
    _ref = str.split(/\r?\n/);
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      line = _ref[i];
      callback(line, i);
    }
    return void 0;
  };

  capitalize = function(str) {
    return "" + (str[0].toUpperCase()) + str.slice(1);
  };

  sign = function(num) {
    if (num > 0) {
      return +1;
    } else if (num < 0) {
      return -1;
    } else {
      return 0;
    }
  };

  fileExt = function(str) {
    return str.split('.').pop();
  };

  ajax = function(opts, callback) {
    var xhr;
    xhr = new XMLHttpRequest();
    xhr.open("GET", opts.url, true);
    xhr.responseType = "blob";
    if (callback != null) {
      xhr.onload = (function() {
        return callback(xhr.response);
      });
    }
    xhr.send();
    return xhr;
  };

  parseXml = function(text) {
    var xmlDoc;
    if (self.DOMParser) {
      return new DOMParser().parseFromString(text, "text/xml");
    } else {
      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = false;
      return xml.loadXML(text);
    }
  };

  hermiteSpline = function(s, v, t) {
    var c, i, _i, _results;
    c = [[2 * Math.pow(s, 3) - 3 * Math.pow(s, 2) + 1, Math.pow(s, 3) - 2 * Math.pow(s, 2) + s], [-2 * Math.pow(s, 3) + 3 * Math.pow(s, 2), Math.pow(s, 3) - Math.pow(s, 2)]];
    _results = [];
    for (i = _i = 0; _i <= 2; i = ++_i) {
      _results.push(v[0][i] * c[0][0] + t[0][i] * c[0][1] + v[1][i] * c[1][0] + t[1][i] * c[1][1]);
    }
    return _results;
  };

  base64_encode = function(data) {
    var ac, b64, bits, enc, h1, h2, h3, h4, i, o1, o2, o3, r, tmp_arr;
    b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    o1 = void 0;
    o2 = void 0;
    o3 = void 0;
    h1 = void 0;
    h2 = void 0;
    h3 = void 0;
    h4 = void 0;
    bits = void 0;
    i = 0;
    ac = 0;
    enc = "";
    tmp_arr = [];
    if (!data) {
      return data;
    }
    while (true) {
      o1 = data.charCodeAt(i++);
      o2 = data.charCodeAt(i++);
      o3 = data.charCodeAt(i++);
      bits = o1 << 16 | o2 << 8 | o3;
      h1 = bits >> 18 & 0x3f;
      h2 = bits >> 12 & 0x3f;
      h3 = bits >> 6 & 0x3f;
      h4 = bits & 0x3f;
      tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
      if (!(i < data.length)) {
        break;
      }
    }
    enc = tmp_arr.join("");
    r = data.length % 3;
    return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
  };

  isWorker = self.document === void 0;

  workerReturnedKeys = ['normals', 'vertices', 'indices', 'nOfTriangles', 'blob'];

  if (!isWorker) {
    webWorkerFn = arguments.callee;
    _webWorkerURL = void 0;
    webWorkerURL = function() {
      var str, webWorkerBlob;
      if (_webWorkerURL != null) {
        return _webWorkerURL;
      }
      str = webWorkerFn.toString();
      str = str.replace(/^\s*function\s*\(\)\s*{/, "").replace(/}\s*$/, '');
      webWorkerBlob = new Blob([str], {
        type: "text/javascript"
      });
      return _webWorkerURL = (window.URL || window.webkitURL).createObjectURL(webWorkerBlob);
    };
  } else {
    parserPipeline = null;
    data = null;
    attemptTransfer = navigator.userAgent.toLowerCase().indexOf('firefox/18') === -1;
    this.onmessage = function(event) {
      return new P3D.Worker(event.data, function(worker) {
        var k, msg, transfers, _i, _len;
        msg = {};
        for (_i = 0, _len = workerReturnedKeys.length; _i < _len; _i++) {
          k = workerReturnedKeys[_i];
          msg[k] = worker[k];
        }
        transfers = (function() {
          var _j, _len1, _ref, _results;
          _ref = ['normals', 'vertices', 'indices'];
          _results = [];
          for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
            k = _ref[_j];
            _results.push(worker[k].buffer);
          }
          return _results;
        })();
        return postMessage(msg, attemptTransfer ? transfers : void 0);
      });
    };
  }

  self.P3D = (function() {

    P3D.prototype._fileTypeWhitelist = ["Stl", "Amf", "Obj"];

    function P3D(src, opts, callback) {
      var _this = this;
      this.opts = opts;
      this.callback = callback;
      this._onWorkerComplete = __bind(this._onWorkerComplete, this);

      this.cloneFromMesh = __bind(this.cloneFromMesh, this);

      if (typeof this.opts === 'function') {
        this.callback = this.opts;
        this.opts = void 0;
      }
      if (this.opts == null) {
        this.opts = {
          background: true
        };
      }
      if ((src.vertices != null) && (src.indices != null) && (src.normals != null)) {
        this._initWorker({
          vertices: src.vertices,
          indices: src.indices,
          normals: src.normals
        });
        return this;
      }
      this.filename = typeof src === "string" ? src.split("/").pop().replace("/", "") : src.name;
      this.fileType = capitalize(fileExt(this.filename).toLowerCase());
      if (this._fileTypeWhitelist.indexOf(this.fileType) === -1) {
        throw "Unable to parse file extension or unsupported file extension: " + this.fileType;
      }
      if (this.fileType === "Amf") {
        this.opts.background = false;
      }
      if (typeof src === "string") {
        ajax({
          url: src
        }, function(response) {
          return _this._initWorker({
            blob: response
          });
        });
      } else if ((src instanceof Blob) || (src instanceof File)) {
        this._initWorker({
          blob: src
        });
      } else {
        throw "Invalid P3D src object.";
      }
    }

    P3D.prototype.cloneFromMesh = function(opts, callback) {
      var k, newSrc, _i, _len, _ref;
      newSrc = {};
      _ref = ["normals", "vertices", "indices"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        newSrc[k] = new Float32Array(this[k]);
      }
      return new P3D(newSrc, opts, callback);
    };

    P3D.prototype._debug = function() {
      return (P3D.debug != null) && P3D.debug;
    };

    P3D.prototype._workerDebugMsg = function(done) {
      var asType, seconds, suffix;
      if (this._debug()) {
        if (done === true) {
          seconds = (new Date().getTime() - this._parserStartMs) / 1000;
          suffix = "[ DONE " + seconds + "s ]";
        } else {
          this._parserStartMs = new Date().getTime();
          suffix = '';
        }
        asType = this.fileType != null ? " as " + (this.fileType.toUpperCase()) : "";
        return console.log("Processing " + (this.filename || 'unnamed model') + asType + ".. " + suffix);
      }
    };

    P3D.prototype._initWorker = function(workerOpts) {
      var k, transfers, worker, _i, _len, _ref,
        _this = this;
      this._workerDebugMsg(false);
      workerOpts.pipeline = this.opts.pipeline || [];
      workerOpts.fileType = this.fileType;
      workerOpts.scale = this.opts.scale;
      if (this.opts.background === true) {
        if (this._debug()) {
          console.log("Running as a background job");
        }
        worker = new Worker(webWorkerURL());
        worker.onmessage = function(e) {
          return _this._onWorkerComplete(e.data);
        };
        worker.addEventListener("error", (function(e) {
          return console.log(e);
        }), false);
        worker.postMessage = worker.webkitPostMessage || worker.postMessage;
        transfers = [];
        _ref = ["vertices", "normals", "indices"];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          k = _ref[_i];
          if (workerOpts[k] != null) {
            transfers.push(workerOpts[k].buffer);
          }
        }
        return worker.postMessage(workerOpts, transfers);
      } else {
        return new P3D.Worker(workerOpts, this._onWorkerComplete);
      }
    };

    P3D.prototype._onWorkerComplete = function(worker) {
      var k, _i, _len;
      for (_i = 0, _len = workerReturnedKeys.length; _i < _len; _i++) {
        k = workerReturnedKeys[_i];
        this[k] = worker[k];
      }
      this._workerDebugMsg(true);
      return typeof this.callback === "function" ? this.callback(this) : void 0;
    };

    return P3D;

  })();

  workerOptKeys = ["blob", "vertices", "indices", "normals", "fileType", "scale"];

  self.P3D.Worker = (function() {

    function Worker(opts, callback) {
      var k, _i, _len;
      this.callback = callback;
      this._eachFace = __bind(this._eachFace, this);

      this._onReaderLoad = __bind(this._onReaderLoad, this);

      for (_i = 0, _len = workerOptKeys.length; _i < _len; _i++) {
        k = workerOptKeys[_i];
        this[k] = opts[k];
      }
      this.pipeline = opts.pipeline || [];
      this.pipeline.push("_applyScaling");
      if (this.blob != null) {
        this._initReader("Text");
      } else {
        this._executePipeline();
        this.callback(this);
      }
    }

    Worker.prototype._executePipeline = function() {
      var _results;
      _results = [];
      while (this.pipeline.length > 0) {
        _results.push(this[this.pipeline.pop()]());
      }
      return _results;
    };

    Worker.prototype._toMillimeters = function(unitsOfMeasurement) {
      var conversions, scale;
      conversions = {
        mm: 1.0,
        millimeter: 1.0,
        meter: 1000.0,
        inch: 25.4,
        feet: 304.8,
        micron: 0.001
      };
      scale = conversions[unitsOfMeasurement.toLowerCase()];
      if (scale != null) {
        return scale;
      }
      throw "" + unitsOfMeasurement + " is not a known unit of measurement";
    };

    Worker.prototype._initGeometry = function(nOfTriangles, nOfIndices) {
      var i, indices, _i, _ref;
      this.nOfTriangles = nOfTriangles;
      this.normals = new Float32Array(this.nOfTriangles * 9);
      this.vertices = this.verts = new Float32Array(this.nOfTriangles * 9);
      if (nOfIndices != null) {
        this.indices = new Uint32Array(nOfIndices);
      } else {
        indices = this.indices = new Uint32Array(this.nOfTriangles * 3);
        for (i = _i = 0, _ref = indices.length; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          indices[i] = i;
        }
      }
      return [this.normals, this.verts, this.indices];
    };

    Worker.prototype._addFace = function(face, mesh, index) {
      var attr, j, k, _i, _len, _ref, _results;
      _ref = ['vertices', 'normals'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        attr = _ref[_i];
        _results.push((function() {
          var _j, _results1;
          _results1 = [];
          for (k = _j = 0; _j <= 2; k = ++_j) {
            _results1.push((function() {
              var _k, _results2;
              _results2 = [];
              for (j = _k = 0; _k <= 2; j = ++_k) {
                _results2.push(mesh[attr][index + j * 3 + k] = face[attr][j][k]);
              }
              return _results2;
            })());
          }
          return _results1;
        })());
      }
      return _results;
    };

    Worker.prototype._expandVerts = function() {
      var attr, exp, i, _i, _j, _k, _len, _len1, _ref, _ref1, _ref2,
        _this = this;
      this.nOfTriangles = this.indices.length / 3;
      exp = {};
      _ref = ['vertices', 'normals'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        attr = _ref[_i];
        exp[attr] = new Float32Array(this.nOfTriangles * 9);
      }
      this._eachFace(function(face, i) {
        return _this._addFace(face, exp, i * 9);
      });
      for (i = _j = 0, _ref1 = this.indices.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
        this.indices[i] = i;
      }
      _ref2 = ['vertices', 'normals'];
      for (_k = 0, _len1 = _ref2.length; _k < _len1; _k++) {
        attr = _ref2[_k];
        this[attr] = exp[attr];
      }
      return this.verts = this.vertices;
    };

    Worker.prototype._initReader = function(type) {
      var r;
      if (type != null) {
        this.dataType = type;
      }
      r = this.reader = new FileReader();
      r.onload = this._onReaderLoad;
      return r["readAs" + type](this.blob);
    };

    Worker.prototype._binaryStlCheck = function(text) {
      return this.fileType === "Stl" && this.dataType === "Text" && text.slice(0, 81).match(/^solid /) === null;
    };

    Worker.prototype._onReaderLoad = function() {
      data = this.reader.result;
      delete this.reader;
      if (this._binaryStlCheck(data)) {
        return this._initReader("ArrayBuffer");
      }
      this["_parse" + this.dataType + this.fileType](data);
      this._executePipeline();
      return this.callback(this);
    };

    Worker.prototype._parseTextAmf = function(text) {
      var $, attr, cross, exp, i, indiceCount, indices, isFlat, magnitude, nOfTriangles, nOfVerts, normalize, normals, read, root, scale, subdivide, subdivisionLevels, trianglesPerSurface, unitStr, vertCount, verts, xml, xmlEval, _i, _j, _k, _len, _len1, _ref, _ref1, _ref2, _ref3,
        _this = this;
      xml = parseXml(text);
      root = xml.documentElement;
      xmlEval = function(query) {
        return xml.evaluate(query, xml, null, XPathResult.ANY_TYPE, null);
      };
      read = function(node, k) {
        return node.getElementsByTagName(k)[0].textContent;
      };
      $ = function(query, callback) {
        var node, results;
        results = xmlEval(query);
        while ((node = results.iterateNext()) != null) {
          callback(node);
        }
        return void 0;
      };
      unitStr = root.getAttribute("unit") || root.getAttribute("units");
      scale = this._toMillimeters(unitStr);
      vertCount = 0;
      indiceCount = 0;
      nOfTriangles = xmlEval('count(//triangle)').numberValue;
      nOfVerts = xmlEval('count(//vertex)').numberValue;
      _ref = this._initGeometry(nOfVerts, nOfTriangles * 3), normals = _ref[0], verts = _ref[1], indices = _ref[2];
      $("//vertex", function(node) {
        var coords, i, k, n, normalNodeList, _i, _len, _ref1, _results;
        coords = node.getElementsByTagName("coordinates")[0];
        normalNodeList = node.getElementsByTagName("normal");
        if (normalNodeList.length === 1) {
          n = (function() {
            var _i, _len, _ref1, _results;
            _ref1 = ['nx', 'ny', 'nz'];
            _results = [];
            for (i = _i = 0, _len = _ref1.length; _i < _len; i = ++_i) {
              k = _ref1[i];
              _results.push(normals[vertCount + i] = parseFloat(read(normalNodeList[0], k)));
            }
            return _results;
          })();
        }
        _ref1 = ['x', 'y', 'z'];
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          k = _ref1[_i];
          _results.push(verts[vertCount++] = parseFloat(read(coords, k)) * scale);
        }
        return _results;
      });
      $("//triangle", function(node) {
        var k, _i, _results;
        _results = [];
        for (k = _i = 1; _i <= 3; k = ++_i) {
          _results.push(indices[indiceCount++] = parseInt(read(node, "v" + k)));
        }
        return _results;
      });
      isFlat = function(face) {
        var n, _ref1;
        return ((n = face.normals)[0] === (_ref1 = n[1]) && _ref1 === n[2]);
      };
      cross = function(vA, vB) {
        return [vA[1] * vB[2] - vA[2] * vB[1], vA[2] * vB[0] - vA[0] * vB[2], vA[0] * vB[1] - vA[1] * vB[0]];
      };
      magnitude = function(v) {
        return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2) + Math.pow(v[2], 2));
      };
      normalize = function(v) {
        var i, length, _i, _results;
        length = magnitude(v);
        _results = [];
        for (i = _i = 0; _i <= 2; i = ++_i) {
          _results.push(v[i] = v[i] / length);
        }
        return _results;
      };
      this._expandVerts();
      nOfTriangles = this.nOfTriangles;
      this._eachFace(this._calculateVertexNormals);
      subdivisionLevels = 4;
      trianglesPerSurface = Math.pow(4, subdivisionLevels);
      this._eachFace(function(face) {
        if (!isFlat(face)) {
          return nOfTriangles += trianglesPerSurface - 1;
        }
      });
      exp = {};
      _ref1 = ['vertices', 'normals'];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        attr = _ref1[_i];
        exp[attr] = new Float32Array(nOfTriangles * 9);
      }
      vertCount = 0;
      subdivide = function(face, fIndex) {
        var crossProduct, d, edge, i, j, midNormals, midVerts, n, n01, newFaces, t, v, v01, _j, _len1, _ref2;
        midVerts = [];
        midNormals = [];
        _ref2 = [[0, 1], [1, 2], [2, 0]];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          edge = _ref2[_j];
          v = [face.vertices[edge[0]], face.vertices[edge[1]]];
          n = [face.normals[edge[0]], face.normals[edge[1]]];
          d = (function() {
            var _k, _results;
            _results = [];
            for (i = _k = 0; _k <= 2; i = ++_k) {
              _results.push(v[1][i] - v[0][i]);
            }
            return _results;
          })();
          t = (function() {
            var _k, _results;
            _results = [];
            for (i = _k = 0; _k <= 1; i = ++_k) {
              crossProduct = cross(cross(n[i], d), n[i]);
              _results.push((function() {
                var _l, _results1;
                _results1 = [];
                for (j = _l = 0; _l <= 2; j = ++_l) {
                  _results1.push(magnitude(d) * crossProduct[j] / magnitude(crossProduct));
                }
                return _results1;
              })());
            }
            return _results;
          })();
          midVerts.push(v01 = hermiteSpline(0.5, v, t, fIndex));
          midNormals.push(n01 = normalize((function() {
            var _k, _results;
            _results = [];
            for (i = _k = 0; _k <= 2; i = ++_k) {
              _results.push((n[1][i] + n[0][i]) / 2);
            }
            return _results;
          })()));
        }
        newFaces = (function() {
          var _k, _results;
          _results = [];
          for (i = _k = 0; _k <= 2; i = ++_k) {
            _results.push({
              vertices: [midVerts[i], midVerts[j = (i + 2) % 3], face.vertices[i]],
              normals: [midNormals[i], midNormals[j], face.normals[i]]
            });
          }
          return _results;
        })();
        newFaces.push({
          vertices: midVerts,
          normals: midNormals
        });
        return newFaces;
      };
      this._eachFace(function(face, fIndex) {
        var f, f2, faces, i, j, k, newFaces, _j, _k, _l, _len1, _len2, _len3, _len4, _m, _n, _o, _p, _ref2, _ref3, _ref4, _results;
        if (isFlat(face)) {
          _ref2 = ['vertices', 'normals'];
          for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
            attr = _ref2[_j];
            for (k = _k = 0; _k <= 2; k = ++_k) {
              for (j = _l = 0; _l <= 2; j = ++_l) {
                exp[attr][vertCount + j * 3 + k] = face[attr][j][k];
              }
            }
          }
          return vertCount += 9;
        } else {
          faces = [face];
          newFaces = [];
          for (i = _m = 0, _ref3 = subdivisionLevels - 1; 0 <= _ref3 ? _m <= _ref3 : _m >= _ref3; i = 0 <= _ref3 ? ++_m : --_m) {
            newFaces = [];
            for (_n = 0, _len2 = faces.length; _n < _len2; _n++) {
              f = faces[_n];
              _ref4 = subdivide(f, fIndex + Math.pow(4, i));
              for (_o = 0, _len3 = _ref4.length; _o < _len3; _o++) {
                f2 = _ref4[_o];
                newFaces.push(f2);
              }
            }
            faces = newFaces;
          }
          _results = [];
          for (_p = 0, _len4 = newFaces.length; _p < _len4; _p++) {
            f = newFaces[_p];
            _this._addFace(f, exp, vertCount);
            _results.push(vertCount += 9);
          }
          return _results;
        }
      });
      indices = this.indices = new Float32Array(nOfTriangles * 3);
      for (i = _j = 0, _ref2 = this.indices.length - 1; 0 <= _ref2 ? _j <= _ref2 : _j >= _ref2; i = 0 <= _ref2 ? ++_j : --_j) {
        this.indices[i] = i;
      }
      _ref3 = ['vertices', 'normals'];
      for (_k = 0, _len1 = _ref3.length; _k < _len1; _k++) {
        attr = _ref3[_k];
        this[attr] = exp[attr];
      }
      this.verts = this.vertices;
      this.nOfTriangles = nOfTriangles;
      this._eachFace(this._calculateVertexNormals);
      this.nOfTriangles = nOfTriangles;
      return void 0;
    };

    Worker.prototype._parseEachLine = function(text, prefixes, opts, callback) {
      var lines, nOfTriangles;
      nOfTriangles = 0;
      lines = function(fn) {
        return eachLine(text, function(line, index) {
          if (index >= opts.headerLines) {
            return fn(line, index);
          }
        });
      };
      lines(function(line) {
        if (line.indexOf(prefixes.face) !== -1) {
          return nOfTriangles++;
        }
      });
      this._initGeometry(nOfTriangles);
      lines(function(line, index) {
        line = line.replace(/^\s+|\s+$/g, '').replace(/\s{2,}/g, ' ').toLowerCase();
        return callback(line, index);
      });
      return void 0;
    };

    Worker.prototype._parseTextObj = function(text) {
      var indexCount, prefixes, vertCount,
        _this = this;
      prefixes = {
        normal: "vn ",
        vert: "v ",
        face: "f "
      };
      indexCount = 0;
      vertCount = 0;
      this._parseEachLine(text, prefixes, {
        headerLines: 0
      }, function(line, index) {
        var s, str, v, vectorStrings, _i, _j, _len, _len1, _ref, _ref1;
        if (startsWith(line, prefixes.vert)) {
          vectorStrings = line.split(/\s/).slice(1);
          if (vectorStrings.length < 3) {
            throw "Parsing Error: " + vectorStrings.length + " vector vertex";
          }
          _ref = vectorStrings.slice(0, 3);
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            s = _ref[_i];
            _this.vertices[vertCount++] = v = parseFloat(s);
            if (isNaN(v) || !isFinite(v)) {
              throw "Parsing Error: Vertex vector #" + vertCount + " is not a number";
            }
          }
        } else if (startsWith(line, prefixes.face)) {
          _ref1 = line.split(/\s/).slice(1);
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            str = _ref1[_j];
            _this.indices[indexCount++] = parseInt(str.split('/')[0]) - 1;
          }
        }
        return void 0;
      });
      this._expandVerts();
      this._eachFace(this._calculateVertexNormals);
      return void 0;
    };

    Worker.prototype._parseTextStl = function(text) {
      var ignoredPrefixes, normalCount, prefixes, vertCount,
        _this = this;
      prefixes = {
        normal: "facet normal ",
        vert: "vertex ",
        face: "facet"
      };
      ignoredPrefixes = ["outer", "endloop", "facet", "endfacet", "endsolid"];
      normalCount = 0;
      vertCount = 0;
      this._parseEachLine(text, prefixes, {
        headerLines: 1
      }, function(line, index) {
        var k, s, v, vectorStrings, _i, _len;
        if (startsWith(line, prefixes.vert)) {
          vectorStrings = line.split(/\s/).slice(1);
          if (vectorStrings.length !== 3) {
            throw "Parsing Error: " + vectorStrings.length + " vector vertex";
          }
          for (_i = 0, _len = vectorStrings.length; _i < _len; _i++) {
            s = vectorStrings[_i];
            _this.vertices[vertCount++] = v = parseFloat(s);
            if (isNaN(v) || !isFinite(v)) {
              throw "Parsing Error: Vertex vector #" + vertCount + " is not a number";
            }
          }
        } else if (line.length > 0) {
          if ((function() {
            var _j, _len1, _results;
            _results = [];
            for (_j = 0, _len1 = ignoredPrefixes.length; _j < _len1; _j++) {
              k = ignoredPrefixes[_j];
              _results.push(startsWith(line, k));
            }
            return _results;
          })()) {
            return;
          }
          throw "Parsing Error: Invalid Line \n " + line;
        }
        return void 0;
      });
      this._eachFace(this._calculateVertexNormals);
      return void 0;
    };

    Worker.prototype._parseArrayBufferStl = function(arrayBuffer) {
      var dataPointer, i, indices, j, nOfTriangles, normals, readFloat32, readUint16, readUint32, verts, _i, _j, _k, _read, _ref, _ref1;
      data = new DataView(arrayBuffer, 80);
      dataPointer = 0;
      _read = function(method, bytes) {
        var val;
        val = data[method](dataPointer, true);
        dataPointer += bytes;
        return val;
      };
      readFloat32 = function() {
        return _read("getFloat32", 4);
      };
      readUint32 = function() {
        return _read("getUint32", 4);
      };
      readUint16 = function() {
        return _read("getUint16", 2);
      };
      nOfTriangles = readUint32();
      _ref = this._initGeometry(nOfTriangles), normals = _ref[0], verts = _ref[1], indices = _ref[2];
      for (i = _i = 0, _ref1 = nOfTriangles - 1; 0 <= _ref1 ? _i <= _ref1 : _i >= _ref1; i = 0 <= _ref1 ? ++_i : --_i) {
        for (j = _j = 0; _j <= 2; j = ++_j) {
          readFloat32();
        }
        for (j = _k = 0; _k <= 8; j = ++_k) {
          verts[i * 9 + j] = readFloat32();
        }
        readUint16();
      }
      this._eachFace(this._calculateVertexNormals);
      return void 0;
    };

    Worker.prototype.exportTextStl = function() {
      var formatFloat, formatVector, str;
      str = "solid P3D\n";
      formatFloat = function(flt, i) {
        return (sign(flt) >= 0 || i === 0 ? " " : "") + flt.toExponential(6);
      };
      formatVector = function(array, v) {
        var i;
        return ((function() {
          var _i, _results;
          _results = [];
          for (i = _i = 0; _i <= 2; i = ++_i) {
            _results.push(formatFloat(array[i], v ? i : 1));
          }
          return _results;
        })()).join(" ");
      };
      this._eachFace(function(f, i) {
        var v, _i, _len, _ref;
        str += "  facet normal " + (formatVector(f.normals[0], false)) + "\n";
        str += "    outer loop\n";
        _ref = f.vertices;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          v = _ref[_i];
          str += "      vertex " + (formatVector(v, true)) + "\n";
        }
        str += "    endloop\n";
        return str += "  endfacet\n";
      });
      str += "endsolid P3D";
      str = str.replace(/e\+([0-9][^0-9])/g, "e+0$1");
      str = str.replace(/e\-([0-9][^0-9])/g, "e-0$1");
      return this.blob = new Blob([str], {
        type: "application/octet-stream"
      });
    };

    Worker.prototype._applyScaling = function() {
      var i, j, scale, _i, _ref, _results;
      if (this.scale != null) {
        scale = this.scale;
        if (typeof scale === "number") {
          scale = (function() {
            var _i, _results;
            _results = [];
            for (i = _i = 0; _i <= 2; i = ++_i) {
              _results.push(scale);
            }
            return _results;
          })();
        }
        _results = [];
        for (i = _i = 0, _ref = this.vertices.length; _i <= _ref; i = _i += 3) {
          _results.push((function() {
            var _j, _results1;
            _results1 = [];
            for (j = _j = 0; _j <= 2; j = ++_j) {
              _results1.push(this.vertices[i + j] = this.vertices[i + j] * scale[j]);
            }
            return _results1;
          }).call(this));
        }
        return _results;
      }
    };

    Worker.prototype._eachFace = function(fn) {
      var i, indices, _i, _ref;
      indices = this.indices;
      for (i = _i = 0, _ref = this.indices.length - 3; _i <= _ref; i = _i += 3) {
        fn(this._face(indices.subarray(i, i + 3)), i / 3);
      }
      return void 0;
    };

    Worker.prototype._face = function(fIndices) {
      var index;
      return {
        indices: fIndices,
        normals: (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = fIndices.length; _i < _len; _i++) {
            index = fIndices[_i];
            _results.push(this.normals.subarray(index * 3, index * 3 + 3));
          }
          return _results;
        }).call(this),
        vertices: (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = fIndices.length; _i < _len; _i++) {
            index = fIndices[_i];
            _results.push(this.vertices.subarray(index * 3, index * 3 + 3));
          }
          return _results;
        }).call(this)
      };
    };

    Worker.prototype._flipFace = function(f) {
      var firstIndex;
      firstIndex = f.indices[0];
      f.indices[0] = f.indices[1];
      return f.indices[1] = firstIndex;
    };

    Worker.prototype._calculateVertexNormals = function(f) {
      var i, j, len, v, vN, _i, _j, _results;
      v = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 1; _i <= 2; i = ++_i) {
          _results.push((function() {
            var _j, _results1;
            _results1 = [];
            for (j = _j = 0; _j <= 2; j = ++_j) {
              _results1.push(f.vertices[i][j] - f.vertices[0][j]);
            }
            return _results1;
          })());
        }
        return _results;
      })();
      vN = [(v[0][1] * v[1][2]) - (v[0][2] * v[1][1]), (v[0][2] * v[1][0]) - (v[0][0] * v[1][2]), (v[0][0] * v[1][1]) - (v[0][1] * v[1][0])];
      len = Math.sqrt(vN[0] * vN[0] + vN[1] * vN[1] + vN[2] * vN[2]);
      for (i = _i = 0; _i <= 2; i = ++_i) {
        vN[i] = vN[i] / len;
      }
      _results = [];
      for (i = _j = 0; _j <= 2; i = ++_j) {
        if (f.normals[i][0] === 0 && f.normals[i][1] === 0 && f.normals[i][2] === 0) {
          _results.push((function() {
            var _k, _results1;
            _results1 = [];
            for (j = _k = 0; _k <= 2; j = ++_k) {
              _results1.push(f.normals[i][j] = vN[j]);
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    return Worker;

  })();

}).call(this);

(function() {
  var viewerCount,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  $.fn.viewer = function(opts) {
    var args;
    args = arguments;
    this.each(function(i, el) {
      var $el, viewer;
      $el = $(el);
      if ((typeof opts) === "string") {
        viewer = $el.data("viewer");
        return viewer[args[0]].apply(viewer, Array.prototype.slice.call(args).slice(1));
      } else {
        return $el.data("viewer", new Viewer($el, opts));
      }
    });
    return this;
  };

  viewerCount = 0;

  window.Viewer = (function() {

    Viewer.prototype.initDefaults = function() {
      this.mode = "gcode";
      this.buildVolume = [210, 210, 220];
      this.mmToGLCoords = 0.1;
      this.defaultRotation = new PhiloGL.Vec3(Math.PI * 3 / 2 + 0.2, 0, 0);
      this.defaultPosition = new PhiloGL.Vec3(0, -10, -60);
      return this.modelRotation = new PhiloGL.Vec3(0, 0, 0);
    };

    Viewer.prototype.o3dDefaults = {
      "class": PhiloGL.O3D.P3DModel,
      uniforms: {
        shininess: 10,
        hasTexture1: false
      }
    };

    Viewer.prototype.webGlSettings = function() {
      var ambient, cube, d, dimension, i, scale,
        _this = this;
      return this._webGlSettings || (this._webGlSettings = {
        program: {
          from: 'ids',
          vs: 'per-fragment-lighting-vs',
          fs: 'per-fragment-lighting-fs'
        },
        camera: {
          fov: 40,
          near: 1,
          far: 1000
        },
        scene: {
          lights: {
            enable: true,
            ambient: {
              r: ambient = 0.3,
              g: ambient,
              b: ambient
            },
            directional: {
              color: {
                r: d = 0.2,
                g: d,
                b: d
              },
              direction: {
                x: 0.3,
                y: -0.3,
                z: -1
              }
            }
          }
        },
        models: {
          model: {
            display: true,
            scale: (function() {
              var _i, _results;
              _results = [];
              for (i = _i = 0; _i <= 2; i = ++_i) {
                _results.push(this.mmToGLCoords);
              }
              return _results;
            }).call(this),
            colors: [32 / 255, 77 / 255, 37 / 255, 1]
          },
          gcodeLines: {
            display: false,
            "class": PhiloGL.O3D.PolyLine,
            colors: [1, 0, 1, 1],
            scale: (function() {
              var _i, _len, _ref, _results;
              _ref = this.buildVolume;
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                dimension = _ref[_i];
                _results.push(this.mmToGLCoords);
              }
              return _results;
            }).call(this),
            render: this.renderLines
          },
          cube: cube = {
            display: true,
            "class": PhiloGL.O3D.Cube,
            scale: (function() {
              var _i, _len, _ref, _results;
              _ref = this.buildVolume;
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                dimension = _ref[_i];
                _results.push(dimension / 2 * this.mmToGLCoords);
              }
              return _results;
            }).call(this),
            colors: [0 / 255, 20 / 255, 240 / 255, 0.3],
            alignment: {
              x: this._center,
              y: this._center,
              z: this._bottom
            }
          },
          platform: {
            display: true,
            src: "/ultimaker_platform.stl",
            scale: scale = [0.1, 0.1, 0.1],
            colors: [0.2, 0.2, 0.2, 0.55],
            init: function(o3d) {
              var j, offset, verts, _i, _ref, _results;
              verts = o3d.$vertices;
              offset = [0, _this.webGlSettings().models.cube.scale[1] / o3d.scale.y, 0];
              _results = [];
              for (i = _i = 0, _ref = verts.length - 1; _i <= _ref; i = _i += 3) {
                _results.push((function() {
                  var _j, _results1;
                  _results1 = [];
                  for (j = _j = 0; _j <= 2; j = ++_j) {
                    _results1.push(verts[i + j] += offset[j]);
                  }
                  return _results1;
                })());
              }
              return _results;
            }
          }
        },
        events: {
          onDragStart: this.setDragOffset,
          onDragMove: this.onDragMove,
          onMouseWheel: this.onMouseWheel
        },
        onError: function(e) {
          console.log("An error ocurred while loading the application");
          return console.log(e);
        },
        onLoad: function(app) {
          return setTimeout(_this.onLoad.fill(app), 0);
        }
      });
    };

    function Viewer($container, opts) {
      var k, _i, _len, _ref;
      this.opts = opts;
      this.renderLines = __bind(this.renderLines, this);

      this.render = __bind(this.render, this);

      this.onBeforeRender = __bind(this.onBeforeRender, this);

      this.resize = __bind(this.resize, this);

      this.resetView = __bind(this.resetView, this);

      this.onMouseWheel = __bind(this.onMouseWheel, this);

      this.onDragMove = __bind(this.onDragMove, this);

      this.setDragOffset = __bind(this.setDragOffset, this);

      this.rotate = __bind(this.rotate, this);

      this.scale = __bind(this.scale, this);

      this.loadModel = __bind(this.loadModel, this);

      this._onO3DLoad = __bind(this._onO3DLoad, this);

      this.onLoad = __bind(this.onLoad, this);

      this.webGlSettings = __bind(this.webGlSettings, this);

      this.initDefaults = __bind(this.initDefaults, this);

      this.initDefaults();
      if (this.opts.defaultZoom != null) {
        this.defaultPosition.z = this.opts.defaultZoom;
      }
      _ref = ["rotation", "position"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        this[k] = new PhiloGL.Vec3();
      }
      this.resetView();
      this.$glCanvas = $($("<canvas id='webGlCanvas" + (viewerCount++) + "'></canvas>"));
      $container.prepend(this.$glCanvas);
      this.$glCanvas.on("mousewheel", function(e) {
        return e.preventDefault();
      });
      PhiloGL(this.$glCanvas.attr("id"), this._webGlSettings = this.webGlSettings());
    }

    Viewer.prototype.onLoad = function(app) {
      var k, opts, _i, _len, _ref, _ref1;
      this.app = app;
      _ref = ['gl', 'program', 'camera', 'canvas', 'scene'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        this[k] = app[k];
      }
      window.gl = this.gl;
      this.gl.clearColor(1, 1, 1, 1);
      this.gl.clearDepth(1);
      this.gl.enable(this.gl.CULL_FACE);
      this.gl.enable(this.gl.DEPTH_TEST);
      this.gl.depthFunc(this.gl.LEQUAL);
      this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
      this.gl.enable(this.gl.BLEND);
      this.camera.target.set(0, 0, -1);
      this.camera.update();
      _ref1 = this.webGlSettings().models;
      for (k in _ref1) {
        opts = _ref1[k];
        this.addToScene(k, opts);
      }
      this.update();
      this.resize();
      $(window).resize(this.resize);
      this.render();
      return this.opts.onLoad(this);
    };

    Viewer.prototype.addToScene = function(name, opts) {
      var isP3D, k, o3d, orientation, v;
      opts = $.extend({}, this.o3dDefaults, opts);
      orientation = {
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1]
      };
      isP3D = opts["class"] === PhiloGL.O3D.P3DModel;
      this[name] = o3d = new opts["class"](opts, this._onO3DLoad.fill(opts));
      for (k in orientation) {
        v = orientation[k];
        o3d[k].set.apply(o3d[k], opts[k] || v);
      }
      if (!isP3D) {
        this._onO3DLoad(opts, void 0, o3d);
      }
      return o3d;
    };

    Viewer.prototype._onO3DLoad = function(opts, p3d, o3d) {
      if (opts.alignment != null) {
        this._alignO3D(o3d, opts.alignment);
      }
      if (opts.init != null) {
        opts.init(o3d);
      }
      o3d.update();
      if (o3d === this.model) {
        console.log("model loaded");
        console.log(o3d.dimensions);
        this._updateVerticalCentering();
      }
      this.scene.add(o3d);
      return this.update();
    };

    Viewer.prototype._updateVerticalCentering = function() {
      if ((this.model != null) && (this.model.dimensions != null)) {
        return this.position.y = -(this.model.dimensions[2] * this.model.scale[2] || 0) / 2;
      }
    };

    Viewer.prototype.setGCode = function(gcode) {
      var _this = this;
      gcodeUtils.parse(gcode, function(cmd, axes) {
        return _this.gcodeLines.lineTo(axes);
      });
      this.gcodeLines.updateLines();
      return this.requestRender();
    };

    Viewer.prototype.loadModel = function(src, onLoadCallback) {
      var _this = this;
      return this.model.load(src, function(p3d) {
        var name;
        name = p3d.filename.replace("\.[a-zA-Z0-9]+$", ".stl");
        _this._onO3DLoad({
          alignment: {
            x: _this._center,
            y: _this._center,
            z: _this._bottom
          }
        }, p3d, _this.model);
        _this.modelRotation.set(0, 0, 0);
        return typeof onLoadCallback === "function" ? onLoadCallback(p3d) : void 0;
      });
    };

    Viewer.prototype.scale = function(val) {
      val = val * this.mmToGLCoords;
      this.model.scale.set(val, val, val);
      this._updateVerticalCentering();
      return this.update();
    };

    Viewer.prototype.rotate = function(x, y, z) {
      this.modelRotation.set(x, y, z);
      console.log(this.modelRotation);
      return this.update();
    };

    Viewer.prototype._center = [0.5, 0.5];

    Viewer.prototype._bottom = [0, 1];

    Viewer.prototype._none = [0, 0];

    Viewer.prototype._alignO3D = function(model, opts) {
      var i, j, k, max, min, offset, verts, _i, _j, _k, _ref, _ref1, _results;
      if (opts == null) {
        opts = {
          x: this._none,
          y: this._none,
          z: this._none
        };
      }
      verts = model.vertices || [];
      offset = null;
      min = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i <= 2; i = ++_i) {
          _results.push(Number.MAX_VALUE);
        }
        return _results;
      })();
      max = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i <= 2; i = ++_i) {
          _results.push(Number.MIN_VALUE);
        }
        return _results;
      })();
      for (i = _i = 0, _ref = verts.length - 1; _i <= _ref; i = _i += 3) {
        for (j = _j = 0; _j <= 2; j = ++_j) {
          if (verts[i + j] < min[j]) {
            min[j] = verts[i + j];
          }
          if (verts[i + j] > max[j]) {
            max[j] = verts[i + j];
          }
        }
      }
      model.dimensions = (function() {
        var _k, _results;
        _results = [];
        for (i = _k = 0; _k <= 2; i = ++_k) {
          _results.push(max[i] - min[i]);
        }
        return _results;
      })();
      offset = (function() {
        var _k, _len, _ref1, _results;
        _ref1 = ['x', 'y', 'z'];
        _results = [];
        for (i = _k = 0, _len = _ref1.length; _k < _len; i = ++_k) {
          k = _ref1[i];
          _results.push(max[i] * opts[k][0] + min[i] * opts[k][1]);
        }
        return _results;
      })();
      _results = [];
      for (i = _k = 0, _ref1 = verts.length - 1; _k <= _ref1; i = _k += 3) {
        _results.push((function() {
          var _l, _results1;
          _results1 = [];
          for (j = _l = 0; _l <= 2; j = ++_l) {
            _results1.push(verts[i + j] -= offset[j]);
          }
          return _results1;
        })());
      }
      return _results;
    };

    Viewer.prototype.setDragOffset = function(e) {
      return this.mouseOffset = {
        x: e.x,
        y: e.y
      };
    };

    Viewer.prototype.onDragMove = function(e) {
      var mouse, rot;
      mouse = {
        x: e.x - this.mouseOffset.x,
        y: e.y - this.mouseOffset.y
      };
      this.setDragOffset(e);
      rot = this.rotation;
      rot.y = (rot.y + mouse.x / 50) % (Math.PI * 2);
      rot.x = rot.x - mouse.y / 100;
      rot.x = Math.max(Math.PI, Math.min(rot.x, Math.PI * 2));
      return this.update();
    };

    Viewer.prototype.onMouseWheel = function(e) {
      var maxDistance;
      maxDistance = 100;
      return this.setZoom(Math.max(-maxDistance, Math.min(0.001, this.position.z - 20 * e.wheel * (this.position.z / maxDistance))));
    };

    Viewer.prototype.resetView = function(update) {
      var k, _i, _j, _len, _len1, _ref, _ref1;
      _ref = ["x", "y", "z"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        this.rotation[k] = this.defaultRotation[k];
      }
      _ref1 = ["x", "y", "z"];
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        k = _ref1[_j];
        this.position[k] = this.defaultPosition[k];
      }
      this._updateVerticalCentering();
      return this.update();
    };

    Viewer.prototype.setZoom = function(zoom) {
      this.position.z = zoom;
      return this.update();
    };

    Viewer.prototype.resize = function() {
      var _base, _base1;
      this.size = {
        width: (typeof (_base = this.opts).width === "function" ? _base.width() : void 0) || this.$glCanvas.parent().innerWidth(),
        height: (typeof (_base1 = this.opts).height === "function" ? _base1.height() : void 0) || this.$glCanvas.parent().innerHeight()
      };
      this.$glCanvas.attr(this.size);
      this.gl.viewport(0, 0, this.size.width, this.size.height);
      this.camera.aspect = this.size.width / this.size.height;
      this.camera.update();
      return this.requestRender();
    };

    Viewer.prototype.requestRender = function() {
      return this.dirty = true;
    };

    Viewer.prototype.onBeforeRender = function(elem, i) {
      var isOpaque;
      isOpaque = this.model === elem;
      this.gl.depthMask(isOpaque);
      return this.gl[isOpaque ? "disable" : "enable"](this.gl.BLEND);
    };

    Viewer.prototype.render = function() {
      if (this.dirty === true) {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.scene.render({
          onBeforeRender: this.onBeforeRender
        });
      }
      this.dirty = false;
      return setTimeout(this.render, 1000 / 40);
    };

    Viewer.prototype.update = function(t, r) {
      var k, model, _i, _len, _ref;
      _ref = [this.platform, this.gcodeLines, this.cube, this.arMarker, this.model];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        model = _ref[_i];
        if (model == null) {
          continue;
        }
        model.rotation = this.rotation;
        model.position = this.position;
        model.update();
      }
      if (this.model != null) {
        r = (function() {
          var _j, _len1, _ref1, _results;
          _ref1 = ['x', 'y', 'z'];
          _results = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            k = _ref1[_j];
            _results.push(this.rotation[k] + this.modelRotation[k]);
          }
          return _results;
        }).call(this);
        this.model.rotation = PhiloGL.Vec3.$rotateXYZ(this.rotation.clone(), r[0], r[1], r[2]);
        this.model.update();
        console.log(this.model.rotation);
      }
      return this.requestRender();
    };

    Viewer.prototype.renderLines = function() {
      if (this.gcodeLines.vertices.length > 0) {

      }
    };

    return Viewer;

  })();

}).call(this);

// Copyright 2013 Rob Gilson

(function($) {
  var defaultOpts = {
    min: 0,
    max: 1.0,
    val: 0,
    snap: function(val) {return val;},
    onChange: undefined
  };

  $.fn.slider = function(opts) {
    var $el = $(this);
    var data = $el.data("slider")
    if (!( data === undefined))
    {
      return data[arguments[0]].call(this, arguments[1])
    }

    var dragging = false
    opts = $.extend({}, defaultOpts, opts);
    var range = opts.max - opts.min;

    var valToPercent = function() {
      return (opts.val-opts.min)*100/range;
    };

    var percentToVal = function(percent) {
      return percent*range/100 + opts.min;
    };

    $el.addClass("slider progress");
    $el.html("<div class='bar'></div><div class='slider-handle'>");
    $bar = $el.find(".bar");
    $doc = $(document);

    var setVal = function(val) {
      opts.val = val
      $bar.css({
        left: "0%",
        width: valToPercent() + "%"
      });
    };
    setVal(opts.val);

    var _isPrevented = function(eventName, val) {
      var event = jQuery.Event("slider:" + eventName);
      if (val === undefined) val = opts.val;
      $el.trigger(event, val);
      return event.isDefaultPrevented();
    }

    // Option Event Listeners
    if(opts.onChange != undefined) $el.on("slider:change", opts.onChange)

    // External API
    $el.data("slider", {
      val: function(newVal) {
        if (newVal === undefined)
        {
          return opts.val;
        }
        else
        {
          setVal(newVal);
          return $el;
        }
      }
    });

    var updateValToMousePos = function(e) {
      var percent = (e.pageX - $el.offset().left)*100/$el.width();
      percent = Math.min( 100, Math.max(0, percent));
      var newVal = opts.snap( percentToVal(percent) )

      if (_isPrevented("change", newVal)) return true;
      if (newVal != opts.val) setVal(newVal);
      e.preventDefault();
      return true
    };

    // Drag handlers
    var onDragStart = function(e) {
      dragging = true;
      if (_isPrevented("dragstart")) return;
      updateValToMousePos(e);
      $doc.on("mousemove", onDrag);
      $doc.one("mouseup", onDragEnd);
    };

    var onDrag = function(e) {
      updateValToMousePos(e)
    };

    var onDragEnd = function(e) {
      if (_isPrevented("dragend")) return;
      dragging = false;
      $doc.off("mousemove", onDrag);
      e.preventDefault();
    };

    $el.on("mousedown", onDragStart);

    return $el;
  };
})(jQuery);
/*
Copyright (c) 2011 Juan Mellado

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
References:
- "ArUco: a minimal library for Augmented Reality applications based on OpenCv"
  http://www.uco.es/investiga/grupos/ava/node/26
*/

var AR = AR || {};

AR.Marker = function(id, corners){
  this.id = id;
  this.corners = corners;
};

AR.Detector = function(){
  this.grey = new CV.Image();
  this.thres = new CV.Image();
  this.homography = new CV.Image();
  this.binary = [];
  this.contours = [];
  this.polys = [];
  this.candidates = [];
};

AR.Detector.prototype.detect = function(image){
  CV.grayscale(image, this.grey);
  CV.adaptiveThreshold(this.grey, this.thres, 2, 7);
  
  this.contours = CV.findContours(this.thres, this.binary);

  this.candidates = this.findCandidates(this.contours, image.width * 0.20, 0.05, 10);
  this.candidates = this.clockwiseCorners(this.candidates);
  this.candidates = this.notTooNear(this.candidates, 10);

  return this.findMarkers(this.grey, this.candidates, 49);
};

AR.Detector.prototype.findCandidates = function(contours, minSize, epsilon, minLength){
  var candidates = [], len = contours.length, contour, poly, i;

  this.polys = [];
  
  for (i = 0; i < len; ++ i){
    contour = contours[i];

    if (contour.length >= minSize){
      poly = CV.approxPolyDP(contour, contour.length * epsilon);

      this.polys.push(poly);

      if ( (4 === poly.length) && ( CV.isContourConvex(poly) ) ){

        if ( CV.minEdgeLength(poly) >= minLength){
          candidates.push(poly);
        }
      }
    }
  }

  return candidates;
};

AR.Detector.prototype.clockwiseCorners = function(candidates){
  var len = candidates.length, dx1, dx2, dy1, dy2, swap, i;

  for (i = 0; i < len; ++ i){
    dx1 = candidates[i][1].x - candidates[i][0].x;
    dy1 = candidates[i][1].y - candidates[i][0].y;
    dx2 = candidates[i][2].x - candidates[i][0].x;
    dy2 = candidates[i][2].y - candidates[i][0].y;

    if ( (dx1 * dy2 - dy1 * dx2) < 0){
      swap = candidates[i][1];
      candidates[i][1] = candidates[i][3];
      candidates[i][3] = swap;
    }
  }

  return candidates;
};

AR.Detector.prototype.notTooNear = function(candidates, minDist){
  var notTooNear = [], len = candidates.length, dist, dx, dy, i, j, k;

  for (i = 0; i < len; ++ i){
  
    for (j = i + 1; j < len; ++ j){
      dist = 0;
      
      for (k = 0; k < 4; ++ k){
        dx = candidates[i][k].x - candidates[j][k].x;
        dy = candidates[i][k].y - candidates[j][k].y;
      
        dist += dx * dx + dy * dy;
      }
      
      if ( (dist / 4) < (minDist * minDist) ){
      
        if ( CV.perimeter( candidates[i] ) < CV.perimeter( candidates[j] ) ){
          candidates[i].tooNear = true;
        }else{
          candidates[j].tooNear = true;
        }
      }
    }
  }

  for (i = 0; i < len; ++ i){
    if ( !candidates[i].tooNear ){
      notTooNear.push( candidates[i] );
    }
  }

  return notTooNear;
};

AR.Detector.prototype.findMarkers = function(imageSrc, candidates, warpSize){
  var markers = [], len = candidates.length, candidate, marker, i;

  for (i = 0; i < len; ++ i){
    candidate = candidates[i];

    CV.warp(imageSrc, this.homography, candidate, warpSize);
  
    CV.threshold(this.homography, this.homography, CV.otsu(this.homography) );

    marker = this.getMarker(this.homography, candidate);
    if (marker){
      markers.push(marker);
    }
  }
  
  return markers;
};

AR.Detector.prototype.getMarker = function(imageSrc, candidate){
  var width = (imageSrc.width / 7) >>> 0,
      minZero = (width * width) >> 1,
      bits = [], rotations = [], distances = [],
      square, pair, inc, i, j;

  for (i = 0; i < 7; ++ i){
    inc = (0 === i || 6 === i)? 1: 6;
    
    for (j = 0; j < 7; j += inc){
      square = {x: j * width, y: i * width, width: width, height: width};
      if ( CV.countNonZero(imageSrc, square) > minZero){
        return null;
      }
    }
  }

  for (i = 0; i < 5; ++ i){
    bits[i] = [];

    for (j = 0; j < 5; ++ j){
      square = {x: (j + 1) * width, y: (i + 1) * width, width: width, height: width};
      
      bits[i][j] = CV.countNonZero(imageSrc, square) > minZero? 1: 0;
    }
  }

  rotations[0] = bits;
  distances[0] = this.hammingDistance( rotations[0] );
  
  pair = {first: distances[0], second: 0};
  
  for (i = 1; i < 4; ++ i){
    rotations[i] = this.rotate( rotations[i - 1] );
    distances[i] = this.hammingDistance( rotations[i] );
    
    if (distances[i] < pair.first){
      pair.first = distances[i];
      pair.second = i;
    }
  }

  if (0 !== pair.first){
    return null;
  }

  return new AR.Marker(
    this.mat2id( rotations[pair.second] ), 
    this.rotate2(candidate, 4 - pair.second) );
};

AR.Detector.prototype.hammingDistance = function(bits){
  var ids = [ [1,0,0,0,0], [1,0,1,1,1], [0,1,0,0,1], [0,1,1,1,0] ],
      dist = 0, sum, minSum, i, j, k;

  for (i = 0; i < 5; ++ i){
    minSum = Infinity;
    
    for (j = 0; j < 4; ++ j){
      sum = 0;

      for (k = 0; k < 5; ++ k){
          sum += bits[i][k] === ids[j][k]? 0: 1;
      }

      if (sum < minSum){
        minSum = sum;
      }
    }

    dist += minSum;
  }

  return dist;
};

AR.Detector.prototype.mat2id = function(bits){
  var id = 0, i;
  
  for (i = 0; i < 5; ++ i){
    id <<= 1;
    id |= bits[i][1];
    id <<= 1;
    id |= bits[i][3];
  }

  return id;
};

AR.Detector.prototype.rotate = function(src){
  var dst = [], len = src.length, i, j;
  
  for (i = 0; i < len; ++ i){
    dst[i] = [];
    for (j = 0; j < src[i].length; ++ j){
      dst[i][j] = src[src[i].length - j - 1][i];
    }
  }

  return dst;
};

AR.Detector.prototype.rotate2 = function(src, rotation){
  var dst = [], len = src.length, i;
  
  for (i = 0; i < len; ++ i){
    dst[i] = src[ (rotation + i) % len ];
  }

  return dst;
};

// Backbone.js 0.9.9

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var k=this,y=k.Backbone,h=[],z=h.push,r=h.slice,A=h.splice,g;g="undefined"!==typeof exports?exports:k.Backbone={};g.VERSION="0.9.9";var e=k._;!e&&"undefined"!==typeof require&&(e=require("underscore"));g.$=k.jQuery||k.Zepto||k.ender;g.noConflict=function(){k.Backbone=y;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var s=/\s+/,n=function(a,b,c,d){if(!c)return!0;if("object"===typeof c)for(var f in c)a[b].apply(a,[f,c[f]].concat(d));else if(s.test(c)){c=c.split(s);f=0;for(var e=c.length;f<
e;f++)a[b].apply(a,[c[f]].concat(d))}else return!0},t=function(a,b,c){var d,a=-1,f=b.length;switch(c.length){case 0:for(;++a<f;)(d=b[a]).callback.call(d.ctx);break;case 1:for(;++a<f;)(d=b[a]).callback.call(d.ctx,c[0]);break;case 2:for(;++a<f;)(d=b[a]).callback.call(d.ctx,c[0],c[1]);break;case 3:for(;++a<f;)(d=b[a]).callback.call(d.ctx,c[0],c[1],c[2]);break;default:for(;++a<f;)(d=b[a]).callback.apply(d.ctx,c)}},h=g.Events={on:function(a,b,c){if(!n(this,"on",a,[b,c])||!b)return this;this._events||(this._events=
{});(this._events[a]||(this._events[a]=[])).push({callback:b,context:c,ctx:c||this});return this},once:function(a,b,c){if(!n(this,"once",a,[b,c])||!b)return this;var d=this,f=e.once(function(){d.off(a,f);b.apply(this,arguments)});f._callback=b;this.on(a,f,c);return this},off:function(a,b,c){var d,f,l,g,i,m,h,j;if(!this._events||!n(this,"off",a,[b,c]))return this;if(!a&&!b&&!c)return this._events={},this;g=a?[a]:e.keys(this._events);i=0;for(m=g.length;i<m;i++)if(a=g[i],d=this._events[a]){l=[];if(b||
c){h=0;for(j=d.length;h<j;h++)f=d[h],(b&&b!==(f.callback._callback||f.callback)||c&&c!==f.context)&&l.push(f)}this._events[a]=l}return this},trigger:function(a){if(!this._events)return this;var b=r.call(arguments,1);if(!n(this,"trigger",a,b))return this;var c=this._events[a],d=this._events.all;c&&t(this,c,b);d&&t(this,d,arguments);return this},listenTo:function(a,b,c){var d=this._listeners||(this._listeners={}),f=a._listenerId||(a._listenerId=e.uniqueId("l"));d[f]=a;a.on(b,c||this,this);return this},
stopListening:function(a,b,c){var d=this._listeners;if(d){if(a)a.off(b,c,this),!b&&!c&&delete d[a._listenerId];else{for(var f in d)d[f].off(null,null,this);this._listeners={}}return this}}};h.bind=h.on;h.unbind=h.off;e.extend(g,h);var o=g.Model=function(a,b){var c,d=a||{};this.cid=e.uniqueId("c");this.changed={};this.attributes={};this._changes=[];b&&b.collection&&(this.collection=b.collection);b&&b.parse&&(d=this.parse(d));(c=e.result(this,"defaults"))&&e.defaults(d,c);this.set(d,{silent:!0});this._currentAttributes=
e.clone(this.attributes);this._previousAttributes=e.clone(this.attributes);this.initialize.apply(this,arguments)};e.extend(o.prototype,h,{changed:null,idAttribute:"id",initialize:function(){},toJSON:function(){return e.clone(this.attributes)},sync:function(){return g.sync.apply(this,arguments)},get:function(a){return this.attributes[a]},escape:function(a){return e.escape(this.get(a))},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,f;if(null==a)return this;e.isObject(a)?(f=a,c=
b):(f={})[a]=b;var a=c&&c.silent,l=c&&c.unset;if(!this._validate(f,c))return!1;this.idAttribute in f&&(this.id=f[this.idAttribute]);var g=this.attributes;for(d in f)b=f[d],l?delete g[d]:g[d]=b,this._changes.push(d,b);this._hasComputed=!1;a||this.change(c);return this},unset:function(a,b){return this.set(a,void 0,e.extend({},b,{unset:!0}))},clear:function(a){var b={},c;for(c in this.attributes)b[c]=void 0;return this.set(b,e.extend({},a,{unset:!0}))},fetch:function(a){a=a?e.clone(a):{};void 0===a.parse&&
(a.parse=!0);var b=this,c=a.success;a.success=function(d){if(!b.set(b.parse(d),a))return false;c&&c(b,d,a)};return this.sync("read",this,a)},save:function(a,b,c){var d,f,g;null==a||e.isObject(a)?(d=a,c=b):null!=a&&((d={})[a]=b);c=c?e.clone(c):{};if(c.wait){if(d&&!this._validate(d,c))return!1;f=e.clone(this.attributes)}a=e.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c)||!d&&!this._validate(null,c))return!1;var q=this,i=c.success;c.success=function(a){g=true;var b=q.parse(a);c.wait&&(b=e.extend(d||
{},b));if(!q.set(b,c))return false;i&&i(q,a,c)};b=this.isNew()?"create":c.patch?"patch":"update";"patch"==b&&(c.attrs=d);b=this.sync(b,this,c);!g&&c.wait&&(this.clear(a),this.set(f,a));return b},destroy:function(a){var a=a?e.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};a.success=function(f){(a.wait||b.isNew())&&d();c&&c(b,f,a)};if(this.isNew())return a.success(),!1;var f=this.sync("delete",this,a);a.wait||d();return f},url:function(){var a=e.result(this,"urlRoot")||
e.result(this.collection,"url")||u();return this.isNew()?a:a+("/"===a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){var b=this._changing;this._changing=!0;var c=this._computeChanges(!0);this._pending=!!c.length;for(var d=c.length-2;0<=d;d-=2)this.trigger("change:"+c[d],this,c[d+1],a);if(b)return this;for(;this._pending;)this._pending=!1,this.trigger("change",
this,a),this._previousAttributes=e.clone(this.attributes);this._changing=!1;return this},hasChanged:function(a){this._hasComputed||this._computeChanges();return null==a?!e.isEmpty(this.changed):e.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?e.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes,f;for(f in a)if(!e.isEqual(d[f],b=a[f]))(c||(c={}))[f]=b;return c},_computeChanges:function(a){this.changed={};for(var b={},c=[],d=this._currentAttributes,f=this._changes,
e=f.length-2;0<=e;e-=2){var g=f[e],i=f[e+1];b[g]||(b[g]=!0,d[g]!==i&&(this.changed[g]=i,a&&(c.push(g,i),d[g]=i)))}a&&(this._changes=[]);this._hasComputed=!0;return c},previous:function(a){return null==a||!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return e.clone(this._previousAttributes)},_validate:function(a,b){if(!this.validate)return!0;var a=e.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error&&b.error(this,c,b);this.trigger("error",
this,c,b);return!1}});var p=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);void 0!==b.comparator&&(this.comparator=b.comparator);this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,e.extend({silent:!0},b))};e.extend(p.prototype,h,{model:o,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},sync:function(){return g.sync.apply(this,arguments)},add:function(a,b){var c,d,f,g,h=b&&b.at,i=null==(b&&b.sort)?!0:b.sort,a=e.isArray(a)?
a.slice():[a];for(c=a.length-1;0<=c;c--)(d=this._prepareModel(a[c],b))?(a[c]=d,(f=null!=d.id&&this._byId[d.id])||this._byCid[d.cid]?(b&&(b.merge&&f)&&(f.set(d.attributes,b),g=i),a.splice(c,1)):(d.on("all",this._onModelEvent,this),this._byCid[d.cid]=d,null!=d.id&&(this._byId[d.id]=d))):(this.trigger("error",this,a[c],b),a.splice(c,1));a.length&&(g=i);this.length+=a.length;c=[null!=h?h:this.models.length,0];z.apply(c,a);A.apply(this.models,c);g&&(this.comparator&&null==h)&&this.sort({silent:!0});if(b&&
b.silent)return this;for(;d=a.shift();)d.trigger("add",d,this,b);return this},remove:function(a,b){var c,d,f,g;b||(b={});a=e.isArray(a)?a.slice():[a];c=0;for(d=a.length;c<d;c++)if(g=this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],f=this.indexOf(g),this.models.splice(f,1),this.length--,b.silent||(b.index=f,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,e.extend({at:this.length},b));return a},pop:function(a){var b=
this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,e.extend({at:0},b));return a},shift:function(a){var b=this.at(0);this.remove(b,a);return b},slice:function(a,b){return this.models.slice(a,b)},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]||this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return e.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},
sort:function(a){if(!this.comparator)throw Error("Cannot sort a set without a comparator");e.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(e.bind(this.comparator,this));(!a||!a.silent)&&this.trigger("sort",this,a);return this},pluck:function(a){return e.invoke(this.models,"get",a)},update:function(a,b){var c,d,f,g,h=[],i=[],m={},j=this.model.prototype.idAttribute,b=e.extend({add:!0,merge:!0,remove:!0},b);b.parse&&(a=this.parse(a));
e.isArray(a)||(a=a?[a]:[]);if(b.add&&!b.remove)return this.add(a,b);d=0;for(f=a.length;d<f;d++)c=a[d],g=this.get(c.id||c.cid||c[j]),b.remove&&g&&(m[g.cid]=!0),(b.add&&!g||b.merge&&g)&&h.push(c);if(b.remove){d=0;for(f=this.models.length;d<f;d++)c=this.models[d],m[c.cid]||i.push(c)}i.length&&this.remove(i,b);h.length&&this.add(h,b);return this},reset:function(a,b){b||(b={});b.parse&&(a=this.parse(a));for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);b.previousModels=this.models;
this._reset();a&&this.add(a,e.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?e.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d){b[a.update?"update":"reset"](d,a);c&&c(b,d,a)};return this.sync("read",this,a)},create:function(a,b){var c=this,b=b?e.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(a,b,e){e.wait&&c.add(a,e);d&&d(a,b,e)};a.save(null,b);return a},
parse:function(a){return a},clone:function(){return new this.constructor(this.models)},chain:function(){return e(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId={};this._byCid={}},_prepareModel:function(a,b){if(a instanceof o)return a.collection||(a.collection=this),a;b||(b={});b.collection=this;var c=new this.model(a,b);return!c._validate(a,b)?!1:c},_removeReference:function(a){this===a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,
b,c,d){("add"===a||"remove"===a)&&c!==this||("destroy"===a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],null!=b.id&&(this._byId[b.id]=b)),this.trigger.apply(this,arguments))}});e.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min sortedIndex toArray size first head take initial rest tail last without indexOf shuffle lastIndexOf isEmpty".split(" "),
function(a){p.prototype[a]=function(){var b=r.call(arguments);b.unshift(this.models);return e[a].apply(e,b)}});e.each(["groupBy","countBy","sortBy"],function(a){p.prototype[a]=function(b,c){var d=e.isFunction(b)?b:function(a){return a.get(b)};return e[a](this.models,d,c)}});var v=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},B=/\((.*?)\)/g,C=/:\w+/g,D=/\*\w+/g,E=/[\-{}\[\]+?.,\\\^$|#\s]/g;e.extend(v.prototype,h,{initialize:function(){},
route:function(a,b,c){e.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,e.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b);return this},_bindRoutes:function(){if(this.routes)for(var a,b=e.keys(this.routes);null!=(a=b.pop());)this.route(a,this.routes[a])},_routeToRegExp:function(a){a=a.replace(E,"\\$&").replace(B,
"(?:$1)?").replace(C,"([^/]+)").replace(D,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var j=g.History=function(){this.handlers=[];e.bindAll(this,"checkUrl");"undefined"!==typeof window&&(this.location=window.location,this.history=window.history)},w=/^[#\/]|\s+$/g,F=/^\/+|\/+$/g,G=/msie [\w.]+/,H=/\/$/;j.started=!1;e.extend(j.prototype,h,{interval:50,getHash:function(a){return(a=(a||this).location.href.match(/#(.*)$/))?a[1]:""},getFragment:function(a,
b){if(null==a)if(this._hasPushState||!this._wantsHashChange||b){var a=this.location.pathname,c=this.root.replace(H,"");a.indexOf(c)||(a=a.substr(c.length))}else a=this.getHash();return a.replace(w,"")},start:function(a){if(j.started)throw Error("Backbone.history has already been started");j.started=!0;this.options=e.extend({},{root:"/"},this.options,a);this.root=this.options.root;this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!(!this.options.pushState||
!this.history||!this.history.pushState);var a=this.getFragment(),b=document.documentMode,b=G.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b);this.root=("/"+this.root+"/").replace(F,"/");b&&this._wantsHashChange&&(this.iframe=g.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a));this._hasPushState?g.$(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?g.$(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&
(this._checkUrlInterval=setInterval(this.checkUrl,this.interval));this.fragment=a;a=this.location;b=a.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0;this._wantsPushState&&(this._hasPushState&&b&&a.hash)&&(this.fragment=this.getHash().replace(w,""),this.history.replaceState({},document.title,this.root+this.fragment+
a.search));if(!this.options.silent)return this.loadUrl()},stop:function(){g.$(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);j.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a===this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a===this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},
loadUrl:function(a){var b=this.fragment=this.getFragment(a);return e.any(this.handlers,function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!j.started)return!1;if(!b||!0===b)b={trigger:b};a=this.getFragment(a||"");if(this.fragment!==a){this.fragment=a;var c=this.root+a;if(this._hasPushState)this.history[b.replace?"replaceState":"pushState"]({},document.title,c);else if(this._wantsHashChange)this._updateHash(this.location,a,b.replace),this.iframe&&a!==this.getFragment(this.getHash(this.iframe))&&
(b.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,a,b.replace));else return this.location.assign(c);b.trigger&&this.loadUrl(a)}},_updateHash:function(a,b,c){c?(c=a.href.replace(/(javascript:|#).*$/,""),a.replace(c+"#"+b)):a.hash="#"+b}});g.history=new j;var x=g.View=function(a){this.cid=e.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},I=/^(\S+)\s*(.*)$/,J="model collection el id attributes className tagName events".split(" ");
e.extend(x.prototype,h,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},make:function(a,b,c){a=document.createElement(a);b&&g.$(a).attr(b);null!=c&&g.$(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof g.$?a:g.$(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=e.result(this,
"events"))){this.undelegateEvents();for(var b in a){var c=a[b];e.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(I),f=d[1],d=d[2],c=e.bind(c,this),f=f+(".delegateEvents"+this.cid);""===d?this.$el.bind(f,c):this.$el.delegate(d,f,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=e.extend({},e.result(this,"options"),a));e.extend(this,e.pick(a,J));this.options=a},_ensureElement:function(){if(this.el)this.setElement(e.result(this,
"el"),!1);else{var a=e.extend({},e.result(this,"attributes"));this.id&&(a.id=e.result(this,"id"));this.className&&(a["class"]=e.result(this,"className"));this.setElement(this.make(e.result(this,"tagName"),a),!1)}}});var K={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=K[a];e.defaults(c||(c={}),{emulateHTTP:g.emulateHTTP,emulateJSON:g.emulateJSON});var f={type:d,dataType:"json"};c.url||(f.url=e.result(b,"url")||u());if(null==c.data&&b&&("create"===
a||"update"===a||"patch"===a))f.contentType="application/json",f.data=JSON.stringify(c.attrs||b.toJSON(c));c.emulateJSON&&(f.contentType="application/x-www-form-urlencoded",f.data=f.data?{model:f.data}:{});if(c.emulateHTTP&&("PUT"===d||"DELETE"===d||"PATCH"===d)){f.type="POST";c.emulateJSON&&(f.data._method=d);var h=c.beforeSend;c.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d);if(h)return h.apply(this,arguments)}}"GET"!==f.type&&!c.emulateJSON&&(f.processData=!1);var j=c.success;
c.success=function(a,d,e){j&&j(a,d,e);b.trigger("sync",b,a,c)};var i=c.error;c.error=function(a){i&&i(b,a,c);b.trigger("error",b,a,c)};a=g.ajax(e.extend(f,c));b.trigger("request",b,a,c);return a};g.ajax=function(){return g.$.ajax.apply(g.$,arguments)};o.extend=p.extend=v.extend=x.extend=j.extend=function(a,b){var c=this,d;d=a&&e.has(a,"constructor")?a.constructor:function(){c.apply(this,arguments)};e.extend(d,c,b);var f=function(){this.constructor=d};f.prototype=c.prototype;d.prototype=new f;a&&e.extend(d.prototype,
a);d.__super__=c.prototype;return d};var u=function(){throw Error('A "url" property or function must be specified');}}).call(this);

/* ===================================================
 * bootstrap-transition.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function ($) {

  "use strict"; // jshint ;_;


  /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
   * ======================================================= */

  $(function () {

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd otransitionend'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);
/* =========================================================
 * bootstrap-modal.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element
            .show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
            that.$element.focus().trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function (that) {
        this.$element
          .hide()
          .trigger('hidden')

        this.backdrop()
      }

    , removeBackdrop: function () {
        this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, $.proxy(this.removeBackdrop, this)) :
            this.removeBackdrop()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL NO CONFLICT
  * ================= */

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


 /* MODAL DATA-API
  * ============== */

  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);

/* ============================================================
 * bootstrap-dropdown.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=dropdown]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , isActive

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) {
        $parent.toggleClass('open')
      }

      $this.focus()

      return false
    }

  , keydown: function (e) {
      var $this
        , $items
        , $active
        , $parent
        , isActive
        , index

      if (!/(38|40|27)/.test(e.keyCode)) return

      $this = $(this)

      e.preventDefault()
      e.stopPropagation()

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      if (!isActive || (isActive && e.keyCode == 27)) return $this.click()

      $items = $('[role=menu] li:not(.divider):visible a', $parent)

      if (!$items.length) return

      index = $items.index($items.filter(':focus'))

      if (e.keyCode == 38 && index > 0) index--                                        // up
      if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
      if (!~index) index = 0

      $items
        .eq(index)
        .focus()
    }

  }

  function clearMenus() {
    $(toggle).each(function () {
      getParent($(this)).removeClass('open')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)
    $parent.length || ($parent = $this.parent())

    return $parent
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


 /* DROPDOWN NO CONFLICT
  * ==================== */

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(document)
    .on('click.dropdown.data-api touchstart.dropdown.data-api', clearMenus)
    .on('click.dropdown touchstart.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('touchstart.dropdown.data-api', '.dropdown-menu', function (e) { e.stopPropagation() })
    .on('click.dropdown.data-api touchstart.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.dropdown.data-api touchstart.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);
/* =============================================================
 * bootstrap-scrollspy.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* SCROLLSPY CLASS DEFINITION
  * ========================== */

  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this)
      , $element = $(element).is('body') ? $(window) : $(element)
      , href
    this.options = $.extend({}, $.fn.scrollspy.defaults, options)
    this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
    this.selector = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.$body = $('body')
    this.refresh()
    this.process()
  }

  ScrollSpy.prototype = {

      constructor: ScrollSpy

    , refresh: function () {
        var self = this
          , $targets

        this.offsets = $([])
        this.targets = $([])

        $targets = this.$body
          .find(this.selector)
          .map(function () {
            var $el = $(this)
              , href = $el.data('target') || $el.attr('href')
              , $href = /^#\w/.test(href) && $(href)
            return ( $href
              && $href.length
              && [[ $href.position().top + self.$scrollElement.scrollTop(), href ]] ) || null
          })
          .sort(function (a, b) { return a[0] - b[0] })
          .each(function () {
            self.offsets.push(this[0])
            self.targets.push(this[1])
          })
      }

    , process: function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
          , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
          , maxScroll = scrollHeight - this.$scrollElement.height()
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

        if (scrollTop >= maxScroll) {
          return activeTarget != (i = targets.last()[0])
            && this.activate ( i )
        }

        for (i = offsets.length; i--;) {
          activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activate( targets[i] )
        }
      }

    , activate: function (target) {
        var active
          , selector

        this.activeTarget = target

        $(this.selector)
          .parent('.active')
          .removeClass('active')

        selector = this.selector
          + '[data-target="' + target + '"],'
          + this.selector + '[href="' + target + '"]'

        active = $(selector)
          .parent('li')
          .addClass('active')

        if (active.parent('.dropdown-menu').length)  {
          active = active.closest('li.dropdown').addClass('active')
        }

        active.trigger('activate')
      }

  }


 /* SCROLLSPY PLUGIN DEFINITION
  * =========================== */

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('scrollspy')
        , options = typeof option == 'object' && option
      if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy

  $.fn.scrollspy.defaults = {
    offset: 10
  }


 /* SCROLLSPY NO CONFLICT
  * ===================== */

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


 /* SCROLLSPY DATA-API
  * ================== */

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);
/* ========================================================
 * bootstrap-tab.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active:last a')[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB NO CONFLICT
  * =============== */

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


 /* TAB DATA-API
  * ============ */

  $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);
/* ===========================================================
 * bootstrap-tooltip.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      if (this.options.trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (this.options.trigger != 'manual') {
        eventIn = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'
        eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'
        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , inside
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp

      if (this.hasContent() && this.enabled) {
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        inside = /in/.test(placement)

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })
          .insertAfter(this.$element)

        pos = this.getPosition(inside)

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (inside ? placement.split(' ')[1] : placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        $tip
          .offset(tp)
          .addClass(placement)
          .addClass('in')
      }
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function (inside) {
      return $.extend({}, (inside ? {top: 0, left: 0} : this.$element.offset()), {
        width: this.$element[0].offsetWidth
      , height: this.$element[0].offsetHeight
      })
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)
      self[self.tip().hasClass('in') ? 'hide' : 'show']()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover'
  , title: ''
  , delay: 0
  , html: false
  }


 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);
/* ===========================================================
 * bootstrap-popover.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = $e.attr('data-content')
        || (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"></div></div></div>'
  })


 /* POPOVER NO CONFLICT
  * =================== */

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);
/* ==========================================================
 * bootstrap-affix.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* AFFIX CLASS DEFINITION
  * ====================== */

  var Affix = function (element, options) {
    this.options = $.extend({}, $.fn.affix.defaults, options)
    this.$window = $(window)
      .on('scroll.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.affix.data-api',  $.proxy(function () { setTimeout($.proxy(this.checkPosition, this), 1) }, this))
    this.$element = $(element)
    this.checkPosition()
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
      , scrollTop = this.$window.scrollTop()
      , position = this.$element.offset()
      , offset = this.options.offset
      , offsetBottom = offset.bottom
      , offsetTop = offset.top
      , reset = 'affix affix-top affix-bottom'
      , affix

    if (typeof offset != 'object') offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function') offsetTop = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ?
      false    : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ?
      'bottom' : offsetTop != null && scrollTop <= offsetTop ?
      'top'    : false

    if (this.affixed === affix) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
  }


 /* AFFIX PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('affix')
        , options = typeof option == 'object' && option
      if (!data) $this.data('affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix

  $.fn.affix.defaults = {
    offset: 0
  }


 /* AFFIX NO CONFLICT
  * ================= */

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


 /* AFFIX DATA-API
  * ============== */

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
        , data = $spy.data()

      data.offset = data.offset || {}

      data.offsetBottom && (data.offset.bottom = data.offsetBottom)
      data.offsetTop && (data.offset.top = data.offsetTop)

      $spy.affix(data)
    })
  })


}(window.jQuery);
/* ==========================================================
 * bootstrap-alert.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* ALERT CLASS DEFINITION
  * ====================== */

  var dismiss = '[data-dismiss="alert"]'
    , Alert = function (el) {
        $(el).on('click', dismiss, this.close)
      }

  Alert.prototype.close = function (e) {
    var $this = $(this)
      , selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)

    e && e.preventDefault()

    $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())

    $parent.trigger(e = $.Event('close'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent
        .trigger('closed')
        .remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent.on($.support.transition.end, removeElement) :
      removeElement()
  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('alert')
      if (!data) $this.data('alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


 /* ALERT NO CONFLICT
  * ================= */

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


 /* ALERT DATA-API
  * ============== */

  $(document).on('click.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);
/* ============================================================
 * bootstrap-button.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* BUTTON PUBLIC CLASS DEFINITION
  * ============================== */

  var Button = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.button.defaults, options)
  }

  Button.prototype.setState = function (state) {
    var d = 'disabled'
      , $el = this.$element
      , data = $el.data()
      , val = $el.is('input') ? 'val' : 'html'

    state = state + 'Text'
    data.resetText || $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d)
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons-radio"]')

    $parent && $parent
      .find('.active')
      .removeClass('active')

    this.$element.toggleClass('active')
  }


 /* BUTTON PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('button')
        , options = typeof option == 'object' && option
      if (!data) $this.data('button', (data = new Button(this, options)))
      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.defaults = {
    loadingText: 'loading...'
  }

  $.fn.button.Constructor = Button


 /* BUTTON NO CONFLICT
  * ================== */

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


 /* BUTTON DATA-API
  * =============== */

  $(document).on('click.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
  })

}(window.jQuery);
/* =============================================================
 * bootstrap-collapse.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* COLLAPSE PUBLIC CLASS DEFINITION
  * ================================ */

  var Collapse = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    }

  , hide: function () {
      var dimension
      if (this.transitioning) return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    }

  , reset: function (size) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

      return this
    }

  , transition: function (method, startEvent, completeEvent) {
      var that = this
        , complete = function () {
            if (startEvent.type == 'show') that.reset()
            that.transitioning = 0
            that.$element.trigger(completeEvent)
          }

      this.$element.trigger(startEvent)

      if (startEvent.isDefaultPrevented()) return

      this.transitioning = 1

      this.$element[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* COLLAPSE PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = typeof option == 'object' && option
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSE NO CONFLICT
  * ==================== */

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


 /* COLLAPSE DATA-API
  * ================= */

  $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this = $(this), href
      , target = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
      , option = $(target).data('collapse') ? 'toggle' : $this.data()
    $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    $(target).collapse(option)
  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-carousel.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.options = options
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.prototype = {

    cycle: function (e) {
      if (!e) this.paused = false
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

  , to: function (pos) {
      var $active = this.$element.find('.item.active')
        , children = $active.parent().children()
        , activePos = children.index($active)
        , that = this

      if (pos > (children.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activePos == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activePos ? 'next' : 'prev', $(children[pos]))
    }

  , pause: function (e) {
      if (!e) this.paused = true
      if (this.$element.find('.next, .prev').length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end)
        this.cycle()
      }
      clearInterval(this.interval)
      this.interval = null
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.item.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this
        , e

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      e = $.Event('slide', {
        relatedTarget: $next[0]
      })

      if ($next.hasClass('active')) return

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
        , action = typeof option == 'string' ? option : options.slide
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  , pause: 'hover'
  }

  $.fn.carousel.Constructor = Carousel


 /* CAROUSEL NO CONFLICT
  * ==================== */

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }

 /* CAROUSEL DATA-API
  * ================= */

  $(document).on('click.carousel.data-api', '[data-slide]', function (e) {
    var $this = $(this), href
      , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      , options = $.extend({}, $target.data(), $this.data())
    $target.carousel(options)
    e.preventDefault()
  })

}(window.jQuery);
/* =============================================================
 * bootstrap-typeahead.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.source = this.options.source
    this.$menu = $(this.options.menu)
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , select: function () {
      var val = this.$menu.find('.active').attr('data-value')
      this.$element
        .val(this.updater(val))
        .change()
      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      })

      this.$menu
        .insertAfter(this.$element)
        .css({
          top: pos.top + pos.height
        , left: pos.left
        })
        .show()

      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {
      var items

      this.query = this.$element.val()

      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }

      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

      return items ? this.process(items) : this
    }

  , process: function (items) {
      var that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      items.first().addClass('active')
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
    }

  , eventSupported: function(eventName) {
      var isSupported = eventName in this.$element
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;')
        isSupported = typeof this.$element[eventName] === 'function'
      }
      return isSupported
    }

  , move: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , keydown: function (e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27])
      this.move(e)
    }

  , keypress: function (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , blur: function (e) {
      var that = this
      setTimeout(function () { that.hide() }, 150)
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
    }

  , mouseenter: function (e) {
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.typeahead

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  , minLength: 1
  }

  $.fn.typeahead.Constructor = Typeahead


 /* TYPEAHEAD NO CONFLICT
  * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old
    return this
  }


 /* TYPEAHEAD DATA-API
  * ================== */

  $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
    var $this = $(this)
    if ($this.data('typeahead')) return
    e.preventDefault()
    $this.typeahead($this.data())
  })

}(window.jQuery);

/*
Copyright (c) 2011 Juan Mellado

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
References:
- "OpenCV: Open Computer Vision Library"
  http://sourceforge.net/projects/opencvlibrary/
- "Stack Blur: Fast But Goodlooking"
  http://incubator.quasimondo.com/processing/fast_blur_deluxe.php
*/

var CV = CV || {};

CV.Image = function(width, height, data){
  this.width = width || 0;
  this.height = height || 0;
  this.data = data || [];
};

CV.grayscale = function(imageSrc, imageDst){
  var src = imageSrc.data, dst = imageDst.data, len = src.length,
      i = 0, j = 0;

  for (; i < len; i += 4){
    dst[j ++] =
      (src[i] * 0.299 + src[i + 1] * 0.587 + src[i + 2] * 0.114 + 0.5) & 0xff;
  }
  
  imageDst.width = imageSrc.width;
  imageDst.height = imageSrc.height;
  
  return imageDst;
};

CV.threshold = function(imageSrc, imageDst, threshold){
  var src = imageSrc.data, dst = imageDst.data,
      len = src.length, tab = [], i;

  for (i = 0; i < 256; ++ i){
    tab[i] = i <= threshold? 0: 255;
  }

  for (i = 0; i < len; ++ i){
    dst[i] = tab[ src[i] ];
  }

  imageDst.width = imageSrc.width;
  imageDst.height = imageSrc.height;

  return imageDst;
};

CV.adaptiveThreshold = function(imageSrc, imageDst, kernelSize, threshold){
  var src = imageSrc.data, dst = imageDst.data, len = src.length, tab = [], i;

  CV.stackBoxBlur(imageSrc, imageDst, kernelSize);

  for (i = 0; i < 768; ++ i){
    tab[i] = (i - 255 <= -threshold)? 255: 0;
  }

  for (i = 0; i < len; ++ i){
    dst[i] = tab[ src[i] - dst[i] + 255 ];
  }

  imageDst.width = imageSrc.width;
  imageDst.height = imageSrc.height;
  
  return imageDst;
};

CV.otsu = function(imageSrc){
  var src = imageSrc.data, len = src.length, hist = [],
      threshold = 0, sum = 0, sumB = 0, wB = 0, wF = 0, max = 0,
      mu, between, i;

  for (i = 0; i < 256; ++ i){
    hist[i] = 0;
  }
  
  for (i = 0; i < len; ++ i){
    hist[ src[i] ] ++;
  }

  for (i = 0; i < 256; ++ i){
    sum += hist[i] * i;
  }

  for (i = 0; i < 256; ++ i){
    wB += hist[i];
    if (0 !== wB){
    
      wF = len - wB;
      if (0 === wF){
        break;
      }

      sumB += hist[i] * i;
      
      mu = (sumB / wB) - ( (sum - sumB) / wF );

      between = wB * wF * mu * mu;
      
      if (between > max){
        max = between;
        threshold = i;
      }
    }
  }

  return threshold;
};

CV.stackBoxBlurMult =
  [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265];

CV.stackBoxBlurShift =
  [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13];

CV.BlurStack = function(){
  this.color = 0;
  this.next = null;
};

CV.stackBoxBlur = function(imageSrc, imageDst, kernelSize){
  var src = imageSrc.data, dst = imageDst.data,
      height = imageSrc.height, width = imageSrc.width,
      heightMinus1 = height - 1, widthMinus1 = width - 1,
      size = kernelSize + kernelSize + 1, radius = kernelSize + 1,
      mult = CV.stackBoxBlurMult[kernelSize],
      shift = CV.stackBoxBlurShift[kernelSize],
      stack, stackStart, color, sum, pos, start, p, x, y, i;

  stack = stackStart = new CV.BlurStack();
  for (i = 1; i < size; ++ i){
    stack = stack.next = new CV.BlurStack();
  }
  stack.next = stackStart;

  pos = 0;

  for (y = 0; y < height; ++ y){
    start = pos;
    
    color = src[pos];
    sum = radius * color;
    
    stack = stackStart;
    for (i = 0; i < radius; ++ i){
      stack.color = color;
      stack = stack.next;
    }
    for (i = 1; i < radius; ++ i){
      stack.color = src[pos + i];
      sum += stack.color;
      stack = stack.next;
    }
  
    stack = stackStart;
    for (x = 0; x < width; ++ x){
      dst[pos ++] = (sum * mult) >>> shift;
      
      p = x + radius;
      p = start + (p < widthMinus1? p: widthMinus1);
      sum -= stack.color - src[p];
      
      stack.color = src[p];
      stack = stack.next;
    }
  }

  for (x = 0; x < width; ++ x){
    pos = x;
    start = pos + width;
    
    color = dst[pos];
    sum = radius * color;
    
    stack = stackStart;
    for (i = 0; i < radius; ++ i){
      stack.color = color;
      stack = stack.next;
    }
    for (i = 1; i < radius; ++ i){
      stack.color = dst[start];
      sum += stack.color;
      stack = stack.next;
      
      start += width;
    }
    
    stack = stackStart;
    for (y = 0; y < height; ++ y){
      dst[pos] = (sum * mult) >>> shift;
      
      p = y + radius;
      p = x + ( (p < heightMinus1? p: heightMinus1) * width );
      sum -= stack.color - dst[p];
      
      stack.color = dst[p];
      stack = stack.next;
      
      pos += width;
    }
  }

  return imageDst;
};

CV.gaussianBlur = function(imageSrc, imageDst, imageMean, kernelSize){
  var kernel = CV.gaussianKernel(kernelSize);

  imageDst.width = imageSrc.width;
  imageDst.height = imageSrc.height;
  
  imageMean.width = imageSrc.width;
  imageMean.height = imageSrc.height;

  CV.gaussianBlurFilter(imageSrc, imageMean, kernel, true);
  CV.gaussianBlurFilter(imageMean, imageDst, kernel, false);

  return imageDst;
};

CV.gaussianBlurFilter = function(imageSrc, imageDst, kernel, horizontal){
  var src = imageSrc.data, dst = imageDst.data,
      height = imageSrc.height, width = imageSrc.width,
      pos = 0, limit = kernel.length >> 1,
      cur, value, i, j, k;
      
  for (i = 0; i < height; ++ i){
    
    for (j = 0; j < width; ++ j){
      value = 0.0;
    
      for (k = -limit; k <= limit; ++ k){

        if (horizontal){
          cur = pos + k;
          if (j + k < 0){
            cur = pos;
          }
          else if (j + k >= width){
            cur = pos;
          }
        }else{
          cur = pos + (k * width);
          if (i + k < 0){
            cur = pos;
          }
          else if (i + k >= height){
            cur = pos;
          }
        }

        value += kernel[limit + k] * src[cur];
      }
    
      dst[pos ++] = horizontal? value: (value + 0.5) & 0xff;
    }
  }

  return imageDst;
};

CV.gaussianKernel = function(kernelSize){
  var tab =
    [ [1],
      [0.25, 0.5, 0.25],
      [0.0625, 0.25, 0.375, 0.25, 0.0625],
      [0.03125, 0.109375, 0.21875, 0.28125, 0.21875, 0.109375, 0.03125] ],
    kernel = [], center, sigma, scale2X, sum, x, i;

  if ( (kernelSize <= 7) && (kernelSize % 2 === 1) ){
    kernel = tab[kernelSize >> 1];
  }else{
    center = (kernelSize - 1.0) * 0.5;
    sigma = 0.8 + (0.3 * (center - 1.0) );
    scale2X = -0.5 / (sigma * sigma);
    sum = 0.0;
    for (i = 0; i < kernelSize; ++ i){
      x = i - center;
      sum += kernel[i] = Math.exp(scale2X * x * x);
    }
    sum = 1 / sum;
    for (i = 0; i < kernelSize; ++ i){
      kernel[i] *= sum;
    }  
  }

  return kernel;
};

CV.findContours = function(imageSrc, binary){
  var width = imageSrc.width, height = imageSrc.height, contours = [],
      src, deltas, pos, pix, nbd, outer, hole, i, j;
  
  src = CV.binaryBorder(imageSrc, binary);

  deltas = CV.neighborhoodDeltas(width + 2);

  pos = width + 3;
  nbd = 1;

  for (i = 0; i < height; ++ i, pos += 2){
  
    for (j = 0; j < width; ++ j, ++ pos){
      pix = src[pos];

      if (0 !== pix){
        outer = hole = false;

        if (1 === pix && 0 === src[pos - 1]){
          outer = true;
        }
        else if (pix >= 1 && 0 === src[pos + 1]){
          hole = true;
        }

        if (outer || hole){
          ++ nbd;
          
          contours.push( CV.borderFollowing(src, pos, nbd, {x: j, y: i}, hole, deltas) );
        }
      }
    }
  }  

  return contours;
};

CV.borderFollowing = function(src, pos, nbd, point, hole, deltas){
  var contour = [], pos1, pos3, pos4, s, s_end, s_prev;

  contour.hole = hole;
      
  s = s_end = hole? 0: 4;
  do{
    s = (s - 1) & 7;
    pos1 = pos + deltas[s];
    if (src[pos1] !== 0){
      break;
    }
  }while(s !== s_end);
  
  if (s === s_end){
    src[pos] = -nbd;
    contour.push( {x: point.x, y: point.y} );

  }else{
    pos3 = pos;
    s_prev = s ^ 4;

    while(true){
      s_end = s;
    
      do{
        pos4 = pos3 + deltas[++ s];
      }while(src[pos4] === 0);
      
      s &= 7;
      
      if ( ( (s - 1) >>> 0) < (s_end >>> 0) ){
        src[pos3] = -nbd;
      }
      else if (src[pos3] === 1){
        src[pos3] = nbd;
      }

      contour.push( {x: point.x, y: point.y} );
      
      s_prev = s;

      point.x += CV.neighborhood[s][0];
      point.y += CV.neighborhood[s][1];

      if ( (pos4 === pos) && (pos3 === pos1) ){
        break;
      }
      
      pos3 = pos4;
      s = (s + 4) & 7;
    }
  }

  return contour;
};

CV.neighborhood = 
  [ [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1] ];

CV.neighborhoodDeltas = function(width){
  var deltas = [], len = CV.neighborhood.length, i = 0;
  
  for (; i < len; ++ i){
    deltas[i] = CV.neighborhood[i][0] + (CV.neighborhood[i][1] * width);
  }
  
  return deltas.concat(deltas);
};

CV.approxPolyDP = function(contour, epsilon){
  var slice = {start_index: 0, end_index: 0},
      right_slice = {start_index: 0, end_index: 0},
      poly = [], stack = [], len = contour.length,
      pt, start_pt, end_pt, dist, max_dist, le_eps,
      dx, dy, i, j, k;
  
  epsilon *= epsilon;
  
  k = 0;
  
  for (i = 0; i < 3; ++ i){
    max_dist = 0;
    
    k = (k + right_slice.start_index) % len;
    start_pt = contour[k];
    if (++ k === len) {k = 0;}
  
    for (j = 1; j < len; ++ j){
      pt = contour[k];
      if (++ k === len) {k = 0;}
    
      dx = pt.x - start_pt.x;
      dy = pt.y - start_pt.y;
      dist = dx * dx + dy * dy;

      if (dist > max_dist){
        max_dist = dist;
        right_slice.start_index = j;
      }
    }
  }

  if (max_dist <= epsilon){
    poly.push( {x: start_pt.x, y: start_pt.y} );

  }else{
    slice.start_index = k;
    slice.end_index = (right_slice.start_index += slice.start_index);
  
    right_slice.start_index -= right_slice.start_index >= len? len: 0;
    right_slice.end_index = slice.start_index;
    if (right_slice.end_index < right_slice.start_index){
      right_slice.end_index += len;
    }
    
    stack.push( {start_index: right_slice.start_index, end_index: right_slice.end_index} );
    stack.push( {start_index: slice.start_index, end_index: slice.end_index} );
  }

  while(stack.length !== 0){
    slice = stack.pop();
    
    end_pt = contour[slice.end_index % len];
    start_pt = contour[k = slice.start_index % len];
    if (++ k === len) {k = 0;}
    
    if (slice.end_index <= slice.start_index + 1){
      le_eps = true;
    
    }else{
      max_dist = 0;

      dx = end_pt.x - start_pt.x;
      dy = end_pt.y - start_pt.y;
      
      for (i = slice.start_index + 1; i < slice.end_index; ++ i){
        pt = contour[k];
        if (++ k === len) {k = 0;}
        
        dist = Math.abs( (pt.y - start_pt.y) * dx - (pt.x - start_pt.x) * dy);

        if (dist > max_dist){
          max_dist = dist;
          right_slice.start_index = i;
        }
      }
      
      le_eps = max_dist * max_dist <= epsilon * (dx * dx + dy * dy);
    }
    
    if (le_eps){
      poly.push( {x: start_pt.x, y: start_pt.y} );

    }else{
      right_slice.end_index = slice.end_index;
      slice.end_index = right_slice.start_index;

      stack.push( {start_index: right_slice.start_index, end_index: right_slice.end_index} );
      stack.push( {start_index: slice.start_index, end_index: slice.end_index} );
    }
  }
  
  return poly;
};

CV.warp = function(imageSrc, imageDst, contour, warpSize){
  var src = imageSrc.data, dst = imageDst.data,
      width = imageSrc.width, height = imageSrc.height,
      pos = 0,
      sx1, sx2, dx1, dx2, sy1, sy2, dy1, dy2, p1, p2, p3, p4,
      m, r, s, t, u, v, w, x, y, i, j;
  
  m = CV.getPerspectiveTransform(contour, warpSize - 1);

  r = m[8];
  s = m[2];
  t = m[5];
  
  for (i = 0; i < warpSize; ++ i){
    r += m[7];
    s += m[1];
    t += m[4];

    u = r;
    v = s;
    w = t;
    
    for (j = 0; j < warpSize; ++ j){
      u += m[6];
      v += m[0];
      w += m[3];

      x = v / u;
      y = w / u;

      sx1 = x >>> 0;
      sx2 = (sx1 === width - 1)? sx1: sx1 + 1;
      dx1 = x - sx1;
      dx2 = 1.0 - dx1;

      sy1 = y >>> 0;
      sy2 = (sy1 === height - 1)? sy1: sy1 + 1;
      dy1 = y - sy1;
      dy2 = 1.0 - dy1;

      p1 = p2 = sy1 * width;
      p3 = p4 = sy2 * width;

      dst[pos ++] = 
        (dy2 * (dx2 * src[p1 + sx1] + dx1 * src[p2 + sx2]) +
         dy1 * (dx2 * src[p3 + sx1] + dx1 * src[p4 + sx2]) ) & 0xff;

    }
  }

  imageDst.width = warpSize;
  imageDst.height = warpSize;

  return imageDst;
};

CV.getPerspectiveTransform = function(src, size){
  var rq = CV.square2quad(src);
  
  rq[0] /= size;
  rq[1] /= size;
  rq[3] /= size;
  rq[4] /= size;
  rq[6] /= size;
  rq[7] /= size;
  
  return rq;
};

CV.square2quad = function(src){
  var sq = [], px, py, dx1, dx2, dy1, dy2, den;
  
  px = src[0].x - src[1].x + src[2].x - src[3].x;
  py = src[0].y - src[1].y + src[2].y - src[3].y;
  
  if (0 === px && 0 === py){
    sq[0] = src[1].x - src[0].x;
    sq[1] = src[2].x - src[1].x;
    sq[2] = src[0].x;
    sq[3] = src[1].y - src[0].y;
    sq[4] = src[2].y - src[1].y;
    sq[5] = src[0].y;
    sq[6] = 0;
    sq[7] = 0;
    sq[8] = 1;

  }else{
    dx1 = src[1].x - src[2].x;
    dx2 = src[3].x - src[2].x;
    dy1 = src[1].y - src[2].y;
    dy2 = src[3].y - src[2].y;
    den = dx1 * dy2 - dx2 * dy1;
  
    sq[6] = (px * dy2 - dx2 * py) / den;
    sq[7] = (dx1 * py - px * dy1) / den;
    sq[8] = 1;
    sq[0] = src[1].x - src[0].x + sq[6] * src[1].x;
    sq[1] = src[3].x - src[0].x + sq[7] * src[3].x;
    sq[2] = src[0].x;
    sq[3] = src[1].y - src[0].y + sq[6] * src[1].y;
    sq[4] = src[3].y - src[0].y + sq[7] * src[3].y;
    sq[5] = src[0].y;
  }

  return sq;
};

CV.isContourConvex = function(contour){
  var orientation = 0, convex = true,
      len = contour.length, i = 0, j = 0,
      cur_pt, prev_pt, dxdy0, dydx0, dx0, dy0, dx, dy;

  prev_pt = contour[len - 1];
  cur_pt = contour[0];

  dx0 = cur_pt.x - prev_pt.x;
  dy0 = cur_pt.y - prev_pt.y;

  for (; i < len; ++ i){
    if (++ j === len) {j = 0;}

    prev_pt = cur_pt;
    cur_pt = contour[j];

    dx = cur_pt.x - prev_pt.x;
    dy = cur_pt.y - prev_pt.y;
    dxdy0 = dx * dy0;
    dydx0 = dy * dx0;

    orientation |= dydx0 > dxdy0? 1: (dydx0 < dxdy0? 2: 3);

    if (3 === orientation){
        convex = false;
        break;
    }

    dx0 = dx;
    dy0 = dy;
  }

  return convex;
};

CV.perimeter = function(poly){
  var len = poly.length, i = 0, j = len - 1,
      p = 0.0, dx, dy;

  for (; i < len; j = i ++){
    dx = poly[i].x - poly[j].x;
    dy = poly[i].y - poly[j].y;
    
    p += Math.sqrt(dx * dx + dy * dy) ;
  }

  return p;
};

CV.minEdgeLength = function(poly){
  var len = poly.length, i = 0, j = len - 1, 
      min = Infinity, d, dx, dy;

  for (; i < len; j = i ++){
    dx = poly[i].x - poly[j].x;
    dy = poly[i].y - poly[j].y;

    d = dx * dx + dy * dy;

    if (d < min){
      min = d;
    }
  }
  
  return Math.sqrt(min);
};

CV.countNonZero = function(imageSrc, square){
  var src = imageSrc.data, height = square.height, width = square.width,
      pos = square.x + (square.y * imageSrc.width),
      span = imageSrc.width - width,
      nz = 0, i, j;
  
  for (i = 0; i < height; ++ i){

    for (j = 0; j < width; ++ j){
    
      if ( 0 !== src[pos ++] ){
        ++ nz;
      }
    }
    
    pos += span;
  }

  return nz;
};

CV.binaryBorder = function(imageSrc, dst){
  var src = imageSrc.data, height = imageSrc.height, width = imageSrc.width,
      posSrc = 0, posDst = 0, i, j;

  for (j = -2; j < width; ++ j){
    dst[posDst ++] = 0;
  }

  for (i = 0; i < height; ++ i){
    dst[posDst ++] = 0;
    
    for (j = 0; j < width; ++ j){
      dst[posDst ++] = (0 === src[posSrc ++]? 0: 1);
    }
    
    dst[posDst ++] = 0;
  }

  for (j = -2; j < width; ++ j){
    dst[posDst ++] = 0;
  }
  
  return dst;
};

/**
 * Copyright (c) 2009 Sergiy Kovalchuk (serg472@gmail.com)
 * 
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *  
 * Following code is based on Element.mask() implementation from ExtJS framework (http://extjs.com/)
 *
 */
;(function($){
	
	/**
	 * Displays loading mask over selected element(s). Accepts both single and multiple selectors.
	 *
	 * @param label Text message that will be displayed on top of the mask besides a spinner (optional). 
	 * 				If not provided only mask will be displayed without a label or a spinner.  	
	 * @param delay Delay in milliseconds before element is masked (optional). If unmask() is called 
	 *              before the delay times out, no mask is displayed. This can be used to prevent unnecessary 
	 *              mask display for quick processes.   	
	 */
	$.fn.mask = function(label, delay){
		$(this).each(function() {
			if(delay !== undefined && delay > 0) {
		        var element = $(this);
		        element.data("_mask_timeout", setTimeout(function() { $.maskElement(element, label)}, delay));
			} else {
				$.maskElement($(this), label);
			}
		});
	};
	
	/**
	 * Removes mask from the element(s). Accepts both single and multiple selectors.
	 */
	$.fn.unmask = function(){
		$(this).each(function() {
			$.unmaskElement($(this));
		});
	};
	
	/**
	 * Checks if a single element is masked. Returns false if mask is delayed or not displayed. 
	 */
	$.fn.isMasked = function(){
		return this.hasClass("masked");
	};

	$.maskElement = function(element, label){
	
		//if this element has delayed mask scheduled then remove it and display the new one
		if (element.data("_mask_timeout") !== undefined) {
			clearTimeout(element.data("_mask_timeout"));
			element.removeData("_mask_timeout");
		}

		if(element.isMasked()) {
			$.unmaskElement(element);
		}
		
		if(element.css("position") == "static") {
			element.addClass("masked-relative");
		}
		
		element.addClass("masked");
		
		var maskDiv = $('<div class="loadmask"></div>');
		
		//auto height fix for IE
		if(navigator.userAgent.toLowerCase().indexOf("msie") > -1){
			maskDiv.height(element.height() + parseInt(element.css("padding-top")) + parseInt(element.css("padding-bottom")));
			maskDiv.width(element.width() + parseInt(element.css("padding-left")) + parseInt(element.css("padding-right")));
		}
		
		//fix for z-index bug with selects in IE6
		if(navigator.userAgent.toLowerCase().indexOf("msie 6") > -1){
			element.find("select").addClass("masked-hidden");
		}
		
		element.append(maskDiv);
		
		if(label !== undefined) {
			var maskMsgDiv = $('<div class="loadmask-msg" style="display:none;"></div>');
			maskMsgDiv.append('<div>' + label + '</div>');
			element.append(maskMsgDiv);
			
			//calculate center position
			maskMsgDiv.css("top", Math.round(element.height() / 2 - (maskMsgDiv.height() - parseInt(maskMsgDiv.css("padding-top")) - parseInt(maskMsgDiv.css("padding-bottom"))) / 2)+"px");
			maskMsgDiv.css("left", Math.round(element.width() / 2 - (maskMsgDiv.width() - parseInt(maskMsgDiv.css("padding-left")) - parseInt(maskMsgDiv.css("padding-right"))) / 2)+"px");
			
			maskMsgDiv.show();
		}
		
	};
	
	$.unmaskElement = function(element){
		//if this element has delayed mask scheduled then remove it
		if (element.data("_mask_timeout") !== undefined) {
			clearTimeout(element.data("_mask_timeout"));
			element.removeData("_mask_timeout");
		}
		
		element.find(".loadmask-msg,.loadmask").remove();
		element.removeClass("masked");
		element.removeClass("masked-relative");
		element.find("select").removeClass("masked-hidden");
	};
 
})(jQuery);
!function ($) {
  "use strict";
  // version: 2.8.2
  // by Mattia Larentis - follow me on twitter! @SpiritualGuru

  var addToAttribute = function (obj, array, value) {
    var i = 0
      , length = array.length;

    for (; i < length; i++) {
      obj = obj[array[i]] = obj[array[i]] || i == ( length - 1) ? value : {}
    }
  };

  $.fn.toggleButtons = function (method) {
    var $element
      , $div
      , $cb
      , transitionSpeed = 0.05
      , methods = {
        init: function (opt) {
          this.each(function () {
              var $spanLeft
                , $spanRight
                , options
                , moving
                , dataAttribute = {};

              $element = $(this);
              $element.addClass('toggle-button');

              $.each($element.data(), function (i, el) {
                var key
                  , tmp = {};

                if (i.indexOf("togglebutton") === 0) {
                  key = i.match(/[A-Z][a-z]+/g);
                  key = $.map(key, function (n) {
                    return (n.toLowerCase());
                  });

                  addToAttribute(tmp, key, el);
                  dataAttribute = $.extend(true, dataAttribute, tmp);
                }
              });

              options = $.extend(true, {}, $.fn.toggleButtons.defaults, opt, dataAttribute);

              $(this).data('options', options);

              $spanLeft = $('<span></span>').addClass("labelLeft").text(options.label.enabled === undefined ? "ON" : options.label.enabled);
              $spanRight = $('<span></span>').addClass("labelRight").text(options.label.disabled === undefined ? "OFF " : options.label.disabled);

              // html layout
              $cb = $element.find('input:checkbox')

              $div = $cb.wrap($('<div></div>')).parent();
              $div.append($spanLeft);
              $div.append($('<label></label>').attr('for', $cb.attr('id') || ''));
              $div.append($spanRight);

              if ($cb.is(':checked'))
                $element.find('>div').css('left', "0");
              else $element.find('>div').css('left', "-50%");

              if (options.animated) {
                if (options.transitionspeed !== undefined)
                  if (/^(\d*%$)/.test(options.transitionspeed))  // is a percent value?
                    transitionSpeed = 0.05 * parseInt(options.transitionspeed) / 100;
                  else
                    transitionSpeed = options.transitionspeed;
              }
              else transitionSpeed = 0;

              $(this).data('transitionSpeed', transitionSpeed * 1000);


              options["width"] /= 2;

              // width of the bootstrap-toggle-button
              $element
                .css('width', options.width * 2)
                .find('>div').css('width', options.width * 3)
                .find('>span, >label').css('width', options.width);

              // height of the bootstrap-toggle-button
              $element
                .css('height', options.height)
                .find('span, label')
                .css('height', options.height)
                .filter('span')
                .css('line-height', options.height + "px");

              if ($cb.is(':disabled'))
                $(this).addClass('deactivate');

              $element.find('span').css(options.font);


              // enabled custom color
              if (options.style.enabled === undefined) {
                if (options.style.custom !== undefined && options.style.custom.enabled !== undefined && options.style.custom.enabled.background !== undefined) {
                  $spanLeft.css('color', options.style.custom.enabled.color);
                  if (options.style.custom.enabled.gradient === undefined)
                    $spanLeft.css('background', options.style.custom.enabled.background);
                  else $.each(["-webkit-", "-moz-", "-o-", ""], function (i, el) {
                    $spanLeft.css('background-image', el + 'linear-gradient(top, ' + options.style.custom.enabled.background + ',' + options.style.custom.enabled.gradient + ')');
                  });
                }
              }
              else $spanLeft.addClass(options.style.enabled);

              // disabled custom color
              if (options.style.disabled === undefined) {
                if (options.style.custom !== undefined && options.style.custom.disabled !== undefined && options.style.custom.disabled.background !== undefined) {
                  $spanRight.css('color', options.style.custom.disabled.color);
                  if (options.style.custom.disabled.gradient === undefined)
                    $spanRight.css('background', options.style.custom.disabled.background);
                  else $.each(["-webkit-", "-moz-", "-o-", ""], function (i, el) {
                    $spanRight.css('background-image', el + 'linear-gradient(top, ' + options.style.custom.disabled.background + ',' + options.style.custom.disabled.gradient + ')');
                  });
                }
              }
              else $spanRight.addClass(options.style.disabled);

              var changeStatus = function ($this) {
                $this.siblings('label')
                  .trigger('mousedown')
                  .trigger('mouseup')
                  .trigger('click');
              };

              $spanLeft.on('click', function (e) {
                changeStatus($(this));
              });
              $spanRight.on('click', function (e) {
                changeStatus($(this));
              });

              $element.find('input:checkbox').on('change', function (e, skipOnChange) {
                var $element = $(this).parent()
                  , active = $(this).is(':checked')
                  , $toggleButton = $(this).closest('.toggle-button');

                $element.stop().animate({'left': active ? '0' : '-50%'}, $toggleButton.data('transitionSpeed'));

                options = $toggleButton.data('options');

                if (!skipOnChange)
                  options.onChange($element, active, e);
              });

              $element.find('label').on('mousedown touchstart', function (e) {
                moving = false;
                e.preventDefault();
                e.stopImmediatePropagation();

                if ($(this).closest('.toggle-button').is('.deactivate'))
                  $(this).off('click');
                else {
                  $(this).on('mousemove touchmove', function (e) {
                    var $element = $(this).closest('.toggle-button')
                      , relativeX = (e.pageX || e.originalEvent.targetTouches[0].pageX) - $element.offset().left
                      , percent = ((relativeX / (options.width * 2)) * 100);
                    moving = true;

                    e.stopImmediatePropagation();
                    e.preventDefault();

                    if (percent < 25)
                      percent = 25;
                    else if (percent > 75)
                      percent = 75;

                    $element.find('>div').css('left', (percent - 75) + "%");
                  });

                  $(this).on('click touchend', function (e) {
                    var $target = $(e.target)
                      , $myCheckBox = $target.siblings('input:checkbox');

                    e.stopImmediatePropagation();
                    e.preventDefault();
                    $(this).off('mouseleave');

                    if (moving)
                      if (parseInt($(this).parent().css('left')) < -25)
                        $myCheckBox.attr('checked', false);
                      else $myCheckBox.attr('checked', true);
                    else $myCheckBox.attr("checked", !$myCheckBox.is(":checked"));

                    $myCheckBox.trigger('change');
                  });

                  $(this).on('mouseleave', function (e) {
                    var $myCheckBox = $(this).siblings('input:checkbox');

                    e.preventDefault();
                    e.stopImmediatePropagation();

                    $(this).off('mouseleave');
                    $(this).trigger('mouseup');

                    if (parseInt($(this).parent().css('left')) < -25)
                      $myCheckBox.attr('checked', false);
                    else $myCheckBox.attr('checked', true);

                    $myCheckBox.trigger('change');
                  });

                  $(this).on('mouseup', function (e) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    $(this).off('mousemove');
                  });
                }
              });
            }
          );
          return this;
        },
        toggleActivation: function () {
          $(this).toggleClass('deactivate');
        },
        toggleState: function (skipOnChange) {
          var $input = $(this).find('input:checkbox');
          $input.attr('checked', !$input.is(':checked')).trigger('change', skipOnChange);
        },
        setState: function(value, skipOnChange) {
          $(this).find('input:checkbox').attr('checked', value).trigger('change', skipOnChange);
        },
        status: function () {
          return $(this).find('input:checkbox').is(':checked');
        },
        destroy: function () {
          var $div = $(this).find('div')
            , $checkbox;

          $div.find(':not(input:checkbox)').remove();

          $checkbox = $div.children();
          $checkbox.unwrap().unwrap();

          $checkbox.unbind('change');

          return $checkbox;
        }
      };

    if (methods[method])
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    else if (typeof method === 'object' || !method)
      return methods.init.apply(this, arguments);
    else
      $.error('Method ' + method + ' does not exist!');
  };

  $.fn.toggleButtons.defaults = {
    onChange: function () {
    },
    width: 100,
    height: 25,
    font: {},
    animated: true,
    transitionspeed: undefined,
    label: {
      enabled: undefined,
      disabled: undefined
    },
    style: {
      enabled: undefined,
      disabled: undefined,
      custom: {
        enabled: {
          background: undefined,
          gradient: undefined,
          color: "#FFFFFF"
        },
        disabled: {
          background: undefined,
          gradient: undefined,
          color: "#FFFFFF"
        }
      }
    }
  };
}($);


// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik M�ller
// fixes from Paul Irish and Tino Zijdel

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

/*
Copyright (c) 2012 Juan Mellado

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
References:
- "Iterative Pose Estimation using Coplanar Feature Points"
  Denis Oberkampf, Daniel F. DeMenthon, Larry S. Davis
  http://www.cfar.umd.edu/~daniel/daniel_papersfordownload/CoplanarPts.pdf
*/

var POS = POS || {};

POS.Posit = function(modelSize, focalLength){
  this.objectPoints = this.buildModel(modelSize);
  this.focalLength = focalLength;

  this.objectVectors = [];
  this.objectNormal = [];
  this.objectMatrix = [[],[],[]];
  
  this.init();
};

POS.Posit.prototype.buildModel = function(modelSize){
  var half = modelSize / 2.0;
  
  return [
    [-half,  half, 0.0],
    [ half,  half, 0.0],
    [ half, -half, 0.0],
    [-half, -half, 0.0] ];
};

POS.Posit.prototype.init = function(){
  var np = this.objectPoints.length,
      vectors = [], n = [], len = 0.0, row = 2, i;
  
  for (i = 0; i < np; ++ i){
    this.objectVectors[i] = [this.objectPoints[i][0] - this.objectPoints[0][0],
                             this.objectPoints[i][1] - this.objectPoints[0][1],
                             this.objectPoints[i][2] - this.objectPoints[0][2]];
                             
    vectors[i] = [this.objectVectors[i][0],
                  this.objectVectors[i][1],
                  this.objectVectors[i][2]];
  }

  while(0.0 === len){
    n[0] = this.objectVectors[1][1] * this.objectVectors[row][2] -
           this.objectVectors[1][2] * this.objectVectors[row][1];
    n[1] = this.objectVectors[1][2] * this.objectVectors[row][0] -
           this.objectVectors[1][0] * this.objectVectors[row][2];
    n[2] = this.objectVectors[1][0] * this.objectVectors[row][1] -
           this.objectVectors[1][1] * this.objectVectors[row][0];
    
    len = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
    
    ++ row;
  }

  for (i = 0; i < 3; ++ i){
    this.objectNormal[i] = n[i] / len;
  }

  POS.pseudoInverse(vectors, np, this.objectMatrix);
};

POS.Posit.prototype.pose = function(imagePoints){
  var posRotation1 = [[],[],[]], posRotation2 = [[],[],[]], posTranslation = [],
      rotation1 = [[],[],[]], rotation2 = [[],[],[]], translation1 = [], translation2 = [],
      error1, error2, valid1, valid2, i, j;

  this.pos(imagePoints, posRotation1, posRotation2, posTranslation);

  valid1 = this.isValid(posRotation1, posTranslation);
  if (valid1){
    error1 = this.iterate(imagePoints, posRotation1, posTranslation, rotation1, translation1);
  }else{
    error1 = {euclidean: -1.0, pixels: -1, maximum: -1.0};
  }
  
  valid2 = this.isValid(posRotation2, posTranslation);
  if (valid2){
    error2 = this.iterate(imagePoints, posRotation2, posTranslation, rotation2, translation2);
  }else{
    error2 = {euclidean: -1.0, pixels: -1, maximum: -1.0};
  }

  for (i = 0; i < 3; ++ i){
    for (j = 0; j < 3; ++ j){
      if (valid1){
        translation1[i] -= rotation1[i][j] * this.objectPoints[0][j];
      }
      if (valid2){
        translation2[i] -= rotation2[i][j] * this.objectPoints[0][j];
      }
    }
  }

  return error1.euclidean < error2.euclidean?
    new POS.Pose(error1.pixels, rotation1, translation1, error2.pixels, rotation2, translation2):
    new POS.Pose(error2.pixels, rotation2, translation2, error1.pixels, rotation1, translation1);
};

POS.Posit.prototype.pos = function(imagePoints, rotation1, rotation2, translation){
  var np = this.objectPoints.length, imageVectors = [],
      i0 = [], j0 = [], ivec = [], jvec = [], row1 = [], row2 = [], row3 = [],
      i0i0, j0j0, i0j0, delta, q, lambda, mu, scale, i, j;

  for (i = 0; i < np; ++ i){
    imageVectors[i] = [imagePoints[i].x - imagePoints[0].x,
                       imagePoints[i].y - imagePoints[0].y];
  }

  //i0 and j0
  for (i = 0; i < 3; ++ i){
    i0[i] = 0.0;
    j0[i] = 0.0;
    for (j = 0; j < np; ++ j){
      i0[i] += this.objectMatrix[i][j] * imageVectors[j][0];
      j0[i] += this.objectMatrix[i][j] * imageVectors[j][1];
    }
  }

  i0i0 = i0[0] * i0[0] + i0[1] * i0[1] + i0[2] * i0[2];
  j0j0 = j0[0] * j0[0] + j0[1] * j0[1] + j0[2] * j0[2];
  i0j0 = i0[0] * j0[0] + i0[1] * j0[1] + i0[2] * j0[2];

  //Lambda and mu
  delta = (j0j0 - i0i0) * (j0j0 - i0i0) + 4.0 * (i0j0 * i0j0);
  
  if (j0j0 - i0i0 >= 0.0){
    q = (j0j0 - i0i0 + Math.sqrt(delta) ) / 2.0;
  }else{
    q = (j0j0 - i0i0 - Math.sqrt(delta) ) / 2.0;
  }
  
  if (q >= 0.0){
    lambda = Math.sqrt(q);
    if (0.0 === lambda){
      mu = 0.0;
    }else{
      mu = -i0j0 / lambda;
    }
  }else{
    lambda = Math.sqrt( -(i0j0 * i0j0) / q);
    if (0.0 === lambda){
      mu = Math.sqrt(i0i0 - j0j0);
    }else{
      mu = -i0j0 / lambda;
    }
  }

  //First rotation
  for (i = 0; i < 3; ++ i){
    ivec[i] = i0[i] + lambda * this.objectNormal[i];
    jvec[i] = j0[i] + mu * this.objectNormal[i];
  }
  
  scale = Math.sqrt(ivec[0] * ivec[0] + ivec[1] * ivec[1] + ivec[2] * ivec[2]);
  
  for (i = 0; i < 3; ++ i){
    row1[i] = ivec[i] / scale;
    row2[i] = jvec[i] / scale;
  }
  
  row3[0] = row1[1] * row2[2] - row1[2] * row2[1];
  row3[1] = row1[2] * row2[0] - row1[0] * row2[2];
  row3[2] = row1[0] * row2[1] - row1[1] * row2[0];

  for (i = 0; i < 3; ++ i){
    rotation1[0][i] = row1[i];
    rotation1[1][i] = row2[i];
    rotation1[2][i] = row3[i];
  }

  //Second rotation
  for (i = 0; i < 3; ++ i){
    ivec[i] = i0[i] - lambda * this.objectNormal[i];
    jvec[i] = j0[i] - mu * this.objectNormal[i];
  }
  
  for (i = 0; i < 3; ++ i){
    row1[i] = ivec[i] / scale;
    row2[i] = jvec[i] / scale;
  }
  
  row3[0] = row1[1] * row2[2] - row1[2] * row2[1];
  row3[1] = row1[2] * row2[0] - row1[0] * row2[2];
  row3[2] = row1[0] * row2[1] - row1[1] * row2[0];
  
  for (i = 0; i < 3; ++ i){
    rotation2[0][i] = row1[i];
    rotation2[1][i] = row2[i];
    rotation2[2][i] = row3[i];
  }

  //Translation
  translation[0] = imagePoints[0].x / scale;
  translation[1] = imagePoints[0].y / scale;
  translation[2] = this.focalLength / scale;
};

POS.Posit.prototype.isValid = function(rotation, translation){
  var np = this.objectPoints.length, zmin = Infinity, i = 0, zi;

  for (; i < np; ++ i){
    zi = translation[2] +
      (rotation[2][0] * this.objectVectors[i][0] +
       rotation[2][1] * this.objectVectors[i][1] +
       rotation[2][2] * this.objectVectors[i][2]);
    if (zi < zmin){
      zmin = zi;
    }
  }

  return zmin >= 0.0;
};

POS.Posit.prototype.iterate = function(imagePoints, posRotation, posTranslation, rotation, translation){
  var np = this.objectPoints.length,
      oldSopImagePoints = [], sopImagePoints = [],
      rotation1 = [[],[],[]], rotation2 = [[],[],[]],
      translation1 = [], translation2 = [],
      converged = false, iteration = 0,
      oldImageDifference, imageDifference, factor,
      error, error1, error2, delta, i, j;

  for (i = 0; i < np; ++ i){
    oldSopImagePoints[i] = {x: imagePoints[i].x,
                            y: imagePoints[i].y};
  }
  
  for (i = 0; i < 3; ++ i){
    for (j = 0; j < 3; ++ j){
      rotation[i][j] = posRotation[i][j];
    }
    translation[i] = posTranslation[i];
  }

  for (i = 0; i < np; ++ i){
    factor = 0.0;
    for (j = 0; j < 3; ++ j){
      factor += this.objectVectors[i][j] * rotation[2][j] / translation[2];
    }
    sopImagePoints[i] = {x: (1.0 + factor) * imagePoints[i].x,
                         y: (1.0 + factor) * imagePoints[i].y};
  }

  imageDifference = 0.0;
  
  for (i = 0; i < np; ++ i){
    imageDifference += Math.abs(sopImagePoints[i].x - oldSopImagePoints[i].x);
    imageDifference += Math.abs(sopImagePoints[i].y - oldSopImagePoints[i].y);
  }

  for (i = 0; i < 3; ++ i){
    translation1[i] = translation[i] -
      (rotation[i][0] * this.objectPoints[0][0] +
       rotation[i][1] * this.objectPoints[0][1] +
       rotation[i][2] * this.objectPoints[0][2]);
  }
  
  error1 = this.error(imagePoints, rotation, translation1);

  //Convergence
  converged = (0.0 === error1.pixels) || (imageDifference < 0.01);
  
  while( iteration ++ < 100 && !converged ){
  
    for (i = 0; i < np; ++ i){
      oldSopImagePoints[i].x = sopImagePoints[i].x;
      oldSopImagePoints[i].y = sopImagePoints[i].y;
    }

    this.pos(sopImagePoints, rotation1, rotation2, translation);

    for (i = 0; i < 3; ++ i){
      translation1[i] = translation[i] -
        (rotation1[i][0] * this.objectPoints[0][0] +
         rotation1[i][1] * this.objectPoints[0][1] +
         rotation1[i][2] * this.objectPoints[0][2]);
        
      translation2[i] = translation[i] -
        (rotation2[i][0] * this.objectPoints[0][0] +
         rotation2[i][1] * this.objectPoints[0][1] +
         rotation2[i][2] * this.objectPoints[0][2]);
    }

    error1 = this.error(imagePoints, rotation1, translation1);
    error2 = this.error(imagePoints, rotation2, translation2);

    if ( (error1.euclidean >= 0.0) && (error2.euclidean >= 0.0) ){
      if (error2.euclidean < error1.euclidean){
        error = error2;
        for (i = 0; i < 3; ++ i){
          for (j = 0; j < 3; ++ j){
            rotation[i][j] = rotation2[i][j];
          }
        }
      }else{
        error = error1;
        for (i = 0; i < 3; ++ i){
          for (j = 0; j < 3; ++ j){
            rotation[i][j] = rotation1[i][j];
          }
        }
      }
    }

    if ( (error1.euclidean < 0.0) && (error2.euclidean >= 0.0) ){
      error = error2;
      for (i = 0; i < 3; ++ i){
        for (j = 0; j < 3; ++ j){
          rotation[i][j] = rotation2[i][j];
        }
      }
    }
    
    if ( (error2.euclidean < 0.0) && (error1.euclidean >= 0.0) ){
      error = error1;
      for (i = 0; i < 3; ++ i){
        for (j = 0; j < 3; ++ j){
          rotation[i][j] = rotation1[i][j];
        }
      }
    }

    for (i = 0; i < np; ++ i){
      factor = 0.0;
      for (j = 0; j < 3; ++ j){
        factor += this.objectVectors[i][j] * rotation[2][j] / translation[2];
      }
      sopImagePoints[i].x = (1.0 + factor) * imagePoints[i].x;
      sopImagePoints[i].y = (1.0 + factor) * imagePoints[i].y;
    }

    oldImageDifference = imageDifference;
    imageDifference = 0.0;
    
    for (i = 0; i < np; ++ i){
      imageDifference += Math.abs(sopImagePoints[i].x - oldSopImagePoints[i].x);
      imageDifference += Math.abs(sopImagePoints[i].y - oldSopImagePoints[i].y);
    }

    delta = Math.abs(imageDifference - oldImageDifference);

    converged = (0.0 === error.pixels) || (delta < 0.01);
  }
  
  return error;
};

POS.Posit.prototype.error = function(imagePoints, rotation, translation){
  var np = this.objectPoints.length,
      move = [], projection = [], errorvec = [],
      euclidean = 0.0, pixels = 0.0, maximum = 0.0,
      i, j, k;

  if ( !this.isValid(rotation, translation) ){
    return {euclidean: -1.0, pixels: -1, maximum: -1.0};
  }
  
  for (i = 0; i < np; ++ i){
    move[i] = [];
    for (j = 0; j < 3; ++ j){
      move[i][j] = translation[j];
    }
  }
  
  for (i = 0; i < np; ++ i){
    for (j = 0; j < 3; ++ j){
      for (k = 0; k < 3; ++ k){
        move[i][j] += rotation[j][k] * this.objectPoints[i][k];
      }
    }
  }

  for (i = 0; i < np; ++ i){
    projection[i] = [];
    for (j = 0; j < 2; ++ j){
      projection[i][j] = this.focalLength * move[i][j] / move[i][2];
    }
  }
  
  for (i = 0; i < np; ++ i){
    errorvec[i] = [projection[i][0] - imagePoints[i].x,
                   projection[i][1] - imagePoints[i].y];
  }

  for (i = 0; i < np; ++ i){
    euclidean += Math.sqrt(errorvec[i][0] * errorvec[i][0] +
                           errorvec[i][1] * errorvec[i][1]);
                       
    pixels += Math.abs( Math.round(projection[i][0]) - Math.round(imagePoints[i].x) ) +
              Math.abs( Math.round(projection[i][1]) - Math.round(imagePoints[i].y) );
              
    if (Math.abs(errorvec[i][0]) > maximum){
      maximum = Math.abs(errorvec[i][0]);
    }
    if (Math.abs(errorvec[i][1]) > maximum){
      maximum = Math.abs(errorvec[i][1]);
    }
  }

  return {euclidean: euclidean / np, pixels: pixels, maximum: maximum};
};

POS.pseudoInverse = function(a, n, b){
  var w = [], v = [[],[],[]], s = [[],[],[]],
      wmax = 0.0, cn = 0,
      i, j, k;

  SVD.svdcmp(a, n, 3, w, v);

  for (i = 0; i < 3; ++ i){
    if (w[i] > wmax){
      wmax = w[i];
    }
  }

  wmax *= 0.01;

  for (i = 0; i < 3; ++ i){
    if (w[i] < wmax){
      w[i] = 0.0;
    }
  }

  for (j = 0; j < 3; ++ j){
    if (0.0 === w[j]){
      ++ cn;
      for (k = j; k < 2; ++ k){
        for (i = 0; i < n; ++ i){
          a[i][k] = a[i][k + 1];
        }
        for (i = 0; i < 3; ++ i){
          v[i][k] = v[i][k + 1];
        }
      }
    }
  }

  for (j = 0; j < 2; ++ j){
    if (0.0 === w[j]){
      w[j] = w[j + 1];
    }
  }

  for (i = 0; i < 3; ++ i){
    for (j = 0; j < 3 - cn; ++ j){
      s[i][j] = v[i][j] / w[j];
    }
  }
  
  for (i = 0; i < 3; ++ i){
    for (j = 0; j < n; ++ j){
      b[i][j] = 0.0;
      for (k = 0; k < 3 - cn; ++ k){
        b[i][j] += s[i][k] * a[j][k];
      }
    }
  }
};

POS.Pose = function(error1, rotation1, translation1, error2, rotation2, translation2){
  this.bestError = error1;
  this.bestRotation = rotation1;
  this.bestTranslation = translation1;
  this.alternativeError = error2;
  this.alternativeRotation = rotation2;
  this.alternativeTranslation = translation2;
};

/*
 *  Sugar Library v1.3.7
 *
 *  Freely distributable and licensed under the MIT-style license.
 *  Copyright (c) 2012 Andrew Plummer
 *  http://sugarjs.com/
 *
 * ---------------------------- */
(function(){var k=true,l=null,n=false;function aa(a){return function(){return a}}var p=Object,q=Array,r=RegExp,s=Date,t=String,u=Number,v=Math,ba=typeof global!=="undefined"?global:this,ca=p.defineProperty&&p.defineProperties,x="Array,Boolean,Date,Function,Number,String,RegExp".split(","),da=y(x[0]),ea=y(x[1]),fa=y(x[2]),A=y(x[3]),B=y(x[4]),C=y(x[5]),D=y(x[6]);function y(a){return function(b){return p.prototype.toString.call(b)==="[object "+a+"]"}}
function ga(a){if(!a.SugarMethods){ha(a,"SugarMethods",{});E(a,n,n,{restore:function(){var b=arguments.length===0,c=F(arguments);G(a.SugarMethods,function(d,e){if(b||c.indexOf(d)>-1)ha(e.wa?a.prototype:a,d,e.method)})},extend:function(b,c,d){E(a,d!==n,c,b)}})}}function E(a,b,c,d){var e=b?a.prototype:a,f;ga(a);G(d,function(h,i){f=e[h];if(typeof c==="function")i=ia(e[h],i,c);if(c!==n||!e[h])ha(e,h,i);a.SugarMethods[h]={wa:b,method:i,Da:f}})}
function H(a,b,c,d,e){var f={};d=C(d)?d.split(","):d;d.forEach(function(h,i){e(f,h,i)});E(a,b,c,f)}function ia(a,b,c){return function(){return a&&(c===k||!c.apply(this,arguments))?a.apply(this,arguments):b.apply(this,arguments)}}function ha(a,b,c){if(ca)p.defineProperty(a,b,{value:c,configurable:k,enumerable:n,writable:k});else a[b]=c}function F(a,b){var c=[],d;for(d=0;d<a.length;d++){c.push(a[d]);b&&b.call(a,a[d],d)}return c}
function ja(a,b,c){F(q.prototype.concat.apply([],q.prototype.slice.call(a,c||0)),b)}function ka(a){if(!a||!a.call)throw new TypeError("Callback is not callable");}function I(a){return a!==void 0}function K(a){return a===void 0}function la(a){return a&&typeof a==="object"}function ma(a){return!!a&&p.prototype.toString.call(a)==="[object Object]"&&"hasOwnProperty"in a}function L(a,b){return p.hasOwnProperty.call(a,b)}function G(a,b){for(var c in a)if(L(a,c))if(b.call(a,c,a[c],a)===n)break}
function na(a,b){G(b,function(c){a[c]=b[c]});return a}function oa(a){na(this,a)}oa.prototype.constructor=p;function pa(a,b,c,d){var e=[];a=parseInt(a);for(var f=d<0;!f&&a<=b||f&&a>=b;){e.push(a);c&&c.call(this,a);a+=d||1}return e}function N(a,b,c){c=v[c||"round"];var d=v.pow(10,v.abs(b||0));if(b<0)d=1/d;return c(a*d)/d}function qa(a,b){return N(a,b,"floor")}function O(a,b,c,d){d=v.abs(a).toString(d||10);d=ra(b-d.replace(/\.\d+/,"").length,"0")+d;if(c||a<0)d=(a<0?"-":"+")+d;return d}
function sa(a){if(a>=11&&a<=13)return"th";else switch(a%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function ta(){return"\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u2028\u2029\u3000\ufeff"}function ra(a,b){return q(v.max(0,I(a)?a:1)+1).join(b||"")}function ua(a,b){var c=a.toString().match(/[^/]*$/)[0];if(b)c=(c+b).split("").sort().join("").replace(/([gimy])\1+/g,"$1");return c}
function P(a){C(a)||(a=t(a));return a.replace(/([\\/'*+?|()\[\]{}.^$])/g,"\\$1")}function va(a,b){var c=typeof a,d,e,f,h,i,j;if(c==="string")return a;f=p.prototype.toString.call(a);d=ma(a);e=f==="[object Array]";if(a!=l&&d||e){b||(b=[]);if(b.length>1)for(j=b.length;j--;)if(b[j]===a)return"CYC";b.push(a);d=t(a.constructor);h=e?a:p.keys(a).sort();for(j=0;j<h.length;j++){i=e?j:h[j];d+=i+va(a[i],b)}b.pop()}else d=1/a===-Infinity?"-0":t(a&&a.valueOf?a.valueOf():a);return c+f+d}
function wa(a){var b=p.prototype.toString.call(a);return b==="[object Date]"||b==="[object Array]"||b==="[object String]"||b==="[object Number]"||b==="[object RegExp]"||b==="[object Boolean]"||b==="[object Arguments]"||ma(a)}function xa(a,b,c){var d=[],e=a.length,f=b[b.length-1]!==n,h;F(b,function(i){if(ea(i))return n;if(f){i%=e;if(i<0)i=e+i}h=c?a.charAt(i)||"":a[i];d.push(h)});return d.length<2?d[0]:d}
function ya(a,b){H(b,k,n,a,function(c,d){c[d+(d==="equal"?"s":"")]=function(){return p[d].apply(l,[this].concat(F(arguments)))}})}ga(p);G(x,function(a,b){ga(ba[b])});
E(p,n,n,{keys:function(a){var b=[];if(!la(a)&&!D(a)&&!A(a))throw new TypeError("Object required");G(a,function(c){b.push(c)});return b}});
function za(a,b,c,d){var e=a.length,f=d==-1,h=f?e-1:0;c=isNaN(c)?h:parseInt(c>>0);if(c<0)c=e+c;if(!f&&c<0||f&&c>=e)c=h;for(;f&&c>=0||!f&&c<e;){if(a[c]===b)return c;c+=d}return-1}function Aa(a,b,c,d){var e=a.length,f=0,h=I(c);ka(b);if(e==0&&!h)throw new TypeError("Reduce called on empty array with no initial value");else if(h)c=c;else{c=a[d?e-1:f];f++}for(;f<e;){h=d?e-f-1:f;if(h in a)c=b(c,a[h],h,a);f++}return c}
function Ba(a){if(a.length===0)throw new TypeError("First argument must be defined");}E(q,n,n,{isArray:function(a){return da(a)}});
E(q,k,n,{every:function(a,b){var c=this.length,d=0;for(Ba(arguments);d<c;){if(d in this&&!a.call(b,this[d],d,this))return n;d++}return k},some:function(a,b){var c=this.length,d=0;for(Ba(arguments);d<c;){if(d in this&&a.call(b,this[d],d,this))return k;d++}return n},map:function(a,b){var c=this.length,d=0,e=Array(c);for(Ba(arguments);d<c;){if(d in this)e[d]=a.call(b,this[d],d,this);d++}return e},filter:function(a,b){var c=this.length,d=0,e=[];for(Ba(arguments);d<c;){d in this&&a.call(b,this[d],d,this)&&
e.push(this[d]);d++}return e},indexOf:function(a,b){if(C(this))return this.indexOf(a,b);return za(this,a,b,1)},lastIndexOf:function(a,b){if(C(this))return this.lastIndexOf(a,b);return za(this,a,b,-1)},forEach:function(a,b){var c=this.length,d=0;for(ka(a);d<c;){d in this&&a.call(b,this[d],d,this);d++}},reduce:function(a,b){return Aa(this,a,b)},reduceRight:function(a,b){return Aa(this,a,b,k)}});
E(Function,k,n,{bind:function(a){var b=this,c=F(arguments).slice(1),d;if(!A(this))throw new TypeError("Function.prototype.bind called on a non-function");d=function(){return b.apply(b.prototype&&this instanceof b?this:a,c.concat(F(arguments)))};d.prototype=this.prototype;return d}});E(s,n,n,{now:function(){return(new s).getTime()}});
(function(){var a=ta().match(/^\s+$/);try{t.prototype.trim.call([1])}catch(b){a=n}E(t,k,!a,{trim:function(){return this.toString().trimLeft().trimRight()},trimLeft:function(){return this.replace(r("^["+ta()+"]+"),"")},trimRight:function(){return this.replace(r("["+ta()+"]+$"),"")}})})();
(function(){var a=new s(s.UTC(1999,11,31));a=a.toISOString&&a.toISOString()==="1999-12-31T00:00:00.000Z";H(s,k,!a,"toISOString,toJSON",function(b,c){b[c]=function(){return O(this.getUTCFullYear(),4)+"-"+O(this.getUTCMonth()+1,2)+"-"+O(this.getUTCDate(),2)+"T"+O(this.getUTCHours(),2)+":"+O(this.getUTCMinutes(),2)+":"+O(this.getUTCSeconds(),2)+"."+O(this.getUTCMilliseconds(),3)+"Z"}})})();
function Ca(a,b,c,d){var e=k;if(a===b)return k;else if(D(b)&&C(a))return r(b).test(a);else if(A(b))return b.apply(c,d);else if(ma(b)&&la(a)){G(b,function(f){Ca(a[f],b[f],c,[a[f],a])||(e=n)});return e}else return wa(a)&&wa(b)?va(a)===va(b):a===b}function R(a,b,c,d){return K(b)?a:A(b)?b.apply(c,d||[]):A(a[b])?a[b].call(a):a[b]}
function S(a,b,c,d){var e,f;if(c<0)c=a.length+c;f=isNaN(c)?0:c;for(c=d===k?a.length+f:a.length;f<c;){e=f%a.length;if(e in a){if(b.call(a,a[e],e,a)===n)break}else return Ea(a,b,f,d);f++}}function Ea(a,b,c){var d=[],e;for(e in a)e in a&&e>>>0==e&&e!=4294967295&&e>=c&&d.push(parseInt(e));d.sort().each(function(f){return b.call(a,a[f],f,a)});return a}function Fa(a,b,c,d,e){var f,h;S(a,function(i,j,g){if(Ca(i,b,g,[i,j,g])){f=i;h=j;return n}},c,d);return e?h:f}
function Ga(a,b){var c=[],d={},e;S(a,function(f,h){e=b?R(f,b,a,[f,h,a]):f;Ha(d,e)||c.push(f)});return c}function Ia(a,b,c){var d=[],e={};b.each(function(f){Ha(e,f)});a.each(function(f){var h=va(f),i=!wa(f);if(Ja(e,h,f,i)!=c){var j=0;if(i)for(h=e[h];j<h.length;)if(h[j]===f)h.splice(j,1);else j+=1;else delete e[h];d.push(f)}});return d}function Ka(a,b,c){b=b||Infinity;c=c||0;var d=[];S(a,function(e){if(da(e)&&c<b)d=d.concat(Ka(e,b,c+1));else d.push(e)});return d}
function La(a){var b=[];F(a,function(c){b=b.concat(c)});return b}function Ja(a,b,c,d){var e=b in a;if(d){a[b]||(a[b]=[]);e=a[b].indexOf(c)!==-1}return e}function Ha(a,b){var c=va(b),d=!wa(b),e=Ja(a,c,b,d);if(d)a[c].push(b);else a[c]=b;return e}
function Ma(a,b,c,d){var e,f=[],h=c==="max",i=c==="min",j=Array.isArray(a);G(a,function(g){var m=a[g];g=R(m,b,a,j?[m,parseInt(g),a]:[]);if(K(g))throw new TypeError("Cannot compare with undefined");if(g===e)f.push(m);else if(K(e)||h&&g>e||i&&g<e){f=[m];e=g}});j||(f=Ka(f,1));return d?f:f[0]}function Na(a){if(q[Oa])a=a.toLowerCase();return a.replace(q[Pa],"")}function Qa(a,b){var c=a.charAt(b);return(q[Ra]||{})[c]||c}function Sa(a){var b=q[Ta];return a?b.indexOf(a):l}
var Ta="AlphanumericSortOrder",Pa="AlphanumericSortIgnore",Oa="AlphanumericSortIgnoreCase",Ra="AlphanumericSortEquivalents";E(q,n,n,{create:function(){var a=[],b;F(arguments,function(c){if(la(c))try{b=q.prototype.slice.call(c,0);if(b.length>0)c=b}catch(d){}a=a.concat(c)});return a}});
E(q,k,n,{find:function(a,b,c){return Fa(this,a,b,c)},findAll:function(a,b,c){var d=[];S(this,function(e,f,h){Ca(e,a,h,[e,f,h])&&d.push(e)},b,c);return d},findIndex:function(a,b,c){a=Fa(this,a,b,c,k);return K(a)?-1:a},count:function(a){if(K(a))return this.length;return this.findAll(a).length},removeAt:function(a,b){if(K(a))return this;if(K(b))b=a;for(var c=0;c<=b-a;c++)this.splice(a,1);return this},include:function(a,b){return this.clone().add(a,b)},exclude:function(){return q.prototype.remove.apply(this.clone(),
arguments)},clone:function(){return na([],this)},unique:function(a){return Ga(this,a)},flatten:function(a){return Ka(this,a)},union:function(){return Ga(this.concat(La(arguments)))},intersect:function(){return Ia(this,La(arguments),n)},subtract:function(){return Ia(this,La(arguments),k)},at:function(){return xa(this,arguments)},first:function(a){if(K(a))return this[0];if(a<0)a=0;return this.slice(0,a)},last:function(a){if(K(a))return this[this.length-1];return this.slice(this.length-a<0?0:this.length-
a)},from:function(a){return this.slice(a)},to:function(a){if(K(a))a=this.length;return this.slice(0,a)},min:function(a,b){return Ma(this,a,"min",b)},max:function(a,b){return Ma(this,a,"max",b)},least:function(a,b){return Ma(this.groupBy.apply(this,[a]),"length","min",b)},most:function(a,b){return Ma(this.groupBy.apply(this,[a]),"length","max",b)},sum:function(a){a=a?this.map(a):this;return a.length>0?a.reduce(function(b,c){return b+c}):0},average:function(a){a=a?this.map(a):this;return a.length>0?
a.sum()/a.length:0},inGroups:function(a,b){var c=arguments.length>1,d=this,e=[],f=N(this.length/a,void 0,"ceil");pa(0,a-1,function(h){h=h*f;var i=d.slice(h,h+f);c&&i.length<f&&pa(1,f-i.length,function(){i=i.add(b)});e.push(i)});return e},inGroupsOf:function(a,b){var c=[],d=this.length,e=this,f;if(d===0||a===0)return e;if(K(a))a=1;if(K(b))b=l;pa(0,N(d/a,void 0,"ceil")-1,function(h){for(f=e.slice(a*h,a*h+a);f.length<a;)f.push(b);c.push(f)});return c},isEmpty:function(){return this.compact().length==
0},sortBy:function(a,b){var c=this.clone();c.sort(function(d,e){var f,h;f=R(d,a,c,[d]);h=R(e,a,c,[e]);if(C(f)&&C(h)){f=f;h=h;var i,j,g,m,o=0,w=0;f=Na(f);h=Na(h);do{g=Qa(f,o);m=Qa(h,o);i=Sa(g);j=Sa(m);if(i===-1||j===-1){i=f.charCodeAt(o)||l;j=h.charCodeAt(o)||l}g=g!==f.charAt(o);m=m!==h.charAt(o);if(g!==m&&w===0)w=g-m;o+=1}while(i!=l&&j!=l&&i===j);f=i===j?w:i<j?-1:1}else f=f<h?-1:f>h?1:0;return f*(b?-1:1)});return c},randomize:function(){for(var a=this.concat(),b,c,d=a.length;d;b=parseInt(v.random()*
d),c=a[--d],a[d]=a[b],a[b]=c);return a},zip:function(){var a=F(arguments);return this.map(function(b,c){return[b].concat(a.map(function(d){return c in d?d[c]:l}))})},sample:function(a){var b=this.randomize();return arguments.length>0?b.slice(0,a):b[0]},each:function(a,b,c){S(this,a,b,c);return this},add:function(a,b){if(!B(u(b))||isNaN(b))b=this.length;q.prototype.splice.apply(this,[b,0].concat(a));return this},remove:function(){var a,b=this;F(arguments,function(c){for(a=0;a<b.length;)if(Ca(b[a],
c,b,[b[a],a,b]))b.splice(a,1);else a++});return b},compact:function(a){var b=[];S(this,function(c){if(da(c))b.push(c.compact());else if(a&&c)b.push(c);else!a&&c!=l&&c.valueOf()===c.valueOf()&&b.push(c)});return b},groupBy:function(a,b){var c=this,d={},e;S(c,function(f,h){e=R(f,a,c,[f,h,c]);d[e]||(d[e]=[]);d[e].push(f)});b&&G(d,b);return d},none:function(){return!this.any.apply(this,arguments)}});E(q,k,n,{all:q.prototype.every,any:q.prototype.some,insert:q.prototype.add});
function Ua(a){if(a&&a.valueOf)a=a.valueOf();return p.keys(a)}function Va(a,b){H(p,n,n,a,function(c,d){c[d]=function(e,f,h){var i=Ua(e);h=q.prototype[d].call(i,function(j){return b?R(e[j],f,e,[j,e[j],e]):Ca(e[j],f,e,[j,e[j],e])},h);if(da(h))h=h.reduce(function(j,g){j[g]=e[g];return j},{});return h}});ya(a,oa)}
E(p,n,n,{map:function(a,b){return Ua(a).reduce(function(c,d){c[d]=R(a[d],b,a,[d,a[d],a]);return c},{})},reduce:function(a){var b=Ua(a).map(function(c){return a[c]});return b.reduce.apply(b,F(arguments).slice(1))},each:function(a,b){ka(b);G(a,b);return a},size:function(a){return Ua(a).length}});var Wa="any,all,none,count,find,findAll,isEmpty".split(","),Xa="sum,average,min,max,least,most".split(","),Ya="map,reduce,size".split(","),Za=Wa.concat(Xa).concat(Ya);
(function(){H(q,k,function(){var a=arguments;return a.length>0&&!A(a[0])},"map,every,all,some,any,none,filter",function(a,b){a[b]=function(c){return this[b](function(d,e){return b==="map"?R(d,c,this,[d,e,this]):Ca(d,c,this,[d,e,this])})}})})();
(function(){q[Ta]="A\u00c1\u00c0\u00c2\u00c3\u0104BC\u0106\u010c\u00c7D\u010e\u00d0E\u00c9\u00c8\u011a\u00ca\u00cb\u0118FG\u011eH\u0131I\u00cd\u00cc\u0130\u00ce\u00cfJKL\u0141MN\u0143\u0147\u00d1O\u00d3\u00d2\u00d4PQR\u0158S\u015a\u0160\u015eT\u0164U\u00da\u00d9\u016e\u00db\u00dcVWXY\u00ddZ\u0179\u017b\u017d\u00de\u00c6\u0152\u00d8\u00d5\u00c5\u00c4\u00d6".split("").map(function(b){return b+b.toLowerCase()}).join("");var a={};S("A\u00c1\u00c0\u00c2\u00c3\u00c4,C\u00c7,E\u00c9\u00c8\u00ca\u00cb,I\u00cd\u00cc\u0130\u00ce\u00cf,O\u00d3\u00d2\u00d4\u00d5\u00d6,S\u00df,U\u00da\u00d9\u00db\u00dc".split(","),
function(b){var c=b.charAt(0);S(b.slice(1).split(""),function(d){a[d]=c;a[d.toLowerCase()]=c.toLowerCase()})});q[Oa]=k;q[Ra]=a})();Va(Wa);Va(Xa,k);ya(Ya,oa);
var T,$a,ab=["ampm","hour","minute","second","ampm","utc","offset_sign","offset_hours","offset_minutes","ampm"],bb="({t})?\\s*(\\d{1,2}(?:[,.]\\d+)?)(?:{h}([0-5]\\d(?:[,.]\\d+)?)?{m}(?::?([0-5]\\d(?:[,.]\\d+)?){s})?\\s*(?:({t})|(Z)|(?:([+-])(\\d{2,2})(?::?(\\d{2,2}))?)?)?|\\s*({t}))",cb={},db,eb,fb,gb=[],hb=[{ba:"f{1,4}|ms|milliseconds",format:function(a){return V(a,"Milliseconds")}},{ba:"ss?|seconds",format:function(a){return V(a,"Seconds")}},{ba:"mm?|minutes",format:function(a){return V(a,"Minutes")}},
{ba:"hh?|hours|12hr",format:function(a){a=V(a,"Hours");return a===0?12:a-qa(a/13)*12}},{ba:"HH?|24hr",format:function(a){return V(a,"Hours")}},{ba:"dd?|date|day",format:function(a){return V(a,"Date")}},{ba:"dow|weekday",la:k,format:function(a,b,c){a=V(a,"Day");return b.weekdays[a+(c-1)*7]}},{ba:"MM?",format:function(a){return V(a,"Month")+1}},{ba:"mon|month",la:k,format:function(a,b,c){a=V(a,"Month");return b.months[a+(c-1)*12]}},{ba:"y{2,4}|year",format:function(a){return V(a,"FullYear")}},{ba:"[Tt]{1,2}",
format:function(a,b,c,d){if(b.ampm.length==0)return"";a=V(a,"Hours");b=b.ampm[qa(a/12)];if(d.length===1)b=b.slice(0,1);if(d.slice(0,1)==="T")b=b.toUpperCase();return b}},{ba:"z{1,4}|tz|timezone",text:k,format:function(a,b,c,d){a=a.getUTCOffset();if(d=="z"||d=="zz")a=a.replace(/(\d{2})(\d{2})/,function(e,f){return O(f,d.length)});return a}},{ba:"iso(tz|timezone)",format:function(a){return a.getUTCOffset(k)}},{ba:"ord",format:function(a){a=V(a,"Date");return a+sa(a)}}],ib=[{$:"year",method:"FullYear",
ja:k,da:function(a){return(365+(a?a.isLeapYear()?1:0:0.25))*24*60*60*1E3}},{$:"month",method:"Month",ja:k,da:function(a,b){var c=30.4375,d;if(a){d=a.daysInMonth();if(b<=d.days())c=d}return c*24*60*60*1E3},error:0.919},{$:"week",method:"Week",da:aa(6048E5)},{$:"day",method:"Date",ja:k,da:aa(864E5)},{$:"hour",method:"Hours",da:aa(36E5)},{$:"minute",method:"Minutes",da:aa(6E4)},{$:"second",method:"Seconds",da:aa(1E3)},{$:"millisecond",method:"Milliseconds",da:aa(1)}],jb={};
function kb(a){na(this,a);this.ga=gb.concat()}
kb.prototype={getMonth:function(a){return B(a)?a-1:this.months.indexOf(a)%12},getWeekday:function(a){return this.weekdays.indexOf(a)%7},oa:function(a){var b;return B(a)?a:a&&(b=this.numbers.indexOf(a))!==-1?(b+1)%10:1},ta:function(a){var b=this;return a.replace(r(this.num,"g"),function(c){return b.oa(c)||""})},ra:function(a){return T.units[this.units.indexOf(a)%8]},ua:function(a){return this.na(a,a[2]>0?"future":"past")},qa:function(a){return this.na(lb(a),"duration")},va:function(a){a=a||this.code;
return a==="en"||a==="en-US"?k:this.variant},ya:function(a){return a===this.ampm[0]},za:function(a){return a&&a===this.ampm[1]},na:function(a,b){var c,d,e=a[0],f=a[1],h=a[2],i=this[b]||this.relative;if(A(i))return i.call(this,e,f,h,b);d=this.units[(this.plural&&e>1?1:0)*8+f]||this.units[f];if(this.capitalizeUnit)d=mb(d);c=this.modifiers.filter(function(j){return j.name=="sign"&&j.value==(h>0?1:-1)})[0];return i.replace(/\{(.*?)\}/g,function(j,g){switch(g){case "num":return e;case "unit":return d;
case "sign":return c.src}})},sa:function(){return this.ma?[this.ma].concat(this.ga):this.ga},addFormat:function(a,b,c,d,e){var f=c||[],h=this,i;a=a.replace(/\s+/g,"[-,. ]*");a=a.replace(/\{([^,]+?)\}/g,function(j,g){var m,o,w,z=g.match(/\?$/);w=g.match(/^(\d+)\??$/);var J=g.match(/(\d)(?:-(\d))?/),M=g.replace(/[^a-z]+$/,"");if(w)m=h.tokens[w[1]];else if(h[M])m=h[M];else if(h[M+"s"]){m=h[M+"s"];if(J){o=[];m.forEach(function(Q,Da){var U=Da%(h.units?8:m.length);if(U>=J[1]&&U<=(J[2]||J[1]))o.push(Q)});
m=o}m=nb(m)}if(w)w="(?:"+m+")";else{c||f.push(M);w="("+m+")"}if(z)w+="?";return w});if(b){b=ob(bb,h,e);e=["t","[\\s\\u3000]"].concat(h.timeMarker);i=a.match(/\\d\{\d,\d\}\)+\??$/);pb(h,"(?:"+b+")[,\\s\\u3000]+?"+a,ab.concat(f),d);pb(h,a+"(?:[,\\s]*(?:"+e.join("|")+(i?"+":"*")+")"+b+")?",f.concat(ab),d)}else pb(h,a,f,d)}};function qb(a,b){var c;C(a)||(a="");c=jb[a]||jb[a.slice(0,2)];if(b===n&&!c)throw Error("Invalid locale.");return c||$a}
function rb(a,b){function c(g){var m=i[g];if(C(m))i[g]=m.split(",");else m||(i[g]=[])}function d(g,m){g=g.split("+").map(function(o){return o.replace(/(.+):(.+)$/,function(w,z,J){return J.split("|").map(function(M){return z+M}).join("|")})}).join("|");return g.split("|").forEach(m)}function e(g,m,o){var w=[];i[g].forEach(function(z,J){if(m)z+="+"+z.slice(0,3);d(z,function(M,Q){w[Q*o+J]=M.toLowerCase()})});i[g]=w}function f(g,m,o){g="\\d{"+g+","+m+"}";if(o)g+="|(?:"+nb(i.numbers)+")+";return g}function h(g,
m){i[g]=i[g]||m}var i,j;i=new kb(b);c("modifiers");"months,weekdays,units,numbers,articles,tokens,timeMarker,ampm,timeSuffixes,dateParse,timeParse".split(",").forEach(c);j=!i.monthSuffix;e("months",j,12);e("weekdays",j,7);e("units",n,8);e("numbers",n,10);h("code",a);h("date",f(1,2,i.digitDate));h("year","'\\d{2}|"+f(4,4));h("num",function(){var g=["\\d+"].concat(i.articles);if(i.numbers)g=g.concat(i.numbers);return nb(g)}());(function(){var g=[];i.ha={};i.modifiers.forEach(function(m){var o=m.name;
d(m.src,function(w){var z=i[o];i.ha[w]=m;g.push({name:o,src:w,value:m.value});i[o]=z?z+"|"+w:w})});i.day+="|"+nb(i.weekdays);i.modifiers=g})();if(i.monthSuffix){i.month=f(1,2);i.months=pa(1,12).map(function(g){return g+i.monthSuffix})}i.full_month=f(1,2)+"|"+nb(i.months);i.timeSuffixes.length>0&&i.addFormat(ob(bb,i),n,ab);i.addFormat("{day}",k);i.addFormat("{month}"+(i.monthSuffix||""));i.addFormat("{year}"+(i.yearSuffix||""));i.timeParse.forEach(function(g){i.addFormat(g,k)});i.dateParse.forEach(function(g){i.addFormat(g)});
return jb[a]=i}function pb(a,b,c,d){a.ga.unshift({Ba:d,xa:a,Aa:r("^"+b+"$","i"),to:c})}function mb(a){return a.slice(0,1).toUpperCase()+a.slice(1)}function nb(a){return a.filter(function(b){return!!b}).join("|")}function sb(a,b){var c;if(ma(a[0]))return a;else if(B(a[0])&&!B(a[1]))return[a[0]];else if(C(a[0])&&b)return[tb(a[0]),a[1]];c={};eb.forEach(function(d,e){c[d.$]=a[e]});return[c]}
function tb(a,b){var c={};if(match=a.match(/^(\d+)?\s?(\w+?)s?$/i)){if(K(b))b=parseInt(match[1])||1;c[match[2].toLowerCase()]=b}return c}function ub(a,b){var c={},d,e;b.forEach(function(f,h){d=a[h+1];if(!(K(d)||d==="")){if(f==="year")c.Ca=d.replace(/'/,"");e=parseFloat(d.replace(/'/,"").replace(/,/,"."));c[f]=!isNaN(e)?e:d.toLowerCase()}});return c}function vb(a){a=a.trim().replace(/^(just )?now|\.+$/i,"");return wb(a)}
function wb(a){return a.replace(db,function(b,c,d){var e=0,f=1,h,i;if(c)return b;d.split("").reverse().forEach(function(j){j=cb[j];var g=j>9;if(g){if(h)e+=f;f*=j/(i||1);i=j}else{if(h===n)f*=10;e+=f*j}h=g});if(h)e+=f;return e})}
function xb(a,b,c,d){var e=new s,f=n,h,i,j,g,m,o,w,z,J;e.utc(d);if(fa(a))e.utc(a.isUTC()).setTime(a.getTime());else if(B(a))e.setTime(a);else if(ma(a)){e.set(a,k);g=a}else if(C(a)){h=qb(b);a=vb(a);h&&G(h.sa(),function(M,Q){var Da=a.match(Q.Aa);if(Da){j=Q;i=j.xa;g=ub(Da,j.to,i);g.utc&&e.utc();i.ma=j;if(g.timestamp){g=g.timestamp;return n}if(j.Ba&&!C(g.month)&&(C(g.date)||h.va(b))){z=g.month;g.month=g.date;g.date=z}if(g.year&&g.Ca.length===2)g.year=N(V(new s,"FullYear")/100)*100-N(g.year/100)*100+g.year;
if(g.month){g.month=i.getMonth(g.month);if(g.shift&&!g.unit)g.unit=i.units[7]}if(g.weekday&&g.date)delete g.weekday;else if(g.weekday){g.weekday=i.getWeekday(g.weekday);if(g.shift&&!g.unit)g.unit=i.units[5]}if(g.day&&(z=i.ha[g.day])){g.day=z.value;e.reset();f=k}else if(g.day&&(o=i.getWeekday(g.day))>-1){delete g.day;if(g.num&&g.month){J=function(){var U=e.getWeekday();e.setWeekday(7*(g.num-1)+(U>o?o+7:o))};g.day=1}else g.weekday=o}if(g.date&&!B(g.date))g.date=i.ta(g.date);if(i.za(g.ampm)&&g.hour<
12)g.hour+=12;else if(i.ya(g.ampm)&&g.hour===12)g.hour=0;if("offset_hours"in g||"offset_minutes"in g){e.utc();g.offset_minutes=g.offset_minutes||0;g.offset_minutes+=g.offset_hours*60;if(g.offset_sign==="-")g.offset_minutes*=-1;g.minute-=g.offset_minutes}if(g.unit){f=k;w=i.oa(g.num);m=i.ra(g.unit);if(g.shift||g.edge){w*=(z=i.ha[g.shift])?z.value:0;if(m==="month"&&I(g.date)){e.set({day:g.date},k);delete g.date}if(m==="year"&&I(g.month)){e.set({month:g.month,day:g.date},k);delete g.month;delete g.date}}if(g.sign&&
(z=i.ha[g.sign]))w*=z.value;if(I(g.weekday)){e.set({weekday:g.weekday},k);delete g.weekday}g[m]=(g[m]||0)+w}if(g.year_sign==="-")g.year*=-1;fb.slice(1,4).forEach(function(U,$b){var Eb=g[U.$],Fb=Eb%1;if(Fb){g[fb[$b].$]=N(Fb*(U.$==="second"?1E3:60));g[U.$]=qa(Eb)}});return n}});if(j)if(f)e.advance(g);else{e._utc&&e.reset();yb(e,g,k,n,c)}else{e=a?new s(a):new s;d&&e.addMinutes(e.getTimezoneOffset())}if(g&&g.edge){z=i.ha[g.edge];G(fb.slice(4),function(M,Q){if(I(g[Q.$])){m=Q.$;return n}});if(m==="year")g.fa=
"month";else if(m==="month"||m==="week")g.fa="day";e[(z.value<0?"endOf":"beginningOf")+mb(m)]();z.value===-2&&e.reset()}J&&J();e.utc(n)}return{ea:e,set:g}}function lb(a){var b,c=v.abs(a),d=c,e=0;fb.slice(1).forEach(function(f,h){b=qa(N(c/f.da()*10)/10);if(b>=1){d=b;e=h+1}});return[d,e,a]}
function zb(a,b,c,d){var e,f=qb(d),h=r(/^[A-Z]/);if(a.isValid())if(Date[b])b=Date[b];else{if(A(b)){e=lb(a.millisecondsFromNow());b=b.apply(a,e.concat(f))}}else return"Invalid Date";if(!b&&c){e=e||lb(a.millisecondsFromNow());if(e[1]===0){e[1]=1;e[0]=1}return f.ua(e)}b=b||"long";b=f[b]||b;hb.forEach(function(i){b=b.replace(r("\\{("+i.ba+")(\\d)?\\}",i.la?"i":""),function(j,g,m){j=i.format(a,f,m||1,g);m=g.length;var o=g.match(/^(.)\1+$/);if(i.la){if(m===3)j=j.slice(0,3);if(o||g.match(h))j=mb(j)}else if(o&&
!i.text)j=(B(j)?O(j,m):j.toString()).slice(-m);return j})});return b}
function Ab(a,b,c,d){var e,f,h,i=0,j=0,g=0;e=xb(b,l,l,d);if(c>0){j=g=c;f=k}if(!e.ea.isValid())return n;if(e.set&&e.set.fa){ib.forEach(function(m){if(m.$===e.set.fa)i=m.da(e.ea,a-e.ea)-1});b=mb(e.set.fa);if(e.set.edge||e.set.shift)e.ea["beginningOf"+b]();if(e.set.fa==="month")h=e.ea.clone()["endOf"+b]().getTime();if(!f&&e.set.sign&&e.set.fa!="millisecond"){j=50;g=-50}}f=a.getTime();b=e.ea.getTime();h=h||b+i;h=Bb(a,b,h);return f>=b-j&&f<=h+g}
function Bb(a,b,c){b=new Date(b);a=(new Date(c)).utc(a.isUTC());if(V(a,"Hours")!==23){b=b.getTimezoneOffset();a=a.getTimezoneOffset();if(b!==a)c+=(a-b).minutes()}return c}
function yb(a,b,c,d,e){function f(g){return I(b[g])?b[g]:b[g+"s"]}function h(g){return I(f(g))}var i,j;if(B(b)&&d)b={milliseconds:b};else if(B(b)){a.setTime(b);return a}if(I(b.date))b.day=b.date;G(fb,function(g,m){var o=m.$==="day";if(h(m.$)||o&&h("weekday")){b.fa=m.$;j=+g;return n}else if(c&&m.$!=="week"&&(!o||!h("week")))W(a,m.method,o?1:0)});ib.forEach(function(g){var m=g.$;g=g.method;var o;o=f(m);if(!K(o)){if(d){if(m==="week"){o=(b.day||0)+o*7;g="Date"}o=o*d+V(a,g)}else m==="month"&&h("day")&&
W(a,"Date",15);W(a,g,o);if(d&&m==="month"){m=o;if(m<0)m=m%12+12;m%12!=V(a,"Month")&&W(a,"Date",0)}}});if(!d&&!h("day")&&h("weekday")){i=f("weekday");a.setWeekday(i)}(function(){var g=new s;return e===-1&&a>g||e===1&&a<g})()&&G(fb.slice(j+1),function(g,m){if((m.ja||m.$==="week"&&h("weekday"))&&!(h(m.$)||m.$==="day"&&h("weekday"))){a[m.ia](e);return n}});return a}function V(a,b){return a["get"+(a._utc?"UTC":"")+b]()}function W(a,b,c){return a["set"+(a._utc?"UTC":"")+b](c)}
function ob(a,b,c){var d={h:0,m:1,s:2},e;b=b||T;return a.replace(/{([a-z])}/g,function(f,h){var i=[],j=h==="h",g=j&&!c;if(h==="t")return b.ampm.join("|");else{j&&i.push(":");if(e=b.timeSuffixes[d[h]])i.push(e+"\\s*");return i.length===0?"":"(?:"+i.join("|")+")"+(g?"":"?")}})}function X(a,b,c){var d,e;if(B(a[1]))d=sb(a)[0];else{d=a[0];e=a[1]}return xb(d,e,b,c).ea}
s.extend({create:function(){return X(arguments)},past:function(){return X(arguments,-1)},future:function(){return X(arguments,1)},addLocale:function(a,b){return rb(a,b)},setLocale:function(a){var b=qb(a,n);$a=b;if(a&&a!=b.code)b.code=a;return b},getLocale:function(a){return!a?$a:qb(a,n)},addFormat:function(a,b,c){pb(qb(c),a,b)}},n,n);
s.extend({set:function(){var a=sb(arguments);return yb(this,a[0],a[1])},setWeekday:function(a){if(!K(a))return W(this,"Date",V(this,"Date")+a-V(this,"Day"))},setWeek:function(a){if(!K(a)){V(this,"Date");W(this,"Month",0);W(this,"Date",a*7+1);return this.getTime()}},getWeek:function(){var a=this;a=a.clone();var b=V(a,"Day")||7;a.addDays(4-b).reset();return 1+qa(a.daysSince(a.clone().beginningOfYear())/7)},getUTCOffset:function(a){var b=this._utc?0:this.getTimezoneOffset(),c=a===k?":":"";if(!b&&a)return"Z";
return O(N(-b/60),2,k)+c+O(b%60,2)},utc:function(a){ha(this,"_utc",a===k||arguments.length===0);return this},isUTC:function(){return!!this._utc||this.getTimezoneOffset()===0},advance:function(){var a=sb(arguments,k);return yb(this,a[0],a[1],1)},rewind:function(){var a=sb(arguments,k);return yb(this,a[0],a[1],-1)},isValid:function(){return!isNaN(this.getTime())},isAfter:function(a,b){return this.getTime()>s.create(a).getTime()-(b||0)},isBefore:function(a,b){return this.getTime()<s.create(a).getTime()+
(b||0)},isBetween:function(a,b,c){var d=this.getTime();a=s.create(a).getTime();var e=s.create(b).getTime();b=v.min(a,e);a=v.max(a,e);c=c||0;return b-c<d&&a+c>d},isLeapYear:function(){var a=V(this,"FullYear");return a%4===0&&a%100!==0||a%400===0},daysInMonth:function(){return 32-V(new s(V(this,"FullYear"),V(this,"Month"),32),"Date")},format:function(a,b){return zb(this,a,n,b)},relative:function(a,b){if(C(a)){b=a;a=l}return zb(this,a,k,b)},is:function(a,b,c){var d,e;if(this.isValid()){if(C(a)){a=a.trim().toLowerCase();
e=this.clone().utc(c);switch(k){case a==="future":return this.getTime()>(new s).getTime();case a==="past":return this.getTime()<(new s).getTime();case a==="weekday":return V(e,"Day")>0&&V(e,"Day")<6;case a==="weekend":return V(e,"Day")===0||V(e,"Day")===6;case (d=T.weekdays.indexOf(a)%7)>-1:return V(e,"Day")===d;case (d=T.months.indexOf(a)%12)>-1:return V(e,"Month")===d}}return Ab(this,a,b,c)}},reset:function(a){var b={},c;a=a||"hours";if(a==="date")a="days";c=ib.some(function(d){return a===d.$||
a===d.$+"s"});b[a]=a.match(/^days?/)?1:0;return c?this.set(b,k):this},clone:function(){var a=new s(this.getTime());a.utc(this.isUTC());return a}});s.extend({iso:function(){return this.toISOString()},getWeekday:s.prototype.getDay,getUTCWeekday:s.prototype.getUTCDay});
function Cb(a,b){function c(){return N(this*b)}function d(){return X(arguments)[a.ia](this)}function e(){return X(arguments)[a.ia](-this)}var f=a.$,h={};h[f]=c;h[f+"s"]=c;h[f+"Before"]=e;h[f+"sBefore"]=e;h[f+"Ago"]=e;h[f+"sAgo"]=e;h[f+"After"]=d;h[f+"sAfter"]=d;h[f+"FromNow"]=d;h[f+"sFromNow"]=d;u.extend(h)}u.extend({duration:function(a){return qb(a).qa(this)}});
T=$a=s.addLocale("en",{plural:k,timeMarker:"at",ampm:"am,pm",months:"January,February,March,April,May,June,July,August,September,October,November,December",weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",units:"millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s",numbers:"one,two,three,four,five,six,seven,eight,nine,ten",articles:"a,an,the",tokens:"the,st|nd|rd|th,of","short":"{Month} {d}, {yyyy}","long":"{Month} {d}, {yyyy} {h}:{mm}{tt}",full:"{Weekday} {Month} {d}, {yyyy} {h}:{mm}:{ss}{tt}",
past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",modifiers:[{name:"day",src:"yesterday",value:-1},{name:"day",src:"today",value:0},{name:"day",src:"tomorrow",value:1},{name:"sign",src:"ago|before",value:-1},{name:"sign",src:"from now|after|from|in|later",value:1},{name:"edge",src:"last day",value:-2},{name:"edge",src:"end",value:-1},{name:"edge",src:"first day|beginning",value:1},{name:"shift",src:"last",value:-1},{name:"shift",src:"the|this",value:0},{name:"shift",
src:"next",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{month} {year}","{shift} {unit=5-7}","{0?} {date}{1}","{0?} {edge} of {shift?} {unit=4-7?}{month?}{year?}"],timeParse:["{0} {num}{1} {day} of {month} {year?}","{weekday?} {month} {date}{1?} {year?}","{date} {month} {year}","{date} {month}","{shift} {weekday}","{shift} week {weekday}","{weekday} {2?} {shift} week","{num} {unit=4-5} {sign} {day}","{0?} {date}{1} of {month}","{0?}{month?} {date?}{1?} of {shift} {unit=6-7}"]});
fb=ib.concat().reverse();eb=ib.concat();eb.splice(2,1);
H(s,k,n,ib,function(a,b,c){function d(g){g=g/h;var m=g%1,o=b.error||0.999;if(m&&v.abs(m%1)>o)g=N(g);return parseInt(g)}var e=b.$,f=mb(e),h=b.da(),i,j;b.ia="add"+f+"s";i=function(g,m){return d(this.getTime()-s.create(g,m).getTime())};j=function(g,m){return d(s.create(g,m).getTime()-this.getTime())};a[e+"sAgo"]=j;a[e+"sUntil"]=j;a[e+"sSince"]=i;a[e+"sFromNow"]=i;a[b.ia]=function(g,m){var o={};o[e]=g;return this.advance(o,m)};Cb(b,h);c<3&&["Last","This","Next"].forEach(function(g){a["is"+g+f]=function(){return this.is(g+
" "+e)}});if(c<4){a["beginningOf"+f]=function(){var g={};switch(e){case "year":g.year=V(this,"FullYear");break;case "month":g.month=V(this,"Month");break;case "day":g.day=V(this,"Date");break;case "week":g.weekday=0}return this.set(g,k)};a["endOf"+f]=function(){var g={hours:23,minutes:59,seconds:59,milliseconds:999};switch(e){case "year":g.month=11;g.day=31;break;case "month":g.day=this.daysInMonth();break;case "week":g.weekday=6}return this.set(g,k)}}});
T.addFormat("([+-])?(\\d{4,4})[-.]?{full_month}[-.]?(\\d{1,2})?",k,["year_sign","year","month","date"],n,k);T.addFormat("(\\d{1,2})[-.\\/]{full_month}(?:[-.\\/](\\d{2,4}))?",k,["date","month","year"],k);T.addFormat("{full_month}[-.](\\d{4,4})",n,["month","year"]);T.addFormat("\\/Date\\((\\d+(?:\\+\\d{4,4})?)\\)\\/",n,["timestamp"]);T.addFormat(ob(bb,T),n,ab);gb=T.ga.slice(0,7).reverse();T.ga=T.ga.slice(7).concat(gb);H(s,k,n,"short,long,full",function(a,b){a[b]=function(c){return zb(this,b,n,c)}});
"\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07".split("").forEach(function(a,b){if(b>9)b=v.pow(10,b-9);cb[a]=b});"\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19".split("").forEach(function(a,b){cb[a]=b});db=r("([\u671f\u9031\u5468])?([\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19]+)(?!\u6628)","g");
(function(){var a="today,yesterday,tomorrow,weekday,weekend,future,past".split(","),b=T.weekdays.slice(0,7),c=T.months.slice(0,12);H(s,k,n,a.concat(b).concat(c),function(d,e){d["is"+mb(e)]=function(f){return this.is(e,0,f)}})})();(function(){s.extend({utc:{create:function(){return X(arguments,0,k)},past:function(){return X(arguments,-1,k)},future:function(){return X(arguments,1,k)}}},n,n)})();
s.extend({RFC1123:"{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {tz}",RFC1036:"{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {tz}",ISO8601_DATE:"{yyyy}-{MM}-{dd}",ISO8601_DATETIME:"{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{fff}{isotz}"},n,n);
DateRange=function(a,b){this.start=s.create(a);this.end=s.create(b)};DateRange.prototype.toString=function(){return this.isValid()?this.start.full()+".."+this.end.full():"Invalid DateRange"};
E(DateRange,k,n,{isValid:function(){return this.start<this.end},duration:function(){return this.isValid()?this.end.getTime()-this.start.getTime():NaN},contains:function(a){var b=this;return(a.start&&a.end?[a.start,a.end]:[a]).every(function(c){return c>=b.start&&c<=b.end})},every:function(a,b){var c=this.start.clone(),d=[],e=0,f,h;if(C(a)){c.advance(tb(a,0),k);f=tb(a);h=a.toLowerCase()==="day"}else f={milliseconds:a};for(;c<=this.end;){d.push(c);b&&b(c,e);if(h&&V(c,"Hours")===23){c=c.clone();W(c,
"Hours",48)}else c=c.clone().advance(f,k);e++}return d},union:function(a){return new DateRange(this.start<a.start?this.start:a.start,this.end>a.end?this.end:a.end)},intersect:function(a){return new DateRange(this.start>a.start?this.start:a.start,this.end<a.end?this.end:a.end)},clone:function(){return new DateRange(this.start,this.end)}});H(DateRange,k,n,"Millisecond,Second,Minute,Hour,Day,Week,Month,Year",function(a,b){a["each"+b]=function(c){return this.every(b,c)}});
E(s,n,n,{range:function(a,b){return new DateRange(a,b)}});
function Db(a,b,c,d,e){var f;if(!a.timers)a.timers=[];B(b)||(b=0);a.timers.push(setTimeout(function(){a.timers.splice(f,1);c.apply(d,e||[])},b));f=a.timers.length}
E(Function,k,n,{lazy:function(a,b){function c(){if(!(f&&e.length>b-2)){e.push([this,arguments]);h()}}var d=this,e=[],f=n,h,i,j;a=a||1;b=b||Infinity;i=N(a,void 0,"ceil");j=N(i/a);h=function(){if(!(f||e.length==0)){for(var g=v.max(e.length-j,0);e.length>g;)Function.prototype.apply.apply(d,e.shift());Db(c,i,function(){f=n;h()});f=k}};return c},delay:function(a){var b=F(arguments).slice(1);Db(this,a,this,this,b);return this},throttle:function(a){return this.lazy(a,1)},debounce:function(a){function b(){b.cancel();
Db(b,a,c,this,arguments)}var c=this;return b},cancel:function(){if(da(this.timers))for(;this.timers.length>0;)clearTimeout(this.timers.shift());return this},after:function(a){var b=this,c=0,d=[];if(B(a)){if(a===0){b.call();return b}}else a=1;return function(){var e;d.push(F(arguments));c++;if(c==a){e=b.call(this,d);c=0;d=[];return e}}},once:function(){var a=this;return function(){return L(a,"memo")?a.memo:a.memo=a.apply(this,arguments)}},fill:function(){var a=this,b=F(arguments);return function(){var c=
F(arguments);b.forEach(function(d,e){if(d!=l||e>=c.length)c.splice(e,0,d)});return a.apply(this,c)}}});
function Gb(a,b,c,d,e,f){var h=a.toFixed(20),i=h.search(/\./);h=h.search(/[1-9]/);i=i-h;if(i>0)i-=1;e=v.max(v.min((i/3).floor(),e===n?c.length:e),-d);d=c.charAt(e+d-1);if(i<-9){e=-3;b=i.abs()-9;d=c.slice(0,1)}return(a/(f?(2).pow(10*e):(10).pow(e*3))).round(b||0).format()+d.trim()}
E(u,n,n,{random:function(a,b){var c,d;if(arguments.length==1){b=a;a=0}c=v.min(a||0,K(b)?1:b);d=v.max(a||0,K(b)?1:b)+1;return qa(v.random()*(d-c)+c)}});
E(u,k,n,{log:function(a){return v.log(this)/(a?v.log(a):1)},abbr:function(a){return Gb(this,a,"kmbt",0,4)},metric:function(a,b){return Gb(this,a,"n\u03bcm kMGTPE",4,K(b)?1:b)},bytes:function(a,b){return Gb(this,a,"kMGTPE",0,K(b)?4:b,k)+"B"},isInteger:function(){return this%1==0},isOdd:function(){return!isNaN(this)&&!this.isMultipleOf(2)},isEven:function(){return this.isMultipleOf(2)},isMultipleOf:function(a){return this%a===0},format:function(a,b,c){var d,e,f,h="";if(K(b))b=",";if(K(c))c=".";d=(B(a)?
N(this,a||0).toFixed(v.max(a,0)):this.toString()).replace(/^-/,"").split(".");e=d[0];f=d[1];for(d=e.length;d>0;d-=3){if(d<e.length)h=b+h;h=e.slice(v.max(0,d-3),d)+h}if(f)h+=c+ra((a||0)-f.length,"0")+f;return(this<0?"-":"")+h},hex:function(a){return this.pad(a||1,n,16)},upto:function(a,b,c){return pa(this,a,b,c||1)},downto:function(a,b,c){return pa(this,a,b,-(c||1))},times:function(a){if(a)for(var b=0;b<this;b++)a.call(this,b);return this.toNumber()},chr:function(){return t.fromCharCode(this)},pad:function(a,
b,c){return O(this,a,b,c)},ordinalize:function(){var a=this.abs();a=parseInt(a.toString().slice(-2));return this+sa(a)},toNumber:function(){return parseFloat(this,10)}});H(u,k,n,"round,floor,ceil",function(a,b){a[b]=function(c){return N(this,c,b)}});H(u,k,n,"abs,pow,sin,asin,cos,acos,tan,atan,exp,pow,sqrt",function(a,b){a[b]=function(c,d){return v[b](this,c,d)}});
var Hb="isObject,isNaN".split(","),Ib="keys,values,select,reject,each,merge,clone,equal,watch,tap,has".split(",");
function Jb(a,b,c,d){var e=/^(.+?)(\[.*\])$/,f,h,i;if(d!==n&&(h=b.match(e))){i=h[1];b=h[2].replace(/^\[|\]$/g,"").split("][");b.forEach(function(j){f=!j||j.match(/^\d+$/);if(!i&&da(a))i=a.length;L(a,i)||(a[i]=f?[]:{});a=a[i];i=j});if(!i&&f)i=a.length.toString();Jb(a,i,c)}else a[b]=c.match(/^[+-]?\d+(\.\d+)?$/)?parseFloat(c):c==="true"?k:c==="false"?n:c}function Kb(a,b,c){var d={},e;G(a,function(f,h){e=n;ja(b,function(i){if(D(i)?i.test(f):la(i)?L(i,f):f===t(i))e=k},1);if(e===c)d[f]=h});return d}
E(p,n,k,{watch:function(a,b,c){if(ca){var d=a[b];p.defineProperty(a,b,{enumerable:k,configurable:k,get:function(){return d},set:function(e){d=c.call(a,b,d,e)}})}}});E(p,n,function(a,b){return A(b)},{keys:function(a,b){var c=p.keys(a);c.forEach(function(d){b.call(a,d,a[d])});return c}});
E(p,n,n,{isObject:function(a){return ma(a)},isNaN:function(a){return B(a)&&a.valueOf()!==a.valueOf()},equal:function(a,b){return wa(a)&&wa(b)?va(a)===va(b):a===b},extended:function(a){return new oa(a)},merge:function(a,b,c,d){var e,f;if(a&&typeof b!="string")for(e in b)if(L(b,e)&&a){f=b[e];if(I(a[e])){if(d===n)continue;if(A(d))f=d.call(b,e,a[e],b[e])}if(c===k&&f&&la(f))if(fa(f))f=new s(f.getTime());else if(D(f))f=new r(f.source,ua(f));else{a[e]||(a[e]=q.isArray(f)?[]:{});p.merge(a[e],b[e],c,d);continue}a[e]=
f}return a},values:function(a,b){var c=[];G(a,function(d,e){c.push(e);b&&b.call(a,e)});return c},clone:function(a,b){var c;if(!la(a))return a;c=a instanceof oa?new oa:new a.constructor;return p.merge(c,a,b)},fromQueryString:function(a,b){var c=p.extended();a=a&&a.toString?a.toString():"";a.replace(/^.*?\?/,"").split("&").forEach(function(d){d=d.split("=");d.length===2&&Jb(c,d[0],decodeURIComponent(d[1]),b)});return c},tap:function(a,b){var c=b;A(b)||(c=function(){b&&a[b]()});c.call(a,a);return a},
has:function(a,b){return L(a,b)},select:function(a){return Kb(a,arguments,k)},reject:function(a){return Kb(a,arguments,n)}});H(p,n,n,x,function(a,b){var c="is"+b;Hb.push(c);a[c]=function(d){return p.prototype.toString.call(d)==="[object "+b+"]"}});(function(){E(p,n,function(){return arguments.length===0},{extend:function(){var a=Hb.concat(Ib);if(typeof Za!=="undefined")a=a.concat(Za);ya(a,p)}})})();ya(Ib,oa);
E(r,n,n,{escape:function(a){return P(a)}});
E(r,k,n,{getFlags:function(){return ua(this)},setFlags:function(a){return r(this.source,a)},addFlag:function(a){return this.setFlags(ua(this,a))},removeFlag:function(a){return this.setFlags(ua(this).replace(a,""))}});
var Lb,Mb;
E(t,k,function(a){return D(a)||arguments.length>2},{startsWith:function(a,b,c){var d=this;if(b)d=d.slice(b);if(K(c))c=k;a=D(a)?a.source.replace("^",""):P(a);return r("^"+a,c?"":"i").test(d)},endsWith:function(a,b,c){var d=this;if(I(b))d=d.slice(0,b);if(K(c))c=k;a=D(a)?a.source.replace("$",""):P(a);return r(a+"$",c?"":"i").test(d)}});
E(t,k,n,{escapeRegExp:function(){return P(this)},escapeURL:function(a){return a?encodeURIComponent(this):encodeURI(this)},unescapeURL:function(a){return a?decodeURI(this):decodeURIComponent(this)},escapeHTML:function(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2f;")},unescapeHTML:function(){return this.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,
"'").replace(/&#x2f;/g,"/")},encodeBase64:function(){return Lb(this)},decodeBase64:function(){return Mb(this)},each:function(a,b){var c,d;if(A(a)){b=a;a=/[\s\S]/g}else if(a)if(C(a))a=r(P(a),"gi");else{if(D(a))a=r(a.source,ua(a,"g"))}else a=/[\s\S]/g;c=this.match(a)||[];if(b)for(d=0;d<c.length;d++)c[d]=b.call(this,c[d],d,c)||c[d];return c},shift:function(a){var b="";a=a||0;this.codes(function(c){b+=t.fromCharCode(c+a)});return b},codes:function(a){for(var b=[],c=0;c<this.length;c++){var d=this.charCodeAt(c);
b.push(d);a&&a.call(this,d,c)}return b},chars:function(a){return this.each(a)},words:function(a){return this.trim().each(/\S+/g,a)},lines:function(a){return this.trim().each(/^.*$/gm,a)},paragraphs:function(a){var b=this.trim().split(/[\r\n]{2,}/);return b=b.map(function(c){if(a)var d=a.call(c);return d?d:c})},isBlank:function(){return this.trim().length===0},has:function(a){return this.search(D(a)?a:P(a))!==-1},add:function(a,b){b=K(b)?this.length:b;return this.slice(0,b)+a+this.slice(b)},remove:function(a){return this.replace(a,
"")},reverse:function(){return this.split("").reverse().join("")},compact:function(){return this.trim().replace(/([\r\n\s\u3000])+/g,function(a,b){return b==="\u3000"?b:" "})},at:function(){return xa(this,arguments,k)},from:function(a){return this.slice(a)},to:function(a){if(K(a))a=this.length;return this.slice(0,a)},dasherize:function(){return this.underscore().replace(/_/g,"-")},underscore:function(){return this.replace(/[-\s]+/g,"_").replace(t.Inflector&&t.Inflector.acronymRegExp,function(a,b){return(b>
0?"_":"")+a.toLowerCase()}).replace(/([A-Z\d]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").toLowerCase()},camelize:function(a){return this.underscore().replace(/(^|_)([^_]+)/g,function(b,c,d,e){b=d;b=(c=t.Inflector)&&c.acronyms[b];b=C(b)?b:void 0;e=a!==n||e>0;if(b)return e?b:b.toLowerCase();return e?d.capitalize():d})},spacify:function(){return this.underscore().replace(/_/g," ")},stripTags:function(){var a=this;ja(arguments.length>0?arguments:[""],function(b){a=a.replace(r("</?"+
P(b)+"[^<>]*>","gi"),"")});return a},removeTags:function(){var a=this;ja(arguments.length>0?arguments:["\\S+"],function(b){b=r("<("+b+")[^<>]*(?:\\/>|>.*?<\\/\\1>)","gi");a=a.replace(b,"")});return a},truncate:function(a,b,c,d){var e="",f="",h=this.toString(),i="["+ta()+"]+",j="[^"+ta()+"]*",g=r(i+j+"$");d=K(d)?"...":t(d);if(h.length<=a)return h;switch(c){case "left":a=h.length-a;e=d;h=h.slice(a);g=r("^"+j+i);break;case "middle":a=qa(a/2);f=d+h.slice(h.length-a).trimLeft();h=h.slice(0,a);break;default:a=
a;f=d;h=h.slice(0,a)}if(b===n&&this.slice(a,a+1).match(/\S/))h=h.remove(g);return e+h+f},pad:function(a,b){return ra(b,a)+this+ra(b,a)},padLeft:function(a,b){return ra(b,a)+this},padRight:function(a,b){return this+ra(b,a)},first:function(a){if(K(a))a=1;return this.substr(0,a)},last:function(a){if(K(a))a=1;return this.substr(this.length-a<0?0:this.length-a)},repeat:function(a){var b="",c=this;if(!B(a)||a<1)return"";for(;a;){if(a&1)b+=c;if(a>>=1)c+=c}return b},toNumber:function(a){var b=this.replace(/,/g,
"");return b.match(/\./)?parseFloat(b):parseInt(b,a||10)},capitalize:function(a){var b;return this.toLowerCase().replace(a?/[\s\S]/g:/^\S/,function(c){var d=c.toUpperCase(),e;e=b?c:d;b=d!==c;return e})},assign:function(){var a={};F(arguments,function(b,c){if(ma(b))na(a,b);else a[c+1]=b});return this.replace(/\{([^{]+?)\}/g,function(b,c){return L(a,c)?a[c]:b})},namespace:function(a){a=a||ba;G(this.split("."),function(b,c){return!!(a=a[c])});return a}});E(t,k,n,{insert:t.prototype.add});
(function(a){if(this.btoa){Lb=this.btoa;Mb=this.atob}else{var b=/[^A-Za-z0-9\+\/\=]/g;Lb=function(c){var d="",e,f,h,i,j,g,m=0;do{e=c.charCodeAt(m++);f=c.charCodeAt(m++);h=c.charCodeAt(m++);i=e>>2;e=(e&3)<<4|f>>4;j=(f&15)<<2|h>>6;g=h&63;if(isNaN(f))j=g=64;else if(isNaN(h))g=64;d=d+a.charAt(i)+a.charAt(e)+a.charAt(j)+a.charAt(g)}while(m<c.length);return d};Mb=function(c){var d="",e,f,h,i,j,g=0;if(c.match(b))throw Error("String contains invalid base64 characters");c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");
do{e=a.indexOf(c.charAt(g++));f=a.indexOf(c.charAt(g++));i=a.indexOf(c.charAt(g++));j=a.indexOf(c.charAt(g++));e=e<<2|f>>4;f=(f&15)<<4|i>>2;h=(i&3)<<6|j;d+=t.fromCharCode(e);if(i!=64)d+=t.fromCharCode(f);if(j!=64)d+=t.fromCharCode(h)}while(g<c.length);return d}}})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");})();
/*
Copyright (c) 2012 Juan Mellado

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
References:
- "Numerical Recipes in C - Second Edition"
  http://www.nr.com/
*/

var SVD = SVD || {};

SVD.svdcmp = function(a, m, n, w, v){
  var flag, i, its, j, jj, k, l, nm,
      anorm = 0.0, c, f, g = 0.0, h, s, scale = 0.0, x, y, z, rv1 = [];
      
  //Householder reduction to bidiagonal form
  for (i = 0; i < n; ++ i){
    l = i + 1;
    rv1[i] = scale * g;
    g = s = scale = 0.0;
    if (i < m){
      for (k = i; k < m; ++ k){
        scale += Math.abs( a[k][i] );
      }
      if (0.0 !== scale){
        for (k = i; k < m; ++ k){
          a[k][i] /= scale;
          s += a[k][i] * a[k][i];
        }
        f = a[i][i];
        g = -SVD.sign( Math.sqrt(s), f );
        h = f * g - s;
        a[i][i] = f - g;
        for (j = l; j < n; ++ j){
          for (s = 0.0, k = i; k < m; ++ k){
            s += a[k][i] * a[k][j];
          }
          f = s / h;
          for (k = i; k < m; ++ k){
            a[k][j] += f * a[k][i];
          }
        }
        for (k = i; k < m; ++ k){
          a[k][i] *= scale;
        }
      }
    }
    w[i] = scale * g;
    g = s = scale = 0.0;
    if ( (i < m) && (i !== n - 1) ){
      for (k = l; k < n; ++ k){
        scale += Math.abs( a[i][k] );
      }
      if (0.0 !== scale){
        for (k = l; k < n; ++ k){
          a[i][k] /= scale;
          s += a[i][k] * a[i][k];
        }
        f = a[i][l];
        g = -SVD.sign( Math.sqrt(s), f );
        h = f * g - s;
        a[i][l] = f - g;
        for (k = l; k < n; ++ k){
          rv1[k] = a[i][k] / h;
        }
        for (j = l; j < m; ++ j){
          for (s = 0.0, k = l; k < n; ++ k){
            s += a[j][k] * a[i][k];
          }
          for (k = l; k < n; ++ k){
            a[j][k] += s * rv1[k];
          }
        }
        for (k = l; k < n; ++ k){
          a[i][k] *= scale;
        }
      }
    }
    anorm = Math.max(anorm, ( Math.abs( w[i] ) + Math.abs( rv1[i] ) ) );
  }

  //Acumulation of right-hand transformation
  for (i = n - 1; i >= 0; -- i){
    if (i < n - 1){
      if (0.0 !== g){
        for (j = l; j < n; ++ j){
          v[j][i] = ( a[i][j] / a[i][l] ) / g;
        }
        for (j = l; j < n; ++ j){
          for (s = 0.0, k = l; k < n; ++ k){
            s += a[i][k] * v[k][j];
          }
          for (k = l; k < n; ++ k){
            v[k][j] += s * v[k][i];
          }
        }
      }
      for (j = l; j < n; ++ j){
        v[i][j] = v[j][i] = 0.0;
      }
    }
    v[i][i] = 1.0;
    g = rv1[i];
    l = i;
  }

  //Acumulation of left-hand transformation
  for (i = Math.min(n, m) - 1; i >= 0; -- i){
    l = i + 1;
    g = w[i];
    for (j = l; j < n; ++ j){
      a[i][j] = 0.0;
    }
    if (0.0 !== g){
      g = 1.0 / g;
      for (j = l; j < n; ++ j){
        for (s = 0.0, k = l; k < m; ++ k){
          s += a[k][i] * a[k][j];
        }
        f = (s / a[i][i]) * g;
        for (k = i; k < m; ++ k){
          a[k][j] += f * a[k][i];
        }
      }
      for (j = i; j < m; ++ j){
        a[j][i] *= g;
      }
    }else{
        for (j = i; j < m; ++ j){
          a[j][i] = 0.0;
        }
    }
    ++ a[i][i];
  }

  //Diagonalization of the bidiagonal form
  for (k = n - 1; k >= 0; -- k){
    for (its = 1; its <= 30; ++ its){
      flag = true;
      for (l = k; l >= 0; -- l){
        nm = l - 1;
        if ( Math.abs( rv1[l] ) + anorm === anorm ){
          flag = false;
          break;
        }
        if ( Math.abs( w[nm] ) + anorm === anorm ){
          break;
        }
      }
      if (flag){
        c = 0.0;
        s = 1.0;
        for (i = l; i <= k; ++ i){
          f = s * rv1[i];
          if ( Math.abs(f) + anorm === anorm ){
            break;
          }
          g = w[i];
          h = SVD.pythag(f, g);
          w[i] = h;
          h = 1.0 / h;
          c = g * h;
          s = -f * h;
          for (j = 1; j <= m; ++ j){
            y = a[j][nm];
            z = a[j][i];
            a[j][nm] = y * c + z * s;
            a[j][i] = z * c - y * s;
          }
        }
      }

      //Convergence
      z = w[k];
      if (l === k){
        if (z < 0.0){
          w[k] = -z;
          for (j = 0; j < n; ++ j){
            v[j][k] = -v[j][k];
          }
        }
        break;
      }

      if (30 === its){
        return false;
      }

      //Shift from bottom 2-by-2 minor
      x = w[l];
      nm = k - 1;
      y = w[nm];
      g = rv1[nm];
      h = rv1[k];
      f = ( (y - z) * (y + z) + (g - h) * (g + h) ) / (2.0 * h * y);
      g = SVD.pythag( f, 1.0 );
      f = ( (x - z) * (x + z) + h * ( (y / (f + SVD.sign(g, f) ) ) - h) ) / x;

      //Next QR transformation
      c = s = 1.0;
      for (j = l; j <= nm; ++ j){
        i = j + 1;
        g = rv1[i];
        y = w[i];
        h = s * g;
        g = c * g;
        z = SVD.pythag(f, h);
        rv1[j] = z;
        c = f / z;
        s = h / z;
        f = x * c + g * s;
        g = g * c - x * s;
        h = y * s;
        y *= c;
        for (jj = 0; jj < n; ++ jj){
          x = v[jj][j];
          z = v[jj][i];
          v[jj][j] = x * c + z * s;
          v[jj][i] = z * c - x * s;
        }
        z = SVD.pythag(f, h);
        w[j] = z;
        if (0.0 !== z){
          z = 1.0 / z;
          c = f * z;
          s = h * z;
        }
        f = c * g + s * y;
        x = c * y - s * g;
        for (jj = 0; jj < m; ++ jj){
          y = a[jj][j];
          z = a[jj][i];
          a[jj][j] = y * c + z * s;
          a[jj][i] = z * c - y * s;
        }
      }
      rv1[l] = 0.0;
      rv1[k] = f;
      w[k] = x;
    }
  }

  return true;
};

SVD.pythag = function(a, b){
  var at = Math.abs(a), bt = Math.abs(b), ct;

  if (at > bt){
    ct = bt / at;
    return at * Math.sqrt(1.0 + ct * ct);
  }
    
  if (0.0 === bt){
    return 0.0;
  }

  ct = at / bt;
  return bt * Math.sqrt(1.0 + ct * ct);
};

SVD.sign = function(a, b){
  return b >= 0.0? Math.abs(a): -Math.abs(a);
};

// three.js - http://github.com/mrdoob/three.js
'use strict';var THREE=THREE||{REVISION:"53"};self.console=self.console||{info:function(){},log:function(){},debug:function(){},warn:function(){},error:function(){}};self.Int32Array=self.Int32Array||Array;self.Float32Array=self.Float32Array||Array;String.prototype.startsWith=String.prototype.startsWith||function(a){return this.slice(0,a.length)===a};String.prototype.endsWith=String.prototype.endsWith||function(a){var a=String(a),b=this.lastIndexOf(a);return(-1<b&&b)===this.length-a.length};
String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")};
(function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];void 0===window.requestAnimationFrame&&(window.requestAnimationFrame=function(b){var c=Date.now(),f=Math.max(0,16-(c-a)),g=window.setTimeout(function(){b(c+f)},f);a=c+f;return g});window.cancelAnimationFrame=window.cancelAnimationFrame||
function(a){window.clearTimeout(a)}})();THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;
THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=function(){};THREE.CubeReflectionMapping=function(){};THREE.CubeRefractionMapping=function(){};THREE.SphericalReflectionMapping=function(){};THREE.SphericalRefractionMapping=function(){};
THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.UnsignedShort4444Type=1016;
THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype.start=function(){this.oldTime=this.startTime=Date.now();this.running=!0};THREE.Clock.prototype.stop=function(){this.getElapsedTime();this.running=!1};THREE.Clock.prototype.getElapsedTime=function(){return this.elapsedTime+=this.getDelta()};THREE.Clock.prototype.getDelta=function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=Date.now(),a=0.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a};
THREE.Color=function(a){void 0!==a&&this.setHex(a);return this};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a){this.r=a.r*a.r;this.g=a.g*a.g;this.b=a.b*a.b;return this},copyLinearToGamma:function(a){this.r=Math.sqrt(a.r);this.g=Math.sqrt(a.g);this.b=Math.sqrt(a.b);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);
this.b=Math.sqrt(this.b);return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSV:function(a,b,c){var d,e,f;0===c?this.r=this.g=this.b=0:(d=Math.floor(6*a),e=6*a-d,a=c*(1-b),f=c*(1-b*e),b=c*(1-b*(1-e)),0===d?(this.r=c,this.g=b,this.b=a):1===d?(this.r=f,this.g=c,this.b=a):2===d?(this.r=a,this.g=c,this.b=b):3===d?(this.r=a,this.g=f,this.b=c):4===d?(this.r=b,this.g=a,this.b=c):5===d&&(this.r=c,this.g=a,this.b=f));return this},getHex:function(){return 255*this.r<<16^255*this.g<<
8^255*this.b<<0},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getContextStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},setContextStyle:function(a){a=/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i.exec(a);this.r=parseInt(a[1],10)/255;this.g=parseInt(a[2],10)/255;this.b=parseInt(a[3],10)/255;return this},getHSV:function(a){var b=
this.r,c=this.g,d=this.b,e=Math.max(Math.max(b,c),d),f=Math.min(Math.min(b,c),d);if(f===e)f=b=0;else{var g=e-f,f=g/e,b=(b===e?(c-d)/g:c===e?2+(d-b)/g:4+(b-c)/g)/6;0>b&&(b+=1);1<b&&(b-=1)}void 0===a&&(a={h:0,s:0,v:0});a.h=b;a.s=f;a.v=e;return a},lerpSelf:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},subSelf:function(a){this.x-=a.x;this.y-=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divideScalar:function(a){a?(this.x/=a,this.y/=a):this.set(0,
0);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.lengthSq())},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,a=this.y-a.y;return b*b+a*a},setLength:function(a){return this.normalize().multiplyScalar(a)},lerpSelf:function(a,
b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},
sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},subSelf:function(a){this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},multiply:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},multiplySelf:function(a){this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},divideSelf:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){a?(this.x/=a,this.y/=a,this.z/=a):
this.z=this.y=this.x=0;return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.lengthSq())},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.normalize().multiplyScalar(a)},lerpSelf:function(a,b){this.x+=
(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},cross:function(a,b){this.x=a.y*b.z-a.z*b.y;this.y=a.z*b.x-a.x*b.z;this.z=a.x*b.y-a.y*b.x;return this},crossSelf:function(a){var b=this.x,c=this.y,d=this.z;this.x=c*a.z-d*a.y;this.y=d*a.x-b*a.z;this.z=b*a.y-c*a.x;return this},angleTo:function(a){return Math.acos(this.dot(a)/this.length()/a.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){return(new THREE.Vector3).sub(this,
a).lengthSq()},getPositionFromMatrix:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setEulerFromRotationMatrix:function(a,b){function c(a){return Math.min(Math.max(a,-1),1)}var d=a.elements,e=d[0],f=d[4],g=d[8],h=d[1],i=d[5],j=d[9],l=d[2],m=d[6],d=d[10];void 0===b||"XYZ"===b?(this.y=Math.asin(c(g)),0.99999>Math.abs(g)?(this.x=Math.atan2(-j,d),this.z=Math.atan2(-f,e)):(this.x=Math.atan2(m,i),this.z=0)):"YXZ"===b?(this.x=Math.asin(-c(j)),0.99999>Math.abs(j)?
(this.y=Math.atan2(g,d),this.z=Math.atan2(h,i)):(this.y=Math.atan2(-l,e),this.z=0)):"ZXY"===b?(this.x=Math.asin(c(m)),0.99999>Math.abs(m)?(this.y=Math.atan2(-l,d),this.z=Math.atan2(-f,i)):(this.y=0,this.z=Math.atan2(h,e))):"ZYX"===b?(this.y=Math.asin(-c(l)),0.99999>Math.abs(l)?(this.x=Math.atan2(m,d),this.z=Math.atan2(h,e)):(this.x=0,this.z=Math.atan2(-f,i))):"YZX"===b?(this.z=Math.asin(c(h)),0.99999>Math.abs(h)?(this.x=Math.atan2(-j,i),this.y=Math.atan2(-l,e)):(this.x=0,this.y=Math.atan2(g,d))):
"XZY"===b&&(this.z=Math.asin(-c(f)),0.99999>Math.abs(f)?(this.x=Math.atan2(m,i),this.y=Math.atan2(g,e)):(this.x=Math.atan2(-j,d),this.y=0));return this},setEulerFromQuaternion:function(a,b){function c(a){return Math.min(Math.max(a,-1),1)}var d=a.x*a.x,e=a.y*a.y,f=a.z*a.z,g=a.w*a.w;void 0===b||"XYZ"===b?(this.x=Math.atan2(2*(a.x*a.w-a.y*a.z),g-d-e+f),this.y=Math.asin(c(2*(a.x*a.z+a.y*a.w))),this.z=Math.atan2(2*(a.z*a.w-a.x*a.y),g+d-e-f)):"YXZ"===b?(this.x=Math.asin(c(2*(a.x*a.w-a.y*a.z))),this.y=Math.atan2(2*
(a.x*a.z+a.y*a.w),g-d-e+f),this.z=Math.atan2(2*(a.x*a.y+a.z*a.w),g-d+e-f)):"ZXY"===b?(this.x=Math.asin(c(2*(a.x*a.w+a.y*a.z))),this.y=Math.atan2(2*(a.y*a.w-a.z*a.x),g-d-e+f),this.z=Math.atan2(2*(a.z*a.w-a.x*a.y),g-d+e-f)):"ZYX"===b?(this.x=Math.atan2(2*(a.x*a.w+a.z*a.y),g-d-e+f),this.y=Math.asin(c(2*(a.y*a.w-a.x*a.z))),this.z=Math.atan2(2*(a.x*a.y+a.z*a.w),g+d-e-f)):"YZX"===b?(this.x=Math.atan2(2*(a.x*a.w-a.z*a.y),g-d+e-f),this.y=Math.atan2(2*(a.y*a.w-a.x*a.z),g+d-e-f),this.z=Math.asin(c(2*(a.x*a.y+
a.z*a.w)))):"XZY"===b&&(this.x=Math.atan2(2*(a.x*a.w+a.y*a.z),g-d+e-f),this.y=Math.atan2(2*(a.x*a.z+a.y*a.w),g+d-e-f),this.z=Math.asin(c(2*(a.z*a.w-a.x*a.y))));return this},getScaleFromMatrix:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length(),a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=a;return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},
clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},subSelf:function(a){this.x-=
a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},divideScalar:function(a){a?(this.x/=a,this.y/=a,this.z/=a,this.w/=a):(this.z=this.y=this.x=0,this.w=1);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.dot(this)},length:function(){return Math.sqrt(this.lengthSq())},lengthManhattan:function(){return Math.abs(this.x)+
Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.normalize().multiplyScalar(a)},lerpSelf:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):
(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d,a=a.elements,e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],i=a[9];c=a[2];b=a[6];var j=a[10];if(0.01>Math.abs(d-g)&&0.01>Math.abs(f-c)&&0.01>Math.abs(i-b)){if(0.1>Math.abs(d+g)&&0.1>Math.abs(f+c)&&0.1>Math.abs(i+b)&&0.1>Math.abs(e+h+j-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;j=(j+1)/2;d=(d+g)/4;f=(f+c)/4;i=(i+b)/4;e>h&&e>j?0.01>e?(b=0,d=c=0.707106781):(b=Math.sqrt(e),c=d/b,d=f/
b):h>j?0.01>h?(b=0.707106781,c=0,d=0.707106781):(c=Math.sqrt(h),b=d/c,d=i/c):0.01>j?(c=b=0.707106781,d=0):(d=Math.sqrt(j),b=f/d,c=i/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-i)*(b-i)+(f-c)*(f-c)+(g-d)*(g-d));0.001>Math.abs(a)&&(a=1);this.x=(b-i)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+j-1)/2);return this}};THREE.Matrix3=function(){this.elements=new Float32Array(9)};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,multiplyVector3:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z;a.x=b[0]*c+b[3]*d+b[6]*e;a.y=b[1]*c+b[4]*d+b[7]*e;a.z=b[2]*c+b[5]*d+b[8]*e;return a},multiplyVector3Array:function(a){for(var b=THREE.Matrix3.__v1,c=0,d=a.length;c<d;c+=3)b.x=a[c],b.y=a[c+1],b.z=a[c+2],this.multiplyVector3(b),a[c]=b.x,a[c+1]=b.y,a[c+2]=b.z;return a},getInverse:function(a){var b=a.elements,a=b[10]*b[5]-b[6]*b[9],c=-b[10]*b[1]+b[2]*b[9],d=b[6]*b[1]-b[2]*b[5],e=-b[10]*
b[4]+b[6]*b[8],f=b[10]*b[0]-b[2]*b[8],g=-b[6]*b[0]+b[2]*b[4],h=b[9]*b[4]-b[5]*b[8],i=-b[9]*b[0]+b[1]*b[8],j=b[5]*b[0]-b[1]*b[4],b=b[0]*a+b[1]*e+b[2]*h;0===b&&console.warn("Matrix3.getInverse(): determinant == 0");var b=1/b,l=this.elements;l[0]=b*a;l[1]=b*c;l[2]=b*d;l[3]=b*e;l[4]=b*f;l[5]=b*g;l[6]=b*h;l[7]=b*i;l[8]=b*j;return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},transposeIntoArray:function(a){var b=this.m;
a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this}};THREE.Matrix3.__v1=new THREE.Vector3;THREE.Matrix4=function(a,b,c,d,e,f,g,h,i,j,l,m,n,p,o,s){this.elements=new Float32Array(16);this.set(void 0!==a?a:1,b||0,c||0,d||0,e||0,void 0!==f?f:1,g||0,h||0,i||0,j||0,void 0!==l?l:1,m||0,n||0,p||0,o||0,void 0!==s?s:1)};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,i,j,l,m,n,p,o,s){var t=this.elements;t[0]=a;t[4]=b;t[8]=c;t[12]=d;t[1]=e;t[5]=f;t[9]=g;t[13]=h;t[2]=i;t[6]=j;t[10]=l;t[14]=m;t[3]=n;t[7]=p;t[11]=o;t[15]=s;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15]);return this},lookAt:function(a,b,c){var d=this.elements,
e=THREE.Matrix4.__v1,f=THREE.Matrix4.__v2,g=THREE.Matrix4.__v3;g.sub(a,b).normalize();0===g.length()&&(g.z=1);e.cross(c,g).normalize();0===e.length()&&(g.x+=1E-4,e.cross(c,g).normalize());f.cross(g,e);d[0]=e.x;d[4]=f.x;d[8]=g.x;d[1]=e.y;d[5]=f.y;d[9]=g.y;d[2]=e.z;d[6]=f.z;d[10]=g.z;return this},multiply:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],i=c[12],j=c[1],l=c[5],m=c[9],n=c[13],p=c[2],o=c[6],s=c[10],t=c[14],r=c[3],z=c[7],w=c[11],c=c[15],q=d[0],E=d[4],A=d[8],
v=d[12],u=d[1],D=d[5],C=d[9],G=d[13],P=d[2],B=d[6],K=d[10],H=d[14],I=d[3],N=d[7],O=d[11],d=d[15];e[0]=f*q+g*u+h*P+i*I;e[4]=f*E+g*D+h*B+i*N;e[8]=f*A+g*C+h*K+i*O;e[12]=f*v+g*G+h*H+i*d;e[1]=j*q+l*u+m*P+n*I;e[5]=j*E+l*D+m*B+n*N;e[9]=j*A+l*C+m*K+n*O;e[13]=j*v+l*G+m*H+n*d;e[2]=p*q+o*u+s*P+t*I;e[6]=p*E+o*D+s*B+t*N;e[10]=p*A+o*C+s*K+t*O;e[14]=p*v+o*G+s*H+t*d;e[3]=r*q+z*u+w*P+c*I;e[7]=r*E+z*D+w*B+c*N;e[11]=r*A+z*C+w*K+c*O;e[15]=r*v+z*G+w*H+c*d;return this},multiplySelf:function(a){return this.multiply(this,
a)},multiplyToArray:function(a,b,c){var d=this.elements;this.multiply(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},multiplyVector3:function(a){var b=this.elements,
c=a.x,d=a.y,e=a.z,f=1/(b[3]*c+b[7]*d+b[11]*e+b[15]);a.x=(b[0]*c+b[4]*d+b[8]*e+b[12])*f;a.y=(b[1]*c+b[5]*d+b[9]*e+b[13])*f;a.z=(b[2]*c+b[6]*d+b[10]*e+b[14])*f;return a},multiplyVector4:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w;a.x=b[0]*c+b[4]*d+b[8]*e+b[12]*f;a.y=b[1]*c+b[5]*d+b[9]*e+b[13]*f;a.z=b[2]*c+b[6]*d+b[10]*e+b[14]*f;a.w=b[3]*c+b[7]*d+b[11]*e+b[15]*f;return a},multiplyVector3Array:function(a){for(var b=THREE.Matrix4.__v1,c=0,d=a.length;c<d;c+=3)b.x=a[c],b.y=a[c+1],b.z=a[c+2],
this.multiplyVector3(b),a[c]=b.x,a[c+1]=b.y,a[c+2]=b.z;return a},rotateAxis:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z;a.x=c*b[0]+d*b[4]+e*b[8];a.y=c*b[1]+d*b[5]+e*b[9];a.z=c*b[2]+d*b[6]+e*b[10];a.normalize();return a},crossVector:function(a){var b=this.elements,c=new THREE.Vector4;c.x=b[0]*a.x+b[4]*a.y+b[8]*a.z+b[12]*a.w;c.y=b[1]*a.x+b[5]*a.y+b[9]*a.z+b[13]*a.w;c.z=b[2]*a.x+b[6]*a.y+b[10]*a.z+b[14]*a.w;c.w=a.w?b[3]*a.x+b[7]*a.y+b[11]*a.z+b[15]*a.w:1;return c},determinant:function(){var a=
this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],i=a[13],j=a[2],l=a[6],m=a[10],n=a[14],p=a[3],o=a[7],s=a[11],a=a[15];return e*h*l*p-d*i*l*p-e*g*m*p+c*i*m*p+d*g*n*p-c*h*n*p-e*h*j*o+d*i*j*o+e*f*m*o-b*i*m*o-d*f*n*o+b*h*n*o+e*g*j*s-c*i*j*s-e*f*l*s+b*i*l*s+c*f*n*s-b*g*n*s-d*g*j*a+c*h*j*a+d*f*l*a-b*h*l*a-c*f*m*a+b*g*m*a},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=
a[11];a[11]=a[14];a[14]=b;return this},flattenToArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+
14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=this.elements;return THREE.Matrix4.__v1.set(a[12],a[13],a[14])},setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getColumnX:function(){var a=this.elements;return THREE.Matrix4.__v1.set(a[0],a[1],a[2])},getColumnY:function(){var a=this.elements;return THREE.Matrix4.__v1.set(a[4],a[5],a[6])},getColumnZ:function(){var a=this.elements;return THREE.Matrix4.__v1.set(a[8],a[9],a[10])},getInverse:function(a){var b=
this.elements,c=a.elements,d=c[0],e=c[4],f=c[8],g=c[12],h=c[1],i=c[5],j=c[9],l=c[13],m=c[2],n=c[6],p=c[10],o=c[14],s=c[3],t=c[7],r=c[11],c=c[15];b[0]=j*o*t-l*p*t+l*n*r-i*o*r-j*n*c+i*p*c;b[4]=g*p*t-f*o*t-g*n*r+e*o*r+f*n*c-e*p*c;b[8]=f*l*t-g*j*t+g*i*r-e*l*r-f*i*c+e*j*c;b[12]=g*j*n-f*l*n-g*i*p+e*l*p+f*i*o-e*j*o;b[1]=l*p*s-j*o*s-l*m*r+h*o*r+j*m*c-h*p*c;b[5]=f*o*s-g*p*s+g*m*r-d*o*r-f*m*c+d*p*c;b[9]=g*j*s-f*l*s-g*h*r+d*l*r+f*h*c-d*j*c;b[13]=f*l*m-g*j*m+g*h*p-d*l*p-f*h*o+d*j*o;b[2]=i*o*s-l*n*s+l*m*t-h*o*
t-i*m*c+h*n*c;b[6]=g*n*s-e*o*s-g*m*t+d*o*t+e*m*c-d*n*c;b[10]=e*l*s-g*i*s+g*h*t-d*l*t-e*h*c+d*i*c;b[14]=g*i*m-e*l*m-g*h*n+d*l*n+e*h*o-d*i*o;b[3]=j*n*s-i*p*s-j*m*t+h*p*t+i*m*r-h*n*r;b[7]=e*p*s-f*n*s+f*m*t-d*p*t-e*m*r+d*n*r;b[11]=f*i*s-e*j*s-f*h*t+d*j*t+e*h*r-d*i*r;b[15]=e*j*m-f*i*m+f*h*n-d*j*n-e*h*p+d*i*p;this.multiplyScalar(1/a.determinant());return this},setRotationFromEuler:function(a,b){var c=this.elements,d=a.x,e=a.y,f=a.z,g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e),i=Math.cos(f),f=
Math.sin(f);if(void 0===b||"XYZ"===b){var j=g*i,l=g*f,m=d*i,n=d*f;c[0]=h*i;c[4]=-h*f;c[8]=e;c[1]=l+m*e;c[5]=j-n*e;c[9]=-d*h;c[2]=n-j*e;c[6]=m+l*e;c[10]=g*h}else"YXZ"===b?(j=h*i,l=h*f,m=e*i,n=e*f,c[0]=j+n*d,c[4]=m*d-l,c[8]=g*e,c[1]=g*f,c[5]=g*i,c[9]=-d,c[2]=l*d-m,c[6]=n+j*d,c[10]=g*h):"ZXY"===b?(j=h*i,l=h*f,m=e*i,n=e*f,c[0]=j-n*d,c[4]=-g*f,c[8]=m+l*d,c[1]=l+m*d,c[5]=g*i,c[9]=n-j*d,c[2]=-g*e,c[6]=d,c[10]=g*h):"ZYX"===b?(j=g*i,l=g*f,m=d*i,n=d*f,c[0]=h*i,c[4]=m*e-l,c[8]=j*e+n,c[1]=h*f,c[5]=n*e+j,c[9]=
l*e-m,c[2]=-e,c[6]=d*h,c[10]=g*h):"YZX"===b?(j=g*h,l=g*e,m=d*h,n=d*e,c[0]=h*i,c[4]=n-j*f,c[8]=m*f+l,c[1]=f,c[5]=g*i,c[9]=-d*i,c[2]=-e*i,c[6]=l*f+m,c[10]=j-n*f):"XZY"===b&&(j=g*h,l=g*e,m=d*h,n=d*e,c[0]=h*i,c[4]=-f,c[8]=e*i,c[1]=j*f+n,c[5]=g*i,c[9]=l*f-m,c[2]=m*f-l,c[6]=d*i,c[10]=n*f+j);return this},setRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,i=e+e,a=c*g,j=c*h,c=c*i,l=d*h,d=d*i,e=e*i,g=f*g,h=f*h,f=f*i;b[0]=1-(l+e);b[4]=j-f;b[8]=c+h;b[1]=j+f;b[5]=1-(a+
e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+l);return this},compose:function(a,b,c){var d=this.elements,e=THREE.Matrix4.__m1,f=THREE.Matrix4.__m2;e.identity();e.setRotationFromQuaternion(b);f.makeScale(c.x,c.y,c.z);this.multiply(e,f);d[12]=a.x;d[13]=a.y;d[14]=a.z;return this},decompose:function(a,b,c){var d=this.elements,e=THREE.Matrix4.__v1,f=THREE.Matrix4.__v2,g=THREE.Matrix4.__v3;e.set(d[0],d[1],d[2]);f.set(d[4],d[5],d[6]);g.set(d[8],d[9],d[10]);a=a instanceof THREE.Vector3?a:new THREE.Vector3;b=
b instanceof THREE.Quaternion?b:new THREE.Quaternion;c=c instanceof THREE.Vector3?c:new THREE.Vector3;c.x=e.length();c.y=f.length();c.z=g.length();a.x=d[12];a.y=d[13];a.z=d[14];d=THREE.Matrix4.__m1;d.copy(this);d.elements[0]/=c.x;d.elements[1]/=c.x;d.elements[2]/=c.x;d.elements[4]/=c.y;d.elements[5]/=c.y;d.elements[6]/=c.y;d.elements[8]/=c.z;d.elements[9]/=c.z;d.elements[10]/=c.z;b.setFromRotationMatrix(d);return[a,b,c]},extractPosition:function(a){var b=this.elements,a=a.elements;b[12]=a[12];b[13]=
a[13];b[14]=a[14];return this},extractRotation:function(a){var b=this.elements,a=a.elements,c=THREE.Matrix4.__v1,d=1/c.set(a[0],a[1],a[2]).length(),e=1/c.set(a[4],a[5],a[6]).length(),c=1/c.set(a[8],a[9],a[10]).length();b[0]=a[0]*d;b[1]=a[1]*d;b[2]=a[2]*d;b[4]=a[4]*e;b[5]=a[5]*e;b[6]=a[6]*e;b[8]=a[8]*c;b[9]=a[9]*c;b[10]=a[10]*c;return this},translate:function(a){var b=this.elements,c=a.x,d=a.y,a=a.z;b[12]=b[0]*c+b[4]*d+b[8]*a+b[12];b[13]=b[1]*c+b[5]*d+b[9]*a+b[13];b[14]=b[2]*c+b[6]*d+b[10]*a+b[14];
b[15]=b[3]*c+b[7]*d+b[11]*a+b[15];return this},rotateX:function(a){var b=this.elements,c=b[4],d=b[5],e=b[6],f=b[7],g=b[8],h=b[9],i=b[10],j=b[11],l=Math.cos(a),a=Math.sin(a);b[4]=l*c+a*g;b[5]=l*d+a*h;b[6]=l*e+a*i;b[7]=l*f+a*j;b[8]=l*g-a*c;b[9]=l*h-a*d;b[10]=l*i-a*e;b[11]=l*j-a*f;return this},rotateY:function(a){var b=this.elements,c=b[0],d=b[1],e=b[2],f=b[3],g=b[8],h=b[9],i=b[10],j=b[11],l=Math.cos(a),a=Math.sin(a);b[0]=l*c-a*g;b[1]=l*d-a*h;b[2]=l*e-a*i;b[3]=l*f-a*j;b[8]=l*g+a*c;b[9]=l*h+a*d;b[10]=
l*i+a*e;b[11]=l*j+a*f;return this},rotateZ:function(a){var b=this.elements,c=b[0],d=b[1],e=b[2],f=b[3],g=b[4],h=b[5],i=b[6],j=b[7],l=Math.cos(a),a=Math.sin(a);b[0]=l*c+a*g;b[1]=l*d+a*h;b[2]=l*e+a*i;b[3]=l*f+a*j;b[4]=l*g-a*c;b[5]=l*h-a*d;b[6]=l*i-a*e;b[7]=l*j-a*f;return this},rotateByAxis:function(a,b){var c=this.elements;if(1===a.x&&0===a.y&&0===a.z)return this.rotateX(b);if(0===a.x&&1===a.y&&0===a.z)return this.rotateY(b);if(0===a.x&&0===a.y&&1===a.z)return this.rotateZ(b);var d=a.x,e=a.y,f=a.z,
g=Math.sqrt(d*d+e*e+f*f),d=d/g,e=e/g,f=f/g,g=d*d,h=e*e,i=f*f,j=Math.cos(b),l=Math.sin(b),m=1-j,n=d*e*m,p=d*f*m,m=e*f*m,d=d*l,o=e*l,l=f*l,f=g+(1-g)*j,g=n+l,e=p-o,n=n-l,h=h+(1-h)*j,l=m+d,p=p+o,m=m-d,i=i+(1-i)*j,j=c[0],d=c[1],o=c[2],s=c[3],t=c[4],r=c[5],z=c[6],w=c[7],q=c[8],E=c[9],A=c[10],v=c[11];c[0]=f*j+g*t+e*q;c[1]=f*d+g*r+e*E;c[2]=f*o+g*z+e*A;c[3]=f*s+g*w+e*v;c[4]=n*j+h*t+l*q;c[5]=n*d+h*r+l*E;c[6]=n*o+h*z+l*A;c[7]=n*s+h*w+l*v;c[8]=p*j+m*t+i*q;c[9]=p*d+m*r+i*E;c[10]=p*o+m*z+i*A;c[11]=p*s+m*w+i*v;
return this},scale:function(a){var b=this.elements,c=a.x,d=a.y,a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a),a=Math.sin(a);
this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,i=e*f,j=e*g;this.set(i*f+c,i*g-d*h,i*h+d*g,0,i*g+d*h,j*g+c,j*h-d*f,0,i*h-d*g,j*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,
b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){var a=c*Math.tan(a*Math.PI/360),e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=b-a,i=c-d,j=f-e;g[0]=2/
h;g[4]=0;g[8]=0;g[12]=-((b+a)/h);g[1]=0;g[5]=2/i;g[9]=0;g[13]=-((c+d)/i);g[2]=0;g[6]=0;g[10]=-2/j;g[14]=-((f+e)/j);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},clone:function(){var a=this.elements;return new THREE.Matrix4(a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15])}};THREE.Matrix4.__v1=new THREE.Vector3;THREE.Matrix4.__v2=new THREE.Vector3;THREE.Matrix4.__v3=new THREE.Vector3;THREE.Matrix4.__m1=new THREE.Matrix4;THREE.Matrix4.__m2=new THREE.Matrix4;
THREE.EventTarget=function(){var a={};this.addEventListener=function(b,c){void 0===a[b]&&(a[b]=[]);-1===a[b].indexOf(c)&&a[b].push(c)};this.dispatchEvent=function(b){for(var c in a[b.type])a[b.type][c](b)};this.removeEventListener=function(b,c){var d=a[b].indexOf(c);-1!==d&&a[b].splice(d,1)}};THREE.Frustum=function(){this.planes=[new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4]};
THREE.Frustum.prototype.setFromMatrix=function(a){var b=this.planes,c=a.elements,a=c[0],d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],i=c[6],j=c[7],l=c[8],m=c[9],n=c[10],p=c[11],o=c[12],s=c[13],t=c[14],c=c[15];b[0].set(f-a,j-g,p-l,c-o);b[1].set(f+a,j+g,p+l,c+o);b[2].set(f+d,j+h,p+m,c+s);b[3].set(f-d,j-h,p-m,c-s);b[4].set(f-e,j-i,p-n,c-t);b[5].set(f+e,j+i,p+n,c+t);for(d=0;6>d;d++)a=b[d],a.divideScalar(Math.sqrt(a.x*a.x+a.y*a.y+a.z*a.z))};
THREE.Frustum.prototype.contains=function(a){for(var b=0,c=this.planes,b=a.matrixWorld,d=b.elements,a=-a.geometry.boundingSphere.radius*b.getMaxScaleOnAxis(),e=0;6>e;e++)if(b=c[e].x*d[12]+c[e].y*d[13]+c[e].z*d[14]+c[e].w,b<=a)return!1;return!0};THREE.Frustum.__v1=new THREE.Vector3;
(function(a){a.Ray=function(b,c,d,e){this.origin=b||new a.Vector3;this.direction=c||new a.Vector3;this.near=d||0;this.far=e||Infinity};var b=new a.Vector3,c=new a.Vector3,d=new a.Vector3,e=new a.Vector3;new a.Vector3;var f=new a.Vector3,g=new a.Matrix4,h=function(a,b){return a.distance-b.distance},i=new a.Vector3,j=new a.Vector3,l=new a.Vector3,m=function(a,b,c){i.sub(c,a);var d=i.dot(b),a=j.add(a,l.copy(b).multiplyScalar(d));return c.distanceTo(a)},n=function(a,b,c,d){i.sub(d,b);j.sub(c,b);l.sub(a,
b);var a=i.dot(i),b=i.dot(j),c=i.dot(l),e=j.dot(j),d=j.dot(l),f=1/(a*e-b*b),e=(e*c-b*d)*f,a=(a*d-b*c)*f;return 0<=e&&0<=a&&1>e+a},p=function(h,i,j){if(h instanceof a.Particle){var l=m(i.origin,i.direction,h.matrixWorld.getPosition());if(l>h.scale.x)return j;j.push({distance:l,point:h.position,face:null,object:h})}else if(h instanceof a.Mesh){var o=h.geometry.boundingSphere.radius*h.matrixWorld.getMaxScaleOnAxis(),l=m(i.origin,i.direction,h.matrixWorld.getPosition());if(l>o)return j;var o=h.geometry,
p=o.vertices,E=h.material instanceof a.MeshFaceMaterial,A=!0===E?h.material.materials:null,l=h.material.side,v,u,D,C=i.precision;h.matrixRotationWorld.extractRotation(h.matrixWorld);b.copy(i.origin);g.getInverse(h.matrixWorld);c.copy(b);g.multiplyVector3(c);d.copy(i.direction);g.rotateAxis(d).normalize();for(var G=0,P=o.faces.length;G<P;G++){var B=o.faces[G],l=!0===E?A[B.materialIndex]:h.material;if(void 0!==l&&(l=l.side,e.sub(B.centroid,c),u=B.normal,v=d.dot(u),!(Math.abs(v)<C)&&(u=u.dot(e)/v,!(0>
u)&&(l===a.DoubleSide||(l===a.FrontSide?0>v:0<v)))))if(f.add(c,d.multiplyScalar(u)),B instanceof a.Face3)l=p[B.a],v=p[B.b],u=p[B.c],n(f,l,v,u)&&(v=h.matrixWorld.multiplyVector3(f.clone()),l=b.distanceTo(v),l<i.near||l>i.far||j.push({distance:l,point:v,face:B,faceIndex:G,object:h}));else if(B instanceof a.Face4&&(l=p[B.a],v=p[B.b],u=p[B.c],D=p[B.d],n(f,l,v,D)||n(f,v,u,D)))v=h.matrixWorld.multiplyVector3(f.clone()),l=b.distanceTo(v),l<i.near||l>i.far||j.push({distance:l,point:v,face:B,faceIndex:G,object:h})}}},
o=function(a,b,c){for(var a=a.getDescendants(),d=0,e=a.length;d<e;d++)p(a[d],b,c)};a.Ray.prototype.precision=1E-4;a.Ray.prototype.set=function(a,b){this.origin=a;this.direction=b};a.Ray.prototype.intersectObject=function(a,b){var c=[];!0===b&&o(a,this,c);p(a,this,c);c.sort(h);return c};a.Ray.prototype.intersectObjects=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)p(a[d],this,c),!0===b&&o(a[d],this,c);c.sort(h);return c}})(THREE);
THREE.Rectangle=function(){function a(){f=d-b;g=e-c}var b=0,c=0,d=0,e=0,f=0,g=0,h=!0;this.getX=function(){return b};this.getY=function(){return c};this.getWidth=function(){return f};this.getHeight=function(){return g};this.getLeft=function(){return b};this.getTop=function(){return c};this.getRight=function(){return d};this.getBottom=function(){return e};this.set=function(f,g,l,m){h=!1;b=f;c=g;d=l;e=m;a()};this.addPoint=function(f,g){!0===h?(h=!1,b=f,c=g,d=f,e=g):(b=b<f?b:f,c=c<g?c:g,d=d>f?d:f,e=e>
g?e:g);a()};this.add3Points=function(f,g,l,m,n,p){!0===h?(h=!1,b=f<l?f<n?f:n:l<n?l:n,c=g<m?g<p?g:p:m<p?m:p,d=f>l?f>n?f:n:l>n?l:n,e=g>m?g>p?g:p:m>p?m:p):(b=f<l?f<n?f<b?f:b:n<b?n:b:l<n?l<b?l:b:n<b?n:b,c=g<m?g<p?g<c?g:c:p<c?p:c:m<p?m<c?m:c:p<c?p:c,d=f>l?f>n?f>d?f:d:n>d?n:d:l>n?l>d?l:d:n>d?n:d,e=g>m?g>p?g>e?g:e:p>e?p:e:m>p?m>e?m:e:p>e?p:e);a()};this.addRectangle=function(f){!0===h?(h=!1,b=f.getLeft(),c=f.getTop(),d=f.getRight(),e=f.getBottom()):(b=b<f.getLeft()?b:f.getLeft(),c=c<f.getTop()?c:f.getTop(),
d=d>f.getRight()?d:f.getRight(),e=e>f.getBottom()?e:f.getBottom());a()};this.inflate=function(f){b-=f;c-=f;d+=f;e+=f;a()};this.minSelf=function(f){b=b>f.getLeft()?b:f.getLeft();c=c>f.getTop()?c:f.getTop();d=d<f.getRight()?d:f.getRight();e=e<f.getBottom()?e:f.getBottom();a()};this.intersects=function(a){return d<a.getLeft()||b>a.getRight()||e<a.getTop()||c>a.getBottom()?!1:!0};this.empty=function(){h=!0;e=d=c=b=0;a()};this.isEmpty=function(){return h}};
THREE.Math={clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(0.5-Math.random())},sign:function(a){return 0>a?-1:0<a?1:0}};
THREE.Object3D=function(){THREE.Object3DLibrary.push(this);this.id=THREE.Object3DIdCount++;this.name="";this.properties={};this.parent=void 0;this.children=[];this.up=new THREE.Vector3(0,1,0);this.position=new THREE.Vector3;this.rotation=new THREE.Vector3;this.eulerOrder=THREE.Object3D.defaultEulerOrder;this.scale=new THREE.Vector3(1,1,1);this.renderDepth=null;this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixRotationWorld=new THREE.Matrix4;this.matrixWorldNeedsUpdate=
this.matrixAutoUpdate=!0;this.quaternion=new THREE.Quaternion;this.useQuaternion=!1;this.boundRadius=0;this.boundRadiusScale=1;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this._vector=new THREE.Vector3};
THREE.Object3D.prototype={constructor:THREE.Object3D,applyMatrix:function(a){this.matrix.multiply(a,this.matrix);this.scale.getScaleFromMatrix(this.matrix);a=(new THREE.Matrix4).extractRotation(this.matrix);this.rotation.setEulerFromRotationMatrix(a,this.eulerOrder);this.position.getPositionFromMatrix(this.matrix)},translate:function(a,b){this.matrix.rotateAxis(b);this.position.addSelf(b.multiplyScalar(a))},translateX:function(a){this.translate(a,this._vector.set(1,0,0))},translateY:function(a){this.translate(a,
this._vector.set(0,1,0))},translateZ:function(a){this.translate(a,this._vector.set(0,0,1))},localToWorld:function(a){return this.matrixWorld.multiplyVector3(a)},worldToLocal:function(a){return THREE.Object3D.__m1.getInverse(this.matrixWorld).multiplyVector3(a)},lookAt:function(a){this.matrix.lookAt(a,this.position,this.up);this.rotationAutoUpdate&&(!1===this.useQuaternion?this.rotation.setEulerFromRotationMatrix(this.matrix,this.eulerOrder):this.quaternion.copy(this.matrix.decompose()[1]))},add:function(a){if(a===
this)console.warn("THREE.Object3D.add: An object can't be added as a child of itself.");else if(a instanceof THREE.Object3D){void 0!==a.parent&&a.parent.remove(a);a.parent=this;this.children.push(a);for(var b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__addObject(a)}},remove:function(a){var b=this.children.indexOf(a);if(-1!==b){a.parent=void 0;this.children.splice(b,1);for(b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__removeObject(a)}},
traverse:function(a){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},getChildByName:function(a,b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.name===a||!0===b&&(e=e.getChildByName(a,b),void 0!==e))return e}},getDescendants:function(a){void 0===a&&(a=[]);Array.prototype.push.apply(a,this.children);for(var b=0,c=this.children.length;b<c;b++)this.children[b].getDescendants(a);return a},updateMatrix:function(){this.matrix.setPosition(this.position);
!1===this.useQuaternion?this.matrix.setRotationFromEuler(this.rotation,this.eulerOrder):this.matrix.setRotationFromQuaternion(this.quaternion);if(1!==this.scale.x||1!==this.scale.y||1!==this.scale.z)this.matrix.scale(this.scale),this.boundRadiusScale=Math.max(this.scale.x,Math.max(this.scale.y,this.scale.z));this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):
this.matrixWorld.multiply(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},clone:function(a){void 0===a&&(a=new THREE.Object3D);a.name=this.name;a.up.copy(this.up);a.position.copy(this.position);a.rotation instanceof THREE.Vector3&&a.rotation.copy(this.rotation);a.eulerOrder=this.eulerOrder;a.scale.copy(this.scale);a.renderDepth=this.renderDepth;a.rotationAutoUpdate=this.rotationAutoUpdate;a.matrix.copy(this.matrix);
a.matrixWorld.copy(this.matrixWorld);a.matrixRotationWorld.copy(this.matrixRotationWorld);a.matrixAutoUpdate=this.matrixAutoUpdate;a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.quaternion.copy(this.quaternion);a.useQuaternion=this.useQuaternion;a.boundRadius=this.boundRadius;a.boundRadiusScale=this.boundRadiusScale;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;for(var b=0;b<this.children.length;b++)a.add(this.children[b].clone());
return a},deallocate:function(){var a=THREE.Object3DLibrary.indexOf(this);-1!==a&&THREE.Object3DLibrary.splice(a,1)}};THREE.Object3D.__m1=new THREE.Matrix4;THREE.Object3D.defaultEulerOrder="XYZ";THREE.Object3DIdCount=0;THREE.Object3DLibrary=[];
THREE.Projector=function(){function a(){if(f===h){var a=new THREE.RenderableObject;g.push(a);h++;f++;return a}return g[f++]}function b(){if(j===m){var a=new THREE.RenderableVertex;l.push(a);m++;j++;return a}return l[j++]}function c(a,b){return b.z-a.z}function d(a,b){var c=0,d=1,e=a.z+a.w,f=b.z+b.w,g=-a.z+a.w,h=-b.z+b.w;if(0<=e&&0<=f&&0<=g&&0<=h)return!0;if(0>e&&0>f||0>g&&0>h)return!1;0>e?c=Math.max(c,e/(e-f)):0>f&&(d=Math.min(d,e/(e-f)));0>g?c=Math.max(c,g/(g-h)):0>h&&(d=Math.min(d,g/(g-h)));if(d<
c)return!1;a.lerpSelf(b,c);b.lerpSelf(a,1-d);return!0}var e,f,g=[],h=0,i,j,l=[],m=0,n,p,o=[],s=0,t,r=[],z=0,w,q,E=[],A=0,v,u,D=[],C=0,G={objects:[],sprites:[],lights:[],elements:[]},P=new THREE.Vector3,B=new THREE.Vector4,K=new THREE.Matrix4,H=new THREE.Matrix4,I=new THREE.Matrix3,N=new THREE.Frustum,O=new THREE.Vector4,R=new THREE.Vector4;this.projectVector=function(a,b){b.matrixWorldInverse.getInverse(b.matrixWorld);K.multiply(b.projectionMatrix,b.matrixWorldInverse);K.multiplyVector3(a);return a};
this.unprojectVector=function(a,b){b.projectionMatrixInverse.getInverse(b.projectionMatrix);K.multiply(b.matrixWorld,b.projectionMatrixInverse);K.multiplyVector3(a);return a};this.pickingRay=function(a,b){var c;a.z=-1;c=new THREE.Vector3(a.x,a.y,1);this.unprojectVector(a,b);this.unprojectVector(c,b);c.subSelf(a).normalize();return new THREE.Ray(a,c)};this.projectScene=function(g,h,m,Q){var Z=h.near,L=h.far,oa=!1,X,fa,ca,Y,ba,aa,ia,Aa,Na,Ja,ma,sa,Ea,rb,ib;u=q=t=p=0;G.elements.length=0;g.updateMatrixWorld();
void 0===h.parent&&h.updateMatrixWorld();h.matrixWorldInverse.getInverse(h.matrixWorld);K.multiply(h.projectionMatrix,h.matrixWorldInverse);N.setFromMatrix(K);f=0;G.objects.length=0;G.sprites.length=0;G.lights.length=0;var ob=function(b){for(var c=0,d=b.children.length;c<d;c++){var f=b.children[c];if(!1!==f.visible){if(f instanceof THREE.Light)G.lights.push(f);else if(f instanceof THREE.Mesh||f instanceof THREE.Line){if(!1===f.frustumCulled||!0===N.contains(f))e=a(),e.object=f,null!==f.renderDepth?
e.z=f.renderDepth:(P.copy(f.matrixWorld.getPosition()),K.multiplyVector3(P),e.z=P.z),G.objects.push(e)}else f instanceof THREE.Sprite||f instanceof THREE.Particle?(e=a(),e.object=f,null!==f.renderDepth?e.z=f.renderDepth:(P.copy(f.matrixWorld.getPosition()),K.multiplyVector3(P),e.z=P.z),G.sprites.push(e)):(e=a(),e.object=f,null!==f.renderDepth?e.z=f.renderDepth:(P.copy(f.matrixWorld.getPosition()),K.multiplyVector3(P),e.z=P.z),G.objects.push(e));ob(f)}}};ob(g);!0===m&&G.objects.sort(c);g=0;for(m=G.objects.length;g<
m;g++)if(Aa=G.objects[g].object,Na=Aa.matrixWorld,j=0,Aa instanceof THREE.Mesh){Ja=Aa.geometry;ca=Ja.vertices;ma=Ja.faces;Ja=Ja.faceVertexUvs;I.getInverse(Na);I.transpose();Ea=Aa.material instanceof THREE.MeshFaceMaterial;rb=!0===Ea?Aa.material:null;X=0;for(fa=ca.length;X<fa;X++)i=b(),i.positionWorld.copy(ca[X]),Na.multiplyVector3(i.positionWorld),i.positionScreen.copy(i.positionWorld),K.multiplyVector4(i.positionScreen),i.positionScreen.x/=i.positionScreen.w,i.positionScreen.y/=i.positionScreen.w,
i.visible=i.positionScreen.z>Z&&i.positionScreen.z<L;ca=0;for(X=ma.length;ca<X;ca++)if(fa=ma[ca],ib=!0===Ea?rb.materials[fa.materialIndex]:Aa.material,void 0!==ib){aa=ib.side;if(fa instanceof THREE.Face3)if(Y=l[fa.a],ba=l[fa.b],ia=l[fa.c],!0===Y.visible&&!0===ba.visible&&!0===ia.visible)if(oa=0>(ia.positionScreen.x-Y.positionScreen.x)*(ba.positionScreen.y-Y.positionScreen.y)-(ia.positionScreen.y-Y.positionScreen.y)*(ba.positionScreen.x-Y.positionScreen.x),aa===THREE.DoubleSide||oa===(aa===THREE.FrontSide))p===
s?(sa=new THREE.RenderableFace3,o.push(sa),s++,p++,n=sa):n=o[p++],n.v1.copy(Y),n.v2.copy(ba),n.v3.copy(ia);else continue;else continue;else if(fa instanceof THREE.Face4)if(Y=l[fa.a],ba=l[fa.b],ia=l[fa.c],sa=l[fa.d],!0===Y.visible&&!0===ba.visible&&!0===ia.visible&&!0===sa.visible)if(oa=0>(sa.positionScreen.x-Y.positionScreen.x)*(ba.positionScreen.y-Y.positionScreen.y)-(sa.positionScreen.y-Y.positionScreen.y)*(ba.positionScreen.x-Y.positionScreen.x)||0>(ba.positionScreen.x-ia.positionScreen.x)*(sa.positionScreen.y-
ia.positionScreen.y)-(ba.positionScreen.y-ia.positionScreen.y)*(sa.positionScreen.x-ia.positionScreen.x),aa===THREE.DoubleSide||oa===(aa===THREE.FrontSide)){if(t===z){var jb=new THREE.RenderableFace4;r.push(jb);z++;t++;n=jb}else n=r[t++];n.v1.copy(Y);n.v2.copy(ba);n.v3.copy(ia);n.v4.copy(sa)}else continue;else continue;n.normalWorld.copy(fa.normal);!1===oa&&(aa===THREE.BackSide||aa===THREE.DoubleSide)&&n.normalWorld.negate();I.multiplyVector3(n.normalWorld).normalize();n.centroidWorld.copy(fa.centroid);
Na.multiplyVector3(n.centroidWorld);n.centroidScreen.copy(n.centroidWorld);K.multiplyVector3(n.centroidScreen);ia=fa.vertexNormals;Y=0;for(ba=ia.length;Y<ba;Y++)sa=n.vertexNormalsWorld[Y],sa.copy(ia[Y]),!1===oa&&(aa===THREE.BackSide||aa===THREE.DoubleSide)&&sa.negate(),I.multiplyVector3(sa).normalize();n.vertexNormalsLength=ia.length;Y=0;for(ba=Ja.length;Y<ba;Y++)if(sa=Ja[Y][ca],void 0!==sa){aa=0;for(ia=sa.length;aa<ia;aa++)n.uvs[Y][aa]=sa[aa]}n.color=fa.color;n.material=ib;n.z=n.centroidScreen.z;
G.elements.push(n)}}else if(Aa instanceof THREE.Line){H.multiply(K,Na);ca=Aa.geometry.vertices;Y=b();Y.positionScreen.copy(ca[0]);H.multiplyVector4(Y.positionScreen);Na=Aa.type===THREE.LinePieces?2:1;X=1;for(fa=ca.length;X<fa;X++)Y=b(),Y.positionScreen.copy(ca[X]),H.multiplyVector4(Y.positionScreen),0<(X+1)%Na||(ba=l[j-2],O.copy(Y.positionScreen),R.copy(ba.positionScreen),!0===d(O,R)&&(O.multiplyScalar(1/O.w),R.multiplyScalar(1/R.w),q===A?(ma=new THREE.RenderableLine,E.push(ma),A++,q++,w=ma):w=E[q++],
w.v1.positionScreen.copy(O),w.v2.positionScreen.copy(R),w.z=Math.max(O.z,R.z),w.material=Aa.material,G.elements.push(w)))}g=0;for(m=G.sprites.length;g<m;g++)Aa=G.sprites[g].object,Na=Aa.matrixWorld,Aa instanceof THREE.Particle&&(B.set(Na.elements[12],Na.elements[13],Na.elements[14],1),K.multiplyVector4(B),B.z/=B.w,0<B.z&&1>B.z&&(u===C?(Z=new THREE.RenderableParticle,D.push(Z),C++,u++,v=Z):v=D[u++],v.object=Aa,v.x=B.x/B.w,v.y=B.y/B.w,v.z=B.z,v.rotation=Aa.rotation.z,v.scale.x=Aa.scale.x*Math.abs(v.x-
(B.x+h.projectionMatrix.elements[0])/(B.w+h.projectionMatrix.elements[12])),v.scale.y=Aa.scale.y*Math.abs(v.y-(B.y+h.projectionMatrix.elements[5])/(B.w+h.projectionMatrix.elements[13])),v.material=Aa.material,G.elements.push(v)));!0===Q&&G.elements.sort(c);return G}};THREE.Quaternion=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=a.w;return this},setFromEuler:function(a,b){var c=Math.cos(a.x/2),d=Math.cos(a.y/2),e=Math.cos(a.z/2),f=Math.sin(a.x/2),g=Math.sin(a.y/2),h=Math.sin(a.z/2);void 0===b||"XYZ"===b?(this.x=f*d*e+c*g*h,this.y=c*g*e-f*d*h,this.z=c*d*h+f*g*e,this.w=c*d*e-f*g*h):"YXZ"===b?(this.x=f*d*e+c*g*h,this.y=c*g*e-f*d*h,this.z=c*d*
h-f*g*e,this.w=c*d*e+f*g*h):"ZXY"===b?(this.x=f*d*e-c*g*h,this.y=c*g*e+f*d*h,this.z=c*d*h+f*g*e,this.w=c*d*e-f*g*h):"ZYX"===b?(this.x=f*d*e-c*g*h,this.y=c*g*e+f*d*h,this.z=c*d*h-f*g*e,this.w=c*d*e+f*g*h):"YZX"===b?(this.x=f*d*e+c*g*h,this.y=c*g*e+f*d*h,this.z=c*d*h-f*g*e,this.w=c*d*e-f*g*h):"XZY"===b&&(this.x=f*d*e-c*g*h,this.y=c*g*e-f*d*h,this.z=c*d*h+f*g*e,this.w=c*d*e+f*g*h);return this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);this.x=a.x*d;this.y=a.y*d;this.z=a.z*d;this.w=Math.cos(c);
return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0],a=b[4],d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],i=b[6],b=b[10],j=c+f+b;0<j?(c=0.5/Math.sqrt(j+1),this.w=0.25/c,this.x=(i-g)*c,this.y=(d-h)*c,this.z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this.w=(i-g)/c,this.x=0.25*c,this.y=(a+e)/c,this.z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this.w=(d-h)/c,this.x=(a+e)/c,this.y=0.25*c,this.z=(g+i)/c):(c=2*Math.sqrt(1+b-c-f),this.w=(e-a)/c,this.x=(d+h)/c,this.y=(g+i)/c,this.z=0.25*c);return this},inverse:function(){this.conjugate().normalize();
return this},conjugate:function(){this.x*=-1;this.y*=-1;this.z*=-1;return this},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},normalize:function(){var a=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);0===a?(this.z=this.y=this.x=0,this.w=1):(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a);return this},multiply:function(a,b){var c=a.x,d=a.y,e=a.z,f=a.w,g=b.x,h=b.y,i=b.z,j=b.w;this.x=c*j+d*i-e*h+f*g;this.y=-c*i+d*j+e*g+f*h;this.z=c*h-
d*g+e*j+f*i;this.w=-c*g-d*h-e*i+f*j;return this},multiplySelf:function(a){var b=this.x,c=this.y,d=this.z,e=this.w,f=a.x,g=a.y,h=a.z,a=a.w;this.x=b*a+e*f+c*h-d*g;this.y=c*a+e*g+d*f-b*h;this.z=d*a+e*h+b*g-c*f;this.w=e*a-b*f-c*g-d*h;return this},multiplyVector3:function(a,b){b||(b=a);var c=a.x,d=a.y,e=a.z,f=this.x,g=this.y,h=this.z,i=this.w,j=i*c+g*e-h*d,l=i*d+h*c-f*e,m=i*e+f*d-g*c,c=-f*c-g*d-h*e;b.x=j*i+c*-f+l*-h-m*-g;b.y=l*i+c*-g+m*-f-j*-h;b.z=m*i+c*-h+j*-g-l*-f;return b},slerpSelf:function(a,b){var c=
this.x,d=this.y,e=this.z,f=this.w,g=f*a.w+c*a.x+d*a.y+e*a.z;0>g?(this.w=-a.w,this.x=-a.x,this.y=-a.y,this.z=-a.z,g=-g):this.copy(a);if(1<=g)return this.w=f,this.x=c,this.y=d,this.z=e,this;var h=Math.acos(g),i=Math.sqrt(1-g*g);if(0.001>Math.abs(i))return this.w=0.5*(f+this.w),this.x=0.5*(c+this.x),this.y=0.5*(d+this.y),this.z=0.5*(e+this.z),this;g=Math.sin((1-b)*h)/i;h=Math.sin(b*h)/i;this.w=f*g+this.w*h;this.x=c*g+this.x*h;this.y=d*g+this.y*h;this.z=e*g+this.z*h;return this},clone:function(){return new THREE.Quaternion(this.x,
this.y,this.z,this.w)}};THREE.Quaternion.slerp=function(a,b,c,d){var e=a.w*b.w+a.x*b.x+a.y*b.y+a.z*b.z;0>e?(c.w=-b.w,c.x=-b.x,c.y=-b.y,c.z=-b.z,e=-e):c.copy(b);if(1<=Math.abs(e))return c.w=a.w,c.x=a.x,c.y=a.y,c.z=a.z,c;var b=Math.acos(e),f=Math.sqrt(1-e*e);if(0.001>Math.abs(f))return c.w=0.5*(a.w+c.w),c.x=0.5*(a.x+c.x),c.y=0.5*(a.y+c.y),c.z=0.5*(a.z+c.z),c;e=Math.sin((1-d)*b)/f;d=Math.sin(d*b)/f;c.w=a.w*e+c.w*d;c.x=a.x*e+c.x*d;c.y=a.y*e+c.y*d;c.z=a.z*e+c.z*d;return c};
THREE.Vertex=function(a){console.warn("THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.");return a};THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=f;this.centroid=new THREE.Vector3};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.centroid.copy(this.centroid);a.materialIndex=this.materialIndex;var b,c;b=0;for(c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();
return a}};THREE.Face4=function(a,b,c,d,e,f,g){this.a=a;this.b=b;this.c=c;this.d=d;this.normal=e instanceof THREE.Vector3?e:new THREE.Vector3;this.vertexNormals=e instanceof Array?e:[];this.color=f instanceof THREE.Color?f:new THREE.Color;this.vertexColors=f instanceof Array?f:[];this.vertexTangents=[];this.materialIndex=g;this.centroid=new THREE.Vector3};
THREE.Face4.prototype={constructor:THREE.Face4,clone:function(){var a=new THREE.Face4(this.a,this.b,this.c,this.d);a.normal.copy(this.normal);a.color.copy(this.color);a.centroid.copy(this.centroid);a.materialIndex=this.materialIndex;var b,c;b=0;for(c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();
return a}};THREE.UV=function(a,b){this.u=a||0;this.v=b||0};THREE.UV.prototype={constructor:THREE.UV,set:function(a,b){this.u=a;this.v=b;return this},copy:function(a){this.u=a.u;this.v=a.v;return this},lerpSelf:function(a,b){this.u+=(a.u-this.u)*b;this.v+=(a.v-this.v)*b;return this},clone:function(){return new THREE.UV(this.u,this.v)}};
THREE.Geometry=function(){THREE.GeometryLibrary.push(this);this.id=THREE.GeometryIdCount++;this.name="";this.vertices=[];this.colors=[];this.normals=[];this.faces=[];this.faceUvs=[[]];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.buffersNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.tangentsNeedUpdate=
this.normalsNeedUpdate=this.uvsNeedUpdate=this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){var b=new THREE.Matrix3;b.getInverse(a).transpose();for(var c=0,d=this.vertices.length;c<d;c++)a.multiplyVector3(this.vertices[c]);c=0;for(d=this.faces.length;c<d;c++){var e=this.faces[c];b.multiplyVector3(e.normal).normalize();for(var f=0,g=e.vertexNormals.length;f<g;f++)b.multiplyVector3(e.vertexNormals[f]).normalize();a.multiplyVector3(e.centroid)}},computeCentroids:function(){var a,b,c;a=0;for(b=this.faces.length;a<b;a++)c=
this.faces[a],c.centroid.set(0,0,0),c instanceof THREE.Face3?(c.centroid.addSelf(this.vertices[c.a]),c.centroid.addSelf(this.vertices[c.b]),c.centroid.addSelf(this.vertices[c.c]),c.centroid.divideScalar(3)):c instanceof THREE.Face4&&(c.centroid.addSelf(this.vertices[c.a]),c.centroid.addSelf(this.vertices[c.b]),c.centroid.addSelf(this.vertices[c.c]),c.centroid.addSelf(this.vertices[c.d]),c.centroid.divideScalar(4))},computeFaceNormals:function(){var a,b,c,d,e,f,g=new THREE.Vector3,h=new THREE.Vector3;
a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],d=this.vertices[c.a],e=this.vertices[c.b],f=this.vertices[c.c],g.sub(f,e),h.sub(d,e),g.crossSelf(h),g.normalize(),c.normal.copy(g)},computeVertexNormals:function(a){var b,c,d,e;if(void 0===this.__tmpVertices){e=this.__tmpVertices=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)e[b]=new THREE.Vector3;b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],d instanceof THREE.Face3?d.vertexNormals=[new THREE.Vector3,new THREE.Vector3,
new THREE.Vector3]:d instanceof THREE.Face4&&(d.vertexNormals=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3])}else{e=this.__tmpVertices;b=0;for(c=this.vertices.length;b<c;b++)e[b].set(0,0,0)}if(a){var f,g,h,i=new THREE.Vector3,j=new THREE.Vector3,l=new THREE.Vector3,m=new THREE.Vector3,n=new THREE.Vector3;b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],d instanceof THREE.Face3?(a=this.vertices[d.a],f=this.vertices[d.b],g=this.vertices[d.c],i.sub(g,f),j.sub(a,f),i.crossSelf(j),
e[d.a].addSelf(i),e[d.b].addSelf(i),e[d.c].addSelf(i)):d instanceof THREE.Face4&&(a=this.vertices[d.a],f=this.vertices[d.b],g=this.vertices[d.c],h=this.vertices[d.d],l.sub(h,f),j.sub(a,f),l.crossSelf(j),e[d.a].addSelf(l),e[d.b].addSelf(l),e[d.d].addSelf(l),m.sub(h,g),n.sub(f,g),m.crossSelf(n),e[d.b].addSelf(m),e[d.c].addSelf(m),e[d.d].addSelf(m))}else{b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],d instanceof THREE.Face3?(e[d.a].addSelf(d.normal),e[d.b].addSelf(d.normal),e[d.c].addSelf(d.normal)):
d instanceof THREE.Face4&&(e[d.a].addSelf(d.normal),e[d.b].addSelf(d.normal),e[d.c].addSelf(d.normal),e[d.d].addSelf(d.normal))}b=0;for(c=this.vertices.length;b<c;b++)e[b].normalize();b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],d instanceof THREE.Face3?(d.vertexNormals[0].copy(e[d.a]),d.vertexNormals[1].copy(e[d.b]),d.vertexNormals[2].copy(e[d.c])):d instanceof THREE.Face4&&(d.vertexNormals[0].copy(e[d.a]),d.vertexNormals[1].copy(e[d.b]),d.vertexNormals[2].copy(e[d.c]),d.vertexNormals[3].copy(e[d.d]))},
computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++){e=this.faces[c];e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone();e.__originalVertexNormals||(e.__originalVertexNormals=[]);a=0;for(b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone()}var f=new THREE.Geometry;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<
b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];var g=this.morphNormals[a].faceNormals,h=this.morphNormals[a].vertexNormals,i,j;c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],i=new THREE.Vector3,j=e instanceof THREE.Face3?{a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3}:{a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3,d:new THREE.Vector3},g.push(i),h.push(j)}g=this.morphNormals[a];f.vertices=
this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],i=g.faceNormals[c],j=g.vertexNormals[c],i.copy(e.normal),e instanceof THREE.Face3?(j.a.copy(e.vertexNormals[0]),j.b.copy(e.vertexNormals[1]),j.c.copy(e.vertexNormals[2])):(j.a.copy(e.vertexNormals[0]),j.b.copy(e.vertexNormals[1]),j.c.copy(e.vertexNormals[2]),j.d.copy(e.vertexNormals[3]))}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,
e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){function a(a,b,c,d,e,f,u){h=a.vertices[b];i=a.vertices[c];j=a.vertices[d];l=g[e];m=g[f];n=g[u];p=i.x-h.x;o=j.x-h.x;s=i.y-h.y;t=j.y-h.y;r=i.z-h.z;z=j.z-h.z;w=m.u-l.u;q=n.u-l.u;E=m.v-l.v;A=n.v-l.v;v=1/(w*A-q*E);G.set((A*p-E*o)*v,(A*s-E*t)*v,(A*r-E*z)*v);P.set((w*o-q*p)*v,(w*t-q*s)*v,(w*z-q*r)*v);D[b].addSelf(G);D[c].addSelf(G);D[d].addSelf(G);C[b].addSelf(P);C[c].addSelf(P);C[d].addSelf(P)}var b,c,d,e,f,g,h,i,j,l,m,n,p,o,s,t,r,z,
w,q,E,A,v,u,D=[],C=[],G=new THREE.Vector3,P=new THREE.Vector3,B=new THREE.Vector3,K=new THREE.Vector3,H=new THREE.Vector3;b=0;for(c=this.vertices.length;b<c;b++)D[b]=new THREE.Vector3,C[b]=new THREE.Vector3;b=0;for(c=this.faces.length;b<c;b++)f=this.faces[b],g=this.faceVertexUvs[0][b],f instanceof THREE.Face3?a(this,f.a,f.b,f.c,0,1,2):f instanceof THREE.Face4&&(a(this,f.a,f.b,f.d,0,1,3),a(this,f.b,f.c,f.d,1,2,3));var I=["a","b","c","d"];b=0;for(c=this.faces.length;b<c;b++){f=this.faces[b];for(d=0;d<
f.vertexNormals.length;d++)H.copy(f.vertexNormals[d]),e=f[I[d]],u=D[e],B.copy(u),B.subSelf(H.multiplyScalar(H.dot(u))).normalize(),K.cross(f.vertexNormals[d],u),e=K.dot(C[e]),e=0>e?-1:1,f.vertexTangents[d]=new THREE.Vector4(B.x,B.y,B.z,e)}this.hasTangents=!0},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){this.boundingBox||(this.boundingBox={min:new THREE.Vector3,max:new THREE.Vector3});
if(0<this.vertices.length){var a;a=this.vertices[0];this.boundingBox.min.copy(a);this.boundingBox.max.copy(a);for(var b=this.boundingBox.min,c=this.boundingBox.max,d=1,e=this.vertices.length;d<e;d++)(a=this.vertices[d],a.x<b.x?b.x=a.x:a.x>c.x&&(c.x=a.x),a.y<b.y?b.y=a.y:a.y>c.y&&(c.y=a.y),a.z<b.z)?b.z=a.z:a.z>c.z&&(c.z=a.z)}else this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0)},computeBoundingSphere:function(){var a=0;null===this.boundingSphere&&(this.boundingSphere={radius:0});for(var b=
0,c=this.vertices.length;b<c;b++){var d=this.vertices[b].lengthSq();d>a&&(a=d)}this.boundingSphere.radius=Math.sqrt(a)},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g,h,i;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=[Math.round(d.x*e),Math.round(d.y*e),Math.round(d.z*e)].join("_"),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];f=0;for(g=this.faces.length;f<g;f++)if(a=this.faces[f],a instanceof THREE.Face3)a.a=c[a.a],a.b=c[a.b],a.c=c[a.c];
else if(a instanceof THREE.Face4){a.a=c[a.a];a.b=c[a.b];a.c=c[a.c];a.d=c[a.d];d=[a.a,a.b,a.c,a.d];for(e=3;0<e;e--)if(d.indexOf(a["abcd"[e]])!==e){d.splice(e,1);this.faces[f]=new THREE.Face3(d[0],d[1],d[2],a.normal,a.color,a.materialIndex);d=0;for(h=this.faceVertexUvs.length;d<h;d++)(i=this.faceVertexUvs[d][f])&&i.splice(e,1);this.faces[f].vertexColors=a.vertexColors;break}}c=this.vertices.length-b.length;this.vertices=b;return c},clone:function(){for(var a=new THREE.Geometry,b=this.vertices,c=0,d=
b.length;c<d;c++)a.vertices.push(b[c].clone());b=this.faces;c=0;for(d=b.length;c<d;c++)a.faces.push(b[c].clone());b=this.faceVertexUvs[0];c=0;for(d=b.length;c<d;c++){for(var e=b[c],f=[],g=0,h=e.length;g<h;g++)f.push(new THREE.UV(e[g].u,e[g].v));a.faceVertexUvs[0].push(f)}return a},deallocate:function(){var a=THREE.GeometryLibrary.indexOf(this);-1!==a&&THREE.GeometryLibrary.splice(a,1)}};THREE.GeometryIdCount=0;THREE.GeometryLibrary=[];
THREE.BufferGeometry=function(){THREE.GeometryLibrary.push(this);this.id=THREE.GeometryIdCount++;this.attributes={};this.dynamic=!1;this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.morphTargets=[]};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,applyMatrix:function(a){var b,c;this.attributes.position&&(b=this.attributes.position.array);this.attributes.normal&&(c=this.attributes.normal.array);void 0!==b&&(a.multiplyVector3Array(b),this.verticesNeedUpdate=!0);void 0!==c&&(b=new THREE.Matrix3,b.getInverse(a).transpose(),b.multiplyVector3Array(c),this.normalizeNormals(),this.normalsNeedUpdate=!0)},computeBoundingBox:function(){this.boundingBox||(this.boundingBox={min:new THREE.Vector3(Infinity,
Infinity,Infinity),max:new THREE.Vector3(-Infinity,-Infinity,-Infinity)});var a=this.attributes.position.array;if(a)for(var b=this.boundingBox,c,d,e,f=0,g=a.length;f<g;f+=3)(c=a[f],d=a[f+1],e=a[f+2],c<b.min.x?b.min.x=c:c>b.max.x&&(b.max.x=c),d<b.min.y?b.min.y=d:d>b.max.y&&(b.max.y=d),e<b.min.z)?b.min.z=e:e>b.max.z&&(b.max.z=e);if(void 0===a||0===a.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0)},computeBoundingSphere:function(){this.boundingSphere||(this.boundingSphere={radius:0});
var a=this.attributes.position.array;if(a){for(var b,c=0,d,e,f=0,g=a.length;f<g;f+=3)b=a[f],d=a[f+1],e=a[f+2],b=b*b+d*d+e*e,b>c&&(c=b);this.boundingSphere.radius=Math.sqrt(c)}},computeVertexNormals:function(){if(this.attributes.position&&this.attributes.index){var a,b,c,d;a=this.attributes.position.array.length;if(void 0===this.attributes.normal)this.attributes.normal={itemSize:3,array:new Float32Array(a),numItems:a};else{a=0;for(b=this.attributes.normal.array.length;a<b;a++)this.attributes.normal.array[a]=
0}var e=this.offsets,f=this.attributes.index.array,g=this.attributes.position.array,h=this.attributes.normal.array,i,j,l,m,n,p,o=new THREE.Vector3,s=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector3,z=new THREE.Vector3;c=0;for(d=e.length;c<d;++c){b=e[c].start;i=e[c].count;var w=e[c].index;a=b;for(b+=i;a<b;a+=3)i=w+f[a],j=w+f[a+1],l=w+f[a+2],m=g[3*i],n=g[3*i+1],p=g[3*i+2],o.set(m,n,p),m=g[3*j],n=g[3*j+1],p=g[3*j+2],s.set(m,n,p),m=g[3*l],n=g[3*l+1],p=g[3*l+2],t.set(m,n,p),r.sub(t,s),z.sub(o,
s),r.crossSelf(z),h[3*i]+=r.x,h[3*i+1]+=r.y,h[3*i+2]+=r.z,h[3*j]+=r.x,h[3*j+1]+=r.y,h[3*j+2]+=r.z,h[3*l]+=r.x,h[3*l+1]+=r.y,h[3*l+2]+=r.z}this.normalizeNormals();this.normalsNeedUpdate=!0}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},computeTangents:function(){function a(a){ga.x=d[3*a];ga.y=d[3*a+1];ga.z=d[3*a+2];M.copy(ga);Q=i[a];O.copy(Q);O.subSelf(ga.multiplyScalar(ga.dot(Q))).normalize();
R.cross(M,Q);Z=R.dot(j[a]);J=0>Z?-1:1;h[4*a]=O.x;h[4*a+1]=O.y;h[4*a+2]=O.z;h[4*a+3]=J}if(void 0===this.attributes.index||void 0===this.attributes.position||void 0===this.attributes.normal||void 0===this.attributes.uv)console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var b=this.attributes.index.array,c=this.attributes.position.array,d=this.attributes.normal.array,e=this.attributes.uv.array,f=c.length/3;if(void 0===this.attributes.tangent){var g=
4*f;this.attributes.tangent={itemSize:4,array:new Float32Array(g),numItems:g}}for(var h=this.attributes.tangent.array,i=[],j=[],g=0;g<f;g++)i[g]=new THREE.Vector3,j[g]=new THREE.Vector3;var l,m,n,p,o,s,t,r,z,w,q,E,A,v,u,f=new THREE.Vector3,g=new THREE.Vector3,D,C,G,P,B,K,H,I=this.offsets;G=0;for(P=I.length;G<P;++G){C=I[G].start;B=I[G].count;var N=I[G].index;D=C;for(C+=B;D<C;D+=3)B=N+b[D],K=N+b[D+1],H=N+b[D+2],l=c[3*B],m=c[3*B+1],n=c[3*B+2],p=c[3*K],o=c[3*K+1],s=c[3*K+2],t=c[3*H],r=c[3*H+1],z=c[3*
H+2],w=e[2*B],q=e[2*B+1],E=e[2*K],A=e[2*K+1],v=e[2*H],u=e[2*H+1],p-=l,l=t-l,o-=m,m=r-m,s-=n,n=z-n,E-=w,w=v-w,A-=q,q=u-q,u=1/(E*q-w*A),f.set((q*p-A*l)*u,(q*o-A*m)*u,(q*s-A*n)*u),g.set((E*l-w*p)*u,(E*m-w*o)*u,(E*n-w*s)*u),i[B].addSelf(f),i[K].addSelf(f),i[H].addSelf(f),j[B].addSelf(g),j[K].addSelf(g),j[H].addSelf(g)}var O=new THREE.Vector3,R=new THREE.Vector3,ga=new THREE.Vector3,M=new THREE.Vector3,J,Q,Z;G=0;for(P=I.length;G<P;++G){C=I[G].start;B=I[G].count;N=I[G].index;D=C;for(C+=B;D<C;D+=3)B=N+b[D],
K=N+b[D+1],H=N+b[D+2],a(B),a(K),a(H)}this.tangentsNeedUpdate=this.hasTangents=!0}},deallocate:function(){var a=THREE.GeometryLibrary.indexOf(this);-1!==a&&THREE.GeometryLibrary.splice(a,1)}};
THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,i,j,l,m,n;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:
f+2;j=this.points[c[0]];l=this.points[c[1]];m=this.points[c[2]];n=this.points[c[3]];h=g*g;i=g*h;d.x=b(j.x,l.x,m.x,n.x,g,h,i);d.y=b(j.y,l.y,m.y,n.y,g,h,i);d.z=b(j.z,l.z,m.z,n.z,g,h,i);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,g=new THREE.Vector3,h=[],i=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),g.copy(d),i+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(h[b]=i,e=b);h[h.length]=i;return{chunks:h,total:i}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],i=new THREE.Vector3,j=this.getLength();h.push(i.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=j.chunks[b]-j.chunks[b-1];g=Math.ceil(a*c/j.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+c*(1/g)*(f-e),d=this.getPoint(d),
h.push(i.copy(d).clone());h.push(i.copy(this.points[b]).clone())}this.points=h}};THREE.Camera=function(){THREE.Object3D.call(this);this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4;this.projectionMatrixInverse=new THREE.Matrix4};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);
THREE.Camera.prototype.lookAt=function(a){this.matrix.lookAt(this.position,a,this.up);!0===this.rotationAutoUpdate&&(!1===this.useQuaternion?this.rotation.setEulerFromRotationMatrix(this.matrix,this.eulerOrder):this.quaternion.copy(this.matrix.decompose()[1]))};THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:0.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};
THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){this.projectionMatrix.makeOrthographic(this.left,this.right,this.top,this.bottom,this.near,this.far)};THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:0.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);
THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*Math.atan(b/(2*a))*(180/Math.PI);this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){if(this.fullWidth){var a=this.fullWidth/this.fullHeight,b=Math.tan(this.fov*Math.PI/360)*this.near,c=-b,d=a*c,a=Math.abs(a*b-d),c=Math.abs(b-c);this.projectionMatrix.makeFrustum(d+this.x*a/this.fullWidth,d+(this.x+this.width)*a/this.fullWidth,b-(this.y+this.height)*c/this.fullHeight,b-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(this.fov,this.aspect,this.near,this.far)};
THREE.Light=function(a){THREE.Object3D.call(this);this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.AmbientLight=function(a){THREE.Light.call(this,a)};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);
THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.position=new THREE.Vector3(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=!1;this.shadowCascadeOffset=
new THREE.Vector3(0,0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,0.99,0.998];this.shadowCascadeFarZ=[0.99,0.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);
THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.groundColor=new THREE.Color(b);this.position=new THREE.Vector3(0,100,0);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight=function(a,b,c){THREE.Light.call(this,a);this.position=new THREE.Vector3(0,0,0);this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);
THREE.SpotLight=function(a,b,c,d,e){THREE.Light.call(this,a);this.position=new THREE.Vector3(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/2;this.exponent=void 0!==e?e:10;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowMatrix=this.shadowCamera=
this.shadowMapSize=this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:"anonymous",addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/
a.total).toFixed(0)+"%"):b+((a.loaded/1E3).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");a.pop();return(1>a.length?".":a.join("/"))+"/"},initMaterials:function(a,b){for(var c=[],d=0;d<a.length;++d)c[d]=THREE.Loader.prototype.createMaterial(a[d],b);return c},needsTangents:function(a){for(var b=0,c=a.length;b<c;b++)if(a[b]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=Math.log(a)/Math.LN2;return Math.floor(a)==
a}function d(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function e(a,e,f,h,i,j,t){var r=f.toLowerCase().endsWith(".dds"),z=b+"/"+f;if(r){var w=THREE.ImageUtils.loadCompressedTexture(z);a[e]=w}else w=document.createElement("canvas"),a[e]=new THREE.Texture(w);a[e].sourceFile=f;if(h&&(a[e].repeat.set(h[0],h[1]),1!==h[0]&&(a[e].wrapS=THREE.RepeatWrapping),1!==h[1]))a[e].wrapT=THREE.RepeatWrapping;i&&a[e].offset.set(i[0],i[1]);if(j&&(f={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},
void 0!==f[j[0]]&&(a[e].wrapS=f[j[0]]),void 0!==f[j[1]]))a[e].wrapT=f[j[1]];t&&(a[e].anisotropy=t);if(!r){var q=a[e],a=new Image;a.onload=function(){if(!c(this.width)||!c(this.height)){var a=d(this.width),b=d(this.height);q.image.width=a;q.image.height=b;q.image.getContext("2d").drawImage(this,0,0,a,b)}else q.image=this;q.needsUpdate=true};a.crossOrigin=g.crossOrigin;a.src=z}}function f(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var g=this,h="MeshLambertMaterial",i={color:15658734,opacity:1,map:null,
lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var j=a.shading.toLowerCase();"phong"===j?h="MeshPhongMaterial":"basic"===j&&(h="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(i.blending=THREE[a.blending]);if(void 0!==a.transparent||1>a.opacity)i.transparent=a.transparent;void 0!==a.depthTest&&(i.depthTest=a.depthTest);void 0!==a.depthWrite&&(i.depthWrite=a.depthWrite);void 0!==a.visible&&(i.visible=a.visible);void 0!==a.flipSided&&(i.side=THREE.BackSide);
void 0!==a.doubleSided&&(i.side=THREE.DoubleSide);void 0!==a.wireframe&&(i.wireframe=a.wireframe);void 0!==a.vertexColors&&("face"===a.vertexColors?i.vertexColors=THREE.FaceColors:a.vertexColors&&(i.vertexColors=THREE.VertexColors));a.colorDiffuse?i.color=f(a.colorDiffuse):a.DbgColor&&(i.color=a.DbgColor);a.colorSpecular&&(i.specular=f(a.colorSpecular));a.colorAmbient&&(i.ambient=f(a.colorAmbient));a.transparency&&(i.opacity=a.transparency);a.specularCoef&&(i.shininess=a.specularCoef);a.mapDiffuse&&
b&&e(i,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,a.mapDiffuseAnisotropy);a.mapLight&&b&&e(i,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&e(i,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&e(i,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&e(i,"specularMap",a.mapSpecular,a.mapSpecularRepeat,
a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapBumpScale&&(i.bumpScale=a.mapBumpScale);a.mapNormal?(h=THREE.ShaderUtils.lib.normal,j=THREE.UniformsUtils.clone(h.uniforms),j.tNormal.value=i.normalMap,a.mapNormalFactor&&j.uNormalScale.value.set(a.mapNormalFactor,a.mapNormalFactor),i.map&&(j.tDiffuse.value=i.map,j.enableDiffuse.value=!0),i.specularMap&&(j.tSpecular.value=i.specularMap,j.enableSpecular.value=!0),i.lightMap&&(j.tAO.value=i.lightMap,j.enableAO.value=!0),j.uDiffuseColor.value.setHex(i.color),
j.uSpecularColor.value.setHex(i.specular),j.uAmbientColor.value.setHex(i.ambient),j.uShininess.value=i.shininess,void 0!==i.opacity&&(j.uOpacity.value=i.opacity),i=new THREE.ShaderMaterial({fragmentShader:h.fragmentShader,vertexShader:h.vertexShader,uniforms:j,lights:!0,fog:!0})):i=new THREE[h](i);void 0!==a.DbgName&&(i.name=a.DbgName);return i}};THREE.BinaryLoader=function(a){THREE.Loader.call(this,a)};THREE.BinaryLoader.prototype=Object.create(THREE.Loader.prototype);
THREE.BinaryLoader.prototype.load=function(a,b,c,d){var c=c&&"string"===typeof c?c:this.extractUrlBase(a),d=d&&"string"===typeof d?d:this.extractUrlBase(a),e=this.showProgress?THREE.Loader.prototype.updateProgress:null;this.onLoadStart();this.loadAjaxJSON(this,a,b,c,d,e)};
THREE.BinaryLoader.prototype.loadAjaxJSON=function(a,b,c,d,e,f){var g=new XMLHttpRequest;g.onreadystatechange=function(){if(4==g.readyState)if(200==g.status||0==g.status){var h=JSON.parse(g.responseText);a.loadAjaxBuffers(h,c,e,d,f)}else console.error("THREE.BinaryLoader: Couldn't load ["+b+"] ["+g.status+"]")};g.open("GET",b,!0);g.send(null)};
THREE.BinaryLoader.prototype.loadAjaxBuffers=function(a,b,c,d,e){var f=new XMLHttpRequest,g=c+"/"+a.buffers,h=0;f.onreadystatechange=function(){if(4==f.readyState)if(200==f.status||0==f.status){var c=f.response;void 0===c&&(c=(new Uint8Array(f.responseBody)).buffer);THREE.BinaryLoader.prototype.createBinModel(c,b,d,a.materials)}else console.error("THREE.BinaryLoader: Couldn't load ["+g+"] ["+f.status+"]");else 3==f.readyState?e&&(0==h&&(h=f.getResponseHeader("Content-Length")),e({total:h,loaded:f.responseText.length})):
2==f.readyState&&(h=f.getResponseHeader("Content-Length"))};f.open("GET",g,!0);f.responseType="arraybuffer";f.send(null)};
THREE.BinaryLoader.prototype.createBinModel=function(a,b,c,d){var e=function(){var b,c,d,e,j,l,m,n,p,o,s,t,r,z,w,q;function E(a){return a%4?4-a%4:0}function A(a,b){return(new Uint8Array(a,b,1))[0]}function v(a,b){return(new Uint32Array(a,b,1))[0]}function u(b,c){var d,e,f,g,h,i,j,l=new Uint32Array(a,c,3*b);for(d=0;d<b;d++)e=l[3*d],f=l[3*d+1],g=l[3*d+2],h=N[2*e],e=N[2*e+1],i=N[2*f],j=N[2*f+1],f=N[2*g],g=N[2*g+1],K.faceVertexUvs[0].push([new THREE.UV(h,e),new THREE.UV(i,j),new THREE.UV(f,g)])}function D(b,
c){var d,e,f,g,h,i,j,l,n,m=new Uint32Array(a,c,4*b);for(d=0;d<b;d++)e=m[4*d],f=m[4*d+1],g=m[4*d+2],h=m[4*d+3],i=N[2*e],e=N[2*e+1],j=N[2*f],l=N[2*f+1],f=N[2*g],n=N[2*g+1],g=N[2*h],h=N[2*h+1],K.faceVertexUvs[0].push([new THREE.UV(i,e),new THREE.UV(j,l),new THREE.UV(f,n),new THREE.UV(g,h)])}function C(b,c,d){for(var e,f,g,h,c=new Uint32Array(a,c,3*b),i=new Uint16Array(a,d,b),d=0;d<b;d++)e=c[3*d],f=c[3*d+1],g=c[3*d+2],h=i[d],K.faces.push(new THREE.Face3(e,f,g,null,null,h))}function G(b,c,d){for(var e,
f,g,h,i,c=new Uint32Array(a,c,4*b),j=new Uint16Array(a,d,b),d=0;d<b;d++)e=c[4*d],f=c[4*d+1],g=c[4*d+2],h=c[4*d+3],i=j[d],K.faces.push(new THREE.Face4(e,f,g,h,null,null,i))}function P(b,c,d,e){for(var f,g,h,i,j,l,n,c=new Uint32Array(a,c,3*b),d=new Uint32Array(a,d,3*b),m=new Uint16Array(a,e,b),e=0;e<b;e++){f=c[3*e];g=c[3*e+1];h=c[3*e+2];j=d[3*e];l=d[3*e+1];n=d[3*e+2];i=m[e];var o=I[3*l],p=I[3*l+1];l=I[3*l+2];var s=I[3*n],r=I[3*n+1];n=I[3*n+2];K.faces.push(new THREE.Face3(f,g,h,[new THREE.Vector3(I[3*
j],I[3*j+1],I[3*j+2]),new THREE.Vector3(o,p,l),new THREE.Vector3(s,r,n)],null,i))}}function B(b,c,d,e){for(var f,g,h,i,j,l,n,m,o,c=new Uint32Array(a,c,4*b),d=new Uint32Array(a,d,4*b),p=new Uint16Array(a,e,b),e=0;e<b;e++){f=c[4*e];g=c[4*e+1];h=c[4*e+2];i=c[4*e+3];l=d[4*e];n=d[4*e+1];m=d[4*e+2];o=d[4*e+3];j=p[e];var s=I[3*n],r=I[3*n+1];n=I[3*n+2];var q=I[3*m],t=I[3*m+1];m=I[3*m+2];var u=I[3*o],v=I[3*o+1];o=I[3*o+2];K.faces.push(new THREE.Face4(f,g,h,i,[new THREE.Vector3(I[3*l],I[3*l+1],I[3*l+2]),new THREE.Vector3(s,
r,n),new THREE.Vector3(q,t,m),new THREE.Vector3(u,v,o)],null,j))}}var K=this,H=0,I=[],N=[],O,R,ga;THREE.Geometry.call(this);q=a;R=H;z=new Uint8Array(q,R,12);o="";for(r=0;12>r;r++)o+=String.fromCharCode(z[R+r]);b=A(q,R+12);A(q,R+13);A(q,R+14);A(q,R+15);c=A(q,R+16);d=A(q,R+17);e=A(q,R+18);j=A(q,R+19);l=v(q,R+20);m=v(q,R+20+4);n=v(q,R+20+8);p=v(q,R+20+12);o=v(q,R+20+16);s=v(q,R+20+20);t=v(q,R+20+24);r=v(q,R+20+28);z=v(q,R+20+32);w=v(q,R+20+36);q=v(q,R+20+40);H+=b;R=3*c+j;ga=4*c+j;O=p*R;b=o*(R+3*d);c=
s*(R+3*e);j=t*(R+3*d+3*e);R=r*ga;d=z*(ga+4*d);e=w*(ga+4*e);ga=H;var H=new Float32Array(a,H,3*l),M,J,Q,Z;for(M=0;M<l;M++)J=H[3*M],Q=H[3*M+1],Z=H[3*M+2],K.vertices.push(new THREE.Vector3(J,Q,Z));l=H=ga+3*l*Float32Array.BYTES_PER_ELEMENT;if(m){H=new Int8Array(a,H,3*m);for(ga=0;ga<m;ga++)M=H[3*ga],J=H[3*ga+1],Q=H[3*ga+2],I.push(M/127,J/127,Q/127)}H=l+3*m*Int8Array.BYTES_PER_ELEMENT;m=H+=E(3*m);if(n){l=new Float32Array(a,H,2*n);for(H=0;H<n;H++)ga=l[2*H],M=l[2*H+1],N.push(ga,M)}n=H=m+2*n*Float32Array.BYTES_PER_ELEMENT;
O=n+O+E(2*p);m=O+b+E(2*o);b=m+c+E(2*s);c=b+j+E(2*t);R=c+R+E(2*r);j=R+d+E(2*z);d=j+e+E(2*w);s&&(e=m+3*s*Uint32Array.BYTES_PER_ELEMENT,C(s,m,e+3*s*Uint32Array.BYTES_PER_ELEMENT),u(s,e));t&&(s=b+3*t*Uint32Array.BYTES_PER_ELEMENT,e=s+3*t*Uint32Array.BYTES_PER_ELEMENT,P(t,b,s,e+3*t*Uint32Array.BYTES_PER_ELEMENT),u(t,e));w&&(t=j+4*w*Uint32Array.BYTES_PER_ELEMENT,G(w,j,t+4*w*Uint32Array.BYTES_PER_ELEMENT),D(w,t));q&&(w=d+4*q*Uint32Array.BYTES_PER_ELEMENT,t=w+4*q*Uint32Array.BYTES_PER_ELEMENT,B(q,d,w,t+4*
q*Uint32Array.BYTES_PER_ELEMENT),D(q,t));p&&C(p,n,n+3*p*Uint32Array.BYTES_PER_ELEMENT);o&&(p=O+3*o*Uint32Array.BYTES_PER_ELEMENT,P(o,O,p,p+3*o*Uint32Array.BYTES_PER_ELEMENT));r&&G(r,c,c+4*r*Uint32Array.BYTES_PER_ELEMENT);z&&(o=R+4*z*Uint32Array.BYTES_PER_ELEMENT,B(z,R,o,o+4*z*Uint32Array.BYTES_PER_ELEMENT));this.computeCentroids();this.computeFaceNormals()};e.prototype=Object.create(THREE.Geometry.prototype);e=new e(c);c=this.initMaterials(d,c);this.needsTangents(c)&&e.computeTangents();b(e,c)};
THREE.ImageLoader=function(){THREE.EventTarget.call(this);this.crossOrigin=null};THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b){var c=this;void 0===b&&(b=new Image);b.addEventListener("load",function(){c.dispatchEvent({type:"load",content:b})},!1);b.addEventListener("error",function(){c.dispatchEvent({type:"error",message:"Couldn't load URL ["+a+"]"})},!1);c.crossOrigin&&(b.crossOrigin=c.crossOrigin);b.src=a}};
THREE.JSONLoader=function(a){THREE.Loader.call(this,a);this.withCredentials=!1};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.load=function(a,b,c){c=c&&"string"===typeof c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,g=0;f.withCredentials=this.withCredentials;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var h=JSON.parse(f.responseText);a.createModel(h,c,d)}else console.warn("THREE.JSONLoader: ["+b+"] seems to be unreachable or file there is empty");a.onLoadComplete()}else console.error("THREE.JSONLoader: Couldn't load ["+b+"] ["+f.status+"]");else f.readyState===
f.LOADING?e&&(0===g&&(g=f.getResponseHeader("Content-Length")),e({total:g,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&(g=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.send(null)};
THREE.JSONLoader.prototype.createModel=function(a,b,c){var d=new THREE.Geometry,e=void 0!==a.scale?1/a.scale:1,f,g,h,i,j,l,m,n,p,o,s,t,r,z,w,q=a.faces;o=a.vertices;var E=a.normals,A=a.colors,v=0;for(f=0;f<a.uvs.length;f++)a.uvs[f].length&&v++;for(f=0;f<v;f++)d.faceUvs[f]=[],d.faceVertexUvs[f]=[];i=0;for(j=o.length;i<j;)l=new THREE.Vector3,l.x=o[i++]*e,l.y=o[i++]*e,l.z=o[i++]*e,d.vertices.push(l);i=0;for(j=q.length;i<j;){o=q[i++];l=o&1;h=o&2;f=o&4;g=o&8;n=o&16;m=o&32;s=o&64;o&=128;l?(t=new THREE.Face4,
t.a=q[i++],t.b=q[i++],t.c=q[i++],t.d=q[i++],l=4):(t=new THREE.Face3,t.a=q[i++],t.b=q[i++],t.c=q[i++],l=3);h&&(h=q[i++],t.materialIndex=h);h=d.faces.length;if(f)for(f=0;f<v;f++)r=a.uvs[f],p=q[i++],w=r[2*p],p=r[2*p+1],d.faceUvs[f][h]=new THREE.UV(w,p);if(g)for(f=0;f<v;f++){r=a.uvs[f];z=[];for(g=0;g<l;g++)p=q[i++],w=r[2*p],p=r[2*p+1],z[g]=new THREE.UV(w,p);d.faceVertexUvs[f][h]=z}n&&(n=3*q[i++],g=new THREE.Vector3,g.x=E[n++],g.y=E[n++],g.z=E[n],t.normal=g);if(m)for(f=0;f<l;f++)n=3*q[i++],g=new THREE.Vector3,
g.x=E[n++],g.y=E[n++],g.z=E[n],t.vertexNormals.push(g);s&&(m=q[i++],m=new THREE.Color(A[m]),t.color=m);if(o)for(f=0;f<l;f++)m=q[i++],m=new THREE.Color(A[m]),t.vertexColors.push(m);d.faces.push(t)}if(a.skinWeights){i=0;for(j=a.skinWeights.length;i<j;i+=2)q=a.skinWeights[i],E=a.skinWeights[i+1],d.skinWeights.push(new THREE.Vector4(q,E,0,0))}if(a.skinIndices){i=0;for(j=a.skinIndices.length;i<j;i+=2)q=a.skinIndices[i],E=a.skinIndices[i+1],d.skinIndices.push(new THREE.Vector4(q,E,0,0))}d.bones=a.bones;
d.animation=a.animation;if(void 0!==a.morphTargets){i=0;for(j=a.morphTargets.length;i<j;i++){d.morphTargets[i]={};d.morphTargets[i].name=a.morphTargets[i].name;d.morphTargets[i].vertices=[];A=d.morphTargets[i].vertices;v=a.morphTargets[i].vertices;q=0;for(E=v.length;q<E;q+=3)o=new THREE.Vector3,o.x=v[q]*e,o.y=v[q+1]*e,o.z=v[q+2]*e,A.push(o)}}if(void 0!==a.morphColors){i=0;for(j=a.morphColors.length;i<j;i++){d.morphColors[i]={};d.morphColors[i].name=a.morphColors[i].name;d.morphColors[i].colors=[];
E=d.morphColors[i].colors;A=a.morphColors[i].colors;e=0;for(q=A.length;e<q;e+=3)v=new THREE.Color(16755200),v.setRGB(A[e],A[e+1],A[e+2]),E.push(v)}}d.computeCentroids();d.computeFaceNormals();a=this.initMaterials(a.materials,c);this.needsTangents(a)&&d.computeTangents();b(d,a)};
THREE.LoadingMonitor=function(){THREE.EventTarget.call(this);var a=this,b=0,c=0,d=function(){b++;a.dispatchEvent({type:"progress",loaded:b,total:c});b===c&&a.dispatchEvent({type:"load"})};this.add=function(a){c++;a.addEventListener("load",d,!1)}};
THREE.SceneLoader=function(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){};this.callbackSync=function(){};this.callbackProgress=function(){};this.geometryHandlerMap={};this.hierarchyHandlerMap={};this.addGeometryHandler("ascii",THREE.JSONLoader);this.addGeometryHandler("binary",THREE.BinaryLoader)};THREE.SceneLoader.prototype.constructor=THREE.SceneLoader;
THREE.SceneLoader.prototype.load=function(a,b){var c=this,d=new XMLHttpRequest;d.onreadystatechange=function(){if(4===d.readyState)if(200===d.status||0===d.status){var e=JSON.parse(d.responseText);c.parse(e,b,a)}else console.error("THREE.SceneLoader: Couldn't load ["+a+"] ["+d.status+"]")};d.open("GET",a,!0);d.send(null)};THREE.SceneLoader.prototype.addGeometryHandler=function(a,b){this.geometryHandlerMap[a]={loaderClass:b}};
THREE.SceneLoader.prototype.addHierarchyHandler=function(a,b){this.hierarchyHandlerMap[a]={loaderClass:b}};
THREE.SceneLoader.prototype.parse=function(a,b,c){function d(a,b){return"relativeToHTML"==b?a:m+"/"+a}function e(){f(M.scene,Q.objects)}function f(a,b){for(var c in b)if(void 0===M.objects[c]){var e=b[c],g=null;if(e.type&&e.type in l.hierarchyHandlerMap&&void 0===e.loading){var i={},j;for(j in t)"type"!==j&&"url"!==j&&(i[j]=t[j]);C=M.materials[e.material];e.loading=!0;var n=l.hierarchyHandlerMap[e.type].loaderObject;n.addEventListener?(n.addEventListener("load",h(c,a,C,e)),n.load(d(e.url,Q.urlBaseType))):
n.options?n.load(d(e.url,Q.urlBaseType),h(c,a,C,e)):n.load(d(e.url,Q.urlBaseType),h(c,a,C,e),i)}else if(void 0!==e.geometry){if(D=M.geometries[e.geometry]){g=!1;C=M.materials[e.material];g=C instanceof THREE.ShaderMaterial;w=e.position;q=e.rotation;E=e.quaternion;A=e.scale;r=e.matrix;E=0;e.material||(C=new THREE.MeshFaceMaterial(M.face_materials[e.geometry]));C instanceof THREE.MeshFaceMaterial&&0===C.materials.length&&(C=new THREE.MeshFaceMaterial(M.face_materials[e.geometry]));if(C instanceof THREE.MeshFaceMaterial)for(i=
0;i<C.materials.length;i++)g=g||C.materials[i]instanceof THREE.ShaderMaterial;g&&D.computeTangents();e.skin?g=new THREE.SkinnedMesh(D,C):e.morph?(g=new THREE.MorphAnimMesh(D,C),void 0!==e.duration&&(g.duration=e.duration),void 0!==e.time&&(g.time=e.time),void 0!==e.mirroredLoop&&(g.mirroredLoop=e.mirroredLoop),C.morphNormals&&D.computeMorphNormals()):g=new THREE.Mesh(D,C);g.name=c;r?(g.matrixAutoUpdate=!1,g.matrix.set(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],
r[15])):(g.position.set(w[0],w[1],w[2]),E?(g.quaternion.set(E[0],E[1],E[2],E[3]),g.useQuaternion=!0):g.rotation.set(q[0],q[1],q[2]),g.scale.set(A[0],A[1],A[2]));g.visible=e.visible;g.castShadow=e.castShadow;g.receiveShadow=e.receiveShadow;a.add(g);M.objects[c]=g}}else"DirectionalLight"===e.type||"PointLight"===e.type||"AmbientLight"===e.type?(H=void 0!==e.color?e.color:16777215,I=void 0!==e.intensity?e.intensity:1,"DirectionalLight"===e.type?(w=e.direction,K=new THREE.DirectionalLight(H,I),K.position.set(w[0],
w[1],w[2]),e.target&&(J.push({object:K,targetName:e.target}),K.target=null)):"PointLight"===e.type?(w=e.position,z=e.distance,K=new THREE.PointLight(H,I,z),K.position.set(w[0],w[1],w[2])):"AmbientLight"===e.type&&(K=new THREE.AmbientLight(H)),a.add(K),K.name=c,M.lights[c]=K,M.objects[c]=K):"PerspectiveCamera"===e.type||"OrthographicCamera"===e.type?("PerspectiveCamera"===e.type?G=new THREE.PerspectiveCamera(e.fov,e.aspect,e.near,e.far):"OrthographicCamera"===e.type&&(G=new THREE.OrthographicCamera(v.left,
v.right,v.top,v.bottom,v.near,v.far)),w=e.position,G.position.set(w[0],w[1],w[2]),a.add(G),G.name=c,M.cameras[c]=G,M.objects[c]=G):(w=e.position,q=e.rotation,E=e.quaternion,A=e.scale,E=0,g=new THREE.Object3D,g.name=c,g.position.set(w[0],w[1],w[2]),E?(g.quaternion.set(E[0],E[1],E[2],E[3]),g.useQuaternion=!0):g.rotation.set(q[0],q[1],q[2]),g.scale.set(A[0],A[1],A[2]),g.visible=void 0!==e.visible?e.visible:!1,a.add(g),M.objects[c]=g,M.empties[c]=g);if(g){if(void 0!==e.properties)for(var m in e.properties)g.properties[m]=
e.properties[m];void 0!==e.children&&f(g,e.children)}}}function g(a){return function(b,c){M.geometries[a]=b;M.face_materials[a]=c;e();N-=1;l.onLoadComplete();j()}}function h(a,b,c,d){return function(f){var f=f.content?f.content:f.dae?f.scene:f,g=d.position,h=d.rotation,i=d.quaternion,n=d.scale;f.position.set(g[0],g[1],g[2]);i?(f.quaternion.set(i[0],i[1],i[2],i[3]),f.useQuaternion=!0):f.rotation.set(h[0],h[1],h[2]);f.scale.set(n[0],n[1],n[2]);c&&f.traverse(function(a){a.material=c});b.add(f);M.objects[a]=
f;e();N-=1;l.onLoadComplete();j()}}function i(a){return function(b,c){M.geometries[a]=b;M.face_materials[a]=c}}function j(){l.callbackProgress({totalModels:R,totalTextures:ga,loadedModels:R-N,loadedTextures:ga-O},M);l.onLoadProgress();if(0===N&&0===O){for(var a=0;a<J.length;a++){var c=J[a],d=M.objects[c.targetName];d?c.object.target=d:(c.object.target=new THREE.Object3D,M.scene.add(c.object.target));c.object.target.properties.targetInverse=c.object}b(M)}}var l=this,m=THREE.Loader.prototype.extractUrlBase(c),
n,p,o,s,t,r,z,w,q,E,A,v,u,D,C,G,P,B,K,H,I,N,O,R,ga,M,J=[],Q=a,Z;for(Z in this.geometryHandlerMap)a=this.geometryHandlerMap[Z].loaderClass,this.geometryHandlerMap[Z].loaderObject=new a;for(Z in this.hierarchyHandlerMap)a=this.hierarchyHandlerMap[Z].loaderClass,this.hierarchyHandlerMap[Z].loaderObject=new a;O=N=0;M={scene:new THREE.Scene,geometries:{},face_materials:{},materials:{},textures:{},objects:{},cameras:{},lights:{},fogs:{},empties:{}};if(Q.transform&&(Z=Q.transform.position,a=Q.transform.rotation,
c=Q.transform.scale,Z&&M.scene.position.set(Z[0],Z[1],Z[2]),a&&M.scene.rotation.set(a[0],a[1],a[2]),c&&M.scene.scale.set(c[0],c[1],c[2]),Z||a||c))M.scene.updateMatrix(),M.scene.updateMatrixWorld();Z=function(a){return function(){O-=a;j();l.onLoadComplete()}};for(o in Q.fogs)a=Q.fogs[o],"linear"===a.type?P=new THREE.Fog(0,a.near,a.far):"exp2"===a.type&&(P=new THREE.FogExp2(0,a.density)),v=a.color,P.color.setRGB(v[0],v[1],v[2]),M.fogs[o]=P;for(n in Q.geometries)t=Q.geometries[n],t.type in this.geometryHandlerMap&&
(N+=1,l.onLoadStart());for(var L in Q.objects)o=Q.objects[L],o.type&&o.type in this.hierarchyHandlerMap&&(N+=1,l.onLoadStart());R=N;for(n in Q.geometries)if(t=Q.geometries[n],"cube"===t.type)D=new THREE.CubeGeometry(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments),M.geometries[n]=D;else if("plane"===t.type)D=new THREE.PlaneGeometry(t.width,t.height,t.widthSegments,t.heightSegments),M.geometries[n]=D;else if("sphere"===t.type)D=new THREE.SphereGeometry(t.radius,t.widthSegments,
t.heightSegments),M.geometries[n]=D;else if("cylinder"===t.type)D=new THREE.CylinderGeometry(t.topRad,t.botRad,t.height,t.radSegs,t.heightSegs),M.geometries[n]=D;else if("torus"===t.type)D=new THREE.TorusGeometry(t.radius,t.tube,t.segmentsR,t.segmentsT),M.geometries[n]=D;else if("icosahedron"===t.type)D=new THREE.IcosahedronGeometry(t.radius,t.subdivisions),M.geometries[n]=D;else if(t.type in this.geometryHandlerMap){L={};for(B in t)"type"!==B&&"url"!==B&&(L[B]=t[B]);this.geometryHandlerMap[t.type].loaderObject.load(d(t.url,
Q.urlBaseType),g(n),L)}else"embedded"===t.type&&(L=Q.embeds[t.id],L.metadata=Q.metadata,L&&this.geometryHandlerMap.ascii.loaderObject.createModel(L,i(n),""));for(s in Q.textures)if(n=Q.textures[s],n.url instanceof Array){O+=n.url.length;for(B=0;B<n.url.length;B++)l.onLoadStart()}else O+=1,l.onLoadStart();ga=O;for(s in Q.textures){n=Q.textures[s];void 0!==n.mapping&&void 0!==THREE[n.mapping]&&(n.mapping=new THREE[n.mapping]);if(n.url instanceof Array){L=n.url.length;o=[];for(B=0;B<L;B++)o[B]=d(n.url[B],
Q.urlBaseType);B=(B=o[0].endsWith(".dds"))?THREE.ImageUtils.loadCompressedTextureCube(o,n.mapping,Z(L)):THREE.ImageUtils.loadTextureCube(o,n.mapping,Z(L))}else{B=n.url.toLowerCase().endsWith(".dds");L=d(n.url,Q.urlBaseType);o=Z(1);B=B?THREE.ImageUtils.loadCompressedTexture(L,n.mapping,o):THREE.ImageUtils.loadTexture(L,n.mapping,o);void 0!==THREE[n.minFilter]&&(B.minFilter=THREE[n.minFilter]);void 0!==THREE[n.magFilter]&&(B.magFilter=THREE[n.magFilter]);n.anisotropy&&(B.anisotropy=n.anisotropy);if(n.repeat&&
(B.repeat.set(n.repeat[0],n.repeat[1]),1!==n.repeat[0]&&(B.wrapS=THREE.RepeatWrapping),1!==n.repeat[1]))B.wrapT=THREE.RepeatWrapping;n.offset&&B.offset.set(n.offset[0],n.offset[1]);if(n.wrap&&(L={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==L[n.wrap[0]]&&(B.wrapS=L[n.wrap[0]]),void 0!==L[n.wrap[1]]))B.wrapT=L[n.wrap[1]]}M.textures[s]=B}for(p in Q.materials){r=Q.materials[p];for(u in r.parameters)"envMap"===u||"map"===u||"lightMap"===u||"bumpMap"===u?r.parameters[u]=M.textures[r.parameters[u]]:
"shading"===u?r.parameters[u]="flat"===r.parameters[u]?THREE.FlatShading:THREE.SmoothShading:"side"===u?r.parameters[u]="double"==r.parameters[u]?THREE.DoubleSide:"back"==r.parameters[u]?THREE.BackSide:THREE.FrontSide:"blending"===u?r.parameters[u]=r.parameters[u]in THREE?THREE[r.parameters[u]]:THREE.NormalBlending:"combine"===u?r.parameters[u]="MixOperation"==r.parameters[u]?THREE.MixOperation:THREE.MultiplyOperation:"vertexColors"===u?"face"==r.parameters[u]?r.parameters[u]=THREE.FaceColors:r.parameters[u]&&
(r.parameters[u]=THREE.VertexColors):"wrapRGB"===u&&(s=r.parameters[u],r.parameters[u]=new THREE.Vector3(s[0],s[1],s[2]));void 0!==r.parameters.opacity&&1>r.parameters.opacity&&(r.parameters.transparent=!0);r.parameters.normalMap?(s=THREE.ShaderUtils.lib.normal,Z=THREE.UniformsUtils.clone(s.uniforms),n=r.parameters.color,B=r.parameters.specular,L=r.parameters.ambient,o=r.parameters.shininess,Z.tNormal.value=M.textures[r.parameters.normalMap],r.parameters.normalScale&&Z.uNormalScale.value.set(r.parameters.normalScale[0],
r.parameters.normalScale[1]),r.parameters.map&&(Z.tDiffuse.value=r.parameters.map,Z.enableDiffuse.value=!0),r.parameters.envMap&&(Z.tCube.value=r.parameters.envMap,Z.enableReflection.value=!0,Z.uReflectivity.value=r.parameters.reflectivity),r.parameters.lightMap&&(Z.tAO.value=r.parameters.lightMap,Z.enableAO.value=!0),r.parameters.specularMap&&(Z.tSpecular.value=M.textures[r.parameters.specularMap],Z.enableSpecular.value=!0),r.parameters.displacementMap&&(Z.tDisplacement.value=M.textures[r.parameters.displacementMap],
Z.enableDisplacement.value=!0,Z.uDisplacementBias.value=r.parameters.displacementBias,Z.uDisplacementScale.value=r.parameters.displacementScale),Z.uDiffuseColor.value.setHex(n),Z.uSpecularColor.value.setHex(B),Z.uAmbientColor.value.setHex(L),Z.uShininess.value=o,r.parameters.opacity&&(Z.uOpacity.value=r.parameters.opacity),C=new THREE.ShaderMaterial({fragmentShader:s.fragmentShader,vertexShader:s.vertexShader,uniforms:Z,lights:!0,fog:!0})):C=new THREE[r.type](r.parameters);M.materials[p]=C}for(p in Q.materials)if(r=
Q.materials[p],r.parameters.materials){u=[];for(B=0;B<r.parameters.materials.length;B++)u.push(M.materials[r.parameters.materials[B]]);M.materials[p].materials=u}e();M.cameras&&Q.defaults.camera&&(M.currentCamera=M.cameras[Q.defaults.camera]);M.fogs&&Q.defaults.fog&&(M.scene.fog=M.fogs[Q.defaults.fog]);v=Q.defaults.bgcolor;M.bgColor=new THREE.Color;M.bgColor.setRGB(v[0],v[1],v[2]);M.bgColorAlpha=Q.defaults.bgalpha;l.callbackSync(M);j()};
THREE.TextureLoader=function(){THREE.EventTarget.call(this);this.crossOrigin=null};THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a){var b=this,c=new Image;c.addEventListener("load",function(){var a=new THREE.Texture(c);a.needsUpdate=!0;b.dispatchEvent({type:"load",content:a})},!1);c.addEventListener("error",function(){b.dispatchEvent({type:"error",message:"Couldn't load URL ["+a+"]"})},!1);b.crossOrigin&&(c.crossOrigin=b.crossOrigin);c.src=a}};
THREE.Material=function(){THREE.MaterialLibrary.push(this);this.id=THREE.MaterialIdCount++;this.name="";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.depthWrite=this.depthTest=!0;this.polygonOffset=!1;this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.overdraw=!1;this.needsUpdate=this.visible=!0};
THREE.Material.prototype.setValues=function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color&&c instanceof THREE.Color?d.copy(c):d instanceof THREE.Color&&"number"===typeof c?d.setHex(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]=c}}};
THREE.Material.prototype.clone=function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;
a.visible=this.visible;return a};THREE.Material.prototype.deallocate=function(){var a=THREE.MaterialLibrary.indexOf(this);-1!==a&&THREE.MaterialLibrary.splice(a,1)};THREE.MaterialIdCount=0;THREE.MaterialLibrary=[];THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};
THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineDashedMaterial.prototype.clone=function(){var a=new THREE.LineDashedMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.scale=this.scale;a.dashSize=this.dashSize;a.gapSize=this.gapSize;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};
THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=
this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};
THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap=
"round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;
a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.metal=!1;this.perPixel=!0;this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;
this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.perPixel=this.perPixel;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);
a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.wireframe=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};
THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.shading=THREE.FlatShading;this.wireframe=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};
THREE.MeshFaceMaterial=function(a){this.materials=a instanceof Array?a:[]};THREE.MeshFaceMaterial.prototype.clone=function(){return new THREE.MeshFaceMaterial(this.materials.slice(0))};THREE.ParticleBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.ParticleBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ParticleBasicMaterial.prototype.clone=function(){var a=new THREE.ParticleBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleCanvasMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.program=function(){};this.setValues(a)};THREE.ParticleCanvasMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ParticleCanvasMaterial.prototype.clone=function(){var a=new THREE.ParticleCanvasMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.program=this.program;return a};THREE.ParticleDOMMaterial=function(a){this.element=a};THREE.ParticleDOMMaterial.prototype.clone=function(){return new THREE.ParticleDOMMaterial(this.element)};
THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.vertexShader=this.fragmentShader="void main() {}";this.uniforms={};this.defines={};this.attributes=null;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=THREE.UniformsUtils.clone(this.uniforms);a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=
this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.Texture=function(a,b,c,d,e,f,g,h,i){THREE.TextureLibrary.push(this);this.id=THREE.TextureIdCount++;this.name="";this.image=a;this.mapping=void 0!==b?b:new THREE.UVMapping;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==i?i:1;this.format=void 0!==g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;
this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.needsUpdate=!1;this.onUpdate=null};
THREE.Texture.prototype={constructor:THREE.Texture,clone:function(){var a=new THREE.Texture;a.image=this.image;a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;return a},deallocate:function(){var a=THREE.TextureLibrary.indexOf(this);
-1!==a&&THREE.TextureLibrary.splice(a,1)}};THREE.TextureIdCount=0;THREE.TextureLibrary=[];THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,i,j){THREE.Texture.call(this,null,f,g,h,i,j,d,e);this.image={width:b,height:c};this.mipmaps=a};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;a.image=this.image;a.mipmaps=this.mipmaps;a.format=this.format;a.type=this.type;a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);return a};THREE.DataTexture=function(a,b,c,d,e,f,g,h,i,j){THREE.Texture.call(this,null,f,g,h,i,j,d,e);this.image={data:a,width:b,height:c}};
THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture(this.image.data,this.image.width,this.image.height,this.format,this.type,this.mapping,this.wrapS,this.wrapT,this.magFilter,this.minFilter);a.offset.copy(this.offset);a.repeat.copy(this.repeat);return a};THREE.Particle=function(a){THREE.Object3D.call(this);this.material=a};THREE.Particle.prototype=Object.create(THREE.Object3D.prototype);
THREE.Particle.prototype.clone=function(a){void 0===a&&(a=new THREE.Particle(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){THREE.Object3D.call(this);this.geometry=a;this.material=void 0!==b?b:new THREE.ParticleBasicMaterial({color:16777215*Math.random()});this.sortParticles=!1;this.geometry&&(null===this.geometry.boundingSphere&&this.geometry.computeBoundingSphere(),this.boundRadius=a.boundingSphere.radius);this.frustumCulled=!1};
THREE.ParticleSystem.prototype=Object.create(THREE.Object3D.prototype);THREE.ParticleSystem.prototype.clone=function(a){void 0===a&&(a=new THREE.ParticleSystem(this.geometry,this.material));a.sortParticles=this.sortParticles;THREE.Object3D.prototype.clone.call(this,a);return a};
THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.geometry=a;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.type=void 0!==c?c:THREE.LineStrip;this.geometry&&(this.geometry.boundingSphere||this.geometry.computeBoundingSphere())};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.type));THREE.Object3D.prototype.clone.call(this,a);return a};
THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.geometry=a;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random(),wireframe:!0});if(this.geometry&&(null===this.geometry.boundingSphere&&this.geometry.computeBoundingSphere(),this.boundRadius=a.boundingSphere.radius,this.geometry.morphTargets.length)){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var c=0;c<this.geometry.morphTargets.length;c++)this.morphTargetInfluences.push(0),
this.morphTargetDictionary[this.geometry.morphTargets[c].name]=c}};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.log("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};
THREE.Mesh.prototype.clone=function(a){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a;this.skinMatrix=new THREE.Matrix4};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.update=function(a,b){this.matrixAutoUpdate&&(b|=this.updateMatrix());if(b||this.matrixWorldNeedsUpdate)a?this.skinMatrix.multiply(a,this.matrix):this.skinMatrix.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,b=!0;var c,d=this.children.length;for(c=0;c<d;c++)this.children[c].update(this.skinMatrix,b)};
THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;this.bones=[];this.boneMatrices=[];var d,e,f;if(this.geometry&&void 0!==this.geometry.bones){for(a=0;a<this.geometry.bones.length;a++)c=this.geometry.bones[a],d=c.pos,e=c.rotq,f=c.scl,b=this.addBone(),b.name=c.name,b.position.set(d[0],d[1],d[2]),b.quaternion.set(e[0],e[1],e[2],e[3]),b.useQuaternion=!0,void 0!==f?b.scale.set(f[0],f[1],f[2]):b.scale.set(1,1,1);for(a=
0;a<this.bones.length;a++)c=this.geometry.bones[a],b=this.bones[a],-1===c.parent?this.add(b):this.bones[c.parent].add(b);a=this.bones.length;this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<a?64:64<a?32:16<a?16:8,this.boneMatrices=new Float32Array(4*this.boneTextureWidth*this.boneTextureHeight),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),this.boneTexture.minFilter=THREE.NearestFilter,
this.boneTexture.magFilter=THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*a);this.pose()}};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.addBone=function(a){void 0===a&&(a=new THREE.Bone(this));this.bones.push(a);return a};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?this.matrixWorld.multiply(this.parent.matrixWorld,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1;for(var a=0,b=this.children.length;a<b;a++){var c=this.children[a];c instanceof THREE.Bone?c.update(this.identityMatrix,!1):c.updateMatrixWorld(!0)}if(void 0==this.boneInverses){this.boneInverses=[];a=0;for(b=this.bones.length;a<
b;a++)c=new THREE.Matrix4,c.getInverse(this.bones[a].skinMatrix),this.boneInverses.push(c)}a=0;for(b=this.bones.length;a<b;a++)THREE.SkinnedMesh.offsetMatrix.multiply(this.bones[a].skinMatrix,this.boneInverses[a]),THREE.SkinnedMesh.offsetMatrix.flattenToArrayOffset(this.boneMatrices,16*a);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)};
THREE.SkinnedMesh.prototype.pose=function(){this.updateMatrixWorld(!0);for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.SkinnedMesh.offsetMatrix=new THREE.Matrix4;
THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};
THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var g=a.morphTargets[e].name.match(d);if(g&&1<g.length){g=g[1];c[g]||(c[g]={start:Infinity,end:-Infinity});var h=c[g];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=g)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=1E3*((c.end-c.start)/b),this.time=0):console.warn("animation["+a+"] undefined")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)if(this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time)this.time=0,this.directionBackwards=!1}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.Ribbon=function(a,b){THREE.Object3D.call(this);this.geometry=a;this.material=b};THREE.Ribbon.prototype=Object.create(THREE.Object3D.prototype);
THREE.Ribbon.prototype.clone=function(a){void 0===a&&(a=new THREE.Ribbon(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.LODs=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);for(var b=Math.abs(b),c=0;c<this.LODs.length&&!(b<this.LODs[c].visibleAtDistance);c++);this.LODs.splice(c,0,{visibleAtDistance:b,object3D:a});this.add(a)};
THREE.LOD.prototype.update=function(a){if(1<this.LODs.length){a.matrixWorldInverse.getInverse(a.matrixWorld);a=a.matrixWorldInverse;a=-(a.elements[2]*this.matrixWorld.elements[12]+a.elements[6]*this.matrixWorld.elements[13]+a.elements[10]*this.matrixWorld.elements[14]+a.elements[14]);this.LODs[0].object3D.visible=!0;for(var b=1;b<this.LODs.length;b++)if(a>=this.LODs[b].visibleAtDistance)this.LODs[b-1].object3D.visible=!1,this.LODs[b].object3D.visible=!0;else break;for(;b<this.LODs.length;b++)this.LODs[b].object3D.visible=
!1}};THREE.LOD.prototype.clone=function(){};
THREE.Sprite=function(a){THREE.Object3D.call(this);a=a||{};this.color=void 0!==a.color?new THREE.Color(a.color):new THREE.Color(16777215);this.map=void 0!==a.map?a.map:new THREE.Texture;this.blending=void 0!==a.blending?a.blending:THREE.NormalBlending;this.blendSrc=void 0!==a.blendSrc?a.blendSrc:THREE.SrcAlphaFactor;this.blendDst=void 0!==a.blendDst?a.blendDst:THREE.OneMinusSrcAlphaFactor;this.blendEquation=void 0!==a.blendEquation?a.blendEquation:THREE.AddEquation;this.useScreenCoordinates=void 0!==
a.useScreenCoordinates?a.useScreenCoordinates:!0;this.mergeWith3D=void 0!==a.mergeWith3D?a.mergeWith3D:!this.useScreenCoordinates;this.affectedByDistance=void 0!==a.affectedByDistance?a.affectedByDistance:!this.useScreenCoordinates;this.scaleByViewport=void 0!==a.scaleByViewport?a.scaleByViewport:!this.affectedByDistance;this.alignment=a.alignment instanceof THREE.Vector2?a.alignment:THREE.SpriteAlignment.center.clone();this.fog=void 0!==a.fog?a.fog:!1;this.rotation3d=this.rotation;this.rotation=
0;this.opacity=1;this.uvOffset=new THREE.Vector2(0,0);this.uvScale=new THREE.Vector2(1,1)};THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);THREE.Sprite.prototype.updateMatrix=function(){this.matrix.setPosition(this.position);this.rotation3d.set(0,0,this.rotation);this.matrix.setRotationFromEuler(this.rotation3d);if(1!==this.scale.x||1!==this.scale.y)this.matrix.scale(this.scale),this.boundRadiusScale=Math.max(this.scale.x,this.scale.y);this.matrixWorldNeedsUpdate=!0};
THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite({}));a.color.copy(this.color);a.map=this.map;a.blending=this.blending;a.useScreenCoordinates=this.useScreenCoordinates;a.mergeWith3D=this.mergeWith3D;a.affectedByDistance=this.affectedByDistance;a.scaleByViewport=this.scaleByViewport;a.alignment=this.alignment;a.fog=this.fog;a.rotation3d.copy(this.rotation3d);a.rotation=this.rotation;a.opacity=this.opacity;a.uvOffset.copy(this.uvOffset);a.uvScale.copy(this.uvScale);THREE.Object3D.prototype.clone.call(this,
a);return a};THREE.SpriteAlignment={};THREE.SpriteAlignment.topLeft=new THREE.Vector2(1,-1);THREE.SpriteAlignment.topCenter=new THREE.Vector2(0,-1);THREE.SpriteAlignment.topRight=new THREE.Vector2(-1,-1);THREE.SpriteAlignment.centerLeft=new THREE.Vector2(1,0);THREE.SpriteAlignment.center=new THREE.Vector2(0,0);THREE.SpriteAlignment.centerRight=new THREE.Vector2(-1,0);THREE.SpriteAlignment.bottomLeft=new THREE.Vector2(1,1);THREE.SpriteAlignment.bottomCenter=new THREE.Vector2(0,1);
THREE.SpriteAlignment.bottomRight=new THREE.Vector2(-1,1);THREE.Scene=function(){THREE.Object3D.call(this);this.overrideMaterial=this.fog=null;this.matrixAutoUpdate=!1;this.__objects=[];this.__lights=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject=function(a){if(a instanceof THREE.Light)-1===this.__lights.indexOf(a)&&this.__lights.push(a),a.target&&void 0===a.target.parent&&this.add(a.target);else if(!(a instanceof THREE.Camera||a instanceof THREE.Bone)&&-1===this.__objects.indexOf(a)){this.__objects.push(a);this.__objectsAdded.push(a);var b=this.__objectsRemoved.indexOf(a);-1!==b&&this.__objectsRemoved.splice(b,1)}for(b=0;b<a.children.length;b++)this.__addObject(a.children[b])};
THREE.Scene.prototype.__removeObject=function(a){if(a instanceof THREE.Light){var b=this.__lights.indexOf(a);-1!==b&&this.__lights.splice(b,1)}else a instanceof THREE.Camera||(b=this.__objects.indexOf(a),-1!==b&&(this.__objects.splice(b,1),this.__objectsRemoved.push(a),b=this.__objectsAdded.indexOf(a),-1!==b&&this.__objectsAdded.splice(b,1)));for(b=0;b<a.children.length;b++)this.__removeObject(a.children[b])};
THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};
THREE.CanvasRenderer=function(a){function b(a){z!==a&&(z=s.globalAlpha=a)}function c(a){w!==a&&(a===THREE.NormalBlending?s.globalCompositeOperation="source-over":a===THREE.AdditiveBlending?s.globalCompositeOperation="lighter":a===THREE.SubtractiveBlending&&(s.globalCompositeOperation="darker"),w=a)}function d(a){q!==a&&(q=s.strokeStyle=a)}function e(a){E!==a&&(E=s.fillStyle=a)}console.log("THREE.CanvasRenderer",THREE.REVISION);var a=a||{},f=this,g,h,i,j=new THREE.Projector,l=void 0!==a.canvas?a.canvas:
document.createElement("canvas"),m,n,p,o,s=l.getContext("2d"),t=new THREE.Color(0),r=0,z=1,w=0,q=null,E=null,A=null,v=null,u=null,D,C,G,P,B=new THREE.RenderableVertex,K=new THREE.RenderableVertex,H,I,N,O,R,ga,M,J,Q,Z,L,oa,X=new THREE.Color,fa=new THREE.Color,ca=new THREE.Color,Y=new THREE.Color,ba=new THREE.Color,aa=new THREE.Color,ia=new THREE.Color,Aa={},Na={},Ja,ma,sa,Ea,rb,ib,ob,jb,Bb,Cb,Wa=new THREE.Rectangle,Sa=new THREE.Rectangle,Ka=new THREE.Rectangle,kb=!1,Oa=new THREE.Color,lb=new THREE.Color,
ab=new THREE.Color,va=new THREE.Vector3,eb,pb,bb,xa,mb,sb,a=16;eb=document.createElement("canvas");eb.width=eb.height=2;pb=eb.getContext("2d");pb.fillStyle="rgba(0,0,0,1)";pb.fillRect(0,0,2,2);bb=pb.getImageData(0,0,2,2);xa=bb.data;mb=document.createElement("canvas");mb.width=mb.height=a;sb=mb.getContext("2d");sb.translate(-a/2,-a/2);sb.scale(a,a);a--;this.domElement=l;this.sortElements=this.sortObjects=this.autoClear=!0;this.info={render:{vertices:0,faces:0}};this.setSize=function(a,b){m=a;n=b;p=
Math.floor(m/2);o=Math.floor(n/2);l.width=m;l.height=n;Wa.set(-p,-o,p,o);Sa.set(-p,-o,p,o);z=1;w=0;u=v=A=E=q=null};this.setClearColor=function(a,b){t.copy(a);r=void 0!==b?b:1;Sa.set(-p,-o,p,o)};this.setClearColorHex=function(a,b){t.setHex(a);r=void 0!==b?b:1;Sa.set(-p,-o,p,o)};this.getMaxAnisotropy=function(){return 0};this.clear=function(){s.setTransform(1,0,0,-1,p,o);!1===Sa.isEmpty()&&(Sa.minSelf(Wa),Sa.inflate(2),1>r&&s.clearRect(Math.floor(Sa.getX()),Math.floor(Sa.getY()),Math.floor(Sa.getWidth()),
Math.floor(Sa.getHeight())),0<r&&(c(THREE.NormalBlending),b(1),e("rgba("+Math.floor(255*t.r)+","+Math.floor(255*t.g)+","+Math.floor(255*t.b)+","+r+")"),s.fillRect(Math.floor(Sa.getX()),Math.floor(Sa.getY()),Math.floor(Sa.getWidth()),Math.floor(Sa.getHeight()))),Sa.empty())};this.render=function(a,l){function n(a,b,c){for(var d=0,e=i.length;d<e;d++){var f=i[d],g=f.color;if(f instanceof THREE.DirectionalLight){var h=f.matrixWorld.getPosition().normalize(),k=b.dot(h);0>=k||(k*=f.intensity,c.r+=g.r*k,
c.g+=g.g*k,c.b+=g.b*k)}else f instanceof THREE.PointLight&&(h=f.matrixWorld.getPosition(),k=b.dot(va.sub(h,a).normalize()),0>=k||(k*=0==f.distance?1:1-Math.min(a.distanceTo(h)/f.distance,1),0!=k&&(k*=f.intensity,c.r+=g.r*k,c.g+=g.g*k,c.b+=g.b*k)))}}function m(a,d,e,g,h,k,i,j){f.info.render.vertices+=3;f.info.render.faces++;b(j.opacity);c(j.blending);H=a.positionScreen.x;I=a.positionScreen.y;N=d.positionScreen.x;O=d.positionScreen.y;R=e.positionScreen.x;ga=e.positionScreen.y;r(H,I,N,O,R,ga);(j instanceof
THREE.MeshLambertMaterial||j instanceof THREE.MeshPhongMaterial)&&null===j.map&&null===j.map?(aa.copy(j.color),ia.copy(j.emissive),j.vertexColors===THREE.FaceColors&&(aa.r*=i.color.r,aa.g*=i.color.g,aa.b*=i.color.b),!0===kb)?!1===j.wireframe&&j.shading==THREE.SmoothShading&&3==i.vertexNormalsLength?(fa.r=ca.r=Y.r=Oa.r,fa.g=ca.g=Y.g=Oa.g,fa.b=ca.b=Y.b=Oa.b,n(i.v1.positionWorld,i.vertexNormalsWorld[0],fa),n(i.v2.positionWorld,i.vertexNormalsWorld[1],ca),n(i.v3.positionWorld,i.vertexNormalsWorld[2],
Y),fa.r=fa.r*aa.r+ia.r,fa.g=fa.g*aa.g+ia.g,fa.b=fa.b*aa.b+ia.b,ca.r=ca.r*aa.r+ia.r,ca.g=ca.g*aa.g+ia.g,ca.b=ca.b*aa.b+ia.b,Y.r=Y.r*aa.r+ia.r,Y.g=Y.g*aa.g+ia.g,Y.b=Y.b*aa.b+ia.b,ba.r=0.5*(ca.r+Y.r),ba.g=0.5*(ca.g+Y.g),ba.b=0.5*(ca.b+Y.b),sa=yc(fa,ca,Y,ba),na(H,I,N,O,R,ga,0,0,1,0,0,1,sa)):(X.r=Oa.r,X.g=Oa.g,X.b=Oa.b,n(i.centroidWorld,i.normalWorld,X),X.r=X.r*aa.r+ia.r,X.g=X.g*aa.g+ia.g,X.b=X.b*aa.b+ia.b,!0===j.wireframe?t(X,j.wireframeLinewidth,j.wireframeLinecap,j.wireframeLinejoin):w(X)):!0===j.wireframe?
t(j.color,j.wireframeLinewidth,j.wireframeLinecap,j.wireframeLinejoin):w(j.color):j instanceof THREE.MeshBasicMaterial||j instanceof THREE.MeshLambertMaterial||j instanceof THREE.MeshPhongMaterial?null!==j.map?j.map.mapping instanceof THREE.UVMapping&&(Ea=i.uvs[0],z(H,I,N,O,R,ga,Ea[g].u,Ea[g].v,Ea[h].u,Ea[h].v,Ea[k].u,Ea[k].v,j.map)):null!==j.envMap?j.envMap.mapping instanceof THREE.SphericalReflectionMapping&&(a=l.matrixWorldInverse,va.copy(i.vertexNormalsWorld[g]),rb=0.5*(va.x*a.elements[0]+va.y*
a.elements[4]+va.z*a.elements[8])+0.5,ib=0.5*(va.x*a.elements[1]+va.y*a.elements[5]+va.z*a.elements[9])+0.5,va.copy(i.vertexNormalsWorld[h]),ob=0.5*(va.x*a.elements[0]+va.y*a.elements[4]+va.z*a.elements[8])+0.5,jb=0.5*(va.x*a.elements[1]+va.y*a.elements[5]+va.z*a.elements[9])+0.5,va.copy(i.vertexNormalsWorld[k]),Bb=0.5*(va.x*a.elements[0]+va.y*a.elements[4]+va.z*a.elements[8])+0.5,Cb=0.5*(va.x*a.elements[1]+va.y*a.elements[5]+va.z*a.elements[9])+0.5,z(H,I,N,O,R,ga,rb,ib,ob,jb,Bb,Cb,j.envMap)):(X.copy(j.color),
j.vertexColors===THREE.FaceColors&&(X.r*=i.color.r,X.g*=i.color.g,X.b*=i.color.b),!0===j.wireframe?t(X,j.wireframeLinewidth,j.wireframeLinecap,j.wireframeLinejoin):w(X)):j instanceof THREE.MeshDepthMaterial?(Ja=l.near,ma=l.far,fa.r=fa.g=fa.b=1-Db(a.positionScreen.z,Ja,ma),ca.r=ca.g=ca.b=1-Db(d.positionScreen.z,Ja,ma),Y.r=Y.g=Y.b=1-Db(e.positionScreen.z,Ja,ma),ba.r=0.5*(ca.r+Y.r),ba.g=0.5*(ca.g+Y.g),ba.b=0.5*(ca.b+Y.b),sa=yc(fa,ca,Y,ba),na(H,I,N,O,R,ga,0,0,1,0,0,1,sa)):j instanceof THREE.MeshNormalMaterial&&
(X.r=ic(i.normalWorld.x),X.g=ic(i.normalWorld.y),X.b=ic(i.normalWorld.z),!0===j.wireframe?t(X,j.wireframeLinewidth,j.wireframeLinecap,j.wireframeLinejoin):w(X))}function r(a,b,c,d,e,f){s.beginPath();s.moveTo(a,b);s.lineTo(c,d);s.lineTo(e,f);s.closePath()}function q(a,b,c,d,e,f,g,h){s.beginPath();s.moveTo(a,b);s.lineTo(c,d);s.lineTo(e,f);s.lineTo(g,h);s.closePath()}function t(a,b,c,e){A!==b&&(A=s.lineWidth=b);v!==c&&(v=s.lineCap=c);u!==e&&(u=s.lineJoin=e);d(a.getContextStyle());s.stroke();Ka.inflate(2*
b)}function w(a){e(a.getContextStyle());s.fill()}function z(a,b,c,d,f,g,h,k,i,j,l,n,na){if(!(na instanceof THREE.DataTexture||void 0===na.image||0==na.image.width)){if(!0===na.needsUpdate){var m=na.wrapS==THREE.RepeatWrapping,o=na.wrapT==THREE.RepeatWrapping;Aa[na.id]=s.createPattern(na.image,!0===m&&!0===o?"repeat":!0===m&&!1===o?"repeat-x":!1===m&&!0===o?"repeat-y":"no-repeat");na.needsUpdate=!1}void 0===Aa[na.id]?e("rgba(0,0,0,1)"):e(Aa[na.id]);var m=na.offset.x/na.repeat.x,o=na.offset.y/na.repeat.y,
Db=na.image.width*na.repeat.x,p=na.image.height*na.repeat.y,h=(h+m)*Db,k=(1-k+o)*p,c=c-a,d=d-b,f=f-a,g=g-b,i=(i+m)*Db-h,j=(1-j+o)*p-k,l=(l+m)*Db-h,n=(1-n+o)*p-k,m=i*n-l*j;0===m?(void 0===Na[na.id]&&(b=document.createElement("canvas"),b.width=na.image.width,b.height=na.image.height,b=b.getContext("2d"),b.drawImage(na.image,0,0),Na[na.id]=b.getImageData(0,0,na.image.width,na.image.height).data),b=Na[na.id],h=4*(Math.floor(h)+Math.floor(k)*na.image.width),X.setRGB(b[h]/255,b[h+1]/255,b[h+2]/255),w(X)):
(m=1/m,na=(n*c-j*f)*m,j=(n*d-j*g)*m,c=(i*f-l*c)*m,d=(i*g-l*d)*m,a=a-na*h-c*k,h=b-j*h-d*k,s.save(),s.transform(na,j,c,d,a,h),s.fill(),s.restore())}}function na(a,b,c,d,e,f,g,h,k,i,j,l,na){var n,m;n=na.width-1;m=na.height-1;g*=n;h*=m;c-=a;d-=b;e-=a;f-=b;k=k*n-g;i=i*m-h;j=j*n-g;l=l*m-h;m=1/(k*l-j*i);n=(l*c-i*e)*m;i=(l*d-i*f)*m;c=(k*e-j*c)*m;d=(k*f-j*d)*m;a=a-n*g-c*h;b=b-i*g-d*h;s.save();s.transform(n,i,c,d,a,b);s.clip();s.drawImage(na,0,0);s.restore()}function yc(a,b,c,d){xa[0]=255*a.r|0;xa[1]=255*a.g|
0;xa[2]=255*a.b|0;xa[4]=255*b.r|0;xa[5]=255*b.g|0;xa[6]=255*b.b|0;xa[8]=255*c.r|0;xa[9]=255*c.g|0;xa[10]=255*c.b|0;xa[12]=255*d.r|0;xa[13]=255*d.g|0;xa[14]=255*d.b|0;pb.putImageData(bb,0,0);sb.drawImage(eb,0,0);return mb}function Db(a,b,c){a=(a-b)/(c-b);return a*a*(3-2*a)}function ic(a){a=0.5*(a+1);return 0>a?0:1<a?1:a}function Zb(a,b){var c=b.x-a.x,d=b.y-a.y,e=c*c+d*d;0!==e&&(e=1/Math.sqrt(e),c*=e,d*=e,b.x+=c,b.y+=d,a.x-=c,a.y-=d)}if(!1===l instanceof THREE.Camera)console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
else{var $b,zc,ka,da;!0===this.autoClear?this.clear():s.setTransform(1,0,0,-1,p,o);f.info.render.vertices=0;f.info.render.faces=0;g=j.projectScene(a,l,this.sortObjects,this.sortElements);h=g.elements;i=g.lights;kb=0<i.length;if(!0===kb){Oa.setRGB(0,0,0);lb.setRGB(0,0,0);ab.setRGB(0,0,0);$b=0;for(zc=i.length;$b<zc;$b++){da=i[$b];var la=da.color;da instanceof THREE.AmbientLight?(Oa.r+=la.r,Oa.g+=la.g,Oa.b+=la.b):da instanceof THREE.DirectionalLight?(lb.r+=la.r,lb.g+=la.g,lb.b+=la.b):da instanceof THREE.PointLight&&
(ab.r+=la.r,ab.g+=la.g,ab.b+=la.b)}}$b=0;for(zc=h.length;$b<zc;$b++)if(ka=h[$b],da=ka.material,!(void 0===da||!1===da.visible)){Ka.empty();if(ka instanceof THREE.RenderableParticle){D=ka;D.x*=p;D.y*=o;var la=D,cb=ka;b(da.opacity);c(da.blending);var E=void 0,Ab=void 0,tb=void 0,ub=void 0,jc=ka=void 0,Rc=void 0;da instanceof THREE.ParticleBasicMaterial?null===da.map?(tb=cb.object.scale.x,ub=cb.object.scale.y,tb*=cb.scale.x*p,ub*=cb.scale.y*o,Ka.set(la.x-tb,la.y-ub,la.x+tb,la.y+ub),!1!==Wa.intersects(Ka)&&
(e(da.color.getContextStyle()),s.save(),s.translate(la.x,la.y),s.rotate(-cb.rotation),s.scale(tb,ub),s.fillRect(-1,-1,2,2),s.restore())):(ka=da.map.image,jc=ka.width>>1,Rc=ka.height>>1,tb=cb.scale.x*p,ub=cb.scale.y*o,E=tb*jc,Ab=ub*Rc,Ka.set(la.x-E,la.y-Ab,la.x+E,la.y+Ab),!1!==Wa.intersects(Ka)&&(s.save(),s.translate(la.x,la.y),s.rotate(-cb.rotation),s.scale(tb,-ub),s.translate(-jc,-Rc),s.drawImage(ka,0,0),s.restore())):da instanceof THREE.ParticleCanvasMaterial&&(E=cb.scale.x*p,Ab=cb.scale.y*o,Ka.set(la.x-
E,la.y-Ab,la.x+E,la.y+Ab),!1!==Wa.intersects(Ka)&&(d(da.color.getContextStyle()),e(da.color.getContextStyle()),s.save(),s.translate(la.x,la.y),s.rotate(-cb.rotation),s.scale(E,Ab),da.program(s),s.restore()))}else if(ka instanceof THREE.RenderableLine){if(D=ka.v1,C=ka.v2,D.positionScreen.x*=p,D.positionScreen.y*=o,C.positionScreen.x*=p,C.positionScreen.y*=o,Ka.addPoint(D.positionScreen.x,D.positionScreen.y),Ka.addPoint(C.positionScreen.x,C.positionScreen.y),!0===Wa.intersects(Ka)&&(la=D,cb=C,b(da.opacity),
c(da.blending),s.beginPath(),s.moveTo(la.positionScreen.x,la.positionScreen.y),s.lineTo(cb.positionScreen.x,cb.positionScreen.y),da instanceof THREE.LineBasicMaterial))la=da.linewidth,A!==la&&(A=s.lineWidth=la),la=da.linecap,v!==la&&(v=s.lineCap=la),la=da.linejoin,u!==la&&(u=s.lineJoin=la),d(da.color.getContextStyle()),s.stroke(),Ka.inflate(2*da.linewidth)}else if(ka instanceof THREE.RenderableFace3)D=ka.v1,C=ka.v2,G=ka.v3,D.positionScreen.x*=p,D.positionScreen.y*=o,C.positionScreen.x*=p,C.positionScreen.y*=
o,G.positionScreen.x*=p,G.positionScreen.y*=o,!0===da.overdraw&&(Zb(D.positionScreen,C.positionScreen),Zb(C.positionScreen,G.positionScreen),Zb(G.positionScreen,D.positionScreen)),Ka.add3Points(D.positionScreen.x,D.positionScreen.y,C.positionScreen.x,C.positionScreen.y,G.positionScreen.x,G.positionScreen.y),!0===Wa.intersects(Ka)&&m(D,C,G,0,1,2,ka,da,a);else if(ka instanceof THREE.RenderableFace4&&(D=ka.v1,C=ka.v2,G=ka.v3,P=ka.v4,D.positionScreen.x*=p,D.positionScreen.y*=o,C.positionScreen.x*=p,C.positionScreen.y*=
o,G.positionScreen.x*=p,G.positionScreen.y*=o,P.positionScreen.x*=p,P.positionScreen.y*=o,B.positionScreen.copy(C.positionScreen),K.positionScreen.copy(P.positionScreen),!0===da.overdraw&&(Zb(D.positionScreen,C.positionScreen),Zb(C.positionScreen,P.positionScreen),Zb(P.positionScreen,D.positionScreen),Zb(G.positionScreen,B.positionScreen),Zb(G.positionScreen,K.positionScreen)),Ka.addPoint(D.positionScreen.x,D.positionScreen.y),Ka.addPoint(C.positionScreen.x,C.positionScreen.y),Ka.addPoint(G.positionScreen.x,
G.positionScreen.y),Ka.addPoint(P.positionScreen.x,P.positionScreen.y),!0===Wa.intersects(Ka)))(la=D,cb=C,E=G,Ab=P,tb=B,ub=K,jc=a,f.info.render.vertices+=4,f.info.render.faces++,b(da.opacity),c(da.blending),void 0!==da.map&&null!==da.map||void 0!==da.envMap&&null!==da.envMap)?(m(la,cb,Ab,0,1,3,ka,da,jc),m(tb,E,ub,1,2,3,ka,da,jc)):(H=la.positionScreen.x,I=la.positionScreen.y,N=cb.positionScreen.x,O=cb.positionScreen.y,R=E.positionScreen.x,ga=E.positionScreen.y,M=Ab.positionScreen.x,J=Ab.positionScreen.y,
Q=tb.positionScreen.x,Z=tb.positionScreen.y,L=ub.positionScreen.x,oa=ub.positionScreen.y,da instanceof THREE.MeshLambertMaterial||da instanceof THREE.MeshPhongMaterial)?(aa.copy(da.color),ia.copy(da.emissive),da.vertexColors===THREE.FaceColors&&(aa.r*=ka.color.r,aa.g*=ka.color.g,aa.b*=ka.color.b),!0===kb)?!1===da.wireframe&&da.shading==THREE.SmoothShading&&4==ka.vertexNormalsLength?(fa.r=ca.r=Y.r=ba.r=Oa.r,fa.g=ca.g=Y.g=ba.g=Oa.g,fa.b=ca.b=Y.b=ba.b=Oa.b,n(ka.v1.positionWorld,ka.vertexNormalsWorld[0],
fa),n(ka.v2.positionWorld,ka.vertexNormalsWorld[1],ca),n(ka.v4.positionWorld,ka.vertexNormalsWorld[3],Y),n(ka.v3.positionWorld,ka.vertexNormalsWorld[2],ba),fa.r=fa.r*aa.r+ia.r,fa.g=fa.g*aa.g+ia.g,fa.b=fa.b*aa.b+ia.b,ca.r=ca.r*aa.r+ia.r,ca.g=ca.g*aa.g+ia.g,ca.b=ca.b*aa.b+ia.b,Y.r=Y.r*aa.r+ia.r,Y.g=Y.g*aa.g+ia.g,Y.b=Y.b*aa.b+ia.b,ba.r=ba.r*aa.r+ia.r,ba.g=ba.g*aa.g+ia.g,ba.b=ba.b*aa.b+ia.b,sa=yc(fa,ca,Y,ba),r(H,I,N,O,M,J),na(H,I,N,O,M,J,0,0,1,0,0,1,sa),r(Q,Z,R,ga,L,oa),na(Q,Z,R,ga,L,oa,1,0,1,1,0,1,sa)):
(X.r=Oa.r,X.g=Oa.g,X.b=Oa.b,n(ka.centroidWorld,ka.normalWorld,X),X.r=X.r*aa.r+ia.r,X.g=X.g*aa.g+ia.g,X.b=X.b*aa.b+ia.b,q(H,I,N,O,R,ga,M,J),!0===da.wireframe?t(X,da.wireframeLinewidth,da.wireframeLinecap,da.wireframeLinejoin):w(X)):(X.r=aa.r+ia.r,X.g=aa.g+ia.g,X.b=aa.b+ia.b,q(H,I,N,O,R,ga,M,J),!0===da.wireframe?t(X,da.wireframeLinewidth,da.wireframeLinecap,da.wireframeLinejoin):w(X)):da instanceof THREE.MeshBasicMaterial?(X.copy(da.color),da.vertexColors===THREE.FaceColors&&(X.r*=ka.color.r,X.g*=ka.color.g,
X.b*=ka.color.b),q(H,I,N,O,R,ga,M,J),!0===da.wireframe?t(X,da.wireframeLinewidth,da.wireframeLinecap,da.wireframeLinejoin):w(X)):da instanceof THREE.MeshNormalMaterial?(X.r=ic(ka.normalWorld.x),X.g=ic(ka.normalWorld.y),X.b=ic(ka.normalWorld.z),q(H,I,N,O,R,ga,M,J),!0===da.wireframe?t(X,da.wireframeLinewidth,da.wireframeLinecap,da.wireframeLinejoin):w(X)):da instanceof THREE.MeshDepthMaterial&&(Ja=l.near,ma=l.far,fa.r=fa.g=fa.b=1-Db(la.positionScreen.z,Ja,ma),ca.r=ca.g=ca.b=1-Db(cb.positionScreen.z,
Ja,ma),Y.r=Y.g=Y.b=1-Db(Ab.positionScreen.z,Ja,ma),ba.r=ba.g=ba.b=1-Db(E.positionScreen.z,Ja,ma),sa=yc(fa,ca,Y,ba),r(H,I,N,O,M,J),na(H,I,N,O,M,J,0,0,1,0,0,1,sa),r(Q,Z,R,ga,L,oa),na(Q,Z,R,ga,L,oa,1,0,1,1,0,1,sa));Sa.addRectangle(Ka)}s.setTransform(1,0,0,1,0,0)}}};
THREE.ShaderChunk={fog_pars_fragment:"#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",fog_fragment:"#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform float flipEnvMap;\nuniform int combine;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nuniform bool useRefract;\nuniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",
envmap_fragment:"#ifdef USE_ENVMAP\nvec3 reflectVec;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nreflectVec = refract( cameraToVertex, normal, refractionRatio );\n} else { \nreflectVec = reflect( cameraToVertex, normal );\n}\n#else\nreflectVec = vReflect;\n#endif\n#ifdef DOUBLE_SIDED\nfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\nvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#else\nvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#endif\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\nif ( combine == 1 ) {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n} else if ( combine == 2 ) {\ngl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n} else {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n}\n#endif",
envmap_pars_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n#ifdef USE_SKINNING\nvec4 worldPosition = modelMatrix * skinned;\n#endif\n#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n#endif\n#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n#endif\n#endif",
envmap_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\nworldNormal = normalize( worldNormal );\nvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, worldNormal );\n}\n#endif",map_particle_pars_fragment:"#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_particle_fragment:"#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n#endif",map_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",map_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",map_fragment:"#ifdef USE_MAP\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( map, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( map, vUv );\n#endif\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",
lightmap_pars_vertex:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",lightmap_fragment:"#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",lightmap_vertex:"#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;\nuniform float bumpScale;\nvec2 dHdxy_fwd() {\nvec2 dSTdx = dFdx( vUv );\nvec2 dSTdy = dFdy( vUv );\nfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\nfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\nfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\nreturn vec2( dBx, dBy );\n}\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\nvec3 vSigmaX = dFdx( surf_pos );\nvec3 vSigmaY = dFdy( surf_pos );\nvec3 vN = surf_norm;\nvec3 R1 = cross( vSigmaY, vN );\nvec3 R2 = cross( vN, vSigmaX );\nfloat fDet = dot( vSigmaX, R1 );\nvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\nreturn normalize( abs( fDet ) * surf_norm - vGrad );\n}\n#endif",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;\nuniform vec2 normalScale;\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\nvec3 q0 = dFdx( eye_pos.xyz );\nvec3 q1 = dFdy( eye_pos.xyz );\nvec2 st0 = dFdx( vUv.st );\nvec2 st1 = dFdy( vUv.st );\nvec3 S = normalize(  q0 * st1.t - q1 * st0.t );\nvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\nvec3 N = normalize( surf_norm );\nvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\nmapN.xy = normalScale * mapN.xy;\nmat3 tsn = mat3( S, T, N );\nreturn normalize( tsn * mapN );\n}\n#endif",
specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular = texture2D( specularMap, vUv );\nspecularStrength = texelSpecular.r;\n#else\nspecularStrength = 1.0;\n#endif",lights_lambert_pars_vertex:"uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif",
lights_lambert_vertex:"vLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\nvLightBack = vec3( 0.0 );\n#endif\ntransformedNormal = normalize( transformedNormal );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, dirVector );\nvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\ndirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\ndirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n#ifdef DOUBLE_SIDED\nvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n#endif\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\npointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\npointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef DOUBLE_SIDED\nvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\nspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\nspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n#ifdef DOUBLE_SIDED\nvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\nvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n#ifdef DOUBLE_SIDED\nvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n#endif\n}\n#endif\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n#ifdef DOUBLE_SIDED\nvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n#endif",
lights_phong_pars_vertex:"#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif",
lights_phong_vertex:"#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nvSpotLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvWorldPosition = worldPosition.xyz;\n#endif",
lights_phong_pars_fragment:"uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#else\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#else\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
lights_phong_fragment:"vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#ifdef DOUBLE_SIDED\nnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n#endif\n#ifdef USE_NORMALMAP\nnormal = perturbNormal2Arb( -viewPosition, normal );\n#elif defined( USE_BUMPMAP )\nnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vPointLight[ i ].xyz );\nfloat lDistance = vPointLight[ i ].w;\n#endif\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n#endif\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\nvec3 pointHalfVector = normalize( lVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n#else\npointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse  = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vSpotLight[ i ].xyz );\nfloat lDistance = vSpotLight[ i ].w;\n#endif\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n#endif\nspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\nvec3 spotHalfVector = normalize( lVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, dirVector );\n#ifdef WRAP_AROUND\nfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n#endif\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += specular * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif",
color_pars_fragment:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_fragment:"#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",color_pars_vertex:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n#ifdef GAMMA_INPUT\nvColor = color * color;\n#else\nvColor = color;\n#endif\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n#ifdef BONE_TEXTURE\nuniform sampler2D boneTexture;\nmat4 getBoneMatrix( const in float i ) {\nfloat j = i * 4.0;\nfloat x = mod( j, N_BONE_PIXEL_X );\nfloat y = floor( j / N_BONE_PIXEL_X );\nconst float dx = 1.0 / N_BONE_PIXEL_X;\nconst float dy = 1.0 / N_BONE_PIXEL_Y;\ny = dy * ( y + 0.5 );\nvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\nvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\nvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\nvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\nmat4 bone = mat4( v1, v2, v3, v4 );\nreturn bone;\n}\n#else\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\nmat4 getBoneMatrix( const in float i ) {\nmat4 bone = boneGlobalMatrices[ int(i) ];\nreturn bone;\n}\n#endif\n#endif",
skinbase_vertex:"#ifdef USE_SKINNING\nmat4 boneMatX = getBoneMatrix( skinIndex.x );\nmat4 boneMatY = getBoneMatrix( skinIndex.y );\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n#ifdef USE_MORPHTARGETS\nvec4 skinVertex = vec4( morphed, 1.0 );\n#else\nvec4 skinVertex = vec4( position, 1.0 );\n#endif\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[ 8 ];\n#else\nuniform float morphTargetInfluences[ 4 ];\n#endif\n#endif",
morphtarget_vertex:"#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n#ifndef USE_MORPHNORMALS\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n#endif\nmorphed += position;\n#endif",
default_vertex:"vec4 mvPosition;\n#ifdef USE_SKINNING\nmvPosition = modelViewMatrix * skinned;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( position, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\nvec3 morphedNormal = vec3( 0.0 );\nmorphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\nmorphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\nmorphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\nmorphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\nmorphedNormal += normal;\n#endif",
skinnormal_vertex:"#ifdef USE_SKINNING\nmat4 skinMatrix = skinWeight.x * boneMatX;\nskinMatrix \t+= skinWeight.y * boneMatY;\n#ifdef USE_MORPHNORMALS\nvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n#else\nvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n#endif\n#endif",defaultnormal_vertex:"vec3 objectNormal;\n#ifdef USE_SKINNING\nobjectNormal = skinnedNormal.xyz;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\nobjectNormal = morphedNormal;\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\nobjectNormal = normal;\n#endif\n#ifdef FLIP_SIDED\nobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;",
shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform vec2 shadowMapSize[ MAX_SHADOWS ];\nuniform float shadowDarkness[ MAX_SHADOWS ];\nuniform float shadowBias[ MAX_SHADOWS ];\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",shadowmap_fragment:"#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_DEBUG\nvec3 frustumColors[3];\nfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\nfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\nfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n#endif\n#ifdef SHADOWMAP_CASCADE\nint inFrustumCount = 0;\n#endif\nfloat fDepth;\nvec3 shadowColor = vec3( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\nbool inFrustum = all( inFrustumVec );\n#ifdef SHADOWMAP_CASCADE\ninFrustumCount += int( inFrustum );\nbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n#else\nbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n#endif\nbool frustumTest = all( frustumTestVec );\nif ( frustumTest ) {\nshadowCoord.z += shadowBias[ i ];\n#ifdef SHADOWMAP_SOFT\nfloat shadow = 0.0;\nconst float shadowDelta = 1.0 / 9.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.25 * xPixelOffset;\nfloat dy0 = -1.25 * yPixelOffset;\nfloat dx1 = 1.25 * xPixelOffset;\nfloat dy1 = 1.25 * yPixelOffset;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n#endif\n}\n#ifdef SHADOWMAP_DEBUG\n#ifdef SHADOWMAP_CASCADE\nif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n#else\nif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n#endif\n#endif\n}\n#ifdef GAMMA_OUTPUT\nshadowColor *= shadowColor;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n#endif",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif",alphatest_fragment:"#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif",linear_to_gamma_fragment:"#ifdef GAMMA_OUTPUT\ngl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n#endif"};
THREE.UniformsUtils={merge:function(a){var b,c,d,e={};for(b=0;b<a.length;b++)for(c in d=this.clone(a[b]),d)e[c]=d[c];return e},clone:function(a){var b,c,d,e={};for(b in a)for(c in e[b]={},a[b])d=a[b][c],e[b][c]=d instanceof THREE.Color||d instanceof THREE.Vector2||d instanceof THREE.Vector3||d instanceof THREE.Vector4||d instanceof THREE.Matrix4||d instanceof THREE.Texture?d.clone():d instanceof Array?d.slice():d;return e}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},useRefract:{type:"i",value:0},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:0.98},combine:{type:"i",value:0},morphTargetInfluences:{type:"f",value:0}},bump:{bumpMap:{type:"t",
value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",
value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",
value:1},scale:{type:"f",value:1},map:{type:"t",value:null},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},vertexShader:"void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}"},normal:{uniforms:{opacity:{type:"f",
value:1}},vertexShader:"varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}",fragmentShader:"uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}"},basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.map_pars_vertex,
THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,"#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,
"#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,
THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,
THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,
THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,
THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,
"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"#ifdef DOUBLE_SIDED\nif ( gl_FrontFacing )\ngl_FragColor.xyz *= vLightFront;\nelse\ngl_FragColor.xyz *= vLightBack;\n#else\ngl_FragColor.xyz *= vLightFront;\n#endif",THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,
THREE.ShaderChunk.fog_fragment,"}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,
THREE.ShaderChunk.defaultnormal_vertex,"vNormal = normalize( transformedNormal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,"vViewPosition = -mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;",
THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,
THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.color_pars_vertex,
THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,
THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,"void main() {\ngl_FragColor = vec4( psColor, opacity );",THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",
value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vLineDistance = scale * lineDistance;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",
THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\nif ( mod( vLineDistance, totalSize ) > dashSize ) {\ndiscard;\n}\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,
THREE.ShaderChunk.default_vertex,"}"].join("\n"),fragmentShader:"vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}"}};
THREE.WebGLRenderer=function(a){function b(a){if(a.__webglCustomAttributesList)for(var b in a.__webglCustomAttributesList)k.deleteBuffer(a.__webglCustomAttributesList[b].buffer)}function c(a,b){var c=a.vertices.length,d=b.material;if(d.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var e in d.attributes){var f=d.attributes[e];if(!f.__webglInitialized||f.createUniqueBuffers){f.__webglInitialized=!0;var g=1;"v2"===f.type?g=2:"v3"===f.type?g=3:"v4"===f.type?
g=4:"c"===f.type&&(g=3);f.size=g;f.array=new Float32Array(c*g);f.buffer=k.createBuffer();f.buffer.belongsToAttribute=e;f.needsUpdate=!0}a.__webglCustomAttributesList.push(f)}}}function d(a,b){var c=b.geometry,d=a.faces3,h=a.faces4,i=3*d.length+4*h.length,j=1*d.length+2*h.length,h=3*d.length+4*h.length,d=e(b,a),l=g(d),n=f(d),m=d.vertexColors?d.vertexColors:!1;a.__vertexArray=new Float32Array(3*i);n&&(a.__normalArray=new Float32Array(3*i));c.hasTangents&&(a.__tangentArray=new Float32Array(4*i));m&&
(a.__colorArray=new Float32Array(3*i));if(l){if(0<c.faceUvs.length||0<c.faceVertexUvs.length)a.__uvArray=new Float32Array(2*i);if(1<c.faceUvs.length||1<c.faceVertexUvs.length)a.__uv2Array=new Float32Array(2*i)}b.geometry.skinWeights.length&&b.geometry.skinIndices.length&&(a.__skinIndexArray=new Float32Array(4*i),a.__skinWeightArray=new Float32Array(4*i));a.__faceArray=new Uint16Array(3*j);a.__lineArray=new Uint16Array(2*h);if(a.numMorphTargets){a.__morphTargetsArrays=[];c=0;for(l=a.numMorphTargets;c<
l;c++)a.__morphTargetsArrays.push(new Float32Array(3*i))}if(a.numMorphNormals){a.__morphNormalsArrays=[];c=0;for(l=a.numMorphNormals;c<l;c++)a.__morphNormalsArrays.push(new Float32Array(3*i))}a.__webglFaceCount=3*j;a.__webglLineCount=2*h;if(d.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var o in d.attributes){var j=d.attributes[o],c={},p;for(p in j)c[p]=j[p];if(!c.__webglInitialized||c.createUniqueBuffers)c.__webglInitialized=!0,h=1,"v2"===c.type?h=2:
"v3"===c.type?h=3:"v4"===c.type?h=4:"c"===c.type&&(h=3),c.size=h,c.array=new Float32Array(i*h),c.buffer=k.createBuffer(),c.buffer.belongsToAttribute=o,j.needsUpdate=!0,c.__original=j;a.__webglCustomAttributesList.push(c)}}a.__inittedArrays=!0}function e(a,b){return a.material instanceof THREE.MeshFaceMaterial?a.material.materials[b.materialIndex]:a.material}function f(a){return a instanceof THREE.MeshBasicMaterial&&!a.envMap||a instanceof THREE.MeshDepthMaterial?!1:a&&void 0!==a.shading&&a.shading===
THREE.SmoothShading?THREE.SmoothShading:THREE.FlatShading}function g(a){return a.map||a.lightMap||a.bumpMap||a.normalMap||a.specularMap||a instanceof THREE.ShaderMaterial?!0:!1}function h(a){var b,c,d;for(b in a.attributes)d="index"===b?k.ELEMENT_ARRAY_BUFFER:k.ARRAY_BUFFER,c=a.attributes[b],c.buffer=k.createBuffer(),k.bindBuffer(d,c.buffer),k.bufferData(d,c.array,k.STATIC_DRAW)}function i(a,b,c){var d,e,f,g,h=a.vertices;g=h.length;var i=a.colors,j=i.length,l=a.__vertexArray,n=a.__colorArray,m=a.__sortArray,
o=a.verticesNeedUpdate,p=a.colorsNeedUpdate,s=a.__webglCustomAttributesList;if(c.sortParticles){pb.copy(eb);pb.multiplySelf(c.matrixWorld);for(d=0;d<g;d++)e=h[d],bb.copy(e),pb.multiplyVector3(bb),m[d]=[bb.z,d];m.sort(function(a,b){return b[0]-a[0]});for(d=0;d<g;d++)e=h[m[d][1]],f=3*d,l[f]=e.x,l[f+1]=e.y,l[f+2]=e.z;for(d=0;d<j;d++)f=3*d,e=i[m[d][1]],n[f]=e.r,n[f+1]=e.g,n[f+2]=e.b;if(s){i=0;for(j=s.length;i<j;i++)if(h=s[i],void 0===h.boundTo||"vertices"===h.boundTo)if(f=0,e=h.value.length,1===h.size)for(d=
0;d<e;d++)g=m[d][1],h.array[d]=h.value[g];else if(2===h.size)for(d=0;d<e;d++)g=m[d][1],g=h.value[g],h.array[f]=g.x,h.array[f+1]=g.y,f+=2;else if(3===h.size)if("c"===h.type)for(d=0;d<e;d++)g=m[d][1],g=h.value[g],h.array[f]=g.r,h.array[f+1]=g.g,h.array[f+2]=g.b,f+=3;else for(d=0;d<e;d++)g=m[d][1],g=h.value[g],h.array[f]=g.x,h.array[f+1]=g.y,h.array[f+2]=g.z,f+=3;else if(4===h.size)for(d=0;d<e;d++)g=m[d][1],g=h.value[g],h.array[f]=g.x,h.array[f+1]=g.y,h.array[f+2]=g.z,h.array[f+3]=g.w,f+=4}}else{if(o)for(d=
0;d<g;d++)e=h[d],f=3*d,l[f]=e.x,l[f+1]=e.y,l[f+2]=e.z;if(p)for(d=0;d<j;d++)e=i[d],f=3*d,n[f]=e.r,n[f+1]=e.g,n[f+2]=e.b;if(s){i=0;for(j=s.length;i<j;i++)if(h=s[i],h.needsUpdate&&(void 0===h.boundTo||"vertices"===h.boundTo))if(e=h.value.length,f=0,1===h.size)for(d=0;d<e;d++)h.array[d]=h.value[d];else if(2===h.size)for(d=0;d<e;d++)g=h.value[d],h.array[f]=g.x,h.array[f+1]=g.y,f+=2;else if(3===h.size)if("c"===h.type)for(d=0;d<e;d++)g=h.value[d],h.array[f]=g.r,h.array[f+1]=g.g,h.array[f+2]=g.b,f+=3;else for(d=
0;d<e;d++)g=h.value[d],h.array[f]=g.x,h.array[f+1]=g.y,h.array[f+2]=g.z,f+=3;else if(4===h.size)for(d=0;d<e;d++)g=h.value[d],h.array[f]=g.x,h.array[f+1]=g.y,h.array[f+2]=g.z,h.array[f+3]=g.w,f+=4}}if(o||c.sortParticles)k.bindBuffer(k.ARRAY_BUFFER,a.__webglVertexBuffer),k.bufferData(k.ARRAY_BUFFER,l,b);if(p||c.sortParticles)k.bindBuffer(k.ARRAY_BUFFER,a.__webglColorBuffer),k.bufferData(k.ARRAY_BUFFER,n,b);if(s){i=0;for(j=s.length;i<j;i++)if(h=s[i],h.needsUpdate||c.sortParticles)k.bindBuffer(k.ARRAY_BUFFER,
h.buffer),k.bufferData(k.ARRAY_BUFFER,h.array,b)}}function j(a,b,c){var d=a.attributes,e=d.index,f=d.position,g=d.normal,h=d.uv,i=d.color,d=d.tangent;a.elementsNeedUpdate&&void 0!==e&&(k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,e.buffer),k.bufferData(k.ELEMENT_ARRAY_BUFFER,e.array,b));a.verticesNeedUpdate&&void 0!==f&&(k.bindBuffer(k.ARRAY_BUFFER,f.buffer),k.bufferData(k.ARRAY_BUFFER,f.array,b));a.normalsNeedUpdate&&void 0!==g&&(k.bindBuffer(k.ARRAY_BUFFER,g.buffer),k.bufferData(k.ARRAY_BUFFER,g.array,b));
a.uvsNeedUpdate&&void 0!==h&&(k.bindBuffer(k.ARRAY_BUFFER,h.buffer),k.bufferData(k.ARRAY_BUFFER,h.array,b));a.colorsNeedUpdate&&void 0!==i&&(k.bindBuffer(k.ARRAY_BUFFER,i.buffer),k.bufferData(k.ARRAY_BUFFER,i.array,b));a.tangentsNeedUpdate&&void 0!==d&&(k.bindBuffer(k.ARRAY_BUFFER,d.buffer),k.bufferData(k.ARRAY_BUFFER,d.array,b));if(c)for(var j in a.attributes)delete a.attributes[j].array}function l(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}function m(a,b){return b[1]-a[1]}function n(a,b,c){if(a.length)for(var d=
0,e=a.length;d<e;d++)aa=fa=null,Y=ba=Ja=Na=ob=ib=ma=-1,mb=!0,a[d].render(b,c,lb,ab),aa=fa=null,Y=ba=Ja=Na=ob=ib=ma=-1,mb=!0}function p(a,b,c,d,e,f,g,h){var i,k,j,l;b?(k=a.length-1,l=b=-1):(k=0,b=a.length,l=1);for(var n=k;n!==b;n+=l)if(i=a[n],i.render){k=i.object;j=i.buffer;if(h)i=h;else{i=i[c];if(!i)continue;g&&L.setBlending(i.blending,i.blendEquation,i.blendSrc,i.blendDst);L.setDepthTest(i.depthTest);L.setDepthWrite(i.depthWrite);D(i.polygonOffset,i.polygonOffsetFactor,i.polygonOffsetUnits)}L.setMaterialFaces(i);
j instanceof THREE.BufferGeometry?L.renderBufferDirect(d,e,f,i,j,k):L.renderBuffer(d,e,f,i,j,k)}}function o(a,b,c,d,e,f,g){for(var h,i,k=0,j=a.length;k<j;k++)if(h=a[k],i=h.object,i.visible){if(g)h=g;else{h=h[b];if(!h)continue;f&&L.setBlending(h.blending,h.blendEquation,h.blendSrc,h.blendDst);L.setDepthTest(h.depthTest);L.setDepthWrite(h.depthWrite);D(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits)}L.renderImmediateObject(c,d,e,h,i)}}function s(a,b,c){a.push({buffer:b,object:c,opaque:null,
transparent:null})}function t(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;return!1}function r(a){for(var b in a.attributes)a.attributes[b].needsUpdate=!1}function z(a,b){for(var c=a.length-1;0<=c;c--)a[c].object===b&&a.splice(c,1)}function w(a,b){for(var c=a.length-1;0<=c;c--)a[c]===b&&a.splice(c,1)}function q(a,b,c,d,e){Aa=0;d.needsUpdate&&(d.program&&L.deallocateMaterial(d),L.initMaterial(d,b,c,e),d.needsUpdate=!1);d.morphTargets&&!e.__webglMorphTargetInfluences&&(e.__webglMorphTargetInfluences=
new Float32Array(L.maxMorphTargets));var f=!1,g=d.program,h=g.uniforms,i=d.uniforms;g!==fa&&(k.useProgram(g),fa=g,f=!0);d.id!==Y&&(Y=d.id,f=!0);if(f||a!==aa)k.uniformMatrix4fv(h.projectionMatrix,!1,a._projectionMatrixArray),a!==aa&&(aa=a);if(d.skinning)if(hc&&e.useVertexTexture){if(null!==h.boneTexture){var j=E();k.uniform1i(h.boneTexture,j);L.setTexture(e.boneTexture,j)}}else null!==h.boneGlobalMatrices&&k.uniformMatrix4fv(h.boneGlobalMatrices,!1,e.boneMatrices);if(f){c&&d.fog&&(i.fogColor.value=
c.color,c instanceof THREE.Fog?(i.fogNear.value=c.near,i.fogFar.value=c.far):c instanceof THREE.FogExp2&&(i.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d.lights){if(mb){for(var l=0,n=0,m=0,o,p,s,r=sb,q=r.directional.colors,t=r.directional.positions,w=r.point.colors,z=r.point.positions,A=r.point.distances,B=r.spot.colors,C=r.spot.positions,D=r.spot.distances,G=r.spot.directions,X=r.spot.anglesCos,J=r.spot.exponents,K=r.hemi.skyColors,
Q=r.hemi.groundColors,M=r.hemi.positions,O=0,ca=0,N=0,R=0,ia=0,Z=0,ba=0,ga=0,qa=p=0,c=qa=qa=0,f=b.length;c<f;c++)j=b[c],j.onlyShadow||(o=j.color,s=j.intensity,p=j.distance,j instanceof THREE.AmbientLight?j.visible&&(L.gammaInput?(l+=o.r*o.r,n+=o.g*o.g,m+=o.b*o.b):(l+=o.r,n+=o.g,m+=o.b)):j instanceof THREE.DirectionalLight?(ia+=1,j.visible&&(p=3*O,L.gammaInput?v(q,p,o,s*s):u(q,p,o,s),xa.copy(j.matrixWorld.getPosition()),xa.subSelf(j.target.matrixWorld.getPosition()),xa.normalize(),t[p]=xa.x,t[p+1]=
xa.y,t[p+2]=xa.z,O+=1)):j instanceof THREE.PointLight?(Z+=1,j.visible&&(qa=3*ca,L.gammaInput?v(w,qa,o,s*s):u(w,qa,o,s),s=j.matrixWorld.getPosition(),z[qa]=s.x,z[qa+1]=s.y,z[qa+2]=s.z,A[ca]=p,ca+=1)):j instanceof THREE.SpotLight?(ba+=1,j.visible&&(qa=3*N,L.gammaInput?v(B,qa,o,s*s):u(B,qa,o,s),s=j.matrixWorld.getPosition(),C[qa]=s.x,C[qa+1]=s.y,C[qa+2]=s.z,D[N]=p,xa.copy(s),xa.subSelf(j.target.matrixWorld.getPosition()),xa.normalize(),G[qa]=xa.x,G[qa+1]=xa.y,G[qa+2]=xa.z,X[N]=Math.cos(j.angle),J[N]=
j.exponent,N+=1)):j instanceof THREE.HemisphereLight&&(ga+=1,j.visible&&(o=j.color,p=j.groundColor,qa=3*R,L.gammaInput?(s*=s,v(K,qa,o,s),v(Q,qa,p,s)):(u(K,qa,o,s),u(Q,qa,p,s)),xa.copy(j.matrixWorld.getPosition()),xa.normalize(),M[qa]=xa.x,M[qa+1]=xa.y,M[qa+2]=xa.z,R+=1)));c=3*O;for(f=Math.max(q.length,3*ia);c<f;c++)q[c]=0;c=3*O;for(f=Math.max(t.length,3*ia);c<f;c++)t[c]=0;c=3*ca;for(f=Math.max(w.length,3*Z);c<f;c++)w[c]=0;c=3*ca;for(f=Math.max(z.length,3*Z);c<f;c++)z[c]=0;c=ca;for(f=Math.max(A.length,
Z);c<f;c++)A[c]=0;c=3*N;for(f=Math.max(B.length,3*ba);c<f;c++)B[c]=0;c=3*N;for(f=Math.max(C.length,3*ba);c<f;c++)C[c]=0;c=3*N;for(f=Math.max(G.length,3*ba);c<f;c++)G[c]=0;c=N;for(f=Math.max(X.length,ba);c<f;c++)X[c]=0;c=N;for(f=Math.max(J.length,ba);c<f;c++)J[c]=0;c=N;for(f=Math.max(D.length,ba);c<f;c++)D[c]=0;c=3*R;for(f=Math.max(K.length,3*ga);c<f;c++)K[c]=0;c=3*R;for(f=Math.max(Q.length,3*ga);c<f;c++)Q[c]=0;c=3*R;for(f=Math.max(M.length,3*ga);c<f;c++)M[c]=0;r.directional.length=O;r.point.length=
ca;r.spot.length=N;r.hemi.length=R;r.ambient[0]=l;r.ambient[1]=n;r.ambient[2]=m;mb=!1}c=sb;i.ambientLightColor.value=c.ambient;i.directionalLightColor.value=c.directional.colors;i.directionalLightDirection.value=c.directional.positions;i.pointLightColor.value=c.point.colors;i.pointLightPosition.value=c.point.positions;i.pointLightDistance.value=c.point.distances;i.spotLightColor.value=c.spot.colors;i.spotLightPosition.value=c.spot.positions;i.spotLightDistance.value=c.spot.distances;i.spotLightDirection.value=
c.spot.directions;i.spotLightAngleCos.value=c.spot.anglesCos;i.spotLightExponent.value=c.spot.exponents;i.hemisphereLightSkyColor.value=c.hemi.skyColors;i.hemisphereLightGroundColor.value=c.hemi.groundColors;i.hemisphereLightDirection.value=c.hemi.positions}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){i.opacity.value=d.opacity;L.gammaInput?i.diffuse.value.copyGammaToLinear(d.color):i.diffuse.value=d.color;i.map.value=d.map;
i.lightMap.value=d.lightMap;i.specularMap.value=d.specularMap;d.bumpMap&&(i.bumpMap.value=d.bumpMap,i.bumpScale.value=d.bumpScale);d.normalMap&&(i.normalMap.value=d.normalMap,i.normalScale.value.copy(d.normalScale));var T;d.map?T=d.map:d.specularMap?T=d.specularMap:d.normalMap?T=d.normalMap:d.bumpMap&&(T=d.bumpMap);void 0!==T&&(c=T.offset,T=T.repeat,i.offsetRepeat.value.set(c.x,c.y,T.x,T.y));i.envMap.value=d.envMap;i.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?1:-1;i.reflectivity.value=
d.reflectivity;i.refractionRatio.value=d.refractionRatio;i.combine.value=d.combine;i.useRefract.value=d.envMap&&d.envMap.mapping instanceof THREE.CubeRefractionMapping}d instanceof THREE.LineBasicMaterial?(i.diffuse.value=d.color,i.opacity.value=d.opacity):d instanceof THREE.LineDashedMaterial?(i.diffuse.value=d.color,i.opacity.value=d.opacity,i.dashSize.value=d.dashSize,i.totalSize.value=d.dashSize+d.gapSize,i.scale.value=d.scale):d instanceof THREE.ParticleBasicMaterial?(i.psColor.value=d.color,
i.opacity.value=d.opacity,i.size.value=d.size,i.scale.value=I.height/2,i.map.value=d.map):d instanceof THREE.MeshPhongMaterial?(i.shininess.value=d.shininess,L.gammaInput?(i.ambient.value.copyGammaToLinear(d.ambient),i.emissive.value.copyGammaToLinear(d.emissive),i.specular.value.copyGammaToLinear(d.specular)):(i.ambient.value=d.ambient,i.emissive.value=d.emissive,i.specular.value=d.specular),d.wrapAround&&i.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?(L.gammaInput?(i.ambient.value.copyGammaToLinear(d.ambient),
i.emissive.value.copyGammaToLinear(d.emissive)):(i.ambient.value=d.ambient,i.emissive.value=d.emissive),d.wrapAround&&i.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?(i.mNear.value=a.near,i.mFar.value=a.far,i.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(i.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&i.shadowMatrix){c=T=0;for(f=b.length;c<f;c++)if(j=b[c],j.castShadow&&(j instanceof THREE.SpotLight||j instanceof THREE.DirectionalLight&&!j.shadowCascade))i.shadowMap.value[T]=
j.shadowMap,i.shadowMapSize.value[T]=j.shadowMapSize,i.shadowMatrix.value[T]=j.shadowMatrix,i.shadowDarkness.value[T]=j.shadowDarkness,i.shadowBias.value[T]=j.shadowBias,T++}b=d.uniformsList;i=0;for(T=b.length;i<T;i++)if(f=g.uniforms[b[i][1]])if(c=b[i][0],l=c.type,j=c.value,"i"===l)k.uniform1i(f,j);else if("f"===l)k.uniform1f(f,j);else if("v2"===l)k.uniform2f(f,j.x,j.y);else if("v3"===l)k.uniform3f(f,j.x,j.y,j.z);else if("v4"===l)k.uniform4f(f,j.x,j.y,j.z,j.w);else if("c"===l)k.uniform3f(f,j.r,j.g,
j.b);else if("iv1"===l)k.uniform1iv(f,j);else if("iv"===l)k.uniform3iv(f,j);else if("fv1"===l)k.uniform1fv(f,j);else if("fv"===l)k.uniform3fv(f,j);else if("v2v"===l){void 0===c._array&&(c._array=new Float32Array(2*j.length));l=0;for(n=j.length;l<n;l++)m=2*l,c._array[m]=j[l].x,c._array[m+1]=j[l].y;k.uniform2fv(f,c._array)}else if("v3v"===l){void 0===c._array&&(c._array=new Float32Array(3*j.length));l=0;for(n=j.length;l<n;l++)m=3*l,c._array[m]=j[l].x,c._array[m+1]=j[l].y,c._array[m+2]=j[l].z;k.uniform3fv(f,
c._array)}else if("v4v"===l){void 0===c._array&&(c._array=new Float32Array(4*j.length));l=0;for(n=j.length;l<n;l++)m=4*l,c._array[m]=j[l].x,c._array[m+1]=j[l].y,c._array[m+2]=j[l].z,c._array[m+3]=j[l].w;k.uniform4fv(f,c._array)}else if("m4"===l)void 0===c._array&&(c._array=new Float32Array(16)),j.flattenToArray(c._array),k.uniformMatrix4fv(f,!1,c._array);else if("m4v"===l){void 0===c._array&&(c._array=new Float32Array(16*j.length));l=0;for(n=j.length;l<n;l++)j[l].flattenToArrayOffset(c._array,16*
l);k.uniformMatrix4fv(f,!1,c._array)}else if("t"===l){if(m=j,j=E(),k.uniform1i(f,j),m)if(m.image instanceof Array&&6===m.image.length){if(c=m,f=j,6===c.image.length)if(c.needsUpdate){c.image.__webglTextureCube||(c.image.__webglTextureCube=k.createTexture());k.activeTexture(k.TEXTURE0+f);k.bindTexture(k.TEXTURE_CUBE_MAP,c.image.__webglTextureCube);k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,c.flipY);f=c instanceof THREE.CompressedTexture;j=[];for(l=0;6>l;l++)L.autoScaleCubemaps&&!f?(n=j,m=l,r=c.image[l],t=
Qc,r.width<=t&&r.height<=t||(w=Math.max(r.width,r.height),q=Math.floor(r.width*t/w),t=Math.floor(r.height*t/w),w=document.createElement("canvas"),w.width=q,w.height=t,w.getContext("2d").drawImage(r,0,0,r.width,r.height,0,0,q,t),r=w),n[m]=r):j[l]=c.image[l];l=j[0];n=0===(l.width&l.width-1)&&0===(l.height&l.height-1);m=H(c.format);r=H(c.type);P(k.TEXTURE_CUBE_MAP,c,n);for(l=0;6>l;l++)if(f){t=j[l].mipmaps;w=0;for(z=t.length;w<z;w++)q=t[w],k.compressedTexImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X+l,w,m,q.width,
q.height,0,q.data)}else k.texImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X+l,0,m,m,r,j[l]);c.generateMipmaps&&n&&k.generateMipmap(k.TEXTURE_CUBE_MAP);c.needsUpdate=!1;if(c.onUpdate)c.onUpdate()}else k.activeTexture(k.TEXTURE0+f),k.bindTexture(k.TEXTURE_CUBE_MAP,c.image.__webglTextureCube)}else m instanceof THREE.WebGLRenderTargetCube?(c=m,k.activeTexture(k.TEXTURE0+j),k.bindTexture(k.TEXTURE_CUBE_MAP,c.__webglTexture)):L.setTexture(m,j)}else if("tv"===l){void 0===c._array&&(c._array=[]);l=0;for(n=c.value.length;l<
n;l++)c._array[l]=E();k.uniform1iv(f,c._array);l=0;for(n=c.value.length;l<n;l++)m=c.value[l],j=c._array[l],m&&L.setTexture(m,j)}if((d instanceof THREE.ShaderMaterial||d instanceof THREE.MeshPhongMaterial||d.envMap)&&null!==h.cameraPosition)b=a.matrixWorld.getPosition(),k.uniform3f(h.cameraPosition,b.x,b.y,b.z);(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.ShaderMaterial||d.skinning)&&null!==h.viewMatrix&&k.uniformMatrix4fv(h.viewMatrix,!1,a._viewMatrixArray)}k.uniformMatrix4fv(h.modelViewMatrix,
!1,e._modelViewMatrix.elements);h.normalMatrix&&k.uniformMatrix3fv(h.normalMatrix,!1,e._normalMatrix.elements);null!==h.modelMatrix&&k.uniformMatrix4fv(h.modelMatrix,!1,e.matrixWorld.elements);return g}function E(){var a=Aa;a>=xc&&console.warn("Trying to use "+a+" texture units while this GPU supports only "+xc);Aa+=1;return a}function A(a,b){a._modelViewMatrix.multiply(b.matrixWorldInverse,a.matrixWorld);a._normalMatrix.getInverse(a._modelViewMatrix);a._normalMatrix.transpose()}function v(a,b,c,
d){a[b]=c.r*c.r*d;a[b+1]=c.g*c.g*d;a[b+2]=c.b*c.b*d}function u(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function D(a,b,c){jb!==a&&(a?k.enable(k.POLYGON_OFFSET_FILL):k.disable(k.POLYGON_OFFSET_FILL),jb=a);if(a&&(Bb!==b||Cb!==c))k.polygonOffset(b,c),Bb=b,Cb=c}function C(a){for(var a=a.split("\n"),b=0,c=a.length;b<c;b++)a[b]=b+1+": "+a[b];return a.join("\n")}function G(a,b){var c;"fragment"===a?c=k.createShader(k.FRAGMENT_SHADER):"vertex"===a&&(c=k.createShader(k.VERTEX_SHADER));k.shaderSource(c,
b);k.compileShader(c);return!k.getShaderParameter(c,k.COMPILE_STATUS)?(console.error(k.getShaderInfoLog(c)),console.error(C(b)),null):c}function P(a,b,c){c?(k.texParameteri(a,k.TEXTURE_WRAP_S,H(b.wrapS)),k.texParameteri(a,k.TEXTURE_WRAP_T,H(b.wrapT)),k.texParameteri(a,k.TEXTURE_MAG_FILTER,H(b.magFilter)),k.texParameteri(a,k.TEXTURE_MIN_FILTER,H(b.minFilter))):(k.texParameteri(a,k.TEXTURE_WRAP_S,k.CLAMP_TO_EDGE),k.texParameteri(a,k.TEXTURE_WRAP_T,k.CLAMP_TO_EDGE),k.texParameteri(a,k.TEXTURE_MAG_FILTER,
K(b.magFilter)),k.texParameteri(a,k.TEXTURE_MIN_FILTER,K(b.minFilter)));if(zb&&b.type!==THREE.FloatType&&(1<b.anisotropy||b.__oldAnisotropy))k.texParameterf(a,zb.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,oc)),b.__oldAnisotropy=b.anisotropy}function B(a,b){k.bindRenderbuffer(k.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?(k.renderbufferStorage(k.RENDERBUFFER,k.DEPTH_COMPONENT16,b.width,b.height),k.framebufferRenderbuffer(k.FRAMEBUFFER,k.DEPTH_ATTACHMENT,k.RENDERBUFFER,a)):b.depthBuffer&&
b.stencilBuffer?(k.renderbufferStorage(k.RENDERBUFFER,k.DEPTH_STENCIL,b.width,b.height),k.framebufferRenderbuffer(k.FRAMEBUFFER,k.DEPTH_STENCIL_ATTACHMENT,k.RENDERBUFFER,a)):k.renderbufferStorage(k.RENDERBUFFER,k.RGBA4,b.width,b.height)}function K(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?k.NEAREST:k.LINEAR}function H(a){if(a===THREE.RepeatWrapping)return k.REPEAT;if(a===THREE.ClampToEdgeWrapping)return k.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return k.MIRRORED_REPEAT;
if(a===THREE.NearestFilter)return k.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return k.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return k.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return k.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return k.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return k.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return k.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return k.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return k.UNSIGNED_SHORT_5_5_5_1;
if(a===THREE.UnsignedShort565Type)return k.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return k.BYTE;if(a===THREE.ShortType)return k.SHORT;if(a===THREE.UnsignedShortType)return k.UNSIGNED_SHORT;if(a===THREE.IntType)return k.INT;if(a===THREE.UnsignedIntType)return k.UNSIGNED_INT;if(a===THREE.FloatType)return k.FLOAT;if(a===THREE.AlphaFormat)return k.ALPHA;if(a===THREE.RGBFormat)return k.RGB;if(a===THREE.RGBAFormat)return k.RGBA;if(a===THREE.LuminanceFormat)return k.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return k.LUMINANCE_ALPHA;
if(a===THREE.AddEquation)return k.FUNC_ADD;if(a===THREE.SubtractEquation)return k.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return k.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return k.ZERO;if(a===THREE.OneFactor)return k.ONE;if(a===THREE.SrcColorFactor)return k.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return k.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return k.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return k.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return k.DST_ALPHA;
if(a===THREE.OneMinusDstAlphaFactor)return k.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return k.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return k.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return k.SRC_ALPHA_SATURATE;if(void 0!==qb){if(a===THREE.RGB_S3TC_DXT1_Format)return qb.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return qb.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return qb.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return qb.COMPRESSED_RGBA_S3TC_DXT5_EXT}return 0}
console.log("THREE.WebGLRenderer",THREE.REVISION);var a=a||{},I=void 0!==a.canvas?a.canvas:document.createElement("canvas"),N=void 0!==a.precision?a.precision:"highp",O=void 0!==a.alpha?a.alpha:!0,R=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,ga=void 0!==a.antialias?a.antialias:!1,M=void 0!==a.stencil?a.stencil:!0,J=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,Q=void 0!==a.clearColor?new THREE.Color(a.clearColor):new THREE.Color(0),Z=void 0!==a.clearAlpha?a.clearAlpha:0;this.domElement=
I;this.context=null;this.autoUpdateScene=this.autoUpdateObjects=this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.shadowMapEnabled=this.physicallyBasedShading=this.gammaOutput=this.gammaInput=!1;this.shadowMapCullFrontFaces=this.shadowMapSoft=this.shadowMapAutoUpdate=!0;this.shadowMapCascade=this.shadowMapDebug=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;this.renderPluginsPre=[];this.renderPluginsPost=[];this.info=
{memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var L=this,oa=[],X=0,fa=null,ca=null,Y=-1,ba=null,aa=null,ia=0,Aa=0,Na=-1,Ja=-1,ma=-1,sa=-1,Ea=-1,rb=-1,ib=-1,ob=-1,jb=null,Bb=null,Cb=null,Wa=null,Sa=0,Ka=0,kb=0,Oa=0,lb=0,ab=0,va=new THREE.Frustum,eb=new THREE.Matrix4,pb=new THREE.Matrix4,bb=new THREE.Vector4,xa=new THREE.Vector3,mb=!0,sb={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[]},spot:{length:0,
colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},k,zb,qb;try{if(!(k=I.getContext("experimental-webgl",{alpha:O,premultipliedAlpha:R,antialias:ga,stencil:M,preserveDrawingBuffer:J})))throw"Error creating WebGL context.";}catch(Pc){console.error(Pc)}a=k.getExtension("OES_texture_float");O=k.getExtension("OES_standard_derivatives");zb=k.getExtension("EXT_texture_filter_anisotropic")||k.getExtension("MOZ_EXT_texture_filter_anisotropic")||
k.getExtension("WEBKIT_EXT_texture_filter_anisotropic");qb=k.getExtension("WEBGL_compressed_texture_s3tc")||k.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||k.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");a||console.log("THREE.WebGLRenderer: Float textures not supported.");O||console.log("THREE.WebGLRenderer: Standard derivatives not supported.");zb||console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");qb||console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");
k.clearColor(0,0,0,1);k.clearDepth(1);k.clearStencil(0);k.enable(k.DEPTH_TEST);k.depthFunc(k.LEQUAL);k.frontFace(k.CCW);k.cullFace(k.BACK);k.enable(k.CULL_FACE);k.enable(k.BLEND);k.blendEquation(k.FUNC_ADD);k.blendFunc(k.SRC_ALPHA,k.ONE_MINUS_SRC_ALPHA);k.clearColor(Q.r,Q.g,Q.b,Z);this.context=k;var xc=k.getParameter(k.MAX_TEXTURE_IMAGE_UNITS),O=k.getParameter(k.MAX_VERTEX_TEXTURE_IMAGE_UNITS);k.getParameter(k.MAX_TEXTURE_SIZE);var Qc=k.getParameter(k.MAX_CUBE_MAP_TEXTURE_SIZE),oc=zb?k.getParameter(zb.MAX_TEXTURE_MAX_ANISOTROPY_EXT):
0,gc=0<O,hc=gc&&a;qb&&k.getParameter(k.COMPRESSED_TEXTURE_FORMATS);this.getContext=function(){return k};this.supportsVertexTextures=function(){return gc};this.getMaxAnisotropy=function(){return oc};this.setSize=function(a,b){I.width=a;I.height=b;this.setViewport(0,0,I.width,I.height)};this.setViewport=function(a,b,c,d){Sa=void 0!==a?a:0;Ka=void 0!==b?b:0;kb=void 0!==c?c:I.width;Oa=void 0!==d?d:I.height;k.viewport(Sa,Ka,kb,Oa)};this.setScissor=function(a,b,c,d){k.scissor(a,b,c,d)};this.enableScissorTest=
function(a){a?k.enable(k.SCISSOR_TEST):k.disable(k.SCISSOR_TEST)};this.setClearColorHex=function(a,b){Q.setHex(a);Z=b;k.clearColor(Q.r,Q.g,Q.b,Z)};this.setClearColor=function(a,b){Q.copy(a);Z=b;k.clearColor(Q.r,Q.g,Q.b,Z)};this.getClearColor=function(){return Q};this.getClearAlpha=function(){return Z};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=k.COLOR_BUFFER_BIT;if(void 0===b||b)d|=k.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=k.STENCIL_BUFFER_BIT;k.clear(d)};this.clearTarget=function(a,b,c,
d){this.setRenderTarget(a);this.clear(b,c,d)};this.addPostPlugin=function(a){a.init(this);this.renderPluginsPost.push(a)};this.addPrePlugin=function(a){a.init(this);this.renderPluginsPre.push(a)};this.deallocateObject=function(a){if(a.__webglInit)if(a.__webglInit=!1,delete a._modelViewMatrix,delete a._normalMatrix,delete a._normalMatrixArray,delete a._modelViewMatrixArray,delete a._modelMatrixArray,a instanceof THREE.Mesh)for(var c in a.geometry.geometryGroups){var d=a.geometry.geometryGroups[c];
k.deleteBuffer(d.__webglVertexBuffer);k.deleteBuffer(d.__webglNormalBuffer);k.deleteBuffer(d.__webglTangentBuffer);k.deleteBuffer(d.__webglColorBuffer);k.deleteBuffer(d.__webglUVBuffer);k.deleteBuffer(d.__webglUV2Buffer);k.deleteBuffer(d.__webglSkinIndicesBuffer);k.deleteBuffer(d.__webglSkinWeightsBuffer);k.deleteBuffer(d.__webglFaceBuffer);k.deleteBuffer(d.__webglLineBuffer);var e=void 0,f=void 0;if(d.numMorphTargets){e=0;for(f=d.numMorphTargets;e<f;e++)k.deleteBuffer(d.__webglMorphTargetsBuffers[e])}if(d.numMorphNormals){e=
0;for(f=d.numMorphNormals;e<f;e++)k.deleteBuffer(d.__webglMorphNormalsBuffers[e])}b(d);L.info.memory.geometries--}else a instanceof THREE.Ribbon?(a=a.geometry,k.deleteBuffer(a.__webglVertexBuffer),k.deleteBuffer(a.__webglColorBuffer),k.deleteBuffer(a.__webglNormalBuffer),b(a),L.info.memory.geometries--):a instanceof THREE.Line?(a=a.geometry,k.deleteBuffer(a.__webglVertexBuffer),k.deleteBuffer(a.__webglColorBuffer),k.deleteBuffer(a.__webglLineDistanceBuffer),b(a),L.info.memory.geometries--):a instanceof
THREE.ParticleSystem&&(a=a.geometry,k.deleteBuffer(a.__webglVertexBuffer),k.deleteBuffer(a.__webglColorBuffer),b(a),L.info.memory.geometries--)};this.deallocateTexture=function(a){a.__webglInit&&(a.__webglInit=!1,k.deleteTexture(a.__webglTexture),L.info.memory.textures--)};this.deallocateRenderTarget=function(a){if(a&&a.__webglTexture)if(k.deleteTexture(a.__webglTexture),a instanceof THREE.WebGLRenderTargetCube)for(var b=0;6>b;b++)k.deleteFramebuffer(a.__webglFramebuffer[b]),k.deleteRenderbuffer(a.__webglRenderbuffer[b]);
else k.deleteFramebuffer(a.__webglFramebuffer),k.deleteRenderbuffer(a.__webglRenderbuffer)};this.deallocateMaterial=function(a){var b=a.program;if(b){a.program=void 0;var c,d,e=!1,a=0;for(c=oa.length;a<c;a++)if(d=oa[a],d.program===b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(e){e=[];a=0;for(c=oa.length;a<c;a++)d=oa[a],d.program!==b&&e.push(d);oa=e;k.deleteProgram(b);L.info.memory.programs--}}};this.updateShadowMap=function(a,b){fa=null;Y=ba=ob=ib=ma=-1;mb=!0;Ja=Na=-1;this.shadowMapPlugin.update(a,
b)};this.renderBufferImmediate=function(a,b,c){a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=k.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&(a.__webglNormalBuffer=k.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&(a.__webglUvBuffer=k.createBuffer());a.hasColors&&!a.__webglColorBuffer&&(a.__webglColorBuffer=k.createBuffer());a.hasPositions&&(k.bindBuffer(k.ARRAY_BUFFER,a.__webglVertexBuffer),k.bufferData(k.ARRAY_BUFFER,a.positionArray,k.DYNAMIC_DRAW),k.enableVertexAttribArray(b.attributes.position),
k.vertexAttribPointer(b.attributes.position,3,k.FLOAT,!1,0,0));if(a.hasNormals){k.bindBuffer(k.ARRAY_BUFFER,a.__webglNormalBuffer);if(c.shading===THREE.FlatShading){var d,e,f,g,h,i,j,l,n,m,o,p=3*a.count;for(o=0;o<p;o+=9)m=a.normalArray,d=m[o],e=m[o+1],f=m[o+2],g=m[o+3],i=m[o+4],l=m[o+5],h=m[o+6],j=m[o+7],n=m[o+8],d=(d+g+h)/3,e=(e+i+j)/3,f=(f+l+n)/3,m[o]=d,m[o+1]=e,m[o+2]=f,m[o+3]=d,m[o+4]=e,m[o+5]=f,m[o+6]=d,m[o+7]=e,m[o+8]=f}k.bufferData(k.ARRAY_BUFFER,a.normalArray,k.DYNAMIC_DRAW);k.enableVertexAttribArray(b.attributes.normal);
k.vertexAttribPointer(b.attributes.normal,3,k.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(k.bindBuffer(k.ARRAY_BUFFER,a.__webglUvBuffer),k.bufferData(k.ARRAY_BUFFER,a.uvArray,k.DYNAMIC_DRAW),k.enableVertexAttribArray(b.attributes.uv),k.vertexAttribPointer(b.attributes.uv,2,k.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(k.bindBuffer(k.ARRAY_BUFFER,a.__webglColorBuffer),k.bufferData(k.ARRAY_BUFFER,a.colorArray,k.DYNAMIC_DRAW),k.enableVertexAttribArray(b.attributes.color),k.vertexAttribPointer(b.attributes.color,
3,k.FLOAT,!1,0,0));k.drawArrays(k.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){if(!1!==d.visible)if(c=q(a,b,c,d,f),a=c.attributes,b=!1,d=16777215*e.id+2*c.id+(d.wireframe?1:0),d!==ba&&(ba=d,b=!0),f instanceof THREE.Mesh){f=e.offsets;1<f.length&&(b=!0);d=0;for(c=f.length;d<c;++d){var g=f[d].index;if(b){var h=e.attributes.position,i=h.itemSize;k.bindBuffer(k.ARRAY_BUFFER,h.buffer);k.vertexAttribPointer(a.position,i,k.FLOAT,!1,0,4*g*i);h=e.attributes.normal;0<=a.normal&&
h&&(i=h.itemSize,k.bindBuffer(k.ARRAY_BUFFER,h.buffer),k.vertexAttribPointer(a.normal,i,k.FLOAT,!1,0,4*g*i));h=e.attributes.uv;0<=a.uv&&h&&(h.buffer?(i=h.itemSize,k.bindBuffer(k.ARRAY_BUFFER,h.buffer),k.vertexAttribPointer(a.uv,i,k.FLOAT,!1,0,4*g*i),k.enableVertexAttribArray(a.uv)):k.disableVertexAttribArray(a.uv));i=e.attributes.color;if(0<=a.color&&i){var j=i.itemSize;k.bindBuffer(k.ARRAY_BUFFER,i.buffer);k.vertexAttribPointer(a.color,j,k.FLOAT,!1,0,4*g*j)}h=e.attributes.tangent;0<=a.tangent&&h&&
(i=h.itemSize,k.bindBuffer(k.ARRAY_BUFFER,h.buffer),k.vertexAttribPointer(a.tangent,i,k.FLOAT,!1,0,4*g*i));k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,e.attributes.index.buffer)}k.drawElements(k.TRIANGLES,f[d].count,k.UNSIGNED_SHORT,2*f[d].start);L.info.render.calls++;L.info.render.vertices+=f[d].count;L.info.render.faces+=f[d].count/3}}else f instanceof THREE.ParticleSystem&&b&&(h=e.attributes.position,i=h.itemSize,k.bindBuffer(k.ARRAY_BUFFER,h.buffer),k.vertexAttribPointer(a.position,i,k.FLOAT,!1,0,0),
i=e.attributes.color,0<=a.color&&i&&(j=i.itemSize,k.bindBuffer(k.ARRAY_BUFFER,i.buffer),k.vertexAttribPointer(a.color,j,k.FLOAT,!1,0,0)),k.drawArrays(k.POINTS,0,h.numItems/3),L.info.render.calls++,L.info.render.points+=h.numItems/3)};this.renderBuffer=function(a,b,c,d,e,f){if(!1!==d.visible){var g,h,c=q(a,b,c,d,f),b=c.attributes,a=!1,c=16777215*e.id+2*c.id+(d.wireframe?1:0);c!==ba&&(ba=c,a=!0);if(!d.morphTargets&&0<=b.position)a&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglVertexBuffer),k.vertexAttribPointer(b.position,
3,k.FLOAT,!1,0,0));else if(f.morphTargetBase){c=d.program.attributes;-1!==f.morphTargetBase?(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[f.morphTargetBase]),k.vertexAttribPointer(c.position,3,k.FLOAT,!1,0,0)):0<=c.position&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglVertexBuffer),k.vertexAttribPointer(c.position,3,k.FLOAT,!1,0,0));if(f.morphTargetForcedOrder.length){var i=0;h=f.morphTargetForcedOrder;for(g=f.morphTargetInfluences;i<d.numSupportedMorphTargets&&i<h.length;)k.bindBuffer(k.ARRAY_BUFFER,
e.__webglMorphTargetsBuffers[h[i]]),k.vertexAttribPointer(c["morphTarget"+i],3,k.FLOAT,!1,0,0),d.morphNormals&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[h[i]]),k.vertexAttribPointer(c["morphNormal"+i],3,k.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[i]=g[h[i]],i++}else{h=[];g=f.morphTargetInfluences;var j,l=g.length;for(j=0;j<l;j++)i=g[j],0<i&&h.push([j,i]);h.length>d.numSupportedMorphTargets?(h.sort(m),h.length=d.numSupportedMorphTargets):h.length>d.numSupportedMorphNormals?h.sort(m):
0===h.length&&h.push([0,0]);for(i=0;i<d.numSupportedMorphTargets;)h[i]?(j=h[i][0],k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[j]),k.vertexAttribPointer(c["morphTarget"+i],3,k.FLOAT,!1,0,0),d.morphNormals&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[j]),k.vertexAttribPointer(c["morphNormal"+i],3,k.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[i]=g[j]):(k.vertexAttribPointer(c["morphTarget"+i],3,k.FLOAT,!1,0,0),d.morphNormals&&k.vertexAttribPointer(c["morphNormal"+i],3,k.FLOAT,
!1,0,0),f.__webglMorphTargetInfluences[i]=0),i++}null!==d.program.uniforms.morphTargetInfluences&&k.uniform1fv(d.program.uniforms.morphTargetInfluences,f.__webglMorphTargetInfluences)}if(a){if(e.__webglCustomAttributesList){g=0;for(h=e.__webglCustomAttributesList.length;g<h;g++)c=e.__webglCustomAttributesList[g],0<=b[c.buffer.belongsToAttribute]&&(k.bindBuffer(k.ARRAY_BUFFER,c.buffer),k.vertexAttribPointer(b[c.buffer.belongsToAttribute],c.size,k.FLOAT,!1,0,0))}0<=b.color&&(k.bindBuffer(k.ARRAY_BUFFER,
e.__webglColorBuffer),k.vertexAttribPointer(b.color,3,k.FLOAT,!1,0,0));0<=b.normal&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglNormalBuffer),k.vertexAttribPointer(b.normal,3,k.FLOAT,!1,0,0));0<=b.tangent&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglTangentBuffer),k.vertexAttribPointer(b.tangent,4,k.FLOAT,!1,0,0));0<=b.uv&&(e.__webglUVBuffer?(k.bindBuffer(k.ARRAY_BUFFER,e.__webglUVBuffer),k.vertexAttribPointer(b.uv,2,k.FLOAT,!1,0,0),k.enableVertexAttribArray(b.uv)):k.disableVertexAttribArray(b.uv));0<=b.uv2&&
(e.__webglUV2Buffer?(k.bindBuffer(k.ARRAY_BUFFER,e.__webglUV2Buffer),k.vertexAttribPointer(b.uv2,2,k.FLOAT,!1,0,0),k.enableVertexAttribArray(b.uv2)):k.disableVertexAttribArray(b.uv2));d.skinning&&(0<=b.skinIndex&&0<=b.skinWeight)&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglSkinIndicesBuffer),k.vertexAttribPointer(b.skinIndex,4,k.FLOAT,!1,0,0),k.bindBuffer(k.ARRAY_BUFFER,e.__webglSkinWeightsBuffer),k.vertexAttribPointer(b.skinWeight,4,k.FLOAT,!1,0,0));0<=b.lineDistance&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglLineDistanceBuffer),
k.vertexAttribPointer(b.lineDistance,1,k.FLOAT,!1,0,0))}f instanceof THREE.Mesh?(d.wireframe?(d=d.wireframeLinewidth,d!==Wa&&(k.lineWidth(d),Wa=d),a&&k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,e.__webglLineBuffer),k.drawElements(k.LINES,e.__webglLineCount,k.UNSIGNED_SHORT,0)):(a&&k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,e.__webglFaceBuffer),k.drawElements(k.TRIANGLES,e.__webglFaceCount,k.UNSIGNED_SHORT,0)),L.info.render.calls++,L.info.render.vertices+=e.__webglFaceCount,L.info.render.faces+=e.__webglFaceCount/
3):f instanceof THREE.Line?(f=f.type===THREE.LineStrip?k.LINE_STRIP:k.LINES,d=d.linewidth,d!==Wa&&(k.lineWidth(d),Wa=d),k.drawArrays(f,0,e.__webglLineCount),L.info.render.calls++):f instanceof THREE.ParticleSystem?(k.drawArrays(k.POINTS,0,e.__webglParticleCount),L.info.render.calls++,L.info.render.points+=e.__webglParticleCount):f instanceof THREE.Ribbon&&(k.drawArrays(k.TRIANGLE_STRIP,0,e.__webglVertexCount),L.info.render.calls++)}};this.render=function(a,b,c,d){if(!1===b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
else{var e,f,g,h,i=a.__lights,j=a.fog;Y=-1;mb=!0;this.autoUpdateScene&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();b._viewMatrixArray||(b._viewMatrixArray=new Float32Array(16));b._projectionMatrixArray||(b._projectionMatrixArray=new Float32Array(16));b.matrixWorldInverse.getInverse(b.matrixWorld);b.matrixWorldInverse.flattenToArray(b._viewMatrixArray);b.projectionMatrix.flattenToArray(b._projectionMatrixArray);eb.multiply(b.projectionMatrix,b.matrixWorldInverse);va.setFromMatrix(eb);
this.autoUpdateObjects&&this.initWebGLObjects(a);n(this.renderPluginsPre,a,b);L.info.render.calls=0;L.info.render.vertices=0;L.info.render.faces=0;L.info.render.points=0;this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);h=a.__webglObjects;d=0;for(e=h.length;d<e;d++)if(f=h[d],g=f.object,f.render=!1,g.visible&&(!(g instanceof THREE.Mesh||g instanceof THREE.ParticleSystem)||!g.frustumCulled||va.contains(g))){A(g,b);var m=f,s=m.buffer,
r=void 0,q=r=void 0,q=m.object.material;if(q instanceof THREE.MeshFaceMaterial)r=s.materialIndex,0<=r&&(r=q.materials[r],r.transparent?(m.transparent=r,m.opaque=null):(m.opaque=r,m.transparent=null));else if(r=q)r.transparent?(m.transparent=r,m.opaque=null):(m.opaque=r,m.transparent=null);f.render=!0;!0===this.sortObjects&&(null!==g.renderDepth?f.z=g.renderDepth:(bb.copy(g.matrixWorld.getPosition()),eb.multiplyVector3(bb),f.z=bb.z),f.id=g.id)}this.sortObjects&&h.sort(l);h=a.__webglObjectsImmediate;
d=0;for(e=h.length;d<e;d++)f=h[d],g=f.object,g.visible&&(A(g,b),g=f.object.material,g.transparent?(f.transparent=g,f.opaque=null):(f.opaque=g,f.transparent=null));a.overrideMaterial?(d=a.overrideMaterial,this.setBlending(d.blending,d.blendEquation,d.blendSrc,d.blendDst),this.setDepthTest(d.depthTest),this.setDepthWrite(d.depthWrite),D(d.polygonOffset,d.polygonOffsetFactor,d.polygonOffsetUnits),p(a.__webglObjects,!1,"",b,i,j,!0,d),o(a.__webglObjectsImmediate,"",b,i,j,!1,d)):(this.setBlending(THREE.NormalBlending),
p(a.__webglObjects,!0,"opaque",b,i,j,!1),o(a.__webglObjectsImmediate,"opaque",b,i,j,!1),p(a.__webglObjects,!1,"transparent",b,i,j,!0),o(a.__webglObjectsImmediate,"transparent",b,i,j,!0));n(this.renderPluginsPost,a,b);c&&(c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter)&&(c instanceof THREE.WebGLRenderTargetCube?(k.bindTexture(k.TEXTURE_CUBE_MAP,c.__webglTexture),k.generateMipmap(k.TEXTURE_CUBE_MAP),k.bindTexture(k.TEXTURE_CUBE_MAP,null)):(k.bindTexture(k.TEXTURE_2D,
c.__webglTexture),k.generateMipmap(k.TEXTURE_2D),k.bindTexture(k.TEXTURE_2D,null)));this.setDepthTest(!0);this.setDepthWrite(!0)}};this.renderImmediateObject=function(a,b,c,d,e){var f=q(a,b,c,d,e);ba=-1;L.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,k,va):e.render(function(a){L.renderBufferImmediate(a,f,d)})};this.initWebGLObjects=function(a){a.__webglObjects||(a.__webglObjects=[],a.__webglObjectsImmediate=[],a.__webglSprites=[],a.__webglFlares=[]);for(;a.__objectsAdded.length;){var b=
a.__objectsAdded[0],l=a,n=void 0,m=void 0,o=void 0,p=void 0;if(!b.__webglInit)if(b.__webglInit=!0,b._modelViewMatrix=new THREE.Matrix4,b._normalMatrix=new THREE.Matrix3,b instanceof THREE.Mesh)if(m=b.geometry,o=b.material,m instanceof THREE.Geometry){if(void 0===m.geometryGroups){var q=m,u=void 0,v=void 0,A=void 0,B=void 0,C=void 0,D=void 0,E=void 0,G={},H=q.morphTargets.length,I=q.morphNormals.length,X=o instanceof THREE.MeshFaceMaterial;q.geometryGroups={};u=0;for(v=q.faces.length;u<v;u++)A=q.faces[u],
B=X?A.materialIndex:void 0,D=void 0!==B?B:-1,void 0===G[D]&&(G[D]={hash:D,counter:0}),E=G[D].hash+"_"+G[D].counter,void 0===q.geometryGroups[E]&&(q.geometryGroups[E]={faces3:[],faces4:[],materialIndex:B,vertices:0,numMorphTargets:H,numMorphNormals:I}),C=A instanceof THREE.Face3?3:4,65535<q.geometryGroups[E].vertices+C&&(G[D].counter+=1,E=G[D].hash+"_"+G[D].counter,void 0===q.geometryGroups[E]&&(q.geometryGroups[E]={faces3:[],faces4:[],materialIndex:B,vertices:0,numMorphTargets:H,numMorphNormals:I})),
A instanceof THREE.Face3?q.geometryGroups[E].faces3.push(u):q.geometryGroups[E].faces4.push(u),q.geometryGroups[E].vertices+=C;q.geometryGroupsList=[];var Y=void 0;for(Y in q.geometryGroups)q.geometryGroups[Y].id=ia++,q.geometryGroupsList.push(q.geometryGroups[Y])}for(n in m.geometryGroups)if(p=m.geometryGroups[n],!p.__webglVertexBuffer){var J=p;J.__webglVertexBuffer=k.createBuffer();J.__webglNormalBuffer=k.createBuffer();J.__webglTangentBuffer=k.createBuffer();J.__webglColorBuffer=k.createBuffer();
J.__webglUVBuffer=k.createBuffer();J.__webglUV2Buffer=k.createBuffer();J.__webglSkinIndicesBuffer=k.createBuffer();J.__webglSkinWeightsBuffer=k.createBuffer();J.__webglFaceBuffer=k.createBuffer();J.__webglLineBuffer=k.createBuffer();var K=void 0,Q=void 0;if(J.numMorphTargets){J.__webglMorphTargetsBuffers=[];K=0;for(Q=J.numMorphTargets;K<Q;K++)J.__webglMorphTargetsBuffers.push(k.createBuffer())}if(J.numMorphNormals){J.__webglMorphNormalsBuffers=[];K=0;for(Q=J.numMorphNormals;K<Q;K++)J.__webglMorphNormalsBuffers.push(k.createBuffer())}L.info.memory.geometries++;
d(p,b);m.verticesNeedUpdate=!0;m.morphTargetsNeedUpdate=!0;m.elementsNeedUpdate=!0;m.uvsNeedUpdate=!0;m.normalsNeedUpdate=!0;m.tangentsNeedUpdate=!0;m.colorsNeedUpdate=!0}}else m instanceof THREE.BufferGeometry&&h(m);else if(b instanceof THREE.Ribbon){if(m=b.geometry,!m.__webglVertexBuffer){var O=m;O.__webglVertexBuffer=k.createBuffer();O.__webglColorBuffer=k.createBuffer();O.__webglNormalBuffer=k.createBuffer();L.info.memory.geometries++;var M=m,P=b,N=M.vertices.length;M.__vertexArray=new Float32Array(3*
N);M.__colorArray=new Float32Array(3*N);M.__normalArray=new Float32Array(3*N);M.__webglVertexCount=N;c(M,P);m.verticesNeedUpdate=!0;m.colorsNeedUpdate=!0;m.normalsNeedUpdate=!0}}else if(b instanceof THREE.Line){if(m=b.geometry,!m.__webglVertexBuffer){var ca=m;ca.__webglVertexBuffer=k.createBuffer();ca.__webglColorBuffer=k.createBuffer();ca.__webglLineDistanceBuffer=k.createBuffer();L.info.memory.geometries++;var fa=m,R=b,Z=fa.vertices.length;fa.__vertexArray=new Float32Array(3*Z);fa.__colorArray=
new Float32Array(3*Z);fa.__lineDistanceArray=new Float32Array(1*Z);fa.__webglLineCount=Z;c(fa,R);m.verticesNeedUpdate=!0;m.colorsNeedUpdate=!0;m.lineDistancesNeedUpdate=!0}}else if(b instanceof THREE.ParticleSystem&&(m=b.geometry,!m.__webglVertexBuffer))if(m instanceof THREE.Geometry){var aa=m;aa.__webglVertexBuffer=k.createBuffer();aa.__webglColorBuffer=k.createBuffer();L.info.memory.geometries++;var ba=m,ga=b,Aa=ba.vertices.length;ba.__vertexArray=new Float32Array(3*Aa);ba.__colorArray=new Float32Array(3*
Aa);ba.__sortArray=[];ba.__webglParticleCount=Aa;c(ba,ga);m.verticesNeedUpdate=!0;m.colorsNeedUpdate=!0}else m instanceof THREE.BufferGeometry&&h(m);if(!b.__webglActive){if(b instanceof THREE.Mesh)if(m=b.geometry,m instanceof THREE.BufferGeometry)s(l.__webglObjects,m,b);else for(n in m.geometryGroups)p=m.geometryGroups[n],s(l.__webglObjects,p,b);else b instanceof THREE.Ribbon||b instanceof THREE.Line||b instanceof THREE.ParticleSystem?(m=b.geometry,s(l.__webglObjects,m,b)):b instanceof THREE.ImmediateRenderObject||
b.immediateRenderCallback?l.__webglObjectsImmediate.push({object:b,opaque:null,transparent:null}):b instanceof THREE.Sprite?l.__webglSprites.push(b):b instanceof THREE.LensFlare&&l.__webglFlares.push(b);b.__webglActive=!0}a.__objectsAdded.splice(0,1)}for(;a.__objectsRemoved.length;){var oa=a.__objectsRemoved[0],sa=a;oa instanceof THREE.Mesh||oa instanceof THREE.ParticleSystem||oa instanceof THREE.Ribbon||oa instanceof THREE.Line?z(sa.__webglObjects,oa):oa instanceof THREE.Sprite?w(sa.__webglSprites,
oa):oa instanceof THREE.LensFlare?w(sa.__webglFlares,oa):(oa instanceof THREE.ImmediateRenderObject||oa.immediateRenderCallback)&&z(sa.__webglObjectsImmediate,oa);oa.__webglActive=!1;a.__objectsRemoved.splice(0,1)}for(var Na=0,xa=a.__webglObjects.length;Na<xa;Na++){var qa=a.__webglObjects[Na].object,T=qa.geometry,Ja=void 0,va=void 0,ma=void 0;if(qa instanceof THREE.Mesh)if(T instanceof THREE.BufferGeometry)(T.verticesNeedUpdate||T.elementsNeedUpdate||T.uvsNeedUpdate||T.normalsNeedUpdate||T.colorsNeedUpdate||
T.tangentsNeedUpdate)&&j(T,k.DYNAMIC_DRAW,!T.dynamic),T.verticesNeedUpdate=!1,T.elementsNeedUpdate=!1,T.uvsNeedUpdate=!1,T.normalsNeedUpdate=!1,T.colorsNeedUpdate=!1,T.tangentsNeedUpdate=!1;else{for(var Ka=0,Oa=T.geometryGroupsList.length;Ka<Oa;Ka++)if(Ja=T.geometryGroupsList[Ka],ma=e(qa,Ja),T.buffersNeedUpdate&&d(Ja,qa),va=ma.attributes&&t(ma),T.verticesNeedUpdate||T.morphTargetsNeedUpdate||T.elementsNeedUpdate||T.uvsNeedUpdate||T.normalsNeedUpdate||T.colorsNeedUpdate||T.tangentsNeedUpdate||va){var ra=
Ja,Sa=qa,Ea=k.DYNAMIC_DRAW,ib=!T.dynamic,Wa=ma;if(ra.__inittedArrays){var mb=f(Wa),rb=Wa.vertexColors?Wa.vertexColors:!1,ob=g(Wa),lb=mb===THREE.SmoothShading,F=void 0,$=void 0,ab=void 0,S=void 0,eb=void 0,bb=void 0,Eb=void 0,pb=void 0,Vb=void 0,jb=void 0,kb=void 0,U=void 0,V=void 0,W=void 0,pa=void 0,Fb=void 0,Gb=void 0,Hb=void 0,qb=void 0,Ib=void 0,Jb=void 0,Kb=void 0,sb=void 0,Lb=void 0,Mb=void 0,Nb=void 0,zb=void 0,Ob=void 0,Pb=void 0,Qb=void 0,Bb=void 0,Rb=void 0,Sb=void 0,Tb=void 0,Cb=void 0,
wa=void 0,gc=void 0,ac=void 0,kc=void 0,lc=void 0,Ta=void 0,hc=void 0,Qa=void 0,Ra=void 0,bc=void 0,Wb=void 0,La=0,Pa=0,Xb=0,Yb=0,vb=0,Za=0,Ba=0,db=0,Ma=0,ha=0,ja=0,y=0,ya=void 0,Ua=ra.__vertexArray,pc=ra.__uvArray,qc=ra.__uv2Array,wb=ra.__normalArray,Fa=ra.__tangentArray,Va=ra.__colorArray,Ga=ra.__skinIndexArray,Ha=ra.__skinWeightArray,Sc=ra.__morphTargetsArrays,Tc=ra.__morphNormalsArrays,Uc=ra.__webglCustomAttributesList,x=void 0,Ub=ra.__faceArray,nb=ra.__lineArray,fb=Sa.geometry,xc=fb.elementsNeedUpdate,
oc=fb.uvsNeedUpdate,Pc=fb.normalsNeedUpdate,Qc=fb.tangentsNeedUpdate,hd=fb.colorsNeedUpdate,id=fb.morphTargetsNeedUpdate,ec=fb.vertices,ta=ra.faces3,ua=ra.faces4,$a=fb.faces,Vc=fb.faceVertexUvs[0],Wc=fb.faceVertexUvs[1],fc=fb.skinIndices,cc=fb.skinWeights,dc=fb.morphTargets,Ac=fb.morphNormals;if(fb.verticesNeedUpdate){F=0;for($=ta.length;F<$;F++)S=$a[ta[F]],U=ec[S.a],V=ec[S.b],W=ec[S.c],Ua[Pa]=U.x,Ua[Pa+1]=U.y,Ua[Pa+2]=U.z,Ua[Pa+3]=V.x,Ua[Pa+4]=V.y,Ua[Pa+5]=V.z,Ua[Pa+6]=W.x,Ua[Pa+7]=W.y,Ua[Pa+8]=
W.z,Pa+=9;F=0;for($=ua.length;F<$;F++)S=$a[ua[F]],U=ec[S.a],V=ec[S.b],W=ec[S.c],pa=ec[S.d],Ua[Pa]=U.x,Ua[Pa+1]=U.y,Ua[Pa+2]=U.z,Ua[Pa+3]=V.x,Ua[Pa+4]=V.y,Ua[Pa+5]=V.z,Ua[Pa+6]=W.x,Ua[Pa+7]=W.y,Ua[Pa+8]=W.z,Ua[Pa+9]=pa.x,Ua[Pa+10]=pa.y,Ua[Pa+11]=pa.z,Pa+=12;k.bindBuffer(k.ARRAY_BUFFER,ra.__webglVertexBuffer);k.bufferData(k.ARRAY_BUFFER,Ua,Ea)}if(id){Ta=0;for(hc=dc.length;Ta<hc;Ta++){F=ja=0;for($=ta.length;F<$;F++)bc=ta[F],S=$a[bc],U=dc[Ta].vertices[S.a],V=dc[Ta].vertices[S.b],W=dc[Ta].vertices[S.c],
Qa=Sc[Ta],Qa[ja]=U.x,Qa[ja+1]=U.y,Qa[ja+2]=U.z,Qa[ja+3]=V.x,Qa[ja+4]=V.y,Qa[ja+5]=V.z,Qa[ja+6]=W.x,Qa[ja+7]=W.y,Qa[ja+8]=W.z,Wa.morphNormals&&(lb?(Wb=Ac[Ta].vertexNormals[bc],Ib=Wb.a,Jb=Wb.b,Kb=Wb.c):Kb=Jb=Ib=Ac[Ta].faceNormals[bc],Ra=Tc[Ta],Ra[ja]=Ib.x,Ra[ja+1]=Ib.y,Ra[ja+2]=Ib.z,Ra[ja+3]=Jb.x,Ra[ja+4]=Jb.y,Ra[ja+5]=Jb.z,Ra[ja+6]=Kb.x,Ra[ja+7]=Kb.y,Ra[ja+8]=Kb.z),ja+=9;F=0;for($=ua.length;F<$;F++)bc=ua[F],S=$a[bc],U=dc[Ta].vertices[S.a],V=dc[Ta].vertices[S.b],W=dc[Ta].vertices[S.c],pa=dc[Ta].vertices[S.d],
Qa=Sc[Ta],Qa[ja]=U.x,Qa[ja+1]=U.y,Qa[ja+2]=U.z,Qa[ja+3]=V.x,Qa[ja+4]=V.y,Qa[ja+5]=V.z,Qa[ja+6]=W.x,Qa[ja+7]=W.y,Qa[ja+8]=W.z,Qa[ja+9]=pa.x,Qa[ja+10]=pa.y,Qa[ja+11]=pa.z,Wa.morphNormals&&(lb?(Wb=Ac[Ta].vertexNormals[bc],Ib=Wb.a,Jb=Wb.b,Kb=Wb.c,sb=Wb.d):sb=Kb=Jb=Ib=Ac[Ta].faceNormals[bc],Ra=Tc[Ta],Ra[ja]=Ib.x,Ra[ja+1]=Ib.y,Ra[ja+2]=Ib.z,Ra[ja+3]=Jb.x,Ra[ja+4]=Jb.y,Ra[ja+5]=Jb.z,Ra[ja+6]=Kb.x,Ra[ja+7]=Kb.y,Ra[ja+8]=Kb.z,Ra[ja+9]=sb.x,Ra[ja+10]=sb.y,Ra[ja+11]=sb.z),ja+=12;k.bindBuffer(k.ARRAY_BUFFER,
ra.__webglMorphTargetsBuffers[Ta]);k.bufferData(k.ARRAY_BUFFER,Sc[Ta],Ea);Wa.morphNormals&&(k.bindBuffer(k.ARRAY_BUFFER,ra.__webglMorphNormalsBuffers[Ta]),k.bufferData(k.ARRAY_BUFFER,Tc[Ta],Ea))}}if(cc.length){F=0;for($=ta.length;F<$;F++)S=$a[ta[F]],Ob=cc[S.a],Pb=cc[S.b],Qb=cc[S.c],Ha[ha]=Ob.x,Ha[ha+1]=Ob.y,Ha[ha+2]=Ob.z,Ha[ha+3]=Ob.w,Ha[ha+4]=Pb.x,Ha[ha+5]=Pb.y,Ha[ha+6]=Pb.z,Ha[ha+7]=Pb.w,Ha[ha+8]=Qb.x,Ha[ha+9]=Qb.y,Ha[ha+10]=Qb.z,Ha[ha+11]=Qb.w,Rb=fc[S.a],Sb=fc[S.b],Tb=fc[S.c],Ga[ha]=Rb.x,Ga[ha+
1]=Rb.y,Ga[ha+2]=Rb.z,Ga[ha+3]=Rb.w,Ga[ha+4]=Sb.x,Ga[ha+5]=Sb.y,Ga[ha+6]=Sb.z,Ga[ha+7]=Sb.w,Ga[ha+8]=Tb.x,Ga[ha+9]=Tb.y,Ga[ha+10]=Tb.z,Ga[ha+11]=Tb.w,ha+=12;F=0;for($=ua.length;F<$;F++)S=$a[ua[F]],Ob=cc[S.a],Pb=cc[S.b],Qb=cc[S.c],Bb=cc[S.d],Ha[ha]=Ob.x,Ha[ha+1]=Ob.y,Ha[ha+2]=Ob.z,Ha[ha+3]=Ob.w,Ha[ha+4]=Pb.x,Ha[ha+5]=Pb.y,Ha[ha+6]=Pb.z,Ha[ha+7]=Pb.w,Ha[ha+8]=Qb.x,Ha[ha+9]=Qb.y,Ha[ha+10]=Qb.z,Ha[ha+11]=Qb.w,Ha[ha+12]=Bb.x,Ha[ha+13]=Bb.y,Ha[ha+14]=Bb.z,Ha[ha+15]=Bb.w,Rb=fc[S.a],Sb=fc[S.b],Tb=fc[S.c],
Cb=fc[S.d],Ga[ha]=Rb.x,Ga[ha+1]=Rb.y,Ga[ha+2]=Rb.z,Ga[ha+3]=Rb.w,Ga[ha+4]=Sb.x,Ga[ha+5]=Sb.y,Ga[ha+6]=Sb.z,Ga[ha+7]=Sb.w,Ga[ha+8]=Tb.x,Ga[ha+9]=Tb.y,Ga[ha+10]=Tb.z,Ga[ha+11]=Tb.w,Ga[ha+12]=Cb.x,Ga[ha+13]=Cb.y,Ga[ha+14]=Cb.z,Ga[ha+15]=Cb.w,ha+=16;0<ha&&(k.bindBuffer(k.ARRAY_BUFFER,ra.__webglSkinIndicesBuffer),k.bufferData(k.ARRAY_BUFFER,Ga,Ea),k.bindBuffer(k.ARRAY_BUFFER,ra.__webglSkinWeightsBuffer),k.bufferData(k.ARRAY_BUFFER,Ha,Ea))}if(hd&&rb){F=0;for($=ta.length;F<$;F++)S=$a[ta[F]],Eb=S.vertexColors,
pb=S.color,3===Eb.length&&rb===THREE.VertexColors?(Lb=Eb[0],Mb=Eb[1],Nb=Eb[2]):Nb=Mb=Lb=pb,Va[Ma]=Lb.r,Va[Ma+1]=Lb.g,Va[Ma+2]=Lb.b,Va[Ma+3]=Mb.r,Va[Ma+4]=Mb.g,Va[Ma+5]=Mb.b,Va[Ma+6]=Nb.r,Va[Ma+7]=Nb.g,Va[Ma+8]=Nb.b,Ma+=9;F=0;for($=ua.length;F<$;F++)S=$a[ua[F]],Eb=S.vertexColors,pb=S.color,4===Eb.length&&rb===THREE.VertexColors?(Lb=Eb[0],Mb=Eb[1],Nb=Eb[2],zb=Eb[3]):zb=Nb=Mb=Lb=pb,Va[Ma]=Lb.r,Va[Ma+1]=Lb.g,Va[Ma+2]=Lb.b,Va[Ma+3]=Mb.r,Va[Ma+4]=Mb.g,Va[Ma+5]=Mb.b,Va[Ma+6]=Nb.r,Va[Ma+7]=Nb.g,Va[Ma+8]=
Nb.b,Va[Ma+9]=zb.r,Va[Ma+10]=zb.g,Va[Ma+11]=zb.b,Ma+=12;0<Ma&&(k.bindBuffer(k.ARRAY_BUFFER,ra.__webglColorBuffer),k.bufferData(k.ARRAY_BUFFER,Va,Ea))}if(Qc&&fb.hasTangents){F=0;for($=ta.length;F<$;F++)S=$a[ta[F]],Vb=S.vertexTangents,Fb=Vb[0],Gb=Vb[1],Hb=Vb[2],Fa[Ba]=Fb.x,Fa[Ba+1]=Fb.y,Fa[Ba+2]=Fb.z,Fa[Ba+3]=Fb.w,Fa[Ba+4]=Gb.x,Fa[Ba+5]=Gb.y,Fa[Ba+6]=Gb.z,Fa[Ba+7]=Gb.w,Fa[Ba+8]=Hb.x,Fa[Ba+9]=Hb.y,Fa[Ba+10]=Hb.z,Fa[Ba+11]=Hb.w,Ba+=12;F=0;for($=ua.length;F<$;F++)S=$a[ua[F]],Vb=S.vertexTangents,Fb=Vb[0],
Gb=Vb[1],Hb=Vb[2],qb=Vb[3],Fa[Ba]=Fb.x,Fa[Ba+1]=Fb.y,Fa[Ba+2]=Fb.z,Fa[Ba+3]=Fb.w,Fa[Ba+4]=Gb.x,Fa[Ba+5]=Gb.y,Fa[Ba+6]=Gb.z,Fa[Ba+7]=Gb.w,Fa[Ba+8]=Hb.x,Fa[Ba+9]=Hb.y,Fa[Ba+10]=Hb.z,Fa[Ba+11]=Hb.w,Fa[Ba+12]=qb.x,Fa[Ba+13]=qb.y,Fa[Ba+14]=qb.z,Fa[Ba+15]=qb.w,Ba+=16;k.bindBuffer(k.ARRAY_BUFFER,ra.__webglTangentBuffer);k.bufferData(k.ARRAY_BUFFER,Fa,Ea)}if(Pc&&mb){F=0;for($=ta.length;F<$;F++)if(S=$a[ta[F]],eb=S.vertexNormals,bb=S.normal,3===eb.length&&lb)for(wa=0;3>wa;wa++)ac=eb[wa],wb[Za]=ac.x,wb[Za+1]=
ac.y,wb[Za+2]=ac.z,Za+=3;else for(wa=0;3>wa;wa++)wb[Za]=bb.x,wb[Za+1]=bb.y,wb[Za+2]=bb.z,Za+=3;F=0;for($=ua.length;F<$;F++)if(S=$a[ua[F]],eb=S.vertexNormals,bb=S.normal,4===eb.length&&lb)for(wa=0;4>wa;wa++)ac=eb[wa],wb[Za]=ac.x,wb[Za+1]=ac.y,wb[Za+2]=ac.z,Za+=3;else for(wa=0;4>wa;wa++)wb[Za]=bb.x,wb[Za+1]=bb.y,wb[Za+2]=bb.z,Za+=3;k.bindBuffer(k.ARRAY_BUFFER,ra.__webglNormalBuffer);k.bufferData(k.ARRAY_BUFFER,wb,Ea)}if(oc&&Vc&&ob){F=0;for($=ta.length;F<$;F++)if(ab=ta[F],jb=Vc[ab],void 0!==jb)for(wa=
0;3>wa;wa++)kc=jb[wa],pc[Xb]=kc.u,pc[Xb+1]=kc.v,Xb+=2;F=0;for($=ua.length;F<$;F++)if(ab=ua[F],jb=Vc[ab],void 0!==jb)for(wa=0;4>wa;wa++)kc=jb[wa],pc[Xb]=kc.u,pc[Xb+1]=kc.v,Xb+=2;0<Xb&&(k.bindBuffer(k.ARRAY_BUFFER,ra.__webglUVBuffer),k.bufferData(k.ARRAY_BUFFER,pc,Ea))}if(oc&&Wc&&ob){F=0;for($=ta.length;F<$;F++)if(ab=ta[F],kb=Wc[ab],void 0!==kb)for(wa=0;3>wa;wa++)lc=kb[wa],qc[Yb]=lc.u,qc[Yb+1]=lc.v,Yb+=2;F=0;for($=ua.length;F<$;F++)if(ab=ua[F],kb=Wc[ab],void 0!==kb)for(wa=0;4>wa;wa++)lc=kb[wa],qc[Yb]=
lc.u,qc[Yb+1]=lc.v,Yb+=2;0<Yb&&(k.bindBuffer(k.ARRAY_BUFFER,ra.__webglUV2Buffer),k.bufferData(k.ARRAY_BUFFER,qc,Ea))}if(xc){F=0;for($=ta.length;F<$;F++)Ub[vb]=La,Ub[vb+1]=La+1,Ub[vb+2]=La+2,vb+=3,nb[db]=La,nb[db+1]=La+1,nb[db+2]=La,nb[db+3]=La+2,nb[db+4]=La+1,nb[db+5]=La+2,db+=6,La+=3;F=0;for($=ua.length;F<$;F++)Ub[vb]=La,Ub[vb+1]=La+1,Ub[vb+2]=La+3,Ub[vb+3]=La+1,Ub[vb+4]=La+2,Ub[vb+5]=La+3,vb+=6,nb[db]=La,nb[db+1]=La+1,nb[db+2]=La,nb[db+3]=La+3,nb[db+4]=La+1,nb[db+5]=La+2,nb[db+6]=La+2,nb[db+7]=
La+3,db+=8,La+=4;k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,ra.__webglFaceBuffer);k.bufferData(k.ELEMENT_ARRAY_BUFFER,Ub,Ea);k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,ra.__webglLineBuffer);k.bufferData(k.ELEMENT_ARRAY_BUFFER,nb,Ea)}if(Uc){wa=0;for(gc=Uc.length;wa<gc;wa++)if(x=Uc[wa],x.__original.needsUpdate){y=0;if(1===x.size)if(void 0===x.boundTo||"vertices"===x.boundTo){F=0;for($=ta.length;F<$;F++)S=$a[ta[F]],x.array[y]=x.value[S.a],x.array[y+1]=x.value[S.b],x.array[y+2]=x.value[S.c],y+=3;F=0;for($=ua.length;F<
$;F++)S=$a[ua[F]],x.array[y]=x.value[S.a],x.array[y+1]=x.value[S.b],x.array[y+2]=x.value[S.c],x.array[y+3]=x.value[S.d],y+=4}else{if("faces"===x.boundTo){F=0;for($=ta.length;F<$;F++)ya=x.value[ta[F]],x.array[y]=ya,x.array[y+1]=ya,x.array[y+2]=ya,y+=3;F=0;for($=ua.length;F<$;F++)ya=x.value[ua[F]],x.array[y]=ya,x.array[y+1]=ya,x.array[y+2]=ya,x.array[y+3]=ya,y+=4}}else if(2===x.size)if(void 0===x.boundTo||"vertices"===x.boundTo){F=0;for($=ta.length;F<$;F++)S=$a[ta[F]],U=x.value[S.a],V=x.value[S.b],
W=x.value[S.c],x.array[y]=U.x,x.array[y+1]=U.y,x.array[y+2]=V.x,x.array[y+3]=V.y,x.array[y+4]=W.x,x.array[y+5]=W.y,y+=6;F=0;for($=ua.length;F<$;F++)S=$a[ua[F]],U=x.value[S.a],V=x.value[S.b],W=x.value[S.c],pa=x.value[S.d],x.array[y]=U.x,x.array[y+1]=U.y,x.array[y+2]=V.x,x.array[y+3]=V.y,x.array[y+4]=W.x,x.array[y+5]=W.y,x.array[y+6]=pa.x,x.array[y+7]=pa.y,y+=8}else{if("faces"===x.boundTo){F=0;for($=ta.length;F<$;F++)W=V=U=ya=x.value[ta[F]],x.array[y]=U.x,x.array[y+1]=U.y,x.array[y+2]=V.x,x.array[y+
3]=V.y,x.array[y+4]=W.x,x.array[y+5]=W.y,y+=6;F=0;for($=ua.length;F<$;F++)pa=W=V=U=ya=x.value[ua[F]],x.array[y]=U.x,x.array[y+1]=U.y,x.array[y+2]=V.x,x.array[y+3]=V.y,x.array[y+4]=W.x,x.array[y+5]=W.y,x.array[y+6]=pa.x,x.array[y+7]=pa.y,y+=8}}else if(3===x.size){var ea;ea="c"===x.type?["r","g","b"]:["x","y","z"];if(void 0===x.boundTo||"vertices"===x.boundTo){F=0;for($=ta.length;F<$;F++)S=$a[ta[F]],U=x.value[S.a],V=x.value[S.b],W=x.value[S.c],x.array[y]=U[ea[0]],x.array[y+1]=U[ea[1]],x.array[y+2]=
U[ea[2]],x.array[y+3]=V[ea[0]],x.array[y+4]=V[ea[1]],x.array[y+5]=V[ea[2]],x.array[y+6]=W[ea[0]],x.array[y+7]=W[ea[1]],x.array[y+8]=W[ea[2]],y+=9;F=0;for($=ua.length;F<$;F++)S=$a[ua[F]],U=x.value[S.a],V=x.value[S.b],W=x.value[S.c],pa=x.value[S.d],x.array[y]=U[ea[0]],x.array[y+1]=U[ea[1]],x.array[y+2]=U[ea[2]],x.array[y+3]=V[ea[0]],x.array[y+4]=V[ea[1]],x.array[y+5]=V[ea[2]],x.array[y+6]=W[ea[0]],x.array[y+7]=W[ea[1]],x.array[y+8]=W[ea[2]],x.array[y+9]=pa[ea[0]],x.array[y+10]=pa[ea[1]],x.array[y+11]=
pa[ea[2]],y+=12}else if("faces"===x.boundTo){F=0;for($=ta.length;F<$;F++)W=V=U=ya=x.value[ta[F]],x.array[y]=U[ea[0]],x.array[y+1]=U[ea[1]],x.array[y+2]=U[ea[2]],x.array[y+3]=V[ea[0]],x.array[y+4]=V[ea[1]],x.array[y+5]=V[ea[2]],x.array[y+6]=W[ea[0]],x.array[y+7]=W[ea[1]],x.array[y+8]=W[ea[2]],y+=9;F=0;for($=ua.length;F<$;F++)pa=W=V=U=ya=x.value[ua[F]],x.array[y]=U[ea[0]],x.array[y+1]=U[ea[1]],x.array[y+2]=U[ea[2]],x.array[y+3]=V[ea[0]],x.array[y+4]=V[ea[1]],x.array[y+5]=V[ea[2]],x.array[y+6]=W[ea[0]],
x.array[y+7]=W[ea[1]],x.array[y+8]=W[ea[2]],x.array[y+9]=pa[ea[0]],x.array[y+10]=pa[ea[1]],x.array[y+11]=pa[ea[2]],y+=12}else if("faceVertices"===x.boundTo){F=0;for($=ta.length;F<$;F++)ya=x.value[ta[F]],U=ya[0],V=ya[1],W=ya[2],x.array[y]=U[ea[0]],x.array[y+1]=U[ea[1]],x.array[y+2]=U[ea[2]],x.array[y+3]=V[ea[0]],x.array[y+4]=V[ea[1]],x.array[y+5]=V[ea[2]],x.array[y+6]=W[ea[0]],x.array[y+7]=W[ea[1]],x.array[y+8]=W[ea[2]],y+=9;F=0;for($=ua.length;F<$;F++)ya=x.value[ua[F]],U=ya[0],V=ya[1],W=ya[2],pa=
ya[3],x.array[y]=U[ea[0]],x.array[y+1]=U[ea[1]],x.array[y+2]=U[ea[2]],x.array[y+3]=V[ea[0]],x.array[y+4]=V[ea[1]],x.array[y+5]=V[ea[2]],x.array[y+6]=W[ea[0]],x.array[y+7]=W[ea[1]],x.array[y+8]=W[ea[2]],x.array[y+9]=pa[ea[0]],x.array[y+10]=pa[ea[1]],x.array[y+11]=pa[ea[2]],y+=12}}else if(4===x.size)if(void 0===x.boundTo||"vertices"===x.boundTo){F=0;for($=ta.length;F<$;F++)S=$a[ta[F]],U=x.value[S.a],V=x.value[S.b],W=x.value[S.c],x.array[y]=U.x,x.array[y+1]=U.y,x.array[y+2]=U.z,x.array[y+3]=U.w,x.array[y+
4]=V.x,x.array[y+5]=V.y,x.array[y+6]=V.z,x.array[y+7]=V.w,x.array[y+8]=W.x,x.array[y+9]=W.y,x.array[y+10]=W.z,x.array[y+11]=W.w,y+=12;F=0;for($=ua.length;F<$;F++)S=$a[ua[F]],U=x.value[S.a],V=x.value[S.b],W=x.value[S.c],pa=x.value[S.d],x.array[y]=U.x,x.array[y+1]=U.y,x.array[y+2]=U.z,x.array[y+3]=U.w,x.array[y+4]=V.x,x.array[y+5]=V.y,x.array[y+6]=V.z,x.array[y+7]=V.w,x.array[y+8]=W.x,x.array[y+9]=W.y,x.array[y+10]=W.z,x.array[y+11]=W.w,x.array[y+12]=pa.x,x.array[y+13]=pa.y,x.array[y+14]=pa.z,x.array[y+
15]=pa.w,y+=16}else if("faces"===x.boundTo){F=0;for($=ta.length;F<$;F++)W=V=U=ya=x.value[ta[F]],x.array[y]=U.x,x.array[y+1]=U.y,x.array[y+2]=U.z,x.array[y+3]=U.w,x.array[y+4]=V.x,x.array[y+5]=V.y,x.array[y+6]=V.z,x.array[y+7]=V.w,x.array[y+8]=W.x,x.array[y+9]=W.y,x.array[y+10]=W.z,x.array[y+11]=W.w,y+=12;F=0;for($=ua.length;F<$;F++)pa=W=V=U=ya=x.value[ua[F]],x.array[y]=U.x,x.array[y+1]=U.y,x.array[y+2]=U.z,x.array[y+3]=U.w,x.array[y+4]=V.x,x.array[y+5]=V.y,x.array[y+6]=V.z,x.array[y+7]=V.w,x.array[y+
8]=W.x,x.array[y+9]=W.y,x.array[y+10]=W.z,x.array[y+11]=W.w,x.array[y+12]=pa.x,x.array[y+13]=pa.y,x.array[y+14]=pa.z,x.array[y+15]=pa.w,y+=16}else if("faceVertices"===x.boundTo){F=0;for($=ta.length;F<$;F++)ya=x.value[ta[F]],U=ya[0],V=ya[1],W=ya[2],x.array[y]=U.x,x.array[y+1]=U.y,x.array[y+2]=U.z,x.array[y+3]=U.w,x.array[y+4]=V.x,x.array[y+5]=V.y,x.array[y+6]=V.z,x.array[y+7]=V.w,x.array[y+8]=W.x,x.array[y+9]=W.y,x.array[y+10]=W.z,x.array[y+11]=W.w,y+=12;F=0;for($=ua.length;F<$;F++)ya=x.value[ua[F]],
U=ya[0],V=ya[1],W=ya[2],pa=ya[3],x.array[y]=U.x,x.array[y+1]=U.y,x.array[y+2]=U.z,x.array[y+3]=U.w,x.array[y+4]=V.x,x.array[y+5]=V.y,x.array[y+6]=V.z,x.array[y+7]=V.w,x.array[y+8]=W.x,x.array[y+9]=W.y,x.array[y+10]=W.z,x.array[y+11]=W.w,x.array[y+12]=pa.x,x.array[y+13]=pa.y,x.array[y+14]=pa.z,x.array[y+15]=pa.w,y+=16}k.bindBuffer(k.ARRAY_BUFFER,x.buffer);k.bufferData(k.ARRAY_BUFFER,x.array,Ea)}}ib&&(delete ra.__inittedArrays,delete ra.__colorArray,delete ra.__normalArray,delete ra.__tangentArray,
delete ra.__uvArray,delete ra.__uv2Array,delete ra.__faceArray,delete ra.__vertexArray,delete ra.__lineArray,delete ra.__skinIndexArray,delete ra.__skinWeightArray)}}T.verticesNeedUpdate=!1;T.morphTargetsNeedUpdate=!1;T.elementsNeedUpdate=!1;T.uvsNeedUpdate=!1;T.normalsNeedUpdate=!1;T.colorsNeedUpdate=!1;T.tangentsNeedUpdate=!1;T.buffersNeedUpdate=!1;ma.attributes&&r(ma)}else if(qa instanceof THREE.Ribbon){ma=e(qa,T);va=ma.attributes&&t(ma);if(T.verticesNeedUpdate||T.colorsNeedUpdate||T.normalsNeedUpdate||
va){var xb=T,Bc=k.DYNAMIC_DRAW,rc=void 0,sc=void 0,tc=void 0,Cc=void 0,za=void 0,Dc=void 0,Ec=void 0,Fc=void 0,Zc=void 0,Xa=void 0,mc=void 0,Ca=void 0,gb=void 0,$c=xb.vertices,ad=xb.colors,bd=xb.normals,jd=$c.length,kd=ad.length,ld=bd.length,Gc=xb.__vertexArray,Hc=xb.__colorArray,Ic=xb.__normalArray,md=xb.colorsNeedUpdate,nd=xb.normalsNeedUpdate,Xc=xb.__webglCustomAttributesList;if(xb.verticesNeedUpdate){for(rc=0;rc<jd;rc++)Cc=$c[rc],za=3*rc,Gc[za]=Cc.x,Gc[za+1]=Cc.y,Gc[za+2]=Cc.z;k.bindBuffer(k.ARRAY_BUFFER,
xb.__webglVertexBuffer);k.bufferData(k.ARRAY_BUFFER,Gc,Bc)}if(md){for(sc=0;sc<kd;sc++)Dc=ad[sc],za=3*sc,Hc[za]=Dc.r,Hc[za+1]=Dc.g,Hc[za+2]=Dc.b;k.bindBuffer(k.ARRAY_BUFFER,xb.__webglColorBuffer);k.bufferData(k.ARRAY_BUFFER,Hc,Bc)}if(nd){for(tc=0;tc<ld;tc++)Ec=bd[tc],za=3*tc,Ic[za]=Ec.x,Ic[za+1]=Ec.y,Ic[za+2]=Ec.z;k.bindBuffer(k.ARRAY_BUFFER,xb.__webglNormalBuffer);k.bufferData(k.ARRAY_BUFFER,Ic,Bc)}if(Xc){Fc=0;for(Zc=Xc.length;Fc<Zc;Fc++)if(Ca=Xc[Fc],Ca.needsUpdate&&(void 0===Ca.boundTo||"vertices"===
Ca.boundTo)){za=0;mc=Ca.value.length;if(1===Ca.size)for(Xa=0;Xa<mc;Xa++)Ca.array[Xa]=Ca.value[Xa];else if(2===Ca.size)for(Xa=0;Xa<mc;Xa++)gb=Ca.value[Xa],Ca.array[za]=gb.x,Ca.array[za+1]=gb.y,za+=2;else if(3===Ca.size)if("c"===Ca.type)for(Xa=0;Xa<mc;Xa++)gb=Ca.value[Xa],Ca.array[za]=gb.r,Ca.array[za+1]=gb.g,Ca.array[za+2]=gb.b,za+=3;else for(Xa=0;Xa<mc;Xa++)gb=Ca.value[Xa],Ca.array[za]=gb.x,Ca.array[za+1]=gb.y,Ca.array[za+2]=gb.z,za+=3;else if(4===Ca.size)for(Xa=0;Xa<mc;Xa++)gb=Ca.value[Xa],Ca.array[za]=
gb.x,Ca.array[za+1]=gb.y,Ca.array[za+2]=gb.z,Ca.array[za+3]=gb.w,za+=4;k.bindBuffer(k.ARRAY_BUFFER,Ca.buffer);k.bufferData(k.ARRAY_BUFFER,Ca.array,Bc)}}}T.verticesNeedUpdate=!1;T.colorsNeedUpdate=!1;T.normalsNeedUpdate=!1;ma.attributes&&r(ma)}else if(qa instanceof THREE.Line){ma=e(qa,T);va=ma.attributes&&t(ma);if(T.verticesNeedUpdate||T.colorsNeedUpdate||T.lineDistancesNeedUpdate||va){var yb=T,Jc=k.DYNAMIC_DRAW,uc=void 0,vc=void 0,wc=void 0,Kc=void 0,Ia=void 0,Lc=void 0,cd=yb.vertices,dd=yb.colors,
ed=yb.lineDistances,od=cd.length,pd=dd.length,qd=ed.length,Mc=yb.__vertexArray,Nc=yb.__colorArray,fd=yb.__lineDistanceArray,rd=yb.colorsNeedUpdate,sd=yb.lineDistancesNeedUpdate,Yc=yb.__webglCustomAttributesList,Oc=void 0,gd=void 0,Ya=void 0,nc=void 0,hb=void 0,Da=void 0;if(yb.verticesNeedUpdate){for(uc=0;uc<od;uc++)Kc=cd[uc],Ia=3*uc,Mc[Ia]=Kc.x,Mc[Ia+1]=Kc.y,Mc[Ia+2]=Kc.z;k.bindBuffer(k.ARRAY_BUFFER,yb.__webglVertexBuffer);k.bufferData(k.ARRAY_BUFFER,Mc,Jc)}if(rd){for(vc=0;vc<pd;vc++)Lc=dd[vc],Ia=
3*vc,Nc[Ia]=Lc.r,Nc[Ia+1]=Lc.g,Nc[Ia+2]=Lc.b;k.bindBuffer(k.ARRAY_BUFFER,yb.__webglColorBuffer);k.bufferData(k.ARRAY_BUFFER,Nc,Jc)}if(sd){for(wc=0;wc<qd;wc++)fd[wc]=ed[wc];k.bindBuffer(k.ARRAY_BUFFER,yb.__webglLineDistanceBuffer);k.bufferData(k.ARRAY_BUFFER,fd,Jc)}if(Yc){Oc=0;for(gd=Yc.length;Oc<gd;Oc++)if(Da=Yc[Oc],Da.needsUpdate&&(void 0===Da.boundTo||"vertices"===Da.boundTo)){Ia=0;nc=Da.value.length;if(1===Da.size)for(Ya=0;Ya<nc;Ya++)Da.array[Ya]=Da.value[Ya];else if(2===Da.size)for(Ya=0;Ya<nc;Ya++)hb=
Da.value[Ya],Da.array[Ia]=hb.x,Da.array[Ia+1]=hb.y,Ia+=2;else if(3===Da.size)if("c"===Da.type)for(Ya=0;Ya<nc;Ya++)hb=Da.value[Ya],Da.array[Ia]=hb.r,Da.array[Ia+1]=hb.g,Da.array[Ia+2]=hb.b,Ia+=3;else for(Ya=0;Ya<nc;Ya++)hb=Da.value[Ya],Da.array[Ia]=hb.x,Da.array[Ia+1]=hb.y,Da.array[Ia+2]=hb.z,Ia+=3;else if(4===Da.size)for(Ya=0;Ya<nc;Ya++)hb=Da.value[Ya],Da.array[Ia]=hb.x,Da.array[Ia+1]=hb.y,Da.array[Ia+2]=hb.z,Da.array[Ia+3]=hb.w,Ia+=4;k.bindBuffer(k.ARRAY_BUFFER,Da.buffer);k.bufferData(k.ARRAY_BUFFER,
Da.array,Jc)}}}T.verticesNeedUpdate=!1;T.colorsNeedUpdate=!1;T.lineDistancesNeedUpdate=!1;ma.attributes&&r(ma)}else qa instanceof THREE.ParticleSystem&&(T instanceof THREE.BufferGeometry?((T.verticesNeedUpdate||T.colorsNeedUpdate)&&j(T,k.DYNAMIC_DRAW,!T.dynamic),T.verticesNeedUpdate=!1,T.colorsNeedUpdate=!1):(ma=e(qa,T),va=ma.attributes&&t(ma),(T.verticesNeedUpdate||T.colorsNeedUpdate||qa.sortParticles||va)&&i(T,k.DYNAMIC_DRAW,qa),T.verticesNeedUpdate=!1,T.colorsNeedUpdate=!1,ma.attributes&&r(ma)))}};
this.initMaterial=function(a,b,c,d){var e,f,g,h,i,j,l,m,n;a instanceof THREE.MeshDepthMaterial?n="depth":a instanceof THREE.MeshNormalMaterial?n="normal":a instanceof THREE.MeshBasicMaterial?n="basic":a instanceof THREE.MeshLambertMaterial?n="lambert":a instanceof THREE.MeshPhongMaterial?n="phong":a instanceof THREE.LineBasicMaterial?n="basic":a instanceof THREE.LineDashedMaterial?n="dashed":a instanceof THREE.ParticleBasicMaterial&&(n="particle_basic");if(n){var o=THREE.ShaderLib[n];a.uniforms=THREE.UniformsUtils.clone(o.uniforms);
a.vertexShader=o.vertexShader;a.fragmentShader=o.fragmentShader}var p,s,r;e=p=s=r=o=0;for(f=b.length;e<f;e++)g=b[e],g.onlyShadow||(g instanceof THREE.DirectionalLight&&p++,g instanceof THREE.PointLight&&s++,g instanceof THREE.SpotLight&&r++,g instanceof THREE.HemisphereLight&&o++);e=p;f=s;g=r;h=o;o=p=0;for(r=b.length;o<r;o++)s=b[o],s.castShadow&&(s instanceof THREE.SpotLight&&p++,s instanceof THREE.DirectionalLight&&!s.shadowCascade&&p++);m=p;hc&&d&&d.useVertexTexture?l=1024:(b=k.getParameter(k.MAX_VERTEX_UNIFORM_VECTORS),
b=Math.floor((b-20)/4),void 0!==d&&d instanceof THREE.SkinnedMesh&&(b=Math.min(d.bones.length,b),b<d.bones.length&&console.warn("WebGLRenderer: too many bones - "+d.bones.length+", this GPU supports just "+b+" (try OpenGL instead of ANGLE)")),l=b);var q;a:{s=a.fragmentShader;r=a.vertexShader;o=a.uniforms;b=a.attributes;p=a.defines;var c={map:!!a.map,envMap:!!a.envMap,lightMap:!!a.lightMap,bumpMap:!!a.bumpMap,normalMap:!!a.normalMap,specularMap:!!a.specularMap,vertexColors:a.vertexColors,fog:c,useFog:a.fog,
fogExp:c instanceof THREE.FogExp2,sizeAttenuation:a.sizeAttenuation,skinning:a.skinning,maxBones:l,useVertexTexture:hc&&d&&d.useVertexTexture,boneTextureWidth:d&&d.boneTextureWidth,boneTextureHeight:d&&d.boneTextureHeight,morphTargets:a.morphTargets,morphNormals:a.morphNormals,maxMorphTargets:this.maxMorphTargets,maxMorphNormals:this.maxMorphNormals,maxDirLights:e,maxPointLights:f,maxSpotLights:g,maxHemiLights:h,maxShadows:m,shadowMapEnabled:this.shadowMapEnabled&&d.receiveShadow,shadowMapSoft:this.shadowMapSoft,
shadowMapDebug:this.shadowMapDebug,shadowMapCascade:this.shadowMapCascade,alphaTest:a.alphaTest,metal:a.metal,perPixel:a.perPixel,wrapAround:a.wrapAround,doubleSided:a.side===THREE.DoubleSide,flipSided:a.side===THREE.BackSide},t,u,v,d=[];n?d.push(n):(d.push(s),d.push(r));for(u in p)d.push(u),d.push(p[u]);for(t in c)d.push(t),d.push(c[t]);n=d.join();t=0;for(u=oa.length;t<u;t++)if(d=oa[t],d.code===n){d.usedTimes++;q=d.program;break a}t=[];for(v in p)u=p[v],!1!==u&&(u="#define "+v+" "+u,t.push(u));u=
t.join("\n");v=k.createProgram();t=["precision "+N+" float;",u,gc?"#define VERTEX_TEXTURES":"",L.gammaInput?"#define GAMMA_INPUT":"",L.gammaOutput?"#define GAMMA_OUTPUT":"",L.physicallyBasedShading?"#define PHYSICALLY_BASED_SHADING":"","#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,"#define MAX_BONES "+c.maxBones,c.map?"#define USE_MAP":"",
c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.skinning?"#define USE_SKINNING":"",c.useVertexTexture?"#define BONE_TEXTURE":"",c.boneTextureWidth?"#define N_BONE_PIXEL_X "+c.boneTextureWidth.toFixed(1):"",c.boneTextureHeight?"#define N_BONE_PIXEL_Y "+c.boneTextureHeight.toFixed(1):"",c.morphTargets?"#define USE_MORPHTARGETS":
"",c.morphNormals?"#define USE_MORPHNORMALS":"",c.perPixel?"#define PHONG_PER_PIXEL":"",c.wrapAround?"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapSoft?"#define SHADOWMAP_SOFT":"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",c.sizeAttenuation?"#define USE_SIZEATTENUATION":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\n#ifdef USE_MORPHNORMALS\nattribute vec3 morphNormal0;\nattribute vec3 morphNormal1;\nattribute vec3 morphNormal2;\nattribute vec3 morphNormal3;\n#else\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
u=["precision "+N+" float;",c.bumpMap||c.normalMap?"#extension GL_OES_standard_derivatives : enable":"",u,"#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,c.alphaTest?"#define ALPHATEST "+c.alphaTest:"",L.gammaInput?"#define GAMMA_INPUT":"",L.gammaOutput?"#define GAMMA_OUTPUT":"",L.physicallyBasedShading?"#define PHYSICALLY_BASED_SHADING":"",
c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&c.fogExp?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.metal?"#define METAL":"",c.perPixel?"#define PHONG_PER_PIXEL":"",c.wrapAround?"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":
"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapSoft?"#define SHADOWMAP_SOFT":"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");u=G("fragment",u+s);t=G("vertex",t+r);k.attachShader(v,t);k.attachShader(v,u);k.linkProgram(v);k.getProgramParameter(v,k.LINK_STATUS)||console.error("Could not initialise shader\nVALIDATE_STATUS: "+k.getProgramParameter(v,k.VALIDATE_STATUS)+
", gl error ["+k.getError()+"]");k.deleteShader(u);k.deleteShader(t);v.uniforms={};v.attributes={};var w;t="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences".split(" ");c.useVertexTexture?t.push("boneTexture"):t.push("boneGlobalMatrices");for(w in o)t.push(w);w=t;t=0;for(u=w.length;t<u;t++)d=w[t],v.uniforms[d]=k.getUniformLocation(v,d);t="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");for(w=0;w<c.maxMorphTargets;w++)t.push("morphTarget"+
w);for(w=0;w<c.maxMorphNormals;w++)t.push("morphNormal"+w);for(q in b)t.push(q);q=t;w=0;for(b=q.length;w<b;w++)t=q[w],v.attributes[t]=k.getAttribLocation(v,t);v.id=X++;oa.push({program:v,code:n,usedTimes:1});L.info.memory.programs=oa.length;q=v}a.program=q;q=a.program.attributes;0<=q.position&&k.enableVertexAttribArray(q.position);0<=q.color&&k.enableVertexAttribArray(q.color);0<=q.normal&&k.enableVertexAttribArray(q.normal);0<=q.tangent&&k.enableVertexAttribArray(q.tangent);0<=q.lineDistance&&k.enableVertexAttribArray(q.lineDistance);
a.skinning&&(0<=q.skinIndex&&0<=q.skinWeight)&&(k.enableVertexAttribArray(q.skinIndex),k.enableVertexAttribArray(q.skinWeight));if(a.attributes)for(j in a.attributes)void 0!==q[j]&&0<=q[j]&&k.enableVertexAttribArray(q[j]);if(a.morphTargets){a.numSupportedMorphTargets=0;v="morphTarget";for(j=0;j<this.maxMorphTargets;j++)w=v+j,0<=q[w]&&(k.enableVertexAttribArray(q[w]),a.numSupportedMorphTargets++)}if(a.morphNormals){a.numSupportedMorphNormals=0;v="morphNormal";for(j=0;j<this.maxMorphNormals;j++)w=v+
j,0<=q[w]&&(k.enableVertexAttribArray(q[w]),a.numSupportedMorphNormals++)}a.uniformsList=[];for(i in a.uniforms)a.uniformsList.push([a.uniforms[i],i])};this.setFaceCulling=function(a,b){a?(!b||"ccw"===b?k.frontFace(k.CCW):k.frontFace(k.CW),"back"===a?k.cullFace(k.BACK):"front"===a?k.cullFace(k.FRONT):k.cullFace(k.FRONT_AND_BACK),k.enable(k.CULL_FACE)):k.disable(k.CULL_FACE)};this.setMaterialFaces=function(a){var b=a.side===THREE.DoubleSide,a=a.side===THREE.BackSide;Na!==b&&(b?k.disable(k.CULL_FACE):
k.enable(k.CULL_FACE),Na=b);Ja!==a&&(a?k.frontFace(k.CW):k.frontFace(k.CCW),Ja=a)};this.setDepthTest=function(a){ib!==a&&(a?k.enable(k.DEPTH_TEST):k.disable(k.DEPTH_TEST),ib=a)};this.setDepthWrite=function(a){ob!==a&&(k.depthMask(a),ob=a)};this.setBlending=function(a,b,c,d){a!==ma&&(a===THREE.NoBlending?k.disable(k.BLEND):a===THREE.AdditiveBlending?(k.enable(k.BLEND),k.blendEquation(k.FUNC_ADD),k.blendFunc(k.SRC_ALPHA,k.ONE)):a===THREE.SubtractiveBlending?(k.enable(k.BLEND),k.blendEquation(k.FUNC_ADD),
k.blendFunc(k.ZERO,k.ONE_MINUS_SRC_COLOR)):a===THREE.MultiplyBlending?(k.enable(k.BLEND),k.blendEquation(k.FUNC_ADD),k.blendFunc(k.ZERO,k.SRC_COLOR)):a===THREE.CustomBlending?k.enable(k.BLEND):(k.enable(k.BLEND),k.blendEquationSeparate(k.FUNC_ADD,k.FUNC_ADD),k.blendFuncSeparate(k.SRC_ALPHA,k.ONE_MINUS_SRC_ALPHA,k.ONE,k.ONE_MINUS_SRC_ALPHA)),ma=a);if(a===THREE.CustomBlending){if(b!==sa&&(k.blendEquation(H(b)),sa=b),c!==Ea||d!==rb)k.blendFunc(H(c),H(d)),Ea=c,rb=d}else rb=Ea=sa=null};this.setTexture=
function(a,b){if(a.needsUpdate){a.__webglInit||(a.__webglInit=!0,a.__webglTexture=k.createTexture(),L.info.memory.textures++);k.activeTexture(k.TEXTURE0+b);k.bindTexture(k.TEXTURE_2D,a.__webglTexture);k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,a.flipY);k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha);var c=a.image,d=0===(c.width&c.width-1)&&0===(c.height&c.height-1),e=H(a.format),f=H(a.type);P(k.TEXTURE_2D,a,d);if(a instanceof THREE.CompressedTexture)for(var f=a.mipmaps,g=0,h=f.length;g<
h;g++)c=f[g],k.compressedTexImage2D(k.TEXTURE_2D,g,e,c.width,c.height,0,c.data);else a instanceof THREE.DataTexture?k.texImage2D(k.TEXTURE_2D,0,e,c.width,c.height,0,e,f,c.data):k.texImage2D(k.TEXTURE_2D,0,e,e,f,a.image);a.generateMipmaps&&d&&k.generateMipmap(k.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()}else k.activeTexture(k.TEXTURE0+b),k.bindTexture(k.TEXTURE_2D,a.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&!a.__webglFramebuffer){void 0===
a.depthBuffer&&(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.__webglTexture=k.createTexture();var c=0===(a.width&a.width-1)&&0===(a.height&a.height-1),d=H(a.format),e=H(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];k.bindTexture(k.TEXTURE_CUBE_MAP,a.__webglTexture);P(k.TEXTURE_CUBE_MAP,a,c);for(var f=0;6>f;f++){a.__webglFramebuffer[f]=k.createFramebuffer();a.__webglRenderbuffer[f]=k.createRenderbuffer();k.texImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,d,a.width,
a.height,0,d,e,null);var g=a,h=k.TEXTURE_CUBE_MAP_POSITIVE_X+f;k.bindFramebuffer(k.FRAMEBUFFER,a.__webglFramebuffer[f]);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,h,g.__webglTexture,0);B(a.__webglRenderbuffer[f],a)}c&&k.generateMipmap(k.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=k.createFramebuffer(),a.__webglRenderbuffer=k.createRenderbuffer(),k.bindTexture(k.TEXTURE_2D,a.__webglTexture),P(k.TEXTURE_2D,a,c),k.texImage2D(k.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=k.TEXTURE_2D,
k.bindFramebuffer(k.FRAMEBUFFER,a.__webglFramebuffer),k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,d,a.__webglTexture,0),B(a.__webglRenderbuffer,a),c&&k.generateMipmap(k.TEXTURE_2D);b?k.bindTexture(k.TEXTURE_CUBE_MAP,null):k.bindTexture(k.TEXTURE_2D,null);k.bindRenderbuffer(k.RENDERBUFFER,null);k.bindFramebuffer(k.FRAMEBUFFER,null)}a?(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=kb,a=Oa,d=Sa,e=Ka);b!==ca&&(k.bindFramebuffer(k.FRAMEBUFFER,
b),k.viewport(d,e,c,a),ca=b);lb=c;ab=a};this.shadowMapPlugin=new THREE.ShadowMapPlugin;this.addPrePlugin(this.shadowMapPlugin);this.addPostPlugin(new THREE.SpritePlugin);this.addPostPlugin(new THREE.LensFlarePlugin)};
THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0};
THREE.WebGLRenderTarget.prototype.clone=function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.anisotropy=this.anisotropy;a.minFilter=this.minFilter;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;return a};
THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);THREE.RenderableVertex=function(){this.positionWorld=new THREE.Vector3;this.positionScreen=new THREE.Vector4;this.visible=!0};THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld);this.positionScreen.copy(a.positionScreen)};
THREE.RenderableFace3=function(){this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.centroidWorld=new THREE.Vector3;this.centroidScreen=new THREE.Vector3;this.normalWorld=new THREE.Vector3;this.vertexNormalsWorld=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsLength=0;this.material=this.color=null;this.uvs=[[]];this.z=null};
THREE.RenderableFace4=function(){this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.v4=new THREE.RenderableVertex;this.centroidWorld=new THREE.Vector3;this.centroidScreen=new THREE.Vector3;this.normalWorld=new THREE.Vector3;this.vertexNormalsWorld=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsLength=0;this.material=this.color=null;this.uvs=[[]];this.z=null};
THREE.RenderableObject=function(){this.z=this.object=null};THREE.RenderableParticle=function(){this.rotation=this.z=this.y=this.x=this.object=null;this.scale=new THREE.Vector2;this.material=null};THREE.RenderableLine=function(){this.z=null;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.material=null};
THREE.ColorUtils={adjustHSV:function(a,b,c,d){var e=THREE.ColorUtils.__hsv;a.getHSV(e);e.h=THREE.Math.clamp(e.h+b,0,1);e.s=THREE.Math.clamp(e.s+c,0,1);e.v=THREE.Math.clamp(e.v+d,0,1);a.setHSV(e.h,e.s,e.v)}};THREE.ColorUtils.__hsv={h:0,s:0,v:0};
THREE.GeometryUtils={merge:function(a,b){var c,d,e=a.vertices.length,f=b instanceof THREE.Mesh?b.geometry:b,g=a.vertices,h=f.vertices,i=a.faces,j=f.faces,l=a.faceVertexUvs[0],f=f.faceVertexUvs[0];b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),c=b.matrix,d=new THREE.Matrix4,d.extractRotation(c,b.scale));for(var m=0,n=h.length;m<n;m++){var p=h[m].clone();c&&c.multiplyVector3(p);g.push(p)}m=0;for(n=j.length;m<n;m++){var p=j[m],o,s,t=p.vertexNormals,r=p.vertexColors;p instanceof THREE.Face3?
o=new THREE.Face3(p.a+e,p.b+e,p.c+e):p instanceof THREE.Face4&&(o=new THREE.Face4(p.a+e,p.b+e,p.c+e,p.d+e));o.normal.copy(p.normal);d&&d.multiplyVector3(o.normal);g=0;for(h=t.length;g<h;g++)s=t[g].clone(),d&&d.multiplyVector3(s),o.vertexNormals.push(s);o.color.copy(p.color);g=0;for(h=r.length;g<h;g++)s=r[g],o.vertexColors.push(s.clone());o.materialIndex=p.materialIndex;o.centroid.copy(p.centroid);c&&c.multiplyVector3(o.centroid);i.push(o)}m=0;for(n=f.length;m<n;m++){c=f[m];d=[];g=0;for(h=c.length;g<
h;g++)d.push(new THREE.UV(c[g].u,c[g].v));l.push(d)}},removeMaterials:function(a,b){for(var c={},d=0,e=b.length;d<e;d++)c[b[d]]=!0;for(var f,g=[],d=0,e=a.faces.length;d<e;d++)f=a.faces[d],f.materialIndex in c||g.push(f);a.faces=g},randomPointInTriangle:function(a,b,c){var d,e,f,g=new THREE.Vector3,h=THREE.GeometryUtils.__v1;d=THREE.GeometryUtils.random();e=THREE.GeometryUtils.random();1<d+e&&(d=1-d,e=1-e);f=1-d-e;g.copy(a);g.multiplyScalar(d);h.copy(b);h.multiplyScalar(e);g.addSelf(h);h.copy(c);h.multiplyScalar(f);
g.addSelf(h);return g},randomPointInFace:function(a,b,c){var d,e,f;if(a instanceof THREE.Face3)return d=b.vertices[a.a],e=b.vertices[a.b],f=b.vertices[a.c],THREE.GeometryUtils.randomPointInTriangle(d,e,f);if(a instanceof THREE.Face4){d=b.vertices[a.a];e=b.vertices[a.b];f=b.vertices[a.c];var b=b.vertices[a.d],g;c?a._area1&&a._area2?(c=a._area1,g=a._area2):(c=THREE.GeometryUtils.triangleArea(d,e,b),g=THREE.GeometryUtils.triangleArea(e,f,b),a._area1=c,a._area2=g):(c=THREE.GeometryUtils.triangleArea(d,
e,b),g=THREE.GeometryUtils.triangleArea(e,f,b));return THREE.GeometryUtils.random()*(c+g)<c?THREE.GeometryUtils.randomPointInTriangle(d,e,b):THREE.GeometryUtils.randomPointInTriangle(e,f,b)}},randomPointsInGeometry:function(a,b){function c(a){function b(c,d){if(d<c)return c;var e=c+Math.floor((d-c)/2);return j[e]>a?b(c,e-1):j[e]<a?b(e+1,d):e}return b(0,j.length-1)}var d,e,f=a.faces,g=a.vertices,h=f.length,i=0,j=[],l,m,n,p;for(e=0;e<h;e++)d=f[e],d instanceof THREE.Face3?(l=g[d.a],m=g[d.b],n=g[d.c],
d._area=THREE.GeometryUtils.triangleArea(l,m,n)):d instanceof THREE.Face4&&(l=g[d.a],m=g[d.b],n=g[d.c],p=g[d.d],d._area1=THREE.GeometryUtils.triangleArea(l,m,p),d._area2=THREE.GeometryUtils.triangleArea(m,n,p),d._area=d._area1+d._area2),i+=d._area,j[e]=i;d=[];for(e=0;e<b;e++)g=THREE.GeometryUtils.random()*i,g=c(g),d[e]=THREE.GeometryUtils.randomPointInFace(f[g],a,!0);return d},triangleArea:function(a,b,c){var d,e=THREE.GeometryUtils.__v1;e.sub(a,b);d=e.length();e.sub(a,c);a=e.length();e.sub(b,c);
c=e.length();b=0.5*(d+a+c);return Math.sqrt(b*(b-d)*(b-a)*(b-c))},center:function(a){a.computeBoundingBox();var b=a.boundingBox,c=new THREE.Vector3;c.add(b.min,b.max);c.multiplyScalar(-0.5);a.applyMatrix((new THREE.Matrix4).makeTranslation(c.x,c.y,c.z));a.computeBoundingBox();return c},normalizeUVs:function(a){for(var a=a.faceVertexUvs[0],b=0,c=a.length;b<c;b++)for(var d=a[b],e=0,f=d.length;e<f;e++)if(1!==d[e].u&&(d[e].u-=Math.floor(d[e].u)),1!==d[e].v)d[e].v-=Math.floor(d[e].v)},triangulateQuads:function(a){var b,
c,d,e,f=[],g=[],h=[];b=0;for(c=a.faceUvs.length;b<c;b++)g[b]=[];b=0;for(c=a.faceVertexUvs.length;b<c;b++)h[b]=[];b=0;for(c=a.faces.length;b<c;b++)if(d=a.faces[b],d instanceof THREE.Face4){e=d.a;var i=d.b,j=d.c,l=d.d,m=new THREE.Face3,n=new THREE.Face3;m.color.copy(d.color);n.color.copy(d.color);m.materialIndex=d.materialIndex;n.materialIndex=d.materialIndex;m.a=e;m.b=i;m.c=l;n.a=i;n.b=j;n.c=l;4===d.vertexColors.length&&(m.vertexColors[0]=d.vertexColors[0].clone(),m.vertexColors[1]=d.vertexColors[1].clone(),
m.vertexColors[2]=d.vertexColors[3].clone(),n.vertexColors[0]=d.vertexColors[1].clone(),n.vertexColors[1]=d.vertexColors[2].clone(),n.vertexColors[2]=d.vertexColors[3].clone());f.push(m,n);d=0;for(e=a.faceVertexUvs.length;d<e;d++)a.faceVertexUvs[d].length&&(m=a.faceVertexUvs[d][b],i=m[1],j=m[2],l=m[3],m=[m[0].clone(),i.clone(),l.clone()],i=[i.clone(),j.clone(),l.clone()],h[d].push(m,i));d=0;for(e=a.faceUvs.length;d<e;d++)a.faceUvs[d].length&&(i=a.faceUvs[d][b],g[d].push(i,i))}else{f.push(d);d=0;for(e=
a.faceUvs.length;d<e;d++)g[d].push(a.faceUvs[d][b]);d=0;for(e=a.faceVertexUvs.length;d<e;d++)h[d].push(a.faceVertexUvs[d][b])}a.faces=f;a.faceUvs=g;a.faceVertexUvs=h;a.computeCentroids();a.computeFaceNormals();a.computeVertexNormals();a.hasTangents&&a.computeTangents()},explode:function(a){for(var b=[],c=0,d=a.faces.length;c<d;c++){var e=b.length,f=a.faces[c];if(f instanceof THREE.Face4){var g=f.a,h=f.b,i=f.c,g=a.vertices[g],h=a.vertices[h],i=a.vertices[i],j=a.vertices[f.d];b.push(g.clone());b.push(h.clone());
b.push(i.clone());b.push(j.clone());f.a=e;f.b=e+1;f.c=e+2;f.d=e+3}else g=f.a,h=f.b,i=f.c,g=a.vertices[g],h=a.vertices[h],i=a.vertices[i],b.push(g.clone()),b.push(h.clone()),b.push(i.clone()),f.a=e,f.b=e+1,f.c=e+2}a.vertices=b;delete a.__tmpVertices},tessellate:function(a,b){var c,d,e,f,g,h,i,j,l,m,n,p,o,s,t,r,z,w,q,E=[],A=[];c=0;for(d=a.faceVertexUvs.length;c<d;c++)A[c]=[];c=0;for(d=a.faces.length;c<d;c++)if(e=a.faces[c],e instanceof THREE.Face3)if(f=e.a,g=e.b,h=e.c,j=a.vertices[f],l=a.vertices[g],
m=a.vertices[h],p=j.distanceTo(l),o=l.distanceTo(m),n=j.distanceTo(m),p>b||o>b||n>b){i=a.vertices.length;w=e.clone();q=e.clone();p>=o&&p>=n?(j=j.clone(),j.lerpSelf(l,0.5),w.a=f,w.b=i,w.c=h,q.a=i,q.b=g,q.c=h,3===e.vertexNormals.length&&(f=e.vertexNormals[0].clone(),f.lerpSelf(e.vertexNormals[1],0.5),w.vertexNormals[1].copy(f),q.vertexNormals[0].copy(f)),3===e.vertexColors.length&&(f=e.vertexColors[0].clone(),f.lerpSelf(e.vertexColors[1],0.5),w.vertexColors[1].copy(f),q.vertexColors[0].copy(f)),e=0):
o>=p&&o>=n?(j=l.clone(),j.lerpSelf(m,0.5),w.a=f,w.b=g,w.c=i,q.a=i,q.b=h,q.c=f,3===e.vertexNormals.length&&(f=e.vertexNormals[1].clone(),f.lerpSelf(e.vertexNormals[2],0.5),w.vertexNormals[2].copy(f),q.vertexNormals[0].copy(f),q.vertexNormals[1].copy(e.vertexNormals[2]),q.vertexNormals[2].copy(e.vertexNormals[0])),3===e.vertexColors.length&&(f=e.vertexColors[1].clone(),f.lerpSelf(e.vertexColors[2],0.5),w.vertexColors[2].copy(f),q.vertexColors[0].copy(f),q.vertexColors[1].copy(e.vertexColors[2]),q.vertexColors[2].copy(e.vertexColors[0])),
e=1):(j=j.clone(),j.lerpSelf(m,0.5),w.a=f,w.b=g,w.c=i,q.a=i,q.b=g,q.c=h,3===e.vertexNormals.length&&(f=e.vertexNormals[0].clone(),f.lerpSelf(e.vertexNormals[2],0.5),w.vertexNormals[2].copy(f),q.vertexNormals[0].copy(f)),3===e.vertexColors.length&&(f=e.vertexColors[0].clone(),f.lerpSelf(e.vertexColors[2],0.5),w.vertexColors[2].copy(f),q.vertexColors[0].copy(f)),e=2);E.push(w,q);a.vertices.push(j);f=0;for(g=a.faceVertexUvs.length;f<g;f++)a.faceVertexUvs[f].length&&(j=a.faceVertexUvs[f][c],q=j[0],h=
j[1],w=j[2],0===e?(l=q.clone(),l.lerpSelf(h,0.5),j=[q.clone(),l.clone(),w.clone()],h=[l.clone(),h.clone(),w.clone()]):1===e?(l=h.clone(),l.lerpSelf(w,0.5),j=[q.clone(),h.clone(),l.clone()],h=[l.clone(),w.clone(),q.clone()]):(l=q.clone(),l.lerpSelf(w,0.5),j=[q.clone(),h.clone(),l.clone()],h=[l.clone(),h.clone(),w.clone()]),A[f].push(j,h))}else{E.push(e);f=0;for(g=a.faceVertexUvs.length;f<g;f++)A[f].push(a.faceVertexUvs[f][c])}else if(f=e.a,g=e.b,h=e.c,i=e.d,j=a.vertices[f],l=a.vertices[g],m=a.vertices[h],
n=a.vertices[i],p=j.distanceTo(l),o=l.distanceTo(m),s=m.distanceTo(n),t=j.distanceTo(n),p>b||o>b||s>b||t>b){r=a.vertices.length;z=a.vertices.length+1;w=e.clone();q=e.clone();p>=o&&p>=s&&p>=t||s>=o&&s>=p&&s>=t?(p=j.clone(),p.lerpSelf(l,0.5),l=m.clone(),l.lerpSelf(n,0.5),w.a=f,w.b=r,w.c=z,w.d=i,q.a=r,q.b=g,q.c=h,q.d=z,4===e.vertexNormals.length&&(f=e.vertexNormals[0].clone(),f.lerpSelf(e.vertexNormals[1],0.5),g=e.vertexNormals[2].clone(),g.lerpSelf(e.vertexNormals[3],0.5),w.vertexNormals[1].copy(f),
w.vertexNormals[2].copy(g),q.vertexNormals[0].copy(f),q.vertexNormals[3].copy(g)),4===e.vertexColors.length&&(f=e.vertexColors[0].clone(),f.lerpSelf(e.vertexColors[1],0.5),g=e.vertexColors[2].clone(),g.lerpSelf(e.vertexColors[3],0.5),w.vertexColors[1].copy(f),w.vertexColors[2].copy(g),q.vertexColors[0].copy(f),q.vertexColors[3].copy(g)),e=0):(p=l.clone(),p.lerpSelf(m,0.5),l=n.clone(),l.lerpSelf(j,0.5),w.a=f,w.b=g,w.c=r,w.d=z,q.a=z,q.b=r,q.c=h,q.d=i,4===e.vertexNormals.length&&(f=e.vertexNormals[1].clone(),
f.lerpSelf(e.vertexNormals[2],0.5),g=e.vertexNormals[3].clone(),g.lerpSelf(e.vertexNormals[0],0.5),w.vertexNormals[2].copy(f),w.vertexNormals[3].copy(g),q.vertexNormals[0].copy(g),q.vertexNormals[1].copy(f)),4===e.vertexColors.length&&(f=e.vertexColors[1].clone(),f.lerpSelf(e.vertexColors[2],0.5),g=e.vertexColors[3].clone(),g.lerpSelf(e.vertexColors[0],0.5),w.vertexColors[2].copy(f),w.vertexColors[3].copy(g),q.vertexColors[0].copy(g),q.vertexColors[1].copy(f)),e=1);E.push(w,q);a.vertices.push(p,l);
f=0;for(g=a.faceVertexUvs.length;f<g;f++)a.faceVertexUvs[f].length&&(j=a.faceVertexUvs[f][c],q=j[0],h=j[1],w=j[2],j=j[3],0===e?(l=q.clone(),l.lerpSelf(h,0.5),m=w.clone(),m.lerpSelf(j,0.5),q=[q.clone(),l.clone(),m.clone(),j.clone()],h=[l.clone(),h.clone(),w.clone(),m.clone()]):(l=h.clone(),l.lerpSelf(w,0.5),m=j.clone(),m.lerpSelf(q,0.5),q=[q.clone(),h.clone(),l.clone(),m.clone()],h=[m.clone(),l.clone(),w.clone(),j.clone()]),A[f].push(q,h))}else{E.push(e);f=0;for(g=a.faceVertexUvs.length;f<g;f++)A[f].push(a.faceVertexUvs[f][c])}a.faces=
E;a.faceVertexUvs=A}};THREE.GeometryUtils.random=THREE.Math.random16;THREE.GeometryUtils.__v1=new THREE.Vector3;
THREE.ImageUtils={crossOrigin:"anonymous",loadTexture:function(a,b,c,d){var e=new Image,f=new THREE.Texture(e,b),b=new THREE.ImageLoader;b.addEventListener("load",function(a){f.image=a.content;f.needsUpdate=!0;c&&c(f)});b.addEventListener("error",function(a){d&&d(a.message)});b.crossOrigin=this.crossOrigin;b.load(a,e);f.sourceFile=a;return f},loadCompressedTexture:function(a,b,c,d){var e=new THREE.CompressedTexture;e.mapping=b;var f=new XMLHttpRequest;f.onload=function(){var a=THREE.ImageUtils.parseDDS(f.response,
!0);e.format=a.format;e.mipmaps=a.mipmaps;e.image.width=a.width;e.image.height=a.height;e.generateMipmaps=!1;e.needsUpdate=!0;c&&c(e)};f.onerror=d;f.open("GET",a,!0);f.responseType="arraybuffer";f.send(null);return e},loadTextureCube:function(a,b,c,d){var e=[];e.loadCount=0;var f=new THREE.Texture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;for(var b=0,g=a.length;b<g;++b){var h=new Image;e[b]=h;h.onload=function(){e.loadCount=e.loadCount+1;if(e.loadCount===6){f.needsUpdate=true;c&&c()}};h.onerror=
d;h.crossOrigin=this.crossOrigin;h.src=a[b]}return f},loadCompressedTextureCube:function(a,b,c,d){var e=[];e.loadCount=0;var f=new THREE.CompressedTexture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;f.generateMipmaps=!1;for(var b=function(a,b){return function(){var d=THREE.ImageUtils.parseDDS(a.response,true);b.format=d.format;b.mipmaps=d.mipmaps;b.width=d.width;b.height=d.height;e.loadCount=e.loadCount+1;if(e.loadCount===6){f.format=d.format;f.needsUpdate=true;c&&c()}}},g=0,h=a.length;g<h;++g){var i=
{};e[g]=i;var j=new XMLHttpRequest;j.onload=b(j,i);j.onerror=d;j.open("GET",a[g],!0);j.responseType="arraybuffer";j.send(null)}return f},parseDDS:function(a,b){function c(a){return a.charCodeAt(0)+(a.charCodeAt(1)<<8)+(a.charCodeAt(2)<<16)+(a.charCodeAt(3)<<24)}var d={mipmaps:[],width:0,height:0,format:null,mipmapCount:1},e=c("DXT1"),f=c("DXT3"),g=c("DXT5"),h=new Int32Array(a,0,31);if(542327876!==h[0])return console.error("ImageUtils.parseDDS(): Invalid magic number in DDS header"),d;if(!h[20]&4)return console.error("ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code"),
d;var i=h[21];switch(i){case e:e=8;d.format=THREE.RGB_S3TC_DXT1_Format;break;case f:e=16;d.format=THREE.RGBA_S3TC_DXT3_Format;break;case g:e=16;d.format=THREE.RGBA_S3TC_DXT5_Format;break;default:return console.error("ImageUtils.parseDDS(): Unsupported FourCC code: ",String.fromCharCode(i&255,i>>8&255,i>>16&255,i>>24&255)),d}d.mipmapCount=1;h[2]&131072&&!1!==b&&(d.mipmapCount=Math.max(1,h[7]));d.width=h[4];d.height=h[3];h=h[1]+4;f=d.width;g=d.height;for(i=0;i<d.mipmapCount;i++){var j=Math.max(4,f)/
4*Math.max(4,g)/4*e,l={data:new Uint8Array(a,h,j),width:f,height:g};d.mipmaps.push(l);h+=j;f=Math.max(0.5*f,1);g=Math.max(0.5*g,1)}return d},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]},b=b|1,d=a.width,e=a.height,f=document.createElement("canvas");f.width=d;f.height=e;var g=f.getContext("2d");g.drawImage(a,0,0);for(var h=g.getImageData(0,0,d,e).data,i=g.createImageData(d,e),j=i.data,l=0;l<d;l++)for(var m=0;m<e;m++){var n=
0>m-1?0:m-1,p=m+1>e-1?e-1:m+1,o=0>l-1?0:l-1,s=l+1>d-1?d-1:l+1,t=[],r=[0,0,h[4*(m*d+l)]/255*b];t.push([-1,0,h[4*(m*d+o)]/255*b]);t.push([-1,-1,h[4*(n*d+o)]/255*b]);t.push([0,-1,h[4*(n*d+l)]/255*b]);t.push([1,-1,h[4*(n*d+s)]/255*b]);t.push([1,0,h[4*(m*d+s)]/255*b]);t.push([1,1,h[4*(p*d+s)]/255*b]);t.push([0,1,h[4*(p*d+l)]/255*b]);t.push([-1,1,h[4*(p*d+o)]/255*b]);n=[];o=t.length;for(p=0;p<o;p++){var s=t[p],z=t[(p+1)%o],s=[s[0]-r[0],s[1]-r[1],s[2]-r[2]],z=[z[0]-r[0],z[1]-r[1],z[2]-r[2]];n.push(c([s[1]*
z[2]-s[2]*z[1],s[2]*z[0]-s[0]*z[2],s[0]*z[1]-s[1]*z[0]]))}t=[0,0,0];for(p=0;p<n.length;p++)t[0]+=n[p][0],t[1]+=n[p][1],t[2]+=n[p][2];t[0]/=n.length;t[1]/=n.length;t[2]/=n.length;r=4*(m*d+l);j[r]=255*((t[0]+1)/2)|0;j[r+1]=255*((t[1]+1)/2)|0;j[r+2]=255*t[2]|0;j[r+3]=255}g.putImageData(i,0,0);return f},generateDataTexture:function(a,b,c){for(var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),g=Math.floor(255*c.g),c=Math.floor(255*c.b),h=0;h<d;h++)e[3*h]=f,e[3*h+1]=g,e[3*h+2]=c;a=new THREE.DataTexture(e,
a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};
THREE.ShaderUtils={lib:{fresnel:{uniforms:{mRefractionRatio:{type:"f",value:1.02},mFresnelBias:{type:"f",value:0.1},mFresnelPower:{type:"f",value:2},mFresnelScale:{type:"f",value:1},tCube:{type:"t",value:null}},fragmentShader:"uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}",
vertexShader:"uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\nvec3 I = worldPosition.xyz - cameraPosition;\nvReflect = reflect( I, worldNormal );\nvRefract[0] = refract( normalize( I ), worldNormal, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"},
normal:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{enableAO:{type:"i",value:0},enableDiffuse:{type:"i",value:0},enableSpecular:{type:"i",value:0},enableReflection:{type:"i",value:0},enableDisplacement:{type:"i",value:0},tDisplacement:{type:"t",value:null},tDiffuse:{type:"t",value:null},tCube:{type:"t",value:null},tNormal:{type:"t",value:null},tSpecular:{type:"t",value:null},tAO:{type:"t",value:null},uNormalScale:{type:"v2",value:new THREE.Vector2(1,
1)},uDisplacementBias:{type:"f",value:0},uDisplacementScale:{type:"f",value:1},uDiffuseColor:{type:"c",value:new THREE.Color(16777215)},uSpecularColor:{type:"c",value:new THREE.Color(1118481)},uAmbientColor:{type:"c",value:new THREE.Color(16777215)},uShininess:{type:"f",value:30},uOpacity:{type:"f",value:1},useRefract:{type:"i",value:0},uRefractionRatio:{type:"f",value:0.98},uReflectivity:{type:"f",value:0.5},uOffset:{type:"v2",value:new THREE.Vector2(0,0)},uRepeat:{type:"v2",value:new THREE.Vector2(1,
1)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),fragmentShader:["uniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform float uOpacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float uRefractionRatio;\nuniform float uReflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3( 1.0 ), uOpacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse ) {\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( tDiffuse, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n#endif\n}\nif( enableAO ) {\n#ifdef GAMMA_INPUT\nvec4 aoColor = texture2D( tAO, vUv );\naoColor.xyz *= aoColor.xyz;\ngl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n#endif\n}\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\nvec3 finalNormal = tsb * normalTex;\n#ifdef FLIP_SIDED\nfinalNormal = -finalNormal;\n#endif\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\nfloat pointDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\npointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\npointVector = normalize( pointVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n#endif\npointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\nvec3 pointHalfVector = normalize( pointVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n#else\npointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\nfloat spotDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\nspotVector = normalize( spotVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n#endif\nspotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;\nvec3 spotHalfVector = normalize( spotVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\n#ifdef WRAP_AROUND\nfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\nfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n#endif\ndirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += uDiffuseColor * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;\n#endif\nif ( enableReflection ) {\nvec3 vReflect;\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, normal, uRefractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, normal );\n}\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );\n}",
THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,"#ifdef USE_SKINNING\nvNormal = normalize( normalMatrix * skinnedNormal.xyz );\nvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\nvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n#else\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\n#endif\nvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\nvUv = uv * uRepeat + uOffset;\nvec3 displacedPosition;\n#ifdef VERTEX_TEXTURES\nif ( enableDisplacement ) {\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\ndisplacedPosition = position + normalize( normal ) * df;\n} else {\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n}\n#else\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n#endif\nvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\nvWorldPosition = worldPosition.xyz;\nvViewPosition = -mvPosition.xyz;\n#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif\n}"].join("\n")},
cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:"varying vec3 vWorldPosition;\nvoid main() {\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvWorldPosition = worldPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\nvoid main() {\ngl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n}"}}};
THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){return this.faces[this.face][this.weight][this.style]},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=a},drawText:function(a){for(var b=this.getFace(),c=this.size/b.resolution,d=
0,e=String(a).split(""),f=e.length,g=[],a=0;a<f;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;g.push(h.path)}return{paths:g,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],g,h,i,j,l,m,n,p,o,s,t,r=b.glyphs[a]||b.glyphs["?"];if(r){if(r.o){b=r._cachedOutline||(r._cachedOutline=r.o.split(" "));j=b.length;for(a=0;a<j;)switch(i=b[a++],i){case "m":i=b[a++]*c+d;l=b[a++]*c;e.moveTo(i,l);break;case "l":i=b[a++]*c+d;l=b[a++]*c;e.lineTo(i,l);break;case "q":i=b[a++]*
c+d;l=b[a++]*c;p=b[a++]*c+d;o=b[a++]*c;e.quadraticCurveTo(p,o,i,l);if(g=f[f.length-1]){m=g.x;n=g.y;g=1;for(h=this.divisions;g<=h;g++){var z=g/h;THREE.Shape.Utils.b2(z,m,p,i);THREE.Shape.Utils.b2(z,n,o,l)}}break;case "b":if(i=b[a++]*c+d,l=b[a++]*c,p=b[a++]*c+d,o=b[a++]*-c,s=b[a++]*c+d,t=b[a++]*-c,e.bezierCurveTo(i,l,p,o,s,t),g=f[f.length-1]){m=g.x;n=g.y;g=1;for(h=this.divisions;g<=h;g++)z=g/h,THREE.Shape.Utils.b3(z,m,p,s,i),THREE.Shape.Utils.b3(z,n,o,t,l)}}}return{offset:r.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){var b=b||{},c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",f=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,g=0;g<b;f=g++)e+=a[f].x*a[g].y-a[g].x*a[f].y;return 0.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var f=[],g=[],h=[],i,j,l;if(0<b(a))for(j=0;j<e;j++)g[j]=j;else for(j=0;j<e;j++)g[j]=e-1-j;var m=2*e;for(j=e-1;2<e;){if(0>=m--){console.log("Warning, unable to triangulate polygon!");break}i=j;e<=i&&(i=0);j=i+1;e<=j&&(j=0);l=j+1;e<=l&&(l=0);var n;a:{n=a;var p=i,o=j,s=l,t=e,r=g,z=void 0,w=void 0,q=void 0,E=void 0,A=void 0,
v=void 0,u=void 0,D=void 0,C=void 0,w=n[r[p]].x,q=n[r[p]].y,E=n[r[o]].x,A=n[r[o]].y,v=n[r[s]].x,u=n[r[s]].y;if(1E-10>(E-w)*(u-q)-(A-q)*(v-w))n=!1;else{for(z=0;z<t;z++)if(!(z==p||z==o||z==s)){var D=n[r[z]].x,C=n[r[z]].y,G=void 0,P=void 0,B=void 0,K=void 0,H=void 0,I=void 0,N=void 0,O=void 0,R=void 0,ga=void 0,M=void 0,J=void 0,G=B=H=void 0,G=v-E,P=u-A,B=w-v,K=q-u,H=E-w,I=A-q,N=D-w,O=C-q,R=D-E,ga=C-A,M=D-v,J=C-u,G=G*ga-P*R,H=H*O-I*N,B=B*J-K*M;if(0<=G&&0<=B&&0<=H){n=!1;break a}}n=!0}}if(n){f.push([a[g[i]],
a[g[j]],a[g[l]]]);h.push([g[i],g[j],g[l]]);i=j;for(l=j+1;l<e;i++,l++)g[i]=g[l];e--;m=2*e}}return d?h:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(){console.log("Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};
THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};
THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b};THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};
THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,i;g<=h;)if(d=Math.floor(g+(h-g)/2),i=c[d]-f,0>i)g=d+1;else if(0<i)h=d-1;else{h=d;break}d=h;if(c[d]==f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1)};THREE.Curve.prototype.getNormalVector=function(a){a=this.getTangent(a);return new THREE.Vector2(-a.y,a.x)};
THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4,a=a+1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().subSelf(b).normalize()};THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().subSelf(this.v1);b.multiplyScalar(a).addSelf(this.v1);return b};
THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};THREE.LineCurve.prototype.getTangent=function(){return this.v2.clone().subSelf(this.v1).normalize()};THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return new THREE.Vector2(b,a)};THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);b=new THREE.Vector2(b,a);b.normalize();return b};
THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};
THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.SplineCurve.prototype.getPoint=function(a){var b=new THREE.Vector2,c=[],d=this.points,e;e=(d.length-1)*a;a=Math.floor(e);e-=a;c[0]=0==a?a:a-1;c[1]=a;c[2]=a>d.length-2?d.length-1:a+1;c[3]=a>d.length-3?d.length-1:a+2;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);return b};
THREE.EllipseCurve=function(a,b,c,d,e,f,g){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);THREE.EllipseCurve.prototype.getPoint=function(a){var b=this.aEndAngle-this.aStartAngle;this.aClockwise||(a=1-a);b=this.aStartAngle+a*b;a=this.aX+this.xRadius*Math.cos(b);b=this.aY+this.yRadius*Math.sin(b);return new THREE.Vector2(a,b)};
THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){var a=0.5*(c-a),d=0.5*(d-b),f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.getPoint=b;return a};THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.sub(this.v2,this.v1);b.multiplyScalar(a);b.addSelf(this.v1);return b});
THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b,c;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);c=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);a=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return new THREE.Vector3(b,c,a)});
THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b,c;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);c=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);a=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return new THREE.Vector3(b,c,a)});
THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e,a=(d.length-1)*a;e=Math.floor(a);a-=e;c[0]=0==e?e:e-1;c[1]=e;c[2]=e>d.length-2?d.length-1:e+1;c[3]=e>d.length-3?d.length-1:e+2;e=d[c[0]];var f=d[c[1]],g=d[c[2]],c=d[c[3]];b.x=THREE.Curve.Utils.interpolate(e.x,f.x,g.x,c.x,a);b.y=THREE.Curve.Utils.interpolate(e.y,f.y,g.y,c.y,a);b.z=THREE.Curve.Utils.interpolate(e.z,f.z,g.z,c.z,a);return b});
THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;e=(d.length-0)*a;a=Math.floor(e);e-=a;a+=0<a?0:(Math.floor(Math.abs(a)/d.length)+1)*d.length;c[0]=(a-1)%d.length;c[1]=a%d.length;c[2]=(a+1)%d.length;c[3]=(a+2)%d.length;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);b.z=THREE.Curve.Utils.interpolate(d[c[0]].z,
d[c[1]].z,d[c[2]].z,d[c[3]].z,e);return b});THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};
THREE.CurvePath.prototype.getPoint=function(a){for(var b=a*this.getLength(),c=this.getCurveLengths(),a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,g;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var h,i,j,l,m=a[0]instanceof THREE.Vector3;l=m?new THREE.Vector3:new THREE.Vector2;i=0;for(j=a.length;i<j;i++)h=a[i],h.x>b?b=h.x:h.x<e&&(e=h.x),h.y>c?c=h.y:h.y<f&&(f=h.y),m&&(h.z>d?d=h.z:h.z<g&&(g=h.z)),l.addSelf(h);a={minX:e,minY:f,maxX:b,maxY:c,centroid:l.divideScalar(j)};m&&(a.maxZ=d,a.minZ=g);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,g,h,i;d=0;for(e=a.length;d<e;d++)f=a[d],g=f.x,h=f.y,i=g/c.maxX,i=b.getUtoTmapping(i,g),g=b.getPoint(i),h=b.getNormalVector(i).multiplyScalar(h),f.x=g.x+h.x,f.y=g.y+h.y;return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld=function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?(this.matrixWorld.multiply(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(this.translationWorld,this.rotationWorld,this.scaleWorld),this.matrix.decompose(this.translationObject,this.rotationObject,this.scaleObject),this.matrixWorld.compose(this.translationWorld,this.rotationObject,this.scaleWorld)):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=
!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)};THREE.Gyroscope.prototype.translationWorld=new THREE.Vector3;THREE.Gyroscope.prototype.translationObject=new THREE.Vector3;THREE.Gyroscope.prototype.rotationWorld=new THREE.Quaternion;THREE.Gyroscope.prototype.rotationObject=new THREE.Quaternion;THREE.Gyroscope.prototype.scaleWorld=new THREE.Vector3;THREE.Gyroscope.prototype.scaleObject=new THREE.Vector3;
THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};
THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:g})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args;this.absarc(a+g[g.length-2],b+g[g.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g){var h=this.actions[this.actions.length-1].args;this.absellipse(a+h[h.length-2],b+h[h.length-1],c,d,e,f,g)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments),i=new THREE.EllipseCurve(a,b,c,d,e,f,g);this.curves.push(i);i=i.getPoint(g?1:0);h.push(i.x);h.push(i.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:h})};
THREE.Path.prototype.getSpacedPoints=function(a){a||(a=40);for(var b=[],c=0;c<a;c++)b.push(this.getPoint(c/a));return b};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(a,b);var a=a||12,c=[],d,e,f,g,h,i,j,l,m,n,p,o,s;d=0;for(e=this.actions.length;d<e;d++)switch(f=this.actions[d],g=f.action,f=f.args,g){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=f[2];i=f[3];m=f[0];n=f[1];0<c.length?(g=c[c.length-1],p=g.x,
o=g.y):(g=this.actions[d-1].args,p=g[g.length-2],o=g[g.length-1]);for(f=1;f<=a;f++)s=f/a,g=THREE.Shape.Utils.b2(s,p,m,h),s=THREE.Shape.Utils.b2(s,o,n,i),c.push(new THREE.Vector2(g,s));break;case THREE.PathActions.BEZIER_CURVE_TO:h=f[4];i=f[5];m=f[0];n=f[1];j=f[2];l=f[3];0<c.length?(g=c[c.length-1],p=g.x,o=g.y):(g=this.actions[d-1].args,p=g[g.length-2],o=g[g.length-1]);for(f=1;f<=a;f++)s=f/a,g=THREE.Shape.Utils.b3(s,p,m,j,h),s=THREE.Shape.Utils.b3(s,o,n,l,i),c.push(new THREE.Vector2(g,s));break;case THREE.PathActions.CSPLINE_THRU:g=
this.actions[d-1].args;s=[new THREE.Vector2(g[g.length-2],g[g.length-1])];g=a*f[0].length;s=s.concat(f[0]);s=new THREE.SplineCurve(s);for(f=1;f<=g;f++)c.push(s.getPointAt(f/g));break;case THREE.PathActions.ARC:h=f[0];i=f[1];n=f[2];j=f[3];g=f[4];m=!!f[5];p=g-j;o=2*a;for(f=1;f<=o;f++)s=f/o,m||(s=1-s),s=j+s*p,g=h+n*Math.cos(s),s=i+n*Math.sin(s),c.push(new THREE.Vector2(g,s));break;case THREE.PathActions.ELLIPSE:h=f[0];i=f[1];n=f[2];l=f[3];j=f[4];g=f[5];m=!!f[6];p=g-j;o=2*a;for(f=1;f<=o;f++)s=f/o,m||
(s=1-s),s=j+s*p,g=h+n*Math.cos(s),s=i+l*Math.sin(s),c.push(new THREE.Vector2(g,s))}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(){var a,b,c,d,e=[],f=new THREE.Path;a=0;for(b=this.actions.length;a<b;a++)c=this.actions[a],d=c.args,c=c.action,c==THREE.PathActions.MOVE_TO&&0!=f.actions.length&&(e.push(f),f=new THREE.Path),f[c].apply(f,d);0!=f.actions.length&&e.push(f);if(0==e.length)return[];var g;d=[];a=!THREE.Shape.Utils.isClockWise(e[0].getPoints());if(1==e.length)return f=e[0],g=new THREE.Shape,g.actions=f.actions,g.curves=f.curves,d.push(g),d;if(a){g=new THREE.Shape;a=0;for(b=e.length;a<
b;a++)f=e[a],THREE.Shape.Utils.isClockWise(f.getPoints())?(g.actions=f.actions,g.curves=f.curves,d.push(g),g=new THREE.Shape):g.holes.push(f)}else{a=0;for(b=e.length;a<b;a++)f=e[a],THREE.Shape.Utils.isClockWise(f.getPoints())?(g&&d.push(g),g=new THREE.Shape,g.actions=f.actions,g.curves=f.curves):g.holes.push(f);d.push(g)}return d};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);
THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};
THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={removeHoles:function(a,b){var c=a.concat(),d=c.concat(),e,f,g,h,i,j,l,m,n,p,o=[];for(i=0;i<b.length;i++){j=b[i];Array.prototype.push.apply(d,j);f=Number.POSITIVE_INFINITY;for(e=0;e<j.length;e++){n=j[e];p=[];for(m=0;m<c.length;m++)l=c[m],l=n.distanceToSquared(l),p.push(l),l<f&&(f=l,g=e,h=m)}e=0<=h-1?h-1:c.length-1;f=0<=g-1?g-1:j.length-1;var s=[j[g],c[h],c[e]];m=THREE.FontUtils.Triangulate.area(s);var t=[j[g],j[f],c[h]];n=THREE.FontUtils.Triangulate.area(t);p=h;l=g;h+=1;g+=-1;0>
h&&(h+=c.length);h%=c.length;0>g&&(g+=j.length);g%=j.length;e=0<=h-1?h-1:c.length-1;f=0<=g-1?g-1:j.length-1;s=[j[g],c[h],c[e]];s=THREE.FontUtils.Triangulate.area(s);t=[j[g],j[f],c[h]];t=THREE.FontUtils.Triangulate.area(t);m+n>s+t&&(h=p,g=l,0>h&&(h+=c.length),h%=c.length,0>g&&(g+=j.length),g%=j.length,e=0<=h-1?h-1:c.length-1,f=0<=g-1?g-1:j.length-1);m=c.slice(0,h);n=c.slice(h);p=j.slice(g);l=j.slice(0,g);f=[j[g],j[f],c[h]];o.push([j[g],c[h],c[e]]);o.push(f);c=m.concat(p).concat(l).concat(n)}return{shape:c,
isolatedPts:o,allpoints:d}},triangulateShape:function(a,b){var c=THREE.Shape.Utils.removeHoles(a,b),d=c.allpoints,e=c.isolatedPts,c=THREE.FontUtils.Triangulate(c.shape,!1),f,g,h,i,j={};f=0;for(g=d.length;f<g;f++)i=d[f].x+":"+d[f].y,void 0!==j[i]&&console.log("Duplicate point",i),j[i]=f;f=0;for(g=c.length;f<g;f++){h=c[f];for(d=0;3>d;d++)i=h[d].x+":"+h[d].y,i=j[i],void 0!==i&&(h[d]=i)}f=0;for(g=e.length;f<g;f++){h=e[f];for(d=0;3>d;d++)i=h[d].x+":"+h[d].y,i=j[i],void 0!==i&&(h[d]=i)}return c.concat(e)},
isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,b)+this.b3p1(a,c)+this.b3p2(a,d)+
this.b3p3(a,e)}};
THREE.AnimationHandler=function(){var a=[],b={},c={update:function(b){for(var c=0;c<a.length;c++)a[c].update(b)},addToUpdate:function(b){-1===a.indexOf(b)&&a.push(b)},removeFromUpdate:function(b){b=a.indexOf(b);-1!==b&&a.splice(b,1)},add:function(a){void 0!==b[a.name]&&console.log("THREE.AnimationHandler.add: Warning! "+a.name+" already exists in library. Overwriting.");b[a.name]=a;if(!0!==a.initialized){for(var c=0;c<a.hierarchy.length;c++){for(var d=0;d<a.hierarchy[c].keys.length;d++)if(0>a.hierarchy[c].keys[d].time&&
(a.hierarchy[c].keys[d].time=0),void 0!==a.hierarchy[c].keys[d].rot&&!(a.hierarchy[c].keys[d].rot instanceof THREE.Quaternion)){var h=a.hierarchy[c].keys[d].rot;a.hierarchy[c].keys[d].rot=new THREE.Quaternion(h[0],h[1],h[2],h[3])}if(a.hierarchy[c].keys.length&&void 0!==a.hierarchy[c].keys[0].morphTargets){h={};for(d=0;d<a.hierarchy[c].keys.length;d++)for(var i=0;i<a.hierarchy[c].keys[d].morphTargets.length;i++){var j=a.hierarchy[c].keys[d].morphTargets[i];h[j]=-1}a.hierarchy[c].usedMorphTargets=h;
for(d=0;d<a.hierarchy[c].keys.length;d++){var l={};for(j in h){for(i=0;i<a.hierarchy[c].keys[d].morphTargets.length;i++)if(a.hierarchy[c].keys[d].morphTargets[i]===j){l[j]=a.hierarchy[c].keys[d].morphTargetsInfluences[i];break}i===a.hierarchy[c].keys[d].morphTargets.length&&(l[j]=0)}a.hierarchy[c].keys[d].morphTargetsInfluences=l}}for(d=1;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].time===a.hierarchy[c].keys[d-1].time&&(a.hierarchy[c].keys.splice(d,1),d--);for(d=0;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].index=
d}d=parseInt(a.length*a.fps,10);a.JIT={};a.JIT.hierarchy=[];for(c=0;c<a.hierarchy.length;c++)a.JIT.hierarchy.push(Array(d));a.initialized=!0}},get:function(a){if("string"===typeof a){if(b[a])return b[a];console.log("THREE.AnimationHandler.get: Couldn't find animation "+a);return null}},parse:function(a){var b=[];if(a instanceof THREE.SkinnedMesh)for(var c=0;c<a.bones.length;c++)b.push(a.bones[c]);else d(a,b);return b}},d=function(a,b){b.push(a);for(var c=0;c<a.children.length;c++)d(a.children[c],
b)};c.LINEAR=0;c.CATMULLROM=1;c.CATMULLROM_FORWARD=2;return c}();THREE.Animation=function(a,b,c){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=this.isPaused=!0;this.interpolationType=void 0!==c?c:THREE.AnimationHandler.LINEAR;this.points=[];this.target=new THREE.Vector3};
THREE.Animation.prototype.play=function(a,b){if(!1===this.isPlaying){this.isPlaying=!0;this.loop=void 0!==a?a:!0;this.currentTime=void 0!==b?b:0;var c,d=this.hierarchy.length,e;for(c=0;c<d;c++){e=this.hierarchy[c];this.interpolationType!==THREE.AnimationHandler.CATMULLROM_FORWARD&&(e.useQuaternion=!0);e.matrixAutoUpdate=!0;void 0===e.animationCache&&(e.animationCache={},e.animationCache.prevKey={pos:0,rot:0,scl:0},e.animationCache.nextKey={pos:0,rot:0,scl:0},e.animationCache.originalMatrix=e instanceof
THREE.Bone?e.skinMatrix:e.matrix);var f=e.animationCache.prevKey;e=e.animationCache.nextKey;f.pos=this.data.hierarchy[c].keys[0];f.rot=this.data.hierarchy[c].keys[0];f.scl=this.data.hierarchy[c].keys[0];e.pos=this.getNextKeyWith("pos",c,1);e.rot=this.getNextKeyWith("rot",c,1);e.scl=this.getNextKeyWith("scl",c,1)}this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};
THREE.Animation.prototype.pause=function(){!0===this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};THREE.Animation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.removeFromUpdate(this)};
THREE.Animation.prototype.update=function(a){if(!1!==this.isPlaying){var b=["pos","rot","scl"],c,d,e,f,g,h,i,j,l;l=this.currentTime+=a*this.timeScale;j=this.currentTime%=this.data.length;parseInt(Math.min(j*this.data.fps,this.data.length*this.data.fps),10);for(var m=0,n=this.hierarchy.length;m<n;m++){a=this.hierarchy[m];i=a.animationCache;for(var p=0;3>p;p++){c=b[p];g=i.prevKey[c];h=i.nextKey[c];if(h.time<=l){if(j<l)if(this.loop){g=this.data.hierarchy[m].keys[0];for(h=this.getNextKeyWith(c,m,1);h.time<
j;)g=h,h=this.getNextKeyWith(c,m,h.index+1)}else{this.stop();return}else{do g=h,h=this.getNextKeyWith(c,m,h.index+1);while(h.time<j)}i.prevKey[c]=g;i.nextKey[c]=h}a.matrixAutoUpdate=!0;a.matrixWorldNeedsUpdate=!0;d=(j-g.time)/(h.time-g.time);e=g[c];f=h[c];if(0>d||1<d)console.log("THREE.Animation.update: Warning! Scale out of bounds:"+d+" on bone "+m),d=0>d?0:1;if("pos"===c)if(c=a.position,this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=e[0]+(f[0]-e[0])*d,c.y=e[1]+(f[1]-e[1])*d,c.z=e[2]+
(f[2]-e[2])*d;else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)this.points[0]=this.getPrevKeyWith("pos",m,g.index-1).pos,this.points[1]=e,this.points[2]=f,this.points[3]=this.getNextKeyWith("pos",m,h.index+1).pos,d=0.33*d+0.33,e=this.interpolateCatmullRom(this.points,d),c.x=e[0],c.y=e[1],c.z=e[2],this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(d=this.interpolateCatmullRom(this.points,1.01*d),
this.target.set(d[0],d[1],d[2]),this.target.subSelf(c),this.target.y=0,this.target.normalize(),d=Math.atan2(this.target.x,this.target.z),a.rotation.set(0,d,0))}else"rot"===c?THREE.Quaternion.slerp(e,f,a.quaternion,d):"scl"===c&&(c=a.scale,c.x=e[0]+(f[0]-e[0])*d,c.y=e[1]+(f[1]-e[1])*d,c.z=e[2]+(f[2]-e[2])*d)}}}};
THREE.Animation.prototype.interpolateCatmullRom=function(a,b){var c=[],d=[],e,f,g,h,i,j;e=(a.length-1)*b;f=Math.floor(e);e-=f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>a.length-2?f:f+1;c[3]=f>a.length-3?f:f+2;f=a[c[0]];h=a[c[1]];i=a[c[2]];j=a[c[3]];c=e*e;g=e*c;d[0]=this.interpolate(f[0],h[0],i[0],j[0],e,c,g);d[1]=this.interpolate(f[1],h[1],i[1],j[1],e,c,g);d[2]=this.interpolate(f[2],h[2],i[2],j[2],e,c,g);return d};
THREE.Animation.prototype.interpolate=function(a,b,c,d,e,f,g){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b};THREE.Animation.prototype.getNextKeyWith=function(a,b,c){for(var d=this.data.hierarchy[b].keys,c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]};
THREE.Animation.prototype.getPrevKeyWith=function(a,b,c){for(var d=this.data.hierarchy[b].keys,c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]};
THREE.KeyFrameAnimation=function(a,b,c){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=0.001;this.isPlaying=!1;this.loop=this.isPaused=!0;this.JITCompile=void 0!==c?c:!0;a=0;for(b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var f=c[e],g=this.getNextKeyWith(f,a,0);g&&g.apply(f)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype.play=function(a,b){if(!this.isPlaying){this.isPlaying=!0;this.loop=void 0!==a?a:!0;this.currentTime=void 0!==b?b:0;this.startTimeMs=b;this.startTime=1E7;this.endTime=-this.startTime;var c,d=this.hierarchy.length,e,f;for(c=0;c<d;c++)if(e=this.hierarchy[c],f=this.data.hierarchy[c],e.useQuaternion=!0,void 0===f.animationCache&&(f.animationCache={},f.animationCache.prevKey=null,f.animationCache.nextKey=null,f.animationCache.originalMatrix=e instanceof THREE.Bone?e.skinMatrix:
e.matrix),e=this.data.hierarchy[c].keys,e.length)f.animationCache.prevKey=e[0],f.animationCache.nextKey=e[1],this.startTime=Math.min(e[0].time,this.startTime),this.endTime=Math.max(e[e.length-1].time,this.endTime);this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};THREE.KeyFrameAnimation.prototype.pause=function(){this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};
THREE.KeyFrameAnimation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.removeFromUpdate(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;b instanceof THREE.Bone?(d.copy(b.skinMatrix),b.skinMatrix=d):(d.copy(b.matrix),b.matrix=d);delete c.animationCache}}};
THREE.KeyFrameAnimation.prototype.update=function(a){if(this.isPlaying){var b,c,d,e,f=this.data.JIT.hierarchy,g,h,i;h=this.currentTime+=a*this.timeScale;g=this.currentTime%=this.data.length;g<this.startTimeMs&&(g=this.currentTime=this.startTimeMs+g);e=parseInt(Math.min(g*this.data.fps,this.data.length*this.data.fps),10);if((i=g<h)&&!this.loop){for(var a=0,j=this.hierarchy.length;a<j;a++){var l=this.data.hierarchy[a].keys,f=this.data.hierarchy[a].sids;d=l.length-1;e=this.hierarchy[a];if(l.length){for(l=
0;l<f.length;l++)g=f[l],(h=this.getPrevKeyWith(g,a,d))&&h.apply(g);this.data.hierarchy[a].node.updateMatrix();e.matrixWorldNeedsUpdate=!0}}this.stop()}else if(!(g<this.startTime)){a=0;for(j=this.hierarchy.length;a<j;a++){d=this.hierarchy[a];b=this.data.hierarchy[a];var l=b.keys,m=b.animationCache;if(this.JITCompile&&void 0!==f[a][e])d instanceof THREE.Bone?(d.skinMatrix=f[a][e],d.matrixWorldNeedsUpdate=!1):(d.matrix=f[a][e],d.matrixWorldNeedsUpdate=!0);else if(l.length){this.JITCompile&&m&&(d instanceof
THREE.Bone?d.skinMatrix=m.originalMatrix:d.matrix=m.originalMatrix);b=m.prevKey;c=m.nextKey;if(b&&c){if(c.time<=h){if(i&&this.loop){b=l[0];for(c=l[1];c.time<g;)b=c,c=l[b.index+1]}else if(!i)for(var n=l.length-1;c.time<g&&c.index!==n;)b=c,c=l[b.index+1];m.prevKey=b;m.nextKey=c}c.time>=g?b.interpolate(c,g):b.interpolate(c,c.time)}this.data.hierarchy[a].node.updateMatrix();d.matrixWorldNeedsUpdate=!0}}if(this.JITCompile&&void 0===f[0][e]){this.hierarchy[0].updateMatrixWorld(!0);for(a=0;a<this.hierarchy.length;a++)f[a][e]=
this.hierarchy[a]instanceof THREE.Bone?this.hierarchy[a].skinMatrix.clone():this.hierarchy[a].matrix.clone()}}}};THREE.KeyFrameAnimation.prototype.getNextKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]};THREE.KeyFrameAnimation.prototype.getPrevKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]};
THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));this.add(g);var h=new THREE.PerspectiveCamera(90,
1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var i=new THREE.PerspectiveCamera(90,1,a,b);i.up.set(0,-1,0);i.lookAt(new THREE.Vector3(0,0,-1));this.add(i);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,n=c.generateMipmaps;c.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=
2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=n;c.activeCubeFace=5;a.render(b,i,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CombinedCamera=function(a,b,c,d,e,f,g){THREE.Camera.call(this);this.fov=c;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2;this.cameraO=new THREE.OrthographicCamera(a/-2,a/2,b/2,b/-2,f,g);this.cameraP=new THREE.PerspectiveCamera(c,a/b,d,e);this.zoom=1;this.toPerspective()};
THREE.CombinedCamera.prototype=Object.create(THREE.Camera.prototype);THREE.CombinedCamera.prototype.toPerspective=function(){this.near=this.cameraP.near;this.far=this.cameraP.far;this.cameraP.fov=this.fov/this.zoom;this.cameraP.updateProjectionMatrix();this.projectionMatrix=this.cameraP.projectionMatrix;this.inPerspectiveMode=!0;this.inOrthographicMode=!1};
THREE.CombinedCamera.prototype.toOrthographic=function(){var a=this.cameraP.aspect,b=(this.cameraP.near+this.cameraP.far)/2,b=Math.tan(this.fov/2)*b,a=2*b*a/2,b=b/this.zoom,a=a/this.zoom;this.cameraO.left=-a;this.cameraO.right=a;this.cameraO.top=b;this.cameraO.bottom=-b;this.cameraO.updateProjectionMatrix();this.near=this.cameraO.near;this.far=this.cameraO.far;this.projectionMatrix=this.cameraO.projectionMatrix;this.inPerspectiveMode=!1;this.inOrthographicMode=!0};
THREE.CombinedCamera.prototype.setSize=function(a,b){this.cameraP.aspect=a/b;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2};THREE.CombinedCamera.prototype.setFov=function(a){this.fov=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.updateProjectionMatrix=function(){this.inPerspectiveMode?this.toPerspective():(this.toPerspective(),this.toOrthographic())};
THREE.CombinedCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);var c=2*Math.atan(b/(2*a))*(180/Math.PI);this.setFov(c);return c};THREE.CombinedCamera.prototype.setZoom=function(a){this.zoom=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.toFrontView=function(){this.rotation.x=0;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.CombinedCamera.prototype.toBackView=function(){this.rotation.x=0;this.rotation.y=Math.PI;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toLeftView=function(){this.rotation.x=0;this.rotation.y=-Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toRightView=function(){this.rotation.x=0;this.rotation.y=Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.CombinedCamera.prototype.toTopView=function(){this.rotation.x=-Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toBottomView=function(){this.rotation.x=Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.AsteriskGeometry=function(a,b){THREE.Geometry.call(this);for(var c=0.707*a,d=0.707*b,c=[[a,0,0],[b,0,0],[-a,0,0],[-b,0,0],[0,a,0],[0,b,0],[0,-a,0],[0,-b,0],[0,0,a],[0,0,b],[0,0,-a],[0,0,-b],[c,c,0],[d,d,0],[-c,-c,0],[-d,-d,0],[c,-c,0],[d,-d,0],[-c,c,0],[-d,d,0],[c,0,c],[d,0,d],[-c,0,-c],[-d,0,-d],[c,0,-c],[d,0,-d],[-c,0,c],[-d,0,d],[0,c,c],[0,d,d],[0,-c,-c],[0,-d,-d],[0,c,-c],[0,d,-d],[0,-c,c],[0,-d,d]],d=0,e=c.length;d<e;d++)this.vertices.push(new THREE.Vector3(c[d][0],c[d][1],c[d][2]))};
THREE.AsteriskGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);var a=a||50,c=void 0!==c?c:0,d=void 0!==d?d:2*Math.PI,b=void 0!==b?Math.max(3,b):8,e,f=[];e=new THREE.Vector3;var g=new THREE.UV(0.5,0.5);this.vertices.push(e);f.push(g);for(e=0;e<=b;e++){var h=new THREE.Vector3;h.x=a*Math.cos(c+e/b*d);h.y=a*Math.sin(c+e/b*d);this.vertices.push(h);f.push(new THREE.UV((h.x/a+1)/2,-(h.y/a+1)/2+1))}c=new THREE.Vector3(0,0,-1);for(e=1;e<=b;e++)this.faces.push(new THREE.Face3(e,e+1,0,[c,c,c])),this.faceVertexUvs[0].push([f[e],
f[e+1],g]);this.computeCentroids();this.computeFaceNormals();this.boundingSphere={radius:a}};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.CubeGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,s){var t,r=h.widthSegments,z=h.heightSegments,w=e/2,q=f/2,E=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)t="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)t="y",z=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)t="x",r=h.depthSegments;var A=r+1,v=z+1,u=e/r,D=f/z,C=new THREE.Vector3;C[t]=0<g?1:-1;for(e=0;e<v;e++)for(f=0;f<A;f++){var G=new THREE.Vector3;G[a]=(f*u-w)*c;G[b]=(e*D-q)*d;G[t]=g;h.vertices.push(G)}for(e=
0;e<z;e++)for(f=0;f<r;f++)a=new THREE.Face4(f+A*e+E,f+A*(e+1)+E,f+1+A*(e+1)+E,f+1+A*e+E),a.normal.copy(C),a.vertexNormals.push(C.clone(),C.clone(),C.clone(),C.clone()),a.materialIndex=s,h.faces.push(a),h.faceVertexUvs[0].push([new THREE.UV(f/r,1-e/z),new THREE.UV(f/r,1-(e+1)/z),new THREE.UV((f+1)/r,1-(e+1)/z),new THREE.UV((f+1)/r,1-e/z)])}THREE.Geometry.call(this);var h=this;this.width=a;this.height=b;this.depth=c;this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=f||1;a=this.width/
2;b=this.height/2;c=this.depth/2;g("z","y",-1,-1,this.depth,this.height,a,0);g("z","y",1,-1,this.depth,this.height,-a,1);g("x","z",1,1,this.width,this.depth,b,2);g("x","z",1,-1,this.width,this.depth,-b,3);g("x","y",1,-1,this.width,this.height,c,4);g("x","y",-1,-1,this.width,this.height,-c,5);this.computeCentroids();this.mergeVertices()};THREE.CubeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.CylinderGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);var a=void 0!==a?a:20,b=void 0!==b?b:20,c=void 0!==c?c:100,g=c/2,d=d||8,e=e||1,h,i,j=[],l=[];for(i=0;i<=e;i++){var m=[],n=[],p=i/e,o=p*(b-a)+a;for(h=0;h<=d;h++){var s=h/d,t=new THREE.Vector3;t.x=o*Math.sin(2*s*Math.PI);t.y=-p*c+g;t.z=o*Math.cos(2*s*Math.PI);this.vertices.push(t);m.push(this.vertices.length-1);n.push(new THREE.UV(s,1-p))}j.push(m);l.push(n)}c=(b-a)/c;for(h=0;h<d;h++){0!==a?(m=this.vertices[j[0][h]].clone(),n=this.vertices[j[0][h+
1]].clone()):(m=this.vertices[j[1][h]].clone(),n=this.vertices[j[1][h+1]].clone());m.setY(Math.sqrt(m.x*m.x+m.z*m.z)*c).normalize();n.setY(Math.sqrt(n.x*n.x+n.z*n.z)*c).normalize();for(i=0;i<e;i++){var p=j[i][h],o=j[i+1][h],s=j[i+1][h+1],t=j[i][h+1],r=m.clone(),z=m.clone(),w=n.clone(),q=n.clone(),E=l[i][h].clone(),A=l[i+1][h].clone(),v=l[i+1][h+1].clone(),u=l[i][h+1].clone();this.faces.push(new THREE.Face4(p,o,s,t,[r,z,w,q]));this.faceVertexUvs[0].push([E,A,v,u])}}if(!f&&0<a){this.vertices.push(new THREE.Vector3(0,
g,0));for(h=0;h<d;h++)p=j[0][h],o=j[0][h+1],s=this.vertices.length-1,r=new THREE.Vector3(0,1,0),z=new THREE.Vector3(0,1,0),w=new THREE.Vector3(0,1,0),E=l[0][h].clone(),A=l[0][h+1].clone(),v=new THREE.UV(A.u,0),this.faces.push(new THREE.Face3(p,o,s,[r,z,w])),this.faceVertexUvs[0].push([E,A,v])}if(!f&&0<b){this.vertices.push(new THREE.Vector3(0,-g,0));for(h=0;h<d;h++)p=j[i][h+1],o=j[i][h],s=this.vertices.length-1,r=new THREE.Vector3(0,-1,0),z=new THREE.Vector3(0,-1,0),w=new THREE.Vector3(0,-1,0),E=
l[i][h+1].clone(),A=l[i][h].clone(),v=new THREE.UV(A.u,1),this.faces.push(new THREE.Face3(p,o,s,[r,z,w])),this.faceVertexUvs[0].push([E,A,v])}this.computeCentroids();this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),a=a instanceof Array?a:[a],this.shapebb=a[a.length-1].getBoundingBox(),this.addShapeList(a,b),this.computeCentroids(),this.computeFaceNormals())};
THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.log("die");return b.clone().multiplyScalar(c).addSelf(a)}function d(a,b,c){var d=THREE.ExtrudeGeometry.__v1,e=THREE.ExtrudeGeometry.__v2,f=THREE.ExtrudeGeometry.__v3,g=THREE.ExtrudeGeometry.__v4,h=THREE.ExtrudeGeometry.__v5,i=THREE.ExtrudeGeometry.__v6;d.set(a.x-b.x,a.y-b.y);e.set(a.x-c.x,a.y-c.y);d=d.normalize();e=e.normalize();f.set(-d.y,d.x);g.set(e.y,-e.x);h.copy(a).addSelf(f);i.copy(a).addSelf(g);if(h.equals(i))return g.clone();
h.copy(b).addSelf(f);i.copy(c).addSelf(g);f=d.dot(g);g=i.subSelf(h).dot(g);0===f&&(console.log("Either infinite or no solutions!"),0===g?console.log("Its finite solutions."):console.log("Too bad, no solutions."));g/=f;return 0>g?(b=Math.atan2(b.y-a.y,b.x-a.x),a=Math.atan2(c.y-a.y,c.x-a.x),b>a&&(a+=2*Math.PI),c=(b+a)/2,a=-Math.cos(c),c=-Math.sin(c),new THREE.Vector2(a,c)):d.multiplyScalar(g).addSelf(h).subSelf(a).clone()}function e(c,d){var e,f;for(J=c.length;0<=--J;){e=J;f=J-1;0>f&&(f=c.length-1);
for(var g=0,h=n+2*l,g=0;g<h;g++){var i=R*g,j=R*(g+1),m=d+e+i,i=d+f+i,o=d+f+j,j=d+e+j,p=c,s=g,q=h,t=e,u=f,m=m+G,i=i+G,o=o+G,j=j+G;C.faces.push(new THREE.Face4(m,i,o,j,null,null,r));m=z.generateSideWallUV(C,a,p,b,m,i,o,j,s,q,t,u);C.faceVertexUvs[0].push(m)}}}function f(a,b,c){C.vertices.push(new THREE.Vector3(a,b,c))}function g(c,d,e,f){c+=G;d+=G;e+=G;C.faces.push(new THREE.Face3(c,d,e,null,null,t));c=f?z.generateBottomUV(C,a,b,c,d,e):z.generateTopUV(C,a,b,c,d,e);C.faceVertexUvs[0].push(c)}var h=void 0!==
b.amount?b.amount:100,i=void 0!==b.bevelThickness?b.bevelThickness:6,j=void 0!==b.bevelSize?b.bevelSize:i-2,l=void 0!==b.bevelSegments?b.bevelSegments:3,m=void 0!==b.bevelEnabled?b.bevelEnabled:!0,n=void 0!==b.steps?b.steps:1,p=b.extrudePath,o,s=!1,t=b.material,r=b.extrudeMaterial,z=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,w,q,E,A;p&&(o=p.getSpacedPoints(n),s=!0,m=!1,w=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(p,n,!1),q=new THREE.Vector3,E=new THREE.Vector3,
A=new THREE.Vector3);m||(j=i=l=0);var v,u,D,C=this,G=this.vertices.length,p=a.extractPoints(),P=p.shape,p=p.holes,B=!THREE.Shape.Utils.isClockWise(P);if(B){P=P.reverse();u=0;for(D=p.length;u<D;u++)v=p[u],THREE.Shape.Utils.isClockWise(v)&&(p[u]=v.reverse());B=!1}var K=THREE.Shape.Utils.triangulateShape(P,p),B=P;u=0;for(D=p.length;u<D;u++)v=p[u],P=P.concat(v);var H,I,N,O,R=P.length,ga=K.length,M=[],J=0,Q=B.length;H=Q-1;for(I=J+1;J<Q;J++,H++,I++)H===Q&&(H=0),I===Q&&(I=0),M[J]=d(B[J],B[H],B[I]);var Z=
[],L,oa=M.concat();u=0;for(D=p.length;u<D;u++){v=p[u];L=[];J=0;Q=v.length;H=Q-1;for(I=J+1;J<Q;J++,H++,I++)H===Q&&(H=0),I===Q&&(I=0),L[J]=d(v[J],v[H],v[I]);Z.push(L);oa=oa.concat(L)}for(H=0;H<l;H++){v=H/l;N=i*(1-v);I=j*Math.sin(v*Math.PI/2);J=0;for(Q=B.length;J<Q;J++)O=c(B[J],M[J],I),f(O.x,O.y,-N);u=0;for(D=p.length;u<D;u++){v=p[u];L=Z[u];J=0;for(Q=v.length;J<Q;J++)O=c(v[J],L[J],I),f(O.x,O.y,-N)}}I=j;for(J=0;J<R;J++)O=m?c(P[J],oa[J],I):P[J],s?(E.copy(w.normals[0]).multiplyScalar(O.x),q.copy(w.binormals[0]).multiplyScalar(O.y),
A.copy(o[0]).addSelf(E).addSelf(q),f(A.x,A.y,A.z)):f(O.x,O.y,0);for(v=1;v<=n;v++)for(J=0;J<R;J++)O=m?c(P[J],oa[J],I):P[J],s?(E.copy(w.normals[v]).multiplyScalar(O.x),q.copy(w.binormals[v]).multiplyScalar(O.y),A.copy(o[v]).addSelf(E).addSelf(q),f(A.x,A.y,A.z)):f(O.x,O.y,h/n*v);for(H=l-1;0<=H;H--){v=H/l;N=i*(1-v);I=j*Math.sin(v*Math.PI/2);J=0;for(Q=B.length;J<Q;J++)O=c(B[J],M[J],I),f(O.x,O.y,h+N);u=0;for(D=p.length;u<D;u++){v=p[u];L=Z[u];J=0;for(Q=v.length;J<Q;J++)O=c(v[J],L[J],I),s?f(O.x,O.y+o[n-1].y,
o[n-1].x+N):f(O.x,O.y,h+N)}}if(m){i=0*R;for(J=0;J<ga;J++)h=K[J],g(h[2]+i,h[1]+i,h[0]+i,!0);i=R*(n+2*l);for(J=0;J<ga;J++)h=K[J],g(h[0]+i,h[1]+i,h[2]+i,!1)}else{for(J=0;J<ga;J++)h=K[J],g(h[2],h[1],h[0],!0);for(J=0;J<ga;J++)h=K[J],g(h[0]+R*n,h[1]+R*n,h[2]+R*n,!1)}h=0;e(B,h);h+=B.length;u=0;for(D=p.length;u<D;u++)v=p[u],e(v,h),h+=v.length};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d,e,f){b=a.vertices[e].x;e=a.vertices[e].y;c=a.vertices[f].x;f=a.vertices[f].y;return[new THREE.UV(a.vertices[d].x,a.vertices[d].y),new THREE.UV(b,e),new THREE.UV(c,f)]},generateBottomUV:function(a,b,c,d,e,f){return this.generateTopUV(a,b,c,d,e,f)},generateSideWallUV:function(a,b,c,d,e,f,g,h){var b=a.vertices[e].x,c=a.vertices[e].y,e=a.vertices[e].z,d=a.vertices[f].x,i=a.vertices[f].y,f=a.vertices[f].z,j=a.vertices[g].x,l=a.vertices[g].y,
g=a.vertices[g].z,m=a.vertices[h].x,n=a.vertices[h].y,a=a.vertices[h].z;return 0.01>Math.abs(c-i)?[new THREE.UV(b,1-e),new THREE.UV(d,1-f),new THREE.UV(j,1-g),new THREE.UV(m,1-a)]:[new THREE.UV(c,1-e),new THREE.UV(i,1-f),new THREE.UV(l,1-g),new THREE.UV(n,1-a)]}};THREE.ExtrudeGeometry.__v1=new THREE.Vector2;THREE.ExtrudeGeometry.__v2=new THREE.Vector2;THREE.ExtrudeGeometry.__v3=new THREE.Vector2;THREE.ExtrudeGeometry.__v4=new THREE.Vector2;THREE.ExtrudeGeometry.__v5=new THREE.Vector2;
THREE.ExtrudeGeometry.__v6=new THREE.Vector2;THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);!1===a instanceof Array&&(a=[a]);this.shapebb=a[a.length-1].getBoundingBox();this.addShapeList(a,b);this.computeCentroids();this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints();var i=e.shape,j=e.holes;if(!THREE.Shape.Utils.isClockWise(i)){i=i.reverse();e=0;for(f=j.length;e<f;e++)g=j[e],THREE.Shape.Utils.isClockWise(g)&&(j[e]=g.reverse())}var l=THREE.Shape.Utils.triangulateShape(i,j);e=0;for(f=j.length;e<f;e++)g=j[e],i=i.concat(g);j=i.length;f=l.length;for(e=
0;e<j;e++)g=i[e],this.vertices.push(new THREE.Vector3(g.x,g.y,0));for(e=0;e<f;e++)j=l[e],i=j[0]+h,g=j[1]+h,j=j[2]+h,this.faces.push(new THREE.Face3(i,g,j,null,null,c)),this.faceVertexUvs[0].push(d.generateBottomUV(this,a,b,i,g,j))};
THREE.LatheGeometry=function(a,b,c){THREE.Geometry.call(this);for(var b=b||12,c=c||2*Math.PI,d=[],e=(new THREE.Matrix4).makeRotationZ(c/b),f=0;f<a.length;f++)d[f]=a[f].clone(),this.vertices.push(d[f]);for(var g=b+1,c=0;c<g;c++)for(f=0;f<d.length;f++)d[f]=e.multiplyVector3(d[f].clone()),this.vertices.push(d[f]);for(c=0;c<b;c++){d=0;for(e=a.length;d<e-1;d++)this.faces.push(new THREE.Face4(c*e+d,(c+1)%g*e+d,(c+1)%g*e+(d+1)%e,c*e+(d+1)%e)),this.faceVertexUvs[0].push([new THREE.UV(1-c/b,d/e),new THREE.UV(1-
(c+1)/b,d/e),new THREE.UV(1-(c+1)/b,(d+1)/e),new THREE.UV(1-c/b,(d+1)/e)])}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.width=a;this.height=b;this.widthSegments=c||1;this.heightSegments=d||1;for(var c=a/2,e=b/2,d=this.widthSegments,f=this.heightSegments,g=d+1,h=f+1,i=this.width/d,j=this.height/f,l=new THREE.Vector3(0,0,1),a=0;a<h;a++)for(b=0;b<g;b++)this.vertices.push(new THREE.Vector3(b*i-c,-(a*j-e),0));for(a=0;a<f;a++)for(b=0;b<d;b++)c=new THREE.Face4(b+g*a,b+g*(a+1),b+1+g*(a+1),b+1+g*a),c.normal.copy(l),c.vertexNormals.push(l.clone(),l.clone(),
l.clone(),l.clone()),this.faces.push(c),this.faceVertexUvs[0].push([new THREE.UV(b/d,1-a/f),new THREE.UV(b/d,1-(a+1)/f),new THREE.UV((b+1)/d,1-(a+1)/f),new THREE.UV((b+1)/d,1-a/f)]);this.computeCentroids()};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.radius=a||50;this.widthSegments=Math.max(3,Math.floor(b)||8);this.heightSegments=Math.max(2,Math.floor(c)||6);for(var d=void 0!==d?d:0,e=void 0!==e?e:2*Math.PI,f=void 0!==f?f:0,g=void 0!==g?g:Math.PI,c=[],h=[],b=0;b<=this.heightSegments;b++){for(var i=[],j=[],a=0;a<=this.widthSegments;a++){var l=a/this.widthSegments,m=b/this.heightSegments,n=new THREE.Vector3;n.x=-this.radius*Math.cos(d+l*e)*Math.sin(f+m*g);n.y=this.radius*
Math.cos(f+m*g);n.z=this.radius*Math.sin(d+l*e)*Math.sin(f+m*g);this.vertices.push(n);i.push(this.vertices.length-1);j.push(new THREE.UV(l,1-m))}c.push(i);h.push(j)}for(b=0;b<this.heightSegments;b++)for(a=0;a<this.widthSegments;a++){var d=c[b][a+1],e=c[b][a],f=c[b+1][a],g=c[b+1][a+1],i=this.vertices[d].clone().normalize(),j=this.vertices[e].clone().normalize(),l=this.vertices[f].clone().normalize(),m=this.vertices[g].clone().normalize(),n=h[b][a+1].clone(),p=h[b][a].clone(),o=h[b+1][a].clone(),s=
h[b+1][a+1].clone();Math.abs(this.vertices[d].y)===this.radius?(this.faces.push(new THREE.Face3(d,f,g,[i,l,m])),this.faceVertexUvs[0].push([n,o,s])):Math.abs(this.vertices[f].y)===this.radius?(this.faces.push(new THREE.Face3(d,e,f,[i,j,l])),this.faceVertexUvs[0].push([n,p,o])):(this.faces.push(new THREE.Face4(d,e,f,g,[i,j,l,m])),this.faceVertexUvs[0].push([n,p,o,s]))}this.computeCentroids();this.computeFaceNormals();this.boundingSphere={radius:this.radius}};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TextGeometry=function(a,b){var c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b)};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.radius=a||100;this.tube=b||40;this.radialSegments=c||8;this.tubularSegments=d||6;this.arc=e||2*Math.PI;e=new THREE.Vector3;a=[];b=[];for(c=0;c<=this.radialSegments;c++)for(d=0;d<=this.tubularSegments;d++){var f=d/this.tubularSegments*this.arc,g=2*c/this.radialSegments*Math.PI;e.x=this.radius*Math.cos(f);e.y=this.radius*Math.sin(f);var h=new THREE.Vector3;h.x=(this.radius+this.tube*Math.cos(g))*Math.cos(f);h.y=(this.radius+this.tube*
Math.cos(g))*Math.sin(f);h.z=this.tube*Math.sin(g);this.vertices.push(h);a.push(new THREE.UV(d/this.tubularSegments,c/this.radialSegments));b.push(h.clone().subSelf(e).normalize())}for(c=1;c<=this.radialSegments;c++)for(d=1;d<=this.tubularSegments;d++){var e=(this.tubularSegments+1)*c+d-1,f=(this.tubularSegments+1)*(c-1)+d-1,g=(this.tubularSegments+1)*(c-1)+d,h=(this.tubularSegments+1)*c+d,i=new THREE.Face4(e,f,g,h,[b[e],b[f],b[g],b[h]]);i.normal.addSelf(b[e]);i.normal.addSelf(b[f]);i.normal.addSelf(b[g]);
i.normal.addSelf(b[h]);i.normal.normalize();this.faces.push(i);this.faceVertexUvs[0].push([a[e].clone(),a[f].clone(),a[g].clone(),a[h].clone()])}this.computeCentroids()};THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){function h(a,b,c,d,e,f){var g=Math.cos(a);Math.cos(b);b=Math.sin(a);a*=c/d;c=Math.cos(a);g*=0.5*e*(2+c);b=0.5*e*(2+c)*b;e=0.5*f*e*Math.sin(a);return new THREE.Vector3(g,b,e)}THREE.Geometry.call(this);this.radius=a||200;this.tube=b||40;this.radialSegments=c||64;this.tubularSegments=d||8;this.p=e||2;this.q=f||3;this.heightScale=g||1;this.grid=Array(this.radialSegments);c=new THREE.Vector3;d=new THREE.Vector3;e=new THREE.Vector3;for(a=0;a<this.radialSegments;++a){this.grid[a]=
Array(this.tubularSegments);for(b=0;b<this.tubularSegments;++b){var i=2*(a/this.radialSegments)*this.p*Math.PI,g=2*(b/this.tubularSegments)*Math.PI,f=h(i,g,this.q,this.p,this.radius,this.heightScale),i=h(i+0.01,g,this.q,this.p,this.radius,this.heightScale);c.sub(i,f);d.add(i,f);e.cross(c,d);d.cross(e,c);e.normalize();d.normalize();i=-this.tube*Math.cos(g);g=this.tube*Math.sin(g);f.x+=i*d.x+g*e.x;f.y+=i*d.y+g*e.y;f.z+=i*d.z+g*e.z;this.grid[a][b]=this.vertices.push(new THREE.Vector3(f.x,f.y,f.z))-1}}for(a=
0;a<this.radialSegments;++a)for(b=0;b<this.tubularSegments;++b){var e=(a+1)%this.radialSegments,f=(b+1)%this.tubularSegments,c=this.grid[a][b],d=this.grid[e][b],e=this.grid[e][f],f=this.grid[a][f],g=new THREE.UV(a/this.radialSegments,b/this.tubularSegments),i=new THREE.UV((a+1)/this.radialSegments,b/this.tubularSegments),j=new THREE.UV((a+1)/this.radialSegments,(b+1)/this.tubularSegments),l=new THREE.UV(a/this.radialSegments,(b+1)/this.tubularSegments);this.faces.push(new THREE.Face4(c,d,e,f));this.faceVertexUvs[0].push([g,
i,j,l])}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.path=a;this.segments=b||64;this.radius=c||1;this.radiusSegments=d||8;this.closed=e||!1;f&&(this.debug=new THREE.Object3D);this.grid=[];var g,h,f=this.segments+1,i,j,l,m=new THREE.Vector3,n,p,o,b=new THREE.TubeGeometry.FrenetFrames(a,b,e);n=b.tangents;p=b.normals;o=b.binormals;this.tangents=n;this.normals=p;this.binormals=o;for(b=0;b<f;b++){this.grid[b]=[];d=b/(f-1);l=a.getPointAt(d);d=n[b];g=p[b];h=o[b];this.debug&&(this.debug.add(new THREE.ArrowHelper(d,
l,c,255)),this.debug.add(new THREE.ArrowHelper(g,l,c,16711680)),this.debug.add(new THREE.ArrowHelper(h,l,c,65280)));for(d=0;d<this.radiusSegments;d++)i=2*(d/this.radiusSegments)*Math.PI,j=-this.radius*Math.cos(i),i=this.radius*Math.sin(i),m.copy(l),m.x+=j*g.x+i*h.x,m.y+=j*g.y+i*h.y,m.z+=j*g.z+i*h.z,this.grid[b][d]=this.vertices.push(new THREE.Vector3(m.x,m.y,m.z))-1}for(b=0;b<this.segments;b++)for(d=0;d<this.radiusSegments;d++)f=e?(b+1)%this.segments:b+1,m=(d+1)%this.radiusSegments,a=this.grid[b][d],
c=this.grid[f][d],f=this.grid[f][m],m=this.grid[b][m],n=new THREE.UV(b/this.segments,d/this.radiusSegments),p=new THREE.UV((b+1)/this.segments,d/this.radiusSegments),o=new THREE.UV((b+1)/this.segments,(d+1)/this.radiusSegments),g=new THREE.UV(b/this.segments,(d+1)/this.radiusSegments),this.faces.push(new THREE.Face4(a,c,f,m)),this.faceVertexUvs[0].push([n,p,o,g]);this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames=function(a,b,c){new THREE.Vector3;var d=new THREE.Vector3;new THREE.Vector3;var e=[],f=[],g=[],h=new THREE.Vector3,i=new THREE.Matrix4,b=b+1,j,l,m;this.tangents=e;this.normals=f;this.binormals=g;for(j=0;j<b;j++)l=j/(b-1),e[j]=a.getTangentAt(l),e[j].normalize();f[0]=new THREE.Vector3;g[0]=new THREE.Vector3;a=Number.MAX_VALUE;j=Math.abs(e[0].x);l=Math.abs(e[0].y);m=Math.abs(e[0].z);j<=a&&(a=j,d.set(1,0,0));l<=a&&(a=l,d.set(0,1,0));m<=a&&d.set(0,0,1);h.cross(e[0],d).normalize();
f[0].cross(e[0],h);g[0].cross(e[0],f[0]);for(j=1;j<b;j++)f[j]=f[j-1].clone(),g[j]=g[j-1].clone(),h.cross(e[j-1],e[j]),1E-4<h.length()&&(h.normalize(),d=Math.acos(e[j-1].dot(e[j])),i.makeRotationAxis(h,d).multiplyVector3(f[j])),g[j].cross(e[j],f[j]);if(c){d=Math.acos(f[0].dot(f[b-1]));d/=b-1;0<e[0].dot(h.cross(f[0],f[b-1]))&&(d=-d);for(j=1;j<b;j++)i.makeRotationAxis(e[j],d*j).multiplyVector3(f[j]),g[j].cross(e[j],f[j])}};
THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=i.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+0.5,a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+0.5;b.uv=new THREE.UV(c,1-a);return b}function f(a,b,c,d){1>d?(d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]),d.centroid.addSelf(a).addSelf(b).addSelf(c).divideScalar(3),d.normal=d.centroid.clone().normalize(),i.faces.push(d),d=Math.atan2(d.centroid.z,-d.centroid.x),
i.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,c,d)])):(d-=1,f(a,g(a,b),g(a,c),d),f(g(a,b),b,g(b,c),d),f(g(a,c),g(b,c),c,d),f(g(a,b),g(b,c),g(a,c),d))}function g(a,b){m[a.index]||(m[a.index]=[]);m[b.index]||(m[b.index]=[]);var c=m[a.index][b.index];void 0===c&&(m[a.index][b.index]=m[b.index][a.index]=c=e((new THREE.Vector3).add(a,b).divideScalar(2)));return c}function h(a,b,c){0>c&&1===a.u&&(a=new THREE.UV(a.u-1,a.v));0===b.x&&0===b.z&&(a=new THREE.UV(c/2/Math.PI+0.5,a.v));return a}THREE.Geometry.call(this);
for(var c=c||1,d=d||0,i=this,j=0,l=a.length;j<l;j++)e(new THREE.Vector3(a[j][0],a[j][1],a[j][2]));for(var m=[],a=this.vertices,j=0,l=b.length;j<l;j++)f(a[b[j][0]],a[b[j][1]],a[b[j][2]],d);this.mergeVertices();j=0;for(l=this.vertices.length;j<l;j++)this.vertices[j].multiplyScalar(c);this.computeCentroids();this.boundingSphere={radius:c}};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[[-1,c,0],[1,c,0],[-1,-c,0],[1,-c,0],[0,-1,c],[0,1,c],[0,-1,-c],[0,1,-c],[c,0,-1],[c,0,1],[-c,0,-1],[-c,0,1]],[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]],a,b)};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.OctahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],[[0,2,4],[0,4,3],[0,3,5],[0,5,2],[1,2,5],[1,5,3],[1,3,4],[1,4,2]],a,b)};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,1,1],[-1,-1,1],[-1,1,-1],[1,-1,-1]],[[2,1,0],[0,3,2],[1,3,0],[2,3,1]],a,b)};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry=function(a,b,c,d){THREE.Geometry.call(this);var e=this.vertices,f=this.faces,g=this.faceVertexUvs[0],d=void 0===d?!1:d,h,i,j,l,m=b+1;for(h=0;h<=c;h++){l=h/c;for(i=0;i<=b;i++)j=i/b,j=a(j,l),e.push(j)}var n,p,o,s;for(h=0;h<c;h++)for(i=0;i<b;i++)a=h*m+i,e=h*m+i+1,l=(h+1)*m+i,j=(h+1)*m+i+1,n=new THREE.UV(i/b,h/c),p=new THREE.UV((i+1)/b,h/c),o=new THREE.UV(i/b,(h+1)/c),s=new THREE.UV((i+1)/b,(h+1)/c),d?(f.push(new THREE.Face3(a,e,l)),f.push(new THREE.Face3(e,j,l)),g.push([n,p,
o]),g.push([p,s,o])):(f.push(new THREE.Face4(a,e,j,l)),g.push([n,p,s,o]));this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.ConvexGeometry=function(a){function b(a){var b=a.length();return new THREE.UV(a.x/b,a.y/b)}THREE.Geometry.call(this);for(var c=[[0,1,2],[0,2,1]],d=3;d<a.length;d++){var e=d,f=a[e].clone(),g=f.length();f.x+=g*2E-6*(Math.random()-0.5);f.y+=g*2E-6*(Math.random()-0.5);f.z+=g*2E-6*(Math.random()-0.5);for(var g=[],h=0;h<c.length;){var i=c[h],j=f,l=a[i[0]],m;m=l;var n=a[i[1]],p=a[i[2]],o=new THREE.Vector3,s=new THREE.Vector3;o.sub(p,n);s.sub(m,n);o.crossSelf(s);o.normalize();m=o;l=m.dot(l);if(m.dot(j)>=
l){for(j=0;3>j;j++){l=[i[j],i[(j+1)%3]];m=!0;for(n=0;n<g.length;n++)if(g[n][0]===l[1]&&g[n][1]===l[0]){g[n]=g[g.length-1];g.pop();m=!1;break}m&&g.push(l)}c[h]=c[c.length-1];c.pop()}else h++}for(n=0;n<g.length;n++)c.push([g[n][0],g[n][1],e])}e=0;f=Array(a.length);for(d=0;d<c.length;d++){g=c[d];for(h=0;3>h;h++)void 0===f[g[h]]&&(f[g[h]]=e++,this.vertices.push(a[g[h]])),g[h]=f[g[h]]}for(d=0;d<c.length;d++)this.faces.push(new THREE.Face3(c[d][0],c[d][1],c[d][2]));for(d=0;d<this.faces.length;d++)g=this.faces[d],
this.faceVertexUvs[0].push([b(this.vertices[g.a]),b(this.vertices[g.b]),b(this.vertices[g.c])]);this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.ConvexGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.AxisHelper=function(a){var b=new THREE.Geometry;b.vertices.push(new THREE.Vector3,new THREE.Vector3(a||1,0,0),new THREE.Vector3,new THREE.Vector3(0,a||1,0),new THREE.Vector3,new THREE.Vector3(0,0,a||1));b.colors.push(new THREE.Color(16711680),new THREE.Color(16755200),new THREE.Color(65280),new THREE.Color(11206400),new THREE.Color(255),new THREE.Color(43775));a=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,b,a,THREE.LinePieces)};
THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);
THREE.ArrowHelper=function(a,b,c,d){THREE.Object3D.call(this);void 0===d&&(d=16776960);void 0===c&&(c=20);var e=new THREE.Geometry;e.vertices.push(new THREE.Vector3(0,0,0));e.vertices.push(new THREE.Vector3(0,1,0));this.line=new THREE.Line(e,new THREE.LineBasicMaterial({color:d}));this.add(this.line);e=new THREE.CylinderGeometry(0,0.05,0.25,5,1);this.cone=new THREE.Mesh(e,new THREE.MeshBasicMaterial({color:d}));this.cone.position.set(0,1,0);this.add(this.cone);b instanceof THREE.Vector3&&(this.position=
b);this.setDirection(a);this.setLength(c)};THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.setDirection=function(a){var b=(new THREE.Vector3(0,1,0)).crossSelf(a),a=Math.acos((new THREE.Vector3(0,1,0)).dot(a.clone().normalize()));this.matrix=(new THREE.Matrix4).makeRotationAxis(b.normalize(),a);this.rotation.setEulerFromRotationMatrix(this.matrix,this.eulerOrder)};THREE.ArrowHelper.prototype.setLength=function(a){this.scale.set(a,a,a)};
THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.setHex(a);this.cone.material.color.setHex(a)};
THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.geometry.vertices.push(new THREE.Vector3);d.geometry.colors.push(new THREE.Color(b));void 0===d.pointMap[a]&&(d.pointMap[a]=[]);d.pointMap[a].push(d.geometry.vertices.length-1)}THREE.Line.call(this);var d=this;this.geometry=new THREE.Geometry;this.material=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors});this.type=THREE.LinePieces;this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=
{};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1",
"cf2",3355443);b("cf3","cf4",3355443);this.camera=a;this.update(a)};THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update=function(){function a(a,d,e,f){THREE.CameraHelper.__v.set(d,e,f);THREE.CameraHelper.__projector.unprojectVector(THREE.CameraHelper.__v,THREE.CameraHelper.__c);a=b.pointMap[a];if(void 0!==a){d=0;for(e=a.length;d<e;d++)b.geometry.vertices[a[d]].copy(THREE.CameraHelper.__v)}}var b=this;THREE.CameraHelper.__c.projectionMatrix.copy(this.camera.projectionMatrix);a("c",0,0,-1);a("t",0,0,1);a("n1",-1,-1,-1);a("n2",1,-1,-1);a("n3",-1,1,-1);a("n4",1,1,-1);a("f1",-1,-1,1);
a("f2",1,-1,1);a("f3",-1,1,1);a("f4",1,1,1);a("u1",0.7,1.1,-1);a("u2",-0.7,1.1,-1);a("u3",0,2,-1);a("cf1",-1,0,1);a("cf2",1,0,1);a("cf3",0,-1,1);a("cf4",0,1,1);a("cn1",-1,0,-1);a("cn2",1,0,-1);a("cn3",0,-1,-1);a("cn4",0,1,-1);this.geometry.verticesNeedUpdate=!0};THREE.CameraHelper.__projector=new THREE.Projector;THREE.CameraHelper.__v=new THREE.Vector3;THREE.CameraHelper.__c=new THREE.Camera;
THREE.DirectionalLightHelper=function(a,b,c){THREE.Object3D.call(this);this.light=a;this.position=a.position;this.direction=new THREE.Vector3;this.direction.sub(a.target.position,a.position);this.color=a.color.clone();var d=THREE.Math.clamp(a.intensity,0,1);this.color.r*=d;this.color.g*=d;this.color.b*=d;var d=this.color.getHex(),e=new THREE.SphereGeometry(b,16,8),f=new THREE.AsteriskGeometry(1.25*b,2.25*b),g=new THREE.MeshBasicMaterial({color:d,fog:!1}),h=new THREE.LineBasicMaterial({color:d,fog:!1});
this.lightArrow=new THREE.ArrowHelper(this.direction,null,c,d);this.lightSphere=new THREE.Mesh(e,g);this.lightArrow.cone.material.fog=!1;this.lightArrow.line.material.fog=!1;this.lightRays=new THREE.Line(f,h,THREE.LinePieces);this.add(this.lightArrow);this.add(this.lightSphere);this.add(this.lightRays);this.lightSphere.properties.isGizmo=!0;this.lightSphere.properties.gizmoSubject=a;this.lightSphere.properties.gizmoRoot=this;this.targetSphere=null;a.target.properties.targetInverse&&(b=new THREE.SphereGeometry(b,
8,4),c=new THREE.MeshBasicMaterial({color:d,wireframe:!0,fog:!1}),this.targetSphere=new THREE.Mesh(b,c),this.targetSphere.position=a.target.position,this.targetSphere.properties.isGizmo=!0,this.targetSphere.properties.gizmoSubject=a.target,this.targetSphere.properties.gizmoRoot=this.targetSphere,a=new THREE.LineDashedMaterial({color:d,dashSize:4,gapSize:4,opacity:0.75,transparent:!0,fog:!1}),d=new THREE.Geometry,d.vertices.push(this.position.clone()),d.vertices.push(this.targetSphere.position.clone()),
d.computeLineDistances(),this.targetLine=new THREE.Line(d,a),this.targetLine.properties.isGizmo=!0);this.properties.isGizmo=!0};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.update=function(){this.direction.sub(this.light.target.position,this.light.position);this.lightArrow.setDirection(this.direction);this.color.copy(this.light.color);var a=THREE.Math.clamp(this.light.intensity,0,1);this.color.r*=a;this.color.g*=a;this.color.b*=a;this.lightArrow.setColor(this.color.getHex());this.lightSphere.material.color.copy(this.color);this.lightRays.material.color.copy(this.color);this.targetSphere.material.color.copy(this.color);this.targetLine.material.color.copy(this.color);
this.targetLine.geometry.vertices[0].copy(this.light.position);this.targetLine.geometry.vertices[1].copy(this.light.target.position);this.targetLine.geometry.computeLineDistances();this.targetLine.geometry.verticesNeedUpdate=!0};
THREE.HemisphereLightHelper=function(a,b,c){THREE.Object3D.call(this);this.light=a;this.position=a.position;var d=THREE.Math.clamp(a.intensity,0,1);this.color=a.color.clone();this.color.r*=d;this.color.g*=d;this.color.b*=d;var e=this.color.getHex();this.groundColor=a.groundColor.clone();this.groundColor.r*=d;this.groundColor.g*=d;this.groundColor.b*=d;for(var d=this.groundColor.getHex(),f=new THREE.SphereGeometry(b,16,8,0,2*Math.PI,0,0.5*Math.PI),g=new THREE.SphereGeometry(b,16,8,0,2*Math.PI,0.5*
Math.PI,Math.PI),h=new THREE.MeshBasicMaterial({color:e,fog:!1}),i=new THREE.MeshBasicMaterial({color:d,fog:!1}),j=0,l=f.faces.length;j<l;j++)f.faces[j].materialIndex=0;j=0;for(l=g.faces.length;j<l;j++)g.faces[j].materialIndex=1;THREE.GeometryUtils.merge(f,g);this.lightSphere=new THREE.Mesh(f,new THREE.MeshFaceMaterial([h,i]));this.lightArrow=new THREE.ArrowHelper(new THREE.Vector3(0,1,0),new THREE.Vector3(0,1.1*(b+c),0),c,e);this.lightArrow.rotation.x=Math.PI;this.lightArrowGround=new THREE.ArrowHelper(new THREE.Vector3(0,
1,0),new THREE.Vector3(0,-1.1*(b+c),0),c,d);b=new THREE.Object3D;b.rotation.x=0.5*-Math.PI;b.add(this.lightSphere);b.add(this.lightArrow);b.add(this.lightArrowGround);this.add(b);this.lightSphere.properties.isGizmo=!0;this.lightSphere.properties.gizmoSubject=a;this.lightSphere.properties.gizmoRoot=this;this.properties.isGizmo=!0;this.target=new THREE.Vector3;this.lookAt(this.target)};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.HemisphereLightHelper.prototype.update=function(){var a=THREE.Math.clamp(this.light.intensity,0,1);this.color.copy(this.light.color);this.groundColor.copy(this.light.groundColor);this.color.r*=a;this.color.g*=a;this.color.b*=a;this.groundColor.r*=a;this.groundColor.g*=a;this.groundColor.b*=a;this.lightSphere.material.materials[0].color.copy(this.color);this.lightSphere.material.materials[1].color.copy(this.groundColor);this.lightArrow.setColor(this.color.getHex());this.lightArrowGround.setColor(this.groundColor.getHex());
this.lookAt(this.target)};
THREE.PointLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.position=a.position;this.color=a.color.clone();var c=THREE.Math.clamp(a.intensity,0,1);this.color.r*=c;this.color.g*=c;this.color.b*=c;var d=this.color.getHex(),c=new THREE.SphereGeometry(b,16,8),e=new THREE.AsteriskGeometry(1.25*b,2.25*b),f=new THREE.IcosahedronGeometry(1,2),g=new THREE.MeshBasicMaterial({color:d,fog:!1}),h=new THREE.LineBasicMaterial({color:d,fog:!1}),d=new THREE.MeshBasicMaterial({color:d,fog:!1,wireframe:!0,
opacity:0.1,transparent:!0});this.lightSphere=new THREE.Mesh(c,g);this.lightRays=new THREE.Line(e,h,THREE.LinePieces);this.lightDistance=new THREE.Mesh(f,d);c=a.distance;0===c?this.lightDistance.visible=!1:this.lightDistance.scale.set(c,c,c);this.add(this.lightSphere);this.add(this.lightRays);this.add(this.lightDistance);this.lightSphere.properties.isGizmo=!0;this.lightSphere.properties.gizmoSubject=a;this.lightSphere.properties.gizmoRoot=this;this.properties.isGizmo=!0};
THREE.PointLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.PointLightHelper.prototype.update=function(){this.color.copy(this.light.color);var a=THREE.Math.clamp(this.light.intensity,0,1);this.color.r*=a;this.color.g*=a;this.color.b*=a;this.lightSphere.material.color.copy(this.color);this.lightRays.material.color.copy(this.color);this.lightDistance.material.color.copy(this.color);a=this.light.distance;0===a?this.lightDistance.visible=!1:(this.lightDistance.visible=!0,this.lightDistance.scale.set(a,a,a))};
THREE.SpotLightHelper=function(a,b,c){THREE.Object3D.call(this);this.light=a;this.position=a.position;this.direction=new THREE.Vector3;this.direction.sub(a.target.position,a.position);this.color=a.color.clone();var d=THREE.Math.clamp(a.intensity,0,1);this.color.r*=d;this.color.g*=d;this.color.b*=d;var d=this.color.getHex(),e=new THREE.SphereGeometry(b,16,8),f=new THREE.AsteriskGeometry(1.25*b,2.25*b),g=new THREE.CylinderGeometry(1E-4,1,1,8,1,!0),h=new THREE.Matrix4;h.rotateX(-Math.PI/2);h.translate(new THREE.Vector3(0,
-0.5,0));g.applyMatrix(h);var i=new THREE.MeshBasicMaterial({color:d,fog:!1}),h=new THREE.LineBasicMaterial({color:d,fog:!1}),j=new THREE.MeshBasicMaterial({color:d,fog:!1,wireframe:!0,opacity:0.3,transparent:!0});this.lightArrow=new THREE.ArrowHelper(this.direction,null,c,d);this.lightSphere=new THREE.Mesh(e,i);this.lightCone=new THREE.Mesh(g,j);c=a.distance?a.distance:1E4;e=2*c*Math.tan(0.5*a.angle);this.lightCone.scale.set(e,e,c);this.lightArrow.cone.material.fog=!1;this.lightArrow.line.material.fog=
!1;this.lightRays=new THREE.Line(f,h,THREE.LinePieces);this.gyroscope=new THREE.Gyroscope;this.gyroscope.add(this.lightArrow);this.gyroscope.add(this.lightSphere);this.gyroscope.add(this.lightRays);this.add(this.gyroscope);this.add(this.lightCone);this.lookAt(a.target.position);this.lightSphere.properties.isGizmo=!0;this.lightSphere.properties.gizmoSubject=a;this.lightSphere.properties.gizmoRoot=this;this.targetSphere=null;a.target.properties.targetInverse&&(b=new THREE.SphereGeometry(b,8,4),f=new THREE.MeshBasicMaterial({color:d,
wireframe:!0,fog:!1}),this.targetSphere=new THREE.Mesh(b,f),this.targetSphere.position=a.target.position,this.targetSphere.properties.isGizmo=!0,this.targetSphere.properties.gizmoSubject=a.target,this.targetSphere.properties.gizmoRoot=this.targetSphere,a=new THREE.LineDashedMaterial({color:d,dashSize:4,gapSize:4,opacity:0.75,transparent:!0,fog:!1}),d=new THREE.Geometry,d.vertices.push(this.position.clone()),d.vertices.push(this.targetSphere.position.clone()),d.computeLineDistances(),this.targetLine=
new THREE.Line(d,a),this.targetLine.properties.isGizmo=!0);this.properties.isGizmo=!0};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.update=function(){this.direction.sub(this.light.target.position,this.light.position);this.lightArrow.setDirection(this.direction);this.lookAt(this.light.target.position);var a=this.light.distance?this.light.distance:1E4,b=2*a*Math.tan(0.5*this.light.angle);this.lightCone.scale.set(b,b,a);this.color.copy(this.light.color);a=THREE.Math.clamp(this.light.intensity,0,1);this.color.r*=a;this.color.g*=a;this.color.b*=a;this.lightArrow.setColor(this.color.getHex());this.lightSphere.material.color.copy(this.color);
this.lightRays.material.color.copy(this.color);this.lightCone.material.color.copy(this.color);this.targetSphere.material.color.copy(this.color);this.targetLine.material.color.copy(this.color);this.targetLine.geometry.vertices[0].copy(this.light.position);this.targetLine.geometry.vertices[1].copy(this.light.target.position);this.targetLine.geometry.computeLineDistances();this.targetLine.geometry.verticesNeedUpdate=!0};
THREE.SubdivisionModifier=function(a){this.subdivisions=void 0===a?1:a;this.useOldVertexColors=!1;this.supportUVs=!0;this.debug=!1};THREE.SubdivisionModifier.prototype.modify=function(a){for(var b=this.subdivisions;0<b--;)this.smooth(a)};THREE.GeometryUtils.orderedKey=function(a,b){return Math.min(a,b)+"_"+Math.max(a,b)};
THREE.GeometryUtils.computeEdgeFaces=function(a){function b(a,b){void 0===g[a]&&(g[a]=[]);g[a].push(b)}var c,d,e,f,g={},h=THREE.GeometryUtils.orderedKey;c=0;for(d=a.faces.length;c<d;c++)e=a.faces[c],e instanceof THREE.Face3?(f=h(e.a,e.b),b(f,c),f=h(e.b,e.c),b(f,c),f=h(e.c,e.a),b(f,c)):e instanceof THREE.Face4&&(f=h(e.a,e.b),b(f,c),f=h(e.b,e.c),b(f,c),f=h(e.c,e.d),b(f,c),f=h(e.d,e.a),b(f,c));return g};
THREE.SubdivisionModifier.prototype.smooth=function(a){function b(){l.debug&&(console&&console.assert)&&console.assert.apply(console,arguments)}function c(){l.debug&&console.log.apply(console,arguments)}function d(){console&&console.log.apply(console,arguments)}function e(a,b,d,e,g,h,m){var n=new THREE.Face4(a,b,d,e,null,g.color,g.materialIndex);if(l.useOldVertexColors){n.vertexColors=[];for(var o,p,q,r=0;4>r;r++){q=h[r];o=new THREE.Color;o.setRGB(0,0,0);for(var s=0;s<q.length;s++)p=g.vertexColors[q[s]-
1],o.r+=p.r,o.g+=p.g,o.b+=p.b;o.r/=q.length;o.g/=q.length;o.b/=q.length;n.vertexColors[r]=o}}i.push(n);l.supportUVs&&(g=[f(a,""),f(b,m),f(d,m),f(e,m)],g[0]?g[1]?g[2]?g[3]?j.push(g):c("d :( ",e+":"+m):c("c :( ",d+":"+m):c("b :( ",b+":"+m):c("a :( ",a+":"+m))}function f(a,b){var e=a+":"+b,f=w[e];return!f?(a>=s&&a<s+o.length?c("face pt"):c("edge pt"),d("warning, UV not found for",e),null):f}function g(a,b,c){var e=a+":"+b;e in w?d("dup vertexNo",a,"oldFaceNo",b,"value",c,"key",e,w[e]):w[e]=c}var h=[],
i=[],j=[],l=this,m=THREE.GeometryUtils.orderedKey,n=THREE.GeometryUtils.computeEdgeFaces,p=a.vertices,o=a.faces,s=p.length,h=p.concat(),t=[],r={},z={},w={},q,E,A,v,u,D=a.faceVertexUvs[0],C;c("originalFaces, uvs, originalVerticesLength",o.length,D.length,s);if(l.supportUVs){q=0;for(E=D.length;q<E;q++){A=0;for(v=D[q].length;A<v;A++)C=o[q]["abcd".charAt(A)],g(C,q,D[q][A])}}0==D.length&&(l.supportUVs=!1);q=0;for(var G in w)q++;q||(l.supportUVs=!1,c("no uvs"));q=0;for(E=o.length;q<E;q++)u=o[q],t.push(u.centroid),
h.push(u.centroid),l.supportUVs&&(v=new THREE.UV,u instanceof THREE.Face3?(v.u=f(u.a,q).u+f(u.b,q).u+f(u.c,q).u,v.v=f(u.a,q).v+f(u.b,q).v+f(u.c,q).v,v.u/=3,v.v/=3):u instanceof THREE.Face4&&(v.u=f(u.a,q).u+f(u.b,q).u+f(u.c,q).u+f(u.d,q).u,v.v=f(u.a,q).v+f(u.b,q).v+f(u.c,q).v+f(u.d,q).v,v.u/=4,v.v/=4),g(s+q,"",v));var n=n(a),P;E=0;var B,K;G={};D={};for(q in n){C=n[q];B=q.split("_");K=B[0];B=B[1];A=K;u=[K,B];void 0===G[A]&&(G[A]=[]);G[A].push(u);A=B;u=[K,B];void 0===G[A]&&(G[A]=[]);G[A].push(u);A=0;
for(v=C.length;A<v;A++){u=C[A];P=K;var H=u,I=q;void 0===D[P]&&(D[P]={});D[P][H]=I;P=B;H=q;void 0===D[P]&&(D[P]={});D[P][u]=H}2>C.length&&(z[q]=!0)}for(q in n)if(C=n[q],u=C[0],P=C[1],B=q.split("_"),K=B[0],B=B[1],v=new THREE.Vector3,b(0<C.length,"an edge without faces?!"),1==C.length?(v.addSelf(p[K]),v.addSelf(p[B]),v.multiplyScalar(0.5)):(v.addSelf(t[u]),v.addSelf(t[P]),v.addSelf(p[K]),v.addSelf(p[B]),v.multiplyScalar(0.25)),r[q]=s+o.length+E,h.push(v),E++,l.supportUVs)v=new THREE.UV,v.u=f(K,u).u+
f(B,u).u,v.v=f(K,u).v+f(B,u).v,v.u/=2,v.v/=2,g(r[q],u,v),2<=C.length&&(b(2==C.length,"did we plan for more than 2 edges?"),v=new THREE.UV,v.u=f(K,P).u+f(B,P).u,v.v=f(K,P).v+f(B,P).v,v.u/=2,v.v/=2,g(r[q],P,v));c("-- Step 2 done");var N,O;v=["123","12","2","23"];P=["123","23","3","31"];var H=["123","31","1","12"],I=["1234","12","2","23"],R=["1234","23","3","34"],ga=["1234","34","4","41"],M=["1234","41","1","12"];q=0;for(E=t.length;q<E;q++)u=o[q],C=s+q,u instanceof THREE.Face3?(K=m(u.a,u.b),B=m(u.b,
u.c),N=m(u.c,u.a),e(C,r[K],u.b,r[B],u,v,q),e(C,r[B],u.c,r[N],u,P,q),e(C,r[N],u.a,r[K],u,H,q)):u instanceof THREE.Face4?(K=m(u.a,u.b),B=m(u.b,u.c),N=m(u.c,u.d),O=m(u.d,u.a),e(C,r[K],u.b,r[B],u,I,q),e(C,r[B],u.c,r[N],u,R,q),e(C,r[N],u.d,r[O],u,ga,q),e(C,r[O],u.a,r[K],u,M,q)):c("face should be a face!",u);r=new THREE.Vector3;u=new THREE.Vector3;q=0;for(E=p.length;q<E;q++)if(void 0!==G[q]){r.set(0,0,0);u.set(0,0,0);B=new THREE.Vector3(0,0,0);C=0;for(A in D[q])r.addSelf(t[A]),C++;P=0;K=G[q].length;v=C!=
K;for(A=0;A<K;A++)z[m(G[q][A][0],G[q][A][1])]&&P++;r.divideScalar(C);P=0;if(v){for(A=0;A<K;A++)if(C=G[q][A],H=1==n[m(C[0],C[1])].length)C=p[C[0]].clone().addSelf(p[C[1]]).divideScalar(2),u.addSelf(C),P++;u.divideScalar(4);b(2==P,"should have only 2 boundary edges")}else{for(A=0;A<K;A++)C=G[q][A],C=p[C[0]].clone().addSelf(p[C[1]]).divideScalar(2),u.addSelf(C);u.divideScalar(K)}B.addSelf(p[q]);v?(B.divideScalar(2),B.addSelf(u)):(B.multiplyScalar(K-3),B.addSelf(r),B.addSelf(u.multiplyScalar(2)),B.divideScalar(K));
h[q]=B}a.vertices=h;a.faces=i;a.faceVertexUvs[0]=j;delete a.__tmpVertices;a.computeCentroids();a.computeFaceNormals();a.computeVertexNormals()};THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};
THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=0.25*c.x*Math.PI,c.rotation+=0.25*(c.wantedRotation-c.rotation)};
THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)(\d+)/,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var i=h[1];d[i]||(d[i]={start:Infinity,end:-Infinity});h=d[i];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=i)}}for(i in d)h=d[i],this.createAnimation(i,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("animation["+a+"] undefined")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)if(d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time)d.time=0,d.directionBackwards=!1}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;
f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*g;this.morphTargetInfluences[d.lastFrame]=(1-e)*g}}};
THREE.LensFlarePlugin=function(){function a(a){var c=b.createProgram(),d=b.createShader(b.FRAGMENT_SHADER),e=b.createShader(b.VERTEX_SHADER);b.shaderSource(d,a.fragmentShader);b.shaderSource(e,a.vertexShader);b.compileShader(d);b.compileShader(e);b.attachShader(c,d);b.attachShader(c,e);b.linkProgram(c);return c}var b,c,d,e,f,g,h,i,j,l,m,n,p;this.init=function(o){b=o.context;c=o;d=new Float32Array(16);e=new Uint16Array(6);o=0;d[o++]=-1;d[o++]=-1;d[o++]=0;d[o++]=0;d[o++]=1;d[o++]=-1;d[o++]=1;d[o++]=
0;d[o++]=1;d[o++]=1;d[o++]=1;d[o++]=1;d[o++]=-1;d[o++]=1;d[o++]=0;d[o++]=1;o=0;e[o++]=0;e[o++]=1;e[o++]=2;e[o++]=0;e[o++]=2;e[o++]=3;f=b.createBuffer();g=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,f);b.bufferData(b.ARRAY_BUFFER,d,b.STATIC_DRAW);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.bufferData(b.ELEMENT_ARRAY_BUFFER,e,b.STATIC_DRAW);h=b.createTexture();i=b.createTexture();b.bindTexture(b.TEXTURE_2D,h);b.texImage2D(b.TEXTURE_2D,0,b.RGB,16,16,0,b.RGB,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,
b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.bindTexture(b.TEXTURE_2D,i);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,16,16,0,b.RGBA,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);0>=b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS)?(j=!1,l=a(THREE.ShaderFlares.lensFlare)):(j=!0,l=a(THREE.ShaderFlares.lensFlareVertexTexture));m={};n={};m.vertex=b.getAttribLocation(l,"position");m.uv=b.getAttribLocation(l,"uv");n.renderType=b.getUniformLocation(l,"renderType");n.map=b.getUniformLocation(l,"map");n.occlusionMap=b.getUniformLocation(l,"occlusionMap");n.opacity=b.getUniformLocation(l,"opacity");n.color=b.getUniformLocation(l,
"color");n.scale=b.getUniformLocation(l,"scale");n.rotation=b.getUniformLocation(l,"rotation");n.screenPosition=b.getUniformLocation(l,"screenPosition");p=!1};this.render=function(a,d,e,r){var a=a.__webglFlares,z=a.length;if(z){var w=new THREE.Vector3,q=r/e,E=0.5*e,A=0.5*r,v=16/r,u=new THREE.Vector2(v*q,v),D=new THREE.Vector3(1,1,0),C=new THREE.Vector2(1,1),G=n,v=m;b.useProgram(l);p||(b.enableVertexAttribArray(m.vertex),b.enableVertexAttribArray(m.uv),p=!0);b.uniform1i(G.occlusionMap,0);b.uniform1i(G.map,
1);b.bindBuffer(b.ARRAY_BUFFER,f);b.vertexAttribPointer(v.vertex,2,b.FLOAT,!1,16,0);b.vertexAttribPointer(v.uv,2,b.FLOAT,!1,16,8);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.disable(b.CULL_FACE);b.depthMask(!1);var P,B,K,H,I;for(P=0;P<z;P++)if(v=16/r,u.set(v*q,v),H=a[P],w.set(H.matrixWorld.elements[12],H.matrixWorld.elements[13],H.matrixWorld.elements[14]),d.matrixWorldInverse.multiplyVector3(w),d.projectionMatrix.multiplyVector3(w),D.copy(w),C.x=D.x*E+E,C.y=D.y*A+A,j||0<C.x&&C.x<e&&0<C.y&&C.y<r){b.activeTexture(b.TEXTURE1);
b.bindTexture(b.TEXTURE_2D,h);b.copyTexImage2D(b.TEXTURE_2D,0,b.RGB,C.x-8,C.y-8,16,16,0);b.uniform1i(G.renderType,0);b.uniform2f(G.scale,u.x,u.y);b.uniform3f(G.screenPosition,D.x,D.y,D.z);b.disable(b.BLEND);b.enable(b.DEPTH_TEST);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);b.activeTexture(b.TEXTURE0);b.bindTexture(b.TEXTURE_2D,i);b.copyTexImage2D(b.TEXTURE_2D,0,b.RGBA,C.x-8,C.y-8,16,16,0);b.uniform1i(G.renderType,1);b.disable(b.DEPTH_TEST);b.activeTexture(b.TEXTURE1);b.bindTexture(b.TEXTURE_2D,
h);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);H.positionScreen.copy(D);H.customUpdateCallback?H.customUpdateCallback(H):H.updateLensFlares();b.uniform1i(G.renderType,2);b.enable(b.BLEND);B=0;for(K=H.lensFlares.length;B<K;B++)I=H.lensFlares[B],0.001<I.opacity&&0.001<I.scale&&(D.x=I.x,D.y=I.y,D.z=I.z,v=I.size*I.scale/r,u.x=v*q,u.y=v,b.uniform3f(G.screenPosition,D.x,D.y,D.z),b.uniform2f(G.scale,u.x,u.y),b.uniform1f(G.rotation,I.rotation),b.uniform1f(G.opacity,I.opacity),b.uniform3f(G.color,I.color.r,
I.color.g,I.color.b),c.setBlending(I.blending,I.blendEquation,I.blendSrc,I.blendDst),c.setTexture(I.texture,1),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0))}b.enable(b.CULL_FACE);b.enable(b.DEPTH_TEST);b.depthMask(!0)}}};
THREE.ShadowMapPlugin=function(){var a,b,c,d,e,f,g=new THREE.Frustum,h=new THREE.Matrix4,i=new THREE.Vector3,j=new THREE.Vector3;this.init=function(g){a=g.context;b=g;var g=THREE.ShaderLib.depthRGBA,h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,
vertexShader:g.vertexShader,uniforms:h,skinning:!0});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});c._shadowPass=!0;d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0};this.render=function(a,c){b.shadowMapEnabled&&b.shadowMapAutoUpdate&&this.update(a,c)};this.update=function(l,m){var n,p,o,s,t,r,z,w,q,E=[];s=0;a.clearColor(1,1,1,1);a.disable(a.BLEND);a.enable(a.CULL_FACE);a.frontFace(a.CCW);b.shadowMapCullFrontFaces?
a.cullFace(a.FRONT):a.cullFace(a.BACK);b.setDepthTest(!0);n=0;for(p=l.__lights.length;n<p;n++)if(o=l.__lights[n],o.castShadow)if(o instanceof THREE.DirectionalLight&&o.shadowCascade)for(t=0;t<o.shadowCascadeCount;t++){var A;if(o.shadowCascadeArray[t])A=o.shadowCascadeArray[t];else{q=o;z=t;A=new THREE.DirectionalLight;A.isVirtual=!0;A.onlyShadow=!0;A.castShadow=!0;A.shadowCameraNear=q.shadowCameraNear;A.shadowCameraFar=q.shadowCameraFar;A.shadowCameraLeft=q.shadowCameraLeft;A.shadowCameraRight=q.shadowCameraRight;
A.shadowCameraBottom=q.shadowCameraBottom;A.shadowCameraTop=q.shadowCameraTop;A.shadowCameraVisible=q.shadowCameraVisible;A.shadowDarkness=q.shadowDarkness;A.shadowBias=q.shadowCascadeBias[z];A.shadowMapWidth=q.shadowCascadeWidth[z];A.shadowMapHeight=q.shadowCascadeHeight[z];A.pointsWorld=[];A.pointsFrustum=[];w=A.pointsWorld;r=A.pointsFrustum;for(var v=0;8>v;v++)w[v]=new THREE.Vector3,r[v]=new THREE.Vector3;w=q.shadowCascadeNearZ[z];q=q.shadowCascadeFarZ[z];r[0].set(-1,-1,w);r[1].set(1,-1,w);r[2].set(-1,
1,w);r[3].set(1,1,w);r[4].set(-1,-1,q);r[5].set(1,-1,q);r[6].set(-1,1,q);r[7].set(1,1,q);A.originalCamera=m;r=new THREE.Gyroscope;r.position=o.shadowCascadeOffset;r.add(A);r.add(A.target);m.add(r);o.shadowCascadeArray[t]=A;console.log("Created virtualLight",A)}z=o;w=t;q=z.shadowCascadeArray[w];q.position.copy(z.position);q.target.position.copy(z.target.position);q.lookAt(q.target);q.shadowCameraVisible=z.shadowCameraVisible;q.shadowDarkness=z.shadowDarkness;q.shadowBias=z.shadowCascadeBias[w];r=z.shadowCascadeNearZ[w];
z=z.shadowCascadeFarZ[w];q=q.pointsFrustum;q[0].z=r;q[1].z=r;q[2].z=r;q[3].z=r;q[4].z=z;q[5].z=z;q[6].z=z;q[7].z=z;E[s]=A;s++}else E[s]=o,s++;n=0;for(p=E.length;n<p;n++){o=E[n];o.shadowMap||(o.shadowMap=new THREE.WebGLRenderTarget(o.shadowMapWidth,o.shadowMapHeight,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBAFormat}),o.shadowMapSize=new THREE.Vector2(o.shadowMapWidth,o.shadowMapHeight),o.shadowMatrix=new THREE.Matrix4);if(!o.shadowCamera){if(o instanceof THREE.SpotLight)o.shadowCamera=
new THREE.PerspectiveCamera(o.shadowCameraFov,o.shadowMapWidth/o.shadowMapHeight,o.shadowCameraNear,o.shadowCameraFar);else if(o instanceof THREE.DirectionalLight)o.shadowCamera=new THREE.OrthographicCamera(o.shadowCameraLeft,o.shadowCameraRight,o.shadowCameraTop,o.shadowCameraBottom,o.shadowCameraNear,o.shadowCameraFar);else{console.error("Unsupported light type for shadow");continue}l.add(o.shadowCamera);b.autoUpdateScene&&l.updateMatrixWorld()}o.shadowCameraVisible&&!o.cameraHelper&&(o.cameraHelper=
new THREE.CameraHelper(o.shadowCamera),o.shadowCamera.add(o.cameraHelper));if(o.isVirtual&&A.originalCamera==m){t=m;s=o.shadowCamera;r=o.pointsFrustum;q=o.pointsWorld;i.set(Infinity,Infinity,Infinity);j.set(-Infinity,-Infinity,-Infinity);for(z=0;8>z;z++)if(w=q[z],w.copy(r[z]),THREE.ShadowMapPlugin.__projector.unprojectVector(w,t),s.matrixWorldInverse.multiplyVector3(w),w.x<i.x&&(i.x=w.x),w.x>j.x&&(j.x=w.x),w.y<i.y&&(i.y=w.y),w.y>j.y&&(j.y=w.y),w.z<i.z&&(i.z=w.z),w.z>j.z)j.z=w.z;s.left=i.x;s.right=
j.x;s.top=j.y;s.bottom=i.y;s.updateProjectionMatrix()}s=o.shadowMap;r=o.shadowMatrix;t=o.shadowCamera;t.position.copy(o.matrixWorld.getPosition());t.lookAt(o.target.matrixWorld.getPosition());t.updateMatrixWorld();t.matrixWorldInverse.getInverse(t.matrixWorld);o.cameraHelper&&(o.cameraHelper.visible=o.shadowCameraVisible);o.shadowCameraVisible&&o.cameraHelper.update();r.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);r.multiplySelf(t.projectionMatrix);r.multiplySelf(t.matrixWorldInverse);t._viewMatrixArray||
(t._viewMatrixArray=new Float32Array(16));t._projectionMatrixArray||(t._projectionMatrixArray=new Float32Array(16));t.matrixWorldInverse.flattenToArray(t._viewMatrixArray);t.projectionMatrix.flattenToArray(t._projectionMatrixArray);h.multiply(t.projectionMatrix,t.matrixWorldInverse);g.setFromMatrix(h);b.setRenderTarget(s);b.clear();q=l.__webglObjects;o=0;for(s=q.length;o<s;o++)if(z=q[o],r=z.object,z.render=!1,r.visible&&r.castShadow&&(!(r instanceof THREE.Mesh||r instanceof THREE.ParticleSystem)||
!r.frustumCulled||g.contains(r)))r._modelViewMatrix.multiply(t.matrixWorldInverse,r.matrixWorld),z.render=!0;o=0;for(s=q.length;o<s;o++)z=q[o],z.render&&(r=z.object,z=z.buffer,v=r.material instanceof THREE.MeshFaceMaterial?r.material.materials[0]:r.material,w=0<r.geometry.morphTargets.length&&v.morphTargets,v=r instanceof THREE.SkinnedMesh&&v.skinning,w=r.customDepthMaterial?r.customDepthMaterial:v?w?f:e:w?d:c,z instanceof THREE.BufferGeometry?b.renderBufferDirect(t,l.__lights,null,w,z,r):b.renderBuffer(t,
l.__lights,null,w,z,r));q=l.__webglObjectsImmediate;o=0;for(s=q.length;o<s;o++)z=q[o],r=z.object,r.visible&&r.castShadow&&(r._modelViewMatrix.multiply(t.matrixWorldInverse,r.matrixWorld),b.renderImmediateObject(t,l.__lights,null,c,r))}n=b.getClearColor();p=b.getClearAlpha();a.clearColor(n.r,n.g,n.b,p);a.enable(a.BLEND);b.shadowMapCullFrontFaces&&a.cullFace(a.BACK)}};THREE.ShadowMapPlugin.__projector=new THREE.Projector;
THREE.SpritePlugin=function(){function a(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var b,c,d,e,f,g,h,i,j,l;this.init=function(a){b=a.context;c=a;d=new Float32Array(16);e=new Uint16Array(6);a=0;d[a++]=-1;d[a++]=-1;d[a++]=0;d[a++]=0;d[a++]=1;d[a++]=-1;d[a++]=1;d[a++]=0;d[a++]=1;d[a++]=1;d[a++]=1;d[a++]=1;d[a++]=-1;d[a++]=1;d[a++]=0;d[a++]=1;a=0;e[a++]=0;e[a++]=1;e[a++]=2;e[a++]=0;e[a++]=2;e[a++]=3;f=b.createBuffer();g=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,f);b.bufferData(b.ARRAY_BUFFER,d,b.STATIC_DRAW);
b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.bufferData(b.ELEMENT_ARRAY_BUFFER,e,b.STATIC_DRAW);var a=THREE.ShaderSprite.sprite,n=b.createProgram(),p=b.createShader(b.FRAGMENT_SHADER),o=b.createShader(b.VERTEX_SHADER);b.shaderSource(p,a.fragmentShader);b.shaderSource(o,a.vertexShader);b.compileShader(p);b.compileShader(o);b.attachShader(n,p);b.attachShader(n,o);b.linkProgram(n);h=n;i={};j={};i.position=b.getAttribLocation(h,"position");i.uv=b.getAttribLocation(h,"uv");j.uvOffset=b.getUniformLocation(h,
"uvOffset");j.uvScale=b.getUniformLocation(h,"uvScale");j.rotation=b.getUniformLocation(h,"rotation");j.scale=b.getUniformLocation(h,"scale");j.alignment=b.getUniformLocation(h,"alignment");j.color=b.getUniformLocation(h,"color");j.map=b.getUniformLocation(h,"map");j.opacity=b.getUniformLocation(h,"opacity");j.useScreenCoordinates=b.getUniformLocation(h,"useScreenCoordinates");j.affectedByDistance=b.getUniformLocation(h,"affectedByDistance");j.screenPosition=b.getUniformLocation(h,"screenPosition");
j.modelViewMatrix=b.getUniformLocation(h,"modelViewMatrix");j.projectionMatrix=b.getUniformLocation(h,"projectionMatrix");j.fogType=b.getUniformLocation(h,"fogType");j.fogDensity=b.getUniformLocation(h,"fogDensity");j.fogNear=b.getUniformLocation(h,"fogNear");j.fogFar=b.getUniformLocation(h,"fogFar");j.fogColor=b.getUniformLocation(h,"fogColor");l=!1};this.render=function(d,e,p,o){var s=d.__webglSprites,t=s.length;if(t){var r=i,z=j,w=o/p,p=0.5*p,q=0.5*o,E=!0;b.useProgram(h);l||(b.enableVertexAttribArray(r.position),
b.enableVertexAttribArray(r.uv),l=!0);b.disable(b.CULL_FACE);b.enable(b.BLEND);b.depthMask(!0);b.bindBuffer(b.ARRAY_BUFFER,f);b.vertexAttribPointer(r.position,2,b.FLOAT,!1,16,0);b.vertexAttribPointer(r.uv,2,b.FLOAT,!1,16,8);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.uniformMatrix4fv(z.projectionMatrix,!1,e._projectionMatrixArray);b.activeTexture(b.TEXTURE0);b.uniform1i(z.map,0);var A=r=0,v=d.fog;v?(b.uniform3f(z.fogColor,v.color.r,v.color.g,v.color.b),v instanceof THREE.Fog?(b.uniform1f(z.fogNear,v.near),
b.uniform1f(z.fogFar,v.far),b.uniform1i(z.fogType,1),A=r=1):v instanceof THREE.FogExp2&&(b.uniform1f(z.fogDensity,v.density),b.uniform1i(z.fogType,2),A=r=2)):(b.uniform1i(z.fogType,0),A=r=0);for(var u,D=[],v=0;v<t;v++)u=s[v],u.visible&&0!==u.opacity&&(u.useScreenCoordinates?u.z=-u.position.z:(u._modelViewMatrix.multiply(e.matrixWorldInverse,u.matrixWorld),u.z=-u._modelViewMatrix.elements[14]));s.sort(a);for(v=0;v<t;v++)if(u=s[v],u.visible&&0!==u.opacity&&u.map&&u.map.image&&u.map.image.width)u.useScreenCoordinates?
(b.uniform1i(z.useScreenCoordinates,1),b.uniform3f(z.screenPosition,(u.position.x-p)/p,(q-u.position.y)/q,Math.max(0,Math.min(1,u.position.z)))):(b.uniform1i(z.useScreenCoordinates,0),b.uniform1i(z.affectedByDistance,u.affectedByDistance?1:0),b.uniformMatrix4fv(z.modelViewMatrix,!1,u._modelViewMatrix.elements)),e=d.fog&&u.fog?A:0,r!==e&&(b.uniform1i(z.fogType,e),r=e),e=1/(u.scaleByViewport?o:1),D[0]=e*w*u.scale.x,D[1]=e*u.scale.y,b.uniform2f(z.uvScale,u.uvScale.x,u.uvScale.y),b.uniform2f(z.uvOffset,
u.uvOffset.x,u.uvOffset.y),b.uniform2f(z.alignment,u.alignment.x,u.alignment.y),b.uniform1f(z.opacity,u.opacity),b.uniform3f(z.color,u.color.r,u.color.g,u.color.b),b.uniform1f(z.rotation,u.rotation),b.uniform2fv(z.scale,D),u.mergeWith3D&&!E?(b.enable(b.DEPTH_TEST),E=!0):!u.mergeWith3D&&E&&(b.disable(b.DEPTH_TEST),E=!1),c.setBlending(u.blending,u.blendEquation,u.blendSrc,u.blendDst),c.setTexture(u.map,0),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);b.enable(b.CULL_FACE);b.enable(b.DEPTH_TEST);
b.depthMask(!0)}}};
THREE.DepthPassPlugin=function(){this.enabled=!1;this.renderTarget=null;var a,b,c,d,e,f,g=new THREE.Frustum,h=new THREE.Matrix4;this.init=function(g){a=g.context;b=g;var g=THREE.ShaderLib.depthRGBA,h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,
uniforms:h,skinning:!0});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});c._shadowPass=!0;d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0};this.render=function(a,b){this.enabled&&this.update(a,b)};this.update=function(i,j){var l,m,n,p,o,s;a.clearColor(1,1,1,1);a.disable(a.BLEND);b.setDepthTest(!0);b.autoUpdateScene&&i.updateMatrixWorld();j._viewMatrixArray||(j._viewMatrixArray=new Float32Array(16));j._projectionMatrixArray||
(j._projectionMatrixArray=new Float32Array(16));j.matrixWorldInverse.getInverse(j.matrixWorld);j.matrixWorldInverse.flattenToArray(j._viewMatrixArray);j.projectionMatrix.flattenToArray(j._projectionMatrixArray);h.multiply(j.projectionMatrix,j.matrixWorldInverse);g.setFromMatrix(h);b.setRenderTarget(this.renderTarget);b.clear();s=i.__webglObjects;l=0;for(m=s.length;l<m;l++)if(n=s[l],o=n.object,n.render=!1,o.visible&&(!(o instanceof THREE.Mesh||o instanceof THREE.ParticleSystem)||!o.frustumCulled||
g.contains(o)))o._modelViewMatrix.multiply(j.matrixWorldInverse,o.matrixWorld),n.render=!0;var t;l=0;for(m=s.length;l<m;l++)if(n=s[l],n.render&&(o=n.object,n=n.buffer,!(o instanceof THREE.ParticleSystem)||o.customDepthMaterial))(t=o.material instanceof THREE.MeshFaceMaterial?o.material.materials[0]:o.material)&&b.setMaterialFaces(o.material),p=0<o.geometry.morphTargets.length&&t.morphTargets,t=o instanceof THREE.SkinnedMesh&&t.skinning,p=o.customDepthMaterial?o.customDepthMaterial:t?p?f:e:p?d:c,n instanceof
THREE.BufferGeometry?b.renderBufferDirect(j,i.__lights,null,p,n,o):b.renderBuffer(j,i.__lights,null,p,n,o);s=i.__webglObjectsImmediate;l=0;for(m=s.length;l<m;l++)n=s[l],o=n.object,o.visible&&(o._modelViewMatrix.multiply(j.matrixWorldInverse,o.matrixWorld),b.renderImmediateObject(j,i.__lights,null,c,o));l=b.getClearColor();m=b.getClearAlpha();a.clearColor(l.r,l.g,l.b,m);a.enable(a.BLEND)}};
THREE.ShaderFlares={lensFlareVertexTexture:{vertexShader:"uniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform int renderType;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility = (       visibility.r / 9.0 ) *\n( 1.0 - visibility.g / 9.0 ) *\n(       visibility.b / 9.0 ) *\n( 1.0 - visibility.a / 9.0 );\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader:"precision mediump float;\nuniform sampler2D map;\nuniform float opacity;\nuniform int renderType;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},
lensFlare:{vertexShader:"uniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform int renderType;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader:"precision mediump float;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform int renderType;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}};
THREE.ShaderSprite={sprite:{vertexShader:"uniform int useScreenCoordinates;\nuniform int affectedByDistance;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}",
fragmentShader:"precision mediump float;\nuniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"}};

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.PrinterModel = (function(_super) {

    __extends(PrinterModel, _super);

    function PrinterModel() {
      return PrinterModel.__super__.constructor.apply(this, arguments);
    }

    PrinterModel.prototype.defaults = {
      xy_jog_speed: 3000 / 60,
      xy_jog_distance: 10,
      z_jog_speed: 150 / 60,
      z_jog_distance: 1,
      e_feedrate: 50
    };

    PrinterModel.prototype.initialize = function() {
      return this.set(this.defaults, {
        silent: true
      });
    };

    return PrinterModel;

  })(Backbone.Model);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  window.ManualCtrlSidePanelView = (function(_super) {

    __extends(ManualCtrlSidePanelView, _super);

    function ManualCtrlSidePanelView() {
      return ManualCtrlSidePanelView.__super__.constructor.apply(this, arguments);
    }

    ManualCtrlSidePanelView.prototype.initPopover = function() {
      this.$popover = this.$el.find(".settings-popover").detach().removeClass("hide");
      return this.$popoverLink = this.$el.find('h4 a').popover({
        title: "" + (this.$el.find("h4 .title").text()) + " Settings",
        content: this.$popover,
        html: true
      });
    };

    ManualCtrlSidePanelView.prototype.bindModelBindings = function() {
      var field, selector, _ref, _results,
        _this = this;
      if (this.model !== null) {
        _ref = this.modelBindings;
        _results = [];
        for (selector in _ref) {
          field = _ref[selector];
          _results.push((function(selector, field) {
            var event, onModelChange, _ref1;
            _ref1 = selector.split(" "), event = _ref1[0], selector = 2 <= _ref1.length ? __slice.call(_ref1, 1) : [];
            selector = selector.join(" ");
            _this.model.bind("change:" + field, onModelChange = function(model, val) {
              var $field;
              $field = _this.$popover.find(selector);
              if ($field.val() !== val) {
                return $field.val(val);
              }
            });
            onModelChange(_this.model, _this.model.get(field));
            _this.$el.on(event, selector, function(ev) {
              var data;
              console.log("form[" + selector + "] => " + field);
              data = {};
              data[field] = _this.$(ev.target).val();
              return _this.model.set(data);
            });
            return _this.$(selector).val(_this.model.get(field));
          })(selector, field));
        }
        return _results;
      }
    };

    return ManualCtrlSidePanelView;

  })(Backbone.View);

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.TemperatureCtrlPanelView = (function(_super) {

    __extends(TemperatureCtrlPanelView, _super);

    function TemperatureCtrlPanelView() {
      this.clickMovementBtn = __bind(this.clickMovementBtn, this);
      return TemperatureCtrlPanelView.__super__.constructor.apply(this, arguments);
    }

    TemperatureCtrlPanelView.prototype.initialize = function() {
      this.$subtitle = this.$(".subtitle");
      this.axis = this.$el.data("axis");
      this.modelBindings = {
        "keyup input.jog-speed": "" + this.axis + "_jog_speed",
        "change input.jog-speed": "" + this.axis + "_jog_speed",
        "input input.jog-speed": "" + this.axis + "_jog_speed",
        "keyup input.jog-distance": "" + this.axis + "_jog_distance",
        "change input.jog-distance": "" + this.axis + "_jog_distance",
        "input input.jog-distance": "" + this.axis + "_jog_distance"
      };
      this.initPopover();
      this.bindModelBindings();
      this.$el.find(".directional-pad .btn").on("click", this.clickMovementBtn);
      return this.render();
    };

    TemperatureCtrlPanelView.prototype.clickMovementBtn = function(e) {
      var $btn, data;
      $btn = $(e.delegateTarget);
      data = {
        axis: $btn.data("axis"),
        distance: parseFloat(this.model.get("" + this.axis + "_jog_distance")) * parseInt($btn.data("direction")),
        speed: parseFloat(this.model.get("" + this.axis + "_jog_speed"))
      };
      console.log(data);
      return $.ajax("/jog", {
        type: 'PUT',
        data: data,
        success: function(data) {
          return console.log(data);
        }
      });
    };

    TemperatureCtrlPanelView.prototype.render = function() {};

    return TemperatureCtrlPanelView;

  })(ManualCtrlSidePanelView);

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.JogPanelView = (function(_super) {

    __extends(JogPanelView, _super);

    function JogPanelView() {
      this.clickMovementBtn = __bind(this.clickMovementBtn, this);
      return JogPanelView.__super__.constructor.apply(this, arguments);
    }

    JogPanelView.prototype.initialize = function() {
      this.$subtitle = this.$(".subtitle");
      this.axis = this.$el.data("axis");
      this.modelBindings = {
        "keyup input.jog-speed": "" + this.axis + "_jog_speed",
        "change input.jog-speed": "" + this.axis + "_jog_speed",
        "input input.jog-speed": "" + this.axis + "_jog_speed",
        "keyup input.jog-distance": "" + this.axis + "_jog_distance",
        "change input.jog-distance": "" + this.axis + "_jog_distance",
        "input input.jog-distance": "" + this.axis + "_jog_distance"
      };
      this.initPopover();
      this.bindModelBindings();
      this.$el.find(".directional-pad .btn").on("click", this.clickMovementBtn);
      this.model.bind('change', this.render, this);
      return this.render();
    };

    JogPanelView.prototype.clickMovementBtn = function(e) {
      var $btn, data;
      $btn = $(e.delegateTarget);
      data = {
        axis: $btn.data("axis"),
        distance: parseFloat(this.model.get("" + this.axis + "_jog_distance")) * parseInt($btn.data("direction")),
        speed: parseFloat(this.model.get("" + this.axis + "_jog_speed"))
      };
      console.log(data);
      return $.ajax("/jog", {
        type: 'PUT',
        data: data,
        success: function(data) {
          return console.log(data);
        }
      });
    };

    JogPanelView.prototype.render = function() {
      return this.$subtitle.html("" + (this.model.get("" + this.axis + "_jog_distance")) + "mm @ " + (this.model.get("" + this.axis + "_jog_speed")) + "mm/s");
    };

    return JogPanelView;

  })(ManualCtrlSidePanelView);

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.ExtruderCtrlPanelView = (function(_super) {

    __extends(ExtruderCtrlPanelView, _super);

    function ExtruderCtrlPanelView() {
      this.clickMovementBtn = __bind(this.clickMovementBtn, this);
      return ExtruderCtrlPanelView.__super__.constructor.apply(this, arguments);
    }

    ExtruderCtrlPanelView.prototype.initialize = function() {
      this.$subtitle = this.$(".subtitle");
      this.axis = this.$el.data("axis");
      this.modelBindings = {
        "keyup input.jog-speed": "" + this.axis + "_jog_speed",
        "change input.jog-speed": "" + this.axis + "_jog_speed",
        "input input.jog-speed": "" + this.axis + "_jog_speed",
        "keyup input.jog-distance": "" + this.axis + "_jog_distance",
        "change input.jog-distance": "" + this.axis + "_jog_distance",
        "input input.jog-distance": "" + this.axis + "_jog_distance"
      };
      this.initPopover();
      this.bindModelBindings();
      this.$el.find(".directional-pad .btn").on("click", this.clickMovementBtn);
      return this.render();
    };

    ExtruderCtrlPanelView.prototype.clickMovementBtn = function(e) {
      var $btn, data;
      $btn = $(e.delegateTarget);
      data = {
        axis: $btn.data("axis"),
        distance: parseFloat(this.model.get("" + this.axis + "_jog_distance")) * parseInt($btn.data("direction")),
        speed: parseFloat(this.model.get("" + this.axis + "_jog_speed"))
      };
      console.log(data);
      return $.ajax("/jog", {
        type: 'PUT',
        data: data,
        success: function(data) {
          return console.log(data);
        }
      });
    };

    ExtruderCtrlPanelView.prototype.render = function() {};

    return ExtruderCtrlPanelView;

  })(ManualCtrlSidePanelView);

}).call(this);

(function() {
  var PrintJobModal,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  P3D.debug = true;

  $(function() {
    var $sidePanelLinks, $viewer;
    $(".toggle-btn").toggleButtons({
      width: 70
    });
    window.printer = new PrinterModel();
    $("#manual_ctrl .jog-panel").each(function(i, el) {
      return new JogPanelView({
        el: el,
        model: printer
      });
    });
    $("#manual_ctrl .temperature-panel").each(function(i, el) {
      return new TemperatureCtrlPanelView({
        el: el,
        model: printer
      });
    });
    $("#manual_ctrl .extruders-panel").each(function(i, el) {
      return new ExtruderCtrlPanelView({
        el: el,
        model: printer
      });
    });
    $sidePanelLinks = $("#manual_ctrl .side-panel h4 a");
    $sidePanelLinks.on("click", function() {
      return $sidePanelLinks.not($(this)).popover("hide");
    });
    if (true) {
      $viewer = $("#manual_ctrl .canvas-container").viewer({
        height: function() {
          return $(".content").innerHeight() - parseInt($viewer.css('margin-bottom'), 10) - 5;
        },
        onLoad: function(viewer) {}
      });
      $('a.manual_ctrl_nav').on('shown', function() {
        return $viewer.viewer("resize");
      });
    }
    if (true) {
      return new PrintJobModal();
    }
  });

  PrintJobModal = (function() {

    function PrintJobModal() {
      this._onModelLoad = __bind(this._onModelLoad, this);

      this.open = __bind(this.open, this);

      this._onPrintBtnClick = __bind(this._onPrintBtnClick, this);

      this._onDownloadClick = __bind(this._onDownloadClick, this);

      this._onScaleValChange = __bind(this._onScaleValChange, this);

      this._onScaleSliderChange = __bind(this._onScaleSliderChange, this);

      this._onViewerLoad = __bind(this._onViewerLoad, this);

      var elements, k, selector;
      this.$modal = $("#new-print-job-modal");
      elements = {
        $files: ".cad-files",
        $canvas: ".canvas-container",
        $form: "form",
        $scaleVal: ".scale-val",
        $scaleSlider: ".scale-slider",
        $printBtn: ".btn-confirm-print-job",
        $download: ".local-download-link"
      };
      for (k in elements) {
        selector = elements[k];
        this[k] = this.$modal.find(selector);
      }
      this.$canvas.viewer({
        onLoad: this._onViewerLoad,
        defaultZoom: -40
      });
    }

    PrintJobModal.prototype._onViewerLoad = function() {
      var _this = this;
      $(".btn-new-print-job").on("click", function() {
        return _this.$files.click();
      });
      this.$modal.on("change", ".cad-files", function() {
        return _this.open();
      });
      this.$scaleSlider.slider({
        min: 0.1,
        max: 3,
        val: 1,
        snap: function(val) {
          return val.round(1);
        },
        onChange: this._onScaleSliderChange
      });
      this.$scaleVal.on("keyup change", this._onScaleValChange);
      this.$printBtn.on("click", this._onPrintBtnClick);
      this.$download.on("click", this._onDownloadClick);
      console.log("moo");
      return this.open(["/ultimaker_platform.stl"]);
    };

    PrintJobModal.prototype._onScaleSliderChange = function(e, val) {
      return this.$scaleVal.val(val).change();
    };

    PrintJobModal.prototype._onScaleValChange = function() {
      var val;
      val = parseFloat(this.$scaleVal.val());
      if (!(Object.isNumber(val) && val > 0)) {
        return;
      }
      if (val !== this.$scaleSlider.slider("val")) {
        this.$scaleSlider.slider("val", val);
      }
      return this.$canvas.viewer("scale", val);
    };

    PrintJobModal.prototype._exportBlob = function() {
      var exportedP3D;
      exportedP3D = this.p3d.cloneFromMesh({
        background: false,
        pipeline: ["exportTextStl"],
        scale: parseFloat(this.$scaleVal.val())
      });
      return exportedP3D.blob;
    };

    PrintJobModal.prototype._exportURL = function() {
      return (window.webkitURL || window.URL).createObjectURL(this._exportBlob());
    };

    PrintJobModal.prototype._onDownloadClick = function() {
      return this.$download.attr({
        href: this._exportURL(),
        download: this.p3d.filename
      });
    };

    PrintJobModal.prototype._onPrintBtnClick = function(e) {
      var formData;
      formData = new FormData(this.$form[0]);
      formData.append("cadFiles", this._exportBlob(), this.p3d.filename);
      $.ajax({
        url: "/print_jobs/",
        type: 'POST',
        data: formData,
        cache: false,
        processData: false,
        contentType: false
      });
      e.preventDefault();
      return false;
    };

    PrintJobModal.prototype.open = function(files) {
      if (files == null) {
        files = this.$files[0].files;
      }
      console.log(files);
      if (!(files.length > 0)) {
        return;
      }
      $("body").mask("Loading...", 700);
      return this.$canvas.viewer("loadModel", files[0], this._onModelLoad);
    };

    PrintJobModal.prototype._onModelLoad = function(p3d) {
      var fileHtml;
      this.p3d = p3d;
      fileHtml = this.$files.clone().wrap('<div/>').parent().html();
      this.$files.remove();
      this.$files = $(fileHtml).prependTo(this.$modal);
      this.$download.html("Download Stl");
      this.$scaleVal.val(1);
      this.$scaleVal.trigger("change");
      $("body").unmask();
      this.$modal.removeClass("hide").show().modal("show");
      this.$canvas.viewer("resetView");
      this.$canvas.viewer("resize");
      return this.$canvas.viewer("rotate", Math.PI, Math.PI * 3 / 2, Math.PI * 3 / 2);
    };

    return PrintJobModal;

  })();

}).call(this);
