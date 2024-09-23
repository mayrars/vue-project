(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function to(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ie={},Nn=[],ut=()=>{},Vf=()=>!1,Vs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),no=t=>t.startsWith("onUpdate:"),be=Object.assign,ro=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xf=Object.prototype.hasOwnProperty,Z=(t,e)=>xf.call(t,e),$=Array.isArray,Dn=t=>xs(t)==="[object Map]",ql=t=>xs(t)==="[object Set]",B=t=>typeof t=="function",pe=t=>typeof t=="string",en=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",zl=t=>(ce(t)||B(t))&&B(t.then)&&B(t.catch),Kl=Object.prototype.toString,xs=t=>Kl.call(t),Lf=t=>xs(t).slice(8,-1),Gl=t=>xs(t)==="[object Object]",so=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ir=to(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ls=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Mf=/-(\w)/g,Ze=Ls(t=>t.replace(Mf,(e,n)=>n?n.toUpperCase():"")),Uf=/\B([A-Z])/g,bn=Ls(t=>t.replace(Uf,"-$1").toLowerCase()),Ms=Ls(t=>t.charAt(0).toUpperCase()+t.slice(1)),ei=Ls(t=>t?`on${Ms(t)}`:""),Xt=(t,e)=>!Object.is(t,e),ns=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Jl=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ti=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Zo;const Yl=()=>Zo||(Zo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function io(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=pe(r)?Bf(r):io(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(pe(t)||ce(t))return t}const Ff=/;(?![^(]*\))/g,$f=/:([^]+)/,jf=/\/\*[^]*?\*\//g;function Bf(t){const e={};return t.replace(jf,"").split(Ff).forEach(n=>{if(n){const r=n.split($f);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function oo(t){let e="";if(pe(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=oo(t[n]);r&&(e+=r+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Hf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wf=to(Hf);function Ql(t){return!!t||t===""}const Xl=t=>!!(t&&t.__v_isRef===!0),er=t=>pe(t)?t:t==null?"":$(t)||ce(t)&&(t.toString===Kl||!B(t.toString))?Xl(t)?er(t.value):JSON.stringify(t,Zl,2):String(t),Zl=(t,e)=>Xl(e)?Zl(t,e.value):Dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ti(r,i)+" =>"]=s,n),{})}:ql(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ti(n))}:en(e)?ti(e):ce(e)&&!$(e)&&!Gl(e)?String(e):e,ti=(t,e="")=>{var n;return en(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ce;class ec{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ce,!e&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ce;try{return Ce=this,e()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function tc(t){return new ec(t)}function nc(){return Ce}function qf(t,e=!1){Ce&&Ce.cleanups.push(t)}let se;const ni=new WeakSet;class rc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Ce&&Ce.active&&Ce.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ni.has(this)&&(ni.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=or,or=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ea(this),ic(this);const e=se,n=Xe;se=this,Xe=!0;try{return this.fn()}finally{oc(this),se=e,Xe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)co(e);this.deps=this.depsTail=void 0,ea(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ni.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Si(this)&&this.run()}get dirty(){return Si(this)}}let sc=0,or;function ao(){sc++}function lo(){if(--sc>0)return;let t;for(;or;){let e=or;for(or=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ic(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function oc(t){let e,n=t.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),co(r),zf(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function Si(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&ac(e.dep.computed)||e.dep.version!==e.version)return!0;return!!t._dirty}function ac(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===yr))return;t.globalVersion=yr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!Si(t)){t.flags&=-3;return}const n=se,r=Xe;se=t,Xe=!0;try{ic(t);const s=t.fn(t._value);(e.version===0||Xt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{se=n,Xe=r,oc(t),t.flags&=-3}}function co(t){const{dep:e,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)co(s)}}function zf(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Xe=!0;const lc=[];function tn(){lc.push(Xe),Xe=!1}function nn(){const t=lc.pop();Xe=t===void 0?!0:t}function ea(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=se;se=void 0;try{e()}finally{se=n}}}let yr=0;class uo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!se||!Xe||se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==se)n=this.activeLink={dep:this,sub:se,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},se.deps?(n.prevDep=se.depsTail,se.depsTail.nextDep=n,se.depsTail=n):se.deps=se.depsTail=n,se.flags&4&&cc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=se.depsTail,n.nextDep=void 0,se.depsTail.nextDep=n,se.depsTail=n,se.deps===n&&(se.deps=r)}return n}trigger(e){this.version++,yr++,this.notify(e)}notify(e){ao();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{lo()}}}function cc(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)cc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const ds=new WeakMap,fn=Symbol(""),Ai=Symbol(""),vr=Symbol("");function Ae(t,e,n){if(Xe&&se){let r=ds.get(t);r||ds.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=new uo),s.track()}}function At(t,e,n,r,s,i){const o=ds.get(t);if(!o){yr++;return}const a=l=>{l&&l.trigger()};if(ao(),e==="clear")o.forEach(a);else{const l=$(t),c=l&&so(n);if(l&&n==="length"){const u=Number(r);o.forEach((h,p)=>{(p==="length"||p===vr||!en(p)&&p>=u)&&a(h)})}else switch(n!==void 0&&a(o.get(n)),c&&a(o.get(vr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(fn)),Dn(t)&&a(o.get(Ai)));break;case"delete":l||(a(o.get(fn)),Dn(t)&&a(o.get(Ai)));break;case"set":Dn(t)&&a(o.get(fn));break}}lo()}function Kf(t,e){var n;return(n=ds.get(t))==null?void 0:n.get(e)}function Sn(t){const e=Q(t);return e===t?e:(Ae(e,"iterate",vr),Ye(t)?e:e.map(Te))}function Us(t){return Ae(t=Q(t),"iterate",vr),t}const Gf={__proto__:null,[Symbol.iterator](){return ri(this,Symbol.iterator,Te)},concat(...t){return Sn(this).concat(...t.map(e=>$(e)?Sn(e):e))},entries(){return ri(this,"entries",t=>(t[1]=Te(t[1]),t))},every(t,e){return mt(this,"every",t,e,void 0,arguments)},filter(t,e){return mt(this,"filter",t,e,n=>n.map(Te),arguments)},find(t,e){return mt(this,"find",t,e,Te,arguments)},findIndex(t,e){return mt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return mt(this,"findLast",t,e,Te,arguments)},findLastIndex(t,e){return mt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return mt(this,"forEach",t,e,void 0,arguments)},includes(...t){return si(this,"includes",t)},indexOf(...t){return si(this,"indexOf",t)},join(t){return Sn(this).join(t)},lastIndexOf(...t){return si(this,"lastIndexOf",t)},map(t,e){return mt(this,"map",t,e,void 0,arguments)},pop(){return Qn(this,"pop")},push(...t){return Qn(this,"push",t)},reduce(t,...e){return ta(this,"reduce",t,e)},reduceRight(t,...e){return ta(this,"reduceRight",t,e)},shift(){return Qn(this,"shift")},some(t,e){return mt(this,"some",t,e,void 0,arguments)},splice(...t){return Qn(this,"splice",t)},toReversed(){return Sn(this).toReversed()},toSorted(t){return Sn(this).toSorted(t)},toSpliced(...t){return Sn(this).toSpliced(...t)},unshift(...t){return Qn(this,"unshift",t)},values(){return ri(this,"values",Te)}};function ri(t,e,n){const r=Us(t),s=r[e]();return r!==t&&!Ye(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Jf=Array.prototype;function mt(t,e,n,r,s,i){const o=Us(t),a=o!==t&&!Ye(t),l=o[e];if(l!==Jf[e]){const h=l.apply(t,i);return a?Te(h):h}let c=n;o!==t&&(a?c=function(h,p){return n.call(this,Te(h),p,t)}:n.length>2&&(c=function(h,p){return n.call(this,h,p,t)}));const u=l.call(o,c,r);return a&&s?s(u):u}function ta(t,e,n,r){const s=Us(t);let i=n;return s!==t&&(Ye(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Te(a),l,t)}),s[e](i,...r)}function si(t,e,n){const r=Q(t);Ae(r,"iterate",vr);const s=r[e](...n);return(s===-1||s===!1)&&go(n[0])?(n[0]=Q(n[0]),r[e](...n)):s}function Qn(t,e,n=[]){tn(),ao();const r=Q(t)[e].apply(t,n);return lo(),nn(),r}const Yf=to("__proto__,__v_isRef,__isVue"),uc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(en));function Qf(t){en(t)||(t=String(t));const e=Q(this);return Ae(e,"has",t),e.hasOwnProperty(t)}class fc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?uh:gc:i?pc:dc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=$(e);if(!s){let l;if(o&&(l=Gf[n]))return l;if(n==="hasOwnProperty")return Qf}const a=Reflect.get(e,n,he(e)?e:r);return(en(n)?uc.has(n):Yf(n))||(s||Ae(e,"get",n),i)?a:he(a)?o&&so(n)?a:a.value:ce(a)?s?_c(a):Dr(a):a}}class hc extends fc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=dn(i);if(!Ye(r)&&!dn(r)&&(i=Q(i),r=Q(r)),!$(e)&&he(i)&&!he(r))return l?!1:(i.value=r,!0)}const o=$(e)&&so(n)?Number(n)<e.length:Z(e,n),a=Reflect.set(e,n,r,he(e)?e:s);return e===Q(s)&&(o?Xt(r,i)&&At(e,"set",n,r):At(e,"add",n,r)),a}deleteProperty(e,n){const r=Z(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&At(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!en(n)||!uc.has(n))&&Ae(e,"has",n),r}ownKeys(e){return Ae(e,"iterate",$(e)?"length":fn),Reflect.ownKeys(e)}}class Xf extends fc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Zf=new hc,eh=new Xf,th=new hc(!0);const fo=t=>t,Fs=t=>Reflect.getPrototypeOf(t);function qr(t,e,n=!1,r=!1){t=t.__v_raw;const s=Q(t),i=Q(e);n||(Xt(e,i)&&Ae(s,"get",e),Ae(s,"get",i));const{has:o}=Fs(s),a=r?fo:n?_o:Te;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function zr(t,e=!1){const n=this.__v_raw,r=Q(n),s=Q(t);return e||(Xt(t,s)&&Ae(r,"has",t),Ae(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Kr(t,e=!1){return t=t.__v_raw,!e&&Ae(Q(t),"iterate",fn),Reflect.get(t,"size",t)}function na(t,e=!1){!e&&!Ye(t)&&!dn(t)&&(t=Q(t));const n=Q(this);return Fs(n).has.call(n,t)||(n.add(t),At(n,"add",t,t)),this}function ra(t,e,n=!1){!n&&!Ye(e)&&!dn(e)&&(e=Q(e));const r=Q(this),{has:s,get:i}=Fs(r);let o=s.call(r,t);o||(t=Q(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?Xt(e,a)&&At(r,"set",t,e):At(r,"add",t,e),this}function sa(t){const e=Q(this),{has:n,get:r}=Fs(e);let s=n.call(e,t);s||(t=Q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&At(e,"delete",t,void 0),i}function ia(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&At(t,"clear",void 0,void 0),n}function Gr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Q(o),l=e?fo:t?_o:Te;return!t&&Ae(a,"iterate",fn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Jr(t,e,n){return function(...r){const s=this.__v_raw,i=Q(s),o=Dn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?fo:e?_o:Te;return!e&&Ae(i,"iterate",l?Ai:fn),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function Lt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function nh(){const t={get(i){return qr(this,i)},get size(){return Kr(this)},has:zr,add:na,set:ra,delete:sa,clear:ia,forEach:Gr(!1,!1)},e={get(i){return qr(this,i,!1,!0)},get size(){return Kr(this)},has:zr,add(i){return na.call(this,i,!0)},set(i,o){return ra.call(this,i,o,!0)},delete:sa,clear:ia,forEach:Gr(!1,!0)},n={get(i){return qr(this,i,!0)},get size(){return Kr(this,!0)},has(i){return zr.call(this,i,!0)},add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear"),forEach:Gr(!0,!1)},r={get(i){return qr(this,i,!0,!0)},get size(){return Kr(this,!0)},has(i){return zr.call(this,i,!0)},add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear"),forEach:Gr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Jr(i,!1,!1),n[i]=Jr(i,!0,!1),e[i]=Jr(i,!1,!0),r[i]=Jr(i,!0,!0)}),[t,n,e,r]}const[rh,sh,ih,oh]=nh();function ho(t,e){const n=e?t?oh:ih:t?sh:rh;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const ah={get:ho(!1,!1)},lh={get:ho(!1,!0)},ch={get:ho(!0,!1)};const dc=new WeakMap,pc=new WeakMap,gc=new WeakMap,uh=new WeakMap;function fh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hh(t){return t.__v_skip||!Object.isExtensible(t)?0:fh(Lf(t))}function Dr(t){return dn(t)?t:po(t,!1,Zf,ah,dc)}function mc(t){return po(t,!1,th,lh,pc)}function _c(t){return po(t,!0,eh,ch,gc)}function po(t,e,n,r,s){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=hh(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Gt(t){return dn(t)?Gt(t.__v_raw):!!(t&&t.__v_isReactive)}function dn(t){return!!(t&&t.__v_isReadonly)}function Ye(t){return!!(t&&t.__v_isShallow)}function go(t){return t?!!t.__v_raw:!1}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function mo(t){return!Z(t,"__v_skip")&&Object.isExtensible(t)&&Jl(t,"__v_skip",!0),t}const Te=t=>ce(t)?Dr(t):t,_o=t=>ce(t)?_c(t):t;function he(t){return t?t.__v_isRef===!0:!1}function pn(t){return yc(t,!1)}function dh(t){return yc(t,!0)}function yc(t,e){return he(t)?t:new ph(t,e)}class ph{constructor(e,n){this.dep=new uo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Q(e),this._value=n?e:Te(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ye(e)||dn(e);e=r?e:Q(e),Xt(e,n)&&(this._rawValue=e,this._value=r?e:Te(e),this.dep.trigger())}}function ve(t){return he(t)?t.value:t}const gh={get:(t,e,n)=>e==="__v_raw"?t:ve(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return he(s)&&!he(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function vc(t){return Gt(t)?t:new Proxy(t,gh)}function mh(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=yh(t,n);return e}class _h{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Kf(Q(this._object),this._key)}}function yh(t,e,n){const r=t[e];return he(r)?r:new _h(t,e,n)}class vh{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new uo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yr-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){this.flags|=16,se!==this&&this.dep.notify()}get value(){const e=this.dep.track();return ac(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Eh(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new vh(r,s,n)}const Yr={},ps=new WeakMap;let cn;function bh(t,e=!1,n=cn){if(n){let r=ps.get(n);r||ps.set(n,r=[]),r.push(t)}}function wh(t,e,n=ie){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,c=O=>s?O:Ye(O)||s===!1||s===0?vt(O,1):vt(O);let u,h,p,g,w=!1,R=!1;if(he(t)?(h=()=>t.value,w=Ye(t)):Gt(t)?(h=()=>c(t),w=!0):$(t)?(R=!0,w=t.some(O=>Gt(O)||Ye(O)),h=()=>t.map(O=>{if(he(O))return O.value;if(Gt(O))return c(O);if(B(O))return l?l(O,2):O()})):B(t)?e?h=l?()=>l(t,2):t:h=()=>{if(p){tn();try{p()}finally{nn()}}const O=cn;cn=u;try{return l?l(t,3,[g]):t(g)}finally{cn=O}}:h=ut,e&&s){const O=h,H=s===!0?1/0:s;h=()=>vt(O(),H)}const F=nc(),V=()=>{u.stop(),F&&ro(F.effects,u)};if(i)if(e){const O=e;e=(...H)=>{O(...H),V()}}else{const O=h;h=()=>{O(),V()}}let k=R?new Array(t.length).fill(Yr):Yr;const N=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const H=u.run();if(s||w||(R?H.some((fe,Y)=>Xt(fe,k[Y])):Xt(H,k))){p&&p();const fe=cn;cn=u;try{const Y=[H,k===Yr?void 0:R&&k[0]===Yr?[]:k,g];l?l(e,3,Y):e(...Y),k=H}finally{cn=fe}}}else u.run()};return a&&a(N),u=new rc(h),u.scheduler=o?()=>o(N,!1):N,g=O=>bh(O,!1,u),p=u.onStop=()=>{const O=ps.get(u);if(O){if(l)l(O,4);else for(const H of O)H();ps.delete(u)}},e?r?N(!0):k=u.run():o?o(N.bind(null,!0),!0):u.run(),V.pause=u.pause.bind(u),V.resume=u.resume.bind(u),V.stop=V,V}function vt(t,e=1/0,n){if(e<=0||!ce(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,he(t))vt(t.value,e,n);else if($(t))for(let r=0;r<t.length;r++)vt(t[r],e,n);else if(ql(t)||Dn(t))t.forEach(r=>{vt(r,e,n)});else if(Gl(t)){for(const r in t)vt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&vt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vr(t,e,n,r){try{return r?t(...r):t()}catch(s){$s(s,e,n)}}function pt(t,e,n,r){if(B(t)){const s=Vr(t,e,n,r);return s&&zl(s)&&s.catch(i=>{$s(i,e,n)}),s}if($(t)){const s=[];for(let i=0;i<t.length;i++)s.push(pt(t[i],e,n,r));return s}}function $s(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ie;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(i){tn(),Vr(i,null,10,[t,l,c]),nn();return}}Ih(t,n,s,r,o)}function Ih(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let Er=!1,Ri=!1;const Oe=[];let ot=0;const Vn=[];let $t=null,Rn=0;const Ec=Promise.resolve();let yo=null;function vo(t){const e=yo||Ec;return t?e.then(this?t.bind(this):t):e}function Th(t){let e=Er?ot+1:0,n=Oe.length;for(;e<n;){const r=e+n>>>1,s=Oe[r],i=br(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Eo(t){if(!(t.flags&1)){const e=br(t),n=Oe[Oe.length-1];!n||!(t.flags&2)&&e>=br(n)?Oe.push(t):Oe.splice(Th(e),0,t),t.flags|=1,bc()}}function bc(){!Er&&!Ri&&(Ri=!0,yo=Ec.then(Ic))}function Sh(t){$(t)?Vn.push(...t):$t&&t.id===-1?$t.splice(Rn+1,0,t):t.flags&1||(Vn.push(t),t.flags|=1),bc()}function oa(t,e,n=Er?ot+1:0){for(;n<Oe.length;n++){const r=Oe[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Oe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function wc(t){if(Vn.length){const e=[...new Set(Vn)].sort((n,r)=>br(n)-br(r));if(Vn.length=0,$t){$t.push(...e);return}for($t=e,Rn=0;Rn<$t.length;Rn++){const n=$t[Rn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$t=null,Rn=0}}const br=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ic(t){Ri=!1,Er=!0;try{for(ot=0;ot<Oe.length;ot++){const e=Oe[ot];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vr(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;ot<Oe.length;ot++){const e=Oe[ot];e&&(e.flags&=-2)}ot=0,Oe.length=0,wc(),Er=!1,yo=null,(Oe.length||Vn.length)&&Ic()}}let xe=null,Tc=null;function gs(t){const e=xe;return xe=t,Tc=t&&t.type.__scopeId||null,e}function rs(t,e=xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ma(-1);const i=gs(e);let o;try{o=t(...s)}finally{gs(i),r._d&&ma(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ms(t,e){if(xe===null)return t;const n=qs(xe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=ie]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&vt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function an(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(tn(),pt(l,n,8,[t.el,a,t,e]),nn())}}const Ah=Symbol("_vte"),Rh=t=>t.__isTeleport;function bo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,bo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Sc(t,e){return B(t)?be({name:t.name},e,{setup:t}):t}function Ac(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Pi(t,e,n,r,s=!1){if($(t)){t.forEach((w,R)=>Pi(w,e&&($(e)?e[R]:e),n,r,s));return}if(ar(r)&&!s)return;const i=r.shapeFlag&4?qs(r.component):r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,h=a.setupState,p=Q(h),g=h===ie?()=>!1:w=>Z(p,w);if(c!=null&&c!==l&&(pe(c)?(u[c]=null,g(c)&&(h[c]=null)):he(c)&&(c.value=null)),B(l))Vr(l,a,12,[o,u]);else{const w=pe(l),R=he(l);if(w||R){const F=()=>{if(t.f){const V=w?g(l)?h[l]:u[l]:l.value;s?$(V)&&ro(V,i):$(V)?V.includes(i)||V.push(i):w?(u[l]=[i],g(l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else w?(u[l]=o,g(l)&&(h[l]=o)):R&&(l.value=o,t.k&&(u[t.k]=o))};o?(F.id=-1,Be(F,n)):F()}}}const ar=t=>!!t.type.__asyncLoader,Rc=t=>t.type.__isKeepAlive;function Ph(t,e){Pc(t,"a",e)}function Ch(t,e){Pc(t,"da",e)}function Pc(t,e,n=Ee){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(js(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Rc(s.parent.vnode)&&Oh(r,e,n,s),s=s.parent}}function Oh(t,e,n,r){const s=js(e,t,r,!0);Cc(()=>{ro(r[e],s)},n)}function js(t,e,n=Ee,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{tn();const a=xr(n),l=pt(e,n,t,o);return a(),nn(),l});return r?s.unshift(i):s.push(i),i}}const kt=t=>(e,n=Ee)=>{(!Ws||t==="sp")&&js(t,(...r)=>e(...r),n)},kh=kt("bm"),Nh=kt("m"),Dh=kt("bu"),Vh=kt("u"),xh=kt("bum"),Cc=kt("um"),Lh=kt("sp"),Mh=kt("rtg"),Uh=kt("rtc");function Fh(t,e=Ee){js("ec",t,e)}const Oc="components";function aa(t,e){return jh(Oc,t,!0,e)||t}const $h=Symbol.for("v-ndc");function jh(t,e,n=!0,r=!1){const s=xe||Ee;if(s){const i=s.type;if(t===Oc){const a=Cd(i,!1);if(a&&(a===e||a===Ze(e)||a===Ms(Ze(e))))return i}const o=la(s[t]||i[t],e)||la(s.appContext[t],e);return!o&&r?i:o}}function la(t,e){return t&&(t[e]||t[Ze(e)]||t[Ms(Ze(e))])}function Bh(t,e,n,r){let s;const i=n,o=$(t);if(o||pe(t)){const a=o&&Gt(t);let l=!1;a&&(l=!Ye(t),t=Us(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?Te(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(ce(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,i)}}else s=[];return s}const Ci=t=>t?Yc(t)?qs(t):Ci(t.parent):null,lr=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ci(t.parent),$root:t=>Ci(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>wo(t),$forceUpdate:t=>t.f||(t.f=()=>{Eo(t.update)}),$nextTick:t=>t.n||(t.n=vo.bind(t.proxy)),$watch:t=>ud.bind(t)}),ii=(t,e)=>t!==ie&&!t.__isScriptSetup&&Z(t,e),Hh={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ii(r,e))return o[e]=1,r[e];if(s!==ie&&Z(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Z(c,e))return o[e]=3,i[e];if(n!==ie&&Z(n,e))return o[e]=4,n[e];Oi&&(o[e]=0)}}const u=lr[e];let h,p;if(u)return e==="$attrs"&&Ae(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ie&&Z(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Z(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ii(s,e)?(s[e]=n,!0):r!==ie&&Z(r,e)?(r[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ie&&Z(t,o)||ii(e,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(lr,o)||Z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ca(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Oi=!0;function Wh(t){const e=wo(t),n=t.proxy,r=t.ctx;Oi=!1,e.beforeCreate&&ua(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:p,beforeUpdate:g,updated:w,activated:R,deactivated:F,beforeDestroy:V,beforeUnmount:k,destroyed:N,unmounted:O,render:H,renderTracked:fe,renderTriggered:Y,errorCaptured:z,serverPrefetch:q,expose:ae,inheritAttrs:Re,components:Ue,directives:Ne,filters:on}=e;if(c&&qh(c,r,null),o)for(const W in o){const X=o[W];B(X)&&(r[W]=X.bind(n))}if(s){const W=s.call(n,n);ce(W)&&(t.data=Dr(W))}if(Oi=!0,i)for(const W in i){const X=i[W],gt=B(X)?X.bind(n,n):B(X.get)?X.get.bind(n,n):ut,xt=!B(X)&&B(X.set)?X.set.bind(n):ut,rt=Ge({get:gt,set:xt});Object.defineProperty(r,W,{enumerable:!0,configurable:!0,get:()=>rt.value,set:De=>rt.value=De})}if(a)for(const W in a)kc(a[W],r,n,W);if(l){const W=B(l)?l.call(n):l;Reflect.ownKeys(W).forEach(X=>{ss(X,W[X])})}u&&ua(u,t,"c");function le(W,X){$(X)?X.forEach(gt=>W(gt.bind(n))):X&&W(X.bind(n))}if(le(kh,h),le(Nh,p),le(Dh,g),le(Vh,w),le(Ph,R),le(Ch,F),le(Fh,z),le(Uh,fe),le(Mh,Y),le(xh,k),le(Cc,O),le(Lh,q),$(ae))if(ae.length){const W=t.exposed||(t.exposed={});ae.forEach(X=>{Object.defineProperty(W,X,{get:()=>n[X],set:gt=>n[X]=gt})})}else t.exposed||(t.exposed={});H&&t.render===ut&&(t.render=H),Re!=null&&(t.inheritAttrs=Re),Ue&&(t.components=Ue),Ne&&(t.directives=Ne),q&&Ac(t)}function qh(t,e,n=ut){$(t)&&(t=ki(t));for(const r in t){const s=t[r];let i;ce(s)?"default"in s?i=ft(s.from||r,s.default,!0):i=ft(s.from||r):i=ft(s),he(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ua(t,e,n){pt($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function kc(t,e,n,r){let s=r.includes(".")?qc(n,r):()=>n[r];if(pe(t)){const i=e[t];B(i)&&cr(s,i)}else if(B(t))cr(s,t.bind(n));else if(ce(t))if($(t))t.forEach(i=>kc(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&cr(s,i,t)}}function wo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>_s(l,c,o,!0)),_s(l,e,o)),ce(e)&&i.set(e,l),l}function _s(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&_s(t,i,n,!0),s&&s.forEach(o=>_s(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=zh[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const zh={data:fa,props:ha,emits:ha,methods:tr,computed:tr,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:tr,directives:tr,watch:Gh,provide:fa,inject:Kh};function fa(t,e){return e?t?function(){return be(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Kh(t,e){return tr(ki(t),ki(e))}function ki(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function tr(t,e){return t?be(Object.create(null),t,e):e}function ha(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:be(Object.create(null),ca(t),ca(e??{})):e}function Gh(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const r in e)n[r]=Pe(t[r],e[r]);return n}function Nc(){return{app:null,config:{isNativeTag:Vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jh=0;function Yh(t,e){return function(r,s=null){B(r)||(r=be({},r)),s!=null&&!ce(s)&&(s=null);const i=Nc(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:Jh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:kd,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&B(u.install)?(o.add(u),u.install(c,...h)):B(u)&&(o.add(u),u(c,...h))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,h){return h?(i.components[u]=h,c):i.components[u]},directive(u,h){return h?(i.directives[u]=h,c):i.directives[u]},mount(u,h,p){if(!l){const g=c._ceVNode||Le(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(g,u):t(g,u,p),l=!0,c._container=u,u.__vue_app__=c,qs(g.component)}},onUnmount(u){a.push(u)},unmount(){l&&(pt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return i.provides[u]=h,c},runWithContext(u){const h=hn;hn=c;try{return u()}finally{hn=h}}};return c}}let hn=null;function ss(t,e){if(Ee){let n=Ee.provides;const r=Ee.parent&&Ee.parent.provides;r===n&&(n=Ee.provides=Object.create(r)),n[t]=e}}function ft(t,e,n=!1){const r=Ee||xe;if(r||hn){const s=hn?hn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}function Qh(){return!!(Ee||xe||hn)}const Dc={},Vc=()=>Object.create(Dc),xc=t=>Object.getPrototypeOf(t)===Dc;function Xh(t,e,n,r=!1){const s={},i=Vc();t.propsDefaults=Object.create(null),Lc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:mc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Zh(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Q(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Bs(t.emitsOptions,p))continue;const g=e[p];if(l)if(Z(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const w=Ze(p);s[w]=Ni(l,a,w,g,t,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{Lc(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!Z(e,h)&&((u=bn(h))===h||!Z(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ni(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Z(e,h))&&(delete i[h],c=!0)}c&&At(t.attrs,"set","")}function Lc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ir(l))continue;const c=e[l];let u;s&&Z(s,u=Ze(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Bs(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Q(n),c=a||ie;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ni(s,l,h,c[h],t,!Z(c,h))}}return o}function Ni(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&B(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=xr(s);r=c[n]=l.call(null,e),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===bn(n))&&(r=!0))}return r}const ed=new WeakMap;function Mc(t,e,n=!1){const r=n?ed:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!B(t)){const u=h=>{l=!0;const[p,g]=Mc(h,e,!0);be(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ce(t)&&r.set(t,Nn),Nn;if($(i))for(let u=0;u<i.length;u++){const h=Ze(i[u]);da(h)&&(o[h]=ie)}else if(i)for(const u in i){const h=Ze(u);if(da(h)){const p=i[u],g=o[h]=$(p)||B(p)?{type:p}:be({},p),w=g.type;let R=!1,F=!0;if($(w))for(let V=0;V<w.length;++V){const k=w[V],N=B(k)&&k.name;if(N==="Boolean"){R=!0;break}else N==="String"&&(F=!1)}else R=B(w)&&w.name==="Boolean";g[0]=R,g[1]=F,(R||Z(g,"default"))&&a.push(h)}}const c=[o,a];return ce(t)&&r.set(t,c),c}function da(t){return t[0]!=="$"&&!ir(t)}const Uc=t=>t[0]==="_"||t==="$stable",Io=t=>$(t)?t.map(lt):[lt(t)],td=(t,e,n)=>{if(e._n)return e;const r=rs((...s)=>Io(e(...s)),n);return r._c=!1,r},Fc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Uc(s))continue;const i=t[s];if(B(i))e[s]=td(s,i,r);else if(i!=null){const o=Io(i);e[s]=()=>o}}},$c=(t,e)=>{const n=Io(e);t.slots.default=()=>n},jc=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},nd=(t,e,n)=>{const r=t.slots=Vc();if(t.vnode.shapeFlag&32){const s=e._;s?(jc(r,e,n),n&&Jl(r,"_",s,!0)):Fc(e,r)}else e&&$c(t,e)},rd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:jc(s,e,n):(i=!e.$stable,Fc(e,s)),o=e}else e&&($c(t,e),o={default:1});if(i)for(const a in s)!Uc(a)&&o[a]==null&&delete s[a]},Be=_d;function sd(t){return id(t)}function id(t,e){const n=Yl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:p,setScopeId:g=ut,insertStaticContent:w}=t,R=(f,d,m,v=null,_=null,E=null,S=void 0,T=null,I=!!d.dynamicChildren)=>{if(f===d)return;f&&!Xn(f,d)&&(v=y(f),De(f,_,E,!0),f=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:b,ref:L,shapeFlag:P}=d;switch(b){case Hs:F(f,d,m,v);break;case gn:V(f,d,m,v);break;case li:f==null&&k(d,m,v,S);break;case at:Ue(f,d,m,v,_,E,S,T,I);break;default:P&1?H(f,d,m,v,_,E,S,T,I):P&6?Ne(f,d,m,v,_,E,S,T,I):(P&64||P&128)&&b.process(f,d,m,v,_,E,S,T,I,D)}L!=null&&_&&Pi(L,f&&f.ref,E,d||f,!d)},F=(f,d,m,v)=>{if(f==null)r(d.el=a(d.children),m,v);else{const _=d.el=f.el;d.children!==f.children&&c(_,d.children)}},V=(f,d,m,v)=>{f==null?r(d.el=l(d.children||""),m,v):d.el=f.el},k=(f,d,m,v)=>{[f.el,f.anchor]=w(f.children,d,m,v,f.el,f.anchor)},N=({el:f,anchor:d},m,v)=>{let _;for(;f&&f!==d;)_=p(f),r(f,m,v),f=_;r(d,m,v)},O=({el:f,anchor:d})=>{let m;for(;f&&f!==d;)m=p(f),s(f),f=m;s(d)},H=(f,d,m,v,_,E,S,T,I)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),f==null?fe(d,m,v,_,E,S,T,I):q(f,d,_,E,S,T,I)},fe=(f,d,m,v,_,E,S,T)=>{let I,b;const{props:L,shapeFlag:P,transition:x,dirs:j}=f;if(I=f.el=o(f.type,E,L&&L.is,L),P&8?u(I,f.children):P&16&&z(f.children,I,null,v,_,oi(f,E),S,T),j&&an(f,null,v,"created"),Y(I,f,f.scopeId,S,v),L){for(const oe in L)oe!=="value"&&!ir(oe)&&i(I,oe,null,L[oe],E,v);"value"in L&&i(I,"value",null,L.value,E),(b=L.onVnodeBeforeMount)&&it(b,v,f)}j&&an(f,null,v,"beforeMount");const G=od(_,x);G&&x.beforeEnter(I),r(I,d,m),((b=L&&L.onVnodeMounted)||G||j)&&Be(()=>{b&&it(b,v,f),G&&x.enter(I),j&&an(f,null,v,"mounted")},_)},Y=(f,d,m,v,_)=>{if(m&&g(f,m),v)for(let E=0;E<v.length;E++)g(f,v[E]);if(_){let E=_.subTree;if(d===E||Kc(E.type)&&(E.ssContent===d||E.ssFallback===d)){const S=_.vnode;Y(f,S,S.scopeId,S.slotScopeIds,_.parent)}}},z=(f,d,m,v,_,E,S,T,I=0)=>{for(let b=I;b<f.length;b++){const L=f[b]=T?jt(f[b]):lt(f[b]);R(null,L,d,m,v,_,E,S,T)}},q=(f,d,m,v,_,E,S)=>{const T=d.el=f.el;let{patchFlag:I,dynamicChildren:b,dirs:L}=d;I|=f.patchFlag&16;const P=f.props||ie,x=d.props||ie;let j;if(m&&ln(m,!1),(j=x.onVnodeBeforeUpdate)&&it(j,m,d,f),L&&an(d,f,m,"beforeUpdate"),m&&ln(m,!0),(P.innerHTML&&x.innerHTML==null||P.textContent&&x.textContent==null)&&u(T,""),b?ae(f.dynamicChildren,b,T,m,v,oi(d,_),E):S||X(f,d,T,null,m,v,oi(d,_),E,!1),I>0){if(I&16)Re(T,P,x,m,_);else if(I&2&&P.class!==x.class&&i(T,"class",null,x.class,_),I&4&&i(T,"style",P.style,x.style,_),I&8){const G=d.dynamicProps;for(let oe=0;oe<G.length;oe++){const ne=G[oe],Fe=P[ne],we=x[ne];(we!==Fe||ne==="value")&&i(T,ne,Fe,we,_,m)}}I&1&&f.children!==d.children&&u(T,d.children)}else!S&&b==null&&Re(T,P,x,m,_);((j=x.onVnodeUpdated)||L)&&Be(()=>{j&&it(j,m,d,f),L&&an(d,f,m,"updated")},v)},ae=(f,d,m,v,_,E,S)=>{for(let T=0;T<d.length;T++){const I=f[T],b=d[T],L=I.el&&(I.type===at||!Xn(I,b)||I.shapeFlag&70)?h(I.el):m;R(I,b,L,null,v,_,E,S,!0)}},Re=(f,d,m,v,_)=>{if(d!==m){if(d!==ie)for(const E in d)!ir(E)&&!(E in m)&&i(f,E,d[E],null,_,v);for(const E in m){if(ir(E))continue;const S=m[E],T=d[E];S!==T&&E!=="value"&&i(f,E,T,S,_,v)}"value"in m&&i(f,"value",d.value,m.value,_)}},Ue=(f,d,m,v,_,E,S,T,I)=>{const b=d.el=f?f.el:a(""),L=d.anchor=f?f.anchor:a("");let{patchFlag:P,dynamicChildren:x,slotScopeIds:j}=d;j&&(T=T?T.concat(j):j),f==null?(r(b,m,v),r(L,m,v),z(d.children||[],m,L,_,E,S,T,I)):P>0&&P&64&&x&&f.dynamicChildren?(ae(f.dynamicChildren,x,m,_,E,S,T),(d.key!=null||_&&d===_.subTree)&&Bc(f,d,!0)):X(f,d,m,L,_,E,S,T,I)},Ne=(f,d,m,v,_,E,S,T,I)=>{d.slotScopeIds=T,f==null?d.shapeFlag&512?_.ctx.activate(d,m,v,S,I):on(d,m,v,_,E,S,I):Vt(f,d,I)},on=(f,d,m,v,_,E,S)=>{const T=f.component=Td(f,v,_);if(Rc(f)&&(T.ctx.renderer=D),Sd(T,!1,S),T.asyncDep){if(_&&_.registerDep(T,le,S),!f.el){const I=T.subTree=Le(gn);V(null,I,d,m)}}else le(T,f,d,m,_,E,S)},Vt=(f,d,m)=>{const v=d.component=f.component;if(gd(f,d,m))if(v.asyncDep&&!v.asyncResolved){W(v,d,m);return}else v.next=d,v.update();else d.el=f.el,v.vnode=d},le=(f,d,m,v,_,E,S)=>{const T=()=>{if(f.isMounted){let{next:P,bu:x,u:j,parent:G,vnode:oe}=f;{const $e=Hc(f);if($e){P&&(P.el=oe.el,W(f,P,S)),$e.asyncDep.then(()=>{f.isUnmounted||T()});return}}let ne=P,Fe;ln(f,!1),P?(P.el=oe.el,W(f,P,S)):P=oe,x&&ns(x),(Fe=P.props&&P.props.onVnodeBeforeUpdate)&&it(Fe,G,P,oe),ln(f,!0);const we=ai(f),Qe=f.subTree;f.subTree=we,R(Qe,we,h(Qe.el),y(Qe),f,_,E),P.el=we.el,ne===null&&md(f,we.el),j&&Be(j,_),(Fe=P.props&&P.props.onVnodeUpdated)&&Be(()=>it(Fe,G,P,oe),_)}else{let P;const{el:x,props:j}=d,{bm:G,m:oe,parent:ne,root:Fe,type:we}=f,Qe=ar(d);if(ln(f,!1),G&&ns(G),!Qe&&(P=j&&j.onVnodeBeforeMount)&&it(P,ne,d),ln(f,!0),x&&ue){const $e=()=>{f.subTree=ai(f),ue(x,f.subTree,f,_,null)};Qe&&we.__asyncHydrate?we.__asyncHydrate(x,f,$e):$e()}else{Fe.ce&&Fe.ce._injectChildStyle(we);const $e=f.subTree=ai(f);R(null,$e,m,v,f,_,E),d.el=$e.el}if(oe&&Be(oe,_),!Qe&&(P=j&&j.onVnodeMounted)){const $e=d;Be(()=>it(P,ne,$e),_)}(d.shapeFlag&256||ne&&ar(ne.vnode)&&ne.vnode.shapeFlag&256)&&f.a&&Be(f.a,_),f.isMounted=!0,d=m=v=null}};f.scope.on();const I=f.effect=new rc(T);f.scope.off();const b=f.update=I.run.bind(I),L=f.job=I.runIfDirty.bind(I);L.i=f,L.id=f.uid,I.scheduler=()=>Eo(L),ln(f,!0),b()},W=(f,d,m)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,Zh(f,d.props,v,m),rd(f,d.children,m),tn(),oa(f),nn()},X=(f,d,m,v,_,E,S,T,I=!1)=>{const b=f&&f.children,L=f?f.shapeFlag:0,P=d.children,{patchFlag:x,shapeFlag:j}=d;if(x>0){if(x&128){xt(b,P,m,v,_,E,S,T,I);return}else if(x&256){gt(b,P,m,v,_,E,S,T,I);return}}j&8?(L&16&&Ke(b,_,E),P!==b&&u(m,P)):L&16?j&16?xt(b,P,m,v,_,E,S,T,I):Ke(b,_,E,!0):(L&8&&u(m,""),j&16&&z(P,m,v,_,E,S,T,I))},gt=(f,d,m,v,_,E,S,T,I)=>{f=f||Nn,d=d||Nn;const b=f.length,L=d.length,P=Math.min(b,L);let x;for(x=0;x<P;x++){const j=d[x]=I?jt(d[x]):lt(d[x]);R(f[x],j,m,null,_,E,S,T,I)}b>L?Ke(f,_,E,!0,!1,P):z(d,m,v,_,E,S,T,I,P)},xt=(f,d,m,v,_,E,S,T,I)=>{let b=0;const L=d.length;let P=f.length-1,x=L-1;for(;b<=P&&b<=x;){const j=f[b],G=d[b]=I?jt(d[b]):lt(d[b]);if(Xn(j,G))R(j,G,m,null,_,E,S,T,I);else break;b++}for(;b<=P&&b<=x;){const j=f[P],G=d[x]=I?jt(d[x]):lt(d[x]);if(Xn(j,G))R(j,G,m,null,_,E,S,T,I);else break;P--,x--}if(b>P){if(b<=x){const j=x+1,G=j<L?d[j].el:v;for(;b<=x;)R(null,d[b]=I?jt(d[b]):lt(d[b]),m,G,_,E,S,T,I),b++}}else if(b>x)for(;b<=P;)De(f[b],_,E,!0),b++;else{const j=b,G=b,oe=new Map;for(b=G;b<=x;b++){const je=d[b]=I?jt(d[b]):lt(d[b]);je.key!=null&&oe.set(je.key,b)}let ne,Fe=0;const we=x-G+1;let Qe=!1,$e=0;const Yn=new Array(we);for(b=0;b<we;b++)Yn[b]=0;for(b=j;b<=P;b++){const je=f[b];if(Fe>=we){De(je,_,E,!0);continue}let st;if(je.key!=null)st=oe.get(je.key);else for(ne=G;ne<=x;ne++)if(Yn[ne-G]===0&&Xn(je,d[ne])){st=ne;break}st===void 0?De(je,_,E,!0):(Yn[st-G]=b+1,st>=$e?$e=st:Qe=!0,R(je,d[st],m,null,_,E,S,T,I),Fe++)}const Qo=Qe?ad(Yn):Nn;for(ne=Qo.length-1,b=we-1;b>=0;b--){const je=G+b,st=d[je],Xo=je+1<L?d[je+1].el:v;Yn[b]===0?R(null,st,m,Xo,_,E,S,T,I):Qe&&(ne<0||b!==Qo[ne]?rt(st,m,Xo,2):ne--)}}},rt=(f,d,m,v,_=null)=>{const{el:E,type:S,transition:T,children:I,shapeFlag:b}=f;if(b&6){rt(f.component.subTree,d,m,v);return}if(b&128){f.suspense.move(d,m,v);return}if(b&64){S.move(f,d,m,D);return}if(S===at){r(E,d,m);for(let P=0;P<I.length;P++)rt(I[P],d,m,v);r(f.anchor,d,m);return}if(S===li){N(f,d,m);return}if(v!==2&&b&1&&T)if(v===0)T.beforeEnter(E),r(E,d,m),Be(()=>T.enter(E),_);else{const{leave:P,delayLeave:x,afterLeave:j}=T,G=()=>r(E,d,m),oe=()=>{P(E,()=>{G(),j&&j()})};x?x(E,G,oe):oe()}else r(E,d,m)},De=(f,d,m,v=!1,_=!1)=>{const{type:E,props:S,ref:T,children:I,dynamicChildren:b,shapeFlag:L,patchFlag:P,dirs:x,cacheIndex:j}=f;if(P===-2&&(_=!1),T!=null&&Pi(T,null,m,f,!0),j!=null&&(d.renderCache[j]=void 0),L&256){d.ctx.deactivate(f);return}const G=L&1&&x,oe=!ar(f);let ne;if(oe&&(ne=S&&S.onVnodeBeforeUnmount)&&it(ne,d,f),L&6)Wr(f.component,m,v);else{if(L&128){f.suspense.unmount(m,v);return}G&&an(f,null,d,"beforeUnmount"),L&64?f.type.remove(f,d,m,D,v):b&&!b.hasOnce&&(E!==at||P>0&&P&64)?Ke(b,d,m,!1,!0):(E===at&&P&384||!_&&L&16)&&Ke(I,d,m),v&&In(f)}(oe&&(ne=S&&S.onVnodeUnmounted)||G)&&Be(()=>{ne&&it(ne,d,f),G&&an(f,null,d,"unmounted")},m)},In=f=>{const{type:d,el:m,anchor:v,transition:_}=f;if(d===at){Tn(m,v);return}if(d===li){O(f);return}const E=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:T}=_,I=()=>S(m,E);T?T(f.el,E,I):I()}else E()},Tn=(f,d)=>{let m;for(;f!==d;)m=p(f),s(f),f=m;s(d)},Wr=(f,d,m)=>{const{bum:v,scope:_,job:E,subTree:S,um:T,m:I,a:b}=f;pa(I),pa(b),v&&ns(v),_.stop(),E&&(E.flags|=8,De(S,f,d,m)),T&&Be(T,d),Be(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ke=(f,d,m,v=!1,_=!1,E=0)=>{for(let S=E;S<f.length;S++)De(f[S],d,m,v,_)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const d=p(f.anchor||f.el),m=d&&d[Ah];return m?p(m):d};let C=!1;const A=(f,d,m)=>{f==null?d._vnode&&De(d._vnode,null,null,!0):R(d._vnode||null,f,d,null,null,null,m),d._vnode=f,C||(C=!0,oa(),wc(),C=!1)},D={p:R,um:De,m:rt,r:In,mt:on,mc:z,pc:X,pbc:ae,n:y,o:t};let te,ue;return{render:A,hydrate:te,createApp:Yh(A,te)}}function oi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ln({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function od(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bc(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=jt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Bc(o,a)),a.type===Hs&&(a.el=o.el)}}function ad(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Hc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hc(e)}function pa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ld=Symbol.for("v-scx"),cd=()=>ft(ld);function cr(t,e,n){return Wc(t,e,n)}function Wc(t,e,n=ie){const{immediate:r,deep:s,flush:i,once:o}=n,a=be({},n);let l;if(Ws)if(i==="sync"){const p=cd();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!e||r)a.once=!0;else return{stop:ut,resume:ut,pause:ut};const c=Ee;a.call=(p,g,w)=>pt(p,c,g,w);let u=!1;i==="post"?a.scheduler=p=>{Be(p,c&&c.suspense)}:i!=="sync"&&(u=!0,a.scheduler=(p,g)=>{g?p():Eo(p)}),a.augmentJob=p=>{e&&(p.flags|=4),u&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const h=wh(t,e,a);return l&&l.push(h),h}function ud(t,e,n){const r=this.proxy,s=pe(t)?t.includes(".")?qc(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=xr(this),a=Wc(s,i.bind(r),n);return o(),a}function qc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const fd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ze(e)}Modifiers`]||t[`${bn(e)}Modifiers`];function hd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ie;let s=n;const i=e.startsWith("update:"),o=i&&fd(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>pe(u)?u.trim():u)),o.number&&(s=n.map(Ti)));let a,l=r[a=ei(e)]||r[a=ei(Ze(e))];!l&&i&&(l=r[a=ei(bn(e))]),l&&pt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pt(c,t,6,s)}}function zc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const l=c=>{const u=zc(c,e,!0);u&&(a=!0,be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ce(t)&&r.set(t,null),null):($(i)?i.forEach(l=>o[l]=null):be(o,i),ce(t)&&r.set(t,o),o)}function Bs(t,e){return!t||!Vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,bn(e))||Z(t,e))}function ai(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:p,setupState:g,ctx:w,inheritAttrs:R}=t,F=gs(t);let V,k;try{if(n.shapeFlag&4){const O=s||r,H=O;V=lt(c.call(H,O,u,h,g,p,w)),k=a}else{const O=e;V=lt(O.length>1?O(h,{attrs:a,slots:o,emit:l}):O(h,null)),k=e.props?a:dd(a)}}catch(O){ur.length=0,$s(O,t,1),V=Le(gn)}let N=V;if(k&&R!==!1){const O=Object.keys(k),{shapeFlag:H}=N;O.length&&H&7&&(i&&O.some(no)&&(k=pd(k,i)),N=Fn(N,k,!1,!0))}return n.dirs&&(N=Fn(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&bo(N,n.transition),V=N,gs(F),V}const dd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vs(n))&&((e||(e={}))[n]=t[n]);return e},pd=(t,e)=>{const n={};for(const r in t)(!no(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gd(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ga(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!Bs(c,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ga(r,o,c):!0:!!o;return!1}function ga(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Bs(n,i))return!0}return!1}function md({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Kc=t=>t.__isSuspense;function _d(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Sh(t)}const at=Symbol.for("v-fgt"),Hs=Symbol.for("v-txt"),gn=Symbol.for("v-cmt"),li=Symbol.for("v-stc"),ur=[];let We=null;function He(t=!1){ur.push(We=t?null:[])}function yd(){ur.pop(),We=ur[ur.length-1]||null}let wr=1;function ma(t){wr+=t,t<0&&We&&(We.hasOnce=!0)}function Gc(t){return t.dynamicChildren=wr>0?We||Nn:null,yd(),wr>0&&We&&We.push(t),t}function wt(t,e,n,r,s,i){return Gc(me(t,e,n,r,s,i,!0))}function is(t,e,n,r,s){return Gc(Le(t,e,n,r,s,!0))}function Di(t){return t?t.__v_isVNode===!0:!1}function Xn(t,e){return t.type===e.type&&t.key===e.key}const Jc=({key:t})=>t??null,os=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?pe(t)||he(t)||B(t)?{i:xe,r:t,k:e,f:!!n}:t:null);function me(t,e=null,n=null,r=0,s=null,i=t===at?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jc(e),ref:e&&os(e),scopeId:Tc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xe};return a?(To(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=pe(n)?8:16),wr>0&&!o&&We&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&We.push(l),l}const Le=vd;function vd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===$h)&&(t=gn),Di(t)){const a=Fn(t,e,!0);return n&&To(a,n),wr>0&&!i&&We&&(a.shapeFlag&6?We[We.indexOf(t)]=a:We.push(a)),a.patchFlag=-2,a}if(Od(t)&&(t=t.__vccOpts),e){e=Ed(e);let{class:a,style:l}=e;a&&!pe(a)&&(e.class=oo(a)),ce(l)&&(go(l)&&!$(l)&&(l=be({},l)),e.style=io(l))}const o=pe(t)?1:Kc(t)?128:Rh(t)?64:ce(t)?4:B(t)?2:0;return me(t,e,n,r,s,o,i,!0)}function Ed(t){return t?go(t)||xc(t)?be({},t):t:null}function Fn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?bd(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Jc(c),ref:e&&e.ref?n&&i?$(i)?i.concat(os(e)):[i,os(e)]:os(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fn(t.ssContent),ssFallback:t.ssFallback&&Fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&bo(u,l.clone(u)),u}function Et(t=" ",e=0){return Le(Hs,null,t,e)}function Qr(t="",e=!1){return e?(He(),is(gn,null,t)):Le(gn,null,t)}function lt(t){return t==null||typeof t=="boolean"?Le(gn):$(t)?Le(at,null,t.slice()):typeof t=="object"?jt(t):Le(Hs,null,String(t))}function jt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fn(t)}function To(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),To(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!xc(e)?e._ctx=xe:s===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),r&64?(n=16,e=[Et(e)]):n=8);t.children=e,t.shapeFlag|=n}function bd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=oo([e.class,r.class]));else if(s==="style")e.style=io([e.style,r.style]);else if(Vs(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function it(t,e,n,r=null){pt(t,e,7,[n,r])}const wd=Nc();let Id=0;function Td(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||wd,i={uid:Id++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ec(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mc(r,s),emitsOptions:zc(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=hd.bind(null,i),t.ce&&t.ce(i),i}let Ee=null,ys,Vi;{const t=Yl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ys=e("__VUE_INSTANCE_SETTERS__",n=>Ee=n),Vi=e("__VUE_SSR_SETTERS__",n=>Ws=n)}const xr=t=>{const e=Ee;return ys(t),t.scope.on(),()=>{t.scope.off(),ys(e)}},_a=()=>{Ee&&Ee.scope.off(),ys(null)};function Yc(t){return t.vnode.shapeFlag&4}let Ws=!1;function Sd(t,e=!1,n=!1){e&&Vi(e);const{props:r,children:s}=t.vnode,i=Yc(t);Xh(t,r,i,e),nd(t,s,n);const o=i?Ad(t,e):void 0;return e&&Vi(!1),o}function Ad(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Hh);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Pd(t):null,i=xr(t);tn();const o=Vr(r,t,0,[t.props,s]);if(nn(),i(),zl(o)){if(ar(t)||Ac(t),o.then(_a,_a),e)return o.then(a=>{ya(t,a,e)}).catch(a=>{$s(a,t,0)});t.asyncDep=o}else ya(t,o,e)}else Qc(t,e)}function ya(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=vc(e)),Qc(t,n)}let va;function Qc(t,e,n){const r=t.type;if(!t.render){if(!e&&va&&!r.render){const s=r.template||wo(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=be(be({isCustomElement:i,delimiters:a},o),l);r.render=va(s,c)}}t.render=r.render||ut}{const s=xr(t);tn();try{Wh(t)}finally{nn(),s()}}}const Rd={get(t,e){return Ae(t,"get",""),t[e]}};function Pd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Rd),slots:t.slots,emit:t.emit,expose:e}}function qs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vc(mo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in lr)return lr[n](t)},has(e,n){return n in e||n in lr}})):t.proxy}function Cd(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function Od(t){return B(t)&&"__vccOpts"in t}const Ge=(t,e)=>Eh(t,e,Ws);function Xc(t,e,n){const r=arguments.length;return r===2?ce(e)&&!$(e)?Di(e)?Le(t,null,[e]):Le(t,e):Le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Di(n)&&(n=[n]),Le(t,e,n))}const kd="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xi;const Ea=typeof window<"u"&&window.trustedTypes;if(Ea)try{xi=Ea.createPolicy("vue",{createHTML:t=>t})}catch{}const Zc=xi?t=>xi.createHTML(t):t=>t,Nd="http://www.w3.org/2000/svg",Dd="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,ba=yt&&yt.createElement("template"),Vd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?yt.createElementNS(Nd,t):e==="mathml"?yt.createElementNS(Dd,t):n?yt.createElement(t,{is:n}):yt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>yt.createTextNode(t),createComment:t=>yt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ba.innerHTML=Zc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=ba.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},xd=Symbol("_vtc");function Ld(t,e,n){const r=t[xd];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wa=Symbol("_vod"),Md=Symbol("_vsh"),Ud=Symbol(""),Fd=/(^|;)\s*display\s*:/;function $d(t,e,n){const r=t.style,s=pe(n);let i=!1;if(n&&!s){if(e)if(pe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&as(r,a,"")}else for(const o in e)n[o]==null&&as(r,o,"");for(const o in n)o==="display"&&(i=!0),as(r,o,n[o])}else if(s){if(e!==n){const o=r[Ud];o&&(n+=";"+o),r.cssText=n,i=Fd.test(n)}}else e&&t.removeAttribute("style");wa in t&&(t[wa]=i?r.display:"",t[Md]&&(r.display="none"))}const Ia=/\s*!important$/;function as(t,e,n){if($(n))n.forEach(r=>as(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=jd(t,e);Ia.test(n)?t.setProperty(bn(r),n.replace(Ia,""),"important"):t[r]=n}}const Ta=["Webkit","Moz","ms"],ci={};function jd(t,e){const n=ci[e];if(n)return n;let r=Ze(e);if(r!=="filter"&&r in t)return ci[e]=r;r=Ms(r);for(let s=0;s<Ta.length;s++){const i=Ta[s]+r;if(i in t)return ci[e]=i}return e}const Sa="http://www.w3.org/1999/xlink";function Aa(t,e,n,r,s,i=Wf(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Sa,e.slice(6,e.length)):t.setAttributeNS(Sa,e,n):n==null||i&&!Ql(n)?t.removeAttribute(e):t.setAttribute(e,i?"":en(n)?String(n):n)}function Bd(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Zc(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Ql(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Pn(t,e,n,r){t.addEventListener(e,n,r)}function Hd(t,e,n,r){t.removeEventListener(e,n,r)}const Ra=Symbol("_vei");function Wd(t,e,n,r,s=null){const i=t[Ra]||(t[Ra]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=qd(e);if(r){const c=i[e]=Gd(r,s);Pn(t,a,c,l)}else o&&(Hd(t,a,o,l),i[e]=void 0)}}const Pa=/(?:Once|Passive|Capture)$/;function qd(t){let e;if(Pa.test(t)){e={};let r;for(;r=t.match(Pa);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):bn(t.slice(2)),e]}let ui=0;const zd=Promise.resolve(),Kd=()=>ui||(zd.then(()=>ui=0),ui=Date.now());function Gd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;pt(Jd(r,n.value),e,5,[r])};return n.value=t,n.attached=Kd(),n}function Jd(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ca=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Yd=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Ld(t,r,o):e==="style"?$d(t,n,r):Vs(e)?no(e)||Wd(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qd(t,e,r,o))?(Bd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Aa(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Aa(t,e,r,o))};function Qd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ca(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ca(e)&&pe(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!pe(n)))}const Oa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>ns(e,n):e};function Xd(t){t.target.composing=!0}function ka(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fi=Symbol("_assign"),vs={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[fi]=Oa(s);const i=r||s.props&&s.props.type==="number";Pn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ti(a)),t[fi](a)}),n&&Pn(t,"change",()=>{t.value=t.value.trim()}),e||(Pn(t,"compositionstart",Xd),Pn(t,"compositionend",ka),Pn(t,"change",ka))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[fi]=Oa(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ti(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Zd=["ctrl","shift","alt","meta"],ep={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Zd.some(n=>t[`${n}Key`]&&!e.includes(n))},eu=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=ep[e[o]];if(a&&a(s,e))return}return t(s,...i)})},tp=be({patchProp:Yd},Vd);let Na;function np(){return Na||(Na=sd(tp))}const rp=(...t)=>{const e=np().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ip(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,sp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function sp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ip(t){return pe(t)?document.querySelector(t):t}var op=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let tu;const zs=t=>tu=t,nu=Symbol();function Li(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var fr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(fr||(fr={}));function ap(){const t=tc(!0),e=t.run(()=>pn({}));let n=[],r=[];const s=mo({install(i){zs(s),s._a=i,i.provide(nu,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!op?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ru=()=>{};function Da(t,e,n,r=ru){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&nc()&&qf(s),s}function An(t,...e){t.slice().forEach(n=>{n(...e)})}const lp=t=>t(),Va=Symbol(),hi=Symbol();function Mi(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Li(s)&&Li(r)&&t.hasOwnProperty(n)&&!he(r)&&!Gt(r)?t[n]=Mi(s,r):t[n]=r}return t}const cp=Symbol();function up(t){return!Li(t)||!t.hasOwnProperty(cp)}const{assign:Ft}=Object;function fp(t){return!!(he(t)&&t.effect)}function hp(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=mh(n.state.value[t]);return Ft(u,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=mo(Ge(()=>{zs(n);const g=n._s.get(t);return o[p].call(g,g)})),h),{}))}return l=su(t,c,e,n,r,!0),l}function su(t,e,n={},r,s,i){let o;const a=Ft({actions:{}},n),l={deep:!0};let c,u,h=[],p=[],g;const w=r.state.value[t];!i&&!w&&(r.state.value[t]={}),pn({});let R;function F(z){let q;c=u=!1,typeof z=="function"?(z(r.state.value[t]),q={type:fr.patchFunction,storeId:t,events:g}):(Mi(r.state.value[t],z),q={type:fr.patchObject,payload:z,storeId:t,events:g});const ae=R=Symbol();vo().then(()=>{R===ae&&(c=!0)}),u=!0,An(h,q,r.state.value[t])}const V=i?function(){const{state:q}=n,ae=q?q():{};this.$patch(Re=>{Ft(Re,ae)})}:ru;function k(){o.stop(),h=[],p=[],r._s.delete(t)}const N=(z,q="")=>{if(Va in z)return z[hi]=q,z;const ae=function(){zs(r);const Re=Array.from(arguments),Ue=[],Ne=[];function on(W){Ue.push(W)}function Vt(W){Ne.push(W)}An(p,{args:Re,name:ae[hi],store:H,after:on,onError:Vt});let le;try{le=z.apply(this&&this.$id===t?this:H,Re)}catch(W){throw An(Ne,W),W}return le instanceof Promise?le.then(W=>(An(Ue,W),W)).catch(W=>(An(Ne,W),Promise.reject(W))):(An(Ue,le),le)};return ae[Va]=!0,ae[hi]=q,ae},O={_p:r,$id:t,$onAction:Da.bind(null,p),$patch:F,$reset:V,$subscribe(z,q={}){const ae=Da(h,z,q.detached,()=>Re()),Re=o.run(()=>cr(()=>r.state.value[t],Ue=>{(q.flush==="sync"?u:c)&&z({storeId:t,type:fr.direct,events:g},Ue)},Ft({},l,q)));return ae},$dispose:k},H=Dr(O);r._s.set(t,H);const Y=(r._a&&r._a.runWithContext||lp)(()=>r._e.run(()=>(o=tc()).run(()=>e({action:N}))));for(const z in Y){const q=Y[z];if(he(q)&&!fp(q)||Gt(q))i||(w&&up(q)&&(he(q)?q.value=w[z]:Mi(q,w[z])),r.state.value[t][z]=q);else if(typeof q=="function"){const ae=N(q,z);Y[z]=ae,a.actions[z]=q}}return Ft(H,Y),Ft(Q(H),Y),Object.defineProperty(H,"$state",{get:()=>r.state.value[t],set:z=>{F(q=>{Ft(q,z)})}}),r._p.forEach(z=>{Ft(H,o.run(()=>z({store:H,app:r._a,pinia:r,options:a})))}),w&&i&&n.hydrate&&n.hydrate(H.$state,w),c=!0,u=!0,H}function iu(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=Qh();return a=a||(c?ft(nu,null):null),a&&zs(a),a=tu,a._s.has(r)||(i?su(r,e,s,a):hp(r,s,a)),a._s.get(r)}return o.$id=r,o}var xa={};/**
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
 */const ou=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},au={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),r.push(n[u],n[h],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ou(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new pp;const p=i<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),h!==64){const w=c<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gp=function(t){const e=ou(t);return au.encodeByteArray(e,!0)},Es=function(t){return gp(t).replace(/\./g,"")},lu=function(t){try{return au.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _p=()=>mp().__FIREBASE_DEFAULTS__,yp=()=>{if(typeof process>"u"||typeof xa>"u")return;const t=xa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lu(t[1]);return e&&JSON.parse(e)},So=()=>{try{return _p()||yp()||vp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cu=t=>{var e,n;return(n=(e=So())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ep=t=>{const e=cu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uu=()=>{var t;return(t=So())===null||t===void 0?void 0:t.config},fu=t=>{var e;return(e=So())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class bp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Es(JSON.stringify(n)),Es(JSON.stringify(o)),""].join(".")}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ip(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Tp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ap(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rp(){try{return typeof indexedDB=="object"}catch{return!1}}function Pp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Cp="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Cp,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Op(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nt(s,a,r)}}function Op(t,e){return t.replace(kp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kp=/\{\$([^}]+)}/g;function Np(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(La(i)&&La(o)){if(!bs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function La(t){return t!==null&&typeof t=="object"}/**
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
 */function Mr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function rr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dp(t,e){const n=new Vp(t,e);return n.subscribe.bind(n)}class Vp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=di),s.error===void 0&&(s.error=di),s.complete===void 0&&(s.complete=di);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function di(){}/**
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const un="[DEFAULT]";/**
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
 */class Lp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Up(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mp(t){return t===un?void 0:t}function Up(t){return t.instantiationMode==="EAGER"}/**
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
 */class Fp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const $p={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},jp=ee.INFO,Bp={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Hp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Bp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ao{constructor(e){this.name=e,this._logLevel=jp,this._logHandler=Hp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$p[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Wp=(t,e)=>e.some(n=>t instanceof n);let Ma,Ua;function qp(){return Ma||(Ma=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zp(){return Ua||(Ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hu=new WeakMap,Ui=new WeakMap,du=new WeakMap,pi=new WeakMap,Ro=new WeakMap;function Kp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Jt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hu.set(n,t)}).catch(()=>{}),Ro.set(e,t),e}function Gp(t){if(Ui.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ui.set(t,e)}let Fi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ui.get(t);if(e==="objectStoreNames")return t.objectStoreNames||du.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jp(t){Fi=t(Fi)}function Yp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gi(this),e,...n);return du.set(r,e.sort?e.sort():[e]),Jt(r)}:zp().includes(t)?function(...e){return t.apply(gi(this),e),Jt(hu.get(this))}:function(...e){return Jt(t.apply(gi(this),e))}}function Qp(t){return typeof t=="function"?Yp(t):(t instanceof IDBTransaction&&Gp(t),Wp(t,qp())?new Proxy(t,Fi):t)}function Jt(t){if(t instanceof IDBRequest)return Kp(t);if(pi.has(t))return pi.get(t);const e=Qp(t);return e!==t&&(pi.set(t,e),Ro.set(e,t)),e}const gi=t=>Ro.get(t);function Xp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Jt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jt(o.result),l.oldVersion,l.newVersion,Jt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Zp=["get","getKey","getAll","getAllKeys","count"],eg=["put","add","delete","clear"],mi=new Map;function Fa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mi.get(e))return mi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=eg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zp.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return mi.set(e,i),i}Jp(t=>({...t,get:(e,n,r)=>Fa(e,n)||t.get(e,n,r),has:(e,n)=>!!Fa(e,n)||t.has(e,n)}));/**
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
 */class tg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ng(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ng(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $i="@firebase/app",$a="0.10.10";/**
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
 */const Pt=new Ao("@firebase/app"),rg="@firebase/app-compat",sg="@firebase/analytics-compat",ig="@firebase/analytics",og="@firebase/app-check-compat",ag="@firebase/app-check",lg="@firebase/auth",cg="@firebase/auth-compat",ug="@firebase/database",fg="@firebase/database-compat",hg="@firebase/functions",dg="@firebase/functions-compat",pg="@firebase/installations",gg="@firebase/installations-compat",mg="@firebase/messaging",_g="@firebase/messaging-compat",yg="@firebase/performance",vg="@firebase/performance-compat",Eg="@firebase/remote-config",bg="@firebase/remote-config-compat",wg="@firebase/storage",Ig="@firebase/storage-compat",Tg="@firebase/firestore",Sg="@firebase/vertexai-preview",Ag="@firebase/firestore-compat",Rg="firebase",Pg="10.13.1";/**
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
 */const ji="[DEFAULT]",Cg={[$i]:"fire-core",[rg]:"fire-core-compat",[ig]:"fire-analytics",[sg]:"fire-analytics-compat",[ag]:"fire-app-check",[og]:"fire-app-check-compat",[lg]:"fire-auth",[cg]:"fire-auth-compat",[ug]:"fire-rtdb",[fg]:"fire-rtdb-compat",[hg]:"fire-fn",[dg]:"fire-fn-compat",[pg]:"fire-iid",[gg]:"fire-iid-compat",[mg]:"fire-fcm",[_g]:"fire-fcm-compat",[yg]:"fire-perf",[vg]:"fire-perf-compat",[Eg]:"fire-rc",[bg]:"fire-rc-compat",[wg]:"fire-gcs",[Ig]:"fire-gcs-compat",[Tg]:"fire-fst",[Ag]:"fire-fst-compat",[Sg]:"fire-vertex","fire-js":"fire-js",[Rg]:"fire-js-all"};/**
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
 */const ws=new Map,Og=new Map,Bi=new Map;function ja(t,e){try{t.container.addComponent(e)}catch(n){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(Bi.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;Bi.set(e,t);for(const n of ws.values())ja(n,t);for(const n of Og.values())ja(n,t);return!0}function Po(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ct(t){return t.settings!==void 0}/**
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
 */const kg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new Lr("app","Firebase",kg);/**
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
 */class Ng{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
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
 */const zn=Pg;function pu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ji,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(n||(n=uu()),!n)throw Yt.create("no-options");const i=ws.get(s);if(i){if(bs(n,i.options)&&bs(r,i.config))return i;throw Yt.create("duplicate-app",{appName:s})}const o=new Fp(s);for(const l of Bi.values())o.addComponent(l);const a=new Ng(n,r,o);return ws.set(s,a),a}function gu(t=ji){const e=ws.get(t);if(!e&&t===ji&&uu())return pu();if(!e)throw Yt.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let s=(r=Cg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(a.join(" "));return}$n(new mn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Dg="firebase-heartbeat-database",Vg=1,Ir="firebase-heartbeat-store";let _i=null;function mu(){return _i||(_i=Xp(Dg,Vg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ir)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yt.create("idb-open",{originalErrorMessage:t.message})})),_i}async function xg(t){try{const n=(await mu()).transaction(Ir),r=await n.objectStore(Ir).get(_u(t));return await n.done,r}catch(e){if(e instanceof Nt)Pt.warn(e.message);else{const n=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(n.message)}}}async function Ba(t,e){try{const r=(await mu()).transaction(Ir,"readwrite");await r.objectStore(Ir).put(e,_u(t)),await r.done}catch(n){if(n instanceof Nt)Pt.warn(n.message);else{const r=Yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pt.warn(r.message)}}}function _u(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Lg=1024,Mg=30*24*60*60*1e3;class Ug{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $g(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ha();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Mg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ha(),{heartbeatsToSend:r,unsentEntries:s}=Fg(this._heartbeatsCache.heartbeats),i=Es(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pt.warn(n),""}}}function Ha(){return new Date().toISOString().substring(0,10)}function Fg(t,e=Lg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Wa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $g{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rp()?Pp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ba(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ba(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wa(t){return Es(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jg(t){$n(new mn("platform-logger",e=>new tg(e),"PRIVATE")),$n(new mn("heartbeat",e=>new Ug(e),"PRIVATE")),Qt($i,$a,t),Qt($i,$a,"esm2017"),Qt("fire-js","")}jg("");function Co(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function yu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bg=yu,vu=new Lr("auth","Firebase",yu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Ao("@firebase/auth");function Hg(t,...e){Is.logLevel<=ee.WARN&&Is.warn(`Auth (${zn}): ${t}`,...e)}function ls(t,...e){Is.logLevel<=ee.ERROR&&Is.error(`Auth (${zn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,...e){throw Oo(t,...e)}function ht(t,...e){return Oo(t,...e)}function Eu(t,e,n){const r=Object.assign(Object.assign({},Bg()),{[e]:n});return new Lr("auth","Firebase",r).create(e,{appName:t.name})}function Rt(t){return Eu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vu.create(t,...e)}function M(t,e,...n){if(!t)throw Oo(e,...n)}function It(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ls(e),new Error(e)}function Ct(t,e){t||It(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wg(){return qa()==="http:"||qa()==="https:"}function qa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wg()||Tp()||"connection"in navigator)?navigator.onLine:!0}function zg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ct(n>e,"Short delay should be less than long delay!"),this.isMobile=Ip()||Sp()}get(){return qg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t,e){Ct(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=new Ur(3e4,6e4);function rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function sn(t,e,n,r,s={}){return wu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Mr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),bu.fetch()(Iu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function wu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Kg),e);try{const s=new Yg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Xr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xr(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Eu(t,u,c);et(t,u)}}catch(s){if(s instanceof Nt)throw s;et(t,"network-request-failed",{message:String(s)})}}async function Fr(t,e,n,r,s={}){const i=await sn(t,e,n,r,s);return"mfaPendingCredential"in i&&et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Iu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ko(t.config,s):`${t.config.apiScheme}://${s}`}function Jg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Yg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),Gg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ht(t,e,r);return s.customData._tokenResponse=n,s}function za(t){return t!==void 0&&t.enterprise!==void 0}class Qg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Jg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Xg(t,e){return sn(t,"GET","/v2/recaptchaConfig",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zg(t,e){return sn(t,"POST","/v1/accounts:delete",e)}async function Tu(t,e){return sn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function em(t,e=!1){const n=ze(t),r=await n.getIdToken(e),s=No(r);M(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:hr(yi(s.auth_time)),issuedAtTime:hr(yi(s.iat)),expirationTime:hr(yi(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yi(t){return Number(t)*1e3}function No(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ls("JWT malformed, contained fewer than 3 sections"),null;try{const s=lu(n);return s?JSON.parse(s):(ls("Failed to decode base64 JWT payload"),null)}catch(s){return ls("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ka(t){const e=No(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&tm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hr(this.lastLoginAt),this.creationTime=hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ts(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Tr(t,Tu(n,{idToken:r}));M(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Su(i.providerUserInfo):[],a=sm(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Wi(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function rm(t){const e=ze(t);await Ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Su(t){return t.map(e=>{var{providerId:n}=e,r=Co(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im(t,e){const n=await wu(t,{},async()=>{const r=Mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Iu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function om(t,e){return sn(t,"POST","/v2/accounts:revokeToken",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ka(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=Ka(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await im(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new xn;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(M(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xn,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Co(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return em(this,e)}reload(){return rm(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ts(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(Rt(this.auth));const e=await this.getIdToken();return await Tr(this,Zg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,V=(c=n.createdAt)!==null&&c!==void 0?c:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:O,isAnonymous:H,providerData:fe,stsTokenManager:Y}=n;M(N&&Y,e,"internal-error");const z=xn.fromJSON(this.name,Y);M(typeof N=="string",e,"internal-error"),Mt(h,e.name),Mt(p,e.name),M(typeof O=="boolean",e,"internal-error"),M(typeof H=="boolean",e,"internal-error"),Mt(g,e.name),Mt(w,e.name),Mt(R,e.name),Mt(F,e.name),Mt(V,e.name),Mt(k,e.name);const q=new Tt({uid:N,auth:e,email:p,emailVerified:O,displayName:h,isAnonymous:H,photoURL:w,phoneNumber:g,tenantId:R,stsTokenManager:z,createdAt:V,lastLoginAt:k});return fe&&Array.isArray(fe)&&(q.providerData=fe.map(ae=>Object.assign({},ae))),F&&(q._redirectEventId=F),q}static async _fromIdTokenResponse(e,n,r=!1){const s=new xn;s.updateFromServerResponse(n);const i=new Tt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ts(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];M(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Su(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new xn;a.updateFromIdToken(r);const l=new Tt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Wi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Map;function St(t){Ct(t instanceof Function,"Expected a class definition");let e=Ga.get(t);return e?(Ct(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ga.set(t,e),e)}/**
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
 */class Au{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Au.type="NONE";const Ja=Au;/**
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
 */function cs(t,e,n){return`firebase:${t}:${e}:${n}`}class Ln{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=cs(this.userKey,s.apiKey,i),this.fullPersistenceKey=cs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ln(St(Ja),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||St(Ja);const o=cs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Tt._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ln(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ln(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ou(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ru(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nu(e))return"Blackberry";if(Du(e))return"Webos";if(Pu(e))return"Safari";if((e.includes("chrome/")||Cu(e))&&!e.includes("edge/"))return"Chrome";if(ku(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ru(t=ke()){return/firefox\//i.test(t)}function Pu(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cu(t=ke()){return/crios\//i.test(t)}function Ou(t=ke()){return/iemobile/i.test(t)}function ku(t=ke()){return/android/i.test(t)}function Nu(t=ke()){return/blackberry/i.test(t)}function Du(t=ke()){return/webos/i.test(t)}function Do(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function am(t=ke()){var e;return Do(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lm(){return Ap()&&document.documentMode===10}function Vu(t=ke()){return Do(t)||ku(t)||Du(t)||Nu(t)||/windows phone/i.test(t)||Ou(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t,e=[]){let n;switch(t){case"Browser":n=Ya(ke());break;case"Worker":n=`${Ya(ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zn}/${r}`}/**
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
 */class cm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function um(t,e={}){return sn(t,"GET","/v2/passwordPolicy",rn(t,e))}/**
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
 */const fm=6;class hm{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qa(this),this.idTokenSubscription=new Qa(this),this.beforeStateQueue=new cm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=St(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ln.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Tu(this,{idToken:e}),r=await Tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ts(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(Rt(this));const n=e?ze(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(Rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(Rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await um(this),n=new hm(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await om(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&St(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Ln.create(this,[St(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Hg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wn(t){return ze(t)}class Qa{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dp(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pm(t){Ks=t}function Lu(t){return Ks.loadJS(t)}function gm(){return Ks.recaptchaEnterpriseScript}function mm(){return Ks.gapiScript}function _m(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ym="recaptcha-enterprise",vm="NO_RECAPTCHA";class Em{constructor(e){this.type=ym,this.auth=wn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Xg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Qg(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;za(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(vm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&za(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=gm();l.length!==0&&(l+=a),Lu(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Xa(t,e,n,r=!1){const s=new Em(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function qi(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Xa(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Xa(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t,e){const n=Po(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(bs(i,e??{}))return s;et(s,"already-initialized")}return n.initialize({options:e})}function wm(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(St);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Im(t,e,n){const r=wn(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Mu(e),{host:o,port:a}=Tm(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Sm()}function Mu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Tm(t){const e=Mu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Za(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Za(o)}}}function Za(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Sm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,n){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function Am(t,e){return sn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rm(t,e){return Fr(t,"POST","/v1/accounts:signInWithPassword",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(t,e){return Fr(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}async function Cm(t,e){return Fr(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Vo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Sr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qi(e,n,"signInWithPassword",Rm);case"emailLink":return Pm(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qi(e,r,"signUpPassword",Am);case"emailLink":return Cm(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(t,e){return Fr(t,"POST","/v1/accounts:signInWithIdp",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="http://localhost";class _n extends Vo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Co(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _n(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mn(e,n)}buildRequest(){const e={requestUri:Om,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Nm(t){const e=nr(rr(t)).link,n=e?nr(rr(e)).deep_link_id:null,r=nr(rr(t)).deep_link_id;return(r?nr(rr(r)).link:null)||r||n||e||t}class xo{constructor(e){var n,r,s,i,o,a;const l=nr(rr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=km((s=l.mode)!==null&&s!==void 0?s:null);M(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Nm(e);try{return new xo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.providerId=Kn.PROVIDER_ID}static credential(e,n){return Sr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xo.parseLink(n);return M(r,"argument-error"),Sr._fromEmailAndCode(e,r.code,r.tenantId)}}Kn.PROVIDER_ID="password";Kn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $r extends Uu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends $r{constructor(){super("facebook.com")}static credential(e){return _n._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends $r{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _n._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends $r{constructor(){super("github.com")}static credential(e){return _n._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.GITHUB_SIGN_IN_METHOD="github.com";zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends $r{constructor(){super("twitter.com")}static credential(e,n){return _n._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dm(t,e){return Fr(t,"POST","/v1/accounts:signUp",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Tt._fromIdTokenResponse(e,r,s),o=el(r);return new yn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=el(r);return new yn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function el(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends Nt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ss.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ss(e,n,r,s)}}function Fu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ss._fromErrorAndOperation(t,i,e,r):i})}async function Vm(t,e,n=!1){const r=await Tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yn._forOperation(t,"link",r)}/**
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
 */async function xm(t,e,n=!1){const{auth:r}=t;if(ct(r.app))return Promise.reject(Rt(r));const s="reauthenticate";try{const i=await Tr(t,Fu(r,s,e,t),n);M(i.idToken,r,"internal-error");const o=No(i.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),yn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&et(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $u(t,e,n=!1){if(ct(t.app))return Promise.reject(Rt(t));const r="signIn",s=await Fu(t,r,e),i=await yn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Lm(t,e){return $u(wn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ju(t){const e=wn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Mm(t,e,n){if(ct(t.app))return Promise.reject(Rt(t));const r=wn(t),o=await qi(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Dm).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ju(t),l}),a=await yn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Um(t,e,n){return ct(t.app)?Promise.reject(Rt(t)):Lm(ze(t),Kn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ju(t),r})}function Fm(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function $m(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function jm(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}function Bm(t){return ze(t).signOut()}const As="__sak";/**
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
 */class Bu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(As,"1"),this.storage.removeItem(As),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=1e3,Wm=10;class Hu extends Bu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Wm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Hm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hu.type="LOCAL";const qm=Hu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu extends Bu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wu.type="SESSION";const qu=Wu;/**
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
 */function zm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Gs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await zm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Km{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Lo("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}function Gm(t){dt().location.href=t}/**
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
 */function zu(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function Jm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ym(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Qm(){return zu()?self:null}/**
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
 */const Ku="firebaseLocalStorageDb",Xm=1,Rs="firebaseLocalStorage",Gu="fbase_key";class jr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Js(t,e){return t.transaction([Rs],e?"readwrite":"readonly").objectStore(Rs)}function Zm(){const t=indexedDB.deleteDatabase(Ku);return new jr(t).toPromise()}function zi(){const t=indexedDB.open(Ku,Xm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rs,{keyPath:Gu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rs)?e(r):(r.close(),await Zm(),e(await zi()))})})}async function tl(t,e,n){const r=Js(t,!0).put({[Gu]:e,value:n});return new jr(r).toPromise()}async function e_(t,e){const n=Js(t,!1).get(e),r=await new jr(n).toPromise();return r===void 0?null:r.value}function nl(t,e){const n=Js(t,!0).delete(e);return new jr(n).toPromise()}const t_=800,n_=3;class Ju{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>n_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gs._getInstance(Qm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Jm(),!this.activeServiceWorker)return;this.sender=new Km(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ym()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zi();return await tl(e,As,"1"),await nl(e,As),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>e_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Js(s,!1).getAll();return new jr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ju.type="LOCAL";const r_=Ju;new Ur(3e4,6e4);/**
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
 */function s_(t,e){return e?St(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mo extends Vo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function i_(t){return $u(t.auth,new Mo(t),t.bypassAuthState)}function o_(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),xm(n,new Mo(t),t.bypassAuthState)}async function a_(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Vm(n,new Mo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return i_;case"linkViaPopup":case"linkViaRedirect":return a_;case"reauthViaPopup":case"reauthViaRedirect":return o_;default:et(this.auth,"internal-error")}}resolve(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=new Ur(2e3,1e4);class kn extends Yu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const e=Lo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,l_.get())};e()}}kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="pendingRedirect",us=new Map;class u_ extends Yu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=us.get(this.auth._key());if(!e){try{const r=await f_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}us.set(this.auth._key(),e)}return this.bypassAuthState||us.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f_(t,e){const n=p_(e),r=d_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function h_(t,e){us.set(t._key(),e)}function d_(t){return St(t._redirectPersistence)}function p_(t){return cs(c_,t.config.apiKey,t.name)}async function g_(t,e,n=!1){if(ct(t.app))return Promise.reject(Rt(t));const r=wn(t),s=s_(r,e),o=await new u_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=10*60*1e3;class __{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!y_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ht(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=m_&&this.cachedEventUids.clear(),this.cachedEventUids.has(rl(e))}saveEventToCache(e){this.cachedEventUids.add(rl(e)),this.lastProcessedEventTime=Date.now()}}function rl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function y_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_(t,e={}){return sn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b_=/^https?/;async function w_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await v_(t);for(const n of e)try{if(I_(n))return}catch{}et(t,"unauthorized-domain")}function I_(t){const e=Hi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!b_.test(n))return!1;if(E_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const T_=new Ur(3e4,6e4);function sl(){const t=dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function S_(t){return new Promise((e,n)=>{var r,s,i;function o(){sl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sl(),n(ht(t,"network-request-failed"))},timeout:T_.get()})}if(!((s=(r=dt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dt().gapi)===null||i===void 0)&&i.load)o();else{const a=_m("iframefcb");return dt()[a]=()=>{gapi.load?o():n(ht(t,"network-request-failed"))},Lu(`${mm()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fs=null,e})}let fs=null;function A_(t){return fs=fs||S_(t),fs}/**
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
 */const R_=new Ur(5e3,15e3),P_="__/auth/iframe",C_="emulator/auth/iframe",O_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N_(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ko(e,C_):`https://${t.config.authDomain}/${P_}`,r={apiKey:e.apiKey,appName:t.name,v:zn},s=k_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mr(r).slice(1)}`}async function D_(t){const e=await A_(t),n=dt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:N_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:O_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ht(t,"network-request-failed"),a=dt().setTimeout(()=>{i(o)},R_.get());function l(){dt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const V_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x_=500,L_=600,M_="_blank",U_="http://localhost";class il{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function F_(t,e,n,r=x_,s=L_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},V_),{width:r.toString(),height:s.toString(),top:i,left:o}),c=ke().toLowerCase();n&&(a=Cu(c)?M_:n),Ru(c)&&(e=e||U_,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(am(c)&&a!=="_self")return $_(e||"",a),new il(null);const h=window.open(e||"",a,u);M(h,t,"popup-blocked");try{h.focus()}catch{}return new il(h)}function $_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const j_="__/auth/handler",B_="emulator/auth/handler",H_=encodeURIComponent("fac");async function ol(t,e,n,r,s,i){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zn,eventId:s};if(e instanceof Uu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Np(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof $r){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${H_}=${encodeURIComponent(l)}`:"";return`${W_(t)}?${Mr(a).slice(1)}${c}`}function W_({config:t}){return t.emulator?ko(t,B_):`https://${t.authDomain}/${j_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="webStorageSupport";class q_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qu,this._completeRedirectFn=g_,this._overrideRedirectResult=h_}async _openPopup(e,n,r,s){var i;Ct((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ol(e,n,r,Hi(),s);return F_(e,o,Lo())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ol(e,n,r,Hi(),s);return Gm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ct(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await D_(e),r=new __(e);return n.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vi,{type:vi},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[vi];o!==void 0&&n(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=w_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vu()||Pu()||Do()}}const z_=q_;var al="@firebase/auth",ll="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J_(t){$n(new mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xu(t)},c=new dm(r,s,i,l);return wm(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new mn("auth-internal",e=>{const n=wn(e.getProvider("auth").getImmediate());return(r=>new K_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(al,ll,G_(t)),Qt(al,ll,"esm2017")}/**
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
 */const Y_=5*60,Q_=fu("authIdTokenMaxAge")||Y_;let cl=null;const X_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Q_)return;const s=n==null?void 0:n.token;cl!==s&&(cl=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Z_(t=gu()){const e=Po(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bm(t,{popupRedirectResolver:z_,persistence:[r_,qm,qu]}),r=fu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=X_(i.toString());$m(n,o,()=>o(n.currentUser)),Fm(n,a=>o(a))}}const s=cu("auth");return s&&Im(n,`http://${s}`),n}function ey(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}pm({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ht("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ey().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J_("Browser");var ty="firebase",ny="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(ty,ny,"app");/**
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
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
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
 */let Gn="10.13.1";/**
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
 */const jn=new Ao("@firebase/firestore");function Ps(t,...e){if(jn.logLevel<=ee.DEBUG){const n=e.map(Fo);jn.debug(`Firestore (${Gn}): ${t}`,...n)}}function Uo(t,...e){if(jn.logLevel<=ee.ERROR){const n=e.map(Fo);jn.error(`Firestore (${Gn}): ${t}`,...n)}}function Xu(t,...e){if(jn.logLevel<=ee.WARN){const n=e.map(Fo);jn.warn(`Firestore (${Gn}): ${t}`,...n)}}function Fo(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function _e(t="Unexpected state"){const e=`FIRESTORE (${Gn}) INTERNAL ASSERTION FAILED: `+t;throw Uo(e),new Error(e)}function Zt(t,e){t||_e()}function $o(t,e){return t}/**
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
 */const ul="ok",ry="cancelled",dr="unknown",K="invalid-argument",sy="deadline-exceeded",iy="not-found",oy="permission-denied",Ki="unauthenticated",ay="resource-exhausted",Bn="failed-precondition",ly="aborted",cy="out-of-range",Zu="unimplemented",uy="internal",fy="unavailable";class U extends Nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ef{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ve.UNAUTHENTICATED))}shutdown(){}}class dy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class py{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Zt(typeof e.accessToken=="string"),new ef(e.accessToken,new Ve(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class gy{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class my{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new gy(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _y{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yy{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Zt(typeof e.token=="string"),new _y(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class vy{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ar{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ar("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ar&&e.projectId===this.projectId&&e.database===this.database}}class Rr{constructor(e,n,r){n===void 0?n=0:n>e.length&&_e(),r===void 0?r=e.length-n:r>e.length-n&&_e(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Rr{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(K,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const Ey=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Rr{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return Ey.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(K,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(K,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(K,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(K,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
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
 */class Me{constructor(e){this.path=e}static fromPath(e){return new Me(Se.fromString(e))}static fromName(e){return new Me(Se.fromString(e).popFirst(5))}static empty(){return new Me(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Me(new Se(e.slice()))}}function fl(t){if(Me.isDocumentKey(t))throw new U(K,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ys(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e()}function tf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(K,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ys(t);throw new U(K,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function nf(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let Zr=null;function by(){return Zr===null?Zr=function(){return 268435456+Math.round(2147483648*Math.random())}():Zr++,"0x"+Zr.toString(16)}/**
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
 */function wy(t){return t==null}function Cs(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var hl,J;function dl(t){if(t===void 0)return Uo("RPC_ERROR","HTTP error has no status"),dr;switch(t){case 200:return ul;case 400:return Bn;case 401:return Ki;case 403:return oy;case 404:return iy;case 409:return ly;case 416:return cy;case 429:return ay;case 499:return ry;case 500:return dr;case 501:return Zu;case 503:return fy;case 504:return sy;default:return t>=200&&t<300?ul:t>=400&&t<500?Bn:t>=500&&t<600?uy:dr}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(J=hl||(hl={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";class Ty extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${s}/databases/${i}`,this.T=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get R(){return!1}P(n,r,s,i,o){const a=by(),l=this.V(n,r.toUriEncodedString());Ps("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.I(c,i,o),this.p(n,l,c,s).then(u=>(Ps("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Xu("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}g(n,r,s,i,o,a){return this.P(n,r,s,i,o)}I(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}V(n,r){const s=Iy[n];return`${this.m}/v1/${r}:${s}`}terminate(){}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const c=l;throw new U(dl(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(i=l==null?void 0:l.error)===null||i===void 0?void 0:i.message;throw new U(dl(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}function ge(t,e){return t<e?-1:t>e?1:0}function Sy(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */function pl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class Ay extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ay("Invalid base64 string: "+i):i}}(e);return new Ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const Ry=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vn(t){if(Zt(!!t),typeof t=="string"){let e=0;const n=Ry.exec(t);if(Zt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?Ot.fromBase64String(t):Ot.fromUint8Array(t)}/**
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
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(K,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(K,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(K,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(K,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sf(t){const e=t.mapValue.fields.__previous_value__;return rf(e)?sf(e):e}function Cr(t){const e=vn(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es={fields:{__type__:{stringValue:"__max__"}}};function En(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rf(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:function(n){var r,s;return((s=(((r=n==null?void 0:n.mapValue)===null||r===void 0?void 0:r.fields)||{}).__type__)===null||s===void 0?void 0:s.stringValue)==="__vector__"}(t)?10:11:_e()}function Os(t,e){if(t===e)return!0;const n=En(t);if(n!==En(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Cr(t).isEqual(Cr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=vn(s.timestampValue),a=vn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Pr(s.bytesValue).isEqual(Pr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return de(s.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return de(s.integerValue)===de(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=de(s.doubleValue),a=de(i.doubleValue);return o===a?Cs(o)===Cs(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Sy(t.arrayValue.values||[],e.arrayValue.values||[],Os);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(pl(o)!==pl(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Os(o[l],a[l])))return!1;return!0}(t,e);default:return _e()}}function Or(t,e){return(t.values||[]).find(n=>Os(n,e))!==void 0}function ks(t,e){if(t===e)return 0;const n=En(t),r=En(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=de(i.integerValue||i.doubleValue),l=de(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return gl(t.timestampValue,e.timestampValue);case 4:return gl(Cr(t),Cr(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Pr(i),l=Pr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ge(a[c],l[c]);if(u!==0)return u}return ge(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ge(de(i.latitude),de(o.latitude));return a!==0?a:ge(de(i.longitude),de(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ml(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,c,u;const h=i.fields||{},p=o.fields||{},g=(a=h.value)===null||a===void 0?void 0:a.arrayValue,w=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=ge(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((u=w==null?void 0:w.values)===null||u===void 0?void 0:u.length)||0);return R!==0?R:ml(g,w)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===es&&o===es)return 0;if(i===es)return 1;if(o===es)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const p=ge(l[h],u[h]);if(p!==0)return p;const g=ks(a[l[h]],c[u[h]]);if(g!==0)return g}return ge(l.length,u.length)}(t.mapValue,e.mapValue);default:throw _e()}}function gl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=vn(t),r=vn(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function ml(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ks(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function _l(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function of(t){return!!t&&"arrayValue"in t}function yl(t){return!!t&&"nullValue"in t}function vl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ei(t){return!!t&&"mapValue"in t}function pr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=pr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class El{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class af{}class nt extends af{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Py(e,n,r):n==="array-contains"?new ky(e,r):n==="in"?new Ny(e,r):n==="not-in"?new Dy(e,r):n==="array-contains-any"?new Vy(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Cy(e,r):new Oy(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ks(n,this.value)):n!==null&&En(this.value)===En(n)&&this.matchesComparison(ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Br extends af{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Br(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class Py extends nt{constructor(e,n,r){super(e,n,r),this.key=Me.fromName(r.referenceValue)}matches(e){const n=Me.comparator(e.key,this.key);return this.matchesComparison(n)}}class Cy extends nt{constructor(e,n){super(e,"in",n),this.keys=lf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Oy extends nt{constructor(e,n){super(e,"not-in",n),this.keys=lf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Me.fromName(r.referenceValue))}class ky extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return of(n)&&Or(n.arrayValue,this.value)}}class Ny extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Or(this.value.arrayValue,n)}}class Dy extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Or(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Or(this.value.arrayValue,n)}}class Vy extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!of(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Or(this.value.arrayValue,r))}}/**
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
 */class Gi{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class Ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new qe(0,0))}static max(){return new Ie(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ns{constructor(e,n){this.comparator=e,this.root=n||ye.EMPTY}insert(e,n){return new Ns(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new Ns(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ts(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ts(this.root,e,this.comparator,!1)}getReverseIterator(){return new ts(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ts(this.root,e,this.comparator,!0)}}class ts{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ye.RED,this.left=s??ye.EMPTY,this.right=i??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ds{constructor(e){this.comparator=e,this.data=new Ns(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bl(this.data.getIterator())}getIteratorFrom(e){return new bl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ds(this.comparator);return n.data=e,n}}class bl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ei(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pr(n)}setAll(e){let n=Je.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=pr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ei(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Os(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ei(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Qs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bt(pr(this.value))}}/**
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
 */class Bt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Bt(e,0,Ie.min(),Ie.min(),Ie.min(),bt.empty(),0)}static newFoundDocument(e,n,r,s){return new Bt(e,1,n,Ie.min(),r,s,0)}static newNoDocument(e,n){return new Bt(e,2,n,Ie.min(),Ie.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new Bt(e,3,n,Ie.min(),Ie.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xy{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.C=null}}function wl(t,e=null,n=[],r=[],s=null,i=null,o=null){return new xy(t,e,n,r,s,i,o)}/**
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
 */class cf{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function Ly(t){return t.collectionGroup!==null}function My(t){const e=$o(t);if(e.S===null){e.S=[];const n=new Set;for(const i of e.explicitOrderBy)e.S.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ds(Je.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.S.push(new Gi(i,r))}),n.has(Je.keyField().canonicalString())||e.S.push(new Gi(Je.keyField(),r))}return e.S}function Uy(t){const e=$o(t);return e.N||(e.N=Fy(e,My(t))),e.N}function Fy(t,e){if(t.limitType==="F")return wl(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Gi(s.field,i)});const n=t.endAt?new El(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new El(t.startAt.position,t.startAt.inclusive):null;return wl(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ji(t,e){const n=t.filters.concat([e]);return new cf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cs(e)?"-0":e}}function $y(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Cs(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):uf(t,e)}/**
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
 */const jy={asc:"ASCENDING",desc:"DESCENDING"},By={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hy={and:"AND",or:"OR"};class Wy{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Il(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Tl(t){return Zt(!!t),Ie.fromTimestamp(function(n){const r=vn(n);return new qe(r.seconds,r.nanos)}(t))}function ff(t,e){return Yi(t,e).canonicalString()}function Yi(t,e){const n=function(s){return new Se(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zy(t,e){const n=function(s){const i=Se.fromString(s);return Zt(df(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new U(K,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(K,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Me(function(s){return Zt(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}(n))}function Ky(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=function(c,u){return ff(c.databaseId,u)}(t,s);const i=function(c){if(c.length!==0)return hf(Br.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(p){return{field:Cn(p.field),direction:Gy(p.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=function(c,u){return c.useProto3Json||wy(u)?u:{value:u}}(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{B:n,parent:s}}function Gy(t){return jy[t]}function Jy(t){return By[t]}function Yy(t){return Hy[t]}function Cn(t){return{fieldPath:t.canonicalString()}}function hf(t){return t instanceof nt?function(n){if(n.op==="=="){if(vl(n.value))return{unaryFilter:{field:Cn(n.field),op:"IS_NAN"}};if(yl(n.value))return{unaryFilter:{field:Cn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vl(n.value))return{unaryFilter:{field:Cn(n.field),op:"IS_NOT_NAN"}};if(yl(n.value))return{unaryFilter:{field:Cn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cn(n.field),op:Jy(n.op),value:n.value}}}(t):t instanceof Br?function(n){const r=n.getFilters().map(s=>hf(s));return r.length===1?r[0]:{compositeFilter:{op:Yy(n.op),filters:r}}}(t):_e()}function df(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){return new Wy(t,!0)}/**
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
 */class Qy extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.Y=!1}Z(){if(this.Y)throw new U(Bn,"The client has already been terminated.")}P(e,n,r,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.P(e,Yi(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Ki&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(dr,i.toString())})}g(e,n,r,s,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,Yi(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Ki&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(dr,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function Xy(t,e){const n=$o(t),{B:r,parent:s}=Ky(n.serializer,Uy(e));return(await n.g("RunQuery",n.serializer.databaseId,s,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(a,l,c){const u=zy(a,l.name),h=Tl(l.updateTime),p=l.createTime?Tl(l.createTime):Ie.min(),g=new bt({mapValue:{fields:l.fields}}),w=Bt.newFoundDocument(u,h,p,g);return c&&w.setHasCommittedMutations(),c?w.setHasCommittedMutations():w}(n.serializer,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Map;function Zy(t){if(t._terminated)throw new U(Bn,"The client has already been terminated.");if(!gr.has(t)){Ps("ComponentProvider","Initializing Datastore");const e=function(i){return new Ty(i,fetch.bind(null))}(function(i,o,a,l){return new vy(i,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,nf(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=jo(t._databaseId),r=function(i,o,a,l){return new Qy(i,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);gr.set(t,r)}return gr.get(t)}class Sl{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(K,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(K,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,o,a,l){if(o===!0&&l===!0)throw new U(K,`${i} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(K,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(K,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(K,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bo{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(Bn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(Bn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sl(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hy;switch(r.type){case"firstParty":return new my(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(K,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gr.get(n);r&&(Ps("ComponentProvider","Removing Datastore"),gr.delete(n),r.terminate())}(this),Promise.resolve()}}function ev(t,e){const n=gu(),r="(default)",s=Po(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=Ep("firestore");i&&tv(s,...i)}return s}function tv(t,e,n,r={}){var s;const i=(t=tf(t,Bo))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Xu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ve.MOCK_USER;else{a=wp(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new U(K,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ve(c)}t._authCredentials=new dy(new ef(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jn(this.firestore,e,this._query)}}class Dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class Un extends Jn{constructor(e,n,r){super(e,n,function(i){return new cf(i)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new Me(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function nv(t,e,...n){if(t=ze(t),t instanceof Bo){const r=Se.fromString(e,...n);return fl(r),new Un(t,null,r)}{if(!(t instanceof Dt||t instanceof Un))throw new U(K,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return fl(r),new Un(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(Ot.fromBase64String(e))}catch(n){throw new U(K,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hn(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(K,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this._methodName=e}}/**
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
 */class Ho{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(K,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(K,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */class Wo{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const rv=/^__.*__$/;function mf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class qo{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new qo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.st(e),s}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.tt(),s}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return Qi(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(mf(this.et)&&rv.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class sv{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jo(e)}ht(e,n,r,s=!1){return new qo({et:e,methodName:n,lt:r,path:Je.emptyPath(),it:!1,ct:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iv(t){const e=t._freezeSettings(),n=jo(t._databaseId);return new sv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ov(t,e,n,r=!1){return zo(n,t.ht(r?4:3,e))}function zo(t,e){if(_f(t=ze(t)))return lv("Unsupported field value:",e,t),av(t,e);if(t instanceof gf)return function(r,s){if(!mf(s.et))throw s._t(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s._t(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=zo(a,s.ut(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $y(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=qe.fromDate(r);return{timestampValue:Il(s.serializer,i)}}if(r instanceof qe){const i=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Il(s.serializer,i)}}if(r instanceof Ho)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hn)return{bytesValue:qy(s.serializer,r._byteString)};if(r instanceof Dt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ff(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wo)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a._t("VectorValues must only contain numeric values.");return uf(a.serializer,l)})}}}}}}(r,s);throw s._t(`Unsupported field value: ${Ys(r)}`)}(t,e)}function av(t,e){const n={};return function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qs(t,(r,s)=>{const i=zo(s,e.nt(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _f(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof Ho||t instanceof Hn||t instanceof Dt||t instanceof gf||t instanceof Wo)}function lv(t,e,n){if(!_f(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ys(n);throw r==="an object"?e._t(t+" a custom object"):e._t(t+" "+r)}}const cv=new RegExp("[~\\*/\\[\\]]");function uv(t,e,n){if(e.search(cv)>=0)throw Qi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pf(...e.split("."))._internalPath}catch{throw Qi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qi(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new U(K,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yf extends fv{data(){return super.data()}}class hv{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function vf(t,e){return typeof e=="string"?uv(t,e):e instanceof pf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{}class dv extends Ko{}function pv(t,e,...n){let r=[];e instanceof Ko&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Go).length,a=i.filter(l=>l instanceof Xs).length;if(o>1||o>0&&a>0)throw new U(K,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Xs extends dv{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Xs(e,n,r)}_apply(e){const n=this._parse(e);return Ef(e._query,n),new Jn(e.firestore,e.converter,Ji(e._query,n))}_parse(e){const n=iv(e.firestore);return function(i,o,a,l,c,u,h){let p;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(K,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Rl(h,u);const g=[];for(const w of h)g.push(Al(l,i,w));p={arrayValue:{values:g}}}else p=Al(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Rl(h,u),p=ov(a,o,h,u==="in"||u==="not-in");return nt.create(c,u,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function gv(t,e,n){const r=e,s=vf("where",t);return Xs._create(s,r,n)}class Go extends Ko{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Go(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Br.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)Ef(o,l),o=Ji(o,l)}(e._query,n),new Jn(e.firestore,e.converter,Ji(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Al(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new U(K,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ly(e)&&n.indexOf("/")!==-1)throw new U(K,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!Me.isDocumentKey(r))throw new U(K,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _l(t,new Me(r))}if(n instanceof Dt)return _l(t,n._key);throw new U(K,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ys(n)}.`)}function Rl(t,e){if(!Array.isArray(t)||t.length===0)throw new U(K,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ef(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(K,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(K,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class mv extends class{convertValue(n,r="none"){switch(En(n)){case 0:return null;case 1:return n.booleanValue;case 2:return de(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(Pr(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 11:return this.convertObject(n.mapValue,r);case 10:return this.convertVectorValue(n.mapValue);default:throw _e()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const s={};return Qs(n,(i,o)=>{s[i]=this.convertValue(o,r)}),s}convertVectorValue(n){var r,s,i;const o=(i=(s=(r=n.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(a=>de(a.doubleValue));return new Wo(o)}convertGeoPoint(n){return new Ho(de(n.latitude),de(n.longitude))}convertArray(n,r){return(n.values||[]).map(s=>this.convertValue(s,r))}convertServerTimestamp(n,r){switch(r){case"previous":const s=sf(n);return s==null?null:this.convertValue(s,r);case"estimate":return this.convertTimestamp(Cr(n));default:return null}}convertTimestamp(n){const r=vn(n);return new qe(r.seconds,r.nanos)}convertDocumentKey(n,r){const s=Se.fromString(n);Zt(df(s));const i=new Ar(s.get(1),s.get(3)),o=new Me(s.popFirst(5));return i.isEqual(r)||Uo(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function _v(t){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new U(Zu,"limitToLast() queries require specifying at least one orderBy() clause")})((t=tf(t,Jn))._query);const e=Zy(t.firestore),n=new mv(t.firestore);return Xy(e,t._query).then(r=>{const s=r.map(i=>new yf(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new hv(t,s)})}(function(){(function(n){Gn=n})(`${zn}_lite`),$n(new mn("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new Bo(new py(e.getProvider("auth-internal")),new yy(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(K,'"projectId" not provided in firebase.initializeApp.');return new Ar(a.options.projectId,l)}(s,n),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),Qt("firestore-lite","4.7.1",""),Qt("firestore-lite","4.7.1","esm2017")})();const yv={apiKey:"AIzaSyCI9MC9qMkmjuV23QEVVfLmaw6Gywu82sY",authDomain:"vue3-project-mrs.firebaseapp.com",projectId:"vue3-project-mrs",storageBucket:"vue3-project-mrs.appspot.com",messagingSenderId:"587619424480",appId:"1:587619424480:web:9ea9ac223c778164fc5885"};pu(yv);const vv=ev(),sr=Z_();/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const On=typeof document<"u";function bf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ev(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&bf(t.default)}const re=Object.assign;function bi(t,e){const n={};for(const r in e){const s=e[r];n[r]=tt(s)?s.map(t):t(s)}return n}const mr=()=>{},tt=Array.isArray,wf=/#/g,bv=/&/g,wv=/\//g,Iv=/=/g,Tv=/\?/g,If=/\+/g,Sv=/%5B/g,Av=/%5D/g,Tf=/%5E/g,Rv=/%60/g,Sf=/%7B/g,Pv=/%7C/g,Af=/%7D/g,Cv=/%20/g;function Jo(t){return encodeURI(""+t).replace(Pv,"|").replace(Sv,"[").replace(Av,"]")}function Ov(t){return Jo(t).replace(Sf,"{").replace(Af,"}").replace(Tf,"^")}function Xi(t){return Jo(t).replace(If,"%2B").replace(Cv,"+").replace(wf,"%23").replace(bv,"%26").replace(Rv,"`").replace(Sf,"{").replace(Af,"}").replace(Tf,"^")}function kv(t){return Xi(t).replace(Iv,"%3D")}function Nv(t){return Jo(t).replace(wf,"%23").replace(Tv,"%3F")}function Dv(t){return t==null?"":Nv(t).replace(wv,"%2F")}function kr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Vv=/\/$/,xv=t=>t.replace(Vv,"");function wi(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Fv(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:kr(o)}}function Lv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Mv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Wn(e.matched[r],n.matched[s])&&Rf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Wn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Rf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Uv(t[n],e[n]))return!1;return!0}function Uv(t,e){return tt(t)?Cl(t,e):tt(e)?Cl(e,t):t===e}function Cl(t,e){return tt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Fv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Nr;(function(t){t.pop="pop",t.push="push"})(Nr||(Nr={}));var _r;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_r||(_r={}));function $v(t){if(!t)if(On){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xv(t)}const jv=/^[^#]+#/;function Bv(t,e){return t.replace(jv,"#")+e}function Hv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Zs=()=>({left:window.scrollX,top:window.scrollY});function Wv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Hv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ol(t,e){return(history.state?history.state.position-e:-1)+t}const Zi=new Map;function qv(t,e){Zi.set(t,e)}function zv(t){const e=Zi.get(t);return Zi.delete(t),e}let Kv=()=>location.protocol+"//"+location.host;function Pf(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Pl(l,"")}return Pl(n,t)+r+s}function Gv(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=Pf(t,location),w=n.value,R=e.value;let F=0;if(p){if(n.value=g,e.value=p,o&&o===w){o=null;return}F=R?p.position-R.position:0}else r(g);s.forEach(V=>{V(n.value,w,{delta:F,type:Nr.pop,direction:F?F>0?_r.forward:_r.back:_r.unknown})})};function l(){o=n.value}function c(p){s.push(p);const g=()=>{const w=s.indexOf(p);w>-1&&s.splice(w,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(re({},p.state,{scroll:Zs()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function kl(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Zs():null}}function Jv(t){const{history:e,location:n}=window,r={value:Pf(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Kv()+t+l;try{e[u?"replaceState":"pushState"](c,"",p),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(l,c){const u=re({},e.state,kl(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=re({},s.value,e.state,{forward:l,scroll:Zs()});i(u.current,u,!0);const h=re({},kl(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Yv(t){t=$v(t);const e=Jv(t),n=Gv(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:t,go:r,createHref:Bv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Qv(t){return typeof t=="string"||t&&typeof t=="object"}function Cf(t){return typeof t=="string"||typeof t=="symbol"}const Of=Symbol("");var Nl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nl||(Nl={}));function qn(t,e){return re(new Error,{type:t,[Of]:!0},e)}function _t(t,e){return t instanceof Error&&Of in t&&(e==null||!!(t.type&e))}const Dl="[^/]+?",Xv={sensitive:!1,strict:!1,start:!0,end:!0},Zv=/[.+*?^${}()[\]/\\]/g;function eE(t,e){const n=re({},Xv,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const p=c[h];let g=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Zv,"\\$&"),g+=40;else if(p.type===1){const{value:w,repeatable:R,optional:F,regexp:V}=p;i.push({name:w,repeatable:R,optional:F});const k=V||Dl;if(k!==Dl){g+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${w}" (${k}): `+O.message)}}let N=R?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(N=F&&c.length<2?`(?:/${N})`:"/"+N),F&&(N+="?"),s+=N,g+=20,F&&(g+=-8),R&&(g+=-20),k===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",w=i[p-1];h[w.name]=g&&w.repeatable?g.split("/"):g}return h}function l(c){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:w,repeatable:R,optional:F}=g,V=w in c?c[w]:"";if(tt(V)&&!R)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const k=tt(V)?V.join("/"):V;if(!k)if(F)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${w}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function tE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function kf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=tE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Vl(r))return 1;if(Vl(s))return-1}return s.length-r.length}function Vl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nE={type:0,value:""},rE=/[a-zA-Z0-9_]/;function sE(t){if(!t)return[[]];if(t==="/")return[[nE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:rE.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function iE(t,e,n){const r=eE(sE(t.path),n),s=re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function oE(t,e){const n=[],r=new Map;e=Ul({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,g){const w=!g,R=Ll(h);R.aliasOf=g&&g.record;const F=Ul(e,h),V=[R];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const H of O)V.push(Ll(re({},R,{components:g?g.record.components:R.components,path:H,aliasOf:g?g.record:R})))}let k,N;for(const O of V){const{path:H}=O;if(p&&H[0]!=="/"){const fe=p.record.path,Y=fe[fe.length-1]==="/"?"":"/";O.path=p.record.path+(H&&Y+H)}if(k=iE(O,p,F),g?g.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),w&&h.name&&!Ml(k)&&o(h.name)),Nf(k)&&l(k),R.children){const fe=R.children;for(let Y=0;Y<fe.length;Y++)i(fe[Y],k,g&&g.children[Y])}g=g||k}return N?()=>{o(N)}:mr}function o(h){if(Cf(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const p=cE(h,n);n.splice(p,0,h),h.record.name&&!Ml(h)&&r.set(h.record.name,h)}function c(h,p){let g,w={},R,F;if("name"in h&&h.name){if(g=r.get(h.name),!g)throw qn(1,{location:h});F=g.record.name,w=re(xl(p.params,g.keys.filter(N=>!N.optional).concat(g.parent?g.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),h.params&&xl(h.params,g.keys.map(N=>N.name))),R=g.stringify(w)}else if(h.path!=null)R=h.path,g=n.find(N=>N.re.test(R)),g&&(w=g.parse(R),F=g.record.name);else{if(g=p.name?r.get(p.name):n.find(N=>N.re.test(p.path)),!g)throw qn(1,{location:h,currentLocation:p});F=g.record.name,w=re({},p.params,h.params),R=g.stringify(w)}const V=[];let k=g;for(;k;)V.unshift(k.record),k=k.parent;return{name:F,path:R,params:w,matched:V,meta:lE(V)}}t.forEach(h=>i(h));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function xl(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ll(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:aE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function aE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ml(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lE(t){return t.reduce((e,n)=>re(e,n.meta),{})}function Ul(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function cE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;kf(t,e[i])<0?r=i:n=i+1}const s=uE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function uE(t){let e=t;for(;e=e.parent;)if(Nf(e)&&kf(t,e)===0)return e}function Nf({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function fE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(If," "),o=i.indexOf("="),a=kr(o<0?i:i.slice(0,o)),l=o<0?null:kr(i.slice(o+1));if(a in e){let c=e[a];tt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Fl(t){let e="";for(let n in t){const r=t[n];if(n=kv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(tt(r)?r.map(i=>i&&Xi(i)):[r&&Xi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function hE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=tt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const dE=Symbol(""),$l=Symbol(""),Yo=Symbol(""),Df=Symbol(""),eo=Symbol("");function Zn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ht(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=p=>{p===!1?l(qn(4,{from:n,to:e})):p instanceof Error?l(p):Qv(p)?l(qn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(p=>l(p))})}function Ii(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(bf(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Ht(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=Ev(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const g=(h.__vccOpts||h)[e];return g&&Ht(g,n,r,o,a,s)()}))}}return i}function jl(t){const e=ft(Yo),n=ft(Df),r=Ge(()=>{const l=ve(t.to);return e.resolve(l)}),s=Ge(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(Wn.bind(null,u));if(p>-1)return p;const g=Bl(l[c-2]);return c>1&&Bl(u)===g&&h[h.length-1].path!==g?h.findIndex(Wn.bind(null,l[c-2])):p}),i=Ge(()=>s.value>-1&&_E(n.params,r.value.params)),o=Ge(()=>s.value>-1&&s.value===n.matched.length-1&&Rf(n.params,r.value.params));function a(l={}){return mE(l)?e[ve(t.replace)?"replace":"push"](ve(t.to)).catch(mr):Promise.resolve()}return{route:r,href:Ge(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const pE=Sc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jl,setup(t,{slots:e}){const n=Dr(jl(t)),{options:r}=ft(Yo),s=Ge(()=>({[Hl(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hl(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Xc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),gE=pE;function mE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _E(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!tt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hl=(t,e,n)=>t??e??n,yE=Sc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ft(eo),s=Ge(()=>t.route||r.value),i=ft($l,0),o=Ge(()=>{let c=ve(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ge(()=>s.value.matched[o.value]);ss($l,Ge(()=>o.value+1)),ss(dE,a),ss(eo,s);const l=pn();return cr(()=>[l.value,a.value,t.name],([c,u,h],[p,g,w])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Wn(u,g)||!p)&&(u.enterCallbacks[h]||[]).forEach(R=>R(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return Wl(n.default,{Component:p,route:c});const g=h.props[u],w=g?g===!0?c.params:typeof g=="function"?g(c):g:null,F=Xc(p,re({},w,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Wl(n.default,{Component:F,route:c})||F}}});function Wl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const vE=yE;function EE(t){const e=oE(t.routes,t),n=t.parseQuery||fE,r=t.stringifyQuery||Fl,s=t.history,i=Zn(),o=Zn(),a=Zn(),l=dh(Ut);let c=Ut;On&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=bi.bind(null,y=>""+y),h=bi.bind(null,Dv),p=bi.bind(null,kr);function g(y,C){let A,D;return Cf(y)?(A=e.getRecordMatcher(y),D=C):D=y,e.addRoute(D,A)}function w(y){const C=e.getRecordMatcher(y);C&&e.removeRoute(C)}function R(){return e.getRoutes().map(y=>y.record)}function F(y){return!!e.getRecordMatcher(y)}function V(y,C){if(C=re({},C||l.value),typeof y=="string"){const d=wi(n,y,C.path),m=e.resolve({path:d.path},C),v=s.createHref(d.fullPath);return re(d,m,{params:p(m.params),hash:kr(d.hash),redirectedFrom:void 0,href:v})}let A;if(y.path!=null)A=re({},y,{path:wi(n,y.path,C.path).path});else{const d=re({},y.params);for(const m in d)d[m]==null&&delete d[m];A=re({},y,{params:h(d)}),C.params=h(C.params)}const D=e.resolve(A,C),te=y.hash||"";D.params=u(p(D.params));const ue=Lv(r,re({},y,{hash:Ov(te),path:D.path})),f=s.createHref(ue);return re({fullPath:ue,hash:te,query:r===Fl?hE(y.query):y.query||{}},D,{redirectedFrom:void 0,href:f})}function k(y){return typeof y=="string"?wi(n,y,l.value.path):re({},y)}function N(y,C){if(c!==y)return qn(8,{from:C,to:y})}function O(y){return Y(y)}function H(y){return O(re(k(y),{replace:!0}))}function fe(y){const C=y.matched[y.matched.length-1];if(C&&C.redirect){const{redirect:A}=C;let D=typeof A=="function"?A(y):A;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=k(D):{path:D},D.params={}),re({query:y.query,hash:y.hash,params:D.path!=null?{}:y.params},D)}}function Y(y,C){const A=c=V(y),D=l.value,te=y.state,ue=y.force,f=y.replace===!0,d=fe(A);if(d)return Y(re(k(d),{state:typeof d=="object"?re({},te,d.state):te,force:ue,replace:f}),C||A);const m=A;m.redirectedFrom=C;let v;return!ue&&Mv(r,D,A)&&(v=qn(16,{to:m,from:D}),rt(D,D,!0,!1)),(v?Promise.resolve(v):ae(m,D)).catch(_=>_t(_)?_t(_,2)?_:xt(_):X(_,m,D)).then(_=>{if(_){if(_t(_,2))return Y(re({replace:f},k(_.to),{state:typeof _.to=="object"?re({},te,_.to.state):te,force:ue}),C||m)}else _=Ue(m,D,!0,f,te);return Re(m,D,_),_})}function z(y,C){const A=N(y,C);return A?Promise.reject(A):Promise.resolve()}function q(y){const C=Tn.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(y):y()}function ae(y,C){let A;const[D,te,ue]=bE(y,C);A=Ii(D.reverse(),"beforeRouteLeave",y,C);for(const d of D)d.leaveGuards.forEach(m=>{A.push(Ht(m,y,C))});const f=z.bind(null,y,C);return A.push(f),Ke(A).then(()=>{A=[];for(const d of i.list())A.push(Ht(d,y,C));return A.push(f),Ke(A)}).then(()=>{A=Ii(te,"beforeRouteUpdate",y,C);for(const d of te)d.updateGuards.forEach(m=>{A.push(Ht(m,y,C))});return A.push(f),Ke(A)}).then(()=>{A=[];for(const d of ue)if(d.beforeEnter)if(tt(d.beforeEnter))for(const m of d.beforeEnter)A.push(Ht(m,y,C));else A.push(Ht(d.beforeEnter,y,C));return A.push(f),Ke(A)}).then(()=>(y.matched.forEach(d=>d.enterCallbacks={}),A=Ii(ue,"beforeRouteEnter",y,C,q),A.push(f),Ke(A))).then(()=>{A=[];for(const d of o.list())A.push(Ht(d,y,C));return A.push(f),Ke(A)}).catch(d=>_t(d,8)?d:Promise.reject(d))}function Re(y,C,A){a.list().forEach(D=>q(()=>D(y,C,A)))}function Ue(y,C,A,D,te){const ue=N(y,C);if(ue)return ue;const f=C===Ut,d=On?history.state:{};A&&(D||f?s.replace(y.fullPath,re({scroll:f&&d&&d.scroll},te)):s.push(y.fullPath,te)),l.value=y,rt(y,C,A,f),xt()}let Ne;function on(){Ne||(Ne=s.listen((y,C,A)=>{if(!Wr.listening)return;const D=V(y),te=fe(D);if(te){Y(re(te,{replace:!0}),D).catch(mr);return}c=D;const ue=l.value;On&&qv(Ol(ue.fullPath,A.delta),Zs()),ae(D,ue).catch(f=>_t(f,12)?f:_t(f,2)?(Y(f.to,D).then(d=>{_t(d,20)&&!A.delta&&A.type===Nr.pop&&s.go(-1,!1)}).catch(mr),Promise.reject()):(A.delta&&s.go(-A.delta,!1),X(f,D,ue))).then(f=>{f=f||Ue(D,ue,!1),f&&(A.delta&&!_t(f,8)?s.go(-A.delta,!1):A.type===Nr.pop&&_t(f,20)&&s.go(-1,!1)),Re(D,ue,f)}).catch(mr)}))}let Vt=Zn(),le=Zn(),W;function X(y,C,A){xt(y);const D=le.list();return D.length?D.forEach(te=>te(y,C,A)):console.error(y),Promise.reject(y)}function gt(){return W&&l.value!==Ut?Promise.resolve():new Promise((y,C)=>{Vt.add([y,C])})}function xt(y){return W||(W=!y,on(),Vt.list().forEach(([C,A])=>y?A(y):C()),Vt.reset()),y}function rt(y,C,A,D){const{scrollBehavior:te}=t;if(!On||!te)return Promise.resolve();const ue=!A&&zv(Ol(y.fullPath,0))||(D||!A)&&history.state&&history.state.scroll||null;return vo().then(()=>te(y,C,ue)).then(f=>f&&Wv(f)).catch(f=>X(f,y,C))}const De=y=>s.go(y);let In;const Tn=new Set,Wr={currentRoute:l,listening:!0,addRoute:g,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:R,resolve:V,options:t,push:O,replace:H,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:gt,install(y){const C=this;y.component("RouterLink",gE),y.component("RouterView",vE),y.config.globalProperties.$router=C,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ve(l)}),On&&!In&&l.value===Ut&&(In=!0,O(s.location).catch(te=>{}));const A={};for(const te in Ut)Object.defineProperty(A,te,{get:()=>l.value[te],enumerable:!0});y.provide(Yo,C),y.provide(Df,mc(A)),y.provide(eo,l);const D=y.unmount;Tn.add(y),y.unmount=function(){Tn.delete(y),Tn.size<1&&(c=Ut,Ne&&Ne(),Ne=null,l.value=Ut,In=!1,W=!1),D()}}};function Ke(y){return y.reduce((C,A)=>C.then(()=>q(A)),Promise.resolve())}return Wr}function bE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Wn(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Wn(c,l))||s.push(l))}return[n,r,s]}const wE=iu("database",{state:()=>({documents:[],loading:!1,error:null}),actions:{async getUrls(){try{const t=pv(nv(vv,"urls"),gv("user","==",sr.currentUser.uid));(await _v(t)).forEach(n=>{this.documents.push({id:n.id,...n.data()})})}catch(t){console.log(t)}finally{this.loading=!1}}}}),IE={__name:"Home",setup(t){const e=Hr(),n=wE();return n.getUrls(),(r,s)=>{var i;return He(),wt("div",null,[s[2]||(s[2]=me("h1",null,"Home ",-1)),me("p",null,er((i=ve(e).userData)==null?void 0:i.email),1),me("ul",null,[(He(!0),wt(at,null,Bh(ve(n).documents,o=>(He(),wt("li",{key:o.id},[Et(er(o.id)+" ",1),s[0]||(s[0]=me("br",null,null,-1)),Et(" "+er(o.name)+" ",1),s[1]||(s[1]=me("br",null,null,-1)),Et(" "+er(o.short),1)]))),128))])])}}},TE=["disabled"],SE={__name:"Login",setup(t){const e=Hr(),n=pn(""),r=pn(""),s=async()=>{if(!n.value||r.value.length<6)return alert("Campos vacios");await e.loginUser(n.value,r.value)};return(i,o)=>(He(),wt("div",null,[o[2]||(o[2]=me("h1",null,"Login",-1)),me("form",{onSubmit:eu(s,["prevent"])},[ms(me("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a)},null,512),[[vs,n.value,void 0,{trim:!0}]]),ms(me("input",{type:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a)},null,512),[[vs,r.value,void 0,{trim:!0}]]),me("button",{type:"submit",disabled:ve(e).loadingUser},"Acceso",8,TE)],32)]))}},AE=["disabled"],RE={__name:"Register",setup(t){const e=Hr(),n=pn(""),r=pn(""),s=async()=>{if(!n.value||r.value.length<6)return alert("Campos vacios");await e.registerUser(n.value,r.value)};return(i,o)=>(He(),wt("div",null,[o[2]||(o[2]=me("h1",null,"Register",-1)),me("form",{onSubmit:eu(s,["prevent"])},[ms(me("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a)},null,512),[[vs,n.value,void 0,{trim:!0}]]),ms(me("input",{type:"password",name:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a)},null,512),[[vs,r.value,void 0,{trim:!0}]]),me("button",{type:"submit",disabled:ve(e).loadingUser},"Crear usuario",8,AE)],32)]))}},PE=async(t,e,n)=>{const r=Hr();r.loadingSession=!0,await r.currentUser()?n():n("/login"),r.loadingSession=!1},CE=[{path:"/",component:IE,beforeEnter:[PE]},{path:"/login",component:SE},{path:"/register",component:RE}],hs=EE({routes:CE,history:Yv()}),Hr=iu("userStore",{state:()=>({userData:null,loadingUser:!1,loadingSession:!1}),actions:{async registerUser(t,e){this.loadingUser=!0;try{const{user:n}=await Mm(sr,t,e);this.userData={email:n.email,uid:n.uid},hs.push("/")}catch(n){console.log(n)}finally{this.loadingUser=!1}},async loginUser(t,e){this.loadingUser=!0;try{const{user:n}=await Um(sr,t,e);this.userData={email:n.email,uid:n.uid},hs.push("/")}catch(n){console.log(n)}finally{this.loadingUser=!1}},async logOutUser(){try{await Bm(sr),this.userData=null,hs.push("/login")}catch{console.log(err)}},currentUser(){return new Promise((t,e)=>{jm(sr,n=>{n?this.userData={email:n.email,uid:n.uid}:this.userData=null,t(n)},n=>{console.log("error"),e(n)})})}}}),OE={key:0},kE={key:1},NE={__name:"App",setup(t){const e=Hr();return(n,r)=>{const s=aa("router-link"),i=aa("router-view");return He(),wt("div",null,[ve(e).loadingSession?(He(),wt("div",kE,r[6]||(r[6]=[me("p",null,"Loading...",-1)]))):(He(),wt("div",OE,[me("nav",null,[ve(e).userData?(He(),is(s,{key:0,to:"/"},{default:rs(()=>r[1]||(r[1]=[Et("Home")])),_:1})):Qr("",!0),r[4]||(r[4]=Et(" | ")),ve(e).userData?Qr("",!0):(He(),is(s,{key:1,to:"/login"},{default:rs(()=>r[2]||(r[2]=[Et("Login")])),_:1})),r[5]||(r[5]=Et(" | ")),ve(e).userData?Qr("",!0):(He(),is(s,{key:2,to:"/register"},{default:rs(()=>r[3]||(r[3]=[Et("Register")])),_:1})),ve(e).userData?(He(),wt("button",{key:3,onClick:r[0]||(r[0]=(...o)=>ve(e).logOutUser&&ve(e).logOutUser(...o))},"Logout")):Qr("",!0)])])),Le(i)])}}};rp(NE).use(hs).use(ap()).mount("#app");
