(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ao(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ye={},Kn=[],Et=()=>{},Pf=()=>!1,qi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Co=t=>t.startsWith("onUpdate:"),Ne=Object.assign,Ro=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Of=Object.prototype.hasOwnProperty,de=(t,e)=>Of.call(t,e),re=Array.isArray,br=t=>Ji(t)==="[object Map]",kf=t=>Ji(t)==="[object Set]",ie=t=>typeof t=="function",Re=t=>typeof t=="string",nr=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",jc=t=>(Ae(t)||ie(t))&&ie(t.then)&&ie(t.catch),Df=Object.prototype.toString,Ji=t=>Df.call(t),Nf=t=>Ji(t).slice(8,-1),Lf=t=>Ji(t)==="[object Object]",Po=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Tr=Ao(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xf=/-(\w)/g,ft=Xi(t=>t.replace(xf,(e,n)=>n?n.toUpperCase():"")),Mf=/\B([A-Z])/g,Pn=Xi(t=>t.replace(Mf,"-$1").toLowerCase()),Yi=Xi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ps=Xi(t=>t?`on${Yi(t)}`:""),cn=(t,e)=>!Object.is(t,e),Ii=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Hc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Qs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let il;const Vc=()=>il||(il=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oo(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Re(r)?Hf(r):Oo(r);if(s)for(const o in s)e[o]=s[o]}return e}else if(Re(t)||Ae(t))return t}const Uf=/;(?![^(]*\))/g,Ff=/:([^]+)/,jf=/\/\*[^]*?\*\//g;function Hf(t){const e={};return t.replace(jf,"").split(Uf).forEach(n=>{if(n){const r=n.split(Ff);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ko(t){let e="";if(Re(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=ko(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Vf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bf=Ao(Vf);function Bc(t){return!!t||t===""}/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ke;class $c{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ke,!e&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ke;try{return Ke=this,e()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Wc(t){return new $c(t)}function Kc(){return Ke}function $f(t,e=!1){Ke&&Ke.cleanups.push(t)}let _e;const Os=new WeakSet;class zc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Ke&&Ke.active&&Ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Os.has(this)&&(Os.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=Sr,Sr=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sl(this),qc(this);const e=_e,n=ut;_e=this,ut=!0;try{return this.fn()}finally{Jc(this),_e=e,ut=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Lo(e);this.deps=this.depsTail=void 0,sl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Os.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zs(this)&&this.run()}get dirty(){return Zs(this)}}let Gc=0,Sr;function Do(){Gc++}function No(){if(--Gc>0)return;let t;for(;Sr;){let e=Sr;for(Sr=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function qc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jc(t){let e,n=t.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),Lo(r),Wf(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function Zs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&Xc(e.dep.computed)||e.dep.version!==e.version)return!0;return!!t._dirty}function Xc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Lr))return;t.globalVersion=Lr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!Zs(t)){t.flags&=-3;return}const n=_e,r=ut;_e=t,ut=!0;try{qc(t);const s=t.fn(t._value);(e.version===0||cn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{_e=n,ut=r,Jc(t),t.flags&=-3}}function Lo(t){const{dep:e,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)Lo(s)}}function Wf(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ut=!0;const Yc=[];function un(){Yc.push(ut),ut=!1}function hn(){const t=Yc.pop();ut=t===void 0?!0:t}function sl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=_e;_e=void 0;try{e()}finally{_e=n}}}let Lr=0;class xo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!_e||!ut||_e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==_e)n=this.activeLink={dep:this,sub:_e,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},_e.deps?(n.prevDep=_e.depsTail,_e.depsTail.nextDep=n,_e.depsTail=n):_e.deps=_e.depsTail=n,_e.flags&4&&Qc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=_e.depsTail,n.nextDep=void 0,_e.depsTail.nextDep=n,_e.depsTail=n,_e.deps===n&&(_e.deps=r)}return n}trigger(e){this.version++,Lr++,this.notify(e)}notify(e){Do();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{No()}}}function Qc(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Qc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const Di=new WeakMap,wn=Symbol(""),eo=Symbol(""),xr=Symbol("");function Ve(t,e,n){if(ut&&_e){let r=Di.get(t);r||Di.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=new xo),s.track()}}function Mt(t,e,n,r,s,o){const a=Di.get(t);if(!a){Lr++;return}const c=h=>{h&&h.trigger()};if(Do(),e==="clear")a.forEach(c);else{const h=re(t),d=h&&Po(n);if(h&&n==="length"){const g=Number(r);a.forEach((_,b)=>{(b==="length"||b===xr||!nr(b)&&b>=g)&&c(_)})}else switch(n!==void 0&&c(a.get(n)),d&&c(a.get(xr)),e){case"add":h?d&&c(a.get("length")):(c(a.get(wn)),br(t)&&c(a.get(eo)));break;case"delete":h||(c(a.get(wn)),br(t)&&c(a.get(eo)));break;case"set":br(t)&&c(a.get(wn));break}}No()}function Kf(t,e){var n;return(n=Di.get(t))==null?void 0:n.get(e)}function Fn(t){const e=he(t);return e===t?e:(Ve(e,"iterate",xr),ht(t)?e:e.map(ze))}function Mo(t){return Ve(t=he(t),"iterate",xr),t}const zf={__proto__:null,[Symbol.iterator](){return ks(this,Symbol.iterator,ze)},concat(...t){return Fn(this).concat(...t.map(e=>re(e)?Fn(e):e))},entries(){return ks(this,"entries",t=>(t[1]=ze(t[1]),t))},every(t,e){return Rt(this,"every",t,e,void 0,arguments)},filter(t,e){return Rt(this,"filter",t,e,n=>n.map(ze),arguments)},find(t,e){return Rt(this,"find",t,e,ze,arguments)},findIndex(t,e){return Rt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Rt(this,"findLast",t,e,ze,arguments)},findLastIndex(t,e){return Rt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Rt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ds(this,"includes",t)},indexOf(...t){return Ds(this,"indexOf",t)},join(t){return Fn(this).join(t)},lastIndexOf(...t){return Ds(this,"lastIndexOf",t)},map(t,e){return Rt(this,"map",t,e,void 0,arguments)},pop(){return vr(this,"pop")},push(...t){return vr(this,"push",t)},reduce(t,...e){return ol(this,"reduce",t,e)},reduceRight(t,...e){return ol(this,"reduceRight",t,e)},shift(){return vr(this,"shift")},some(t,e){return Rt(this,"some",t,e,void 0,arguments)},splice(...t){return vr(this,"splice",t)},toReversed(){return Fn(this).toReversed()},toSorted(t){return Fn(this).toSorted(t)},toSpliced(...t){return Fn(this).toSpliced(...t)},unshift(...t){return vr(this,"unshift",t)},values(){return ks(this,"values",ze)}};function ks(t,e,n){const r=Mo(t),s=r[e]();return r!==t&&!ht(t)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=n(o.value)),o}),s}const Gf=Array.prototype;function Rt(t,e,n,r,s,o){const a=Mo(t),c=a!==t&&!ht(t),h=a[e];if(h!==Gf[e]){const _=h.apply(t,o);return c?ze(_):_}let d=n;a!==t&&(c?d=function(_,b){return n.call(this,ze(_),b,t)}:n.length>2&&(d=function(_,b){return n.call(this,_,b,t)}));const g=h.call(a,d,r);return c&&s?s(g):g}function ol(t,e,n,r){const s=Mo(t);let o=n;return s!==t&&(ht(t)?n.length>3&&(o=function(a,c,h){return n.call(this,a,c,h,t)}):o=function(a,c,h){return n.call(this,a,ze(c),h,t)}),s[e](o,...r)}function Ds(t,e,n){const r=he(t);Ve(r,"iterate",xr);const s=r[e](...n);return(s===-1||s===!1)&&Ho(n[0])?(n[0]=he(n[0]),r[e](...n)):s}function vr(t,e,n=[]){un(),Do();const r=he(t)[e].apply(t,n);return No(),hn(),r}const qf=Ao("__proto__,__v_isRef,__isVue"),Zc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(nr));function Jf(t){nr(t)||(t=String(t));const e=he(this);return Ve(e,"has",t),e.hasOwnProperty(t)}class eu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?ld:iu:o?ru:nu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let h;if(a&&(h=zf[n]))return h;if(n==="hasOwnProperty")return Jf}const c=Reflect.get(e,n,Se(e)?e:r);return(nr(n)?Zc.has(n):qf(n))||(s||Ve(e,"get",n),o)?c:Se(c)?a&&Po(n)?c:c.value:Ae(c)?s?ou(c):Kr(c):c}}class tu extends eu{constructor(e=!1){super(!1,e)}set(e,n,r,s){let o=e[n];if(!this._isShallow){const h=Tn(o);if(!ht(r)&&!Tn(r)&&(o=he(o),r=he(r)),!re(e)&&Se(o)&&!Se(r))return h?!1:(o.value=r,!0)}const a=re(e)&&Po(n)?Number(n)<e.length:de(e,n),c=Reflect.set(e,n,r,Se(e)?e:s);return e===he(s)&&(a?cn(r,o)&&Mt(e,"set",n,r):Mt(e,"add",n,r)),c}deleteProperty(e,n){const r=de(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Mt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!nr(n)||!Zc.has(n))&&Ve(e,"has",n),r}ownKeys(e){return Ve(e,"iterate",re(e)?"length":wn),Reflect.ownKeys(e)}}class Xf extends eu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Yf=new tu,Qf=new Xf,Zf=new tu(!0);const Uo=t=>t,Qi=t=>Reflect.getPrototypeOf(t);function di(t,e,n=!1,r=!1){t=t.__v_raw;const s=he(t),o=he(e);n||(cn(e,o)&&Ve(s,"get",e),Ve(s,"get",o));const{has:a}=Qi(s),c=r?Uo:n?Bo:ze;if(a.call(s,e))return c(t.get(e));if(a.call(s,o))return c(t.get(o));t!==s&&t.get(e)}function pi(t,e=!1){const n=this.__v_raw,r=he(n),s=he(t);return e||(cn(t,s)&&Ve(r,"has",t),Ve(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function gi(t,e=!1){return t=t.__v_raw,!e&&Ve(he(t),"iterate",wn),Reflect.get(t,"size",t)}function al(t,e=!1){!e&&!ht(t)&&!Tn(t)&&(t=he(t));const n=he(this);return Qi(n).has.call(n,t)||(n.add(t),Mt(n,"add",t,t)),this}function ll(t,e,n=!1){!n&&!ht(e)&&!Tn(e)&&(e=he(e));const r=he(this),{has:s,get:o}=Qi(r);let a=s.call(r,t);a||(t=he(t),a=s.call(r,t));const c=o.call(r,t);return r.set(t,e),a?cn(e,c)&&Mt(r,"set",t,e):Mt(r,"add",t,e),this}function cl(t){const e=he(this),{has:n,get:r}=Qi(e);let s=n.call(e,t);s||(t=he(t),s=n.call(e,t)),r&&r.call(e,t);const o=e.delete(t);return s&&Mt(e,"delete",t,void 0),o}function ul(){const t=he(this),e=t.size!==0,n=t.clear();return e&&Mt(t,"clear",void 0,void 0),n}function mi(t,e){return function(r,s){const o=this,a=o.__v_raw,c=he(a),h=e?Uo:t?Bo:ze;return!t&&Ve(c,"iterate",wn),a.forEach((d,g)=>r.call(s,h(d),h(g),o))}}function vi(t,e,n){return function(...r){const s=this.__v_raw,o=he(s),a=br(o),c=t==="entries"||t===Symbol.iterator&&a,h=t==="keys"&&a,d=s[t](...r),g=n?Uo:e?Bo:ze;return!e&&Ve(o,"iterate",h?eo:wn),{next(){const{value:_,done:b}=d.next();return b?{value:_,done:b}:{value:c?[g(_[0]),g(_[1])]:g(_),done:b}},[Symbol.iterator](){return this}}}}function qt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ed(){const t={get(o){return di(this,o)},get size(){return gi(this)},has:pi,add:al,set:ll,delete:cl,clear:ul,forEach:mi(!1,!1)},e={get(o){return di(this,o,!1,!0)},get size(){return gi(this)},has:pi,add(o){return al.call(this,o,!0)},set(o,a){return ll.call(this,o,a,!0)},delete:cl,clear:ul,forEach:mi(!1,!0)},n={get(o){return di(this,o,!0)},get size(){return gi(this,!0)},has(o){return pi.call(this,o,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:mi(!0,!1)},r={get(o){return di(this,o,!0,!0)},get size(){return gi(this,!0)},has(o){return pi.call(this,o,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:mi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=vi(o,!1,!1),n[o]=vi(o,!0,!1),e[o]=vi(o,!1,!0),r[o]=vi(o,!0,!0)}),[t,n,e,r]}const[td,nd,rd,id]=ed();function Fo(t,e){const n=e?t?id:rd:t?nd:td;return(r,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(de(n,s)&&s in r?n:r,s,o)}const sd={get:Fo(!1,!1)},od={get:Fo(!1,!0)},ad={get:Fo(!0,!1)};const nu=new WeakMap,ru=new WeakMap,iu=new WeakMap,ld=new WeakMap;function cd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ud(t){return t.__v_skip||!Object.isExtensible(t)?0:cd(Nf(t))}function Kr(t){return Tn(t)?t:jo(t,!1,Yf,sd,nu)}function su(t){return jo(t,!1,Zf,od,ru)}function ou(t){return jo(t,!0,Qf,ad,iu)}function jo(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=s.get(t);if(o)return o;const a=ud(t);if(a===0)return t;const c=new Proxy(t,a===2?r:n);return s.set(t,c),c}function In(t){return Tn(t)?In(t.__v_raw):!!(t&&t.__v_isReactive)}function Tn(t){return!!(t&&t.__v_isReadonly)}function ht(t){return!!(t&&t.__v_isShallow)}function Ho(t){return t?!!t.__v_raw:!1}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function Vo(t){return!de(t,"__v_skip")&&Object.isExtensible(t)&&Hc(t,"__v_skip",!0),t}const ze=t=>Ae(t)?Kr(t):t,Bo=t=>Ae(t)?ou(t):t;function Se(t){return t?t.__v_isRef===!0:!1}function Sn(t){return au(t,!1)}function hd(t){return au(t,!0)}function au(t,e){return Se(t)?t:new fd(t,e)}class fd{constructor(e,n){this.dep=new xo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:he(e),this._value=n?e:ze(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ht(e)||Tn(e);e=r?e:he(e),cn(e,n)&&(this._rawValue=e,this._value=r?e:ze(e),this.dep.trigger())}}function wt(t){return Se(t)?t.value:t}const dd={get:(t,e,n)=>e==="__v_raw"?t:wt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function lu(t){return In(t)?t:new Proxy(t,dd)}function pd(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=md(t,n);return e}class gd{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Kf(he(this._object),this._key)}}function md(t,e,n){const r=t[e];return Se(r)?r:new gd(t,e,n)}class vd{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new xo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Lr-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){this.flags|=16,_e!==this&&this.dep.notify()}get value(){const e=this.dep.track();return Xc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _d(t,e,n=!1){let r,s;return ie(t)?r=t:(r=t.get,s=t.set),new vd(r,s,n)}const _i={},Ni=new WeakMap;let yn;function yd(t,e=!1,n=yn){if(n){let r=Ni.get(n);r||Ni.set(n,r=[]),r.push(t)}}function Ed(t,e,n=ye){const{immediate:r,deep:s,once:o,scheduler:a,augmentJob:c,call:h}=n,d=B=>s?B:ht(B)||s===!1||s===0?Dt(B,1):Dt(B);let g,_,b,R,D=!1,M=!1;if(Se(t)?(_=()=>t.value,D=ht(t)):In(t)?(_=()=>d(t),D=!0):re(t)?(M=!0,D=t.some(B=>In(B)||ht(B)),_=()=>t.map(B=>{if(Se(B))return B.value;if(In(B))return d(B);if(ie(B))return h?h(B,2):B()})):ie(t)?e?_=h?()=>h(t,2):t:_=()=>{if(b){un();try{b()}finally{hn()}}const B=yn;yn=g;try{return h?h(t,3,[R]):t(R)}finally{yn=B}}:_=Et,e&&s){const B=_,ne=s===!0?1/0:s;_=()=>Dt(B(),ne)}const G=Kc(),q=()=>{g.stop(),G&&Ro(G.effects,g)};if(o)if(e){const B=e;e=(...ne)=>{B(...ne),q()}}else{const B=_;_=()=>{B(),q()}}let W=M?new Array(t.length).fill(_i):_i;const K=B=>{if(!(!(g.flags&1)||!g.dirty&&!B))if(e){const ne=g.run();if(s||D||(M?ne.some((le,I)=>cn(le,W[I])):cn(ne,W))){b&&b();const le=yn;yn=g;try{const I=[ne,W===_i?void 0:M&&W[0]===_i?[]:W,R];h?h(e,3,I):e(...I),W=ne}finally{yn=le}}}else g.run()};return c&&c(K),g=new zc(_),g.scheduler=a?()=>a(K,!1):K,R=B=>yd(B,!1,g),b=g.onStop=()=>{const B=Ni.get(g);if(B){if(h)h(B,4);else for(const ne of B)ne();Ni.delete(g)}},e?r?K(!0):W=g.run():a?a(K.bind(null,!0),!0):g.run(),q.pause=g.pause.bind(g),q.resume=g.resume.bind(g),q.stop=q,q}function Dt(t,e=1/0,n){if(e<=0||!Ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Se(t))Dt(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)Dt(t[r],e,n);else if(kf(t)||br(t))t.forEach(r=>{Dt(r,e,n)});else if(Lf(t)){for(const r in t)Dt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Dt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zr(t,e,n,r){try{return r?t(...r):t()}catch(s){Zi(s,e,n)}}function St(t,e,n,r){if(ie(t)){const s=zr(t,e,n,r);return s&&jc(s)&&s.catch(o=>{Zi(o,e,n)}),s}if(re(t)){const s=[];for(let o=0;o<t.length;o++)s.push(St(t[o],e,n,r));return s}}function Zi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ye;if(e){let c=e.parent;const h=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const g=c.ec;if(g){for(let _=0;_<g.length;_++)if(g[_](t,h,d)===!1)return}c=c.parent}if(o){un(),zr(o,null,10,[t,h,d]),hn();return}}wd(t,n,s,r,a)}function wd(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let Mr=!1,to=!1;const Ge=[];let vt=0;const zn=[];let Qt=null,Hn=0;const cu=Promise.resolve();let $o=null;function Wo(t){const e=$o||cu;return t?e.then(this?t.bind(this):t):e}function Id(t){let e=Mr?vt+1:0,n=Ge.length;for(;e<n;){const r=e+n>>>1,s=Ge[r],o=Ur(s);o<t||o===t&&s.flags&2?e=r+1:n=r}return e}function Ko(t){if(!(t.flags&1)){const e=Ur(t),n=Ge[Ge.length-1];!n||!(t.flags&2)&&e>=Ur(n)?Ge.push(t):Ge.splice(Id(e),0,t),t.flags|=1,uu()}}function uu(){!Mr&&!to&&(to=!0,$o=cu.then(fu))}function bd(t){re(t)?zn.push(...t):Qt&&t.id===-1?Qt.splice(Hn+1,0,t):t.flags&1||(zn.push(t),t.flags|=1),uu()}function hl(t,e,n=Mr?vt+1:0){for(;n<Ge.length;n++){const r=Ge[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ge.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function hu(t){if(zn.length){const e=[...new Set(zn)].sort((n,r)=>Ur(n)-Ur(r));if(zn.length=0,Qt){Qt.push(...e);return}for(Qt=e,Hn=0;Hn<Qt.length;Hn++){const n=Qt[Hn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Qt=null,Hn=0}}const Ur=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fu(t){to=!1,Mr=!0;try{for(vt=0;vt<Ge.length;vt++){const e=Ge[vt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zr(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;vt<Ge.length;vt++){const e=Ge[vt];e&&(e.flags&=-2)}vt=0,Ge.length=0,hu(),Mr=!1,$o=null,(Ge.length||zn.length)&&fu()}}let Ze=null,du=null;function Li(t){const e=Ze;return Ze=t,du=t&&t.type.__scopeId||null,e}function bi(t,e=Ze,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&wl(-1);const o=Li(e);let a;try{a=t(...s)}finally{Li(o),r._d&&wl(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function xi(t,e){if(Ze===null)return t;const n=os(Ze),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,h=ye]=e[s];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&Dt(a),r.push({dir:o,instance:n,value:a,oldValue:void 0,arg:c,modifiers:h}))}return t}function vn(t,e,n,r){const s=t.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let h=c.dir[r];h&&(un(),St(h,n,8,[t.el,c,t,e]),hn())}}const Td=Symbol("_vte"),Sd=t=>t.__isTeleport;function zo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,zo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function pu(t,e){return ie(t)?Ne({name:t.name},e,{setup:t}):t}function gu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function no(t,e,n,r,s=!1){if(re(t)){t.forEach((D,M)=>no(D,e&&(re(e)?e[M]:e),n,r,s));return}if(Ar(r)&&!s)return;const o=r.shapeFlag&4?os(r.component):r.el,a=s?null:o,{i:c,r:h}=t,d=e&&e.r,g=c.refs===ye?c.refs={}:c.refs,_=c.setupState,b=he(_),R=_===ye?()=>!1:D=>de(b,D);if(d!=null&&d!==h&&(Re(d)?(g[d]=null,R(d)&&(_[d]=null)):Se(d)&&(d.value=null)),ie(h))zr(h,c,12,[a,g]);else{const D=Re(h),M=Se(h);if(D||M){const G=()=>{if(t.f){const q=D?R(h)?_[h]:g[h]:h.value;s?re(q)&&Ro(q,o):re(q)?q.includes(o)||q.push(o):D?(g[h]=[o],R(h)&&(_[h]=g[h])):(h.value=[o],t.k&&(g[t.k]=h.value))}else D?(g[h]=a,R(h)&&(_[h]=a)):M&&(h.value=a,t.k&&(g[t.k]=a))};a?(G.id=-1,tt(G,n)):G()}}}const Ar=t=>!!t.type.__asyncLoader,mu=t=>t.type.__isKeepAlive;function Ad(t,e){vu(t,"a",e)}function Cd(t,e){vu(t,"da",e)}function vu(t,e,n=De){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(es(e,r,n),n){let s=n.parent;for(;s&&s.parent;)mu(s.parent.vnode)&&Rd(r,e,n,s),s=s.parent}}function Rd(t,e,n,r){const s=es(e,t,r,!0);_u(()=>{Ro(r[e],s)},n)}function es(t,e,n=De,r=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{un();const c=Gr(n),h=St(e,n,t,a);return c(),hn(),h});return r?s.unshift(o):s.push(o),o}}const Ht=t=>(e,n=De)=>{(!ss||t==="sp")&&es(t,(...r)=>e(...r),n)},Pd=Ht("bm"),Od=Ht("m"),kd=Ht("bu"),Dd=Ht("u"),Nd=Ht("bum"),_u=Ht("um"),Ld=Ht("sp"),xd=Ht("rtg"),Md=Ht("rtc");function Ud(t,e=De){es("ec",t,e)}const yu="components";function fl(t,e){return jd(yu,t,!0,e)||t}const Fd=Symbol.for("v-ndc");function jd(t,e,n=!0,r=!1){const s=Ze||De;if(s){const o=s.type;if(t===yu){const c=Cp(o,!1);if(c&&(c===e||c===ft(e)||c===Yi(ft(e))))return o}const a=dl(s[t]||o[t],e)||dl(s.appContext[t],e);return!a&&r?o:a}}function dl(t,e){return t&&(t[e]||t[ft(e)]||t[Yi(ft(e))])}const ro=t=>t?Fu(t)?os(t):ro(t.parent):null,Cr=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ro(t.parent),$root:t=>ro(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Go(t),$forceUpdate:t=>t.f||(t.f=()=>{Ko(t.update)}),$nextTick:t=>t.n||(t.n=Wo.bind(t.proxy)),$watch:t=>ap.bind(t)}),Ns=(t,e)=>t!==ye&&!t.__isScriptSetup&&de(t,e),Hd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:a,type:c,appContext:h}=t;let d;if(e[0]!=="$"){const R=a[e];if(R!==void 0)switch(R){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(Ns(r,e))return a[e]=1,r[e];if(s!==ye&&de(s,e))return a[e]=2,s[e];if((d=t.propsOptions[0])&&de(d,e))return a[e]=3,o[e];if(n!==ye&&de(n,e))return a[e]=4,n[e];io&&(a[e]=0)}}const g=Cr[e];let _,b;if(g)return e==="$attrs"&&Ve(t.attrs,"get",""),g(t);if((_=c.__cssModules)&&(_=_[e]))return _;if(n!==ye&&de(n,e))return a[e]=4,n[e];if(b=h.config.globalProperties,de(b,e))return b[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return Ns(s,e)?(s[e]=n,!0):r!==ye&&de(r,e)?(r[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==ye&&de(t,a)||Ns(e,a)||(c=o[0])&&de(c,a)||de(r,a)||de(Cr,a)||de(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function pl(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let io=!0;function Vd(t){const e=Go(t),n=t.proxy,r=t.ctx;io=!1,e.beforeCreate&&gl(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:c,provide:h,inject:d,created:g,beforeMount:_,mounted:b,beforeUpdate:R,updated:D,activated:M,deactivated:G,beforeDestroy:q,beforeUnmount:W,destroyed:K,unmounted:B,render:ne,renderTracked:le,renderTriggered:I,errorCaptured:p,serverPrefetch:v,expose:w,inheritAttrs:T,components:S,directives:E,filters:Pe}=e;if(d&&Bd(d,r,null),a)for(const te in a){const se=a[te];ie(se)&&(r[te]=se.bind(n))}if(s){const te=s.call(n,n);Ae(te)&&(t.data=Kr(te))}if(io=!0,o)for(const te in o){const se=o[te],et=ie(se)?se.bind(n,n):ie(se.get)?se.get.bind(n,n):Et,lt=!ie(se)&&ie(se.set)?se.set.bind(n):Et,it=at({get:et,set:lt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>it.value,set:Ie=>it.value=Ie})}if(c)for(const te in c)Eu(c[te],r,n,te);if(h){const te=ie(h)?h.call(n):h;Reflect.ownKeys(te).forEach(se=>{Ti(se,te[se])})}g&&gl(g,t,"c");function Ee(te,se){re(se)?se.forEach(et=>te(et.bind(n))):se&&te(se.bind(n))}if(Ee(Pd,_),Ee(Od,b),Ee(kd,R),Ee(Dd,D),Ee(Ad,M),Ee(Cd,G),Ee(Ud,p),Ee(Md,le),Ee(xd,I),Ee(Nd,W),Ee(_u,B),Ee(Ld,v),re(w))if(w.length){const te=t.exposed||(t.exposed={});w.forEach(se=>{Object.defineProperty(te,se,{get:()=>n[se],set:et=>n[se]=et})})}else t.exposed||(t.exposed={});ne&&t.render===Et&&(t.render=ne),T!=null&&(t.inheritAttrs=T),S&&(t.components=S),E&&(t.directives=E),v&&gu(t)}function Bd(t,e,n=Et){re(t)&&(t=so(t));for(const r in t){const s=t[r];let o;Ae(s)?"default"in s?o=It(s.from||r,s.default,!0):o=It(s.from||r):o=It(s),Se(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function gl(t,e,n){St(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Eu(t,e,n,r){let s=r.includes(".")?Lu(n,r):()=>n[r];if(Re(t)){const o=e[t];ie(o)&&Rr(s,o)}else if(ie(t))Rr(s,t.bind(n));else if(Ae(t))if(re(t))t.forEach(o=>Eu(o,e,n,r));else{const o=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(o)&&Rr(s,o,t)}}function Go(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let h;return c?h=c:!s.length&&!n&&!r?h=e:(h={},s.length&&s.forEach(d=>Mi(h,d,a,!0)),Mi(h,e,a)),Ae(e)&&o.set(e,h),h}function Mi(t,e,n,r=!1){const{mixins:s,extends:o}=e;o&&Mi(t,o,n,!0),s&&s.forEach(a=>Mi(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=$d[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const $d={data:ml,props:vl,emits:vl,methods:Er,computed:Er,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Er,directives:Er,watch:Kd,provide:ml,inject:Wd};function ml(t,e){return e?t?function(){return Ne(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function Wd(t,e){return Er(so(t),so(e))}function so(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function Er(t,e){return t?Ne(Object.create(null),t,e):e}function vl(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:Ne(Object.create(null),pl(t),pl(e??{})):e}function Kd(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const r in e)n[r]=We(t[r],e[r]);return n}function wu(){return{app:null,config:{isNativeTag:Pf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zd=0;function Gd(t,e){return function(r,s=null){ie(r)||(r=Ne({},r)),s!=null&&!Ae(s)&&(s=null);const o=wu(),a=new WeakSet,c=[];let h=!1;const d=o.app={_uid:zd++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:Pp,get config(){return o.config},set config(g){},use(g,..._){return a.has(g)||(g&&ie(g.install)?(a.add(g),g.install(d,..._)):ie(g)&&(a.add(g),g(d,..._))),d},mixin(g){return o.mixins.includes(g)||o.mixins.push(g),d},component(g,_){return _?(o.components[g]=_,d):o.components[g]},directive(g,_){return _?(o.directives[g]=_,d):o.directives[g]},mount(g,_,b){if(!h){const R=d._ceVNode||Je(r,s);return R.appContext=o,b===!0?b="svg":b===!1&&(b=void 0),_&&e?e(R,g):t(R,g,b),h=!0,d._container=g,g.__vue_app__=d,os(R.component)}},onUnmount(g){c.push(g)},unmount(){h&&(St(c,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(g,_){return o.provides[g]=_,d},runWithContext(g){const _=bn;bn=d;try{return g()}finally{bn=_}}};return d}}let bn=null;function Ti(t,e){if(De){let n=De.provides;const r=De.parent&&De.parent.provides;r===n&&(n=De.provides=Object.create(r)),n[t]=e}}function It(t,e,n=!1){const r=De||Ze;if(r||bn){const s=bn?bn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r&&r.proxy):e}}function qd(){return!!(De||Ze||bn)}const Iu={},bu=()=>Object.create(Iu),Tu=t=>Object.getPrototypeOf(t)===Iu;function Jd(t,e,n,r=!1){const s={},o=bu();t.propsDefaults=Object.create(null),Su(t,e,s,o);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:su(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Xd(t,e,n,r){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,c=he(s),[h]=t.propsOptions;let d=!1;if((r||a>0)&&!(a&16)){if(a&8){const g=t.vnode.dynamicProps;for(let _=0;_<g.length;_++){let b=g[_];if(ts(t.emitsOptions,b))continue;const R=e[b];if(h)if(de(o,b))R!==o[b]&&(o[b]=R,d=!0);else{const D=ft(b);s[D]=oo(h,c,D,R,t,!1)}else R!==o[b]&&(o[b]=R,d=!0)}}}else{Su(t,e,s,o)&&(d=!0);let g;for(const _ in c)(!e||!de(e,_)&&((g=Pn(_))===_||!de(e,g)))&&(h?n&&(n[_]!==void 0||n[g]!==void 0)&&(s[_]=oo(h,c,_,void 0,t,!0)):delete s[_]);if(o!==c)for(const _ in o)(!e||!de(e,_))&&(delete o[_],d=!0)}d&&Mt(t.attrs,"set","")}function Su(t,e,n,r){const[s,o]=t.propsOptions;let a=!1,c;if(e)for(let h in e){if(Tr(h))continue;const d=e[h];let g;s&&de(s,g=ft(h))?!o||!o.includes(g)?n[g]=d:(c||(c={}))[g]=d:ts(t.emitsOptions,h)||(!(h in r)||d!==r[h])&&(r[h]=d,a=!0)}if(o){const h=he(n),d=c||ye;for(let g=0;g<o.length;g++){const _=o[g];n[_]=oo(s,h,_,d[_],t,!de(d,_))}}return a}function oo(t,e,n,r,s,o){const a=t[n];if(a!=null){const c=de(a,"default");if(c&&r===void 0){const h=a.default;if(a.type!==Function&&!a.skipFactory&&ie(h)){const{propsDefaults:d}=s;if(n in d)r=d[n];else{const g=Gr(s);r=d[n]=h.call(null,e),g()}}else r=h;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!c?r=!1:a[1]&&(r===""||r===Pn(n))&&(r=!0))}return r}const Yd=new WeakMap;function Au(t,e,n=!1){const r=n?Yd:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let h=!1;if(!ie(t)){const g=_=>{h=!0;const[b,R]=Au(_,e,!0);Ne(a,b),R&&c.push(...R)};!n&&e.mixins.length&&e.mixins.forEach(g),t.extends&&g(t.extends),t.mixins&&t.mixins.forEach(g)}if(!o&&!h)return Ae(t)&&r.set(t,Kn),Kn;if(re(o))for(let g=0;g<o.length;g++){const _=ft(o[g]);_l(_)&&(a[_]=ye)}else if(o)for(const g in o){const _=ft(g);if(_l(_)){const b=o[g],R=a[_]=re(b)||ie(b)?{type:b}:Ne({},b),D=R.type;let M=!1,G=!0;if(re(D))for(let q=0;q<D.length;++q){const W=D[q],K=ie(W)&&W.name;if(K==="Boolean"){M=!0;break}else K==="String"&&(G=!1)}else M=ie(D)&&D.name==="Boolean";R[0]=M,R[1]=G,(M||de(R,"default"))&&c.push(_)}}const d=[a,c];return Ae(t)&&r.set(t,d),d}function _l(t){return t[0]!=="$"&&!Tr(t)}const Cu=t=>t[0]==="_"||t==="$stable",qo=t=>re(t)?t.map(_t):[_t(t)],Qd=(t,e,n)=>{if(e._n)return e;const r=bi((...s)=>qo(e(...s)),n);return r._c=!1,r},Ru=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Cu(s))continue;const o=t[s];if(ie(o))e[s]=Qd(s,o,r);else if(o!=null){const a=qo(o);e[s]=()=>a}}},Pu=(t,e)=>{const n=qo(e);t.slots.default=()=>n},Ou=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Zd=(t,e,n)=>{const r=t.slots=bu();if(t.vnode.shapeFlag&32){const s=e._;s?(Ou(r,e,n),n&&Hc(r,"_",s,!0)):Ru(e,r)}else e&&Pu(t,e)},ep=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=ye;if(r.shapeFlag&32){const c=e._;c?n&&c===1?o=!1:Ou(s,e,n):(o=!e.$stable,Ru(e,s)),a=e}else e&&(Pu(t,e),a={default:1});if(o)for(const c in s)!Cu(c)&&a[c]==null&&delete s[c]},tt=pp;function tp(t){return np(t)}function np(t,e){const n=Vc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:a,createText:c,createComment:h,setText:d,setElementText:g,parentNode:_,nextSibling:b,setScopeId:R=Et,insertStaticContent:D}=t,M=(m,y,C,N=null,O=null,L=null,H=void 0,F=null,U=!!y.dynamicChildren)=>{if(m===y)return;m&&!_r(m,y)&&(N=k(m),Ie(m,O,L,!0),m=null),y.patchFlag===-2&&(U=!1,y.dynamicChildren=null);const{type:x,ref:Q,shapeFlag:$}=y;switch(x){case ns:G(m,y,C,N);break;case Fr:q(m,y,C,N);break;case Ms:m==null&&W(y,C,N,H);break;case kt:S(m,y,C,N,O,L,H,F,U);break;default:$&1?ne(m,y,C,N,O,L,H,F,U):$&6?E(m,y,C,N,O,L,H,F,U):($&64||$&128)&&x.process(m,y,C,N,O,L,H,F,U,J)}Q!=null&&O&&no(Q,m&&m.ref,L,y||m,!y)},G=(m,y,C,N)=>{if(m==null)r(y.el=c(y.children),C,N);else{const O=y.el=m.el;y.children!==m.children&&d(O,y.children)}},q=(m,y,C,N)=>{m==null?r(y.el=h(y.children||""),C,N):y.el=m.el},W=(m,y,C,N)=>{[m.el,m.anchor]=D(m.children,y,C,N,m.el,m.anchor)},K=({el:m,anchor:y},C,N)=>{let O;for(;m&&m!==y;)O=b(m),r(m,C,N),m=O;r(y,C,N)},B=({el:m,anchor:y})=>{let C;for(;m&&m!==y;)C=b(m),s(m),m=C;s(y)},ne=(m,y,C,N,O,L,H,F,U)=>{y.type==="svg"?H="svg":y.type==="math"&&(H="mathml"),m==null?le(y,C,N,O,L,H,F,U):v(m,y,O,L,H,F,U)},le=(m,y,C,N,O,L,H,F)=>{let U,x;const{props:Q,shapeFlag:$,transition:Y,dirs:X}=m;if(U=m.el=a(m.type,L,Q&&Q.is,Q),$&8?g(U,m.children):$&16&&p(m.children,U,null,N,O,Ls(m,L),H,F),X&&vn(m,null,N,"created"),I(U,m,m.scopeId,H,N),Q){for(const fe in Q)fe!=="value"&&!Tr(fe)&&o(U,fe,null,Q[fe],L,N);"value"in Q&&o(U,"value",null,Q.value,L),(x=Q.onVnodeBeforeMount)&&mt(x,N,m)}X&&vn(m,null,N,"beforeMount");const Z=rp(O,Y);Z&&Y.beforeEnter(U),r(U,y,C),((x=Q&&Q.onVnodeMounted)||Z||X)&&tt(()=>{x&&mt(x,N,m),Z&&Y.enter(U),X&&vn(m,null,N,"mounted")},O)},I=(m,y,C,N,O)=>{if(C&&R(m,C),N)for(let L=0;L<N.length;L++)R(m,N[L]);if(O){let L=O.subTree;if(y===L||Mu(L.type)&&(L.ssContent===y||L.ssFallback===y)){const H=O.vnode;I(m,H,H.scopeId,H.slotScopeIds,O.parent)}}},p=(m,y,C,N,O,L,H,F,U=0)=>{for(let x=U;x<m.length;x++){const Q=m[x]=F?Zt(m[x]):_t(m[x]);M(null,Q,y,C,N,O,L,H,F)}},v=(m,y,C,N,O,L,H)=>{const F=y.el=m.el;let{patchFlag:U,dynamicChildren:x,dirs:Q}=y;U|=m.patchFlag&16;const $=m.props||ye,Y=y.props||ye;let X;if(C&&_n(C,!1),(X=Y.onVnodeBeforeUpdate)&&mt(X,C,y,m),Q&&vn(y,m,C,"beforeUpdate"),C&&_n(C,!0),($.innerHTML&&Y.innerHTML==null||$.textContent&&Y.textContent==null)&&g(F,""),x?w(m.dynamicChildren,x,F,C,N,Ls(y,O),L):H||se(m,y,F,null,C,N,Ls(y,O),L,!1),U>0){if(U&16)T(F,$,Y,C,O);else if(U&2&&$.class!==Y.class&&o(F,"class",null,Y.class,O),U&4&&o(F,"style",$.style,Y.style,O),U&8){const Z=y.dynamicProps;for(let fe=0;fe<Z.length;fe++){const ce=Z[fe],Le=$[ce],Ce=Y[ce];(Ce!==Le||ce==="value")&&o(F,ce,Le,Ce,O,C)}}U&1&&m.children!==y.children&&g(F,y.children)}else!H&&x==null&&T(F,$,Y,C,O);((X=Y.onVnodeUpdated)||Q)&&tt(()=>{X&&mt(X,C,y,m),Q&&vn(y,m,C,"updated")},N)},w=(m,y,C,N,O,L,H)=>{for(let F=0;F<y.length;F++){const U=m[F],x=y[F],Q=U.el&&(U.type===kt||!_r(U,x)||U.shapeFlag&70)?_(U.el):C;M(U,x,Q,null,N,O,L,H,!0)}},T=(m,y,C,N,O)=>{if(y!==C){if(y!==ye)for(const L in y)!Tr(L)&&!(L in C)&&o(m,L,y[L],null,O,N);for(const L in C){if(Tr(L))continue;const H=C[L],F=y[L];H!==F&&L!=="value"&&o(m,L,F,H,O,N)}"value"in C&&o(m,"value",y.value,C.value,O)}},S=(m,y,C,N,O,L,H,F,U)=>{const x=y.el=m?m.el:c(""),Q=y.anchor=m?m.anchor:c("");let{patchFlag:$,dynamicChildren:Y,slotScopeIds:X}=y;X&&(F=F?F.concat(X):X),m==null?(r(x,C,N),r(Q,C,N),p(y.children||[],C,Q,O,L,H,F,U)):$>0&&$&64&&Y&&m.dynamicChildren?(w(m.dynamicChildren,Y,C,O,L,H,F),(y.key!=null||O&&y===O.subTree)&&ku(m,y,!0)):se(m,y,C,Q,O,L,H,F,U)},E=(m,y,C,N,O,L,H,F,U)=>{y.slotScopeIds=F,m==null?y.shapeFlag&512?O.ctx.activate(y,C,N,H,U):Pe(y,C,N,O,L,H,U):Ye(m,y,U)},Pe=(m,y,C,N,O,L,H)=>{const F=m.component=Ip(m,N,O);if(mu(m)&&(F.ctx.renderer=J),bp(F,!1,H),F.asyncDep){if(O&&O.registerDep(F,Ee,H),!m.el){const U=F.subTree=Je(Fr);q(null,U,y,C)}}else Ee(F,m,y,C,O,L,H)},Ye=(m,y,C)=>{const N=y.component=m.component;if(fp(m,y,C))if(N.asyncDep&&!N.asyncResolved){te(N,y,C);return}else N.next=y,N.update();else y.el=m.el,N.vnode=y},Ee=(m,y,C,N,O,L,H)=>{const F=()=>{if(m.isMounted){let{next:$,bu:Y,u:X,parent:Z,vnode:fe}=m;{const xe=Du(m);if(xe){$&&($.el=fe.el,te(m,$,H)),xe.asyncDep.then(()=>{m.isUnmounted||F()});return}}let ce=$,Le;_n(m,!1),$?($.el=fe.el,te(m,$,H)):$=fe,Y&&Ii(Y),(Le=$.props&&$.props.onVnodeBeforeUpdate)&&mt(Le,Z,$,fe),_n(m,!0);const Ce=xs(m),Oe=m.subTree;m.subTree=Ce,M(Oe,Ce,_(Oe.el),k(Oe),m,O,L),$.el=Ce.el,ce===null&&dp(m,Ce.el),X&&tt(X,O),(Le=$.props&&$.props.onVnodeUpdated)&&tt(()=>mt(Le,Z,$,fe),O)}else{let $;const{el:Y,props:X}=y,{bm:Z,m:fe,parent:ce,root:Le,type:Ce}=m,Oe=Ar(y);if(_n(m,!1),Z&&Ii(Z),!Oe&&($=X&&X.onVnodeBeforeMount)&&mt($,ce,y),_n(m,!0),Y&&me){const xe=()=>{m.subTree=xs(m),me(Y,m.subTree,m,O,null)};Oe&&Ce.__asyncHydrate?Ce.__asyncHydrate(Y,m,xe):xe()}else{Le.ce&&Le.ce._injectChildStyle(Ce);const xe=m.subTree=xs(m);M(null,xe,C,N,m,O,L),y.el=xe.el}if(fe&&tt(fe,O),!Oe&&($=X&&X.onVnodeMounted)){const xe=y;tt(()=>mt($,ce,xe),O)}(y.shapeFlag&256||ce&&Ar(ce.vnode)&&ce.vnode.shapeFlag&256)&&m.a&&tt(m.a,O),m.isMounted=!0,y=C=N=null}};m.scope.on();const U=m.effect=new zc(F);m.scope.off();const x=m.update=U.run.bind(U),Q=m.job=U.runIfDirty.bind(U);Q.i=m,Q.id=m.uid,U.scheduler=()=>Ko(Q),_n(m,!0),x()},te=(m,y,C)=>{y.component=m;const N=m.vnode.props;m.vnode=y,m.next=null,Xd(m,y.props,N,C),ep(m,y.children,C),un(),hl(m),hn()},se=(m,y,C,N,O,L,H,F,U=!1)=>{const x=m&&m.children,Q=m?m.shapeFlag:0,$=y.children,{patchFlag:Y,shapeFlag:X}=y;if(Y>0){if(Y&128){lt(x,$,C,N,O,L,H,F,U);return}else if(Y&256){et(x,$,C,N,O,L,H,F,U);return}}X&8?(Q&16&&Qe(x,O,L),$!==x&&g(C,$)):Q&16?X&16?lt(x,$,C,N,O,L,H,F,U):Qe(x,O,L,!0):(Q&8&&g(C,""),X&16&&p($,C,N,O,L,H,F,U))},et=(m,y,C,N,O,L,H,F,U)=>{m=m||Kn,y=y||Kn;const x=m.length,Q=y.length,$=Math.min(x,Q);let Y;for(Y=0;Y<$;Y++){const X=y[Y]=U?Zt(y[Y]):_t(y[Y]);M(m[Y],X,C,null,O,L,H,F,U)}x>Q?Qe(m,O,L,!0,!1,$):p(y,C,N,O,L,H,F,U,$)},lt=(m,y,C,N,O,L,H,F,U)=>{let x=0;const Q=y.length;let $=m.length-1,Y=Q-1;for(;x<=$&&x<=Y;){const X=m[x],Z=y[x]=U?Zt(y[x]):_t(y[x]);if(_r(X,Z))M(X,Z,C,null,O,L,H,F,U);else break;x++}for(;x<=$&&x<=Y;){const X=m[$],Z=y[Y]=U?Zt(y[Y]):_t(y[Y]);if(_r(X,Z))M(X,Z,C,null,O,L,H,F,U);else break;$--,Y--}if(x>$){if(x<=Y){const X=Y+1,Z=X<Q?y[X].el:N;for(;x<=Y;)M(null,y[x]=U?Zt(y[x]):_t(y[x]),C,Z,O,L,H,F,U),x++}}else if(x>Y)for(;x<=$;)Ie(m[x],O,L,!0),x++;else{const X=x,Z=x,fe=new Map;for(x=Z;x<=Y;x++){const Be=y[x]=U?Zt(y[x]):_t(y[x]);Be.key!=null&&fe.set(Be.key,x)}let ce,Le=0;const Ce=Y-Z+1;let Oe=!1,xe=0;const Wt=new Array(Ce);for(x=0;x<Ce;x++)Wt[x]=0;for(x=X;x<=$;x++){const Be=m[x];if(Le>=Ce){Ie(Be,O,L,!0);continue}let st;if(Be.key!=null)st=fe.get(Be.key);else for(ce=Z;ce<=Y;ce++)if(Wt[ce-Z]===0&&_r(Be,y[ce])){st=ce;break}st===void 0?Ie(Be,O,L,!0):(Wt[st-Z]=x+1,st>=xe?xe=st:Oe=!0,M(Be,y[st],C,null,O,L,H,F,U),Le++)}const kn=Oe?ip(Wt):Kn;for(ce=kn.length-1,x=Ce-1;x>=0;x--){const Be=Z+x,st=y[Be],Dn=Be+1<Q?y[Be+1].el:N;Wt[x]===0?M(null,st,C,Dn,O,L,H,F,U):Oe&&(ce<0||x!==kn[ce]?it(st,C,Dn,2):ce--)}}},it=(m,y,C,N,O=null)=>{const{el:L,type:H,transition:F,children:U,shapeFlag:x}=m;if(x&6){it(m.component.subTree,y,C,N);return}if(x&128){m.suspense.move(y,C,N);return}if(x&64){H.move(m,y,C,J);return}if(H===kt){r(L,y,C);for(let $=0;$<U.length;$++)it(U[$],y,C,N);r(m.anchor,y,C);return}if(H===Ms){K(m,y,C);return}if(N!==2&&x&1&&F)if(N===0)F.beforeEnter(L),r(L,y,C),tt(()=>F.enter(L),O);else{const{leave:$,delayLeave:Y,afterLeave:X}=F,Z=()=>r(L,y,C),fe=()=>{$(L,()=>{Z(),X&&X()})};Y?Y(L,Z,fe):fe()}else r(L,y,C)},Ie=(m,y,C,N=!1,O=!1)=>{const{type:L,props:H,ref:F,children:U,dynamicChildren:x,shapeFlag:Q,patchFlag:$,dirs:Y,cacheIndex:X}=m;if($===-2&&(O=!1),F!=null&&no(F,null,C,m,!0),X!=null&&(y.renderCache[X]=void 0),Q&256){y.ctx.deactivate(m);return}const Z=Q&1&&Y,fe=!Ar(m);let ce;if(fe&&(ce=H&&H.onVnodeBeforeUnmount)&&mt(ce,y,m),Q&6)gt(m.component,C,N);else{if(Q&128){m.suspense.unmount(C,N);return}Z&&vn(m,null,y,"beforeUnmount"),Q&64?m.type.remove(m,y,C,J,N):x&&!x.hasOnce&&(L!==kt||$>0&&$&64)?Qe(x,y,C,!1,!0):(L===kt&&$&384||!O&&Q&16)&&Qe(U,y,C),N&&be(m)}(fe&&(ce=H&&H.onVnodeUnmounted)||Z)&&tt(()=>{ce&&mt(ce,y,m),Z&&vn(m,null,y,"unmounted")},C)},be=m=>{const{type:y,el:C,anchor:N,transition:O}=m;if(y===kt){$t(C,N);return}if(y===Ms){B(m);return}const L=()=>{s(C),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(m.shapeFlag&1&&O&&!O.persisted){const{leave:H,delayLeave:F}=O,U=()=>H(C,L);F?F(m.el,L,U):U()}else L()},$t=(m,y)=>{let C;for(;m!==y;)C=b(m),s(m),m=C;s(y)},gt=(m,y,C)=>{const{bum:N,scope:O,job:L,subTree:H,um:F,m:U,a:x}=m;yl(U),yl(x),N&&Ii(N),O.stop(),L&&(L.flags|=8,Ie(H,m,y,C)),F&&tt(F,y),tt(()=>{m.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Qe=(m,y,C,N=!1,O=!1,L=0)=>{for(let H=L;H<m.length;H++)Ie(m[H],y,C,N,O)},k=m=>{if(m.shapeFlag&6)return k(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const y=b(m.anchor||m.el),C=y&&y[Td];return C?b(C):y};let z=!1;const V=(m,y,C)=>{m==null?y._vnode&&Ie(y._vnode,null,null,!0):M(y._vnode||null,m,y,null,null,null,C),y._vnode=m,z||(z=!0,hl(),hu(),z=!1)},J={p:M,um:Ie,m:it,r:be,mt:Pe,mc:p,pc:se,pbc:w,n:k,o:t};let oe,me;return{render:V,hydrate:oe,createApp:Gd(V,oe)}}function Ls({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _n({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function rp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ku(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let o=0;o<r.length;o++){const a=r[o];let c=s[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[o]=Zt(s[o]),c.el=a.el),!n&&c.patchFlag!==-2&&ku(a,c)),c.type===ns&&(c.el=a.el)}}function ip(t){const e=t.slice(),n=[0];let r,s,o,a,c;const h=t.length;for(r=0;r<h;r++){const d=t[r];if(d!==0){if(s=n[n.length-1],t[s]<d){e[r]=s,n.push(r);continue}for(o=0,a=n.length-1;o<a;)c=o+a>>1,t[n[c]]<d?o=c+1:a=c;d<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Du(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Du(e)}function yl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const sp=Symbol.for("v-scx"),op=()=>It(sp);function Rr(t,e,n){return Nu(t,e,n)}function Nu(t,e,n=ye){const{immediate:r,deep:s,flush:o,once:a}=n,c=Ne({},n);let h;if(ss)if(o==="sync"){const b=op();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!e||r)c.once=!0;else return{stop:Et,resume:Et,pause:Et};const d=De;c.call=(b,R,D)=>St(b,d,R,D);let g=!1;o==="post"?c.scheduler=b=>{tt(b,d&&d.suspense)}:o!=="sync"&&(g=!0,c.scheduler=(b,R)=>{R?b():Ko(b)}),c.augmentJob=b=>{e&&(b.flags|=4),g&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const _=Ed(t,e,c);return h&&h.push(_),_}function ap(t,e,n){const r=this.proxy,s=Re(t)?t.includes(".")?Lu(r,t):()=>r[t]:t.bind(r,r);let o;ie(e)?o=e:(o=e.handler,n=e);const a=Gr(this),c=Nu(s,o.bind(r),n);return a(),c}function Lu(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const lp=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ft(e)}Modifiers`]||t[`${Pn(e)}Modifiers`];function cp(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ye;let s=n;const o=e.startsWith("update:"),a=o&&lp(r,e.slice(7));a&&(a.trim&&(s=n.map(g=>Re(g)?g.trim():g)),a.number&&(s=n.map(Qs)));let c,h=r[c=Ps(e)]||r[c=Ps(ft(e))];!h&&o&&(h=r[c=Ps(Pn(e))]),h&&St(h,t,6,s);const d=r[c+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,St(d,t,6,s)}}function xu(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const o=t.emits;let a={},c=!1;if(!ie(t)){const h=d=>{const g=xu(d,e,!0);g&&(c=!0,Ne(a,g))};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!o&&!c?(Ae(t)&&r.set(t,null),null):(re(o)?o.forEach(h=>a[h]=null):Ne(a,o),Ae(t)&&r.set(t,a),a)}function ts(t,e){return!t||!qi(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,Pn(e))||de(t,e))}function xs(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:a,attrs:c,emit:h,render:d,renderCache:g,props:_,data:b,setupState:R,ctx:D,inheritAttrs:M}=t,G=Li(t);let q,W;try{if(n.shapeFlag&4){const B=s||r,ne=B;q=_t(d.call(ne,B,g,_,R,b,D)),W=c}else{const B=e;q=_t(B.length>1?B(_,{attrs:c,slots:a,emit:h}):B(_,null)),W=e.props?c:up(c)}}catch(B){Pr.length=0,Zi(B,t,1),q=Je(Fr)}let K=q;if(W&&M!==!1){const B=Object.keys(W),{shapeFlag:ne}=K;B.length&&ne&7&&(o&&B.some(Co)&&(W=hp(W,o)),K=Yn(K,W,!1,!0))}return n.dirs&&(K=Yn(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&zo(K,n.transition),q=K,Li(G),q}const up=t=>{let e;for(const n in t)(n==="class"||n==="style"||qi(n))&&((e||(e={}))[n]=t[n]);return e},hp=(t,e)=>{const n={};for(const r in t)(!Co(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function fp(t,e,n){const{props:r,children:s,component:o}=t,{props:a,children:c,patchFlag:h}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return r?El(r,a,d):!!a;if(h&8){const g=e.dynamicProps;for(let _=0;_<g.length;_++){const b=g[_];if(a[b]!==r[b]&&!ts(d,b))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?El(r,a,d):!0:!!a;return!1}function El(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(e[o]!==t[o]&&!ts(n,o))return!0}return!1}function dp({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Mu=t=>t.__isSuspense;function pp(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):bd(t)}const kt=Symbol.for("v-fgt"),ns=Symbol.for("v-txt"),Fr=Symbol.for("v-cmt"),Ms=Symbol.for("v-stc"),Pr=[];let nt=null;function rs(t=!1){Pr.push(nt=t?null:[])}function gp(){Pr.pop(),nt=Pr[Pr.length-1]||null}let jr=1;function wl(t){jr+=t,t<0&&nt&&(nt.hasOnce=!0)}function mp(t){return t.dynamicChildren=jr>0?nt||Kn:null,gp(),jr>0&&nt&&nt.push(t),t}function is(t,e,n,r,s,o){return mp(qe(t,e,n,r,s,o,!0))}function ao(t){return t?t.__v_isVNode===!0:!1}function _r(t,e){return t.type===e.type&&t.key===e.key}const Uu=({key:t})=>t??null,Si=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||Se(t)||ie(t)?{i:Ze,r:t,k:e,f:!!n}:t:null);function qe(t,e=null,n=null,r=0,s=null,o=t===kt?0:1,a=!1,c=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Uu(e),ref:e&&Si(e),scopeId:du,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ze};return c?(Jo(h,n),o&128&&t.normalize(h)):n&&(h.shapeFlag|=Re(n)?8:16),jr>0&&!a&&nt&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&nt.push(h),h}const Je=vp;function vp(t,e=null,n=null,r=0,s=null,o=!1){if((!t||t===Fd)&&(t=Fr),ao(t)){const c=Yn(t,e,!0);return n&&Jo(c,n),jr>0&&!o&&nt&&(c.shapeFlag&6?nt[nt.indexOf(t)]=c:nt.push(c)),c.patchFlag=-2,c}if(Rp(t)&&(t=t.__vccOpts),e){e=_p(e);let{class:c,style:h}=e;c&&!Re(c)&&(e.class=ko(c)),Ae(h)&&(Ho(h)&&!re(h)&&(h=Ne({},h)),e.style=Oo(h))}const a=Re(t)?1:Mu(t)?128:Sd(t)?64:Ae(t)?4:ie(t)?2:0;return qe(t,e,n,r,s,a,o,!0)}function _p(t){return t?Ho(t)||Tu(t)?Ne({},t):t:null}function Yn(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:h}=t,d=e?yp(s||{},e):s,g={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Uu(d),ref:e&&e.ref?n&&o?re(o)?o.concat(Si(e)):[o,Si(e)]:Si(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yn(t.ssContent),ssFallback:t.ssFallback&&Yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&r&&zo(g,h.clone(g)),g}function Vn(t=" ",e=0){return Je(ns,null,t,e)}function _t(t){return t==null||typeof t=="boolean"?Je(Fr):re(t)?Je(kt,null,t.slice()):typeof t=="object"?Zt(t):Je(ns,null,String(t))}function Zt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yn(t)}function Jo(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Jo(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Tu(e)?e._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),r&64?(n=16,e=[Vn(e)]):n=8);t.children=e,t.shapeFlag|=n}function yp(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ko([e.class,r.class]));else if(s==="style")e.style=Oo([e.style,r.style]);else if(qi(s)){const o=e[s],a=r[s];a&&o!==a&&!(re(o)&&o.includes(a))&&(e[s]=o?[].concat(o,a):a)}else s!==""&&(e[s]=r[s])}return e}function mt(t,e,n,r=null){St(t,e,7,[n,r])}const Ep=wu();let wp=0;function Ip(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ep,o={uid:wp++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $c(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Au(r,s),emitsOptions:xu(r,s),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:r.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=cp.bind(null,o),t.ce&&t.ce(o),o}let De=null,Ui,lo;{const t=Vc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};Ui=e("__VUE_INSTANCE_SETTERS__",n=>De=n),lo=e("__VUE_SSR_SETTERS__",n=>ss=n)}const Gr=t=>{const e=De;return Ui(t),t.scope.on(),()=>{t.scope.off(),Ui(e)}},Il=()=>{De&&De.scope.off(),Ui(null)};function Fu(t){return t.vnode.shapeFlag&4}let ss=!1;function bp(t,e=!1,n=!1){e&&lo(e);const{props:r,children:s}=t.vnode,o=Fu(t);Jd(t,r,o,e),Zd(t,s,n);const a=o?Tp(t,e):void 0;return e&&lo(!1),a}function Tp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Hd);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Ap(t):null,o=Gr(t);un();const a=zr(r,t,0,[t.props,s]);if(hn(),o(),jc(a)){if(Ar(t)||gu(t),a.then(Il,Il),e)return a.then(c=>{bl(t,c,e)}).catch(c=>{Zi(c,t,0)});t.asyncDep=a}else bl(t,a,e)}else ju(t,e)}function bl(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=lu(e)),ju(t,n)}let Tl;function ju(t,e,n){const r=t.type;if(!t.render){if(!e&&Tl&&!r.render){const s=r.template||Go(t).template;if(s){const{isCustomElement:o,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:h}=r,d=Ne(Ne({isCustomElement:o,delimiters:c},a),h);r.render=Tl(s,d)}}t.render=r.render||Et}{const s=Gr(t);un();try{Vd(t)}finally{hn(),s()}}}const Sp={get(t,e){return Ve(t,"get",""),t[e]}};function Ap(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Sp),slots:t.slots,emit:t.emit,expose:e}}function os(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(lu(Vo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cr)return Cr[n](t)},has(e,n){return n in e||n in Cr}})):t.proxy}function Cp(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function Rp(t){return ie(t)&&"__vccOpts"in t}const at=(t,e)=>_d(t,e,ss);function Hu(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!re(e)?ao(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ao(n)&&(n=[n]),Je(t,e,n))}const Pp="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let co;const Sl=typeof window<"u"&&window.trustedTypes;if(Sl)try{co=Sl.createPolicy("vue",{createHTML:t=>t})}catch{}const Vu=co?t=>co.createHTML(t):t=>t,Op="http://www.w3.org/2000/svg",kp="http://www.w3.org/1998/Math/MathML",Ot=typeof document<"u"?document:null,Al=Ot&&Ot.createElement("template"),Dp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ot.createElementNS(Op,t):e==="mathml"?Ot.createElementNS(kp,t):n?Ot.createElement(t,{is:n}):Ot.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ot.createTextNode(t),createComment:t=>Ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,o){const a=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{Al.innerHTML=Vu(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Al.content;if(r==="svg"||r==="mathml"){const h=c.firstChild;for(;h.firstChild;)c.appendChild(h.firstChild);c.removeChild(h)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Np=Symbol("_vtc");function Lp(t,e,n){const r=t[Np];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Cl=Symbol("_vod"),xp=Symbol("_vsh"),Mp=Symbol(""),Up=/(^|;)\s*display\s*:/;function Fp(t,e,n){const r=t.style,s=Re(n);let o=!1;if(n&&!s){if(e)if(Re(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Ai(r,c,"")}else for(const a in e)n[a]==null&&Ai(r,a,"");for(const a in n)a==="display"&&(o=!0),Ai(r,a,n[a])}else if(s){if(e!==n){const a=r[Mp];a&&(n+=";"+a),r.cssText=n,o=Up.test(n)}}else e&&t.removeAttribute("style");Cl in t&&(t[Cl]=o?r.display:"",t[xp]&&(r.display="none"))}const Rl=/\s*!important$/;function Ai(t,e,n){if(re(n))n.forEach(r=>Ai(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=jp(t,e);Rl.test(n)?t.setProperty(Pn(r),n.replace(Rl,""),"important"):t[r]=n}}const Pl=["Webkit","Moz","ms"],Us={};function jp(t,e){const n=Us[e];if(n)return n;let r=ft(e);if(r!=="filter"&&r in t)return Us[e]=r;r=Yi(r);for(let s=0;s<Pl.length;s++){const o=Pl[s]+r;if(o in t)return Us[e]=o}return e}const Ol="http://www.w3.org/1999/xlink";function kl(t,e,n,r,s,o=Bf(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ol,e.slice(6,e.length)):t.setAttributeNS(Ol,e,n):n==null||o&&!Bc(n)?t.removeAttribute(e):t.setAttribute(e,o?"":nr(n)?String(n):n)}function Hp(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Vu(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Bc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(e)}function Bn(t,e,n,r){t.addEventListener(e,n,r)}function Vp(t,e,n,r){t.removeEventListener(e,n,r)}const Dl=Symbol("_vei");function Bp(t,e,n,r,s=null){const o=t[Dl]||(t[Dl]={}),a=o[e];if(r&&a)a.value=r;else{const[c,h]=$p(e);if(r){const d=o[e]=zp(r,s);Bn(t,c,d,h)}else a&&(Vp(t,c,a,h),o[e]=void 0)}}const Nl=/(?:Once|Passive|Capture)$/;function $p(t){let e;if(Nl.test(t)){e={};let r;for(;r=t.match(Nl);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pn(t.slice(2)),e]}let Fs=0;const Wp=Promise.resolve(),Kp=()=>Fs||(Wp.then(()=>Fs=0),Fs=Date.now());function zp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;St(Gp(r,n.value),e,5,[r])};return n.value=t,n.attached=Kp(),n}function Gp(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ll=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,qp=(t,e,n,r,s,o)=>{const a=s==="svg";e==="class"?Lp(t,r,a):e==="style"?Fp(t,n,r):qi(e)?Co(e)||Bp(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jp(t,e,r,a))?(Hp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&kl(t,e,r,a,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),kl(t,e,r,a))};function Jp(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ll(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ll(e)&&Re(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!Re(n)))}const xl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>Ii(e,n):e};function Xp(t){t.target.composing=!0}function Ml(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const js=Symbol("_assign"),Fi={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[js]=xl(s);const o=r||s.props&&s.props.type==="number";Bn(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),o&&(c=Qs(c)),t[js](c)}),n&&Bn(t,"change",()=>{t.value=t.value.trim()}),e||(Bn(t,"compositionstart",Xp),Bn(t,"compositionend",Ml),Bn(t,"change",Ml))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[js]=xl(a),t.composing)return;const c=(o||t.type==="number")&&!/^0\d/.test(t.value)?Qs(t.value):t.value,h=e??"";c!==h&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===h)||(t.value=h))}},Yp=["ctrl","shift","alt","meta"],Qp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Yp.some(n=>t[`${n}Key`]&&!e.includes(n))},Bu=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...o)=>{for(let a=0;a<e.length;a++){const c=Qp[e[a]];if(c&&c(s,e))return}return t(s,...o)})},Zp=Ne({patchProp:qp},Dp);let Ul;function eg(){return Ul||(Ul=tp(Zp))}const tg=(...t)=>{const e=eg().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=rg(r);if(!s)return;const o=e._component;!ie(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,ng(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function ng(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rg(t){return Re(t)?document.querySelector(t):t}var ig=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let $u;const as=t=>$u=t,Wu=Symbol();function uo(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Or;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Or||(Or={}));function sg(){const t=Wc(!0),e=t.run(()=>Sn({}));let n=[],r=[];const s=Vo({install(o){as(s),s._a=o,o.provide(Wu,s),o.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(o){return!this._a&&!ig?r.push(o):n.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ku=()=>{};function Fl(t,e,n,r=Ku){t.push(e);const s=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),r())};return!n&&Kc()&&$f(s),s}function jn(t,...e){t.slice().forEach(n=>{n(...e)})}const og=t=>t(),jl=Symbol(),Hs=Symbol();function ho(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];uo(s)&&uo(r)&&t.hasOwnProperty(n)&&!Se(r)&&!In(r)?t[n]=ho(s,r):t[n]=r}return t}const ag=Symbol();function lg(t){return!uo(t)||!t.hasOwnProperty(ag)}const{assign:Yt}=Object;function cg(t){return!!(Se(t)&&t.effect)}function ug(t,e,n,r){const{state:s,actions:o,getters:a}=e,c=n.state.value[t];let h;function d(){c||(n.state.value[t]=s?s():{});const g=pd(n.state.value[t]);return Yt(g,o,Object.keys(a||{}).reduce((_,b)=>(_[b]=Vo(at(()=>{as(n);const R=n._s.get(t);return a[b].call(R,R)})),_),{}))}return h=zu(t,d,e,n,r,!0),h}function zu(t,e,n={},r,s,o){let a;const c=Yt({actions:{}},n),h={deep:!0};let d,g,_=[],b=[],R;const D=r.state.value[t];!o&&!D&&(r.state.value[t]={}),Sn({});let M;function G(p){let v;d=g=!1,typeof p=="function"?(p(r.state.value[t]),v={type:Or.patchFunction,storeId:t,events:R}):(ho(r.state.value[t],p),v={type:Or.patchObject,payload:p,storeId:t,events:R});const w=M=Symbol();Wo().then(()=>{M===w&&(d=!0)}),g=!0,jn(_,v,r.state.value[t])}const q=o?function(){const{state:v}=n,w=v?v():{};this.$patch(T=>{Yt(T,w)})}:Ku;function W(){a.stop(),_=[],b=[],r._s.delete(t)}const K=(p,v="")=>{if(jl in p)return p[Hs]=v,p;const w=function(){as(r);const T=Array.from(arguments),S=[],E=[];function Pe(te){S.push(te)}function Ye(te){E.push(te)}jn(b,{args:T,name:w[Hs],store:ne,after:Pe,onError:Ye});let Ee;try{Ee=p.apply(this&&this.$id===t?this:ne,T)}catch(te){throw jn(E,te),te}return Ee instanceof Promise?Ee.then(te=>(jn(S,te),te)).catch(te=>(jn(E,te),Promise.reject(te))):(jn(S,Ee),Ee)};return w[jl]=!0,w[Hs]=v,w},B={_p:r,$id:t,$onAction:Fl.bind(null,b),$patch:G,$reset:q,$subscribe(p,v={}){const w=Fl(_,p,v.detached,()=>T()),T=a.run(()=>Rr(()=>r.state.value[t],S=>{(v.flush==="sync"?g:d)&&p({storeId:t,type:Or.direct,events:R},S)},Yt({},h,v)));return w},$dispose:W},ne=Kr(B);r._s.set(t,ne);const I=(r._a&&r._a.runWithContext||og)(()=>r._e.run(()=>(a=Wc()).run(()=>e({action:K}))));for(const p in I){const v=I[p];if(Se(v)&&!cg(v)||In(v))o||(D&&lg(v)&&(Se(v)?v.value=D[p]:ho(v,D[p])),r.state.value[t][p]=v);else if(typeof v=="function"){const w=K(v,p);I[p]=w,c.actions[p]=v}}return Yt(ne,I),Yt(he(ne),I),Object.defineProperty(ne,"$state",{get:()=>r.state.value[t],set:p=>{G(v=>{Yt(v,p)})}}),r._p.forEach(p=>{Yt(ne,a.run(()=>p({store:ne,app:r._a,pinia:r,options:c})))}),D&&o&&n.hydrate&&n.hydrate(ne.$state,D),d=!0,g=!0,ne}function hg(t,e,n){let r,s;const o=typeof e=="function";r=t,s=o?n:e;function a(c,h){const d=qd();return c=c||(d?It(Wu,null):null),c&&as(c),c=$u,c._s.has(r)||(o?zu(r,e,s,c):ug(r,s,c)),c._s.get(r)}return a.$id=r,a}var Hl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],c=t[n++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,c=a?t[s+1]:0,h=s+2<t.length,d=h?t[s+2]:0,g=o>>2,_=(o&3)<<4|c>>4;let b=(c&15)<<2|d>>6,R=d&63;h||(R=64,a||(b=64)),r.push(n[g],n[_],n[b],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const _=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||c==null||d==null||_==null)throw new dg;const b=o<<2|c>>4;if(r.push(b),d!==64){const R=c<<4&240|d>>2;if(r.push(R),_!==64){const D=d<<6&192|_;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pg=function(t){const e=Gu(t);return qu.encodeByteArray(e,!0)},ji=function(t){return pg(t).replace(/\./g,"")},Ju=function(t){try{return qu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=()=>gg().__FIREBASE_DEFAULTS__,vg=()=>{if(typeof process>"u"||typeof Hl>"u")return;const t=Hl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_g=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ju(t[1]);return e&&JSON.parse(e)},Xo=()=>{try{return mg()||vg()||_g()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xu=t=>{var e,n;return(n=(e=Xo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yg=t=>{const e=Xu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yu=()=>{var t;return(t=Xo())===null||t===void 0?void 0:t.config},Qu=t=>{var e;return(e=Xo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ji(JSON.stringify(n)),ji(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ig(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function bg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sg(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ag(){try{return typeof indexedDB=="object"}catch{return!1}}function Cg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="FirebaseError";class Vt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rg,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qr.prototype.create)}}class qr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Pg(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Vt(s,c,r)}}function Pg(t,e){return t.replace(Og,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Og=/\{\$([^}]+)}/g;function kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],a=e[s];if(Vl(o)&&Vl(a)){if(!Hi(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function Ir(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dg(t,e){const n=new Ng(t,e);return n.subscribe.bind(n)}class Ng{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vs),s.error===void 0&&(s.error=Vs),s.complete===void 0&&(s.complete=Vs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Eg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ug(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=En){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=En){return this.instances.has(e)}getOptions(e=En){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=En){return this.component?this.component.multipleInstances?e:En:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mg(t){return t===En?void 0:t}function Ug(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const jg={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Hg=pe.INFO,Vg={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},Bg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Vg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yo{constructor(e){this.name=e,this._logLevel=Hg,this._logHandler=Bg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const $g=(t,e)=>e.some(n=>t instanceof n);let Bl,$l;function Wg(){return Bl||(Bl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kg(){return $l||($l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zu=new WeakMap,fo=new WeakMap,eh=new WeakMap,Bs=new WeakMap,Qo=new WeakMap;function zg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(on(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Zu.set(n,t)}).catch(()=>{}),Qo.set(e,t),e}function Gg(t){if(fo.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});fo.set(t,e)}let po={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||eh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qg(t){po=t(po)}function Jg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($s(this),e,...n);return eh.set(r,e.sort?e.sort():[e]),on(r)}:Kg().includes(t)?function(...e){return t.apply($s(this),e),on(Zu.get(this))}:function(...e){return on(t.apply($s(this),e))}}function Xg(t){return typeof t=="function"?Jg(t):(t instanceof IDBTransaction&&Gg(t),$g(t,Wg())?new Proxy(t,po):t)}function on(t){if(t instanceof IDBRequest)return zg(t);if(Bs.has(t))return Bs.get(t);const e=Xg(t);return e!==t&&(Bs.set(t,e),Qo.set(e,t)),e}const $s=t=>Qo.get(t);function Yg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),c=on(a);return r&&a.addEventListener("upgradeneeded",h=>{r(on(a.result),h.oldVersion,h.newVersion,on(a.transaction),h)}),n&&a.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Qg=["get","getKey","getAll","getAllKeys","count"],Zg=["put","add","delete","clear"],Ws=new Map;function Wl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ws.get(e))return Ws.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Zg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Qg.includes(n)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),s&&h.done]))[0]};return Ws.set(e,o),o}qg(t=>({...t,get:(e,n,r)=>Wl(e,n)||t.get(e,n,r),has:(e,n)=>!!Wl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const go="@firebase/app",Kl="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Yo("@firebase/app"),nm="@firebase/app-compat",rm="@firebase/analytics-compat",im="@firebase/analytics",sm="@firebase/app-check-compat",om="@firebase/app-check",am="@firebase/auth",lm="@firebase/auth-compat",cm="@firebase/database",um="@firebase/database-compat",hm="@firebase/functions",fm="@firebase/functions-compat",dm="@firebase/installations",pm="@firebase/installations-compat",gm="@firebase/messaging",mm="@firebase/messaging-compat",vm="@firebase/performance",_m="@firebase/performance-compat",ym="@firebase/remote-config",Em="@firebase/remote-config-compat",wm="@firebase/storage",Im="@firebase/storage-compat",bm="@firebase/firestore",Tm="@firebase/vertexai-preview",Sm="@firebase/firestore-compat",Am="firebase",Cm="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="[DEFAULT]",Rm={[go]:"fire-core",[nm]:"fire-core-compat",[im]:"fire-analytics",[rm]:"fire-analytics-compat",[om]:"fire-app-check",[sm]:"fire-app-check-compat",[am]:"fire-auth",[lm]:"fire-auth-compat",[cm]:"fire-rtdb",[um]:"fire-rtdb-compat",[hm]:"fire-fn",[fm]:"fire-fn-compat",[dm]:"fire-iid",[pm]:"fire-iid-compat",[gm]:"fire-fcm",[mm]:"fire-fcm-compat",[vm]:"fire-perf",[_m]:"fire-perf-compat",[ym]:"fire-rc",[Em]:"fire-rc-compat",[wm]:"fire-gcs",[Im]:"fire-gcs-compat",[bm]:"fire-fst",[Sm]:"fire-fst-compat",[Tm]:"fire-vertex","fire-js":"fire-js",[Am]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Map,Pm=new Map,vo=new Map;function zl(t,e){try{t.container.addComponent(e)}catch(n){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qn(t){const e=t.name;if(vo.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;vo.set(e,t);for(const n of Vi.values())zl(n,t);for(const n of Pm.values())zl(n,t);return!0}function Zo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new qr("app","Firebase",Om);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=Cm;function th(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw an.create("bad-app-name",{appName:String(s)});if(n||(n=Yu()),!n)throw an.create("no-options");const o=Vi.get(s);if(o){if(Hi(n,o.options)&&Hi(r,o.config))return o;throw an.create("duplicate-app",{appName:s})}const a=new Fg(s);for(const h of vo.values())a.addComponent(h);const c=new km(n,r,a);return Vi.set(s,c),c}function nh(t=mo){const e=Vi.get(t);if(!e&&t===mo&&Yu())return th();if(!e)throw an.create("no-app",{appName:t});return e}function ln(t,e,n){var r;let s=(r=Rm[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(c.join(" "));return}Qn(new An(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="firebase-heartbeat-database",Nm=1,Hr="firebase-heartbeat-store";let Ks=null;function rh(){return Ks||(Ks=Yg(Dm,Nm,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hr)}catch(n){console.warn(n)}}}}).catch(t=>{throw an.create("idb-open",{originalErrorMessage:t.message})})),Ks}async function Lm(t){try{const n=(await rh()).transaction(Hr),r=await n.objectStore(Hr).get(ih(t));return await n.done,r}catch(e){if(e instanceof Vt)Ft.warn(e.message);else{const n=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(n.message)}}}async function Gl(t,e){try{const r=(await rh()).transaction(Hr,"readwrite");await r.objectStore(Hr).put(e,ih(t)),await r.done}catch(n){if(n instanceof Vt)Ft.warn(n.message);else{const r=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ft.warn(r.message)}}}function ih(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=1024,Mm=30*24*60*60*1e3;class Um{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ql();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Mm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ft.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ql(),{heartbeatsToSend:r,unsentEntries:s}=Fm(this._heartbeatsCache.heartbeats),o=ji(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Ft.warn(n),""}}}function ql(){return new Date().toISOString().substring(0,10)}function Fm(t,e=xm){const n=[];let r=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Jl(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jl(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ag()?Cg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Lm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jl(t){return ji(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t){Qn(new An("platform-logger",e=>new em(e),"PRIVATE")),Qn(new An("heartbeat",e=>new Um(e),"PRIVATE")),ln(go,Kl,t),ln(go,Kl,"esm2017"),ln("fire-js","")}Hm("");function ea(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function sh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vm=sh,oh=new qr("auth","Firebase",sh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new Yo("@firebase/auth");function Bm(t,...e){Bi.logLevel<=pe.WARN&&Bi.warn(`Auth (${rr}): ${t}`,...e)}function Ci(t,...e){Bi.logLevel<=pe.ERROR&&Bi.error(`Auth (${rr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,...e){throw ta(t,...e)}function bt(t,...e){return ta(t,...e)}function ah(t,e,n){const r=Object.assign(Object.assign({},Vm()),{[e]:n});return new qr("auth","Firebase",r).create(e,{appName:t.name})}function Ut(t){return ah(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ta(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return oh.create(t,...e)}function ee(t,e,...n){if(!t)throw ta(e,...n)}function Nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ci(e),new Error(e)}function jt(t,e){t||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $m(){return Xl()==="http:"||Xl()==="https:"}function Xl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($m()||bg()||"connection"in navigator)?navigator.onLine:!0}function Km(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ig()||Tg()}get(){return Wm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new Xr(3e4,6e4);function fn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dn(t,e,n,r,s={}){return ch(t,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=Jr(Object.assign({key:t.config.apiKey},a)).slice(1),h=await t._getAdditionalHeaders();return h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode),lh.fetch()(uh(t,t.config.apiHost,n,c),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},o))})}async function ch(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zm),e);try{const s=new Jm(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw yi(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[h,d]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw yi(t,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw yi(t,"email-already-in-use",a);if(h==="USER_DISABLED")throw yi(t,"user-disabled",a);const g=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ah(t,g,d);dt(t,g)}}catch(s){if(s instanceof Vt)throw s;dt(t,"network-request-failed",{message:String(s)})}}async function Yr(t,e,n,r,s={}){const o=await dn(t,e,n,r,s);return"mfaPendingCredential"in o&&dt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function uh(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?na(t.config,s):`${t.config.apiScheme}://${s}`}function qm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bt(this.auth,"network-request-failed")),Gm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=bt(t,e,r);return s.customData._tokenResponse=n,s}function Yl(t){return t!==void 0&&t.enterprise!==void 0}class Xm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ym(t,e){return dn(t,"GET","/v2/recaptchaConfig",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm(t,e){return dn(t,"POST","/v1/accounts:delete",e)}async function hh(t,e){return dn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zm(t,e=!1){const n=Bt(t),r=await n.getIdToken(e),s=ra(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:kr(zs(s.auth_time)),issuedAtTime:kr(zs(s.iat)),expirationTime:kr(zs(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function zs(t){return Number(t)*1e3}function ra(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ci("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ju(n);return s?JSON.parse(s):(Ci("Failed to decode base64 JWT payload"),null)}catch(s){return Ci("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ql(t){const e=ra(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vt&&ev(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ev({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kr(this.lastLoginAt),this.creationTime=kr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Vr(t,hh(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?fh(o.providerUserInfo):[],c=rv(t.providerData,a),h=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(c!=null&&c.length),g=h?d:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new yo(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(t,_)}async function nv(t){const e=Bt(t);await $i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rv(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function fh(t){return t.map(e=>{var{providerId:n}=e,r=ea(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iv(t,e){const n=await ch(t,{},async()=>{const r=Jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=uh(t,s,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",lh.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sv(t,e){return dn(t,"POST","/v2/accounts:revokeToken",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ql(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Ql(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:o}=await iv(e,n);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:o}=n,a=new Gn;return r&&(ee(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(ee(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gn,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,o=ea(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new yo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zm(this,e)}reload(){return nv(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $i(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(Ut(this.auth));const e=await this.getIdToken();return await Vr(this,Qm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,o,a,c,h,d,g;const _=(r=n.displayName)!==null&&r!==void 0?r:void 0,b=(s=n.email)!==null&&s!==void 0?s:void 0,R=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,D=(a=n.photoURL)!==null&&a!==void 0?a:void 0,M=(c=n.tenantId)!==null&&c!==void 0?c:void 0,G=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,q=(d=n.createdAt)!==null&&d!==void 0?d:void 0,W=(g=n.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:K,emailVerified:B,isAnonymous:ne,providerData:le,stsTokenManager:I}=n;ee(K&&I,e,"internal-error");const p=Gn.fromJSON(this.name,I);ee(typeof K=="string",e,"internal-error"),Jt(_,e.name),Jt(b,e.name),ee(typeof B=="boolean",e,"internal-error"),ee(typeof ne=="boolean",e,"internal-error"),Jt(R,e.name),Jt(D,e.name),Jt(M,e.name),Jt(G,e.name),Jt(q,e.name),Jt(W,e.name);const v=new Lt({uid:K,auth:e,email:b,emailVerified:B,displayName:_,isAnonymous:ne,photoURL:D,phoneNumber:R,tenantId:M,stsTokenManager:p,createdAt:q,lastLoginAt:W});return le&&Array.isArray(le)&&(v.providerData=le.map(w=>Object.assign({},w))),G&&(v._redirectEventId=G),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Gn;s.updateFromServerResponse(n);const o=new Lt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $i(o),o}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?fh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new Gn;c.updateFromIdToken(r);const h=new Lt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new yo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new Map;function xt(t){jt(t instanceof Function,"Expected a class definition");let e=Zl.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dh.type="NONE";const ec=dh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t,e,n){return`firebase:${t}:${e}:${n}`}class qn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Ri(this.userKey,s.apiKey,o),this.fullPersistenceKey=Ri("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qn(xt(ec),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||xt(ec);const a=Ri(r,e.config.apiKey,e.name);let c=null;for(const d of n)try{const g=await d._get(a);if(g){const _=Lt._fromJSON(e,g);d!==o&&(c=_),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new qn(o,e,r):(o=h[0],c&&await o._set(a,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new qn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ph(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yh(e))return"Blackberry";if(Eh(e))return"Webos";if(gh(e))return"Safari";if((e.includes("chrome/")||mh(e))&&!e.includes("edge/"))return"Chrome";if(_h(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ph(t=Xe()){return/firefox\//i.test(t)}function gh(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mh(t=Xe()){return/crios\//i.test(t)}function vh(t=Xe()){return/iemobile/i.test(t)}function _h(t=Xe()){return/android/i.test(t)}function yh(t=Xe()){return/blackberry/i.test(t)}function Eh(t=Xe()){return/webos/i.test(t)}function ia(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ov(t=Xe()){var e;return ia(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function av(){return Sg()&&document.documentMode===10}function wh(t=Xe()){return ia(t)||_h(t)||Eh(t)||yh(t)||/windows phone/i.test(t)||vh(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(t,e=[]){let n;switch(t){case"Browser":n=tc(Xe());break;case"Worker":n=`${tc(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,c)=>{try{const h=e(o);a(h)}catch(h){c(h)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(t,e={}){return dn(t,"GET","/v2/passwordPolicy",fn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=6;class hv{constructor(e){var n,r,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:uv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,o,a,c;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(c=h.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),h}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nc(this),this.idTokenSubscription=new nc(this),this.beforeStateQueue=new lv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hh(this,{idToken:e}),r=await Lt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===c)&&(h!=null&&h.user)&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $i(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Km()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(Ut(this));const n=e?Bt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(Ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(Ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cv(this),n=new hv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xt(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await qn.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,r,s);return()=>{a=!0,h()}}else{const h=e.addObserver(n);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ih(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Bm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function On(t){return Bt(t)}class nc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dg(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dv(t){ls=t}function bh(t){return ls.loadJS(t)}function pv(){return ls.recaptchaEnterpriseScript}function gv(){return ls.gapiScript}function mv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vv="recaptcha-enterprise",_v="NO_RECAPTCHA";class yv{constructor(e){this.type=vv,this.auth=On(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,c)=>{Ym(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Xm(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{c(h)})})}function s(o,a,c){const h=window.grecaptcha;Yl(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(_v)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(c=>{if(!n&&Yl(window.grecaptcha))s(c,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=pv();h.length!==0&&(h+=c),bh(h).then(()=>{s(c,o,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function rc(t,e,n,r=!1){const s=new yv(t);let o;try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Eo(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await rc(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await rc(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t,e){const n=Zo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(Hi(o,e??{}))return s;dt(s,"already-initialized")}return n.initialize({options:e})}function wv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Iv(t,e,n){const r=On(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=Th(e),{host:a,port:c}=bv(e),h=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),Tv()}function Th(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bv(t){const e=Th(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:ic(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:ic(a)}}}function ic(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Tv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,n){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}async function Sv(t,e){return dn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Av(t,e){return Yr(t,"POST","/v1/accounts:signInWithPassword",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cv(t,e){return Yr(t,"POST","/v1/accounts:signInWithEmailLink",fn(t,e))}async function Rv(t,e){return Yr(t,"POST","/v1/accounts:signInWithEmailLink",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends sa{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Br(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Br(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eo(e,n,"signInWithPassword",Av);case"emailLink":return Cv(e,{email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eo(e,r,"signUpPassword",Sv);case"emailLink":return Rv(e,{idToken:n,email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(t,e){return Yr(t,"POST","/v1/accounts:signInWithIdp",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="http://localhost";class Cn extends sa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,o=ea(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Cn(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Jn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jn(e,n)}buildRequest(){const e={requestUri:Pv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kv(t){const e=wr(Ir(t)).link,n=e?wr(Ir(e)).deep_link_id:null,r=wr(Ir(t)).deep_link_id;return(r?wr(Ir(r)).link:null)||r||n||e||t}class oa{constructor(e){var n,r,s,o,a,c;const h=wr(Ir(e)),d=(n=h.apiKey)!==null&&n!==void 0?n:null,g=(r=h.oobCode)!==null&&r!==void 0?r:null,_=Ov((s=h.mode)!==null&&s!==void 0?s:null);ee(d&&g&&_,"argument-error"),this.apiKey=d,this.operation=_,this.code=g,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=h.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=kv(e);try{return new oa(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.providerId=ir.PROVIDER_ID}static credential(e,n){return Br._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=oa.parseLink(n);return ee(r,"argument-error"),Br._fromEmailAndCode(e,r.code,r.tenantId)}}ir.PROVIDER_ID="password";ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Sh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Qr{constructor(){super("facebook.com")}static credential(e){return Cn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Qr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Qr{constructor(){super("github.com")}static credential(e){return Cn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Qr{constructor(){super("twitter.com")}static credential(e,n){return Cn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(t,e){return Yr(t,"POST","/v1/accounts:signUp",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const o=await Lt._fromIdTokenResponse(e,r,s),a=sc(r);return new Rn({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=sc(r);return new Rn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function sc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Vt{constructor(e,n,r,s){var o;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wi.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Wi(e,n,r,s)}}function Ah(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Wi._fromErrorAndOperation(t,o,e,r):o})}async function Nv(t,e,n=!1){const r=await Vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(t,e,n=!1){const{auth:r}=t;if(yt(r.app))return Promise.reject(Ut(r));const s="reauthenticate";try{const o=await Vr(t,Ah(r,s,e,t),n);ee(o.idToken,r,"internal-error");const a=ra(o.idToken);ee(a,r,"internal-error");const{sub:c}=a;return ee(t.uid===c,r,"user-mismatch"),Rn._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&dt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ch(t,e,n=!1){if(yt(t.app))return Promise.reject(Ut(t));const r="signIn",s=await Ah(t,r,e),o=await Rn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(o.user),o}async function xv(t,e){return Ch(On(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rh(t){const e=On(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Mv(t,e,n){if(yt(t.app))return Promise.reject(Ut(t));const r=On(t),a=await Eo(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Dv).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Rh(t),h}),c=await Rn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function Uv(t,e,n){return yt(t.app)?Promise.reject(Ut(t)):xv(Bt(t),ir.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Rh(t),r})}function Fv(t,e,n,r){return Bt(t).onIdTokenChanged(e,n,r)}function jv(t,e,n){return Bt(t).beforeAuthStateChanged(e,n)}function Hv(t,e,n,r){return Bt(t).onAuthStateChanged(e,n,r)}function Vv(t){return Bt(t).signOut()}const Ki="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ki,"1"),this.storage.removeItem(Ki),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=1e3,$v=10;class Oh extends Ph{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,h)=>{this.notifyListeners(a,h)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);av()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$v):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oh.type="LOCAL";const Wv=Oh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends Ph{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kh.type="SESSION";const Dh=kh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new cs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:o}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(n.origin,o)),h=await Kv(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((c,h)=>{const d=aa("",20);s.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(_){const b=_;if(b.data.eventId===d)switch(b.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(b.data.response);break;default:clearTimeout(g),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}function Gv(t){Tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function qv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xv(){return Nh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="firebaseLocalStorageDb",Yv=1,zi="firebaseLocalStorage",xh="fbase_key";class Zr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function us(t,e){return t.transaction([zi],e?"readwrite":"readonly").objectStore(zi)}function Qv(){const t=indexedDB.deleteDatabase(Lh);return new Zr(t).toPromise()}function wo(){const t=indexedDB.open(Lh,Yv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zi,{keyPath:xh})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zi)?e(r):(r.close(),await Qv(),e(await wo()))})})}async function oc(t,e,n){const r=us(t,!0).put({[xh]:e,value:n});return new Zr(r).toPromise()}async function Zv(t,e){const n=us(t,!1).get(e),r=await new Zr(n).toPromise();return r===void 0?null:r.value}function ac(t,e){const n=us(t,!0).delete(e);return new Zr(n).toPromise()}const e_=800,t_=3;class Mh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>t_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cs._getInstance(Xv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qv(),!this.activeServiceWorker)return;this.sender=new zv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wo();return await oc(e,Ki,"1"),await ac(e,Ki),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Zv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ac(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=us(s,!1).getAll();return new Zr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),e_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mh.type="LOCAL";const n_=Mh;new Xr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t,e){return e?xt(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends sa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function i_(t){return Ch(t.auth,new la(t),t.bypassAuthState)}function s_(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),Lv(n,new la(t),t.bypassAuthState)}async function o_(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),Nv(n,new la(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return i_;case"linkViaPopup":case"linkViaRedirect":return o_;case"reauthViaPopup":case"reauthViaRedirect":return s_;default:dt(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=new Xr(2e3,1e4);class Wn extends Uh{constructor(e,n,r,s,o){super(e,n,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=aa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,a_.get())};e()}}Wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="pendingRedirect",Pi=new Map;class c_ extends Uh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pi.get(this.auth._key());if(!e){try{const r=await u_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pi.set(this.auth._key(),e)}return this.bypassAuthState||Pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function u_(t,e){const n=d_(e),r=f_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function h_(t,e){Pi.set(t._key(),e)}function f_(t){return xt(t._redirectPersistence)}function d_(t){return Ri(l_,t.config.apiKey,t.name)}async function p_(t,e,n=!1){if(yt(t.app))return Promise.reject(Ut(t));const r=On(t),s=r_(r,e),a=await new c_(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=10*60*1e3;class m_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!v_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Fh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g_&&this.cachedEventUids.clear(),this.cachedEventUids.has(lc(e))}saveEventToCache(e){this.cachedEventUids.add(lc(e)),this.lastProcessedEventTime=Date.now()}}function lc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function v_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(t,e={}){return dn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,E_=/^https?/;async function w_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await __(t);for(const n of e)try{if(I_(n))return}catch{}dt(t,"unauthorized-domain")}function I_(t){const e=_o(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!E_.test(n))return!1;if(y_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=new Xr(3e4,6e4);function cc(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function T_(t){return new Promise((e,n)=>{var r,s,o;function a(){cc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cc(),n(bt(t,"network-request-failed"))},timeout:b_.get()})}if(!((s=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Tt().gapi)===null||o===void 0)&&o.load)a();else{const c=mv("iframefcb");return Tt()[c]=()=>{gapi.load?a():n(bt(t,"network-request-failed"))},bh(`${gv()}?onload=${c}`).catch(h=>n(h))}}).catch(e=>{throw Oi=null,e})}let Oi=null;function S_(t){return Oi=Oi||T_(t),Oi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=new Xr(5e3,15e3),C_="__/auth/iframe",R_="emulator/auth/iframe",P_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},O_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k_(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?na(e,R_):`https://${t.config.authDomain}/${C_}`,r={apiKey:e.apiKey,appName:t.name,v:rr},s=O_.get(t.config.apiHost);s&&(r.eid=s);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Jr(r).slice(1)}`}async function D_(t){const e=await S_(t),n=Tt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:k_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:P_,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=bt(t,"network-request-failed"),c=Tt().setTimeout(()=>{o(a)},A_.get());function h(){Tt().clearTimeout(c),s(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},L_=500,x_=600,M_="_blank",U_="http://localhost";class uc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function F_(t,e,n,r=L_,s=x_){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h=Object.assign(Object.assign({},N_),{width:r.toString(),height:s.toString(),top:o,left:a}),d=Xe().toLowerCase();n&&(c=mh(d)?M_:n),ph(d)&&(e=e||U_,h.scrollbars="yes");const g=Object.entries(h).reduce((b,[R,D])=>`${b}${R}=${D},`,"");if(ov(d)&&c!=="_self")return j_(e||"",c),new uc(null);const _=window.open(e||"",c,g);ee(_,t,"popup-blocked");try{_.focus()}catch{}return new uc(_)}function j_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="__/auth/handler",V_="emulator/auth/handler",B_=encodeURIComponent("fac");async function hc(t,e,n,r,s,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rr,eventId:s};if(e instanceof Sh){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",kg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,_]of Object.entries({}))a[g]=_}if(e instanceof Qr){const g=e.getScopes().filter(_=>_!=="");g.length>0&&(a.scopes=g.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const h=await t._getAppCheckToken(),d=h?`#${B_}=${encodeURIComponent(h)}`:"";return`${$_(t)}?${Jr(c).slice(1)}${d}`}function $_({config:t}){return t.emulator?na(t,V_):`https://${t.authDomain}/${H_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="webStorageSupport";class W_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dh,this._completeRedirectFn=p_,this._overrideRedirectResult=h_}async _openPopup(e,n,r,s){var o;jt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await hc(e,n,r,_o(),s);return F_(e,a,aa())}async _openRedirect(e,n,r,s){await this._originValidation(e);const o=await hc(e,n,r,_o(),s);return Gv(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(jt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await D_(e),r=new m_(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gs,{type:Gs},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[Gs];a!==void 0&&n(!!a),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=w_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wh()||gh()||ia()}}const K_=W_;var fc="@firebase/auth",dc="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function q_(t){Qn(new An("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ih(t)},d=new fv(r,s,o,h);return wv(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qn(new An("auth-internal",e=>{const n=On(e.getProvider("auth").getImmediate());return(r=>new z_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(fc,dc,G_(t)),ln(fc,dc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=5*60,X_=Qu("authIdTokenMaxAge")||J_;let pc=null;const Y_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>X_)return;const s=n==null?void 0:n.token;pc!==s&&(pc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Q_(t=nh()){const e=Zo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ev(t,{popupRedirectResolver:K_,persistence:[n_,Wv,Dh]}),r=Qu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Y_(o.toString());jv(n,a,()=>a(n.currentUser)),Fv(n,c=>a(c))}}const s=Xu("auth");return s&&Iv(n,`http://${s}`),n}function Z_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dv({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const o=bt("internal-error");o.customData=s,n(o)},r.type="text/javascript",r.charset="UTF-8",Z_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});q_("Browser");var ey="firebase",ty="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(ey,ty,"app");var gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jh;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,p){function v(){}v.prototype=p.prototype,I.D=p.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(w,T,S){for(var E=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)E[Pe-2]=arguments[Pe];return p.prototype[T].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,p,v){v||(v=0);var w=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)w[T]=p.charCodeAt(v++)|p.charCodeAt(v++)<<8|p.charCodeAt(v++)<<16|p.charCodeAt(v++)<<24;else for(T=0;16>T;++T)w[T]=p[v++]|p[v++]<<8|p[v++]<<16|p[v++]<<24;p=I.g[0],v=I.g[1],T=I.g[2];var S=I.g[3],E=p+(S^v&(T^S))+w[0]+3614090360&4294967295;p=v+(E<<7&4294967295|E>>>25),E=S+(T^p&(v^T))+w[1]+3905402710&4294967295,S=p+(E<<12&4294967295|E>>>20),E=T+(v^S&(p^v))+w[2]+606105819&4294967295,T=S+(E<<17&4294967295|E>>>15),E=v+(p^T&(S^p))+w[3]+3250441966&4294967295,v=T+(E<<22&4294967295|E>>>10),E=p+(S^v&(T^S))+w[4]+4118548399&4294967295,p=v+(E<<7&4294967295|E>>>25),E=S+(T^p&(v^T))+w[5]+1200080426&4294967295,S=p+(E<<12&4294967295|E>>>20),E=T+(v^S&(p^v))+w[6]+2821735955&4294967295,T=S+(E<<17&4294967295|E>>>15),E=v+(p^T&(S^p))+w[7]+4249261313&4294967295,v=T+(E<<22&4294967295|E>>>10),E=p+(S^v&(T^S))+w[8]+1770035416&4294967295,p=v+(E<<7&4294967295|E>>>25),E=S+(T^p&(v^T))+w[9]+2336552879&4294967295,S=p+(E<<12&4294967295|E>>>20),E=T+(v^S&(p^v))+w[10]+4294925233&4294967295,T=S+(E<<17&4294967295|E>>>15),E=v+(p^T&(S^p))+w[11]+2304563134&4294967295,v=T+(E<<22&4294967295|E>>>10),E=p+(S^v&(T^S))+w[12]+1804603682&4294967295,p=v+(E<<7&4294967295|E>>>25),E=S+(T^p&(v^T))+w[13]+4254626195&4294967295,S=p+(E<<12&4294967295|E>>>20),E=T+(v^S&(p^v))+w[14]+2792965006&4294967295,T=S+(E<<17&4294967295|E>>>15),E=v+(p^T&(S^p))+w[15]+1236535329&4294967295,v=T+(E<<22&4294967295|E>>>10),E=p+(T^S&(v^T))+w[1]+4129170786&4294967295,p=v+(E<<5&4294967295|E>>>27),E=S+(v^T&(p^v))+w[6]+3225465664&4294967295,S=p+(E<<9&4294967295|E>>>23),E=T+(p^v&(S^p))+w[11]+643717713&4294967295,T=S+(E<<14&4294967295|E>>>18),E=v+(S^p&(T^S))+w[0]+3921069994&4294967295,v=T+(E<<20&4294967295|E>>>12),E=p+(T^S&(v^T))+w[5]+3593408605&4294967295,p=v+(E<<5&4294967295|E>>>27),E=S+(v^T&(p^v))+w[10]+38016083&4294967295,S=p+(E<<9&4294967295|E>>>23),E=T+(p^v&(S^p))+w[15]+3634488961&4294967295,T=S+(E<<14&4294967295|E>>>18),E=v+(S^p&(T^S))+w[4]+3889429448&4294967295,v=T+(E<<20&4294967295|E>>>12),E=p+(T^S&(v^T))+w[9]+568446438&4294967295,p=v+(E<<5&4294967295|E>>>27),E=S+(v^T&(p^v))+w[14]+3275163606&4294967295,S=p+(E<<9&4294967295|E>>>23),E=T+(p^v&(S^p))+w[3]+4107603335&4294967295,T=S+(E<<14&4294967295|E>>>18),E=v+(S^p&(T^S))+w[8]+1163531501&4294967295,v=T+(E<<20&4294967295|E>>>12),E=p+(T^S&(v^T))+w[13]+2850285829&4294967295,p=v+(E<<5&4294967295|E>>>27),E=S+(v^T&(p^v))+w[2]+4243563512&4294967295,S=p+(E<<9&4294967295|E>>>23),E=T+(p^v&(S^p))+w[7]+1735328473&4294967295,T=S+(E<<14&4294967295|E>>>18),E=v+(S^p&(T^S))+w[12]+2368359562&4294967295,v=T+(E<<20&4294967295|E>>>12),E=p+(v^T^S)+w[5]+4294588738&4294967295,p=v+(E<<4&4294967295|E>>>28),E=S+(p^v^T)+w[8]+2272392833&4294967295,S=p+(E<<11&4294967295|E>>>21),E=T+(S^p^v)+w[11]+1839030562&4294967295,T=S+(E<<16&4294967295|E>>>16),E=v+(T^S^p)+w[14]+4259657740&4294967295,v=T+(E<<23&4294967295|E>>>9),E=p+(v^T^S)+w[1]+2763975236&4294967295,p=v+(E<<4&4294967295|E>>>28),E=S+(p^v^T)+w[4]+1272893353&4294967295,S=p+(E<<11&4294967295|E>>>21),E=T+(S^p^v)+w[7]+4139469664&4294967295,T=S+(E<<16&4294967295|E>>>16),E=v+(T^S^p)+w[10]+3200236656&4294967295,v=T+(E<<23&4294967295|E>>>9),E=p+(v^T^S)+w[13]+681279174&4294967295,p=v+(E<<4&4294967295|E>>>28),E=S+(p^v^T)+w[0]+3936430074&4294967295,S=p+(E<<11&4294967295|E>>>21),E=T+(S^p^v)+w[3]+3572445317&4294967295,T=S+(E<<16&4294967295|E>>>16),E=v+(T^S^p)+w[6]+76029189&4294967295,v=T+(E<<23&4294967295|E>>>9),E=p+(v^T^S)+w[9]+3654602809&4294967295,p=v+(E<<4&4294967295|E>>>28),E=S+(p^v^T)+w[12]+3873151461&4294967295,S=p+(E<<11&4294967295|E>>>21),E=T+(S^p^v)+w[15]+530742520&4294967295,T=S+(E<<16&4294967295|E>>>16),E=v+(T^S^p)+w[2]+3299628645&4294967295,v=T+(E<<23&4294967295|E>>>9),E=p+(T^(v|~S))+w[0]+4096336452&4294967295,p=v+(E<<6&4294967295|E>>>26),E=S+(v^(p|~T))+w[7]+1126891415&4294967295,S=p+(E<<10&4294967295|E>>>22),E=T+(p^(S|~v))+w[14]+2878612391&4294967295,T=S+(E<<15&4294967295|E>>>17),E=v+(S^(T|~p))+w[5]+4237533241&4294967295,v=T+(E<<21&4294967295|E>>>11),E=p+(T^(v|~S))+w[12]+1700485571&4294967295,p=v+(E<<6&4294967295|E>>>26),E=S+(v^(p|~T))+w[3]+2399980690&4294967295,S=p+(E<<10&4294967295|E>>>22),E=T+(p^(S|~v))+w[10]+4293915773&4294967295,T=S+(E<<15&4294967295|E>>>17),E=v+(S^(T|~p))+w[1]+2240044497&4294967295,v=T+(E<<21&4294967295|E>>>11),E=p+(T^(v|~S))+w[8]+1873313359&4294967295,p=v+(E<<6&4294967295|E>>>26),E=S+(v^(p|~T))+w[15]+4264355552&4294967295,S=p+(E<<10&4294967295|E>>>22),E=T+(p^(S|~v))+w[6]+2734768916&4294967295,T=S+(E<<15&4294967295|E>>>17),E=v+(S^(T|~p))+w[13]+1309151649&4294967295,v=T+(E<<21&4294967295|E>>>11),E=p+(T^(v|~S))+w[4]+4149444226&4294967295,p=v+(E<<6&4294967295|E>>>26),E=S+(v^(p|~T))+w[11]+3174756917&4294967295,S=p+(E<<10&4294967295|E>>>22),E=T+(p^(S|~v))+w[2]+718787259&4294967295,T=S+(E<<15&4294967295|E>>>17),E=v+(S^(T|~p))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(T+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,p){p===void 0&&(p=I.length);for(var v=p-this.blockSize,w=this.B,T=this.h,S=0;S<p;){if(T==0)for(;S<=v;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<p;)if(w[T++]=I.charCodeAt(S++),T==this.blockSize){s(this,w),T=0;break}}else for(;S<p;)if(w[T++]=I[S++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;var v=8*this.o;for(p=I.length-8;p<I.length;++p)I[p]=v&255,v/=256;for(this.u(I),I=Array(16),p=v=0;4>p;++p)for(var w=0;32>w;w+=8)I[v++]=this.g[p]>>>w&255;return I};function o(I,p){var v=c;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=p(I)}function a(I,p){this.h=p;for(var v=[],w=!0,T=I.length-1;0<=T;T--){var S=I[T]|0;w&&S==p||(v[T]=S,w=!1)}this.g=v}var c={};function h(I){return-128<=I&&128>I?o(I,function(p){return new a([p|0],0>p?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return _;if(0>I)return G(d(-I));for(var p=[],v=1,w=0;I>=v;w++)p[w]=I/v|0,v*=4294967296;return new a(p,0)}function g(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return G(g(I.substring(1),p));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(p,8)),w=_,T=0;T<I.length;T+=8){var S=Math.min(8,I.length-T),E=parseInt(I.substring(T,T+S),p);8>S?(S=d(Math.pow(p,S)),w=w.j(S).add(d(E))):(w=w.j(v),w=w.add(d(E)))}return w}var _=h(0),b=h(1),R=h(16777216);t=a.prototype,t.m=function(){if(M(this))return-G(this).m();for(var I=0,p=1,v=0;v<this.g.length;v++){var w=this.i(v);I+=(0<=w?w:4294967296+w)*p,p*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D(this))return"0";if(M(this))return"-"+G(this).toString(I);for(var p=d(Math.pow(I,6)),v=this,w="";;){var T=B(v,p).g;v=q(v,T.j(p));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=T,D(v))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function D(I){if(I.h!=0)return!1;for(var p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function M(I){return I.h==-1}t.l=function(I){return I=q(this,I),M(I)?-1:D(I)?0:1};function G(I){for(var p=I.g.length,v=[],w=0;w<p;w++)v[w]=~I.g[w];return new a(v,~I.h).add(b)}t.abs=function(){return M(this)?G(this):this},t.add=function(I){for(var p=Math.max(this.g.length,I.g.length),v=[],w=0,T=0;T<=p;T++){var S=w+(this.i(T)&65535)+(I.i(T)&65535),E=(S>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);w=E>>>16,S&=65535,E&=65535,v[T]=E<<16|S}return new a(v,v[v.length-1]&-2147483648?-1:0)};function q(I,p){return I.add(G(p))}t.j=function(I){if(D(this)||D(I))return _;if(M(this))return M(I)?G(this).j(G(I)):G(G(this).j(I));if(M(I))return G(this.j(G(I)));if(0>this.l(R)&&0>I.l(R))return d(this.m()*I.m());for(var p=this.g.length+I.g.length,v=[],w=0;w<2*p;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var T=0;T<I.g.length;T++){var S=this.i(w)>>>16,E=this.i(w)&65535,Pe=I.i(T)>>>16,Ye=I.i(T)&65535;v[2*w+2*T]+=E*Ye,W(v,2*w+2*T),v[2*w+2*T+1]+=S*Ye,W(v,2*w+2*T+1),v[2*w+2*T+1]+=E*Pe,W(v,2*w+2*T+1),v[2*w+2*T+2]+=S*Pe,W(v,2*w+2*T+2)}for(w=0;w<p;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=p;w<2*p;w++)v[w]=0;return new a(v,0)};function W(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function K(I,p){this.g=I,this.h=p}function B(I,p){if(D(p))throw Error("division by zero");if(D(I))return new K(_,_);if(M(I))return p=B(G(I),p),new K(G(p.g),G(p.h));if(M(p))return p=B(I,G(p)),new K(G(p.g),p.h);if(30<I.g.length){if(M(I)||M(p))throw Error("slowDivide_ only works with positive integers.");for(var v=b,w=p;0>=w.l(I);)v=ne(v),w=ne(w);var T=le(v,1),S=le(w,1);for(w=le(w,2),v=le(v,2);!D(w);){var E=S.add(w);0>=E.l(I)&&(T=T.add(v),S=E),w=le(w,1),v=le(v,1)}return p=q(I,T.j(p)),new K(T,p)}for(T=_;0<=I.l(p);){for(v=Math.max(1,Math.floor(I.m()/p.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=d(v),E=S.j(p);M(E)||0<E.l(I);)v-=w,S=d(v),E=S.j(p);D(S)&&(S=b),T=T.add(S),I=q(I,E)}return new K(T,I)}t.A=function(I){return B(this,I).h},t.and=function(I){for(var p=Math.max(this.g.length,I.g.length),v=[],w=0;w<p;w++)v[w]=this.i(w)&I.i(w);return new a(v,this.h&I.h)},t.or=function(I){for(var p=Math.max(this.g.length,I.g.length),v=[],w=0;w<p;w++)v[w]=this.i(w)|I.i(w);return new a(v,this.h|I.h)},t.xor=function(I){for(var p=Math.max(this.g.length,I.g.length),v=[],w=0;w<p;w++)v[w]=this.i(w)^I.i(w);return new a(v,this.h^I.h)};function ne(I){for(var p=I.g.length+1,v=[],w=0;w<p;w++)v[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(v,I.h)}function le(I,p){var v=p>>5;p%=32;for(var w=I.g.length-v,T=[],S=0;S<w;S++)T[S]=0<p?I.i(S+v)>>>p|I.i(S+v+1)<<32-p:I.i(S+v);return new a(T,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,jh=a}).apply(typeof gc<"u"?gc:typeof self<"u"?self:typeof window<"u"?window:{});var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ei=="object"&&Ei];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=n(this);function s(i,l){if(l)e:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in u))break e;u=u[A]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&e(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,f=!1,A={next:function(){if(!f&&u<i.length){var P=u++;return{value:l(P,i[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function g(i,l,u){return i.call.apply(i.bind,arguments)}function _(i,l,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function b(i,l,u){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:_,b.apply(null,arguments)}function R(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function D(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,A,P){for(var j=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)j[ve-2]=arguments[ve];return l.prototype[A].apply(f,j)}}function M(i){const l=i.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function G(i,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const A=i.length||0,P=f.length||0;i.length=A+P;for(let j=0;j<P;j++)i[A+j]=f[j]}else i.push(f)}}class q{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function W(i){return/^[\s\xa0]*$/.test(i)}function K(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function B(i){return B[" "](i),i}B[" "]=function(){};var ne=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function le(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function I(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function p(i){const l={};for(const u in i)l[u]=i[u];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(i,l){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)i[u]=f[u];for(let P=0;P<v.length;P++)u=v[P],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function T(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function S(i){c.setTimeout(()=>{throw i},0)}function E(){var i=et;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class Pe{constructor(){this.h=this.g=null}add(l,u){const f=Ye.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Ye=new q(()=>new Ee,i=>i.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let te,se=!1,et=new Pe,lt=()=>{const i=c.Promise.resolve(void 0);te=()=>{i.then(it)}};var it=()=>{for(var i;i=E();){try{i.h.call(i.g)}catch(u){S(u)}var l=Ye;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}se=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var $t=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return i}();function gt(i,l){if(be.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(ne){e:{try{B(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Qe[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&gt.aa.h.call(this)}}D(gt,be);var Qe={2:"touch",3:"pen",4:"mouse"};gt.prototype.h=function(){gt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),z=0;function V(i,l,u,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=A,this.key=++z,this.da=this.fa=!1}function J(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function oe(i){this.src=i,this.g={},this.h=0}oe.prototype.add=function(i,l,u,f,A){var P=i.toString();i=this.g[P],i||(i=this.g[P]=[],this.h++);var j=m(i,l,f,A);return-1<j?(l=i[j],u||(l.fa=!1)):(l=new V(l,this.src,P,!!f,A),l.fa=u,i.push(l)),l};function me(i,l){var u=l.type;if(u in i.g){var f=i.g[u],A=Array.prototype.indexOf.call(f,l,void 0),P;(P=0<=A)&&Array.prototype.splice.call(f,A,1),P&&(J(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function m(i,l,u,f){for(var A=0;A<i.length;++A){var P=i[A];if(!P.da&&P.listener==l&&P.capture==!!u&&P.ha==f)return A}return-1}var y="closure_lm_"+(1e6*Math.random()|0),C={};function N(i,l,u,f,A){if(Array.isArray(l)){for(var P=0;P<l.length;P++)N(i,l[P],u,f,A);return null}return u=Y(u),i&&i[k]?i.K(l,u,d(f)?!!f.capture:!!f,A):O(i,l,u,!1,f,A)}function O(i,l,u,f,A,P){if(!l)throw Error("Invalid event type");var j=d(A)?!!A.capture:!!A,ve=Q(i);if(ve||(i[y]=ve=new oe(i)),u=ve.add(l,u,f,j,P),u.proxy)return u;if(f=L(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)$t||(A=j),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(U(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function L(){function i(u){return l.call(i.src,i.listener,u)}const l=x;return i}function H(i,l,u,f,A){if(Array.isArray(l))for(var P=0;P<l.length;P++)H(i,l[P],u,f,A);else f=d(f)?!!f.capture:!!f,u=Y(u),i&&i[k]?(i=i.i,l=String(l).toString(),l in i.g&&(P=i.g[l],u=m(P,u,f,A),-1<u&&(J(P[u]),Array.prototype.splice.call(P,u,1),P.length==0&&(delete i.g[l],i.h--)))):i&&(i=Q(i))&&(l=i.g[l.toString()],i=-1,l&&(i=m(l,u,f,A)),(u=-1<i?l[i]:null)&&F(u))}function F(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[k])me(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(U(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=Q(l))?(me(u,i),u.h==0&&(u.src=null,l[y]=null)):J(i)}}}function U(i){return i in C?C[i]:C[i]="on"+i}function x(i,l){if(i.da)i=!0;else{l=new gt(l,this);var u=i.listener,f=i.ha||i.src;i.fa&&F(i),i=u.call(f,l)}return i}function Q(i){return i=i[y],i instanceof oe?i:null}var $="__closure_events_fn_"+(1e9*Math.random()>>>0);function Y(i){return typeof i=="function"?i:(i[$]||(i[$]=function(l){return i.handleEvent(l)}),i[$])}function X(){Ie.call(this),this.i=new oe(this),this.M=this,this.F=null}D(X,Ie),X.prototype[k]=!0,X.prototype.removeEventListener=function(i,l,u,f){H(this,i,l,u,f)};function Z(i,l){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new be(l,i);else if(l instanceof be)l.target=l.target||i;else{var A=l;l=new be(f,i),w(l,A)}if(A=!0,u)for(var P=u.length-1;0<=P;P--){var j=l.g=u[P];A=fe(j,f,!0,l)&&A}if(j=l.g=i,A=fe(j,f,!0,l)&&A,A=fe(j,f,!1,l)&&A,u)for(P=0;P<u.length;P++)j=l.g=u[P],A=fe(j,f,!1,l)&&A}X.prototype.N=function(){if(X.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],f=0;f<u.length;f++)J(u[f]);delete i.g[l],i.h--}}this.F=null},X.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},X.prototype.L=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function fe(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,P=0;P<l.length;++P){var j=l[P];if(j&&!j.da&&j.capture==u){var ve=j.listener,ke=j.ha||j.src;j.fa&&me(i.i,j),A=ve.call(ke,f)!==!1&&A}}return A&&!f.defaultPrevented}function ce(i,l,u){if(typeof i=="function")u&&(i=b(i,u));else if(i&&typeof i.handleEvent=="function")i=b(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function Le(i){i.g=ce(()=>{i.g=null,i.i&&(i.i=!1,Le(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Ce extends Ie{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Le(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oe(i){Ie.call(this),this.h=i,this.g={}}D(Oe,Ie);var xe=[];function Wt(i){le(i.g,function(l,u){this.g.hasOwnProperty(u)&&F(l)},i),i.g={}}Oe.prototype.N=function(){Oe.aa.N.call(this),Wt(this)},Oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kn=c.JSON.stringify,Be=c.JSON.parse,st=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Dn(){}Dn.prototype.h=null;function ga(i){return i.h||(i.h=i.i())}function rf(){}var sr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ds(){be.call(this,"d")}D(ds,be);function ps(){be.call(this,"c")}D(ps,be);var Nn={},ma=null;function gs(){return ma=ma||new X}Nn.La="serverreachability";function va(i){be.call(this,Nn.La,i)}D(va,be);function or(i){const l=gs();Z(l,new va(l))}Nn.STAT_EVENT="statevent";function _a(i,l){be.call(this,Nn.STAT_EVENT,i),this.stat=l}D(_a,be);function $e(i){const l=gs();Z(l,new _a(l,i))}Nn.Ma="timingevent";function ya(i,l){be.call(this,Nn.Ma,i),this.size=l}D(ya,be);function ar(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function lr(){this.g=!0}lr.prototype.xa=function(){this.g=!1};function sf(i,l,u,f,A,P){i.info(function(){if(i.g)if(P)for(var j="",ve=P.split("&"),ke=0;ke<ve.length;ke++){var ue=ve[ke].split("=");if(1<ue.length){var Me=ue[0];ue=ue[1];var Ue=Me.split("_");j=2<=Ue.length&&Ue[1]=="type"?j+(Me+"="+ue+"&"):j+(Me+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+u+`
`+j})}function of(i,l,u,f,A,P,j){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+u+`
`+P+" "+j})}function Ln(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+lf(i,u)+(f?" "+f:"")})}function af(i,l){i.info(function(){return"TIMEOUT: "+l})}lr.prototype.info=function(){};function lf(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<A.length;j++)A[j]=""}}}}return kn(u)}catch{return l}}var ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vs;function ti(){}D(ti,Dn),ti.prototype.g=function(){return new XMLHttpRequest},ti.prototype.i=function(){return{}},vs=new ti;function Kt(i,l,u,f){this.j=i,this.i=l,this.l=u,this.R=f||1,this.U=new Oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ea}function Ea(){this.i=null,this.g="",this.h=!1}var wa={},_s={};function ys(i,l,u){i.L=1,i.v=si(At(l)),i.m=u,i.P=!0,Ia(i,null)}function Ia(i,l){i.F=Date.now(),ni(i),i.A=At(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Ma(u.i,"t",f),i.C=0,u=i.j.J,i.h=new Ea,i.g=el(i.j,u?l:null,!i.m),0<i.O&&(i.M=new Ce(b(i.Y,i,i.g),i.O)),l=i.U,u=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(xe[0]=A.toString()),A=xe);for(var P=0;P<A.length;P++){var j=N(u,A[P],f||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),or(),sf(i.i,i.u,i.A,i.l,i.R,i.m)}Kt.prototype.ca=function(i){i=i.target;const l=this.M;l&&Ct(i)==3?l.j():this.Y(i)},Kt.prototype.Y=function(i){try{if(i==this.g)e:{const Ue=Ct(this.g);var l=this.g.Ba();const Un=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||$a(this.g)))){this.J||Ue!=4||l==7||(l==8||0>=Un?or(3):or(2)),Es(this);var u=this.g.Z();this.X=u;t:if(ba(this)){var f=$a(this.g);i="";var A=f.length,P=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),cr(this);var j="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(P&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=u==200,of(this.i,this.u,this.A,this.l,this.R,Ue,u),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,ke=this.g;if((ve=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(ve)){var ue=ve;break t}}ue=null}if(u=ue)Ln(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ws(this,u);else{this.o=!1,this.s=3,$e(12),pn(this),cr(this);break e}}if(this.P){u=!0;let ct;for(;!this.J&&this.C<j.length;)if(ct=uf(this,j),ct==_s){Ue==4&&(this.s=4,$e(14),u=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==wa){this.s=4,$e(15),Ln(this.i,this.l,j,"[Invalid Chunk]"),u=!1;break}else Ln(this.i,this.l,ct,null),ws(this,ct);if(ba(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||j.length!=0||this.h.h||(this.s=1,$e(16),u=!1),this.o=this.o&&u,!u)Ln(this.i,this.l,j,"[Invalid Chunked Response]"),pn(this),cr(this);else if(0<j.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Cs(Me),Me.M=!0,$e(11))}}else Ln(this.i,this.l,j,null),ws(this,j);Ue==4&&pn(this),this.o&&!this.J&&(Ue==4?Xa(this.j,this):(this.o=!1,ni(this)))}else Cf(this.g),u==400&&0<j.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),pn(this),cr(this)}}}catch{}finally{}};function ba(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function uf(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?_s:(u=Number(l.substring(u,f)),isNaN(u)?wa:(f+=1,f+u>l.length?_s:(l=l.slice(f,f+u),i.C=f+u,l)))}Kt.prototype.cancel=function(){this.J=!0,pn(this)};function ni(i){i.S=Date.now()+i.I,Ta(i,i.I)}function Ta(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ar(b(i.ba,i),l)}function Es(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Kt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(af(this.i,this.A),this.L!=2&&(or(),$e(17)),pn(this),this.s=2,cr(this)):Ta(this,this.S-i)};function cr(i){i.j.G==0||i.J||Xa(i.j,i)}function pn(i){Es(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Wt(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function ws(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||Is(u.h,i))){if(!i.K&&Is(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)hi(u),ci(u);else break e;As(u),$e(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=ar(b(u.Za,u),6e3));if(1>=Ca(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else mn(u,11)}else if((i.K||u.g==i)&&hi(u),!W(l))for(A=u.Da.g.parse(l),l=0;l<A.length;l++){let ue=A[l];if(u.T=ue[0],ue=ue[1],u.G==2)if(ue[0]=="c"){u.K=ue[1],u.ia=ue[2];const Me=ue[3];Me!=null&&(u.la=Me,u.j.info("VER="+u.la));const Ue=ue[4];Ue!=null&&(u.Aa=Ue,u.j.info("SVER="+u.Aa));const Un=ue[5];Un!=null&&typeof Un=="number"&&0<Un&&(f=1.5*Un,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const ct=i.g;if(ct){const fi=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fi){var P=f.h;P.g||fi.indexOf("spdy")==-1&&fi.indexOf("quic")==-1&&fi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(bs(P,P.h),P.h=null))}if(f.D){const Rs=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Rs&&(f.ya=Rs,we(f.I,f.D,Rs))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var j=i;if(f.qa=Za(f,f.J?f.ia:null,f.W),j.K){Ra(f.h,j);var ve=j,ke=f.L;ke&&(ve.I=ke),ve.B&&(Es(ve),ni(ve)),f.g=j}else qa(f);0<u.i.length&&ui(u)}else ue[0]!="stop"&&ue[0]!="close"||mn(u,7);else u.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?mn(u,7):Ss(u):ue[0]!="noop"&&u.l&&u.l.ta(ue),u.v=0)}}or(4)}catch{}}var hf=class{constructor(i,l){this.g=i,this.map=l}};function Sa(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Aa(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ca(i){return i.h?1:i.g?i.g.size:0}function Is(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function bs(i,l){i.g?i.g.add(l):i.h=l}function Ra(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Sa.prototype.cancel=function(){if(this.i=Pa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Pa(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return M(i.i)}function ff(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],u=i.length,f=0;f<u;f++)l.push(i[f]);return l}l=[],u=0;for(f in i)l[u++]=i[f];return l}function df(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const f in i)l[u++]=f;return l}}}function Oa(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=df(i),f=ff(i),A=f.length,P=0;P<A;P++)l.call(void 0,f[P],u&&u[P],i)}var ka=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pf(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),A=null;if(0<=f){var P=i[u].substring(0,f);A=i[u].substring(f+1)}else P=i[u];l(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function gn(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof gn){this.h=i.h,ri(this,i.j),this.o=i.o,this.g=i.g,ii(this,i.s),this.l=i.l;var l=i.i,u=new fr;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),Da(this,u),this.m=i.m}else i&&(l=String(i).match(ka))?(this.h=!1,ri(this,l[1]||"",!0),this.o=ur(l[2]||""),this.g=ur(l[3]||"",!0),ii(this,l[4]),this.l=ur(l[5]||"",!0),Da(this,l[6]||"",!0),this.m=ur(l[7]||"")):(this.h=!1,this.i=new fr(null,this.h))}gn.prototype.toString=function(){var i=[],l=this.j;l&&i.push(hr(l,Na,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(hr(l,Na,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(hr(u,u.charAt(0)=="/"?vf:mf,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",hr(u,yf)),i.join("")};function At(i){return new gn(i)}function ri(i,l,u){i.j=u?ur(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function ii(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Da(i,l,u){l instanceof fr?(i.i=l,Ef(i.i,i.h)):(u||(l=hr(l,_f)),i.i=new fr(l,i.h))}function we(i,l,u){i.i.set(l,u)}function si(i){return we(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function ur(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function hr(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,gf),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function gf(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Na=/[#\/\?@]/g,mf=/[#\?:]/g,vf=/[#\?]/g,_f=/[#\?@]/g,yf=/#/g;function fr(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function zt(i){i.g||(i.g=new Map,i.h=0,i.i&&pf(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}t=fr.prototype,t.add=function(i,l){zt(this),this.i=null,i=xn(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function La(i,l){zt(i),l=xn(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function xa(i,l){return zt(i),l=xn(i,l),i.g.has(l)}t.forEach=function(i,l){zt(this),this.g.forEach(function(u,f){u.forEach(function(A){i.call(l,A,f,this)},this)},this)},t.na=function(){zt(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const A=i[f];for(let P=0;P<A.length;P++)u.push(l[f])}return u},t.V=function(i){zt(this);let l=[];if(typeof i=="string")xa(this,i)&&(l=l.concat(this.g.get(xn(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},t.set=function(i,l){return zt(this),this.i=null,i=xn(this,i),xa(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},t.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Ma(i,l,u){La(i,l),0<u.length&&(i.i=null,i.g.set(xn(i,l),M(u)),i.h+=u.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const P=encodeURIComponent(String(f)),j=this.V(f);for(f=0;f<j.length;f++){var A=P;j[f]!==""&&(A+="="+encodeURIComponent(String(j[f]))),i.push(A)}}return this.i=i.join("&")};function xn(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Ef(i,l){l&&!i.j&&(zt(i),i.i=null,i.g.forEach(function(u,f){var A=f.toLowerCase();f!=A&&(La(this,f),Ma(this,A,u))},i)),i.j=l}function wf(i,l){const u=new lr;if(c.Image){const f=new Image;f.onload=R(Gt,u,"TestLoadImage: loaded",!0,l,f),f.onerror=R(Gt,u,"TestLoadImage: error",!1,l,f),f.onabort=R(Gt,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(Gt,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function If(i,l){const u=new lr,f=new AbortController,A=setTimeout(()=>{f.abort(),Gt(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(P=>{clearTimeout(A),P.ok?Gt(u,"TestPingServer: ok",!0,l):Gt(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Gt(u,"TestPingServer: error",!1,l)})}function Gt(i,l,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function bf(){this.g=new st}function Tf(i,l,u){const f=u||"";try{Oa(i,function(A,P){let j=A;d(A)&&(j=kn(A)),l.push(f+P+"="+encodeURIComponent(j))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function oi(i){this.l=i.Ub||null,this.j=i.eb||!1}D(oi,Dn),oi.prototype.g=function(){return new ai(this.l,this.j)},oi.prototype.i=function(i){return function(){return i}}({});function ai(i,l){X.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ai,X),t=ai.prototype,t.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,pr(this)},t.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,dr(this)),this.readyState=0},t.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,pr(this)),this.g&&(this.readyState=3,pr(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ua(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ua(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}t.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?dr(this):pr(this),this.readyState==3&&Ua(this)}},t.Ra=function(i){this.g&&(this.response=this.responseText=i,dr(this))},t.Qa=function(i){this.g&&(this.response=i,dr(this))},t.ga=function(){this.g&&dr(this)};function dr(i){i.readyState=4,i.l=null,i.j=null,i.v=null,pr(i)}t.setRequestHeader=function(i,l){this.u.append(i,l)},t.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function pr(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Fa(i){let l="";return le(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function Ts(i,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Fa(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):we(i,l,u))}function Te(i){X.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Te,X);var Sf=/^https?$/i,Af=["POST","PUT"];t=Te.prototype,t.Ha=function(i){this.J=i},t.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vs.g(),this.v=this.o?ga(this.o):ga(vs),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(P){ja(this,P);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())u.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(P=>P.toLowerCase()=="content-type"),A=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Af,l,void 0))||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of u)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ba(this),this.u=!0,this.g.send(i),this.u=!1}catch(P){ja(this,P)}};function ja(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Ha(i),li(i)}function Ha(i){i.A||(i.A=!0,Z(i,"complete"),Z(i,"error"))}t.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Z(this,"complete"),Z(this,"abort"),li(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),li(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Va(this):this.bb())},t.bb=function(){Va(this)};function Va(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ct(i)!=4||i.Z()!=2)){if(i.u&&Ct(i)==4)ce(i.Ea,0,i);else if(Z(i,"readystatechange"),Ct(i)==4){i.h=!1;try{const j=i.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=j===0){var A=String(i.D).match(ka)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!Sf.test(A?A.toLowerCase():"")}u=f}if(u)Z(i,"complete"),Z(i,"success");else{i.m=6;try{var P=2<Ct(i)?i.g.statusText:""}catch{P=""}i.l=P+" ["+i.Z()+"]",Ha(i)}}finally{li(i)}}}}function li(i,l){if(i.g){Ba(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Z(i,"ready");try{u.onreadystatechange=f}catch{}}}function Ba(i){i.I&&(c.clearTimeout(i.I),i.I=null)}t.isActive=function(){return!!this.g};function Ct(i){return i.g?i.g.readyState:0}t.Z=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Be(l)}};function $a(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Cf(i){const l={};i=(i.g&&2<=Ct(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(W(i[f]))continue;var u=T(i[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const P=l[A]||[];l[A]=P,P.push(u)}I(l,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gr(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function Wa(i){this.Aa=0,this.i=[],this.j=new lr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gr("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gr("baseRetryDelayMs",5e3,i),this.cb=gr("retryDelaySeedMs",1e4,i),this.Wa=gr("forwardChannelMaxRetries",2,i),this.wa=gr("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Sa(i&&i.concurrentRequestLimit),this.Da=new bf,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wa.prototype,t.la=8,t.G=1,t.connect=function(i,l,u,f){$e(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Za(this,null,this.W),ui(this)};function Ss(i){if(Ka(i),i.G==3){var l=i.U++,u=At(i.I);if(we(u,"SID",i.K),we(u,"RID",l),we(u,"TYPE","terminate"),mr(i,u),l=new Kt(i,i.j,l),l.L=2,l.v=si(At(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=el(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ni(l)}Qa(i)}function ci(i){i.g&&(Cs(i),i.g.cancel(),i.g=null)}function Ka(i){ci(i),i.u&&(c.clearTimeout(i.u),i.u=null),hi(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function ui(i){if(!Aa(i.h)&&!i.s){i.s=!0;var l=i.Ga;te||lt(),se||(te(),se=!0),et.add(l,i),i.B=0}}function Rf(i,l){return Ca(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ar(b(i.Ga,i,l),Ya(i,i.B)),i.B++,!0)}t.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new Kt(this,this.j,i);let P=this.o;if(this.S&&(P?(P=p(P),w(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=Ga(this,A,l),u=At(this.I),we(u,"RID",i),we(u,"CVER",22),this.D&&we(u,"X-HTTP-Session-Id",this.D),mr(this,u),P&&(this.O?l="headers="+encodeURIComponent(String(Fa(P)))+"&"+l:this.m&&Ts(u,this.m,P)),bs(this.h,A),this.Ua&&we(u,"TYPE","init"),this.P?(we(u,"$req",l),we(u,"SID","null"),A.T=!0,ys(A,u,null)):ys(A,u,l),this.G=2}}else this.G==3&&(i?za(this,i):this.i.length==0||Aa(this.h)||za(this))};function za(i,l){var u;l?u=l.l:u=i.U++;const f=At(i.I);we(f,"SID",i.K),we(f,"RID",u),we(f,"AID",i.T),mr(i,f),i.m&&i.o&&Ts(f,i.m,i.o),u=new Kt(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Ga(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),bs(i.h,u),ys(u,f,l)}function mr(i,l){i.H&&le(i.H,function(u,f){we(l,f,u)}),i.l&&Oa({},function(u,f){we(l,f,u)})}function Ga(i,l,u){u=Math.min(i.i.length,u);var f=i.l?b(i.l.Na,i.l,i):null;e:{var A=i.i;let P=-1;for(;;){const j=["count="+u];P==-1?0<u?(P=A[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let ve=!0;for(let ke=0;ke<u;ke++){let ue=A[ke].g;const Me=A[ke].map;if(ue-=P,0>ue)P=Math.max(0,A[ke].g-100),ve=!1;else try{Tf(Me,j,"req"+ue+"_")}catch{f&&f(Me)}}if(ve){f=j.join("&");break e}}}return i=i.i.splice(0,u),l.D=i,f}function qa(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;te||lt(),se||(te(),se=!0),et.add(l,i),i.v=0}}function As(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ar(b(i.Fa,i),Ya(i,i.v)),i.v++,!0)}t.Fa=function(){if(this.u=null,Ja(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ar(b(this.ab,this),i)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),ci(this),Ja(this))};function Cs(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Ja(i){i.g=new Kt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=At(i.qa);we(l,"RID","rpc"),we(l,"SID",i.K),we(l,"AID",i.T),we(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&we(l,"TO",i.ja),we(l,"TYPE","xmlhttp"),mr(i,l),i.m&&i.o&&Ts(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=si(At(l)),u.m=null,u.P=!0,Ia(u,i)}t.Za=function(){this.C!=null&&(this.C=null,ci(this),As(this),$e(19))};function hi(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Xa(i,l){var u=null;if(i.g==l){hi(i),Cs(i),i.g=null;var f=2}else if(Is(i.h,l))u=l.D,Ra(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=gs(),Z(f,new ya(f,u)),ui(i)}else qa(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&Rf(i,l)||f==2&&As(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),A){case 1:mn(i,5);break;case 4:mn(i,10);break;case 3:mn(i,6);break;default:mn(i,2)}}}function Ya(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function mn(i,l){if(i.j.info("Error code "+l),l==2){var u=b(i.fb,i),f=i.Xa;const A=!f;f=new gn(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ri(f,"https"),si(f),A?wf(f.toString(),u):If(f.toString(),u)}else $e(2);i.G=0,i.l&&i.l.sa(l),Qa(i),Ka(i)}t.fb=function(i){i?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function Qa(i){if(i.G=0,i.ka=[],i.l){const l=Pa(i.h);(l.length!=0||i.i.length!=0)&&(G(i.ka,l),G(i.ka,i.i),i.h.i.length=0,M(i.i),i.i.length=0),i.l.ra()}}function Za(i,l,u){var f=u instanceof gn?At(u):new gn(u);if(f.g!="")l&&(f.g=l+"."+f.g),ii(f,f.s);else{var A=c.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var P=new gn(null);f&&ri(P,f),l&&(P.g=l),A&&ii(P,A),u&&(P.l=u),f=P}return u=i.D,l=i.ya,u&&l&&we(f,u,l),we(f,"VER",i.la),mr(i,f),f}function el(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new Te(new oi({eb:u})):new Te(i.pa),l.Ha(i.J),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function tl(){}t=tl.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ot(i,l){X.call(this),this.g=new Wa(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!W(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!W(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Mn(this)}D(ot,X),ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){Ss(this.g)},ot.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=kn(i),i=u);l.i.push(new hf(l.Ya++,i)),l.G==3&&ui(l)},ot.prototype.N=function(){this.g.l=null,delete this.j,Ss(this.g),delete this.g,ot.aa.N.call(this)};function nl(i){ds.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const u in l){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}D(nl,ds);function rl(){ps.call(this),this.status=1}D(rl,ps);function Mn(i){this.g=i}D(Mn,tl),Mn.prototype.ua=function(){Z(this.g,"a")},Mn.prototype.ta=function(i){Z(this.g,new nl(i))},Mn.prototype.sa=function(i){Z(this.g,new rl)},Mn.prototype.ra=function(){Z(this.g,"b")},ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,ms.NO_ERROR=0,ms.TIMEOUT=8,ms.HTTP_ERROR=6,cf.COMPLETE="complete",rf.EventType=sr,sr.OPEN="a",sr.CLOSE="b",sr.ERROR="c",sr.MESSAGE="d",X.prototype.listen=X.prototype.K,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha}).apply(typeof Ei<"u"?Ei:typeof self<"u"?self:typeof window<"u"?window:{});const mc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Yo("@firebase/firestore");function rt(t,...e){if(Zn.logLevel<=pe.DEBUG){const n=e.map(ua);Zn.debug(`Firestore (${ei}): ${t}`,...n)}}function ca(t,...e){if(Zn.logLevel<=pe.ERROR){const n=e.map(ua);Zn.error(`Firestore (${ei}): ${t}`,...n)}}function ny(t,...e){if(Zn.logLevel<=pe.WARN){const n=e.map(ua);Zn.warn(`Firestore (${ei}): ${t}`,...n)}}function ua(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t="Unexpected state"){const e=`FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: `+t;throw ca(e),new Error(e)}function Io(t,e){t||ha()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class He extends Vt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ry{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class iy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sy{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let o=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Io(typeof r.accessToken=="string"),new Hh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Io(e===null||typeof e=="string"),new Fe(e)}}class oy{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ay{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new oy(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ly{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,rt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Io(typeof n.token=="string"),this.R=n.token,new ly(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=uy(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<n&&(r+=e.charAt(s[o]%e.length))}return r}}function Vh(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,r,s,o,a,c,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}class Gi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vc,ae;(ae=vc||(vc={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new jh([4294967295,4294967295],0);function qs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n,r=1e3,s=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&rt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n,r,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,o){const a=Date.now()+r,c=new fa(e,n,a,s,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new He(je.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function py(t,e){if(ca("AsyncQueue",`${e}: ${t}`),Vh(t))return new He(je.UNAVAILABLE,`${e}: ${t}`);throw t}var _c,yc;(yc=_c||(_c={})).ea="default",yc.Cache="cache";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=hy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{rt("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(rt("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new He(je.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=py(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new Map;function my(t,e,n,r){if(e===!0&&r===!0)throw new He(je.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vy(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ha()}function _y(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new He(je.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vy(t);throw new He(je.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new He(je.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new He(je.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}my("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new He(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new He(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new He(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $h{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new He(je.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new He(je.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ry;switch(r.type){case"firstParty":return new ay(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new He(je.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ec.get(n);r&&(rt("ComponentProvider","Removing Datastore"),Ec.delete(n),r.terminate())}(this),Promise.resolve()}}function yy(t,e,n,r={}){var s;const o=(t=_y(t,$h))._getSettings(),a=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&ny("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Fe.MOCK_USER;else{c=wg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new He(je.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Fe(d)}t._authCredentials=new iy(new Hh(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new dy(this,"async_queue_retry"),this.Eu=()=>{const n=qs();n&&rt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=qs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=qs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Xn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Vh(e))throw e;rt("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw ca("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=fa.createAndSchedule(this,e,n,r,o=>this.Vu(o));return this.lu.push(s),s}du(){this.hu&&ha()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class wy extends $h{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new Ey}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||by(this),this._firestoreClient.terminate()}}function Iy(t,e){const n=nh(),r="(default)",s=Zo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=yg("firestore");o&&yy(s,...o)}return s}function by(t){var e,n,r;const s=t._freezeSettings(),o=function(c,h,d,g){return new fy(c,h,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Bh(g.experimentalLongPollingOptions),g.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new gy(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(e,n=!0){(function(s){ei=s})(rr),Qn(new An("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new wy(new sy(r.getProvider("auth-internal")),new cy(r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new He(je.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gi(d.options.projectId,g)}(a,s),a);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ln(mc,"4.7.1",e),ln(mc,"4.7.1","esm2017")})();const Ty={apiKey:"AIzaSyCI9MC9qMkmjuV23QEVVfLmaw6Gywu82sY",authDomain:"vue3-project-mrs.firebaseapp.com",projectId:"vue3-project-mrs",storageBucket:"vue3-project-mrs.appspot.com",messagingSenderId:"587619424480",appId:"1:587619424480:web:9ea9ac223c778164fc5885"};th(Ty);Iy();const wi=Q_();/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const $n=typeof document<"u";function Wh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Wh(t.default)}const ge=Object.assign;function Js(t,e){const n={};for(const r in e){const s=e[r];n[r]=pt(s)?s.map(t):t(s)}return n}const Dr=()=>{},pt=Array.isArray,Kh=/#/g,Ay=/&/g,Cy=/\//g,Ry=/=/g,Py=/\?/g,zh=/\+/g,Oy=/%5B/g,ky=/%5D/g,Gh=/%5E/g,Dy=/%60/g,qh=/%7B/g,Ny=/%7C/g,Jh=/%7D/g,Ly=/%20/g;function da(t){return encodeURI(""+t).replace(Ny,"|").replace(Oy,"[").replace(ky,"]")}function xy(t){return da(t).replace(qh,"{").replace(Jh,"}").replace(Gh,"^")}function bo(t){return da(t).replace(zh,"%2B").replace(Ly,"+").replace(Kh,"%23").replace(Ay,"%26").replace(Dy,"`").replace(qh,"{").replace(Jh,"}").replace(Gh,"^")}function My(t){return bo(t).replace(Ry,"%3D")}function Uy(t){return da(t).replace(Kh,"%23").replace(Py,"%3F")}function Fy(t){return t==null?"":Uy(t).replace(Cy,"%2F")}function $r(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const jy=/\/$/,Hy=t=>t.replace(jy,"");function Xs(t,e,n="/"){let r,s={},o="",a="";const c=e.indexOf("#");let h=e.indexOf("?");return c<h&&c>=0&&(h=-1),h>-1&&(r=e.slice(0,h),o=e.slice(h+1,c>-1?c:e.length),s=t(o)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=Wy(r??e,n),{fullPath:r+(o&&"?")+o+a,path:r,query:s,hash:$r(a)}}function Vy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ic(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function By(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&er(e.matched[r],n.matched[s])&&Xh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function er(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$y(t[n],e[n]))return!1;return!0}function $y(t,e){return pt(t)?bc(t,e):pt(e)?bc(e,t):t===e}function bc(t,e){return pt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Wy(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(a).join("/")}const Xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Wr;(function(t){t.pop="pop",t.push="push"})(Wr||(Wr={}));var Nr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Nr||(Nr={}));function Ky(t){if(!t)if($n){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Hy(t)}const zy=/^[^#]+#/;function Gy(t,e){return t.replace(zy,"#")+e}function qy(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const hs=()=>({left:window.scrollX,top:window.scrollY});function Jy(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=qy(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Tc(t,e){return(history.state?history.state.position-e:-1)+t}const To=new Map;function Xy(t,e){To.set(t,e)}function Yy(t){const e=To.get(t);return To.delete(t),e}let Qy=()=>location.protocol+"//"+location.host;function Yh(t,e){const{pathname:n,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){let c=s.includes(t.slice(o))?t.slice(o).length:1,h=s.slice(c);return h[0]!=="/"&&(h="/"+h),Ic(h,"")}return Ic(n,t)+r+s}function Zy(t,e,n,r){let s=[],o=[],a=null;const c=({state:b})=>{const R=Yh(t,location),D=n.value,M=e.value;let G=0;if(b){if(n.value=R,e.value=b,a&&a===D){a=null;return}G=M?b.position-M.position:0}else r(R);s.forEach(q=>{q(n.value,D,{delta:G,type:Wr.pop,direction:G?G>0?Nr.forward:Nr.back:Nr.unknown})})};function h(){a=n.value}function d(b){s.push(b);const R=()=>{const D=s.indexOf(b);D>-1&&s.splice(D,1)};return o.push(R),R}function g(){const{history:b}=window;b.state&&b.replaceState(ge({},b.state,{scroll:hs()}),"")}function _(){for(const b of o)b();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",g,{passive:!0}),{pauseListeners:h,listen:d,destroy:_}}function Sc(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?hs():null}}function eE(t){const{history:e,location:n}=window,r={value:Yh(t,n)},s={value:e.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(h,d,g){const _=t.indexOf("#"),b=_>-1?(n.host&&document.querySelector("base")?t:t.slice(_))+h:Qy()+t+h;try{e[g?"replaceState":"pushState"](d,"",b),s.value=d}catch(R){console.error(R),n[g?"replace":"assign"](b)}}function a(h,d){const g=ge({},e.state,Sc(s.value.back,h,s.value.forward,!0),d,{position:s.value.position});o(h,g,!0),r.value=h}function c(h,d){const g=ge({},s.value,e.state,{forward:h,scroll:hs()});o(g.current,g,!0);const _=ge({},Sc(r.value,h,null),{position:g.position+1},d);o(h,_,!1),r.value=h}return{location:r,state:s,push:c,replace:a}}function tE(t){t=Ky(t);const e=eE(t),n=Zy(t,e.state,e.location,e.replace);function r(o,a=!0){a||n.pauseListeners(),history.go(o)}const s=ge({location:"",base:t,go:r,createHref:Gy.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function nE(t){return typeof t=="string"||t&&typeof t=="object"}function Qh(t){return typeof t=="string"||typeof t=="symbol"}const Zh=Symbol("");var Ac;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ac||(Ac={}));function tr(t,e){return ge(new Error,{type:t,[Zh]:!0},e)}function Pt(t,e){return t instanceof Error&&Zh in t&&(e==null||!!(t.type&e))}const Cc="[^/]+?",rE={sensitive:!1,strict:!1,start:!0,end:!0},iE=/[.+*?^${}()[\]/\\]/g;function sE(t,e){const n=ge({},rE,e),r=[];let s=n.start?"^":"";const o=[];for(const d of t){const g=d.length?[]:[90];n.strict&&!d.length&&(s+="/");for(let _=0;_<d.length;_++){const b=d[_];let R=40+(n.sensitive?.25:0);if(b.type===0)_||(s+="/"),s+=b.value.replace(iE,"\\$&"),R+=40;else if(b.type===1){const{value:D,repeatable:M,optional:G,regexp:q}=b;o.push({name:D,repeatable:M,optional:G});const W=q||Cc;if(W!==Cc){R+=10;try{new RegExp(`(${W})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${D}" (${W}): `+B.message)}}let K=M?`((?:${W})(?:/(?:${W}))*)`:`(${W})`;_||(K=G&&d.length<2?`(?:/${K})`:"/"+K),G&&(K+="?"),s+=K,R+=20,G&&(R+=-8),M&&(R+=-20),W===".*"&&(R+=-50)}g.push(R)}r.push(g)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(d){const g=d.match(a),_={};if(!g)return null;for(let b=1;b<g.length;b++){const R=g[b]||"",D=o[b-1];_[D.name]=R&&D.repeatable?R.split("/"):R}return _}function h(d){let g="",_=!1;for(const b of t){(!_||!g.endsWith("/"))&&(g+="/"),_=!1;for(const R of b)if(R.type===0)g+=R.value;else if(R.type===1){const{value:D,repeatable:M,optional:G}=R,q=D in d?d[D]:"";if(pt(q)&&!M)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const W=pt(q)?q.join("/"):q;if(!W)if(G)b.length<2&&(g.endsWith("/")?g=g.slice(0,-1):_=!0);else throw new Error(`Missing required param "${D}"`);g+=W}}return g||"/"}return{re:a,score:r,keys:o,parse:c,stringify:h}}function oE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ef(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const o=oE(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(Rc(r))return 1;if(Rc(s))return-1}return s.length-r.length}function Rc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const aE={type:0,value:""},lE=/[a-zA-Z0-9_]/;function cE(t){if(!t)return[[]];if(t==="/")return[[aE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(R){throw new Error(`ERR (${n})/"${d}": ${R}`)}let n=0,r=n;const s=[];let o;function a(){o&&s.push(o),o=[]}let c=0,h,d="",g="";function _(){d&&(n===0?o.push({type:0,value:d}):n===1||n===2||n===3?(o.length>1&&(h==="*"||h==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:d,regexp:g,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):e("Invalid state to consume buffer"),d="")}function b(){d+=h}for(;c<t.length;){if(h=t[c++],h==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:h==="/"?(d&&_(),a()):h===":"?(_(),n=1):b();break;case 4:b(),n=r;break;case 1:h==="("?n=2:lE.test(h)?b():(_(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&c--);break;case 2:h===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+h:n=3:g+=h;break;case 3:_(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&c--,g="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${d}"`),_(),a(),s}function uE(t,e,n){const r=sE(cE(t.path),n),s=ge(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function hE(t,e){const n=[],r=new Map;e=Dc({strict:!1,end:!0,sensitive:!1},e);function s(_){return r.get(_)}function o(_,b,R){const D=!R,M=Oc(_);M.aliasOf=R&&R.record;const G=Dc(e,_),q=[M];if("alias"in _){const B=typeof _.alias=="string"?[_.alias]:_.alias;for(const ne of B)q.push(Oc(ge({},M,{components:R?R.record.components:M.components,path:ne,aliasOf:R?R.record:M})))}let W,K;for(const B of q){const{path:ne}=B;if(b&&ne[0]!=="/"){const le=b.record.path,I=le[le.length-1]==="/"?"":"/";B.path=b.record.path+(ne&&I+ne)}if(W=uE(B,b,G),R?R.alias.push(W):(K=K||W,K!==W&&K.alias.push(W),D&&_.name&&!kc(W)&&a(_.name)),tf(W)&&h(W),M.children){const le=M.children;for(let I=0;I<le.length;I++)o(le[I],W,R&&R.children[I])}R=R||W}return K?()=>{a(K)}:Dr}function a(_){if(Qh(_)){const b=r.get(_);b&&(r.delete(_),n.splice(n.indexOf(b),1),b.children.forEach(a),b.alias.forEach(a))}else{const b=n.indexOf(_);b>-1&&(n.splice(b,1),_.record.name&&r.delete(_.record.name),_.children.forEach(a),_.alias.forEach(a))}}function c(){return n}function h(_){const b=pE(_,n);n.splice(b,0,_),_.record.name&&!kc(_)&&r.set(_.record.name,_)}function d(_,b){let R,D={},M,G;if("name"in _&&_.name){if(R=r.get(_.name),!R)throw tr(1,{location:_});G=R.record.name,D=ge(Pc(b.params,R.keys.filter(K=>!K.optional).concat(R.parent?R.parent.keys.filter(K=>K.optional):[]).map(K=>K.name)),_.params&&Pc(_.params,R.keys.map(K=>K.name))),M=R.stringify(D)}else if(_.path!=null)M=_.path,R=n.find(K=>K.re.test(M)),R&&(D=R.parse(M),G=R.record.name);else{if(R=b.name?r.get(b.name):n.find(K=>K.re.test(b.path)),!R)throw tr(1,{location:_,currentLocation:b});G=R.record.name,D=ge({},b.params,_.params),M=R.stringify(D)}const q=[];let W=R;for(;W;)q.unshift(W.record),W=W.parent;return{name:G,path:M,params:D,matched:q,meta:dE(q)}}t.forEach(_=>o(_));function g(){n.length=0,r.clear()}return{addRoute:o,resolve:d,removeRoute:a,clearRoutes:g,getRoutes:c,getRecordMatcher:s}}function Pc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Oc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:fE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function fE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function kc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dE(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Dc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function pE(t,e){let n=0,r=e.length;for(;n!==r;){const o=n+r>>1;ef(t,e[o])<0?r=o:n=o+1}const s=gE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function gE(t){let e=t;for(;e=e.parent;)if(tf(e)&&ef(t,e)===0)return e}function tf({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function mE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(zh," "),a=o.indexOf("="),c=$r(a<0?o:o.slice(0,a)),h=a<0?null:$r(o.slice(a+1));if(c in e){let d=e[c];pt(d)||(d=e[c]=[d]),d.push(h)}else e[c]=h}return e}function Nc(t){let e="";for(let n in t){const r=t[n];if(n=My(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(pt(r)?r.map(o=>o&&bo(o)):[r&&bo(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function vE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=pt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const _E=Symbol(""),Lc=Symbol(""),pa=Symbol(""),nf=Symbol(""),So=Symbol("");function yr(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function en(t,e,n,r,s,o=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,h)=>{const d=b=>{b===!1?h(tr(4,{from:n,to:e})):b instanceof Error?h(b):nE(b)?h(tr(2,{from:e,to:b})):(a&&r.enterCallbacks[s]===a&&typeof b=="function"&&a.push(b),c())},g=o(()=>t.call(r&&r.instances[s],e,n,d));let _=Promise.resolve(g);t.length<3&&(_=_.then(d)),_.catch(b=>h(b))})}function Ys(t,e,n,r,s=o=>o()){const o=[];for(const a of t)for(const c in a.components){let h=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(Wh(h)){const g=(h.__vccOpts||h)[e];g&&o.push(en(g,n,r,a,c,s))}else{let d=h();o.push(()=>d.then(g=>{if(!g)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const _=Sy(g)?g.default:g;a.mods[c]=g,a.components[c]=_;const R=(_.__vccOpts||_)[e];return R&&en(R,n,r,a,c,s)()}))}}return o}function xc(t){const e=It(pa),n=It(nf),r=at(()=>{const h=wt(t.to);return e.resolve(h)}),s=at(()=>{const{matched:h}=r.value,{length:d}=h,g=h[d-1],_=n.matched;if(!g||!_.length)return-1;const b=_.findIndex(er.bind(null,g));if(b>-1)return b;const R=Mc(h[d-2]);return d>1&&Mc(g)===R&&_[_.length-1].path!==R?_.findIndex(er.bind(null,h[d-2])):b}),o=at(()=>s.value>-1&&IE(n.params,r.value.params)),a=at(()=>s.value>-1&&s.value===n.matched.length-1&&Xh(n.params,r.value.params));function c(h={}){return wE(h)?e[wt(t.replace)?"replace":"push"](wt(t.to)).catch(Dr):Promise.resolve()}return{route:r,href:at(()=>r.value.href),isActive:o,isExactActive:a,navigate:c}}const yE=pu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xc,setup(t,{slots:e}){const n=Kr(xc(t)),{options:r}=It(pa),s=at(()=>({[Uc(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Uc(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:Hu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),EE=yE;function wE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function IE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!pt(s)||s.length!==r.length||r.some((o,a)=>o!==s[a]))return!1}return!0}function Mc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Uc=(t,e,n)=>t??e??n,bE=pu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=It(So),s=at(()=>t.route||r.value),o=It(Lc,0),a=at(()=>{let d=wt(o);const{matched:g}=s.value;let _;for(;(_=g[d])&&!_.components;)d++;return d}),c=at(()=>s.value.matched[a.value]);Ti(Lc,at(()=>a.value+1)),Ti(_E,c),Ti(So,s);const h=Sn();return Rr(()=>[h.value,c.value,t.name],([d,g,_],[b,R,D])=>{g&&(g.instances[_]=d,R&&R!==g&&d&&d===b&&(g.leaveGuards.size||(g.leaveGuards=R.leaveGuards),g.updateGuards.size||(g.updateGuards=R.updateGuards))),d&&g&&(!R||!er(g,R)||!b)&&(g.enterCallbacks[_]||[]).forEach(M=>M(d))},{flush:"post"}),()=>{const d=s.value,g=t.name,_=c.value,b=_&&_.components[g];if(!b)return Fc(n.default,{Component:b,route:d});const R=_.props[g],D=R?R===!0?d.params:typeof R=="function"?R(d):R:null,G=Hu(b,ge({},D,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(_.instances[g]=null)},ref:h}));return Fc(n.default,{Component:G,route:d})||G}}});function Fc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const TE=bE;function SE(t){const e=hE(t.routes,t),n=t.parseQuery||mE,r=t.stringifyQuery||Nc,s=t.history,o=yr(),a=yr(),c=yr(),h=hd(Xt);let d=Xt;$n&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Js.bind(null,k=>""+k),_=Js.bind(null,Fy),b=Js.bind(null,$r);function R(k,z){let V,J;return Qh(k)?(V=e.getRecordMatcher(k),J=z):J=k,e.addRoute(J,V)}function D(k){const z=e.getRecordMatcher(k);z&&e.removeRoute(z)}function M(){return e.getRoutes().map(k=>k.record)}function G(k){return!!e.getRecordMatcher(k)}function q(k,z){if(z=ge({},z||h.value),typeof k=="string"){const y=Xs(n,k,z.path),C=e.resolve({path:y.path},z),N=s.createHref(y.fullPath);return ge(y,C,{params:b(C.params),hash:$r(y.hash),redirectedFrom:void 0,href:N})}let V;if(k.path!=null)V=ge({},k,{path:Xs(n,k.path,z.path).path});else{const y=ge({},k.params);for(const C in y)y[C]==null&&delete y[C];V=ge({},k,{params:_(y)}),z.params=_(z.params)}const J=e.resolve(V,z),oe=k.hash||"";J.params=g(b(J.params));const me=Vy(r,ge({},k,{hash:xy(oe),path:J.path})),m=s.createHref(me);return ge({fullPath:me,hash:oe,query:r===Nc?vE(k.query):k.query||{}},J,{redirectedFrom:void 0,href:m})}function W(k){return typeof k=="string"?Xs(n,k,h.value.path):ge({},k)}function K(k,z){if(d!==k)return tr(8,{from:z,to:k})}function B(k){return I(k)}function ne(k){return B(ge(W(k),{replace:!0}))}function le(k){const z=k.matched[k.matched.length-1];if(z&&z.redirect){const{redirect:V}=z;let J=typeof V=="function"?V(k):V;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=W(J):{path:J},J.params={}),ge({query:k.query,hash:k.hash,params:J.path!=null?{}:k.params},J)}}function I(k,z){const V=d=q(k),J=h.value,oe=k.state,me=k.force,m=k.replace===!0,y=le(V);if(y)return I(ge(W(y),{state:typeof y=="object"?ge({},oe,y.state):oe,force:me,replace:m}),z||V);const C=V;C.redirectedFrom=z;let N;return!me&&By(r,J,V)&&(N=tr(16,{to:C,from:J}),it(J,J,!0,!1)),(N?Promise.resolve(N):w(C,J)).catch(O=>Pt(O)?Pt(O,2)?O:lt(O):se(O,C,J)).then(O=>{if(O){if(Pt(O,2))return I(ge({replace:m},W(O.to),{state:typeof O.to=="object"?ge({},oe,O.to.state):oe,force:me}),z||C)}else O=S(C,J,!0,m,oe);return T(C,J,O),O})}function p(k,z){const V=K(k,z);return V?Promise.reject(V):Promise.resolve()}function v(k){const z=$t.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(k):k()}function w(k,z){let V;const[J,oe,me]=AE(k,z);V=Ys(J.reverse(),"beforeRouteLeave",k,z);for(const y of J)y.leaveGuards.forEach(C=>{V.push(en(C,k,z))});const m=p.bind(null,k,z);return V.push(m),Qe(V).then(()=>{V=[];for(const y of o.list())V.push(en(y,k,z));return V.push(m),Qe(V)}).then(()=>{V=Ys(oe,"beforeRouteUpdate",k,z);for(const y of oe)y.updateGuards.forEach(C=>{V.push(en(C,k,z))});return V.push(m),Qe(V)}).then(()=>{V=[];for(const y of me)if(y.beforeEnter)if(pt(y.beforeEnter))for(const C of y.beforeEnter)V.push(en(C,k,z));else V.push(en(y.beforeEnter,k,z));return V.push(m),Qe(V)}).then(()=>(k.matched.forEach(y=>y.enterCallbacks={}),V=Ys(me,"beforeRouteEnter",k,z,v),V.push(m),Qe(V))).then(()=>{V=[];for(const y of a.list())V.push(en(y,k,z));return V.push(m),Qe(V)}).catch(y=>Pt(y,8)?y:Promise.reject(y))}function T(k,z,V){c.list().forEach(J=>v(()=>J(k,z,V)))}function S(k,z,V,J,oe){const me=K(k,z);if(me)return me;const m=z===Xt,y=$n?history.state:{};V&&(J||m?s.replace(k.fullPath,ge({scroll:m&&y&&y.scroll},oe)):s.push(k.fullPath,oe)),h.value=k,it(k,z,V,m),lt()}let E;function Pe(){E||(E=s.listen((k,z,V)=>{if(!gt.listening)return;const J=q(k),oe=le(J);if(oe){I(ge(oe,{replace:!0}),J).catch(Dr);return}d=J;const me=h.value;$n&&Xy(Tc(me.fullPath,V.delta),hs()),w(J,me).catch(m=>Pt(m,12)?m:Pt(m,2)?(I(m.to,J).then(y=>{Pt(y,20)&&!V.delta&&V.type===Wr.pop&&s.go(-1,!1)}).catch(Dr),Promise.reject()):(V.delta&&s.go(-V.delta,!1),se(m,J,me))).then(m=>{m=m||S(J,me,!1),m&&(V.delta&&!Pt(m,8)?s.go(-V.delta,!1):V.type===Wr.pop&&Pt(m,20)&&s.go(-1,!1)),T(J,me,m)}).catch(Dr)}))}let Ye=yr(),Ee=yr(),te;function se(k,z,V){lt(k);const J=Ee.list();return J.length?J.forEach(oe=>oe(k,z,V)):console.error(k),Promise.reject(k)}function et(){return te&&h.value!==Xt?Promise.resolve():new Promise((k,z)=>{Ye.add([k,z])})}function lt(k){return te||(te=!k,Pe(),Ye.list().forEach(([z,V])=>k?V(k):z()),Ye.reset()),k}function it(k,z,V,J){const{scrollBehavior:oe}=t;if(!$n||!oe)return Promise.resolve();const me=!V&&Yy(Tc(k.fullPath,0))||(J||!V)&&history.state&&history.state.scroll||null;return Wo().then(()=>oe(k,z,me)).then(m=>m&&Jy(m)).catch(m=>se(m,k,z))}const Ie=k=>s.go(k);let be;const $t=new Set,gt={currentRoute:h,listening:!0,addRoute:R,removeRoute:D,clearRoutes:e.clearRoutes,hasRoute:G,getRoutes:M,resolve:q,options:t,push:B,replace:ne,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:o.add,beforeResolve:a.add,afterEach:c.add,onError:Ee.add,isReady:et,install(k){const z=this;k.component("RouterLink",EE),k.component("RouterView",TE),k.config.globalProperties.$router=z,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>wt(h)}),$n&&!be&&h.value===Xt&&(be=!0,B(s.location).catch(oe=>{}));const V={};for(const oe in Xt)Object.defineProperty(V,oe,{get:()=>h.value[oe],enumerable:!0});k.provide(pa,z),k.provide(nf,su(V)),k.provide(So,h);const J=k.unmount;$t.add(k),k.unmount=function(){$t.delete(k),$t.size<1&&(d=Xt,E&&E(),E=null,h.value=Xt,be=!1,te=!1),J()}}};function Qe(k){return k.reduce((z,V)=>z.then(()=>v(V)),Promise.resolve())}return gt}function AE(t,e){const n=[],r=[],s=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const c=e.matched[a];c&&(t.matched.find(d=>er(d,c))?r.push(c):n.push(c));const h=t.matched[a];h&&(e.matched.find(d=>er(d,h))||s.push(h))}return[n,r,s]}const CE=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},RE={};function PE(t,e){return rs(),is("div",null,e[0]||(e[0]=[qe("h1",null,"Home ",-1)]))}const OE=CE(RE,[["render",PE]]),kE=["disabled"],DE={__name:"Login",setup(t){const e=fs(),n=Sn(""),r=Sn(""),s=async()=>{if(!n.value||r.value.length<6)return alert("Campos vacios");await e.loginUser(n.value,r.value)};return(o,a)=>(rs(),is("div",null,[a[2]||(a[2]=qe("h1",null,"Login",-1)),qe("form",{onSubmit:Bu(s,["prevent"])},[xi(qe("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c)},null,512),[[Fi,n.value,void 0,{trim:!0}]]),xi(qe("input",{type:"password",name:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c)},null,512),[[Fi,r.value,void 0,{trim:!0}]]),qe("button",{type:"submit",disabled:wt(e).loadingUser},"Acceso",8,kE)],32)]))}},NE=["disabled"],LE={__name:"Register",setup(t){const e=fs(),n=Sn(""),r=Sn(""),s=async()=>{if(!n.value||r.value.length<6)return alert("Campos vacios");await e.registerUser(n.value,r.value)};return(o,a)=>(rs(),is("div",null,[a[2]||(a[2]=qe("h1",null,"Register",-1)),qe("form",{onSubmit:Bu(s,["prevent"])},[xi(qe("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c)},null,512),[[Fi,n.value,void 0,{trim:!0}]]),xi(qe("input",{type:"password",name:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c)},null,512),[[Fi,r.value,void 0,{trim:!0}]]),qe("button",{type:"submit",disabled:wt(e).loadingUser},"Crear usuario",8,NE)],32)]))}},xE=async(t,e,n)=>{const r=fs();r.loading=!0,await r.currentUser()?n():n("/login"),r.loading=!1},ME=[{path:"/",component:OE,beforeEnter:xE},{path:"/login",component:DE},{path:"/register",component:LE}],ki=SE({routes:ME,history:tE()}),fs=hg("userStore",{state:()=>({userData:null,loadingUser:!1}),actions:{async registerUser(t,e){this.loadingUser=!0;try{const{user:n}=await Mv(wi,t,e);this.userData={email:n.email,uid:n.uid},ki.push("/")}catch(n){console.log(n)}finally{this.loadingUser=!1}},async loginUser(t,e){this.loadingUser=!0;try{const{user:n}=await Uv(wi,t,e);this.userData={email:n.email,uid:n.uid},ki.push("/")}catch{console.log(err)}finally{this.loadingUser=!1}},async logOutUser(){try{await Vv(wi),this.userData=null,ki.push("/login")}catch{console.log(err)}},currentUser(){return new Promise((t,e)=>{Hv(wi,r=>{r&&(this.userData={email:r.email,uid:r.uid}),t(r)},r=>e(r))()})}}}),UE={__name:"App",setup(t){const e=fs();return(n,r)=>{const s=fl("router-link"),o=fl("router-view");return rs(),is("div",null,[qe("nav",null,[Je(s,{to:"/"},{default:bi(()=>r[1]||(r[1]=[Vn("Home")])),_:1}),r[4]||(r[4]=Vn(" | ")),Je(s,{to:"/login"},{default:bi(()=>r[2]||(r[2]=[Vn("Login")])),_:1}),r[5]||(r[5]=Vn(" | ")),Je(s,{to:"/register"},{default:bi(()=>r[3]||(r[3]=[Vn("Register")])),_:1}),qe("button",{onClick:r[0]||(r[0]=(...a)=>wt(e).logOutUser&&wt(e).logOutUser(...a))},"Logout")]),Je(o)])}}};tg(UE).use(ki).use(sg()).mount("#app");
