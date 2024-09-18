(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function To(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ye={},Wn=[],wt=()=>{},Of=()=>!1,zi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),So=t=>t.startsWith("onUpdate:"),Ne=Object.assign,Ao=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kf=Object.prototype.hasOwnProperty,de=(t,e)=>kf.call(t,e),re=Array.isArray,br=t=>Gi(t)==="[object Map]",Df=t=>Gi(t)==="[object Set]",ie=t=>typeof t=="function",Re=t=>typeof t=="string",nr=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",Uc=t=>(Ae(t)||ie(t))&&ie(t.then)&&ie(t.catch),Nf=Object.prototype.toString,Gi=t=>Nf.call(t),Lf=t=>Gi(t).slice(8,-1),xf=t=>Gi(t)==="[object Object]",Co=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Tr=To(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Mf=/-(\w)/g,dt=qi(t=>t.replace(Mf,(e,n)=>n?n.toUpperCase():"")),Uf=/\B([A-Z])/g,Cn=qi(t=>t.replace(Uf,"-$1").toLowerCase()),Ji=qi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cs=qi(t=>t?`on${Ji(t)}`:""),an=(t,e)=>!Object.is(t,e),wi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Fc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Xs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let tl;const jc=()=>tl||(tl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ro(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Re(r)?Vf(r):Ro(r);if(s)for(const o in s)e[o]=s[o]}return e}else if(Re(t)||Ae(t))return t}const Ff=/;(?![^(]*\))/g,jf=/:([^]+)/,Hf=/\/\*[^]*?\*\//g;function Vf(t){const e={};return t.replace(Hf,"").split(Ff).forEach(n=>{if(n){const r=n.split(jf);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Po(t){let e="";if(Re(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Po(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$f=To(Bf);function Hc(t){return!!t||t===""}/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ke;class Vc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ke,!e&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ke;try{return Ke=this,e()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Bc(t){return new Vc(t)}function $c(){return Ke}function Wf(t,e=!1){Ke&&Ke.cleanups.push(t)}let _e;const Rs=new WeakSet;class Wc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Ke&&Ke.active&&Ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Rs.has(this)&&(Rs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=Sr,Sr=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nl(this),zc(this);const e=_e,n=ut;_e=this,ut=!0;try{return this.fn()}finally{Gc(this),_e=e,ut=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Do(e);this.deps=this.depsTail=void 0,nl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Rs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ys(this)&&this.run()}get dirty(){return Ys(this)}}let Kc=0,Sr;function Oo(){Kc++}function ko(){if(--Kc>0)return;let t;for(;Sr;){let e=Sr;for(Sr=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function zc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gc(t){let e,n=t.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),Do(r),Kf(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function Ys(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&qc(e.dep.computed)||e.dep.version!==e.version)return!0;return!!t._dirty}function qc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Lr))return;t.globalVersion=Lr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!Ys(t)){t.flags&=-3;return}const n=_e,r=ut;_e=t,ut=!0;try{zc(t);const s=t.fn(t._value);(e.version===0||an(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{_e=n,ut=r,Gc(t),t.flags&=-3}}function Do(t){const{dep:e,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)Do(s)}}function Kf(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ut=!0;const Jc=[];function ln(){Jc.push(ut),ut=!1}function cn(){const t=Jc.pop();ut=t===void 0?!0:t}function nl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=_e;_e=void 0;try{e()}finally{_e=n}}}let Lr=0;class No{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!_e||!ut||_e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==_e)n=this.activeLink={dep:this,sub:_e,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},_e.deps?(n.prevDep=_e.depsTail,_e.depsTail.nextDep=n,_e.depsTail=n):_e.deps=_e.depsTail=n,_e.flags&4&&Xc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=_e.depsTail,n.nextDep=void 0,_e.depsTail.nextDep=n,_e.depsTail=n,_e.deps===n&&(_e.deps=r)}return n}trigger(e){this.version++,Lr++,this.notify(e)}notify(e){Oo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{ko()}}}function Xc(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Xc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const Oi=new WeakMap,yn=Symbol(""),Qs=Symbol(""),xr=Symbol("");function Ve(t,e,n){if(ut&&_e){let r=Oi.get(t);r||Oi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=new No),s.track()}}function xt(t,e,n,r,s,o){const a=Oi.get(t);if(!a){Lr++;return}const c=h=>{h&&h.trigger()};if(Oo(),e==="clear")a.forEach(c);else{const h=re(t),d=h&&Co(n);if(h&&n==="length"){const g=Number(r);a.forEach((_,b)=>{(b==="length"||b===xr||!nr(b)&&b>=g)&&c(_)})}else switch(n!==void 0&&c(a.get(n)),d&&c(a.get(xr)),e){case"add":h?d&&c(a.get("length")):(c(a.get(yn)),br(t)&&c(a.get(Qs)));break;case"delete":h||(c(a.get(yn)),br(t)&&c(a.get(Qs)));break;case"set":br(t)&&c(a.get(yn));break}}ko()}function zf(t,e){var n;return(n=Oi.get(t))==null?void 0:n.get(e)}function Un(t){const e=he(t);return e===t?e:(Ve(e,"iterate",xr),ht(t)?e:e.map(ze))}function Lo(t){return Ve(t=he(t),"iterate",xr),t}const Gf={__proto__:null,[Symbol.iterator](){return Ps(this,Symbol.iterator,ze)},concat(...t){return Un(this).concat(...t.map(e=>re(e)?Un(e):e))},entries(){return Ps(this,"entries",t=>(t[1]=ze(t[1]),t))},every(t,e){return Ct(this,"every",t,e,void 0,arguments)},filter(t,e){return Ct(this,"filter",t,e,n=>n.map(ze),arguments)},find(t,e){return Ct(this,"find",t,e,ze,arguments)},findIndex(t,e){return Ct(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ct(this,"findLast",t,e,ze,arguments)},findLastIndex(t,e){return Ct(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ct(this,"forEach",t,e,void 0,arguments)},includes(...t){return Os(this,"includes",t)},indexOf(...t){return Os(this,"indexOf",t)},join(t){return Un(this).join(t)},lastIndexOf(...t){return Os(this,"lastIndexOf",t)},map(t,e){return Ct(this,"map",t,e,void 0,arguments)},pop(){return vr(this,"pop")},push(...t){return vr(this,"push",t)},reduce(t,...e){return rl(this,"reduce",t,e)},reduceRight(t,...e){return rl(this,"reduceRight",t,e)},shift(){return vr(this,"shift")},some(t,e){return Ct(this,"some",t,e,void 0,arguments)},splice(...t){return vr(this,"splice",t)},toReversed(){return Un(this).toReversed()},toSorted(t){return Un(this).toSorted(t)},toSpliced(...t){return Un(this).toSpliced(...t)},unshift(...t){return vr(this,"unshift",t)},values(){return Ps(this,"values",ze)}};function Ps(t,e,n){const r=Lo(t),s=r[e]();return r!==t&&!ht(t)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=n(o.value)),o}),s}const qf=Array.prototype;function Ct(t,e,n,r,s,o){const a=Lo(t),c=a!==t&&!ht(t),h=a[e];if(h!==qf[e]){const _=h.apply(t,o);return c?ze(_):_}let d=n;a!==t&&(c?d=function(_,b){return n.call(this,ze(_),b,t)}:n.length>2&&(d=function(_,b){return n.call(this,_,b,t)}));const g=h.call(a,d,r);return c&&s?s(g):g}function rl(t,e,n,r){const s=Lo(t);let o=n;return s!==t&&(ht(t)?n.length>3&&(o=function(a,c,h){return n.call(this,a,c,h,t)}):o=function(a,c,h){return n.call(this,a,ze(c),h,t)}),s[e](o,...r)}function Os(t,e,n){const r=he(t);Ve(r,"iterate",xr);const s=r[e](...n);return(s===-1||s===!1)&&Fo(n[0])?(n[0]=he(n[0]),r[e](...n)):s}function vr(t,e,n=[]){ln(),Oo();const r=he(t)[e].apply(t,n);return ko(),cn(),r}const Jf=To("__proto__,__v_isRef,__isVue"),Yc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(nr));function Xf(t){nr(t)||(t=String(t));const e=he(this);return Ve(e,"has",t),e.hasOwnProperty(t)}class Qc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?cd:nu:o?tu:eu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let h;if(a&&(h=Gf[n]))return h;if(n==="hasOwnProperty")return Xf}const c=Reflect.get(e,n,Se(e)?e:r);return(nr(n)?Yc.has(n):Jf(n))||(s||Ve(e,"get",n),o)?c:Se(c)?a&&Co(n)?c:c.value:Ae(c)?s?iu(c):Kr(c):c}}class Zc extends Qc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let o=e[n];if(!this._isShallow){const h=In(o);if(!ht(r)&&!In(r)&&(o=he(o),r=he(r)),!re(e)&&Se(o)&&!Se(r))return h?!1:(o.value=r,!0)}const a=re(e)&&Co(n)?Number(n)<e.length:de(e,n),c=Reflect.set(e,n,r,Se(e)?e:s);return e===he(s)&&(a?an(r,o)&&xt(e,"set",n,r):xt(e,"add",n,r)),c}deleteProperty(e,n){const r=de(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&xt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!nr(n)||!Yc.has(n))&&Ve(e,"has",n),r}ownKeys(e){return Ve(e,"iterate",re(e)?"length":yn),Reflect.ownKeys(e)}}class Yf extends Qc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Qf=new Zc,Zf=new Yf,ed=new Zc(!0);const xo=t=>t,Xi=t=>Reflect.getPrototypeOf(t);function di(t,e,n=!1,r=!1){t=t.__v_raw;const s=he(t),o=he(e);n||(an(e,o)&&Ve(s,"get",e),Ve(s,"get",o));const{has:a}=Xi(s),c=r?xo:n?Ho:ze;if(a.call(s,e))return c(t.get(e));if(a.call(s,o))return c(t.get(o));t!==s&&t.get(e)}function pi(t,e=!1){const n=this.__v_raw,r=he(n),s=he(t);return e||(an(t,s)&&Ve(r,"has",t),Ve(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function gi(t,e=!1){return t=t.__v_raw,!e&&Ve(he(t),"iterate",yn),Reflect.get(t,"size",t)}function il(t,e=!1){!e&&!ht(t)&&!In(t)&&(t=he(t));const n=he(this);return Xi(n).has.call(n,t)||(n.add(t),xt(n,"add",t,t)),this}function sl(t,e,n=!1){!n&&!ht(e)&&!In(e)&&(e=he(e));const r=he(this),{has:s,get:o}=Xi(r);let a=s.call(r,t);a||(t=he(t),a=s.call(r,t));const c=o.call(r,t);return r.set(t,e),a?an(e,c)&&xt(r,"set",t,e):xt(r,"add",t,e),this}function ol(t){const e=he(this),{has:n,get:r}=Xi(e);let s=n.call(e,t);s||(t=he(t),s=n.call(e,t)),r&&r.call(e,t);const o=e.delete(t);return s&&xt(e,"delete",t,void 0),o}function al(){const t=he(this),e=t.size!==0,n=t.clear();return e&&xt(t,"clear",void 0,void 0),n}function mi(t,e){return function(r,s){const o=this,a=o.__v_raw,c=he(a),h=e?xo:t?Ho:ze;return!t&&Ve(c,"iterate",yn),a.forEach((d,g)=>r.call(s,h(d),h(g),o))}}function vi(t,e,n){return function(...r){const s=this.__v_raw,o=he(s),a=br(o),c=t==="entries"||t===Symbol.iterator&&a,h=t==="keys"&&a,d=s[t](...r),g=n?xo:e?Ho:ze;return!e&&Ve(o,"iterate",h?Qs:yn),{next(){const{value:_,done:b}=d.next();return b?{value:_,done:b}:{value:c?[g(_[0]),g(_[1])]:g(_),done:b}},[Symbol.iterator](){return this}}}}function zt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function td(){const t={get(o){return di(this,o)},get size(){return gi(this)},has:pi,add:il,set:sl,delete:ol,clear:al,forEach:mi(!1,!1)},e={get(o){return di(this,o,!1,!0)},get size(){return gi(this)},has:pi,add(o){return il.call(this,o,!0)},set(o,a){return sl.call(this,o,a,!0)},delete:ol,clear:al,forEach:mi(!1,!0)},n={get(o){return di(this,o,!0)},get size(){return gi(this,!0)},has(o){return pi.call(this,o,!0)},add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear"),forEach:mi(!0,!1)},r={get(o){return di(this,o,!0,!0)},get size(){return gi(this,!0)},has(o){return pi.call(this,o,!0)},add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear"),forEach:mi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=vi(o,!1,!1),n[o]=vi(o,!0,!1),e[o]=vi(o,!1,!0),r[o]=vi(o,!0,!0)}),[t,n,e,r]}const[nd,rd,id,sd]=td();function Mo(t,e){const n=e?t?sd:id:t?rd:nd;return(r,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(de(n,s)&&s in r?n:r,s,o)}const od={get:Mo(!1,!1)},ad={get:Mo(!1,!0)},ld={get:Mo(!0,!1)};const eu=new WeakMap,tu=new WeakMap,nu=new WeakMap,cd=new WeakMap;function ud(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hd(t){return t.__v_skip||!Object.isExtensible(t)?0:ud(Lf(t))}function Kr(t){return In(t)?t:Uo(t,!1,Qf,od,eu)}function ru(t){return Uo(t,!1,ed,ad,tu)}function iu(t){return Uo(t,!0,Zf,ld,nu)}function Uo(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=s.get(t);if(o)return o;const a=hd(t);if(a===0)return t;const c=new Proxy(t,a===2?r:n);return s.set(t,c),c}function En(t){return In(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function In(t){return!!(t&&t.__v_isReadonly)}function ht(t){return!!(t&&t.__v_isShallow)}function Fo(t){return t?!!t.__v_raw:!1}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function jo(t){return!de(t,"__v_skip")&&Object.isExtensible(t)&&Fc(t,"__v_skip",!0),t}const ze=t=>Ae(t)?Kr(t):t,Ho=t=>Ae(t)?iu(t):t;function Se(t){return t?t.__v_isRef===!0:!1}function bn(t){return su(t,!1)}function fd(t){return su(t,!0)}function su(t,e){return Se(t)?t:new dd(t,e)}class dd{constructor(e,n){this.dep=new No,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:he(e),this._value=n?e:ze(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ht(e)||In(e);e=r?e:he(e),an(e,n)&&(this._rawValue=e,this._value=r?e:ze(e),this.dep.trigger())}}function Kn(t){return Se(t)?t.value:t}const pd={get:(t,e,n)=>e==="__v_raw"?t:Kn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ou(t){return En(t)?t:new Proxy(t,pd)}function gd(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=vd(t,n);return e}class md{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return zf(he(this._object),this._key)}}function vd(t,e,n){const r=t[e];return Se(r)?r:new md(t,e,n)}class _d{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new No(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Lr-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){this.flags|=16,_e!==this&&this.dep.notify()}get value(){const e=this.dep.track();return qc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function yd(t,e,n=!1){let r,s;return ie(t)?r=t:(r=t.get,s=t.set),new _d(r,s,n)}const _i={},ki=new WeakMap;let vn;function Ed(t,e=!1,n=vn){if(n){let r=ki.get(n);r||ki.set(n,r=[]),r.push(t)}}function wd(t,e,n=ye){const{immediate:r,deep:s,once:o,scheduler:a,augmentJob:c,call:h}=n,d=B=>s?B:ht(B)||s===!1||s===0?kt(B,1):kt(B);let g,_,b,R,D=!1,M=!1;if(Se(t)?(_=()=>t.value,D=ht(t)):En(t)?(_=()=>d(t),D=!0):re(t)?(M=!0,D=t.some(B=>En(B)||ht(B)),_=()=>t.map(B=>{if(Se(B))return B.value;if(En(B))return d(B);if(ie(B))return h?h(B,2):B()})):ie(t)?e?_=h?()=>h(t,2):t:_=()=>{if(b){ln();try{b()}finally{cn()}}const B=vn;vn=g;try{return h?h(t,3,[R]):t(R)}finally{vn=B}}:_=wt,e&&s){const B=_,ne=s===!0?1/0:s;_=()=>kt(B(),ne)}const G=$c(),q=()=>{g.stop(),G&&Ao(G.effects,g)};if(o)if(e){const B=e;e=(...ne)=>{B(...ne),q()}}else{const B=_;_=()=>{B(),q()}}let W=M?new Array(t.length).fill(_i):_i;const K=B=>{if(!(!(g.flags&1)||!g.dirty&&!B))if(e){const ne=g.run();if(s||D||(M?ne.some((le,I)=>an(le,W[I])):an(ne,W))){b&&b();const le=vn;vn=g;try{const I=[ne,W===_i?void 0:M&&W[0]===_i?[]:W,R];h?h(e,3,I):e(...I),W=ne}finally{vn=le}}}else g.run()};return c&&c(K),g=new Wc(_),g.scheduler=a?()=>a(K,!1):K,R=B=>Ed(B,!1,g),b=g.onStop=()=>{const B=ki.get(g);if(B){if(h)h(B,4);else for(const ne of B)ne();ki.delete(g)}},e?r?K(!0):W=g.run():a?a(K.bind(null,!0),!0):g.run(),q.pause=g.pause.bind(g),q.resume=g.resume.bind(g),q.stop=q,q}function kt(t,e=1/0,n){if(e<=0||!Ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Se(t))kt(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)kt(t[r],e,n);else if(Df(t)||br(t))t.forEach(r=>{kt(r,e,n)});else if(xf(t)){for(const r in t)kt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zr(t,e,n,r){try{return r?t(...r):t()}catch(s){Yi(s,e,n)}}function Tt(t,e,n,r){if(ie(t)){const s=zr(t,e,n,r);return s&&Uc(s)&&s.catch(o=>{Yi(o,e,n)}),s}if(re(t)){const s=[];for(let o=0;o<t.length;o++)s.push(Tt(t[o],e,n,r));return s}}function Yi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ye;if(e){let c=e.parent;const h=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const g=c.ec;if(g){for(let _=0;_<g.length;_++)if(g[_](t,h,d)===!1)return}c=c.parent}if(o){ln(),zr(o,null,10,[t,h,d]),cn();return}}Id(t,n,s,r,a)}function Id(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let Mr=!1,Zs=!1;const Ge=[];let _t=0;const zn=[];let Xt=null,jn=0;const au=Promise.resolve();let Vo=null;function Bo(t){const e=Vo||au;return t?e.then(this?t.bind(this):t):e}function bd(t){let e=Mr?_t+1:0,n=Ge.length;for(;e<n;){const r=e+n>>>1,s=Ge[r],o=Ur(s);o<t||o===t&&s.flags&2?e=r+1:n=r}return e}function $o(t){if(!(t.flags&1)){const e=Ur(t),n=Ge[Ge.length-1];!n||!(t.flags&2)&&e>=Ur(n)?Ge.push(t):Ge.splice(bd(e),0,t),t.flags|=1,lu()}}function lu(){!Mr&&!Zs&&(Zs=!0,Vo=au.then(uu))}function Td(t){re(t)?zn.push(...t):Xt&&t.id===-1?Xt.splice(jn+1,0,t):t.flags&1||(zn.push(t),t.flags|=1),lu()}function ll(t,e,n=Mr?_t+1:0){for(;n<Ge.length;n++){const r=Ge[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ge.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function cu(t){if(zn.length){const e=[...new Set(zn)].sort((n,r)=>Ur(n)-Ur(r));if(zn.length=0,Xt){Xt.push(...e);return}for(Xt=e,jn=0;jn<Xt.length;jn++){const n=Xt[jn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xt=null,jn=0}}const Ur=t=>t.id==null?t.flags&2?-1:1/0:t.id;function uu(t){Zs=!1,Mr=!0;try{for(_t=0;_t<Ge.length;_t++){const e=Ge[_t];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zr(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;_t<Ge.length;_t++){const e=Ge[_t];e&&(e.flags&=-2)}_t=0,Ge.length=0,cu(),Mr=!1,Vo=null,(Ge.length||zn.length)&&uu()}}let Ze=null,hu=null;function Di(t){const e=Ze;return Ze=t,hu=t&&t.type.__scopeId||null,e}function Ii(t,e=Ze,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&_l(-1);const o=Di(e);let a;try{a=t(...s)}finally{Di(o),r._d&&_l(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ni(t,e){if(Ze===null)return t;const n=is(Ze),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,h=ye]=e[s];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&kt(a),r.push({dir:o,instance:n,value:a,oldValue:void 0,arg:c,modifiers:h}))}return t}function gn(t,e,n,r){const s=t.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let h=c.dir[r];h&&(ln(),Tt(h,n,8,[t.el,c,t,e]),cn())}}const Sd=Symbol("_vte"),Ad=t=>t.__isTeleport;function Wo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Wo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function fu(t,e){return ie(t)?Ne({name:t.name},e,{setup:t}):t}function du(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function eo(t,e,n,r,s=!1){if(re(t)){t.forEach((D,M)=>eo(D,e&&(re(e)?e[M]:e),n,r,s));return}if(Ar(r)&&!s)return;const o=r.shapeFlag&4?is(r.component):r.el,a=s?null:o,{i:c,r:h}=t,d=e&&e.r,g=c.refs===ye?c.refs={}:c.refs,_=c.setupState,b=he(_),R=_===ye?()=>!1:D=>de(b,D);if(d!=null&&d!==h&&(Re(d)?(g[d]=null,R(d)&&(_[d]=null)):Se(d)&&(d.value=null)),ie(h))zr(h,c,12,[a,g]);else{const D=Re(h),M=Se(h);if(D||M){const G=()=>{if(t.f){const q=D?R(h)?_[h]:g[h]:h.value;s?re(q)&&Ao(q,o):re(q)?q.includes(o)||q.push(o):D?(g[h]=[o],R(h)&&(_[h]=g[h])):(h.value=[o],t.k&&(g[t.k]=h.value))}else D?(g[h]=a,R(h)&&(_[h]=a)):M&&(h.value=a,t.k&&(g[t.k]=a))};a?(G.id=-1,tt(G,n)):G()}}}const Ar=t=>!!t.type.__asyncLoader,pu=t=>t.type.__isKeepAlive;function Cd(t,e){gu(t,"a",e)}function Rd(t,e){gu(t,"da",e)}function gu(t,e,n=De){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Qi(e,r,n),n){let s=n.parent;for(;s&&s.parent;)pu(s.parent.vnode)&&Pd(r,e,n,s),s=s.parent}}function Pd(t,e,n,r){const s=Qi(e,t,r,!0);mu(()=>{Ao(r[e],s)},n)}function Qi(t,e,n=De,r=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{ln();const c=Gr(n),h=Tt(e,n,t,a);return c(),cn(),h});return r?s.unshift(o):s.push(o),o}}const jt=t=>(e,n=De)=>{(!rs||t==="sp")&&Qi(t,(...r)=>e(...r),n)},Od=jt("bm"),kd=jt("m"),Dd=jt("bu"),Nd=jt("u"),Ld=jt("bum"),mu=jt("um"),xd=jt("sp"),Md=jt("rtg"),Ud=jt("rtc");function Fd(t,e=De){Qi("ec",t,e)}const vu="components";function cl(t,e){return Hd(vu,t,!0,e)||t}const jd=Symbol.for("v-ndc");function Hd(t,e,n=!0,r=!1){const s=Ze||De;if(s){const o=s.type;if(t===vu){const c=Rp(o,!1);if(c&&(c===e||c===dt(e)||c===Ji(dt(e))))return o}const a=ul(s[t]||o[t],e)||ul(s.appContext[t],e);return!a&&r?o:a}}function ul(t,e){return t&&(t[e]||t[dt(e)]||t[Ji(dt(e))])}const to=t=>t?Mu(t)?is(t):to(t.parent):null,Cr=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>to(t.parent),$root:t=>to(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ko(t),$forceUpdate:t=>t.f||(t.f=()=>{$o(t.update)}),$nextTick:t=>t.n||(t.n=Bo.bind(t.proxy)),$watch:t=>lp.bind(t)}),ks=(t,e)=>t!==ye&&!t.__isScriptSetup&&de(t,e),Vd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:a,type:c,appContext:h}=t;let d;if(e[0]!=="$"){const R=a[e];if(R!==void 0)switch(R){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(ks(r,e))return a[e]=1,r[e];if(s!==ye&&de(s,e))return a[e]=2,s[e];if((d=t.propsOptions[0])&&de(d,e))return a[e]=3,o[e];if(n!==ye&&de(n,e))return a[e]=4,n[e];no&&(a[e]=0)}}const g=Cr[e];let _,b;if(g)return e==="$attrs"&&Ve(t.attrs,"get",""),g(t);if((_=c.__cssModules)&&(_=_[e]))return _;if(n!==ye&&de(n,e))return a[e]=4,n[e];if(b=h.config.globalProperties,de(b,e))return b[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return ks(s,e)?(s[e]=n,!0):r!==ye&&de(r,e)?(r[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==ye&&de(t,a)||ks(e,a)||(c=o[0])&&de(c,a)||de(r,a)||de(Cr,a)||de(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hl(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let no=!0;function Bd(t){const e=Ko(t),n=t.proxy,r=t.ctx;no=!1,e.beforeCreate&&fl(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:c,provide:h,inject:d,created:g,beforeMount:_,mounted:b,beforeUpdate:R,updated:D,activated:M,deactivated:G,beforeDestroy:q,beforeUnmount:W,destroyed:K,unmounted:B,render:ne,renderTracked:le,renderTriggered:I,errorCaptured:p,serverPrefetch:v,expose:w,inheritAttrs:T,components:S,directives:E,filters:Pe}=e;if(d&&$d(d,r,null),a)for(const te in a){const se=a[te];ie(se)&&(r[te]=se.bind(n))}if(s){const te=s.call(n,n);Ae(te)&&(t.data=Kr(te))}if(no=!0,o)for(const te in o){const se=o[te],et=ie(se)?se.bind(n,n):ie(se.get)?se.get.bind(n,n):wt,lt=!ie(se)&&ie(se.set)?se.set.bind(n):wt,it=at({get:et,set:lt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>it.value,set:Ie=>it.value=Ie})}if(c)for(const te in c)_u(c[te],r,n,te);if(h){const te=ie(h)?h.call(n):h;Reflect.ownKeys(te).forEach(se=>{bi(se,te[se])})}g&&fl(g,t,"c");function Ee(te,se){re(se)?se.forEach(et=>te(et.bind(n))):se&&te(se.bind(n))}if(Ee(Od,_),Ee(kd,b),Ee(Dd,R),Ee(Nd,D),Ee(Cd,M),Ee(Rd,G),Ee(Fd,p),Ee(Ud,le),Ee(Md,I),Ee(Ld,W),Ee(mu,B),Ee(xd,v),re(w))if(w.length){const te=t.exposed||(t.exposed={});w.forEach(se=>{Object.defineProperty(te,se,{get:()=>n[se],set:et=>n[se]=et})})}else t.exposed||(t.exposed={});ne&&t.render===wt&&(t.render=ne),T!=null&&(t.inheritAttrs=T),S&&(t.components=S),E&&(t.directives=E),v&&du(t)}function $d(t,e,n=wt){re(t)&&(t=ro(t));for(const r in t){const s=t[r];let o;Ae(s)?"default"in s?o=ft(s.from||r,s.default,!0):o=ft(s.from||r):o=ft(s),Se(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function fl(t,e,n){Tt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function _u(t,e,n,r){let s=r.includes(".")?Du(n,r):()=>n[r];if(Re(t)){const o=e[t];ie(o)&&Rr(s,o)}else if(ie(t))Rr(s,t.bind(n));else if(Ae(t))if(re(t))t.forEach(o=>_u(o,e,n,r));else{const o=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(o)&&Rr(s,o,t)}}function Ko(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let h;return c?h=c:!s.length&&!n&&!r?h=e:(h={},s.length&&s.forEach(d=>Li(h,d,a,!0)),Li(h,e,a)),Ae(e)&&o.set(e,h),h}function Li(t,e,n,r=!1){const{mixins:s,extends:o}=e;o&&Li(t,o,n,!0),s&&s.forEach(a=>Li(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=Wd[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const Wd={data:dl,props:pl,emits:pl,methods:Er,computed:Er,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Er,directives:Er,watch:zd,provide:dl,inject:Kd};function dl(t,e){return e?t?function(){return Ne(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function Kd(t,e){return Er(ro(t),ro(e))}function ro(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function Er(t,e){return t?Ne(Object.create(null),t,e):e}function pl(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:Ne(Object.create(null),hl(t),hl(e??{})):e}function zd(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const r in e)n[r]=We(t[r],e[r]);return n}function yu(){return{app:null,config:{isNativeTag:Of,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gd=0;function qd(t,e){return function(r,s=null){ie(r)||(r=Ne({},r)),s!=null&&!Ae(s)&&(s=null);const o=yu(),a=new WeakSet,c=[];let h=!1;const d=o.app={_uid:Gd++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:Op,get config(){return o.config},set config(g){},use(g,..._){return a.has(g)||(g&&ie(g.install)?(a.add(g),g.install(d,..._)):ie(g)&&(a.add(g),g(d,..._))),d},mixin(g){return o.mixins.includes(g)||o.mixins.push(g),d},component(g,_){return _?(o.components[g]=_,d):o.components[g]},directive(g,_){return _?(o.directives[g]=_,d):o.directives[g]},mount(g,_,b){if(!h){const R=d._ceVNode||qe(r,s);return R.appContext=o,b===!0?b="svg":b===!1&&(b=void 0),_&&e?e(R,g):t(R,g,b),h=!0,d._container=g,g.__vue_app__=d,is(R.component)}},onUnmount(g){c.push(g)},unmount(){h&&(Tt(c,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(g,_){return o.provides[g]=_,d},runWithContext(g){const _=wn;wn=d;try{return g()}finally{wn=_}}};return d}}let wn=null;function bi(t,e){if(De){let n=De.provides;const r=De.parent&&De.parent.provides;r===n&&(n=De.provides=Object.create(r)),n[t]=e}}function ft(t,e,n=!1){const r=De||Ze;if(r||wn){const s=wn?wn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r&&r.proxy):e}}function Jd(){return!!(De||Ze||wn)}const Eu={},wu=()=>Object.create(Eu),Iu=t=>Object.getPrototypeOf(t)===Eu;function Xd(t,e,n,r=!1){const s={},o=wu();t.propsDefaults=Object.create(null),bu(t,e,s,o);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:ru(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Yd(t,e,n,r){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,c=he(s),[h]=t.propsOptions;let d=!1;if((r||a>0)&&!(a&16)){if(a&8){const g=t.vnode.dynamicProps;for(let _=0;_<g.length;_++){let b=g[_];if(Zi(t.emitsOptions,b))continue;const R=e[b];if(h)if(de(o,b))R!==o[b]&&(o[b]=R,d=!0);else{const D=dt(b);s[D]=io(h,c,D,R,t,!1)}else R!==o[b]&&(o[b]=R,d=!0)}}}else{bu(t,e,s,o)&&(d=!0);let g;for(const _ in c)(!e||!de(e,_)&&((g=Cn(_))===_||!de(e,g)))&&(h?n&&(n[_]!==void 0||n[g]!==void 0)&&(s[_]=io(h,c,_,void 0,t,!0)):delete s[_]);if(o!==c)for(const _ in o)(!e||!de(e,_))&&(delete o[_],d=!0)}d&&xt(t.attrs,"set","")}function bu(t,e,n,r){const[s,o]=t.propsOptions;let a=!1,c;if(e)for(let h in e){if(Tr(h))continue;const d=e[h];let g;s&&de(s,g=dt(h))?!o||!o.includes(g)?n[g]=d:(c||(c={}))[g]=d:Zi(t.emitsOptions,h)||(!(h in r)||d!==r[h])&&(r[h]=d,a=!0)}if(o){const h=he(n),d=c||ye;for(let g=0;g<o.length;g++){const _=o[g];n[_]=io(s,h,_,d[_],t,!de(d,_))}}return a}function io(t,e,n,r,s,o){const a=t[n];if(a!=null){const c=de(a,"default");if(c&&r===void 0){const h=a.default;if(a.type!==Function&&!a.skipFactory&&ie(h)){const{propsDefaults:d}=s;if(n in d)r=d[n];else{const g=Gr(s);r=d[n]=h.call(null,e),g()}}else r=h;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!c?r=!1:a[1]&&(r===""||r===Cn(n))&&(r=!0))}return r}const Qd=new WeakMap;function Tu(t,e,n=!1){const r=n?Qd:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let h=!1;if(!ie(t)){const g=_=>{h=!0;const[b,R]=Tu(_,e,!0);Ne(a,b),R&&c.push(...R)};!n&&e.mixins.length&&e.mixins.forEach(g),t.extends&&g(t.extends),t.mixins&&t.mixins.forEach(g)}if(!o&&!h)return Ae(t)&&r.set(t,Wn),Wn;if(re(o))for(let g=0;g<o.length;g++){const _=dt(o[g]);gl(_)&&(a[_]=ye)}else if(o)for(const g in o){const _=dt(g);if(gl(_)){const b=o[g],R=a[_]=re(b)||ie(b)?{type:b}:Ne({},b),D=R.type;let M=!1,G=!0;if(re(D))for(let q=0;q<D.length;++q){const W=D[q],K=ie(W)&&W.name;if(K==="Boolean"){M=!0;break}else K==="String"&&(G=!1)}else M=ie(D)&&D.name==="Boolean";R[0]=M,R[1]=G,(M||de(R,"default"))&&c.push(_)}}const d=[a,c];return Ae(t)&&r.set(t,d),d}function gl(t){return t[0]!=="$"&&!Tr(t)}const Su=t=>t[0]==="_"||t==="$stable",zo=t=>re(t)?t.map(yt):[yt(t)],Zd=(t,e,n)=>{if(e._n)return e;const r=Ii((...s)=>zo(e(...s)),n);return r._c=!1,r},Au=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Su(s))continue;const o=t[s];if(ie(o))e[s]=Zd(s,o,r);else if(o!=null){const a=zo(o);e[s]=()=>a}}},Cu=(t,e)=>{const n=zo(e);t.slots.default=()=>n},Ru=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},ep=(t,e,n)=>{const r=t.slots=wu();if(t.vnode.shapeFlag&32){const s=e._;s?(Ru(r,e,n),n&&Fc(r,"_",s,!0)):Au(e,r)}else e&&Cu(t,e)},tp=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=ye;if(r.shapeFlag&32){const c=e._;c?n&&c===1?o=!1:Ru(s,e,n):(o=!e.$stable,Au(e,s)),a=e}else e&&(Cu(t,e),a={default:1});if(o)for(const c in s)!Su(c)&&a[c]==null&&delete s[c]},tt=gp;function np(t){return rp(t)}function rp(t,e){const n=jc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:a,createText:c,createComment:h,setText:d,setElementText:g,parentNode:_,nextSibling:b,setScopeId:R=wt,insertStaticContent:D}=t,M=(m,y,C,N=null,O=null,L=null,H=void 0,F=null,U=!!y.dynamicChildren)=>{if(m===y)return;m&&!_r(m,y)&&(N=k(m),Ie(m,O,L,!0),m=null),y.patchFlag===-2&&(U=!1,y.dynamicChildren=null);const{type:x,ref:Q,shapeFlag:$}=y;switch(x){case es:G(m,y,C,N);break;case Fr:q(m,y,C,N);break;case Ls:m==null&&W(y,C,N,H);break;case Ot:S(m,y,C,N,O,L,H,F,U);break;default:$&1?ne(m,y,C,N,O,L,H,F,U):$&6?E(m,y,C,N,O,L,H,F,U):($&64||$&128)&&x.process(m,y,C,N,O,L,H,F,U,J)}Q!=null&&O&&eo(Q,m&&m.ref,L,y||m,!y)},G=(m,y,C,N)=>{if(m==null)r(y.el=c(y.children),C,N);else{const O=y.el=m.el;y.children!==m.children&&d(O,y.children)}},q=(m,y,C,N)=>{m==null?r(y.el=h(y.children||""),C,N):y.el=m.el},W=(m,y,C,N)=>{[m.el,m.anchor]=D(m.children,y,C,N,m.el,m.anchor)},K=({el:m,anchor:y},C,N)=>{let O;for(;m&&m!==y;)O=b(m),r(m,C,N),m=O;r(y,C,N)},B=({el:m,anchor:y})=>{let C;for(;m&&m!==y;)C=b(m),s(m),m=C;s(y)},ne=(m,y,C,N,O,L,H,F,U)=>{y.type==="svg"?H="svg":y.type==="math"&&(H="mathml"),m==null?le(y,C,N,O,L,H,F,U):v(m,y,O,L,H,F,U)},le=(m,y,C,N,O,L,H,F)=>{let U,x;const{props:Q,shapeFlag:$,transition:Y,dirs:X}=m;if(U=m.el=a(m.type,L,Q&&Q.is,Q),$&8?g(U,m.children):$&16&&p(m.children,U,null,N,O,Ds(m,L),H,F),X&&gn(m,null,N,"created"),I(U,m,m.scopeId,H,N),Q){for(const fe in Q)fe!=="value"&&!Tr(fe)&&o(U,fe,null,Q[fe],L,N);"value"in Q&&o(U,"value",null,Q.value,L),(x=Q.onVnodeBeforeMount)&&vt(x,N,m)}X&&gn(m,null,N,"beforeMount");const Z=ip(O,Y);Z&&Y.beforeEnter(U),r(U,y,C),((x=Q&&Q.onVnodeMounted)||Z||X)&&tt(()=>{x&&vt(x,N,m),Z&&Y.enter(U),X&&gn(m,null,N,"mounted")},O)},I=(m,y,C,N,O)=>{if(C&&R(m,C),N)for(let L=0;L<N.length;L++)R(m,N[L]);if(O){let L=O.subTree;if(y===L||Lu(L.type)&&(L.ssContent===y||L.ssFallback===y)){const H=O.vnode;I(m,H,H.scopeId,H.slotScopeIds,O.parent)}}},p=(m,y,C,N,O,L,H,F,U=0)=>{for(let x=U;x<m.length;x++){const Q=m[x]=F?Yt(m[x]):yt(m[x]);M(null,Q,y,C,N,O,L,H,F)}},v=(m,y,C,N,O,L,H)=>{const F=y.el=m.el;let{patchFlag:U,dynamicChildren:x,dirs:Q}=y;U|=m.patchFlag&16;const $=m.props||ye,Y=y.props||ye;let X;if(C&&mn(C,!1),(X=Y.onVnodeBeforeUpdate)&&vt(X,C,y,m),Q&&gn(y,m,C,"beforeUpdate"),C&&mn(C,!0),($.innerHTML&&Y.innerHTML==null||$.textContent&&Y.textContent==null)&&g(F,""),x?w(m.dynamicChildren,x,F,C,N,Ds(y,O),L):H||se(m,y,F,null,C,N,Ds(y,O),L,!1),U>0){if(U&16)T(F,$,Y,C,O);else if(U&2&&$.class!==Y.class&&o(F,"class",null,Y.class,O),U&4&&o(F,"style",$.style,Y.style,O),U&8){const Z=y.dynamicProps;for(let fe=0;fe<Z.length;fe++){const ce=Z[fe],Le=$[ce],Ce=Y[ce];(Ce!==Le||ce==="value")&&o(F,ce,Le,Ce,O,C)}}U&1&&m.children!==y.children&&g(F,y.children)}else!H&&x==null&&T(F,$,Y,C,O);((X=Y.onVnodeUpdated)||Q)&&tt(()=>{X&&vt(X,C,y,m),Q&&gn(y,m,C,"updated")},N)},w=(m,y,C,N,O,L,H)=>{for(let F=0;F<y.length;F++){const U=m[F],x=y[F],Q=U.el&&(U.type===Ot||!_r(U,x)||U.shapeFlag&70)?_(U.el):C;M(U,x,Q,null,N,O,L,H,!0)}},T=(m,y,C,N,O)=>{if(y!==C){if(y!==ye)for(const L in y)!Tr(L)&&!(L in C)&&o(m,L,y[L],null,O,N);for(const L in C){if(Tr(L))continue;const H=C[L],F=y[L];H!==F&&L!=="value"&&o(m,L,F,H,O,N)}"value"in C&&o(m,"value",y.value,C.value,O)}},S=(m,y,C,N,O,L,H,F,U)=>{const x=y.el=m?m.el:c(""),Q=y.anchor=m?m.anchor:c("");let{patchFlag:$,dynamicChildren:Y,slotScopeIds:X}=y;X&&(F=F?F.concat(X):X),m==null?(r(x,C,N),r(Q,C,N),p(y.children||[],C,Q,O,L,H,F,U)):$>0&&$&64&&Y&&m.dynamicChildren?(w(m.dynamicChildren,Y,C,O,L,H,F),(y.key!=null||O&&y===O.subTree)&&Pu(m,y,!0)):se(m,y,C,Q,O,L,H,F,U)},E=(m,y,C,N,O,L,H,F,U)=>{y.slotScopeIds=F,m==null?y.shapeFlag&512?O.ctx.activate(y,C,N,H,U):Pe(y,C,N,O,L,H,U):Xe(m,y,U)},Pe=(m,y,C,N,O,L,H)=>{const F=m.component=bp(m,N,O);if(pu(m)&&(F.ctx.renderer=J),Tp(F,!1,H),F.asyncDep){if(O&&O.registerDep(F,Ee,H),!m.el){const U=F.subTree=qe(Fr);q(null,U,y,C)}}else Ee(F,m,y,C,O,L,H)},Xe=(m,y,C)=>{const N=y.component=m.component;if(dp(m,y,C))if(N.asyncDep&&!N.asyncResolved){te(N,y,C);return}else N.next=y,N.update();else y.el=m.el,N.vnode=y},Ee=(m,y,C,N,O,L,H)=>{const F=()=>{if(m.isMounted){let{next:$,bu:Y,u:X,parent:Z,vnode:fe}=m;{const xe=Ou(m);if(xe){$&&($.el=fe.el,te(m,$,H)),xe.asyncDep.then(()=>{m.isUnmounted||F()});return}}let ce=$,Le;mn(m,!1),$?($.el=fe.el,te(m,$,H)):$=fe,Y&&wi(Y),(Le=$.props&&$.props.onVnodeBeforeUpdate)&&vt(Le,Z,$,fe),mn(m,!0);const Ce=Ns(m),Oe=m.subTree;m.subTree=Ce,M(Oe,Ce,_(Oe.el),k(Oe),m,O,L),$.el=Ce.el,ce===null&&pp(m,Ce.el),X&&tt(X,O),(Le=$.props&&$.props.onVnodeUpdated)&&tt(()=>vt(Le,Z,$,fe),O)}else{let $;const{el:Y,props:X}=y,{bm:Z,m:fe,parent:ce,root:Le,type:Ce}=m,Oe=Ar(y);if(mn(m,!1),Z&&wi(Z),!Oe&&($=X&&X.onVnodeBeforeMount)&&vt($,ce,y),mn(m,!0),Y&&me){const xe=()=>{m.subTree=Ns(m),me(Y,m.subTree,m,O,null)};Oe&&Ce.__asyncHydrate?Ce.__asyncHydrate(Y,m,xe):xe()}else{Le.ce&&Le.ce._injectChildStyle(Ce);const xe=m.subTree=Ns(m);M(null,xe,C,N,m,O,L),y.el=xe.el}if(fe&&tt(fe,O),!Oe&&($=X&&X.onVnodeMounted)){const xe=y;tt(()=>vt($,ce,xe),O)}(y.shapeFlag&256||ce&&Ar(ce.vnode)&&ce.vnode.shapeFlag&256)&&m.a&&tt(m.a,O),m.isMounted=!0,y=C=N=null}};m.scope.on();const U=m.effect=new Wc(F);m.scope.off();const x=m.update=U.run.bind(U),Q=m.job=U.runIfDirty.bind(U);Q.i=m,Q.id=m.uid,U.scheduler=()=>$o(Q),mn(m,!0),x()},te=(m,y,C)=>{y.component=m;const N=m.vnode.props;m.vnode=y,m.next=null,Yd(m,y.props,N,C),tp(m,y.children,C),ln(),ll(m),cn()},se=(m,y,C,N,O,L,H,F,U=!1)=>{const x=m&&m.children,Q=m?m.shapeFlag:0,$=y.children,{patchFlag:Y,shapeFlag:X}=y;if(Y>0){if(Y&128){lt(x,$,C,N,O,L,H,F,U);return}else if(Y&256){et(x,$,C,N,O,L,H,F,U);return}}X&8?(Q&16&&Ye(x,O,L),$!==x&&g(C,$)):Q&16?X&16?lt(x,$,C,N,O,L,H,F,U):Ye(x,O,L,!0):(Q&8&&g(C,""),X&16&&p($,C,N,O,L,H,F,U))},et=(m,y,C,N,O,L,H,F,U)=>{m=m||Wn,y=y||Wn;const x=m.length,Q=y.length,$=Math.min(x,Q);let Y;for(Y=0;Y<$;Y++){const X=y[Y]=U?Yt(y[Y]):yt(y[Y]);M(m[Y],X,C,null,O,L,H,F,U)}x>Q?Ye(m,O,L,!0,!1,$):p(y,C,N,O,L,H,F,U,$)},lt=(m,y,C,N,O,L,H,F,U)=>{let x=0;const Q=y.length;let $=m.length-1,Y=Q-1;for(;x<=$&&x<=Y;){const X=m[x],Z=y[x]=U?Yt(y[x]):yt(y[x]);if(_r(X,Z))M(X,Z,C,null,O,L,H,F,U);else break;x++}for(;x<=$&&x<=Y;){const X=m[$],Z=y[Y]=U?Yt(y[Y]):yt(y[Y]);if(_r(X,Z))M(X,Z,C,null,O,L,H,F,U);else break;$--,Y--}if(x>$){if(x<=Y){const X=Y+1,Z=X<Q?y[X].el:N;for(;x<=Y;)M(null,y[x]=U?Yt(y[x]):yt(y[x]),C,Z,O,L,H,F,U),x++}}else if(x>Y)for(;x<=$;)Ie(m[x],O,L,!0),x++;else{const X=x,Z=x,fe=new Map;for(x=Z;x<=Y;x++){const Be=y[x]=U?Yt(y[x]):yt(y[x]);Be.key!=null&&fe.set(Be.key,x)}let ce,Le=0;const Ce=Y-Z+1;let Oe=!1,xe=0;const Bt=new Array(Ce);for(x=0;x<Ce;x++)Bt[x]=0;for(x=X;x<=$;x++){const Be=m[x];if(Le>=Ce){Ie(Be,O,L,!0);continue}let st;if(Be.key!=null)st=fe.get(Be.key);else for(ce=Z;ce<=Y;ce++)if(Bt[ce-Z]===0&&_r(Be,y[ce])){st=ce;break}st===void 0?Ie(Be,O,L,!0):(Bt[st-Z]=x+1,st>=xe?xe=st:Oe=!0,M(Be,y[st],C,null,O,L,H,F,U),Le++)}const On=Oe?sp(Bt):Wn;for(ce=On.length-1,x=Ce-1;x>=0;x--){const Be=Z+x,st=y[Be],kn=Be+1<Q?y[Be+1].el:N;Bt[x]===0?M(null,st,C,kn,O,L,H,F,U):Oe&&(ce<0||x!==On[ce]?it(st,C,kn,2):ce--)}}},it=(m,y,C,N,O=null)=>{const{el:L,type:H,transition:F,children:U,shapeFlag:x}=m;if(x&6){it(m.component.subTree,y,C,N);return}if(x&128){m.suspense.move(y,C,N);return}if(x&64){H.move(m,y,C,J);return}if(H===Ot){r(L,y,C);for(let $=0;$<U.length;$++)it(U[$],y,C,N);r(m.anchor,y,C);return}if(H===Ls){K(m,y,C);return}if(N!==2&&x&1&&F)if(N===0)F.beforeEnter(L),r(L,y,C),tt(()=>F.enter(L),O);else{const{leave:$,delayLeave:Y,afterLeave:X}=F,Z=()=>r(L,y,C),fe=()=>{$(L,()=>{Z(),X&&X()})};Y?Y(L,Z,fe):fe()}else r(L,y,C)},Ie=(m,y,C,N=!1,O=!1)=>{const{type:L,props:H,ref:F,children:U,dynamicChildren:x,shapeFlag:Q,patchFlag:$,dirs:Y,cacheIndex:X}=m;if($===-2&&(O=!1),F!=null&&eo(F,null,C,m,!0),X!=null&&(y.renderCache[X]=void 0),Q&256){y.ctx.deactivate(m);return}const Z=Q&1&&Y,fe=!Ar(m);let ce;if(fe&&(ce=H&&H.onVnodeBeforeUnmount)&&vt(ce,y,m),Q&6)mt(m.component,C,N);else{if(Q&128){m.suspense.unmount(C,N);return}Z&&gn(m,null,y,"beforeUnmount"),Q&64?m.type.remove(m,y,C,J,N):x&&!x.hasOnce&&(L!==Ot||$>0&&$&64)?Ye(x,y,C,!1,!0):(L===Ot&&$&384||!O&&Q&16)&&Ye(U,y,C),N&&be(m)}(fe&&(ce=H&&H.onVnodeUnmounted)||Z)&&tt(()=>{ce&&vt(ce,y,m),Z&&gn(m,null,y,"unmounted")},C)},be=m=>{const{type:y,el:C,anchor:N,transition:O}=m;if(y===Ot){Vt(C,N);return}if(y===Ls){B(m);return}const L=()=>{s(C),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(m.shapeFlag&1&&O&&!O.persisted){const{leave:H,delayLeave:F}=O,U=()=>H(C,L);F?F(m.el,L,U):U()}else L()},Vt=(m,y)=>{let C;for(;m!==y;)C=b(m),s(m),m=C;s(y)},mt=(m,y,C)=>{const{bum:N,scope:O,job:L,subTree:H,um:F,m:U,a:x}=m;ml(U),ml(x),N&&wi(N),O.stop(),L&&(L.flags|=8,Ie(H,m,y,C)),F&&tt(F,y),tt(()=>{m.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Ye=(m,y,C,N=!1,O=!1,L=0)=>{for(let H=L;H<m.length;H++)Ie(m[H],y,C,N,O)},k=m=>{if(m.shapeFlag&6)return k(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const y=b(m.anchor||m.el),C=y&&y[Sd];return C?b(C):y};let z=!1;const V=(m,y,C)=>{m==null?y._vnode&&Ie(y._vnode,null,null,!0):M(y._vnode||null,m,y,null,null,null,C),y._vnode=m,z||(z=!0,ll(),cu(),z=!1)},J={p:M,um:Ie,m:it,r:be,mt:Pe,mc:p,pc:se,pbc:w,n:k,o:t};let oe,me;return{render:V,hydrate:oe,createApp:qd(V,oe)}}function Ds({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function mn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ip(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pu(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let o=0;o<r.length;o++){const a=r[o];let c=s[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[o]=Yt(s[o]),c.el=a.el),!n&&c.patchFlag!==-2&&Pu(a,c)),c.type===es&&(c.el=a.el)}}function sp(t){const e=t.slice(),n=[0];let r,s,o,a,c;const h=t.length;for(r=0;r<h;r++){const d=t[r];if(d!==0){if(s=n[n.length-1],t[s]<d){e[r]=s,n.push(r);continue}for(o=0,a=n.length-1;o<a;)c=o+a>>1,t[n[c]]<d?o=c+1:a=c;d<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Ou(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ou(e)}function ml(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const op=Symbol.for("v-scx"),ap=()=>ft(op);function Rr(t,e,n){return ku(t,e,n)}function ku(t,e,n=ye){const{immediate:r,deep:s,flush:o,once:a}=n,c=Ne({},n);let h;if(rs)if(o==="sync"){const b=ap();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!e||r)c.once=!0;else return{stop:wt,resume:wt,pause:wt};const d=De;c.call=(b,R,D)=>Tt(b,d,R,D);let g=!1;o==="post"?c.scheduler=b=>{tt(b,d&&d.suspense)}:o!=="sync"&&(g=!0,c.scheduler=(b,R)=>{R?b():$o(b)}),c.augmentJob=b=>{e&&(b.flags|=4),g&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const _=wd(t,e,c);return h&&h.push(_),_}function lp(t,e,n){const r=this.proxy,s=Re(t)?t.includes(".")?Du(r,t):()=>r[t]:t.bind(r,r);let o;ie(e)?o=e:(o=e.handler,n=e);const a=Gr(this),c=ku(s,o.bind(r),n);return a(),c}function Du(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const cp=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${dt(e)}Modifiers`]||t[`${Cn(e)}Modifiers`];function up(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ye;let s=n;const o=e.startsWith("update:"),a=o&&cp(r,e.slice(7));a&&(a.trim&&(s=n.map(g=>Re(g)?g.trim():g)),a.number&&(s=n.map(Xs)));let c,h=r[c=Cs(e)]||r[c=Cs(dt(e))];!h&&o&&(h=r[c=Cs(Cn(e))]),h&&Tt(h,t,6,s);const d=r[c+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Tt(d,t,6,s)}}function Nu(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const o=t.emits;let a={},c=!1;if(!ie(t)){const h=d=>{const g=Nu(d,e,!0);g&&(c=!0,Ne(a,g))};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!o&&!c?(Ae(t)&&r.set(t,null),null):(re(o)?o.forEach(h=>a[h]=null):Ne(a,o),Ae(t)&&r.set(t,a),a)}function Zi(t,e){return!t||!zi(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,Cn(e))||de(t,e))}function Ns(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:a,attrs:c,emit:h,render:d,renderCache:g,props:_,data:b,setupState:R,ctx:D,inheritAttrs:M}=t,G=Di(t);let q,W;try{if(n.shapeFlag&4){const B=s||r,ne=B;q=yt(d.call(ne,B,g,_,R,b,D)),W=c}else{const B=e;q=yt(B.length>1?B(_,{attrs:c,slots:a,emit:h}):B(_,null)),W=e.props?c:hp(c)}}catch(B){Pr.length=0,Yi(B,t,1),q=qe(Fr)}let K=q;if(W&&M!==!1){const B=Object.keys(W),{shapeFlag:ne}=K;B.length&&ne&7&&(o&&B.some(So)&&(W=fp(W,o)),K=Yn(K,W,!1,!0))}return n.dirs&&(K=Yn(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&Wo(K,n.transition),q=K,Di(G),q}const hp=t=>{let e;for(const n in t)(n==="class"||n==="style"||zi(n))&&((e||(e={}))[n]=t[n]);return e},fp=(t,e)=>{const n={};for(const r in t)(!So(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dp(t,e,n){const{props:r,children:s,component:o}=t,{props:a,children:c,patchFlag:h}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return r?vl(r,a,d):!!a;if(h&8){const g=e.dynamicProps;for(let _=0;_<g.length;_++){const b=g[_];if(a[b]!==r[b]&&!Zi(d,b))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?vl(r,a,d):!0:!!a;return!1}function vl(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(e[o]!==t[o]&&!Zi(n,o))return!0}return!1}function pp({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Lu=t=>t.__isSuspense;function gp(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):Td(t)}const Ot=Symbol.for("v-fgt"),es=Symbol.for("v-txt"),Fr=Symbol.for("v-cmt"),Ls=Symbol.for("v-stc"),Pr=[];let nt=null;function ts(t=!1){Pr.push(nt=t?null:[])}function mp(){Pr.pop(),nt=Pr[Pr.length-1]||null}let jr=1;function _l(t){jr+=t,t<0&&nt&&(nt.hasOnce=!0)}function vp(t){return t.dynamicChildren=jr>0?nt||Wn:null,mp(),jr>0&&nt&&nt.push(t),t}function ns(t,e,n,r,s,o){return vp(Qe(t,e,n,r,s,o,!0))}function so(t){return t?t.__v_isVNode===!0:!1}function _r(t,e){return t.type===e.type&&t.key===e.key}const xu=({key:t})=>t??null,Ti=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||Se(t)||ie(t)?{i:Ze,r:t,k:e,f:!!n}:t:null);function Qe(t,e=null,n=null,r=0,s=null,o=t===Ot?0:1,a=!1,c=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xu(e),ref:e&&Ti(e),scopeId:hu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ze};return c?(Go(h,n),o&128&&t.normalize(h)):n&&(h.shapeFlag|=Re(n)?8:16),jr>0&&!a&&nt&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&nt.push(h),h}const qe=_p;function _p(t,e=null,n=null,r=0,s=null,o=!1){if((!t||t===jd)&&(t=Fr),so(t)){const c=Yn(t,e,!0);return n&&Go(c,n),jr>0&&!o&&nt&&(c.shapeFlag&6?nt[nt.indexOf(t)]=c:nt.push(c)),c.patchFlag=-2,c}if(Pp(t)&&(t=t.__vccOpts),e){e=yp(e);let{class:c,style:h}=e;c&&!Re(c)&&(e.class=Po(c)),Ae(h)&&(Fo(h)&&!re(h)&&(h=Ne({},h)),e.style=Ro(h))}const a=Re(t)?1:Lu(t)?128:Ad(t)?64:Ae(t)?4:ie(t)?2:0;return Qe(t,e,n,r,s,a,o,!0)}function yp(t){return t?Fo(t)||Iu(t)?Ne({},t):t:null}function Yn(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:h}=t,d=e?Ep(s||{},e):s,g={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&xu(d),ref:e&&e.ref?n&&o?re(o)?o.concat(Ti(e)):[o,Ti(e)]:Ti(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yn(t.ssContent),ssFallback:t.ssFallback&&Yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&r&&Wo(g,h.clone(g)),g}function Hn(t=" ",e=0){return qe(es,null,t,e)}function yt(t){return t==null||typeof t=="boolean"?qe(Fr):re(t)?qe(Ot,null,t.slice()):typeof t=="object"?Yt(t):qe(es,null,String(t))}function Yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yn(t)}function Go(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Go(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Iu(e)?e._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),r&64?(n=16,e=[Hn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ep(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Po([e.class,r.class]));else if(s==="style")e.style=Ro([e.style,r.style]);else if(zi(s)){const o=e[s],a=r[s];a&&o!==a&&!(re(o)&&o.includes(a))&&(e[s]=o?[].concat(o,a):a)}else s!==""&&(e[s]=r[s])}return e}function vt(t,e,n,r=null){Tt(t,e,7,[n,r])}const wp=yu();let Ip=0;function bp(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||wp,o={uid:Ip++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tu(r,s),emitsOptions:Nu(r,s),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:r.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=up.bind(null,o),t.ce&&t.ce(o),o}let De=null,xi,oo;{const t=jc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};xi=e("__VUE_INSTANCE_SETTERS__",n=>De=n),oo=e("__VUE_SSR_SETTERS__",n=>rs=n)}const Gr=t=>{const e=De;return xi(t),t.scope.on(),()=>{t.scope.off(),xi(e)}},yl=()=>{De&&De.scope.off(),xi(null)};function Mu(t){return t.vnode.shapeFlag&4}let rs=!1;function Tp(t,e=!1,n=!1){e&&oo(e);const{props:r,children:s}=t.vnode,o=Mu(t);Xd(t,r,o,e),ep(t,s,n);const a=o?Sp(t,e):void 0;return e&&oo(!1),a}function Sp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Vd);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Cp(t):null,o=Gr(t);ln();const a=zr(r,t,0,[t.props,s]);if(cn(),o(),Uc(a)){if(Ar(t)||du(t),a.then(yl,yl),e)return a.then(c=>{El(t,c,e)}).catch(c=>{Yi(c,t,0)});t.asyncDep=a}else El(t,a,e)}else Uu(t,e)}function El(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=ou(e)),Uu(t,n)}let wl;function Uu(t,e,n){const r=t.type;if(!t.render){if(!e&&wl&&!r.render){const s=r.template||Ko(t).template;if(s){const{isCustomElement:o,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:h}=r,d=Ne(Ne({isCustomElement:o,delimiters:c},a),h);r.render=wl(s,d)}}t.render=r.render||wt}{const s=Gr(t);ln();try{Bd(t)}finally{cn(),s()}}}const Ap={get(t,e){return Ve(t,"get",""),t[e]}};function Cp(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ap),slots:t.slots,emit:t.emit,expose:e}}function is(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ou(jo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cr)return Cr[n](t)},has(e,n){return n in e||n in Cr}})):t.proxy}function Rp(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function Pp(t){return ie(t)&&"__vccOpts"in t}const at=(t,e)=>yd(t,e,rs);function Fu(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!re(e)?so(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&so(n)&&(n=[n]),qe(t,e,n))}const Op="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ao;const Il=typeof window<"u"&&window.trustedTypes;if(Il)try{ao=Il.createPolicy("vue",{createHTML:t=>t})}catch{}const ju=ao?t=>ao.createHTML(t):t=>t,kp="http://www.w3.org/2000/svg",Dp="http://www.w3.org/1998/Math/MathML",Pt=typeof document<"u"?document:null,bl=Pt&&Pt.createElement("template"),Np={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Pt.createElementNS(kp,t):e==="mathml"?Pt.createElementNS(Dp,t):n?Pt.createElement(t,{is:n}):Pt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Pt.createTextNode(t),createComment:t=>Pt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,o){const a=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{bl.innerHTML=ju(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=bl.content;if(r==="svg"||r==="mathml"){const h=c.firstChild;for(;h.firstChild;)c.appendChild(h.firstChild);c.removeChild(h)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Lp=Symbol("_vtc");function xp(t,e,n){const r=t[Lp];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Tl=Symbol("_vod"),Mp=Symbol("_vsh"),Up=Symbol(""),Fp=/(^|;)\s*display\s*:/;function jp(t,e,n){const r=t.style,s=Re(n);let o=!1;if(n&&!s){if(e)if(Re(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Si(r,c,"")}else for(const a in e)n[a]==null&&Si(r,a,"");for(const a in n)a==="display"&&(o=!0),Si(r,a,n[a])}else if(s){if(e!==n){const a=r[Up];a&&(n+=";"+a),r.cssText=n,o=Fp.test(n)}}else e&&t.removeAttribute("style");Tl in t&&(t[Tl]=o?r.display:"",t[Mp]&&(r.display="none"))}const Sl=/\s*!important$/;function Si(t,e,n){if(re(n))n.forEach(r=>Si(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Hp(t,e);Sl.test(n)?t.setProperty(Cn(r),n.replace(Sl,""),"important"):t[r]=n}}const Al=["Webkit","Moz","ms"],xs={};function Hp(t,e){const n=xs[e];if(n)return n;let r=dt(e);if(r!=="filter"&&r in t)return xs[e]=r;r=Ji(r);for(let s=0;s<Al.length;s++){const o=Al[s]+r;if(o in t)return xs[e]=o}return e}const Cl="http://www.w3.org/1999/xlink";function Rl(t,e,n,r,s,o=$f(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Cl,e.slice(6,e.length)):t.setAttributeNS(Cl,e,n):n==null||o&&!Hc(n)?t.removeAttribute(e):t.setAttribute(e,o?"":nr(n)?String(n):n)}function Vp(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ju(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Hc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(e)}function Vn(t,e,n,r){t.addEventListener(e,n,r)}function Bp(t,e,n,r){t.removeEventListener(e,n,r)}const Pl=Symbol("_vei");function $p(t,e,n,r,s=null){const o=t[Pl]||(t[Pl]={}),a=o[e];if(r&&a)a.value=r;else{const[c,h]=Wp(e);if(r){const d=o[e]=Gp(r,s);Vn(t,c,d,h)}else a&&(Bp(t,c,a,h),o[e]=void 0)}}const Ol=/(?:Once|Passive|Capture)$/;function Wp(t){let e;if(Ol.test(t)){e={};let r;for(;r=t.match(Ol);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cn(t.slice(2)),e]}let Ms=0;const Kp=Promise.resolve(),zp=()=>Ms||(Kp.then(()=>Ms=0),Ms=Date.now());function Gp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Tt(qp(r,n.value),e,5,[r])};return n.value=t,n.attached=zp(),n}function qp(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const kl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Jp=(t,e,n,r,s,o)=>{const a=s==="svg";e==="class"?xp(t,r,a):e==="style"?jp(t,n,r):zi(e)?So(e)||$p(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xp(t,e,r,a))?(Vp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rl(t,e,r,a,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Rl(t,e,r,a))};function Xp(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&kl(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return kl(e)&&Re(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!Re(n)))}const Dl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>wi(e,n):e};function Yp(t){t.target.composing=!0}function Nl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Us=Symbol("_assign"),Mi={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Us]=Dl(s);const o=r||s.props&&s.props.type==="number";Vn(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),o&&(c=Xs(c)),t[Us](c)}),n&&Vn(t,"change",()=>{t.value=t.value.trim()}),e||(Vn(t,"compositionstart",Yp),Vn(t,"compositionend",Nl),Vn(t,"change",Nl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[Us]=Dl(a),t.composing)return;const c=(o||t.type==="number")&&!/^0\d/.test(t.value)?Xs(t.value):t.value,h=e??"";c!==h&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===h)||(t.value=h))}},Qp=["ctrl","shift","alt","meta"],Zp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Qp.some(n=>t[`${n}Key`]&&!e.includes(n))},Hu=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...o)=>{for(let a=0;a<e.length;a++){const c=Zp[e[a]];if(c&&c(s,e))return}return t(s,...o)})},eg=Ne({patchProp:Jp},Np);let Ll;function tg(){return Ll||(Ll=np(eg))}const ng=(...t)=>{const e=tg().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ig(r);if(!s)return;const o=e._component;!ie(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,rg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function rg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ig(t){return Re(t)?document.querySelector(t):t}const Vu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},sg={};function og(t,e){const n=cl("router-link"),r=cl("router-view");return ts(),ns("div",null,[Qe("nav",null,[qe(n,{to:"/"},{default:Ii(()=>e[0]||(e[0]=[Hn("Home")])),_:1}),e[3]||(e[3]=Hn(" | ")),qe(n,{to:"/login"},{default:Ii(()=>e[1]||(e[1]=[Hn("Login")])),_:1}),e[4]||(e[4]=Hn(" | º ")),qe(n,{to:"/register"},{default:Ii(()=>e[2]||(e[2]=[Hn("Register")])),_:1})]),qe(r)])}const ag=Vu(sg,[["render",og]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Bn=typeof document<"u";function Bu(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Bu(t.default)}const ge=Object.assign;function Fs(t,e){const n={};for(const r in e){const s=e[r];n[r]=pt(s)?s.map(t):t(s)}return n}const Or=()=>{},pt=Array.isArray,$u=/#/g,cg=/&/g,ug=/\//g,hg=/=/g,fg=/\?/g,Wu=/\+/g,dg=/%5B/g,pg=/%5D/g,Ku=/%5E/g,gg=/%60/g,zu=/%7B/g,mg=/%7C/g,Gu=/%7D/g,vg=/%20/g;function qo(t){return encodeURI(""+t).replace(mg,"|").replace(dg,"[").replace(pg,"]")}function _g(t){return qo(t).replace(zu,"{").replace(Gu,"}").replace(Ku,"^")}function lo(t){return qo(t).replace(Wu,"%2B").replace(vg,"+").replace($u,"%23").replace(cg,"%26").replace(gg,"`").replace(zu,"{").replace(Gu,"}").replace(Ku,"^")}function yg(t){return lo(t).replace(hg,"%3D")}function Eg(t){return qo(t).replace($u,"%23").replace(fg,"%3F")}function wg(t){return t==null?"":Eg(t).replace(ug,"%2F")}function Hr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ig=/\/$/,bg=t=>t.replace(Ig,"");function js(t,e,n="/"){let r,s={},o="",a="";const c=e.indexOf("#");let h=e.indexOf("?");return c<h&&c>=0&&(h=-1),h>-1&&(r=e.slice(0,h),o=e.slice(h+1,c>-1?c:e.length),s=t(o)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=Cg(r??e,n),{fullPath:r+(o&&"?")+o+a,path:r,query:s,hash:Hr(a)}}function Tg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sg(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Qn(e.matched[r],n.matched[s])&&qu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ag(t[n],e[n]))return!1;return!0}function Ag(t,e){return pt(t)?Ml(t,e):pt(e)?Ml(e,t):t===e}function Ml(t,e){return pt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Cg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(a).join("/")}const Gt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Vr;(function(t){t.pop="pop",t.push="push"})(Vr||(Vr={}));var kr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(kr||(kr={}));function Rg(t){if(!t)if(Bn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bg(t)}const Pg=/^[^#]+#/;function Og(t,e){return t.replace(Pg,"#")+e}function kg(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ss=()=>({left:window.scrollX,top:window.scrollY});function Dg(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=kg(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ul(t,e){return(history.state?history.state.position-e:-1)+t}const co=new Map;function Ng(t,e){co.set(t,e)}function Lg(t){const e=co.get(t);return co.delete(t),e}let xg=()=>location.protocol+"//"+location.host;function Ju(t,e){const{pathname:n,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){let c=s.includes(t.slice(o))?t.slice(o).length:1,h=s.slice(c);return h[0]!=="/"&&(h="/"+h),xl(h,"")}return xl(n,t)+r+s}function Mg(t,e,n,r){let s=[],o=[],a=null;const c=({state:b})=>{const R=Ju(t,location),D=n.value,M=e.value;let G=0;if(b){if(n.value=R,e.value=b,a&&a===D){a=null;return}G=M?b.position-M.position:0}else r(R);s.forEach(q=>{q(n.value,D,{delta:G,type:Vr.pop,direction:G?G>0?kr.forward:kr.back:kr.unknown})})};function h(){a=n.value}function d(b){s.push(b);const R=()=>{const D=s.indexOf(b);D>-1&&s.splice(D,1)};return o.push(R),R}function g(){const{history:b}=window;b.state&&b.replaceState(ge({},b.state,{scroll:ss()}),"")}function _(){for(const b of o)b();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",g,{passive:!0}),{pauseListeners:h,listen:d,destroy:_}}function Fl(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ss():null}}function Ug(t){const{history:e,location:n}=window,r={value:Ju(t,n)},s={value:e.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(h,d,g){const _=t.indexOf("#"),b=_>-1?(n.host&&document.querySelector("base")?t:t.slice(_))+h:xg()+t+h;try{e[g?"replaceState":"pushState"](d,"",b),s.value=d}catch(R){console.error(R),n[g?"replace":"assign"](b)}}function a(h,d){const g=ge({},e.state,Fl(s.value.back,h,s.value.forward,!0),d,{position:s.value.position});o(h,g,!0),r.value=h}function c(h,d){const g=ge({},s.value,e.state,{forward:h,scroll:ss()});o(g.current,g,!0);const _=ge({},Fl(r.value,h,null),{position:g.position+1},d);o(h,_,!1),r.value=h}return{location:r,state:s,push:c,replace:a}}function Fg(t){t=Rg(t);const e=Ug(t),n=Mg(t,e.state,e.location,e.replace);function r(o,a=!0){a||n.pauseListeners(),history.go(o)}const s=ge({location:"",base:t,go:r,createHref:Og.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function jg(t){return typeof t=="string"||t&&typeof t=="object"}function Xu(t){return typeof t=="string"||typeof t=="symbol"}const Yu=Symbol("");var jl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(jl||(jl={}));function Zn(t,e){return ge(new Error,{type:t,[Yu]:!0},e)}function Rt(t,e){return t instanceof Error&&Yu in t&&(e==null||!!(t.type&e))}const Hl="[^/]+?",Hg={sensitive:!1,strict:!1,start:!0,end:!0},Vg=/[.+*?^${}()[\]/\\]/g;function Bg(t,e){const n=ge({},Hg,e),r=[];let s=n.start?"^":"";const o=[];for(const d of t){const g=d.length?[]:[90];n.strict&&!d.length&&(s+="/");for(let _=0;_<d.length;_++){const b=d[_];let R=40+(n.sensitive?.25:0);if(b.type===0)_||(s+="/"),s+=b.value.replace(Vg,"\\$&"),R+=40;else if(b.type===1){const{value:D,repeatable:M,optional:G,regexp:q}=b;o.push({name:D,repeatable:M,optional:G});const W=q||Hl;if(W!==Hl){R+=10;try{new RegExp(`(${W})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${D}" (${W}): `+B.message)}}let K=M?`((?:${W})(?:/(?:${W}))*)`:`(${W})`;_||(K=G&&d.length<2?`(?:/${K})`:"/"+K),G&&(K+="?"),s+=K,R+=20,G&&(R+=-8),M&&(R+=-20),W===".*"&&(R+=-50)}g.push(R)}r.push(g)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(d){const g=d.match(a),_={};if(!g)return null;for(let b=1;b<g.length;b++){const R=g[b]||"",D=o[b-1];_[D.name]=R&&D.repeatable?R.split("/"):R}return _}function h(d){let g="",_=!1;for(const b of t){(!_||!g.endsWith("/"))&&(g+="/"),_=!1;for(const R of b)if(R.type===0)g+=R.value;else if(R.type===1){const{value:D,repeatable:M,optional:G}=R,q=D in d?d[D]:"";if(pt(q)&&!M)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const W=pt(q)?q.join("/"):q;if(!W)if(G)b.length<2&&(g.endsWith("/")?g=g.slice(0,-1):_=!0);else throw new Error(`Missing required param "${D}"`);g+=W}}return g||"/"}return{re:a,score:r,keys:o,parse:c,stringify:h}}function $g(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Qu(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const o=$g(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(Vl(r))return 1;if(Vl(s))return-1}return s.length-r.length}function Vl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Wg={type:0,value:""},Kg=/[a-zA-Z0-9_]/;function zg(t){if(!t)return[[]];if(t==="/")return[[Wg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(R){throw new Error(`ERR (${n})/"${d}": ${R}`)}let n=0,r=n;const s=[];let o;function a(){o&&s.push(o),o=[]}let c=0,h,d="",g="";function _(){d&&(n===0?o.push({type:0,value:d}):n===1||n===2||n===3?(o.length>1&&(h==="*"||h==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:d,regexp:g,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):e("Invalid state to consume buffer"),d="")}function b(){d+=h}for(;c<t.length;){if(h=t[c++],h==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:h==="/"?(d&&_(),a()):h===":"?(_(),n=1):b();break;case 4:b(),n=r;break;case 1:h==="("?n=2:Kg.test(h)?b():(_(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&c--);break;case 2:h===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+h:n=3:g+=h;break;case 3:_(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&c--,g="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${d}"`),_(),a(),s}function Gg(t,e,n){const r=Bg(zg(t.path),n),s=ge(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function qg(t,e){const n=[],r=new Map;e=Kl({strict:!1,end:!0,sensitive:!1},e);function s(_){return r.get(_)}function o(_,b,R){const D=!R,M=$l(_);M.aliasOf=R&&R.record;const G=Kl(e,_),q=[M];if("alias"in _){const B=typeof _.alias=="string"?[_.alias]:_.alias;for(const ne of B)q.push($l(ge({},M,{components:R?R.record.components:M.components,path:ne,aliasOf:R?R.record:M})))}let W,K;for(const B of q){const{path:ne}=B;if(b&&ne[0]!=="/"){const le=b.record.path,I=le[le.length-1]==="/"?"":"/";B.path=b.record.path+(ne&&I+ne)}if(W=Gg(B,b,G),R?R.alias.push(W):(K=K||W,K!==W&&K.alias.push(W),D&&_.name&&!Wl(W)&&a(_.name)),Zu(W)&&h(W),M.children){const le=M.children;for(let I=0;I<le.length;I++)o(le[I],W,R&&R.children[I])}R=R||W}return K?()=>{a(K)}:Or}function a(_){if(Xu(_)){const b=r.get(_);b&&(r.delete(_),n.splice(n.indexOf(b),1),b.children.forEach(a),b.alias.forEach(a))}else{const b=n.indexOf(_);b>-1&&(n.splice(b,1),_.record.name&&r.delete(_.record.name),_.children.forEach(a),_.alias.forEach(a))}}function c(){return n}function h(_){const b=Yg(_,n);n.splice(b,0,_),_.record.name&&!Wl(_)&&r.set(_.record.name,_)}function d(_,b){let R,D={},M,G;if("name"in _&&_.name){if(R=r.get(_.name),!R)throw Zn(1,{location:_});G=R.record.name,D=ge(Bl(b.params,R.keys.filter(K=>!K.optional).concat(R.parent?R.parent.keys.filter(K=>K.optional):[]).map(K=>K.name)),_.params&&Bl(_.params,R.keys.map(K=>K.name))),M=R.stringify(D)}else if(_.path!=null)M=_.path,R=n.find(K=>K.re.test(M)),R&&(D=R.parse(M),G=R.record.name);else{if(R=b.name?r.get(b.name):n.find(K=>K.re.test(b.path)),!R)throw Zn(1,{location:_,currentLocation:b});G=R.record.name,D=ge({},b.params,_.params),M=R.stringify(D)}const q=[];let W=R;for(;W;)q.unshift(W.record),W=W.parent;return{name:G,path:M,params:D,matched:q,meta:Xg(q)}}t.forEach(_=>o(_));function g(){n.length=0,r.clear()}return{addRoute:o,resolve:d,removeRoute:a,clearRoutes:g,getRoutes:c,getRecordMatcher:s}}function Bl(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function $l(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Jg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Jg(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Wl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Xg(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Kl(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Yg(t,e){let n=0,r=e.length;for(;n!==r;){const o=n+r>>1;Qu(t,e[o])<0?r=o:n=o+1}const s=Qg(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Qg(t){let e=t;for(;e=e.parent;)if(Zu(e)&&Qu(t,e)===0)return e}function Zu({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Zg(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(Wu," "),a=o.indexOf("="),c=Hr(a<0?o:o.slice(0,a)),h=a<0?null:Hr(o.slice(a+1));if(c in e){let d=e[c];pt(d)||(d=e[c]=[d]),d.push(h)}else e[c]=h}return e}function zl(t){let e="";for(let n in t){const r=t[n];if(n=yg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(pt(r)?r.map(o=>o&&lo(o)):[r&&lo(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function em(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=pt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const tm=Symbol(""),Gl=Symbol(""),os=Symbol(""),eh=Symbol(""),uo=Symbol("");function yr(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qt(t,e,n,r,s,o=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,h)=>{const d=b=>{b===!1?h(Zn(4,{from:n,to:e})):b instanceof Error?h(b):jg(b)?h(Zn(2,{from:e,to:b})):(a&&r.enterCallbacks[s]===a&&typeof b=="function"&&a.push(b),c())},g=o(()=>t.call(r&&r.instances[s],e,n,d));let _=Promise.resolve(g);t.length<3&&(_=_.then(d)),_.catch(b=>h(b))})}function Hs(t,e,n,r,s=o=>o()){const o=[];for(const a of t)for(const c in a.components){let h=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(Bu(h)){const g=(h.__vccOpts||h)[e];g&&o.push(Qt(g,n,r,a,c,s))}else{let d=h();o.push(()=>d.then(g=>{if(!g)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const _=lg(g)?g.default:g;a.mods[c]=g,a.components[c]=_;const R=(_.__vccOpts||_)[e];return R&&Qt(R,n,r,a,c,s)()}))}}return o}function ql(t){const e=ft(os),n=ft(eh),r=at(()=>{const h=Kn(t.to);return e.resolve(h)}),s=at(()=>{const{matched:h}=r.value,{length:d}=h,g=h[d-1],_=n.matched;if(!g||!_.length)return-1;const b=_.findIndex(Qn.bind(null,g));if(b>-1)return b;const R=Jl(h[d-2]);return d>1&&Jl(g)===R&&_[_.length-1].path!==R?_.findIndex(Qn.bind(null,h[d-2])):b}),o=at(()=>s.value>-1&&sm(n.params,r.value.params)),a=at(()=>s.value>-1&&s.value===n.matched.length-1&&qu(n.params,r.value.params));function c(h={}){return im(h)?e[Kn(t.replace)?"replace":"push"](Kn(t.to)).catch(Or):Promise.resolve()}return{route:r,href:at(()=>r.value.href),isActive:o,isExactActive:a,navigate:c}}const nm=fu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ql,setup(t,{slots:e}){const n=Kr(ql(t)),{options:r}=ft(os),s=at(()=>({[Xl(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xl(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:Fu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),rm=nm;function im(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sm(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!pt(s)||s.length!==r.length||r.some((o,a)=>o!==s[a]))return!1}return!0}function Jl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xl=(t,e,n)=>t??e??n,om=fu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ft(uo),s=at(()=>t.route||r.value),o=ft(Gl,0),a=at(()=>{let d=Kn(o);const{matched:g}=s.value;let _;for(;(_=g[d])&&!_.components;)d++;return d}),c=at(()=>s.value.matched[a.value]);bi(Gl,at(()=>a.value+1)),bi(tm,c),bi(uo,s);const h=bn();return Rr(()=>[h.value,c.value,t.name],([d,g,_],[b,R,D])=>{g&&(g.instances[_]=d,R&&R!==g&&d&&d===b&&(g.leaveGuards.size||(g.leaveGuards=R.leaveGuards),g.updateGuards.size||(g.updateGuards=R.updateGuards))),d&&g&&(!R||!Qn(g,R)||!b)&&(g.enterCallbacks[_]||[]).forEach(M=>M(d))},{flush:"post"}),()=>{const d=s.value,g=t.name,_=c.value,b=_&&_.components[g];if(!b)return Yl(n.default,{Component:b,route:d});const R=_.props[g],D=R?R===!0?d.params:typeof R=="function"?R(d):R:null,G=Fu(b,ge({},D,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(_.instances[g]=null)},ref:h}));return Yl(n.default,{Component:G,route:d})||G}}});function Yl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const am=om;function lm(t){const e=qg(t.routes,t),n=t.parseQuery||Zg,r=t.stringifyQuery||zl,s=t.history,o=yr(),a=yr(),c=yr(),h=fd(Gt);let d=Gt;Bn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Fs.bind(null,k=>""+k),_=Fs.bind(null,wg),b=Fs.bind(null,Hr);function R(k,z){let V,J;return Xu(k)?(V=e.getRecordMatcher(k),J=z):J=k,e.addRoute(J,V)}function D(k){const z=e.getRecordMatcher(k);z&&e.removeRoute(z)}function M(){return e.getRoutes().map(k=>k.record)}function G(k){return!!e.getRecordMatcher(k)}function q(k,z){if(z=ge({},z||h.value),typeof k=="string"){const y=js(n,k,z.path),C=e.resolve({path:y.path},z),N=s.createHref(y.fullPath);return ge(y,C,{params:b(C.params),hash:Hr(y.hash),redirectedFrom:void 0,href:N})}let V;if(k.path!=null)V=ge({},k,{path:js(n,k.path,z.path).path});else{const y=ge({},k.params);for(const C in y)y[C]==null&&delete y[C];V=ge({},k,{params:_(y)}),z.params=_(z.params)}const J=e.resolve(V,z),oe=k.hash||"";J.params=g(b(J.params));const me=Tg(r,ge({},k,{hash:_g(oe),path:J.path})),m=s.createHref(me);return ge({fullPath:me,hash:oe,query:r===zl?em(k.query):k.query||{}},J,{redirectedFrom:void 0,href:m})}function W(k){return typeof k=="string"?js(n,k,h.value.path):ge({},k)}function K(k,z){if(d!==k)return Zn(8,{from:z,to:k})}function B(k){return I(k)}function ne(k){return B(ge(W(k),{replace:!0}))}function le(k){const z=k.matched[k.matched.length-1];if(z&&z.redirect){const{redirect:V}=z;let J=typeof V=="function"?V(k):V;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=W(J):{path:J},J.params={}),ge({query:k.query,hash:k.hash,params:J.path!=null?{}:k.params},J)}}function I(k,z){const V=d=q(k),J=h.value,oe=k.state,me=k.force,m=k.replace===!0,y=le(V);if(y)return I(ge(W(y),{state:typeof y=="object"?ge({},oe,y.state):oe,force:me,replace:m}),z||V);const C=V;C.redirectedFrom=z;let N;return!me&&Sg(r,J,V)&&(N=Zn(16,{to:C,from:J}),it(J,J,!0,!1)),(N?Promise.resolve(N):w(C,J)).catch(O=>Rt(O)?Rt(O,2)?O:lt(O):se(O,C,J)).then(O=>{if(O){if(Rt(O,2))return I(ge({replace:m},W(O.to),{state:typeof O.to=="object"?ge({},oe,O.to.state):oe,force:me}),z||C)}else O=S(C,J,!0,m,oe);return T(C,J,O),O})}function p(k,z){const V=K(k,z);return V?Promise.reject(V):Promise.resolve()}function v(k){const z=Vt.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(k):k()}function w(k,z){let V;const[J,oe,me]=cm(k,z);V=Hs(J.reverse(),"beforeRouteLeave",k,z);for(const y of J)y.leaveGuards.forEach(C=>{V.push(Qt(C,k,z))});const m=p.bind(null,k,z);return V.push(m),Ye(V).then(()=>{V=[];for(const y of o.list())V.push(Qt(y,k,z));return V.push(m),Ye(V)}).then(()=>{V=Hs(oe,"beforeRouteUpdate",k,z);for(const y of oe)y.updateGuards.forEach(C=>{V.push(Qt(C,k,z))});return V.push(m),Ye(V)}).then(()=>{V=[];for(const y of me)if(y.beforeEnter)if(pt(y.beforeEnter))for(const C of y.beforeEnter)V.push(Qt(C,k,z));else V.push(Qt(y.beforeEnter,k,z));return V.push(m),Ye(V)}).then(()=>(k.matched.forEach(y=>y.enterCallbacks={}),V=Hs(me,"beforeRouteEnter",k,z,v),V.push(m),Ye(V))).then(()=>{V=[];for(const y of a.list())V.push(Qt(y,k,z));return V.push(m),Ye(V)}).catch(y=>Rt(y,8)?y:Promise.reject(y))}function T(k,z,V){c.list().forEach(J=>v(()=>J(k,z,V)))}function S(k,z,V,J,oe){const me=K(k,z);if(me)return me;const m=z===Gt,y=Bn?history.state:{};V&&(J||m?s.replace(k.fullPath,ge({scroll:m&&y&&y.scroll},oe)):s.push(k.fullPath,oe)),h.value=k,it(k,z,V,m),lt()}let E;function Pe(){E||(E=s.listen((k,z,V)=>{if(!mt.listening)return;const J=q(k),oe=le(J);if(oe){I(ge(oe,{replace:!0}),J).catch(Or);return}d=J;const me=h.value;Bn&&Ng(Ul(me.fullPath,V.delta),ss()),w(J,me).catch(m=>Rt(m,12)?m:Rt(m,2)?(I(m.to,J).then(y=>{Rt(y,20)&&!V.delta&&V.type===Vr.pop&&s.go(-1,!1)}).catch(Or),Promise.reject()):(V.delta&&s.go(-V.delta,!1),se(m,J,me))).then(m=>{m=m||S(J,me,!1),m&&(V.delta&&!Rt(m,8)?s.go(-V.delta,!1):V.type===Vr.pop&&Rt(m,20)&&s.go(-1,!1)),T(J,me,m)}).catch(Or)}))}let Xe=yr(),Ee=yr(),te;function se(k,z,V){lt(k);const J=Ee.list();return J.length?J.forEach(oe=>oe(k,z,V)):console.error(k),Promise.reject(k)}function et(){return te&&h.value!==Gt?Promise.resolve():new Promise((k,z)=>{Xe.add([k,z])})}function lt(k){return te||(te=!k,Pe(),Xe.list().forEach(([z,V])=>k?V(k):z()),Xe.reset()),k}function it(k,z,V,J){const{scrollBehavior:oe}=t;if(!Bn||!oe)return Promise.resolve();const me=!V&&Lg(Ul(k.fullPath,0))||(J||!V)&&history.state&&history.state.scroll||null;return Bo().then(()=>oe(k,z,me)).then(m=>m&&Dg(m)).catch(m=>se(m,k,z))}const Ie=k=>s.go(k);let be;const Vt=new Set,mt={currentRoute:h,listening:!0,addRoute:R,removeRoute:D,clearRoutes:e.clearRoutes,hasRoute:G,getRoutes:M,resolve:q,options:t,push:B,replace:ne,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:o.add,beforeResolve:a.add,afterEach:c.add,onError:Ee.add,isReady:et,install(k){const z=this;k.component("RouterLink",rm),k.component("RouterView",am),k.config.globalProperties.$router=z,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Kn(h)}),Bn&&!be&&h.value===Gt&&(be=!0,B(s.location).catch(oe=>{}));const V={};for(const oe in Gt)Object.defineProperty(V,oe,{get:()=>h.value[oe],enumerable:!0});k.provide(os,z),k.provide(eh,ru(V)),k.provide(uo,h);const J=k.unmount;Vt.add(k),k.unmount=function(){Vt.delete(k),Vt.size<1&&(d=Gt,E&&E(),E=null,h.value=Gt,be=!1,te=!1),J()}}};function Ye(k){return k.reduce((z,V)=>z.then(()=>v(V)),Promise.resolve())}return mt}function cm(t,e){const n=[],r=[],s=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const c=e.matched[a];c&&(t.matched.find(d=>Qn(d,c))?r.push(c):n.push(c));const h=t.matched[a];h&&(e.matched.find(d=>Qn(d,h))||s.push(h))}return[n,r,s]}function th(){return ft(os)}const um={};function hm(t,e){return ts(),ns("div",null,e[0]||(e[0]=[Qe("h1",null,"Home ",-1)]))}const fm=Vu(um,[["render",hm]]);var dm=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let nh;const as=t=>nh=t,rh=Symbol();function ho(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Dr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Dr||(Dr={}));function pm(){const t=Bc(!0),e=t.run(()=>bn({}));let n=[],r=[];const s=jo({install(o){as(s),s._a=o,o.provide(rh,s),o.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(o){return!this._a&&!dm?r.push(o):n.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ih=()=>{};function Ql(t,e,n,r=ih){t.push(e);const s=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),r())};return!n&&$c()&&Wf(s),s}function Fn(t,...e){t.slice().forEach(n=>{n(...e)})}const gm=t=>t(),Zl=Symbol(),Vs=Symbol();function fo(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ho(s)&&ho(r)&&t.hasOwnProperty(n)&&!Se(r)&&!En(r)?t[n]=fo(s,r):t[n]=r}return t}const mm=Symbol();function vm(t){return!ho(t)||!t.hasOwnProperty(mm)}const{assign:Jt}=Object;function _m(t){return!!(Se(t)&&t.effect)}function ym(t,e,n,r){const{state:s,actions:o,getters:a}=e,c=n.state.value[t];let h;function d(){c||(n.state.value[t]=s?s():{});const g=gd(n.state.value[t]);return Jt(g,o,Object.keys(a||{}).reduce((_,b)=>(_[b]=jo(at(()=>{as(n);const R=n._s.get(t);return a[b].call(R,R)})),_),{}))}return h=sh(t,d,e,n,r,!0),h}function sh(t,e,n={},r,s,o){let a;const c=Jt({actions:{}},n),h={deep:!0};let d,g,_=[],b=[],R;const D=r.state.value[t];!o&&!D&&(r.state.value[t]={}),bn({});let M;function G(p){let v;d=g=!1,typeof p=="function"?(p(r.state.value[t]),v={type:Dr.patchFunction,storeId:t,events:R}):(fo(r.state.value[t],p),v={type:Dr.patchObject,payload:p,storeId:t,events:R});const w=M=Symbol();Bo().then(()=>{M===w&&(d=!0)}),g=!0,Fn(_,v,r.state.value[t])}const q=o?function(){const{state:v}=n,w=v?v():{};this.$patch(T=>{Jt(T,w)})}:ih;function W(){a.stop(),_=[],b=[],r._s.delete(t)}const K=(p,v="")=>{if(Zl in p)return p[Vs]=v,p;const w=function(){as(r);const T=Array.from(arguments),S=[],E=[];function Pe(te){S.push(te)}function Xe(te){E.push(te)}Fn(b,{args:T,name:w[Vs],store:ne,after:Pe,onError:Xe});let Ee;try{Ee=p.apply(this&&this.$id===t?this:ne,T)}catch(te){throw Fn(E,te),te}return Ee instanceof Promise?Ee.then(te=>(Fn(S,te),te)).catch(te=>(Fn(E,te),Promise.reject(te))):(Fn(S,Ee),Ee)};return w[Zl]=!0,w[Vs]=v,w},B={_p:r,$id:t,$onAction:Ql.bind(null,b),$patch:G,$reset:q,$subscribe(p,v={}){const w=Ql(_,p,v.detached,()=>T()),T=a.run(()=>Rr(()=>r.state.value[t],S=>{(v.flush==="sync"?g:d)&&p({storeId:t,type:Dr.direct,events:R},S)},Jt({},h,v)));return w},$dispose:W},ne=Kr(B);r._s.set(t,ne);const I=(r._a&&r._a.runWithContext||gm)(()=>r._e.run(()=>(a=Bc()).run(()=>e({action:K}))));for(const p in I){const v=I[p];if(Se(v)&&!_m(v)||En(v))o||(D&&vm(v)&&(Se(v)?v.value=D[p]:fo(v,D[p])),r.state.value[t][p]=v);else if(typeof v=="function"){const w=K(v,p);I[p]=w,c.actions[p]=v}}return Jt(ne,I),Jt(he(ne),I),Object.defineProperty(ne,"$state",{get:()=>r.state.value[t],set:p=>{G(v=>{Jt(v,p)})}}),r._p.forEach(p=>{Jt(ne,a.run(()=>p({store:ne,app:r._a,pinia:r,options:c})))}),D&&o&&n.hydrate&&n.hydrate(ne.$state,D),d=!0,g=!0,ne}function Em(t,e,n){let r,s;const o=typeof e=="function";r=t,s=o?n:e;function a(c,h){const d=Jd();return c=c||(d?ft(rh,null):null),c&&as(c),c=nh,c._s.has(r)||(o?sh(r,e,s,c):ym(r,s,c)),c._s.get(r)}return a.$id=r,a}var ec={};/**
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
 */const oh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wm=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],c=t[n++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,c=a?t[s+1]:0,h=s+2<t.length,d=h?t[s+2]:0,g=o>>2,_=(o&3)<<4|c>>4;let b=(c&15)<<2|d>>6,R=d&63;h||(R=64,a||(b=64)),r.push(n[g],n[_],n[b],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(oh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const _=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||c==null||d==null||_==null)throw new Im;const b=o<<2|c>>4;if(r.push(b),d!==64){const R=c<<4&240|d>>2;if(r.push(R),_!==64){const D=d<<6&192|_;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Im extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bm=function(t){const e=oh(t);return ah.encodeByteArray(e,!0)},Ui=function(t){return bm(t).replace(/\./g,"")},lh=function(t){try{return ah.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sm=()=>Tm().__FIREBASE_DEFAULTS__,Am=()=>{if(typeof process>"u"||typeof ec>"u")return;const t=ec.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Cm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lh(t[1]);return e&&JSON.parse(e)},Jo=()=>{try{return Sm()||Am()||Cm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ch=t=>{var e,n;return(n=(e=Jo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rm=t=>{const e=ch(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uh=()=>{var t;return(t=Jo())===null||t===void 0?void 0:t.config},hh=t=>{var e;return(e=Jo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Pm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Om(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ui(JSON.stringify(n)),Ui(JSON.stringify(a)),""].join(".")}/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function km(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function Dm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Nm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lm(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xm(){try{return typeof indexedDB=="object"}catch{return!1}}function Mm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const Um="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Um,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qr.prototype.create)}}class qr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Fm(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ht(s,c,r)}}function Fm(t,e){return t.replace(jm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jm=/\{\$([^}]+)}/g;function Hm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],a=e[s];if(tc(o)&&tc(a)){if(!Fi(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function tc(t){return t!==null&&typeof t=="object"}/**
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
 */function Jr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function Ir(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Vm(t,e){const n=new Bm(t,e);return n.subscribe.bind(n)}class Bm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$m(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Bs),s.error===void 0&&(s.error=Bs),s.complete===void 0&&(s.complete=Bs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $m(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bs(){}/**
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
 */function Rn(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _n="[DEFAULT]";/**
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
 */class Wm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zm(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Km(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Km(t){return t===_n?void 0:t}function zm(t){return t.instantiationMode==="EAGER"}/**
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
 */class Gm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const qm={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Jm=pe.INFO,Xm={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},Ym=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Xm[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xo{constructor(e){this.name=e,this._logLevel=Jm,this._logHandler=Ym,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const Qm=(t,e)=>e.some(n=>t instanceof n);let nc,rc;function Zm(){return nc||(nc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ev(){return rc||(rc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fh=new WeakMap,po=new WeakMap,dh=new WeakMap,$s=new WeakMap,Yo=new WeakMap;function tv(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(rn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&fh.set(n,t)}).catch(()=>{}),Yo.set(e,t),e}function nv(t){if(po.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});po.set(t,e)}let go={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return po.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rv(t){go=t(go)}function iv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ws(this),e,...n);return dh.set(r,e.sort?e.sort():[e]),rn(r)}:ev().includes(t)?function(...e){return t.apply(Ws(this),e),rn(fh.get(this))}:function(...e){return rn(t.apply(Ws(this),e))}}function sv(t){return typeof t=="function"?iv(t):(t instanceof IDBTransaction&&nv(t),Qm(t,Zm())?new Proxy(t,go):t)}function rn(t){if(t instanceof IDBRequest)return tv(t);if($s.has(t))return $s.get(t);const e=sv(t);return e!==t&&($s.set(t,e),Yo.set(e,t)),e}const Ws=t=>Yo.get(t);function ov(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),c=rn(a);return r&&a.addEventListener("upgradeneeded",h=>{r(rn(a.result),h.oldVersion,h.newVersion,rn(a.transaction),h)}),n&&a.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const av=["get","getKey","getAll","getAllKeys","count"],lv=["put","add","delete","clear"],Ks=new Map;function ic(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ks.get(e))return Ks.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=lv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||av.includes(n)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),s&&h.done]))[0]};return Ks.set(e,o),o}rv(t=>({...t,get:(e,n,r)=>ic(e,n)||t.get(e,n,r),has:(e,n)=>!!ic(e,n)||t.has(e,n)}));/**
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
 */class cv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mo="@firebase/app",sc="0.10.10";/**
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
 */const Ut=new Xo("@firebase/app"),hv="@firebase/app-compat",fv="@firebase/analytics-compat",dv="@firebase/analytics",pv="@firebase/app-check-compat",gv="@firebase/app-check",mv="@firebase/auth",vv="@firebase/auth-compat",_v="@firebase/database",yv="@firebase/database-compat",Ev="@firebase/functions",wv="@firebase/functions-compat",Iv="@firebase/installations",bv="@firebase/installations-compat",Tv="@firebase/messaging",Sv="@firebase/messaging-compat",Av="@firebase/performance",Cv="@firebase/performance-compat",Rv="@firebase/remote-config",Pv="@firebase/remote-config-compat",Ov="@firebase/storage",kv="@firebase/storage-compat",Dv="@firebase/firestore",Nv="@firebase/vertexai-preview",Lv="@firebase/firestore-compat",xv="firebase",Mv="10.13.1";/**
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
 */const vo="[DEFAULT]",Uv={[mo]:"fire-core",[hv]:"fire-core-compat",[dv]:"fire-analytics",[fv]:"fire-analytics-compat",[gv]:"fire-app-check",[pv]:"fire-app-check-compat",[mv]:"fire-auth",[vv]:"fire-auth-compat",[_v]:"fire-rtdb",[yv]:"fire-rtdb-compat",[Ev]:"fire-fn",[wv]:"fire-fn-compat",[Iv]:"fire-iid",[bv]:"fire-iid-compat",[Tv]:"fire-fcm",[Sv]:"fire-fcm-compat",[Av]:"fire-perf",[Cv]:"fire-perf-compat",[Rv]:"fire-rc",[Pv]:"fire-rc-compat",[Ov]:"fire-gcs",[kv]:"fire-gcs-compat",[Dv]:"fire-fst",[Lv]:"fire-fst-compat",[Nv]:"fire-vertex","fire-js":"fire-js",[xv]:"fire-js-all"};/**
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
 */const ji=new Map,Fv=new Map,_o=new Map;function oc(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function er(t){const e=t.name;if(_o.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;_o.set(e,t);for(const n of ji.values())oc(n,t);for(const n of Fv.values())oc(n,t);return!0}function Qo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Et(t){return t.settings!==void 0}/**
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
 */const jv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sn=new qr("app","Firebase",jv);/**
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
 */class Hv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
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
 */const rr=Mv;function ph(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw sn.create("bad-app-name",{appName:String(s)});if(n||(n=uh()),!n)throw sn.create("no-options");const o=ji.get(s);if(o){if(Fi(n,o.options)&&Fi(r,o.config))return o;throw sn.create("duplicate-app",{appName:s})}const a=new Gm(s);for(const h of _o.values())a.addComponent(h);const c=new Hv(n,r,a);return ji.set(s,c),c}function gh(t=vo){const e=ji.get(t);if(!e&&t===vo&&uh())return ph();if(!e)throw sn.create("no-app",{appName:t});return e}function on(t,e,n){var r;let s=(r=Uv[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(c.join(" "));return}er(new Tn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Vv="firebase-heartbeat-database",Bv=1,Br="firebase-heartbeat-store";let zs=null;function mh(){return zs||(zs=ov(Vv,Bv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Br)}catch(n){console.warn(n)}}}}).catch(t=>{throw sn.create("idb-open",{originalErrorMessage:t.message})})),zs}async function $v(t){try{const n=(await mh()).transaction(Br),r=await n.objectStore(Br).get(vh(t));return await n.done,r}catch(e){if(e instanceof Ht)Ut.warn(e.message);else{const n=sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function ac(t,e){try{const r=(await mh()).transaction(Br,"readwrite");await r.objectStore(Br).put(e,vh(t)),await r.done}catch(n){if(n instanceof Ht)Ut.warn(n.message);else{const r=sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(r.message)}}}function vh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wv=1024,Kv=30*24*60*60*1e3;class zv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=lc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Kv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lc(),{heartbeatsToSend:r,unsentEntries:s}=Gv(this._heartbeatsCache.heartbeats),o=Ui(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Ut.warn(n),""}}}function lc(){return new Date().toISOString().substring(0,10)}function Gv(t,e=Wv){const n=[];let r=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),cc(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xm()?Mm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $v(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ac(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ac(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cc(t){return Ui(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Jv(t){er(new Tn("platform-logger",e=>new cv(e),"PRIVATE")),er(new Tn("heartbeat",e=>new zv(e),"PRIVATE")),on(mo,sc,t),on(mo,sc,"esm2017"),on("fire-js","")}Jv("");function Zo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function _h(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xv=_h,yh=new qr("auth","Firebase",_h());/**
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
 */const Hi=new Xo("@firebase/auth");function Yv(t,...e){Hi.logLevel<=pe.WARN&&Hi.warn(`Auth (${rr}): ${t}`,...e)}function Ai(t,...e){Hi.logLevel<=pe.ERROR&&Hi.error(`Auth (${rr}): ${t}`,...e)}/**
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
 */function gt(t,...e){throw ea(t,...e)}function It(t,...e){return ea(t,...e)}function Eh(t,e,n){const r=Object.assign(Object.assign({},Xv()),{[e]:n});return new qr("auth","Firebase",r).create(e,{appName:t.name})}function Mt(t){return Eh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ea(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yh.create(t,...e)}function ee(t,e,...n){if(!t)throw ea(e,...n)}function Dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ai(e),new Error(e)}function Ft(t,e){t||Dt(e)}/**
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
 */function yo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qv(){return uc()==="http:"||uc()==="https:"}function uc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Zv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qv()||Dm()||"connection"in navigator)?navigator.onLine:!0}function e_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=km()||Nm()}get(){return Zv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ta(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wh{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const t_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const n_=new Xr(3e4,6e4);function un(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hn(t,e,n,r,s={}){return Ih(t,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=Jr(Object.assign({key:t.config.apiKey},a)).slice(1),h=await t._getAdditionalHeaders();return h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode),wh.fetch()(bh(t,t.config.apiHost,n,c),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},o))})}async function Ih(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},t_),e);try{const s=new i_(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw yi(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[h,d]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw yi(t,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw yi(t,"email-already-in-use",a);if(h==="USER_DISABLED")throw yi(t,"user-disabled",a);const g=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Eh(t,g,d);gt(t,g)}}catch(s){if(s instanceof Ht)throw s;gt(t,"network-request-failed",{message:String(s)})}}async function Yr(t,e,n,r,s={}){const o=await hn(t,e,n,r,s);return"mfaPendingCredential"in o&&gt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function bh(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ta(t.config,s):`${t.config.apiScheme}://${s}`}function r_(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class i_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),n_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=It(t,e,r);return s.customData._tokenResponse=n,s}function hc(t){return t!==void 0&&t.enterprise!==void 0}class s_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return r_(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function o_(t,e){return hn(t,"GET","/v2/recaptchaConfig",un(t,e))}/**
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
 */async function a_(t,e){return hn(t,"POST","/v1/accounts:delete",e)}async function Th(t,e){return hn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Nr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function l_(t,e=!1){const n=Rn(t),r=await n.getIdToken(e),s=na(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:Nr(Gs(s.auth_time)),issuedAtTime:Nr(Gs(s.iat)),expirationTime:Nr(Gs(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Gs(t){return Number(t)*1e3}function na(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ai("JWT malformed, contained fewer than 3 sections"),null;try{const s=lh(n);return s?JSON.parse(s):(Ai("Failed to decode base64 JWT payload"),null)}catch(s){return Ai("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fc(t){const e=na(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $r(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&c_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function c_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class u_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Eo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nr(this.lastLoginAt),this.creationTime=Nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vi(t){var e;const n=t.auth,r=await t.getIdToken(),s=await $r(t,Th(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Sh(o.providerUserInfo):[],c=f_(t.providerData,a),h=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(c!=null&&c.length),g=h?d:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Eo(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(t,_)}async function h_(t){const e=Rn(t);await Vi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function f_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Sh(t){return t.map(e=>{var{providerId:n}=e,r=Zo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function d_(t,e){const n=await Ih(t,{},async()=>{const r=Jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=bh(t,s,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",wh.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function p_(t,e){return hn(t,"POST","/v2/accounts:revokeToken",un(t,e))}/**
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
 */class Gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=fc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:o}=await d_(e,n);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:o}=n,a=new Gn;return r&&(ee(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(ee(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gn,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
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
 */function qt(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,o=Zo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new u_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Eo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await $r(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return l_(this,e)}reload(){return h_(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await $r(this,a_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,o,a,c,h,d,g;const _=(r=n.displayName)!==null&&r!==void 0?r:void 0,b=(s=n.email)!==null&&s!==void 0?s:void 0,R=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,D=(a=n.photoURL)!==null&&a!==void 0?a:void 0,M=(c=n.tenantId)!==null&&c!==void 0?c:void 0,G=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,q=(d=n.createdAt)!==null&&d!==void 0?d:void 0,W=(g=n.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:K,emailVerified:B,isAnonymous:ne,providerData:le,stsTokenManager:I}=n;ee(K&&I,e,"internal-error");const p=Gn.fromJSON(this.name,I);ee(typeof K=="string",e,"internal-error"),qt(_,e.name),qt(b,e.name),ee(typeof B=="boolean",e,"internal-error"),ee(typeof ne=="boolean",e,"internal-error"),qt(R,e.name),qt(D,e.name),qt(M,e.name),qt(G,e.name),qt(q,e.name),qt(W,e.name);const v=new Nt({uid:K,auth:e,email:b,emailVerified:B,displayName:_,isAnonymous:ne,photoURL:D,phoneNumber:R,tenantId:M,stsTokenManager:p,createdAt:q,lastLoginAt:W});return le&&Array.isArray(le)&&(v.providerData=le.map(w=>Object.assign({},w))),G&&(v._redirectEventId=G),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Gn;s.updateFromServerResponse(n);const o=new Nt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vi(o),o}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Sh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new Gn;c.updateFromIdToken(r);const h=new Nt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Eo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
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
 */const dc=new Map;function Lt(t){Ft(t instanceof Function,"Expected a class definition");let e=dc.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dc.set(t,e),e)}/**
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
 */class Ah{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ah.type="NONE";const pc=Ah;/**
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
 */function Ci(t,e,n){return`firebase:${t}:${e}:${n}`}class qn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Ci(this.userKey,s.apiKey,o),this.fullPersistenceKey=Ci("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qn(Lt(pc),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||Lt(pc);const a=Ci(r,e.config.apiKey,e.name);let c=null;for(const d of n)try{const g=await d._get(a);if(g){const _=Nt._fromJSON(e,g);d!==o&&(c=_),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new qn(o,e,r):(o=h[0],c&&await o._set(a,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new qn(o,e,r))}}/**
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
 */function gc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Oh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ch(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dh(e))return"Blackberry";if(Nh(e))return"Webos";if(Rh(e))return"Safari";if((e.includes("chrome/")||Ph(e))&&!e.includes("edge/"))return"Chrome";if(kh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ch(t=Je()){return/firefox\//i.test(t)}function Rh(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ph(t=Je()){return/crios\//i.test(t)}function Oh(t=Je()){return/iemobile/i.test(t)}function kh(t=Je()){return/android/i.test(t)}function Dh(t=Je()){return/blackberry/i.test(t)}function Nh(t=Je()){return/webos/i.test(t)}function ra(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function g_(t=Je()){var e;return ra(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function m_(){return Lm()&&document.documentMode===10}function Lh(t=Je()){return ra(t)||kh(t)||Nh(t)||Dh(t)||/windows phone/i.test(t)||Oh(t)}/**
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
 */function xh(t,e=[]){let n;switch(t){case"Browser":n=gc(Je());break;case"Worker":n=`${gc(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rr}/${r}`}/**
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
 */class v_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,c)=>{try{const h=e(o);a(h)}catch(h){c(h)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function __(t,e={}){return hn(t,"GET","/v2/passwordPolicy",un(t,e))}/**
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
 */const y_=6;class E_{constructor(e){var n,r,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:y_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,o,a,c;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(c=h.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),h}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class w_{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mc(this),this.idTokenSubscription=new mc(this),this.beforeStateQueue=new v_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Th(this,{idToken:e}),r=await Nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===c)&&(h!=null&&h.user)&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=e_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Et(this.app))return Promise.reject(Mt(this));const n=e?Rn(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Et(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await __(this),n=new E_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await p_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lt(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await qn.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,r,s);return()=>{a=!0,h()}}else{const h=e.addObserver(n);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Yv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pn(t){return Rn(t)}class mc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vm(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ls={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function I_(t){ls=t}function Mh(t){return ls.loadJS(t)}function b_(){return ls.recaptchaEnterpriseScript}function T_(){return ls.gapiScript}function S_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const A_="recaptcha-enterprise",C_="NO_RECAPTCHA";class R_{constructor(e){this.type=A_,this.auth=Pn(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,c)=>{o_(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new s_(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{c(h)})})}function s(o,a,c){const h=window.grecaptcha;hc(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(C_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(c=>{if(!n&&hc(window.grecaptcha))s(c,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=b_();h.length!==0&&(h+=c),Mh(h).then(()=>{s(c,o,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function vc(t,e,n,r=!1){const s=new R_(t);let o;try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function wo(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await vc(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await vc(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function P_(t,e){const n=Qo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(Fi(o,e??{}))return s;gt(s,"already-initialized")}return n.initialize({options:e})}function O_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function k_(t,e,n){const r=Pn(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=Uh(e),{host:a,port:c}=D_(e),h=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),N_()}function Uh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function D_(t){const e=Uh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:_c(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:_c(a)}}}function _c(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function N_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ia{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dt("not implemented")}_getIdTokenResponse(e){return Dt("not implemented")}_linkToIdToken(e,n){return Dt("not implemented")}_getReauthenticationResolver(e){return Dt("not implemented")}}async function L_(t,e){return hn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function x_(t,e){return Yr(t,"POST","/v1/accounts:signInWithPassword",un(t,e))}/**
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
 */async function M_(t,e){return Yr(t,"POST","/v1/accounts:signInWithEmailLink",un(t,e))}async function U_(t,e){return Yr(t,"POST","/v1/accounts:signInWithEmailLink",un(t,e))}/**
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
 */class Wr extends ia{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Wr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wo(e,n,"signInWithPassword",x_);case"emailLink":return M_(e,{email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wo(e,r,"signUpPassword",L_);case"emailLink":return U_(e,{idToken:n,email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Jn(t,e){return Yr(t,"POST","/v1/accounts:signInWithIdp",un(t,e))}/**
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
 */const F_="http://localhost";class Sn extends ia{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,o=Zo(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Sn(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Jn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jn(e,n)}buildRequest(){const e={requestUri:F_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jr(n)}return e}}/**
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
 */function j_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function H_(t){const e=wr(Ir(t)).link,n=e?wr(Ir(e)).deep_link_id:null,r=wr(Ir(t)).deep_link_id;return(r?wr(Ir(r)).link:null)||r||n||e||t}class sa{constructor(e){var n,r,s,o,a,c;const h=wr(Ir(e)),d=(n=h.apiKey)!==null&&n!==void 0?n:null,g=(r=h.oobCode)!==null&&r!==void 0?r:null,_=j_((s=h.mode)!==null&&s!==void 0?s:null);ee(d&&g&&_,"argument-error"),this.apiKey=d,this.operation=_,this.code=g,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=h.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=H_(e);try{return new sa(n)}catch{return null}}}/**
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
 */class ir{constructor(){this.providerId=ir.PROVIDER_ID}static credential(e,n){return Wr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sa.parseLink(n);return ee(r,"argument-error"),Wr._fromEmailAndCode(e,r.code,r.tenantId)}}ir.PROVIDER_ID="password";ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Fh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qr extends Fh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zt extends Qr{constructor(){super("facebook.com")}static credential(e){return Sn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
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
 */class en extends Qr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return en.credential(n,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
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
 */class tn extends Qr{constructor(){super("github.com")}static credential(e){return Sn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class nn extends Qr{constructor(){super("twitter.com")}static credential(e,n){return Sn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */async function V_(t,e){return Yr(t,"POST","/v1/accounts:signUp",un(t,e))}/**
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
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const o=await Nt._fromIdTokenResponse(e,r,s),a=yc(r);return new An({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=yc(r);return new An({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function yc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Bi extends Ht{constructor(e,n,r,s){var o;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Bi.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Bi(e,n,r,s)}}function jh(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Bi._fromErrorAndOperation(t,o,e,r):o})}async function B_(t,e,n=!1){const r=await $r(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return An._forOperation(t,"link",r)}/**
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
 */async function $_(t,e,n=!1){const{auth:r}=t;if(Et(r.app))return Promise.reject(Mt(r));const s="reauthenticate";try{const o=await $r(t,jh(r,s,e,t),n);ee(o.idToken,r,"internal-error");const a=na(o.idToken);ee(a,r,"internal-error");const{sub:c}=a;return ee(t.uid===c,r,"user-mismatch"),An._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&gt(r,"user-mismatch"),o}}/**
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
 */async function Hh(t,e,n=!1){if(Et(t.app))return Promise.reject(Mt(t));const r="signIn",s=await jh(t,r,e),o=await An._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(o.user),o}async function W_(t,e){return Hh(Pn(t),e)}/**
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
 */async function Vh(t){const e=Pn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function K_(t,e,n){if(Et(t.app))return Promise.reject(Mt(t));const r=Pn(t),a=await wo(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",V_).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Vh(t),h}),c=await An._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function z_(t,e,n){return Et(t.app)?Promise.reject(Mt(t)):W_(Rn(t),ir.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Vh(t),r})}function G_(t,e,n,r){return Rn(t).onIdTokenChanged(e,n,r)}function q_(t,e,n){return Rn(t).beforeAuthStateChanged(e,n)}const $i="__sak";/**
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
 */class Bh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($i,"1"),this.storage.removeItem($i),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const J_=1e3,X_=10;class $h extends Bh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,h)=>{this.notifyListeners(a,h)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);m_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,X_):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},J_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$h.type="LOCAL";const Y_=$h;/**
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
 */class Wh extends Bh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wh.type="SESSION";const Kh=Wh;/**
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
 */function Q_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new cs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:o}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(n.origin,o)),h=await Q_(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cs.receivers=[];/**
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
 */function oa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Z_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((c,h)=>{const d=oa("",20);s.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(_){const b=_;if(b.data.eventId===d)switch(b.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(b.data.response);break;default:clearTimeout(g),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function bt(){return window}function ey(t){bt().location.href=t}/**
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
 */function zh(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function ty(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ny(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ry(){return zh()?self:null}/**
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
 */const Gh="firebaseLocalStorageDb",iy=1,Wi="firebaseLocalStorage",qh="fbase_key";class Zr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function us(t,e){return t.transaction([Wi],e?"readwrite":"readonly").objectStore(Wi)}function sy(){const t=indexedDB.deleteDatabase(Gh);return new Zr(t).toPromise()}function Io(){const t=indexedDB.open(Gh,iy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wi,{keyPath:qh})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wi)?e(r):(r.close(),await sy(),e(await Io()))})})}async function Ec(t,e,n){const r=us(t,!0).put({[qh]:e,value:n});return new Zr(r).toPromise()}async function oy(t,e){const n=us(t,!1).get(e),r=await new Zr(n).toPromise();return r===void 0?null:r.value}function wc(t,e){const n=us(t,!0).delete(e);return new Zr(n).toPromise()}const ay=800,ly=3;class Jh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Io(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ly)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cs._getInstance(ry()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ty(),!this.activeServiceWorker)return;this.sender=new Z_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ny()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Io();return await Ec(e,$i,"1"),await wc(e,$i),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ec(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oy(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=us(s,!1).getAll();return new Zr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ay)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jh.type="LOCAL";const cy=Jh;new Xr(3e4,6e4);/**
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
 */function uy(t,e){return e?Lt(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class aa extends ia{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hy(t){return Hh(t.auth,new aa(t),t.bypassAuthState)}function fy(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),$_(n,new aa(t),t.bypassAuthState)}async function dy(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),B_(n,new aa(t),t.bypassAuthState)}/**
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
 */class Xh{constructor(e,n,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hy;case"linkViaPopup":case"linkViaRedirect":return dy;case"reauthViaPopup":case"reauthViaRedirect":return fy;default:gt(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const py=new Xr(2e3,1e4);class $n extends Xh{constructor(e,n,r,s,o){super(e,n,s,o),this.provider=r,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=oa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,py.get())};e()}}$n.currentPopupAction=null;/**
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
 */const gy="pendingRedirect",Ri=new Map;class my extends Xh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ri.get(this.auth._key());if(!e){try{const r=await vy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ri.set(this.auth._key(),e)}return this.bypassAuthState||Ri.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vy(t,e){const n=Ey(e),r=yy(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function _y(t,e){Ri.set(t._key(),e)}function yy(t){return Lt(t._redirectPersistence)}function Ey(t){return Ci(gy,t.config.apiKey,t.name)}async function wy(t,e,n=!1){if(Et(t.app))return Promise.reject(Mt(t));const r=Pn(t),s=uy(r,e),a=await new my(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Iy=10*60*1e3;class by{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ty(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Iy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ic(e))}saveEventToCache(e){this.cachedEventUids.add(Ic(e)),this.lastProcessedEventTime=Date.now()}}function Ic(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ty(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yh(t);default:return!1}}/**
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
 */async function Sy(t,e={}){return hn(t,"GET","/v1/projects",e)}/**
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
 */const Ay=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cy=/^https?/;async function Ry(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Sy(t);for(const n of e)try{if(Py(n))return}catch{}gt(t,"unauthorized-domain")}function Py(t){const e=yo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Cy.test(n))return!1;if(Ay.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Oy=new Xr(3e4,6e4);function bc(){const t=bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ky(t){return new Promise((e,n)=>{var r,s,o;function a(){bc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bc(),n(It(t,"network-request-failed"))},timeout:Oy.get()})}if(!((s=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=bt().gapi)===null||o===void 0)&&o.load)a();else{const c=S_("iframefcb");return bt()[c]=()=>{gapi.load?a():n(It(t,"network-request-failed"))},Mh(`${T_()}?onload=${c}`).catch(h=>n(h))}}).catch(e=>{throw Pi=null,e})}let Pi=null;function Dy(t){return Pi=Pi||ky(t),Pi}/**
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
 */const Ny=new Xr(5e3,15e3),Ly="__/auth/iframe",xy="emulator/auth/iframe",My={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fy(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ta(e,xy):`https://${t.config.authDomain}/${Ly}`,r={apiKey:e.apiKey,appName:t.name,v:rr},s=Uy.get(t.config.apiHost);s&&(r.eid=s);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Jr(r).slice(1)}`}async function jy(t){const e=await Dy(t),n=bt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:Fy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:My,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=It(t,"network-request-failed"),c=bt().setTimeout(()=>{o(a)},Ny.get());function h(){bt().clearTimeout(c),s(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
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
 */const Hy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vy=500,By=600,$y="_blank",Wy="http://localhost";class Tc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ky(t,e,n,r=Vy,s=By){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h=Object.assign(Object.assign({},Hy),{width:r.toString(),height:s.toString(),top:o,left:a}),d=Je().toLowerCase();n&&(c=Ph(d)?$y:n),Ch(d)&&(e=e||Wy,h.scrollbars="yes");const g=Object.entries(h).reduce((b,[R,D])=>`${b}${R}=${D},`,"");if(g_(d)&&c!=="_self")return zy(e||"",c),new Tc(null);const _=window.open(e||"",c,g);ee(_,t,"popup-blocked");try{_.focus()}catch{}return new Tc(_)}function zy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Gy="__/auth/handler",qy="emulator/auth/handler",Jy=encodeURIComponent("fac");async function Sc(t,e,n,r,s,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rr,eventId:s};if(e instanceof Fh){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Hm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,_]of Object.entries({}))a[g]=_}if(e instanceof Qr){const g=e.getScopes().filter(_=>_!=="");g.length>0&&(a.scopes=g.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const h=await t._getAppCheckToken(),d=h?`#${Jy}=${encodeURIComponent(h)}`:"";return`${Xy(t)}?${Jr(c).slice(1)}${d}`}function Xy({config:t}){return t.emulator?ta(t,qy):`https://${t.authDomain}/${Gy}`}/**
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
 */const qs="webStorageSupport";class Yy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kh,this._completeRedirectFn=wy,this._overrideRedirectResult=_y}async _openPopup(e,n,r,s){var o;Ft((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Sc(e,n,r,yo(),s);return Ky(e,a,oa())}async _openRedirect(e,n,r,s){await this._originValidation(e);const o=await Sc(e,n,r,yo(),s);return ey(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(Ft(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jy(e),r=new by(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qs,{type:qs},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[qs];a!==void 0&&n(!!a),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ry(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lh()||Rh()||ra()}}const Qy=Yy;var Ac="@firebase/auth",Cc="1.7.8";/**
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
 */class Zy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tE(t){er(new Tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xh(t)},d=new w_(r,s,o,h);return O_(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),er(new Tn("auth-internal",e=>{const n=Pn(e.getProvider("auth").getImmediate());return(r=>new Zy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Ac,Cc,eE(t)),on(Ac,Cc,"esm2017")}/**
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
 */const nE=5*60,rE=hh("authIdTokenMaxAge")||nE;let Rc=null;const iE=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rE)return;const s=n==null?void 0:n.token;Rc!==s&&(Rc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sE(t=gh()){const e=Qo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=P_(t,{popupRedirectResolver:Qy,persistence:[cy,Y_,Kh]}),r=hh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=iE(o.toString());q_(n,a,()=>a(n.currentUser)),G_(n,c=>a(c))}}const s=ch("auth");return s&&k_(n,`http://${s}`),n}function oE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}I_({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const o=It("internal-error");o.customData=s,n(o)},r.type="text/javascript",r.charset="UTF-8",oE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tE("Browser");var aE="firebase",lE="10.13.1";/**
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
 */on(aE,lE,"app");var Pc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qh;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,p){function v(){}v.prototype=p.prototype,I.D=p.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(w,T,S){for(var E=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)E[Pe-2]=arguments[Pe];return p.prototype[T].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,p,v){v||(v=0);var w=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)w[T]=p.charCodeAt(v++)|p.charCodeAt(v++)<<8|p.charCodeAt(v++)<<16|p.charCodeAt(v++)<<24;else for(T=0;16>T;++T)w[T]=p[v++]|p[v++]<<8|p[v++]<<16|p[v++]<<24;p=I.g[0],v=I.g[1],T=I.g[2];var S=I.g[3],E=p+(S^v&(T^S))+w[0]+3614090360&4294967295;p=v+(E<<7&4294967295|E>>>25),E=S+(T^p&(v^T))+w[1]+3905402710&4294967295,S=p+(E<<12&4294967295|E>>>20),E=T+(v^S&(p^v))+w[2]+606105819&4294967295,T=S+(E<<17&4294967295|E>>>15),E=v+(p^T&(S^p))+w[3]+3250441966&4294967295,v=T+(E<<22&4294967295|E>>>10),E=p+(S^v&(T^S))+w[4]+4118548399&4294967295,p=v+(E<<7&4294967295|E>>>25),E=S+(T^p&(v^T))+w[5]+1200080426&4294967295,S=p+(E<<12&4294967295|E>>>20),E=T+(v^S&(p^v))+w[6]+2821735955&4294967295,T=S+(E<<17&4294967295|E>>>15),E=v+(p^T&(S^p))+w[7]+4249261313&4294967295,v=T+(E<<22&4294967295|E>>>10),E=p+(S^v&(T^S))+w[8]+1770035416&4294967295,p=v+(E<<7&4294967295|E>>>25),E=S+(T^p&(v^T))+w[9]+2336552879&4294967295,S=p+(E<<12&4294967295|E>>>20),E=T+(v^S&(p^v))+w[10]+4294925233&4294967295,T=S+(E<<17&4294967295|E>>>15),E=v+(p^T&(S^p))+w[11]+2304563134&4294967295,v=T+(E<<22&4294967295|E>>>10),E=p+(S^v&(T^S))+w[12]+1804603682&4294967295,p=v+(E<<7&4294967295|E>>>25),E=S+(T^p&(v^T))+w[13]+4254626195&4294967295,S=p+(E<<12&4294967295|E>>>20),E=T+(v^S&(p^v))+w[14]+2792965006&4294967295,T=S+(E<<17&4294967295|E>>>15),E=v+(p^T&(S^p))+w[15]+1236535329&4294967295,v=T+(E<<22&4294967295|E>>>10),E=p+(T^S&(v^T))+w[1]+4129170786&4294967295,p=v+(E<<5&4294967295|E>>>27),E=S+(v^T&(p^v))+w[6]+3225465664&4294967295,S=p+(E<<9&4294967295|E>>>23),E=T+(p^v&(S^p))+w[11]+643717713&4294967295,T=S+(E<<14&4294967295|E>>>18),E=v+(S^p&(T^S))+w[0]+3921069994&4294967295,v=T+(E<<20&4294967295|E>>>12),E=p+(T^S&(v^T))+w[5]+3593408605&4294967295,p=v+(E<<5&4294967295|E>>>27),E=S+(v^T&(p^v))+w[10]+38016083&4294967295,S=p+(E<<9&4294967295|E>>>23),E=T+(p^v&(S^p))+w[15]+3634488961&4294967295,T=S+(E<<14&4294967295|E>>>18),E=v+(S^p&(T^S))+w[4]+3889429448&4294967295,v=T+(E<<20&4294967295|E>>>12),E=p+(T^S&(v^T))+w[9]+568446438&4294967295,p=v+(E<<5&4294967295|E>>>27),E=S+(v^T&(p^v))+w[14]+3275163606&4294967295,S=p+(E<<9&4294967295|E>>>23),E=T+(p^v&(S^p))+w[3]+4107603335&4294967295,T=S+(E<<14&4294967295|E>>>18),E=v+(S^p&(T^S))+w[8]+1163531501&4294967295,v=T+(E<<20&4294967295|E>>>12),E=p+(T^S&(v^T))+w[13]+2850285829&4294967295,p=v+(E<<5&4294967295|E>>>27),E=S+(v^T&(p^v))+w[2]+4243563512&4294967295,S=p+(E<<9&4294967295|E>>>23),E=T+(p^v&(S^p))+w[7]+1735328473&4294967295,T=S+(E<<14&4294967295|E>>>18),E=v+(S^p&(T^S))+w[12]+2368359562&4294967295,v=T+(E<<20&4294967295|E>>>12),E=p+(v^T^S)+w[5]+4294588738&4294967295,p=v+(E<<4&4294967295|E>>>28),E=S+(p^v^T)+w[8]+2272392833&4294967295,S=p+(E<<11&4294967295|E>>>21),E=T+(S^p^v)+w[11]+1839030562&4294967295,T=S+(E<<16&4294967295|E>>>16),E=v+(T^S^p)+w[14]+4259657740&4294967295,v=T+(E<<23&4294967295|E>>>9),E=p+(v^T^S)+w[1]+2763975236&4294967295,p=v+(E<<4&4294967295|E>>>28),E=S+(p^v^T)+w[4]+1272893353&4294967295,S=p+(E<<11&4294967295|E>>>21),E=T+(S^p^v)+w[7]+4139469664&4294967295,T=S+(E<<16&4294967295|E>>>16),E=v+(T^S^p)+w[10]+3200236656&4294967295,v=T+(E<<23&4294967295|E>>>9),E=p+(v^T^S)+w[13]+681279174&4294967295,p=v+(E<<4&4294967295|E>>>28),E=S+(p^v^T)+w[0]+3936430074&4294967295,S=p+(E<<11&4294967295|E>>>21),E=T+(S^p^v)+w[3]+3572445317&4294967295,T=S+(E<<16&4294967295|E>>>16),E=v+(T^S^p)+w[6]+76029189&4294967295,v=T+(E<<23&4294967295|E>>>9),E=p+(v^T^S)+w[9]+3654602809&4294967295,p=v+(E<<4&4294967295|E>>>28),E=S+(p^v^T)+w[12]+3873151461&4294967295,S=p+(E<<11&4294967295|E>>>21),E=T+(S^p^v)+w[15]+530742520&4294967295,T=S+(E<<16&4294967295|E>>>16),E=v+(T^S^p)+w[2]+3299628645&4294967295,v=T+(E<<23&4294967295|E>>>9),E=p+(T^(v|~S))+w[0]+4096336452&4294967295,p=v+(E<<6&4294967295|E>>>26),E=S+(v^(p|~T))+w[7]+1126891415&4294967295,S=p+(E<<10&4294967295|E>>>22),E=T+(p^(S|~v))+w[14]+2878612391&4294967295,T=S+(E<<15&4294967295|E>>>17),E=v+(S^(T|~p))+w[5]+4237533241&4294967295,v=T+(E<<21&4294967295|E>>>11),E=p+(T^(v|~S))+w[12]+1700485571&4294967295,p=v+(E<<6&4294967295|E>>>26),E=S+(v^(p|~T))+w[3]+2399980690&4294967295,S=p+(E<<10&4294967295|E>>>22),E=T+(p^(S|~v))+w[10]+4293915773&4294967295,T=S+(E<<15&4294967295|E>>>17),E=v+(S^(T|~p))+w[1]+2240044497&4294967295,v=T+(E<<21&4294967295|E>>>11),E=p+(T^(v|~S))+w[8]+1873313359&4294967295,p=v+(E<<6&4294967295|E>>>26),E=S+(v^(p|~T))+w[15]+4264355552&4294967295,S=p+(E<<10&4294967295|E>>>22),E=T+(p^(S|~v))+w[6]+2734768916&4294967295,T=S+(E<<15&4294967295|E>>>17),E=v+(S^(T|~p))+w[13]+1309151649&4294967295,v=T+(E<<21&4294967295|E>>>11),E=p+(T^(v|~S))+w[4]+4149444226&4294967295,p=v+(E<<6&4294967295|E>>>26),E=S+(v^(p|~T))+w[11]+3174756917&4294967295,S=p+(E<<10&4294967295|E>>>22),E=T+(p^(S|~v))+w[2]+718787259&4294967295,T=S+(E<<15&4294967295|E>>>17),E=v+(S^(T|~p))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(T+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,p){p===void 0&&(p=I.length);for(var v=p-this.blockSize,w=this.B,T=this.h,S=0;S<p;){if(T==0)for(;S<=v;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<p;)if(w[T++]=I.charCodeAt(S++),T==this.blockSize){s(this,w),T=0;break}}else for(;S<p;)if(w[T++]=I[S++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;var v=8*this.o;for(p=I.length-8;p<I.length;++p)I[p]=v&255,v/=256;for(this.u(I),I=Array(16),p=v=0;4>p;++p)for(var w=0;32>w;w+=8)I[v++]=this.g[p]>>>w&255;return I};function o(I,p){var v=c;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=p(I)}function a(I,p){this.h=p;for(var v=[],w=!0,T=I.length-1;0<=T;T--){var S=I[T]|0;w&&S==p||(v[T]=S,w=!1)}this.g=v}var c={};function h(I){return-128<=I&&128>I?o(I,function(p){return new a([p|0],0>p?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return _;if(0>I)return G(d(-I));for(var p=[],v=1,w=0;I>=v;w++)p[w]=I/v|0,v*=4294967296;return new a(p,0)}function g(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return G(g(I.substring(1),p));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(p,8)),w=_,T=0;T<I.length;T+=8){var S=Math.min(8,I.length-T),E=parseInt(I.substring(T,T+S),p);8>S?(S=d(Math.pow(p,S)),w=w.j(S).add(d(E))):(w=w.j(v),w=w.add(d(E)))}return w}var _=h(0),b=h(1),R=h(16777216);t=a.prototype,t.m=function(){if(M(this))return-G(this).m();for(var I=0,p=1,v=0;v<this.g.length;v++){var w=this.i(v);I+=(0<=w?w:4294967296+w)*p,p*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D(this))return"0";if(M(this))return"-"+G(this).toString(I);for(var p=d(Math.pow(I,6)),v=this,w="";;){var T=B(v,p).g;v=q(v,T.j(p));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=T,D(v))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function D(I){if(I.h!=0)return!1;for(var p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function M(I){return I.h==-1}t.l=function(I){return I=q(this,I),M(I)?-1:D(I)?0:1};function G(I){for(var p=I.g.length,v=[],w=0;w<p;w++)v[w]=~I.g[w];return new a(v,~I.h).add(b)}t.abs=function(){return M(this)?G(this):this},t.add=function(I){for(var p=Math.max(this.g.length,I.g.length),v=[],w=0,T=0;T<=p;T++){var S=w+(this.i(T)&65535)+(I.i(T)&65535),E=(S>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);w=E>>>16,S&=65535,E&=65535,v[T]=E<<16|S}return new a(v,v[v.length-1]&-2147483648?-1:0)};function q(I,p){return I.add(G(p))}t.j=function(I){if(D(this)||D(I))return _;if(M(this))return M(I)?G(this).j(G(I)):G(G(this).j(I));if(M(I))return G(this.j(G(I)));if(0>this.l(R)&&0>I.l(R))return d(this.m()*I.m());for(var p=this.g.length+I.g.length,v=[],w=0;w<2*p;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var T=0;T<I.g.length;T++){var S=this.i(w)>>>16,E=this.i(w)&65535,Pe=I.i(T)>>>16,Xe=I.i(T)&65535;v[2*w+2*T]+=E*Xe,W(v,2*w+2*T),v[2*w+2*T+1]+=S*Xe,W(v,2*w+2*T+1),v[2*w+2*T+1]+=E*Pe,W(v,2*w+2*T+1),v[2*w+2*T+2]+=S*Pe,W(v,2*w+2*T+2)}for(w=0;w<p;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=p;w<2*p;w++)v[w]=0;return new a(v,0)};function W(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function K(I,p){this.g=I,this.h=p}function B(I,p){if(D(p))throw Error("division by zero");if(D(I))return new K(_,_);if(M(I))return p=B(G(I),p),new K(G(p.g),G(p.h));if(M(p))return p=B(I,G(p)),new K(G(p.g),p.h);if(30<I.g.length){if(M(I)||M(p))throw Error("slowDivide_ only works with positive integers.");for(var v=b,w=p;0>=w.l(I);)v=ne(v),w=ne(w);var T=le(v,1),S=le(w,1);for(w=le(w,2),v=le(v,2);!D(w);){var E=S.add(w);0>=E.l(I)&&(T=T.add(v),S=E),w=le(w,1),v=le(v,1)}return p=q(I,T.j(p)),new K(T,p)}for(T=_;0<=I.l(p);){for(v=Math.max(1,Math.floor(I.m()/p.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=d(v),E=S.j(p);M(E)||0<E.l(I);)v-=w,S=d(v),E=S.j(p);D(S)&&(S=b),T=T.add(S),I=q(I,E)}return new K(T,I)}t.A=function(I){return B(this,I).h},t.and=function(I){for(var p=Math.max(this.g.length,I.g.length),v=[],w=0;w<p;w++)v[w]=this.i(w)&I.i(w);return new a(v,this.h&I.h)},t.or=function(I){for(var p=Math.max(this.g.length,I.g.length),v=[],w=0;w<p;w++)v[w]=this.i(w)|I.i(w);return new a(v,this.h|I.h)},t.xor=function(I){for(var p=Math.max(this.g.length,I.g.length),v=[],w=0;w<p;w++)v[w]=this.i(w)^I.i(w);return new a(v,this.h^I.h)};function ne(I){for(var p=I.g.length+1,v=[],w=0;w<p;w++)v[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(v,I.h)}function le(I,p){var v=p>>5;p%=32;for(var w=I.g.length-v,T=[],S=0;S<w;S++)T[S]=0<p?I.i(S+v)>>>p|I.i(S+v+1)<<32-p:I.i(S+v);return new a(T,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,Qh=a}).apply(typeof Pc<"u"?Pc:typeof self<"u"?self:typeof window<"u"?window:{});var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ei=="object"&&Ei];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=n(this);function s(i,l){if(l)e:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in u))break e;u=u[A]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&e(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,f=!1,A={next:function(){if(!f&&u<i.length){var P=u++;return{value:l(P,i[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function g(i,l,u){return i.call.apply(i.bind,arguments)}function _(i,l,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function b(i,l,u){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:_,b.apply(null,arguments)}function R(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function D(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,A,P){for(var j=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)j[ve-2]=arguments[ve];return l.prototype[A].apply(f,j)}}function M(i){const l=i.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function G(i,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const A=i.length||0,P=f.length||0;i.length=A+P;for(let j=0;j<P;j++)i[A+j]=f[j]}else i.push(f)}}class q{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function W(i){return/^[\s\xa0]*$/.test(i)}function K(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function B(i){return B[" "](i),i}B[" "]=function(){};var ne=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function le(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function I(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function p(i){const l={};for(const u in i)l[u]=i[u];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(i,l){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)i[u]=f[u];for(let P=0;P<v.length;P++)u=v[P],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function T(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function S(i){c.setTimeout(()=>{throw i},0)}function E(){var i=et;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class Pe{constructor(){this.h=this.g=null}add(l,u){const f=Xe.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Xe=new q(()=>new Ee,i=>i.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let te,se=!1,et=new Pe,lt=()=>{const i=c.Promise.resolve(void 0);te=()=>{i.then(it)}};var it=()=>{for(var i;i=E();){try{i.h.call(i.g)}catch(u){S(u)}var l=Xe;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}se=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var Vt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return i}();function mt(i,l){if(be.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(ne){e:{try{B(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ye[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&mt.aa.h.call(this)}}D(mt,be);var Ye={2:"touch",3:"pen",4:"mouse"};mt.prototype.h=function(){mt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),z=0;function V(i,l,u,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=A,this.key=++z,this.da=this.fa=!1}function J(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function oe(i){this.src=i,this.g={},this.h=0}oe.prototype.add=function(i,l,u,f,A){var P=i.toString();i=this.g[P],i||(i=this.g[P]=[],this.h++);var j=m(i,l,f,A);return-1<j?(l=i[j],u||(l.fa=!1)):(l=new V(l,this.src,P,!!f,A),l.fa=u,i.push(l)),l};function me(i,l){var u=l.type;if(u in i.g){var f=i.g[u],A=Array.prototype.indexOf.call(f,l,void 0),P;(P=0<=A)&&Array.prototype.splice.call(f,A,1),P&&(J(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function m(i,l,u,f){for(var A=0;A<i.length;++A){var P=i[A];if(!P.da&&P.listener==l&&P.capture==!!u&&P.ha==f)return A}return-1}var y="closure_lm_"+(1e6*Math.random()|0),C={};function N(i,l,u,f,A){if(Array.isArray(l)){for(var P=0;P<l.length;P++)N(i,l[P],u,f,A);return null}return u=Y(u),i&&i[k]?i.K(l,u,d(f)?!!f.capture:!!f,A):O(i,l,u,!1,f,A)}function O(i,l,u,f,A,P){if(!l)throw Error("Invalid event type");var j=d(A)?!!A.capture:!!A,ve=Q(i);if(ve||(i[y]=ve=new oe(i)),u=ve.add(l,u,f,j,P),u.proxy)return u;if(f=L(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)Vt||(A=j),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(U(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function L(){function i(u){return l.call(i.src,i.listener,u)}const l=x;return i}function H(i,l,u,f,A){if(Array.isArray(l))for(var P=0;P<l.length;P++)H(i,l[P],u,f,A);else f=d(f)?!!f.capture:!!f,u=Y(u),i&&i[k]?(i=i.i,l=String(l).toString(),l in i.g&&(P=i.g[l],u=m(P,u,f,A),-1<u&&(J(P[u]),Array.prototype.splice.call(P,u,1),P.length==0&&(delete i.g[l],i.h--)))):i&&(i=Q(i))&&(l=i.g[l.toString()],i=-1,l&&(i=m(l,u,f,A)),(u=-1<i?l[i]:null)&&F(u))}function F(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[k])me(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(U(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=Q(l))?(me(u,i),u.h==0&&(u.src=null,l[y]=null)):J(i)}}}function U(i){return i in C?C[i]:C[i]="on"+i}function x(i,l){if(i.da)i=!0;else{l=new mt(l,this);var u=i.listener,f=i.ha||i.src;i.fa&&F(i),i=u.call(f,l)}return i}function Q(i){return i=i[y],i instanceof oe?i:null}var $="__closure_events_fn_"+(1e9*Math.random()>>>0);function Y(i){return typeof i=="function"?i:(i[$]||(i[$]=function(l){return i.handleEvent(l)}),i[$])}function X(){Ie.call(this),this.i=new oe(this),this.M=this,this.F=null}D(X,Ie),X.prototype[k]=!0,X.prototype.removeEventListener=function(i,l,u,f){H(this,i,l,u,f)};function Z(i,l){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new be(l,i);else if(l instanceof be)l.target=l.target||i;else{var A=l;l=new be(f,i),w(l,A)}if(A=!0,u)for(var P=u.length-1;0<=P;P--){var j=l.g=u[P];A=fe(j,f,!0,l)&&A}if(j=l.g=i,A=fe(j,f,!0,l)&&A,A=fe(j,f,!1,l)&&A,u)for(P=0;P<u.length;P++)j=l.g=u[P],A=fe(j,f,!1,l)&&A}X.prototype.N=function(){if(X.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],f=0;f<u.length;f++)J(u[f]);delete i.g[l],i.h--}}this.F=null},X.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},X.prototype.L=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function fe(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,P=0;P<l.length;++P){var j=l[P];if(j&&!j.da&&j.capture==u){var ve=j.listener,ke=j.ha||j.src;j.fa&&me(i.i,j),A=ve.call(ke,f)!==!1&&A}}return A&&!f.defaultPrevented}function ce(i,l,u){if(typeof i=="function")u&&(i=b(i,u));else if(i&&typeof i.handleEvent=="function")i=b(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function Le(i){i.g=ce(()=>{i.g=null,i.i&&(i.i=!1,Le(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Ce extends Ie{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Le(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oe(i){Ie.call(this),this.h=i,this.g={}}D(Oe,Ie);var xe=[];function Bt(i){le(i.g,function(l,u){this.g.hasOwnProperty(u)&&F(l)},i),i.g={}}Oe.prototype.N=function(){Oe.aa.N.call(this),Bt(this)},Oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var On=c.JSON.stringify,Be=c.JSON.parse,st=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function kn(){}kn.prototype.h=null;function fa(i){return i.h||(i.h=i.i())}function sf(){}var sr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hs(){be.call(this,"d")}D(hs,be);function fs(){be.call(this,"c")}D(fs,be);var Dn={},da=null;function ds(){return da=da||new X}Dn.La="serverreachability";function pa(i){be.call(this,Dn.La,i)}D(pa,be);function or(i){const l=ds();Z(l,new pa(l))}Dn.STAT_EVENT="statevent";function ga(i,l){be.call(this,Dn.STAT_EVENT,i),this.stat=l}D(ga,be);function $e(i){const l=ds();Z(l,new ga(l,i))}Dn.Ma="timingevent";function ma(i,l){be.call(this,Dn.Ma,i),this.size=l}D(ma,be);function ar(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function lr(){this.g=!0}lr.prototype.xa=function(){this.g=!1};function of(i,l,u,f,A,P){i.info(function(){if(i.g)if(P)for(var j="",ve=P.split("&"),ke=0;ke<ve.length;ke++){var ue=ve[ke].split("=");if(1<ue.length){var Me=ue[0];ue=ue[1];var Ue=Me.split("_");j=2<=Ue.length&&Ue[1]=="type"?j+(Me+"="+ue+"&"):j+(Me+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+u+`
`+j})}function af(i,l,u,f,A,P,j){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+u+`
`+P+" "+j})}function Nn(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+cf(i,u)+(f?" "+f:"")})}function lf(i,l){i.info(function(){return"TIMEOUT: "+l})}lr.prototype.info=function(){};function cf(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<A.length;j++)A[j]=""}}}}return On(u)}catch{return l}}var ps={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gs;function ti(){}D(ti,kn),ti.prototype.g=function(){return new XMLHttpRequest},ti.prototype.i=function(){return{}},gs=new ti;function $t(i,l,u,f){this.j=i,this.i=l,this.l=u,this.R=f||1,this.U=new Oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new va}function va(){this.i=null,this.g="",this.h=!1}var _a={},ms={};function vs(i,l,u){i.L=1,i.v=si(St(l)),i.m=u,i.P=!0,ya(i,null)}function ya(i,l){i.F=Date.now(),ni(i),i.A=St(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Na(u.i,"t",f),i.C=0,u=i.j.J,i.h=new va,i.g=Ya(i.j,u?l:null,!i.m),0<i.O&&(i.M=new Ce(b(i.Y,i,i.g),i.O)),l=i.U,u=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(xe[0]=A.toString()),A=xe);for(var P=0;P<A.length;P++){var j=N(u,A[P],f||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),or(),of(i.i,i.u,i.A,i.l,i.R,i.m)}$t.prototype.ca=function(i){i=i.target;const l=this.M;l&&At(i)==3?l.j():this.Y(i)},$t.prototype.Y=function(i){try{if(i==this.g)e:{const Ue=At(this.g);var l=this.g.Ba();const Mn=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||Ha(this.g)))){this.J||Ue!=4||l==7||(l==8||0>=Mn?or(3):or(2)),_s(this);var u=this.g.Z();this.X=u;t:if(Ea(this)){var f=Ha(this.g);i="";var A=f.length,P=At(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),cr(this);var j="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(P&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=u==200,af(this.i,this.u,this.A,this.l,this.R,Ue,u),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,ke=this.g;if((ve=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(ve)){var ue=ve;break t}}ue=null}if(u=ue)Nn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ys(this,u);else{this.o=!1,this.s=3,$e(12),fn(this),cr(this);break e}}if(this.P){u=!0;let ct;for(;!this.J&&this.C<j.length;)if(ct=hf(this,j),ct==ms){Ue==4&&(this.s=4,$e(14),u=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==_a){this.s=4,$e(15),Nn(this.i,this.l,j,"[Invalid Chunk]"),u=!1;break}else Nn(this.i,this.l,ct,null),ys(this,ct);if(Ea(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||j.length!=0||this.h.h||(this.s=1,$e(16),u=!1),this.o=this.o&&u,!u)Nn(this.i,this.l,j,"[Invalid Chunked Response]"),fn(this),cr(this);else if(0<j.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Ss(Me),Me.M=!0,$e(11))}}else Nn(this.i,this.l,j,null),ys(this,j);Ue==4&&fn(this),this.o&&!this.J&&(Ue==4?Ga(this.j,this):(this.o=!1,ni(this)))}else Rf(this.g),u==400&&0<j.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),fn(this),cr(this)}}}catch{}finally{}};function Ea(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function hf(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?ms:(u=Number(l.substring(u,f)),isNaN(u)?_a:(f+=1,f+u>l.length?ms:(l=l.slice(f,f+u),i.C=f+u,l)))}$t.prototype.cancel=function(){this.J=!0,fn(this)};function ni(i){i.S=Date.now()+i.I,wa(i,i.I)}function wa(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ar(b(i.ba,i),l)}function _s(i){i.B&&(c.clearTimeout(i.B),i.B=null)}$t.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(lf(this.i,this.A),this.L!=2&&(or(),$e(17)),fn(this),this.s=2,cr(this)):wa(this,this.S-i)};function cr(i){i.j.G==0||i.J||Ga(i.j,i)}function fn(i){_s(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Bt(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function ys(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||Es(u.h,i))){if(!i.K&&Es(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)hi(u),ci(u);else break e;Ts(u),$e(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=ar(b(u.Za,u),6e3));if(1>=Ta(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else pn(u,11)}else if((i.K||u.g==i)&&hi(u),!W(l))for(A=u.Da.g.parse(l),l=0;l<A.length;l++){let ue=A[l];if(u.T=ue[0],ue=ue[1],u.G==2)if(ue[0]=="c"){u.K=ue[1],u.ia=ue[2];const Me=ue[3];Me!=null&&(u.la=Me,u.j.info("VER="+u.la));const Ue=ue[4];Ue!=null&&(u.Aa=Ue,u.j.info("SVER="+u.Aa));const Mn=ue[5];Mn!=null&&typeof Mn=="number"&&0<Mn&&(f=1.5*Mn,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const ct=i.g;if(ct){const fi=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fi){var P=f.h;P.g||fi.indexOf("spdy")==-1&&fi.indexOf("quic")==-1&&fi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ws(P,P.h),P.h=null))}if(f.D){const As=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;As&&(f.ya=As,we(f.I,f.D,As))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var j=i;if(f.qa=Xa(f,f.J?f.ia:null,f.W),j.K){Sa(f.h,j);var ve=j,ke=f.L;ke&&(ve.I=ke),ve.B&&(_s(ve),ni(ve)),f.g=j}else Ka(f);0<u.i.length&&ui(u)}else ue[0]!="stop"&&ue[0]!="close"||pn(u,7);else u.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?pn(u,7):bs(u):ue[0]!="noop"&&u.l&&u.l.ta(ue),u.v=0)}}or(4)}catch{}}var ff=class{constructor(i,l){this.g=i,this.map=l}};function Ia(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ba(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ta(i){return i.h?1:i.g?i.g.size:0}function Es(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function ws(i,l){i.g?i.g.add(l):i.h=l}function Sa(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Ia.prototype.cancel=function(){if(this.i=Aa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Aa(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return M(i.i)}function df(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],u=i.length,f=0;f<u;f++)l.push(i[f]);return l}l=[],u=0;for(f in i)l[u++]=i[f];return l}function pf(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const f in i)l[u++]=f;return l}}}function Ca(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=pf(i),f=df(i),A=f.length,P=0;P<A;P++)l.call(void 0,f[P],u&&u[P],i)}var Ra=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gf(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),A=null;if(0<=f){var P=i[u].substring(0,f);A=i[u].substring(f+1)}else P=i[u];l(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function dn(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof dn){this.h=i.h,ri(this,i.j),this.o=i.o,this.g=i.g,ii(this,i.s),this.l=i.l;var l=i.i,u=new fr;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),Pa(this,u),this.m=i.m}else i&&(l=String(i).match(Ra))?(this.h=!1,ri(this,l[1]||"",!0),this.o=ur(l[2]||""),this.g=ur(l[3]||"",!0),ii(this,l[4]),this.l=ur(l[5]||"",!0),Pa(this,l[6]||"",!0),this.m=ur(l[7]||"")):(this.h=!1,this.i=new fr(null,this.h))}dn.prototype.toString=function(){var i=[],l=this.j;l&&i.push(hr(l,Oa,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(hr(l,Oa,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(hr(u,u.charAt(0)=="/"?_f:vf,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",hr(u,Ef)),i.join("")};function St(i){return new dn(i)}function ri(i,l,u){i.j=u?ur(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function ii(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Pa(i,l,u){l instanceof fr?(i.i=l,wf(i.i,i.h)):(u||(l=hr(l,yf)),i.i=new fr(l,i.h))}function we(i,l,u){i.i.set(l,u)}function si(i){return we(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function ur(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function hr(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,mf),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function mf(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Oa=/[#\/\?@]/g,vf=/[#\?:]/g,_f=/[#\?]/g,yf=/[#\?@]/g,Ef=/#/g;function fr(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function Wt(i){i.g||(i.g=new Map,i.h=0,i.i&&gf(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}t=fr.prototype,t.add=function(i,l){Wt(this),this.i=null,i=Ln(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function ka(i,l){Wt(i),l=Ln(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Da(i,l){return Wt(i),l=Ln(i,l),i.g.has(l)}t.forEach=function(i,l){Wt(this),this.g.forEach(function(u,f){u.forEach(function(A){i.call(l,A,f,this)},this)},this)},t.na=function(){Wt(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const A=i[f];for(let P=0;P<A.length;P++)u.push(l[f])}return u},t.V=function(i){Wt(this);let l=[];if(typeof i=="string")Da(this,i)&&(l=l.concat(this.g.get(Ln(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},t.set=function(i,l){return Wt(this),this.i=null,i=Ln(this,i),Da(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},t.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Na(i,l,u){ka(i,l),0<u.length&&(i.i=null,i.g.set(Ln(i,l),M(u)),i.h+=u.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const P=encodeURIComponent(String(f)),j=this.V(f);for(f=0;f<j.length;f++){var A=P;j[f]!==""&&(A+="="+encodeURIComponent(String(j[f]))),i.push(A)}}return this.i=i.join("&")};function Ln(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function wf(i,l){l&&!i.j&&(Wt(i),i.i=null,i.g.forEach(function(u,f){var A=f.toLowerCase();f!=A&&(ka(this,f),Na(this,A,u))},i)),i.j=l}function If(i,l){const u=new lr;if(c.Image){const f=new Image;f.onload=R(Kt,u,"TestLoadImage: loaded",!0,l,f),f.onerror=R(Kt,u,"TestLoadImage: error",!1,l,f),f.onabort=R(Kt,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(Kt,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function bf(i,l){const u=new lr,f=new AbortController,A=setTimeout(()=>{f.abort(),Kt(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(P=>{clearTimeout(A),P.ok?Kt(u,"TestPingServer: ok",!0,l):Kt(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Kt(u,"TestPingServer: error",!1,l)})}function Kt(i,l,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function Tf(){this.g=new st}function Sf(i,l,u){const f=u||"";try{Ca(i,function(A,P){let j=A;d(A)&&(j=On(A)),l.push(f+P+"="+encodeURIComponent(j))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function oi(i){this.l=i.Ub||null,this.j=i.eb||!1}D(oi,kn),oi.prototype.g=function(){return new ai(this.l,this.j)},oi.prototype.i=function(i){return function(){return i}}({});function ai(i,l){X.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ai,X),t=ai.prototype,t.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,pr(this)},t.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,dr(this)),this.readyState=0},t.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,pr(this)),this.g&&(this.readyState=3,pr(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;La(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function La(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}t.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?dr(this):pr(this),this.readyState==3&&La(this)}},t.Ra=function(i){this.g&&(this.response=this.responseText=i,dr(this))},t.Qa=function(i){this.g&&(this.response=i,dr(this))},t.ga=function(){this.g&&dr(this)};function dr(i){i.readyState=4,i.l=null,i.j=null,i.v=null,pr(i)}t.setRequestHeader=function(i,l){this.u.append(i,l)},t.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function pr(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function xa(i){let l="";return le(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function Is(i,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=xa(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):we(i,l,u))}function Te(i){X.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Te,X);var Af=/^https?$/i,Cf=["POST","PUT"];t=Te.prototype,t.Ha=function(i){this.J=i},t.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gs.g(),this.v=this.o?fa(this.o):fa(gs),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(P){Ma(this,P);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())u.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(P=>P.toLowerCase()=="content-type"),A=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Cf,l,void 0))||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of u)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ja(this),this.u=!0,this.g.send(i),this.u=!1}catch(P){Ma(this,P)}};function Ma(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Ua(i),li(i)}function Ua(i){i.A||(i.A=!0,Z(i,"complete"),Z(i,"error"))}t.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Z(this,"complete"),Z(this,"abort"),li(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),li(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Fa(this):this.bb())},t.bb=function(){Fa(this)};function Fa(i){if(i.h&&typeof a<"u"&&(!i.v[1]||At(i)!=4||i.Z()!=2)){if(i.u&&At(i)==4)ce(i.Ea,0,i);else if(Z(i,"readystatechange"),At(i)==4){i.h=!1;try{const j=i.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=j===0){var A=String(i.D).match(Ra)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!Af.test(A?A.toLowerCase():"")}u=f}if(u)Z(i,"complete"),Z(i,"success");else{i.m=6;try{var P=2<At(i)?i.g.statusText:""}catch{P=""}i.l=P+" ["+i.Z()+"]",Ua(i)}}finally{li(i)}}}}function li(i,l){if(i.g){ja(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Z(i,"ready");try{u.onreadystatechange=f}catch{}}}function ja(i){i.I&&(c.clearTimeout(i.I),i.I=null)}t.isActive=function(){return!!this.g};function At(i){return i.g?i.g.readyState:0}t.Z=function(){try{return 2<At(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Be(l)}};function Ha(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Rf(i){const l={};i=(i.g&&2<=At(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(W(i[f]))continue;var u=T(i[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const P=l[A]||[];l[A]=P,P.push(u)}I(l,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gr(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function Va(i){this.Aa=0,this.i=[],this.j=new lr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gr("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gr("baseRetryDelayMs",5e3,i),this.cb=gr("retryDelaySeedMs",1e4,i),this.Wa=gr("forwardChannelMaxRetries",2,i),this.wa=gr("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ia(i&&i.concurrentRequestLimit),this.Da=new Tf,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Va.prototype,t.la=8,t.G=1,t.connect=function(i,l,u,f){$e(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Xa(this,null,this.W),ui(this)};function bs(i){if(Ba(i),i.G==3){var l=i.U++,u=St(i.I);if(we(u,"SID",i.K),we(u,"RID",l),we(u,"TYPE","terminate"),mr(i,u),l=new $t(i,i.j,l),l.L=2,l.v=si(St(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=Ya(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ni(l)}Ja(i)}function ci(i){i.g&&(Ss(i),i.g.cancel(),i.g=null)}function Ba(i){ci(i),i.u&&(c.clearTimeout(i.u),i.u=null),hi(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function ui(i){if(!ba(i.h)&&!i.s){i.s=!0;var l=i.Ga;te||lt(),se||(te(),se=!0),et.add(l,i),i.B=0}}function Pf(i,l){return Ta(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ar(b(i.Ga,i,l),qa(i,i.B)),i.B++,!0)}t.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new $t(this,this.j,i);let P=this.o;if(this.S&&(P?(P=p(P),w(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=Wa(this,A,l),u=St(this.I),we(u,"RID",i),we(u,"CVER",22),this.D&&we(u,"X-HTTP-Session-Id",this.D),mr(this,u),P&&(this.O?l="headers="+encodeURIComponent(String(xa(P)))+"&"+l:this.m&&Is(u,this.m,P)),ws(this.h,A),this.Ua&&we(u,"TYPE","init"),this.P?(we(u,"$req",l),we(u,"SID","null"),A.T=!0,vs(A,u,null)):vs(A,u,l),this.G=2}}else this.G==3&&(i?$a(this,i):this.i.length==0||ba(this.h)||$a(this))};function $a(i,l){var u;l?u=l.l:u=i.U++;const f=St(i.I);we(f,"SID",i.K),we(f,"RID",u),we(f,"AID",i.T),mr(i,f),i.m&&i.o&&Is(f,i.m,i.o),u=new $t(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Wa(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ws(i.h,u),vs(u,f,l)}function mr(i,l){i.H&&le(i.H,function(u,f){we(l,f,u)}),i.l&&Ca({},function(u,f){we(l,f,u)})}function Wa(i,l,u){u=Math.min(i.i.length,u);var f=i.l?b(i.l.Na,i.l,i):null;e:{var A=i.i;let P=-1;for(;;){const j=["count="+u];P==-1?0<u?(P=A[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let ve=!0;for(let ke=0;ke<u;ke++){let ue=A[ke].g;const Me=A[ke].map;if(ue-=P,0>ue)P=Math.max(0,A[ke].g-100),ve=!1;else try{Sf(Me,j,"req"+ue+"_")}catch{f&&f(Me)}}if(ve){f=j.join("&");break e}}}return i=i.i.splice(0,u),l.D=i,f}function Ka(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;te||lt(),se||(te(),se=!0),et.add(l,i),i.v=0}}function Ts(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ar(b(i.Fa,i),qa(i,i.v)),i.v++,!0)}t.Fa=function(){if(this.u=null,za(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ar(b(this.ab,this),i)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),ci(this),za(this))};function Ss(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function za(i){i.g=new $t(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=St(i.qa);we(l,"RID","rpc"),we(l,"SID",i.K),we(l,"AID",i.T),we(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&we(l,"TO",i.ja),we(l,"TYPE","xmlhttp"),mr(i,l),i.m&&i.o&&Is(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=si(St(l)),u.m=null,u.P=!0,ya(u,i)}t.Za=function(){this.C!=null&&(this.C=null,ci(this),Ts(this),$e(19))};function hi(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Ga(i,l){var u=null;if(i.g==l){hi(i),Ss(i),i.g=null;var f=2}else if(Es(i.h,l))u=l.D,Sa(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=ds(),Z(f,new ma(f,u)),ui(i)}else Ka(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&Pf(i,l)||f==2&&Ts(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),A){case 1:pn(i,5);break;case 4:pn(i,10);break;case 3:pn(i,6);break;default:pn(i,2)}}}function qa(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function pn(i,l){if(i.j.info("Error code "+l),l==2){var u=b(i.fb,i),f=i.Xa;const A=!f;f=new dn(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ri(f,"https"),si(f),A?If(f.toString(),u):bf(f.toString(),u)}else $e(2);i.G=0,i.l&&i.l.sa(l),Ja(i),Ba(i)}t.fb=function(i){i?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function Ja(i){if(i.G=0,i.ka=[],i.l){const l=Aa(i.h);(l.length!=0||i.i.length!=0)&&(G(i.ka,l),G(i.ka,i.i),i.h.i.length=0,M(i.i),i.i.length=0),i.l.ra()}}function Xa(i,l,u){var f=u instanceof dn?St(u):new dn(u);if(f.g!="")l&&(f.g=l+"."+f.g),ii(f,f.s);else{var A=c.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var P=new dn(null);f&&ri(P,f),l&&(P.g=l),A&&ii(P,A),u&&(P.l=u),f=P}return u=i.D,l=i.ya,u&&l&&we(f,u,l),we(f,"VER",i.la),mr(i,f),f}function Ya(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new Te(new oi({eb:u})):new Te(i.pa),l.Ha(i.J),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qa(){}t=Qa.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ot(i,l){X.call(this),this.g=new Va(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!W(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!W(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new xn(this)}D(ot,X),ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){bs(this.g)},ot.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=On(i),i=u);l.i.push(new ff(l.Ya++,i)),l.G==3&&ui(l)},ot.prototype.N=function(){this.g.l=null,delete this.j,bs(this.g),delete this.g,ot.aa.N.call(this)};function Za(i){hs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const u in l){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}D(Za,hs);function el(){fs.call(this),this.status=1}D(el,fs);function xn(i){this.g=i}D(xn,Qa),xn.prototype.ua=function(){Z(this.g,"a")},xn.prototype.ta=function(i){Z(this.g,new Za(i))},xn.prototype.sa=function(i){Z(this.g,new el)},xn.prototype.ra=function(){Z(this.g,"b")},ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,ps.NO_ERROR=0,ps.TIMEOUT=8,ps.HTTP_ERROR=6,uf.COMPLETE="complete",sf.EventType=sr,sr.OPEN="a",sr.CLOSE="b",sr.ERROR="c",sr.MESSAGE="d",X.prototype.listen=X.prototype.K,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha}).apply(typeof Ei<"u"?Ei:typeof self<"u"?self:typeof window<"u"?window:{});const Oc="@firebase/firestore";/**
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
 */const tr=new Xo("@firebase/firestore");function rt(t,...e){if(tr.logLevel<=pe.DEBUG){const n=e.map(ca);tr.debug(`Firestore (${ei}): ${t}`,...n)}}function la(t,...e){if(tr.logLevel<=pe.ERROR){const n=e.map(ca);tr.error(`Firestore (${ei}): ${t}`,...n)}}function cE(t,...e){if(tr.logLevel<=pe.WARN){const n=e.map(ca);tr.warn(`Firestore (${ei}): ${t}`,...n)}}function ca(t){if(typeof t=="string")return t;try{/**
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
 */function ua(t="Unexpected state"){const e=`FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: `+t;throw la(e),new Error(e)}function bo(t,e){t||ua()}/**
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
 */const je={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class He extends Ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class hE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fE{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let o=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(bo(typeof r.accessToken=="string"),new Zh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return bo(e===null||typeof e=="string"),new Fe(e)}}class dE{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pE{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new dE(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,rt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(bo(typeof n.token=="string"),this.R=n.token,new gE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function vE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class _E{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=vE(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<n&&(r+=e.charAt(s[o]%e.length))}return r}}function ef(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class yE{constructor(e,n,r,s,o,a,c,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}class Ki{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ki("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ki&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var kc,ae;(ae=kc||(kc={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Qh([4294967295,4294967295],0);function Js(){return typeof document<"u"?document:null}/**
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
 */class EE{constructor(e,n,r=1e3,s=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&rt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ha{constructor(e,n,r,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,o){const a=Date.now()+r,c=new ha(e,n,a,s,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new He(je.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wE(t,e){if(la("AsyncQueue",`${e}: ${t}`),ef(t))return new He(je.UNAVAILABLE,`${e}: ${t}`);throw t}var Dc,Nc;(Nc=Dc||(Dc={})).ea="default",Nc.Cache="cache";/**
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
 */class IE{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=_E.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{rt("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(rt("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new He(je.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wE(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
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
 */function tf(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Lc=new Map;function bE(t,e,n,r){if(e===!0&&r===!0)throw new He(je.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function TE(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ua()}function SE(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new He(je.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=TE(t);throw new He(je.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class xc{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new He(je.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new He(je.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new He(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new He(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new He(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nf{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new He(je.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new He(je.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uE;switch(r.type){case"firstParty":return new pE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new He(je.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Lc.get(n);r&&(rt("ComponentProvider","Removing Datastore"),Lc.delete(n),r.terminate())}(this),Promise.resolve()}}function AE(t,e,n,r={}){var s;const o=(t=SE(t,nf))._getSettings(),a=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&cE("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Fe.MOCK_USER;else{c=Om(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new He(je.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Fe(d)}t._authCredentials=new hE(new Zh(c,h))}}/**
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
 */class CE{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new EE(this,"async_queue_retry"),this.Eu=()=>{const n=Js();n&&rt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Js();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Js();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Xn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ef(e))throw e;rt("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw la("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=ha.createAndSchedule(this,e,n,r,o=>this.Vu(o));return this.lu.push(s),s}du(){this.hu&&ua()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class RE extends nf{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new CE}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||OE(this),this._firestoreClient.terminate()}}function PE(t,e){const n=gh(),r="(default)",s=Qo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Rm("firestore");o&&AE(s,...o)}return s}function OE(t){var e,n,r;const s=t._freezeSettings(),o=function(c,h,d,g){return new yE(c,h,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,tf(g.experimentalLongPollingOptions),g.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new IE(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(e,n=!0){(function(s){ei=s})(rr),er(new Tn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new RE(new fE(r.getProvider("auth-internal")),new mE(r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new He(je.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ki(d.options.projectId,g)}(a,s),a);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),on(Oc,"4.7.1",e),on(Oc,"4.7.1","esm2017")})();const kE={apiKey:"AIzaSyCI9MC9qMkmjuV23QEVVfLmaw6Gywu82sY",authDomain:"vue3-project-mrs.firebaseapp.com",projectId:"vue3-project-mrs",storageBucket:"vue3-project-mrs.appspot.com",messagingSenderId:"587619424480",appId:"1:587619424480:web:9ea9ac223c778164fc5885"};ph(kE);PE();const Mc=sE(),rf=Em("userStore",{state:()=>({userData:null}),actions:{async registerUser(t,e){try{const{user:n}=await K_(Mc,t,e);this.userData={email:n.email,uid:n.uid}}catch(n){console.log(n)}},async loginUser(t,e){try{const{user:n}=await z_(Mc,t,e);this.userData={email:n.email,uid:n.uid}}catch{}}}}),DE={__name:"Login",setup(t){const e=rf(),n=th(),r=bn(""),s=bn(""),o=async()=>{if(!r.value||s.value.length<6)return alert("Campos vacios");await e.loginUser(r.value,s.value),n.push("/")};return(a,c)=>(ts(),ns("div",null,[c[3]||(c[3]=Qe("h1",null,"Login",-1)),Qe("form",{onSubmit:Hu(o,["prevent"])},[Ni(Qe("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":c[0]||(c[0]=h=>r.value=h)},null,512),[[Mi,r.value,void 0,{trim:!0}]]),Ni(Qe("input",{type:"password",name:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":c[1]||(c[1]=h=>s.value=h)},null,512),[[Mi,s.value,void 0,{trim:!0}]]),c[2]||(c[2]=Qe("button",{type:"submit"},"Acceso",-1))],32)]))}},NE={__name:"Register",setup(t){const e=rf(),n=th(),r=bn(""),s=bn(""),o=async()=>{if(!r.value||s.value.length<6)return alert("Campos vacios");await e.registerUser(r.value,s.value),n.push("/")};return(a,c)=>(ts(),ns("div",null,[c[3]||(c[3]=Qe("h1",null,"Register",-1)),Qe("form",{onSubmit:Hu(o,["prevent"])},[Ni(Qe("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":c[0]||(c[0]=h=>r.value=h)},null,512),[[Mi,r.value,void 0,{trim:!0}]]),Ni(Qe("input",{type:"password",name:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":c[1]||(c[1]=h=>s.value=h)},null,512),[[Mi,s.value,void 0,{trim:!0}]]),c[2]||(c[2]=Qe("button",{type:"submit"},"Crear usuario",-1))],32)]))}},LE=[{path:"/",component:fm},{path:"/login",component:DE},{path:"/register",component:NE}],xE=lm({routes:LE,history:Fg()});ng(ag).use(xE).use(pm()).mount("#app");
