(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ii(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const re={},pn=[],Qe=()=>{},Yl=()=>!1,qr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),oi=t=>t.startsWith("onUpdate:"),he=Object.assign,ai=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xl=Object.prototype.hasOwnProperty,X=(t,e)=>Xl.call(t,e),j=Array.isArray,gn=t=>Jr(t)==="[object Map]",Aa=t=>Jr(t)==="[object Set]",B=t=>typeof t=="function",fe=t=>typeof t=="string",Mt=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",Ra=t=>(ce(t)||B(t))&&B(t.then)&&B(t.catch),Pa=Object.prototype.toString,Jr=t=>Pa.call(t),Ql=t=>Jr(t).slice(8,-1),Ca=t=>Jr(t)==="[object Object]",ci=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ln=ii(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zl=/-(\w)/g,He=Yr(t=>t.replace(Zl,(e,n)=>n?n.toUpperCase():"")),eu=/\B([A-Z])/g,nn=Yr(t=>t.replace(eu,"-$1").toLowerCase()),Xr=Yr(t=>t.charAt(0).toUpperCase()+t.slice(1)),us=Yr(t=>t?`on${Xr(t)}`:""),xt=(t,e)=>!Object.is(t,e),Er=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Oa=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ds=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Gi;const ka=()=>Gi||(Gi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function li(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=fe(r)?su(r):li(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(fe(t)||ce(t))return t}const tu=/;(?![^(]*\))/g,nu=/:([^]+)/,ru=/\/\*[^]*?\*\//g;function su(t){const e={};return t.replace(ru,"").split(tu).forEach(n=>{if(n){const r=n.split(nu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ui(t){let e="";if(fe(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=ui(t[n]);r&&(e+=r+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const iu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ou=ii(iu);function Na(t){return!!t||t===""}const Da=t=>!!(t&&t.__v_isRef===!0),La=t=>fe(t)?t:t==null?"":j(t)||ce(t)&&(t.toString===Pa||!B(t.toString))?Da(t)?La(t.value):JSON.stringify(t,xa,2):String(t),xa=(t,e)=>Da(e)?xa(t,e.value):gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[fs(r,i)+" =>"]=s,n),{})}:Aa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fs(n))}:Mt(e)?fs(e):ce(e)&&!j(e)&&!Ca(e)?String(e):e,fs=(t,e="")=>{var n;return Mt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let be;class Ma{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=be,!e&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=be;try{return be=this,e()}finally{be=n}}}on(){be=this}off(){be=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ua(t){return new Ma(t)}function Fa(){return be}function au(t,e=!1){be&&be.cleanups.push(t)}let ne;const ds=new WeakSet;class $a{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&be.active&&be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ds.has(this)&&(ds.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=xn,xn=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qi(this),Ba(this);const e=ne,n=Be;ne=this,Be=!0;try{return this.fn()}finally{Va(this),ne=e,Be=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hi(e);this.deps=this.depsTail=void 0,qi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ds.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ls(this)&&this.run()}get dirty(){return Ls(this)}}let ja=0,xn;function fi(){ja++}function di(){if(--ja>0)return;let t;for(;xn;){let e=xn;for(xn=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ba(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Va(t){let e,n=t.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),hi(r),cu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function Ls(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&Ha(e.dep.computed)||e.dep.version!==e.version)return!0;return!!t._dirty}function Ha(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Wn))return;t.globalVersion=Wn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!Ls(t)){t.flags&=-3;return}const n=ne,r=Be;ne=t,Be=!0;try{Ba(t);const s=t.fn(t._value);(e.version===0||xt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ne=n,Be=r,Va(t),t.flags&=-3}}function hi(t){const{dep:e,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)hi(s)}}function cu(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Be=!0;const Wa=[];function Ut(){Wa.push(Be),Be=!1}function Ft(){const t=Wa.pop();Be=t===void 0?!0:t}function qi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ne;ne=void 0;try{e()}finally{ne=n}}}let Wn=0;class pi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!ne||!Be||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink={dep:this,sub:ne,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,ne.flags&4&&Ka(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=r)}return n}trigger(e){this.version++,Wn++,this.notify(e)}notify(e){fi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{di()}}}function Ka(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ka(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const Nr=new WeakMap,Gt=Symbol(""),xs=Symbol(""),Kn=Symbol("");function _e(t,e,n){if(Be&&ne){let r=Nr.get(t);r||Nr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=new pi),s.track()}}function dt(t,e,n,r,s,i){const o=Nr.get(t);if(!o){Wn++;return}const a=c=>{c&&c.trigger()};if(fi(),e==="clear")o.forEach(a);else{const c=j(t),l=c&&ci(n);if(c&&n==="length"){const f=Number(r);o.forEach((d,p)=>{(p==="length"||p===Kn||!Mt(p)&&p>=f)&&a(d)})}else switch(n!==void 0&&a(o.get(n)),l&&a(o.get(Kn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Gt)),gn(t)&&a(o.get(xs)));break;case"delete":c||(a(o.get(Gt)),gn(t)&&a(o.get(xs)));break;case"set":gn(t)&&a(o.get(Gt));break}}di()}function lu(t,e){var n;return(n=Nr.get(t))==null?void 0:n.get(e)}function an(t){const e=J(t);return e===t?e:(_e(e,"iterate",Kn),Ve(t)?e:e.map(Ee))}function gi(t){return _e(t=J(t),"iterate",Kn),t}const uu={__proto__:null,[Symbol.iterator](){return hs(this,Symbol.iterator,Ee)},concat(...t){return an(this).concat(...t.map(e=>j(e)?an(e):e))},entries(){return hs(this,"entries",t=>(t[1]=Ee(t[1]),t))},every(t,e){return st(this,"every",t,e,void 0,arguments)},filter(t,e){return st(this,"filter",t,e,n=>n.map(Ee),arguments)},find(t,e){return st(this,"find",t,e,Ee,arguments)},findIndex(t,e){return st(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return st(this,"findLast",t,e,Ee,arguments)},findLastIndex(t,e){return st(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return st(this,"forEach",t,e,void 0,arguments)},includes(...t){return ps(this,"includes",t)},indexOf(...t){return ps(this,"indexOf",t)},join(t){return an(this).join(t)},lastIndexOf(...t){return ps(this,"lastIndexOf",t)},map(t,e){return st(this,"map",t,e,void 0,arguments)},pop(){return Pn(this,"pop")},push(...t){return Pn(this,"push",t)},reduce(t,...e){return Ji(this,"reduce",t,e)},reduceRight(t,...e){return Ji(this,"reduceRight",t,e)},shift(){return Pn(this,"shift")},some(t,e){return st(this,"some",t,e,void 0,arguments)},splice(...t){return Pn(this,"splice",t)},toReversed(){return an(this).toReversed()},toSorted(t){return an(this).toSorted(t)},toSpliced(...t){return an(this).toSpliced(...t)},unshift(...t){return Pn(this,"unshift",t)},values(){return hs(this,"values",Ee)}};function hs(t,e,n){const r=gi(t),s=r[e]();return r!==t&&!Ve(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const fu=Array.prototype;function st(t,e,n,r,s,i){const o=gi(t),a=o!==t&&!Ve(t),c=o[e];if(c!==fu[e]){const d=c.apply(t,i);return a?Ee(d):d}let l=n;o!==t&&(a?l=function(d,p){return n.call(this,Ee(d),p,t)}:n.length>2&&(l=function(d,p){return n.call(this,d,p,t)}));const f=c.call(o,l,r);return a&&s?s(f):f}function Ji(t,e,n,r){const s=gi(t);let i=n;return s!==t&&(Ve(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,Ee(a),c,t)}),s[e](i,...r)}function ps(t,e,n){const r=J(t);_e(r,"iterate",Kn);const s=r[e](...n);return(s===-1||s===!1)&&yi(n[0])?(n[0]=J(n[0]),r[e](...n)):s}function Pn(t,e,n=[]){Ut(),fi();const r=J(t)[e].apply(t,n);return di(),Ft(),r}const du=ii("__proto__,__v_isRef,__isVue"),za=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mt));function hu(t){Mt(t)||(t=String(t));const e=J(this);return _e(e,"has",t),e.hasOwnProperty(t)}class Ga{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Au:Xa:i?Ya:Ja).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=j(e);if(!s){let c;if(o&&(c=uu[n]))return c;if(n==="hasOwnProperty")return hu}const a=Reflect.get(e,n,ue(e)?e:r);return(Mt(n)?za.has(n):du(n))||(s||_e(e,"get",n),i)?a:ue(a)?o&&ci(n)?a:a.value:ce(a)?s?Za(a):er(a):a}}class qa extends Ga{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Yt(i);if(!Ve(r)&&!Yt(r)&&(i=J(i),r=J(r)),!j(e)&&ue(i)&&!ue(r))return c?!1:(i.value=r,!0)}const o=j(e)&&ci(n)?Number(n)<e.length:X(e,n),a=Reflect.set(e,n,r,ue(e)?e:s);return e===J(s)&&(o?xt(r,i)&&dt(e,"set",n,r):dt(e,"add",n,r)),a}deleteProperty(e,n){const r=X(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&dt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Mt(n)||!za.has(n))&&_e(e,"has",n),r}ownKeys(e){return _e(e,"iterate",j(e)?"length":Gt),Reflect.ownKeys(e)}}class pu extends Ga{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gu=new qa,mu=new pu,_u=new qa(!0);const mi=t=>t,Qr=t=>Reflect.getPrototypeOf(t);function dr(t,e,n=!1,r=!1){t=t.__v_raw;const s=J(t),i=J(e);n||(xt(e,i)&&_e(s,"get",e),_e(s,"get",i));const{has:o}=Qr(s),a=r?mi:n?Ei:Ee;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function hr(t,e=!1){const n=this.__v_raw,r=J(n),s=J(t);return e||(xt(t,s)&&_e(r,"has",t),_e(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function pr(t,e=!1){return t=t.__v_raw,!e&&_e(J(t),"iterate",Gt),Reflect.get(t,"size",t)}function Yi(t,e=!1){!e&&!Ve(t)&&!Yt(t)&&(t=J(t));const n=J(this);return Qr(n).has.call(n,t)||(n.add(t),dt(n,"add",t,t)),this}function Xi(t,e,n=!1){!n&&!Ve(e)&&!Yt(e)&&(e=J(e));const r=J(this),{has:s,get:i}=Qr(r);let o=s.call(r,t);o||(t=J(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?xt(e,a)&&dt(r,"set",t,e):dt(r,"add",t,e),this}function Qi(t){const e=J(this),{has:n,get:r}=Qr(e);let s=n.call(e,t);s||(t=J(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&dt(e,"delete",t,void 0),i}function Zi(){const t=J(this),e=t.size!==0,n=t.clear();return e&&dt(t,"clear",void 0,void 0),n}function gr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=J(o),c=e?mi:t?Ei:Ee;return!t&&_e(a,"iterate",Gt),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function mr(t,e,n){return function(...r){const s=this.__v_raw,i=J(s),o=gn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?mi:e?Ei:Ee;return!e&&_e(i,"iterate",c?xs:Gt),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function Et(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function vu(){const t={get(i){return dr(this,i)},get size(){return pr(this)},has:hr,add:Yi,set:Xi,delete:Qi,clear:Zi,forEach:gr(!1,!1)},e={get(i){return dr(this,i,!1,!0)},get size(){return pr(this)},has:hr,add(i){return Yi.call(this,i,!0)},set(i,o){return Xi.call(this,i,o,!0)},delete:Qi,clear:Zi,forEach:gr(!1,!0)},n={get(i){return dr(this,i,!0)},get size(){return pr(this,!0)},has(i){return hr.call(this,i,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:gr(!0,!1)},r={get(i){return dr(this,i,!0,!0)},get size(){return pr(this,!0)},has(i){return hr.call(this,i,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:gr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=mr(i,!1,!1),n[i]=mr(i,!0,!1),e[i]=mr(i,!1,!0),r[i]=mr(i,!0,!0)}),[t,n,e,r]}const[yu,bu,Eu,wu]=vu();function _i(t,e){const n=e?t?wu:Eu:t?bu:yu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(X(n,s)&&s in r?n:r,s,i)}const Iu={get:_i(!1,!1)},Su={get:_i(!1,!0)},Tu={get:_i(!0,!1)};const Ja=new WeakMap,Ya=new WeakMap,Xa=new WeakMap,Au=new WeakMap;function Ru(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pu(t){return t.__v_skip||!Object.isExtensible(t)?0:Ru(Ql(t))}function er(t){return Yt(t)?t:vi(t,!1,gu,Iu,Ja)}function Qa(t){return vi(t,!1,_u,Su,Ya)}function Za(t){return vi(t,!0,mu,Tu,Xa)}function vi(t,e,n,r,s){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Pu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function qt(t){return Yt(t)?qt(t.__v_raw):!!(t&&t.__v_isReactive)}function Yt(t){return!!(t&&t.__v_isReadonly)}function Ve(t){return!!(t&&t.__v_isShallow)}function yi(t){return t?!!t.__v_raw:!1}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function bi(t){return!X(t,"__v_skip")&&Object.isExtensible(t)&&Oa(t,"__v_skip",!0),t}const Ee=t=>ce(t)?er(t):t,Ei=t=>ce(t)?Za(t):t;function ue(t){return t?t.__v_isRef===!0:!1}function Xt(t){return ec(t,!1)}function Cu(t){return ec(t,!0)}function ec(t,e){return ue(t)?t:new Ou(t,e)}class Ou{constructor(e,n){this.dep=new pi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:J(e),this._value=n?e:Ee(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ve(e)||Yt(e);e=r?e:J(e),xt(e,n)&&(this._rawValue=e,this._value=r?e:Ee(e),this.dep.trigger())}}function ge(t){return ue(t)?t.value:t}const ku={get:(t,e,n)=>e==="__v_raw"?t:ge(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function tc(t){return qt(t)?t:new Proxy(t,ku)}function Nu(t){const e=j(t)?new Array(t.length):{};for(const n in t)e[n]=Lu(t,n);return e}class Du{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return lu(J(this._object),this._key)}}function Lu(t,e,n){const r=t[e];return ue(r)?r:new Du(t,e,n)}class xu{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wn-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){this.flags|=16,ne!==this&&this.dep.notify()}get value(){const e=this.dep.track();return Ha(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Mu(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new xu(r,s,n)}const _r={},Dr=new WeakMap;let Wt;function Uu(t,e=!1,n=Wt){if(n){let r=Dr.get(n);r||Dr.set(n,r=[]),r.push(t)}}function Fu(t,e,n=re){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=O=>s?O:Ve(O)||s===!1||s===0?ct(O,1):ct(O);let f,d,p,m,S=!1,P=!1;if(ue(t)?(d=()=>t.value,S=Ve(t)):qt(t)?(d=()=>l(t),S=!0):j(t)?(P=!0,S=t.some(O=>qt(O)||Ve(O)),d=()=>t.map(O=>{if(ue(O))return O.value;if(qt(O))return l(O);if(B(O))return c?c(O,2):O()})):B(t)?e?d=c?()=>c(t,2):t:d=()=>{if(p){Ut();try{p()}finally{Ft()}}const O=Wt;Wt=f;try{return c?c(t,3,[m]):t(m)}finally{Wt=O}}:d=Qe,e&&s){const O=d,V=s===!0?1/0:s;d=()=>ct(O(),V)}const F=Fa(),L=()=>{f.stop(),F&&ai(F.effects,f)};if(i)if(e){const O=e;e=(...V)=>{O(...V),L()}}else{const O=d;d=()=>{O(),L()}}let k=P?new Array(t.length).fill(_r):_r;const N=O=>{if(!(!(f.flags&1)||!f.dirty&&!O))if(e){const V=f.run();if(s||S||(P?V.some((le,q)=>xt(le,k[q])):xt(V,k))){p&&p();const le=Wt;Wt=f;try{const q=[V,k===_r?void 0:P&&k[0]===_r?[]:k,m];c?c(e,3,q):e(...q),k=V}finally{Wt=le}}}else f.run()};return a&&a(N),f=new $a(d),f.scheduler=o?()=>o(N,!1):N,m=O=>Uu(O,!1,f),p=f.onStop=()=>{const O=Dr.get(f);if(O){if(c)c(O,4);else for(const V of O)V();Dr.delete(f)}},e?r?N(!0):k=f.run():o?o(N.bind(null,!0),!0):f.run(),L.pause=f.pause.bind(f),L.resume=f.resume.bind(f),L.stop=L,L}function ct(t,e=1/0,n){if(e<=0||!ce(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ue(t))ct(t.value,e,n);else if(j(t))for(let r=0;r<t.length;r++)ct(t[r],e,n);else if(Aa(t)||gn(t))t.forEach(r=>{ct(r,e,n)});else if(Ca(t)){for(const r in t)ct(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ct(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tr(t,e,n,r){try{return r?t(...r):t()}catch(s){Zr(s,e,n)}}function nt(t,e,n,r){if(B(t)){const s=tr(t,e,n,r);return s&&Ra(s)&&s.catch(i=>{Zr(i,e,n)}),s}if(j(t)){const s=[];for(let i=0;i<t.length;i++)s.push(nt(t[i],e,n,r));return s}}function Zr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||re;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,c,l)===!1)return}a=a.parent}if(i){Ut(),tr(i,null,10,[t,c,l]),Ft();return}}$u(t,n,s,r,o)}function $u(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let zn=!1,Ms=!1;const we=[];let Je=0;const mn=[];let Tt=null,ln=0;const nc=Promise.resolve();let wi=null;function Ii(t){const e=wi||nc;return t?e.then(this?t.bind(this):t):e}function ju(t){let e=zn?Je+1:0,n=we.length;for(;e<n;){const r=e+n>>>1,s=we[r],i=Gn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Si(t){if(!(t.flags&1)){const e=Gn(t),n=we[we.length-1];!n||!(t.flags&2)&&e>=Gn(n)?we.push(t):we.splice(ju(e),0,t),t.flags|=1,rc()}}function rc(){!zn&&!Ms&&(Ms=!0,wi=nc.then(ic))}function Bu(t){j(t)?mn.push(...t):Tt&&t.id===-1?Tt.splice(ln+1,0,t):t.flags&1||(mn.push(t),t.flags|=1),rc()}function eo(t,e,n=zn?Je+1:0){for(;n<we.length;n++){const r=we[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;we.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function sc(t){if(mn.length){const e=[...new Set(mn)].sort((n,r)=>Gn(n)-Gn(r));if(mn.length=0,Tt){Tt.push(...e);return}for(Tt=e,ln=0;ln<Tt.length;ln++){const n=Tt[ln];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tt=null,ln=0}}const Gn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ic(t){Ms=!1,zn=!0;try{for(Je=0;Je<we.length;Je++){const e=we[Je];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),tr(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;Je<we.length;Je++){const e=we[Je];e&&(e.flags&=-2)}Je=0,we.length=0,sc(),zn=!1,wi=null,(we.length||mn.length)&&ic()}}let Re=null,oc=null;function Lr(t){const e=Re;return Re=t,oc=t&&t.type.__scopeId||null,e}function wr(t,e=Re,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&uo(-1);const i=Lr(e);let o;try{o=t(...s)}finally{Lr(i),r._d&&uo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function xr(t,e){if(Re===null)return t;const n=ss(Re),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=re]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&ct(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Vt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ut(),nt(c,n,8,[t.el,a,t,e]),Ft())}}const Vu=Symbol("_vte"),Hu=t=>t.__isTeleport;function Ti(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ti(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ac(t,e){return B(t)?he({name:t.name},e,{setup:t}):t}function cc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Us(t,e,n,r,s=!1){if(j(t)){t.forEach((S,P)=>Us(S,e&&(j(e)?e[P]:e),n,r,s));return}if(Mn(r)&&!s)return;const i=r.shapeFlag&4?ss(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===re?a.refs={}:a.refs,d=a.setupState,p=J(d),m=d===re?()=>!1:S=>X(p,S);if(l!=null&&l!==c&&(fe(l)?(f[l]=null,m(l)&&(d[l]=null)):ue(l)&&(l.value=null)),B(c))tr(c,a,12,[o,f]);else{const S=fe(c),P=ue(c);if(S||P){const F=()=>{if(t.f){const L=S?m(c)?d[c]:f[c]:c.value;s?j(L)&&ai(L,i):j(L)?L.includes(i)||L.push(i):S?(f[c]=[i],m(c)&&(d[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else S?(f[c]=o,m(c)&&(d[c]=o)):P&&(c.value=o,t.k&&(f[t.k]=o))};o?(F.id=-1,De(F,n)):F()}}}const Mn=t=>!!t.type.__asyncLoader,lc=t=>t.type.__isKeepAlive;function Wu(t,e){uc(t,"a",e)}function Ku(t,e){uc(t,"da",e)}function uc(t,e,n=de){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(es(e,r,n),n){let s=n.parent;for(;s&&s.parent;)lc(s.parent.vnode)&&zu(r,e,n,s),s=s.parent}}function zu(t,e,n,r){const s=es(e,t,r,!0);fc(()=>{ai(r[e],s)},n)}function es(t,e,n=de,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ut();const a=nr(n),c=nt(e,n,t,o);return a(),Ft(),c});return r?s.unshift(i):s.push(i),i}}const mt=t=>(e,n=de)=>{(!rs||t==="sp")&&es(t,(...r)=>e(...r),n)},Gu=mt("bm"),qu=mt("m"),Ju=mt("bu"),Yu=mt("u"),Xu=mt("bum"),fc=mt("um"),Qu=mt("sp"),Zu=mt("rtg"),ef=mt("rtc");function tf(t,e=de){es("ec",t,e)}const dc="components";function to(t,e){return rf(dc,t,!0,e)||t}const nf=Symbol.for("v-ndc");function rf(t,e,n=!0,r=!1){const s=Re||de;if(s){const i=s.type;if(t===dc){const a=Kf(i,!1);if(a&&(a===e||a===He(e)||a===Xr(He(e))))return i}const o=no(s[t]||i[t],e)||no(s.appContext[t],e);return!o&&r?i:o}}function no(t,e){return t&&(t[e]||t[He(e)]||t[Xr(He(e))])}const Fs=t=>t?Nc(t)?ss(t):Fs(t.parent):null,Un=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fs(t.parent),$root:t=>Fs(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ai(t),$forceUpdate:t=>t.f||(t.f=()=>{Si(t.update)}),$nextTick:t=>t.n||(t.n=Ii.bind(t.proxy)),$watch:t=>Af.bind(t)}),gs=(t,e)=>t!==re&&!t.__isScriptSetup&&X(t,e),sf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(gs(r,e))return o[e]=1,r[e];if(s!==re&&X(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&X(l,e))return o[e]=3,i[e];if(n!==re&&X(n,e))return o[e]=4,n[e];$s&&(o[e]=0)}}const f=Un[e];let d,p;if(f)return e==="$attrs"&&_e(t.attrs,"get",""),f(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==re&&X(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,X(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return gs(s,e)?(s[e]=n,!0):r!==re&&X(r,e)?(r[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==re&&X(t,o)||gs(e,o)||(a=i[0])&&X(a,o)||X(r,o)||X(Un,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ro(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $s=!0;function of(t){const e=Ai(t),n=t.proxy,r=t.ctx;$s=!1,e.beforeCreate&&so(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:d,mounted:p,beforeUpdate:m,updated:S,activated:P,deactivated:F,beforeDestroy:L,beforeUnmount:k,destroyed:N,unmounted:O,render:V,renderTracked:le,renderTriggered:q,errorCaptured:K,serverPrefetch:W,expose:ie,inheritAttrs:ve,components:Ce,directives:Se,filters:Bt}=e;if(l&&af(l,r,null),o)for(const H in o){const Y=o[H];B(Y)&&(r[H]=Y.bind(n))}if(s){const H=s.call(n,n);ce(H)&&(t.data=er(H))}if($s=!0,i)for(const H in i){const Y=i[H],rt=B(Y)?Y.bind(n,n):B(Y.get)?Y.get.bind(n,n):Qe,bt=!B(Y)&&B(Y.set)?Y.set.bind(n):Qe,ze=Ue({get:rt,set:bt});Object.defineProperty(r,H,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Te=>ze.value=Te})}if(a)for(const H in a)hc(a[H],r,n,H);if(c){const H=B(c)?c.call(n):c;Reflect.ownKeys(H).forEach(Y=>{Ir(Y,H[Y])})}f&&so(f,t,"c");function oe(H,Y){j(Y)?Y.forEach(rt=>H(rt.bind(n))):Y&&H(Y.bind(n))}if(oe(Gu,d),oe(qu,p),oe(Ju,m),oe(Yu,S),oe(Wu,P),oe(Ku,F),oe(tf,K),oe(ef,le),oe(Zu,q),oe(Xu,k),oe(fc,O),oe(Qu,W),j(ie))if(ie.length){const H=t.exposed||(t.exposed={});ie.forEach(Y=>{Object.defineProperty(H,Y,{get:()=>n[Y],set:rt=>n[Y]=rt})})}else t.exposed||(t.exposed={});V&&t.render===Qe&&(t.render=V),ve!=null&&(t.inheritAttrs=ve),Ce&&(t.components=Ce),Se&&(t.directives=Se),W&&cc(t)}function af(t,e,n=Qe){j(t)&&(t=js(t));for(const r in t){const s=t[r];let i;ce(s)?"default"in s?i=Ze(s.from||r,s.default,!0):i=Ze(s.from||r):i=Ze(s),ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function so(t,e,n){nt(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function hc(t,e,n,r){let s=r.includes(".")?Rc(n,r):()=>n[r];if(fe(t)){const i=e[t];B(i)&&Fn(s,i)}else if(B(t))Fn(s,t.bind(n));else if(ce(t))if(j(t))t.forEach(i=>hc(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Fn(s,i,t)}}function Ai(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Mr(c,l,o,!0)),Mr(c,e,o)),ce(e)&&i.set(e,c),c}function Mr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Mr(t,i,n,!0),s&&s.forEach(o=>Mr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=cf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const cf={data:io,props:oo,emits:oo,methods:kn,computed:kn,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:kn,directives:kn,watch:uf,provide:io,inject:lf};function io(t,e){return e?t?function(){return he(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function lf(t,e){return kn(js(t),js(e))}function js(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ye(t,e){return t?[...new Set([].concat(t,e))]:e}function kn(t,e){return t?he(Object.create(null),t,e):e}function oo(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:he(Object.create(null),ro(t),ro(e??{})):e}function uf(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const r in e)n[r]=ye(t[r],e[r]);return n}function pc(){return{app:null,config:{isNativeTag:Yl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ff=0;function df(t,e){return function(r,s=null){B(r)||(r=he({},r)),s!=null&&!ce(s)&&(s=null);const i=pc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:ff++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Gf,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(l,...d)):B(f)&&(o.add(f),f(l,...d))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,d){return d?(i.components[f]=d,l):i.components[f]},directive(f,d){return d?(i.directives[f]=d,l):i.directives[f]},mount(f,d,p){if(!c){const m=l._ceVNode||Pe(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(m,f):t(m,f,p),c=!0,l._container=f,f.__vue_app__=l,ss(m.component)}},onUnmount(f){a.push(f)},unmount(){c&&(nt(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(f,d){return i.provides[f]=d,l},runWithContext(f){const d=Jt;Jt=l;try{return f()}finally{Jt=d}}};return l}}let Jt=null;function Ir(t,e){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[t]=e}}function Ze(t,e,n=!1){const r=de||Re;if(r||Jt){const s=Jt?Jt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}function hf(){return!!(de||Re||Jt)}const gc={},mc=()=>Object.create(gc),_c=t=>Object.getPrototypeOf(t)===gc;function pf(t,e,n,r=!1){const s={},i=mc();t.propsDefaults=Object.create(null),vc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qa(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function gf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=J(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(ts(t.emitsOptions,p))continue;const m=e[p];if(c)if(X(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const S=He(p);s[S]=Bs(c,a,S,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{vc(t,e,s,i)&&(l=!0);let f;for(const d in a)(!e||!X(e,d)&&((f=nn(d))===d||!X(e,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=Bs(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!X(e,d))&&(delete i[d],l=!0)}l&&dt(t.attrs,"set","")}function vc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ln(c))continue;const l=e[c];let f;s&&X(s,f=He(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:ts(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=J(n),l=a||re;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Bs(s,c,d,l[d],t,!X(l,d))}}return o}function Bs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&B(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const f=nr(s);r=l[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===nn(n))&&(r=!0))}return r}const mf=new WeakMap;function yc(t,e,n=!1){const r=n?mf:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const f=d=>{c=!0;const[p,m]=yc(d,e,!0);he(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return ce(t)&&r.set(t,pn),pn;if(j(i))for(let f=0;f<i.length;f++){const d=He(i[f]);ao(d)&&(o[d]=re)}else if(i)for(const f in i){const d=He(f);if(ao(d)){const p=i[f],m=o[d]=j(p)||B(p)?{type:p}:he({},p),S=m.type;let P=!1,F=!0;if(j(S))for(let L=0;L<S.length;++L){const k=S[L],N=B(k)&&k.name;if(N==="Boolean"){P=!0;break}else N==="String"&&(F=!1)}else P=B(S)&&S.name==="Boolean";m[0]=P,m[1]=F,(P||X(m,"default"))&&a.push(d)}}const l=[o,a];return ce(t)&&r.set(t,l),l}function ao(t){return t[0]!=="$"&&!Ln(t)}const bc=t=>t[0]==="_"||t==="$stable",Ri=t=>j(t)?t.map(Ye):[Ye(t)],_f=(t,e,n)=>{if(e._n)return e;const r=wr((...s)=>Ri(e(...s)),n);return r._c=!1,r},Ec=(t,e,n)=>{const r=t._ctx;for(const s in t){if(bc(s))continue;const i=t[s];if(B(i))e[s]=_f(s,i,r);else if(i!=null){const o=Ri(i);e[s]=()=>o}}},wc=(t,e)=>{const n=Ri(e);t.slots.default=()=>n},Ic=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},vf=(t,e,n)=>{const r=t.slots=mc();if(t.vnode.shapeFlag&32){const s=e._;s?(Ic(r,e,n),n&&Oa(r,"_",s,!0)):Ec(e,r)}else e&&wc(t,e)},yf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Ic(s,e,n):(i=!e.$stable,Ec(e,s)),o=e}else e&&(wc(t,e),o={default:1});if(i)for(const a in s)!bc(a)&&o[a]==null&&delete s[a]},De=Df;function bf(t){return Ef(t)}function Ef(t,e){const n=ka();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:d,nextSibling:p,setScopeId:m=Qe,insertStaticContent:S}=t,P=(u,h,g,y=null,_=null,b=null,T=void 0,I=null,w=!!h.dynamicChildren)=>{if(u===h)return;u&&!Cn(u,h)&&(y=v(u),Te(u,_,b,!0),u=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:E,ref:M,shapeFlag:R}=h;switch(E){case ns:F(u,h,g,y);break;case Qt:L(u,h,g,y);break;case vs:u==null&&k(h,g,y,T);break;case at:Ce(u,h,g,y,_,b,T,I,w);break;default:R&1?V(u,h,g,y,_,b,T,I,w):R&6?Se(u,h,g,y,_,b,T,I,w):(R&64||R&128)&&E.process(u,h,g,y,_,b,T,I,w,D)}M!=null&&_&&Us(M,u&&u.ref,b,h||u,!h)},F=(u,h,g,y)=>{if(u==null)r(h.el=a(h.children),g,y);else{const _=h.el=u.el;h.children!==u.children&&l(_,h.children)}},L=(u,h,g,y)=>{u==null?r(h.el=c(h.children||""),g,y):h.el=u.el},k=(u,h,g,y)=>{[u.el,u.anchor]=S(u.children,h,g,y,u.el,u.anchor)},N=({el:u,anchor:h},g,y)=>{let _;for(;u&&u!==h;)_=p(u),r(u,g,y),u=_;r(h,g,y)},O=({el:u,anchor:h})=>{let g;for(;u&&u!==h;)g=p(u),s(u),u=g;s(h)},V=(u,h,g,y,_,b,T,I,w)=>{h.type==="svg"?T="svg":h.type==="math"&&(T="mathml"),u==null?le(h,g,y,_,b,T,I,w):W(u,h,_,b,T,I,w)},le=(u,h,g,y,_,b,T,I)=>{let w,E;const{props:M,shapeFlag:R,transition:x,dirs:$}=u;if(w=u.el=o(u.type,b,M&&M.is,M),R&8?f(w,u.children):R&16&&K(u.children,w,null,y,_,ms(u,b),T,I),$&&Vt(u,null,y,"created"),q(w,u,u.scopeId,T,y),M){for(const se in M)se!=="value"&&!Ln(se)&&i(w,se,null,M[se],b,y);"value"in M&&i(w,"value",null,M.value,b),(E=M.onVnodeBeforeMount)&&qe(E,y,u)}$&&Vt(u,null,y,"beforeMount");const z=wf(_,x);z&&x.beforeEnter(w),r(w,h,g),((E=M&&M.onVnodeMounted)||z||$)&&De(()=>{E&&qe(E,y,u),z&&x.enter(w),$&&Vt(u,null,y,"mounted")},_)},q=(u,h,g,y,_)=>{if(g&&m(u,g),y)for(let b=0;b<y.length;b++)m(u,y[b]);if(_){let b=_.subTree;if(h===b||Cc(b.type)&&(b.ssContent===h||b.ssFallback===h)){const T=_.vnode;q(u,T,T.scopeId,T.slotScopeIds,_.parent)}}},K=(u,h,g,y,_,b,T,I,w=0)=>{for(let E=w;E<u.length;E++){const M=u[E]=I?At(u[E]):Ye(u[E]);P(null,M,h,g,y,_,b,T,I)}},W=(u,h,g,y,_,b,T)=>{const I=h.el=u.el;let{patchFlag:w,dynamicChildren:E,dirs:M}=h;w|=u.patchFlag&16;const R=u.props||re,x=h.props||re;let $;if(g&&Ht(g,!1),($=x.onVnodeBeforeUpdate)&&qe($,g,h,u),M&&Vt(h,u,g,"beforeUpdate"),g&&Ht(g,!0),(R.innerHTML&&x.innerHTML==null||R.textContent&&x.textContent==null)&&f(I,""),E?ie(u.dynamicChildren,E,I,g,y,ms(h,_),b):T||Y(u,h,I,null,g,y,ms(h,_),b,!1),w>0){if(w&16)ve(I,R,x,g,_);else if(w&2&&R.class!==x.class&&i(I,"class",null,x.class,_),w&4&&i(I,"style",R.style,x.style,_),w&8){const z=h.dynamicProps;for(let se=0;se<z.length;se++){const ee=z[se],Oe=R[ee],pe=x[ee];(pe!==Oe||ee==="value")&&i(I,ee,Oe,pe,_,g)}}w&1&&u.children!==h.children&&f(I,h.children)}else!T&&E==null&&ve(I,R,x,g,_);(($=x.onVnodeUpdated)||M)&&De(()=>{$&&qe($,g,h,u),M&&Vt(h,u,g,"updated")},y)},ie=(u,h,g,y,_,b,T)=>{for(let I=0;I<h.length;I++){const w=u[I],E=h[I],M=w.el&&(w.type===at||!Cn(w,E)||w.shapeFlag&70)?d(w.el):g;P(w,E,M,null,y,_,b,T,!0)}},ve=(u,h,g,y,_)=>{if(h!==g){if(h!==re)for(const b in h)!Ln(b)&&!(b in g)&&i(u,b,h[b],null,_,y);for(const b in g){if(Ln(b))continue;const T=g[b],I=h[b];T!==I&&b!=="value"&&i(u,b,I,T,_,y)}"value"in g&&i(u,"value",h.value,g.value,_)}},Ce=(u,h,g,y,_,b,T,I,w)=>{const E=h.el=u?u.el:a(""),M=h.anchor=u?u.anchor:a("");let{patchFlag:R,dynamicChildren:x,slotScopeIds:$}=h;$&&(I=I?I.concat($):$),u==null?(r(E,g,y),r(M,g,y),K(h.children||[],g,M,_,b,T,I,w)):R>0&&R&64&&x&&u.dynamicChildren?(ie(u.dynamicChildren,x,g,_,b,T,I),(h.key!=null||_&&h===_.subTree)&&Sc(u,h,!0)):Y(u,h,g,M,_,b,T,I,w)},Se=(u,h,g,y,_,b,T,I,w)=>{h.slotScopeIds=I,u==null?h.shapeFlag&512?_.ctx.activate(h,g,y,T,w):Bt(h,g,y,_,b,T,w):yt(u,h,w)},Bt=(u,h,g,y,_,b,T)=>{const I=u.component=jf(u,y,_);if(lc(u)&&(I.ctx.renderer=D),Bf(I,!1,T),I.asyncDep){if(_&&_.registerDep(I,oe,T),!u.el){const w=I.subTree=Pe(Qt);L(null,w,h,g)}}else oe(I,u,h,g,_,b,T)},yt=(u,h,g)=>{const y=h.component=u.component;if(kf(u,h,g))if(y.asyncDep&&!y.asyncResolved){H(y,h,g);return}else y.next=h,y.update();else h.el=u.el,y.vnode=h},oe=(u,h,g,y,_,b,T)=>{const I=()=>{if(u.isMounted){let{next:R,bu:x,u:$,parent:z,vnode:se}=u;{const ke=Tc(u);if(ke){R&&(R.el=se.el,H(u,R,T)),ke.asyncDep.then(()=>{u.isUnmounted||I()});return}}let ee=R,Oe;Ht(u,!1),R?(R.el=se.el,H(u,R,T)):R=se,x&&Er(x),(Oe=R.props&&R.props.onVnodeBeforeUpdate)&&qe(Oe,z,R,se),Ht(u,!0);const pe=_s(u),Fe=u.subTree;u.subTree=pe,P(Fe,pe,d(Fe.el),v(Fe),u,_,b),R.el=pe.el,ee===null&&Nf(u,pe.el),$&&De($,_),(Oe=R.props&&R.props.onVnodeUpdated)&&De(()=>qe(Oe,z,R,se),_)}else{let R;const{el:x,props:$}=h,{bm:z,m:se,parent:ee,root:Oe,type:pe}=u,Fe=Mn(h);if(Ht(u,!1),z&&Er(z),!Fe&&(R=$&&$.onVnodeBeforeMount)&&qe(R,ee,h),Ht(u,!0),x&&ae){const ke=()=>{u.subTree=_s(u),ae(x,u.subTree,u,_,null)};Fe&&pe.__asyncHydrate?pe.__asyncHydrate(x,u,ke):ke()}else{Oe.ce&&Oe.ce._injectChildStyle(pe);const ke=u.subTree=_s(u);P(null,ke,g,y,u,_,b),h.el=ke.el}if(se&&De(se,_),!Fe&&(R=$&&$.onVnodeMounted)){const ke=h;De(()=>qe(R,ee,ke),_)}(h.shapeFlag&256||ee&&Mn(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&De(u.a,_),u.isMounted=!0,h=g=y=null}};u.scope.on();const w=u.effect=new $a(I);u.scope.off();const E=u.update=w.run.bind(w),M=u.job=w.runIfDirty.bind(w);M.i=u,M.id=u.uid,w.scheduler=()=>Si(M),Ht(u,!0),E()},H=(u,h,g)=>{h.component=u;const y=u.vnode.props;u.vnode=h,u.next=null,gf(u,h.props,y,g),yf(u,h.children,g),Ut(),eo(u),Ft()},Y=(u,h,g,y,_,b,T,I,w=!1)=>{const E=u&&u.children,M=u?u.shapeFlag:0,R=h.children,{patchFlag:x,shapeFlag:$}=h;if(x>0){if(x&128){bt(E,R,g,y,_,b,T,I,w);return}else if(x&256){rt(E,R,g,y,_,b,T,I,w);return}}$&8?(M&16&&Me(E,_,b),R!==E&&f(g,R)):M&16?$&16?bt(E,R,g,y,_,b,T,I,w):Me(E,_,b,!0):(M&8&&f(g,""),$&16&&K(R,g,y,_,b,T,I,w))},rt=(u,h,g,y,_,b,T,I,w)=>{u=u||pn,h=h||pn;const E=u.length,M=h.length,R=Math.min(E,M);let x;for(x=0;x<R;x++){const $=h[x]=w?At(h[x]):Ye(h[x]);P(u[x],$,g,null,_,b,T,I,w)}E>M?Me(u,_,b,!0,!1,R):K(h,g,y,_,b,T,I,w,R)},bt=(u,h,g,y,_,b,T,I,w)=>{let E=0;const M=h.length;let R=u.length-1,x=M-1;for(;E<=R&&E<=x;){const $=u[E],z=h[E]=w?At(h[E]):Ye(h[E]);if(Cn($,z))P($,z,g,null,_,b,T,I,w);else break;E++}for(;E<=R&&E<=x;){const $=u[R],z=h[x]=w?At(h[x]):Ye(h[x]);if(Cn($,z))P($,z,g,null,_,b,T,I,w);else break;R--,x--}if(E>R){if(E<=x){const $=x+1,z=$<M?h[$].el:y;for(;E<=x;)P(null,h[E]=w?At(h[E]):Ye(h[E]),g,z,_,b,T,I,w),E++}}else if(E>x)for(;E<=R;)Te(u[E],_,b,!0),E++;else{const $=E,z=E,se=new Map;for(E=z;E<=x;E++){const Ne=h[E]=w?At(h[E]):Ye(h[E]);Ne.key!=null&&se.set(Ne.key,E)}let ee,Oe=0;const pe=x-z+1;let Fe=!1,ke=0;const Rn=new Array(pe);for(E=0;E<pe;E++)Rn[E]=0;for(E=$;E<=R;E++){const Ne=u[E];if(Oe>=pe){Te(Ne,_,b,!0);continue}let Ge;if(Ne.key!=null)Ge=se.get(Ne.key);else for(ee=z;ee<=x;ee++)if(Rn[ee-z]===0&&Cn(Ne,h[ee])){Ge=ee;break}Ge===void 0?Te(Ne,_,b,!0):(Rn[Ge-z]=E+1,Ge>=ke?ke=Ge:Fe=!0,P(Ne,h[Ge],g,null,_,b,T,I,w),Oe++)}const Ki=Fe?If(Rn):pn;for(ee=Ki.length-1,E=pe-1;E>=0;E--){const Ne=z+E,Ge=h[Ne],zi=Ne+1<M?h[Ne+1].el:y;Rn[E]===0?P(null,Ge,g,zi,_,b,T,I,w):Fe&&(ee<0||E!==Ki[ee]?ze(Ge,g,zi,2):ee--)}}},ze=(u,h,g,y,_=null)=>{const{el:b,type:T,transition:I,children:w,shapeFlag:E}=u;if(E&6){ze(u.component.subTree,h,g,y);return}if(E&128){u.suspense.move(h,g,y);return}if(E&64){T.move(u,h,g,D);return}if(T===at){r(b,h,g);for(let R=0;R<w.length;R++)ze(w[R],h,g,y);r(u.anchor,h,g);return}if(T===vs){N(u,h,g);return}if(y!==2&&E&1&&I)if(y===0)I.beforeEnter(b),r(b,h,g),De(()=>I.enter(b),_);else{const{leave:R,delayLeave:x,afterLeave:$}=I,z=()=>r(b,h,g),se=()=>{R(b,()=>{z(),$&&$()})};x?x(b,z,se):se()}else r(b,h,g)},Te=(u,h,g,y=!1,_=!1)=>{const{type:b,props:T,ref:I,children:w,dynamicChildren:E,shapeFlag:M,patchFlag:R,dirs:x,cacheIndex:$}=u;if(R===-2&&(_=!1),I!=null&&Us(I,null,g,u,!0),$!=null&&(h.renderCache[$]=void 0),M&256){h.ctx.deactivate(u);return}const z=M&1&&x,se=!Mn(u);let ee;if(se&&(ee=T&&T.onVnodeBeforeUnmount)&&qe(ee,h,u),M&6)fr(u.component,g,y);else{if(M&128){u.suspense.unmount(g,y);return}z&&Vt(u,null,h,"beforeUnmount"),M&64?u.type.remove(u,h,g,D,y):E&&!E.hasOnce&&(b!==at||R>0&&R&64)?Me(E,h,g,!1,!0):(b===at&&R&384||!_&&M&16)&&Me(w,h,g),y&&sn(u)}(se&&(ee=T&&T.onVnodeUnmounted)||z)&&De(()=>{ee&&qe(ee,h,u),z&&Vt(u,null,h,"unmounted")},g)},sn=u=>{const{type:h,el:g,anchor:y,transition:_}=u;if(h===at){on(g,y);return}if(h===vs){O(u);return}const b=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:T,delayLeave:I}=_,w=()=>T(g,b);I?I(u.el,b,w):w()}else b()},on=(u,h)=>{let g;for(;u!==h;)g=p(u),s(u),u=g;s(h)},fr=(u,h,g)=>{const{bum:y,scope:_,job:b,subTree:T,um:I,m:w,a:E}=u;co(w),co(E),y&&Er(y),_.stop(),b&&(b.flags|=8,Te(T,u,h,g)),I&&De(I,h),De(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Me=(u,h,g,y=!1,_=!1,b=0)=>{for(let T=b;T<u.length;T++)Te(u[T],h,g,y,_)},v=u=>{if(u.shapeFlag&6)return v(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const h=p(u.anchor||u.el),g=h&&h[Vu];return g?p(g):h};let C=!1;const A=(u,h,g)=>{u==null?h._vnode&&Te(h._vnode,null,null,!0):P(h._vnode||null,u,h,null,null,null,g),h._vnode=u,C||(C=!0,eo(),sc(),C=!1)},D={p:P,um:Te,m:ze,r:sn,mt:Bt,mc:K,pc:Y,pbc:ie,n:v,o:t};let Z,ae;return{render:A,hydrate:Z,createApp:df(A,Z)}}function ms({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ht({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function wf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Sc(t,e,n=!1){const r=t.children,s=e.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=At(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Sc(o,a)),a.type===ns&&(a.el=o.el)}}function If(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Tc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tc(e)}function co(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Sf=Symbol.for("v-scx"),Tf=()=>Ze(Sf);function Fn(t,e,n){return Ac(t,e,n)}function Ac(t,e,n=re){const{immediate:r,deep:s,flush:i,once:o}=n,a=he({},n);let c;if(rs)if(i==="sync"){const p=Tf();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!e||r)a.once=!0;else return{stop:Qe,resume:Qe,pause:Qe};const l=de;a.call=(p,m,S)=>nt(p,l,m,S);let f=!1;i==="post"?a.scheduler=p=>{De(p,l&&l.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(p,m)=>{m?p():Si(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,l&&(p.id=l.uid,p.i=l))};const d=Fu(t,e,a);return c&&c.push(d),d}function Af(t,e,n){const r=this.proxy,s=fe(t)?t.includes(".")?Rc(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=nr(this),a=Ac(s,i.bind(r),n);return o(),a}function Rc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Rf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${He(e)}Modifiers`]||t[`${nn(e)}Modifiers`];function Pf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||re;let s=n;const i=e.startsWith("update:"),o=i&&Rf(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>fe(f)?f.trim():f)),o.number&&(s=n.map(Ds)));let a,c=r[a=us(e)]||r[a=us(He(e))];!c&&i&&(c=r[a=us(nn(e))]),c&&nt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nt(l,t,6,s)}}function Pc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const f=Pc(l,e,!0);f&&(a=!0,he(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ce(t)&&r.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):he(o,i),ce(t)&&r.set(t,o),o)}function ts(t,e){return!t||!qr(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,nn(e))||X(t,e))}function _s(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:f,props:d,data:p,setupState:m,ctx:S,inheritAttrs:P}=t,F=Lr(t);let L,k;try{if(n.shapeFlag&4){const O=s||r,V=O;L=Ye(l.call(V,O,f,d,m,p,S)),k=a}else{const O=e;L=Ye(O.length>1?O(d,{attrs:a,slots:o,emit:c}):O(d,null)),k=e.props?a:Cf(a)}}catch(O){$n.length=0,Zr(O,t,1),L=Pe(Qt)}let N=L;if(k&&P!==!1){const O=Object.keys(k),{shapeFlag:V}=N;O.length&&V&7&&(i&&O.some(oi)&&(k=Of(k,i)),N=bn(N,k,!1,!0))}return n.dirs&&(N=bn(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&Ti(N,n.transition),L=N,Lr(F),L}const Cf=t=>{let e;for(const n in t)(n==="class"||n==="style"||qr(n))&&((e||(e={}))[n]=t[n]);return e},Of=(t,e)=>{const n={};for(const r in t)(!oi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function kf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?lo(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!ts(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?lo(r,o,l):!0:!!o;return!1}function lo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ts(n,i))return!0}return!1}function Nf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Cc=t=>t.__isSuspense;function Df(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):Bu(t)}const at=Symbol.for("v-fgt"),ns=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),vs=Symbol.for("v-stc"),$n=[];let xe=null;function $e(t=!1){$n.push(xe=t?null:[])}function Lf(){$n.pop(),xe=$n[$n.length-1]||null}let qn=1;function uo(t){qn+=t,t<0&&xe&&(xe.hasOnce=!0)}function Oc(t){return t.dynamicChildren=qn>0?xe||pn:null,Lf(),qn>0&&xe&&xe.push(t),t}function zt(t,e,n,r,s,i){return Oc(me(t,e,n,r,s,i,!0))}function Sr(t,e,n,r,s){return Oc(Pe(t,e,n,r,s,!0))}function Vs(t){return t?t.__v_isVNode===!0:!1}function Cn(t,e){return t.type===e.type&&t.key===e.key}const kc=({key:t})=>t??null,Tr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?fe(t)||ue(t)||B(t)?{i:Re,r:t,k:e,f:!!n}:t:null);function me(t,e=null,n=null,r=0,s=null,i=t===at?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&kc(e),ref:e&&Tr(e),scopeId:oc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Re};return a?(Pi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),qn>0&&!o&&xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xe.push(c),c}const Pe=xf;function xf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===nf)&&(t=Qt),Vs(t)){const a=bn(t,e,!0);return n&&Pi(a,n),qn>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(t)]=a:xe.push(a)),a.patchFlag=-2,a}if(zf(t)&&(t=t.__vccOpts),e){e=Mf(e);let{class:a,style:c}=e;a&&!fe(a)&&(e.class=ui(a)),ce(c)&&(yi(c)&&!j(c)&&(c=he({},c)),e.style=li(c))}const o=fe(t)?1:Cc(t)?128:Hu(t)?64:ce(t)?4:B(t)?2:0;return me(t,e,n,r,s,o,i,!0)}function Mf(t){return t?yi(t)||_c(t)?he({},t):t:null}function bn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Uf(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&kc(l),ref:e&&e.ref?n&&i?j(i)?i.concat(Tr(e)):[i,Tr(e)]:Tr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bn(t.ssContent),ssFallback:t.ssFallback&&bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ti(f,c.clone(f)),f}function un(t=" ",e=0){return Pe(ns,null,t,e)}function vr(t="",e=!1){return e?($e(),Sr(Qt,null,t)):Pe(Qt,null,t)}function Ye(t){return t==null||typeof t=="boolean"?Pe(Qt):j(t)?Pe(at,null,t.slice()):typeof t=="object"?At(t):Pe(ns,null,String(t))}function At(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bn(t)}function Pi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Pi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!_c(e)?e._ctx=Re:s===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),r&64?(n=16,e=[un(e)]):n=8);t.children=e,t.shapeFlag|=n}function Uf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ui([e.class,r.class]));else if(s==="style")e.style=li([e.style,r.style]);else if(qr(s)){const i=e[s],o=r[s];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function qe(t,e,n,r=null){nt(t,e,7,[n,r])}const Ff=pc();let $f=0;function jf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ff,i={uid:$f++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ma(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yc(r,s),emitsOptions:Pc(r,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Pf.bind(null,i),t.ce&&t.ce(i),i}let de=null,Ur,Hs;{const t=ka(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ur=e("__VUE_INSTANCE_SETTERS__",n=>de=n),Hs=e("__VUE_SSR_SETTERS__",n=>rs=n)}const nr=t=>{const e=de;return Ur(t),t.scope.on(),()=>{t.scope.off(),Ur(e)}},fo=()=>{de&&de.scope.off(),Ur(null)};function Nc(t){return t.vnode.shapeFlag&4}let rs=!1;function Bf(t,e=!1,n=!1){e&&Hs(e);const{props:r,children:s}=t.vnode,i=Nc(t);pf(t,r,i,e),vf(t,s,n);const o=i?Vf(t,e):void 0;return e&&Hs(!1),o}function Vf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,sf);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Wf(t):null,i=nr(t);Ut();const o=tr(r,t,0,[t.props,s]);if(Ft(),i(),Ra(o)){if(Mn(t)||cc(t),o.then(fo,fo),e)return o.then(a=>{ho(t,a,e)}).catch(a=>{Zr(a,t,0)});t.asyncDep=o}else ho(t,o,e)}else Dc(t,e)}function ho(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=tc(e)),Dc(t,n)}let po;function Dc(t,e,n){const r=t.type;if(!t.render){if(!e&&po&&!r.render){const s=r.template||Ai(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=he(he({isCustomElement:i,delimiters:a},o),c);r.render=po(s,l)}}t.render=r.render||Qe}{const s=nr(t);Ut();try{of(t)}finally{Ft(),s()}}}const Hf={get(t,e){return _e(t,"get",""),t[e]}};function Wf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Hf),slots:t.slots,emit:t.emit,expose:e}}function ss(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(tc(bi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Un)return Un[n](t)},has(e,n){return n in e||n in Un}})):t.proxy}function Kf(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function zf(t){return B(t)&&"__vccOpts"in t}const Ue=(t,e)=>Mu(t,e,rs);function Lc(t,e,n){const r=arguments.length;return r===2?ce(e)&&!j(e)?Vs(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Vs(n)&&(n=[n]),Pe(t,e,n))}const Gf="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ws;const go=typeof window<"u"&&window.trustedTypes;if(go)try{Ws=go.createPolicy("vue",{createHTML:t=>t})}catch{}const xc=Ws?t=>Ws.createHTML(t):t=>t,qf="http://www.w3.org/2000/svg",Jf="http://www.w3.org/1998/Math/MathML",ot=typeof document<"u"?document:null,mo=ot&&ot.createElement("template"),Yf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ot.createElementNS(qf,t):e==="mathml"?ot.createElementNS(Jf,t):n?ot.createElement(t,{is:n}):ot.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ot.createTextNode(t),createComment:t=>ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mo.innerHTML=xc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=mo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Xf=Symbol("_vtc");function Qf(t,e,n){const r=t[Xf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const _o=Symbol("_vod"),Zf=Symbol("_vsh"),ed=Symbol(""),td=/(^|;)\s*display\s*:/;function nd(t,e,n){const r=t.style,s=fe(n);let i=!1;if(n&&!s){if(e)if(fe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ar(r,a,"")}else for(const o in e)n[o]==null&&Ar(r,o,"");for(const o in n)o==="display"&&(i=!0),Ar(r,o,n[o])}else if(s){if(e!==n){const o=r[ed];o&&(n+=";"+o),r.cssText=n,i=td.test(n)}}else e&&t.removeAttribute("style");_o in t&&(t[_o]=i?r.display:"",t[Zf]&&(r.display="none"))}const vo=/\s*!important$/;function Ar(t,e,n){if(j(n))n.forEach(r=>Ar(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=rd(t,e);vo.test(n)?t.setProperty(nn(r),n.replace(vo,""),"important"):t[r]=n}}const yo=["Webkit","Moz","ms"],ys={};function rd(t,e){const n=ys[e];if(n)return n;let r=He(e);if(r!=="filter"&&r in t)return ys[e]=r;r=Xr(r);for(let s=0;s<yo.length;s++){const i=yo[s]+r;if(i in t)return ys[e]=i}return e}const bo="http://www.w3.org/1999/xlink";function Eo(t,e,n,r,s,i=ou(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(bo,e.slice(6,e.length)):t.setAttributeNS(bo,e,n):n==null||i&&!Na(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Mt(n)?String(n):n)}function sd(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?xc(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Na(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function fn(t,e,n,r){t.addEventListener(e,n,r)}function id(t,e,n,r){t.removeEventListener(e,n,r)}const wo=Symbol("_vei");function od(t,e,n,r,s=null){const i=t[wo]||(t[wo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=ad(e);if(r){const l=i[e]=ud(r,s);fn(t,a,l,c)}else o&&(id(t,a,o,c),i[e]=void 0)}}const Io=/(?:Once|Passive|Capture)$/;function ad(t){let e;if(Io.test(t)){e={};let r;for(;r=t.match(Io);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nn(t.slice(2)),e]}let bs=0;const cd=Promise.resolve(),ld=()=>bs||(cd.then(()=>bs=0),bs=Date.now());function ud(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nt(fd(r,n.value),e,5,[r])};return n.value=t,n.attached=ld(),n}function fd(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const So=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,dd=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Qf(t,r,o):e==="style"?nd(t,n,r):qr(e)?oi(e)||od(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hd(t,e,r,o))?(sd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Eo(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Eo(t,e,r,o))};function hd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&So(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return So(e)&&fe(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!fe(n)))}const To=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>Er(e,n):e};function pd(t){t.target.composing=!0}function Ao(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Es=Symbol("_assign"),Fr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Es]=To(s);const i=r||s.props&&s.props.type==="number";fn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ds(a)),t[Es](a)}),n&&fn(t,"change",()=>{t.value=t.value.trim()}),e||(fn(t,"compositionstart",pd),fn(t,"compositionend",Ao),fn(t,"change",Ao))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Es]=To(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ds(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},gd=["ctrl","shift","alt","meta"],md={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>gd.some(n=>t[`${n}Key`]&&!e.includes(n))},Mc=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=md[e[o]];if(a&&a(s,e))return}return t(s,...i)})},_d=he({patchProp:dd},Yf);let Ro;function vd(){return Ro||(Ro=bf(_d))}const yd=(...t)=>{const e=vd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ed(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,bd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function bd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ed(t){return fe(t)?document.querySelector(t):t}var wd=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Uc;const is=t=>Uc=t,Fc=Symbol();function Ks(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var jn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(jn||(jn={}));function Id(){const t=Ua(!0),e=t.run(()=>Xt({}));let n=[],r=[];const s=bi({install(i){is(s),s._a=i,i.provide(Fc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!wd?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const $c=()=>{};function Po(t,e,n,r=$c){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Fa()&&au(s),s}function cn(t,...e){t.slice().forEach(n=>{n(...e)})}const Sd=t=>t(),Co=Symbol(),ws=Symbol();function zs(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ks(s)&&Ks(r)&&t.hasOwnProperty(n)&&!ue(r)&&!qt(r)?t[n]=zs(s,r):t[n]=r}return t}const Td=Symbol();function Ad(t){return!Ks(t)||!t.hasOwnProperty(Td)}const{assign:St}=Object;function Rd(t){return!!(ue(t)&&t.effect)}function Pd(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const f=Nu(n.state.value[t]);return St(f,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=bi(Ue(()=>{is(n);const m=n._s.get(t);return o[p].call(m,m)})),d),{}))}return c=jc(t,l,e,n,r,!0),c}function jc(t,e,n={},r,s,i){let o;const a=St({actions:{}},n),c={deep:!0};let l,f,d=[],p=[],m;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),Xt({});let P;function F(K){let W;l=f=!1,typeof K=="function"?(K(r.state.value[t]),W={type:jn.patchFunction,storeId:t,events:m}):(zs(r.state.value[t],K),W={type:jn.patchObject,payload:K,storeId:t,events:m});const ie=P=Symbol();Ii().then(()=>{P===ie&&(l=!0)}),f=!0,cn(d,W,r.state.value[t])}const L=i?function(){const{state:W}=n,ie=W?W():{};this.$patch(ve=>{St(ve,ie)})}:$c;function k(){o.stop(),d=[],p=[],r._s.delete(t)}const N=(K,W="")=>{if(Co in K)return K[ws]=W,K;const ie=function(){is(r);const ve=Array.from(arguments),Ce=[],Se=[];function Bt(H){Ce.push(H)}function yt(H){Se.push(H)}cn(p,{args:ve,name:ie[ws],store:V,after:Bt,onError:yt});let oe;try{oe=K.apply(this&&this.$id===t?this:V,ve)}catch(H){throw cn(Se,H),H}return oe instanceof Promise?oe.then(H=>(cn(Ce,H),H)).catch(H=>(cn(Se,H),Promise.reject(H))):(cn(Ce,oe),oe)};return ie[Co]=!0,ie[ws]=W,ie},O={_p:r,$id:t,$onAction:Po.bind(null,p),$patch:F,$reset:L,$subscribe(K,W={}){const ie=Po(d,K,W.detached,()=>ve()),ve=o.run(()=>Fn(()=>r.state.value[t],Ce=>{(W.flush==="sync"?f:l)&&K({storeId:t,type:jn.direct,events:m},Ce)},St({},c,W)));return ie},$dispose:k},V=er(O);r._s.set(t,V);const q=(r._a&&r._a.runWithContext||Sd)(()=>r._e.run(()=>(o=Ua()).run(()=>e({action:N}))));for(const K in q){const W=q[K];if(ue(W)&&!Rd(W)||qt(W))i||(S&&Ad(W)&&(ue(W)?W.value=S[K]:zs(W,S[K])),r.state.value[t][K]=W);else if(typeof W=="function"){const ie=N(W,K);q[K]=ie,a.actions[K]=W}}return St(V,q),St(J(V),q),Object.defineProperty(V,"$state",{get:()=>r.state.value[t],set:K=>{F(W=>{St(W,K)})}}),r._p.forEach(K=>{St(V,o.run(()=>K({store:V,app:r._a,pinia:r,options:a})))}),S&&i&&n.hydrate&&n.hydrate(V.$state,S),l=!0,f=!0,V}function Cd(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(a,c){const l=hf();return a=a||(l?Ze(Fc,null):null),a&&is(a),a=Uc,a._s.has(r)||(i?jc(r,e,s,a):Pd(r,s,a)),a._s.get(r)}return o.$id=r,o}var Oo={};/**
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
 */const Bc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Od=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[f],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Od(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new kd;const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const S=l<<6&192|d;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nd=function(t){const e=Bc(t);return Vc.encodeByteArray(e,!0)},$r=function(t){return Nd(t).replace(/\./g,"")},Hc=function(t){try{return Vc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ld=()=>Dd().__FIREBASE_DEFAULTS__,xd=()=>{if(typeof process>"u"||typeof Oo>"u")return;const t=Oo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Md=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hc(t[1]);return e&&JSON.parse(e)},Ci=()=>{try{return Ld()||xd()||Md()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wc=t=>{var e,n;return(n=(e=Ci())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ud=t=>{const e=Wc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kc=()=>{var t;return(t=Ci())===null||t===void 0?void 0:t.config},zc=t=>{var e;return(e=Ci())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Fd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $d(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$r(JSON.stringify(n)),$r(JSON.stringify(o)),""].join(".")}/**
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Bd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hd(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wd(){try{return typeof indexedDB=="object"}catch{return!1}}function Kd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const zd="FirebaseError";class _t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zd,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Gd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new _t(s,a,r)}}function Gd(t,e){return t.replace(qd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qd=/\{\$([^}]+)}/g;function Jd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ko(i)&&ko(o)){if(!jr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ko(t){return t!==null&&typeof t=="object"}/**
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
 */function sr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Nn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Dn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Yd(t,e){const n=new Xd(t,e);return n.subscribe.bind(n)}class Xd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Is),s.error===void 0&&(s.error=Is),s.complete===void 0&&(s.complete=Is);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Is(){}/**
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
 */function vt(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kt="[DEFAULT]";/**
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
 */class Zd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(th(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eh(t){return t===Kt?void 0:t}function th(t){return t.instantiationMode==="EAGER"}/**
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
 */class nh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const rh={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},sh=Q.INFO,ih={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},oh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ih[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oi{constructor(e){this.name=e,this._logLevel=sh,this._logHandler=oh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const ah=(t,e)=>e.some(n=>t instanceof n);let No,Do;function ch(){return No||(No=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lh(){return Do||(Do=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gc=new WeakMap,Gs=new WeakMap,qc=new WeakMap,Ss=new WeakMap,ki=new WeakMap;function uh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Nt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gc.set(n,t)}).catch(()=>{}),ki.set(e,t),e}function fh(t){if(Gs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Gs.set(t,e)}let qs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dh(t){qs=t(qs)}function hh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ts(this),e,...n);return qc.set(r,e.sort?e.sort():[e]),Nt(r)}:lh().includes(t)?function(...e){return t.apply(Ts(this),e),Nt(Gc.get(this))}:function(...e){return Nt(t.apply(Ts(this),e))}}function ph(t){return typeof t=="function"?hh(t):(t instanceof IDBTransaction&&fh(t),ah(t,ch())?new Proxy(t,qs):t)}function Nt(t){if(t instanceof IDBRequest)return uh(t);if(Ss.has(t))return Ss.get(t);const e=ph(t);return e!==t&&(Ss.set(t,e),ki.set(e,t)),e}const Ts=t=>ki.get(t);function gh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Nt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Nt(o.result),c.oldVersion,c.newVersion,Nt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const mh=["get","getKey","getAll","getAllKeys","count"],_h=["put","add","delete","clear"],As=new Map;function Lo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(As.get(e))return As.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=_h.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return As.set(e,i),i}dh(t=>({...t,get:(e,n,r)=>Lo(e,n)||t.get(e,n,r),has:(e,n)=>!!Lo(e,n)||t.has(e,n)}));/**
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
 */class vh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Js="@firebase/app",xo="0.10.10";/**
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
 */const pt=new Oi("@firebase/app"),bh="@firebase/app-compat",Eh="@firebase/analytics-compat",wh="@firebase/analytics",Ih="@firebase/app-check-compat",Sh="@firebase/app-check",Th="@firebase/auth",Ah="@firebase/auth-compat",Rh="@firebase/database",Ph="@firebase/database-compat",Ch="@firebase/functions",Oh="@firebase/functions-compat",kh="@firebase/installations",Nh="@firebase/installations-compat",Dh="@firebase/messaging",Lh="@firebase/messaging-compat",xh="@firebase/performance",Mh="@firebase/performance-compat",Uh="@firebase/remote-config",Fh="@firebase/remote-config-compat",$h="@firebase/storage",jh="@firebase/storage-compat",Bh="@firebase/firestore",Vh="@firebase/vertexai-preview",Hh="@firebase/firestore-compat",Wh="firebase",Kh="10.13.1";/**
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
 */const Ys="[DEFAULT]",zh={[Js]:"fire-core",[bh]:"fire-core-compat",[wh]:"fire-analytics",[Eh]:"fire-analytics-compat",[Sh]:"fire-app-check",[Ih]:"fire-app-check-compat",[Th]:"fire-auth",[Ah]:"fire-auth-compat",[Rh]:"fire-rtdb",[Ph]:"fire-rtdb-compat",[Ch]:"fire-fn",[Oh]:"fire-fn-compat",[kh]:"fire-iid",[Nh]:"fire-iid-compat",[Dh]:"fire-fcm",[Lh]:"fire-fcm-compat",[xh]:"fire-perf",[Mh]:"fire-perf-compat",[Uh]:"fire-rc",[Fh]:"fire-rc-compat",[$h]:"fire-gcs",[jh]:"fire-gcs-compat",[Bh]:"fire-fst",[Hh]:"fire-fst-compat",[Vh]:"fire-vertex","fire-js":"fire-js",[Wh]:"fire-js-all"};/**
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
 */const Br=new Map,Gh=new Map,Xs=new Map;function Mo(t,e){try{t.container.addComponent(e)}catch(n){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(Xs.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;Xs.set(e,t);for(const n of Br.values())Mo(n,t);for(const n of Gh.values())Mo(n,t);return!0}function Ni(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xe(t){return t.settings!==void 0}/**
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
 */const qh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dt=new rr("app","Firebase",qh);/**
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
 */class Jh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Tn=Kh;function Jc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ys,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Dt.create("bad-app-name",{appName:String(s)});if(n||(n=Kc()),!n)throw Dt.create("no-options");const i=Br.get(s);if(i){if(jr(n,i.options)&&jr(r,i.config))return i;throw Dt.create("duplicate-app",{appName:s})}const o=new nh(s);for(const c of Xs.values())o.addComponent(c);const a=new Jh(n,r,o);return Br.set(s,a),a}function Yc(t=Ys){const e=Br.get(t);if(!e&&t===Ys&&Kc())return Jc();if(!e)throw Dt.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let s=(r=zh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(a.join(" "));return}En(new Zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Yh="firebase-heartbeat-database",Xh=1,Jn="firebase-heartbeat-store";let Rs=null;function Xc(){return Rs||(Rs=gh(Yh,Xh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Jn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dt.create("idb-open",{originalErrorMessage:t.message})})),Rs}async function Qh(t){try{const n=(await Xc()).transaction(Jn),r=await n.objectStore(Jn).get(Qc(t));return await n.done,r}catch(e){if(e instanceof _t)pt.warn(e.message);else{const n=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pt.warn(n.message)}}}async function Uo(t,e){try{const r=(await Xc()).transaction(Jn,"readwrite");await r.objectStore(Jn).put(e,Qc(t)),await r.done}catch(n){if(n instanceof _t)pt.warn(n.message);else{const r=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pt.warn(r.message)}}}function Qc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Zh=1024,ep=30*24*60*60*1e3;class tp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fo();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ep}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fo(),{heartbeatsToSend:r,unsentEntries:s}=np(this._heartbeatsCache.heartbeats),i=$r(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return pt.warn(n),""}}}function Fo(){return new Date().toISOString().substring(0,10)}function np(t,e=Zh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$o(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$o(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wd()?Kd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $o(t){return $r(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sp(t){En(new Zt("platform-logger",e=>new vh(e),"PRIVATE")),En(new Zt("heartbeat",e=>new tp(e),"PRIVATE")),Lt(Js,xo,t),Lt(Js,xo,"esm2017"),Lt("fire-js","")}sp("");function Di(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Zc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ip=Zc,el=new rr("auth","Firebase",Zc());/**
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
 */const Vr=new Oi("@firebase/auth");function op(t,...e){Vr.logLevel<=Q.WARN&&Vr.warn(`Auth (${Tn}): ${t}`,...e)}function Rr(t,...e){Vr.logLevel<=Q.ERROR&&Vr.error(`Auth (${Tn}): ${t}`,...e)}/**
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
 */function We(t,...e){throw Li(t,...e)}function et(t,...e){return Li(t,...e)}function tl(t,e,n){const r=Object.assign(Object.assign({},ip()),{[e]:n});return new rr("auth","Firebase",r).create(e,{appName:t.name})}function ht(t){return tl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Li(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return el.create(t,...e)}function U(t,e,...n){if(!t)throw Li(e,...n)}function lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rr(e),new Error(e)}function gt(t,e){t||lt(e)}/**
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
 */function Qs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ap(){return jo()==="http:"||jo()==="https:"}function jo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ap()||Bd()||"connection"in navigator)?navigator.onLine:!0}function lp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ir{constructor(e,n){this.shortDelay=e,this.longDelay=n,gt(n>e,"Short delay should be less than long delay!"),this.isMobile=jd()||Vd()}get(){return cp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xi(t,e){gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class nl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const up={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fp=new ir(3e4,6e4);function $t(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jt(t,e,n,r,s={}){return rl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=sr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),nl.fetch()(sl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function rl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},up),e);try{const s=new hp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw yr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw yr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw yr(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw tl(t,f,l);We(t,f)}}catch(s){if(s instanceof _t)throw s;We(t,"network-request-failed",{message:String(s)})}}async function or(t,e,n,r,s={}){const i=await jt(t,e,n,r,s);return"mfaPendingCredential"in i&&We(t,"multi-factor-auth-required",{_serverResponse:i}),i}function sl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?xi(t.config,s):`${t.config.apiScheme}://${s}`}function dp(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),fp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=et(t,e,r);return s.customData._tokenResponse=n,s}function Bo(t){return t!==void 0&&t.enterprise!==void 0}class pp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return dp(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function gp(t,e){return jt(t,"GET","/v2/recaptchaConfig",$t(t,e))}/**
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
 */async function mp(t,e){return jt(t,"POST","/v1/accounts:delete",e)}async function il(t,e){return jt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _p(t,e=!1){const n=vt(t),r=await n.getIdToken(e),s=Mi(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bn(Ps(s.auth_time)),issuedAtTime:Bn(Ps(s.iat)),expirationTime:Bn(Ps(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ps(t){return Number(t)*1e3}function Mi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hc(n);return s?JSON.parse(s):(Rr("Failed to decode base64 JWT payload"),null)}catch(s){return Rr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vo(t){const e=Mi(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _t&&vp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class yp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Yn(t,il(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ol(i.providerUserInfo):[],a=Ep(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Zs(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function bp(t){const e=vt(t);await Hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ep(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ol(t){return t.map(e=>{var{providerId:n}=e,r=Di(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wp(t,e){const n=await rl(t,{},async()=>{const r=sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=sl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ip(t,e){return jt(t,"POST","/v2/accounts:revokeToken",$t(t,e))}/**
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
 */class _n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=Vo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await wp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new _n;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _n,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
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
 */function wt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ut{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Di(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Yn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _p(this,e)}reload(){return bp(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(ht(this.auth));const e=await this.getIdToken();return await Yn(this,mp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:N,emailVerified:O,isAnonymous:V,providerData:le,stsTokenManager:q}=n;U(N&&q,e,"internal-error");const K=_n.fromJSON(this.name,q);U(typeof N=="string",e,"internal-error"),wt(d,e.name),wt(p,e.name),U(typeof O=="boolean",e,"internal-error"),U(typeof V=="boolean",e,"internal-error"),wt(m,e.name),wt(S,e.name),wt(P,e.name),wt(F,e.name),wt(L,e.name),wt(k,e.name);const W=new ut({uid:N,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:V,photoURL:S,phoneNumber:m,tenantId:P,stsTokenManager:K,createdAt:L,lastLoginAt:k});return le&&Array.isArray(le)&&(W.providerData=le.map(ie=>Object.assign({},ie))),F&&(W._redirectEventId=F),W}static async _fromIdTokenResponse(e,n,r=!1){const s=new _n;s.updateFromServerResponse(n);const i=new ut({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ol(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new _n;a.updateFromIdToken(r);const c=new ut({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Zs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Ho=new Map;function ft(t){gt(t instanceof Function,"Expected a class definition");let e=Ho.get(t);return e?(gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ho.set(t,e),e)}/**
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
 */class al{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}al.type="NONE";const Wo=al;/**
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
 */function Pr(t,e,n){return`firebase:${t}:${e}:${n}`}class vn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Pr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Pr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vn(ft(Wo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ft(Wo);const o=Pr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const d=ut._fromJSON(e,f);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new vn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new vn(i,e,r))}}/**
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
 */function Ko(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hl(e))return"Blackberry";if(pl(e))return"Webos";if(ll(e))return"Safari";if((e.includes("chrome/")||ul(e))&&!e.includes("edge/"))return"Chrome";if(dl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cl(t=Ie()){return/firefox\//i.test(t)}function ll(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ul(t=Ie()){return/crios\//i.test(t)}function fl(t=Ie()){return/iemobile/i.test(t)}function dl(t=Ie()){return/android/i.test(t)}function hl(t=Ie()){return/blackberry/i.test(t)}function pl(t=Ie()){return/webos/i.test(t)}function Ui(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Sp(t=Ie()){var e;return Ui(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tp(){return Hd()&&document.documentMode===10}function gl(t=Ie()){return Ui(t)||dl(t)||pl(t)||hl(t)||/windows phone/i.test(t)||fl(t)}/**
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
 */function ml(t,e=[]){let n;switch(t){case"Browser":n=Ko(Ie());break;case"Worker":n=`${Ko(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tn}/${r}`}/**
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
 */class Ap{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Rp(t,e={}){return jt(t,"GET","/v2/passwordPolicy",$t(t,e))}/**
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
 */const Pp=6;class Cp{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Pp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Op{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zo(this),this.idTokenSubscription=new zo(this),this.beforeStateQueue=new Ap(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=el,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await vn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await il(this,{idToken:e}),r=await ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(ht(this));const n=e?vt(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Rp(this),n=new Cp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ip(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await vn.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ml(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&op(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rn(t){return vt(t)}class zo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yd(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let os={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kp(t){os=t}function _l(t){return os.loadJS(t)}function Np(){return os.recaptchaEnterpriseScript}function Dp(){return os.gapiScript}function Lp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xp="recaptcha-enterprise",Mp="NO_RECAPTCHA";class Up{constructor(e){this.type=xp,this.auth=rn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{gp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new pp(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Bo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Mp)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Bo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Np();c.length!==0&&(c+=a),_l(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Go(t,e,n,r=!1){const s=new Up(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ei(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Go(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Go(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Fp(t,e){const n=Ni(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(jr(i,e??{}))return s;We(s,"already-initialized")}return n.initialize({options:e})}function $p(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jp(t,e,n){const r=rn(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=vl(e),{host:o,port:a}=Bp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Vp()}function vl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bp(t){const e=vl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:qo(o)}}}function qo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Vp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,n){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function Hp(t,e){return jt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Wp(t,e){return or(t,"POST","/v1/accounts:signInWithPassword",$t(t,e))}/**
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
 */async function Kp(t,e){return or(t,"POST","/v1/accounts:signInWithEmailLink",$t(t,e))}async function zp(t,e){return or(t,"POST","/v1/accounts:signInWithEmailLink",$t(t,e))}/**
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
 */class Xn extends Fi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Xn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ei(e,n,"signInWithPassword",Wp);case"emailLink":return Kp(e,{email:this._email,oobCode:this._password});default:We(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ei(e,r,"signUpPassword",Hp);case"emailLink":return zp(e,{idToken:n,email:this._email,oobCode:this._password});default:We(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function yn(t,e){return or(t,"POST","/v1/accounts:signInWithIdp",$t(t,e))}/**
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
 */const Gp="http://localhost";class en extends Fi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):We("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Di(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new en(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yn(e,n)}buildRequest(){const e={requestUri:Gp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sr(n)}return e}}/**
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
 */function qp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jp(t){const e=Nn(Dn(t)).link,n=e?Nn(Dn(e)).deep_link_id:null,r=Nn(Dn(t)).deep_link_id;return(r?Nn(Dn(r)).link:null)||r||n||e||t}class $i{constructor(e){var n,r,s,i,o,a;const c=Nn(Dn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,d=qp((s=c.mode)!==null&&s!==void 0?s:null);U(l&&f&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Jp(e);try{return new $i(n)}catch{return null}}}/**
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
 */class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(e,n){return Xn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$i.parseLink(n);return U(r,"argument-error"),Xn._fromEmailAndCode(e,r.code,r.tenantId)}}An.PROVIDER_ID="password";An.EMAIL_PASSWORD_SIGN_IN_METHOD="password";An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ar extends yl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pt extends ar{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
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
 */class Ct extends ar{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return en._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
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
 */class Ot extends ar{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
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
 */class kt extends ar{constructor(){super("twitter.com")}static credential(e,n){return en._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
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
 */async function Yp(t,e){return or(t,"POST","/v1/accounts:signUp",$t(t,e))}/**
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
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ut._fromIdTokenResponse(e,r,s),o=Jo(r);return new tn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Jo(r);return new tn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Jo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wr extends _t{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Wr(e,n,r,s)}}function bl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wr._fromErrorAndOperation(t,i,e,r):i})}async function Xp(t,e,n=!1){const r=await Yn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tn._forOperation(t,"link",r)}/**
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
 */async function Qp(t,e,n=!1){const{auth:r}=t;if(Xe(r.app))return Promise.reject(ht(r));const s="reauthenticate";try{const i=await Yn(t,bl(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=Mi(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),tn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&We(r,"user-mismatch"),i}}/**
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
 */async function El(t,e,n=!1){if(Xe(t.app))return Promise.reject(ht(t));const r="signIn",s=await bl(t,r,e),i=await tn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Zp(t,e){return El(rn(t),e)}/**
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
 */async function wl(t){const e=rn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eg(t,e,n){if(Xe(t.app))return Promise.reject(ht(t));const r=rn(t),o=await ei(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yp).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&wl(t),c}),a=await tn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function tg(t,e,n){return Xe(t.app)?Promise.reject(ht(t)):Zp(vt(t),An.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wl(t),r})}function ng(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function rg(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function sg(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}function ig(t){return vt(t).signOut()}const Kr="__sak";/**
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
 */class Il{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kr,"1"),this.storage.removeItem(Kr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const og=1e3,ag=10;class Sl extends Il{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Tp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ag):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sl.type="LOCAL";const cg=Sl;/**
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
 */class Tl extends Il{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tl.type="SESSION";const Al=Tl;/**
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
 */function lg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class as{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new as(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await lg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}as.receivers=[];/**
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
 */function ji(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ug{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ji("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function fg(t){tt().location.href=t}/**
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
 */function Rl(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function dg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pg(){return Rl()?self:null}/**
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
 */const Pl="firebaseLocalStorageDb",gg=1,zr="firebaseLocalStorage",Cl="fbase_key";class cr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cs(t,e){return t.transaction([zr],e?"readwrite":"readonly").objectStore(zr)}function mg(){const t=indexedDB.deleteDatabase(Pl);return new cr(t).toPromise()}function ti(){const t=indexedDB.open(Pl,gg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zr,{keyPath:Cl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zr)?e(r):(r.close(),await mg(),e(await ti()))})})}async function Yo(t,e,n){const r=cs(t,!0).put({[Cl]:e,value:n});return new cr(r).toPromise()}async function _g(t,e){const n=cs(t,!1).get(e),r=await new cr(n).toPromise();return r===void 0?null:r.value}function Xo(t,e){const n=cs(t,!0).delete(e);return new cr(n).toPromise()}const vg=800,yg=3;class Ol{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ti(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=as._getInstance(pg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dg(),!this.activeServiceWorker)return;this.sender=new ug(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ti();return await Yo(e,Kr,"1"),await Xo(e,Kr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_g(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=cs(s,!1).getAll();return new cr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ol.type="LOCAL";const bg=Ol;new ir(3e4,6e4);/**
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
 */function Eg(t,e){return e?ft(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bi extends Fi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wg(t){return El(t.auth,new Bi(t),t.bypassAuthState)}function Ig(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Qp(n,new Bi(t),t.bypassAuthState)}async function Sg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Xp(n,new Bi(t),t.bypassAuthState)}/**
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
 */class kl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wg;case"linkViaPopup":case"linkViaRedirect":return Sg;case"reauthViaPopup":case"reauthViaRedirect":return Ig;default:We(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Tg=new ir(2e3,1e4);class hn extends kl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hn.currentPopupAction&&hn.currentPopupAction.cancel(),hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const e=ji();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Tg.get())};e()}}hn.currentPopupAction=null;/**
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
 */const Ag="pendingRedirect",Cr=new Map;class Rg extends kl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cr.get(this.auth._key());if(!e){try{const r=await Pg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cr.set(this.auth._key(),e)}return this.bypassAuthState||Cr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pg(t,e){const n=kg(e),r=Og(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Cg(t,e){Cr.set(t._key(),e)}function Og(t){return ft(t._redirectPersistence)}function kg(t){return Pr(Ag,t.config.apiKey,t.name)}async function Ng(t,e,n=!1){if(Xe(t.app))return Promise.reject(ht(t));const r=rn(t),s=Eg(r,e),o=await new Rg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Dg=10*60*1e3;class Lg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Nl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(et(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qo(e))}saveEventToCache(e){this.cachedEventUids.add(Qo(e)),this.lastProcessedEventTime=Date.now()}}function Qo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nl(t);default:return!1}}/**
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
 */async function Mg(t,e={}){return jt(t,"GET","/v1/projects",e)}/**
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
 */const Ug=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fg=/^https?/;async function $g(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mg(t);for(const n of e)try{if(jg(n))return}catch{}We(t,"unauthorized-domain")}function jg(t){const e=Qs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Fg.test(n))return!1;if(Ug.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Bg=new ir(3e4,6e4);function Zo(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vg(t){return new Promise((e,n)=>{var r,s,i;function o(){Zo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zo(),n(et(t,"network-request-failed"))},timeout:Bg.get()})}if(!((s=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const a=Lp("iframefcb");return tt()[a]=()=>{gapi.load?o():n(et(t,"network-request-failed"))},_l(`${Dp()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Or=null,e})}let Or=null;function Hg(t){return Or=Or||Vg(t),Or}/**
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
 */const Wg=new ir(5e3,15e3),Kg="__/auth/iframe",zg="emulator/auth/iframe",Gg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jg(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xi(e,zg):`https://${t.config.authDomain}/${Kg}`,r={apiKey:e.apiKey,appName:t.name,v:Tn},s=qg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${sr(r).slice(1)}`}async function Yg(t){const e=await Hg(t),n=tt().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Jg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),a=tt().setTimeout(()=>{i(o)},Wg.get());function c(){tt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Xg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qg=500,Zg=600,em="_blank",tm="http://localhost";class ea{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nm(t,e,n,r=Qg,s=Zg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Xg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ie().toLowerCase();n&&(a=ul(l)?em:n),cl(l)&&(e=e||tm,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[m,S])=>`${p}${m}=${S},`,"");if(Sp(l)&&a!=="_self")return rm(e||"",a),new ea(null);const d=window.open(e||"",a,f);U(d,t,"popup-blocked");try{d.focus()}catch{}return new ea(d)}function rm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sm="__/auth/handler",im="emulator/auth/handler",om=encodeURIComponent("fac");async function ta(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Tn,eventId:s};if(e instanceof yl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Jd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof ar){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),l=c?`#${om}=${encodeURIComponent(c)}`:"";return`${am(t)}?${sr(a).slice(1)}${l}`}function am({config:t}){return t.emulator?xi(t,im):`https://${t.authDomain}/${sm}`}/**
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
 */const Cs="webStorageSupport";class cm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Al,this._completeRedirectFn=Ng,this._overrideRedirectResult=Cg}async _openPopup(e,n,r,s){var i;gt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ta(e,n,r,Qs(),s);return nm(e,o,ji())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ta(e,n,r,Qs(),s);return fg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Yg(e),r=new Lg(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cs,{type:Cs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Cs];o!==void 0&&n(!!o),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$g(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gl()||ll()||Ui()}}const lm=cm;var na="@firebase/auth",ra="1.7.8";/**
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
 */class um{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dm(t){En(new Zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ml(t)},l=new Op(r,s,i,c);return $p(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new Zt("auth-internal",e=>{const n=rn(e.getProvider("auth").getImmediate());return(r=>new um(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(na,ra,fm(t)),Lt(na,ra,"esm2017")}/**
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
 */const hm=5*60,pm=zc("authIdTokenMaxAge")||hm;let sa=null;const gm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pm)return;const s=n==null?void 0:n.token;sa!==s&&(sa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mm(t=Yc()){const e=Ni(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Fp(t,{popupRedirectResolver:lm,persistence:[bg,cg,Al]}),r=zc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=gm(i.toString());rg(n,o,()=>o(n.currentUser)),ng(n,a=>o(a))}}const s=Wc("auth");return s&&jp(n,`http://${s}`),n}function _m(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kp({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=et("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",_m().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dm("Browser");var vm="firebase",ym="10.13.1";/**
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
 */Lt(vm,ym,"app");/**
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
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
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
 */let lr="10.13.1";/**
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
 */const wn=new Oi("@firebase/firestore");function bm(t,...e){if(wn.logLevel<=Q.DEBUG){const n=e.map(Vi);wn.debug(`Firestore (${lr}): ${t}`,...n)}}function Em(t,...e){if(wn.logLevel<=Q.ERROR){const n=e.map(Vi);wn.error(`Firestore (${lr}): ${t}`,...n)}}function wm(t,...e){if(wn.logLevel<=Q.WARN){const n=e.map(Vi);wn.warn(`Firestore (${lr}): ${t}`,...n)}}function Vi(t){if(typeof t=="string")return t;try{/**
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
 */function Dl(t="Unexpected state"){const e=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: `+t;throw Em(e),new Error(e)}function Ll(t,e){t||Dl()}/**
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
 */const je="invalid-argument",ia="failed-precondition";class Le extends _t{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xl{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Im{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ae.UNAUTHENTICATED))}shutdown(){}}class Sm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Tm{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Ll(typeof e.accessToken=="string"),new xl(e.accessToken,new Ae(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Am{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class Rm{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new Am(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cm{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Ll(typeof e.token=="string"),new Pm(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Gr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gr&&e.projectId===this.projectId&&e.database===this.database}}function Om(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Dl()}function km(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Le(je,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Om(t);throw new Le(je,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Nm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */var oa,G;/**
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
 */(G=oa||(oa={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const aa=new Map;class ca{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Le(je,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Le(je,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,o,a,c){if(o===!0&&c===!0)throw new Le(je,`${i} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Le(je,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Le(je,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Le(je,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ml{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ca({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Le(ia,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Le(ia,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ca(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Im;switch(r.type){case"firstParty":return new Rm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Le(je,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=aa.get(n);r&&(bm("ComponentProvider","Removing Datastore"),aa.delete(n),r.terminate())}(this),Promise.resolve()}}function Dm(t,e){const n=Yc(),r="(default)",s=Ni(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=Ud("firestore");i&&Lm(s,...i)}return s}function Lm(t,e,n,r={}){var s;const i=(t=km(t,Ml))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&wm("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ae.MOCK_USER;else{a=$d(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new Le(je,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ae(l)}t._authCredentials=new Sm(new xl(a,c))}}(function(){(function(n){lr=n})(`${Tn}_lite`),En(new Zt("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new Ml(new Tm(e.getProvider("auth-internal")),new Cm(e.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Le(je,'"projectId" not provided in firebase.initializeApp.');return new Gr(a.options.projectId,c)}(s,n),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),Lt("firestore-lite","4.7.1",""),Lt("firestore-lite","4.7.1","esm2017")})();const xm={apiKey:"AIzaSyCI9MC9qMkmjuV23QEVVfLmaw6Gywu82sY",authDomain:"vue3-project-mrs.firebaseapp.com",projectId:"vue3-project-mrs",storageBucket:"vue3-project-mrs.appspot.com",messagingSenderId:"587619424480",appId:"1:587619424480:web:9ea9ac223c778164fc5885"};Jc(xm);Dm();const br=mm();/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const dn=typeof document<"u";function Ul(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Mm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ul(t.default)}const te=Object.assign;function Os(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ke(s)?s.map(t):t(s)}return n}const Vn=()=>{},Ke=Array.isArray,Fl=/#/g,Um=/&/g,Fm=/\//g,$m=/=/g,jm=/\?/g,$l=/\+/g,Bm=/%5B/g,Vm=/%5D/g,jl=/%5E/g,Hm=/%60/g,Bl=/%7B/g,Wm=/%7C/g,Vl=/%7D/g,Km=/%20/g;function Hi(t){return encodeURI(""+t).replace(Wm,"|").replace(Bm,"[").replace(Vm,"]")}function zm(t){return Hi(t).replace(Bl,"{").replace(Vl,"}").replace(jl,"^")}function ni(t){return Hi(t).replace($l,"%2B").replace(Km,"+").replace(Fl,"%23").replace(Um,"%26").replace(Hm,"`").replace(Bl,"{").replace(Vl,"}").replace(jl,"^")}function Gm(t){return ni(t).replace($m,"%3D")}function qm(t){return Hi(t).replace(Fl,"%23").replace(jm,"%3F")}function Jm(t){return t==null?"":qm(t).replace(Fm,"%2F")}function Qn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ym=/\/$/,Xm=t=>t.replace(Ym,"");function ks(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=t_(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Qn(o)}}function Qm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function la(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Zm(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&In(e.matched[r],n.matched[s])&&Hl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function In(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Hl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!e_(t[n],e[n]))return!1;return!0}function e_(t,e){return Ke(t)?ua(t,e):Ke(e)?ua(e,t):t===e}function ua(t,e){return Ke(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function t_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Zn;(function(t){t.pop="pop",t.push="push"})(Zn||(Zn={}));var Hn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hn||(Hn={}));function n_(t){if(!t)if(dn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Xm(t)}const r_=/^[^#]+#/;function s_(t,e){return t.replace(r_,"#")+e}function i_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ls=()=>({left:window.scrollX,top:window.scrollY});function o_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=i_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function fa(t,e){return(history.state?history.state.position-e:-1)+t}const ri=new Map;function a_(t,e){ri.set(t,e)}function c_(t){const e=ri.get(t);return ri.delete(t),e}let l_=()=>location.protocol+"//"+location.host;function Wl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),la(c,"")}return la(n,t)+r+s}function u_(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Wl(t,location),S=n.value,P=e.value;let F=0;if(p){if(n.value=m,e.value=p,o&&o===S){o=null;return}F=P?p.position-P.position:0}else r(m);s.forEach(L=>{L(n.value,S,{delta:F,type:Zn.pop,direction:F?F>0?Hn.forward:Hn.back:Hn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(m),m}function f(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:ls()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function da(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ls():null}}function f_(t){const{history:e,location:n}=window,r={value:Wl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:l_()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[f?"replace":"assign"](p)}}function o(c,l){const f=te({},e.state,da(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=te({},s.value,e.state,{forward:c,scroll:ls()});i(f.current,f,!0);const d=te({},da(r.value,c,null),{position:f.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function d_(t){t=n_(t);const e=f_(t),n=u_(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=te({location:"",base:t,go:r,createHref:s_.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function h_(t){return typeof t=="string"||t&&typeof t=="object"}function Kl(t){return typeof t=="string"||typeof t=="symbol"}const zl=Symbol("");var ha;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ha||(ha={}));function Sn(t,e){return te(new Error,{type:t,[zl]:!0},e)}function it(t,e){return t instanceof Error&&zl in t&&(e==null||!!(t.type&e))}const pa="[^/]+?",p_={sensitive:!1,strict:!1,start:!0,end:!0},g_=/[.+*?^${}()[\]/\\]/g;function m_(t,e){const n=te({},p_,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(g_,"\\$&"),m+=40;else if(p.type===1){const{value:S,repeatable:P,optional:F,regexp:L}=p;i.push({name:S,repeatable:P,optional:F});const k=L||pa;if(k!==pa){m+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${S}" (${k}): `+O.message)}}let N=P?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(N=F&&l.length<2?`(?:/${N})`:"/"+N),F&&(N+="?"),s+=N,m+=20,F&&(m+=-8),P&&(m+=-20),k===".*"&&(m+=-50)}f.push(m)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const m=f[p]||"",S=i[p-1];d[S.name]=m&&S.repeatable?m.split("/"):m}return d}function c(l){let f="",d=!1;for(const p of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const m of p)if(m.type===0)f+=m.value;else if(m.type===1){const{value:S,repeatable:P,optional:F}=m,L=S in l?l[S]:"";if(Ke(L)&&!P)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const k=Ke(L)?L.join("/"):L;if(!k)if(F)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${S}"`);f+=k}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function __(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Gl(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=__(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ga(r))return 1;if(ga(s))return-1}return s.length-r.length}function ga(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const v_={type:0,value:""},y_=/[a-zA-Z0-9_]/;function b_(t){if(!t)return[[]];if(t==="/")return[[v_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:y_.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function E_(t,e,n){const r=m_(b_(t.path),n),s=te(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function w_(t,e){const n=[],r=new Map;e=ya({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,m){const S=!m,P=_a(d);P.aliasOf=m&&m.record;const F=ya(e,d),L=[P];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const V of O)L.push(_a(te({},P,{components:m?m.record.components:P.components,path:V,aliasOf:m?m.record:P})))}let k,N;for(const O of L){const{path:V}=O;if(p&&V[0]!=="/"){const le=p.record.path,q=le[le.length-1]==="/"?"":"/";O.path=p.record.path+(V&&q+V)}if(k=E_(O,p,F),m?m.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),S&&d.name&&!va(k)&&o(d.name)),ql(k)&&c(k),P.children){const le=P.children;for(let q=0;q<le.length;q++)i(le[q],k,m&&m.children[q])}m=m||k}return N?()=>{o(N)}:Vn}function o(d){if(Kl(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const p=T_(d,n);n.splice(p,0,d),d.record.name&&!va(d)&&r.set(d.record.name,d)}function l(d,p){let m,S={},P,F;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw Sn(1,{location:d});F=m.record.name,S=te(ma(p.params,m.keys.filter(N=>!N.optional).concat(m.parent?m.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),d.params&&ma(d.params,m.keys.map(N=>N.name))),P=m.stringify(S)}else if(d.path!=null)P=d.path,m=n.find(N=>N.re.test(P)),m&&(S=m.parse(P),F=m.record.name);else{if(m=p.name?r.get(p.name):n.find(N=>N.re.test(p.path)),!m)throw Sn(1,{location:d,currentLocation:p});F=m.record.name,S=te({},p.params,d.params),P=m.stringify(S)}const L=[];let k=m;for(;k;)L.unshift(k.record),k=k.parent;return{name:F,path:P,params:S,matched:L,meta:S_(L)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:s}}function ma(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function _a(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:I_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function I_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function va(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function S_(t){return t.reduce((e,n)=>te(e,n.meta),{})}function ya(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function T_(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Gl(t,e[i])<0?r=i:n=i+1}const s=A_(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function A_(t){let e=t;for(;e=e.parent;)if(ql(e)&&Gl(t,e)===0)return e}function ql({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function R_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace($l," "),o=i.indexOf("="),a=Qn(o<0?i:i.slice(0,o)),c=o<0?null:Qn(i.slice(o+1));if(a in e){let l=e[a];Ke(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ba(t){let e="";for(let n in t){const r=t[n];if(n=Gm(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ke(r)?r.map(i=>i&&ni(i)):[r&&ni(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function P_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ke(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const C_=Symbol(""),Ea=Symbol(""),Wi=Symbol(""),Jl=Symbol(""),si=Symbol("");function On(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(Sn(4,{from:n,to:e})):p instanceof Error?c(p):h_(p)?c(Sn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},f=i(()=>t.call(r&&r.instances[s],e,n,l));let d=Promise.resolve(f);t.length<3&&(d=d.then(l)),d.catch(p=>c(p))})}function Ns(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Ul(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Rt(f,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=Mm(f)?f.default:f;o.mods[a]=f,o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&Rt(m,n,r,o,a,s)()}))}}return i}function wa(t){const e=Ze(Wi),n=Ze(Jl),r=Ue(()=>{const c=ge(t.to);return e.resolve(c)}),s=Ue(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(In.bind(null,f));if(p>-1)return p;const m=Ia(c[l-2]);return l>1&&Ia(f)===m&&d[d.length-1].path!==m?d.findIndex(In.bind(null,c[l-2])):p}),i=Ue(()=>s.value>-1&&D_(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&Hl(n.params,r.value.params));function a(c={}){return N_(c)?e[ge(t.replace)?"replace":"push"](ge(t.to)).catch(Vn):Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const O_=ac({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wa,setup(t,{slots:e}){const n=er(wa(t)),{options:r}=Ze(Wi),s=Ue(()=>({[Sa(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Sa(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Lc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),k_=O_;function N_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function D_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ke(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ia(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sa=(t,e,n)=>t??e??n,L_=ac({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ze(si),s=Ue(()=>t.route||r.value),i=Ze(Ea,0),o=Ue(()=>{let l=ge(i);const{matched:f}=s.value;let d;for(;(d=f[l])&&!d.components;)l++;return l}),a=Ue(()=>s.value.matched[o.value]);Ir(Ea,Ue(()=>o.value+1)),Ir(C_,a),Ir(si,s);const c=Xt();return Fn(()=>[c.value,a.value,t.name],([l,f,d],[p,m,S])=>{f&&(f.instances[d]=l,m&&m!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),l&&f&&(!m||!In(f,m)||!p)&&(f.enterCallbacks[d]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,d=a.value,p=d&&d.components[f];if(!p)return Ta(n.default,{Component:p,route:l});const m=d.props[f],S=m?m===!0?l.params:typeof m=="function"?m(l):m:null,F=Lc(p,te({},S,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return Ta(n.default,{Component:F,route:l})||F}}});function Ta(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const x_=L_;function M_(t){const e=w_(t.routes,t),n=t.parseQuery||R_,r=t.stringifyQuery||ba,s=t.history,i=On(),o=On(),a=On(),c=Cu(It);let l=It;dn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Os.bind(null,v=>""+v),d=Os.bind(null,Jm),p=Os.bind(null,Qn);function m(v,C){let A,D;return Kl(v)?(A=e.getRecordMatcher(v),D=C):D=v,e.addRoute(D,A)}function S(v){const C=e.getRecordMatcher(v);C&&e.removeRoute(C)}function P(){return e.getRoutes().map(v=>v.record)}function F(v){return!!e.getRecordMatcher(v)}function L(v,C){if(C=te({},C||c.value),typeof v=="string"){const h=ks(n,v,C.path),g=e.resolve({path:h.path},C),y=s.createHref(h.fullPath);return te(h,g,{params:p(g.params),hash:Qn(h.hash),redirectedFrom:void 0,href:y})}let A;if(v.path!=null)A=te({},v,{path:ks(n,v.path,C.path).path});else{const h=te({},v.params);for(const g in h)h[g]==null&&delete h[g];A=te({},v,{params:d(h)}),C.params=d(C.params)}const D=e.resolve(A,C),Z=v.hash||"";D.params=f(p(D.params));const ae=Qm(r,te({},v,{hash:zm(Z),path:D.path})),u=s.createHref(ae);return te({fullPath:ae,hash:Z,query:r===ba?P_(v.query):v.query||{}},D,{redirectedFrom:void 0,href:u})}function k(v){return typeof v=="string"?ks(n,v,c.value.path):te({},v)}function N(v,C){if(l!==v)return Sn(8,{from:C,to:v})}function O(v){return q(v)}function V(v){return O(te(k(v),{replace:!0}))}function le(v){const C=v.matched[v.matched.length-1];if(C&&C.redirect){const{redirect:A}=C;let D=typeof A=="function"?A(v):A;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=k(D):{path:D},D.params={}),te({query:v.query,hash:v.hash,params:D.path!=null?{}:v.params},D)}}function q(v,C){const A=l=L(v),D=c.value,Z=v.state,ae=v.force,u=v.replace===!0,h=le(A);if(h)return q(te(k(h),{state:typeof h=="object"?te({},Z,h.state):Z,force:ae,replace:u}),C||A);const g=A;g.redirectedFrom=C;let y;return!ae&&Zm(r,D,A)&&(y=Sn(16,{to:g,from:D}),ze(D,D,!0,!1)),(y?Promise.resolve(y):ie(g,D)).catch(_=>it(_)?it(_,2)?_:bt(_):Y(_,g,D)).then(_=>{if(_){if(it(_,2))return q(te({replace:u},k(_.to),{state:typeof _.to=="object"?te({},Z,_.to.state):Z,force:ae}),C||g)}else _=Ce(g,D,!0,u,Z);return ve(g,D,_),_})}function K(v,C){const A=N(v,C);return A?Promise.reject(A):Promise.resolve()}function W(v){const C=on.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(v):v()}function ie(v,C){let A;const[D,Z,ae]=U_(v,C);A=Ns(D.reverse(),"beforeRouteLeave",v,C);for(const h of D)h.leaveGuards.forEach(g=>{A.push(Rt(g,v,C))});const u=K.bind(null,v,C);return A.push(u),Me(A).then(()=>{A=[];for(const h of i.list())A.push(Rt(h,v,C));return A.push(u),Me(A)}).then(()=>{A=Ns(Z,"beforeRouteUpdate",v,C);for(const h of Z)h.updateGuards.forEach(g=>{A.push(Rt(g,v,C))});return A.push(u),Me(A)}).then(()=>{A=[];for(const h of ae)if(h.beforeEnter)if(Ke(h.beforeEnter))for(const g of h.beforeEnter)A.push(Rt(g,v,C));else A.push(Rt(h.beforeEnter,v,C));return A.push(u),Me(A)}).then(()=>(v.matched.forEach(h=>h.enterCallbacks={}),A=Ns(ae,"beforeRouteEnter",v,C,W),A.push(u),Me(A))).then(()=>{A=[];for(const h of o.list())A.push(Rt(h,v,C));return A.push(u),Me(A)}).catch(h=>it(h,8)?h:Promise.reject(h))}function ve(v,C,A){a.list().forEach(D=>W(()=>D(v,C,A)))}function Ce(v,C,A,D,Z){const ae=N(v,C);if(ae)return ae;const u=C===It,h=dn?history.state:{};A&&(D||u?s.replace(v.fullPath,te({scroll:u&&h&&h.scroll},Z)):s.push(v.fullPath,Z)),c.value=v,ze(v,C,A,u),bt()}let Se;function Bt(){Se||(Se=s.listen((v,C,A)=>{if(!fr.listening)return;const D=L(v),Z=le(D);if(Z){q(te(Z,{replace:!0}),D).catch(Vn);return}l=D;const ae=c.value;dn&&a_(fa(ae.fullPath,A.delta),ls()),ie(D,ae).catch(u=>it(u,12)?u:it(u,2)?(q(u.to,D).then(h=>{it(h,20)&&!A.delta&&A.type===Zn.pop&&s.go(-1,!1)}).catch(Vn),Promise.reject()):(A.delta&&s.go(-A.delta,!1),Y(u,D,ae))).then(u=>{u=u||Ce(D,ae,!1),u&&(A.delta&&!it(u,8)?s.go(-A.delta,!1):A.type===Zn.pop&&it(u,20)&&s.go(-1,!1)),ve(D,ae,u)}).catch(Vn)}))}let yt=On(),oe=On(),H;function Y(v,C,A){bt(v);const D=oe.list();return D.length?D.forEach(Z=>Z(v,C,A)):console.error(v),Promise.reject(v)}function rt(){return H&&c.value!==It?Promise.resolve():new Promise((v,C)=>{yt.add([v,C])})}function bt(v){return H||(H=!v,Bt(),yt.list().forEach(([C,A])=>v?A(v):C()),yt.reset()),v}function ze(v,C,A,D){const{scrollBehavior:Z}=t;if(!dn||!Z)return Promise.resolve();const ae=!A&&c_(fa(v.fullPath,0))||(D||!A)&&history.state&&history.state.scroll||null;return Ii().then(()=>Z(v,C,ae)).then(u=>u&&o_(u)).catch(u=>Y(u,v,C))}const Te=v=>s.go(v);let sn;const on=new Set,fr={currentRoute:c,listening:!0,addRoute:m,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:P,resolve:L,options:t,push:O,replace:V,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:oe.add,isReady:rt,install(v){const C=this;v.component("RouterLink",k_),v.component("RouterView",x_),v.config.globalProperties.$router=C,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ge(c)}),dn&&!sn&&c.value===It&&(sn=!0,O(s.location).catch(Z=>{}));const A={};for(const Z in It)Object.defineProperty(A,Z,{get:()=>c.value[Z],enumerable:!0});v.provide(Wi,C),v.provide(Jl,Qa(A)),v.provide(si,c);const D=v.unmount;on.add(v),v.unmount=function(){on.delete(v),on.size<1&&(l=It,Se&&Se(),Se=null,c.value=It,sn=!1,H=!1),D()}}};function Me(v){return v.reduce((C,A)=>C.then(()=>W(A)),Promise.resolve())}return fr}function U_(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>In(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>In(l,c))||s.push(c))}return[n,r,s]}const F_={__name:"Home",setup(t){const e=ur();return(n,r)=>{var s;return $e(),zt("div",null,[r[0]||(r[0]=me("h1",null,"Home ",-1)),me("p",null,La((s=ge(e).userData)==null?void 0:s.email),1)])}}},$_=["disabled"],j_={__name:"Login",setup(t){const e=ur(),n=Xt(""),r=Xt(""),s=async()=>{if(!n.value||r.value.length<6)return alert("Campos vacios");await e.loginUser(n.value,r.value)};return(i,o)=>($e(),zt("div",null,[o[2]||(o[2]=me("h1",null,"Login",-1)),me("form",{onSubmit:Mc(s,["prevent"])},[xr(me("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a)},null,512),[[Fr,n.value,void 0,{trim:!0}]]),xr(me("input",{type:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a)},null,512),[[Fr,r.value,void 0,{trim:!0}]]),me("button",{type:"submit",disabled:ge(e).loadingUser},"Acceso",8,$_)],32)]))}},B_=["disabled"],V_={__name:"Register",setup(t){const e=ur(),n=Xt(""),r=Xt(""),s=async()=>{if(!n.value||r.value.length<6)return alert("Campos vacios");await e.registerUser(n.value,r.value)};return(i,o)=>($e(),zt("div",null,[o[2]||(o[2]=me("h1",null,"Register",-1)),me("form",{onSubmit:Mc(s,["prevent"])},[xr(me("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a)},null,512),[[Fr,n.value,void 0,{trim:!0}]]),xr(me("input",{type:"password",name:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a)},null,512),[[Fr,r.value,void 0,{trim:!0}]]),me("button",{type:"submit",disabled:ge(e).loadingUser},"Crear usuario",8,B_)],32)]))}},H_=async(t,e,n)=>{const r=ur();r.loadingSession=!0,await r.currentUser()?n():n("/login"),r.loadingSession=!1},W_=[{path:"/",component:F_,beforeEnter:[H_]},{path:"/login",component:j_},{path:"/register",component:V_}],kr=M_({routes:W_,history:d_()}),ur=Cd("userStore",{state:()=>({userData:null,loadingUser:!1,loadingSession:!1}),actions:{async registerUser(t,e){this.loadingUser=!0;try{const{user:n}=await eg(br,t,e);this.userData={email:n.email,uid:n.uid},kr.push("/")}catch(n){console.log(n)}finally{this.loadingUser=!1}},async loginUser(t,e){this.loadingUser=!0;try{const{user:n}=await tg(br,t,e);this.userData={email:n.email,uid:n.uid},kr.push("/")}catch(n){console.log(n)}finally{this.loadingUser=!1}},async logOutUser(){try{await ig(br),this.userData=null,kr.push("/login")}catch{console.log(err)}},currentUser(){return new Promise((t,e)=>{sg(br,n=>{n?this.userData={email:n.email,uid:n.uid}:this.userData=null,t(n)},n=>{console.log("error"),e(n)})})}}}),K_={key:0},z_={key:1},G_={__name:"App",setup(t){const e=ur();return(n,r)=>{const s=to("router-link"),i=to("router-view");return $e(),zt("div",null,[ge(e).loadingSession?($e(),zt("div",z_,r[6]||(r[6]=[me("p",null,"Loading...",-1)]))):($e(),zt("div",K_,[me("nav",null,[ge(e).userData?($e(),Sr(s,{key:0,to:"/"},{default:wr(()=>r[1]||(r[1]=[un("Home")])),_:1})):vr("",!0),r[4]||(r[4]=un(" | ")),ge(e).userData?vr("",!0):($e(),Sr(s,{key:1,to:"/login"},{default:wr(()=>r[2]||(r[2]=[un("Login")])),_:1})),r[5]||(r[5]=un(" | ")),ge(e).userData?vr("",!0):($e(),Sr(s,{key:2,to:"/register"},{default:wr(()=>r[3]||(r[3]=[un("Register")])),_:1})),ge(e).userData?($e(),zt("button",{key:3,onClick:r[0]||(r[0]=(...o)=>ge(e).logOutUser&&ge(e).logOutUser(...o))},"Logout")):vr("",!0)])])),Pe(i)])}}};yd(G_).use(kr).use(Id()).mount("#app");
