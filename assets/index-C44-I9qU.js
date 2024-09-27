(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function To(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const oe={},Mn=[],gt=()=>{},dd=()=>!1,Ks=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),So=t=>t.startsWith("onUpdate:"),Se=Object.assign,Ao=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hd=Object.prototype.hasOwnProperty,Z=(t,e)=>hd.call(t,e),$=Array.isArray,Ln=t=>Gs(t)==="[object Map]",vc=t=>Gs(t)==="[object Set]",B=t=>typeof t=="function",ye=t=>typeof t=="string",rn=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",Ec=t=>(ue(t)||B(t))&&B(t.then)&&B(t.catch),wc=Object.prototype.toString,Gs=t=>wc.call(t),pd=t=>Gs(t).slice(8,-1),bc=t=>Gs(t)==="[object Object]",Ro=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fr=To(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Js=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},md=/-(\w)/g,st=Js(t=>t.replace(md,(e,n)=>n?n.toUpperCase():"")),gd=/\B([A-Z])/g,Sn=Js(t=>t.replace(gd,"-$1").toLowerCase()),Ys=Js(t=>t.charAt(0).toUpperCase()+t.slice(1)),vi=Js(t=>t?`on${Ys(t)}`:""),nn=(t,e)=>!Object.is(t,e),ms=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ic=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},qi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sa;const Tc=()=>Sa||(Sa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Po(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ye(r)?Ed(r):Po(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ye(t)||ue(t))return t}const _d=/;(?![^(]*\))/g,yd=/:([^]+)/,vd=/\/\*[^]*?\*\//g;function Ed(t){const e={};return t.replace(vd,"").split(_d).forEach(n=>{if(n){const r=n.split(yd);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Co(t){let e="";if(ye(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=Co(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const wd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bd=To(wd);function Sc(t){return!!t||t===""}const Ac=t=>!!(t&&t.__v_isRef===!0),ar=t=>ye(t)?t:t==null?"":$(t)||ue(t)&&(t.toString===wc||!B(t.toString))?Ac(t)?ar(t.value):JSON.stringify(t,Rc,2):String(t),Rc=(t,e)=>Ac(e)?Rc(t,e.value):Ln(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ei(r,i)+" =>"]=s,n),{})}:vc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ei(n))}:rn(e)?Ei(e):ue(e)&&!$(e)&&!bc(e)?String(e):e,Ei=(t,e="")=>{var n;return rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class Pc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!e&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ne;try{return Ne=this,e()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Cc(t){return new Pc(t)}function Oc(){return Ne}function Id(t,e=!1){Ne&&Ne.cleanups.push(t)}let se;const wi=new WeakSet;class kc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wi.has(this)&&(wi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=dr,dr=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Aa(this),Dc(this);const e=se,n=rt;se=this,rt=!0;try{return this.fn()}finally{Vc(this),se=e,rt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)No(e);this.deps=this.depsTail=void 0,Aa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wi(this)&&this.run()}get dirty(){return Wi(this)}}let Nc=0,dr;function Oo(){Nc++}function ko(){if(--Nc>0)return;let t;for(;dr;){let e=dr;for(dr=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Dc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vc(t){let e,n=t.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),No(r),Td(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function Wi(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&xc(e.dep.computed)||e.dep.version!==e.version)return!0;return!!t._dirty}function xc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ar))return;t.globalVersion=Ar;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!Wi(t)){t.flags&=-3;return}const n=se,r=rt;se=t,rt=!0;try{Dc(t);const s=t.fn(t._value);(e.version===0||nn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{se=n,rt=r,Vc(t),t.flags&=-3}}function No(t){const{dep:e,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)No(s)}}function Td(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let rt=!0;const Mc=[];function sn(){Mc.push(rt),rt=!1}function on(){const t=Mc.pop();rt=t===void 0?!0:t}function Aa(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=se;se=void 0;try{e()}finally{se=n}}}let Ar=0;class Do{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!se||!rt||se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==se)n=this.activeLink={dep:this,sub:se,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},se.deps?(n.prevDep=se.depsTail,se.depsTail.nextDep=n,se.depsTail=n):se.deps=se.depsTail=n,se.flags&4&&Lc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=se.depsTail,n.nextDep=void 0,se.depsTail.nextDep=n,se.depsTail=n,se.deps===n&&(se.deps=r)}return n}trigger(e){this.version++,Ar++,this.notify(e)}notify(e){Oo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{ko()}}}function Lc(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Lc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const As=new WeakMap,pn=Symbol(""),zi=Symbol(""),Rr=Symbol("");function Ce(t,e,n){if(rt&&se){let r=As.get(t);r||As.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=new Do),s.track()}}function Ot(t,e,n,r,s,i){const o=As.get(t);if(!o){Ar++;return}const a=l=>{l&&l.trigger()};if(Oo(),e==="clear")o.forEach(a);else{const l=$(t),c=l&&Ro(n);if(l&&n==="length"){const u=Number(r);o.forEach((d,p)=>{(p==="length"||p===Rr||!rn(p)&&p>=u)&&a(d)})}else switch(n!==void 0&&a(o.get(n)),c&&a(o.get(Rr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(pn)),Ln(t)&&a(o.get(zi)));break;case"delete":l||(a(o.get(pn)),Ln(t)&&a(o.get(zi)));break;case"set":Ln(t)&&a(o.get(pn));break}}ko()}function Sd(t,e){var n;return(n=As.get(t))==null?void 0:n.get(e)}function Cn(t){const e=Q(t);return e===t?e:(Ce(e,"iterate",Rr),et(t)?e:e.map(Pe))}function Qs(t){return Ce(t=Q(t),"iterate",Rr),t}const Ad={__proto__:null,[Symbol.iterator](){return bi(this,Symbol.iterator,Pe)},concat(...t){return Cn(this).concat(...t.map(e=>$(e)?Cn(e):e))},entries(){return bi(this,"entries",t=>(t[1]=Pe(t[1]),t))},every(t,e){return wt(this,"every",t,e,void 0,arguments)},filter(t,e){return wt(this,"filter",t,e,n=>n.map(Pe),arguments)},find(t,e){return wt(this,"find",t,e,Pe,arguments)},findIndex(t,e){return wt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return wt(this,"findLast",t,e,Pe,arguments)},findLastIndex(t,e){return wt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return wt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ii(this,"includes",t)},indexOf(...t){return Ii(this,"indexOf",t)},join(t){return Cn(this).join(t)},lastIndexOf(...t){return Ii(this,"lastIndexOf",t)},map(t,e){return wt(this,"map",t,e,void 0,arguments)},pop(){return rr(this,"pop")},push(...t){return rr(this,"push",t)},reduce(t,...e){return Ra(this,"reduce",t,e)},reduceRight(t,...e){return Ra(this,"reduceRight",t,e)},shift(){return rr(this,"shift")},some(t,e){return wt(this,"some",t,e,void 0,arguments)},splice(...t){return rr(this,"splice",t)},toReversed(){return Cn(this).toReversed()},toSorted(t){return Cn(this).toSorted(t)},toSpliced(...t){return Cn(this).toSpliced(...t)},unshift(...t){return rr(this,"unshift",t)},values(){return bi(this,"values",Pe)}};function bi(t,e,n){const r=Qs(t),s=r[e]();return r!==t&&!et(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Rd=Array.prototype;function wt(t,e,n,r,s,i){const o=Qs(t),a=o!==t&&!et(t),l=o[e];if(l!==Rd[e]){const d=l.apply(t,i);return a?Pe(d):d}let c=n;o!==t&&(a?c=function(d,p){return n.call(this,Pe(d),p,t)}:n.length>2&&(c=function(d,p){return n.call(this,d,p,t)}));const u=l.call(o,c,r);return a&&s?s(u):u}function Ra(t,e,n,r){const s=Qs(t);let i=n;return s!==t&&(et(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Pe(a),l,t)}),s[e](i,...r)}function Ii(t,e,n){const r=Q(t);Ce(r,"iterate",Rr);const s=r[e](...n);return(s===-1||s===!1)&&Lo(n[0])?(n[0]=Q(n[0]),r[e](...n)):s}function rr(t,e,n=[]){sn(),Oo();const r=Q(t)[e].apply(t,n);return ko(),on(),r}const Pd=To("__proto__,__v_isRef,__isVue"),Uc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rn));function Cd(t){rn(t)||(t=String(t));const e=Q(this);return Ce(e,"has",t),e.hasOwnProperty(t)}class Fc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Bd:Hc:i?Bc:jc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=$(e);if(!s){let l;if(o&&(l=Ad[n]))return l;if(n==="hasOwnProperty")return Cd}const a=Reflect.get(e,n,pe(e)?e:r);return(rn(n)?Uc.has(n):Pd(n))||(s||Ce(e,"get",n),i)?a:pe(a)?o&&Ro(n)?a:a.value:ue(a)?s?Wc(a):Br(a):a}}class $c extends Fc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=_n(i);if(!et(r)&&!_n(r)&&(i=Q(i),r=Q(r)),!$(e)&&pe(i)&&!pe(r))return l?!1:(i.value=r,!0)}const o=$(e)&&Ro(n)?Number(n)<e.length:Z(e,n),a=Reflect.set(e,n,r,pe(e)?e:s);return e===Q(s)&&(o?nn(r,i)&&Ot(e,"set",n,r):Ot(e,"add",n,r)),a}deleteProperty(e,n){const r=Z(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ot(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!rn(n)||!Uc.has(n))&&Ce(e,"has",n),r}ownKeys(e){return Ce(e,"iterate",$(e)?"length":pn),Reflect.ownKeys(e)}}class Od extends Fc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const kd=new $c,Nd=new Od,Dd=new $c(!0);const Vo=t=>t,Xs=t=>Reflect.getPrototypeOf(t);function ss(t,e,n=!1,r=!1){t=t.__v_raw;const s=Q(t),i=Q(e);n||(nn(e,i)&&Ce(s,"get",e),Ce(s,"get",i));const{has:o}=Xs(s),a=r?Vo:n?Fo:Pe;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function is(t,e=!1){const n=this.__v_raw,r=Q(n),s=Q(t);return e||(nn(t,s)&&Ce(r,"has",t),Ce(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function os(t,e=!1){return t=t.__v_raw,!e&&Ce(Q(t),"iterate",pn),Reflect.get(t,"size",t)}function Pa(t,e=!1){!e&&!et(t)&&!_n(t)&&(t=Q(t));const n=Q(this);return Xs(n).has.call(n,t)||(n.add(t),Ot(n,"add",t,t)),this}function Ca(t,e,n=!1){!n&&!et(e)&&!_n(e)&&(e=Q(e));const r=Q(this),{has:s,get:i}=Xs(r);let o=s.call(r,t);o||(t=Q(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?nn(e,a)&&Ot(r,"set",t,e):Ot(r,"add",t,e),this}function Oa(t){const e=Q(this),{has:n,get:r}=Xs(e);let s=n.call(e,t);s||(t=Q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ot(e,"delete",t,void 0),i}function ka(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&Ot(t,"clear",void 0,void 0),n}function as(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Q(o),l=e?Vo:t?Fo:Pe;return!t&&Ce(a,"iterate",pn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function ls(t,e,n){return function(...r){const s=this.__v_raw,i=Q(s),o=Ln(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Vo:e?Fo:Pe;return!e&&Ce(i,"iterate",l?zi:pn),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function jt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vd(){const t={get(i){return ss(this,i)},get size(){return os(this)},has:is,add:Pa,set:Ca,delete:Oa,clear:ka,forEach:as(!1,!1)},e={get(i){return ss(this,i,!1,!0)},get size(){return os(this)},has:is,add(i){return Pa.call(this,i,!0)},set(i,o){return Ca.call(this,i,o,!0)},delete:Oa,clear:ka,forEach:as(!1,!0)},n={get(i){return ss(this,i,!0)},get size(){return os(this,!0)},has(i){return is.call(this,i,!0)},add:jt("add"),set:jt("set"),delete:jt("delete"),clear:jt("clear"),forEach:as(!0,!1)},r={get(i){return ss(this,i,!0,!0)},get size(){return os(this,!0)},has(i){return is.call(this,i,!0)},add:jt("add"),set:jt("set"),delete:jt("delete"),clear:jt("clear"),forEach:as(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ls(i,!1,!1),n[i]=ls(i,!0,!1),e[i]=ls(i,!1,!0),r[i]=ls(i,!0,!0)}),[t,n,e,r]}const[xd,Md,Ld,Ud]=Vd();function xo(t,e){const n=e?t?Ud:Ld:t?Md:xd;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const Fd={get:xo(!1,!1)},$d={get:xo(!1,!0)},jd={get:xo(!0,!1)};const jc=new WeakMap,Bc=new WeakMap,Hc=new WeakMap,Bd=new WeakMap;function Hd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qd(t){return t.__v_skip||!Object.isExtensible(t)?0:Hd(pd(t))}function Br(t){return _n(t)?t:Mo(t,!1,kd,Fd,jc)}function qc(t){return Mo(t,!1,Dd,$d,Bc)}function Wc(t){return Mo(t,!0,Nd,jd,Hc)}function Mo(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=qd(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Xt(t){return _n(t)?Xt(t.__v_raw):!!(t&&t.__v_isReactive)}function _n(t){return!!(t&&t.__v_isReadonly)}function et(t){return!!(t&&t.__v_isShallow)}function Lo(t){return t?!!t.__v_raw:!1}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function Uo(t){return!Z(t,"__v_skip")&&Object.isExtensible(t)&&Ic(t,"__v_skip",!0),t}const Pe=t=>ue(t)?Br(t):t,Fo=t=>ue(t)?Wc(t):t;function pe(t){return t?t.__v_isRef===!0:!1}function Dt(t){return zc(t,!1)}function Wd(t){return zc(t,!0)}function zc(t,e){return pe(t)?t:new zd(t,e)}class zd{constructor(e,n){this.dep=new Do,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Q(e),this._value=n?e:Pe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||et(e)||_n(e);e=r?e:Q(e),nn(e,n)&&(this._rawValue=e,this._value=r?e:Pe(e),this.dep.trigger())}}function ge(t){return pe(t)?t.value:t}const Kd={get:(t,e,n)=>e==="__v_raw"?t:ge(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return pe(s)&&!pe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Kc(t){return Xt(t)?t:new Proxy(t,Kd)}function Gd(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=Yd(t,n);return e}class Jd{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Sd(Q(this._object),this._key)}}function Yd(t,e,n){const r=t[e];return pe(r)?r:new Jd(t,e,n)}class Qd{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Do(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ar-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){this.flags|=16,se!==this&&this.dep.notify()}get value(){const e=this.dep.track();return xc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Xd(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new Qd(r,s,n)}const cs={},Rs=new WeakMap;let dn;function Zd(t,e=!1,n=dn){if(n){let r=Rs.get(n);r||Rs.set(n,r=[]),r.push(t)}}function eh(t,e,n=oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,c=O=>s?O:et(O)||s===!1||s===0?Tt(O,1):Tt(O);let u,d,p,m,b=!1,R=!1;if(pe(t)?(d=()=>t.value,b=et(t)):Xt(t)?(d=()=>c(t),b=!0):$(t)?(R=!0,b=t.some(O=>Xt(O)||et(O)),d=()=>t.map(O=>{if(pe(O))return O.value;if(Xt(O))return c(O);if(B(O))return l?l(O,2):O()})):B(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){sn();try{p()}finally{on()}}const O=dn;dn=u;try{return l?l(t,3,[m]):t(m)}finally{dn=O}}:d=gt,e&&s){const O=d,q=s===!0?1/0:s;d=()=>Tt(O(),q)}const L=Oc(),V=()=>{u.stop(),L&&Ao(L.effects,u)};if(i)if(e){const O=e;e=(...q)=>{O(...q),V()}}else{const O=d;d=()=>{O(),V()}}let k=R?new Array(t.length).fill(cs):cs;const N=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const q=u.run();if(s||b||(R?q.some((he,Y)=>nn(he,k[Y])):nn(q,k))){p&&p();const he=dn;dn=u;try{const Y=[q,k===cs?void 0:R&&k[0]===cs?[]:k,m];l?l(e,3,Y):e(...Y),k=q}finally{dn=he}}}else u.run()};return a&&a(N),u=new kc(d),u.scheduler=o?()=>o(N,!1):N,m=O=>Zd(O,!1,u),p=u.onStop=()=>{const O=Rs.get(u);if(O){if(l)l(O,4);else for(const q of O)q();Rs.delete(u)}},e?r?N(!0):k=u.run():o?o(N.bind(null,!0),!0):u.run(),V.pause=u.pause.bind(u),V.resume=u.resume.bind(u),V.stop=V,V}function Tt(t,e=1/0,n){if(e<=0||!ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,pe(t))Tt(t.value,e,n);else if($(t))for(let r=0;r<t.length;r++)Tt(t[r],e,n);else if(vc(t)||Ln(t))t.forEach(r=>{Tt(r,e,n)});else if(bc(t)){for(const r in t)Tt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Tt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hr(t,e,n,r){try{return r?t(...r):t()}catch(s){Zs(s,e,n)}}function vt(t,e,n,r){if(B(t)){const s=Hr(t,e,n,r);return s&&Ec(s)&&s.catch(i=>{Zs(i,e,n)}),s}if($(t)){const s=[];for(let i=0;i<t.length;i++)s.push(vt(t[i],e,n,r));return s}}function Zs(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||oe;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(i){sn(),Hr(i,null,10,[t,l,c]),on();return}}th(t,n,s,r,o)}function th(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let Pr=!1,Ki=!1;const De=[];let ft=0;const Un=[];let Wt=null,kn=0;const Gc=Promise.resolve();let $o=null;function jo(t){const e=$o||Gc;return t?e.then(this?t.bind(this):t):e}function nh(t){let e=Pr?ft+1:0,n=De.length;for(;e<n;){const r=e+n>>>1,s=De[r],i=Cr(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Bo(t){if(!(t.flags&1)){const e=Cr(t),n=De[De.length-1];!n||!(t.flags&2)&&e>=Cr(n)?De.push(t):De.splice(nh(e),0,t),t.flags|=1,Jc()}}function Jc(){!Pr&&!Ki&&(Ki=!0,$o=Gc.then(Qc))}function rh(t){$(t)?Un.push(...t):Wt&&t.id===-1?Wt.splice(kn+1,0,t):t.flags&1||(Un.push(t),t.flags|=1),Jc()}function Na(t,e,n=Pr?ft+1:0){for(;n<De.length;n++){const r=De[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;De.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function Yc(t){if(Un.length){const e=[...new Set(Un)].sort((n,r)=>Cr(n)-Cr(r));if(Un.length=0,Wt){Wt.push(...e);return}for(Wt=e,kn=0;kn<Wt.length;kn++){const n=Wt[kn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Wt=null,kn=0}}const Cr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Qc(t){Ki=!1,Pr=!0;try{for(ft=0;ft<De.length;ft++){const e=De[ft];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Hr(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;ft<De.length;ft++){const e=De[ft];e&&(e.flags&=-2)}ft=0,De.length=0,Yc(),Pr=!1,$o=null,(De.length||Un.length)&&Qc()}}let $e=null,Xc=null;function Ps(t){const e=$e;return $e=t,Xc=t&&t.type.__scopeId||null,e}function gs(t,e=$e,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ba(-1);const i=Ps(e);let o;try{o=t(...s)}finally{Ps(i),r._d&&Ba(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Bn(t,e){if($e===null)return t;const n=si($e),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=oe]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&Tt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function un(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(sn(),vt(l,n,8,[t.el,a,t,e]),on())}}const sh=Symbol("_vte"),ih=t=>t.__isTeleport;function Ho(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ho(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Zc(t,e){return B(t)?Se({name:t.name},e,{setup:t}):t}function eu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Gi(t,e,n,r,s=!1){if($(t)){t.forEach((b,R)=>Gi(b,e&&($(e)?e[R]:e),n,r,s));return}if(hr(r)&&!s)return;const i=r.shapeFlag&4?si(r.component):r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===oe?a.refs={}:a.refs,d=a.setupState,p=Q(d),m=d===oe?()=>!1:b=>Z(p,b);if(c!=null&&c!==l&&(ye(c)?(u[c]=null,m(c)&&(d[c]=null)):pe(c)&&(c.value=null)),B(l))Hr(l,a,12,[o,u]);else{const b=ye(l),R=pe(l);if(b||R){const L=()=>{if(t.f){const V=b?m(l)?d[l]:u[l]:l.value;s?$(V)&&Ao(V,i):$(V)?V.includes(i)||V.push(i):b?(u[l]=[i],m(l)&&(d[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else b?(u[l]=o,m(l)&&(d[l]=o)):R&&(l.value=o,t.k&&(u[t.k]=o))};o?(L.id=-1,ze(L,n)):L()}}}const hr=t=>!!t.type.__asyncLoader,tu=t=>t.type.__isKeepAlive;function oh(t,e){nu(t,"a",e)}function ah(t,e){nu(t,"da",e)}function nu(t,e,n=Ie){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ei(e,r,n),n){let s=n.parent;for(;s&&s.parent;)tu(s.parent.vnode)&&lh(r,e,n,s),s=s.parent}}function lh(t,e,n,r){const s=ei(e,t,r,!0);su(()=>{Ao(r[e],s)},n)}function ei(t,e,n=Ie,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{sn();const a=qr(n),l=vt(e,n,t,o);return a(),on(),l});return r?s.unshift(i):s.push(i),i}}const Lt=t=>(e,n=Ie)=>{(!ri||t==="sp")&&ei(t,(...r)=>e(...r),n)},ch=Lt("bm"),ru=Lt("m"),uh=Lt("bu"),fh=Lt("u"),dh=Lt("bum"),su=Lt("um"),hh=Lt("sp"),ph=Lt("rtg"),mh=Lt("rtc");function gh(t,e=Ie){ei("ec",t,e)}const iu="components";function Da(t,e){return yh(iu,t,!0,e)||t}const _h=Symbol.for("v-ndc");function yh(t,e,n=!0,r=!1){const s=$e||Ie;if(s){const i=s.type;if(t===iu){const a=op(i,!1);if(a&&(a===e||a===st(e)||a===Ys(st(e))))return i}const o=Va(s[t]||i[t],e)||Va(s.appContext[t],e);return!o&&r?i:o}}function Va(t,e){return t&&(t[e]||t[st(e)]||t[Ys(st(e))])}function vh(t,e,n,r){let s;const i=n,o=$(t);if(o||ye(t)){const a=o&&Xt(t);let l=!1;a&&(l=!et(t),t=Qs(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?Pe(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(ue(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,i)}}else s=[];return s}const Ji=t=>t?Su(t)?si(t):Ji(t.parent):null,pr=Se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ji(t.parent),$root:t=>Ji(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qo(t),$forceUpdate:t=>t.f||(t.f=()=>{Bo(t.update)}),$nextTick:t=>t.n||(t.n=jo.bind(t.proxy)),$watch:t=>jh.bind(t)}),Ti=(t,e)=>t!==oe&&!t.__isScriptSetup&&Z(t,e),Eh={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ti(r,e))return o[e]=1,r[e];if(s!==oe&&Z(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Z(c,e))return o[e]=3,i[e];if(n!==oe&&Z(n,e))return o[e]=4,n[e];Yi&&(o[e]=0)}}const u=pr[e];let d,p;if(u)return e==="$attrs"&&Ce(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==oe&&Z(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Z(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ti(s,e)?(s[e]=n,!0):r!==oe&&Z(r,e)?(r[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==oe&&Z(t,o)||Ti(e,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(pr,o)||Z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xa(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Yi=!0;function wh(t){const e=qo(t),n=t.proxy,r=t.ctx;Yi=!1,e.beforeCreate&&Ma(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:b,activated:R,deactivated:L,beforeDestroy:V,beforeUnmount:k,destroyed:N,unmounted:O,render:q,renderTracked:he,renderTriggered:Y,errorCaptured:K,serverPrefetch:z,expose:le,inheritAttrs:Oe,components:Be,directives:Me,filters:cn}=e;if(c&&bh(c,r,null),o)for(const W in o){const X=o[W];B(X)&&(r[W]=X.bind(n))}if(s){const W=s.call(n,n);ue(W)&&(t.data=Br(W))}if(Yi=!0,i)for(const W in i){const X=i[W],Et=B(X)?X.bind(n,n):B(X.get)?X.get.bind(n,n):gt,$t=!B(X)&&B(X.set)?X.set.bind(n):gt,lt=Ze({get:Et,set:$t});Object.defineProperty(r,W,{enumerable:!0,configurable:!0,get:()=>lt.value,set:Le=>lt.value=Le})}if(a)for(const W in a)ou(a[W],r,n,W);if(l){const W=B(l)?l.call(n):l;Reflect.ownKeys(W).forEach(X=>{_s(X,W[X])})}u&&Ma(u,t,"c");function ce(W,X){$(X)?X.forEach(Et=>W(Et.bind(n))):X&&W(X.bind(n))}if(ce(ch,d),ce(ru,p),ce(uh,m),ce(fh,b),ce(oh,R),ce(ah,L),ce(gh,K),ce(mh,he),ce(ph,Y),ce(dh,k),ce(su,O),ce(hh,z),$(le))if(le.length){const W=t.exposed||(t.exposed={});le.forEach(X=>{Object.defineProperty(W,X,{get:()=>n[X],set:Et=>n[X]=Et})})}else t.exposed||(t.exposed={});q&&t.render===gt&&(t.render=q),Oe!=null&&(t.inheritAttrs=Oe),Be&&(t.components=Be),Me&&(t.directives=Me),z&&eu(t)}function bh(t,e,n=gt){$(t)&&(t=Qi(t));for(const r in t){const s=t[r];let i;ue(s)?"default"in s?i=tt(s.from||r,s.default,!0):i=tt(s.from||r):i=tt(s),pe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ma(t,e,n){vt($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ou(t,e,n,r){let s=r.includes(".")?Eu(n,r):()=>n[r];if(ye(t)){const i=e[t];B(i)&&mr(s,i)}else if(B(t))mr(s,t.bind(n));else if(ue(t))if($(t))t.forEach(i=>ou(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&mr(s,i,t)}}function qo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Cs(l,c,o,!0)),Cs(l,e,o)),ue(e)&&i.set(e,l),l}function Cs(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Cs(t,i,n,!0),s&&s.forEach(o=>Cs(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Ih[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ih={data:La,props:Ua,emits:Ua,methods:lr,computed:lr,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:lr,directives:lr,watch:Sh,provide:La,inject:Th};function La(t,e){return e?t?function(){return Se(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Th(t,e){return lr(Qi(t),Qi(e))}function Qi(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ke(t,e){return t?[...new Set([].concat(t,e))]:e}function lr(t,e){return t?Se(Object.create(null),t,e):e}function Ua(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:Se(Object.create(null),xa(t),xa(e??{})):e}function Sh(t,e){if(!t)return e;if(!e)return t;const n=Se(Object.create(null),t);for(const r in e)n[r]=ke(t[r],e[r]);return n}function au(){return{app:null,config:{isNativeTag:dd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ah=0;function Rh(t,e){return function(r,s=null){B(r)||(r=Se({},r)),s!=null&&!ue(s)&&(s=null);const i=au(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:Ah++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:lp,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&B(u.install)?(o.add(u),u.install(c,...d)):B(u)&&(o.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,p){if(!l){const m=c._ceVNode||je(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(m,u):t(m,u,p),l=!0,c._container=u,u.__vue_app__=c,si(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(vt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){const d=mn;mn=c;try{return u()}finally{mn=d}}};return c}}let mn=null;function _s(t,e){if(Ie){let n=Ie.provides;const r=Ie.parent&&Ie.parent.provides;r===n&&(n=Ie.provides=Object.create(r)),n[t]=e}}function tt(t,e,n=!1){const r=Ie||$e;if(r||mn){const s=mn?mn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}function Ph(){return!!(Ie||$e||mn)}const lu={},cu=()=>Object.create(lu),uu=t=>Object.getPrototypeOf(t)===lu;function Ch(t,e,n,r=!1){const s={},i=cu();t.propsDefaults=Object.create(null),fu(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:qc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Oh(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Q(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(ti(t.emitsOptions,p))continue;const m=e[p];if(l)if(Z(i,p))m!==i[p]&&(i[p]=m,c=!0);else{const b=st(p);s[b]=Xi(l,a,b,m,t,!1)}else m!==i[p]&&(i[p]=m,c=!0)}}}else{fu(t,e,s,i)&&(c=!0);let u;for(const d in a)(!e||!Z(e,d)&&((u=Sn(d))===d||!Z(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Xi(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Z(e,d))&&(delete i[d],c=!0)}c&&Ot(t.attrs,"set","")}function fu(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(fr(l))continue;const c=e[l];let u;s&&Z(s,u=st(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:ti(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Q(n),c=a||oe;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Xi(s,l,d,c[d],t,!Z(c,d))}}return o}function Xi(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&B(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=qr(s);r=c[n]=l.call(null,e),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Sn(n))&&(r=!0))}return r}const kh=new WeakMap;function du(t,e,n=!1){const r=n?kh:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!B(t)){const u=d=>{l=!0;const[p,m]=du(d,e,!0);Se(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ue(t)&&r.set(t,Mn),Mn;if($(i))for(let u=0;u<i.length;u++){const d=st(i[u]);Fa(d)&&(o[d]=oe)}else if(i)for(const u in i){const d=st(u);if(Fa(d)){const p=i[u],m=o[d]=$(p)||B(p)?{type:p}:Se({},p),b=m.type;let R=!1,L=!0;if($(b))for(let V=0;V<b.length;++V){const k=b[V],N=B(k)&&k.name;if(N==="Boolean"){R=!0;break}else N==="String"&&(L=!1)}else R=B(b)&&b.name==="Boolean";m[0]=R,m[1]=L,(R||Z(m,"default"))&&a.push(d)}}const c=[o,a];return ue(t)&&r.set(t,c),c}function Fa(t){return t[0]!=="$"&&!fr(t)}const hu=t=>t[0]==="_"||t==="$stable",Wo=t=>$(t)?t.map(ht):[ht(t)],Nh=(t,e,n)=>{if(e._n)return e;const r=gs((...s)=>Wo(e(...s)),n);return r._c=!1,r},pu=(t,e,n)=>{const r=t._ctx;for(const s in t){if(hu(s))continue;const i=t[s];if(B(i))e[s]=Nh(s,i,r);else if(i!=null){const o=Wo(i);e[s]=()=>o}}},mu=(t,e)=>{const n=Wo(e);t.slots.default=()=>n},gu=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Dh=(t,e,n)=>{const r=t.slots=cu();if(t.vnode.shapeFlag&32){const s=e._;s?(gu(r,e,n),n&&Ic(r,"_",s,!0)):pu(e,r)}else e&&mu(t,e)},Vh=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=oe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:gu(s,e,n):(i=!e.$stable,pu(e,s)),o=e}else e&&(mu(t,e),o={default:1});if(i)for(const a in s)!hu(a)&&o[a]==null&&delete s[a]},ze=Gh;function xh(t){return Mh(t)}function Mh(t,e){const n=Tc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=gt,insertStaticContent:b}=t,R=(f,h,g,v=null,_=null,E=null,S=void 0,T=null,I=!!h.dynamicChildren)=>{if(f===h)return;f&&!sr(f,h)&&(v=y(f),Le(f,_,E,!0),f=null),h.patchFlag===-2&&(I=!1,h.dynamicChildren=null);const{type:w,ref:U,shapeFlag:P}=h;switch(w){case ni:L(f,h,g,v);break;case yn:V(f,h,g,v);break;case Ri:f==null&&k(h,g,v,S);break;case dt:Be(f,h,g,v,_,E,S,T,I);break;default:P&1?q(f,h,g,v,_,E,S,T,I):P&6?Me(f,h,g,v,_,E,S,T,I):(P&64||P&128)&&w.process(f,h,g,v,_,E,S,T,I,D)}U!=null&&_&&Gi(U,f&&f.ref,E,h||f,!h)},L=(f,h,g,v)=>{if(f==null)r(h.el=a(h.children),g,v);else{const _=h.el=f.el;h.children!==f.children&&c(_,h.children)}},V=(f,h,g,v)=>{f==null?r(h.el=l(h.children||""),g,v):h.el=f.el},k=(f,h,g,v)=>{[f.el,f.anchor]=b(f.children,h,g,v,f.el,f.anchor)},N=({el:f,anchor:h},g,v)=>{let _;for(;f&&f!==h;)_=p(f),r(f,g,v),f=_;r(h,g,v)},O=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),s(f),f=g;s(h)},q=(f,h,g,v,_,E,S,T,I)=>{h.type==="svg"?S="svg":h.type==="math"&&(S="mathml"),f==null?he(h,g,v,_,E,S,T,I):z(f,h,_,E,S,T,I)},he=(f,h,g,v,_,E,S,T)=>{let I,w;const{props:U,shapeFlag:P,transition:x,dirs:j}=f;if(I=f.el=o(f.type,E,U&&U.is,U),P&8?u(I,f.children):P&16&&K(f.children,I,null,v,_,Si(f,E),S,T),j&&un(f,null,v,"created"),Y(I,f,f.scopeId,S,v),U){for(const ae in U)ae!=="value"&&!fr(ae)&&i(I,ae,null,U[ae],E,v);"value"in U&&i(I,"value",null,U.value,E),(w=U.onVnodeBeforeMount)&&ut(w,v,f)}j&&un(f,null,v,"beforeMount");const G=Lh(_,x);G&&x.beforeEnter(I),r(I,h,g),((w=U&&U.onVnodeMounted)||G||j)&&ze(()=>{w&&ut(w,v,f),G&&x.enter(I),j&&un(f,null,v,"mounted")},_)},Y=(f,h,g,v,_)=>{if(g&&m(f,g),v)for(let E=0;E<v.length;E++)m(f,v[E]);if(_){let E=_.subTree;if(h===E||bu(E.type)&&(E.ssContent===h||E.ssFallback===h)){const S=_.vnode;Y(f,S,S.scopeId,S.slotScopeIds,_.parent)}}},K=(f,h,g,v,_,E,S,T,I=0)=>{for(let w=I;w<f.length;w++){const U=f[w]=T?zt(f[w]):ht(f[w]);R(null,U,h,g,v,_,E,S,T)}},z=(f,h,g,v,_,E,S)=>{const T=h.el=f.el;let{patchFlag:I,dynamicChildren:w,dirs:U}=h;I|=f.patchFlag&16;const P=f.props||oe,x=h.props||oe;let j;if(g&&fn(g,!1),(j=x.onVnodeBeforeUpdate)&&ut(j,g,h,f),U&&un(h,f,g,"beforeUpdate"),g&&fn(g,!0),(P.innerHTML&&x.innerHTML==null||P.textContent&&x.textContent==null)&&u(T,""),w?le(f.dynamicChildren,w,T,g,v,Si(h,_),E):S||X(f,h,T,null,g,v,Si(h,_),E,!1),I>0){if(I&16)Oe(T,P,x,g,_);else if(I&2&&P.class!==x.class&&i(T,"class",null,x.class,_),I&4&&i(T,"style",P.style,x.style,_),I&8){const G=h.dynamicProps;for(let ae=0;ae<G.length;ae++){const ne=G[ae],He=P[ne],Ae=x[ne];(Ae!==He||ne==="value")&&i(T,ne,He,Ae,_,g)}}I&1&&f.children!==h.children&&u(T,h.children)}else!S&&w==null&&Oe(T,P,x,g,_);((j=x.onVnodeUpdated)||U)&&ze(()=>{j&&ut(j,g,h,f),U&&un(h,f,g,"updated")},v)},le=(f,h,g,v,_,E,S)=>{for(let T=0;T<h.length;T++){const I=f[T],w=h[T],U=I.el&&(I.type===dt||!sr(I,w)||I.shapeFlag&70)?d(I.el):g;R(I,w,U,null,v,_,E,S,!0)}},Oe=(f,h,g,v,_)=>{if(h!==g){if(h!==oe)for(const E in h)!fr(E)&&!(E in g)&&i(f,E,h[E],null,_,v);for(const E in g){if(fr(E))continue;const S=g[E],T=h[E];S!==T&&E!=="value"&&i(f,E,T,S,_,v)}"value"in g&&i(f,"value",h.value,g.value,_)}},Be=(f,h,g,v,_,E,S,T,I)=>{const w=h.el=f?f.el:a(""),U=h.anchor=f?f.anchor:a("");let{patchFlag:P,dynamicChildren:x,slotScopeIds:j}=h;j&&(T=T?T.concat(j):j),f==null?(r(w,g,v),r(U,g,v),K(h.children||[],g,U,_,E,S,T,I)):P>0&&P&64&&x&&f.dynamicChildren?(le(f.dynamicChildren,x,g,_,E,S,T),(h.key!=null||_&&h===_.subTree)&&_u(f,h,!0)):X(f,h,g,U,_,E,S,T,I)},Me=(f,h,g,v,_,E,S,T,I)=>{h.slotScopeIds=T,f==null?h.shapeFlag&512?_.ctx.activate(h,g,v,S,I):cn(h,g,v,_,E,S,I):Ft(f,h,I)},cn=(f,h,g,v,_,E,S)=>{const T=f.component=tp(f,v,_);if(tu(f)&&(T.ctx.renderer=D),np(T,!1,S),T.asyncDep){if(_&&_.registerDep(T,ce,S),!f.el){const I=T.subTree=je(yn);V(null,I,h,g)}}else ce(T,f,h,g,_,E,S)},Ft=(f,h,g)=>{const v=h.component=f.component;if(zh(f,h,g))if(v.asyncDep&&!v.asyncResolved){W(v,h,g);return}else v.next=h,v.update();else h.el=f.el,v.vnode=h},ce=(f,h,g,v,_,E,S)=>{const T=()=>{if(f.isMounted){let{next:P,bu:x,u:j,parent:G,vnode:ae}=f;{const qe=yu(f);if(qe){P&&(P.el=ae.el,W(f,P,S)),qe.asyncDep.then(()=>{f.isUnmounted||T()});return}}let ne=P,He;fn(f,!1),P?(P.el=ae.el,W(f,P,S)):P=ae,x&&ms(x),(He=P.props&&P.props.onVnodeBeforeUpdate)&&ut(He,G,P,ae),fn(f,!0);const Ae=Ai(f),nt=f.subTree;f.subTree=Ae,R(nt,Ae,d(nt.el),y(nt),f,_,E),P.el=Ae.el,ne===null&&Kh(f,Ae.el),j&&ze(j,_),(He=P.props&&P.props.onVnodeUpdated)&&ze(()=>ut(He,G,P,ae),_)}else{let P;const{el:x,props:j}=h,{bm:G,m:ae,parent:ne,root:He,type:Ae}=f,nt=hr(h);if(fn(f,!1),G&&ms(G),!nt&&(P=j&&j.onVnodeBeforeMount)&&ut(P,ne,h),fn(f,!0),x&&fe){const qe=()=>{f.subTree=Ai(f),fe(x,f.subTree,f,_,null)};nt&&Ae.__asyncHydrate?Ae.__asyncHydrate(x,f,qe):qe()}else{He.ce&&He.ce._injectChildStyle(Ae);const qe=f.subTree=Ai(f);R(null,qe,g,v,f,_,E),h.el=qe.el}if(ae&&ze(ae,_),!nt&&(P=j&&j.onVnodeMounted)){const qe=h;ze(()=>ut(P,ne,qe),_)}(h.shapeFlag&256||ne&&hr(ne.vnode)&&ne.vnode.shapeFlag&256)&&f.a&&ze(f.a,_),f.isMounted=!0,h=g=v=null}};f.scope.on();const I=f.effect=new kc(T);f.scope.off();const w=f.update=I.run.bind(I),U=f.job=I.runIfDirty.bind(I);U.i=f,U.id=f.uid,I.scheduler=()=>Bo(U),fn(f,!0),w()},W=(f,h,g)=>{h.component=f;const v=f.vnode.props;f.vnode=h,f.next=null,Oh(f,h.props,v,g),Vh(f,h.children,g),sn(),Na(f),on()},X=(f,h,g,v,_,E,S,T,I=!1)=>{const w=f&&f.children,U=f?f.shapeFlag:0,P=h.children,{patchFlag:x,shapeFlag:j}=h;if(x>0){if(x&128){$t(w,P,g,v,_,E,S,T,I);return}else if(x&256){Et(w,P,g,v,_,E,S,T,I);return}}j&8?(U&16&&Qe(w,_,E),P!==w&&u(g,P)):U&16?j&16?$t(w,P,g,v,_,E,S,T,I):Qe(w,_,E,!0):(U&8&&u(g,""),j&16&&K(P,g,v,_,E,S,T,I))},Et=(f,h,g,v,_,E,S,T,I)=>{f=f||Mn,h=h||Mn;const w=f.length,U=h.length,P=Math.min(w,U);let x;for(x=0;x<P;x++){const j=h[x]=I?zt(h[x]):ht(h[x]);R(f[x],j,g,null,_,E,S,T,I)}w>U?Qe(f,_,E,!0,!1,P):K(h,g,v,_,E,S,T,I,P)},$t=(f,h,g,v,_,E,S,T,I)=>{let w=0;const U=h.length;let P=f.length-1,x=U-1;for(;w<=P&&w<=x;){const j=f[w],G=h[w]=I?zt(h[w]):ht(h[w]);if(sr(j,G))R(j,G,g,null,_,E,S,T,I);else break;w++}for(;w<=P&&w<=x;){const j=f[P],G=h[x]=I?zt(h[x]):ht(h[x]);if(sr(j,G))R(j,G,g,null,_,E,S,T,I);else break;P--,x--}if(w>P){if(w<=x){const j=x+1,G=j<U?h[j].el:v;for(;w<=x;)R(null,h[w]=I?zt(h[w]):ht(h[w]),g,G,_,E,S,T,I),w++}}else if(w>x)for(;w<=P;)Le(f[w],_,E,!0),w++;else{const j=w,G=w,ae=new Map;for(w=G;w<=x;w++){const We=h[w]=I?zt(h[w]):ht(h[w]);We.key!=null&&ae.set(We.key,w)}let ne,He=0;const Ae=x-G+1;let nt=!1,qe=0;const nr=new Array(Ae);for(w=0;w<Ae;w++)nr[w]=0;for(w=j;w<=P;w++){const We=f[w];if(He>=Ae){Le(We,_,E,!0);continue}let ct;if(We.key!=null)ct=ae.get(We.key);else for(ne=G;ne<=x;ne++)if(nr[ne-G]===0&&sr(We,h[ne])){ct=ne;break}ct===void 0?Le(We,_,E,!0):(nr[ct-G]=w+1,ct>=qe?qe=ct:nt=!0,R(We,h[ct],g,null,_,E,S,T,I),He++)}const Ia=nt?Uh(nr):Mn;for(ne=Ia.length-1,w=Ae-1;w>=0;w--){const We=G+w,ct=h[We],Ta=We+1<U?h[We+1].el:v;nr[w]===0?R(null,ct,g,Ta,_,E,S,T,I):nt&&(ne<0||w!==Ia[ne]?lt(ct,g,Ta,2):ne--)}}},lt=(f,h,g,v,_=null)=>{const{el:E,type:S,transition:T,children:I,shapeFlag:w}=f;if(w&6){lt(f.component.subTree,h,g,v);return}if(w&128){f.suspense.move(h,g,v);return}if(w&64){S.move(f,h,g,D);return}if(S===dt){r(E,h,g);for(let P=0;P<I.length;P++)lt(I[P],h,g,v);r(f.anchor,h,g);return}if(S===Ri){N(f,h,g);return}if(v!==2&&w&1&&T)if(v===0)T.beforeEnter(E),r(E,h,g),ze(()=>T.enter(E),_);else{const{leave:P,delayLeave:x,afterLeave:j}=T,G=()=>r(E,h,g),ae=()=>{P(E,()=>{G(),j&&j()})};x?x(E,G,ae):ae()}else r(E,h,g)},Le=(f,h,g,v=!1,_=!1)=>{const{type:E,props:S,ref:T,children:I,dynamicChildren:w,shapeFlag:U,patchFlag:P,dirs:x,cacheIndex:j}=f;if(P===-2&&(_=!1),T!=null&&Gi(T,null,g,f,!0),j!=null&&(h.renderCache[j]=void 0),U&256){h.ctx.deactivate(f);return}const G=U&1&&x,ae=!hr(f);let ne;if(ae&&(ne=S&&S.onVnodeBeforeUnmount)&&ut(ne,h,f),U&6)rs(f.component,g,v);else{if(U&128){f.suspense.unmount(g,v);return}G&&un(f,null,h,"beforeUnmount"),U&64?f.type.remove(f,h,g,D,v):w&&!w.hasOnce&&(E!==dt||P>0&&P&64)?Qe(w,h,g,!1,!0):(E===dt&&P&384||!_&&U&16)&&Qe(I,h,g),v&&Rn(f)}(ae&&(ne=S&&S.onVnodeUnmounted)||G)&&ze(()=>{ne&&ut(ne,h,f),G&&un(f,null,h,"unmounted")},g)},Rn=f=>{const{type:h,el:g,anchor:v,transition:_}=f;if(h===dt){Pn(g,v);return}if(h===Ri){O(f);return}const E=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:T}=_,I=()=>S(g,E);T?T(f.el,E,I):I()}else E()},Pn=(f,h)=>{let g;for(;f!==h;)g=p(f),s(f),f=g;s(h)},rs=(f,h,g)=>{const{bum:v,scope:_,job:E,subTree:S,um:T,m:I,a:w}=f;$a(I),$a(w),v&&ms(v),_.stop(),E&&(E.flags|=8,Le(S,f,h,g)),T&&ze(T,h),ze(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Qe=(f,h,g,v=!1,_=!1,E=0)=>{for(let S=E;S<f.length;S++)Le(f[S],h,g,v,_)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),g=h&&h[sh];return g?p(g):h};let C=!1;const A=(f,h,g)=>{f==null?h._vnode&&Le(h._vnode,null,null,!0):R(h._vnode||null,f,h,null,null,null,g),h._vnode=f,C||(C=!0,Na(),Yc(),C=!1)},D={p:R,um:Le,m:lt,r:Rn,mt:cn,mc:K,pc:X,pbc:le,n:y,o:t};let te,fe;return{render:A,hydrate:te,createApp:Rh(A,te)}}function Si({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function fn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Lh(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function _u(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=zt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&_u(o,a)),a.type===ni&&(a.el=o.el)}}function Uh(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function yu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yu(e)}function $a(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Fh=Symbol.for("v-scx"),$h=()=>tt(Fh);function mr(t,e,n){return vu(t,e,n)}function vu(t,e,n=oe){const{immediate:r,deep:s,flush:i,once:o}=n,a=Se({},n);let l;if(ri)if(i==="sync"){const p=$h();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!e||r)a.once=!0;else return{stop:gt,resume:gt,pause:gt};const c=Ie;a.call=(p,m,b)=>vt(p,c,m,b);let u=!1;i==="post"?a.scheduler=p=>{ze(p,c&&c.suspense)}:i!=="sync"&&(u=!0,a.scheduler=(p,m)=>{m?p():Bo(p)}),a.augmentJob=p=>{e&&(p.flags|=4),u&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const d=eh(t,e,a);return l&&l.push(d),d}function jh(t,e,n){const r=this.proxy,s=ye(t)?t.includes(".")?Eu(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=qr(this),a=vu(s,i.bind(r),n);return o(),a}function Eu(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Bh=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${st(e)}Modifiers`]||t[`${Sn(e)}Modifiers`];function Hh(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||oe;let s=n;const i=e.startsWith("update:"),o=i&&Bh(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>ye(u)?u.trim():u)),o.number&&(s=n.map(qi)));let a,l=r[a=vi(e)]||r[a=vi(st(e))];!l&&i&&(l=r[a=vi(Sn(e))]),l&&vt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,vt(c,t,6,s)}}function wu(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const l=c=>{const u=wu(c,e,!0);u&&(a=!0,Se(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ue(t)&&r.set(t,null),null):($(i)?i.forEach(l=>o[l]=null):Se(o,i),ue(t)&&r.set(t,o),o)}function ti(t,e){return!t||!Ks(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,Sn(e))||Z(t,e))}function Ai(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:p,setupState:m,ctx:b,inheritAttrs:R}=t,L=Ps(t);let V,k;try{if(n.shapeFlag&4){const O=s||r,q=O;V=ht(c.call(q,O,u,d,m,p,b)),k=a}else{const O=e;V=ht(O.length>1?O(d,{attrs:a,slots:o,emit:l}):O(d,null)),k=e.props?a:qh(a)}}catch(O){gr.length=0,Zs(O,t,1),V=je(yn)}let N=V;if(k&&R!==!1){const O=Object.keys(k),{shapeFlag:q}=N;O.length&&q&7&&(i&&O.some(So)&&(k=Wh(k,i)),N=Hn(N,k,!1,!0))}return n.dirs&&(N=Hn(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&Ho(N,n.transition),V=N,Ps(L),V}const qh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ks(n))&&((e||(e={}))[n]=t[n]);return e},Wh=(t,e)=>{const n={};for(const r in t)(!So(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zh(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ja(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!ti(c,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ja(r,o,c):!0:!!o;return!1}function ja(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ti(n,i))return!0}return!1}function Kh({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const bu=t=>t.__isSuspense;function Gh(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):rh(t)}const dt=Symbol.for("v-fgt"),ni=Symbol.for("v-txt"),yn=Symbol.for("v-cmt"),Ri=Symbol.for("v-stc"),gr=[];let Ge=null;function Re(t=!1){gr.push(Ge=t?null:[])}function Jh(){gr.pop(),Ge=gr[gr.length-1]||null}let Or=1;function Ba(t){Or+=t,t<0&&Ge&&(Ge.hasOnce=!0)}function Iu(t){return t.dynamicChildren=Or>0?Ge||Mn:null,Jh(),Or>0&&Ge&&Ge.push(t),t}function Xe(t,e,n,r,s,i){return Iu(ie(t,e,n,r,s,i,!0))}function ys(t,e,n,r,s){return Iu(je(t,e,n,r,s,!0))}function Zi(t){return t?t.__v_isVNode===!0:!1}function sr(t,e){return t.type===e.type&&t.key===e.key}const Tu=({key:t})=>t??null,vs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ye(t)||pe(t)||B(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function ie(t,e=null,n=null,r=0,s=null,i=t===dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tu(e),ref:e&&vs(e),scopeId:Xc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$e};return a?(zo(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ye(n)?8:16),Or>0&&!o&&Ge&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ge.push(l),l}const je=Yh;function Yh(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===_h)&&(t=yn),Zi(t)){const a=Hn(t,e,!0);return n&&zo(a,n),Or>0&&!i&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag=-2,a}if(ap(t)&&(t=t.__vccOpts),e){e=Qh(e);let{class:a,style:l}=e;a&&!ye(a)&&(e.class=Co(a)),ue(l)&&(Lo(l)&&!$(l)&&(l=Se({},l)),e.style=Po(l))}const o=ye(t)?1:bu(t)?128:ih(t)?64:ue(t)?4:B(t)?2:0;return ie(t,e,n,r,s,o,i,!0)}function Qh(t){return t?Lo(t)||uu(t)?Se({},t):t:null}function Hn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?Xh(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Tu(c),ref:e&&e.ref?n&&i?$(i)?i.concat(vs(e)):[i,vs(e)]:vs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hn(t.ssContent),ssFallback:t.ssFallback&&Hn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ho(u,l.clone(u)),u}function St(t=" ",e=0){return je(ni,null,t,e)}function us(t="",e=!1){return e?(Re(),ys(yn,null,t)):je(yn,null,t)}function ht(t){return t==null||typeof t=="boolean"?je(yn):$(t)?je(dt,null,t.slice()):typeof t=="object"?zt(t):je(ni,null,String(t))}function zt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hn(t)}function zo(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zo(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!uu(e)?e._ctx=$e:s===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),r&64?(n=16,e=[St(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xh(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Co([e.class,r.class]));else if(s==="style")e.style=Po([e.style,r.style]);else if(Ks(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ut(t,e,n,r=null){vt(t,e,7,[n,r])}const Zh=au();let ep=0;function tp(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Zh,i={uid:ep++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:du(r,s),emitsOptions:wu(r,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Hh.bind(null,i),t.ce&&t.ce(i),i}let Ie=null,Os,eo;{const t=Tc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Os=e("__VUE_INSTANCE_SETTERS__",n=>Ie=n),eo=e("__VUE_SSR_SETTERS__",n=>ri=n)}const qr=t=>{const e=Ie;return Os(t),t.scope.on(),()=>{t.scope.off(),Os(e)}},Ha=()=>{Ie&&Ie.scope.off(),Os(null)};function Su(t){return t.vnode.shapeFlag&4}let ri=!1;function np(t,e=!1,n=!1){e&&eo(e);const{props:r,children:s}=t.vnode,i=Su(t);Ch(t,r,i,e),Dh(t,s,n);const o=i?rp(t,e):void 0;return e&&eo(!1),o}function rp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Eh);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ip(t):null,i=qr(t);sn();const o=Hr(r,t,0,[t.props,s]);if(on(),i(),Ec(o)){if(hr(t)||eu(t),o.then(Ha,Ha),e)return o.then(a=>{qa(t,a,e)}).catch(a=>{Zs(a,t,0)});t.asyncDep=o}else qa(t,o,e)}else Au(t,e)}function qa(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=Kc(e)),Au(t,n)}let Wa;function Au(t,e,n){const r=t.type;if(!t.render){if(!e&&Wa&&!r.render){const s=r.template||qo(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Se(Se({isCustomElement:i,delimiters:a},o),l);r.render=Wa(s,c)}}t.render=r.render||gt}{const s=qr(t);sn();try{wh(t)}finally{on(),s()}}}const sp={get(t,e){return Ce(t,"get",""),t[e]}};function ip(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sp),slots:t.slots,emit:t.emit,expose:e}}function si(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Kc(Uo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pr)return pr[n](t)},has(e,n){return n in e||n in pr}})):t.proxy}function op(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function ap(t){return B(t)&&"__vccOpts"in t}const Ze=(t,e)=>Xd(t,e,ri);function Ru(t,e,n){const r=arguments.length;return r===2?ue(e)&&!$(e)?Zi(e)?je(t,null,[e]):je(t,e):je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zi(n)&&(n=[n]),je(t,e,n))}const lp="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let to;const za=typeof window<"u"&&window.trustedTypes;if(za)try{to=za.createPolicy("vue",{createHTML:t=>t})}catch{}const Pu=to?t=>to.createHTML(t):t=>t,cp="http://www.w3.org/2000/svg",up="http://www.w3.org/1998/Math/MathML",It=typeof document<"u"?document:null,Ka=It&&It.createElement("template"),fp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?It.createElementNS(cp,t):e==="mathml"?It.createElementNS(up,t):n?It.createElement(t,{is:n}):It.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>It.createTextNode(t),createComment:t=>It.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>It.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ka.innerHTML=Pu(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Ka.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},dp=Symbol("_vtc");function hp(t,e,n){const r=t[dp];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ga=Symbol("_vod"),pp=Symbol("_vsh"),mp=Symbol(""),gp=/(^|;)\s*display\s*:/;function _p(t,e,n){const r=t.style,s=ye(n);let i=!1;if(n&&!s){if(e)if(ye(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Es(r,a,"")}else for(const o in e)n[o]==null&&Es(r,o,"");for(const o in n)o==="display"&&(i=!0),Es(r,o,n[o])}else if(s){if(e!==n){const o=r[mp];o&&(n+=";"+o),r.cssText=n,i=gp.test(n)}}else e&&t.removeAttribute("style");Ga in t&&(t[Ga]=i?r.display:"",t[pp]&&(r.display="none"))}const Ja=/\s*!important$/;function Es(t,e,n){if($(n))n.forEach(r=>Es(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=yp(t,e);Ja.test(n)?t.setProperty(Sn(r),n.replace(Ja,""),"important"):t[r]=n}}const Ya=["Webkit","Moz","ms"],Pi={};function yp(t,e){const n=Pi[e];if(n)return n;let r=st(e);if(r!=="filter"&&r in t)return Pi[e]=r;r=Ys(r);for(let s=0;s<Ya.length;s++){const i=Ya[s]+r;if(i in t)return Pi[e]=i}return e}const Qa="http://www.w3.org/1999/xlink";function Xa(t,e,n,r,s,i=bd(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Qa,e.slice(6,e.length)):t.setAttributeNS(Qa,e,n):n==null||i&&!Sc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":rn(n)?String(n):n)}function vp(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Pu(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Sc(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Nn(t,e,n,r){t.addEventListener(e,n,r)}function Ep(t,e,n,r){t.removeEventListener(e,n,r)}const Za=Symbol("_vei");function wp(t,e,n,r,s=null){const i=t[Za]||(t[Za]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=bp(e);if(r){const c=i[e]=Sp(r,s);Nn(t,a,c,l)}else o&&(Ep(t,a,o,l),i[e]=void 0)}}const el=/(?:Once|Passive|Capture)$/;function bp(t){let e;if(el.test(t)){e={};let r;for(;r=t.match(el);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Sn(t.slice(2)),e]}let Ci=0;const Ip=Promise.resolve(),Tp=()=>Ci||(Ip.then(()=>Ci=0),Ci=Date.now());function Sp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;vt(Ap(r,n.value),e,5,[r])};return n.value=t,n.attached=Tp(),n}function Ap(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const tl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Rp=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?hp(t,r,o):e==="style"?_p(t,n,r):Ks(e)?So(e)||wp(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pp(t,e,r,o))?(vp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xa(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Xa(t,e,r,o))};function Pp(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&tl(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return tl(e)&&ye(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!ye(n)))}const nl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>ms(e,n):e};function Cp(t){t.target.composing=!0}function rl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Oi=Symbol("_assign"),qn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Oi]=nl(s);const i=r||s.props&&s.props.type==="number";Nn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=qi(a)),t[Oi](a)}),n&&Nn(t,"change",()=>{t.value=t.value.trim()}),e||(Nn(t,"compositionstart",Cp),Nn(t,"compositionend",rl),Nn(t,"change",rl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Oi]=nl(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?qi(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Op=["ctrl","shift","alt","meta"],kp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Op.some(n=>t[`${n}Key`]&&!e.includes(n))},ii=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=kp[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Np=Se({patchProp:Rp},fp);let sl;function Dp(){return sl||(sl=xh(Np))}const Vp=(...t)=>{const e=Dp().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Mp(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,xp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function xp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Mp(t){return ye(t)?document.querySelector(t):t}var Lp=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Cu;const oi=t=>Cu=t,Ou=Symbol();function no(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var _r;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(_r||(_r={}));function Up(){const t=Cc(!0),e=t.run(()=>Dt({}));let n=[],r=[];const s=Uo({install(i){oi(s),s._a=i,i.provide(Ou,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Lp?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ku=()=>{};function il(t,e,n,r=ku){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Oc()&&Id(s),s}function On(t,...e){t.slice().forEach(n=>{n(...e)})}const Fp=t=>t(),ol=Symbol(),ki=Symbol();function ro(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];no(s)&&no(r)&&t.hasOwnProperty(n)&&!pe(r)&&!Xt(r)?t[n]=ro(s,r):t[n]=r}return t}const $p=Symbol();function jp(t){return!no(t)||!t.hasOwnProperty($p)}const{assign:qt}=Object;function Bp(t){return!!(pe(t)&&t.effect)}function Hp(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=Gd(n.state.value[t]);return qt(u,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Uo(Ze(()=>{oi(n);const m=n._s.get(t);return o[p].call(m,m)})),d),{}))}return l=Nu(t,c,e,n,r,!0),l}function Nu(t,e,n={},r,s,i){let o;const a=qt({actions:{}},n),l={deep:!0};let c,u,d=[],p=[],m;const b=r.state.value[t];!i&&!b&&(r.state.value[t]={}),Dt({});let R;function L(K){let z;c=u=!1,typeof K=="function"?(K(r.state.value[t]),z={type:_r.patchFunction,storeId:t,events:m}):(ro(r.state.value[t],K),z={type:_r.patchObject,payload:K,storeId:t,events:m});const le=R=Symbol();jo().then(()=>{R===le&&(c=!0)}),u=!0,On(d,z,r.state.value[t])}const V=i?function(){const{state:z}=n,le=z?z():{};this.$patch(Oe=>{qt(Oe,le)})}:ku;function k(){o.stop(),d=[],p=[],r._s.delete(t)}const N=(K,z="")=>{if(ol in K)return K[ki]=z,K;const le=function(){oi(r);const Oe=Array.from(arguments),Be=[],Me=[];function cn(W){Be.push(W)}function Ft(W){Me.push(W)}On(p,{args:Oe,name:le[ki],store:q,after:cn,onError:Ft});let ce;try{ce=K.apply(this&&this.$id===t?this:q,Oe)}catch(W){throw On(Me,W),W}return ce instanceof Promise?ce.then(W=>(On(Be,W),W)).catch(W=>(On(Me,W),Promise.reject(W))):(On(Be,ce),ce)};return le[ol]=!0,le[ki]=z,le},O={_p:r,$id:t,$onAction:il.bind(null,p),$patch:L,$reset:V,$subscribe(K,z={}){const le=il(d,K,z.detached,()=>Oe()),Oe=o.run(()=>mr(()=>r.state.value[t],Be=>{(z.flush==="sync"?u:c)&&K({storeId:t,type:_r.direct,events:m},Be)},qt({},l,z)));return le},$dispose:k},q=Br(O);r._s.set(t,q);const Y=(r._a&&r._a.runWithContext||Fp)(()=>r._e.run(()=>(o=Cc()).run(()=>e({action:N}))));for(const K in Y){const z=Y[K];if(pe(z)&&!Bp(z)||Xt(z))i||(b&&jp(z)&&(pe(z)?z.value=b[K]:ro(z,b[K])),r.state.value[t][K]=z);else if(typeof z=="function"){const le=N(z,K);Y[K]=le,a.actions[K]=z}}return qt(q,Y),qt(Q(q),Y),Object.defineProperty(q,"$state",{get:()=>r.state.value[t],set:K=>{L(z=>{qt(z,K)})}}),r._p.forEach(K=>{qt(q,o.run(()=>K({store:q,app:r._a,pinia:r,options:a})))}),b&&i&&n.hydrate&&n.hydrate(q.$state,b),c=!0,u=!0,q}function Du(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=Ph();return a=a||(c?tt(Ou,null):null),a&&oi(a),a=Cu,a._s.has(r)||(i?Nu(r,e,s,a):Hp(r,s,a)),a._s.get(r)}return o.$id=r,o}var al={};/**
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
 */const Vu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},xu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(p=64)),r.push(n[u],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||d==null)throw new Wp;const p=i<<2|a>>4;if(r.push(p),c!==64){const m=a<<4&240|c>>2;if(r.push(m),d!==64){const b=c<<6&192|d;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Wp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zp=function(t){const e=Vu(t);return xu.encodeByteArray(e,!0)},ks=function(t){return zp(t).replace(/\./g,"")},Mu=function(t){try{return xu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gp=()=>Kp().__FIREBASE_DEFAULTS__,Jp=()=>{if(typeof process>"u"||typeof al>"u")return;const t=al.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mu(t[1]);return e&&JSON.parse(e)},Ko=()=>{try{return Gp()||Jp()||Yp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lu=t=>{var e,n;return(n=(e=Ko())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qp=t=>{const e=Lu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Uu=()=>{var t;return(t=Ko())===null||t===void 0?void 0:t.config},Fu=t=>{var e;return(e=Ko())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Xp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Zp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ks(JSON.stringify(n)),ks(JSON.stringify(o)),""].join(".")}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function em(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function tm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rm(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sm(){try{return typeof indexedDB=="object"}catch{return!1}}function im(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const om="FirebaseError";class Ut extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=om,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr.prototype.create)}}class Wr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?am(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ut(s,a,r)}}function am(t,e){return t.replace(lm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lm=/\{\$([^}]+)}/g;function cm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ns(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ll(i)&&ll(o)){if(!Ns(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ll(t){return t!==null&&typeof t=="object"}/**
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
 */function zr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ur(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function um(t,e){const n=new fm(t,e);return n.subscribe.bind(n)}class fm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dm(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ni),s.error===void 0&&(s.error=Ni),s.complete===void 0&&(s.complete=Ni);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ni(){}/**
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
 */function Ee(t){return t&&t._delegate?t._delegate:t}class vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class hm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mm(e))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hn){return this.instances.has(e)}getOptions(e=hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hn){return this.component?this.component.multipleInstances?e:hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pm(t){return t===hn?void 0:t}function mm(t){return t.instantiationMode==="EAGER"}/**
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
 */class gm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const _m={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},ym=ee.INFO,vm={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Em=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vm[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Go{constructor(e){this.name=e,this._logLevel=ym,this._logHandler=Em,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_m[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const wm=(t,e)=>e.some(n=>t instanceof n);let cl,ul;function bm(){return cl||(cl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Im(){return ul||(ul=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $u=new WeakMap,so=new WeakMap,ju=new WeakMap,Di=new WeakMap,Jo=new WeakMap;function Tm(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Zt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$u.set(n,t)}).catch(()=>{}),Jo.set(e,t),e}function Sm(t){if(so.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});so.set(t,e)}let io={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return so.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ju.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Am(t){io=t(io)}function Rm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vi(this),e,...n);return ju.set(r,e.sort?e.sort():[e]),Zt(r)}:Im().includes(t)?function(...e){return t.apply(Vi(this),e),Zt($u.get(this))}:function(...e){return Zt(t.apply(Vi(this),e))}}function Pm(t){return typeof t=="function"?Rm(t):(t instanceof IDBTransaction&&Sm(t),wm(t,bm())?new Proxy(t,io):t)}function Zt(t){if(t instanceof IDBRequest)return Tm(t);if(Di.has(t))return Di.get(t);const e=Pm(t);return e!==t&&(Di.set(t,e),Jo.set(e,t)),e}const Vi=t=>Jo.get(t);function Cm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Zt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Zt(o.result),l.oldVersion,l.newVersion,Zt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Om=["get","getKey","getAll","getAllKeys","count"],km=["put","add","delete","clear"],xi=new Map;function fl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xi.get(e))return xi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=km.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Om.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return xi.set(e,i),i}Am(t=>({...t,get:(e,n,r)=>fl(e,n)||t.get(e,n,r),has:(e,n)=>!!fl(e,n)||t.has(e,n)}));/**
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
 */class Nm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Dm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oo="@firebase/app",dl="0.10.10";/**
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
 */const Vt=new Go("@firebase/app"),Vm="@firebase/app-compat",xm="@firebase/analytics-compat",Mm="@firebase/analytics",Lm="@firebase/app-check-compat",Um="@firebase/app-check",Fm="@firebase/auth",$m="@firebase/auth-compat",jm="@firebase/database",Bm="@firebase/database-compat",Hm="@firebase/functions",qm="@firebase/functions-compat",Wm="@firebase/installations",zm="@firebase/installations-compat",Km="@firebase/messaging",Gm="@firebase/messaging-compat",Jm="@firebase/performance",Ym="@firebase/performance-compat",Qm="@firebase/remote-config",Xm="@firebase/remote-config-compat",Zm="@firebase/storage",eg="@firebase/storage-compat",tg="@firebase/firestore",ng="@firebase/vertexai-preview",rg="@firebase/firestore-compat",sg="firebase",ig="10.13.1";/**
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
 */const ao="[DEFAULT]",og={[oo]:"fire-core",[Vm]:"fire-core-compat",[Mm]:"fire-analytics",[xm]:"fire-analytics-compat",[Um]:"fire-app-check",[Lm]:"fire-app-check-compat",[Fm]:"fire-auth",[$m]:"fire-auth-compat",[jm]:"fire-rtdb",[Bm]:"fire-rtdb-compat",[Hm]:"fire-fn",[qm]:"fire-fn-compat",[Wm]:"fire-iid",[zm]:"fire-iid-compat",[Km]:"fire-fcm",[Gm]:"fire-fcm-compat",[Jm]:"fire-perf",[Ym]:"fire-perf-compat",[Qm]:"fire-rc",[Xm]:"fire-rc-compat",[Zm]:"fire-gcs",[eg]:"fire-gcs-compat",[tg]:"fire-fst",[rg]:"fire-fst-compat",[ng]:"fire-vertex","fire-js":"fire-js",[sg]:"fire-js-all"};/**
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
 */const Ds=new Map,ag=new Map,lo=new Map;function hl(t,e){try{t.container.addComponent(e)}catch(n){Vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(lo.has(e))return Vt.debug(`There were multiple attempts to register component ${e}.`),!1;lo.set(e,t);for(const n of Ds.values())hl(n,t);for(const n of ag.values())hl(n,t);return!0}function Yo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t.settings!==void 0}/**
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
 */const lg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new Wr("app","Firebase",lg);/**
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
 */class cg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
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
 */const Qn=ig;function Bu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ao,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw en.create("bad-app-name",{appName:String(s)});if(n||(n=Uu()),!n)throw en.create("no-options");const i=Ds.get(s);if(i){if(Ns(n,i.options)&&Ns(r,i.config))return i;throw en.create("duplicate-app",{appName:s})}const o=new gm(s);for(const l of lo.values())o.addComponent(l);const a=new cg(n,r,o);return Ds.set(s,a),a}function Hu(t=ao){const e=Ds.get(t);if(!e&&t===ao&&Uu())return Bu();if(!e)throw en.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let s=(r=og[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vt.warn(a.join(" "));return}Wn(new vn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ug="firebase-heartbeat-database",fg=1,kr="firebase-heartbeat-store";let Mi=null;function qu(){return Mi||(Mi=Cm(ug,fg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(kr)}catch(n){console.warn(n)}}}}).catch(t=>{throw en.create("idb-open",{originalErrorMessage:t.message})})),Mi}async function dg(t){try{const n=(await qu()).transaction(kr),r=await n.objectStore(kr).get(Wu(t));return await n.done,r}catch(e){if(e instanceof Ut)Vt.warn(e.message);else{const n=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vt.warn(n.message)}}}async function pl(t,e){try{const r=(await qu()).transaction(kr,"readwrite");await r.objectStore(kr).put(e,Wu(t)),await r.done}catch(n){if(n instanceof Ut)Vt.warn(n.message);else{const r=en.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vt.warn(r.message)}}}function Wu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hg=1024,pg=30*24*60*60*1e3;class mg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _g(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ml();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=pg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Vt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ml(),{heartbeatsToSend:r,unsentEntries:s}=gg(this._heartbeatsCache.heartbeats),i=ks(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Vt.warn(n),""}}}function ml(){return new Date().toISOString().substring(0,10)}function gg(t,e=hg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gl(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gl(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _g{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sm()?im().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gl(t){return ks(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function yg(t){Wn(new vn("platform-logger",e=>new Nm(e),"PRIVATE")),Wn(new vn("heartbeat",e=>new mg(e),"PRIVATE")),tn(oo,dl,t),tn(oo,dl,"esm2017"),tn("fire-js","")}yg("");function Qo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function zu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vg=zu,Ku=new Wr("auth","Firebase",zu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new Go("@firebase/auth");function Eg(t,...e){Vs.logLevel<=ee.WARN&&Vs.warn(`Auth (${Qn}): ${t}`,...e)}function ws(t,...e){Vs.logLevel<=ee.ERROR&&Vs.error(`Auth (${Qn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,...e){throw Xo(t,...e)}function _t(t,...e){return Xo(t,...e)}function Gu(t,e,n){const r=Object.assign(Object.assign({},vg()),{[e]:n});return new Wr("auth","Firebase",r).create(e,{appName:t.name})}function kt(t){return Gu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ku.create(t,...e)}function F(t,e,...n){if(!t)throw Xo(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ws(e),new Error(e)}function xt(t,e){t||Rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wg(){return _l()==="http:"||_l()==="https:"}function _l(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wg()||tm()||"connection"in navigator)?navigator.onLine:!0}function Ig(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n){this.shortDelay=e,this.longDelay=n,xt(n>e,"Short delay should be less than long delay!"),this.isMobile=em()||nm()}get(){return bg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t,e){xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=new Kr(3e4,6e4);function an(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ln(t,e,n,r,s={}){return Yu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=zr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ju.fetch()(Qu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Yu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Tg),e);try{const s=new Rg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fs(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fs(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Gu(t,u,c);it(t,u)}}catch(s){if(s instanceof Ut)throw s;it(t,"network-request-failed",{message:String(s)})}}async function Gr(t,e,n,r,s={}){const i=await ln(t,e,n,r,s);return"mfaPendingCredential"in i&&it(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Qu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Zo(t.config,s):`${t.config.apiScheme}://${s}`}function Ag(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Rg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),Sg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=_t(t,e,r);return s.customData._tokenResponse=n,s}function yl(t){return t!==void 0&&t.enterprise!==void 0}class Pg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ag(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Cg(t,e){return ln(t,"GET","/v2/recaptchaConfig",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(t,e){return ln(t,"POST","/v1/accounts:delete",e)}async function Xu(t,e){return ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kg(t,e=!1){const n=Ee(t),r=await n.getIdToken(e),s=ea(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:yr(Li(s.auth_time)),issuedAtTime:yr(Li(s.iat)),expirationTime:yr(Li(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Li(t){return Number(t)*1e3}function ea(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ws("JWT malformed, contained fewer than 3 sections"),null;try{const s=Mu(n);return s?JSON.parse(s):(ws("Failed to decode base64 JWT payload"),null)}catch(s){return ws("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vl(t){const e=ea(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ut&&Ng(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ng({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yr(this.lastLoginAt),this.creationTime=yr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xs(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Nr(t,Xu(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zu(i.providerUserInfo):[],a=xg(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new uo(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Vg(t){const e=Ee(t);await xs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zu(t){return t.map(e=>{var{providerId:n}=e,r=Qo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(t,e){const n=await Yu(t,{},async()=>{const r=zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Qu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ju.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Lg(t,e){return ln(t,"POST","/v2/accounts:revokeToken",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){F(e.length!==0,"internal-error");const n=vl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Mg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Fn;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fn,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Qo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new uo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Nr(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kg(this,e)}reload(){return Vg(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(kt(this.auth));const e=await this.getIdToken();return await Nr(this,Og(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,V=(c=n.createdAt)!==null&&c!==void 0?c:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:O,isAnonymous:q,providerData:he,stsTokenManager:Y}=n;F(N&&Y,e,"internal-error");const K=Fn.fromJSON(this.name,Y);F(typeof N=="string",e,"internal-error"),Bt(d,e.name),Bt(p,e.name),F(typeof O=="boolean",e,"internal-error"),F(typeof q=="boolean",e,"internal-error"),Bt(m,e.name),Bt(b,e.name),Bt(R,e.name),Bt(L,e.name),Bt(V,e.name),Bt(k,e.name);const z=new Pt({uid:N,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:q,photoURL:b,phoneNumber:m,tenantId:R,stsTokenManager:K,createdAt:V,lastLoginAt:k});return he&&Array.isArray(he)&&(z.providerData=he.map(le=>Object.assign({},le))),L&&(z._redirectEventId=L),z}static async _fromIdTokenResponse(e,n,r=!1){const s=new Fn;s.updateFromServerResponse(n);const i=new Pt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xs(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];F(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Zu(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Fn;a.updateFromIdToken(r);const l=new Pt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new uo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new Map;function Ct(t){xt(t instanceof Function,"Expected a class definition");let e=El.get(t);return e?(xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,El.set(t,e),e)}/**
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
 */class ef{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ef.type="NONE";const wl=ef;/**
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
 */function bs(t,e,n){return`firebase:${t}:${e}:${n}`}class $n{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=bs(this.userKey,s.apiKey,i),this.fullPersistenceKey=bs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $n(Ct(wl),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Ct(wl);const o=bs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Pt._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new $n(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new $n(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(af(e))return"Blackberry";if(lf(e))return"Webos";if(nf(e))return"Safari";if((e.includes("chrome/")||rf(e))&&!e.includes("edge/"))return"Chrome";if(of(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tf(t=xe()){return/firefox\//i.test(t)}function nf(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rf(t=xe()){return/crios\//i.test(t)}function sf(t=xe()){return/iemobile/i.test(t)}function of(t=xe()){return/android/i.test(t)}function af(t=xe()){return/blackberry/i.test(t)}function lf(t=xe()){return/webos/i.test(t)}function ta(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ug(t=xe()){var e;return ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fg(){return rm()&&document.documentMode===10}function cf(t=xe()){return ta(t)||of(t)||lf(t)||af(t)||/windows phone/i.test(t)||sf(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e=[]){let n;switch(t){case"Browser":n=bl(xe());break;case"Worker":n=`${bl(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qn}/${r}`}/**
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
 */class $g{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function jg(t,e={}){return ln(t,"GET","/v2/passwordPolicy",an(t,e))}/**
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
 */const Bg=6;class Hg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Bg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Il(this),this.idTokenSubscription=new Il(this),this.beforeStateQueue=new $g(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ku,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await $n.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Xu(this,{idToken:e}),r=await Pt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ig()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(kt(this));const n=e?Ee(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jg(this),n=new Hg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Lg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ct(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await $n.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Eg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function An(t){return Ee(t)}class Il{constructor(e){this.auth=e,this.observer=null,this.addObserver=um(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wg(t){ai=t}function ff(t){return ai.loadJS(t)}function zg(){return ai.recaptchaEnterpriseScript}function Kg(){return ai.gapiScript}function Gg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Jg="recaptcha-enterprise",Yg="NO_RECAPTCHA";class Qg{constructor(e){this.type=Jg,this.auth=An(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Cg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Pg(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;yl(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Yg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&yl(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=zg();l.length!==0&&(l+=a),ff(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Tl(t,e,n,r=!1){const s=new Qg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function fo(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Tl(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Tl(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t,e){const n=Yo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ns(i,e??{}))return s;it(s,"already-initialized")}return n.initialize({options:e})}function Zg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function e_(t,e,n){const r=An(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=df(e),{host:o,port:a}=t_(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),n_()}function df(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function t_(t){const e=df(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Sl(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Sl(o)}}}function Sl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function n_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function r_(t,e){return ln(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(t,e){return Gr(t,"POST","/v1/accounts:signInWithPassword",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i_(t,e){return Gr(t,"POST","/v1/accounts:signInWithEmailLink",an(t,e))}async function o_(t,e){return Gr(t,"POST","/v1/accounts:signInWithEmailLink",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends na{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Dr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Dr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fo(e,n,"signInWithPassword",s_);case"emailLink":return i_(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fo(e,r,"signUpPassword",r_);case"emailLink":return o_(e,{idToken:n,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(t,e){return Gr(t,"POST","/v1/accounts:signInWithIdp",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="http://localhost";class En extends na{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):it("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Qo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new En(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jn(e,n)}buildRequest(){const e={requestUri:a_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function c_(t){const e=cr(ur(t)).link,n=e?cr(ur(e)).deep_link_id:null,r=cr(ur(t)).deep_link_id;return(r?cr(ur(r)).link:null)||r||n||e||t}class ra{constructor(e){var n,r,s,i,o,a;const l=cr(ur(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=l_((s=l.mode)!==null&&s!==void 0?s:null);F(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=c_(e);try{return new ra(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.providerId=Xn.PROVIDER_ID}static credential(e,n){return Dr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ra.parseLink(n);return F(r,"argument-error"),Dr._fromEmailAndCode(e,r.code,r.tenantId)}}Xn.PROVIDER_ID="password";Xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Jr extends hf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Jr{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return En._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Jr{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Jr{constructor(){super("twitter.com")}static credential(e,n){return En._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qt.credential(n,r)}catch{return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(t,e){return Gr(t,"POST","/v1/accounts:signUp",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pt._fromIdTokenResponse(e,r,s),o=Al(r);return new wn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Al(r);return new wn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Al(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Ut{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ms.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ms(e,n,r,s)}}function pf(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ms._fromErrorAndOperation(t,i,e,r):i})}async function f_(t,e,n=!1){const r=await Nr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wn._forOperation(t,"link",r)}/**
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
 */async function d_(t,e,n=!1){const{auth:r}=t;if(mt(r.app))return Promise.reject(kt(r));const s="reauthenticate";try{const i=await Nr(t,pf(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=ea(i.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),wn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&it(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(t,e,n=!1){if(mt(t.app))return Promise.reject(kt(t));const r="signIn",s=await pf(t,r,e),i=await wn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function h_(t,e){return mf(An(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gf(t){const e=An(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function p_(t,e,n){if(mt(t.app))return Promise.reject(kt(t));const r=An(t),o=await fo(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",u_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&gf(t),l}),a=await wn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function m_(t,e,n){return mt(t.app)?Promise.reject(kt(t)):h_(Ee(t),Xn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gf(t),r})}function g_(t,e,n,r){return Ee(t).onIdTokenChanged(e,n,r)}function __(t,e,n){return Ee(t).beforeAuthStateChanged(e,n)}function y_(t,e,n,r){return Ee(t).onAuthStateChanged(e,n,r)}function v_(t){return Ee(t).signOut()}const Ls="__sak";/**
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
 */class _f{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ls,"1"),this.storage.removeItem(Ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=1e3,w_=10;class yf extends _f{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Fg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,w_):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},E_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yf.type="LOCAL";const b_=yf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends _f{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vf.type="SESSION";const Ef=vf;/**
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
 */function I_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class li{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new li(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await I_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}li.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class T_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=sa("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return window}function S_(t){yt().location.href=t}/**
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
 */function wf(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function A_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function P_(){return wf()?self:null}/**
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
 */const bf="firebaseLocalStorageDb",C_=1,Us="firebaseLocalStorage",If="fbase_key";class Yr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ci(t,e){return t.transaction([Us],e?"readwrite":"readonly").objectStore(Us)}function O_(){const t=indexedDB.deleteDatabase(bf);return new Yr(t).toPromise()}function ho(){const t=indexedDB.open(bf,C_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Us,{keyPath:If})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Us)?e(r):(r.close(),await O_(),e(await ho()))})})}async function Rl(t,e,n){const r=ci(t,!0).put({[If]:e,value:n});return new Yr(r).toPromise()}async function k_(t,e){const n=ci(t,!1).get(e),r=await new Yr(n).toPromise();return r===void 0?null:r.value}function Pl(t,e){const n=ci(t,!0).delete(e);return new Yr(n).toPromise()}const N_=800,D_=3;class Tf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ho(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>D_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=li._getInstance(P_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await A_(),!this.activeServiceWorker)return;this.sender=new T_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||R_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ho();return await Rl(e,Ls,"1"),await Pl(e,Ls),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>k_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ci(s,!1).getAll();return new Yr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),N_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tf.type="LOCAL";const V_=Tf;new Kr(3e4,6e4);/**
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
 */function x_(t,e){return e?Ct(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ia extends na{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function M_(t){return mf(t.auth,new ia(t),t.bypassAuthState)}function L_(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),d_(n,new ia(t),t.bypassAuthState)}async function U_(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),f_(n,new ia(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M_;case"linkViaPopup":case"linkViaRedirect":return U_;case"reauthViaPopup":case"reauthViaRedirect":return L_;default:it(this.auth,"internal-error")}}resolve(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=new Kr(2e3,1e4);class xn extends Sf{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){xt(this.filter.length===1,"Popup operations only handle one event");const e=sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,F_.get())};e()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="pendingRedirect",Is=new Map;class j_ extends Sf{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Is.get(this.auth._key());if(!e){try{const r=await B_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Is.set(this.auth._key(),e)}return this.bypassAuthState||Is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B_(t,e){const n=W_(e),r=q_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function H_(t,e){Is.set(t._key(),e)}function q_(t){return Ct(t._redirectPersistence)}function W_(t){return bs($_,t.config.apiKey,t.name)}async function z_(t,e,n=!1){if(mt(t.app))return Promise.reject(kt(t));const r=An(t),s=x_(r,e),o=await new j_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=10*60*1e3;class G_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!J_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Af(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cl(e))}saveEventToCache(e){this.cachedEventUids.add(Cl(e)),this.lastProcessedEventTime=Date.now()}}function Cl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Af({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function J_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Af(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(t,e={}){return ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,X_=/^https?/;async function Z_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Y_(t);for(const n of e)try{if(ey(n))return}catch{}it(t,"unauthorized-domain")}function ey(t){const e=co(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!X_.test(n))return!1;if(Q_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ty=new Kr(3e4,6e4);function Ol(){const t=yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ny(t){return new Promise((e,n)=>{var r,s,i;function o(){Ol(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ol(),n(_t(t,"network-request-failed"))},timeout:ty.get()})}if(!((s=(r=yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=yt().gapi)===null||i===void 0)&&i.load)o();else{const a=Gg("iframefcb");return yt()[a]=()=>{gapi.load?o():n(_t(t,"network-request-failed"))},ff(`${Kg()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ts=null,e})}let Ts=null;function ry(t){return Ts=Ts||ny(t),Ts}/**
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
 */const sy=new Kr(5e3,15e3),iy="__/auth/iframe",oy="emulator/auth/iframe",ay={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ly=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cy(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zo(e,oy):`https://${t.config.authDomain}/${iy}`,r={apiKey:e.apiKey,appName:t.name,v:Qn},s=ly.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zr(r).slice(1)}`}async function uy(t){const e=await ry(t),n=yt().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:cy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ay,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=_t(t,"network-request-failed"),a=yt().setTimeout(()=>{i(o)},sy.get());function l(){yt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const fy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dy=500,hy=600,py="_blank",my="http://localhost";class kl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gy(t,e,n,r=dy,s=hy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},fy),{width:r.toString(),height:s.toString(),top:i,left:o}),c=xe().toLowerCase();n&&(a=rf(c)?py:n),tf(c)&&(e=e||my,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[m,b])=>`${p}${m}=${b},`,"");if(Ug(c)&&a!=="_self")return _y(e||"",a),new kl(null);const d=window.open(e||"",a,u);F(d,t,"popup-blocked");try{d.focus()}catch{}return new kl(d)}function _y(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yy="__/auth/handler",vy="emulator/auth/handler",Ey=encodeURIComponent("fac");async function Nl(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qn,eventId:s};if(e instanceof hf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Jr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Ey}=${encodeURIComponent(l)}`:"";return`${wy(t)}?${zr(a).slice(1)}${c}`}function wy({config:t}){return t.emulator?Zo(t,vy):`https://${t.authDomain}/${yy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="webStorageSupport";class by{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ef,this._completeRedirectFn=z_,this._overrideRedirectResult=H_}async _openPopup(e,n,r,s){var i;xt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Nl(e,n,r,co(),s);return gy(e,o,sa())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Nl(e,n,r,co(),s);return S_(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uy(e),r=new G_(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ui,{type:Ui},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ui];o!==void 0&&n(!!o),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Z_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cf()||nf()||ta()}}const Iy=by;var Dl="@firebase/auth",Vl="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ay(t){Wn(new vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uf(t)},c=new qg(r,s,i,l);return Zg(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new vn("auth-internal",e=>{const n=An(e.getProvider("auth").getImmediate());return(r=>new Ty(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Dl,Vl,Sy(t)),tn(Dl,Vl,"esm2017")}/**
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
 */const Ry=5*60,Py=Fu("authIdTokenMaxAge")||Ry;let xl=null;const Cy=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Py)return;const s=n==null?void 0:n.token;xl!==s&&(xl=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Oy(t=Hu()){const e=Yo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xg(t,{popupRedirectResolver:Iy,persistence:[V_,b_,Ef]}),r=Fu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Cy(i.toString());__(n,o,()=>o(n.currentUser)),g_(n,a=>o(a))}}const s=Lu("auth");return s&&e_(n,`http://${s}`),n}function ky(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Wg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=_t("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ky().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ay("Browser");var Ny="firebase",Dy="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(Ny,Dy,"app");/**
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
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
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
 */let Zn="10.13.1";/**
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
 */const zn=new Go("@firebase/firestore");function Fs(t,...e){if(zn.logLevel<=ee.DEBUG){const n=e.map(aa);zn.debug(`Firestore (${Zn}): ${t}`,...n)}}function oa(t,...e){if(zn.logLevel<=ee.ERROR){const n=e.map(aa);zn.error(`Firestore (${Zn}): ${t}`,...n)}}function Rf(t,...e){if(zn.logLevel<=ee.WARN){const n=e.map(aa);zn.warn(`Firestore (${Zn}): ${t}`,...n)}}function aa(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Zn}) INTERNAL ASSERTION FAILED: `+t;throw oa(e),new Error(e)}function Je(t,e){t||de()}function Qr(t,e){return t}/**
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
 */const Ml="ok",Vy="cancelled",vr="unknown",H="invalid-argument",xy="deadline-exceeded",My="not-found",Ly="permission-denied",po="unauthenticated",Uy="resource-exhausted",Kn="failed-precondition",Fy="aborted",$y="out-of-range",Pf="unimplemented",jy="internal",By="unavailable";class M extends Ut{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Cf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ue.UNAUTHENTICATED))}shutdown(){}}class qy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Wy{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Je(typeof e.accessToken=="string"),new Cf(e.accessToken,new Ue(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class zy{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class Ky{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new zy(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jy{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Je(typeof e.token=="string"),new Gy(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class Yy{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Vr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Vr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vr&&e.projectId===this.projectId&&e.database===this.database}}class xr{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends xr{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(H,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const Qy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends xr{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return Qy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(H,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new M(H,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(H,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new M(H,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
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
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(_e.fromString(e))}static fromName(e){return new Te(_e.fromString(e).popFirst(5))}static empty(){return new Te(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new _e(e.slice()))}}/**
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
 */function Of(t,e,n){if(!n)throw new M(H,`Function ${t}() cannot be called with an empty ${e}.`)}function Ll(t){if(!Te.isDocumentKey(t))throw new M(H,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ul(t){if(Te.isDocumentKey(t))throw new M(H,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ui(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function er(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(H,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ui(t);throw new M(H,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function kf(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let ds=null;function Xy(){return ds===null?ds=function(){return 268435456+Math.round(2147483648*Math.random())}():ds++,"0x"+ds.toString(16)}/**
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
 */function Zy(t){return t==null}function $s(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Fl,J;function $l(t){if(t===void 0)return oa("RPC_ERROR","HTTP error has no status"),vr;switch(t){case 200:return Ml;case 400:return Kn;case 401:return po;case 403:return Ly;case 404:return My;case 409:return Fy;case 416:return $y;case 429:return Uy;case 499:return Vy;case 500:return vr;case 501:return Pf;case 503:return By;case 504:return xy;default:return t>=200&&t<300?Ml:t>=400&&t<500?Kn:t>=500&&t<600?jy:vr}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(J=Fl||(Fl={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";class tv extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${s}/databases/${i}`,this.T=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get R(){return!1}P(n,r,s,i,o){const a=Xy(),l=this.V(n,r.toUriEncodedString());Fs("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.I(c,i,o),this.p(n,l,c,s).then(u=>(Fs("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Rf("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}g(n,r,s,i,o,a){return this.P(n,r,s,i,o)}I(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}V(n,r){const s=ev[n];return`${this.m}/v1/${r}:${s}`}terminate(){}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const c=l;throw new M($l(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(i=l==null?void 0:l.error)===null||i===void 0?void 0:i.message;throw new M($l(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class rv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=nv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Nf(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */function jl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class sv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sv("Invalid base64 string: "+i):i}}(e);return new Mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const iv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bn(t){if(Je(!!t),typeof t=="string"){let e=0;const n=iv.exec(t);if(Je(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mr(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
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
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(H,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(H,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(H,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(H,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vf(t){const e=t.mapValue.fields.__previous_value__;return Df(e)?Vf(e):e}function Lr(t){const e=bn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs={fields:{__type__:{stringValue:"__max__"}}};function In(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Df(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:function(n){var r,s;return((s=(((r=n==null?void 0:n.mapValue)===null||r===void 0?void 0:r.fields)||{}).__type__)===null||s===void 0?void 0:s.stringValue)==="__vector__"}(t)?10:11:de()}function js(t,e){if(t===e)return!0;const n=In(t);if(n!==In(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Lr(t).isEqual(Lr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=bn(s.timestampValue),a=bn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Mr(s.bytesValue).isEqual(Mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=me(s.doubleValue),a=me(i.doubleValue);return o===a?$s(o)===$s(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Nf(t.arrayValue.values||[],e.arrayValue.values||[],js);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(jl(o)!==jl(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!js(o[l],a[l])))return!1;return!0}(t,e);default:return de()}}function Ur(t,e){return(t.values||[]).find(n=>js(n,e))!==void 0}function Bs(t,e){if(t===e)return 0;const n=In(t),r=In(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=me(i.integerValue||i.doubleValue),l=me(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Bl(t.timestampValue,e.timestampValue);case 4:return Bl(Lr(t),Lr(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Mr(i),l=Mr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ve(a[c],l[c]);if(u!==0)return u}return ve(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ve(me(i.latitude),me(o.latitude));return a!==0?a:ve(me(i.longitude),me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Hl(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,c,u;const d=i.fields||{},p=o.fields||{},m=(a=d.value)===null||a===void 0?void 0:a.arrayValue,b=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=ve(((c=m==null?void 0:m.values)===null||c===void 0?void 0:c.length)||0,((u=b==null?void 0:b.values)===null||u===void 0?void 0:u.length)||0);return R!==0?R:Hl(m,b)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===hs&&o===hs)return 0;if(i===hs)return 1;if(o===hs)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let d=0;d<l.length&&d<u.length;++d){const p=ve(l[d],u[d]);if(p!==0)return p;const m=Bs(a[l[d]],c[u[d]]);if(m!==0)return m}return ve(l.length,u.length)}(t.mapValue,e.mapValue);default:throw de()}}function Bl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=bn(t),r=bn(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function Hl(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Bs(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function ql(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xf(t){return!!t&&"arrayValue"in t}function Wl(t){return!!t&&"nullValue"in t}function zl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fi(t){return!!t&&"mapValue"in t}function Er(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Er(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Er(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Kl{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class Mf{}class at extends Mf{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ov(e,n,r):n==="array-contains"?new cv(e,r):n==="in"?new uv(e,r):n==="not-in"?new fv(e,r):n==="array-contains-any"?new dv(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new av(e,r):new lv(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Bs(n,this.value)):n!==null&&In(this.value)===In(n)&&this.matchesComparison(Bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zr extends Mf{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Zr(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class ov extends at{constructor(e,n,r){super(e,n,r),this.key=Te.fromName(r.referenceValue)}matches(e){const n=Te.comparator(e.key,this.key);return this.matchesComparison(n)}}class av extends at{constructor(e,n){super(e,"in",n),this.keys=Lf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lv extends at{constructor(e,n){super(e,"not-in",n),this.keys=Lf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Lf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Te.fromName(r.referenceValue))}class cv extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xf(n)&&Ur(n.arrayValue,this.value)}}class uv extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ur(this.value.arrayValue,n)}}class fv extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ur(this.value.arrayValue,n)}}class dv extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ur(this.value.arrayValue,r))}}/**
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
 */class mo{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class we{constructor(e){this.timestamp=e}static fromTimestamp(e){return new we(e)}static min(){return new we(new Ye(0,0))}static max(){return new we(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Hs{constructor(e,n){this.comparator=e,this.root=n||be.EMPTY}insert(e,n){return new Hs(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new Hs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ps(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ps(this.root,e,this.comparator,!1)}getReverseIterator(){return new ps(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ps(this.root,e,this.comparator,!0)}}class ps{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??be.RED,this.left=s??be.EMPTY,this.right=i??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fr{constructor(e){this.comparator=e,this.data=new Hs(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gl(this.data.getIterator())}getIteratorFrom(e){return new Gl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fr)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fr(this.comparator);return n.data=e,n}}class Gl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new Tn([])}unionWith(e){let n=new Fr(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Nf(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Er(n)}setAll(e){let n=Fe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Er(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Fi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return js(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Fi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Xr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ke(Er(this.value))}}/**
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
 */class pt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new pt(e,0,we.min(),we.min(),we.min(),Ke.empty(),0)}static newFoundDocument(e,n,r,s){return new pt(e,1,n,we.min(),r,s,0)}static newNoDocument(e,n){return new pt(e,2,n,we.min(),we.min(),Ke.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,we.min(),we.min(),Ke.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hv{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.C=null}}function Jl(t,e=null,n=[],r=[],s=null,i=null,o=null){return new hv(t,e,n,r,s,i,o)}/**
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
 */class Uf{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function pv(t){return t.collectionGroup!==null}function mv(t){const e=Qr(t);if(e.S===null){e.S=[];const n=new Set;for(const i of e.explicitOrderBy)e.S.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Fr(Fe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.S.push(new mo(i,r))}),n.has(Fe.keyField().canonicalString())||e.S.push(new mo(Fe.keyField(),r))}return e.S}function gv(t){const e=Qr(t);return e.N||(e.N=_v(e,mv(t))),e.N}function _v(t,e){if(t.limitType==="F")return Jl(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new mo(s.field,i)});const n=t.endAt?new Kl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Kl(t.startAt.position,t.startAt.inclusive):null;return Jl(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function go(t,e){const n=t.filters.concat([e]);return new Uf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$s(e)?"-0":e}}function yv(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!$s(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):Ff(t,e)}/**
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
 */class fi{constructor(){this._=void 0}}class vv extends fi{}class Ev extends fi{constructor(e){super(),this.elements=e}}class wv extends fi{constructor(e){super(),this.elements=e}}class bv extends fi{constructor(e,n){super(),this.serializer=e,this.q=n}}class gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class di{}class $f extends di{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class la extends di{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class jf extends di{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Iv extends di{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const Tv={asc:"ASCENDING",desc:"DESCENDING"},Sv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Av={and:"AND",or:"OR"};class Rv{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _o(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Cv(t,e){return _o(t,e.toTimestamp())}function wr(t){return Je(!!t),we.fromTimestamp(function(n){const r=bn(n);return new Ye(r.seconds,r.nanos)}(t))}function ca(t,e){return yo(t,e).canonicalString()}function yo(t,e){const n=function(s){return new _e(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function qs(t,e){return ca(t.databaseId,e.path)}function vo(t,e){const n=function(s){const i=_e.fromString(s);return Je(Hf(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new M(H,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(H,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Te(function(s){return Je(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}(n))}function Yl(t,e,n){return{name:qs(t,e),fields:n.value.mapValue.fields}}function Ov(t,e){return"found"in e?function(r,s){Je(!!s.found),s.found.name,s.found.updateTime;const i=vo(r,s.found.name),o=wr(s.found.updateTime),a=s.found.createTime?wr(s.found.createTime):we.min(),l=new Ke({mapValue:{fields:s.found.fields}});return pt.newFoundDocument(i,o,a,l)}(t,e):"missing"in e?function(r,s){Je(!!s.missing),Je(!!s.readTime);const i=vo(r,s.missing),o=wr(s.readTime);return pt.newNoDocument(i,o)}(t,e):de()}function kv(t,e){let n;if(e instanceof $f)n={update:Yl(t,e.key,e.value)};else if(e instanceof jf)n={delete:qs(t,e.key)};else if(e instanceof la)n={update:Yl(t,e.key,e.data),updateMask:Mv(e.fieldMask)};else{if(!(e instanceof Iv))return de();n={verify:qs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof vv)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ev)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof wv)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof bv)return{fieldPath:o.field.canonicalString(),increment:a.q};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Cv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function Nv(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=function(c,u){return ca(c.databaseId,u)}(t,s);const i=function(c){if(c.length!==0)return Bf(Zr.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(p){return{field:Dn(p.field),direction:Dv(p.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=function(c,u){return c.useProto3Json||Zy(u)?u:{value:u}}(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{B:n,parent:s}}function Dv(t){return Tv[t]}function Vv(t){return Sv[t]}function xv(t){return Av[t]}function Dn(t){return{fieldPath:t.canonicalString()}}function Bf(t){return t instanceof at?function(n){if(n.op==="=="){if(zl(n.value))return{unaryFilter:{field:Dn(n.field),op:"IS_NAN"}};if(Wl(n.value))return{unaryFilter:{field:Dn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(zl(n.value))return{unaryFilter:{field:Dn(n.field),op:"IS_NOT_NAN"}};if(Wl(n.value))return{unaryFilter:{field:Dn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dn(n.field),op:Vv(n.op),value:n.value}}}(t):t instanceof Zr?function(n){const r=n.getFilters().map(s=>Bf(s));return r.length===1?r[0]:{compositeFilter:{op:xv(n.op),filters:r}}}(t):de()}function Mv(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Hf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){return new Rv(t,!0)}/**
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
 */class Lv extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.Y=!1}Z(){if(this.Y)throw new M(Kn,"The client has already been terminated.")}P(e,n,r,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.P(e,yo(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===po&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(vr,i.toString())})}g(e,n,r,s,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,yo(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===po&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(vr,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function fa(t,e){const n=Qr(t),r={writes:e.map(s=>kv(n.serializer,s))};await n.P("Commit",n.serializer.databaseId,_e.emptyPath(),r)}async function Uv(t,e){const n=Qr(t),r={documents:e.map(a=>qs(n.serializer,a))},s=await n.g("BatchGetDocuments",n.serializer.databaseId,_e.emptyPath(),r,e.length),i=new Map;s.forEach(a=>{const l=Ov(n.serializer,a);i.set(l.key.toString(),l)});const o=[];return e.forEach(a=>{const l=i.get(a.toString());Je(!!l),o.push(l)}),o}async function Fv(t,e){const n=Qr(t),{B:r,parent:s}=Nv(n.serializer,gv(e));return(await n.g("RunQuery",n.serializer.databaseId,s,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(a,l,c){const u=vo(a,l.name),d=wr(l.updateTime),p=l.createTime?wr(l.createTime):we.min(),m=new Ke({mapValue:{fields:l.fields}}),b=pt.newFoundDocument(u,d,p,m);return c&&b.setHasCommittedMutations(),c?b.setHasCommittedMutations():b}(n.serializer,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new Map;function es(t){if(t._terminated)throw new M(Kn,"The client has already been terminated.");if(!br.has(t)){Fs("ComponentProvider","Initializing Datastore");const e=function(i){return new tv(i,fetch.bind(null))}(function(i,o,a,l){return new Yy(i,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,kf(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=ua(t._databaseId),r=function(i,o,a,l){return new Lv(i,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);br.set(t,r)}return br.get(t)}class Ql{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(H,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(H,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,o,a,l){if(o===!0&&l===!0)throw new M(H,`${i} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new M(H,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new M(H,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new M(H,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hi{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ql({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(Kn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(Kn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ql(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Hy;switch(r.type){case"firstParty":return new Ky(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(H,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=br.get(n);r&&(Fs("ComponentProvider","Removing Datastore"),br.delete(n),r.terminate())}(this),Promise.resolve()}}function $v(t,e){const n=Hu(),r="(default)",s=Yo(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=Qp("firestore");i&&jv(s,...i)}return s}function jv(t,e,n,r={}){var s;const i=(t=er(t,hi))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Rf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ue.MOCK_USER;else{a=Zp(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new M(H,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ue(c)}t._authCredentials=new qy(new Cf(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tr(this.firestore,e,this._query)}}class Ve{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}}class Nt extends tr{constructor(e,n,r){super(e,n,function(i){return new Uf(i)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new Te(e))}withConverter(e){return new Nt(this.firestore,e,this._path)}}function Xl(t,e,...n){if(t=Ee(t),Of("collection","path",e),t instanceof hi){const r=_e.fromString(e,...n);return Ul(r),new Nt(t,null,r)}{if(!(t instanceof Ve||t instanceof Nt))throw new M(H,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Ul(r),new Nt(t.firestore,null,r)}}function Ss(t,e,...n){if(t=Ee(t),arguments.length===1&&(e=rv.newId()),Of("doc","path",e),t instanceof hi){const r=_e.fromString(e,...n);return Ll(r),new Ve(t,null,new Te(r))}{if(!(t instanceof Ve||t instanceof Nt))throw new M(H,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Ll(r),new Ve(t.firestore,t instanceof Nt?t.converter:null,new Te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gn(Mt.fromBase64String(e))}catch(n){throw new M(H,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gn(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(H,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this._methodName=e}}/**
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
 */class ha{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(H,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(H,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */class pa{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Bv=/^__.*__$/;class Hv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new la(e,this.data,this.fieldMask,n,this.fieldTransforms):new $f(e,this.data,n,this.fieldTransforms)}}class qf{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new la(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Wf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class ma{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new ma(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.st(e),s}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.tt(),s}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return Ws(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(Wf(this.et)&&Bv.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class qv{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ua(e)}ht(e,n,r,s=!1){return new ma({et:e,methodName:n,lt:r,path:Fe.emptyPath(),it:!1,ct:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ga(t){const e=t._freezeSettings(),n=ua(t._databaseId);return new qv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Wv(t,e,n,r,s,i={}){const o=t.ht(i.merge||i.mergeFields?2:0,e,n,s);_a("Data must be an object, but it was:",o,r);const a=zf(r,o);let l,c;if(i.merge)l=new Tn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const d of i.mergeFields){const p=Eo(e,d,n);if(!o.contains(p))throw new M(H,`Field '${p}' is specified in your field mask but missing from your input data.`);Gf(u,p)||u.push(p)}l=new Tn(u),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new Hv(new Ke(a),l,c)}class mi extends da{_toFieldTransform(e){if(e.et!==2)throw e.et===1?e._t(`${this._methodName}() can only appear at the top level of your update data`):e._t(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mi}}function zv(t,e,n,r){const s=t.ht(1,e,n);_a("Data must be an object, but it was:",s,r);const i=[],o=Ke.empty();Xr(r,(l,c)=>{const u=ya(e,l,n);c=Ee(c);const d=s.ot(u);if(c instanceof mi)i.push(u);else{const p=ts(c,d);p!=null&&(i.push(u),o.set(u,p))}});const a=new Tn(i);return new qf(o,a,s.fieldTransforms)}function Kv(t,e,n,r,s,i){const o=t.ht(1,e,n),a=[Eo(e,r,n)],l=[s];if(i.length%2!=0)throw new M(H,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Eo(e,i[p])),l.push(i[p+1]);const c=[],u=Ke.empty();for(let p=a.length-1;p>=0;--p)if(!Gf(c,a[p])){const m=a[p];let b=l[p];b=Ee(b);const R=o.ot(m);if(b instanceof mi)c.push(m);else{const L=ts(b,R);L!=null&&(c.push(m),u.set(m,L))}}const d=new Tn(c);return new qf(u,d,o.fieldTransforms)}function Gv(t,e,n,r=!1){return ts(n,t.ht(r?4:3,e))}function ts(t,e){if(Kf(t=Ee(t)))return _a("Unsupported field value:",e,t),zf(t,e);if(t instanceof da)return function(r,s){if(!Wf(s.et))throw s._t(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s._t(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=ts(a,s.ut(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ye.fromDate(r);return{timestampValue:_o(s.serializer,i)}}if(r instanceof Ye){const i=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_o(s.serializer,i)}}if(r instanceof ha)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gn)return{bytesValue:Pv(s.serializer,r._byteString)};if(r instanceof Ve){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ca(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof pa)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a._t("VectorValues must only contain numeric values.");return Ff(a.serializer,l)})}}}}}}(r,s);throw s._t(`Unsupported field value: ${ui(r)}`)}(t,e)}function zf(t,e){const n={};return function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xr(t,(r,s)=>{const i=ts(s,e.nt(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Kf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof ha||t instanceof Gn||t instanceof Ve||t instanceof da||t instanceof pa)}function _a(t,e,n){if(!Kf(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ui(n);throw r==="an object"?e._t(t+" a custom object"):e._t(t+" "+r)}}function Eo(t,e,n){if((e=Ee(e))instanceof pi)return e._internalPath;if(typeof e=="string")return ya(t,e);throw Ws("Field path arguments must be of type string or ",t,!1,void 0,n)}const Jv=new RegExp("[~\\*/\\[\\]]");function ya(t,e,n){if(e.search(Jv)>=0)throw Ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pi(...e.split("."))._internalPath}catch{throw Ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ws(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new M(H,a+t+l)}function Gf(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Yf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Yf extends Jf{data(){return super.data()}}class Yv{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Qf(t,e){return typeof e=="string"?ya(t,e):e instanceof pi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{}class Qv extends va{}function Xv(t,e,...n){let r=[];e instanceof va&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Ea).length,a=i.filter(l=>l instanceof gi).length;if(o>1||o>0&&a>0)throw new M(H,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class gi extends Qv{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new gi(e,n,r)}_apply(e){const n=this._parse(e);return Xf(e._query,n),new tr(e.firestore,e.converter,go(e._query,n))}_parse(e){const n=ga(e.firestore);return function(i,o,a,l,c,u,d){let p;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(H,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ec(d,u);const m=[];for(const b of d)m.push(Zl(l,i,b));p={arrayValue:{values:m}}}else p=Zl(l,i,d)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ec(d,u),p=Gv(a,o,d,u==="in"||u==="not-in");return at.create(c,u,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Zv(t,e,n){const r=e,s=Qf("where",t);return gi._create(s,r,n)}class Ea extends va{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ea(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Zr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)Xf(o,l),o=go(o,l)}(e._query,n),new tr(e.firestore,e.converter,go(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Zl(t,e,n){if(typeof(n=Ee(n))=="string"){if(n==="")throw new M(H,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pv(e)&&n.indexOf("/")!==-1)throw new M(H,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(_e.fromString(n));if(!Te.isDocumentKey(r))throw new M(H,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ql(t,new Te(r))}if(n instanceof Ve)return ql(t,n._key);throw new M(H,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ui(n)}.`)}function ec(t,e){if(!Array.isArray(t)||t.length===0)throw new M(H,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xf(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(H,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(H,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Zf extends class{convertValue(n,r="none"){switch(In(n)){case 0:return null;case 1:return n.booleanValue;case 2:return me(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(Mr(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 11:return this.convertObject(n.mapValue,r);case 10:return this.convertVectorValue(n.mapValue);default:throw de()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const s={};return Xr(n,(i,o)=>{s[i]=this.convertValue(o,r)}),s}convertVectorValue(n){var r,s,i;const o=(i=(s=(r=n.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(a=>me(a.doubleValue));return new pa(o)}convertGeoPoint(n){return new ha(me(n.latitude),me(n.longitude))}convertArray(n,r){return(n.values||[]).map(s=>this.convertValue(s,r))}convertServerTimestamp(n,r){switch(r){case"previous":const s=Vf(n);return s==null?null:this.convertValue(s,r);case"estimate":return this.convertTimestamp(Lr(n));default:return null}}convertTimestamp(n){const r=bn(n);return new Ye(r.seconds,r.nanos)}convertDocumentKey(n,r){const s=_e.fromString(n);Je(Hf(s));const i=new Vr(s.get(1),s.get(3)),o=new Te(s.popFirst(5));return i.isEqual(r)||oa(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,n)}}function $i(t){const e=es((t=er(t,Ve)).firestore),n=new Zf(t.firestore);return Uv(e,[t._key]).then(r=>{Je(r.length===1);const s=r[0];return new Jf(t.firestore,n,t._key,s.isFoundDocument()?s:null,t.converter)})}function tE(t){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new M(Pf,"limitToLast() queries require specifying at least one orderBy() clause")})((t=er(t,tr))._query);const e=es(t.firestore),n=new Zf(t.firestore);return Fv(e,t._query).then(r=>{const s=r.map(i=>new Yf(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new Yv(t,s)})}function nE(t,e,n,...r){const s=ga((t=er(t,Ve)).firestore);let i;return i=typeof(e=Ee(e))=="string"||e instanceof pi?Kv(s,"updateDoc",t._key,e,n,r):zv(s,"updateDoc",t._key,e),fa(es(t.firestore),[i.toMutation(t._key,gn.exists(!0))])}function rE(t){return fa(es((t=er(t,Ve)).firestore),[new jf(t._key,gn.none())])}function sE(t,e){const n=Ss(t=er(t,Nt)),r=eE(t.converter,e),s=Wv(ga(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return fa(es(t.firestore),[s.toMutation(n._key,gn.exists(!1))]).then(()=>n)}(function(){(function(n){Zn=n})(`${Qn}_lite`),Wn(new vn("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new hi(new Wy(e.getProvider("auth-internal")),new Jy(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(H,'"projectId" not provided in firebase.initializeApp.');return new Vr(a.options.projectId,l)}(s,n),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),tn("firestore-lite","4.7.1",""),tn("firestore-lite","4.7.1","esm2017")})();const iE={apiKey:"AIzaSyCI9MC9qMkmjuV23QEVVfLmaw6Gywu82sY",authDomain:"vue3-project-mrs.firebaseapp.com",projectId:"vue3-project-mrs",storageBucket:"vue3-project-mrs.appspot.com",messagingSenderId:"587619424480",appId:"1:587619424480:web:9ea9ac223c778164fc5885"};Bu(iE);const ir=$v(),At=Oy();/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Vn=typeof document<"u";function ed(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function oE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ed(t.default)}const re=Object.assign;function ji(t,e){const n={};for(const r in e){const s=e[r];n[r]=ot(s)?s.map(t):t(s)}return n}const Ir=()=>{},ot=Array.isArray,td=/#/g,aE=/&/g,lE=/\//g,cE=/=/g,uE=/\?/g,nd=/\+/g,fE=/%5B/g,dE=/%5D/g,rd=/%5E/g,hE=/%60/g,sd=/%7B/g,pE=/%7C/g,id=/%7D/g,mE=/%20/g;function wa(t){return encodeURI(""+t).replace(pE,"|").replace(fE,"[").replace(dE,"]")}function gE(t){return wa(t).replace(sd,"{").replace(id,"}").replace(rd,"^")}function wo(t){return wa(t).replace(nd,"%2B").replace(mE,"+").replace(td,"%23").replace(aE,"%26").replace(hE,"`").replace(sd,"{").replace(id,"}").replace(rd,"^")}function _E(t){return wo(t).replace(cE,"%3D")}function yE(t){return wa(t).replace(td,"%23").replace(uE,"%3F")}function vE(t){return t==null?"":yE(t).replace(lE,"%2F")}function $r(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const EE=/\/$/,wE=t=>t.replace(EE,"");function Bi(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=SE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:$r(o)}}function bE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function tc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function IE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Jn(e.matched[r],n.matched[s])&&od(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function od(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!TE(t[n],e[n]))return!1;return!0}function TE(t,e){return ot(t)?nc(t,e):ot(e)?nc(e,t):t===e}function nc(t,e){return ot(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function SE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var jr;(function(t){t.pop="pop",t.push="push"})(jr||(jr={}));var Tr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Tr||(Tr={}));function AE(t){if(!t)if(Vn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wE(t)}const RE=/^[^#]+#/;function PE(t,e){return t.replace(RE,"#")+e}function CE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const _i=()=>({left:window.scrollX,top:window.scrollY});function OE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=CE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function rc(t,e){return(history.state?history.state.position-e:-1)+t}const bo=new Map;function kE(t,e){bo.set(t,e)}function NE(t){const e=bo.get(t);return bo.delete(t),e}let DE=()=>location.protocol+"//"+location.host;function ad(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),tc(l,"")}return tc(n,t)+r+s}function VE(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=ad(t,location),b=n.value,R=e.value;let L=0;if(p){if(n.value=m,e.value=p,o&&o===b){o=null;return}L=R?p.position-R.position:0}else r(m);s.forEach(V=>{V(n.value,b,{delta:L,type:jr.pop,direction:L?L>0?Tr.forward:Tr.back:Tr.unknown})})};function l(){o=n.value}function c(p){s.push(p);const m=()=>{const b=s.indexOf(p);b>-1&&s.splice(b,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(re({},p.state,{scroll:_i()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function sc(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?_i():null}}function xE(t){const{history:e,location:n}=window,r={value:ad(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:DE()+t+l;try{e[u?"replaceState":"pushState"](c,"",p),s.value=c}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(l,c){const u=re({},e.state,sc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=re({},s.value,e.state,{forward:l,scroll:_i()});i(u.current,u,!0);const d=re({},sc(r.value,l,null),{position:u.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function ME(t){t=AE(t);const e=xE(t),n=VE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:t,go:r,createHref:PE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function LE(t){return typeof t=="string"||t&&typeof t=="object"}function ld(t){return typeof t=="string"||typeof t=="symbol"}const cd=Symbol("");var ic;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ic||(ic={}));function Yn(t,e){return re(new Error,{type:t,[cd]:!0},e)}function bt(t,e){return t instanceof Error&&cd in t&&(e==null||!!(t.type&e))}const oc="[^/]+?",UE={sensitive:!1,strict:!1,start:!0,end:!0},FE=/[.+*?^${}()[\]/\\]/g;function $E(t,e){const n=re({},UE,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const p=c[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(FE,"\\$&"),m+=40;else if(p.type===1){const{value:b,repeatable:R,optional:L,regexp:V}=p;i.push({name:b,repeatable:R,optional:L});const k=V||oc;if(k!==oc){m+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${b}" (${k}): `+O.message)}}let N=R?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(N=L&&c.length<2?`(?:/${N})`:"/"+N),L&&(N+="?"),s+=N,m+=20,L&&(m+=-8),R&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",b=i[p-1];d[b.name]=m&&b.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:b,repeatable:R,optional:L}=m,V=b in c?c[b]:"";if(ot(V)&&!R)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const k=ot(V)?V.join("/"):V;if(!k)if(L)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${b}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function jE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ud(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=jE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ac(r))return 1;if(ac(s))return-1}return s.length-r.length}function ac(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const BE={type:0,value:""},HE=/[a-zA-Z0-9_]/;function qE(t){if(!t)return[[]];if(t==="/")return[[BE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:HE.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function WE(t,e,n){const r=$E(qE(t.path),n),s=re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function zE(t,e){const n=[],r=new Map;e=fc({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,m){const b=!m,R=cc(d);R.aliasOf=m&&m.record;const L=fc(e,d),V=[R];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const q of O)V.push(cc(re({},R,{components:m?m.record.components:R.components,path:q,aliasOf:m?m.record:R})))}let k,N;for(const O of V){const{path:q}=O;if(p&&q[0]!=="/"){const he=p.record.path,Y=he[he.length-1]==="/"?"":"/";O.path=p.record.path+(q&&Y+q)}if(k=WE(O,p,L),m?m.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),b&&d.name&&!uc(k)&&o(d.name)),fd(k)&&l(k),R.children){const he=R.children;for(let Y=0;Y<he.length;Y++)i(he[Y],k,m&&m.children[Y])}m=m||k}return N?()=>{o(N)}:Ir}function o(d){if(ld(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=JE(d,n);n.splice(p,0,d),d.record.name&&!uc(d)&&r.set(d.record.name,d)}function c(d,p){let m,b={},R,L;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw Yn(1,{location:d});L=m.record.name,b=re(lc(p.params,m.keys.filter(N=>!N.optional).concat(m.parent?m.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),d.params&&lc(d.params,m.keys.map(N=>N.name))),R=m.stringify(b)}else if(d.path!=null)R=d.path,m=n.find(N=>N.re.test(R)),m&&(b=m.parse(R),L=m.record.name);else{if(m=p.name?r.get(p.name):n.find(N=>N.re.test(p.path)),!m)throw Yn(1,{location:d,currentLocation:p});L=m.record.name,b=re({},p.params,d.params),R=m.stringify(b)}const V=[];let k=m;for(;k;)V.unshift(k.record),k=k.parent;return{name:L,path:R,params:b,matched:V,meta:GE(V)}}t.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function lc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function cc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:KE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function KE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function uc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function GE(t){return t.reduce((e,n)=>re(e,n.meta),{})}function fc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function JE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ud(t,e[i])<0?r=i:n=i+1}const s=YE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function YE(t){let e=t;for(;e=e.parent;)if(fd(e)&&ud(t,e)===0)return e}function fd({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function QE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(nd," "),o=i.indexOf("="),a=$r(o<0?i:i.slice(0,o)),l=o<0?null:$r(i.slice(o+1));if(a in e){let c=e[a];ot(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function dc(t){let e="";for(let n in t){const r=t[n];if(n=_E(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ot(r)?r.map(i=>i&&wo(i)):[r&&wo(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function XE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ot(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ZE=Symbol(""),hc=Symbol(""),yi=Symbol(""),ba=Symbol(""),Io=Symbol("");function or(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Kt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=p=>{p===!1?l(Yn(4,{from:n,to:e})):p instanceof Error?l(p):LE(p)?l(Yn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(p=>l(p))})}function Hi(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(ed(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Kt(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=oE(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&Kt(m,n,r,o,a,s)()}))}}return i}function pc(t){const e=tt(yi),n=tt(ba),r=Ze(()=>{const l=ge(t.to);return e.resolve(l)}),s=Ze(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(Jn.bind(null,u));if(p>-1)return p;const m=mc(l[c-2]);return c>1&&mc(u)===m&&d[d.length-1].path!==m?d.findIndex(Jn.bind(null,l[c-2])):p}),i=Ze(()=>s.value>-1&&rw(n.params,r.value.params)),o=Ze(()=>s.value>-1&&s.value===n.matched.length-1&&od(n.params,r.value.params));function a(l={}){return nw(l)?e[ge(t.replace)?"replace":"push"](ge(t.to)).catch(Ir):Promise.resolve()}return{route:r,href:Ze(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const ew=Zc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pc,setup(t,{slots:e}){const n=Br(pc(t)),{options:r}=tt(yi),s=Ze(()=>({[gc(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[gc(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ru("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),tw=ew;function nw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ot(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function mc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gc=(t,e,n)=>t??e??n,sw=Zc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=tt(Io),s=Ze(()=>t.route||r.value),i=tt(hc,0),o=Ze(()=>{let c=ge(i);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ze(()=>s.value.matched[o.value]);_s(hc,Ze(()=>o.value+1)),_s(ZE,a),_s(Io,s);const l=Dt();return mr(()=>[l.value,a.value,t.name],([c,u,d],[p,m,b])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Jn(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(R=>R(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,d=a.value,p=d&&d.components[u];if(!p)return _c(n.default,{Component:p,route:c});const m=d.props[u],b=m?m===!0?c.params:typeof m=="function"?m(c):m:null,L=Ru(p,re({},b,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return _c(n.default,{Component:L,route:c})||L}}});function _c(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const iw=sw;function ow(t){const e=zE(t.routes,t),n=t.parseQuery||QE,r=t.stringifyQuery||dc,s=t.history,i=or(),o=or(),a=or(),l=Wd(Ht);let c=Ht;Vn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ji.bind(null,y=>""+y),d=ji.bind(null,vE),p=ji.bind(null,$r);function m(y,C){let A,D;return ld(y)?(A=e.getRecordMatcher(y),D=C):D=y,e.addRoute(D,A)}function b(y){const C=e.getRecordMatcher(y);C&&e.removeRoute(C)}function R(){return e.getRoutes().map(y=>y.record)}function L(y){return!!e.getRecordMatcher(y)}function V(y,C){if(C=re({},C||l.value),typeof y=="string"){const h=Bi(n,y,C.path),g=e.resolve({path:h.path},C),v=s.createHref(h.fullPath);return re(h,g,{params:p(g.params),hash:$r(h.hash),redirectedFrom:void 0,href:v})}let A;if(y.path!=null)A=re({},y,{path:Bi(n,y.path,C.path).path});else{const h=re({},y.params);for(const g in h)h[g]==null&&delete h[g];A=re({},y,{params:d(h)}),C.params=d(C.params)}const D=e.resolve(A,C),te=y.hash||"";D.params=u(p(D.params));const fe=bE(r,re({},y,{hash:gE(te),path:D.path})),f=s.createHref(fe);return re({fullPath:fe,hash:te,query:r===dc?XE(y.query):y.query||{}},D,{redirectedFrom:void 0,href:f})}function k(y){return typeof y=="string"?Bi(n,y,l.value.path):re({},y)}function N(y,C){if(c!==y)return Yn(8,{from:C,to:y})}function O(y){return Y(y)}function q(y){return O(re(k(y),{replace:!0}))}function he(y){const C=y.matched[y.matched.length-1];if(C&&C.redirect){const{redirect:A}=C;let D=typeof A=="function"?A(y):A;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=k(D):{path:D},D.params={}),re({query:y.query,hash:y.hash,params:D.path!=null?{}:y.params},D)}}function Y(y,C){const A=c=V(y),D=l.value,te=y.state,fe=y.force,f=y.replace===!0,h=he(A);if(h)return Y(re(k(h),{state:typeof h=="object"?re({},te,h.state):te,force:fe,replace:f}),C||A);const g=A;g.redirectedFrom=C;let v;return!fe&&IE(r,D,A)&&(v=Yn(16,{to:g,from:D}),lt(D,D,!0,!1)),(v?Promise.resolve(v):le(g,D)).catch(_=>bt(_)?bt(_,2)?_:$t(_):X(_,g,D)).then(_=>{if(_){if(bt(_,2))return Y(re({replace:f},k(_.to),{state:typeof _.to=="object"?re({},te,_.to.state):te,force:fe}),C||g)}else _=Be(g,D,!0,f,te);return Oe(g,D,_),_})}function K(y,C){const A=N(y,C);return A?Promise.reject(A):Promise.resolve()}function z(y){const C=Pn.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(y):y()}function le(y,C){let A;const[D,te,fe]=aw(y,C);A=Hi(D.reverse(),"beforeRouteLeave",y,C);for(const h of D)h.leaveGuards.forEach(g=>{A.push(Kt(g,y,C))});const f=K.bind(null,y,C);return A.push(f),Qe(A).then(()=>{A=[];for(const h of i.list())A.push(Kt(h,y,C));return A.push(f),Qe(A)}).then(()=>{A=Hi(te,"beforeRouteUpdate",y,C);for(const h of te)h.updateGuards.forEach(g=>{A.push(Kt(g,y,C))});return A.push(f),Qe(A)}).then(()=>{A=[];for(const h of fe)if(h.beforeEnter)if(ot(h.beforeEnter))for(const g of h.beforeEnter)A.push(Kt(g,y,C));else A.push(Kt(h.beforeEnter,y,C));return A.push(f),Qe(A)}).then(()=>(y.matched.forEach(h=>h.enterCallbacks={}),A=Hi(fe,"beforeRouteEnter",y,C,z),A.push(f),Qe(A))).then(()=>{A=[];for(const h of o.list())A.push(Kt(h,y,C));return A.push(f),Qe(A)}).catch(h=>bt(h,8)?h:Promise.reject(h))}function Oe(y,C,A){a.list().forEach(D=>z(()=>D(y,C,A)))}function Be(y,C,A,D,te){const fe=N(y,C);if(fe)return fe;const f=C===Ht,h=Vn?history.state:{};A&&(D||f?s.replace(y.fullPath,re({scroll:f&&h&&h.scroll},te)):s.push(y.fullPath,te)),l.value=y,lt(y,C,A,f),$t()}let Me;function cn(){Me||(Me=s.listen((y,C,A)=>{if(!rs.listening)return;const D=V(y),te=he(D);if(te){Y(re(te,{replace:!0}),D).catch(Ir);return}c=D;const fe=l.value;Vn&&kE(rc(fe.fullPath,A.delta),_i()),le(D,fe).catch(f=>bt(f,12)?f:bt(f,2)?(Y(f.to,D).then(h=>{bt(h,20)&&!A.delta&&A.type===jr.pop&&s.go(-1,!1)}).catch(Ir),Promise.reject()):(A.delta&&s.go(-A.delta,!1),X(f,D,fe))).then(f=>{f=f||Be(D,fe,!1),f&&(A.delta&&!bt(f,8)?s.go(-A.delta,!1):A.type===jr.pop&&bt(f,20)&&s.go(-1,!1)),Oe(D,fe,f)}).catch(Ir)}))}let Ft=or(),ce=or(),W;function X(y,C,A){$t(y);const D=ce.list();return D.length?D.forEach(te=>te(y,C,A)):console.error(y),Promise.reject(y)}function Et(){return W&&l.value!==Ht?Promise.resolve():new Promise((y,C)=>{Ft.add([y,C])})}function $t(y){return W||(W=!y,cn(),Ft.list().forEach(([C,A])=>y?A(y):C()),Ft.reset()),y}function lt(y,C,A,D){const{scrollBehavior:te}=t;if(!Vn||!te)return Promise.resolve();const fe=!A&&NE(rc(y.fullPath,0))||(D||!A)&&history.state&&history.state.scroll||null;return jo().then(()=>te(y,C,fe)).then(f=>f&&OE(f)).catch(f=>X(f,y,C))}const Le=y=>s.go(y);let Rn;const Pn=new Set,rs={currentRoute:l,listening:!0,addRoute:m,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:R,resolve:V,options:t,push:O,replace:q,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:Et,install(y){const C=this;y.component("RouterLink",tw),y.component("RouterView",iw),y.config.globalProperties.$router=C,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ge(l)}),Vn&&!Rn&&l.value===Ht&&(Rn=!0,O(s.location).catch(te=>{}));const A={};for(const te in Ht)Object.defineProperty(A,te,{get:()=>l.value[te],enumerable:!0});y.provide(yi,C),y.provide(ba,qc(A)),y.provide(Io,l);const D=y.unmount;Pn.add(y),y.unmount=function(){Pn.delete(y),Pn.size<1&&(c=Ht,Me&&Me(),Me=null,l.value=Ht,Rn=!1,W=!1),D()}}};function Qe(y){return y.reduce((C,A)=>C.then(()=>z(A)),Promise.resolve())}return rs}function aw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Jn(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Jn(c,l))||s.push(l))}return[n,r,s]}function lw(){return tt(yi)}function cw(t){return tt(ba)}const uw="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let fw=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+=uw[n[t]&63];return e};const zs=Du("database",{state:()=>({documents:[],loadingDoc:!1,error:null}),actions:{async getUrls(){if(this.documents.length===0){this.loadingDoc=!0;try{const t=Xv(Xl(ir,"urls"),Zv("user","==",At.currentUser.uid));(await tE(t)).forEach(n=>{this.documents.push({id:n.id,...n.data()})})}catch(t){console.log(t)}finally{this.loadingDoc=!1}}},async addUrl(t){try{const e={name:t,short:fw(),user:At.currentUser.uid},n=await sE(Xl(ir,"urls"),e);this.documents.push({...e,id:n.id})}catch(e){console.log(e)}},async readUrl(t){try{const e=Ss(ir,"urls",t),n=await $i(e);if(!n.exists())throw new Error("No existe el documento");if(n.data().user!==At.currentUser.uid)throw new Error("No tienes permisos para eliminar este documento");return n.data().name}catch(e){console.log(e.message)}finally{}},async updateUrl(t,e){try{const n=Ss(ir,"urls",t),r=await $i(n);if(!r.exists())throw new Error("No existe el documento");if(r.data().user!==At.currentUser.uid)throw new Error("No tienes permisos para eliminar este documento");await nE(n,{name:e}),this.documents=this.documents.map(s=>s.id===t?{...s,name:e}:s),Sr.push("/")}catch(n){console.log(n.message)}finally{}},async deleteUrl(t){try{const e=Ss(ir,"urls",t),n=await $i(e);if(!n.exists())throw new Error("No existe el documento");if(n.data().user!==At.currentUser.uid)throw new Error("No tienes permisos para eliminar este documento");await rE(e),this.documents=this.documents.filter(r=>r.id!==t)}catch(e){console.log(e.message)}finally{}}}}),dw={key:0},hw={key:1,class:"lista"},pw=["onClick"],mw=["onClick"],gw={__name:"Home",setup(t){const e=ns(),n=zs(),r=lw();n.getUrls();const s=Dt(""),i=()=>{n.addUrl(s.value)};return(o,a)=>{var l;return Re(),Xe("div",null,[a[4]||(a[4]=ie("h1",null,"Home ",-1)),ie("p",null,ar((l=ge(e).userData)==null?void 0:l.email),1),ie("form",{onSubmit:ii(i,["prevent"])},[Bn(ie("input",{type:"text",placeholder:"Ingrese la URL","onUpdate:modelValue":a[0]||(a[0]=c=>s.value=c)},null,512),[[qn,s.value]]),a[1]||(a[1]=ie("button",{type:"submit"},"Agregar",-1))],32),ge(n).loadingDoc?(Re(),Xe("p",dw,"loading docs...")):(Re(),Xe("ul",hw,[(Re(!0),Xe(dt,null,vh(ge(n).documents,c=>(Re(),Xe("li",{key:c.id},[St(ar(c.id)+" ",1),a[2]||(a[2]=ie("br",null,null,-1)),St(" "+ar(c.name)+" ",1),a[3]||(a[3]=ie("br",null,null,-1)),St(" "+ar(c.short)+" ",1),ie("button",{onClick:u=>ge(n).deleteUrl(c.id)},"Eliminar",8,pw),ie("button",{onClick:u=>ge(r).push(`/edit/${c.id}`)},"Editar",8,mw)]))),128))]))])}}},_w=["disabled"],yw={__name:"Login",setup(t){const e=ns(),n=Dt(""),r=Dt(""),s=async()=>{if(!n.value||r.value.length<6)return alert("Campos vacios");await e.loginUser(n.value,r.value)};return(i,o)=>(Re(),Xe("div",null,[o[2]||(o[2]=ie("h1",null,"Login",-1)),ie("form",{onSubmit:ii(s,["prevent"])},[Bn(ie("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a)},null,512),[[qn,n.value,void 0,{trim:!0}]]),Bn(ie("input",{type:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a)},null,512),[[qn,r.value,void 0,{trim:!0}]]),ie("button",{type:"submit",disabled:ge(e).loadingUser},"Acceso",8,_w)],32)]))}},vw=["disabled"],Ew={__name:"Register",setup(t){const e=ns(),n=Dt(""),r=Dt(""),s=async()=>{if(!n.value||r.value.length<6)return alert("Campos vacios");await e.registerUser(n.value,r.value)};return(i,o)=>(Re(),Xe("div",null,[o[2]||(o[2]=ie("h1",null,"Register",-1)),ie("form",{onSubmit:ii(s,["prevent"])},[Bn(ie("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a)},null,512),[[qn,n.value,void 0,{trim:!0}]]),Bn(ie("input",{type:"password",name:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a)},null,512),[[qn,r.value,void 0,{trim:!0}]]),ie("button",{type:"submit",disabled:ge(e).loadingUser},"Crear usuario",8,vw)],32)]))}},ww={__name:"Editar",setup(t){const e=cw(),n=zs(),r=()=>{n.updateUrl(e.params.id,s.value)},s=Dt("");return ru(async()=>{s.value=await n.readUrl(e.params.id)}),(i,o)=>(Re(),Xe("div",null,[o[2]||(o[2]=ie("h1",null,"Editar",-1)),ie("form",{onSubmit:ii(r,["prevent"])},[Bn(ie("input",{type:"text",placeholder:"Ingrese la URL","onUpdate:modelValue":o[0]||(o[0]=a=>s.value=a)},null,512),[[qn,s.value]]),o[1]||(o[1]=ie("button",{type:"submit"},"Editar",-1))],32)]))}},yc=async(t,e,n)=>{const r=ns();r.loadingSession=!0,await r.currentUser()?n():n("/login"),r.loadingSession=!1},bw=[{path:"/",component:gw,beforeEnter:[yc]},{path:"/edit/:id",component:ww,beforeEnter:[yc]},{path:"/login",component:yw},{path:"/register",component:Ew}],Sr=ow({routes:bw,history:ME()}),ns=Du("userStore",{state:()=>({userData:null,loadingUser:!1,loadingSession:!1}),actions:{async registerUser(t,e){this.loadingUser=!0;try{const{user:n}=await p_(At,t,e);this.userData={email:n.email,uid:n.uid},Sr.push("/")}catch(n){console.log(n)}finally{this.loadingUser=!1}},async loginUser(t,e){this.loadingUser=!0;try{const{user:n}=await m_(At,t,e);this.userData={email:n.email,uid:n.uid},Sr.push("/")}catch(n){console.log(n)}finally{this.loadingUser=!1}},async logOutUser(){zs().$reset();try{await v_(At),this.userData=null,Sr.push("/login")}catch{console.log(err)}},currentUser(){return new Promise((t,e)=>{y_(At,n=>{n?this.userData={email:n.email,uid:n.uid}:(this.userData=null,zs().$reset()),t(n)},n=>{console.log("error"),e(n)})})}}}),Iw={key:0},Tw={key:1},Sw={__name:"App",setup(t){const e=ns();return(n,r)=>{const s=Da("router-link"),i=Da("router-view");return Re(),Xe("div",null,[ge(e).loadingSession?(Re(),Xe("div",Tw,r[6]||(r[6]=[ie("p",null,"Loading...",-1)]))):(Re(),Xe("div",Iw,[ie("nav",null,[ge(e).userData?(Re(),ys(s,{key:0,to:"/"},{default:gs(()=>r[1]||(r[1]=[St("Home")])),_:1})):us("",!0),r[4]||(r[4]=St(" | ")),ge(e).userData?us("",!0):(Re(),ys(s,{key:1,to:"/login"},{default:gs(()=>r[2]||(r[2]=[St("Login")])),_:1})),r[5]||(r[5]=St(" | ")),ge(e).userData?us("",!0):(Re(),ys(s,{key:2,to:"/register"},{default:gs(()=>r[3]||(r[3]=[St("Register")])),_:1})),ge(e).userData?(Re(),Xe("button",{key:3,onClick:r[0]||(r[0]=(...o)=>ge(e).logOutUser&&ge(e).logOutUser(...o))},"Logout")):us("",!0)])])),je(i)])}}};Vp(Sw).use(Sr).use(Up()).mount("#app");
