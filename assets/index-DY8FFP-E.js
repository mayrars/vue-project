(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function go(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ie={},Vn=[],mt=()=>{},ih=()=>!1,js=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_o=t=>t.startsWith("onUpdate:"),Te=Object.assign,yo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},oh=Object.prototype.hasOwnProperty,Z=(t,e)=>oh.call(t,e),$=Array.isArray,xn=t=>Bs(t)==="[object Map]",ac=t=>Bs(t)==="[object Set]",B=t=>typeof t=="function",_e=t=>typeof t=="string",nn=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",lc=t=>(ce(t)||B(t))&&B(t.then)&&B(t.catch),cc=Object.prototype.toString,Bs=t=>cc.call(t),ah=t=>Bs(t).slice(8,-1),uc=t=>Bs(t)==="[object Object]",vo=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,or=go(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lh=/-(\w)/g,rt=Hs(t=>t.replace(lh,(e,n)=>n?n.toUpperCase():"")),ch=/\B([A-Z])/g,In=Hs(t=>t.replace(ch,"-$1").toLowerCase()),qs=Hs(t=>t.charAt(0).toUpperCase()+t.slice(1)),fi=Hs(t=>t?`on${qs(t)}`:""),en=(t,e)=>!Object.is(t,e),us=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},fc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Mi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let pa;const hc=()=>pa||(pa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Eo(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=_e(r)?dh(r):Eo(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(_e(t)||ce(t))return t}const uh=/;(?![^(]*\))/g,fh=/:([^]+)/,hh=/\/\*[^]*?\*\//g;function dh(t){const e={};return t.replace(hh,"").split(uh).forEach(n=>{if(n){const r=n.split(fh);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function wo(t){let e="";if(_e(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=wo(t[n]);r&&(e+=r+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ph="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mh=go(ph);function dc(t){return!!t||t===""}const pc=t=>!!(t&&t.__v_isRef===!0),nr=t=>_e(t)?t:t==null?"":$(t)||ce(t)&&(t.toString===cc||!B(t.toString))?pc(t)?nr(t.value):JSON.stringify(t,mc,2):String(t),mc=(t,e)=>pc(e)?mc(t,e.value):xn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[hi(r,i)+" =>"]=s,n),{})}:ac(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>hi(n))}:nn(e)?hi(e):ce(e)&&!$(e)&&!uc(e)?String(e):e,hi=(t,e="")=>{var n;return nn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class gc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Oe,!e&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Oe;try{return Oe=this,e()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function _c(t){return new gc(t)}function yc(){return Oe}function gh(t,e=!1){Oe&&Oe.cleanups.push(t)}let se;const di=new WeakSet;class vc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,di.has(this)&&(di.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=ar,ar=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ma(this),wc(this);const e=se,n=nt;se=this,nt=!0;try{return this.fn()}finally{bc(this),se=e,nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)To(e);this.deps=this.depsTail=void 0,ma(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?di.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Li(this)&&this.run()}get dirty(){return Li(this)}}let Ec=0,ar;function bo(){Ec++}function Io(){if(--Ec>0)return;let t;for(;ar;){let e=ar;for(ar=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function wc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function bc(t){let e,n=t.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),To(r),_h(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function Li(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&Ic(e.dep.computed)||e.dep.version!==e.version)return!0;return!!t._dirty}function Ic(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Er))return;t.globalVersion=Er;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!Li(t)){t.flags&=-3;return}const n=se,r=nt;se=t,nt=!0;try{wc(t);const s=t.fn(t._value);(e.version===0||en(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{se=n,nt=r,bc(t),t.flags&=-3}}function To(t){const{dep:e,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)To(s)}}function _h(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nt=!0;const Tc=[];function rn(){Tc.push(nt),nt=!1}function sn(){const t=Tc.pop();nt=t===void 0?!0:t}function ma(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=se;se=void 0;try{e()}finally{se=n}}}let Er=0;class So{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!se||!nt||se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==se)n=this.activeLink={dep:this,sub:se,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},se.deps?(n.prevDep=se.depsTail,se.depsTail.nextDep=n,se.depsTail=n):se.deps=se.depsTail=n,se.flags&4&&Sc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=se.depsTail,n.nextDep=void 0,se.depsTail.nextDep=n,se.depsTail=n,se.deps===n&&(se.deps=r)}return n}trigger(e){this.version++,Er++,this.notify(e)}notify(e){bo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{Io()}}}function Sc(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Sc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const ws=new WeakMap,pn=Symbol(""),Fi=Symbol(""),wr=Symbol("");function Re(t,e,n){if(nt&&se){let r=ws.get(t);r||ws.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=new So),s.track()}}function Ct(t,e,n,r,s,i){const o=ws.get(t);if(!o){Er++;return}const a=l=>{l&&l.trigger()};if(bo(),e==="clear")o.forEach(a);else{const l=$(t),c=l&&vo(n);if(l&&n==="length"){const u=Number(r);o.forEach((h,p)=>{(p==="length"||p===wr||!nn(p)&&p>=u)&&a(h)})}else switch(n!==void 0&&a(o.get(n)),c&&a(o.get(wr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(pn)),xn(t)&&a(o.get(Fi)));break;case"delete":l||(a(o.get(pn)),xn(t)&&a(o.get(Fi)));break;case"set":xn(t)&&a(o.get(pn));break}}Io()}function yh(t,e){var n;return(n=ws.get(t))==null?void 0:n.get(e)}function Rn(t){const e=Q(t);return e===t?e:(Re(e,"iterate",wr),Xe(t)?e:e.map(Ae))}function Ws(t){return Re(t=Q(t),"iterate",wr),t}const vh={__proto__:null,[Symbol.iterator](){return pi(this,Symbol.iterator,Ae)},concat(...t){return Rn(this).concat(...t.map(e=>$(e)?Rn(e):e))},entries(){return pi(this,"entries",t=>(t[1]=Ae(t[1]),t))},every(t,e){return wt(this,"every",t,e,void 0,arguments)},filter(t,e){return wt(this,"filter",t,e,n=>n.map(Ae),arguments)},find(t,e){return wt(this,"find",t,e,Ae,arguments)},findIndex(t,e){return wt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return wt(this,"findLast",t,e,Ae,arguments)},findLastIndex(t,e){return wt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return wt(this,"forEach",t,e,void 0,arguments)},includes(...t){return mi(this,"includes",t)},indexOf(...t){return mi(this,"indexOf",t)},join(t){return Rn(this).join(t)},lastIndexOf(...t){return mi(this,"lastIndexOf",t)},map(t,e){return wt(this,"map",t,e,void 0,arguments)},pop(){return Zn(this,"pop")},push(...t){return Zn(this,"push",t)},reduce(t,...e){return ga(this,"reduce",t,e)},reduceRight(t,...e){return ga(this,"reduceRight",t,e)},shift(){return Zn(this,"shift")},some(t,e){return wt(this,"some",t,e,void 0,arguments)},splice(...t){return Zn(this,"splice",t)},toReversed(){return Rn(this).toReversed()},toSorted(t){return Rn(this).toSorted(t)},toSpliced(...t){return Rn(this).toSpliced(...t)},unshift(...t){return Zn(this,"unshift",t)},values(){return pi(this,"values",Ae)}};function pi(t,e,n){const r=Ws(t),s=r[e]();return r!==t&&!Xe(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Eh=Array.prototype;function wt(t,e,n,r,s,i){const o=Ws(t),a=o!==t&&!Xe(t),l=o[e];if(l!==Eh[e]){const h=l.apply(t,i);return a?Ae(h):h}let c=n;o!==t&&(a?c=function(h,p){return n.call(this,Ae(h),p,t)}:n.length>2&&(c=function(h,p){return n.call(this,h,p,t)}));const u=l.call(o,c,r);return a&&s?s(u):u}function ga(t,e,n,r){const s=Ws(t);let i=n;return s!==t&&(Xe(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Ae(a),l,t)}),s[e](i,...r)}function mi(t,e,n){const r=Q(t);Re(r,"iterate",wr);const s=r[e](...n);return(s===-1||s===!1)&&Co(n[0])?(n[0]=Q(n[0]),r[e](...n)):s}function Zn(t,e,n=[]){rn(),bo();const r=Q(t)[e].apply(t,n);return Io(),sn(),r}const wh=go("__proto__,__v_isRef,__isVue"),Ac=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(nn));function bh(t){nn(t)||(t=String(t));const e=Q(this);return Re(e,"has",t),e.hasOwnProperty(t)}class Rc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?xh:kc:i?Oc:Cc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=$(e);if(!s){let l;if(o&&(l=vh[n]))return l;if(n==="hasOwnProperty")return bh}const a=Reflect.get(e,n,pe(e)?e:r);return(nn(n)?Ac.has(n):wh(n))||(s||Re(e,"get",n),i)?a:pe(a)?o&&vo(n)?a:a.value:ce(a)?s?Dc(a):Ur(a):a}}class Pc extends Rc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=gn(i);if(!Xe(r)&&!gn(r)&&(i=Q(i),r=Q(r)),!$(e)&&pe(i)&&!pe(r))return l?!1:(i.value=r,!0)}const o=$(e)&&vo(n)?Number(n)<e.length:Z(e,n),a=Reflect.set(e,n,r,pe(e)?e:s);return e===Q(s)&&(o?en(r,i)&&Ct(e,"set",n,r):Ct(e,"add",n,r)),a}deleteProperty(e,n){const r=Z(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ct(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!nn(n)||!Ac.has(n))&&Re(e,"has",n),r}ownKeys(e){return Re(e,"iterate",$(e)?"length":pn),Reflect.ownKeys(e)}}class Ih extends Rc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Th=new Pc,Sh=new Ih,Ah=new Pc(!0);const Ao=t=>t,zs=t=>Reflect.getPrototypeOf(t);function Zr(t,e,n=!1,r=!1){t=t.__v_raw;const s=Q(t),i=Q(e);n||(en(e,i)&&Re(s,"get",e),Re(s,"get",i));const{has:o}=zs(s),a=r?Ao:n?ko:Ae;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function es(t,e=!1){const n=this.__v_raw,r=Q(n),s=Q(t);return e||(en(t,s)&&Re(r,"has",t),Re(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ts(t,e=!1){return t=t.__v_raw,!e&&Re(Q(t),"iterate",pn),Reflect.get(t,"size",t)}function _a(t,e=!1){!e&&!Xe(t)&&!gn(t)&&(t=Q(t));const n=Q(this);return zs(n).has.call(n,t)||(n.add(t),Ct(n,"add",t,t)),this}function ya(t,e,n=!1){!n&&!Xe(e)&&!gn(e)&&(e=Q(e));const r=Q(this),{has:s,get:i}=zs(r);let o=s.call(r,t);o||(t=Q(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?en(e,a)&&Ct(r,"set",t,e):Ct(r,"add",t,e),this}function va(t){const e=Q(this),{has:n,get:r}=zs(e);let s=n.call(e,t);s||(t=Q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ct(e,"delete",t,void 0),i}function Ea(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&Ct(t,"clear",void 0,void 0),n}function ns(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Q(o),l=e?Ao:t?ko:Ae;return!t&&Re(a,"iterate",pn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function rs(t,e,n){return function(...r){const s=this.__v_raw,i=Q(s),o=xn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Ao:e?ko:Ae;return!e&&Re(i,"iterate",l?Fi:pn),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function Ut(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Rh(){const t={get(i){return Zr(this,i)},get size(){return ts(this)},has:es,add:_a,set:ya,delete:va,clear:Ea,forEach:ns(!1,!1)},e={get(i){return Zr(this,i,!1,!0)},get size(){return ts(this)},has:es,add(i){return _a.call(this,i,!0)},set(i,o){return ya.call(this,i,o,!0)},delete:va,clear:Ea,forEach:ns(!1,!0)},n={get(i){return Zr(this,i,!0)},get size(){return ts(this,!0)},has(i){return es.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:ns(!0,!1)},r={get(i){return Zr(this,i,!0,!0)},get size(){return ts(this,!0)},has(i){return es.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:ns(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=rs(i,!1,!1),n[i]=rs(i,!0,!1),e[i]=rs(i,!1,!0),r[i]=rs(i,!0,!0)}),[t,n,e,r]}const[Ph,Ch,Oh,kh]=Rh();function Ro(t,e){const n=e?t?kh:Oh:t?Ch:Ph;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const Nh={get:Ro(!1,!1)},Dh={get:Ro(!1,!0)},Vh={get:Ro(!0,!1)};const Cc=new WeakMap,Oc=new WeakMap,kc=new WeakMap,xh=new WeakMap;function Mh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lh(t){return t.__v_skip||!Object.isExtensible(t)?0:Mh(ah(t))}function Ur(t){return gn(t)?t:Po(t,!1,Th,Nh,Cc)}function Nc(t){return Po(t,!1,Ah,Dh,Oc)}function Dc(t){return Po(t,!0,Sh,Vh,kc)}function Po(t,e,n,r,s){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Lh(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Yt(t){return gn(t)?Yt(t.__v_raw):!!(t&&t.__v_isReactive)}function gn(t){return!!(t&&t.__v_isReadonly)}function Xe(t){return!!(t&&t.__v_isShallow)}function Co(t){return t?!!t.__v_raw:!1}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function Oo(t){return!Z(t,"__v_skip")&&Object.isExtensible(t)&&fc(t,"__v_skip",!0),t}const Ae=t=>ce(t)?Ur(t):t,ko=t=>ce(t)?Dc(t):t;function pe(t){return t?t.__v_isRef===!0:!1}function tn(t){return Vc(t,!1)}function Fh(t){return Vc(t,!0)}function Vc(t,e){return pe(t)?t:new Uh(t,e)}class Uh{constructor(e,n){this.dep=new So,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Q(e),this._value=n?e:Ae(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xe(e)||gn(e);e=r?e:Q(e),en(e,n)&&(this._rawValue=e,this._value=r?e:Ae(e),this.dep.trigger())}}function ve(t){return pe(t)?t.value:t}const $h={get:(t,e,n)=>e==="__v_raw"?t:ve(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return pe(s)&&!pe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function xc(t){return Yt(t)?t:new Proxy(t,$h)}function jh(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=Hh(t,n);return e}class Bh{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return yh(Q(this._object),this._key)}}function Hh(t,e,n){const r=t[e];return pe(r)?r:new Bh(t,e,n)}class qh{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new So(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Er-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){this.flags|=16,se!==this&&this.dep.notify()}get value(){const e=this.dep.track();return Ic(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Wh(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new qh(r,s,n)}const ss={},bs=new WeakMap;let fn;function zh(t,e=!1,n=fn){if(n){let r=bs.get(n);r||bs.set(n,r=[]),r.push(t)}}function Kh(t,e,n=ie){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,c=O=>s?O:Xe(O)||s===!1||s===0?Tt(O,1):Tt(O);let u,h,p,m,b=!1,R=!1;if(pe(t)?(h=()=>t.value,b=Xe(t)):Yt(t)?(h=()=>c(t),b=!0):$(t)?(R=!0,b=t.some(O=>Yt(O)||Xe(O)),h=()=>t.map(O=>{if(pe(O))return O.value;if(Yt(O))return c(O);if(B(O))return l?l(O,2):O()})):B(t)?e?h=l?()=>l(t,2):t:h=()=>{if(p){rn();try{p()}finally{sn()}}const O=fn;fn=u;try{return l?l(t,3,[m]):t(m)}finally{fn=O}}:h=mt,e&&s){const O=h,q=s===!0?1/0:s;h=()=>Tt(O(),q)}const U=yc(),V=()=>{u.stop(),U&&yo(U.effects,u)};if(i)if(e){const O=e;e=(...q)=>{O(...q),V()}}else{const O=h;h=()=>{O(),V()}}let k=R?new Array(t.length).fill(ss):ss;const N=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const q=u.run();if(s||b||(R?q.some((he,Y)=>en(he,k[Y])):en(q,k))){p&&p();const he=fn;fn=u;try{const Y=[q,k===ss?void 0:R&&k[0]===ss?[]:k,m];l?l(e,3,Y):e(...Y),k=q}finally{fn=he}}}else u.run()};return a&&a(N),u=new vc(h),u.scheduler=o?()=>o(N,!1):N,m=O=>zh(O,!1,u),p=u.onStop=()=>{const O=bs.get(u);if(O){if(l)l(O,4);else for(const q of O)q();bs.delete(u)}},e?r?N(!0):k=u.run():o?o(N.bind(null,!0),!0):u.run(),V.pause=u.pause.bind(u),V.resume=u.resume.bind(u),V.stop=V,V}function Tt(t,e=1/0,n){if(e<=0||!ce(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,pe(t))Tt(t.value,e,n);else if($(t))for(let r=0;r<t.length;r++)Tt(t[r],e,n);else if(ac(t)||xn(t))t.forEach(r=>{Tt(r,e,n)});else if(uc(t)){for(const r in t)Tt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Tt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $r(t,e,n,r){try{return r?t(...r):t()}catch(s){Ks(s,e,n)}}function vt(t,e,n,r){if(B(t)){const s=$r(t,e,n,r);return s&&lc(s)&&s.catch(i=>{Ks(i,e,n)}),s}if($(t)){const s=[];for(let i=0;i<t.length;i++)s.push(vt(t[i],e,n,r));return s}}function Ks(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ie;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(i){rn(),$r(i,null,10,[t,l,c]),sn();return}}Gh(t,n,s,r,o)}function Gh(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let br=!1,Ui=!1;const Ne=[];let ut=0;const Mn=[];let Ht=null,Cn=0;const Mc=Promise.resolve();let No=null;function Do(t){const e=No||Mc;return t?e.then(this?t.bind(this):t):e}function Jh(t){let e=br?ut+1:0,n=Ne.length;for(;e<n;){const r=e+n>>>1,s=Ne[r],i=Ir(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Vo(t){if(!(t.flags&1)){const e=Ir(t),n=Ne[Ne.length-1];!n||!(t.flags&2)&&e>=Ir(n)?Ne.push(t):Ne.splice(Jh(e),0,t),t.flags|=1,Lc()}}function Lc(){!br&&!Ui&&(Ui=!0,No=Mc.then(Uc))}function Yh(t){$(t)?Mn.push(...t):Ht&&t.id===-1?Ht.splice(Cn+1,0,t):t.flags&1||(Mn.push(t),t.flags|=1),Lc()}function wa(t,e,n=br?ut+1:0){for(;n<Ne.length;n++){const r=Ne[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ne.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function Fc(t){if(Mn.length){const e=[...new Set(Mn)].sort((n,r)=>Ir(n)-Ir(r));if(Mn.length=0,Ht){Ht.push(...e);return}for(Ht=e,Cn=0;Cn<Ht.length;Cn++){const n=Ht[Cn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ht=null,Cn=0}}const Ir=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Uc(t){Ui=!1,br=!0;try{for(ut=0;ut<Ne.length;ut++){const e=Ne[ut];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$r(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;ut<Ne.length;ut++){const e=Ne[ut];e&&(e.flags&=-2)}ut=0,Ne.length=0,Fc(),br=!1,No=null,(Ne.length||Mn.length)&&Uc()}}let Ue=null,$c=null;function Is(t){const e=Ue;return Ue=t,$c=t&&t.type.__scopeId||null,e}function fs(t,e=Ue,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ka(-1);const i=Is(e);let o;try{o=t(...s)}finally{Is(i),r._d&&ka(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Tr(t,e){if(Ue===null)return t;const n=Xs(Ue),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=ie]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&Tt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function cn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(rn(),vt(l,n,8,[t.el,a,t,e]),sn())}}const Qh=Symbol("_vte"),Xh=t=>t.__isTeleport;function xo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function jc(t,e){return B(t)?Te({name:t.name},e,{setup:t}):t}function Bc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function $i(t,e,n,r,s=!1){if($(t)){t.forEach((b,R)=>$i(b,e&&($(e)?e[R]:e),n,r,s));return}if(lr(r)&&!s)return;const i=r.shapeFlag&4?Xs(r.component):r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,h=a.setupState,p=Q(h),m=h===ie?()=>!1:b=>Z(p,b);if(c!=null&&c!==l&&(_e(c)?(u[c]=null,m(c)&&(h[c]=null)):pe(c)&&(c.value=null)),B(l))$r(l,a,12,[o,u]);else{const b=_e(l),R=pe(l);if(b||R){const U=()=>{if(t.f){const V=b?m(l)?h[l]:u[l]:l.value;s?$(V)&&yo(V,i):$(V)?V.includes(i)||V.push(i):b?(u[l]=[i],m(l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else b?(u[l]=o,m(l)&&(h[l]=o)):R&&(l.value=o,t.k&&(u[t.k]=o))};o?(U.id=-1,ze(U,n)):U()}}}const lr=t=>!!t.type.__asyncLoader,Hc=t=>t.type.__isKeepAlive;function Zh(t,e){qc(t,"a",e)}function ed(t,e){qc(t,"da",e)}function qc(t,e,n=be){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Gs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Hc(s.parent.vnode)&&td(r,e,n,s),s=s.parent}}function td(t,e,n,r){const s=Gs(e,t,r,!0);Wc(()=>{yo(r[e],s)},n)}function Gs(t,e,n=be,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{rn();const a=jr(n),l=vt(e,n,t,o);return a(),sn(),l});return r?s.unshift(i):s.push(i),i}}const xt=t=>(e,n=be)=>{(!Qs||t==="sp")&&Gs(t,(...r)=>e(...r),n)},nd=xt("bm"),rd=xt("m"),sd=xt("bu"),id=xt("u"),od=xt("bum"),Wc=xt("um"),ad=xt("sp"),ld=xt("rtg"),cd=xt("rtc");function ud(t,e=be){Gs("ec",t,e)}const zc="components";function ba(t,e){return hd(zc,t,!0,e)||t}const fd=Symbol.for("v-ndc");function hd(t,e,n=!0,r=!1){const s=Ue||be;if(s){const i=s.type;if(t===zc){const a=ep(i,!1);if(a&&(a===e||a===rt(e)||a===qs(rt(e))))return i}const o=Ia(s[t]||i[t],e)||Ia(s.appContext[t],e);return!o&&r?i:o}}function Ia(t,e){return t&&(t[e]||t[rt(e)]||t[qs(rt(e))])}function dd(t,e,n,r){let s;const i=n,o=$(t);if(o||_e(t)){const a=o&&Yt(t);let l=!1;a&&(l=!Xe(t),t=Ws(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?Ae(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(ce(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,i)}}else s=[];return s}const ji=t=>t?hu(t)?Xs(t):ji(t.parent):null,cr=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ji(t.parent),$root:t=>ji(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Mo(t),$forceUpdate:t=>t.f||(t.f=()=>{Vo(t.update)}),$nextTick:t=>t.n||(t.n=Do.bind(t.proxy)),$watch:t=>xd.bind(t)}),gi=(t,e)=>t!==ie&&!t.__isScriptSetup&&Z(t,e),pd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(gi(r,e))return o[e]=1,r[e];if(s!==ie&&Z(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Z(c,e))return o[e]=3,i[e];if(n!==ie&&Z(n,e))return o[e]=4,n[e];Bi&&(o[e]=0)}}const u=cr[e];let h,p;if(u)return e==="$attrs"&&Re(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ie&&Z(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Z(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return gi(s,e)?(s[e]=n,!0):r!==ie&&Z(r,e)?(r[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ie&&Z(t,o)||gi(e,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(cr,o)||Z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ta(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Bi=!0;function md(t){const e=Mo(t),n=t.proxy,r=t.ctx;Bi=!1,e.beforeCreate&&Sa(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:b,activated:R,deactivated:U,beforeDestroy:V,beforeUnmount:k,destroyed:N,unmounted:O,render:q,renderTracked:he,renderTriggered:Y,errorCaptured:K,serverPrefetch:z,expose:ae,inheritAttrs:Pe,components:Be,directives:xe,filters:ln}=e;if(c&&gd(c,r,null),o)for(const W in o){const X=o[W];B(X)&&(r[W]=X.bind(n))}if(s){const W=s.call(n,n);ce(W)&&(t.data=Ur(W))}if(Bi=!0,i)for(const W in i){const X=i[W],Et=B(X)?X.bind(n,n):B(X.get)?X.get.bind(n,n):mt,Ft=!B(X)&&B(X.set)?X.set.bind(n):mt,at=Qe({get:Et,set:Ft});Object.defineProperty(r,W,{enumerable:!0,configurable:!0,get:()=>at.value,set:Me=>at.value=Me})}if(a)for(const W in a)Kc(a[W],r,n,W);if(l){const W=B(l)?l.call(n):l;Reflect.ownKeys(W).forEach(X=>{hs(X,W[X])})}u&&Sa(u,t,"c");function le(W,X){$(X)?X.forEach(Et=>W(Et.bind(n))):X&&W(X.bind(n))}if(le(nd,h),le(rd,p),le(sd,m),le(id,b),le(Zh,R),le(ed,U),le(ud,K),le(cd,he),le(ld,Y),le(od,k),le(Wc,O),le(ad,z),$(ae))if(ae.length){const W=t.exposed||(t.exposed={});ae.forEach(X=>{Object.defineProperty(W,X,{get:()=>n[X],set:Et=>n[X]=Et})})}else t.exposed||(t.exposed={});q&&t.render===mt&&(t.render=q),Pe!=null&&(t.inheritAttrs=Pe),Be&&(t.components=Be),xe&&(t.directives=xe),z&&Bc(t)}function gd(t,e,n=mt){$(t)&&(t=Hi(t));for(const r in t){const s=t[r];let i;ce(s)?"default"in s?i=gt(s.from||r,s.default,!0):i=gt(s.from||r):i=gt(s),pe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Sa(t,e,n){vt($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Kc(t,e,n,r){let s=r.includes(".")?au(n,r):()=>n[r];if(_e(t)){const i=e[t];B(i)&&ur(s,i)}else if(B(t))ur(s,t.bind(n));else if(ce(t))if($(t))t.forEach(i=>Kc(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&ur(s,i,t)}}function Mo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Ts(l,c,o,!0)),Ts(l,e,o)),ce(e)&&i.set(e,l),l}function Ts(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ts(t,i,n,!0),s&&s.forEach(o=>Ts(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=_d[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const _d={data:Aa,props:Ra,emits:Ra,methods:rr,computed:rr,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:rr,directives:rr,watch:vd,provide:Aa,inject:yd};function Aa(t,e){return e?t?function(){return Te(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function yd(t,e){return rr(Hi(t),Hi(e))}function Hi(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ce(t,e){return t?[...new Set([].concat(t,e))]:e}function rr(t,e){return t?Te(Object.create(null),t,e):e}function Ra(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:Te(Object.create(null),Ta(t),Ta(e??{})):e}function vd(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const r in e)n[r]=Ce(t[r],e[r]);return n}function Gc(){return{app:null,config:{isNativeTag:ih,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ed=0;function wd(t,e){return function(r,s=null){B(r)||(r=Te({},r)),s!=null&&!ce(s)&&(s=null);const i=Gc(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:Ed++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:np,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&B(u.install)?(o.add(u),u.install(c,...h)):B(u)&&(o.add(u),u(c,...h))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,h){return h?(i.components[u]=h,c):i.components[u]},directive(u,h){return h?(i.directives[u]=h,c):i.directives[u]},mount(u,h,p){if(!l){const m=c._ceVNode||$e(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(m,u):t(m,u,p),l=!0,c._container=u,u.__vue_app__=c,Xs(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(vt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return i.provides[u]=h,c},runWithContext(u){const h=mn;mn=c;try{return u()}finally{mn=h}}};return c}}let mn=null;function hs(t,e){if(be){let n=be.provides;const r=be.parent&&be.parent.provides;r===n&&(n=be.provides=Object.create(r)),n[t]=e}}function gt(t,e,n=!1){const r=be||Ue;if(r||mn){const s=mn?mn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}function bd(){return!!(be||Ue||mn)}const Jc={},Yc=()=>Object.create(Jc),Qc=t=>Object.getPrototypeOf(t)===Jc;function Id(t,e,n,r=!1){const s={},i=Yc();t.propsDefaults=Object.create(null),Xc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Nc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Td(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Q(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Js(t.emitsOptions,p))continue;const m=e[p];if(l)if(Z(i,p))m!==i[p]&&(i[p]=m,c=!0);else{const b=rt(p);s[b]=qi(l,a,b,m,t,!1)}else m!==i[p]&&(i[p]=m,c=!0)}}}else{Xc(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!Z(e,h)&&((u=In(h))===h||!Z(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=qi(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Z(e,h))&&(delete i[h],c=!0)}c&&Ct(t.attrs,"set","")}function Xc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(or(l))continue;const c=e[l];let u;s&&Z(s,u=rt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Js(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Q(n),c=a||ie;for(let u=0;u<i.length;u++){const h=i[u];n[h]=qi(s,l,h,c[h],t,!Z(c,h))}}return o}function qi(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&B(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=jr(s);r=c[n]=l.call(null,e),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===In(n))&&(r=!0))}return r}const Sd=new WeakMap;function Zc(t,e,n=!1){const r=n?Sd:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!B(t)){const u=h=>{l=!0;const[p,m]=Zc(h,e,!0);Te(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ce(t)&&r.set(t,Vn),Vn;if($(i))for(let u=0;u<i.length;u++){const h=rt(i[u]);Pa(h)&&(o[h]=ie)}else if(i)for(const u in i){const h=rt(u);if(Pa(h)){const p=i[u],m=o[h]=$(p)||B(p)?{type:p}:Te({},p),b=m.type;let R=!1,U=!0;if($(b))for(let V=0;V<b.length;++V){const k=b[V],N=B(k)&&k.name;if(N==="Boolean"){R=!0;break}else N==="String"&&(U=!1)}else R=B(b)&&b.name==="Boolean";m[0]=R,m[1]=U,(R||Z(m,"default"))&&a.push(h)}}const c=[o,a];return ce(t)&&r.set(t,c),c}function Pa(t){return t[0]!=="$"&&!or(t)}const eu=t=>t[0]==="_"||t==="$stable",Lo=t=>$(t)?t.map(ht):[ht(t)],Ad=(t,e,n)=>{if(e._n)return e;const r=fs((...s)=>Lo(e(...s)),n);return r._c=!1,r},tu=(t,e,n)=>{const r=t._ctx;for(const s in t){if(eu(s))continue;const i=t[s];if(B(i))e[s]=Ad(s,i,r);else if(i!=null){const o=Lo(i);e[s]=()=>o}}},nu=(t,e)=>{const n=Lo(e);t.slots.default=()=>n},ru=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Rd=(t,e,n)=>{const r=t.slots=Yc();if(t.vnode.shapeFlag&32){const s=e._;s?(ru(r,e,n),n&&fc(r,"_",s,!0)):tu(e,r)}else e&&nu(t,e)},Pd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:ru(s,e,n):(i=!e.$stable,tu(e,s)),o=e}else e&&(nu(t,e),o={default:1});if(i)for(const a in s)!eu(a)&&o[a]==null&&delete s[a]},ze=Bd;function Cd(t){return Od(t)}function Od(t,e){const n=hc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=mt,insertStaticContent:b}=t,R=(f,d,g,v=null,_=null,E=null,S=void 0,T=null,I=!!d.dynamicChildren)=>{if(f===d)return;f&&!er(f,d)&&(v=y(f),Me(f,_,E,!0),f=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:w,ref:L,shapeFlag:P}=d;switch(w){case Ys:U(f,d,g,v);break;case _n:V(f,d,g,v);break;case vi:f==null&&k(d,g,v,S);break;case ft:Be(f,d,g,v,_,E,S,T,I);break;default:P&1?q(f,d,g,v,_,E,S,T,I):P&6?xe(f,d,g,v,_,E,S,T,I):(P&64||P&128)&&w.process(f,d,g,v,_,E,S,T,I,D)}L!=null&&_&&$i(L,f&&f.ref,E,d||f,!d)},U=(f,d,g,v)=>{if(f==null)r(d.el=a(d.children),g,v);else{const _=d.el=f.el;d.children!==f.children&&c(_,d.children)}},V=(f,d,g,v)=>{f==null?r(d.el=l(d.children||""),g,v):d.el=f.el},k=(f,d,g,v)=>{[f.el,f.anchor]=b(f.children,d,g,v,f.el,f.anchor)},N=({el:f,anchor:d},g,v)=>{let _;for(;f&&f!==d;)_=p(f),r(f,g,v),f=_;r(d,g,v)},O=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=p(f),s(f),f=g;s(d)},q=(f,d,g,v,_,E,S,T,I)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),f==null?he(d,g,v,_,E,S,T,I):z(f,d,_,E,S,T,I)},he=(f,d,g,v,_,E,S,T)=>{let I,w;const{props:L,shapeFlag:P,transition:x,dirs:j}=f;if(I=f.el=o(f.type,E,L&&L.is,L),P&8?u(I,f.children):P&16&&K(f.children,I,null,v,_,_i(f,E),S,T),j&&cn(f,null,v,"created"),Y(I,f,f.scopeId,S,v),L){for(const oe in L)oe!=="value"&&!or(oe)&&i(I,oe,null,L[oe],E,v);"value"in L&&i(I,"value",null,L.value,E),(w=L.onVnodeBeforeMount)&&ct(w,v,f)}j&&cn(f,null,v,"beforeMount");const G=kd(_,x);G&&x.beforeEnter(I),r(I,d,g),((w=L&&L.onVnodeMounted)||G||j)&&ze(()=>{w&&ct(w,v,f),G&&x.enter(I),j&&cn(f,null,v,"mounted")},_)},Y=(f,d,g,v,_)=>{if(g&&m(f,g),v)for(let E=0;E<v.length;E++)m(f,v[E]);if(_){let E=_.subTree;if(d===E||cu(E.type)&&(E.ssContent===d||E.ssFallback===d)){const S=_.vnode;Y(f,S,S.scopeId,S.slotScopeIds,_.parent)}}},K=(f,d,g,v,_,E,S,T,I=0)=>{for(let w=I;w<f.length;w++){const L=f[w]=T?qt(f[w]):ht(f[w]);R(null,L,d,g,v,_,E,S,T)}},z=(f,d,g,v,_,E,S)=>{const T=d.el=f.el;let{patchFlag:I,dynamicChildren:w,dirs:L}=d;I|=f.patchFlag&16;const P=f.props||ie,x=d.props||ie;let j;if(g&&un(g,!1),(j=x.onVnodeBeforeUpdate)&&ct(j,g,d,f),L&&cn(d,f,g,"beforeUpdate"),g&&un(g,!0),(P.innerHTML&&x.innerHTML==null||P.textContent&&x.textContent==null)&&u(T,""),w?ae(f.dynamicChildren,w,T,g,v,_i(d,_),E):S||X(f,d,T,null,g,v,_i(d,_),E,!1),I>0){if(I&16)Pe(T,P,x,g,_);else if(I&2&&P.class!==x.class&&i(T,"class",null,x.class,_),I&4&&i(T,"style",P.style,x.style,_),I&8){const G=d.dynamicProps;for(let oe=0;oe<G.length;oe++){const ne=G[oe],He=P[ne],Se=x[ne];(Se!==He||ne==="value")&&i(T,ne,He,Se,_,g)}}I&1&&f.children!==d.children&&u(T,d.children)}else!S&&w==null&&Pe(T,P,x,g,_);((j=x.onVnodeUpdated)||L)&&ze(()=>{j&&ct(j,g,d,f),L&&cn(d,f,g,"updated")},v)},ae=(f,d,g,v,_,E,S)=>{for(let T=0;T<d.length;T++){const I=f[T],w=d[T],L=I.el&&(I.type===ft||!er(I,w)||I.shapeFlag&70)?h(I.el):g;R(I,w,L,null,v,_,E,S,!0)}},Pe=(f,d,g,v,_)=>{if(d!==g){if(d!==ie)for(const E in d)!or(E)&&!(E in g)&&i(f,E,d[E],null,_,v);for(const E in g){if(or(E))continue;const S=g[E],T=d[E];S!==T&&E!=="value"&&i(f,E,T,S,_,v)}"value"in g&&i(f,"value",d.value,g.value,_)}},Be=(f,d,g,v,_,E,S,T,I)=>{const w=d.el=f?f.el:a(""),L=d.anchor=f?f.anchor:a("");let{patchFlag:P,dynamicChildren:x,slotScopeIds:j}=d;j&&(T=T?T.concat(j):j),f==null?(r(w,g,v),r(L,g,v),K(d.children||[],g,L,_,E,S,T,I)):P>0&&P&64&&x&&f.dynamicChildren?(ae(f.dynamicChildren,x,g,_,E,S,T),(d.key!=null||_&&d===_.subTree)&&su(f,d,!0)):X(f,d,g,L,_,E,S,T,I)},xe=(f,d,g,v,_,E,S,T,I)=>{d.slotScopeIds=T,f==null?d.shapeFlag&512?_.ctx.activate(d,g,v,S,I):ln(d,g,v,_,E,S,I):Lt(f,d,I)},ln=(f,d,g,v,_,E,S)=>{const T=f.component=Jd(f,v,_);if(Hc(f)&&(T.ctx.renderer=D),Yd(T,!1,S),T.asyncDep){if(_&&_.registerDep(T,le,S),!f.el){const I=T.subTree=$e(_n);V(null,I,d,g)}}else le(T,f,d,g,_,E,S)},Lt=(f,d,g)=>{const v=d.component=f.component;if($d(f,d,g))if(v.asyncDep&&!v.asyncResolved){W(v,d,g);return}else v.next=d,v.update();else d.el=f.el,v.vnode=d},le=(f,d,g,v,_,E,S)=>{const T=()=>{if(f.isMounted){let{next:P,bu:x,u:j,parent:G,vnode:oe}=f;{const qe=iu(f);if(qe){P&&(P.el=oe.el,W(f,P,S)),qe.asyncDep.then(()=>{f.isUnmounted||T()});return}}let ne=P,He;un(f,!1),P?(P.el=oe.el,W(f,P,S)):P=oe,x&&us(x),(He=P.props&&P.props.onVnodeBeforeUpdate)&&ct(He,G,P,oe),un(f,!0);const Se=yi(f),Ze=f.subTree;f.subTree=Se,R(Ze,Se,h(Ze.el),y(Ze),f,_,E),P.el=Se.el,ne===null&&jd(f,Se.el),j&&ze(j,_),(He=P.props&&P.props.onVnodeUpdated)&&ze(()=>ct(He,G,P,oe),_)}else{let P;const{el:x,props:j}=d,{bm:G,m:oe,parent:ne,root:He,type:Se}=f,Ze=lr(d);if(un(f,!1),G&&us(G),!Ze&&(P=j&&j.onVnodeBeforeMount)&&ct(P,ne,d),un(f,!0),x&&ue){const qe=()=>{f.subTree=yi(f),ue(x,f.subTree,f,_,null)};Ze&&Se.__asyncHydrate?Se.__asyncHydrate(x,f,qe):qe()}else{He.ce&&He.ce._injectChildStyle(Se);const qe=f.subTree=yi(f);R(null,qe,g,v,f,_,E),d.el=qe.el}if(oe&&ze(oe,_),!Ze&&(P=j&&j.onVnodeMounted)){const qe=d;ze(()=>ct(P,ne,qe),_)}(d.shapeFlag&256||ne&&lr(ne.vnode)&&ne.vnode.shapeFlag&256)&&f.a&&ze(f.a,_),f.isMounted=!0,d=g=v=null}};f.scope.on();const I=f.effect=new vc(T);f.scope.off();const w=f.update=I.run.bind(I),L=f.job=I.runIfDirty.bind(I);L.i=f,L.id=f.uid,I.scheduler=()=>Vo(L),un(f,!0),w()},W=(f,d,g)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,Td(f,d.props,v,g),Pd(f,d.children,g),rn(),wa(f),sn()},X=(f,d,g,v,_,E,S,T,I=!1)=>{const w=f&&f.children,L=f?f.shapeFlag:0,P=d.children,{patchFlag:x,shapeFlag:j}=d;if(x>0){if(x&128){Ft(w,P,g,v,_,E,S,T,I);return}else if(x&256){Et(w,P,g,v,_,E,S,T,I);return}}j&8?(L&16&&Ye(w,_,E),P!==w&&u(g,P)):L&16?j&16?Ft(w,P,g,v,_,E,S,T,I):Ye(w,_,E,!0):(L&8&&u(g,""),j&16&&K(P,g,v,_,E,S,T,I))},Et=(f,d,g,v,_,E,S,T,I)=>{f=f||Vn,d=d||Vn;const w=f.length,L=d.length,P=Math.min(w,L);let x;for(x=0;x<P;x++){const j=d[x]=I?qt(d[x]):ht(d[x]);R(f[x],j,g,null,_,E,S,T,I)}w>L?Ye(f,_,E,!0,!1,P):K(d,g,v,_,E,S,T,I,P)},Ft=(f,d,g,v,_,E,S,T,I)=>{let w=0;const L=d.length;let P=f.length-1,x=L-1;for(;w<=P&&w<=x;){const j=f[w],G=d[w]=I?qt(d[w]):ht(d[w]);if(er(j,G))R(j,G,g,null,_,E,S,T,I);else break;w++}for(;w<=P&&w<=x;){const j=f[P],G=d[x]=I?qt(d[x]):ht(d[x]);if(er(j,G))R(j,G,g,null,_,E,S,T,I);else break;P--,x--}if(w>P){if(w<=x){const j=x+1,G=j<L?d[j].el:v;for(;w<=x;)R(null,d[w]=I?qt(d[w]):ht(d[w]),g,G,_,E,S,T,I),w++}}else if(w>x)for(;w<=P;)Me(f[w],_,E,!0),w++;else{const j=w,G=w,oe=new Map;for(w=G;w<=x;w++){const We=d[w]=I?qt(d[w]):ht(d[w]);We.key!=null&&oe.set(We.key,w)}let ne,He=0;const Se=x-G+1;let Ze=!1,qe=0;const Xn=new Array(Se);for(w=0;w<Se;w++)Xn[w]=0;for(w=j;w<=P;w++){const We=f[w];if(He>=Se){Me(We,_,E,!0);continue}let lt;if(We.key!=null)lt=oe.get(We.key);else for(ne=G;ne<=x;ne++)if(Xn[ne-G]===0&&er(We,d[ne])){lt=ne;break}lt===void 0?Me(We,_,E,!0):(Xn[lt-G]=w+1,lt>=qe?qe=lt:Ze=!0,R(We,d[lt],g,null,_,E,S,T,I),He++)}const ha=Ze?Nd(Xn):Vn;for(ne=ha.length-1,w=Se-1;w>=0;w--){const We=G+w,lt=d[We],da=We+1<L?d[We+1].el:v;Xn[w]===0?R(null,lt,g,da,_,E,S,T,I):Ze&&(ne<0||w!==ha[ne]?at(lt,g,da,2):ne--)}}},at=(f,d,g,v,_=null)=>{const{el:E,type:S,transition:T,children:I,shapeFlag:w}=f;if(w&6){at(f.component.subTree,d,g,v);return}if(w&128){f.suspense.move(d,g,v);return}if(w&64){S.move(f,d,g,D);return}if(S===ft){r(E,d,g);for(let P=0;P<I.length;P++)at(I[P],d,g,v);r(f.anchor,d,g);return}if(S===vi){N(f,d,g);return}if(v!==2&&w&1&&T)if(v===0)T.beforeEnter(E),r(E,d,g),ze(()=>T.enter(E),_);else{const{leave:P,delayLeave:x,afterLeave:j}=T,G=()=>r(E,d,g),oe=()=>{P(E,()=>{G(),j&&j()})};x?x(E,G,oe):oe()}else r(E,d,g)},Me=(f,d,g,v=!1,_=!1)=>{const{type:E,props:S,ref:T,children:I,dynamicChildren:w,shapeFlag:L,patchFlag:P,dirs:x,cacheIndex:j}=f;if(P===-2&&(_=!1),T!=null&&$i(T,null,g,f,!0),j!=null&&(d.renderCache[j]=void 0),L&256){d.ctx.deactivate(f);return}const G=L&1&&x,oe=!lr(f);let ne;if(oe&&(ne=S&&S.onVnodeBeforeUnmount)&&ct(ne,d,f),L&6)Xr(f.component,g,v);else{if(L&128){f.suspense.unmount(g,v);return}G&&cn(f,null,d,"beforeUnmount"),L&64?f.type.remove(f,d,g,D,v):w&&!w.hasOnce&&(E!==ft||P>0&&P&64)?Ye(w,d,g,!1,!0):(E===ft&&P&384||!_&&L&16)&&Ye(I,d,g),v&&Sn(f)}(oe&&(ne=S&&S.onVnodeUnmounted)||G)&&ze(()=>{ne&&ct(ne,d,f),G&&cn(f,null,d,"unmounted")},g)},Sn=f=>{const{type:d,el:g,anchor:v,transition:_}=f;if(d===ft){An(g,v);return}if(d===vi){O(f);return}const E=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:T}=_,I=()=>S(g,E);T?T(f.el,E,I):I()}else E()},An=(f,d)=>{let g;for(;f!==d;)g=p(f),s(f),f=g;s(d)},Xr=(f,d,g)=>{const{bum:v,scope:_,job:E,subTree:S,um:T,m:I,a:w}=f;Ca(I),Ca(w),v&&us(v),_.stop(),E&&(E.flags|=8,Me(S,f,d,g)),T&&ze(T,d),ze(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ye=(f,d,g,v=!1,_=!1,E=0)=>{for(let S=E;S<f.length;S++)Me(f[S],d,g,v,_)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const d=p(f.anchor||f.el),g=d&&d[Qh];return g?p(g):d};let C=!1;const A=(f,d,g)=>{f==null?d._vnode&&Me(d._vnode,null,null,!0):R(d._vnode||null,f,d,null,null,null,g),d._vnode=f,C||(C=!0,wa(),Fc(),C=!1)},D={p:R,um:Me,m:at,r:Sn,mt:ln,mc:K,pc:X,pbc:ae,n:y,o:t};let te,ue;return{render:A,hydrate:te,createApp:wd(A,te)}}function _i({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function un({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function kd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function su(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=qt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&su(o,a)),a.type===Ys&&(a.el=o.el)}}function Nd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function iu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:iu(e)}function Ca(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Dd=Symbol.for("v-scx"),Vd=()=>gt(Dd);function ur(t,e,n){return ou(t,e,n)}function ou(t,e,n=ie){const{immediate:r,deep:s,flush:i,once:o}=n,a=Te({},n);let l;if(Qs)if(i==="sync"){const p=Vd();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!e||r)a.once=!0;else return{stop:mt,resume:mt,pause:mt};const c=be;a.call=(p,m,b)=>vt(p,c,m,b);let u=!1;i==="post"?a.scheduler=p=>{ze(p,c&&c.suspense)}:i!=="sync"&&(u=!0,a.scheduler=(p,m)=>{m?p():Vo(p)}),a.augmentJob=p=>{e&&(p.flags|=4),u&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const h=Kh(t,e,a);return l&&l.push(h),h}function xd(t,e,n){const r=this.proxy,s=_e(t)?t.includes(".")?au(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=jr(this),a=ou(s,i.bind(r),n);return o(),a}function au(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Md=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${rt(e)}Modifiers`]||t[`${In(e)}Modifiers`];function Ld(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ie;let s=n;const i=e.startsWith("update:"),o=i&&Md(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>_e(u)?u.trim():u)),o.number&&(s=n.map(Mi)));let a,l=r[a=fi(e)]||r[a=fi(rt(e))];!l&&i&&(l=r[a=fi(In(e))]),l&&vt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,vt(c,t,6,s)}}function lu(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const l=c=>{const u=lu(c,e,!0);u&&(a=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ce(t)&&r.set(t,null),null):($(i)?i.forEach(l=>o[l]=null):Te(o,i),ce(t)&&r.set(t,o),o)}function Js(t,e){return!t||!js(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,In(e))||Z(t,e))}function yi(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:p,setupState:m,ctx:b,inheritAttrs:R}=t,U=Is(t);let V,k;try{if(n.shapeFlag&4){const O=s||r,q=O;V=ht(c.call(q,O,u,h,m,p,b)),k=a}else{const O=e;V=ht(O.length>1?O(h,{attrs:a,slots:o,emit:l}):O(h,null)),k=e.props?a:Fd(a)}}catch(O){fr.length=0,Ks(O,t,1),V=$e(_n)}let N=V;if(k&&R!==!1){const O=Object.keys(k),{shapeFlag:q}=N;O.length&&q&7&&(i&&O.some(_o)&&(k=Ud(k,i)),N=jn(N,k,!1,!0))}return n.dirs&&(N=jn(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&xo(N,n.transition),V=N,Is(U),V}const Fd=t=>{let e;for(const n in t)(n==="class"||n==="style"||js(n))&&((e||(e={}))[n]=t[n]);return e},Ud=(t,e)=>{const n={};for(const r in t)(!_o(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function $d(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Oa(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!Js(c,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Oa(r,o,c):!0:!!o;return!1}function Oa(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Js(n,i))return!0}return!1}function jd({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const cu=t=>t.__isSuspense;function Bd(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Yh(t)}const ft=Symbol.for("v-fgt"),Ys=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),vi=Symbol.for("v-stc"),fr=[];let Ke=null;function ke(t=!1){fr.push(Ke=t?null:[])}function Hd(){fr.pop(),Ke=fr[fr.length-1]||null}let Sr=1;function ka(t){Sr+=t,t<0&&Ke&&(Ke.hasOnce=!0)}function uu(t){return t.dynamicChildren=Sr>0?Ke||Vn:null,Hd(),Sr>0&&Ke&&Ke.push(t),t}function et(t,e,n,r,s,i){return uu(de(t,e,n,r,s,i,!0))}function ds(t,e,n,r,s){return uu($e(t,e,n,r,s,!0))}function Wi(t){return t?t.__v_isVNode===!0:!1}function er(t,e){return t.type===e.type&&t.key===e.key}const fu=({key:t})=>t??null,ps=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_e(t)||pe(t)||B(t)?{i:Ue,r:t,k:e,f:!!n}:t:null);function de(t,e=null,n=null,r=0,s=null,i=t===ft?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fu(e),ref:e&&ps(e),scopeId:$c,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ue};return a?(Fo(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=_e(n)?8:16),Sr>0&&!o&&Ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ke.push(l),l}const $e=qd;function qd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===fd)&&(t=_n),Wi(t)){const a=jn(t,e,!0);return n&&Fo(a,n),Sr>0&&!i&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(t)]=a:Ke.push(a)),a.patchFlag=-2,a}if(tp(t)&&(t=t.__vccOpts),e){e=Wd(e);let{class:a,style:l}=e;a&&!_e(a)&&(e.class=wo(a)),ce(l)&&(Co(l)&&!$(l)&&(l=Te({},l)),e.style=Eo(l))}const o=_e(t)?1:cu(t)?128:Xh(t)?64:ce(t)?4:B(t)?2:0;return de(t,e,n,r,s,o,i,!0)}function Wd(t){return t?Co(t)||Qc(t)?Te({},t):t:null}function jn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?zd(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&fu(c),ref:e&&e.ref?n&&i?$(i)?i.concat(ps(e)):[i,ps(e)]:ps(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jn(t.ssContent),ssFallback:t.ssFallback&&jn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&xo(u,l.clone(u)),u}function St(t=" ",e=0){return $e(Ys,null,t,e)}function is(t="",e=!1){return e?(ke(),ds(_n,null,t)):$e(_n,null,t)}function ht(t){return t==null||typeof t=="boolean"?$e(_n):$(t)?$e(ft,null,t.slice()):typeof t=="object"?qt(t):$e(Ys,null,String(t))}function qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:jn(t)}function Fo(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fo(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Qc(e)?e._ctx=Ue:s===3&&Ue&&(Ue.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ue},n=32):(e=String(e),r&64?(n=16,e=[St(e)]):n=8);t.children=e,t.shapeFlag|=n}function zd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=wo([e.class,r.class]));else if(s==="style")e.style=Eo([e.style,r.style]);else if(js(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ct(t,e,n,r=null){vt(t,e,7,[n,r])}const Kd=Gc();let Gd=0;function Jd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Kd,i={uid:Gd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zc(r,s),emitsOptions:lu(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ld.bind(null,i),t.ce&&t.ce(i),i}let be=null,Ss,zi;{const t=hc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ss=e("__VUE_INSTANCE_SETTERS__",n=>be=n),zi=e("__VUE_SSR_SETTERS__",n=>Qs=n)}const jr=t=>{const e=be;return Ss(t),t.scope.on(),()=>{t.scope.off(),Ss(e)}},Na=()=>{be&&be.scope.off(),Ss(null)};function hu(t){return t.vnode.shapeFlag&4}let Qs=!1;function Yd(t,e=!1,n=!1){e&&zi(e);const{props:r,children:s}=t.vnode,i=hu(t);Id(t,r,i,e),Rd(t,s,n);const o=i?Qd(t,e):void 0;return e&&zi(!1),o}function Qd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,pd);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Zd(t):null,i=jr(t);rn();const o=$r(r,t,0,[t.props,s]);if(sn(),i(),lc(o)){if(lr(t)||Bc(t),o.then(Na,Na),e)return o.then(a=>{Da(t,a,e)}).catch(a=>{Ks(a,t,0)});t.asyncDep=o}else Da(t,o,e)}else du(t,e)}function Da(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=xc(e)),du(t,n)}let Va;function du(t,e,n){const r=t.type;if(!t.render){if(!e&&Va&&!r.render){const s=r.template||Mo(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Te(Te({isCustomElement:i,delimiters:a},o),l);r.render=Va(s,c)}}t.render=r.render||mt}{const s=jr(t);rn();try{md(t)}finally{sn(),s()}}}const Xd={get(t,e){return Re(t,"get",""),t[e]}};function Zd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Xd),slots:t.slots,emit:t.emit,expose:e}}function Xs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(xc(Oo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in cr)return cr[n](t)},has(e,n){return n in e||n in cr}})):t.proxy}function ep(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function tp(t){return B(t)&&"__vccOpts"in t}const Qe=(t,e)=>Wh(t,e,Qs);function pu(t,e,n){const r=arguments.length;return r===2?ce(e)&&!$(e)?Wi(e)?$e(t,null,[e]):$e(t,e):$e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wi(n)&&(n=[n]),$e(t,e,n))}const np="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ki;const xa=typeof window<"u"&&window.trustedTypes;if(xa)try{Ki=xa.createPolicy("vue",{createHTML:t=>t})}catch{}const mu=Ki?t=>Ki.createHTML(t):t=>t,rp="http://www.w3.org/2000/svg",sp="http://www.w3.org/1998/Math/MathML",It=typeof document<"u"?document:null,Ma=It&&It.createElement("template"),ip={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?It.createElementNS(rp,t):e==="mathml"?It.createElementNS(sp,t):n?It.createElement(t,{is:n}):It.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>It.createTextNode(t),createComment:t=>It.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>It.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ma.innerHTML=mu(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Ma.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},op=Symbol("_vtc");function ap(t,e,n){const r=t[op];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const La=Symbol("_vod"),lp=Symbol("_vsh"),cp=Symbol(""),up=/(^|;)\s*display\s*:/;function fp(t,e,n){const r=t.style,s=_e(n);let i=!1;if(n&&!s){if(e)if(_e(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ms(r,a,"")}else for(const o in e)n[o]==null&&ms(r,o,"");for(const o in n)o==="display"&&(i=!0),ms(r,o,n[o])}else if(s){if(e!==n){const o=r[cp];o&&(n+=";"+o),r.cssText=n,i=up.test(n)}}else e&&t.removeAttribute("style");La in t&&(t[La]=i?r.display:"",t[lp]&&(r.display="none"))}const Fa=/\s*!important$/;function ms(t,e,n){if($(n))n.forEach(r=>ms(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=hp(t,e);Fa.test(n)?t.setProperty(In(r),n.replace(Fa,""),"important"):t[r]=n}}const Ua=["Webkit","Moz","ms"],Ei={};function hp(t,e){const n=Ei[e];if(n)return n;let r=rt(e);if(r!=="filter"&&r in t)return Ei[e]=r;r=qs(r);for(let s=0;s<Ua.length;s++){const i=Ua[s]+r;if(i in t)return Ei[e]=i}return e}const $a="http://www.w3.org/1999/xlink";function ja(t,e,n,r,s,i=mh(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($a,e.slice(6,e.length)):t.setAttributeNS($a,e,n):n==null||i&&!dc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":nn(n)?String(n):n)}function dp(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?mu(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=dc(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function On(t,e,n,r){t.addEventListener(e,n,r)}function pp(t,e,n,r){t.removeEventListener(e,n,r)}const Ba=Symbol("_vei");function mp(t,e,n,r,s=null){const i=t[Ba]||(t[Ba]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=gp(e);if(r){const c=i[e]=vp(r,s);On(t,a,c,l)}else o&&(pp(t,a,o,l),i[e]=void 0)}}const Ha=/(?:Once|Passive|Capture)$/;function gp(t){let e;if(Ha.test(t)){e={};let r;for(;r=t.match(Ha);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):In(t.slice(2)),e]}let wi=0;const _p=Promise.resolve(),yp=()=>wi||(_p.then(()=>wi=0),wi=Date.now());function vp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;vt(Ep(r,n.value),e,5,[r])};return n.value=t,n.attached=yp(),n}function Ep(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const qa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wp=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?ap(t,r,o):e==="style"?fp(t,n,r):js(e)?_o(e)||mp(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bp(t,e,r,o))?(dp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ja(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ja(t,e,r,o))};function bp(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&qa(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qa(e)&&_e(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!_e(n)))}const Wa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>us(e,n):e};function Ip(t){t.target.composing=!0}function za(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bi=Symbol("_assign"),Ar={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[bi]=Wa(s);const i=r||s.props&&s.props.type==="number";On(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Mi(a)),t[bi](a)}),n&&On(t,"change",()=>{t.value=t.value.trim()}),e||(On(t,"compositionstart",Ip),On(t,"compositionend",za),On(t,"change",za))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[bi]=Wa(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Mi(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Tp=["ctrl","shift","alt","meta"],Sp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Tp.some(n=>t[`${n}Key`]&&!e.includes(n))},Uo=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Sp[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Ap=Te({patchProp:wp},ip);let Ka;function Rp(){return Ka||(Ka=Cd(Ap))}const Pp=(...t)=>{const e=Rp().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Op(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Cp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Cp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Op(t){return _e(t)?document.querySelector(t):t}var kp=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let gu;const Zs=t=>gu=t,_u=Symbol();function Gi(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var hr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(hr||(hr={}));function Np(){const t=_c(!0),e=t.run(()=>tn({}));let n=[],r=[];const s=Oo({install(i){Zs(s),s._a=i,i.provide(_u,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!kp?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const yu=()=>{};function Ga(t,e,n,r=yu){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&yc()&&gh(s),s}function Pn(t,...e){t.slice().forEach(n=>{n(...e)})}const Dp=t=>t(),Ja=Symbol(),Ii=Symbol();function Ji(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Gi(s)&&Gi(r)&&t.hasOwnProperty(n)&&!pe(r)&&!Yt(r)?t[n]=Ji(s,r):t[n]=r}return t}const Vp=Symbol();function xp(t){return!Gi(t)||!t.hasOwnProperty(Vp)}const{assign:Bt}=Object;function Mp(t){return!!(pe(t)&&t.effect)}function Lp(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=jh(n.state.value[t]);return Bt(u,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=Oo(Qe(()=>{Zs(n);const m=n._s.get(t);return o[p].call(m,m)})),h),{}))}return l=vu(t,c,e,n,r,!0),l}function vu(t,e,n={},r,s,i){let o;const a=Bt({actions:{}},n),l={deep:!0};let c,u,h=[],p=[],m;const b=r.state.value[t];!i&&!b&&(r.state.value[t]={}),tn({});let R;function U(K){let z;c=u=!1,typeof K=="function"?(K(r.state.value[t]),z={type:hr.patchFunction,storeId:t,events:m}):(Ji(r.state.value[t],K),z={type:hr.patchObject,payload:K,storeId:t,events:m});const ae=R=Symbol();Do().then(()=>{R===ae&&(c=!0)}),u=!0,Pn(h,z,r.state.value[t])}const V=i?function(){const{state:z}=n,ae=z?z():{};this.$patch(Pe=>{Bt(Pe,ae)})}:yu;function k(){o.stop(),h=[],p=[],r._s.delete(t)}const N=(K,z="")=>{if(Ja in K)return K[Ii]=z,K;const ae=function(){Zs(r);const Pe=Array.from(arguments),Be=[],xe=[];function ln(W){Be.push(W)}function Lt(W){xe.push(W)}Pn(p,{args:Pe,name:ae[Ii],store:q,after:ln,onError:Lt});let le;try{le=K.apply(this&&this.$id===t?this:q,Pe)}catch(W){throw Pn(xe,W),W}return le instanceof Promise?le.then(W=>(Pn(Be,W),W)).catch(W=>(Pn(xe,W),Promise.reject(W))):(Pn(Be,le),le)};return ae[Ja]=!0,ae[Ii]=z,ae},O={_p:r,$id:t,$onAction:Ga.bind(null,p),$patch:U,$reset:V,$subscribe(K,z={}){const ae=Ga(h,K,z.detached,()=>Pe()),Pe=o.run(()=>ur(()=>r.state.value[t],Be=>{(z.flush==="sync"?u:c)&&K({storeId:t,type:hr.direct,events:m},Be)},Bt({},l,z)));return ae},$dispose:k},q=Ur(O);r._s.set(t,q);const Y=(r._a&&r._a.runWithContext||Dp)(()=>r._e.run(()=>(o=_c()).run(()=>e({action:N}))));for(const K in Y){const z=Y[K];if(pe(z)&&!Mp(z)||Yt(z))i||(b&&xp(z)&&(pe(z)?z.value=b[K]:Ji(z,b[K])),r.state.value[t][K]=z);else if(typeof z=="function"){const ae=N(z,K);Y[K]=ae,a.actions[K]=z}}return Bt(q,Y),Bt(Q(q),Y),Object.defineProperty(q,"$state",{get:()=>r.state.value[t],set:K=>{U(z=>{Bt(z,K)})}}),r._p.forEach(K=>{Bt(q,o.run(()=>K({store:q,app:r._a,pinia:r,options:a})))}),b&&i&&n.hydrate&&n.hydrate(q.$state,b),c=!0,u=!0,q}function Eu(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=bd();return a=a||(c?gt(_u,null):null),a&&Zs(a),a=gu,a._s.has(r)||(i?vu(r,e,s,a):Lp(r,s,a)),a._s.get(r)}return o.$id=r,o}var Ya={};/**
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
 */const wu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Fp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new Up;const p=i<<2|a>>4;if(r.push(p),c!==64){const m=a<<4&240|c>>2;if(r.push(m),h!==64){const b=c<<6&192|h;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Up extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $p=function(t){const e=wu(t);return bu.encodeByteArray(e,!0)},As=function(t){return $p(t).replace(/\./g,"")},Iu=function(t){try{return bu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bp=()=>jp().__FIREBASE_DEFAULTS__,Hp=()=>{if(typeof process>"u"||typeof Ya>"u")return;const t=Ya.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Iu(t[1]);return e&&JSON.parse(e)},$o=()=>{try{return Bp()||Hp()||qp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tu=t=>{var e,n;return(n=(e=$o())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wp=t=>{const e=Tu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Su=()=>{var t;return(t=$o())===null||t===void 0?void 0:t.config},Au=t=>{var e;return(e=$o())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Kp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[As(JSON.stringify(n)),As(JSON.stringify(o)),""].join(".")}/**
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
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Jp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qp(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Xp(){try{return typeof indexedDB=="object"}catch{return!1}}function Zp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const em="FirebaseError";class Mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=em,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?tm(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Mt(s,a,r)}}function tm(t,e){return t.replace(nm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const nm=/\{\$([^}]+)}/g;function rm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qa(i)&&Qa(o)){if(!Rs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qa(t){return t!==null&&typeof t=="object"}/**
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
 */function Hr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ir(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sm(t,e){const n=new im(t,e);return n.subscribe.bind(n)}class im{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");om(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ti),s.error===void 0&&(s.error=Ti),s.complete===void 0&&(s.complete=Ti);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function om(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ti(){}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hn="[DEFAULT]";/**
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
 */class am{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cm(e))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hn){return this.instances.has(e)}getOptions(e=hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hn){return this.component?this.component.multipleInstances?e:hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lm(t){return t===hn?void 0:t}function cm(t){return t.instantiationMode==="EAGER"}/**
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
 */class um{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new am(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const fm={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},hm=ee.INFO,dm={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},pm=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=dm[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jo{constructor(e){this.name=e,this._logLevel=hm,this._logHandler=pm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const mm=(t,e)=>e.some(n=>t instanceof n);let Xa,Za;function gm(){return Xa||(Xa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _m(){return Za||(Za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ru=new WeakMap,Yi=new WeakMap,Pu=new WeakMap,Si=new WeakMap,Bo=new WeakMap;function ym(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Qt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ru.set(n,t)}).catch(()=>{}),Bo.set(e,t),e}function vm(t){if(Yi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Yi.set(t,e)}let Qi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Em(t){Qi=t(Qi)}function wm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ai(this),e,...n);return Pu.set(r,e.sort?e.sort():[e]),Qt(r)}:_m().includes(t)?function(...e){return t.apply(Ai(this),e),Qt(Ru.get(this))}:function(...e){return Qt(t.apply(Ai(this),e))}}function bm(t){return typeof t=="function"?wm(t):(t instanceof IDBTransaction&&vm(t),mm(t,gm())?new Proxy(t,Qi):t)}function Qt(t){if(t instanceof IDBRequest)return ym(t);if(Si.has(t))return Si.get(t);const e=bm(t);return e!==t&&(Si.set(t,e),Bo.set(e,t)),e}const Ai=t=>Bo.get(t);function Im(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Qt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Qt(o.result),l.oldVersion,l.newVersion,Qt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Tm=["get","getKey","getAll","getAllKeys","count"],Sm=["put","add","delete","clear"],Ri=new Map;function el(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ri.get(e))return Ri.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Sm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Tm.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ri.set(e,i),i}Em(t=>({...t,get:(e,n,r)=>el(e,n)||t.get(e,n,r),has:(e,n)=>!!el(e,n)||t.has(e,n)}));/**
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
 */class Am{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Rm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xi="@firebase/app",tl="0.10.10";/**
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
 */const Nt=new jo("@firebase/app"),Pm="@firebase/app-compat",Cm="@firebase/analytics-compat",Om="@firebase/analytics",km="@firebase/app-check-compat",Nm="@firebase/app-check",Dm="@firebase/auth",Vm="@firebase/auth-compat",xm="@firebase/database",Mm="@firebase/database-compat",Lm="@firebase/functions",Fm="@firebase/functions-compat",Um="@firebase/installations",$m="@firebase/installations-compat",jm="@firebase/messaging",Bm="@firebase/messaging-compat",Hm="@firebase/performance",qm="@firebase/performance-compat",Wm="@firebase/remote-config",zm="@firebase/remote-config-compat",Km="@firebase/storage",Gm="@firebase/storage-compat",Jm="@firebase/firestore",Ym="@firebase/vertexai-preview",Qm="@firebase/firestore-compat",Xm="firebase",Zm="10.13.1";/**
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
 */const Zi="[DEFAULT]",eg={[Xi]:"fire-core",[Pm]:"fire-core-compat",[Om]:"fire-analytics",[Cm]:"fire-analytics-compat",[Nm]:"fire-app-check",[km]:"fire-app-check-compat",[Dm]:"fire-auth",[Vm]:"fire-auth-compat",[xm]:"fire-rtdb",[Mm]:"fire-rtdb-compat",[Lm]:"fire-fn",[Fm]:"fire-fn-compat",[Um]:"fire-iid",[$m]:"fire-iid-compat",[jm]:"fire-fcm",[Bm]:"fire-fcm-compat",[Hm]:"fire-perf",[qm]:"fire-perf-compat",[Wm]:"fire-rc",[zm]:"fire-rc-compat",[Km]:"fire-gcs",[Gm]:"fire-gcs-compat",[Jm]:"fire-fst",[Qm]:"fire-fst-compat",[Ym]:"fire-vertex","fire-js":"fire-js",[Xm]:"fire-js-all"};/**
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
 */const Ps=new Map,tg=new Map,eo=new Map;function nl(t,e){try{t.container.addComponent(e)}catch(n){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bn(t){const e=t.name;if(eo.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;eo.set(e,t);for(const n of Ps.values())nl(n,t);for(const n of tg.values())nl(n,t);return!0}function Ho(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pt(t){return t.settings!==void 0}/**
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
 */const ng={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new Br("app","Firebase",ng);/**
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
 */class rg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
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
 */const Gn=Zm;function Cu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Xt.create("bad-app-name",{appName:String(s)});if(n||(n=Su()),!n)throw Xt.create("no-options");const i=Ps.get(s);if(i){if(Rs(n,i.options)&&Rs(r,i.config))return i;throw Xt.create("duplicate-app",{appName:s})}const o=new um(s);for(const l of eo.values())o.addComponent(l);const a=new rg(n,r,o);return Ps.set(s,a),a}function Ou(t=Zi){const e=Ps.get(t);if(!e&&t===Zi&&Su())return Cu();if(!e)throw Xt.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let s=(r=eg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(a.join(" "));return}Bn(new yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sg="firebase-heartbeat-database",ig=1,Rr="firebase-heartbeat-store";let Pi=null;function ku(){return Pi||(Pi=Im(sg,ig,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Rr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xt.create("idb-open",{originalErrorMessage:t.message})})),Pi}async function og(t){try{const n=(await ku()).transaction(Rr),r=await n.objectStore(Rr).get(Nu(t));return await n.done,r}catch(e){if(e instanceof Mt)Nt.warn(e.message);else{const n=Xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(n.message)}}}async function rl(t,e){try{const r=(await ku()).transaction(Rr,"readwrite");await r.objectStore(Rr).put(e,Nu(t)),await r.done}catch(n){if(n instanceof Mt)Nt.warn(n.message);else{const r=Xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nt.warn(r.message)}}}function Nu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ag=1024,lg=30*24*60*60*1e3;class cg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=lg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Nt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sl(),{heartbeatsToSend:r,unsentEntries:s}=ug(this._heartbeatsCache.heartbeats),i=As(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Nt.warn(n),""}}}function sl(){return new Date().toISOString().substring(0,10)}function ug(t,e=ag){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),il(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),il(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xp()?Zp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await og(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function il(t){return As(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hg(t){Bn(new yn("platform-logger",e=>new Am(e),"PRIVATE")),Bn(new yn("heartbeat",e=>new cg(e),"PRIVATE")),Zt(Xi,tl,t),Zt(Xi,tl,"esm2017"),Zt("fire-js","")}hg("");function qo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Du(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dg=Du,Vu=new Br("auth","Firebase",Du());/**
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
 */const Cs=new jo("@firebase/auth");function pg(t,...e){Cs.logLevel<=ee.WARN&&Cs.warn(`Auth (${Gn}): ${t}`,...e)}function gs(t,...e){Cs.logLevel<=ee.ERROR&&Cs.error(`Auth (${Gn}): ${t}`,...e)}/**
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
 */function st(t,...e){throw Wo(t,...e)}function _t(t,...e){return Wo(t,...e)}function xu(t,e,n){const r=Object.assign(Object.assign({},dg()),{[e]:n});return new Br("auth","Firebase",r).create(e,{appName:t.name})}function Ot(t){return xu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vu.create(t,...e)}function F(t,e,...n){if(!t)throw Wo(e,...n)}function At(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gs(e),new Error(e)}function Dt(t,e){t||At(e)}/**
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
 */function to(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mg(){return ol()==="http:"||ol()==="https:"}function ol(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mg()||Jp()||"connection"in navigator)?navigator.onLine:!0}function _g(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dt(n>e,"Short delay should be less than long delay!"),this.isMobile=Gp()||Yp()}get(){return gg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zo(t,e){Dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Mu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vg=new qr(3e4,6e4);function on(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function an(t,e,n,r,s={}){return Lu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Hr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Mu.fetch()(Fu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Lu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yg),e);try{const s=new wg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw os(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw os(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw os(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw os(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw xu(t,u,c);st(t,u)}}catch(s){if(s instanceof Mt)throw s;st(t,"network-request-failed",{message:String(s)})}}async function Wr(t,e,n,r,s={}){const i=await an(t,e,n,r,s);return"mfaPendingCredential"in i&&st(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Fu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zo(t.config,s):`${t.config.apiScheme}://${s}`}function Eg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),vg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function os(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=_t(t,e,r);return s.customData._tokenResponse=n,s}function al(t){return t!==void 0&&t.enterprise!==void 0}class bg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Eg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ig(t,e){return an(t,"GET","/v2/recaptchaConfig",on(t,e))}/**
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
 */async function Tg(t,e){return an(t,"POST","/v1/accounts:delete",e)}async function Uu(t,e){return an(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function dr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sg(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),s=Ko(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:dr(Ci(s.auth_time)),issuedAtTime:dr(Ci(s.iat)),expirationTime:dr(Ci(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ci(t){return Number(t)*1e3}function Ko(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Iu(n);return s?JSON.parse(s):(gs("Failed to decode base64 JWT payload"),null)}catch(s){return gs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ll(t){const e=Ko(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mt&&Ag(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ag({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Rg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class no{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=dr(this.lastLoginAt),this.creationTime=dr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Os(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Pr(t,Uu(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$u(i.providerUserInfo):[],a=Cg(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new no(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Pg(t){const e=Ve(t);await Os(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $u(t){return t.map(e=>{var{providerId:n}=e,r=qo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Og(t,e){const n=await Lu(t,{},async()=>{const r=Hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Fu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kg(t,e){return an(t,"POST","/v2/accounts:revokeToken",on(t,e))}/**
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
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ll(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){F(e.length!==0,"internal-error");const n=ll(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Og(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ln;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
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
 */function $t(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=qo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new no(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Pr(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sg(this,e)}reload(){return Pg(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Os(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(Ot(this.auth));const e=await this.getIdToken();return await Pr(this,Tg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,V=(c=n.createdAt)!==null&&c!==void 0?c:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:O,isAnonymous:q,providerData:he,stsTokenManager:Y}=n;F(N&&Y,e,"internal-error");const K=Ln.fromJSON(this.name,Y);F(typeof N=="string",e,"internal-error"),$t(h,e.name),$t(p,e.name),F(typeof O=="boolean",e,"internal-error"),F(typeof q=="boolean",e,"internal-error"),$t(m,e.name),$t(b,e.name),$t(R,e.name),$t(U,e.name),$t(V,e.name),$t(k,e.name);const z=new Rt({uid:N,auth:e,email:p,emailVerified:O,displayName:h,isAnonymous:q,photoURL:b,phoneNumber:m,tenantId:R,stsTokenManager:K,createdAt:V,lastLoginAt:k});return he&&Array.isArray(he)&&(z.providerData=he.map(ae=>Object.assign({},ae))),U&&(z._redirectEventId=U),z}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ln;s.updateFromServerResponse(n);const i=new Rt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Os(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];F(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$u(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ln;a.updateFromIdToken(r);const l=new Rt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new no(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
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
 */const cl=new Map;function Pt(t){Dt(t instanceof Function,"Expected a class definition");let e=cl.get(t);return e?(Dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cl.set(t,e),e)}/**
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
 */class ju{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ju.type="NONE";const ul=ju;/**
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
 */function _s(t,e,n){return`firebase:${t}:${e}:${n}`}class Fn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_s(this.userKey,s.apiKey,i),this.fullPersistenceKey=_s("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fn(Pt(ul),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Pt(ul);const o=_s(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Rt._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Fn(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Fn(i,e,r))}}/**
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
 */function fl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ku(e))return"Blackberry";if(Gu(e))return"Webos";if(Hu(e))return"Safari";if((e.includes("chrome/")||qu(e))&&!e.includes("edge/"))return"Chrome";if(zu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bu(t=De()){return/firefox\//i.test(t)}function Hu(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qu(t=De()){return/crios\//i.test(t)}function Wu(t=De()){return/iemobile/i.test(t)}function zu(t=De()){return/android/i.test(t)}function Ku(t=De()){return/blackberry/i.test(t)}function Gu(t=De()){return/webos/i.test(t)}function Go(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ng(t=De()){var e;return Go(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Dg(){return Qp()&&document.documentMode===10}function Ju(t=De()){return Go(t)||zu(t)||Gu(t)||Ku(t)||/windows phone/i.test(t)||Wu(t)}/**
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
 */function Yu(t,e=[]){let n;switch(t){case"Browser":n=fl(De());break;case"Worker":n=`${fl(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gn}/${r}`}/**
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
 */class Vg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function xg(t,e={}){return an(t,"GET","/v2/passwordPolicy",on(t,e))}/**
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
 */const Mg=6;class Lg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Mg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Fg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hl(this),this.idTokenSubscription=new hl(this),this.beforeStateQueue=new Vg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Uu(this,{idToken:e}),r=await Rt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Os(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_g()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pt(this.app))return Promise.reject(Ot(this));const n=e?Ve(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(Ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pt(this.app)?Promise.reject(Ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xg(this),n=new Lg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[Pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&pg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tn(t){return Ve(t)}class hl{constructor(e){this.auth=e,this.observer=null,this.addObserver=sm(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ei={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ug(t){ei=t}function Qu(t){return ei.loadJS(t)}function $g(){return ei.recaptchaEnterpriseScript}function jg(){return ei.gapiScript}function Bg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Hg="recaptcha-enterprise",qg="NO_RECAPTCHA";class Wg{constructor(e){this.type=Hg,this.auth=Tn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Ig(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new bg(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;al(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(qg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&al(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=$g();l.length!==0&&(l+=a),Qu(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function dl(t,e,n,r=!1){const s=new Wg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ro(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await dl(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await dl(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function zg(t,e){const n=Ho(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Rs(i,e??{}))return s;st(s,"already-initialized")}return n.initialize({options:e})}function Kg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Gg(t,e,n){const r=Tn(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Xu(e),{host:o,port:a}=Jg(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Yg()}function Xu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Jg(t){const e=Xu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pl(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:pl(o)}}}function pl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Yg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Jo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,n){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}async function Qg(t,e){return an(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Xg(t,e){return Wr(t,"POST","/v1/accounts:signInWithPassword",on(t,e))}/**
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
 */async function Zg(t,e){return Wr(t,"POST","/v1/accounts:signInWithEmailLink",on(t,e))}async function e_(t,e){return Wr(t,"POST","/v1/accounts:signInWithEmailLink",on(t,e))}/**
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
 */class Cr extends Jo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Cr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Cr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ro(e,n,"signInWithPassword",Xg);case"emailLink":return Zg(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ro(e,r,"signUpPassword",Qg);case"emailLink":return e_(e,{idToken:n,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Un(t,e){return Wr(t,"POST","/v1/accounts:signInWithIdp",on(t,e))}/**
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
 */const t_="http://localhost";class vn extends Jo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=qo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new vn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Un(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Un(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Un(e,n)}buildRequest(){const e={requestUri:t_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hr(n)}return e}}/**
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
 */function n_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function r_(t){const e=sr(ir(t)).link,n=e?sr(ir(e)).deep_link_id:null,r=sr(ir(t)).deep_link_id;return(r?sr(ir(r)).link:null)||r||n||e||t}class Yo{constructor(e){var n,r,s,i,o,a;const l=sr(ir(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=n_((s=l.mode)!==null&&s!==void 0?s:null);F(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=r_(e);try{return new Yo(n)}catch{return null}}}/**
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
 */class Jn{constructor(){this.providerId=Jn.PROVIDER_ID}static credential(e,n){return Cr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yo.parseLink(n);return F(r,"argument-error"),Cr._fromEmailAndCode(e,r.code,r.tenantId)}}Jn.PROVIDER_ID="password";Jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zr extends Zu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zt extends zr{constructor(){super("facebook.com")}static credential(e){return vn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
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
 */class Kt extends zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
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
 */class Gt extends zr{constructor(){super("github.com")}static credential(e){return vn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
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
 */class Jt extends zr{constructor(){super("twitter.com")}static credential(e,n){return vn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
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
 */async function s_(t,e){return Wr(t,"POST","/v1/accounts:signUp",on(t,e))}/**
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
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rt._fromIdTokenResponse(e,r,s),o=ml(r);return new En({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ml(r);return new En({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ml(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ks extends Mt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ks.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ks(e,n,r,s)}}function ef(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ks._fromErrorAndOperation(t,i,e,r):i})}async function i_(t,e,n=!1){const r=await Pr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return En._forOperation(t,"link",r)}/**
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
 */async function o_(t,e,n=!1){const{auth:r}=t;if(pt(r.app))return Promise.reject(Ot(r));const s="reauthenticate";try{const i=await Pr(t,ef(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=Ko(i.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),En._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&st(r,"user-mismatch"),i}}/**
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
 */async function tf(t,e,n=!1){if(pt(t.app))return Promise.reject(Ot(t));const r="signIn",s=await ef(t,r,e),i=await En._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function a_(t,e){return tf(Tn(t),e)}/**
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
 */async function nf(t){const e=Tn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function l_(t,e,n){if(pt(t.app))return Promise.reject(Ot(t));const r=Tn(t),o=await ro(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",s_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&nf(t),l}),a=await En._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function c_(t,e,n){return pt(t.app)?Promise.reject(Ot(t)):a_(Ve(t),Jn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&nf(t),r})}function u_(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function f_(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function h_(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function d_(t){return Ve(t).signOut()}const Ns="__sak";/**
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
 */class rf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ns,"1"),this.storage.removeItem(Ns),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const p_=1e3,m_=10;class sf extends rf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ju(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Dg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,m_):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},p_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sf.type="LOCAL";const g_=sf;/**
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
 */class of extends rf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}of.type="SESSION";const af=of;/**
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
 */function __(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ti{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ti(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await __(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ti.receivers=[];/**
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
 */function Qo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class y_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Qo("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yt(){return window}function v_(t){yt().location.href=t}/**
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
 */function lf(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function E_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function w_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function b_(){return lf()?self:null}/**
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
 */const cf="firebaseLocalStorageDb",I_=1,Ds="firebaseLocalStorage",uf="fbase_key";class Kr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ni(t,e){return t.transaction([Ds],e?"readwrite":"readonly").objectStore(Ds)}function T_(){const t=indexedDB.deleteDatabase(cf);return new Kr(t).toPromise()}function so(){const t=indexedDB.open(cf,I_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ds,{keyPath:uf})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ds)?e(r):(r.close(),await T_(),e(await so()))})})}async function gl(t,e,n){const r=ni(t,!0).put({[uf]:e,value:n});return new Kr(r).toPromise()}async function S_(t,e){const n=ni(t,!1).get(e),r=await new Kr(n).toPromise();return r===void 0?null:r.value}function _l(t,e){const n=ni(t,!0).delete(e);return new Kr(n).toPromise()}const A_=800,R_=3;class ff{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await so(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>R_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ti._getInstance(b_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await E_(),!this.activeServiceWorker)return;this.sender=new y_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||w_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await so();return await gl(e,Ns,"1"),await _l(e,Ns),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>S_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_l(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ni(s,!1).getAll();return new Kr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ff.type="LOCAL";const P_=ff;new qr(3e4,6e4);/**
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
 */function C_(t,e){return e?Pt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xo extends Jo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Un(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Un(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Un(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function O_(t){return tf(t.auth,new Xo(t),t.bypassAuthState)}function k_(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),o_(n,new Xo(t),t.bypassAuthState)}async function N_(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),i_(n,new Xo(t),t.bypassAuthState)}/**
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
 */class hf{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return O_;case"linkViaPopup":case"linkViaRedirect":return N_;case"reauthViaPopup":case"reauthViaRedirect":return k_;default:st(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const D_=new qr(2e3,1e4);class Dn extends hf{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=Qo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,D_.get())};e()}}Dn.currentPopupAction=null;/**
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
 */const V_="pendingRedirect",ys=new Map;class x_ extends hf{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ys.get(this.auth._key());if(!e){try{const r=await M_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ys.set(this.auth._key(),e)}return this.bypassAuthState||ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function M_(t,e){const n=U_(e),r=F_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function L_(t,e){ys.set(t._key(),e)}function F_(t){return Pt(t._redirectPersistence)}function U_(t){return _s(V_,t.config.apiKey,t.name)}async function $_(t,e,n=!1){if(pt(t.app))return Promise.reject(Ot(t));const r=Tn(t),s=C_(r,e),o=await new x_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const j_=10*60*1e3;class B_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!df(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=j_&&this.cachedEventUids.clear(),this.cachedEventUids.has(yl(e))}saveEventToCache(e){this.cachedEventUids.add(yl(e)),this.lastProcessedEventTime=Date.now()}}function yl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function df({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return df(t);default:return!1}}/**
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
 */async function q_(t,e={}){return an(t,"GET","/v1/projects",e)}/**
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
 */const W_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,z_=/^https?/;async function K_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await q_(t);for(const n of e)try{if(G_(n))return}catch{}st(t,"unauthorized-domain")}function G_(t){const e=to(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!z_.test(n))return!1;if(W_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const J_=new qr(3e4,6e4);function vl(){const t=yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Y_(t){return new Promise((e,n)=>{var r,s,i;function o(){vl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vl(),n(_t(t,"network-request-failed"))},timeout:J_.get()})}if(!((s=(r=yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=yt().gapi)===null||i===void 0)&&i.load)o();else{const a=Bg("iframefcb");return yt()[a]=()=>{gapi.load?o():n(_t(t,"network-request-failed"))},Qu(`${jg()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw vs=null,e})}let vs=null;function Q_(t){return vs=vs||Y_(t),vs}/**
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
 */const X_=new qr(5e3,15e3),Z_="__/auth/iframe",ey="emulator/auth/iframe",ty={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ny=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ry(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zo(e,ey):`https://${t.config.authDomain}/${Z_}`,r={apiKey:e.apiKey,appName:t.name,v:Gn},s=ny.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Hr(r).slice(1)}`}async function sy(t){const e=await Q_(t),n=yt().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:ry(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ty,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=_t(t,"network-request-failed"),a=yt().setTimeout(()=>{i(o)},X_.get());function l(){yt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const iy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oy=500,ay=600,ly="_blank",cy="http://localhost";class El{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uy(t,e,n,r=oy,s=ay){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},iy),{width:r.toString(),height:s.toString(),top:i,left:o}),c=De().toLowerCase();n&&(a=qu(c)?ly:n),Bu(c)&&(e=e||cy,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[m,b])=>`${p}${m}=${b},`,"");if(Ng(c)&&a!=="_self")return fy(e||"",a),new El(null);const h=window.open(e||"",a,u);F(h,t,"popup-blocked");try{h.focus()}catch{}return new El(h)}function fy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const hy="__/auth/handler",dy="emulator/auth/handler",py=encodeURIComponent("fac");async function wl(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gn,eventId:s};if(e instanceof Zu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof zr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${py}=${encodeURIComponent(l)}`:"";return`${my(t)}?${Hr(a).slice(1)}${c}`}function my({config:t}){return t.emulator?zo(t,dy):`https://${t.authDomain}/${hy}`}/**
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
 */const Oi="webStorageSupport";class gy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=af,this._completeRedirectFn=$_,this._overrideRedirectResult=L_}async _openPopup(e,n,r,s){var i;Dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await wl(e,n,r,to(),s);return uy(e,o,Qo())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await wl(e,n,r,to(),s);return v_(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sy(e),r=new B_(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oi,{type:Oi},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oi];o!==void 0&&n(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=K_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ju()||Hu()||Go()}}const _y=gy;var bl="@firebase/auth",Il="1.7.8";/**
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
 */class yy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ey(t){Bn(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yu(t)},c=new Fg(r,s,i,l);return Kg(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bn(new yn("auth-internal",e=>{const n=Tn(e.getProvider("auth").getImmediate());return(r=>new yy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(bl,Il,vy(t)),Zt(bl,Il,"esm2017")}/**
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
 */const wy=5*60,by=Au("authIdTokenMaxAge")||wy;let Tl=null;const Iy=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>by)return;const s=n==null?void 0:n.token;Tl!==s&&(Tl=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ty(t=Ou()){const e=Ho(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zg(t,{popupRedirectResolver:_y,persistence:[P_,g_,af]}),r=Au("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Iy(i.toString());f_(n,o,()=>o(n.currentUser)),u_(n,a=>o(a))}}const s=Tu("auth");return s&&Gg(n,`http://${s}`),n}function Sy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ug({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=_t("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Sy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ey("Browser");var Ay="firebase",Ry="10.13.1";/**
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
 */Zt(Ay,Ry,"app");/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let Yn="10.13.1";/**
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
 */const Hn=new jo("@firebase/firestore");function Vs(t,...e){if(Hn.logLevel<=ee.DEBUG){const n=e.map(ea);Hn.debug(`Firestore (${Yn}): ${t}`,...n)}}function Zo(t,...e){if(Hn.logLevel<=ee.ERROR){const n=e.map(ea);Hn.error(`Firestore (${Yn}): ${t}`,...n)}}function pf(t,...e){if(Hn.logLevel<=ee.WARN){const n=e.map(ea);Hn.warn(`Firestore (${Yn}): ${t}`,...n)}}function ea(t){if(typeof t=="string")return t;try{/**
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
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${Yn}) INTERNAL ASSERTION FAILED: `+t;throw Zo(e),new Error(e)}function Ge(t,e){t||fe()}function Gr(t,e){return t}/**
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
 */const Sl="ok",Py="cancelled",pr="unknown",H="invalid-argument",Cy="deadline-exceeded",Oy="not-found",ky="permission-denied",io="unauthenticated",Ny="resource-exhausted",qn="failed-precondition",Dy="aborted",Vy="out-of-range",mf="unimplemented",xy="internal",My="unavailable";class M extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ly{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class Fy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Uy{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Ge(typeof e.accessToken=="string"),new gf(e.accessToken,new Le(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class $y{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class jy{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new $y(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class By{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hy{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Ge(typeof e.token=="string"),new By(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class qy{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Or{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Or("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Or&&e.projectId===this.projectId&&e.database===this.database}}class kr{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(),r===void 0?r=e.length-n:r>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return kr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends kr{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(H,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const Wy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends kr{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return Wy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(H,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new M(H,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(H,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new M(H,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
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
 */class Ie{constructor(e){this.path=e}static fromPath(e){return new Ie(ge.fromString(e))}static fromName(e){return new Ie(ge.fromString(e).popFirst(5))}static empty(){return new Ie(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ie(new ge(e.slice()))}}/**
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
 */function _f(t,e,n){if(!n)throw new M(H,`Function ${t}() cannot be called with an empty ${e}.`)}function Al(t){if(!Ie.isDocumentKey(t))throw new M(H,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rl(t){if(Ie.isDocumentKey(t))throw new M(H,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ri(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function Jr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(H,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ri(t);throw new M(H,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function yf(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let as=null;function zy(){return as===null?as=function(){return 268435456+Math.round(2147483648*Math.random())}():as++,"0x"+as.toString(16)}/**
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
 */function Ky(t){return t==null}function xs(t){return t===0&&1/t==-1/0}/**
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
 */const Gy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Pl,J;function Cl(t){if(t===void 0)return Zo("RPC_ERROR","HTTP error has no status"),pr;switch(t){case 200:return Sl;case 400:return qn;case 401:return io;case 403:return ky;case 404:return Oy;case 409:return Dy;case 416:return Vy;case 429:return Ny;case 499:return Py;case 500:return pr;case 501:return mf;case 503:return My;case 504:return Cy;default:return t>=200&&t<300?Sl:t>=400&&t<500?qn:t>=500&&t<600?xy:pr}}/**
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
 */(J=Pl||(Pl={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";class Jy extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${s}/databases/${i}`,this.T=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get R(){return!1}P(n,r,s,i,o){const a=zy(),l=this.V(n,r.toUriEncodedString());Vs("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.I(c,i,o),this.p(n,l,c,s).then(u=>(Vs("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw pf("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}g(n,r,s,i,o,a){return this.P(n,r,s,i,o)}I(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}V(n,r){const s=Gy[n];return`${this.m}/v1/${r}:${s}`}terminate(){}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const c=l;throw new M(Cl(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(i=l==null?void 0:l.error)===null||i===void 0?void 0:i.message;throw new M(Cl(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
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
 */function Yy(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Qy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Yy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function vf(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */function Ol(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class Xy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 *//**
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
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Xy("Invalid base64 string: "+i):i}}(e);return new Vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const Zy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wn(t){if(Ge(!!t),typeof t=="string"){let e=0;const n=Zy.exec(t);if(Ge(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?Vt.fromBase64String(t):Vt.fromUint8Array(t)}/**
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
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(H,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(H,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(H,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(H,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function Ef(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wf(t){const e=t.mapValue.fields.__previous_value__;return Ef(e)?wf(e):e}function Dr(t){const e=wn(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */const ls={fields:{__type__:{stringValue:"__max__"}}};function bn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ef(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:function(n){var r,s;return((s=(((r=n==null?void 0:n.mapValue)===null||r===void 0?void 0:r.fields)||{}).__type__)===null||s===void 0?void 0:s.stringValue)==="__vector__"}(t)?10:11:fe()}function Ms(t,e){if(t===e)return!0;const n=bn(t);if(n!==bn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Dr(t).isEqual(Dr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=wn(s.timestampValue),a=wn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Nr(s.bytesValue).isEqual(Nr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=me(s.doubleValue),a=me(i.doubleValue);return o===a?xs(o)===xs(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return vf(t.arrayValue.values||[],e.arrayValue.values||[],Ms);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Ol(o)!==Ol(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ms(o[l],a[l])))return!1;return!0}(t,e);default:return fe()}}function Vr(t,e){return(t.values||[]).find(n=>Ms(n,e))!==void 0}function Ls(t,e){if(t===e)return 0;const n=bn(t),r=bn(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=me(i.integerValue||i.doubleValue),l=me(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return kl(t.timestampValue,e.timestampValue);case 4:return kl(Dr(t),Dr(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Nr(i),l=Nr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ye(a[c],l[c]);if(u!==0)return u}return ye(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ye(me(i.latitude),me(o.latitude));return a!==0?a:ye(me(i.longitude),me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Nl(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,c,u;const h=i.fields||{},p=o.fields||{},m=(a=h.value)===null||a===void 0?void 0:a.arrayValue,b=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=ye(((c=m==null?void 0:m.values)===null||c===void 0?void 0:c.length)||0,((u=b==null?void 0:b.values)===null||u===void 0?void 0:u.length)||0);return R!==0?R:Nl(m,b)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ls&&o===ls)return 0;if(i===ls)return 1;if(o===ls)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const p=ye(l[h],u[h]);if(p!==0)return p;const m=Ls(a[l[h]],c[u[h]]);if(m!==0)return m}return ye(l.length,u.length)}(t.mapValue,e.mapValue);default:throw fe()}}function kl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=wn(t),r=wn(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Nl(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ls(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function Dl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function bf(t){return!!t&&"arrayValue"in t}function Vl(t){return!!t&&"nullValue"in t}function xl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ki(t){return!!t&&"mapValue"in t}function mr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return si(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Ml{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class If{}class ot extends If{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ev(e,n,r):n==="array-contains"?new rv(e,r):n==="in"?new sv(e,r):n==="not-in"?new iv(e,r):n==="array-contains-any"?new ov(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tv(e,r):new nv(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ls(n,this.value)):n!==null&&bn(this.value)===bn(n)&&this.matchesComparison(Ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yr extends If{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Yr(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class ev extends ot{constructor(e,n,r){super(e,n,r),this.key=Ie.fromName(r.referenceValue)}matches(e){const n=Ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class tv extends ot{constructor(e,n){super(e,"in",n),this.keys=Tf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nv extends ot{constructor(e,n){super(e,"not-in",n),this.keys=Tf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Tf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Ie.fromName(r.referenceValue))}class rv extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bf(n)&&Vr(n.arrayValue,this.value)}}class sv extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vr(this.value.arrayValue,n)}}class iv extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vr(this.value.arrayValue,n)}}class ov extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vr(this.value.arrayValue,r))}}/**
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
 */class oo{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class Ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Je(0,0))}static max(){return new Ee(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Fs{constructor(e,n){this.comparator=e,this.root=n||we.EMPTY}insert(e,n){return new Fs(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new Fs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cs(this.root,e,this.comparator,!1)}getReverseIterator(){return new cs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cs(this.root,e,this.comparator,!0)}}class cs{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??we.RED,this.left=s??we.EMPTY,this.right=i??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new we(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return we.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new we(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xr{constructor(e){this.comparator=e,this.data=new Fs(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ll(this.data.getIterator())}getIteratorFrom(e){return new Ll(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xr)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xr(this.comparator);return n.data=e,n}}class Ll{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mr{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new Mr([])}unionWith(e){let n=new xr(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vf(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ki(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mr(n)}setAll(e){let n=Fe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=mr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ki(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ms(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ki(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){si(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new tt(mr(this.value))}}/**
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
 */class dt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new dt(e,0,Ee.min(),Ee.min(),Ee.min(),tt.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,Ee.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,Ee.min(),Ee.min(),tt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,Ee.min(),Ee.min(),tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class av{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.C=null}}function Fl(t,e=null,n=[],r=[],s=null,i=null,o=null){return new av(t,e,n,r,s,i,o)}/**
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
 */class Sf{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function lv(t){return t.collectionGroup!==null}function cv(t){const e=Gr(t);if(e.S===null){e.S=[];const n=new Set;for(const i of e.explicitOrderBy)e.S.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new xr(Fe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.S.push(new oo(i,r))}),n.has(Fe.keyField().canonicalString())||e.S.push(new oo(Fe.keyField(),r))}return e.S}function uv(t){const e=Gr(t);return e.N||(e.N=fv(e,cv(t))),e.N}function fv(t,e){if(t.limitType==="F")return Fl(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new oo(s.field,i)});const n=t.endAt?new Ml(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ml(t.startAt.position,t.startAt.inclusive):null;return Fl(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ao(t,e){const n=t.filters.concat([e]);return new Sf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
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
 */function Af(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xs(e)?"-0":e}}function hv(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!xs(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):Af(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this._=void 0}}class dv extends ii{}class pv extends ii{constructor(e){super(),this.elements=e}}class mv extends ii{constructor(e){super(),this.elements=e}}class gv extends ii{constructor(e,n){super(),this.serializer=e,this.q=n}}class $n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class oi{}class Rf extends oi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pf extends oi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Cf extends oi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _v extends oi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const yv={asc:"ASCENDING",desc:"DESCENDING"},vv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ev={and:"AND",or:"OR"};class wv{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Iv(t,e){return lo(t,e.toTimestamp())}function gr(t){return Ge(!!t),Ee.fromTimestamp(function(n){const r=wn(n);return new Je(r.seconds,r.nanos)}(t))}function ta(t,e){return co(t,e).canonicalString()}function co(t,e){const n=function(s){return new ge(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Us(t,e){return ta(t.databaseId,e.path)}function uo(t,e){const n=function(s){const i=ge.fromString(s);return Ge(kf(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new M(H,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(H,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ie(function(s){return Ge(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}(n))}function Ul(t,e,n){return{name:Us(t,e),fields:n.value.mapValue.fields}}function Tv(t,e){return"found"in e?function(r,s){Ge(!!s.found),s.found.name,s.found.updateTime;const i=uo(r,s.found.name),o=gr(s.found.updateTime),a=s.found.createTime?gr(s.found.createTime):Ee.min(),l=new tt({mapValue:{fields:s.found.fields}});return dt.newFoundDocument(i,o,a,l)}(t,e):"missing"in e?function(r,s){Ge(!!s.missing),Ge(!!s.readTime);const i=uo(r,s.missing),o=gr(s.readTime);return dt.newNoDocument(i,o)}(t,e):fe()}function Sv(t,e){let n;if(e instanceof Rf)n={update:Ul(t,e.key,e.value)};else if(e instanceof Cf)n={delete:Us(t,e.key)};else if(e instanceof Pf)n={update:Ul(t,e.key,e.data),updateMask:Ov(e.fieldMask)};else{if(!(e instanceof _v))return fe();n={verify:Us(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof dv)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof pv)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof mv)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof gv)return{fieldPath:o.field.canonicalString(),increment:a.q};throw fe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Iv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe()}(t,e.precondition)),n}function Av(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=function(c,u){return ta(c.databaseId,u)}(t,s);const i=function(c){if(c.length!==0)return Of(Yr.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(p){return{field:kn(p.field),direction:Rv(p.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=function(c,u){return c.useProto3Json||Ky(u)?u:{value:u}}(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{B:n,parent:s}}function Rv(t){return yv[t]}function Pv(t){return vv[t]}function Cv(t){return Ev[t]}function kn(t){return{fieldPath:t.canonicalString()}}function Of(t){return t instanceof ot?function(n){if(n.op==="=="){if(xl(n.value))return{unaryFilter:{field:kn(n.field),op:"IS_NAN"}};if(Vl(n.value))return{unaryFilter:{field:kn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xl(n.value))return{unaryFilter:{field:kn(n.field),op:"IS_NOT_NAN"}};if(Vl(n.value))return{unaryFilter:{field:kn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kn(n.field),op:Pv(n.op),value:n.value}}}(t):t instanceof Yr?function(n){const r=n.getFilters().map(s=>Of(s));return r.length===1?r[0]:{compositeFilter:{op:Cv(n.op),filters:r}}}(t):fe()}function Ov(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function na(t){return new wv(t,!0)}/**
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
 */class kv extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.Y=!1}Z(){if(this.Y)throw new M(qn,"The client has already been terminated.")}P(e,n,r,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.P(e,co(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===io&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(pr,i.toString())})}g(e,n,r,s,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,co(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===io&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(pr,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function Nf(t,e){const n=Gr(t),r={writes:e.map(s=>Sv(n.serializer,s))};await n.P("Commit",n.serializer.databaseId,ge.emptyPath(),r)}async function Nv(t,e){const n=Gr(t),r={documents:e.map(a=>Us(n.serializer,a))},s=await n.g("BatchGetDocuments",n.serializer.databaseId,ge.emptyPath(),r,e.length),i=new Map;s.forEach(a=>{const l=Tv(n.serializer,a);i.set(l.key.toString(),l)});const o=[];return e.forEach(a=>{const l=i.get(a.toString());Ge(!!l),o.push(l)}),o}async function Dv(t,e){const n=Gr(t),{B:r,parent:s}=Av(n.serializer,uv(e));return(await n.g("RunQuery",n.serializer.databaseId,s,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(a,l,c){const u=uo(a,l.name),h=gr(l.updateTime),p=l.createTime?gr(l.createTime):Ee.min(),m=new tt({mapValue:{fields:l.fields}}),b=dt.newFoundDocument(u,h,p,m);return c&&b.setHasCommittedMutations(),c?b.setHasCommittedMutations():b}(n.serializer,i.document,void 0))}/**
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
 */const _r=new Map;function ai(t){if(t._terminated)throw new M(qn,"The client has already been terminated.");if(!_r.has(t)){Vs("ComponentProvider","Initializing Datastore");const e=function(i){return new Jy(i,fetch.bind(null))}(function(i,o,a,l){return new qy(i,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,yf(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=na(t._databaseId),r=function(i,o,a,l){return new kv(i,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);_r.set(t,r)}return _r.get(t)}class $l{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(H,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(H,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,o,a,l){if(o===!0&&l===!0)throw new M(H,`${i} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new M(H,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new M(H,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new M(H,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class li{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $l({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(qn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(qn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $l(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ly;switch(r.type){case"firstParty":return new jy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(H,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_r.get(n);r&&(Vs("ComponentProvider","Removing Datastore"),_r.delete(n),r.terminate())}(this),Promise.resolve()}}function Vv(t,e){const n=Ou(),r="(default)",s=Ho(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=Wp("firestore");i&&xv(s,...i)}return s}function xv(t,e,n,r={}){var s;const i=(t=Jr(t,li))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&pf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Le.MOCK_USER;else{a=Kp(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new M(H,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Le(c)}t._authCredentials=new Fy(new gf(a,l))}}/**
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
 */class Qn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qn(this.firestore,e,this._query)}}class je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class kt extends Qn{constructor(e,n,r){super(e,n,function(i){return new Sf(i)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new Ie(e))}withConverter(e){return new kt(this.firestore,e,this._path)}}function jl(t,e,...n){if(t=Ve(t),_f("collection","path",e),t instanceof li){const r=ge.fromString(e,...n);return Rl(r),new kt(t,null,r)}{if(!(t instanceof je||t instanceof kt))throw new M(H,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Rl(r),new kt(t.firestore,null,r)}}function Df(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=Qy.newId()),_f("doc","path",e),t instanceof li){const r=ge.fromString(e,...n);return Al(r),new je(t,null,new Ie(r))}{if(!(t instanceof je||t instanceof kt))throw new M(H,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Al(r),new je(t.firestore,t instanceof kt?t.converter:null,new Ie(r))}}/**
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
 */class Wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wn(Vt.fromBase64String(e))}catch(n){throw new M(H,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wn(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ra{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(H,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Vf{constructor(e){this._methodName=e}}/**
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
 */class sa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(H,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(H,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Mv=/^__.*__$/;class Lv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pf(e,this.data,this.fieldMask,n,this.fieldTransforms):new Rf(e,this.data,n,this.fieldTransforms)}}function xf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class oa{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new oa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.st(e),s}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.tt(),s}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return $s(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(xf(this.et)&&Mv.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class Fv{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||na(e)}ht(e,n,r,s=!1){return new oa({et:e,methodName:n,lt:r,path:Fe.emptyPath(),it:!1,ct:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mf(t){const e=t._freezeSettings(),n=na(t._databaseId);return new Fv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Uv(t,e,n,r,s,i={}){const o=t.ht(i.merge||i.mergeFields?2:0,e,n,s);Uf("Data must be an object, but it was:",o,r);const a=Lf(r,o);let l,c;if(i.merge)l=new Mr(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const p=jv(e,h,n);if(!o.contains(p))throw new M(H,`Field '${p}' is specified in your field mask but missing from your input data.`);Hv(u,p)||u.push(p)}l=new Mr(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Lv(new tt(a),l,c)}function $v(t,e,n,r=!1){return aa(n,t.ht(r?4:3,e))}function aa(t,e){if(Ff(t=Ve(t)))return Uf("Unsupported field value:",e,t),Lf(t,e);if(t instanceof Vf)return function(r,s){if(!xf(s.et))throw s._t(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s._t(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=aa(a,s.ut(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:lo(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lo(s.serializer,i)}}if(r instanceof sa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wn)return{bytesValue:bv(s.serializer,r._byteString)};if(r instanceof je){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ta(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ia)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a._t("VectorValues must only contain numeric values.");return Af(a.serializer,l)})}}}}}}(r,s);throw s._t(`Unsupported field value: ${ri(r)}`)}(t,e)}function Lf(t,e){const n={};return function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):si(t,(r,s)=>{const i=aa(s,e.nt(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ff(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof sa||t instanceof Wn||t instanceof je||t instanceof Vf||t instanceof ia)}function Uf(t,e,n){if(!Ff(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ri(n);throw r==="an object"?e._t(t+" a custom object"):e._t(t+" "+r)}}function jv(t,e,n){if((e=Ve(e))instanceof ra)return e._internalPath;if(typeof e=="string")return $f(t,e);throw $s("Field path arguments must be of type string or ",t,!1,void 0,n)}const Bv=new RegExp("[~\\*/\\[\\]]");function $f(t,e,n){if(e.search(Bv)>=0)throw $s(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ra(...e.split("."))._internalPath}catch{throw $s(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $s(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new M(H,a+t+l)}function Hv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class jf{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Bf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Bf extends jf{data(){return super.data()}}class qv{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Hf(t,e){return typeof e=="string"?$f(t,e):e instanceof ra?e._internalPath:e._delegate._internalPath}/**
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
 */class la{}class Wv extends la{}function zv(t,e,...n){let r=[];e instanceof la&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof ca).length,a=i.filter(l=>l instanceof ci).length;if(o>1||o>0&&a>0)throw new M(H,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ci extends Wv{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ci(e,n,r)}_apply(e){const n=this._parse(e);return qf(e._query,n),new Qn(e.firestore,e.converter,ao(e._query,n))}_parse(e){const n=Mf(e.firestore);return function(i,o,a,l,c,u,h){let p;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(H,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Hl(h,u);const m=[];for(const b of h)m.push(Bl(l,i,b));p={arrayValue:{values:m}}}else p=Bl(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Hl(h,u),p=$v(a,o,h,u==="in"||u==="not-in");return ot.create(c,u,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Kv(t,e,n){const r=e,s=Hf("where",t);return ci._create(s,r,n)}class ca extends la{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ca(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Yr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)qf(o,l),o=ao(o,l)}(e._query,n),new Qn(e.firestore,e.converter,ao(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Bl(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new M(H,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lv(e)&&n.indexOf("/")!==-1)throw new M(H,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!Ie.isDocumentKey(r))throw new M(H,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dl(t,new Ie(r))}if(n instanceof je)return Dl(t,n._key);throw new M(H,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ri(n)}.`)}function Hl(t,e){if(!Array.isArray(t)||t.length===0)throw new M(H,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qf(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(H,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(H,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}/**
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
 */function Gv(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Wf extends class{convertValue(n,r="none"){switch(bn(n)){case 0:return null;case 1:return n.booleanValue;case 2:return me(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(Nr(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 11:return this.convertObject(n.mapValue,r);case 10:return this.convertVectorValue(n.mapValue);default:throw fe()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const s={};return si(n,(i,o)=>{s[i]=this.convertValue(o,r)}),s}convertVectorValue(n){var r,s,i;const o=(i=(s=(r=n.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(a=>me(a.doubleValue));return new ia(o)}convertGeoPoint(n){return new sa(me(n.latitude),me(n.longitude))}convertArray(n,r){return(n.values||[]).map(s=>this.convertValue(s,r))}convertServerTimestamp(n,r){switch(r){case"previous":const s=wf(n);return s==null?null:this.convertValue(s,r);case"estimate":return this.convertTimestamp(Dr(n));default:return null}}convertTimestamp(n){const r=wn(n);return new Je(r.seconds,r.nanos)}convertDocumentKey(n,r){const s=ge.fromString(n);Ge(kf(s));const i=new Or(s.get(1),s.get(3)),o=new Ie(s.popFirst(5));return i.isEqual(r)||Zo(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function Jv(t){const e=ai((t=Jr(t,je)).firestore),n=new Wf(t.firestore);return Nv(e,[t._key]).then(r=>{Ge(r.length===1);const s=r[0];return new jf(t.firestore,n,t._key,s.isFoundDocument()?s:null,t.converter)})}function Yv(t){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new M(mf,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Jr(t,Qn))._query);const e=ai(t.firestore),n=new Wf(t.firestore);return Dv(e,t._query).then(r=>{const s=r.map(i=>new Bf(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new qv(t,s)})}function Qv(t){return Nf(ai((t=Jr(t,je)).firestore),[new Cf(t._key,$n.none())])}function Xv(t,e){const n=Df(t=Jr(t,kt)),r=Gv(t.converter,e),s=Uv(Mf(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return Nf(ai(t.firestore),[s.toMutation(n._key,$n.exists(!1))]).then(()=>n)}(function(){(function(n){Yn=n})(`${Gn}_lite`),Bn(new yn("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new li(new Uy(e.getProvider("auth-internal")),new Hy(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(H,'"projectId" not provided in firebase.initializeApp.');return new Or(a.options.projectId,l)}(s,n),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),Zt("firestore-lite","4.7.1",""),Zt("firestore-lite","4.7.1","esm2017")})();const Zv={apiKey:"AIzaSyCI9MC9qMkmjuV23QEVVfLmaw6Gywu82sY",authDomain:"vue3-project-mrs.firebaseapp.com",projectId:"vue3-project-mrs",storageBucket:"vue3-project-mrs.appspot.com",messagingSenderId:"587619424480",appId:"1:587619424480:web:9ea9ac223c778164fc5885"};Cu(Zv);const Ni=Vv(),dn=Ty();/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Nn=typeof document<"u";function zf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function eE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&zf(t.default)}const re=Object.assign;function Di(t,e){const n={};for(const r in e){const s=e[r];n[r]=it(s)?s.map(t):t(s)}return n}const yr=()=>{},it=Array.isArray,Kf=/#/g,tE=/&/g,nE=/\//g,rE=/=/g,sE=/\?/g,Gf=/\+/g,iE=/%5B/g,oE=/%5D/g,Jf=/%5E/g,aE=/%60/g,Yf=/%7B/g,lE=/%7C/g,Qf=/%7D/g,cE=/%20/g;function ua(t){return encodeURI(""+t).replace(lE,"|").replace(iE,"[").replace(oE,"]")}function uE(t){return ua(t).replace(Yf,"{").replace(Qf,"}").replace(Jf,"^")}function fo(t){return ua(t).replace(Gf,"%2B").replace(cE,"+").replace(Kf,"%23").replace(tE,"%26").replace(aE,"`").replace(Yf,"{").replace(Qf,"}").replace(Jf,"^")}function fE(t){return fo(t).replace(rE,"%3D")}function hE(t){return ua(t).replace(Kf,"%23").replace(sE,"%3F")}function dE(t){return t==null?"":hE(t).replace(nE,"%2F")}function Lr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const pE=/\/$/,mE=t=>t.replace(pE,"");function Vi(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=vE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Lr(o)}}function gE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ql(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _E(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&zn(e.matched[r],n.matched[s])&&Xf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yE(t[n],e[n]))return!1;return!0}function yE(t,e){return it(t)?Wl(t,e):it(e)?Wl(e,t):t===e}function Wl(t,e){return it(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function vE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Fr;(function(t){t.pop="pop",t.push="push"})(Fr||(Fr={}));var vr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vr||(vr={}));function EE(t){if(!t)if(Nn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mE(t)}const wE=/^[^#]+#/;function bE(t,e){return t.replace(wE,"#")+e}function IE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ui=()=>({left:window.scrollX,top:window.scrollY});function TE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=IE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function zl(t,e){return(history.state?history.state.position-e:-1)+t}const ho=new Map;function SE(t,e){ho.set(t,e)}function AE(t){const e=ho.get(t);return ho.delete(t),e}let RE=()=>location.protocol+"//"+location.host;function Zf(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),ql(l,"")}return ql(n,t)+r+s}function PE(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Zf(t,location),b=n.value,R=e.value;let U=0;if(p){if(n.value=m,e.value=p,o&&o===b){o=null;return}U=R?p.position-R.position:0}else r(m);s.forEach(V=>{V(n.value,b,{delta:U,type:Fr.pop,direction:U?U>0?vr.forward:vr.back:vr.unknown})})};function l(){o=n.value}function c(p){s.push(p);const m=()=>{const b=s.indexOf(p);b>-1&&s.splice(b,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(re({},p.state,{scroll:ui()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Kl(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ui():null}}function CE(t){const{history:e,location:n}=window,r={value:Zf(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:RE()+t+l;try{e[u?"replaceState":"pushState"](c,"",p),s.value=c}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(l,c){const u=re({},e.state,Kl(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=re({},s.value,e.state,{forward:l,scroll:ui()});i(u.current,u,!0);const h=re({},Kl(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function OE(t){t=EE(t);const e=CE(t),n=PE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:t,go:r,createHref:bE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function kE(t){return typeof t=="string"||t&&typeof t=="object"}function eh(t){return typeof t=="string"||typeof t=="symbol"}const th=Symbol("");var Gl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gl||(Gl={}));function Kn(t,e){return re(new Error,{type:t,[th]:!0},e)}function bt(t,e){return t instanceof Error&&th in t&&(e==null||!!(t.type&e))}const Jl="[^/]+?",NE={sensitive:!1,strict:!1,start:!0,end:!0},DE=/[.+*?^${}()[\]/\\]/g;function VE(t,e){const n=re({},NE,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const p=c[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(DE,"\\$&"),m+=40;else if(p.type===1){const{value:b,repeatable:R,optional:U,regexp:V}=p;i.push({name:b,repeatable:R,optional:U});const k=V||Jl;if(k!==Jl){m+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${b}" (${k}): `+O.message)}}let N=R?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(N=U&&c.length<2?`(?:/${N})`:"/"+N),U&&(N+="?"),s+=N,m+=20,U&&(m+=-8),R&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",b=i[p-1];h[b.name]=m&&b.repeatable?m.split("/"):m}return h}function l(c){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:b,repeatable:R,optional:U}=m,V=b in c?c[b]:"";if(it(V)&&!R)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const k=it(V)?V.join("/"):V;if(!k)if(U)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${b}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function xE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function nh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=xE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Yl(r))return 1;if(Yl(s))return-1}return s.length-r.length}function Yl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ME={type:0,value:""},LE=/[a-zA-Z0-9_]/;function FE(t){if(!t)return[[]];if(t==="/")return[[ME]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:LE.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function UE(t,e,n){const r=VE(FE(t.path),n),s=re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $E(t,e){const n=[],r=new Map;e=ec({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,m){const b=!m,R=Xl(h);R.aliasOf=m&&m.record;const U=ec(e,h),V=[R];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const q of O)V.push(Xl(re({},R,{components:m?m.record.components:R.components,path:q,aliasOf:m?m.record:R})))}let k,N;for(const O of V){const{path:q}=O;if(p&&q[0]!=="/"){const he=p.record.path,Y=he[he.length-1]==="/"?"":"/";O.path=p.record.path+(q&&Y+q)}if(k=UE(O,p,U),m?m.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),b&&h.name&&!Zl(k)&&o(h.name)),rh(k)&&l(k),R.children){const he=R.children;for(let Y=0;Y<he.length;Y++)i(he[Y],k,m&&m.children[Y])}m=m||k}return N?()=>{o(N)}:yr}function o(h){if(eh(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const p=HE(h,n);n.splice(p,0,h),h.record.name&&!Zl(h)&&r.set(h.record.name,h)}function c(h,p){let m,b={},R,U;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw Kn(1,{location:h});U=m.record.name,b=re(Ql(p.params,m.keys.filter(N=>!N.optional).concat(m.parent?m.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),h.params&&Ql(h.params,m.keys.map(N=>N.name))),R=m.stringify(b)}else if(h.path!=null)R=h.path,m=n.find(N=>N.re.test(R)),m&&(b=m.parse(R),U=m.record.name);else{if(m=p.name?r.get(p.name):n.find(N=>N.re.test(p.path)),!m)throw Kn(1,{location:h,currentLocation:p});U=m.record.name,b=re({},p.params,h.params),R=m.stringify(b)}const V=[];let k=m;for(;k;)V.unshift(k.record),k=k.parent;return{name:U,path:R,params:b,matched:V,meta:BE(V)}}t.forEach(h=>i(h));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Ql(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Xl(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:jE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function jE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Zl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function BE(t){return t.reduce((e,n)=>re(e,n.meta),{})}function ec(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function HE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;nh(t,e[i])<0?r=i:n=i+1}const s=qE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function qE(t){let e=t;for(;e=e.parent;)if(rh(e)&&nh(t,e)===0)return e}function rh({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function WE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Gf," "),o=i.indexOf("="),a=Lr(o<0?i:i.slice(0,o)),l=o<0?null:Lr(i.slice(o+1));if(a in e){let c=e[a];it(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function tc(t){let e="";for(let n in t){const r=t[n];if(n=fE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(it(r)?r.map(i=>i&&fo(i)):[r&&fo(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function zE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=it(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const KE=Symbol(""),nc=Symbol(""),fa=Symbol(""),sh=Symbol(""),po=Symbol("");function tr(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Wt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=p=>{p===!1?l(Kn(4,{from:n,to:e})):p instanceof Error?l(p):kE(p)?l(Kn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(p=>l(p))})}function xi(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(zf(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Wt(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=eE(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const m=(h.__vccOpts||h)[e];return m&&Wt(m,n,r,o,a,s)()}))}}return i}function rc(t){const e=gt(fa),n=gt(sh),r=Qe(()=>{const l=ve(t.to);return e.resolve(l)}),s=Qe(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(zn.bind(null,u));if(p>-1)return p;const m=sc(l[c-2]);return c>1&&sc(u)===m&&h[h.length-1].path!==m?h.findIndex(zn.bind(null,l[c-2])):p}),i=Qe(()=>s.value>-1&&QE(n.params,r.value.params)),o=Qe(()=>s.value>-1&&s.value===n.matched.length-1&&Xf(n.params,r.value.params));function a(l={}){return YE(l)?e[ve(t.replace)?"replace":"push"](ve(t.to)).catch(yr):Promise.resolve()}return{route:r,href:Qe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const GE=jc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rc,setup(t,{slots:e}){const n=Ur(rc(t)),{options:r}=gt(fa),s=Qe(()=>({[ic(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ic(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:pu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),JE=GE;function YE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function QE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!it(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function sc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ic=(t,e,n)=>t??e??n,XE=jc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=gt(po),s=Qe(()=>t.route||r.value),i=gt(nc,0),o=Qe(()=>{let c=ve(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Qe(()=>s.value.matched[o.value]);hs(nc,Qe(()=>o.value+1)),hs(KE,a),hs(po,s);const l=tn();return ur(()=>[l.value,a.value,t.name],([c,u,h],[p,m,b])=>{u&&(u.instances[h]=c,m&&m!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!zn(u,m)||!p)&&(u.enterCallbacks[h]||[]).forEach(R=>R(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return oc(n.default,{Component:p,route:c});const m=h.props[u],b=m?m===!0?c.params:typeof m=="function"?m(c):m:null,U=pu(p,re({},b,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return oc(n.default,{Component:U,route:c})||U}}});function oc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ZE=XE;function ew(t){const e=$E(t.routes,t),n=t.parseQuery||WE,r=t.stringifyQuery||tc,s=t.history,i=tr(),o=tr(),a=tr(),l=Fh(jt);let c=jt;Nn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Di.bind(null,y=>""+y),h=Di.bind(null,dE),p=Di.bind(null,Lr);function m(y,C){let A,D;return eh(y)?(A=e.getRecordMatcher(y),D=C):D=y,e.addRoute(D,A)}function b(y){const C=e.getRecordMatcher(y);C&&e.removeRoute(C)}function R(){return e.getRoutes().map(y=>y.record)}function U(y){return!!e.getRecordMatcher(y)}function V(y,C){if(C=re({},C||l.value),typeof y=="string"){const d=Vi(n,y,C.path),g=e.resolve({path:d.path},C),v=s.createHref(d.fullPath);return re(d,g,{params:p(g.params),hash:Lr(d.hash),redirectedFrom:void 0,href:v})}let A;if(y.path!=null)A=re({},y,{path:Vi(n,y.path,C.path).path});else{const d=re({},y.params);for(const g in d)d[g]==null&&delete d[g];A=re({},y,{params:h(d)}),C.params=h(C.params)}const D=e.resolve(A,C),te=y.hash||"";D.params=u(p(D.params));const ue=gE(r,re({},y,{hash:uE(te),path:D.path})),f=s.createHref(ue);return re({fullPath:ue,hash:te,query:r===tc?zE(y.query):y.query||{}},D,{redirectedFrom:void 0,href:f})}function k(y){return typeof y=="string"?Vi(n,y,l.value.path):re({},y)}function N(y,C){if(c!==y)return Kn(8,{from:C,to:y})}function O(y){return Y(y)}function q(y){return O(re(k(y),{replace:!0}))}function he(y){const C=y.matched[y.matched.length-1];if(C&&C.redirect){const{redirect:A}=C;let D=typeof A=="function"?A(y):A;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=k(D):{path:D},D.params={}),re({query:y.query,hash:y.hash,params:D.path!=null?{}:y.params},D)}}function Y(y,C){const A=c=V(y),D=l.value,te=y.state,ue=y.force,f=y.replace===!0,d=he(A);if(d)return Y(re(k(d),{state:typeof d=="object"?re({},te,d.state):te,force:ue,replace:f}),C||A);const g=A;g.redirectedFrom=C;let v;return!ue&&_E(r,D,A)&&(v=Kn(16,{to:g,from:D}),at(D,D,!0,!1)),(v?Promise.resolve(v):ae(g,D)).catch(_=>bt(_)?bt(_,2)?_:Ft(_):X(_,g,D)).then(_=>{if(_){if(bt(_,2))return Y(re({replace:f},k(_.to),{state:typeof _.to=="object"?re({},te,_.to.state):te,force:ue}),C||g)}else _=Be(g,D,!0,f,te);return Pe(g,D,_),_})}function K(y,C){const A=N(y,C);return A?Promise.reject(A):Promise.resolve()}function z(y){const C=An.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(y):y()}function ae(y,C){let A;const[D,te,ue]=tw(y,C);A=xi(D.reverse(),"beforeRouteLeave",y,C);for(const d of D)d.leaveGuards.forEach(g=>{A.push(Wt(g,y,C))});const f=K.bind(null,y,C);return A.push(f),Ye(A).then(()=>{A=[];for(const d of i.list())A.push(Wt(d,y,C));return A.push(f),Ye(A)}).then(()=>{A=xi(te,"beforeRouteUpdate",y,C);for(const d of te)d.updateGuards.forEach(g=>{A.push(Wt(g,y,C))});return A.push(f),Ye(A)}).then(()=>{A=[];for(const d of ue)if(d.beforeEnter)if(it(d.beforeEnter))for(const g of d.beforeEnter)A.push(Wt(g,y,C));else A.push(Wt(d.beforeEnter,y,C));return A.push(f),Ye(A)}).then(()=>(y.matched.forEach(d=>d.enterCallbacks={}),A=xi(ue,"beforeRouteEnter",y,C,z),A.push(f),Ye(A))).then(()=>{A=[];for(const d of o.list())A.push(Wt(d,y,C));return A.push(f),Ye(A)}).catch(d=>bt(d,8)?d:Promise.reject(d))}function Pe(y,C,A){a.list().forEach(D=>z(()=>D(y,C,A)))}function Be(y,C,A,D,te){const ue=N(y,C);if(ue)return ue;const f=C===jt,d=Nn?history.state:{};A&&(D||f?s.replace(y.fullPath,re({scroll:f&&d&&d.scroll},te)):s.push(y.fullPath,te)),l.value=y,at(y,C,A,f),Ft()}let xe;function ln(){xe||(xe=s.listen((y,C,A)=>{if(!Xr.listening)return;const D=V(y),te=he(D);if(te){Y(re(te,{replace:!0}),D).catch(yr);return}c=D;const ue=l.value;Nn&&SE(zl(ue.fullPath,A.delta),ui()),ae(D,ue).catch(f=>bt(f,12)?f:bt(f,2)?(Y(f.to,D).then(d=>{bt(d,20)&&!A.delta&&A.type===Fr.pop&&s.go(-1,!1)}).catch(yr),Promise.reject()):(A.delta&&s.go(-A.delta,!1),X(f,D,ue))).then(f=>{f=f||Be(D,ue,!1),f&&(A.delta&&!bt(f,8)?s.go(-A.delta,!1):A.type===Fr.pop&&bt(f,20)&&s.go(-1,!1)),Pe(D,ue,f)}).catch(yr)}))}let Lt=tr(),le=tr(),W;function X(y,C,A){Ft(y);const D=le.list();return D.length?D.forEach(te=>te(y,C,A)):console.error(y),Promise.reject(y)}function Et(){return W&&l.value!==jt?Promise.resolve():new Promise((y,C)=>{Lt.add([y,C])})}function Ft(y){return W||(W=!y,ln(),Lt.list().forEach(([C,A])=>y?A(y):C()),Lt.reset()),y}function at(y,C,A,D){const{scrollBehavior:te}=t;if(!Nn||!te)return Promise.resolve();const ue=!A&&AE(zl(y.fullPath,0))||(D||!A)&&history.state&&history.state.scroll||null;return Do().then(()=>te(y,C,ue)).then(f=>f&&TE(f)).catch(f=>X(f,y,C))}const Me=y=>s.go(y);let Sn;const An=new Set,Xr={currentRoute:l,listening:!0,addRoute:m,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:U,getRoutes:R,resolve:V,options:t,push:O,replace:q,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:Et,install(y){const C=this;y.component("RouterLink",JE),y.component("RouterView",ZE),y.config.globalProperties.$router=C,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ve(l)}),Nn&&!Sn&&l.value===jt&&(Sn=!0,O(s.location).catch(te=>{}));const A={};for(const te in jt)Object.defineProperty(A,te,{get:()=>l.value[te],enumerable:!0});y.provide(fa,C),y.provide(sh,Nc(A)),y.provide(po,l);const D=y.unmount;An.add(y),y.unmount=function(){An.delete(y),An.size<1&&(c=jt,xe&&xe(),xe=null,l.value=jt,Sn=!1,W=!1),D()}}};function Ye(y){return y.reduce((C,A)=>C.then(()=>z(A)),Promise.resolve())}return Xr}function tw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>zn(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>zn(c,l))||s.push(l))}return[n,r,s]}const nw="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let rw=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+=nw[n[t]&63];return e};const mo=Eu("database",{state:()=>({documents:[],loadingDoc:!1,error:null}),actions:{async getUrls(){if(this.documents.length===0){this.loadingDoc=!0;try{const t=zv(jl(Ni,"urls"),Kv("user","==",dn.currentUser.uid));(await Yv(t)).forEach(n=>{this.documents.push({id:n.id,...n.data()})})}catch(t){console.log(t)}finally{this.loadingDoc=!1}}},async addUrl(t){try{const e={name:t,short:rw(),user:dn.currentUser.uid},n=await Xv(jl(Ni,"urls"),e);this.documents.push({...e,id:n.id})}catch(e){console.log(e)}},async deleteUrl(t){try{const e=Df(Ni,"urls",t),n=await Jv(e);if(!n.exists())throw new Error("No existe el documento");if(n.data().user!==dn.currentUser.uid)throw new Error("No tienes permisos para eliminar este documento");await Qv(e),this.documents=this.documents.filter(r=>r.id!==t)}catch(e){console.log(e.message)}finally{}}}}),sw={key:0},iw={key:1,class:"lista"},ow=["onClick"],aw={__name:"Home",setup(t){const e=Qr(),n=mo();n.getUrls();const r=tn(""),s=()=>{n.addUrl(r.value)};return(i,o)=>{var a;return ke(),et("div",null,[o[4]||(o[4]=de("h1",null,"Home ",-1)),de("p",null,nr((a=ve(e).userData)==null?void 0:a.email),1),de("form",{onSubmit:Uo(s,["prevent"])},[Tr(de("input",{type:"text",placeholder:"Ingrese la URL","onUpdate:modelValue":o[0]||(o[0]=l=>r.value=l)},null,512),[[Ar,r.value]]),o[1]||(o[1]=de("button",{type:"submit"},"Agregar",-1))],32),ve(n).loadingDoc?(ke(),et("p",sw,"loading docs...")):(ke(),et("ul",iw,[(ke(!0),et(ft,null,dd(ve(n).documents,l=>(ke(),et("li",{key:l.id},[St(nr(l.id)+" ",1),o[2]||(o[2]=de("br",null,null,-1)),St(" "+nr(l.name)+" ",1),o[3]||(o[3]=de("br",null,null,-1)),St(" "+nr(l.short)+" ",1),de("button",{onClick:c=>ve(n).deleteUrl(l.id)},"Eliminar",8,ow)]))),128))]))])}}},lw=["disabled"],cw={__name:"Login",setup(t){const e=Qr(),n=tn(""),r=tn(""),s=async()=>{if(!n.value||r.value.length<6)return alert("Campos vacios");await e.loginUser(n.value,r.value)};return(i,o)=>(ke(),et("div",null,[o[2]||(o[2]=de("h1",null,"Login",-1)),de("form",{onSubmit:Uo(s,["prevent"])},[Tr(de("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a)},null,512),[[Ar,n.value,void 0,{trim:!0}]]),Tr(de("input",{type:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a)},null,512),[[Ar,r.value,void 0,{trim:!0}]]),de("button",{type:"submit",disabled:ve(e).loadingUser},"Acceso",8,lw)],32)]))}},uw=["disabled"],fw={__name:"Register",setup(t){const e=Qr(),n=tn(""),r=tn(""),s=async()=>{if(!n.value||r.value.length<6)return alert("Campos vacios");await e.registerUser(n.value,r.value)};return(i,o)=>(ke(),et("div",null,[o[2]||(o[2]=de("h1",null,"Register",-1)),de("form",{onSubmit:Uo(s,["prevent"])},[Tr(de("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a)},null,512),[[Ar,n.value,void 0,{trim:!0}]]),Tr(de("input",{type:"password",name:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a)},null,512),[[Ar,r.value,void 0,{trim:!0}]]),de("button",{type:"submit",disabled:ve(e).loadingUser},"Crear usuario",8,uw)],32)]))}},hw=async(t,e,n)=>{const r=Qr();r.loadingSession=!0,await r.currentUser()?n():n("/login"),r.loadingSession=!1},dw=[{path:"/",component:aw,beforeEnter:[hw]},{path:"/login",component:cw},{path:"/register",component:fw}],Es=ew({routes:dw,history:OE()}),Qr=Eu("userStore",{state:()=>({userData:null,loadingUser:!1,loadingSession:!1}),actions:{async registerUser(t,e){this.loadingUser=!0;try{const{user:n}=await l_(dn,t,e);this.userData={email:n.email,uid:n.uid},Es.push("/")}catch(n){console.log(n)}finally{this.loadingUser=!1}},async loginUser(t,e){this.loadingUser=!0;try{const{user:n}=await c_(dn,t,e);this.userData={email:n.email,uid:n.uid},Es.push("/")}catch(n){console.log(n)}finally{this.loadingUser=!1}},async logOutUser(){mo().$reset();try{await d_(dn),this.userData=null,Es.push("/login")}catch{console.log(err)}},currentUser(){return new Promise((t,e)=>{h_(dn,n=>{n?this.userData={email:n.email,uid:n.uid}:(this.userData=null,mo().$reset()),t(n)},n=>{console.log("error"),e(n)})})}}}),pw={key:0},mw={key:1},gw={__name:"App",setup(t){const e=Qr();return(n,r)=>{const s=ba("router-link"),i=ba("router-view");return ke(),et("div",null,[ve(e).loadingSession?(ke(),et("div",mw,r[6]||(r[6]=[de("p",null,"Loading...",-1)]))):(ke(),et("div",pw,[de("nav",null,[ve(e).userData?(ke(),ds(s,{key:0,to:"/"},{default:fs(()=>r[1]||(r[1]=[St("Home")])),_:1})):is("",!0),r[4]||(r[4]=St(" | ")),ve(e).userData?is("",!0):(ke(),ds(s,{key:1,to:"/login"},{default:fs(()=>r[2]||(r[2]=[St("Login")])),_:1})),r[5]||(r[5]=St(" | ")),ve(e).userData?is("",!0):(ke(),ds(s,{key:2,to:"/register"},{default:fs(()=>r[3]||(r[3]=[St("Register")])),_:1})),ve(e).userData?(ke(),et("button",{key:3,onClick:r[0]||(r[0]=(...o)=>ve(e).logOutUser&&ve(e).logOutUser(...o))},"Logout")):is("",!0)])])),$e(i)])}}};Pp(gw).use(Es).use(Np()).mount("#app");
