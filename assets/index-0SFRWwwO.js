(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function mo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ye={},Hn=[],yt=()=>{},_f=()=>!1,ji=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),vo=t=>t.startsWith("onUpdate:"),Ne=Object.assign,_o=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yf=Object.prototype.hasOwnProperty,de=(t,e)=>yf.call(t,e),re=Array.isArray,_r=t=>Hi(t)==="[object Map]",Ef=t=>Hi(t)==="[object Set]",ie=t=>typeof t=="function",Re=t=>typeof t=="string",Qn=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",Pc=t=>(Ae(t)||ie(t))&&ie(t.then)&&ie(t.catch),wf=Object.prototype.toString,Hi=t=>wf.call(t),If=t=>Hi(t).slice(8,-1),bf=t=>Hi(t)==="[object Object]",yo=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yr=mo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Tf=/-(\w)/g,ft=Bi(t=>t.replace(Tf,(e,n)=>n?n.toUpperCase():"")),Sf=/\B([A-Z])/g,Tn=Bi(t=>t.replace(Sf,"-$1").toLowerCase()),Vi=Bi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Es=Bi(t=>t?`on${Vi(t)}`:""),an=(t,e)=>!Object.is(t,e),mi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Oc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},$s=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let za;const kc=()=>za||(za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Eo(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Re(r)?Pf(r):Eo(r);if(s)for(const o in s)e[o]=s[o]}return e}else if(Re(t)||Ae(t))return t}const Af=/;(?![^(]*\))/g,Cf=/:([^]+)/,Rf=/\/\*[^]*?\*\//g;function Pf(t){const e={};return t.replace(Rf,"").split(Af).forEach(n=>{if(n){const r=n.split(Cf);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function wo(t){let e="";if(Re(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=wo(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Of="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kf=mo(Of);function Dc(t){return!!t||t===""}/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let We;class Nc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=We,!e&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=We;try{return We=this,e()}finally{We=n}}}on(){We=this}off(){We=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function xc(t){return new Nc(t)}function Lc(){return We}function Df(t,e=!1){We&&We.cleanups.push(t)}let _e;const ws=new WeakSet;class Mc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,We&&We.active&&We.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ws.has(this)&&(ws.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=Er,Er=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ga(this),Fc(this);const e=_e,n=ct;_e=this,ct=!0;try{return this.fn()}finally{jc(this),_e=e,ct=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)To(e);this.deps=this.depsTail=void 0,Ga(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ws.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ks(this)&&this.run()}get dirty(){return Ks(this)}}let Uc=0,Er;function Io(){Uc++}function bo(){if(--Uc>0)return;let t;for(;Er;){let e=Er;for(Er=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Fc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jc(t){let e,n=t.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),To(r),Nf(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function Ks(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&Hc(e.dep.computed)||e.dep.version!==e.version)return!0;return!!t._dirty}function Hc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Pr))return;t.globalVersion=Pr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!Ks(t)){t.flags&=-3;return}const n=_e,r=ct;_e=t,ct=!0;try{Fc(t);const s=t.fn(t._value);(e.version===0||an(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{_e=n,ct=r,jc(t),t.flags&=-3}}function To(t){const{dep:e,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)To(s)}}function Nf(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ct=!0;const Bc=[];function ln(){Bc.push(ct),ct=!1}function cn(){const t=Bc.pop();ct=t===void 0?!0:t}function Ga(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=_e;_e=void 0;try{e()}finally{_e=n}}}let Pr=0;class So{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!_e||!ct||_e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==_e)n=this.activeLink={dep:this,sub:_e,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},_e.deps?(n.prevDep=_e.depsTail,_e.depsTail.nextDep=n,_e.depsTail=n):_e.deps=_e.depsTail=n,_e.flags&4&&Vc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=_e.depsTail,n.nextDep=void 0,_e.depsTail.nextDep=n,_e.depsTail=n,_e.deps===n&&(_e.deps=r)}return n}trigger(e){this.version++,Pr++,this.notify(e)}notify(e){Io();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{bo()}}}function Vc(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Vc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const Si=new WeakMap,vn=Symbol(""),Ws=Symbol(""),Or=Symbol("");function Be(t,e,n){if(ct&&_e){let r=Si.get(t);r||Si.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=new So),s.track()}}function xt(t,e,n,r,s,o){const a=Si.get(t);if(!a){Pr++;return}const u=h=>{h&&h.trigger()};if(Io(),e==="clear")a.forEach(u);else{const h=re(t),d=h&&yo(n);if(h&&n==="length"){const m=Number(r);a.forEach((_,b)=>{(b==="length"||b===Or||!Qn(b)&&b>=m)&&u(_)})}else switch(n!==void 0&&u(a.get(n)),d&&u(a.get(Or)),e){case"add":h?d&&u(a.get("length")):(u(a.get(vn)),_r(t)&&u(a.get(Ws)));break;case"delete":h||(u(a.get(vn)),_r(t)&&u(a.get(Ws)));break;case"set":_r(t)&&u(a.get(vn));break}}bo()}function xf(t,e){var n;return(n=Si.get(t))==null?void 0:n.get(e)}function Nn(t){const e=he(t);return e===t?e:(Be(e,"iterate",Or),ut(t)?e:e.map(ze))}function Ao(t){return Be(t=he(t),"iterate",Or),t}const Lf={__proto__:null,[Symbol.iterator](){return Is(this,Symbol.iterator,ze)},concat(...t){return Nn(this).concat(...t.map(e=>re(e)?Nn(e):e))},entries(){return Is(this,"entries",t=>(t[1]=ze(t[1]),t))},every(t,e){return St(this,"every",t,e,void 0,arguments)},filter(t,e){return St(this,"filter",t,e,n=>n.map(ze),arguments)},find(t,e){return St(this,"find",t,e,ze,arguments)},findIndex(t,e){return St(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return St(this,"findLast",t,e,ze,arguments)},findLastIndex(t,e){return St(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return St(this,"forEach",t,e,void 0,arguments)},includes(...t){return bs(this,"includes",t)},indexOf(...t){return bs(this,"indexOf",t)},join(t){return Nn(this).join(t)},lastIndexOf(...t){return bs(this,"lastIndexOf",t)},map(t,e){return St(this,"map",t,e,void 0,arguments)},pop(){return pr(this,"pop")},push(...t){return pr(this,"push",t)},reduce(t,...e){return qa(this,"reduce",t,e)},reduceRight(t,...e){return qa(this,"reduceRight",t,e)},shift(){return pr(this,"shift")},some(t,e){return St(this,"some",t,e,void 0,arguments)},splice(...t){return pr(this,"splice",t)},toReversed(){return Nn(this).toReversed()},toSorted(t){return Nn(this).toSorted(t)},toSpliced(...t){return Nn(this).toSpliced(...t)},unshift(...t){return pr(this,"unshift",t)},values(){return Is(this,"values",ze)}};function Is(t,e,n){const r=Ao(t),s=r[e]();return r!==t&&!ut(t)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=n(o.value)),o}),s}const Mf=Array.prototype;function St(t,e,n,r,s,o){const a=Ao(t),u=a!==t&&!ut(t),h=a[e];if(h!==Mf[e]){const _=h.apply(t,o);return u?ze(_):_}let d=n;a!==t&&(u?d=function(_,b){return n.call(this,ze(_),b,t)}:n.length>2&&(d=function(_,b){return n.call(this,_,b,t)}));const m=h.call(a,d,r);return u&&s?s(m):m}function qa(t,e,n,r){const s=Ao(t);let o=n;return s!==t&&(ut(t)?n.length>3&&(o=function(a,u,h){return n.call(this,a,u,h,t)}):o=function(a,u,h){return n.call(this,a,ze(u),h,t)}),s[e](o,...r)}function bs(t,e,n){const r=he(t);Be(r,"iterate",Or);const s=r[e](...n);return(s===-1||s===!1)&&Oo(n[0])?(n[0]=he(n[0]),r[e](...n)):s}function pr(t,e,n=[]){ln(),Io();const r=he(t)[e].apply(t,n);return bo(),cn(),r}const Uf=mo("__proto__,__v_isRef,__isVue"),$c=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qn));function Ff(t){Qn(t)||(t=String(t));const e=he(this);return Be(e,"has",t),e.hasOwnProperty(t)}class Kc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?Yf:qc:o?Gc:zc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let h;if(a&&(h=Lf[n]))return h;if(n==="hasOwnProperty")return Ff}const u=Reflect.get(e,n,Se(e)?e:r);return(Qn(n)?$c.has(n):Uf(n))||(s||Be(e,"get",n),o)?u:Se(u)?a&&yo(n)?u:u.value:Ae(u)?s?Xc(u):Hr(u):u}}class Wc extends Kc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let o=e[n];if(!this._isShallow){const h=En(o);if(!ut(r)&&!En(r)&&(o=he(o),r=he(r)),!re(e)&&Se(o)&&!Se(r))return h?!1:(o.value=r,!0)}const a=re(e)&&yo(n)?Number(n)<e.length:de(e,n),u=Reflect.set(e,n,r,Se(e)?e:s);return e===he(s)&&(a?an(r,o)&&xt(e,"set",n,r):xt(e,"add",n,r)),u}deleteProperty(e,n){const r=de(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&xt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Qn(n)||!$c.has(n))&&Be(e,"has",n),r}ownKeys(e){return Be(e,"iterate",re(e)?"length":vn),Reflect.ownKeys(e)}}class jf extends Kc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Hf=new Wc,Bf=new jf,Vf=new Wc(!0);const Co=t=>t,$i=t=>Reflect.getPrototypeOf(t);function li(t,e,n=!1,r=!1){t=t.__v_raw;const s=he(t),o=he(e);n||(an(e,o)&&Be(s,"get",e),Be(s,"get",o));const{has:a}=$i(s),u=r?Co:n?Do:ze;if(a.call(s,e))return u(t.get(e));if(a.call(s,o))return u(t.get(o));t!==s&&t.get(e)}function ci(t,e=!1){const n=this.__v_raw,r=he(n),s=he(t);return e||(an(t,s)&&Be(r,"has",t),Be(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ui(t,e=!1){return t=t.__v_raw,!e&&Be(he(t),"iterate",vn),Reflect.get(t,"size",t)}function Ja(t,e=!1){!e&&!ut(t)&&!En(t)&&(t=he(t));const n=he(this);return $i(n).has.call(n,t)||(n.add(t),xt(n,"add",t,t)),this}function Xa(t,e,n=!1){!n&&!ut(e)&&!En(e)&&(e=he(e));const r=he(this),{has:s,get:o}=$i(r);let a=s.call(r,t);a||(t=he(t),a=s.call(r,t));const u=o.call(r,t);return r.set(t,e),a?an(e,u)&&xt(r,"set",t,e):xt(r,"add",t,e),this}function Ya(t){const e=he(this),{has:n,get:r}=$i(e);let s=n.call(e,t);s||(t=he(t),s=n.call(e,t)),r&&r.call(e,t);const o=e.delete(t);return s&&xt(e,"delete",t,void 0),o}function Qa(){const t=he(this),e=t.size!==0,n=t.clear();return e&&xt(t,"clear",void 0,void 0),n}function hi(t,e){return function(r,s){const o=this,a=o.__v_raw,u=he(a),h=e?Co:t?Do:ze;return!t&&Be(u,"iterate",vn),a.forEach((d,m)=>r.call(s,h(d),h(m),o))}}function fi(t,e,n){return function(...r){const s=this.__v_raw,o=he(s),a=_r(o),u=t==="entries"||t===Symbol.iterator&&a,h=t==="keys"&&a,d=s[t](...r),m=n?Co:e?Do:ze;return!e&&Be(o,"iterate",h?Ws:vn),{next(){const{value:_,done:b}=d.next();return b?{value:_,done:b}:{value:u?[m(_[0]),m(_[1])]:m(_),done:b}},[Symbol.iterator](){return this}}}}function Wt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $f(){const t={get(o){return li(this,o)},get size(){return ui(this)},has:ci,add:Ja,set:Xa,delete:Ya,clear:Qa,forEach:hi(!1,!1)},e={get(o){return li(this,o,!1,!0)},get size(){return ui(this)},has:ci,add(o){return Ja.call(this,o,!0)},set(o,a){return Xa.call(this,o,a,!0)},delete:Ya,clear:Qa,forEach:hi(!1,!0)},n={get(o){return li(this,o,!0)},get size(){return ui(this,!0)},has(o){return ci.call(this,o,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:hi(!0,!1)},r={get(o){return li(this,o,!0,!0)},get size(){return ui(this,!0)},has(o){return ci.call(this,o,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:hi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=fi(o,!1,!1),n[o]=fi(o,!0,!1),e[o]=fi(o,!1,!0),r[o]=fi(o,!0,!0)}),[t,n,e,r]}const[Kf,Wf,zf,Gf]=$f();function Ro(t,e){const n=e?t?Gf:zf:t?Wf:Kf;return(r,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(de(n,s)&&s in r?n:r,s,o)}const qf={get:Ro(!1,!1)},Jf={get:Ro(!1,!0)},Xf={get:Ro(!0,!1)};const zc=new WeakMap,Gc=new WeakMap,qc=new WeakMap,Yf=new WeakMap;function Qf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zf(t){return t.__v_skip||!Object.isExtensible(t)?0:Qf(If(t))}function Hr(t){return En(t)?t:Po(t,!1,Hf,qf,zc)}function Jc(t){return Po(t,!1,Vf,Jf,Gc)}function Xc(t){return Po(t,!0,Bf,Xf,qc)}function Po(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=s.get(t);if(o)return o;const a=Zf(t);if(a===0)return t;const u=new Proxy(t,a===2?r:n);return s.set(t,u),u}function _n(t){return En(t)?_n(t.__v_raw):!!(t&&t.__v_isReactive)}function En(t){return!!(t&&t.__v_isReadonly)}function ut(t){return!!(t&&t.__v_isShallow)}function Oo(t){return t?!!t.__v_raw:!1}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function ko(t){return!de(t,"__v_skip")&&Object.isExtensible(t)&&Oc(t,"__v_skip",!0),t}const ze=t=>Ae(t)?Hr(t):t,Do=t=>Ae(t)?Xc(t):t;function Se(t){return t?t.__v_isRef===!0:!1}function kr(t){return Yc(t,!1)}function ed(t){return Yc(t,!0)}function Yc(t,e){return Se(t)?t:new td(t,e)}class td{constructor(e,n){this.dep=new So,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:he(e),this._value=n?e:ze(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ut(e)||En(e);e=r?e:he(e),an(e,n)&&(this._rawValue=e,this._value=r?e:ze(e),this.dep.trigger())}}function Bn(t){return Se(t)?t.value:t}const nd={get:(t,e,n)=>e==="__v_raw"?t:Bn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Qc(t){return _n(t)?t:new Proxy(t,nd)}function rd(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=sd(t,n);return e}class id{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return xf(he(this._object),this._key)}}function sd(t,e,n){const r=t[e];return Se(r)?r:new id(t,e,n)}class od{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new So(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pr-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){this.flags|=16,_e!==this&&this.dep.notify()}get value(){const e=this.dep.track();return Hc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ad(t,e,n=!1){let r,s;return ie(t)?r=t:(r=t.get,s=t.set),new od(r,s,n)}const di={},Ai=new WeakMap;let gn;function ld(t,e=!1,n=gn){if(n){let r=Ai.get(n);r||Ai.set(n,r=[]),r.push(t)}}function cd(t,e,n=ye){const{immediate:r,deep:s,once:o,scheduler:a,augmentJob:u,call:h}=n,d=V=>s?V:ut(V)||s===!1||s===0?Pt(V,1):Pt(V);let m,_,b,R,D=!1,M=!1;if(Se(t)?(_=()=>t.value,D=ut(t)):_n(t)?(_=()=>d(t),D=!0):re(t)?(M=!0,D=t.some(V=>_n(V)||ut(V)),_=()=>t.map(V=>{if(Se(V))return V.value;if(_n(V))return d(V);if(ie(V))return h?h(V,2):V()})):ie(t)?e?_=h?()=>h(t,2):t:_=()=>{if(b){ln();try{b()}finally{cn()}}const V=gn;gn=m;try{return h?h(t,3,[R]):t(R)}finally{gn=V}}:_=yt,e&&s){const V=_,te=s===!0?1/0:s;_=()=>Pt(V(),te)}const G=Lc(),q=()=>{m.stop(),G&&_o(G.effects,m)};if(o)if(e){const V=e;e=(...te)=>{V(...te),q()}}else{const V=_;_=()=>{V(),q()}}let K=M?new Array(t.length).fill(di):di;const W=V=>{if(!(!(m.flags&1)||!m.dirty&&!V))if(e){const te=m.run();if(s||D||(M?te.some((le,I)=>an(le,K[I])):an(te,K))){b&&b();const le=gn;gn=m;try{const I=[te,K===di?void 0:M&&K[0]===di?[]:K,R];h?h(e,3,I):e(...I),K=te}finally{gn=le}}}else m.run()};return u&&u(W),m=new Mc(_),m.scheduler=a?()=>a(W,!1):W,R=V=>ld(V,!1,m),b=m.onStop=()=>{const V=Ai.get(m);if(V){if(h)h(V,4);else for(const te of V)te();Ai.delete(m)}},e?r?W(!0):K=m.run():a?a(W.bind(null,!0),!0):m.run(),q.pause=m.pause.bind(m),q.resume=m.resume.bind(m),q.stop=q,q}function Pt(t,e=1/0,n){if(e<=0||!Ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Se(t))Pt(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)Pt(t[r],e,n);else if(Ef(t)||_r(t))t.forEach(r=>{Pt(r,e,n)});else if(bf(t)){for(const r in t)Pt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Pt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Br(t,e,n,r){try{return r?t(...r):t()}catch(s){Ki(s,e,n)}}function It(t,e,n,r){if(ie(t)){const s=Br(t,e,n,r);return s&&Pc(s)&&s.catch(o=>{Ki(o,e,n)}),s}if(re(t)){const s=[];for(let o=0;o<t.length;o++)s.push(It(t[o],e,n,r));return s}}function Ki(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ye;if(e){let u=e.parent;const h=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;u;){const m=u.ec;if(m){for(let _=0;_<m.length;_++)if(m[_](t,h,d)===!1)return}u=u.parent}if(o){ln(),Br(o,null,10,[t,h,d]),cn();return}}ud(t,n,s,r,a)}function ud(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let Dr=!1,zs=!1;const Ge=[];let mt=0;const Vn=[];let Jt=null,Ln=0;const Zc=Promise.resolve();let No=null;function xo(t){const e=No||Zc;return t?e.then(this?t.bind(this):t):e}function hd(t){let e=Dr?mt+1:0,n=Ge.length;for(;e<n;){const r=e+n>>>1,s=Ge[r],o=Nr(s);o<t||o===t&&s.flags&2?e=r+1:n=r}return e}function Lo(t){if(!(t.flags&1)){const e=Nr(t),n=Ge[Ge.length-1];!n||!(t.flags&2)&&e>=Nr(n)?Ge.push(t):Ge.splice(hd(e),0,t),t.flags|=1,eu()}}function eu(){!Dr&&!zs&&(zs=!0,No=Zc.then(nu))}function fd(t){re(t)?Vn.push(...t):Jt&&t.id===-1?Jt.splice(Ln+1,0,t):t.flags&1||(Vn.push(t),t.flags|=1),eu()}function Za(t,e,n=Dr?mt+1:0){for(;n<Ge.length;n++){const r=Ge[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ge.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function tu(t){if(Vn.length){const e=[...new Set(Vn)].sort((n,r)=>Nr(n)-Nr(r));if(Vn.length=0,Jt){Jt.push(...e);return}for(Jt=e,Ln=0;Ln<Jt.length;Ln++){const n=Jt[Ln];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Jt=null,Ln=0}}const Nr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function nu(t){zs=!1,Dr=!0;try{for(mt=0;mt<Ge.length;mt++){const e=Ge[mt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Br(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;mt<Ge.length;mt++){const e=Ge[mt];e&&(e.flags&=-2)}mt=0,Ge.length=0,tu(),Dr=!1,No=null,(Ge.length||Vn.length)&&nu()}}let Qe=null,ru=null;function Ci(t){const e=Qe;return Qe=t,ru=t&&t.type.__scopeId||null,e}function vi(t,e=Qe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ul(-1);const o=Ci(e);let a;try{a=t(...s)}finally{Ci(o),r._d&&ul(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function el(t,e){if(Qe===null)return t;const n=Yi(Qe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,u,h=ye]=e[s];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&Pt(a),r.push({dir:o,instance:n,value:a,oldValue:void 0,arg:u,modifiers:h}))}return t}function dn(t,e,n,r){const s=t.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){const u=s[a];o&&(u.oldValue=o[a].value);let h=u.dir[r];h&&(ln(),It(h,n,8,[t.el,u,t,e]),cn())}}const dd=Symbol("_vte"),pd=t=>t.__isTeleport;function Mo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Mo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function iu(t,e){return ie(t)?Ne({name:t.name},e,{setup:t}):t}function su(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Gs(t,e,n,r,s=!1){if(re(t)){t.forEach((D,M)=>Gs(D,e&&(re(e)?e[M]:e),n,r,s));return}if(wr(r)&&!s)return;const o=r.shapeFlag&4?Yi(r.component):r.el,a=s?null:o,{i:u,r:h}=t,d=e&&e.r,m=u.refs===ye?u.refs={}:u.refs,_=u.setupState,b=he(_),R=_===ye?()=>!1:D=>de(b,D);if(d!=null&&d!==h&&(Re(d)?(m[d]=null,R(d)&&(_[d]=null)):Se(d)&&(d.value=null)),ie(h))Br(h,u,12,[a,m]);else{const D=Re(h),M=Se(h);if(D||M){const G=()=>{if(t.f){const q=D?R(h)?_[h]:m[h]:h.value;s?re(q)&&_o(q,o):re(q)?q.includes(o)||q.push(o):D?(m[h]=[o],R(h)&&(_[h]=m[h])):(h.value=[o],t.k&&(m[t.k]=h.value))}else D?(m[h]=a,R(h)&&(_[h]=a)):M&&(h.value=a,t.k&&(m[t.k]=a))};a?(G.id=-1,et(G,n)):G()}}}const wr=t=>!!t.type.__asyncLoader,ou=t=>t.type.__isKeepAlive;function gd(t,e){au(t,"a",e)}function md(t,e){au(t,"da",e)}function au(t,e,n=De){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Wi(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ou(s.parent.vnode)&&vd(r,e,n,s),s=s.parent}}function vd(t,e,n,r){const s=Wi(e,t,r,!0);lu(()=>{_o(r[e],s)},n)}function Wi(t,e,n=De,r=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{ln();const u=Vr(n),h=It(e,n,t,a);return u(),cn(),h});return r?s.unshift(o):s.push(o),o}}const Ft=t=>(e,n=De)=>{(!Xi||t==="sp")&&Wi(t,(...r)=>e(...r),n)},_d=Ft("bm"),yd=Ft("m"),Ed=Ft("bu"),wd=Ft("u"),Id=Ft("bum"),lu=Ft("um"),bd=Ft("sp"),Td=Ft("rtg"),Sd=Ft("rtc");function Ad(t,e=De){Wi("ec",t,e)}const cu="components";function tl(t,e){return Rd(cu,t,!0,e)||t}const Cd=Symbol.for("v-ndc");function Rd(t,e,n=!0,r=!1){const s=Qe||De;if(s){const o=s.type;if(t===cu){const u=mp(o,!1);if(u&&(u===e||u===ft(e)||u===Vi(ft(e))))return o}const a=nl(s[t]||o[t],e)||nl(s.appContext[t],e);return!a&&r?o:a}}function nl(t,e){return t&&(t[e]||t[ft(e)]||t[Vi(ft(e))])}const qs=t=>t?Ru(t)?Yi(t):qs(t.parent):null,Ir=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qs(t.parent),$root:t=>qs(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Uo(t),$forceUpdate:t=>t.f||(t.f=()=>{Lo(t.update)}),$nextTick:t=>t.n||(t.n=xo.bind(t.proxy)),$watch:t=>Xd.bind(t)}),Ts=(t,e)=>t!==ye&&!t.__isScriptSetup&&de(t,e),Pd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:a,type:u,appContext:h}=t;let d;if(e[0]!=="$"){const R=a[e];if(R!==void 0)switch(R){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(Ts(r,e))return a[e]=1,r[e];if(s!==ye&&de(s,e))return a[e]=2,s[e];if((d=t.propsOptions[0])&&de(d,e))return a[e]=3,o[e];if(n!==ye&&de(n,e))return a[e]=4,n[e];Js&&(a[e]=0)}}const m=Ir[e];let _,b;if(m)return e==="$attrs"&&Be(t.attrs,"get",""),m(t);if((_=u.__cssModules)&&(_=_[e]))return _;if(n!==ye&&de(n,e))return a[e]=4,n[e];if(b=h.config.globalProperties,de(b,e))return b[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return Ts(s,e)?(s[e]=n,!0):r!==ye&&de(r,e)?(r[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let u;return!!n[a]||t!==ye&&de(t,a)||Ts(e,a)||(u=o[0])&&de(u,a)||de(r,a)||de(Ir,a)||de(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rl(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Js=!0;function Od(t){const e=Uo(t),n=t.proxy,r=t.ctx;Js=!1,e.beforeCreate&&il(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:u,provide:h,inject:d,created:m,beforeMount:_,mounted:b,beforeUpdate:R,updated:D,activated:M,deactivated:G,beforeDestroy:q,beforeUnmount:K,destroyed:W,unmounted:V,render:te,renderTracked:le,renderTriggered:I,errorCaptured:p,serverPrefetch:v,expose:w,inheritAttrs:T,components:S,directives:E,filters:Pe}=e;if(d&&kd(d,r,null),a)for(const ee in a){const se=a[ee];ie(se)&&(r[ee]=se.bind(n))}if(s){const ee=s.call(n,n);Ae(ee)&&(t.data=Hr(ee))}if(Js=!0,o)for(const ee in o){const se=o[ee],Ze=ie(se)?se.bind(n,n):ie(se.get)?se.get.bind(n,n):yt,at=!ie(se)&&ie(se.set)?se.set.bind(n):yt,rt=ot({get:Ze,set:at});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Ie=>rt.value=Ie})}if(u)for(const ee in u)uu(u[ee],r,n,ee);if(h){const ee=ie(h)?h.call(n):h;Reflect.ownKeys(ee).forEach(se=>{_i(se,ee[se])})}m&&il(m,t,"c");function Ee(ee,se){re(se)?se.forEach(Ze=>ee(Ze.bind(n))):se&&ee(se.bind(n))}if(Ee(_d,_),Ee(yd,b),Ee(Ed,R),Ee(wd,D),Ee(gd,M),Ee(md,G),Ee(Ad,p),Ee(Sd,le),Ee(Td,I),Ee(Id,K),Ee(lu,V),Ee(bd,v),re(w))if(w.length){const ee=t.exposed||(t.exposed={});w.forEach(se=>{Object.defineProperty(ee,se,{get:()=>n[se],set:Ze=>n[se]=Ze})})}else t.exposed||(t.exposed={});te&&t.render===yt&&(t.render=te),T!=null&&(t.inheritAttrs=T),S&&(t.components=S),E&&(t.directives=E),v&&su(t)}function kd(t,e,n=yt){re(t)&&(t=Xs(t));for(const r in t){const s=t[r];let o;Ae(s)?"default"in s?o=ht(s.from||r,s.default,!0):o=ht(s.from||r):o=ht(s),Se(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function il(t,e,n){It(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function uu(t,e,n,r){let s=r.includes(".")?Tu(n,r):()=>n[r];if(Re(t)){const o=e[t];ie(o)&&br(s,o)}else if(ie(t))br(s,t.bind(n));else if(Ae(t))if(re(t))t.forEach(o=>uu(o,e,n,r));else{const o=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(o)&&br(s,o,t)}}function Uo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,u=o.get(e);let h;return u?h=u:!s.length&&!n&&!r?h=e:(h={},s.length&&s.forEach(d=>Ri(h,d,a,!0)),Ri(h,e,a)),Ae(e)&&o.set(e,h),h}function Ri(t,e,n,r=!1){const{mixins:s,extends:o}=e;o&&Ri(t,o,n,!0),s&&s.forEach(a=>Ri(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const u=Dd[a]||n&&n[a];t[a]=u?u(t[a],e[a]):e[a]}return t}const Dd={data:sl,props:ol,emits:ol,methods:vr,computed:vr,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:vr,directives:vr,watch:xd,provide:sl,inject:Nd};function sl(t,e){return e?t?function(){return Ne(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function Nd(t,e){return vr(Xs(t),Xs(e))}function Xs(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ke(t,e){return t?[...new Set([].concat(t,e))]:e}function vr(t,e){return t?Ne(Object.create(null),t,e):e}function ol(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:Ne(Object.create(null),rl(t),rl(e??{})):e}function xd(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const r in e)n[r]=Ke(t[r],e[r]);return n}function hu(){return{app:null,config:{isNativeTag:_f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ld=0;function Md(t,e){return function(r,s=null){ie(r)||(r=Ne({},r)),s!=null&&!Ae(s)&&(s=null);const o=hu(),a=new WeakSet,u=[];let h=!1;const d=o.app={_uid:Ld++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:_p,get config(){return o.config},set config(m){},use(m,..._){return a.has(m)||(m&&ie(m.install)?(a.add(m),m.install(d,..._)):ie(m)&&(a.add(m),m(d,..._))),d},mixin(m){return o.mixins.includes(m)||o.mixins.push(m),d},component(m,_){return _?(o.components[m]=_,d):o.components[m]},directive(m,_){return _?(o.directives[m]=_,d):o.directives[m]},mount(m,_,b){if(!h){const R=d._ceVNode||qe(r,s);return R.appContext=o,b===!0?b="svg":b===!1&&(b=void 0),_&&e?e(R,m):t(R,m,b),h=!0,d._container=m,m.__vue_app__=d,Yi(R.component)}},onUnmount(m){u.push(m)},unmount(){h&&(It(u,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(m,_){return o.provides[m]=_,d},runWithContext(m){const _=yn;yn=d;try{return m()}finally{yn=_}}};return d}}let yn=null;function _i(t,e){if(De){let n=De.provides;const r=De.parent&&De.parent.provides;r===n&&(n=De.provides=Object.create(r)),n[t]=e}}function ht(t,e,n=!1){const r=De||Qe;if(r||yn){const s=yn?yn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r&&r.proxy):e}}function Ud(){return!!(De||Qe||yn)}const fu={},du=()=>Object.create(fu),pu=t=>Object.getPrototypeOf(t)===fu;function Fd(t,e,n,r=!1){const s={},o=du();t.propsDefaults=Object.create(null),gu(t,e,s,o);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Jc(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function jd(t,e,n,r){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,u=he(s),[h]=t.propsOptions;let d=!1;if((r||a>0)&&!(a&16)){if(a&8){const m=t.vnode.dynamicProps;for(let _=0;_<m.length;_++){let b=m[_];if(zi(t.emitsOptions,b))continue;const R=e[b];if(h)if(de(o,b))R!==o[b]&&(o[b]=R,d=!0);else{const D=ft(b);s[D]=Ys(h,u,D,R,t,!1)}else R!==o[b]&&(o[b]=R,d=!0)}}}else{gu(t,e,s,o)&&(d=!0);let m;for(const _ in u)(!e||!de(e,_)&&((m=Tn(_))===_||!de(e,m)))&&(h?n&&(n[_]!==void 0||n[m]!==void 0)&&(s[_]=Ys(h,u,_,void 0,t,!0)):delete s[_]);if(o!==u)for(const _ in o)(!e||!de(e,_))&&(delete o[_],d=!0)}d&&xt(t.attrs,"set","")}function gu(t,e,n,r){const[s,o]=t.propsOptions;let a=!1,u;if(e)for(let h in e){if(yr(h))continue;const d=e[h];let m;s&&de(s,m=ft(h))?!o||!o.includes(m)?n[m]=d:(u||(u={}))[m]=d:zi(t.emitsOptions,h)||(!(h in r)||d!==r[h])&&(r[h]=d,a=!0)}if(o){const h=he(n),d=u||ye;for(let m=0;m<o.length;m++){const _=o[m];n[_]=Ys(s,h,_,d[_],t,!de(d,_))}}return a}function Ys(t,e,n,r,s,o){const a=t[n];if(a!=null){const u=de(a,"default");if(u&&r===void 0){const h=a.default;if(a.type!==Function&&!a.skipFactory&&ie(h)){const{propsDefaults:d}=s;if(n in d)r=d[n];else{const m=Vr(s);r=d[n]=h.call(null,e),m()}}else r=h;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!u?r=!1:a[1]&&(r===""||r===Tn(n))&&(r=!0))}return r}const Hd=new WeakMap;function mu(t,e,n=!1){const r=n?Hd:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},u=[];let h=!1;if(!ie(t)){const m=_=>{h=!0;const[b,R]=mu(_,e,!0);Ne(a,b),R&&u.push(...R)};!n&&e.mixins.length&&e.mixins.forEach(m),t.extends&&m(t.extends),t.mixins&&t.mixins.forEach(m)}if(!o&&!h)return Ae(t)&&r.set(t,Hn),Hn;if(re(o))for(let m=0;m<o.length;m++){const _=ft(o[m]);al(_)&&(a[_]=ye)}else if(o)for(const m in o){const _=ft(m);if(al(_)){const b=o[m],R=a[_]=re(b)||ie(b)?{type:b}:Ne({},b),D=R.type;let M=!1,G=!0;if(re(D))for(let q=0;q<D.length;++q){const K=D[q],W=ie(K)&&K.name;if(W==="Boolean"){M=!0;break}else W==="String"&&(G=!1)}else M=ie(D)&&D.name==="Boolean";R[0]=M,R[1]=G,(M||de(R,"default"))&&u.push(_)}}const d=[a,u];return Ae(t)&&r.set(t,d),d}function al(t){return t[0]!=="$"&&!yr(t)}const vu=t=>t[0]==="_"||t==="$stable",Fo=t=>re(t)?t.map(vt):[vt(t)],Bd=(t,e,n)=>{if(e._n)return e;const r=vi((...s)=>Fo(e(...s)),n);return r._c=!1,r},_u=(t,e,n)=>{const r=t._ctx;for(const s in t){if(vu(s))continue;const o=t[s];if(ie(o))e[s]=Bd(s,o,r);else if(o!=null){const a=Fo(o);e[s]=()=>a}}},yu=(t,e)=>{const n=Fo(e);t.slots.default=()=>n},Eu=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Vd=(t,e,n)=>{const r=t.slots=du();if(t.vnode.shapeFlag&32){const s=e._;s?(Eu(r,e,n),n&&Oc(r,"_",s,!0)):_u(e,r)}else e&&yu(t,e)},$d=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=ye;if(r.shapeFlag&32){const u=e._;u?n&&u===1?o=!1:Eu(s,e,n):(o=!e.$stable,_u(e,s)),a=e}else e&&(yu(t,e),a={default:1});if(o)for(const u in s)!vu(u)&&a[u]==null&&delete s[u]},et=rp;function Kd(t){return Wd(t)}function Wd(t,e){const n=kc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:a,createText:u,createComment:h,setText:d,setElementText:m,parentNode:_,nextSibling:b,setScopeId:R=yt,insertStaticContent:D}=t,M=(g,y,C,N=null,O=null,x=null,H=void 0,F=null,U=!!y.dynamicChildren)=>{if(g===y)return;g&&!gr(g,y)&&(N=k(g),Ie(g,O,x,!0),g=null),y.patchFlag===-2&&(U=!1,y.dynamicChildren=null);const{type:L,ref:Q,shapeFlag:$}=y;switch(L){case Gi:G(g,y,C,N);break;case xr:q(g,y,C,N);break;case Cs:g==null&&K(y,C,N,H);break;case Rt:S(g,y,C,N,O,x,H,F,U);break;default:$&1?te(g,y,C,N,O,x,H,F,U):$&6?E(g,y,C,N,O,x,H,F,U):($&64||$&128)&&L.process(g,y,C,N,O,x,H,F,U,J)}Q!=null&&O&&Gs(Q,g&&g.ref,x,y||g,!y)},G=(g,y,C,N)=>{if(g==null)r(y.el=u(y.children),C,N);else{const O=y.el=g.el;y.children!==g.children&&d(O,y.children)}},q=(g,y,C,N)=>{g==null?r(y.el=h(y.children||""),C,N):y.el=g.el},K=(g,y,C,N)=>{[g.el,g.anchor]=D(g.children,y,C,N,g.el,g.anchor)},W=({el:g,anchor:y},C,N)=>{let O;for(;g&&g!==y;)O=b(g),r(g,C,N),g=O;r(y,C,N)},V=({el:g,anchor:y})=>{let C;for(;g&&g!==y;)C=b(g),s(g),g=C;s(y)},te=(g,y,C,N,O,x,H,F,U)=>{y.type==="svg"?H="svg":y.type==="math"&&(H="mathml"),g==null?le(y,C,N,O,x,H,F,U):v(g,y,O,x,H,F,U)},le=(g,y,C,N,O,x,H,F)=>{let U,L;const{props:Q,shapeFlag:$,transition:Y,dirs:X}=g;if(U=g.el=a(g.type,x,Q&&Q.is,Q),$&8?m(U,g.children):$&16&&p(g.children,U,null,N,O,Ss(g,x),H,F),X&&dn(g,null,N,"created"),I(U,g,g.scopeId,H,N),Q){for(const fe in Q)fe!=="value"&&!yr(fe)&&o(U,fe,null,Q[fe],x,N);"value"in Q&&o(U,"value",null,Q.value,x),(L=Q.onVnodeBeforeMount)&&gt(L,N,g)}X&&dn(g,null,N,"beforeMount");const Z=zd(O,Y);Z&&Y.beforeEnter(U),r(U,y,C),((L=Q&&Q.onVnodeMounted)||Z||X)&&et(()=>{L&&gt(L,N,g),Z&&Y.enter(U),X&&dn(g,null,N,"mounted")},O)},I=(g,y,C,N,O)=>{if(C&&R(g,C),N)for(let x=0;x<N.length;x++)R(g,N[x]);if(O){let x=O.subTree;if(y===x||Au(x.type)&&(x.ssContent===y||x.ssFallback===y)){const H=O.vnode;I(g,H,H.scopeId,H.slotScopeIds,O.parent)}}},p=(g,y,C,N,O,x,H,F,U=0)=>{for(let L=U;L<g.length;L++){const Q=g[L]=F?Xt(g[L]):vt(g[L]);M(null,Q,y,C,N,O,x,H,F)}},v=(g,y,C,N,O,x,H)=>{const F=y.el=g.el;let{patchFlag:U,dynamicChildren:L,dirs:Q}=y;U|=g.patchFlag&16;const $=g.props||ye,Y=y.props||ye;let X;if(C&&pn(C,!1),(X=Y.onVnodeBeforeUpdate)&&gt(X,C,y,g),Q&&dn(y,g,C,"beforeUpdate"),C&&pn(C,!0),($.innerHTML&&Y.innerHTML==null||$.textContent&&Y.textContent==null)&&m(F,""),L?w(g.dynamicChildren,L,F,C,N,Ss(y,O),x):H||se(g,y,F,null,C,N,Ss(y,O),x,!1),U>0){if(U&16)T(F,$,Y,C,O);else if(U&2&&$.class!==Y.class&&o(F,"class",null,Y.class,O),U&4&&o(F,"style",$.style,Y.style,O),U&8){const Z=y.dynamicProps;for(let fe=0;fe<Z.length;fe++){const ce=Z[fe],xe=$[ce],Ce=Y[ce];(Ce!==xe||ce==="value")&&o(F,ce,xe,Ce,O,C)}}U&1&&g.children!==y.children&&m(F,y.children)}else!H&&L==null&&T(F,$,Y,C,O);((X=Y.onVnodeUpdated)||Q)&&et(()=>{X&&gt(X,C,y,g),Q&&dn(y,g,C,"updated")},N)},w=(g,y,C,N,O,x,H)=>{for(let F=0;F<y.length;F++){const U=g[F],L=y[F],Q=U.el&&(U.type===Rt||!gr(U,L)||U.shapeFlag&70)?_(U.el):C;M(U,L,Q,null,N,O,x,H,!0)}},T=(g,y,C,N,O)=>{if(y!==C){if(y!==ye)for(const x in y)!yr(x)&&!(x in C)&&o(g,x,y[x],null,O,N);for(const x in C){if(yr(x))continue;const H=C[x],F=y[x];H!==F&&x!=="value"&&o(g,x,F,H,O,N)}"value"in C&&o(g,"value",y.value,C.value,O)}},S=(g,y,C,N,O,x,H,F,U)=>{const L=y.el=g?g.el:u(""),Q=y.anchor=g?g.anchor:u("");let{patchFlag:$,dynamicChildren:Y,slotScopeIds:X}=y;X&&(F=F?F.concat(X):X),g==null?(r(L,C,N),r(Q,C,N),p(y.children||[],C,Q,O,x,H,F,U)):$>0&&$&64&&Y&&g.dynamicChildren?(w(g.dynamicChildren,Y,C,O,x,H,F),(y.key!=null||O&&y===O.subTree)&&wu(g,y,!0)):se(g,y,C,Q,O,x,H,F,U)},E=(g,y,C,N,O,x,H,F,U)=>{y.slotScopeIds=F,g==null?y.shapeFlag&512?O.ctx.activate(y,C,N,H,U):Pe(y,C,N,O,x,H,U):Xe(g,y,U)},Pe=(g,y,C,N,O,x,H)=>{const F=g.component=hp(g,N,O);if(ou(g)&&(F.ctx.renderer=J),fp(F,!1,H),F.asyncDep){if(O&&O.registerDep(F,Ee,H),!g.el){const U=F.subTree=qe(xr);q(null,U,y,C)}}else Ee(F,g,y,C,O,x,H)},Xe=(g,y,C)=>{const N=y.component=g.component;if(tp(g,y,C))if(N.asyncDep&&!N.asyncResolved){ee(N,y,C);return}else N.next=y,N.update();else y.el=g.el,N.vnode=y},Ee=(g,y,C,N,O,x,H)=>{const F=()=>{if(g.isMounted){let{next:$,bu:Y,u:X,parent:Z,vnode:fe}=g;{const Le=Iu(g);if(Le){$&&($.el=fe.el,ee(g,$,H)),Le.asyncDep.then(()=>{g.isUnmounted||F()});return}}let ce=$,xe;pn(g,!1),$?($.el=fe.el,ee(g,$,H)):$=fe,Y&&mi(Y),(xe=$.props&&$.props.onVnodeBeforeUpdate)&&gt(xe,Z,$,fe),pn(g,!0);const Ce=As(g),Oe=g.subTree;g.subTree=Ce,M(Oe,Ce,_(Oe.el),k(Oe),g,O,x),$.el=Ce.el,ce===null&&np(g,Ce.el),X&&et(X,O),(xe=$.props&&$.props.onVnodeUpdated)&&et(()=>gt(xe,Z,$,fe),O)}else{let $;const{el:Y,props:X}=y,{bm:Z,m:fe,parent:ce,root:xe,type:Ce}=g,Oe=wr(y);if(pn(g,!1),Z&&mi(Z),!Oe&&($=X&&X.onVnodeBeforeMount)&&gt($,ce,y),pn(g,!0),Y&&me){const Le=()=>{g.subTree=As(g),me(Y,g.subTree,g,O,null)};Oe&&Ce.__asyncHydrate?Ce.__asyncHydrate(Y,g,Le):Le()}else{xe.ce&&xe.ce._injectChildStyle(Ce);const Le=g.subTree=As(g);M(null,Le,C,N,g,O,x),y.el=Le.el}if(fe&&et(fe,O),!Oe&&($=X&&X.onVnodeMounted)){const Le=y;et(()=>gt($,ce,Le),O)}(y.shapeFlag&256||ce&&wr(ce.vnode)&&ce.vnode.shapeFlag&256)&&g.a&&et(g.a,O),g.isMounted=!0,y=C=N=null}};g.scope.on();const U=g.effect=new Mc(F);g.scope.off();const L=g.update=U.run.bind(U),Q=g.job=U.runIfDirty.bind(U);Q.i=g,Q.id=g.uid,U.scheduler=()=>Lo(Q),pn(g,!0),L()},ee=(g,y,C)=>{y.component=g;const N=g.vnode.props;g.vnode=y,g.next=null,jd(g,y.props,N,C),$d(g,y.children,C),ln(),Za(g),cn()},se=(g,y,C,N,O,x,H,F,U=!1)=>{const L=g&&g.children,Q=g?g.shapeFlag:0,$=y.children,{patchFlag:Y,shapeFlag:X}=y;if(Y>0){if(Y&128){at(L,$,C,N,O,x,H,F,U);return}else if(Y&256){Ze(L,$,C,N,O,x,H,F,U);return}}X&8?(Q&16&&Ye(L,O,x),$!==L&&m(C,$)):Q&16?X&16?at(L,$,C,N,O,x,H,F,U):Ye(L,O,x,!0):(Q&8&&m(C,""),X&16&&p($,C,N,O,x,H,F,U))},Ze=(g,y,C,N,O,x,H,F,U)=>{g=g||Hn,y=y||Hn;const L=g.length,Q=y.length,$=Math.min(L,Q);let Y;for(Y=0;Y<$;Y++){const X=y[Y]=U?Xt(y[Y]):vt(y[Y]);M(g[Y],X,C,null,O,x,H,F,U)}L>Q?Ye(g,O,x,!0,!1,$):p(y,C,N,O,x,H,F,U,$)},at=(g,y,C,N,O,x,H,F,U)=>{let L=0;const Q=y.length;let $=g.length-1,Y=Q-1;for(;L<=$&&L<=Y;){const X=g[L],Z=y[L]=U?Xt(y[L]):vt(y[L]);if(gr(X,Z))M(X,Z,C,null,O,x,H,F,U);else break;L++}for(;L<=$&&L<=Y;){const X=g[$],Z=y[Y]=U?Xt(y[Y]):vt(y[Y]);if(gr(X,Z))M(X,Z,C,null,O,x,H,F,U);else break;$--,Y--}if(L>$){if(L<=Y){const X=Y+1,Z=X<Q?y[X].el:N;for(;L<=Y;)M(null,y[L]=U?Xt(y[L]):vt(y[L]),C,Z,O,x,H,F,U),L++}}else if(L>Y)for(;L<=$;)Ie(g[L],O,x,!0),L++;else{const X=L,Z=L,fe=new Map;for(L=Z;L<=Y;L++){const Ve=y[L]=U?Xt(y[L]):vt(y[L]);Ve.key!=null&&fe.set(Ve.key,L)}let ce,xe=0;const Ce=Y-Z+1;let Oe=!1,Le=0;const Bt=new Array(Ce);for(L=0;L<Ce;L++)Bt[L]=0;for(L=X;L<=$;L++){const Ve=g[L];if(xe>=Ce){Ie(Ve,O,x,!0);continue}let it;if(Ve.key!=null)it=fe.get(Ve.key);else for(ce=Z;ce<=Y;ce++)if(Bt[ce-Z]===0&&gr(Ve,y[ce])){it=ce;break}it===void 0?Ie(Ve,O,x,!0):(Bt[it-Z]=L+1,it>=Le?Le=it:Oe=!0,M(Ve,y[it],C,null,O,x,H,F,U),xe++)}const An=Oe?Gd(Bt):Hn;for(ce=An.length-1,L=Ce-1;L>=0;L--){const Ve=Z+L,it=y[Ve],Cn=Ve+1<Q?y[Ve+1].el:N;Bt[L]===0?M(null,it,C,Cn,O,x,H,F,U):Oe&&(ce<0||L!==An[ce]?rt(it,C,Cn,2):ce--)}}},rt=(g,y,C,N,O=null)=>{const{el:x,type:H,transition:F,children:U,shapeFlag:L}=g;if(L&6){rt(g.component.subTree,y,C,N);return}if(L&128){g.suspense.move(y,C,N);return}if(L&64){H.move(g,y,C,J);return}if(H===Rt){r(x,y,C);for(let $=0;$<U.length;$++)rt(U[$],y,C,N);r(g.anchor,y,C);return}if(H===Cs){W(g,y,C);return}if(N!==2&&L&1&&F)if(N===0)F.beforeEnter(x),r(x,y,C),et(()=>F.enter(x),O);else{const{leave:$,delayLeave:Y,afterLeave:X}=F,Z=()=>r(x,y,C),fe=()=>{$(x,()=>{Z(),X&&X()})};Y?Y(x,Z,fe):fe()}else r(x,y,C)},Ie=(g,y,C,N=!1,O=!1)=>{const{type:x,props:H,ref:F,children:U,dynamicChildren:L,shapeFlag:Q,patchFlag:$,dirs:Y,cacheIndex:X}=g;if($===-2&&(O=!1),F!=null&&Gs(F,null,C,g,!0),X!=null&&(y.renderCache[X]=void 0),Q&256){y.ctx.deactivate(g);return}const Z=Q&1&&Y,fe=!wr(g);let ce;if(fe&&(ce=H&&H.onVnodeBeforeUnmount)&&gt(ce,y,g),Q&6)pt(g.component,C,N);else{if(Q&128){g.suspense.unmount(C,N);return}Z&&dn(g,null,y,"beforeUnmount"),Q&64?g.type.remove(g,y,C,J,N):L&&!L.hasOnce&&(x!==Rt||$>0&&$&64)?Ye(L,y,C,!1,!0):(x===Rt&&$&384||!O&&Q&16)&&Ye(U,y,C),N&&be(g)}(fe&&(ce=H&&H.onVnodeUnmounted)||Z)&&et(()=>{ce&&gt(ce,y,g),Z&&dn(g,null,y,"unmounted")},C)},be=g=>{const{type:y,el:C,anchor:N,transition:O}=g;if(y===Rt){Ht(C,N);return}if(y===Cs){V(g);return}const x=()=>{s(C),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(g.shapeFlag&1&&O&&!O.persisted){const{leave:H,delayLeave:F}=O,U=()=>H(C,x);F?F(g.el,x,U):U()}else x()},Ht=(g,y)=>{let C;for(;g!==y;)C=b(g),s(g),g=C;s(y)},pt=(g,y,C)=>{const{bum:N,scope:O,job:x,subTree:H,um:F,m:U,a:L}=g;ll(U),ll(L),N&&mi(N),O.stop(),x&&(x.flags|=8,Ie(H,g,y,C)),F&&et(F,y),et(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Ye=(g,y,C,N=!1,O=!1,x=0)=>{for(let H=x;H<g.length;H++)Ie(g[H],y,C,N,O)},k=g=>{if(g.shapeFlag&6)return k(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const y=b(g.anchor||g.el),C=y&&y[dd];return C?b(C):y};let z=!1;const B=(g,y,C)=>{g==null?y._vnode&&Ie(y._vnode,null,null,!0):M(y._vnode||null,g,y,null,null,null,C),y._vnode=g,z||(z=!0,Za(),tu(),z=!1)},J={p:M,um:Ie,m:rt,r:be,mt:Pe,mc:p,pc:se,pbc:w,n:k,o:t};let oe,me;return{render:B,hydrate:oe,createApp:Md(B,oe)}}function Ss({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function pn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function zd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wu(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let o=0;o<r.length;o++){const a=r[o];let u=s[o];u.shapeFlag&1&&!u.dynamicChildren&&((u.patchFlag<=0||u.patchFlag===32)&&(u=s[o]=Xt(s[o]),u.el=a.el),!n&&u.patchFlag!==-2&&wu(a,u)),u.type===Gi&&(u.el=a.el)}}function Gd(t){const e=t.slice(),n=[0];let r,s,o,a,u;const h=t.length;for(r=0;r<h;r++){const d=t[r];if(d!==0){if(s=n[n.length-1],t[s]<d){e[r]=s,n.push(r);continue}for(o=0,a=n.length-1;o<a;)u=o+a>>1,t[n[u]]<d?o=u+1:a=u;d<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Iu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Iu(e)}function ll(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const qd=Symbol.for("v-scx"),Jd=()=>ht(qd);function br(t,e,n){return bu(t,e,n)}function bu(t,e,n=ye){const{immediate:r,deep:s,flush:o,once:a}=n,u=Ne({},n);let h;if(Xi)if(o==="sync"){const b=Jd();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!e||r)u.once=!0;else return{stop:yt,resume:yt,pause:yt};const d=De;u.call=(b,R,D)=>It(b,d,R,D);let m=!1;o==="post"?u.scheduler=b=>{et(b,d&&d.suspense)}:o!=="sync"&&(m=!0,u.scheduler=(b,R)=>{R?b():Lo(b)}),u.augmentJob=b=>{e&&(b.flags|=4),m&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const _=cd(t,e,u);return h&&h.push(_),_}function Xd(t,e,n){const r=this.proxy,s=Re(t)?t.includes(".")?Tu(r,t):()=>r[t]:t.bind(r,r);let o;ie(e)?o=e:(o=e.handler,n=e);const a=Vr(this),u=bu(s,o.bind(r),n);return a(),u}function Tu(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Yd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ft(e)}Modifiers`]||t[`${Tn(e)}Modifiers`];function Qd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ye;let s=n;const o=e.startsWith("update:"),a=o&&Yd(r,e.slice(7));a&&(a.trim&&(s=n.map(m=>Re(m)?m.trim():m)),a.number&&(s=n.map($s)));let u,h=r[u=Es(e)]||r[u=Es(ft(e))];!h&&o&&(h=r[u=Es(Tn(e))]),h&&It(h,t,6,s);const d=r[u+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[u])return;t.emitted[u]=!0,It(d,t,6,s)}}function Su(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const o=t.emits;let a={},u=!1;if(!ie(t)){const h=d=>{const m=Su(d,e,!0);m&&(u=!0,Ne(a,m))};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!o&&!u?(Ae(t)&&r.set(t,null),null):(re(o)?o.forEach(h=>a[h]=null):Ne(a,o),Ae(t)&&r.set(t,a),a)}function zi(t,e){return!t||!ji(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,Tn(e))||de(t,e))}function As(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:a,attrs:u,emit:h,render:d,renderCache:m,props:_,data:b,setupState:R,ctx:D,inheritAttrs:M}=t,G=Ci(t);let q,K;try{if(n.shapeFlag&4){const V=s||r,te=V;q=vt(d.call(te,V,m,_,R,b,D)),K=u}else{const V=e;q=vt(V.length>1?V(_,{attrs:u,slots:a,emit:h}):V(_,null)),K=e.props?u:Zd(u)}}catch(V){Tr.length=0,Ki(V,t,1),q=qe(xr)}let W=q;if(K&&M!==!1){const V=Object.keys(K),{shapeFlag:te}=W;V.length&&te&7&&(o&&V.some(vo)&&(K=ep(K,o)),W=Gn(W,K,!1,!0))}return n.dirs&&(W=Gn(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&Mo(W,n.transition),q=W,Ci(G),q}const Zd=t=>{let e;for(const n in t)(n==="class"||n==="style"||ji(n))&&((e||(e={}))[n]=t[n]);return e},ep=(t,e)=>{const n={};for(const r in t)(!vo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tp(t,e,n){const{props:r,children:s,component:o}=t,{props:a,children:u,patchFlag:h}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return r?cl(r,a,d):!!a;if(h&8){const m=e.dynamicProps;for(let _=0;_<m.length;_++){const b=m[_];if(a[b]!==r[b]&&!zi(d,b))return!0}}}else return(s||u)&&(!u||!u.$stable)?!0:r===a?!1:r?a?cl(r,a,d):!0:!!a;return!1}function cl(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(e[o]!==t[o]&&!zi(n,o))return!0}return!1}function np({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Au=t=>t.__isSuspense;function rp(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):fd(t)}const Rt=Symbol.for("v-fgt"),Gi=Symbol.for("v-txt"),xr=Symbol.for("v-cmt"),Cs=Symbol.for("v-stc"),Tr=[];let tt=null;function qi(t=!1){Tr.push(tt=t?null:[])}function ip(){Tr.pop(),tt=Tr[Tr.length-1]||null}let Lr=1;function ul(t){Lr+=t,t<0&&tt&&(tt.hasOnce=!0)}function sp(t){return t.dynamicChildren=Lr>0?tt||Hn:null,ip(),Lr>0&&tt&&tt.push(t),t}function Ji(t,e,n,r,s,o){return sp(_t(t,e,n,r,s,o,!0))}function Qs(t){return t?t.__v_isVNode===!0:!1}function gr(t,e){return t.type===e.type&&t.key===e.key}const Cu=({key:t})=>t??null,yi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||Se(t)||ie(t)?{i:Qe,r:t,k:e,f:!!n}:t:null);function _t(t,e=null,n=null,r=0,s=null,o=t===Rt?0:1,a=!1,u=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Cu(e),ref:e&&yi(e),scopeId:ru,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Qe};return u?(jo(h,n),o&128&&t.normalize(h)):n&&(h.shapeFlag|=Re(n)?8:16),Lr>0&&!a&&tt&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&tt.push(h),h}const qe=op;function op(t,e=null,n=null,r=0,s=null,o=!1){if((!t||t===Cd)&&(t=xr),Qs(t)){const u=Gn(t,e,!0);return n&&jo(u,n),Lr>0&&!o&&tt&&(u.shapeFlag&6?tt[tt.indexOf(t)]=u:tt.push(u)),u.patchFlag=-2,u}if(vp(t)&&(t=t.__vccOpts),e){e=ap(e);let{class:u,style:h}=e;u&&!Re(u)&&(e.class=wo(u)),Ae(h)&&(Oo(h)&&!re(h)&&(h=Ne({},h)),e.style=Eo(h))}const a=Re(t)?1:Au(t)?128:pd(t)?64:Ae(t)?4:ie(t)?2:0;return _t(t,e,n,r,s,a,o,!0)}function ap(t){return t?Oo(t)||pu(t)?Ne({},t):t:null}function Gn(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:u,transition:h}=t,d=e?lp(s||{},e):s,m={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Cu(d),ref:e&&e.ref?n&&o?re(o)?o.concat(yi(e)):[o,yi(e)]:yi(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:u,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Rt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gn(t.ssContent),ssFallback:t.ssFallback&&Gn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&r&&Mo(m,h.clone(m)),m}function Mn(t=" ",e=0){return qe(Gi,null,t,e)}function vt(t){return t==null||typeof t=="boolean"?qe(xr):re(t)?qe(Rt,null,t.slice()):typeof t=="object"?Xt(t):qe(Gi,null,String(t))}function Xt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gn(t)}function jo(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),jo(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!pu(e)?e._ctx=Qe:s===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Qe},n=32):(e=String(e),r&64?(n=16,e=[Mn(e)]):n=8);t.children=e,t.shapeFlag|=n}function lp(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=wo([e.class,r.class]));else if(s==="style")e.style=Eo([e.style,r.style]);else if(ji(s)){const o=e[s],a=r[s];a&&o!==a&&!(re(o)&&o.includes(a))&&(e[s]=o?[].concat(o,a):a)}else s!==""&&(e[s]=r[s])}return e}function gt(t,e,n,r=null){It(t,e,7,[n,r])}const cp=hu();let up=0;function hp(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||cp,o={uid:up++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Nc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mu(r,s),emitsOptions:Su(r,s),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:r.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Qd.bind(null,o),t.ce&&t.ce(o),o}let De=null,Pi,Zs;{const t=kc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};Pi=e("__VUE_INSTANCE_SETTERS__",n=>De=n),Zs=e("__VUE_SSR_SETTERS__",n=>Xi=n)}const Vr=t=>{const e=De;return Pi(t),t.scope.on(),()=>{t.scope.off(),Pi(e)}},hl=()=>{De&&De.scope.off(),Pi(null)};function Ru(t){return t.vnode.shapeFlag&4}let Xi=!1;function fp(t,e=!1,n=!1){e&&Zs(e);const{props:r,children:s}=t.vnode,o=Ru(t);Fd(t,r,o,e),Vd(t,s,n);const a=o?dp(t,e):void 0;return e&&Zs(!1),a}function dp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Pd);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?gp(t):null,o=Vr(t);ln();const a=Br(r,t,0,[t.props,s]);if(cn(),o(),Pc(a)){if(wr(t)||su(t),a.then(hl,hl),e)return a.then(u=>{fl(t,u,e)}).catch(u=>{Ki(u,t,0)});t.asyncDep=a}else fl(t,a,e)}else Pu(t,e)}function fl(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=Qc(e)),Pu(t,n)}let dl;function Pu(t,e,n){const r=t.type;if(!t.render){if(!e&&dl&&!r.render){const s=r.template||Uo(t).template;if(s){const{isCustomElement:o,compilerOptions:a}=t.appContext.config,{delimiters:u,compilerOptions:h}=r,d=Ne(Ne({isCustomElement:o,delimiters:u},a),h);r.render=dl(s,d)}}t.render=r.render||yt}{const s=Vr(t);ln();try{Od(t)}finally{cn(),s()}}}const pp={get(t,e){return Be(t,"get",""),t[e]}};function gp(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,pp),slots:t.slots,emit:t.emit,expose:e}}function Yi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Qc(ko(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ir)return Ir[n](t)},has(e,n){return n in e||n in Ir}})):t.proxy}function mp(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function vp(t){return ie(t)&&"__vccOpts"in t}const ot=(t,e)=>ad(t,e,Xi);function Ou(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!re(e)?Qs(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qs(n)&&(n=[n]),qe(t,e,n))}const _p="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let eo;const pl=typeof window<"u"&&window.trustedTypes;if(pl)try{eo=pl.createPolicy("vue",{createHTML:t=>t})}catch{}const ku=eo?t=>eo.createHTML(t):t=>t,yp="http://www.w3.org/2000/svg",Ep="http://www.w3.org/1998/Math/MathML",Ct=typeof document<"u"?document:null,gl=Ct&&Ct.createElement("template"),wp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ct.createElementNS(yp,t):e==="mathml"?Ct.createElementNS(Ep,t):n?Ct.createElement(t,{is:n}):Ct.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ct.createTextNode(t),createComment:t=>Ct.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ct.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,o){const a=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{gl.innerHTML=ku(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const u=gl.content;if(r==="svg"||r==="mathml"){const h=u.firstChild;for(;h.firstChild;)u.appendChild(h.firstChild);u.removeChild(h)}e.insertBefore(u,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ip=Symbol("_vtc");function bp(t,e,n){const r=t[Ip];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ml=Symbol("_vod"),Tp=Symbol("_vsh"),Sp=Symbol(""),Ap=/(^|;)\s*display\s*:/;function Cp(t,e,n){const r=t.style,s=Re(n);let o=!1;if(n&&!s){if(e)if(Re(e))for(const a of e.split(";")){const u=a.slice(0,a.indexOf(":")).trim();n[u]==null&&Ei(r,u,"")}else for(const a in e)n[a]==null&&Ei(r,a,"");for(const a in n)a==="display"&&(o=!0),Ei(r,a,n[a])}else if(s){if(e!==n){const a=r[Sp];a&&(n+=";"+a),r.cssText=n,o=Ap.test(n)}}else e&&t.removeAttribute("style");ml in t&&(t[ml]=o?r.display:"",t[Tp]&&(r.display="none"))}const vl=/\s*!important$/;function Ei(t,e,n){if(re(n))n.forEach(r=>Ei(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Rp(t,e);vl.test(n)?t.setProperty(Tn(r),n.replace(vl,""),"important"):t[r]=n}}const _l=["Webkit","Moz","ms"],Rs={};function Rp(t,e){const n=Rs[e];if(n)return n;let r=ft(e);if(r!=="filter"&&r in t)return Rs[e]=r;r=Vi(r);for(let s=0;s<_l.length;s++){const o=_l[s]+r;if(o in t)return Rs[e]=o}return e}const yl="http://www.w3.org/1999/xlink";function El(t,e,n,r,s,o=kf(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(yl,e.slice(6,e.length)):t.setAttributeNS(yl,e,n):n==null||o&&!Dc(n)?t.removeAttribute(e):t.setAttribute(e,o?"":Qn(n)?String(n):n)}function Pp(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ku(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(a!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Dc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(e)}function Un(t,e,n,r){t.addEventListener(e,n,r)}function Op(t,e,n,r){t.removeEventListener(e,n,r)}const wl=Symbol("_vei");function kp(t,e,n,r,s=null){const o=t[wl]||(t[wl]={}),a=o[e];if(r&&a)a.value=r;else{const[u,h]=Dp(e);if(r){const d=o[e]=Lp(r,s);Un(t,u,d,h)}else a&&(Op(t,u,a,h),o[e]=void 0)}}const Il=/(?:Once|Passive|Capture)$/;function Dp(t){let e;if(Il.test(t)){e={};let r;for(;r=t.match(Il);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Tn(t.slice(2)),e]}let Ps=0;const Np=Promise.resolve(),xp=()=>Ps||(Np.then(()=>Ps=0),Ps=Date.now());function Lp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;It(Mp(r,n.value),e,5,[r])};return n.value=t,n.attached=xp(),n}function Mp(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const bl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Up=(t,e,n,r,s,o)=>{const a=s==="svg";e==="class"?bp(t,r,a):e==="style"?Cp(t,n,r):ji(e)?vo(e)||kp(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fp(t,e,r,a))?(Pp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&El(t,e,r,a,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),El(t,e,r,a))};function Fp(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&bl(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bl(e)&&Re(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!Re(n)))}const Tl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>mi(e,n):e};function jp(t){t.target.composing=!0}function Sl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Os=Symbol("_assign"),Al={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Os]=Tl(s);const o=r||s.props&&s.props.type==="number";Un(t,e?"change":"input",a=>{if(a.target.composing)return;let u=t.value;n&&(u=u.trim()),o&&(u=$s(u)),t[Os](u)}),n&&Un(t,"change",()=>{t.value=t.value.trim()}),e||(Un(t,"compositionstart",jp),Un(t,"compositionend",Sl),Un(t,"change",Sl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[Os]=Tl(a),t.composing)return;const u=(o||t.type==="number")&&!/^0\d/.test(t.value)?$s(t.value):t.value,h=e??"";u!==h&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===h)||(t.value=h))}},Hp=["ctrl","shift","alt","meta"],Bp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Hp.some(n=>t[`${n}Key`]&&!e.includes(n))},Vp=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...o)=>{for(let a=0;a<e.length;a++){const u=Bp[e[a]];if(u&&u(s,e))return}return t(s,...o)})},$p=Ne({patchProp:Up},wp);let Cl;function Kp(){return Cl||(Cl=Kd($p))}const Wp=(...t)=>{const e=Kp().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Gp(r);if(!s)return;const o=e._component;!ie(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,zp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function zp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Gp(t){return Re(t)?document.querySelector(t):t}const Ho=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},qp={};function Jp(t,e){const n=tl("router-link"),r=tl("router-view");return qi(),Ji("div",null,[_t("nav",null,[qe(n,{to:"/"},{default:vi(()=>e[0]||(e[0]=[Mn("Home")])),_:1}),e[3]||(e[3]=Mn(" | ")),qe(n,{to:"/login"},{default:vi(()=>e[1]||(e[1]=[Mn("Login")])),_:1}),e[4]||(e[4]=Mn(" | º ")),qe(n,{to:"/register"},{default:vi(()=>e[2]||(e[2]=[Mn("Register")])),_:1})]),qe(r)])}const Xp=Ho(qp,[["render",Jp]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Fn=typeof document<"u";function Du(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Du(t.default)}const ge=Object.assign;function ks(t,e){const n={};for(const r in e){const s=e[r];n[r]=dt(s)?s.map(t):t(s)}return n}const Sr=()=>{},dt=Array.isArray,Nu=/#/g,Qp=/&/g,Zp=/\//g,eg=/=/g,tg=/\?/g,xu=/\+/g,ng=/%5B/g,rg=/%5D/g,Lu=/%5E/g,ig=/%60/g,Mu=/%7B/g,sg=/%7C/g,Uu=/%7D/g,og=/%20/g;function Bo(t){return encodeURI(""+t).replace(sg,"|").replace(ng,"[").replace(rg,"]")}function ag(t){return Bo(t).replace(Mu,"{").replace(Uu,"}").replace(Lu,"^")}function to(t){return Bo(t).replace(xu,"%2B").replace(og,"+").replace(Nu,"%23").replace(Qp,"%26").replace(ig,"`").replace(Mu,"{").replace(Uu,"}").replace(Lu,"^")}function lg(t){return to(t).replace(eg,"%3D")}function cg(t){return Bo(t).replace(Nu,"%23").replace(tg,"%3F")}function ug(t){return t==null?"":cg(t).replace(Zp,"%2F")}function Mr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const hg=/\/$/,fg=t=>t.replace(hg,"");function Ds(t,e,n="/"){let r,s={},o="",a="";const u=e.indexOf("#");let h=e.indexOf("?");return u<h&&u>=0&&(h=-1),h>-1&&(r=e.slice(0,h),o=e.slice(h+1,u>-1?u:e.length),s=t(o)),u>-1&&(r=r||e.slice(0,u),a=e.slice(u,e.length)),r=mg(r??e,n),{fullPath:r+(o&&"?")+o+a,path:r,query:s,hash:Mr(a)}}function dg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pg(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&qn(e.matched[r],n.matched[s])&&Fu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function qn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gg(t[n],e[n]))return!1;return!0}function gg(t,e){return dt(t)?Pl(t,e):dt(e)?Pl(e,t):t===e}function Pl(t,e){return dt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function mg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,a,u;for(a=0;a<r.length;a++)if(u=r[a],u!==".")if(u==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(a).join("/")}const zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ur;(function(t){t.pop="pop",t.push="push"})(Ur||(Ur={}));var Ar;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ar||(Ar={}));function vg(t){if(!t)if(Fn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fg(t)}const _g=/^[^#]+#/;function yg(t,e){return t.replace(_g,"#")+e}function Eg(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Qi=()=>({left:window.scrollX,top:window.scrollY});function wg(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Eg(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ol(t,e){return(history.state?history.state.position-e:-1)+t}const no=new Map;function Ig(t,e){no.set(t,e)}function bg(t){const e=no.get(t);return no.delete(t),e}let Tg=()=>location.protocol+"//"+location.host;function ju(t,e){const{pathname:n,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){let u=s.includes(t.slice(o))?t.slice(o).length:1,h=s.slice(u);return h[0]!=="/"&&(h="/"+h),Rl(h,"")}return Rl(n,t)+r+s}function Sg(t,e,n,r){let s=[],o=[],a=null;const u=({state:b})=>{const R=ju(t,location),D=n.value,M=e.value;let G=0;if(b){if(n.value=R,e.value=b,a&&a===D){a=null;return}G=M?b.position-M.position:0}else r(R);s.forEach(q=>{q(n.value,D,{delta:G,type:Ur.pop,direction:G?G>0?Ar.forward:Ar.back:Ar.unknown})})};function h(){a=n.value}function d(b){s.push(b);const R=()=>{const D=s.indexOf(b);D>-1&&s.splice(D,1)};return o.push(R),R}function m(){const{history:b}=window;b.state&&b.replaceState(ge({},b.state,{scroll:Qi()}),"")}function _(){for(const b of o)b();o=[],window.removeEventListener("popstate",u),window.removeEventListener("beforeunload",m)}return window.addEventListener("popstate",u),window.addEventListener("beforeunload",m,{passive:!0}),{pauseListeners:h,listen:d,destroy:_}}function kl(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Qi():null}}function Ag(t){const{history:e,location:n}=window,r={value:ju(t,n)},s={value:e.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(h,d,m){const _=t.indexOf("#"),b=_>-1?(n.host&&document.querySelector("base")?t:t.slice(_))+h:Tg()+t+h;try{e[m?"replaceState":"pushState"](d,"",b),s.value=d}catch(R){console.error(R),n[m?"replace":"assign"](b)}}function a(h,d){const m=ge({},e.state,kl(s.value.back,h,s.value.forward,!0),d,{position:s.value.position});o(h,m,!0),r.value=h}function u(h,d){const m=ge({},s.value,e.state,{forward:h,scroll:Qi()});o(m.current,m,!0);const _=ge({},kl(r.value,h,null),{position:m.position+1},d);o(h,_,!1),r.value=h}return{location:r,state:s,push:u,replace:a}}function Cg(t){t=vg(t);const e=Ag(t),n=Sg(t,e.state,e.location,e.replace);function r(o,a=!0){a||n.pauseListeners(),history.go(o)}const s=ge({location:"",base:t,go:r,createHref:yg.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Rg(t){return typeof t=="string"||t&&typeof t=="object"}function Hu(t){return typeof t=="string"||typeof t=="symbol"}const Bu=Symbol("");var Dl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Dl||(Dl={}));function Jn(t,e){return ge(new Error,{type:t,[Bu]:!0},e)}function At(t,e){return t instanceof Error&&Bu in t&&(e==null||!!(t.type&e))}const Nl="[^/]+?",Pg={sensitive:!1,strict:!1,start:!0,end:!0},Og=/[.+*?^${}()[\]/\\]/g;function kg(t,e){const n=ge({},Pg,e),r=[];let s=n.start?"^":"";const o=[];for(const d of t){const m=d.length?[]:[90];n.strict&&!d.length&&(s+="/");for(let _=0;_<d.length;_++){const b=d[_];let R=40+(n.sensitive?.25:0);if(b.type===0)_||(s+="/"),s+=b.value.replace(Og,"\\$&"),R+=40;else if(b.type===1){const{value:D,repeatable:M,optional:G,regexp:q}=b;o.push({name:D,repeatable:M,optional:G});const K=q||Nl;if(K!==Nl){R+=10;try{new RegExp(`(${K})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${D}" (${K}): `+V.message)}}let W=M?`((?:${K})(?:/(?:${K}))*)`:`(${K})`;_||(W=G&&d.length<2?`(?:/${W})`:"/"+W),G&&(W+="?"),s+=W,R+=20,G&&(R+=-8),M&&(R+=-20),K===".*"&&(R+=-50)}m.push(R)}r.push(m)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function u(d){const m=d.match(a),_={};if(!m)return null;for(let b=1;b<m.length;b++){const R=m[b]||"",D=o[b-1];_[D.name]=R&&D.repeatable?R.split("/"):R}return _}function h(d){let m="",_=!1;for(const b of t){(!_||!m.endsWith("/"))&&(m+="/"),_=!1;for(const R of b)if(R.type===0)m+=R.value;else if(R.type===1){const{value:D,repeatable:M,optional:G}=R,q=D in d?d[D]:"";if(dt(q)&&!M)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const K=dt(q)?q.join("/"):q;if(!K)if(G)b.length<2&&(m.endsWith("/")?m=m.slice(0,-1):_=!0);else throw new Error(`Missing required param "${D}"`);m+=K}}return m||"/"}return{re:a,score:r,keys:o,parse:u,stringify:h}}function Dg(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Vu(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const o=Dg(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(xl(r))return 1;if(xl(s))return-1}return s.length-r.length}function xl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ng={type:0,value:""},xg=/[a-zA-Z0-9_]/;function Lg(t){if(!t)return[[]];if(t==="/")return[[Ng]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(R){throw new Error(`ERR (${n})/"${d}": ${R}`)}let n=0,r=n;const s=[];let o;function a(){o&&s.push(o),o=[]}let u=0,h,d="",m="";function _(){d&&(n===0?o.push({type:0,value:d}):n===1||n===2||n===3?(o.length>1&&(h==="*"||h==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:d,regexp:m,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):e("Invalid state to consume buffer"),d="")}function b(){d+=h}for(;u<t.length;){if(h=t[u++],h==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:h==="/"?(d&&_(),a()):h===":"?(_(),n=1):b();break;case 4:b(),n=r;break;case 1:h==="("?n=2:xg.test(h)?b():(_(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&u--);break;case 2:h===")"?m[m.length-1]=="\\"?m=m.slice(0,-1)+h:n=3:m+=h;break;case 3:_(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&u--,m="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${d}"`),_(),a(),s}function Mg(t,e,n){const r=kg(Lg(t.path),n),s=ge(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ug(t,e){const n=[],r=new Map;e=Fl({strict:!1,end:!0,sensitive:!1},e);function s(_){return r.get(_)}function o(_,b,R){const D=!R,M=Ml(_);M.aliasOf=R&&R.record;const G=Fl(e,_),q=[M];if("alias"in _){const V=typeof _.alias=="string"?[_.alias]:_.alias;for(const te of V)q.push(Ml(ge({},M,{components:R?R.record.components:M.components,path:te,aliasOf:R?R.record:M})))}let K,W;for(const V of q){const{path:te}=V;if(b&&te[0]!=="/"){const le=b.record.path,I=le[le.length-1]==="/"?"":"/";V.path=b.record.path+(te&&I+te)}if(K=Mg(V,b,G),R?R.alias.push(K):(W=W||K,W!==K&&W.alias.push(K),D&&_.name&&!Ul(K)&&a(_.name)),$u(K)&&h(K),M.children){const le=M.children;for(let I=0;I<le.length;I++)o(le[I],K,R&&R.children[I])}R=R||K}return W?()=>{a(W)}:Sr}function a(_){if(Hu(_)){const b=r.get(_);b&&(r.delete(_),n.splice(n.indexOf(b),1),b.children.forEach(a),b.alias.forEach(a))}else{const b=n.indexOf(_);b>-1&&(n.splice(b,1),_.record.name&&r.delete(_.record.name),_.children.forEach(a),_.alias.forEach(a))}}function u(){return n}function h(_){const b=Hg(_,n);n.splice(b,0,_),_.record.name&&!Ul(_)&&r.set(_.record.name,_)}function d(_,b){let R,D={},M,G;if("name"in _&&_.name){if(R=r.get(_.name),!R)throw Jn(1,{location:_});G=R.record.name,D=ge(Ll(b.params,R.keys.filter(W=>!W.optional).concat(R.parent?R.parent.keys.filter(W=>W.optional):[]).map(W=>W.name)),_.params&&Ll(_.params,R.keys.map(W=>W.name))),M=R.stringify(D)}else if(_.path!=null)M=_.path,R=n.find(W=>W.re.test(M)),R&&(D=R.parse(M),G=R.record.name);else{if(R=b.name?r.get(b.name):n.find(W=>W.re.test(b.path)),!R)throw Jn(1,{location:_,currentLocation:b});G=R.record.name,D=ge({},b.params,_.params),M=R.stringify(D)}const q=[];let K=R;for(;K;)q.unshift(K.record),K=K.parent;return{name:G,path:M,params:D,matched:q,meta:jg(q)}}t.forEach(_=>o(_));function m(){n.length=0,r.clear()}return{addRoute:o,resolve:d,removeRoute:a,clearRoutes:m,getRoutes:u,getRecordMatcher:s}}function Ll(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ml(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Fg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Fg(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ul(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jg(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Fl(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Hg(t,e){let n=0,r=e.length;for(;n!==r;){const o=n+r>>1;Vu(t,e[o])<0?r=o:n=o+1}const s=Bg(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Bg(t){let e=t;for(;e=e.parent;)if($u(e)&&Vu(t,e)===0)return e}function $u({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Vg(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(xu," "),a=o.indexOf("="),u=Mr(a<0?o:o.slice(0,a)),h=a<0?null:Mr(o.slice(a+1));if(u in e){let d=e[u];dt(d)||(d=e[u]=[d]),d.push(h)}else e[u]=h}return e}function jl(t){let e="";for(let n in t){const r=t[n];if(n=lg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(dt(r)?r.map(o=>o&&to(o)):[r&&to(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function $g(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=dt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Kg=Symbol(""),Hl=Symbol(""),Zi=Symbol(""),Ku=Symbol(""),ro=Symbol("");function mr(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Yt(t,e,n,r,s,o=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((u,h)=>{const d=b=>{b===!1?h(Jn(4,{from:n,to:e})):b instanceof Error?h(b):Rg(b)?h(Jn(2,{from:e,to:b})):(a&&r.enterCallbacks[s]===a&&typeof b=="function"&&a.push(b),u())},m=o(()=>t.call(r&&r.instances[s],e,n,d));let _=Promise.resolve(m);t.length<3&&(_=_.then(d)),_.catch(b=>h(b))})}function Ns(t,e,n,r,s=o=>o()){const o=[];for(const a of t)for(const u in a.components){let h=a.components[u];if(!(e!=="beforeRouteEnter"&&!a.instances[u]))if(Du(h)){const m=(h.__vccOpts||h)[e];m&&o.push(Yt(m,n,r,a,u,s))}else{let d=h();o.push(()=>d.then(m=>{if(!m)throw new Error(`Couldn't resolve component "${u}" at "${a.path}"`);const _=Yp(m)?m.default:m;a.mods[u]=m,a.components[u]=_;const R=(_.__vccOpts||_)[e];return R&&Yt(R,n,r,a,u,s)()}))}}return o}function Bl(t){const e=ht(Zi),n=ht(Ku),r=ot(()=>{const h=Bn(t.to);return e.resolve(h)}),s=ot(()=>{const{matched:h}=r.value,{length:d}=h,m=h[d-1],_=n.matched;if(!m||!_.length)return-1;const b=_.findIndex(qn.bind(null,m));if(b>-1)return b;const R=Vl(h[d-2]);return d>1&&Vl(m)===R&&_[_.length-1].path!==R?_.findIndex(qn.bind(null,h[d-2])):b}),o=ot(()=>s.value>-1&&qg(n.params,r.value.params)),a=ot(()=>s.value>-1&&s.value===n.matched.length-1&&Fu(n.params,r.value.params));function u(h={}){return Gg(h)?e[Bn(t.replace)?"replace":"push"](Bn(t.to)).catch(Sr):Promise.resolve()}return{route:r,href:ot(()=>r.value.href),isActive:o,isExactActive:a,navigate:u}}const Wg=iu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bl,setup(t,{slots:e}){const n=Hr(Bl(t)),{options:r}=ht(Zi),s=ot(()=>({[$l(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$l(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:Ou("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),zg=Wg;function Gg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qg(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!dt(s)||s.length!==r.length||r.some((o,a)=>o!==s[a]))return!1}return!0}function Vl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $l=(t,e,n)=>t??e??n,Jg=iu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ht(ro),s=ot(()=>t.route||r.value),o=ht(Hl,0),a=ot(()=>{let d=Bn(o);const{matched:m}=s.value;let _;for(;(_=m[d])&&!_.components;)d++;return d}),u=ot(()=>s.value.matched[a.value]);_i(Hl,ot(()=>a.value+1)),_i(Kg,u),_i(ro,s);const h=kr();return br(()=>[h.value,u.value,t.name],([d,m,_],[b,R,D])=>{m&&(m.instances[_]=d,R&&R!==m&&d&&d===b&&(m.leaveGuards.size||(m.leaveGuards=R.leaveGuards),m.updateGuards.size||(m.updateGuards=R.updateGuards))),d&&m&&(!R||!qn(m,R)||!b)&&(m.enterCallbacks[_]||[]).forEach(M=>M(d))},{flush:"post"}),()=>{const d=s.value,m=t.name,_=u.value,b=_&&_.components[m];if(!b)return Kl(n.default,{Component:b,route:d});const R=_.props[m],D=R?R===!0?d.params:typeof R=="function"?R(d):R:null,G=Ou(b,ge({},D,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(_.instances[m]=null)},ref:h}));return Kl(n.default,{Component:G,route:d})||G}}});function Kl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Xg=Jg;function Yg(t){const e=Ug(t.routes,t),n=t.parseQuery||Vg,r=t.stringifyQuery||jl,s=t.history,o=mr(),a=mr(),u=mr(),h=ed(zt);let d=zt;Fn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const m=ks.bind(null,k=>""+k),_=ks.bind(null,ug),b=ks.bind(null,Mr);function R(k,z){let B,J;return Hu(k)?(B=e.getRecordMatcher(k),J=z):J=k,e.addRoute(J,B)}function D(k){const z=e.getRecordMatcher(k);z&&e.removeRoute(z)}function M(){return e.getRoutes().map(k=>k.record)}function G(k){return!!e.getRecordMatcher(k)}function q(k,z){if(z=ge({},z||h.value),typeof k=="string"){const y=Ds(n,k,z.path),C=e.resolve({path:y.path},z),N=s.createHref(y.fullPath);return ge(y,C,{params:b(C.params),hash:Mr(y.hash),redirectedFrom:void 0,href:N})}let B;if(k.path!=null)B=ge({},k,{path:Ds(n,k.path,z.path).path});else{const y=ge({},k.params);for(const C in y)y[C]==null&&delete y[C];B=ge({},k,{params:_(y)}),z.params=_(z.params)}const J=e.resolve(B,z),oe=k.hash||"";J.params=m(b(J.params));const me=dg(r,ge({},k,{hash:ag(oe),path:J.path})),g=s.createHref(me);return ge({fullPath:me,hash:oe,query:r===jl?$g(k.query):k.query||{}},J,{redirectedFrom:void 0,href:g})}function K(k){return typeof k=="string"?Ds(n,k,h.value.path):ge({},k)}function W(k,z){if(d!==k)return Jn(8,{from:z,to:k})}function V(k){return I(k)}function te(k){return V(ge(K(k),{replace:!0}))}function le(k){const z=k.matched[k.matched.length-1];if(z&&z.redirect){const{redirect:B}=z;let J=typeof B=="function"?B(k):B;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=K(J):{path:J},J.params={}),ge({query:k.query,hash:k.hash,params:J.path!=null?{}:k.params},J)}}function I(k,z){const B=d=q(k),J=h.value,oe=k.state,me=k.force,g=k.replace===!0,y=le(B);if(y)return I(ge(K(y),{state:typeof y=="object"?ge({},oe,y.state):oe,force:me,replace:g}),z||B);const C=B;C.redirectedFrom=z;let N;return!me&&pg(r,J,B)&&(N=Jn(16,{to:C,from:J}),rt(J,J,!0,!1)),(N?Promise.resolve(N):w(C,J)).catch(O=>At(O)?At(O,2)?O:at(O):se(O,C,J)).then(O=>{if(O){if(At(O,2))return I(ge({replace:g},K(O.to),{state:typeof O.to=="object"?ge({},oe,O.to.state):oe,force:me}),z||C)}else O=S(C,J,!0,g,oe);return T(C,J,O),O})}function p(k,z){const B=W(k,z);return B?Promise.reject(B):Promise.resolve()}function v(k){const z=Ht.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(k):k()}function w(k,z){let B;const[J,oe,me]=Qg(k,z);B=Ns(J.reverse(),"beforeRouteLeave",k,z);for(const y of J)y.leaveGuards.forEach(C=>{B.push(Yt(C,k,z))});const g=p.bind(null,k,z);return B.push(g),Ye(B).then(()=>{B=[];for(const y of o.list())B.push(Yt(y,k,z));return B.push(g),Ye(B)}).then(()=>{B=Ns(oe,"beforeRouteUpdate",k,z);for(const y of oe)y.updateGuards.forEach(C=>{B.push(Yt(C,k,z))});return B.push(g),Ye(B)}).then(()=>{B=[];for(const y of me)if(y.beforeEnter)if(dt(y.beforeEnter))for(const C of y.beforeEnter)B.push(Yt(C,k,z));else B.push(Yt(y.beforeEnter,k,z));return B.push(g),Ye(B)}).then(()=>(k.matched.forEach(y=>y.enterCallbacks={}),B=Ns(me,"beforeRouteEnter",k,z,v),B.push(g),Ye(B))).then(()=>{B=[];for(const y of a.list())B.push(Yt(y,k,z));return B.push(g),Ye(B)}).catch(y=>At(y,8)?y:Promise.reject(y))}function T(k,z,B){u.list().forEach(J=>v(()=>J(k,z,B)))}function S(k,z,B,J,oe){const me=W(k,z);if(me)return me;const g=z===zt,y=Fn?history.state:{};B&&(J||g?s.replace(k.fullPath,ge({scroll:g&&y&&y.scroll},oe)):s.push(k.fullPath,oe)),h.value=k,rt(k,z,B,g),at()}let E;function Pe(){E||(E=s.listen((k,z,B)=>{if(!pt.listening)return;const J=q(k),oe=le(J);if(oe){I(ge(oe,{replace:!0}),J).catch(Sr);return}d=J;const me=h.value;Fn&&Ig(Ol(me.fullPath,B.delta),Qi()),w(J,me).catch(g=>At(g,12)?g:At(g,2)?(I(g.to,J).then(y=>{At(y,20)&&!B.delta&&B.type===Ur.pop&&s.go(-1,!1)}).catch(Sr),Promise.reject()):(B.delta&&s.go(-B.delta,!1),se(g,J,me))).then(g=>{g=g||S(J,me,!1),g&&(B.delta&&!At(g,8)?s.go(-B.delta,!1):B.type===Ur.pop&&At(g,20)&&s.go(-1,!1)),T(J,me,g)}).catch(Sr)}))}let Xe=mr(),Ee=mr(),ee;function se(k,z,B){at(k);const J=Ee.list();return J.length?J.forEach(oe=>oe(k,z,B)):console.error(k),Promise.reject(k)}function Ze(){return ee&&h.value!==zt?Promise.resolve():new Promise((k,z)=>{Xe.add([k,z])})}function at(k){return ee||(ee=!k,Pe(),Xe.list().forEach(([z,B])=>k?B(k):z()),Xe.reset()),k}function rt(k,z,B,J){const{scrollBehavior:oe}=t;if(!Fn||!oe)return Promise.resolve();const me=!B&&bg(Ol(k.fullPath,0))||(J||!B)&&history.state&&history.state.scroll||null;return xo().then(()=>oe(k,z,me)).then(g=>g&&wg(g)).catch(g=>se(g,k,z))}const Ie=k=>s.go(k);let be;const Ht=new Set,pt={currentRoute:h,listening:!0,addRoute:R,removeRoute:D,clearRoutes:e.clearRoutes,hasRoute:G,getRoutes:M,resolve:q,options:t,push:V,replace:te,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:o.add,beforeResolve:a.add,afterEach:u.add,onError:Ee.add,isReady:Ze,install(k){const z=this;k.component("RouterLink",zg),k.component("RouterView",Xg),k.config.globalProperties.$router=z,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Bn(h)}),Fn&&!be&&h.value===zt&&(be=!0,V(s.location).catch(oe=>{}));const B={};for(const oe in zt)Object.defineProperty(B,oe,{get:()=>h.value[oe],enumerable:!0});k.provide(Zi,z),k.provide(Ku,Jc(B)),k.provide(ro,h);const J=k.unmount;Ht.add(k),k.unmount=function(){Ht.delete(k),Ht.size<1&&(d=zt,E&&E(),E=null,h.value=zt,be=!1,ee=!1),J()}}};function Ye(k){return k.reduce((z,B)=>z.then(()=>v(B)),Promise.resolve())}return pt}function Qg(t,e){const n=[],r=[],s=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const u=e.matched[a];u&&(t.matched.find(d=>qn(d,u))?r.push(u):n.push(u));const h=t.matched[a];h&&(e.matched.find(d=>qn(d,h))||s.push(h))}return[n,r,s]}function Zg(){return ht(Zi)}const em={};function tm(t,e){return qi(),Ji("div",null,e[0]||(e[0]=[_t("h1",null,"Home ",-1)]))}const nm=Ho(em,[["render",tm]]),rm={};function im(t,e){return qi(),Ji("div",null,e[0]||(e[0]=[_t("h1",null,"Login",-1)]))}const sm=Ho(rm,[["render",im]]);var om=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Wu;const es=t=>Wu=t,zu=Symbol();function io(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Cr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Cr||(Cr={}));function am(){const t=xc(!0),e=t.run(()=>kr({}));let n=[],r=[];const s=ko({install(o){es(s),s._a=o,o.provide(zu,s),o.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(o){return!this._a&&!om?r.push(o):n.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Gu=()=>{};function Wl(t,e,n,r=Gu){t.push(e);const s=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),r())};return!n&&Lc()&&Df(s),s}function xn(t,...e){t.slice().forEach(n=>{n(...e)})}const lm=t=>t(),zl=Symbol(),xs=Symbol();function so(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];io(s)&&io(r)&&t.hasOwnProperty(n)&&!Se(r)&&!_n(r)?t[n]=so(s,r):t[n]=r}return t}const cm=Symbol();function um(t){return!io(t)||!t.hasOwnProperty(cm)}const{assign:qt}=Object;function hm(t){return!!(Se(t)&&t.effect)}function fm(t,e,n,r){const{state:s,actions:o,getters:a}=e,u=n.state.value[t];let h;function d(){u||(n.state.value[t]=s?s():{});const m=rd(n.state.value[t]);return qt(m,o,Object.keys(a||{}).reduce((_,b)=>(_[b]=ko(ot(()=>{es(n);const R=n._s.get(t);return a[b].call(R,R)})),_),{}))}return h=qu(t,d,e,n,r,!0),h}function qu(t,e,n={},r,s,o){let a;const u=qt({actions:{}},n),h={deep:!0};let d,m,_=[],b=[],R;const D=r.state.value[t];!o&&!D&&(r.state.value[t]={}),kr({});let M;function G(p){let v;d=m=!1,typeof p=="function"?(p(r.state.value[t]),v={type:Cr.patchFunction,storeId:t,events:R}):(so(r.state.value[t],p),v={type:Cr.patchObject,payload:p,storeId:t,events:R});const w=M=Symbol();xo().then(()=>{M===w&&(d=!0)}),m=!0,xn(_,v,r.state.value[t])}const q=o?function(){const{state:v}=n,w=v?v():{};this.$patch(T=>{qt(T,w)})}:Gu;function K(){a.stop(),_=[],b=[],r._s.delete(t)}const W=(p,v="")=>{if(zl in p)return p[xs]=v,p;const w=function(){es(r);const T=Array.from(arguments),S=[],E=[];function Pe(ee){S.push(ee)}function Xe(ee){E.push(ee)}xn(b,{args:T,name:w[xs],store:te,after:Pe,onError:Xe});let Ee;try{Ee=p.apply(this&&this.$id===t?this:te,T)}catch(ee){throw xn(E,ee),ee}return Ee instanceof Promise?Ee.then(ee=>(xn(S,ee),ee)).catch(ee=>(xn(E,ee),Promise.reject(ee))):(xn(S,Ee),Ee)};return w[zl]=!0,w[xs]=v,w},V={_p:r,$id:t,$onAction:Wl.bind(null,b),$patch:G,$reset:q,$subscribe(p,v={}){const w=Wl(_,p,v.detached,()=>T()),T=a.run(()=>br(()=>r.state.value[t],S=>{(v.flush==="sync"?m:d)&&p({storeId:t,type:Cr.direct,events:R},S)},qt({},h,v)));return w},$dispose:K},te=Hr(V);r._s.set(t,te);const I=(r._a&&r._a.runWithContext||lm)(()=>r._e.run(()=>(a=xc()).run(()=>e({action:W}))));for(const p in I){const v=I[p];if(Se(v)&&!hm(v)||_n(v))o||(D&&um(v)&&(Se(v)?v.value=D[p]:so(v,D[p])),r.state.value[t][p]=v);else if(typeof v=="function"){const w=W(v,p);I[p]=w,u.actions[p]=v}}return qt(te,I),qt(he(te),I),Object.defineProperty(te,"$state",{get:()=>r.state.value[t],set:p=>{G(v=>{qt(v,p)})}}),r._p.forEach(p=>{qt(te,a.run(()=>p({store:te,app:r._a,pinia:r,options:u})))}),D&&o&&n.hydrate&&n.hydrate(te.$state,D),d=!0,m=!0,te}function dm(t,e,n){let r,s;const o=typeof e=="function";r=t,s=o?n:e;function a(u,h){const d=Ud();return u=u||(d?ht(zu,null):null),u&&es(u),u=Wu,u._s.has(r)||(o?qu(r,e,s,u):fm(r,s,u)),u._s.get(r)}return a.$id=r,a}var Gl={};/**
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
 */const Ju=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pm=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],u=t[n++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Xu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,u=a?t[s+1]:0,h=s+2<t.length,d=h?t[s+2]:0,m=o>>2,_=(o&3)<<4|u>>4;let b=(u&15)<<2|d>>6,R=d&63;h||(R=64,a||(b=64)),r.push(n[m],n[_],n[b],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ju(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],u=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const _=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||u==null||d==null||_==null)throw new gm;const b=o<<2|u>>4;if(r.push(b),d!==64){const R=u<<4&240|d>>2;if(r.push(R),_!==64){const D=d<<6&192|_;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mm=function(t){const e=Ju(t);return Xu.encodeByteArray(e,!0)},Oi=function(t){return mm(t).replace(/\./g,"")},Yu=function(t){try{return Xu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _m=()=>vm().__FIREBASE_DEFAULTS__,ym=()=>{if(typeof process>"u"||typeof Gl>"u")return;const t=Gl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Em=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yu(t[1]);return e&&JSON.parse(e)},Vo=()=>{try{return _m()||ym()||Em()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qu=t=>{var e,n;return(n=(e=Vo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wm=t=>{const e=Qu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zu=()=>{var t;return(t=Vo())===null||t===void 0?void 0:t.config},eh=t=>{var e;return(e=Vo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Im{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function bm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Oi(JSON.stringify(n)),Oi(JSON.stringify(a)),""].join(".")}/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function Sm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Am(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cm(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rm(){try{return typeof indexedDB=="object"}catch{return!1}}function Pm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const Om="FirebaseError";class jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Om,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$r.prototype.create)}}class $r{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?km(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new jt(s,u,r)}}function km(t,e){return t.replace(Dm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Dm=/\{\$([^}]+)}/g;function Nm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ki(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],a=e[s];if(ql(o)&&ql(a)){if(!ki(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ql(t){return t!==null&&typeof t=="object"}/**
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
 */function Kr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xm(t,e){const n=new Lm(t,e);return n.subscribe.bind(n)}class Lm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Mm(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ls),s.error===void 0&&(s.error=Ls),s.complete===void 0&&(s.complete=Ls);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ls(){}/**
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
 */function Zn(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mn="[DEFAULT]";/**
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
 */class Um{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Im;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jm(e))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mn){return this.instances.has(e)}getOptions(e=mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mn){return this.component?this.component.multipleInstances?e:mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fm(t){return t===mn?void 0:t}function jm(t){return t.instantiationMode==="EAGER"}/**
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
 */class Hm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Um(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const Bm={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Vm=pe.INFO,$m={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},Km=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=$m[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $o{constructor(e){this.name=e,this._logLevel=Vm,this._logHandler=Km,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const Wm=(t,e)=>e.some(n=>t instanceof n);let Jl,Xl;function zm(){return Jl||(Jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gm(){return Xl||(Xl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const th=new WeakMap,oo=new WeakMap,nh=new WeakMap,Ms=new WeakMap,Ko=new WeakMap;function qm(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(nn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&th.set(n,t)}).catch(()=>{}),Ko.set(e,t),e}function Jm(t){if(oo.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});oo.set(t,e)}let ao={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xm(t){ao=t(ao)}function Ym(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Us(this),e,...n);return nh.set(r,e.sort?e.sort():[e]),nn(r)}:Gm().includes(t)?function(...e){return t.apply(Us(this),e),nn(th.get(this))}:function(...e){return nn(t.apply(Us(this),e))}}function Qm(t){return typeof t=="function"?Ym(t):(t instanceof IDBTransaction&&Jm(t),Wm(t,zm())?new Proxy(t,ao):t)}function nn(t){if(t instanceof IDBRequest)return qm(t);if(Ms.has(t))return Ms.get(t);const e=Qm(t);return e!==t&&(Ms.set(t,e),Ko.set(e,t)),e}const Us=t=>Ko.get(t);function Zm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),u=nn(a);return r&&a.addEventListener("upgradeneeded",h=>{r(nn(a.result),h.oldVersion,h.newVersion,nn(a.transaction),h)}),n&&a.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const ev=["get","getKey","getAll","getAllKeys","count"],tv=["put","add","delete","clear"],Fs=new Map;function Yl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fs.get(e))return Fs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=tv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ev.includes(n)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[n](...u),s&&h.done]))[0]};return Fs.set(e,o),o}Xm(t=>({...t,get:(e,n,r)=>Yl(e,n)||t.get(e,n,r),has:(e,n)=>!!Yl(e,n)||t.has(e,n)}));/**
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
 */class nv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lo="@firebase/app",Ql="0.10.10";/**
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
 */const Lt=new $o("@firebase/app"),iv="@firebase/app-compat",sv="@firebase/analytics-compat",ov="@firebase/analytics",av="@firebase/app-check-compat",lv="@firebase/app-check",cv="@firebase/auth",uv="@firebase/auth-compat",hv="@firebase/database",fv="@firebase/database-compat",dv="@firebase/functions",pv="@firebase/functions-compat",gv="@firebase/installations",mv="@firebase/installations-compat",vv="@firebase/messaging",_v="@firebase/messaging-compat",yv="@firebase/performance",Ev="@firebase/performance-compat",wv="@firebase/remote-config",Iv="@firebase/remote-config-compat",bv="@firebase/storage",Tv="@firebase/storage-compat",Sv="@firebase/firestore",Av="@firebase/vertexai-preview",Cv="@firebase/firestore-compat",Rv="firebase",Pv="10.13.1";/**
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
 */const co="[DEFAULT]",Ov={[lo]:"fire-core",[iv]:"fire-core-compat",[ov]:"fire-analytics",[sv]:"fire-analytics-compat",[lv]:"fire-app-check",[av]:"fire-app-check-compat",[cv]:"fire-auth",[uv]:"fire-auth-compat",[hv]:"fire-rtdb",[fv]:"fire-rtdb-compat",[dv]:"fire-fn",[pv]:"fire-fn-compat",[gv]:"fire-iid",[mv]:"fire-iid-compat",[vv]:"fire-fcm",[_v]:"fire-fcm-compat",[yv]:"fire-perf",[Ev]:"fire-perf-compat",[wv]:"fire-rc",[Iv]:"fire-rc-compat",[bv]:"fire-gcs",[Tv]:"fire-gcs-compat",[Sv]:"fire-fst",[Cv]:"fire-fst-compat",[Av]:"fire-vertex","fire-js":"fire-js",[Rv]:"fire-js-all"};/**
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
 */const Di=new Map,kv=new Map,uo=new Map;function Zl(t,e){try{t.container.addComponent(e)}catch(n){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(uo.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;uo.set(e,t);for(const n of Di.values())Zl(n,t);for(const n of kv.values())Zl(n,t);return!0}function Wo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t.settings!==void 0}/**
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
 */const Dv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rn=new $r("app","Firebase",Dv);/**
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
 */class Nv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
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
 */const er=Pv;function rh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:co,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw rn.create("bad-app-name",{appName:String(s)});if(n||(n=Zu()),!n)throw rn.create("no-options");const o=Di.get(s);if(o){if(ki(n,o.options)&&ki(r,o.config))return o;throw rn.create("duplicate-app",{appName:s})}const a=new Hm(s);for(const h of uo.values())a.addComponent(h);const u=new Nv(n,r,a);return Di.set(s,u),u}function ih(t=co){const e=Di.get(t);if(!e&&t===co&&Zu())return rh();if(!e)throw rn.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let s=(r=Ov[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${e}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(u.join(" "));return}Xn(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const xv="firebase-heartbeat-database",Lv=1,Fr="firebase-heartbeat-store";let js=null;function sh(){return js||(js=Zm(xv,Lv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fr)}catch(n){console.warn(n)}}}}).catch(t=>{throw rn.create("idb-open",{originalErrorMessage:t.message})})),js}async function Mv(t){try{const n=(await sh()).transaction(Fr),r=await n.objectStore(Fr).get(oh(t));return await n.done,r}catch(e){if(e instanceof jt)Lt.warn(e.message);else{const n=rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(n.message)}}}async function ec(t,e){try{const r=(await sh()).transaction(Fr,"readwrite");await r.objectStore(Fr).put(e,oh(t)),await r.done}catch(n){if(n instanceof jt)Lt.warn(n.message);else{const r=rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lt.warn(r.message)}}}function oh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Uv=1024,Fv=30*24*60*60*1e3;class jv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=tc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Fv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Lt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tc(),{heartbeatsToSend:r,unsentEntries:s}=Hv(this._heartbeatsCache.heartbeats),o=Oi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Lt.warn(n),""}}}function tc(){return new Date().toISOString().substring(0,10)}function Hv(t,e=Uv){const n=[];let r=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),nc(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),nc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rm()?Pm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Mv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nc(t){return Oi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Vv(t){Xn(new wn("platform-logger",e=>new nv(e),"PRIVATE")),Xn(new wn("heartbeat",e=>new jv(e),"PRIVATE")),sn(lo,Ql,t),sn(lo,Ql,"esm2017"),sn("fire-js","")}Vv("");function zo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ah(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $v=ah,lh=new $r("auth","Firebase",ah());/**
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
 */const Ni=new $o("@firebase/auth");function Kv(t,...e){Ni.logLevel<=pe.WARN&&Ni.warn(`Auth (${er}): ${t}`,...e)}function wi(t,...e){Ni.logLevel<=pe.ERROR&&Ni.error(`Auth (${er}): ${t}`,...e)}/**
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
 */function Mt(t,...e){throw Go(t,...e)}function Et(t,...e){return Go(t,...e)}function ch(t,e,n){const r=Object.assign(Object.assign({},$v()),{[e]:n});return new $r("auth","Firebase",r).create(e,{appName:t.name})}function on(t){return ch(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Go(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return lh.create(t,...e)}function ne(t,e,...n){if(!t)throw Go(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wi(e),new Error(e)}function Ut(t,e){t||kt(e)}/**
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
 */function ho(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wv(){return rc()==="http:"||rc()==="https:"}function rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function zv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wv()||Sm()||"connection"in navigator)?navigator.onLine:!0}function Gv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=Tm()||Am()}get(){return zv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qo(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uh{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Jv=new Wr(3e4,6e4);function zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sn(t,e,n,r,s={}){return hh(t,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=Kr(Object.assign({key:t.config.apiKey},a)).slice(1),h=await t._getAdditionalHeaders();return h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode),uh.fetch()(dh(t,t.config.apiHost,n,u),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},o))})}async function hh(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qv),e);try{const s=new Yv(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw pi(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw pi(t,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw pi(t,"email-already-in-use",a);if(h==="USER_DISABLED")throw pi(t,"user-disabled",a);const m=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ch(t,m,d);Mt(t,m)}}catch(s){if(s instanceof jt)throw s;Mt(t,"network-request-failed",{message:String(s)})}}async function fh(t,e,n,r,s={}){const o=await Sn(t,e,n,r,s);return"mfaPendingCredential"in o&&Mt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function dh(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?qo(t.config,s):`${t.config.apiScheme}://${s}`}function Xv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Yv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),Jv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Et(t,e,r);return s.customData._tokenResponse=n,s}function ic(t){return t!==void 0&&t.enterprise!==void 0}class Qv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Xv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Zv(t,e){return Sn(t,"GET","/v2/recaptchaConfig",zr(t,e))}/**
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
 */async function e_(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function ph(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Rr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function t_(t,e=!1){const n=Zn(t),r=await n.getIdToken(e),s=Jo(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:Rr(Hs(s.auth_time)),issuedAtTime:Rr(Hs(s.iat)),expirationTime:Rr(Hs(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Hs(t){return Number(t)*1e3}function Jo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yu(n);return s?JSON.parse(s):(wi("Failed to decode base64 JWT payload"),null)}catch(s){return wi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sc(t){const e=Jo(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function jr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jt&&n_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function n_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class r_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rr(this.lastLoginAt),this.creationTime=Rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xi(t){var e;const n=t.auth,r=await t.getIdToken(),s=await jr(t,ph(n,{idToken:r}));ne(s==null?void 0:s.users.length,n,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?gh(o.providerUserInfo):[],u=s_(t.providerData,a),h=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(u!=null&&u.length),m=h?d:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new fo(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(t,_)}async function i_(t){const e=Zn(t);await xi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function s_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function gh(t){return t.map(e=>{var{providerId:n}=e,r=zo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function o_(t,e){const n=await hh(t,{},async()=>{const r=Kr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=dh(t,s,"/v1/token",`key=${o}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",uh.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function a_(t,e){return Sn(t,"POST","/v2/accounts:revokeToken",zr(t,e))}/**
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
 */class $n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=sc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:o}=await o_(e,n);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:o}=n,a=new $n;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(ne(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $n,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
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
 */function Gt(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,o=zo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new r_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new fo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await jr(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return t_(this,e)}reload(){return i_(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(on(this.auth));const e=await this.getIdToken();return await jr(this,e_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,o,a,u,h,d,m;const _=(r=n.displayName)!==null&&r!==void 0?r:void 0,b=(s=n.email)!==null&&s!==void 0?s:void 0,R=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,D=(a=n.photoURL)!==null&&a!==void 0?a:void 0,M=(u=n.tenantId)!==null&&u!==void 0?u:void 0,G=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,q=(d=n.createdAt)!==null&&d!==void 0?d:void 0,K=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:W,emailVerified:V,isAnonymous:te,providerData:le,stsTokenManager:I}=n;ne(W&&I,e,"internal-error");const p=$n.fromJSON(this.name,I);ne(typeof W=="string",e,"internal-error"),Gt(_,e.name),Gt(b,e.name),ne(typeof V=="boolean",e,"internal-error"),ne(typeof te=="boolean",e,"internal-error"),Gt(R,e.name),Gt(D,e.name),Gt(M,e.name),Gt(G,e.name),Gt(q,e.name),Gt(K,e.name);const v=new Dt({uid:W,auth:e,email:b,emailVerified:V,displayName:_,isAnonymous:te,photoURL:D,phoneNumber:R,tenantId:M,stsTokenManager:p,createdAt:q,lastLoginAt:K});return le&&Array.isArray(le)&&(v.providerData=le.map(w=>Object.assign({},w))),G&&(v._redirectEventId=G),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new $n;s.updateFromServerResponse(n);const o=new Dt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xi(o),o}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ne(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?gh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),u=new $n;u.updateFromIdToken(r);const h=new Dt({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new fo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
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
 */const oc=new Map;function Nt(t){Ut(t instanceof Function,"Expected a class definition");let e=oc.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,oc.set(t,e),e)}/**
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
 */class mh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mh.type="NONE";const ac=mh;/**
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
 */function Ii(t,e,n){return`firebase:${t}:${e}:${n}`}class Kn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Ii(this.userKey,s.apiKey,o),this.fullPersistenceKey=Ii("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Kn(Nt(ac),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||Nt(ac);const a=Ii(r,e.config.apiKey,e.name);let u=null;for(const d of n)try{const m=await d._get(a);if(m){const _=Dt._fromJSON(e,m);d!==o&&(u=_),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Kn(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Kn(o,e,r))}}/**
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
 */function lc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Eh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ih(e))return"Blackberry";if(bh(e))return"Webos";if(_h(e))return"Safari";if((e.includes("chrome/")||yh(e))&&!e.includes("edge/"))return"Chrome";if(wh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vh(t=Je()){return/firefox\//i.test(t)}function _h(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yh(t=Je()){return/crios\//i.test(t)}function Eh(t=Je()){return/iemobile/i.test(t)}function wh(t=Je()){return/android/i.test(t)}function Ih(t=Je()){return/blackberry/i.test(t)}function bh(t=Je()){return/webos/i.test(t)}function Xo(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function l_(t=Je()){var e;return Xo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function c_(){return Cm()&&document.documentMode===10}function Th(t=Je()){return Xo(t)||wh(t)||bh(t)||Ih(t)||/windows phone/i.test(t)||Eh(t)}/**
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
 */function Sh(t,e=[]){let n;switch(t){case"Browser":n=lc(Je());break;case"Worker":n=`${lc(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${er}/${r}`}/**
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
 */class u_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function h_(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",zr(t,e))}/**
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
 */const f_=6;class d_{constructor(e){var n,r,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:f_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,o,a,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class p_{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cc(this),this.idTokenSubscription=new cc(this),this.beforeStateQueue=new u_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Kn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ph(this,{idToken:e}),r=await Dt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ot(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(on(this));const n=e?Zn(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(on(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(on(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await h_(this),n=new d_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $r("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await a_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Kn.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,r,s);return()=>{a=!0,h()}}else{const h=e.addObserver(n);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Kv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function tr(t){return Zn(t)}class cc{constructor(e){this.auth=e,this.observer=null,this.addObserver=xm(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ts={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g_(t){ts=t}function Ah(t){return ts.loadJS(t)}function m_(){return ts.recaptchaEnterpriseScript}function v_(){return ts.gapiScript}function __(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const y_="recaptcha-enterprise",E_="NO_RECAPTCHA";class w_{constructor(e){this.type=y_,this.auth=tr(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,u)=>{Zv(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new Qv(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{u(h)})})}function s(o,a,u){const h=window.grecaptcha;ic(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(E_)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(u=>{if(!n&&ic(window.grecaptcha))s(u,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=m_();h.length!==0&&(h+=u),Ah(h).then(()=>{s(u,o,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function uc(t,e,n,r=!1){const s=new w_(t);let o;try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function I_(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await uc(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await uc(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function b_(t,e){const n=Wo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(ki(o,e??{}))return s;Mt(s,"already-initialized")}return n.initialize({options:e})}function T_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function S_(t,e,n){const r=tr(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=Ch(e),{host:a,port:u}=A_(e),h=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),C_()}function Ch(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function A_(t){const e=Ch(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:hc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:hc(a)}}}function hc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function C_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Rh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}/**
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
 */async function Wn(t,e){return fh(t,"POST","/v1/accounts:signInWithIdp",zr(t,e))}/**
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
 */const R_="http://localhost";class In extends Rh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new In(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,o=zo(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new In(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Wn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wn(e,n)}buildRequest(){const e={requestUri:R_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Kr(n)}return e}}/**
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
 */class Ph{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gr extends Ph{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qt extends Gr{constructor(){super("facebook.com")}static credential(e){return In._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
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
 */class Zt extends Gr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return In._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
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
 */class en extends Gr{constructor(){super("github.com")}static credential(e){return In._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
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
 */class tn extends Gr{constructor(){super("twitter.com")}static credential(e,n){return In._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
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
 */async function P_(t,e){return fh(t,"POST","/v1/accounts:signUp",zr(t,e))}/**
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
 */class bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const o=await Dt._fromIdTokenResponse(e,r,s),a=fc(r);return new bn({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=fc(r);return new bn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function fc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Li extends jt{constructor(e,n,r,s){var o;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Li.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Li(e,n,r,s)}}function Oh(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Li._fromErrorAndOperation(t,o,e,r):o})}async function O_(t,e,n=!1){const r=await jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bn._forOperation(t,"link",r)}/**
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
 */async function k_(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(on(r));const s="reauthenticate";try{const o=await jr(t,Oh(r,s,e,t),n);ne(o.idToken,r,"internal-error");const a=Jo(o.idToken);ne(a,r,"internal-error");const{sub:u}=a;return ne(t.uid===u,r,"user-mismatch"),bn._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Mt(r,"user-mismatch"),o}}/**
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
 */async function D_(t,e,n=!1){if(Ot(t.app))return Promise.reject(on(t));const r="signIn",s=await Oh(t,r,e),o=await bn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(o.user),o}/**
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
 */async function N_(t){const e=tr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function x_(t,e,n){if(Ot(t.app))return Promise.reject(on(t));const r=tr(t),a=await I_(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",P_).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&N_(t),h}),u=await bn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function L_(t,e,n,r){return Zn(t).onIdTokenChanged(e,n,r)}function M_(t,e,n){return Zn(t).beforeAuthStateChanged(e,n)}const Mi="__sak";/**
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
 */class kh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mi,"1"),this.storage.removeItem(Mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const U_=1e3,F_=10;class Dh extends kh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Th(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);c_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,F_):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},U_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dh.type="LOCAL";const j_=Dh;/**
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
 */class Nh extends kh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nh.type="SESSION";const xh=Nh;/**
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
 */function H_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ns{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ns(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:o}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(a).map(async d=>d(n.origin,o)),h=await H_(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ns.receivers=[];/**
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
 */function Yo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class B_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const d=Yo("",20);s.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(_){const b=_;if(b.data.eventId===d)switch(b.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(b.data.response);break;default:clearTimeout(m),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function wt(){return window}function V_(t){wt().location.href=t}/**
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
 */function Lh(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function $_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function W_(){return Lh()?self:null}/**
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
 */const Mh="firebaseLocalStorageDb",z_=1,Ui="firebaseLocalStorage",Uh="fbase_key";class qr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rs(t,e){return t.transaction([Ui],e?"readwrite":"readonly").objectStore(Ui)}function G_(){const t=indexedDB.deleteDatabase(Mh);return new qr(t).toPromise()}function po(){const t=indexedDB.open(Mh,z_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ui,{keyPath:Uh})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ui)?e(r):(r.close(),await G_(),e(await po()))})})}async function dc(t,e,n){const r=rs(t,!0).put({[Uh]:e,value:n});return new qr(r).toPromise()}async function q_(t,e){const n=rs(t,!1).get(e),r=await new qr(n).toPromise();return r===void 0?null:r.value}function pc(t,e){const n=rs(t,!0).delete(e);return new qr(n).toPromise()}const J_=800,X_=3;class Fh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await po(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>X_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ns._getInstance(W_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $_(),!this.activeServiceWorker)return;this.sender=new B_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||K_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await po();return await dc(e,Mi,"1"),await pc(e,Mi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>q_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=rs(s,!1).getAll();return new qr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fh.type="LOCAL";const Y_=Fh;new Wr(3e4,6e4);/**
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
 */function Q_(t,e){return e?Nt(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qo extends Rh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Z_(t){return D_(t.auth,new Qo(t),t.bypassAuthState)}function ey(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),k_(n,new Qo(t),t.bypassAuthState)}async function ty(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),O_(n,new Qo(t),t.bypassAuthState)}/**
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
 */class jh{constructor(e,n,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Z_;case"linkViaPopup":case"linkViaRedirect":return ty;case"reauthViaPopup":case"reauthViaRedirect":return ey;default:Mt(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ny=new Wr(2e3,1e4);class jn extends jh{constructor(e,n,r,s,o){super(e,n,s,o),this.provider=r,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=Yo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ny.get())};e()}}jn.currentPopupAction=null;/**
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
 */const ry="pendingRedirect",bi=new Map;class iy extends jh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bi.get(this.auth._key());if(!e){try{const r=await sy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bi.set(this.auth._key(),e)}return this.bypassAuthState||bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sy(t,e){const n=ly(e),r=ay(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function oy(t,e){bi.set(t._key(),e)}function ay(t){return Nt(t._redirectPersistence)}function ly(t){return Ii(ry,t.config.apiKey,t.name)}async function cy(t,e,n=!1){if(Ot(t.app))return Promise.reject(on(t));const r=tr(t),s=Q_(r,e),a=await new iy(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const uy=10*60*1e3;class hy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fy(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uy&&this.cachedEventUids.clear(),this.cachedEventUids.has(gc(e))}saveEventToCache(e){this.cachedEventUids.add(gc(e)),this.lastProcessedEventTime=Date.now()}}function gc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fy(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hh(t);default:return!1}}/**
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
 */async function dy(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
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
 */const py=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gy=/^https?/;async function my(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dy(t);for(const n of e)try{if(vy(n))return}catch{}Mt(t,"unauthorized-domain")}function vy(t){const e=ho(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!gy.test(n))return!1;if(py.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const _y=new Wr(3e4,6e4);function mc(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yy(t){return new Promise((e,n)=>{var r,s,o;function a(){mc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mc(),n(Et(t,"network-request-failed"))},timeout:_y.get()})}if(!((s=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=wt().gapi)===null||o===void 0)&&o.load)a();else{const u=__("iframefcb");return wt()[u]=()=>{gapi.load?a():n(Et(t,"network-request-failed"))},Ah(`${v_()}?onload=${u}`).catch(h=>n(h))}}).catch(e=>{throw Ti=null,e})}let Ti=null;function Ey(t){return Ti=Ti||yy(t),Ti}/**
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
 */const wy=new Wr(5e3,15e3),Iy="__/auth/iframe",by="emulator/auth/iframe",Ty={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ay(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qo(e,by):`https://${t.config.authDomain}/${Iy}`,r={apiKey:e.apiKey,appName:t.name,v:er},s=Sy.get(t.config.apiHost);s&&(r.eid=s);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Kr(r).slice(1)}`}async function Cy(t){const e=await Ey(t),n=wt().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:Ay(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ty,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=Et(t,"network-request-failed"),u=wt().setTimeout(()=>{o(a)},wy.get());function h(){wt().clearTimeout(u),s(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
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
 */const Ry={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Py=500,Oy=600,ky="_blank",Dy="http://localhost";class vc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ny(t,e,n,r=Py,s=Oy){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},Ry),{width:r.toString(),height:s.toString(),top:o,left:a}),d=Je().toLowerCase();n&&(u=yh(d)?ky:n),vh(d)&&(e=e||Dy,h.scrollbars="yes");const m=Object.entries(h).reduce((b,[R,D])=>`${b}${R}=${D},`,"");if(l_(d)&&u!=="_self")return xy(e||"",u),new vc(null);const _=window.open(e||"",u,m);ne(_,t,"popup-blocked");try{_.focus()}catch{}return new vc(_)}function xy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ly="__/auth/handler",My="emulator/auth/handler",Uy=encodeURIComponent("fac");async function _c(t,e,n,r,s,o){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:er,eventId:s};if(e instanceof Ph){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Nm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,_]of Object.entries({}))a[m]=_}if(e instanceof Gr){const m=e.getScopes().filter(_=>_!=="");m.length>0&&(a.scopes=m.join(","))}t.tenantId&&(a.tid=t.tenantId);const u=a;for(const m of Object.keys(u))u[m]===void 0&&delete u[m];const h=await t._getAppCheckToken(),d=h?`#${Uy}=${encodeURIComponent(h)}`:"";return`${Fy(t)}?${Kr(u).slice(1)}${d}`}function Fy({config:t}){return t.emulator?qo(t,My):`https://${t.authDomain}/${Ly}`}/**
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
 */const Bs="webStorageSupport";class jy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xh,this._completeRedirectFn=cy,this._overrideRedirectResult=oy}async _openPopup(e,n,r,s){var o;Ut((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await _c(e,n,r,ho(),s);return Ny(e,a,Yo())}async _openRedirect(e,n,r,s){await this._originValidation(e);const o=await _c(e,n,r,ho(),s);return V_(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(Ut(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Cy(e),r=new hy(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bs,{type:Bs},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[Bs];a!==void 0&&n(!!a),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=my(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Th()||_h()||Xo()}}const Hy=jy;var yc="@firebase/auth",Ec="1.7.8";/**
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
 */class By{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $y(t){Xn(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sh(t)},d=new p_(r,s,o,h);return T_(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xn(new wn("auth-internal",e=>{const n=tr(e.getProvider("auth").getImmediate());return(r=>new By(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(yc,Ec,Vy(t)),sn(yc,Ec,"esm2017")}/**
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
 */const Ky=5*60,Wy=eh("authIdTokenMaxAge")||Ky;let wc=null;const zy=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Wy)return;const s=n==null?void 0:n.token;wc!==s&&(wc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Gy(t=ih()){const e=Wo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=b_(t,{popupRedirectResolver:Hy,persistence:[Y_,j_,xh]}),r=eh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=zy(o.toString());M_(n,a,()=>a(n.currentUser)),L_(n,u=>a(u))}}const s=Qu("auth");return s&&S_(n,`http://${s}`),n}function qy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}g_({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const o=Et("internal-error");o.customData=s,n(o)},r.type="text/javascript",r.charset="UTF-8",qy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$y("Browser");var Jy="firebase",Xy="10.13.1";/**
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
 */sn(Jy,Xy,"app");var Ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bh;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,p){function v(){}v.prototype=p.prototype,I.D=p.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(w,T,S){for(var E=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)E[Pe-2]=arguments[Pe];return p.prototype[T].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,p,v){v||(v=0);var w=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)w[T]=p.charCodeAt(v++)|p.charCodeAt(v++)<<8|p.charCodeAt(v++)<<16|p.charCodeAt(v++)<<24;else for(T=0;16>T;++T)w[T]=p[v++]|p[v++]<<8|p[v++]<<16|p[v++]<<24;p=I.g[0],v=I.g[1],T=I.g[2];var S=I.g[3],E=p+(S^v&(T^S))+w[0]+3614090360&4294967295;p=v+(E<<7&4294967295|E>>>25),E=S+(T^p&(v^T))+w[1]+3905402710&4294967295,S=p+(E<<12&4294967295|E>>>20),E=T+(v^S&(p^v))+w[2]+606105819&4294967295,T=S+(E<<17&4294967295|E>>>15),E=v+(p^T&(S^p))+w[3]+3250441966&4294967295,v=T+(E<<22&4294967295|E>>>10),E=p+(S^v&(T^S))+w[4]+4118548399&4294967295,p=v+(E<<7&4294967295|E>>>25),E=S+(T^p&(v^T))+w[5]+1200080426&4294967295,S=p+(E<<12&4294967295|E>>>20),E=T+(v^S&(p^v))+w[6]+2821735955&4294967295,T=S+(E<<17&4294967295|E>>>15),E=v+(p^T&(S^p))+w[7]+4249261313&4294967295,v=T+(E<<22&4294967295|E>>>10),E=p+(S^v&(T^S))+w[8]+1770035416&4294967295,p=v+(E<<7&4294967295|E>>>25),E=S+(T^p&(v^T))+w[9]+2336552879&4294967295,S=p+(E<<12&4294967295|E>>>20),E=T+(v^S&(p^v))+w[10]+4294925233&4294967295,T=S+(E<<17&4294967295|E>>>15),E=v+(p^T&(S^p))+w[11]+2304563134&4294967295,v=T+(E<<22&4294967295|E>>>10),E=p+(S^v&(T^S))+w[12]+1804603682&4294967295,p=v+(E<<7&4294967295|E>>>25),E=S+(T^p&(v^T))+w[13]+4254626195&4294967295,S=p+(E<<12&4294967295|E>>>20),E=T+(v^S&(p^v))+w[14]+2792965006&4294967295,T=S+(E<<17&4294967295|E>>>15),E=v+(p^T&(S^p))+w[15]+1236535329&4294967295,v=T+(E<<22&4294967295|E>>>10),E=p+(T^S&(v^T))+w[1]+4129170786&4294967295,p=v+(E<<5&4294967295|E>>>27),E=S+(v^T&(p^v))+w[6]+3225465664&4294967295,S=p+(E<<9&4294967295|E>>>23),E=T+(p^v&(S^p))+w[11]+643717713&4294967295,T=S+(E<<14&4294967295|E>>>18),E=v+(S^p&(T^S))+w[0]+3921069994&4294967295,v=T+(E<<20&4294967295|E>>>12),E=p+(T^S&(v^T))+w[5]+3593408605&4294967295,p=v+(E<<5&4294967295|E>>>27),E=S+(v^T&(p^v))+w[10]+38016083&4294967295,S=p+(E<<9&4294967295|E>>>23),E=T+(p^v&(S^p))+w[15]+3634488961&4294967295,T=S+(E<<14&4294967295|E>>>18),E=v+(S^p&(T^S))+w[4]+3889429448&4294967295,v=T+(E<<20&4294967295|E>>>12),E=p+(T^S&(v^T))+w[9]+568446438&4294967295,p=v+(E<<5&4294967295|E>>>27),E=S+(v^T&(p^v))+w[14]+3275163606&4294967295,S=p+(E<<9&4294967295|E>>>23),E=T+(p^v&(S^p))+w[3]+4107603335&4294967295,T=S+(E<<14&4294967295|E>>>18),E=v+(S^p&(T^S))+w[8]+1163531501&4294967295,v=T+(E<<20&4294967295|E>>>12),E=p+(T^S&(v^T))+w[13]+2850285829&4294967295,p=v+(E<<5&4294967295|E>>>27),E=S+(v^T&(p^v))+w[2]+4243563512&4294967295,S=p+(E<<9&4294967295|E>>>23),E=T+(p^v&(S^p))+w[7]+1735328473&4294967295,T=S+(E<<14&4294967295|E>>>18),E=v+(S^p&(T^S))+w[12]+2368359562&4294967295,v=T+(E<<20&4294967295|E>>>12),E=p+(v^T^S)+w[5]+4294588738&4294967295,p=v+(E<<4&4294967295|E>>>28),E=S+(p^v^T)+w[8]+2272392833&4294967295,S=p+(E<<11&4294967295|E>>>21),E=T+(S^p^v)+w[11]+1839030562&4294967295,T=S+(E<<16&4294967295|E>>>16),E=v+(T^S^p)+w[14]+4259657740&4294967295,v=T+(E<<23&4294967295|E>>>9),E=p+(v^T^S)+w[1]+2763975236&4294967295,p=v+(E<<4&4294967295|E>>>28),E=S+(p^v^T)+w[4]+1272893353&4294967295,S=p+(E<<11&4294967295|E>>>21),E=T+(S^p^v)+w[7]+4139469664&4294967295,T=S+(E<<16&4294967295|E>>>16),E=v+(T^S^p)+w[10]+3200236656&4294967295,v=T+(E<<23&4294967295|E>>>9),E=p+(v^T^S)+w[13]+681279174&4294967295,p=v+(E<<4&4294967295|E>>>28),E=S+(p^v^T)+w[0]+3936430074&4294967295,S=p+(E<<11&4294967295|E>>>21),E=T+(S^p^v)+w[3]+3572445317&4294967295,T=S+(E<<16&4294967295|E>>>16),E=v+(T^S^p)+w[6]+76029189&4294967295,v=T+(E<<23&4294967295|E>>>9),E=p+(v^T^S)+w[9]+3654602809&4294967295,p=v+(E<<4&4294967295|E>>>28),E=S+(p^v^T)+w[12]+3873151461&4294967295,S=p+(E<<11&4294967295|E>>>21),E=T+(S^p^v)+w[15]+530742520&4294967295,T=S+(E<<16&4294967295|E>>>16),E=v+(T^S^p)+w[2]+3299628645&4294967295,v=T+(E<<23&4294967295|E>>>9),E=p+(T^(v|~S))+w[0]+4096336452&4294967295,p=v+(E<<6&4294967295|E>>>26),E=S+(v^(p|~T))+w[7]+1126891415&4294967295,S=p+(E<<10&4294967295|E>>>22),E=T+(p^(S|~v))+w[14]+2878612391&4294967295,T=S+(E<<15&4294967295|E>>>17),E=v+(S^(T|~p))+w[5]+4237533241&4294967295,v=T+(E<<21&4294967295|E>>>11),E=p+(T^(v|~S))+w[12]+1700485571&4294967295,p=v+(E<<6&4294967295|E>>>26),E=S+(v^(p|~T))+w[3]+2399980690&4294967295,S=p+(E<<10&4294967295|E>>>22),E=T+(p^(S|~v))+w[10]+4293915773&4294967295,T=S+(E<<15&4294967295|E>>>17),E=v+(S^(T|~p))+w[1]+2240044497&4294967295,v=T+(E<<21&4294967295|E>>>11),E=p+(T^(v|~S))+w[8]+1873313359&4294967295,p=v+(E<<6&4294967295|E>>>26),E=S+(v^(p|~T))+w[15]+4264355552&4294967295,S=p+(E<<10&4294967295|E>>>22),E=T+(p^(S|~v))+w[6]+2734768916&4294967295,T=S+(E<<15&4294967295|E>>>17),E=v+(S^(T|~p))+w[13]+1309151649&4294967295,v=T+(E<<21&4294967295|E>>>11),E=p+(T^(v|~S))+w[4]+4149444226&4294967295,p=v+(E<<6&4294967295|E>>>26),E=S+(v^(p|~T))+w[11]+3174756917&4294967295,S=p+(E<<10&4294967295|E>>>22),E=T+(p^(S|~v))+w[2]+718787259&4294967295,T=S+(E<<15&4294967295|E>>>17),E=v+(S^(T|~p))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(T+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,p){p===void 0&&(p=I.length);for(var v=p-this.blockSize,w=this.B,T=this.h,S=0;S<p;){if(T==0)for(;S<=v;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<p;)if(w[T++]=I.charCodeAt(S++),T==this.blockSize){s(this,w),T=0;break}}else for(;S<p;)if(w[T++]=I[S++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;var v=8*this.o;for(p=I.length-8;p<I.length;++p)I[p]=v&255,v/=256;for(this.u(I),I=Array(16),p=v=0;4>p;++p)for(var w=0;32>w;w+=8)I[v++]=this.g[p]>>>w&255;return I};function o(I,p){var v=u;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=p(I)}function a(I,p){this.h=p;for(var v=[],w=!0,T=I.length-1;0<=T;T--){var S=I[T]|0;w&&S==p||(v[T]=S,w=!1)}this.g=v}var u={};function h(I){return-128<=I&&128>I?o(I,function(p){return new a([p|0],0>p?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return _;if(0>I)return G(d(-I));for(var p=[],v=1,w=0;I>=v;w++)p[w]=I/v|0,v*=4294967296;return new a(p,0)}function m(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return G(m(I.substring(1),p));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(p,8)),w=_,T=0;T<I.length;T+=8){var S=Math.min(8,I.length-T),E=parseInt(I.substring(T,T+S),p);8>S?(S=d(Math.pow(p,S)),w=w.j(S).add(d(E))):(w=w.j(v),w=w.add(d(E)))}return w}var _=h(0),b=h(1),R=h(16777216);t=a.prototype,t.m=function(){if(M(this))return-G(this).m();for(var I=0,p=1,v=0;v<this.g.length;v++){var w=this.i(v);I+=(0<=w?w:4294967296+w)*p,p*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D(this))return"0";if(M(this))return"-"+G(this).toString(I);for(var p=d(Math.pow(I,6)),v=this,w="";;){var T=V(v,p).g;v=q(v,T.j(p));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=T,D(v))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function D(I){if(I.h!=0)return!1;for(var p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function M(I){return I.h==-1}t.l=function(I){return I=q(this,I),M(I)?-1:D(I)?0:1};function G(I){for(var p=I.g.length,v=[],w=0;w<p;w++)v[w]=~I.g[w];return new a(v,~I.h).add(b)}t.abs=function(){return M(this)?G(this):this},t.add=function(I){for(var p=Math.max(this.g.length,I.g.length),v=[],w=0,T=0;T<=p;T++){var S=w+(this.i(T)&65535)+(I.i(T)&65535),E=(S>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);w=E>>>16,S&=65535,E&=65535,v[T]=E<<16|S}return new a(v,v[v.length-1]&-2147483648?-1:0)};function q(I,p){return I.add(G(p))}t.j=function(I){if(D(this)||D(I))return _;if(M(this))return M(I)?G(this).j(G(I)):G(G(this).j(I));if(M(I))return G(this.j(G(I)));if(0>this.l(R)&&0>I.l(R))return d(this.m()*I.m());for(var p=this.g.length+I.g.length,v=[],w=0;w<2*p;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var T=0;T<I.g.length;T++){var S=this.i(w)>>>16,E=this.i(w)&65535,Pe=I.i(T)>>>16,Xe=I.i(T)&65535;v[2*w+2*T]+=E*Xe,K(v,2*w+2*T),v[2*w+2*T+1]+=S*Xe,K(v,2*w+2*T+1),v[2*w+2*T+1]+=E*Pe,K(v,2*w+2*T+1),v[2*w+2*T+2]+=S*Pe,K(v,2*w+2*T+2)}for(w=0;w<p;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=p;w<2*p;w++)v[w]=0;return new a(v,0)};function K(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function W(I,p){this.g=I,this.h=p}function V(I,p){if(D(p))throw Error("division by zero");if(D(I))return new W(_,_);if(M(I))return p=V(G(I),p),new W(G(p.g),G(p.h));if(M(p))return p=V(I,G(p)),new W(G(p.g),p.h);if(30<I.g.length){if(M(I)||M(p))throw Error("slowDivide_ only works with positive integers.");for(var v=b,w=p;0>=w.l(I);)v=te(v),w=te(w);var T=le(v,1),S=le(w,1);for(w=le(w,2),v=le(v,2);!D(w);){var E=S.add(w);0>=E.l(I)&&(T=T.add(v),S=E),w=le(w,1),v=le(v,1)}return p=q(I,T.j(p)),new W(T,p)}for(T=_;0<=I.l(p);){for(v=Math.max(1,Math.floor(I.m()/p.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=d(v),E=S.j(p);M(E)||0<E.l(I);)v-=w,S=d(v),E=S.j(p);D(S)&&(S=b),T=T.add(S),I=q(I,E)}return new W(T,I)}t.A=function(I){return V(this,I).h},t.and=function(I){for(var p=Math.max(this.g.length,I.g.length),v=[],w=0;w<p;w++)v[w]=this.i(w)&I.i(w);return new a(v,this.h&I.h)},t.or=function(I){for(var p=Math.max(this.g.length,I.g.length),v=[],w=0;w<p;w++)v[w]=this.i(w)|I.i(w);return new a(v,this.h|I.h)},t.xor=function(I){for(var p=Math.max(this.g.length,I.g.length),v=[],w=0;w<p;w++)v[w]=this.i(w)^I.i(w);return new a(v,this.h^I.h)};function te(I){for(var p=I.g.length+1,v=[],w=0;w<p;w++)v[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(v,I.h)}function le(I,p){var v=p>>5;p%=32;for(var w=I.g.length-v,T=[],S=0;S<w;S++)T[S]=0<p?I.i(S+v)>>>p|I.i(S+v+1)<<32-p:I.i(S+v);return new a(T,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Bh=a}).apply(typeof Ic<"u"?Ic:typeof self<"u"?self:typeof window<"u"?window:{});var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof gi=="object"&&gi];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=n(this);function s(i,l){if(l)e:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in c))break e;c=c[A]}i=i[i.length-1],f=c[i],l=l(f),l!=f&&l!=null&&e(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,f=!1,A={next:function(){if(!f&&c<i.length){var P=c++;return{value:l(P,i[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,c){return i.call.apply(i.bind,arguments)}function _(i,l,c){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function b(i,l,c){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:_,b.apply(null,arguments)}function R(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function D(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(f,A,P){for(var j=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)j[ve-2]=arguments[ve];return l.prototype[A].apply(f,j)}}function M(i){const l=i.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=i[f];return c}return[]}function G(i,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const A=i.length||0,P=f.length||0;i.length=A+P;for(let j=0;j<P;j++)i[A+j]=f[j]}else i.push(f)}}class q{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function K(i){return/^[\s\xa0]*$/.test(i)}function W(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function V(i){return V[" "](i),i}V[" "]=function(){};var te=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function le(i,l,c){for(const f in i)l.call(c,i[f],f,i)}function I(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function p(i){const l={};for(const c in i)l[c]=i[c];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(i,l){let c,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(c in f)i[c]=f[c];for(let P=0;P<v.length;P++)c=v[P],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function T(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function S(i){u.setTimeout(()=>{throw i},0)}function E(){var i=Ze;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class Pe{constructor(){this.h=this.g=null}add(l,c){const f=Xe.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var Xe=new q(()=>new Ee,i=>i.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,se=!1,Ze=new Pe,at=()=>{const i=u.Promise.resolve(void 0);ee=()=>{i.then(rt)}};var rt=()=>{for(var i;i=E();){try{i.h.call(i.g)}catch(c){S(c)}var l=Xe;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}se=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var Ht=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function pt(i,l){if(be.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(te){e:{try{V(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ye[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&pt.aa.h.call(this)}}D(pt,be);var Ye={2:"touch",3:"pen",4:"mouse"};pt.prototype.h=function(){pt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),z=0;function B(i,l,c,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=A,this.key=++z,this.da=this.fa=!1}function J(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function oe(i){this.src=i,this.g={},this.h=0}oe.prototype.add=function(i,l,c,f,A){var P=i.toString();i=this.g[P],i||(i=this.g[P]=[],this.h++);var j=g(i,l,f,A);return-1<j?(l=i[j],c||(l.fa=!1)):(l=new B(l,this.src,P,!!f,A),l.fa=c,i.push(l)),l};function me(i,l){var c=l.type;if(c in i.g){var f=i.g[c],A=Array.prototype.indexOf.call(f,l,void 0),P;(P=0<=A)&&Array.prototype.splice.call(f,A,1),P&&(J(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function g(i,l,c,f){for(var A=0;A<i.length;++A){var P=i[A];if(!P.da&&P.listener==l&&P.capture==!!c&&P.ha==f)return A}return-1}var y="closure_lm_"+(1e6*Math.random()|0),C={};function N(i,l,c,f,A){if(Array.isArray(l)){for(var P=0;P<l.length;P++)N(i,l[P],c,f,A);return null}return c=Y(c),i&&i[k]?i.K(l,c,d(f)?!!f.capture:!!f,A):O(i,l,c,!1,f,A)}function O(i,l,c,f,A,P){if(!l)throw Error("Invalid event type");var j=d(A)?!!A.capture:!!A,ve=Q(i);if(ve||(i[y]=ve=new oe(i)),c=ve.add(l,c,f,j,P),c.proxy)return c;if(f=x(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)Ht||(A=j),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(U(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function x(){function i(c){return l.call(i.src,i.listener,c)}const l=L;return i}function H(i,l,c,f,A){if(Array.isArray(l))for(var P=0;P<l.length;P++)H(i,l[P],c,f,A);else f=d(f)?!!f.capture:!!f,c=Y(c),i&&i[k]?(i=i.i,l=String(l).toString(),l in i.g&&(P=i.g[l],c=g(P,c,f,A),-1<c&&(J(P[c]),Array.prototype.splice.call(P,c,1),P.length==0&&(delete i.g[l],i.h--)))):i&&(i=Q(i))&&(l=i.g[l.toString()],i=-1,l&&(i=g(l,c,f,A)),(c=-1<i?l[i]:null)&&F(c))}function F(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[k])me(l.i,i);else{var c=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(c,f,i.capture):l.detachEvent?l.detachEvent(U(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=Q(l))?(me(c,i),c.h==0&&(c.src=null,l[y]=null)):J(i)}}}function U(i){return i in C?C[i]:C[i]="on"+i}function L(i,l){if(i.da)i=!0;else{l=new pt(l,this);var c=i.listener,f=i.ha||i.src;i.fa&&F(i),i=c.call(f,l)}return i}function Q(i){return i=i[y],i instanceof oe?i:null}var $="__closure_events_fn_"+(1e9*Math.random()>>>0);function Y(i){return typeof i=="function"?i:(i[$]||(i[$]=function(l){return i.handleEvent(l)}),i[$])}function X(){Ie.call(this),this.i=new oe(this),this.M=this,this.F=null}D(X,Ie),X.prototype[k]=!0,X.prototype.removeEventListener=function(i,l,c,f){H(this,i,l,c,f)};function Z(i,l){var c,f=i.F;if(f)for(c=[];f;f=f.F)c.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new be(l,i);else if(l instanceof be)l.target=l.target||i;else{var A=l;l=new be(f,i),w(l,A)}if(A=!0,c)for(var P=c.length-1;0<=P;P--){var j=l.g=c[P];A=fe(j,f,!0,l)&&A}if(j=l.g=i,A=fe(j,f,!0,l)&&A,A=fe(j,f,!1,l)&&A,c)for(P=0;P<c.length;P++)j=l.g=c[P],A=fe(j,f,!1,l)&&A}X.prototype.N=function(){if(X.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],f=0;f<c.length;f++)J(c[f]);delete i.g[l],i.h--}}this.F=null},X.prototype.K=function(i,l,c,f){return this.i.add(String(i),l,!1,c,f)},X.prototype.L=function(i,l,c,f){return this.i.add(String(i),l,!0,c,f)};function fe(i,l,c,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,P=0;P<l.length;++P){var j=l[P];if(j&&!j.da&&j.capture==c){var ve=j.listener,ke=j.ha||j.src;j.fa&&me(i.i,j),A=ve.call(ke,f)!==!1&&A}}return A&&!f.defaultPrevented}function ce(i,l,c){if(typeof i=="function")c&&(i=b(i,c));else if(i&&typeof i.handleEvent=="function")i=b(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function xe(i){i.g=ce(()=>{i.g=null,i.i&&(i.i=!1,xe(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Ce extends Ie{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:xe(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oe(i){Ie.call(this),this.h=i,this.g={}}D(Oe,Ie);var Le=[];function Bt(i){le(i.g,function(l,c){this.g.hasOwnProperty(c)&&F(l)},i),i.g={}}Oe.prototype.N=function(){Oe.aa.N.call(this),Bt(this)},Oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var An=u.JSON.stringify,Ve=u.JSON.parse,it=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Cn(){}Cn.prototype.h=null;function ra(i){return i.h||(i.h=i.i())}function zh(){}var nr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function is(){be.call(this,"d")}D(is,be);function ss(){be.call(this,"c")}D(ss,be);var Rn={},ia=null;function os(){return ia=ia||new X}Rn.La="serverreachability";function sa(i){be.call(this,Rn.La,i)}D(sa,be);function rr(i){const l=os();Z(l,new sa(l))}Rn.STAT_EVENT="statevent";function oa(i,l){be.call(this,Rn.STAT_EVENT,i),this.stat=l}D(oa,be);function $e(i){const l=os();Z(l,new oa(l,i))}Rn.Ma="timingevent";function aa(i,l){be.call(this,Rn.Ma,i),this.size=l}D(aa,be);function ir(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function sr(){this.g=!0}sr.prototype.xa=function(){this.g=!1};function Gh(i,l,c,f,A,P){i.info(function(){if(i.g)if(P)for(var j="",ve=P.split("&"),ke=0;ke<ve.length;ke++){var ue=ve[ke].split("=");if(1<ue.length){var Me=ue[0];ue=ue[1];var Ue=Me.split("_");j=2<=Ue.length&&Ue[1]=="type"?j+(Me+"="+ue+"&"):j+(Me+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+c+`
`+j})}function qh(i,l,c,f,A,P,j){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+c+`
`+P+" "+j})}function Pn(i,l,c,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Xh(i,c)+(f?" "+f:"")})}function Jh(i,l){i.info(function(){return"TIMEOUT: "+l})}sr.prototype.info=function(){};function Xh(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var f=c[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<A.length;j++)A[j]=""}}}}return An(c)}catch{return l}}var as={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ls;function Xr(){}D(Xr,Cn),Xr.prototype.g=function(){return new XMLHttpRequest},Xr.prototype.i=function(){return{}},ls=new Xr;function Vt(i,l,c,f){this.j=i,this.i=l,this.l=c,this.R=f||1,this.U=new Oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new la}function la(){this.i=null,this.g="",this.h=!1}var ca={},cs={};function us(i,l,c){i.L=1,i.v=ei(bt(l)),i.m=c,i.P=!0,ua(i,null)}function ua(i,l){i.F=Date.now(),Yr(i),i.A=bt(i.v);var c=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Ta(c.i,"t",f),i.C=0,c=i.j.J,i.h=new la,i.g=Va(i.j,c?l:null,!i.m),0<i.O&&(i.M=new Ce(b(i.Y,i,i.g),i.O)),l=i.U,c=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(Le[0]=A.toString()),A=Le);for(var P=0;P<A.length;P++){var j=N(c,A[P],f||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),rr(),Gh(i.i,i.u,i.A,i.l,i.R,i.m)}Vt.prototype.ca=function(i){i=i.target;const l=this.M;l&&Tt(i)==3?l.j():this.Y(i)},Vt.prototype.Y=function(i){try{if(i==this.g)e:{const Ue=Tt(this.g);var l=this.g.Ba();const Dn=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||ka(this.g)))){this.J||Ue!=4||l==7||(l==8||0>=Dn?rr(3):rr(2)),hs(this);var c=this.g.Z();this.X=c;t:if(ha(this)){var f=ka(this.g);i="";var A=f.length,P=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),or(this);var j="";break t}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(P&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=c==200,qh(this.i,this.u,this.A,this.l,this.R,Ue,c),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,ke=this.g;if((ve=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(ve)){var ue=ve;break t}}ue=null}if(c=ue)Pn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fs(this,c);else{this.o=!1,this.s=3,$e(12),un(this),or(this);break e}}if(this.P){c=!0;let lt;for(;!this.J&&this.C<j.length;)if(lt=Qh(this,j),lt==cs){Ue==4&&(this.s=4,$e(14),c=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==ca){this.s=4,$e(15),Pn(this.i,this.l,j,"[Invalid Chunk]"),c=!1;break}else Pn(this.i,this.l,lt,null),fs(this,lt);if(ha(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||j.length!=0||this.h.h||(this.s=1,$e(16),c=!1),this.o=this.o&&c,!c)Pn(this.i,this.l,j,"[Invalid Chunked Response]"),un(this),or(this);else if(0<j.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),_s(Me),Me.M=!0,$e(11))}}else Pn(this.i,this.l,j,null),fs(this,j);Ue==4&&un(this),this.o&&!this.J&&(Ue==4?Fa(this.j,this):(this.o=!1,Yr(this)))}else mf(this.g),c==400&&0<j.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),un(this),or(this)}}}catch{}finally{}};function ha(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Qh(i,l){var c=i.C,f=l.indexOf(`
`,c);return f==-1?cs:(c=Number(l.substring(c,f)),isNaN(c)?ca:(f+=1,f+c>l.length?cs:(l=l.slice(f,f+c),i.C=f+c,l)))}Vt.prototype.cancel=function(){this.J=!0,un(this)};function Yr(i){i.S=Date.now()+i.I,fa(i,i.I)}function fa(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ir(b(i.ba,i),l)}function hs(i){i.B&&(u.clearTimeout(i.B),i.B=null)}Vt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Jh(this.i,this.A),this.L!=2&&(rr(),$e(17)),un(this),this.s=2,or(this)):fa(this,this.S-i)};function or(i){i.j.G==0||i.J||Fa(i.j,i)}function un(i){hs(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Bt(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function fs(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||ds(c.h,i))){if(!i.K&&ds(c.h,i)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)oi(c),ii(c);else break e;vs(c),$e(18)}}else c.za=A[1],0<c.za-c.T&&37500>A[2]&&c.F&&c.v==0&&!c.C&&(c.C=ir(b(c.Za,c),6e3));if(1>=ga(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else fn(c,11)}else if((i.K||c.g==i)&&oi(c),!K(l))for(A=c.Da.g.parse(l),l=0;l<A.length;l++){let ue=A[l];if(c.T=ue[0],ue=ue[1],c.G==2)if(ue[0]=="c"){c.K=ue[1],c.ia=ue[2];const Me=ue[3];Me!=null&&(c.la=Me,c.j.info("VER="+c.la));const Ue=ue[4];Ue!=null&&(c.Aa=Ue,c.j.info("SVER="+c.Aa));const Dn=ue[5];Dn!=null&&typeof Dn=="number"&&0<Dn&&(f=1.5*Dn,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const lt=i.g;if(lt){const ai=lt.g?lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var P=f.h;P.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ps(P,P.h),P.h=null))}if(f.D){const ys=lt.g?lt.g.getResponseHeader("X-HTTP-Session-Id"):null;ys&&(f.ya=ys,we(f.I,f.D,ys))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var j=i;if(f.qa=Ba(f,f.J?f.ia:null,f.W),j.K){ma(f.h,j);var ve=j,ke=f.L;ke&&(ve.I=ke),ve.B&&(hs(ve),Yr(ve)),f.g=j}else Ma(f);0<c.i.length&&si(c)}else ue[0]!="stop"&&ue[0]!="close"||fn(c,7);else c.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?fn(c,7):ms(c):ue[0]!="noop"&&c.l&&c.l.ta(ue),c.v=0)}}rr(4)}catch{}}var Zh=class{constructor(i,l){this.g=i,this.map=l}};function da(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pa(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ga(i){return i.h?1:i.g?i.g.size:0}function ds(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function ps(i,l){i.g?i.g.add(l):i.h=l}function ma(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}da.prototype.cancel=function(){if(this.i=va(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function va(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return M(i.i)}function ef(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,f=0;f<c;f++)l.push(i[f]);return l}l=[],c=0;for(f in i)l[c++]=i[f];return l}function tf(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const f in i)l[c++]=f;return l}}}function _a(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=tf(i),f=ef(i),A=f.length,P=0;P<A;P++)l.call(void 0,f[P],c&&c[P],i)}var ya=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nf(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var f=i[c].indexOf("="),A=null;if(0<=f){var P=i[c].substring(0,f);A=i[c].substring(f+1)}else P=i[c];l(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function hn(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof hn){this.h=i.h,Qr(this,i.j),this.o=i.o,this.g=i.g,Zr(this,i.s),this.l=i.l;var l=i.i,c=new cr;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),Ea(this,c),this.m=i.m}else i&&(l=String(i).match(ya))?(this.h=!1,Qr(this,l[1]||"",!0),this.o=ar(l[2]||""),this.g=ar(l[3]||"",!0),Zr(this,l[4]),this.l=ar(l[5]||"",!0),Ea(this,l[6]||"",!0),this.m=ar(l[7]||"")):(this.h=!1,this.i=new cr(null,this.h))}hn.prototype.toString=function(){var i=[],l=this.j;l&&i.push(lr(l,wa,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(lr(l,wa,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(lr(c,c.charAt(0)=="/"?of:sf,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",lr(c,lf)),i.join("")};function bt(i){return new hn(i)}function Qr(i,l,c){i.j=c?ar(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Zr(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Ea(i,l,c){l instanceof cr?(i.i=l,cf(i.i,i.h)):(c||(l=lr(l,af)),i.i=new cr(l,i.h))}function we(i,l,c){i.i.set(l,c)}function ei(i){return we(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function ar(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function lr(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,rf),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function rf(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var wa=/[#\/\?@]/g,sf=/[#\?:]/g,of=/[#\?]/g,af=/[#\?@]/g,lf=/#/g;function cr(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function $t(i){i.g||(i.g=new Map,i.h=0,i.i&&nf(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}t=cr.prototype,t.add=function(i,l){$t(this),this.i=null,i=On(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function Ia(i,l){$t(i),l=On(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function ba(i,l){return $t(i),l=On(i,l),i.g.has(l)}t.forEach=function(i,l){$t(this),this.g.forEach(function(c,f){c.forEach(function(A){i.call(l,A,f,this)},this)},this)},t.na=function(){$t(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const A=i[f];for(let P=0;P<A.length;P++)c.push(l[f])}return c},t.V=function(i){$t(this);let l=[];if(typeof i=="string")ba(this,i)&&(l=l.concat(this.g.get(On(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},t.set=function(i,l){return $t(this),this.i=null,i=On(this,i),ba(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},t.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Ta(i,l,c){Ia(i,l),0<c.length&&(i.i=null,i.g.set(On(i,l),M(c)),i.h+=c.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const P=encodeURIComponent(String(f)),j=this.V(f);for(f=0;f<j.length;f++){var A=P;j[f]!==""&&(A+="="+encodeURIComponent(String(j[f]))),i.push(A)}}return this.i=i.join("&")};function On(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function cf(i,l){l&&!i.j&&($t(i),i.i=null,i.g.forEach(function(c,f){var A=f.toLowerCase();f!=A&&(Ia(this,f),Ta(this,A,c))},i)),i.j=l}function uf(i,l){const c=new sr;if(u.Image){const f=new Image;f.onload=R(Kt,c,"TestLoadImage: loaded",!0,l,f),f.onerror=R(Kt,c,"TestLoadImage: error",!1,l,f),f.onabort=R(Kt,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(Kt,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function hf(i,l){const c=new sr,f=new AbortController,A=setTimeout(()=>{f.abort(),Kt(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(P=>{clearTimeout(A),P.ok?Kt(c,"TestPingServer: ok",!0,l):Kt(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Kt(c,"TestPingServer: error",!1,l)})}function Kt(i,l,c,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(c)}catch{}}function ff(){this.g=new it}function df(i,l,c){const f=c||"";try{_a(i,function(A,P){let j=A;d(A)&&(j=An(A)),l.push(f+P+"="+encodeURIComponent(j))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function ti(i){this.l=i.Ub||null,this.j=i.eb||!1}D(ti,Cn),ti.prototype.g=function(){return new ni(this.l,this.j)},ti.prototype.i=function(i){return function(){return i}}({});function ni(i,l){X.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ni,X),t=ni.prototype,t.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,hr(this)},t.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ur(this)),this.readyState=0},t.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,hr(this)),this.g&&(this.readyState=3,hr(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sa(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sa(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}t.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?ur(this):hr(this),this.readyState==3&&Sa(this)}},t.Ra=function(i){this.g&&(this.response=this.responseText=i,ur(this))},t.Qa=function(i){this.g&&(this.response=i,ur(this))},t.ga=function(){this.g&&ur(this)};function ur(i){i.readyState=4,i.l=null,i.j=null,i.v=null,hr(i)}t.setRequestHeader=function(i,l){this.u.append(i,l)},t.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function hr(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Aa(i){let l="";return le(i,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function gs(i,l,c){e:{for(f in c){var f=!1;break e}f=!0}f||(c=Aa(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):we(i,l,c))}function Te(i){X.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Te,X);var pf=/^https?$/i,gf=["POST","PUT"];t=Te.prototype,t.Ha=function(i){this.J=i},t.ea=function(i,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ls.g(),this.v=this.o?ra(this.o):ra(ls),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(P){Ca(this,P);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)c.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())c.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(P=>P.toLowerCase()=="content-type"),A=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(gf,l,void 0))||f||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of c)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Oa(this),this.u=!0,this.g.send(i),this.u=!1}catch(P){Ca(this,P)}};function Ca(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Ra(i),ri(i)}function Ra(i){i.A||(i.A=!0,Z(i,"complete"),Z(i,"error"))}t.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Z(this,"complete"),Z(this,"abort"),ri(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Pa(this):this.bb())},t.bb=function(){Pa(this)};function Pa(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Tt(i)!=4||i.Z()!=2)){if(i.u&&Tt(i)==4)ce(i.Ea,0,i);else if(Z(i,"readystatechange"),Tt(i)==4){i.h=!1;try{const j=i.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var c;if(!(c=l)){var f;if(f=j===0){var A=String(i.D).match(ya)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!pf.test(A?A.toLowerCase():"")}c=f}if(c)Z(i,"complete"),Z(i,"success");else{i.m=6;try{var P=2<Tt(i)?i.g.statusText:""}catch{P=""}i.l=P+" ["+i.Z()+"]",Ra(i)}}finally{ri(i)}}}}function ri(i,l){if(i.g){Oa(i);const c=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Z(i,"ready");try{c.onreadystatechange=f}catch{}}}function Oa(i){i.I&&(u.clearTimeout(i.I),i.I=null)}t.isActive=function(){return!!this.g};function Tt(i){return i.g?i.g.readyState:0}t.Z=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Ve(l)}};function ka(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function mf(i){const l={};i=(i.g&&2<=Tt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(K(i[f]))continue;var c=T(i[f]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const P=l[A]||[];l[A]=P,P.push(c)}I(l,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fr(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function Da(i){this.Aa=0,this.i=[],this.j=new sr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fr("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fr("baseRetryDelayMs",5e3,i),this.cb=fr("retryDelaySeedMs",1e4,i),this.Wa=fr("forwardChannelMaxRetries",2,i),this.wa=fr("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new da(i&&i.concurrentRequestLimit),this.Da=new ff,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Da.prototype,t.la=8,t.G=1,t.connect=function(i,l,c,f){$e(0),this.W=i,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=Ba(this,null,this.W),si(this)};function ms(i){if(Na(i),i.G==3){var l=i.U++,c=bt(i.I);if(we(c,"SID",i.K),we(c,"RID",l),we(c,"TYPE","terminate"),dr(i,c),l=new Vt(i,i.j,l),l.L=2,l.v=ei(bt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=Va(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Yr(l)}Ha(i)}function ii(i){i.g&&(_s(i),i.g.cancel(),i.g=null)}function Na(i){ii(i),i.u&&(u.clearTimeout(i.u),i.u=null),oi(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function si(i){if(!pa(i.h)&&!i.s){i.s=!0;var l=i.Ga;ee||at(),se||(ee(),se=!0),Ze.add(l,i),i.B=0}}function vf(i,l){return ga(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ir(b(i.Ga,i,l),ja(i,i.B)),i.B++,!0)}t.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new Vt(this,this.j,i);let P=this.o;if(this.S&&(P?(P=p(P),w(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var l=0,c=0;c<this.i.length;c++){t:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break e}if(l===4096||c===this.i.length-1){l=c+1;break e}}l=1e3}else l=1e3;l=La(this,A,l),c=bt(this.I),we(c,"RID",i),we(c,"CVER",22),this.D&&we(c,"X-HTTP-Session-Id",this.D),dr(this,c),P&&(this.O?l="headers="+encodeURIComponent(String(Aa(P)))+"&"+l:this.m&&gs(c,this.m,P)),ps(this.h,A),this.Ua&&we(c,"TYPE","init"),this.P?(we(c,"$req",l),we(c,"SID","null"),A.T=!0,us(A,c,null)):us(A,c,l),this.G=2}}else this.G==3&&(i?xa(this,i):this.i.length==0||pa(this.h)||xa(this))};function xa(i,l){var c;l?c=l.l:c=i.U++;const f=bt(i.I);we(f,"SID",i.K),we(f,"RID",c),we(f,"AID",i.T),dr(i,f),i.m&&i.o&&gs(f,i.m,i.o),c=new Vt(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=La(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ps(i.h,c),us(c,f,l)}function dr(i,l){i.H&&le(i.H,function(c,f){we(l,f,c)}),i.l&&_a({},function(c,f){we(l,f,c)})}function La(i,l,c){c=Math.min(i.i.length,c);var f=i.l?b(i.l.Na,i.l,i):null;e:{var A=i.i;let P=-1;for(;;){const j=["count="+c];P==-1?0<c?(P=A[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let ve=!0;for(let ke=0;ke<c;ke++){let ue=A[ke].g;const Me=A[ke].map;if(ue-=P,0>ue)P=Math.max(0,A[ke].g-100),ve=!1;else try{df(Me,j,"req"+ue+"_")}catch{f&&f(Me)}}if(ve){f=j.join("&");break e}}}return i=i.i.splice(0,c),l.D=i,f}function Ma(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;ee||at(),se||(ee(),se=!0),Ze.add(l,i),i.v=0}}function vs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ir(b(i.Fa,i),ja(i,i.v)),i.v++,!0)}t.Fa=function(){if(this.u=null,Ua(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ir(b(this.ab,this),i)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),ii(this),Ua(this))};function _s(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function Ua(i){i.g=new Vt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=bt(i.qa);we(l,"RID","rpc"),we(l,"SID",i.K),we(l,"AID",i.T),we(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&we(l,"TO",i.ja),we(l,"TYPE","xmlhttp"),dr(i,l),i.m&&i.o&&gs(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=ei(bt(l)),c.m=null,c.P=!0,ua(c,i)}t.Za=function(){this.C!=null&&(this.C=null,ii(this),vs(this),$e(19))};function oi(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Fa(i,l){var c=null;if(i.g==l){oi(i),_s(i),i.g=null;var f=2}else if(ds(i.h,l))c=l.D,ma(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=os(),Z(f,new aa(f,c)),si(i)}else Ma(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&vf(i,l)||f==2&&vs(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),A){case 1:fn(i,5);break;case 4:fn(i,10);break;case 3:fn(i,6);break;default:fn(i,2)}}}function ja(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function fn(i,l){if(i.j.info("Error code "+l),l==2){var c=b(i.fb,i),f=i.Xa;const A=!f;f=new hn(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Qr(f,"https"),ei(f),A?uf(f.toString(),c):hf(f.toString(),c)}else $e(2);i.G=0,i.l&&i.l.sa(l),Ha(i),Na(i)}t.fb=function(i){i?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function Ha(i){if(i.G=0,i.ka=[],i.l){const l=va(i.h);(l.length!=0||i.i.length!=0)&&(G(i.ka,l),G(i.ka,i.i),i.h.i.length=0,M(i.i),i.i.length=0),i.l.ra()}}function Ba(i,l,c){var f=c instanceof hn?bt(c):new hn(c);if(f.g!="")l&&(f.g=l+"."+f.g),Zr(f,f.s);else{var A=u.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var P=new hn(null);f&&Qr(P,f),l&&(P.g=l),A&&Zr(P,A),c&&(P.l=c),f=P}return c=i.D,l=i.ya,c&&l&&we(f,c,l),we(f,"VER",i.la),dr(i,f),f}function Va(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new Te(new ti({eb:c})):new Te(i.pa),l.Ha(i.J),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $a(){}t=$a.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function st(i,l){X.call(this),this.g=new Da(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!K(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!K(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new kn(this)}D(st,X),st.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},st.prototype.close=function(){ms(this.g)},st.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=An(i),i=c);l.i.push(new Zh(l.Ya++,i)),l.G==3&&si(l)},st.prototype.N=function(){this.g.l=null,delete this.j,ms(this.g),delete this.g,st.aa.N.call(this)};function Ka(i){is.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const c in l){i=c;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}D(Ka,is);function Wa(){ss.call(this),this.status=1}D(Wa,ss);function kn(i){this.g=i}D(kn,$a),kn.prototype.ua=function(){Z(this.g,"a")},kn.prototype.ta=function(i){Z(this.g,new Ka(i))},kn.prototype.sa=function(i){Z(this.g,new Wa)},kn.prototype.ra=function(){Z(this.g,"b")},st.prototype.send=st.prototype.o,st.prototype.open=st.prototype.m,st.prototype.close=st.prototype.close,as.NO_ERROR=0,as.TIMEOUT=8,as.HTTP_ERROR=6,Yh.COMPLETE="complete",zh.EventType=nr,nr.OPEN="a",nr.CLOSE="b",nr.ERROR="c",nr.MESSAGE="d",X.prototype.listen=X.prototype.K,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha}).apply(typeof gi<"u"?gi:typeof self<"u"?self:typeof window<"u"?window:{});const bc="@firebase/firestore";/**
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
 */let Jr="10.13.1";/**
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
 */const Yn=new $o("@firebase/firestore");function nt(t,...e){if(Yn.logLevel<=pe.DEBUG){const n=e.map(ea);Yn.debug(`Firestore (${Jr}): ${t}`,...n)}}function Zo(t,...e){if(Yn.logLevel<=pe.ERROR){const n=e.map(ea);Yn.error(`Firestore (${Jr}): ${t}`,...n)}}function Yy(t,...e){if(Yn.logLevel<=pe.WARN){const n=e.map(ea);Yn.warn(`Firestore (${Jr}): ${t}`,...n)}}function ea(t){if(typeof t=="string")return t;try{/**
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
 */function ta(t="Unexpected state"){const e=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: `+t;throw Zo(e),new Error(e)}function go(t,e){t||ta()}/**
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
 */const je={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class He extends jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Vh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class Zy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eE{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let o=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new zn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{nt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(nt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new zn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(nt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(go(typeof r.accessToken=="string"),new Vh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return go(e===null||typeof e=="string"),new Fe(e)}}class tE{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nE{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new tE(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&nt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,nt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{nt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):nt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(go(typeof n.token=="string"),this.R=n.token,new rE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function sE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class oE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=sE(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<n&&(r+=e.charAt(s[o]%e.length))}return r}}function $h(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class aE{constructor(e,n,r,s,o,a,u,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class Fi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Tc,ae;(ae=Tc||(Tc={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Bh([4294967295,4294967295],0);function Vs(){return typeof document<"u"?document:null}/**
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
 */class lE{constructor(e,n,r=1e3,s=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&nt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class na{constructor(e,n,r,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,o){const a=Date.now()+r,u=new na(e,n,a,s,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new He(je.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cE(t,e){if(Zo("AsyncQueue",`${e}: ${t}`),$h(t))return new He(je.UNAVAILABLE,`${e}: ${t}`);throw t}var Sc,Ac;(Ac=Sc||(Sc={})).ea="default",Ac.Cache="cache";/**
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
 */class uE{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=oE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{nt("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(nt("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new He(je.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cE(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
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
 */function Kh(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Cc=new Map;function hE(t,e,n,r){if(e===!0&&r===!0)throw new He(je.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fE(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ta()}function dE(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new He(je.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fE(t);throw new He(je.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Rc{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new He(je.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new He(je.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new He(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new He(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new He(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new He(je.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new He(je.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Qy;switch(r.type){case"firstParty":return new nE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new He(je.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Cc.get(n);r&&(nt("ComponentProvider","Removing Datastore"),Cc.delete(n),r.terminate())}(this),Promise.resolve()}}function pE(t,e,n,r={}){var s;const o=(t=dE(t,Wh))._getSettings(),a=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Yy("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Fe.MOCK_USER;else{u=bm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new He(je.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Fe(d)}t._authCredentials=new Zy(new Vh(u,h))}}/**
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
 */class gE{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new lE(this,"async_queue_retry"),this.Eu=()=>{const n=Vs();n&&nt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Vs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Vs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new zn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!$h(e))throw e;nt("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Zo("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=na.createAndSchedule(this,e,n,r,o=>this.Vu(o));return this.lu.push(s),s}du(){this.hu&&ta()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class mE extends Wh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new gE}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_E(this),this._firestoreClient.terminate()}}function vE(t,e){const n=ih(),r="(default)",s=Wo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=wm("firestore");o&&pE(s,...o)}return s}function _E(t){var e,n,r;const s=t._freezeSettings(),o=function(u,h,d,m){return new aE(u,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Kh(m.experimentalLongPollingOptions),m.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new uE(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(e,n=!0){(function(s){Jr=s})(er),Xn(new wn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new mE(new eE(r.getProvider("auth-internal")),new iE(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new He(je.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fi(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:n},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),sn(bc,"4.7.1",e),sn(bc,"4.7.1","esm2017")})();const yE={apiKey:"AIzaSyCI9MC9qMkmjuV23QEVVfLmaw6Gywu82sY",authDomain:"vue3-project-mrs.firebaseapp.com",projectId:"vue3-project-mrs",storageBucket:"vue3-project-mrs.appspot.com",messagingSenderId:"587619424480",appId:"1:587619424480:web:9ea9ac223c778164fc5885"};rh(yE);vE();const EE=Gy(),wE=dm("userStore",{state:()=>({userData:null}),actions:{async registerUser(t,e){try{const{user:n}=await x_(EE,t,e);this.userData={email:n.email,uid:n.uid}}catch(n){console.log(n)}}}}),IE={__name:"Register",setup(t){const e=wE();Zg();const n=kr(""),r=kr(""),s=()=>{if(!n.value||r.value.length<6)return alert("Campos vacios");e.registerUser(n.value,r.value)};return(o,a)=>(qi(),Ji("div",null,[a[3]||(a[3]=_t("h1",null,"Register",-1)),_t("form",{onSubmit:Vp(s,["prevent"])},[el(_t("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":a[0]||(a[0]=u=>n.value=u)},null,512),[[Al,n.value,void 0,{trim:!0}]]),el(_t("input",{type:"password",name:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":a[1]||(a[1]=u=>r.value=u)},null,512),[[Al,r.value,void 0,{trim:!0}]]),a[2]||(a[2]=_t("button",{type:"submit"},"Crear usuario",-1))],32)]))}},bE=[{path:"/",component:nm},{path:"/login",component:sm},{path:"/register",component:IE}],TE=Yg({routes:bE,history:Cg()});Wp(Xp).use(TE).use(am()).mount("#app");
