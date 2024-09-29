var Vv=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Tx=Vv((nn,rn)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function fc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const me={},Nr=[],Bt=()=>{},Fv=()=>!1,zs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),dc=t=>t.startsWith("onUpdate:"),Ne=Object.assign,hc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jv=Object.prototype.hasOwnProperty,ce=(t,e)=>jv.call(t,e),J=Array.isArray,Dr=t=>Ws(t)==="[object Map]",Rh=t=>Ws(t)==="[object Set]",te=t=>typeof t=="function",Ae=t=>typeof t=="string",jn=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",xh=t=>(_e(t)||te(t))&&te(t.then)&&te(t.catch),Oh=Object.prototype.toString,Ws=t=>Oh.call(t),Uv=t=>Ws(t).slice(8,-1),kh=t=>Ws(t)==="[object Object]",pc=t=>Ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ti=fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bv=/-(\w)/g,Pt=qs(t=>t.replace(Bv,(e,n)=>n?n.toUpperCase():"")),Hv=/\B([A-Z])/g,_r=qs(t=>t.replace(Hv,"-$1").toLowerCase()),Gs=qs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sa=qs(t=>t?`on${Gs(t)}`:""),Vn=(t,e)=>!Object.is(t,e),ts=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Nh=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},cl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},zv=t=>{const e=Ae(t)?Number(t):NaN;return isNaN(e)?t:e};let Au;const Dh=()=>Au||(Au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gc(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ae(r)?Kv(r):gc(r);if(i)for(const o in i)e[o]=i[o]}return e}else if(Ae(t)||_e(t))return t}const Wv=/;(?![^(]*\))/g,qv=/:([^]+)/,Gv=/\/\*[^]*?\*\//g;function Kv(t){const e={};return t.replace(Gv,"").split(Wv).forEach(n=>{if(n){const r=n.split(qv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mc(t){let e="";if(Ae(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const r=mc(t[n]);r&&(e+=r+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Xv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yv=fc(Xv);function Mh(t){return!!t||t===""}const $h=t=>!!(t&&t.__v_isRef===!0),yi=t=>Ae(t)?t:t==null?"":J(t)||_e(t)&&(t.toString===Oh||!te(t.toString))?$h(t)?yi(t.value):JSON.stringify(t,Lh,2):String(t),Lh=(t,e)=>$h(e)?Lh(t,e.value):Dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],o)=>(n[Ta(r,o)+" =>"]=i,n),{})}:Rh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ta(n))}:jn(e)?Ta(e):_e(e)&&!J(e)&&!kh(e)?String(e):e,Ta=(t,e="")=>{var n;return jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ke;class Vh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ke,!e&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ke;try{return Ke=this,e()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Fh(t){return new Vh(t)}function jh(){return Ke}function Jv(t,e=!1){Ke&&Ke.cleanups.push(t)}let pe;const Ia=new WeakSet;class Uh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Ke&&Ke.active&&Ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ia.has(this)&&(Ia.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=Ii,Ii=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pu(this),Hh(this);const e=pe,n=Ct;pe=this,Ct=!0;try{return this.fn()}finally{zh(this),pe=e,Ct=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_c(e);this.deps=this.depsTail=void 0,Pu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ia.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ul(this)&&this.run()}get dirty(){return ul(this)}}let Bh=0,Ii;function vc(){Bh++}function yc(){if(--Bh>0)return;let t;for(;Ii;){let e=Ii;for(Ii=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Hh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function zh(t){let e,n=t.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),_c(r),Qv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function ul(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&Wh(e.dep.computed)||e.dep.version!==e.version)return!0;return!!t._dirty}function Wh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Hi))return;t.globalVersion=Hi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!ul(t)){t.flags&=-3;return}const n=pe,r=Ct;pe=t,Ct=!0;try{Hh(t);const i=t.fn(t._value);(e.version===0||Vn(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{pe=n,Ct=r,zh(t),t.flags&=-3}}function _c(t){const{dep:e,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let i=e.computed.deps;i;i=i.nextDep)_c(i)}}function Qv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ct=!0;const qh=[];function Un(){qh.push(Ct),Ct=!1}function Bn(){const t=qh.pop();Ct=t===void 0?!0:t}function Pu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=pe;pe=void 0;try{e()}finally{pe=n}}}let Hi=0;class bc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!pe||!Ct||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink={dep:this,sub:pe,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,pe.flags&4&&Gh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=r)}return n}trigger(e){this.version++,Hi++,this.notify(e)}notify(e){vc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{yc()}}}function Gh(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Gh(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const ms=new WeakMap,sr=Symbol(""),fl=Symbol(""),zi=Symbol("");function ze(t,e,n){if(Ct&&pe){let r=ms.get(t);r||ms.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=new bc),i.track()}}function on(t,e,n,r,i,o){const s=ms.get(t);if(!s){Hi++;return}const a=l=>{l&&l.trigger()};if(vc(),e==="clear")s.forEach(a);else{const l=J(t),c=l&&pc(n);if(l&&n==="length"){const u=Number(r);s.forEach((f,d)=>{(d==="length"||d===zi||!jn(d)&&d>=u)&&a(f)})}else switch(n!==void 0&&a(s.get(n)),c&&a(s.get(zi)),e){case"add":l?c&&a(s.get("length")):(a(s.get(sr)),Dr(t)&&a(s.get(fl)));break;case"delete":l||(a(s.get(sr)),Dr(t)&&a(s.get(fl)));break;case"set":Dr(t)&&a(s.get(sr));break}}yc()}function Zv(t,e){var n;return(n=ms.get(t))==null?void 0:n.get(e)}function Tr(t){const e=le(t);return e===t?e:(ze(e,"iterate",zi),bt(t)?e:e.map(Be))}function Ks(t){return ze(t=le(t),"iterate",zi),t}const ey={__proto__:null,[Symbol.iterator](){return Ca(this,Symbol.iterator,Be)},concat(...t){return Tr(this).concat(...t.map(e=>J(e)?Tr(e):e))},entries(){return Ca(this,"entries",t=>(t[1]=Be(t[1]),t))},every(t,e){return qt(this,"every",t,e,void 0,arguments)},filter(t,e){return qt(this,"filter",t,e,n=>n.map(Be),arguments)},find(t,e){return qt(this,"find",t,e,Be,arguments)},findIndex(t,e){return qt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return qt(this,"findLast",t,e,Be,arguments)},findLastIndex(t,e){return qt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return qt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Aa(this,"includes",t)},indexOf(...t){return Aa(this,"indexOf",t)},join(t){return Tr(this).join(t)},lastIndexOf(...t){return Aa(this,"lastIndexOf",t)},map(t,e){return qt(this,"map",t,e,void 0,arguments)},pop(){return fi(this,"pop")},push(...t){return fi(this,"push",t)},reduce(t,...e){return Ru(this,"reduce",t,e)},reduceRight(t,...e){return Ru(this,"reduceRight",t,e)},shift(){return fi(this,"shift")},some(t,e){return qt(this,"some",t,e,void 0,arguments)},splice(...t){return fi(this,"splice",t)},toReversed(){return Tr(this).toReversed()},toSorted(t){return Tr(this).toSorted(t)},toSpliced(...t){return Tr(this).toSpliced(...t)},unshift(...t){return fi(this,"unshift",t)},values(){return Ca(this,"values",Be)}};function Ca(t,e,n){const r=Ks(t),i=r[e]();return r!==t&&!bt(t)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=n(o.value)),o}),i}const ty=Array.prototype;function qt(t,e,n,r,i,o){const s=Ks(t),a=s!==t&&!bt(t),l=s[e];if(l!==ty[e]){const f=l.apply(t,o);return a?Be(f):f}let c=n;s!==t&&(a?c=function(f,d){return n.call(this,Be(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(s,c,r);return a&&i?i(u):u}function Ru(t,e,n,r){const i=Ks(t);let o=n;return i!==t&&(bt(t)?n.length>3&&(o=function(s,a,l){return n.call(this,s,a,l,t)}):o=function(s,a,l){return n.call(this,s,Be(a),l,t)}),i[e](o,...r)}function Aa(t,e,n){const r=le(t);ze(r,"iterate",zi);const i=r[e](...n);return(i===-1||i===!1)&&Tc(n[0])?(n[0]=le(n[0]),r[e](...n)):i}function fi(t,e,n=[]){Un(),vc();const r=le(t)[e].apply(t,n);return yc(),Bn(),r}const ny=fc("__proto__,__v_isRef,__isVue"),Kh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jn));function ry(t){jn(t)||(t=String(t));const e=le(this);return ze(e,"has",t),e.hasOwnProperty(t)}class Xh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(i?o?my:Zh:o?Qh:Jh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=J(e);if(!i){let l;if(s&&(l=ey[n]))return l;if(n==="hasOwnProperty")return ry}const a=Reflect.get(e,n,Ie(e)?e:r);return(jn(n)?Kh.has(n):ny(n))||(i||ze(e,"get",n),o)?a:Ie(a)?s&&pc(n)?a:a.value:_e(a)?i?tp(a):Hn(a):a}}class Yh extends Xh{constructor(e=!1){super(!1,e)}set(e,n,r,i){let o=e[n];if(!this._isShallow){const l=fr(o);if(!bt(r)&&!fr(r)&&(o=le(o),r=le(r)),!J(e)&&Ie(o)&&!Ie(r))return l?!1:(o.value=r,!0)}const s=J(e)&&pc(n)?Number(n)<e.length:ce(e,n),a=Reflect.set(e,n,r,Ie(e)?e:i);return e===le(i)&&(s?Vn(r,o)&&on(e,"set",n,r):on(e,"add",n,r)),a}deleteProperty(e,n){const r=ce(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&on(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!jn(n)||!Kh.has(n))&&ze(e,"has",n),r}ownKeys(e){return ze(e,"iterate",J(e)?"length":sr),Reflect.ownKeys(e)}}class iy extends Xh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const oy=new Yh,sy=new iy,ay=new Yh(!0),wc=t=>t,Xs=t=>Reflect.getPrototypeOf(t);function $o(t,e,n=!1,r=!1){t=t.__v_raw;const i=le(t),o=le(e);n||(Vn(e,o)&&ze(i,"get",e),ze(i,"get",o));const{has:s}=Xs(i),a=r?wc:n?Cc:Be;if(s.call(i,e))return a(t.get(e));if(s.call(i,o))return a(t.get(o));t!==i&&t.get(e)}function Lo(t,e=!1){const n=this.__v_raw,r=le(n),i=le(t);return e||(Vn(t,i)&&ze(r,"has",t),ze(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Vo(t,e=!1){return t=t.__v_raw,!e&&ze(le(t),"iterate",sr),Reflect.get(t,"size",t)}function xu(t,e=!1){!e&&!bt(t)&&!fr(t)&&(t=le(t));const n=le(this);return Xs(n).has.call(n,t)||(n.add(t),on(n,"add",t,t)),this}function Ou(t,e,n=!1){!n&&!bt(e)&&!fr(e)&&(e=le(e));const r=le(this),{has:i,get:o}=Xs(r);let s=i.call(r,t);s||(t=le(t),s=i.call(r,t));const a=o.call(r,t);return r.set(t,e),s?Vn(e,a)&&on(r,"set",t,e):on(r,"add",t,e),this}function ku(t){const e=le(this),{has:n,get:r}=Xs(e);let i=n.call(e,t);i||(t=le(t),i=n.call(e,t)),r&&r.call(e,t);const o=e.delete(t);return i&&on(e,"delete",t,void 0),o}function Nu(){const t=le(this),e=t.size!==0,n=t.clear();return e&&on(t,"clear",void 0,void 0),n}function Fo(t,e){return function(r,i){const o=this,s=o.__v_raw,a=le(s),l=e?wc:t?Cc:Be;return!t&&ze(a,"iterate",sr),s.forEach((c,u)=>r.call(i,l(c),l(u),o))}}function jo(t,e,n){return function(...r){const i=this.__v_raw,o=le(i),s=Dr(o),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,c=i[t](...r),u=n?wc:e?Cc:Be;return!e&&ze(o,"iterate",l?fl:sr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function yn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ly(){const t={get(o){return $o(this,o)},get size(){return Vo(this)},has:Lo,add:xu,set:Ou,delete:ku,clear:Nu,forEach:Fo(!1,!1)},e={get(o){return $o(this,o,!1,!0)},get size(){return Vo(this)},has:Lo,add(o){return xu.call(this,o,!0)},set(o,s){return Ou.call(this,o,s,!0)},delete:ku,clear:Nu,forEach:Fo(!1,!0)},n={get(o){return $o(this,o,!0)},get size(){return Vo(this,!0)},has(o){return Lo.call(this,o,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Fo(!0,!1)},r={get(o){return $o(this,o,!0,!0)},get size(){return Vo(this,!0)},has(o){return Lo.call(this,o,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Fo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=jo(o,!1,!1),n[o]=jo(o,!0,!1),e[o]=jo(o,!1,!0),r[o]=jo(o,!0,!0)}),[t,n,e,r]}const[cy,uy,fy,dy]=ly();function Ec(t,e){const n=e?t?dy:fy:t?uy:cy;return(r,i,o)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ce(n,i)&&i in r?n:r,i,o)}const hy={get:Ec(!1,!1)},py={get:Ec(!1,!0)},gy={get:Ec(!0,!1)},Jh=new WeakMap,Qh=new WeakMap,Zh=new WeakMap,my=new WeakMap;function vy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yy(t){return t.__v_skip||!Object.isExtensible(t)?0:vy(Uv(t))}function Hn(t){return fr(t)?t:Sc(t,!1,oy,hy,Jh)}function ep(t){return Sc(t,!1,ay,py,Qh)}function tp(t){return Sc(t,!0,sy,gy,Zh)}function Sc(t,e,n,r,i){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=i.get(t);if(o)return o;const s=yy(t);if(s===0)return t;const a=new Proxy(t,s===2?r:n);return i.set(t,a),a}function Dn(t){return fr(t)?Dn(t.__v_raw):!!(t&&t.__v_isReactive)}function fr(t){return!!(t&&t.__v_isReadonly)}function bt(t){return!!(t&&t.__v_isShallow)}function Tc(t){return t?!!t.__v_raw:!1}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function Ic(t){return!ce(t,"__v_skip")&&Object.isExtensible(t)&&Nh(t,"__v_skip",!0),t}const Be=t=>_e(t)?Hn(t):t,Cc=t=>_e(t)?tp(t):t;function Ie(t){return t?t.__v_isRef===!0:!1}function He(t){return np(t,!1)}function It(t){return np(t,!0)}function np(t,e){return Ie(t)?t:new _y(t,e)}class _y{constructor(e,n){this.dep=new bc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:le(e),this._value=n?e:Be(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||bt(e)||fr(e);e=r?e:le(e),Vn(e,n)&&(this._rawValue=e,this._value=r?e:Be(e),this.dep.trigger())}}function Se(t){return Ie(t)?t.value:t}const by={get:(t,e,n)=>e==="__v_raw"?t:Se(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ie(i)&&!Ie(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function rp(t){return Dn(t)?t:new Proxy(t,by)}function wy(t){const e=J(t)?new Array(t.length):{};for(const n in t)e[n]=Sy(t,n);return e}class Ey{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Zv(le(this._object),this._key)}}function Sy(t,e,n){const r=t[e];return Ie(r)?r:new Ey(t,e,n)}class Ty{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new bc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hi-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){this.flags|=16,pe!==this&&this.dep.notify()}get value(){const e=this.dep.track();return Wh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Iy(t,e,n=!1){let r,i;return te(t)?r=t:(r=t.get,i=t.set),new Ty(r,i,n)}const Uo={},vs=new WeakMap;let Zn;function Cy(t,e=!1,n=Zn){if(n){let r=vs.get(n);r||vs.set(n,r=[]),r.push(t)}}function Ay(t,e,n=me){const{immediate:r,deep:i,once:o,scheduler:s,augmentJob:a,call:l}=n,c=T=>i?T:bt(T)||i===!1||i===0?Jt(T,1):Jt(T);let u,f,d,g,v=!1,_=!1;if(Ie(t)?(f=()=>t.value,v=bt(t)):Dn(t)?(f=()=>c(t),v=!0):J(t)?(_=!0,v=t.some(T=>Dn(T)||bt(T)),f=()=>t.map(T=>{if(Ie(T))return T.value;if(Dn(T))return c(T);if(te(T))return l?l(T,2):T()})):te(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Un();try{d()}finally{Bn()}}const T=Zn;Zn=u;try{return l?l(t,3,[g]):t(g)}finally{Zn=T}}:f=Bt,e&&i){const T=f,N=i===!0?1/0:i;f=()=>Jt(T(),N)}const C=jh(),S=()=>{u.stop(),C&&hc(C.effects,u)};if(o)if(e){const T=e;e=(...N)=>{T(...N),S()}}else{const T=f;f=()=>{T(),S()}}let E=_?new Array(t.length).fill(Uo):Uo;const I=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const N=u.run();if(i||v||(_?N.some((U,m)=>Vn(U,E[m])):Vn(N,E))){d&&d();const U=Zn;Zn=u;try{const m=[N,E===Uo?void 0:_&&E[0]===Uo?[]:E,g];l?l(e,3,m):e(...m),E=N}finally{Zn=U}}}else u.run()};return a&&a(I),u=new Uh(f),u.scheduler=s?()=>s(I,!1):I,g=T=>Cy(T,!1,u),d=u.onStop=()=>{const T=vs.get(u);if(T){if(l)l(T,4);else for(const N of T)N();vs.delete(u)}},e?r?I(!0):E=u.run():s?s(I.bind(null,!0),!0):u.run(),S.pause=u.pause.bind(u),S.resume=u.resume.bind(u),S.stop=S,S}function Jt(t,e=1/0,n){if(e<=0||!_e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ie(t))Jt(t.value,e,n);else if(J(t))for(let r=0;r<t.length;r++)Jt(t[r],e,n);else if(Rh(t)||Dr(t))t.forEach(r=>{Jt(r,e,n)});else if(kh(t)){for(const r in t)Jt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Jt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mo(t,e,n,r){try{return r?t(...r):t()}catch(i){Ys(i,e,n)}}function Rt(t,e,n,r){if(te(t)){const i=mo(t,e,n,r);return i&&xh(i)&&i.catch(o=>{Ys(o,e,n)}),i}if(J(t)){const i=[];for(let o=0;o<t.length;o++)i.push(Rt(t[o],e,n,r));return i}}function Ys(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||me;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(o){Un(),mo(o,null,10,[t,l,c]),Bn();return}}Py(t,n,i,r,s)}function Py(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}let Wi=!1,dl=!1;const Xe=[];let $t=0;const Mr=[];let Tn=null,Cr=0;const ip=Promise.resolve();let Ac=null;function Zr(t){const e=Ac||ip;return t?e.then(this?t.bind(this):t):e}function Ry(t){let e=Wi?$t+1:0,n=Xe.length;for(;e<n;){const r=e+n>>>1,i=Xe[r],o=qi(i);o<t||o===t&&i.flags&2?e=r+1:n=r}return e}function Pc(t){if(!(t.flags&1)){const e=qi(t),n=Xe[Xe.length-1];!n||!(t.flags&2)&&e>=qi(n)?Xe.push(t):Xe.splice(Ry(e),0,t),t.flags|=1,op()}}function op(){!Wi&&!dl&&(dl=!0,Ac=ip.then(ap))}function xy(t){J(t)?Mr.push(...t):Tn&&t.id===-1?Tn.splice(Cr+1,0,t):t.flags&1||(Mr.push(t),t.flags|=1),op()}function Du(t,e,n=Wi?$t+1:0){for(;n<Xe.length;n++){const r=Xe[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Xe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function sp(t){if(Mr.length){const e=[...new Set(Mr)].sort((n,r)=>qi(n)-qi(r));if(Mr.length=0,Tn){Tn.push(...e);return}for(Tn=e,Cr=0;Cr<Tn.length;Cr++){const n=Tn[Cr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tn=null,Cr=0}}const qi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ap(t){dl=!1,Wi=!0;try{for($t=0;$t<Xe.length;$t++){const e=Xe[$t];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),mo(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;$t<Xe.length;$t++){const e=Xe[$t];e&&(e.flags&=-2)}$t=0,Xe.length=0,sp(),Wi=!1,Ac=null,(Xe.length||Mr.length)&&ap()}}let Qe=null,lp=null;function ys(t){const e=Qe;return Qe=t,lp=t&&t.type.__scopeId||null,e}function _i(t,e=Qe,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Wu(-1);const o=ys(e);let s;try{s=t(...i)}finally{ys(o),r._d&&Wu(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function jr(t,e){if(Qe===null)return t;const n=ta(Qe),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,s,a,l=me]=e[i];o&&(te(o)&&(o={mounted:o,updated:o}),o.deep&&Jt(s),r.push({dir:o,instance:n,value:s,oldValue:void 0,arg:a,modifiers:l}))}return t}function Kn(t,e,n,r){const i=t.dirs,o=e&&e.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let l=a.dir[r];l&&(Un(),Rt(l,n,8,[t.el,a,t,e]),Bn())}}const Oy=Symbol("_vte"),cp=t=>t.__isTeleport,In=Symbol("_leaveCb"),Bo=Symbol("_enterCb");function ky(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ei(()=>{t.isMounted=!0}),br(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],up={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},fp=t=>{const e=t.subTree;return e.component?fp(e.component):e},Ny={name:"BaseTransition",props:up,setup(t,{slots:e}){const n=vo(),r=ky();return()=>{const i=e.default&&pp(e.default(),!0);if(!i||!i.length)return;const o=dp(i),s=le(t),{mode:a}=s;if(r.isLeaving)return Pa(o);const l=Mu(o);if(!l)return Pa(o);let c=hl(l,s,r,n,d=>c=d);l.type!==Ye&&Gi(l,c);const u=n.subTree,f=u&&Mu(u);if(f&&f.type!==Ye&&!nr(l,f)&&fp(n).type!==Ye){const d=hl(f,s,r,n);if(Gi(f,d),a==="out-in"&&l.type!==Ye)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave},Pa(o);a==="in-out"&&l.type!==Ye&&(d.delayLeave=(g,v,_)=>{const C=hp(r,f);C[String(f.key)]=f,g[In]=()=>{v(),g[In]=void 0,delete c.delayedLeave},c.delayedLeave=_})}return o}}};function dp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ye){e=n;break}}return e}const Dy=Ny;function hp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function hl(t,e,n,r,i){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:g,onAfterLeave:v,onLeaveCancelled:_,onBeforeAppear:C,onAppear:S,onAfterAppear:E,onAppearCancelled:I}=e,T=String(t.key),N=hp(n,t),U=(A,z)=>{A&&Rt(A,r,9,z)},m=(A,z)=>{const ee=z[1];U(A,z),J(A)?A.every(V=>V.length<=1)&&ee():A.length<=1&&ee()},R={mode:s,persisted:a,beforeEnter(A){let z=l;if(!n.isMounted)if(o)z=C||l;else return;A[In]&&A[In](!0);const ee=N[T];ee&&nr(t,ee)&&ee.el[In]&&ee.el[In](),U(z,[A])},enter(A){let z=c,ee=u,V=f;if(!n.isMounted)if(o)z=S||c,ee=E||u,V=I||f;else return;let oe=!1;const be=A[Bo]=X=>{oe||(oe=!0,X?U(V,[A]):U(ee,[A]),R.delayedLeave&&R.delayedLeave(),A[Bo]=void 0)};z?m(z,[A,be]):be()},leave(A,z){const ee=String(t.key);if(A[Bo]&&A[Bo](!0),n.isUnmounting)return z();U(d,[A]);let V=!1;const oe=A[In]=be=>{V||(V=!0,z(),be?U(_,[A]):U(v,[A]),A[In]=void 0,N[ee]===t&&delete N[ee])};N[ee]=t,g?m(g,[A,oe]):oe()},clone(A){const z=hl(A,e,n,r,i);return i&&i(z),z}};return R}function Pa(t){if(Js(t))return t=Fn(t),t.children=null,t}function Mu(t){if(!Js(t))return cp(t.type)&&t.children?dp(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&te(n.default))return n.default()}}function Gi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pp(t,e=!1,n){let r=[],i=0;for(let o=0;o<t.length;o++){let s=t[o];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:o);s.type===rt?(s.patchFlag&128&&i++,r=r.concat(pp(s.children,e,a))):(e||s.type!==Ye)&&r.push(a!=null?Fn(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function tt(t,e){return te(t)?Ne({name:t.name},e,{setup:t}):t}function gp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function pl(t,e,n,r,i=!1){if(J(t)){t.forEach((v,_)=>pl(v,e&&(J(e)?e[_]:e),n,r,i));return}if(Ci(r)&&!i)return;const o=r.shapeFlag&4?ta(r.component):r.el,s=i?null:o,{i:a,r:l}=t,c=e&&e.r,u=a.refs===me?a.refs={}:a.refs,f=a.setupState,d=le(f),g=f===me?()=>!1:v=>ce(d,v);if(c!=null&&c!==l&&(Ae(c)?(u[c]=null,g(c)&&(f[c]=null)):Ie(c)&&(c.value=null)),te(l))mo(l,a,12,[s,u]);else{const v=Ae(l),_=Ie(l);if(v||_){const C=()=>{if(t.f){const S=v?g(l)?f[l]:u[l]:l.value;i?J(S)&&hc(S,o):J(S)?S.includes(o)||S.push(o):v?(u[l]=[o],g(l)&&(f[l]=u[l])):(l.value=[o],t.k&&(u[t.k]=l.value))}else v?(u[l]=s,g(l)&&(f[l]=s)):_&&(l.value=s,t.k&&(u[t.k]=s))};s?(C.id=-1,dt(C,n)):C()}}}const Ci=t=>!!t.type.__asyncLoader,Js=t=>t.type.__isKeepAlive;function My(t,e){mp(t,"a",e)}function $y(t,e){mp(t,"da",e)}function mp(t,e,n=De){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Qs(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Js(i.parent.vnode)&&Ly(r,e,n,i),i=i.parent}}function Ly(t,e,n,r){const i=Qs(e,t,r,!0);yp(()=>{hc(r[e],i)},n)}function Qs(t,e,n=De,r=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{Un();const a=yo(n),l=Rt(e,n,t,s);return a(),Bn(),l});return r?i.unshift(o):i.push(o),o}}const pn=t=>(e,n=De)=>{(!ea||t==="sp")&&Qs(t,(...r)=>e(...r),n)},Vy=pn("bm"),ei=pn("m"),Fy=pn("bu"),vp=pn("u"),br=pn("bum"),yp=pn("um"),jy=pn("sp"),Uy=pn("rtg"),By=pn("rtc");function Hy(t,e=De){Qs("ec",t,e)}const _p="components";function $u(t,e){return Wy(_p,t,!0,e)||t}const zy=Symbol.for("v-ndc");function Wy(t,e,n=!0,r=!1){const i=Qe||De;if(i){const o=i.type;if(t===_p){const a=N_(o,!1);if(a&&(a===e||a===Pt(e)||a===Gs(Pt(e))))return o}const s=Lu(i[t]||o[t],e)||Lu(i.appContext[t],e);return!s&&r?o:s}}function Lu(t,e){return t&&(t[e]||t[Pt(e)]||t[Gs(Pt(e))])}function qy(t,e,n,r){let i;const o=n,s=J(t);if(s||Ae(t)){const a=s&&Dn(t);let l=!1;a&&(l=!bt(t),t=Ks(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?Be(t[c]):t[c],c,void 0,o)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,o)}else if(_e(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,o));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,o)}}else i=[];return i}const gl=t=>t?Vp(t)?ta(t):gl(t.parent):null,Ai=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gl(t.parent),$root:t=>gl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Rc(t),$forceUpdate:t=>t.f||(t.f=()=>{Pc(t.update)}),$nextTick:t=>t.n||(t.n=Zr.bind(t.proxy)),$watch:t=>p_.bind(t)}),Ra=(t,e)=>t!==me&&!t.__isScriptSetup&&ce(t,e),Gy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=s[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(Ra(r,e))return s[e]=1,r[e];if(i!==me&&ce(i,e))return s[e]=2,i[e];if((c=t.propsOptions[0])&&ce(c,e))return s[e]=3,o[e];if(n!==me&&ce(n,e))return s[e]=4,n[e];ml&&(s[e]=0)}}const u=Ai[e];let f,d;if(u)return e==="$attrs"&&ze(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==me&&ce(n,e))return s[e]=4,n[e];if(d=l.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return Ra(i,e)?(i[e]=n,!0):r!==me&&ce(r,e)?(r[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},s){let a;return!!n[s]||t!==me&&ce(t,s)||Ra(e,s)||(a=o[0])&&ce(a,s)||ce(r,s)||ce(Ai,s)||ce(i.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vu(t){return J(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ml=!0;function Ky(t){const e=Rc(t),n=t.proxy,r=t.ctx;ml=!1,e.beforeCreate&&Fu(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:g,updated:v,activated:_,deactivated:C,beforeDestroy:S,beforeUnmount:E,destroyed:I,unmounted:T,render:N,renderTracked:U,renderTriggered:m,errorCaptured:R,serverPrefetch:A,expose:z,inheritAttrs:ee,components:V,directives:oe,filters:be}=e;if(c&&Xy(c,r,null),s)for(const K in s){const ie=s[K];te(ie)&&(r[K]=ie.bind(n))}if(i){const K=i.call(n,n);_e(K)&&(t.data=Hn(K))}if(ml=!0,o)for(const K in o){const ie=o[K],st=te(ie)?ie.bind(n,n):te(ie.get)?ie.get.bind(n,n):Bt,Te=!te(ie)&&te(ie.set)?ie.set.bind(n):Bt,We=H({get:st,set:Te});Object.defineProperty(r,K,{enumerable:!0,configurable:!0,get:()=>We.value,set:Oe=>We.value=Oe})}if(a)for(const K in a)bp(a[K],r,n,K);if(l){const K=te(l)?l.call(n):l;Reflect.ownKeys(K).forEach(ie=>{$r(ie,K[ie])})}u&&Fu(u,t,"c");function re(K,ie){J(ie)?ie.forEach(st=>K(st.bind(n))):ie&&K(ie.bind(n))}if(re(Vy,f),re(ei,d),re(Fy,g),re(vp,v),re(My,_),re($y,C),re(Hy,R),re(By,U),re(Uy,m),re(br,E),re(yp,T),re(jy,A),J(z))if(z.length){const K=t.exposed||(t.exposed={});z.forEach(ie=>{Object.defineProperty(K,ie,{get:()=>n[ie],set:st=>n[ie]=st})})}else t.exposed||(t.exposed={});N&&t.render===Bt&&(t.render=N),ee!=null&&(t.inheritAttrs=ee),V&&(t.components=V),oe&&(t.directives=oe),A&&gp(t)}function Xy(t,e,n=Bt){J(t)&&(t=vl(t));for(const r in t){const i=t[r];let o;_e(i)?"default"in i?o=Ce(i.from||r,i.default,!0):o=Ce(i.from||r):o=Ce(i),Ie(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[r]=o}}function Fu(t,e,n){Rt(J(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function bp(t,e,n,r){let i=r.includes(".")?Np(n,r):()=>n[r];if(Ae(t)){const o=e[t];te(o)&&sn(i,o)}else if(te(t))sn(i,t.bind(n));else if(_e(t))if(J(t))t.forEach(o=>bp(o,e,n,r));else{const o=te(t.handler)?t.handler.bind(n):e[t.handler];te(o)&&sn(i,o,t)}}function Rc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>_s(l,c,s,!0)),_s(l,e,s)),_e(e)&&o.set(e,l),l}function _s(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&_s(t,o,n,!0),i&&i.forEach(s=>_s(t,s,n,!0));for(const s in e)if(!(r&&s==="expose")){const a=Yy[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const Yy={data:ju,props:Uu,emits:Uu,methods:bi,computed:bi,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:bi,directives:bi,watch:Qy,provide:ju,inject:Jy};function ju(t,e){return e?t?function(){return Ne(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function Jy(t,e){return bi(vl(t),vl(e))}function vl(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function bi(t,e){return t?Ne(Object.create(null),t,e):e}function Uu(t,e){return t?J(t)&&J(e)?[...new Set([...t,...e])]:Ne(Object.create(null),Vu(t),Vu(e??{})):e}function Qy(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const r in e)n[r]=Ge(t[r],e[r]);return n}function wp(){return{app:null,config:{isNativeTag:Fv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zy=0;function e_(t,e){return function(r,i=null){te(r)||(r=Ne({},r)),i!=null&&!_e(i)&&(i=null);const o=wp(),s=new WeakSet,a=[];let l=!1;const c=o.app={_uid:Zy++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:M_,get config(){return o.config},set config(u){},use(u,...f){return s.has(u)||(u&&te(u.install)?(s.add(u),u.install(c,...f)):te(u)&&(s.add(u),u(c,...f))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,f){return f?(o.components[u]=f,c):o.components[u]},directive(u,f){return f?(o.directives[u]=f,c):o.directives[u]},mount(u,f,d){if(!l){const g=c._ceVNode||B(r,i);return g.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(g,u):t(g,u,d),l=!0,c._container=u,u.__vue_app__=c,ta(g.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Rt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return o.provides[u]=f,c},runWithContext(u){const f=ar;ar=c;try{return u()}finally{ar=f}}};return c}}let ar=null;function $r(t,e){if(De){let n=De.provides;const r=De.parent&&De.parent.provides;r===n&&(n=De.provides=Object.create(r)),n[t]=e}}function Ce(t,e,n=!1){const r=De||Qe;if(r||ar){const i=ar?ar._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&te(e)?e.call(r&&r.proxy):e}}function t_(){return!!(De||Qe||ar)}const Ep={},Sp=()=>Object.create(Ep),Tp=t=>Object.getPrototypeOf(t)===Ep;function n_(t,e,n,r=!1){const i={},o=Sp();t.propsDefaults=Object.create(null),Ip(t,e,i,o);for(const s in t.propsOptions[0])s in i||(i[s]=void 0);n?t.props=r?i:ep(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function r_(t,e,n,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=t,a=le(i),[l]=t.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Zs(t.emitsOptions,d))continue;const g=e[d];if(l)if(ce(o,d))g!==o[d]&&(o[d]=g,c=!0);else{const v=Pt(d);i[v]=yl(l,a,v,g,t,!1)}else g!==o[d]&&(o[d]=g,c=!0)}}}else{Ip(t,e,i,o)&&(c=!0);let u;for(const f in a)(!e||!ce(e,f)&&((u=_r(f))===f||!ce(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=yl(l,a,f,void 0,t,!0)):delete i[f]);if(o!==a)for(const f in o)(!e||!ce(e,f))&&(delete o[f],c=!0)}c&&on(t.attrs,"set","")}function Ip(t,e,n,r){const[i,o]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Ti(l))continue;const c=e[l];let u;i&&ce(i,u=Pt(l))?!o||!o.includes(u)?n[u]=c:(a||(a={}))[u]=c:Zs(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(o){const l=le(n),c=a||me;for(let u=0;u<o.length;u++){const f=o[u];n[f]=yl(i,l,f,c[f],t,!ce(c,f))}}return s}function yl(t,e,n,r,i,o){const s=t[n];if(s!=null){const a=ce(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&te(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=yo(i);r=c[n]=l.call(null,e),u()}}else r=l;i.ce&&i.ce._setProp(n,r)}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===_r(n))&&(r=!0))}return r}const i_=new WeakMap;function Cp(t,e,n=!1){const r=n?i_:e.propsCache,i=r.get(t);if(i)return i;const o=t.props,s={},a=[];let l=!1;if(!te(t)){const u=f=>{l=!0;const[d,g]=Cp(f,e,!0);Ne(s,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!o&&!l)return _e(t)&&r.set(t,Nr),Nr;if(J(o))for(let u=0;u<o.length;u++){const f=Pt(o[u]);Bu(f)&&(s[f]=me)}else if(o)for(const u in o){const f=Pt(u);if(Bu(f)){const d=o[u],g=s[f]=J(d)||te(d)?{type:d}:Ne({},d),v=g.type;let _=!1,C=!0;if(J(v))for(let S=0;S<v.length;++S){const E=v[S],I=te(E)&&E.name;if(I==="Boolean"){_=!0;break}else I==="String"&&(C=!1)}else _=te(v)&&v.name==="Boolean";g[0]=_,g[1]=C,(_||ce(g,"default"))&&a.push(f)}}const c=[s,a];return _e(t)&&r.set(t,c),c}function Bu(t){return t[0]!=="$"&&!Ti(t)}const Ap=t=>t[0]==="_"||t==="$stable",xc=t=>J(t)?t.map(Ft):[Ft(t)],o_=(t,e,n)=>{if(e._n)return e;const r=_i((...i)=>xc(e(...i)),n);return r._c=!1,r},Pp=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Ap(i))continue;const o=t[i];if(te(o))e[i]=o_(i,o,r);else if(o!=null){const s=xc(o);e[i]=()=>s}}},Rp=(t,e)=>{const n=xc(e);t.slots.default=()=>n},xp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},s_=(t,e,n)=>{const r=t.slots=Sp();if(t.vnode.shapeFlag&32){const i=e._;i?(xp(r,e,n),n&&Nh(r,"_",i,!0)):Pp(e,r)}else e&&Rp(t,e)},a_=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,s=me;if(r.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:xp(i,e,n):(o=!e.$stable,Pp(e,i)),s=e}else e&&(Rp(t,e),s={default:1});if(o)for(const a in i)!Ap(a)&&s[a]==null&&delete i[a]},dt=w_;function l_(t){return c_(t)}function c_(t,e){const n=Dh();n.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:g=Bt,insertStaticContent:v}=t,_=(h,p,y,P=null,b=null,x=null,L=void 0,M=null,D=!!p.dynamicChildren)=>{if(h===p)return;h&&!nr(h,p)&&(P=w(h),Oe(h,b,x,!0),h=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:k,ref:Y,shapeFlag:j}=p;switch(k){case ti:C(h,p,y,P);break;case Ye:S(h,p,y,P);break;case ka:h==null&&E(p,y,P,L);break;case rt:V(h,p,y,P,b,x,L,M,D);break;default:j&1?N(h,p,y,P,b,x,L,M,D):j&6?oe(h,p,y,P,b,x,L,M,D):(j&64||j&128)&&k.process(h,p,y,P,b,x,L,M,D,W)}Y!=null&&b&&pl(Y,h&&h.ref,x,p||h,!p)},C=(h,p,y,P)=>{if(h==null)r(p.el=a(p.children),y,P);else{const b=p.el=h.el;p.children!==h.children&&c(b,p.children)}},S=(h,p,y,P)=>{h==null?r(p.el=l(p.children||""),y,P):p.el=h.el},E=(h,p,y,P)=>{[h.el,h.anchor]=v(h.children,p,y,P,h.el,h.anchor)},I=({el:h,anchor:p},y,P)=>{let b;for(;h&&h!==p;)b=d(h),r(h,y,P),h=b;r(p,y,P)},T=({el:h,anchor:p})=>{let y;for(;h&&h!==p;)y=d(h),i(h),h=y;i(p)},N=(h,p,y,P,b,x,L,M,D)=>{p.type==="svg"?L="svg":p.type==="math"&&(L="mathml"),h==null?U(p,y,P,b,x,L,M,D):A(h,p,b,x,L,M,D)},U=(h,p,y,P,b,x,L,M)=>{let D,k;const{props:Y,shapeFlag:j,transition:q,dirs:Z}=h;if(D=h.el=s(h.type,x,Y&&Y.is,Y),j&8?u(D,h.children):j&16&&R(h.children,D,null,P,b,xa(h,x),L,M),Z&&Kn(h,null,P,"created"),m(D,h,h.scopeId,L,P),Y){for(const ve in Y)ve!=="value"&&!Ti(ve)&&o(D,ve,null,Y[ve],x,P);"value"in Y&&o(D,"value",null,Y.value,x),(k=Y.onVnodeBeforeMount)&&Dt(k,P,h)}Z&&Kn(h,null,P,"beforeMount");const se=u_(b,q);se&&q.beforeEnter(D),r(D,p,y),((k=Y&&Y.onVnodeMounted)||se||Z)&&dt(()=>{k&&Dt(k,P,h),se&&q.enter(D),Z&&Kn(h,null,P,"mounted")},b)},m=(h,p,y,P,b)=>{if(y&&g(h,y),P)for(let x=0;x<P.length;x++)g(h,P[x]);if(b){let x=b.subTree;if(p===x||Mp(x.type)&&(x.ssContent===p||x.ssFallback===p)){const L=b.vnode;m(h,L,L.scopeId,L.slotScopeIds,b.parent)}}},R=(h,p,y,P,b,x,L,M,D=0)=>{for(let k=D;k<h.length;k++){const Y=h[k]=M?Cn(h[k]):Ft(h[k]);_(null,Y,p,y,P,b,x,L,M)}},A=(h,p,y,P,b,x,L)=>{const M=p.el=h.el;let{patchFlag:D,dynamicChildren:k,dirs:Y}=p;D|=h.patchFlag&16;const j=h.props||me,q=p.props||me;let Z;if(y&&Xn(y,!1),(Z=q.onVnodeBeforeUpdate)&&Dt(Z,y,p,h),Y&&Kn(p,h,y,"beforeUpdate"),y&&Xn(y,!0),(j.innerHTML&&q.innerHTML==null||j.textContent&&q.textContent==null)&&u(M,""),k?z(h.dynamicChildren,k,M,y,P,xa(p,b),x):L||ie(h,p,M,null,y,P,xa(p,b),x,!1),D>0){if(D&16)ee(M,j,q,y,b);else if(D&2&&j.class!==q.class&&o(M,"class",null,q.class,b),D&4&&o(M,"style",j.style,q.style,b),D&8){const se=p.dynamicProps;for(let ve=0;ve<se.length;ve++){const de=se[ve],at=j[de],je=q[de];(je!==at||de==="value")&&o(M,de,at,je,b,y)}}D&1&&h.children!==p.children&&u(M,p.children)}else!L&&k==null&&ee(M,j,q,y,b);((Z=q.onVnodeUpdated)||Y)&&dt(()=>{Z&&Dt(Z,y,p,h),Y&&Kn(p,h,y,"updated")},P)},z=(h,p,y,P,b,x,L)=>{for(let M=0;M<p.length;M++){const D=h[M],k=p[M],Y=D.el&&(D.type===rt||!nr(D,k)||D.shapeFlag&70)?f(D.el):y;_(D,k,Y,null,P,b,x,L,!0)}},ee=(h,p,y,P,b)=>{if(p!==y){if(p!==me)for(const x in p)!Ti(x)&&!(x in y)&&o(h,x,p[x],null,b,P);for(const x in y){if(Ti(x))continue;const L=y[x],M=p[x];L!==M&&x!=="value"&&o(h,x,M,L,b,P)}"value"in y&&o(h,"value",p.value,y.value,b)}},V=(h,p,y,P,b,x,L,M,D)=>{const k=p.el=h?h.el:a(""),Y=p.anchor=h?h.anchor:a("");let{patchFlag:j,dynamicChildren:q,slotScopeIds:Z}=p;Z&&(M=M?M.concat(Z):Z),h==null?(r(k,y,P),r(Y,y,P),R(p.children||[],y,Y,b,x,L,M,D)):j>0&&j&64&&q&&h.dynamicChildren?(z(h.dynamicChildren,q,y,b,x,L,M),(p.key!=null||b&&p===b.subTree)&&Op(h,p,!0)):ie(h,p,y,Y,b,x,L,M,D)},oe=(h,p,y,P,b,x,L,M,D)=>{p.slotScopeIds=M,h==null?p.shapeFlag&512?b.ctx.activate(p,y,P,L,D):be(p,y,P,b,x,L,D):X(h,p,D)},be=(h,p,y,P,b,x,L)=>{const M=h.component=P_(h,P,b);if(Js(h)&&(M.ctx.renderer=W),R_(M,!1,L),M.asyncDep){if(b&&b.registerDep(M,re,L),!h.el){const D=M.subTree=B(Ye);S(null,D,p,y)}}else re(M,h,p,y,b,x,L)},X=(h,p,y)=>{const P=p.component=h.component;if(__(h,p,y))if(P.asyncDep&&!P.asyncResolved){K(P,p,y);return}else P.next=p,P.update();else p.el=h.el,P.vnode=p},re=(h,p,y,P,b,x,L)=>{const M=()=>{if(h.isMounted){let{next:j,bu:q,u:Z,parent:se,vnode:ve}=h;{const lt=kp(h);if(lt){j&&(j.el=ve.el,K(h,j,L)),lt.asyncDep.then(()=>{h.isUnmounted||M()});return}}let de=j,at;Xn(h,!1),j?(j.el=ve.el,K(h,j,L)):j=ve,q&&ts(q),(at=j.props&&j.props.onVnodeBeforeUpdate)&&Dt(at,se,j,ve),Xn(h,!0);const je=Oa(h),St=h.subTree;h.subTree=je,_(St,je,f(St.el),w(St),h,b,x),j.el=je.el,de===null&&b_(h,je.el),Z&&dt(Z,b),(at=j.props&&j.props.onVnodeUpdated)&&dt(()=>Dt(at,se,j,ve),b)}else{let j;const{el:q,props:Z}=p,{bm:se,m:ve,parent:de,root:at,type:je}=h,St=Ci(p);if(Xn(h,!1),se&&ts(se),!St&&(j=Z&&Z.onVnodeBeforeMount)&&Dt(j,de,p),Xn(h,!0),q&&we){const lt=()=>{h.subTree=Oa(h),we(q,h.subTree,h,b,null)};St&&je.__asyncHydrate?je.__asyncHydrate(q,h,lt):lt()}else{at.ce&&at.ce._injectChildStyle(je);const lt=h.subTree=Oa(h);_(null,lt,y,P,h,b,x),p.el=lt.el}if(ve&&dt(ve,b),!St&&(j=Z&&Z.onVnodeMounted)){const lt=p;dt(()=>Dt(j,de,lt),b)}(p.shapeFlag&256||de&&Ci(de.vnode)&&de.vnode.shapeFlag&256)&&h.a&&dt(h.a,b),h.isMounted=!0,p=y=P=null}};h.scope.on();const D=h.effect=new Uh(M);h.scope.off();const k=h.update=D.run.bind(D),Y=h.job=D.runIfDirty.bind(D);Y.i=h,Y.id=h.uid,D.scheduler=()=>Pc(Y),Xn(h,!0),k()},K=(h,p,y)=>{p.component=h;const P=h.vnode.props;h.vnode=p,h.next=null,r_(h,p.props,P,y),a_(h,p.children,y),Un(),Du(h),Bn()},ie=(h,p,y,P,b,x,L,M,D=!1)=>{const k=h&&h.children,Y=h?h.shapeFlag:0,j=p.children,{patchFlag:q,shapeFlag:Z}=p;if(q>0){if(q&128){Te(k,j,y,P,b,x,L,M,D);return}else if(q&256){st(k,j,y,P,b,x,L,M,D);return}}Z&8?(Y&16&&qe(k,b,x),j!==k&&u(y,j)):Y&16?Z&16?Te(k,j,y,P,b,x,L,M,D):qe(k,b,x,!0):(Y&8&&u(y,""),Z&16&&R(j,y,P,b,x,L,M,D))},st=(h,p,y,P,b,x,L,M,D)=>{h=h||Nr,p=p||Nr;const k=h.length,Y=p.length,j=Math.min(k,Y);let q;for(q=0;q<j;q++){const Z=p[q]=D?Cn(p[q]):Ft(p[q]);_(h[q],Z,y,null,b,x,L,M,D)}k>Y?qe(h,b,x,!0,!1,j):R(p,y,P,b,x,L,M,D,j)},Te=(h,p,y,P,b,x,L,M,D)=>{let k=0;const Y=p.length;let j=h.length-1,q=Y-1;for(;k<=j&&k<=q;){const Z=h[k],se=p[k]=D?Cn(p[k]):Ft(p[k]);if(nr(Z,se))_(Z,se,y,null,b,x,L,M,D);else break;k++}for(;k<=j&&k<=q;){const Z=h[j],se=p[q]=D?Cn(p[q]):Ft(p[q]);if(nr(Z,se))_(Z,se,y,null,b,x,L,M,D);else break;j--,q--}if(k>j){if(k<=q){const Z=q+1,se=Z<Y?p[Z].el:P;for(;k<=q;)_(null,p[k]=D?Cn(p[k]):Ft(p[k]),y,se,b,x,L,M,D),k++}}else if(k>q)for(;k<=j;)Oe(h[k],b,x,!0),k++;else{const Z=k,se=k,ve=new Map;for(k=se;k<=q;k++){const ct=p[k]=D?Cn(p[k]):Ft(p[k]);ct.key!=null&&ve.set(ct.key,k)}let de,at=0;const je=q-se+1;let St=!1,lt=0;const ui=new Array(je);for(k=0;k<je;k++)ui[k]=0;for(k=Z;k<=j;k++){const ct=h[k];if(at>=je){Oe(ct,b,x,!0);continue}let Nt;if(ct.key!=null)Nt=ve.get(ct.key);else for(de=se;de<=q;de++)if(ui[de-se]===0&&nr(ct,p[de])){Nt=de;break}Nt===void 0?Oe(ct,b,x,!0):(ui[Nt-se]=k+1,Nt>=lt?lt=Nt:St=!0,_(ct,p[Nt],y,null,b,x,L,M,D),at++)}const Iu=St?f_(ui):Nr;for(de=Iu.length-1,k=je-1;k>=0;k--){const ct=se+k,Nt=p[ct],Cu=ct+1<Y?p[ct+1].el:P;ui[k]===0?_(null,Nt,y,Cu,b,x,L,M,D):St&&(de<0||k!==Iu[de]?We(Nt,y,Cu,2):de--)}}},We=(h,p,y,P,b=null)=>{const{el:x,type:L,transition:M,children:D,shapeFlag:k}=h;if(k&6){We(h.component.subTree,p,y,P);return}if(k&128){h.suspense.move(p,y,P);return}if(k&64){L.move(h,p,y,W);return}if(L===rt){r(x,p,y);for(let j=0;j<D.length;j++)We(D[j],p,y,P);r(h.anchor,p,y);return}if(L===ka){I(h,p,y);return}if(P!==2&&k&1&&M)if(P===0)M.beforeEnter(x),r(x,p,y),dt(()=>M.enter(x),b);else{const{leave:j,delayLeave:q,afterLeave:Z}=M,se=()=>r(x,p,y),ve=()=>{j(x,()=>{se(),Z&&Z()})};q?q(x,se,ve):ve()}else r(x,p,y)},Oe=(h,p,y,P=!1,b=!1)=>{const{type:x,props:L,ref:M,children:D,dynamicChildren:k,shapeFlag:Y,patchFlag:j,dirs:q,cacheIndex:Z}=h;if(j===-2&&(b=!1),M!=null&&pl(M,null,y,h,!0),Z!=null&&(p.renderCache[Z]=void 0),Y&256){p.ctx.deactivate(h);return}const se=Y&1&&q,ve=!Ci(h);let de;if(ve&&(de=L&&L.onVnodeBeforeUnmount)&&Dt(de,p,h),Y&6)vn(h.component,y,P);else{if(Y&128){h.suspense.unmount(y,P);return}se&&Kn(h,null,p,"beforeUnmount"),Y&64?h.type.remove(h,p,y,W,P):k&&!k.hasOnce&&(x!==rt||j>0&&j&64)?qe(k,p,y,!1,!0):(x===rt&&j&384||!b&&Y&16)&&qe(D,p,y),P&&Et(h)}(ve&&(de=L&&L.onVnodeUnmounted)||se)&&dt(()=>{de&&Dt(de,p,h),se&&Kn(h,null,p,"unmounted")},y)},Et=h=>{const{type:p,el:y,anchor:P,transition:b}=h;if(p===rt){mn(y,P);return}if(p===ka){T(h);return}const x=()=>{i(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(h.shapeFlag&1&&b&&!b.persisted){const{leave:L,delayLeave:M}=b,D=()=>L(y,x);M?M(h.el,x,D):D()}else x()},mn=(h,p)=>{let y;for(;h!==p;)y=d(h),i(h),h=y;i(p)},vn=(h,p,y)=>{const{bum:P,scope:b,job:x,subTree:L,um:M,m:D,a:k}=h;Hu(D),Hu(k),P&&ts(P),b.stop(),x&&(x.flags|=8,Oe(L,h,p,y)),M&&dt(M,p),dt(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},qe=(h,p,y,P=!1,b=!1,x=0)=>{for(let L=x;L<h.length;L++)Oe(h[L],p,y,P,b)},w=h=>{if(h.shapeFlag&6)return w(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),y=p&&p[Oy];return y?d(y):p};let F=!1;const $=(h,p,y)=>{h==null?p._vnode&&Oe(p._vnode,null,null,!0):_(p._vnode||null,h,p,null,null,null,y),p._vnode=h,F||(F=!0,Du(),sp(),F=!1)},W={p:_,um:Oe,m:We,r:Et,mt:be,mc:R,pc:ie,pbc:z,n:w,o:t};let fe,we;return{render:$,hydrate:fe,createApp:e_($,fe)}}function xa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Xn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function u_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Op(t,e,n=!1){const r=t.children,i=e.children;if(J(r)&&J(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=Cn(i[o]),a.el=s.el),!n&&a.patchFlag!==-2&&Op(s,a)),a.type===ti&&(a.el=s.el)}}function f_(t){const e=t.slice(),n=[0];let r,i,o,s,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}function kp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:kp(e)}function Hu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const d_=Symbol.for("v-scx"),h_=()=>Ce(d_);function Oc(t,e){return kc(t,null,e)}function sn(t,e,n){return kc(t,e,n)}function kc(t,e,n=me){const{immediate:r,deep:i,flush:o,once:s}=n,a=Ne({},n);let l;if(ea)if(o==="sync"){const d=h_();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!e||r)a.once=!0;else return{stop:Bt,resume:Bt,pause:Bt};const c=De;a.call=(d,g,v)=>Rt(d,c,g,v);let u=!1;o==="post"?a.scheduler=d=>{dt(d,c&&c.suspense)}:o!=="sync"&&(u=!0,a.scheduler=(d,g)=>{g?d():Pc(d)}),a.augmentJob=d=>{e&&(d.flags|=4),u&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const f=Ay(t,e,a);return l&&l.push(f),f}function p_(t,e,n){const r=this.proxy,i=Ae(t)?t.includes(".")?Np(r,t):()=>r[t]:t.bind(r,r);let o;te(e)?o=e:(o=e.handler,n=e);const s=yo(this),a=kc(i,o.bind(r),n);return s(),a}function Np(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const g_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Pt(e)}Modifiers`]||t[`${_r(e)}Modifiers`];function m_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||me;let i=n;const o=e.startsWith("update:"),s=o&&g_(r,e.slice(7));s&&(s.trim&&(i=n.map(u=>Ae(u)?u.trim():u)),s.number&&(i=n.map(cl)));let a,l=r[a=Sa(e)]||r[a=Sa(Pt(e))];!l&&o&&(l=r[a=Sa(_r(e))]),l&&Rt(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Rt(c,t,6,i)}}function Dp(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const o=t.emits;let s={},a=!1;if(!te(t)){const l=c=>{const u=Dp(c,e,!0);u&&(a=!0,Ne(s,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(_e(t)&&r.set(t,null),null):(J(o)?o.forEach(l=>s[l]=null):Ne(s,o),_e(t)&&r.set(t,s),s)}function Zs(t,e){return!t||!zs(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,_r(e))||ce(t,e))}function Oa(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[o],slots:s,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:g,ctx:v,inheritAttrs:_}=t,C=ys(t);let S,E;try{if(n.shapeFlag&4){const T=i||r,N=T;S=Ft(c.call(N,T,u,f,g,d,v)),E=a}else{const T=e;S=Ft(T.length>1?T(f,{attrs:a,slots:s,emit:l}):T(f,null)),E=e.props?a:v_(a)}}catch(T){Pi.length=0,Ys(T,t,1),S=B(Ye)}let I=S;if(E&&_!==!1){const T=Object.keys(E),{shapeFlag:N}=I;T.length&&N&7&&(o&&T.some(dc)&&(E=y_(E,o)),I=Fn(I,E,!1,!0))}return n.dirs&&(I=Fn(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&Gi(I,n.transition),S=I,ys(C),S}const v_=t=>{let e;for(const n in t)(n==="class"||n==="style"||zs(n))&&((e||(e={}))[n]=t[n]);return e},y_=(t,e)=>{const n={};for(const r in t)(!dc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function __(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?zu(r,s,c):!!s;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(s[d]!==r[d]&&!Zs(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?zu(r,s,c):!0:!!s;return!1}function zu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!Zs(n,o))return!0}return!1}function b_({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Mp=t=>t.__isSuspense;function w_(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):xy(t)}const rt=Symbol.for("v-fgt"),ti=Symbol.for("v-txt"),Ye=Symbol.for("v-cmt"),ka=Symbol.for("v-stc"),Pi=[];let pt=null;function Ue(t=!1){Pi.push(pt=t?null:[])}function E_(){Pi.pop(),pt=Pi[Pi.length-1]||null}let Ki=1;function Wu(t){Ki+=t,t<0&&pt&&(pt.hasOnce=!0)}function $p(t){return t.dynamicChildren=Ki>0?pt||Nr:null,E_(),Ki>0&&pt&&pt.push(t),t}function _t(t,e,n,r,i,o){return $p(ge(t,e,n,r,i,o,!0))}function ns(t,e,n,r,i){return $p(B(t,e,n,r,i,!0))}function bs(t){return t?t.__v_isVNode===!0:!1}function nr(t,e){return t.type===e.type&&t.key===e.key}const Lp=({key:t})=>t??null,rs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ae(t)||Ie(t)||te(t)?{i:Qe,r:t,k:e,f:!!n}:t:null);function ge(t,e=null,n=null,r=0,i=null,o=t===rt?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lp(e),ref:e&&rs(e),scopeId:lp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qe};return a?(Nc(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=Ae(n)?8:16),Ki>0&&!s&&pt&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&pt.push(l),l}const B=S_;function S_(t,e=null,n=null,r=0,i=null,o=!1){if((!t||t===zy)&&(t=Ye),bs(t)){const a=Fn(t,e,!0);return n&&Nc(a,n),Ki>0&&!o&&pt&&(a.shapeFlag&6?pt[pt.indexOf(t)]=a:pt.push(a)),a.patchFlag=-2,a}if(D_(t)&&(t=t.__vccOpts),e){e=T_(e);let{class:a,style:l}=e;a&&!Ae(a)&&(e.class=mc(a)),_e(l)&&(Tc(l)&&!J(l)&&(l=Ne({},l)),e.style=gc(l))}const s=Ae(t)?1:Mp(t)?128:cp(t)?64:_e(t)?4:te(t)?2:0;return ge(t,e,n,r,i,s,o,!0)}function T_(t){return t?Tc(t)||Tp(t)?Ne({},t):t:null}function Fn(t,e,n=!1,r=!1){const{props:i,ref:o,patchFlag:s,children:a,transition:l}=t,c=e?I_(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Lp(c),ref:e&&e.ref?n&&o?J(o)?o.concat(rs(e)):[o,rs(e)]:rs(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fn(t.ssContent),ssFallback:t.ssFallback&&Fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Gi(u,l.clone(u)),u}function Vt(t=" ",e=0){return B(ti,null,t,e)}function Ho(t="",e=!1){return e?(Ue(),ns(Ye,null,t)):B(Ye,null,t)}function Ft(t){return t==null||typeof t=="boolean"?B(Ye):J(t)?B(rt,null,t.slice()):typeof t=="object"?Cn(t):B(ti,null,String(t))}function Cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fn(t)}function Nc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Nc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Tp(e)?e._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:Qe},n=32):(e=String(e),r&64?(n=16,e=[Vt(e)]):n=8);t.children=e,t.shapeFlag|=n}function I_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=mc([e.class,r.class]));else if(i==="style")e.style=gc([e.style,r.style]);else if(zs(i)){const o=e[i],s=r[i];s&&o!==s&&!(J(o)&&o.includes(s))&&(e[i]=o?[].concat(o,s):s)}else i!==""&&(e[i]=r[i])}return e}function Dt(t,e,n,r=null){Rt(t,e,7,[n,r])}const C_=wp();let A_=0;function P_(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||C_,o={uid:A_++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cp(r,i),emitsOptions:Dp(r,i),emit:null,emitted:null,propsDefaults:me,inheritAttrs:r.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=m_.bind(null,o),t.ce&&t.ce(o),o}let De=null;const vo=()=>De||Qe;let ws,_l;{const t=Dh(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),o=>{i.length>1?i.forEach(s=>s(o)):i[0](o)}};ws=e("__VUE_INSTANCE_SETTERS__",n=>De=n),_l=e("__VUE_SSR_SETTERS__",n=>ea=n)}const yo=t=>{const e=De;return ws(t),t.scope.on(),()=>{t.scope.off(),ws(e)}},qu=()=>{De&&De.scope.off(),ws(null)};function Vp(t){return t.vnode.shapeFlag&4}let ea=!1;function R_(t,e=!1,n=!1){e&&_l(e);const{props:r,children:i}=t.vnode,o=Vp(t);n_(t,r,o,e),s_(t,i,n);const s=o?x_(t,e):void 0;return e&&_l(!1),s}function x_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Gy);const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?k_(t):null,o=yo(t);Un();const s=mo(r,t,0,[t.props,i]);if(Bn(),o(),xh(s)){if(Ci(t)||gp(t),s.then(qu,qu),e)return s.then(a=>{Gu(t,a,e)}).catch(a=>{Ys(a,t,0)});t.asyncDep=s}else Gu(t,s,e)}else Fp(t,e)}function Gu(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=rp(e)),Fp(t,n)}let Ku;function Fp(t,e,n){const r=t.type;if(!t.render){if(!e&&Ku&&!r.render){const i=r.template||Rc(t).template;if(i){const{isCustomElement:o,compilerOptions:s}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Ne(Ne({isCustomElement:o,delimiters:a},s),l);r.render=Ku(i,c)}}t.render=r.render||Bt}{const i=yo(t);Un();try{Ky(t)}finally{Bn(),i()}}}const O_={get(t,e){return ze(t,"get",""),t[e]}};function k_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,O_),slots:t.slots,emit:t.emit,expose:e}}function ta(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(rp(Ic(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ai)return Ai[n](t)},has(e,n){return n in e||n in Ai}})):t.proxy}function N_(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function D_(t){return te(t)&&"__vccOpts"in t}const H=(t,e)=>Iy(t,e,ea);function cn(t,e,n){const r=arguments.length;return r===2?_e(e)&&!J(e)?bs(e)?B(t,null,[e]):B(t,e):B(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&bs(n)&&(n=[n]),B(t,e,n))}const M_="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bl;const Xu=typeof window<"u"&&window.trustedTypes;if(Xu)try{bl=Xu.createPolicy("vue",{createHTML:t=>t})}catch{}const jp=bl?t=>bl.createHTML(t):t=>t,$_="http://www.w3.org/2000/svg",L_="http://www.w3.org/1998/Math/MathML",Yt=typeof document<"u"?document:null,Yu=Yt&&Yt.createElement("template"),V_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?Yt.createElementNS($_,t):e==="mathml"?Yt.createElementNS(L_,t):n?Yt.createElement(t,{is:n}):Yt.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Yt.createTextNode(t),createComment:t=>Yt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Yt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,o){const s=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{Yu.innerHTML=jp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Yu.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_n="transition",di="animation",Xi=Symbol("_vtc"),Up={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F_=Ne({},up,Up),j_=t=>(t.displayName="Transition",t.props=F_,t),Bp=j_((t,{slots:e})=>cn(Dy,U_(t),e)),Yn=(t,e=[])=>{J(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ju=t=>t?J(t)?t.some(e=>e.length>1):t.length>1:!1;function U_(t){const e={};for(const V in t)V in Up||(e[V]=t[V]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:c=s,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,v=B_(i),_=v&&v[0],C=v&&v[1],{onBeforeEnter:S,onEnter:E,onEnterCancelled:I,onLeave:T,onLeaveCancelled:N,onBeforeAppear:U=S,onAppear:m=E,onAppearCancelled:R=I}=e,A=(V,oe,be)=>{Jn(V,oe?u:a),Jn(V,oe?c:s),be&&be()},z=(V,oe)=>{V._isLeaving=!1,Jn(V,f),Jn(V,g),Jn(V,d),oe&&oe()},ee=V=>(oe,be)=>{const X=V?m:E,re=()=>A(oe,V,be);Yn(X,[oe,re]),Qu(()=>{Jn(oe,V?l:o),bn(oe,V?u:a),Ju(X)||Zu(oe,r,_,re)})};return Ne(e,{onBeforeEnter(V){Yn(S,[V]),bn(V,o),bn(V,s)},onBeforeAppear(V){Yn(U,[V]),bn(V,l),bn(V,c)},onEnter:ee(!1),onAppear:ee(!0),onLeave(V,oe){V._isLeaving=!0;const be=()=>z(V,oe);bn(V,f),bn(V,d),W_(),Qu(()=>{V._isLeaving&&(Jn(V,f),bn(V,g),Ju(T)||Zu(V,r,C,be))}),Yn(T,[V,be])},onEnterCancelled(V){A(V,!1),Yn(I,[V])},onAppearCancelled(V){A(V,!0),Yn(R,[V])},onLeaveCancelled(V){z(V),Yn(N,[V])}})}function B_(t){if(t==null)return null;if(_e(t))return[Na(t.enter),Na(t.leave)];{const e=Na(t);return[e,e]}}function Na(t){return zv(t)}function bn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Xi]||(t[Xi]=new Set)).add(e)}function Jn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Xi];n&&(n.delete(e),n.size||(t[Xi]=void 0))}function Qu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let H_=0;function Zu(t,e,n,r){const i=t._endId=++H_,o=()=>{i===t._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:l}=z_(t,e);if(!s)return r();const c=s+"end";let u=0;const f=()=>{t.removeEventListener(c,d),o()},d=g=>{g.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function z_(t,e){const n=window.getComputedStyle(t),r=v=>(n[v]||"").split(", "),i=r(`${_n}Delay`),o=r(`${_n}Duration`),s=ef(i,o),a=r(`${di}Delay`),l=r(`${di}Duration`),c=ef(a,l);let u=null,f=0,d=0;e===_n?s>0&&(u=_n,f=s,d=o.length):e===di?c>0&&(u=di,f=c,d=l.length):(f=Math.max(s,c),u=f>0?s>c?_n:di:null,d=u?u===_n?o.length:l.length:0);const g=u===_n&&/\b(transform|all)(,|$)/.test(r(`${_n}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:g}}function ef(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>tf(n)+tf(t[r])))}function tf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function W_(){return document.body.offsetHeight}function q_(t,e,n){const r=t[Xi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nf=Symbol("_vod"),G_=Symbol("_vsh"),K_=Symbol(""),X_=/(^|;)\s*display\s*:/;function Y_(t,e,n){const r=t.style,i=Ae(n);let o=!1;if(n&&!i){if(e)if(Ae(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();n[a]==null&&is(r,a,"")}else for(const s in e)n[s]==null&&is(r,s,"");for(const s in n)s==="display"&&(o=!0),is(r,s,n[s])}else if(i){if(e!==n){const s=r[K_];s&&(n+=";"+s),r.cssText=n,o=X_.test(n)}}else e&&t.removeAttribute("style");nf in t&&(t[nf]=o?r.display:"",t[G_]&&(r.display="none"))}const rf=/\s*!important$/;function is(t,e,n){if(J(n))n.forEach(r=>is(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=J_(t,e);rf.test(n)?t.setProperty(_r(r),n.replace(rf,""),"important"):t[r]=n}}const of=["Webkit","Moz","ms"],Da={};function J_(t,e){const n=Da[e];if(n)return n;let r=Pt(e);if(r!=="filter"&&r in t)return Da[e]=r;r=Gs(r);for(let i=0;i<of.length;i++){const o=of[i]+r;if(o in t)return Da[e]=o}return e}const sf="http://www.w3.org/1999/xlink";function af(t,e,n,r,i,o=Yv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(sf,e.slice(6,e.length)):t.setAttributeNS(sf,e,n):n==null||o&&!Mh(n)?t.removeAttribute(e):t.setAttribute(e,o?"":jn(n)?String(n):n)}function Q_(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?jp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(s!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const s=typeof t[e];s==="boolean"?n=Mh(n):n==null&&s==="string"?(n="",o=!0):s==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(e)}function Ar(t,e,n,r){t.addEventListener(e,n,r)}function Z_(t,e,n,r){t.removeEventListener(e,n,r)}const lf=Symbol("_vei");function eb(t,e,n,r,i=null){const o=t[lf]||(t[lf]={}),s=o[e];if(r&&s)s.value=r;else{const[a,l]=tb(e);if(r){const c=o[e]=ib(r,i);Ar(t,a,c,l)}else s&&(Z_(t,a,s,l),o[e]=void 0)}}const cf=/(?:Once|Passive|Capture)$/;function tb(t){let e;if(cf.test(t)){e={};let r;for(;r=t.match(cf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_r(t.slice(2)),e]}let Ma=0;const nb=Promise.resolve(),rb=()=>Ma||(nb.then(()=>Ma=0),Ma=Date.now());function ib(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Rt(ob(r,n.value),e,5,[r])};return n.value=t,n.attached=rb(),n}function ob(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const uf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,sb=(t,e,n,r,i,o)=>{const s=i==="svg";e==="class"?q_(t,r,s):e==="style"?Y_(t,n,r):zs(e)?dc(e)||eb(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ab(t,e,r,s))?(Q_(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&af(t,e,r,s,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),af(t,e,r,s))};function ab(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&uf(e)&&te(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return uf(e)&&Ae(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!Ae(n)))}const ff=t=>{const e=t.props["onUpdate:modelValue"]||!1;return J(e)?n=>ts(e,n):e};function lb(t){t.target.composing=!0}function df(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $a=Symbol("_assign"),Ur={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[$a]=ff(i);const o=r||i.props&&i.props.type==="number";Ar(t,e?"change":"input",s=>{if(s.target.composing)return;let a=t.value;n&&(a=a.trim()),o&&(a=cl(a)),t[$a](a)}),n&&Ar(t,"change",()=>{t.value=t.value.trim()}),e||(Ar(t,"compositionstart",lb),Ar(t,"compositionend",df),Ar(t,"change",df))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:i,number:o}},s){if(t[$a]=ff(s),t.composing)return;const a=(o||t.type==="number")&&!/^0\d/.test(t.value)?cl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||i&&t.value.trim()===l)||(t.value=l))}},cb=["ctrl","shift","alt","meta"],ub={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>cb.some(n=>t[`${n}Key`]&&!e.includes(n))},na=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...o)=>{for(let s=0;s<e.length;s++){const a=ub[e[s]];if(a&&a(i,e))return}return t(i,...o)})},fb=Ne({patchProp:sb},V_);let hf;function Hp(){return hf||(hf=l_(fb))}const wl=(...t)=>{Hp().render(...t)},db=(...t)=>{const e=Hp().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=pb(r);if(!i)return;const o=e._component;!te(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=n(i,!1,hb(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e};function hb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function pb(t){return Ae(t)?document.querySelector(t):t}function Yi(t){"@babel/helpers - typeof";return Yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yi(t)}function gb(t,e){if(Yi(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function mb(t){var e=gb(t,"string");return Yi(e)=="symbol"?e:e+""}function vb(t,e,n){return(e=mb(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ir(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pf(Object(n),!0).forEach(function(r){vb(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pf(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function O(){return O=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},O.apply(null,arguments)}const yb=Array.isArray,_b=t=>typeof t=="string",bb=t=>t!==null&&typeof t=="object";function _o(){const t=[];for(let e=0;e<arguments.length;e++){const n=e<0||arguments.length<=e?void 0:arguments[e];if(n){if(_b(n))t.push(n);else if(yb(n))for(let r=0;r<n.length;r++){const i=_o(n[r]);i&&t.push(i)}else if(bb(n))for(const r in n)n[r]&&t.push(r)}}return t.join(" ")}const wb=t=>t!=null&&t!=="",Eb=(t,e)=>{const n=O({},t);return Object.keys(e).forEach(r=>{const i=n[r];if(i)i.type||i.default?i.default=e[r]:i.def?i.def(e[r]):n[r]={type:i,default:e[r]};else throw new Error(`not have ${r} prop`)}),n},Sb=Symbol("skipFlatten"),Ji=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=Array.isArray(t)?t:[t],r=[];return n.forEach(i=>{Array.isArray(i)?r.push(...Ji(i,e)):i&&i.type===rt?i.key===Sb?r.push(i):r.push(...Ji(i.children,e)):i&&bs(i)?e&&!zp(i)?r.push(i):e||r.push(i):wb(i)&&r.push(i)}),r},El=t=>{var e;let n=((e=t==null?void 0:t.vnode)===null||e===void 0?void 0:e.el)||t&&(t.$el||t);for(;n&&!n.tagName;)n=n.nextSibling;return n};function zp(t){return t&&(t.type===Ye||t.type===rt&&t.children.length===0||t.type===ti&&t.children.trim()==="")}function Wp(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];const e=[];return t.forEach(n=>{Array.isArray(n)?e.push(...n):(n==null?void 0:n.type)===rt?e.push(...Wp(n.children)):e.push(n)}),e.filter(n=>!zp(n))}let qp=t=>setTimeout(t,16),Gp=t=>clearTimeout(t);typeof window<"u"&&"requestAnimationFrame"in window&&(qp=t=>window.requestAnimationFrame(t),Gp=t=>window.cancelAnimationFrame(t));let gf=0;const Dc=new Map;function Kp(t){Dc.delete(t)}function Sl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;gf+=1;const n=gf;function r(i){if(i===0)Kp(n),t();else{const o=qp(()=>{r(i-1)});Dc.set(n,o)}}return r(e),n}Sl.cancel=t=>{const e=Dc.get(t);return Kp(e),Gp(e)};const Tl=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e},Xp=t=>{const e=t;return e.install=function(n){n.component(e.displayName||e.name,t)},t};function mf(){return{type:[Function,Array]}}function Mc(t){return{type:Object,default:t}}function Ri(t){return{type:Boolean,default:t}}function Il(t,e){const n={validator:()=>!0,default:t};return n}function vf(t){return{type:Array,default:t}}function yf(t){return{type:String,default:t}}function Tb(t,e){return t?{type:t,default:e}:Il(e)}const Ib="anticon",Yp=Symbol("configProvider"),Jp={getPrefixCls:(t,e)=>e||(t?`ant-${t}`:"ant"),iconPrefixCls:H(()=>Ib),getPopupContainer:H(()=>()=>document.body),direction:H(()=>"ltr")},Cb=()=>Ce(Yp,Jp),Ab=Symbol("DisabledContextKey"),Qp=()=>Ce(Ab,He(void 0)),Pb={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"},Rb={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"Ok",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},Zp={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},_f={lang:O({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},Rb),timePickerLocale:O({},Zp)},ut="${label} is not a valid ${type}",bf={locale:"en",Pagination:Pb,DatePicker:_f,TimePicker:Zp,Calendar:_f,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:ut,method:ut,array:ut,object:ut,number:ut,date:ut,boolean:ut,integer:ut,float:ut,regexp:ut,email:ut,url:ut,hex:ut},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"}},xb=tt({compatConfig:{MODE:3},name:"LocaleReceiver",props:{componentName:String,defaultLocale:{type:[Object,Function]},children:{type:Function}},setup(t,e){let{slots:n}=e;const r=Ce("localeData",{}),i=H(()=>{const{componentName:s="global",defaultLocale:a}=t,l=a||bf[s||"global"],{antLocale:c}=r,u=s&&c?c[s]:{};return O(O({},typeof l=="function"?l():l),u||{})}),o=H(()=>{const{antLocale:s}=r,a=s&&s.locale;return s&&s.exist&&!a?bf.locale:a});return()=>{const s=t.children||n.default,{antLocale:a}=r;return s==null?void 0:s(i.value,o.value,a)}}});function $c(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}const wf="%";class Ob{constructor(e){this.cache=new Map,this.instanceId=e}get(e){return this.cache.get(Array.isArray(e)?e.join(wf):e)||null}update(e,n){const r=Array.isArray(e)?e.join(wf):e,i=this.cache.get(r),o=n(i);o===null?this.cache.delete(r):this.cache.set(r,o)}}const eg="data-token-hash",lr="data-css-hash",Or="__cssinjs_instance__";function Qi(){const t=Math.random().toString(12).slice(2);if(typeof document<"u"&&document.head&&document.body){const e=document.body.querySelectorAll(`style[${lr}]`)||[],{firstChild:n}=document.head;Array.from(e).forEach(i=>{i[Or]=i[Or]||t,i[Or]===t&&document.head.insertBefore(i,n)});const r={};Array.from(document.querySelectorAll(`style[${lr}]`)).forEach(i=>{var o;const s=i.getAttribute(lr);r[s]?i[Or]===t&&((o=i.parentNode)===null||o===void 0||o.removeChild(i)):r[s]=!0})}return new Ob(t)}const tg=Symbol("StyleContextKey"),kb=()=>{var t,e,n;const r=vo();let i;if(r&&r.appContext){const o=(n=(e=(t=r.appContext)===null||t===void 0?void 0:t.config)===null||e===void 0?void 0:e.globalProperties)===null||n===void 0?void 0:n.__ANTDV_CSSINJS_CACHE__;o?i=o:(i=Qi(),r.appContext.config.globalProperties&&(r.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__=i))}else i=Qi();return i},ng={cache:Qi(),defaultCache:!0,hashPriority:"low"},ra=()=>{const t=kb();return Ce(tg,It(O(O({},ng),{cache:t})))},Nb=t=>{const e=ra(),n=It(O(O({},ng),{cache:Qi()}));return sn([()=>Se(t),e],()=>{const r=O({},e.value),i=Se(t);Object.keys(i).forEach(s=>{const a=i[s];i[s]!==void 0&&(r[s]=a)});const{cache:o}=i;r.cache=r.cache||Qi(),r.defaultCache=!o&&e.value.defaultCache,n.value=r},{immediate:!0}),$r(tg,n),n},Db=()=>({autoClear:Ri(),mock:yf(),cache:Mc(),defaultCache:Ri(),hashPriority:yf(),container:Tb(),ssrInline:Ri(),transformers:vf(),linters:vf()});Xp(tt({name:"AStyleProvider",inheritAttrs:!1,props:Db(),setup(t,e){let{slots:n}=e;return Nb(t),()=>{var r;return(r=n.default)===null||r===void 0?void 0:r.call(n)}}}));function rg(t,e,n,r){const i=ra(),o=It(""),s=It();Oc(()=>{o.value=[t,...e.value].join("%")});const a=l=>{i.value.cache.update(l,c=>{const[u=0,f]=c||[];return u-1===0?(r==null||r(f,!1),null):[u-1,f]})};return sn(o,(l,c)=>{c&&a(c),i.value.cache.update(l,u=>{const[f=0,d]=u||[],v=d||n();return[f+1,v]}),s.value=i.value.cache.get(o.value)[1]},{immediate:!0}),br(()=>{a(o.value)}),s}function bo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Mb(t,e){return t&&t.contains?t.contains(e):!1}const Ef="data-vc-order",$b="vc-util-key",Cl=new Map;function ig(){let{mark:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return t?t.startsWith("data-")?t:`data-${t}`:$b}function ia(t){return t.attachTo?t.attachTo:document.querySelector("head")||document.body}function Lb(t){return t==="queue"?"prependQueue":t?"prepend":"append"}function og(t){return Array.from((Cl.get(t)||t).children).filter(e=>e.tagName==="STYLE")}function sg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!bo())return null;const{csp:n,prepend:r}=e,i=document.createElement("style");i.setAttribute(Ef,Lb(r)),n!=null&&n.nonce&&(i.nonce=n==null?void 0:n.nonce),i.innerHTML=t;const o=ia(e),{firstChild:s}=o;if(r){if(r==="queue"){const a=og(o).filter(l=>["prepend","prependQueue"].includes(l.getAttribute(Ef)));if(a.length)return o.insertBefore(i,a[a.length-1].nextSibling),i}o.insertBefore(i,s)}else o.appendChild(i);return i}function ag(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=ia(e);return og(n).find(r=>r.getAttribute(ig(e))===t)}function lg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=ag(t,e);n&&ia(e).removeChild(n)}function Vb(t,e){const n=Cl.get(t);if(!n||!Mb(document,n)){const r=sg("",e),{parentNode:i}=r;Cl.set(t,i),t.removeChild(r)}}function Al(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};var r,i,o;const s=ia(n);Vb(s,n);const a=ag(e,n);if(a)return!((r=n.csp)===null||r===void 0)&&r.nonce&&a.nonce!==((i=n.csp)===null||i===void 0?void 0:i.nonce)&&(a.nonce=(o=n.csp)===null||o===void 0?void 0:o.nonce),a.innerHTML!==t&&(a.innerHTML=t),a;const l=sg(t,n);return l.setAttribute(ig(n),e),l}function Fb(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}class Br{constructor(){this.cache=new Map,this.keys=[],this.cacheCallTimes=0}size(){return this.keys.length}internalGet(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r={map:this.cache};return e.forEach(i=>{var o;r?r=(o=r==null?void 0:r.map)===null||o===void 0?void 0:o.get(i):r=void 0}),r!=null&&r.value&&n&&(r.value[1]=this.cacheCallTimes++),r==null?void 0:r.value}get(e){var n;return(n=this.internalGet(e,!0))===null||n===void 0?void 0:n[0]}has(e){return!!this.internalGet(e)}set(e,n){if(!this.has(e)){if(this.size()+1>Br.MAX_CACHE_SIZE+Br.MAX_CACHE_OFFSET){const[i]=this.keys.reduce((o,s)=>{const[,a]=o;return this.internalGet(s)[1]<a?[s,this.internalGet(s)[1]]:o},[this.keys[0],this.cacheCallTimes]);this.delete(i)}this.keys.push(e)}let r=this.cache;e.forEach((i,o)=>{if(o===e.length-1)r.set(i,{value:[n,this.cacheCallTimes++]});else{const s=r.get(i);s?s.map||(s.map=new Map):r.set(i,{map:new Map}),r=r.get(i).map}})}deleteByPath(e,n){var r;const i=e.get(n[0]);if(n.length===1)return i.map?e.set(n[0],{map:i.map}):e.delete(n[0]),(r=i.value)===null||r===void 0?void 0:r[0];const o=this.deleteByPath(i.map,n.slice(1));return(!i.map||i.map.size===0)&&!i.value&&e.delete(n[0]),o}delete(e){if(this.has(e))return this.keys=this.keys.filter(n=>!Fb(n,e)),this.deleteByPath(this.cache,e)}}Br.MAX_CACHE_SIZE=20;Br.MAX_CACHE_OFFSET=5;let Sf={};function jb(t,e){}function Ub(t,e,n){!e&&!Sf[n]&&(Sf[n]=!0)}function Bb(t,e){Ub(jb,t,e)}function Hb(){}let zb=Hb,Tf=0;class cg{constructor(e){this.derivatives=Array.isArray(e)?e:[e],this.id=Tf,e.length===0&&zb(e.length>0),Tf+=1}getDerivativeToken(e){return this.derivatives.reduce((n,r)=>r(e,n),void 0)}}const La=new Br;function Wb(t){const e=Array.isArray(t)?t:[t];return La.has(e)||La.set(e,new cg(e)),La.get(e)}const If=new WeakMap;function Es(t){let e=If.get(t)||"";return e||(Object.keys(t).forEach(n=>{const r=t[n];e+=n,r instanceof cg?e+=r.id:r&&typeof r=="object"?e+=Es(r):e+=r}),If.set(t,e)),e}function qb(t,e){return $c(`${e}_${Es(t)}`)}const xi=`random-${Date.now()}-${Math.random()}`.replace(/\./g,""),ug="_bAmBoO_";function Gb(t,e,n){var r,i;if(bo()){Al(t,xi);const o=document.createElement("div");o.style.position="fixed",o.style.left="0",o.style.top="0",e==null||e(o),document.body.appendChild(o);const s=n?n(o):(r=getComputedStyle(o).content)===null||r===void 0?void 0:r.includes(ug);return(i=o.parentNode)===null||i===void 0||i.removeChild(o),lg(xi),s}return!1}let Va;function Kb(){return Va===void 0&&(Va=Gb(`@layer ${xi} { .${xi} { content: "${ug}"!important; } }`,t=>{t.className=xi})),Va}const Cf={},Xb=!0,Yb=!1,Jb=!Xb&&!Yb?"css-dev-only-do-not-override":"css",rr=new Map;function Qb(t){rr.set(t,(rr.get(t)||0)+1)}function Zb(t,e){typeof document<"u"&&document.querySelectorAll(`style[${eg}="${t}"]`).forEach(r=>{var i;r[Or]===e&&((i=r.parentNode)===null||i===void 0||i.removeChild(r))})}const e0=0;function t0(t,e){rr.set(t,(rr.get(t)||0)-1);const n=Array.from(rr.keys()),r=n.filter(i=>(rr.get(i)||0)<=0);n.length-r.length>e0&&r.forEach(i=>{Zb(i,e),rr.delete(i)})}const n0=(t,e,n,r)=>{const i=n.getDerivativeToken(t);let o=O(O({},i),e);return r&&(o=r(o)),o};function r0(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:He({});const r=ra(),i=H(()=>O({},...e.value)),o=H(()=>Es(i.value)),s=H(()=>Es(n.value.override||Cf));return rg("token",H(()=>[n.value.salt||"",t.value.id,o.value,s.value]),()=>{const{salt:l="",override:c=Cf,formatToken:u,getComputedToken:f}=n.value,d=f?f(i.value,c,t.value):n0(i.value,c,t.value,u),g=qb(d,l);d._tokenKey=g,Qb(g);const v=`${Jb}-${$c(g)}`;return d._hashId=v,[d,v]},l=>{var c;t0(l[0]._tokenKey,(c=r.value)===null||c===void 0?void 0:c.cache.instanceId)})}var i0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fg="comm",dg="rule",hg="decl",o0="@import",s0="@keyframes",a0="@layer",pg=Math.abs,Lc=String.fromCharCode;function gg(t){return t.trim()}function os(t,e,n){return t.replace(e,n)}function l0(t,e,n){return t.indexOf(e,n)}function Zi(t,e){return t.charCodeAt(e)|0}function Hr(t,e,n){return t.slice(e,n)}function Lt(t){return t.length}function c0(t){return t.length}function zo(t,e){return e.push(t),t}var oa=1,zr=1,mg=0,wt=0,Re=0,ni="";function Vc(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:oa,column:zr,length:s,return:"",siblings:a}}function u0(){return Re}function f0(){return Re=wt>0?Zi(ni,--wt):0,zr--,Re===10&&(zr=1,oa--),Re}function At(){return Re=wt<mg?Zi(ni,wt++):0,zr++,Re===10&&(zr=1,oa++),Re}function kn(){return Zi(ni,wt)}function ss(){return wt}function sa(t,e){return Hr(ni,t,e)}function eo(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function d0(t){return oa=zr=1,mg=Lt(ni=t),wt=0,[]}function h0(t){return ni="",t}function Fa(t){return gg(sa(wt-1,Pl(t===91?t+2:t===40?t+1:t)))}function p0(t){for(;(Re=kn())&&Re<33;)At();return eo(t)>2||eo(Re)>3?"":" "}function g0(t,e){for(;--e&&At()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return sa(t,ss()+(e<6&&kn()==32&&At()==32))}function Pl(t){for(;At();)switch(Re){case t:return wt;case 34:case 39:t!==34&&t!==39&&Pl(Re);break;case 40:t===41&&Pl(t);break;case 92:At();break}return wt}function m0(t,e){for(;At()&&t+Re!==57;)if(t+Re===84&&kn()===47)break;return"/*"+sa(e,wt-1)+"*"+Lc(t===47?t:At())}function v0(t){for(;!eo(kn());)At();return sa(t,wt)}function y0(t){return h0(as("",null,null,null,[""],t=d0(t),0,[0],t))}function as(t,e,n,r,i,o,s,a,l){for(var c=0,u=0,f=s,d=0,g=0,v=0,_=1,C=1,S=1,E=0,I="",T=i,N=o,U=r,m=I;C;)switch(v=E,E=At()){case 40:if(v!=108&&Zi(m,f-1)==58){l0(m+=os(Fa(E),"&","&\f"),"&\f",pg(c?a[c-1]:0))!=-1&&(S=-1);break}case 34:case 39:case 91:m+=Fa(E);break;case 9:case 10:case 13:case 32:m+=p0(v);break;case 92:m+=g0(ss()-1,7);continue;case 47:switch(kn()){case 42:case 47:zo(_0(m0(At(),ss()),e,n,l),l),(eo(v||1)==5||eo(kn()||1)==5)&&Lt(m)&&Hr(m,-1,void 0)!==" "&&(m+=" ");break;default:m+="/"}break;case 123*_:a[c++]=Lt(m)*S;case 125*_:case 59:case 0:switch(E){case 0:case 125:C=0;case 59+u:S==-1&&(m=os(m,/\f/g,"")),g>0&&(Lt(m)-f||_===0&&v===47)&&zo(g>32?Pf(m+";",r,n,f-1,l):Pf(os(m," ","")+";",r,n,f-2,l),l);break;case 59:m+=";";default:if(zo(U=Af(m,e,n,c,u,i,a,I,T=[],N=[],f,o),o),E===123)if(u===0)as(m,e,U,U,T,o,f,a,N);else switch(d===99&&Zi(m,3)===110?100:d){case 100:case 108:case 109:case 115:as(t,U,U,r&&zo(Af(t,U,U,0,0,i,a,I,i,T=[],f,N),N),i,N,f,a,r?T:N);break;default:as(m,U,U,U,[""],N,0,a,N)}}c=u=g=0,_=S=1,I=m="",f=s;break;case 58:f=1+Lt(m),g=v;default:if(_<1){if(E==123)--_;else if(E==125&&_++==0&&f0()==125)continue}switch(m+=Lc(E),E*_){case 38:S=u>0?1:(m+="\f",-1);break;case 44:a[c++]=(Lt(m)-1)*S,S=1;break;case 64:kn()===45&&(m+=Fa(At())),d=kn(),u=f=Lt(I=m+=v0(ss())),E++;break;case 45:v===45&&Lt(m)==2&&(_=0)}}return o}function Af(t,e,n,r,i,o,s,a,l,c,u,f){for(var d=i-1,g=i===0?o:[""],v=c0(g),_=0,C=0,S=0;_<r;++_)for(var E=0,I=Hr(t,d+1,d=pg(C=s[_])),T=t;E<v;++E)(T=gg(C>0?g[E]+" "+I:os(I,/&\f/g,g[E])))&&(l[S++]=T);return Vc(t,e,n,i===0?dg:a,l,c,u,f)}function _0(t,e,n,r){return Vc(t,e,n,fg,Lc(u0()),Hr(t,2,-2),0,r)}function Pf(t,e,n,r,i){return Vc(t,e,n,hg,Hr(t,0,r),Hr(t,r+1,-1),r,i)}function Rl(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function b0(t,e,n,r){switch(t.type){case a0:if(t.children.length)break;case o0:case hg:return t.return=t.return||t.value;case fg:return"";case s0:return t.return=t.value+"{"+Rl(t.children,r)+"}";case dg:if(!Lt(t.value=t.props.join(",")))return""}return Lt(n=Rl(t.children,r))?t.return=t.value+"{"+n+"}":""}const Rf="data-ant-cssinjs-cache-path",w0="_FILE_STYLE__";let cr,vg=!0;function E0(){var t;if(!cr&&(cr={},bo())){const e=document.createElement("div");e.className=Rf,e.style.position="fixed",e.style.visibility="hidden",e.style.top="-9999px",document.body.appendChild(e);let n=getComputedStyle(e).content||"";n=n.replace(/^"/,"").replace(/"$/,""),n.split(";").forEach(i=>{const[o,s]=i.split(":");cr[o]=s});const r=document.querySelector(`style[${Rf}]`);r&&(vg=!1,(t=r.parentNode)===null||t===void 0||t.removeChild(r)),document.body.removeChild(e)}}function S0(t){return E0(),!!cr[t]}function T0(t){const e=cr[t];let n=null;if(e&&bo())if(vg)n=w0;else{const r=document.querySelector(`style[${lr}="${cr[t]}"]`);r?n=r.innerHTML:delete cr[t]}return[n,e]}const xf=bo(),I0="_skip_check_",yg="_multi_value_";function Of(t){return Rl(y0(t),b0).replace(/\{%%%\:[^;];}/g,";")}function C0(t){return typeof t=="object"&&t&&(I0 in t||yg in t)}function A0(t,e,n){if(!e)return t;const r=`.${e}`,i=n==="low"?`:where(${r})`:r;return t.split(",").map(s=>{var a;const l=s.trim().split(/\s+/);let c=l[0]||"";const u=((a=c.match(/^\w+/))===null||a===void 0?void 0:a[0])||"";return c=`${u}${i}${c.slice(u.length)}`,[c,...l.slice(1)].join(" ")}).join(",")}const kf=new Set,xl=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{root:n,injectHash:r,parentSelectors:i}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{root:!0,parentSelectors:[]};const{hashId:o,layer:s,path:a,hashPriority:l,transformers:c=[],linters:u=[]}=e;let f="",d={};function g(C){const S=C.getName(o);if(!d[S]){const[E]=xl(C.style,e,{root:!1,parentSelectors:i});d[S]=`@keyframes ${C.getName(o)}${E}`}}function v(C){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return C.forEach(E=>{Array.isArray(E)?v(E,S):E&&S.push(E)}),S}if(v(Array.isArray(t)?t:[t]).forEach(C=>{const S=typeof C=="string"&&!n?{}:C;if(typeof S=="string")f+=`${S}
`;else if(S._keyframe)g(S);else{const E=c.reduce((I,T)=>{var N;return((N=T==null?void 0:T.visit)===null||N===void 0?void 0:N.call(T,I))||I},S);Object.keys(E).forEach(I=>{var T;const N=E[I];if(typeof N=="object"&&N&&(I!=="animationName"||!N._keyframe)&&!C0(N)){let U=!1,m=I.trim(),R=!1;(n||r)&&o?m.startsWith("@")?U=!0:m=A0(I,o,l):n&&!o&&(m==="&"||m==="")&&(m="",R=!0);const[A,z]=xl(N,e,{root:R,injectHash:U,parentSelectors:[...i,m]});d=O(O({},d),z),f+=`${m}${A}`}else{let U=function(R,A){const z=R.replace(/[A-Z]/g,V=>`-${V.toLowerCase()}`);let ee=A;!i0[R]&&typeof ee=="number"&&ee!==0&&(ee=`${ee}px`),R==="animationName"&&(A!=null&&A._keyframe)&&(g(A),ee=A.getName(o)),f+=`${z}:${ee};`};const m=(T=N==null?void 0:N.value)!==null&&T!==void 0?T:N;typeof N=="object"&&(N!=null&&N[yg])&&Array.isArray(m)?m.forEach(R=>{U(I,R)}):U(I,m)}})}}),!n)f=`{${f}}`;else if(s&&Kb()){const C=s.split(",");f=`@layer ${C[C.length-1].trim()} {${f}}`,C.length>1&&(f=`@layer ${s}{%%%:%}${f}`)}return[f,d]};function P0(t,e){return $c(`${t.join("%")}${e}`)}function Nf(t,e){const n=ra(),r=H(()=>t.value.token._tokenKey),i=H(()=>[r.value,...t.value.path]);let o=xf;return rg("style",i,()=>{const{path:s,hashId:a,layer:l,nonce:c,clientOnly:u,order:f=0}=t.value,d=i.value.join("|");if(S0(d)){const[m,R]=T0(d);if(m)return[m,r.value,R,{},u,f]}const g=e(),{hashPriority:v,container:_,transformers:C,linters:S,cache:E}=n.value,[I,T]=xl(g,{hashId:a,hashPriority:v,layer:l,path:s.join("-"),transformers:C,linters:S}),N=Of(I),U=P0(i.value,N);if(o){const m={mark:lr,prepend:"queue",attachTo:_,priority:f},R=typeof c=="function"?c():c;R&&(m.csp={nonce:R});const A=Al(N,U,m);A[Or]=E.instanceId,A.setAttribute(eg,r.value),Object.keys(T).forEach(z=>{kf.has(z)||(kf.add(z),Al(Of(T[z]),`_effect-${z}`,{mark:lr,prepend:"queue",attachTo:_}))})}return[N,r.value,U,T,u,f]},(s,a)=>{let[,,l]=s;(a||n.value.autoClear)&&xf&&lg(l,{mark:lr})}),s=>s}const R0="4.2.5";function Fe(t,e){x0(t)&&(t="100%");var n=O0(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Wo(t){return Math.min(1,Math.max(0,t))}function x0(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function O0(t){return typeof t=="string"&&t.indexOf("%")!==-1}function _g(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function qo(t){return t<=1?"".concat(Number(t)*100,"%"):t}function or(t){return t.length===1?"0"+t:String(t)}function k0(t,e,n){return{r:Fe(t,255)*255,g:Fe(e,255)*255,b:Fe(n,255)*255}}function Df(t,e,n){t=Fe(t,255),e=Fe(e,255),n=Fe(n,255);var r=Math.max(t,e,n),i=Math.min(t,e,n),o=0,s=0,a=(r+i)/2;if(r===i)s=0,o=0;else{var l=r-i;switch(s=a>.5?l/(2-r-i):l/(r+i),r){case t:o=(e-n)/l+(e<n?6:0);break;case e:o=(n-t)/l+2;break;case n:o=(t-e)/l+4;break}o/=6}return{h:o,s,l:a}}function ja(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*(6*n):n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function N0(t,e,n){var r,i,o;if(t=Fe(t,360),e=Fe(e,100),n=Fe(n,100),e===0)i=n,o=n,r=n;else{var s=n<.5?n*(1+e):n+e-n*e,a=2*n-s;r=ja(a,s,t+1/3),i=ja(a,s,t),o=ja(a,s,t-1/3)}return{r:r*255,g:i*255,b:o*255}}function Ol(t,e,n){t=Fe(t,255),e=Fe(e,255),n=Fe(n,255);var r=Math.max(t,e,n),i=Math.min(t,e,n),o=0,s=r,a=r-i,l=r===0?0:a/r;if(r===i)o=0;else{switch(r){case t:o=(e-n)/a+(e<n?6:0);break;case e:o=(n-t)/a+2;break;case n:o=(t-e)/a+4;break}o/=6}return{h:o,s:l,v:s}}function D0(t,e,n){t=Fe(t,360)*6,e=Fe(e,100),n=Fe(n,100);var r=Math.floor(t),i=t-r,o=n*(1-e),s=n*(1-i*e),a=n*(1-(1-i)*e),l=r%6,c=[n,s,o,o,a,n][l],u=[a,n,n,s,o,o][l],f=[o,o,a,n,n,s][l];return{r:c*255,g:u*255,b:f*255}}function kl(t,e,n,r){var i=[or(Math.round(t).toString(16)),or(Math.round(e).toString(16)),or(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function M0(t,e,n,r,i){var o=[or(Math.round(t).toString(16)),or(Math.round(e).toString(16)),or(Math.round(n).toString(16)),or($0(r))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function $0(t){return Math.round(parseFloat(t)*255).toString(16)}function Mf(t){return ft(t)/255}function ft(t){return parseInt(t,16)}function L0(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var Nl={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Pr(t){var e={r:0,g:0,b:0},n=1,r=null,i=null,o=null,s=!1,a=!1;return typeof t=="string"&&(t=j0(t)),typeof t=="object"&&(Gt(t.r)&&Gt(t.g)&&Gt(t.b)?(e=k0(t.r,t.g,t.b),s=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Gt(t.h)&&Gt(t.s)&&Gt(t.v)?(r=qo(t.s),i=qo(t.v),e=D0(t.h,r,i),s=!0,a="hsv"):Gt(t.h)&&Gt(t.s)&&Gt(t.l)&&(r=qo(t.s),o=qo(t.l),e=N0(t.h,r,o),s=!0,a="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=_g(n),{ok:s,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}var V0="[-\\+]?\\d+%?",F0="[-\\+]?\\d*\\.\\d+%?",Nn="(?:".concat(F0,")|(?:").concat(V0,")"),Ua="[\\s|\\(]+(".concat(Nn,")[,|\\s]+(").concat(Nn,")[,|\\s]+(").concat(Nn,")\\s*\\)?"),Ba="[\\s|\\(]+(".concat(Nn,")[,|\\s]+(").concat(Nn,")[,|\\s]+(").concat(Nn,")[,|\\s]+(").concat(Nn,")\\s*\\)?"),Tt={CSS_UNIT:new RegExp(Nn),rgb:new RegExp("rgb"+Ua),rgba:new RegExp("rgba"+Ba),hsl:new RegExp("hsl"+Ua),hsla:new RegExp("hsla"+Ba),hsv:new RegExp("hsv"+Ua),hsva:new RegExp("hsva"+Ba),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function j0(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(Nl[t])t=Nl[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=Tt.rgb.exec(t);return n?{r:n[1],g:n[2],b:n[3]}:(n=Tt.rgba.exec(t),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=Tt.hsl.exec(t),n?{h:n[1],s:n[2],l:n[3]}:(n=Tt.hsla.exec(t),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=Tt.hsv.exec(t),n?{h:n[1],s:n[2],v:n[3]}:(n=Tt.hsva.exec(t),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=Tt.hex8.exec(t),n?{r:ft(n[1]),g:ft(n[2]),b:ft(n[3]),a:Mf(n[4]),format:e?"name":"hex8"}:(n=Tt.hex6.exec(t),n?{r:ft(n[1]),g:ft(n[2]),b:ft(n[3]),format:e?"name":"hex"}:(n=Tt.hex4.exec(t),n?{r:ft(n[1]+n[1]),g:ft(n[2]+n[2]),b:ft(n[3]+n[3]),a:Mf(n[4]+n[4]),format:e?"name":"hex8"}:(n=Tt.hex3.exec(t),n?{r:ft(n[1]+n[1]),g:ft(n[2]+n[2]),b:ft(n[3]+n[3]),format:e?"name":"hex"}:!1)))))))))}function Gt(t){return!!Tt.CSS_UNIT.exec(String(t))}var ot=function(){function t(e,n){e===void 0&&(e=""),n===void 0&&(n={});var r;if(e instanceof t)return e;typeof e=="number"&&(e=L0(e)),this.originalInput=e;var i=Pr(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=n.format)!==null&&r!==void 0?r:i.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),n,r,i,o=e.r/255,s=e.g/255,a=e.b/255;return o<=.03928?n=o/12.92:n=Math.pow((o+.055)/1.055,2.4),s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),.2126*n+.7152*r+.0722*i},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=_g(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},t.prototype.toHsv=function(){var e=Ol(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=Ol(this.r,this.g,this.b),n=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.v*100);return this.a===1?"hsv(".concat(n,", ").concat(r,"%, ").concat(i,"%)"):"hsva(".concat(n,", ").concat(r,"%, ").concat(i,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var e=Df(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=Df(this.r,this.g,this.b),n=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.l*100);return this.a===1?"hsl(".concat(n,", ").concat(r,"%, ").concat(i,"%)"):"hsla(".concat(n,", ").concat(r,"%, ").concat(i,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(e){return e===void 0&&(e=!1),kl(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),M0(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(n,", ").concat(r,")"):"rgba(".concat(e,", ").concat(n,", ").concat(r,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var e=function(n){return"".concat(Math.round(Fe(n,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(n){return Math.round(Fe(n,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+kl(this.r,this.g,this.b,!1),n=0,r=Object.entries(Nl);n<r.length;n++){var i=r[n],o=i[0],s=i[1];if(e===s)return o}return!1},t.prototype.toString=function(e){var n=!!e;e=e??this.format;var r=!1,i=this.a<1&&this.a>=0,o=!n&&i&&(e.startsWith("hex")||e==="name");return o?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l+=e/100,n.l=Wo(n.l),new t(n)},t.prototype.brighten=function(e){e===void 0&&(e=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),new t(n)},t.prototype.darken=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l-=e/100,n.l=Wo(n.l),new t(n)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s-=e/100,n.s=Wo(n.s),new t(n)},t.prototype.saturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s+=e/100,n.s=Wo(n.s),new t(n)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var n=this.toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,new t(n)},t.prototype.mix=function(e,n){n===void 0&&(n=50);var r=this.toRgb(),i=new t(e).toRgb(),o=n/100,s={r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a};return new t(s)},t.prototype.analogous=function(e,n){e===void 0&&(e=6),n===void 0&&(n=30);var r=this.toHsl(),i=360/n,o=[this];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,o.push(new t(r));return o},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var n=this.toHsv(),r=n.h,i=n.s,o=n.v,s=[],a=1/e;e--;)s.push(new t({h:r,s:i,v:o})),o=(o+a)%1;return s},t.prototype.splitcomplement=function(){var e=this.toHsl(),n=e.h;return[this,new t({h:(n+72)%360,s:e.s,l:e.l}),new t({h:(n+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var n=this.toRgb(),r=new t(e).toRgb(),i=n.a+r.a*(1-n.a);return new t({r:(n.r*n.a+r.r*r.a*(1-n.a))/i,g:(n.g*n.a+r.g*r.a*(1-n.a))/i,b:(n.b*n.a+r.b*r.a*(1-n.a))/i,a:i})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var n=this.toHsl(),r=n.h,i=[this],o=360/e,s=1;s<e;s++)i.push(new t({h:(r+s*o)%360,s:n.s,l:n.l}));return i},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}(),Go=2,$f=.16,U0=.05,B0=.05,H0=.15,bg=5,wg=4,z0=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function Lf(t){var e=t.r,n=t.g,r=t.b,i=Ol(e,n,r);return{h:i.h*360,s:i.s,v:i.v}}function Ko(t){var e=t.r,n=t.g,r=t.b;return"#".concat(kl(e,n,r,!1))}function W0(t,e,n){var r=n/100,i={r:(e.r-t.r)*r+t.r,g:(e.g-t.g)*r+t.g,b:(e.b-t.b)*r+t.b};return i}function Vf(t,e,n){var r;return Math.round(t.h)>=60&&Math.round(t.h)<=240?r=n?Math.round(t.h)-Go*e:Math.round(t.h)+Go*e:r=n?Math.round(t.h)+Go*e:Math.round(t.h)-Go*e,r<0?r+=360:r>=360&&(r-=360),r}function Ff(t,e,n){if(t.h===0&&t.s===0)return t.s;var r;return n?r=t.s-$f*e:e===wg?r=t.s+$f:r=t.s+U0*e,r>1&&(r=1),n&&e===bg&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2))}function jf(t,e,n){var r;return n?r=t.v+B0*e:r=t.v-H0*e,r>1&&(r=1),Number(r.toFixed(2))}function to(t){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],r=Pr(t),i=bg;i>0;i-=1){var o=Lf(r),s=Ko(Pr({h:Vf(o,i,!0),s:Ff(o,i,!0),v:jf(o,i,!0)}));n.push(s)}n.push(Ko(r));for(var a=1;a<=wg;a+=1){var l=Lf(r),c=Ko(Pr({h:Vf(l,a),s:Ff(l,a),v:jf(l,a)}));n.push(c)}return e.theme==="dark"?z0.map(function(u){var f=u.index,d=u.opacity,g=Ko(W0(Pr(e.backgroundColor||"#141414"),Pr(n[f]),d*100));return g}):n}var Ha={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},ls={},za={};Object.keys(Ha).forEach(function(t){ls[t]=to(Ha[t]),ls[t].primary=ls[t][5],za[t]=to(Ha[t],{theme:"dark",backgroundColor:"#141414"}),za[t].primary=za[t][5]});var q0=ls.blue;const G0=t=>{const{controlHeight:e}=t;return{controlHeightSM:e*.75,controlHeightXS:e*.5,controlHeightLG:e*1.25}};function K0(t){const{sizeUnit:e,sizeStep:n}=t;return{sizeXXL:e*(n+8),sizeXL:e*(n+4),sizeLG:e*(n+2),sizeMD:e*(n+1),sizeMS:e*n,size:e*n,sizeSM:e*(n-1),sizeXS:e*(n-2),sizeXXS:e*(n-3)}}const Eg={blue:"#1677ff",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#eb2f96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},Fc=O(O({},Eg),{colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1});function X0(t,e){let{generateColorPalettes:n,generateNeutralColorPalettes:r}=e;const{colorSuccess:i,colorWarning:o,colorError:s,colorInfo:a,colorPrimary:l,colorBgBase:c,colorTextBase:u}=t,f=n(l),d=n(i),g=n(o),v=n(s),_=n(a),C=r(c,u);return O(O({},C),{colorPrimaryBg:f[1],colorPrimaryBgHover:f[2],colorPrimaryBorder:f[3],colorPrimaryBorderHover:f[4],colorPrimaryHover:f[5],colorPrimary:f[6],colorPrimaryActive:f[7],colorPrimaryTextHover:f[8],colorPrimaryText:f[9],colorPrimaryTextActive:f[10],colorSuccessBg:d[1],colorSuccessBgHover:d[2],colorSuccessBorder:d[3],colorSuccessBorderHover:d[4],colorSuccessHover:d[4],colorSuccess:d[6],colorSuccessActive:d[7],colorSuccessTextHover:d[8],colorSuccessText:d[9],colorSuccessTextActive:d[10],colorErrorBg:v[1],colorErrorBgHover:v[2],colorErrorBorder:v[3],colorErrorBorderHover:v[4],colorErrorHover:v[5],colorError:v[6],colorErrorActive:v[7],colorErrorTextHover:v[8],colorErrorText:v[9],colorErrorTextActive:v[10],colorWarningBg:g[1],colorWarningBgHover:g[2],colorWarningBorder:g[3],colorWarningBorderHover:g[4],colorWarningHover:g[4],colorWarning:g[6],colorWarningActive:g[7],colorWarningTextHover:g[8],colorWarningText:g[9],colorWarningTextActive:g[10],colorInfoBg:_[1],colorInfoBgHover:_[2],colorInfoBorder:_[3],colorInfoBorderHover:_[4],colorInfoHover:_[4],colorInfo:_[6],colorInfoActive:_[7],colorInfoTextHover:_[8],colorInfoText:_[9],colorInfoTextActive:_[10],colorBgMask:new ot("#000").setAlpha(.45).toRgbString(),colorWhite:"#fff"})}const Y0=t=>{let e=t,n=t,r=t,i=t;return t<6&&t>=5?e=t+1:t<16&&t>=6?e=t+2:t>=16&&(e=16),t<7&&t>=5?n=4:t<8&&t>=7?n=5:t<14&&t>=8?n=6:t<16&&t>=14?n=7:t>=16&&(n=8),t<6&&t>=2?r=1:t>=6&&(r=2),t>4&&t<8?i=4:t>=8&&(i=6),{borderRadius:t>16?16:t,borderRadiusXS:r,borderRadiusSM:n,borderRadiusLG:e,borderRadiusOuter:i}};function J0(t){const{motionUnit:e,motionBase:n,borderRadius:r,lineWidth:i}=t;return O({motionDurationFast:`${(n+e).toFixed(1)}s`,motionDurationMid:`${(n+e*2).toFixed(1)}s`,motionDurationSlow:`${(n+e*3).toFixed(1)}s`,lineWidthBold:i+1},Y0(r))}const Kt=(t,e)=>new ot(t).setAlpha(e).toRgbString(),hi=(t,e)=>new ot(t).darken(e).toHexString(),Q0=t=>{const e=to(t);return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[4],6:e[5],7:e[6],8:e[4],9:e[5],10:e[6]}},Z0=(t,e)=>{const n=t||"#fff",r=e||"#000";return{colorBgBase:n,colorTextBase:r,colorText:Kt(r,.88),colorTextSecondary:Kt(r,.65),colorTextTertiary:Kt(r,.45),colorTextQuaternary:Kt(r,.25),colorFill:Kt(r,.15),colorFillSecondary:Kt(r,.06),colorFillTertiary:Kt(r,.04),colorFillQuaternary:Kt(r,.02),colorBgLayout:hi(n,4),colorBgContainer:hi(n,0),colorBgElevated:hi(n,0),colorBgSpotlight:Kt(r,.85),colorBorder:hi(n,15),colorBorderSecondary:hi(n,6)}};function ew(t){const e=new Array(10).fill(null).map((n,r)=>{const i=r-1,o=t*Math.pow(2.71828,i/5),s=r>1?Math.floor(o):Math.ceil(o);return Math.floor(s/2)*2});return e[1]=t,e.map(n=>{const r=n+8;return{size:n,lineHeight:r/n}})}const tw=t=>{const e=ew(t),n=e.map(i=>i.size),r=e.map(i=>i.lineHeight);return{fontSizeSM:n[0],fontSize:n[1],fontSizeLG:n[2],fontSizeXL:n[3],fontSizeHeading1:n[6],fontSizeHeading2:n[5],fontSizeHeading3:n[4],fontSizeHeading4:n[3],fontSizeHeading5:n[2],lineHeight:r[1],lineHeightLG:r[2],lineHeightSM:r[0],lineHeightHeading1:r[6],lineHeightHeading2:r[5],lineHeightHeading3:r[4],lineHeightHeading4:r[3],lineHeightHeading5:r[2]}};function nw(t){const e=Object.keys(Eg).map(n=>{const r=to(t[n]);return new Array(10).fill(1).reduce((i,o,s)=>(i[`${n}-${s+1}`]=r[s],i),{})}).reduce((n,r)=>(n=O(O({},n),r),n),{});return O(O(O(O(O(O(O({},t),e),X0(t,{generateColorPalettes:Q0,generateNeutralColorPalettes:Z0})),tw(t.fontSize)),K0(t)),G0(t)),J0(t))}function Wa(t){return t>=0&&t<=255}function Xo(t,e){const{r:n,g:r,b:i,a:o}=new ot(t).toRgb();if(o<1)return t;const{r:s,g:a,b:l}=new ot(e).toRgb();for(let c=.01;c<=1;c+=.01){const u=Math.round((n-s*(1-c))/c),f=Math.round((r-a*(1-c))/c),d=Math.round((i-l*(1-c))/c);if(Wa(u)&&Wa(f)&&Wa(d))return new ot({r:u,g:f,b:d,a:Math.round(c*100)/100}).toRgbString()}return new ot({r:n,g:r,b:i,a:1}).toRgbString()}var rw=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function iw(t){const{override:e}=t,n=rw(t,["override"]),r=O({},e);Object.keys(Fc).forEach(g=>{delete r[g]});const i=O(O({},n),r),o=480,s=576,a=768,l=992,c=1200,u=1600,f=2e3;return O(O(O({},i),{colorLink:i.colorInfoText,colorLinkHover:i.colorInfoHover,colorLinkActive:i.colorInfoActive,colorFillContent:i.colorFillSecondary,colorFillContentHover:i.colorFill,colorFillAlter:i.colorFillQuaternary,colorBgContainerDisabled:i.colorFillTertiary,colorBorderBg:i.colorBgContainer,colorSplit:Xo(i.colorBorderSecondary,i.colorBgContainer),colorTextPlaceholder:i.colorTextQuaternary,colorTextDisabled:i.colorTextQuaternary,colorTextHeading:i.colorText,colorTextLabel:i.colorTextSecondary,colorTextDescription:i.colorTextTertiary,colorTextLightSolid:i.colorWhite,colorHighlight:i.colorError,colorBgTextHover:i.colorFillSecondary,colorBgTextActive:i.colorFill,colorIcon:i.colorTextTertiary,colorIconHover:i.colorText,colorErrorOutline:Xo(i.colorErrorBg,i.colorBgContainer),colorWarningOutline:Xo(i.colorWarningBg,i.colorBgContainer),fontSizeIcon:i.fontSizeSM,lineWidth:i.lineWidth,controlOutlineWidth:i.lineWidth*2,controlInteractiveSize:i.controlHeight/2,controlItemBgHover:i.colorFillTertiary,controlItemBgActive:i.colorPrimaryBg,controlItemBgActiveHover:i.colorPrimaryBgHover,controlItemBgActiveDisabled:i.colorFill,controlTmpOutline:i.colorFillQuaternary,controlOutline:Xo(i.colorPrimaryBg,i.colorBgContainer),lineType:i.lineType,borderRadius:i.borderRadius,borderRadiusXS:i.borderRadiusXS,borderRadiusSM:i.borderRadiusSM,borderRadiusLG:i.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:i.sizeXXS,paddingXS:i.sizeXS,paddingSM:i.sizeSM,padding:i.size,paddingMD:i.sizeMD,paddingLG:i.sizeLG,paddingXL:i.sizeXL,paddingContentHorizontalLG:i.sizeLG,paddingContentVerticalLG:i.sizeMS,paddingContentHorizontal:i.sizeMS,paddingContentVertical:i.sizeSM,paddingContentHorizontalSM:i.size,paddingContentVerticalSM:i.sizeXS,marginXXS:i.sizeXXS,marginXS:i.sizeXS,marginSM:i.sizeSM,margin:i.size,marginMD:i.sizeMD,marginLG:i.sizeLG,marginXL:i.sizeXL,marginXXL:i.sizeXXL,boxShadow:`
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,boxShadowSecondary:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTertiary:`
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,screenXS:o,screenXSMin:o,screenXSMax:s-1,screenSM:s,screenSMMin:s,screenSMMax:a-1,screenMD:a,screenMDMin:a,screenMDMax:l-1,screenLG:l,screenLGMin:l,screenLGMax:c-1,screenXL:c,screenXLMin:c,screenXLMax:u-1,screenXXL:u,screenXXLMin:u,screenXXLMax:f-1,screenXXXL:f,screenXXXLMin:f,boxShadowPopoverArrow:"3px 3px 7px rgba(0, 0, 0, 0.1)",boxShadowCard:`
      0 1px 2px -2px ${new ot("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ot("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ot("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,boxShadowDrawerRight:`
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerLeft:`
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerUp:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerDown:`
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"}),r)}const ow=t=>({a:{color:t.colorLink,textDecoration:t.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${t.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:t.colorLinkHover},"&:active":{color:t.colorLinkActive},"&:active,\n  &:hover":{textDecoration:t.linkHoverDecoration,outline:0},"&:focus":{textDecoration:t.linkFocusDecoration,outline:0},"&[disabled]":{color:t.colorTextDisabled,cursor:"not-allowed"}}}),sw=(t,e)=>{const{fontFamily:n,fontSize:r}=t,i=`[class^="${e}"], [class*=" ${e}"]`;return{[i]:{fontFamily:n,fontSize:r,boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"},[i]:{boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}}}}},aw=t=>({outline:`${t.lineWidthBold}px solid ${t.colorPrimaryBorder}`,outlineOffset:1,transition:"outline-offset 0s, outline 0s"}),lw=t=>({"&:focus-visible":O({},aw(t))});function aa(t,e,n){return r=>{const i=H(()=>r==null?void 0:r.value),[o,s,a]=la(),{getPrefixCls:l,iconPrefixCls:c}=Cb(),u=H(()=>l()),f=H(()=>({theme:o.value,token:s.value,hashId:a.value,path:["Shared",u.value]}));Nf(f,()=>[{"&":ow(s.value)}]);const d=H(()=>({theme:o.value,token:s.value,hashId:a.value,path:[t,i.value,c.value]}));return[Nf(d,()=>{const{token:g,flush:v}=uw(s.value),C=O(O({},n),s.value[t]),S=`.${i.value}`,E=wo(g,{componentCls:S,prefixCls:i.value,iconCls:`.${c.value}`,antCls:`.${u.value}`},C),I=e(E,{hashId:a.value,prefixCls:i.value,rootPrefixCls:u.value,iconPrefixCls:c.value,overrideComponentToken:s.value[t]});return v(t,C),[sw(s.value,i.value),I]}),a]}}const Sg=typeof CSSINJS_STATISTIC<"u";let Dl=!0;function wo(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!Sg)return O({},...e);Dl=!1;const r={};return e.forEach(i=>{Object.keys(i).forEach(s=>{Object.defineProperty(r,s,{configurable:!0,enumerable:!0,get:()=>i[s]})})}),Dl=!0,r}function cw(){}function uw(t){let e,n=t,r=cw;return Sg&&(e=new Set,n=new Proxy(t,{get(i,o){return Dl&&e.add(o),i[o]}}),r=(i,o)=>{Array.from(e)}),{token:n,keys:e,flush:r}}const fw=Wb(nw),dw={token:Fc,hashed:!0},hw=Symbol("DesignTokenContext"),pw=It();function la(){const t=Ce(hw,H(()=>pw.value||dw)),e=H(()=>`${R0}-${t.value.hashed||""}`),n=H(()=>t.value.theme||fw),r=r0(n,H(()=>[Fc,t.value.token]),H(()=>({salt:e.value,override:O({override:t.value.token},t.value.components),formatToken:iw})));return[n,H(()=>r.value[0]),H(()=>t.value.hashed?r.value[1]:"")]}const jc=tt({compatConfig:{MODE:3},setup(){const[,t]=la(),e=H(()=>new ot(t.value.colorBgBase).toHsl().l<.5?{opacity:.65}:{});return()=>B("svg",{style:e.value,width:"184",height:"152",viewBox:"0 0 184 152",xmlns:"http://www.w3.org/2000/svg"},[B("g",{fill:"none","fill-rule":"evenodd"},[B("g",{transform:"translate(24 31.67)"},[B("ellipse",{"fill-opacity":".8",fill:"#F5F5F7",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"},null),B("path",{d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",fill:"#AEB8C2"},null),B("path",{d:"M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",fill:"url(#linearGradient-1)",transform:"translate(13.56)"},null),B("path",{d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",fill:"#F5F5F7"},null),B("path",{d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",fill:"#DCE0E6"},null)]),B("path",{d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",fill:"#DCE0E6"},null),B("g",{transform:"translate(149.65 15.383)",fill:"#FFF"},[B("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"},null),B("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"},null)])])])}});jc.PRESENTED_IMAGE_DEFAULT=!0;const Tg=tt({compatConfig:{MODE:3},setup(){const[,t]=la(),e=H(()=>{const{colorFill:n,colorFillTertiary:r,colorFillQuaternary:i,colorBgContainer:o}=t.value;return{borderColor:new ot(n).onBackground(o).toHexString(),shadowColor:new ot(r).onBackground(o).toHexString(),contentColor:new ot(i).onBackground(o).toHexString()}});return()=>B("svg",{width:"64",height:"41",viewBox:"0 0 64 41",xmlns:"http://www.w3.org/2000/svg"},[B("g",{transform:"translate(0 1)",fill:"none","fill-rule":"evenodd"},[B("ellipse",{fill:e.value.shadowColor,cx:"32",cy:"33",rx:"32",ry:"7"},null),B("g",{"fill-rule":"nonzero",stroke:e.value.borderColor},[B("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"},null),B("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",fill:e.value.contentColor},null)])])])}});Tg.PRESENTED_IMAGE_SIMPLE=!0;const gw=t=>{const{componentCls:e,margin:n,marginXS:r,marginXL:i,fontSize:o,lineHeight:s}=t;return{[e]:{marginInline:r,fontSize:o,lineHeight:s,textAlign:"center",[`${e}-image`]:{height:t.emptyImgHeight,marginBottom:r,opacity:t.opacityImage,img:{height:"100%"},svg:{height:"100%",margin:"auto"}},[`${e}-footer`]:{marginTop:n},"&-normal":{marginBlock:i,color:t.colorTextDisabled,[`${e}-image`]:{height:t.emptyImgHeightMD}},"&-small":{marginBlock:r,color:t.colorTextDisabled,[`${e}-image`]:{height:t.emptyImgHeightSM}}}}},mw=aa("Empty",t=>{const{componentCls:e,controlHeightLG:n}=t,r=wo(t,{emptyImgCls:`${e}-img`,emptyImgHeight:n*2.5,emptyImgHeightMD:n,emptyImgHeightSM:n*.875});return[gw(r)]});var vw=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};const yw=()=>({prefixCls:String,imageStyle:Mc(),image:Il(),description:Il()}),Uc=tt({name:"AEmpty",compatConfig:{MODE:3},inheritAttrs:!1,props:yw(),setup(t,e){let{slots:n={},attrs:r}=e;const{direction:i,prefixCls:o}=ri("empty",t),[s,a]=mw(o);return()=>{var l,c;const u=o.value,f=O(O({},t),r),{image:d=((l=n.image)===null||l===void 0?void 0:l.call(n))||cn(jc),description:g=((c=n.description)===null||c===void 0?void 0:c.call(n))||void 0,imageStyle:v,class:_=""}=f,C=vw(f,["image","description","imageStyle","class"]),S=typeof d=="function"?d():d,E=typeof S=="object"&&"type"in S&&S.type.PRESENTED_IMAGE_SIMPLE;return s(B(xb,{componentName:"Empty",children:I=>{const T=typeof g<"u"?g:I.description,N=typeof T=="string"?T:"empty";let U=null;return typeof S=="string"?U=B("img",{alt:N,src:S},null):U=S,B("div",ir({class:_o(u,_,a.value,{[`${u}-normal`]:E,[`${u}-rtl`]:i.value==="rtl"})},C),[B("div",{class:`${u}-image`,style:v},[U]),T&&B("p",{class:`${u}-description`},[T]),n.default&&B("div",{class:`${u}-footer`},[Wp(n.default())])])}},null))}}});Uc.PRESENTED_IMAGE_DEFAULT=()=>cn(jc);Uc.PRESENTED_IMAGE_SIMPLE=()=>cn(Tg);const pi=Xp(Uc),_w=t=>{const{prefixCls:e}=ri("empty",t);return(r=>{switch(r){case"Table":case"List":return B(pi,{image:pi.PRESENTED_IMAGE_SIMPLE},null);case"Select":case"TreeSelect":case"Cascader":case"Transfer":case"Mentions":return B(pi,{image:pi.PRESENTED_IMAGE_SIMPLE,class:`${e.value}-small`},null);default:return B(pi,null,null)}})(t.componentName)},bw=Symbol("SizeContextKey"),ww=()=>Ce(bw,He(void 0)),ri=(t,e)=>{const n=ww(),r=Qp(),i=Ce(Yp,O(O({},Jp),{renderEmpty:m=>cn(_w,{componentName:m})})),o=H(()=>i.getPrefixCls(t,e.prefixCls)),s=H(()=>{var m,R;return(m=e.direction)!==null&&m!==void 0?m:(R=i.direction)===null||R===void 0?void 0:R.value}),a=H(()=>{var m;return(m=e.iconPrefixCls)!==null&&m!==void 0?m:i.iconPrefixCls.value}),l=H(()=>i.getPrefixCls()),c=H(()=>{var m;return(m=i.autoInsertSpaceInButton)===null||m===void 0?void 0:m.value}),u=i.renderEmpty,f=i.space,d=i.pageHeader,g=i.form,v=H(()=>{var m,R;return(m=e.getTargetContainer)!==null&&m!==void 0?m:(R=i.getTargetContainer)===null||R===void 0?void 0:R.value}),_=H(()=>{var m,R,A;return(R=(m=e.getContainer)!==null&&m!==void 0?m:e.getPopupContainer)!==null&&R!==void 0?R:(A=i.getPopupContainer)===null||A===void 0?void 0:A.value}),C=H(()=>{var m,R;return(m=e.dropdownMatchSelectWidth)!==null&&m!==void 0?m:(R=i.dropdownMatchSelectWidth)===null||R===void 0?void 0:R.value}),S=H(()=>{var m;return(e.virtual===void 0?((m=i.virtual)===null||m===void 0?void 0:m.value)!==!1:e.virtual!==!1)&&C.value!==!1}),E=H(()=>e.size||n.value),I=H(()=>{var m,R,A;return(m=e.autocomplete)!==null&&m!==void 0?m:(A=(R=i.input)===null||R===void 0?void 0:R.value)===null||A===void 0?void 0:A.autocomplete}),T=H(()=>{var m;return(m=e.disabled)!==null&&m!==void 0?m:r.value}),N=H(()=>{var m;return(m=e.csp)!==null&&m!==void 0?m:i.csp}),U=H(()=>{var m,R;return(m=e.wave)!==null&&m!==void 0?m:(R=i.wave)===null||R===void 0?void 0:R.value});return{configProvider:i,prefixCls:o,direction:s,size:E,getTargetContainer:v,getPopupContainer:_,space:f,pageHeader:d,form:g,autoInsertSpaceInButton:c,renderEmpty:u,virtual:S,dropdownMatchSelectWidth:C,rootPrefixCls:l,getPrefixCls:i.getPrefixCls,autocomplete:I,csp:N,iconPrefixCls:a,disabled:T,select:i.select,wave:U}};function Ew(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ig(t,e,n){return n&&Ew(t,n),t}function cs(){return(cs=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Cg(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function Ag(t,e){if(t==null)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e.indexOf(n=o[r])>=0||(i[n]=t[n]);return i}function Uf(t){return((e=t)!=null&&typeof e=="object"&&Array.isArray(e)===!1)==1&&Object.prototype.toString.call(t)==="[object Object]";var e}var Pg=Object.prototype,Rg=Pg.toString,Sw=Pg.hasOwnProperty,xg=/^\s*function (\w+)/;function Bf(t){var e,n=(e=t==null?void 0:t.type)!==null&&e!==void 0?e:t;if(n){var r=n.toString().match(xg);return r?r[1]:""}return""}var dr=function(t){var e,n;return Uf(t)!==!1&&typeof(e=t.constructor)=="function"&&Uf(n=e.prototype)!==!1&&n.hasOwnProperty("isPrototypeOf")!==!1},Tw=function(t){return t},Je=Tw,no=function(t,e){return Sw.call(t,e)},Iw=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t},Wr=Array.isArray||function(t){return Rg.call(t)==="[object Array]"},qr=function(t){return Rg.call(t)==="[object Function]"},Ss=function(t){return dr(t)&&no(t,"_vueTypes_name")},Og=function(t){return dr(t)&&(no(t,"type")||["_vueTypes_name","validator","default","required"].some(function(e){return no(t,e)}))};function Bc(t,e){return Object.defineProperty(t.bind(e),"__original",{value:t})}function wr(t,e,n){var r;n===void 0&&(n=!1);var i=!0,o="";r=dr(t)?t:{type:t};var s=Ss(r)?r._vueTypes_name+" - ":"";if(Og(r)&&r.type!==null){if(r.type===void 0||r.type===!0||!r.required&&e===void 0)return i;Wr(r.type)?(i=r.type.some(function(f){return wr(f,e,!0)===!0}),o=r.type.map(function(f){return Bf(f)}).join(" or ")):i=(o=Bf(r))==="Array"?Wr(e):o==="Object"?dr(e):o==="String"||o==="Number"||o==="Boolean"||o==="Function"?function(f){if(f==null)return"";var d=f.constructor.toString().match(xg);return d?d[1]:""}(e)===o:e instanceof r.type}if(!i){var a=s+'value "'+e+'" should be of type "'+o+'"';return n===!1?(Je(a),!1):a}if(no(r,"validator")&&qr(r.validator)){var l=Je,c=[];if(Je=function(f){c.push(f)},i=r.validator(e),Je=l,!i){var u=(c.length>1?"* ":"")+c.join(`
* `);return c.length=0,n===!1?(Je(u),i):u}}return i}function vt(t,e){var n=Object.defineProperties(e,{_vueTypes_name:{value:t,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(i){return i!==void 0||this.default?qr(i)||wr(this,i,!0)===!0?(this.default=Wr(i)?function(){return[].concat(i)}:dr(i)?function(){return Object.assign({},i)}:i,this):(Je(this._vueTypes_name+' - invalid default value: "'+i+'"'),this):this}}}),r=n.validator;return qr(r)&&(n.validator=Bc(r,n)),n}function Wt(t,e){var n=vt(t,e);return Object.defineProperty(n,"validate",{value:function(r){return qr(this.validator)&&Je(this._vueTypes_name+` - calling .validate() will overwrite the current custom validator function. Validator info:
`+JSON.stringify(this)),this.validator=Bc(r,this),this}})}function Hf(t,e,n){var r,i,o=(r=e,i={},Object.getOwnPropertyNames(r).forEach(function(f){i[f]=Object.getOwnPropertyDescriptor(r,f)}),Object.defineProperties({},i));if(o._vueTypes_name=t,!dr(n))return o;var s,a,l=n.validator,c=Ag(n,["validator"]);if(qr(l)){var u=o.validator;u&&(u=(a=(s=u).__original)!==null&&a!==void 0?a:s),o.validator=Bc(u?function(f){return u.call(this,f)&&l.call(this,f)}:l,o)}return Object.assign(o,c)}function ca(t){return t.replace(/^(?!\s*$)/gm,"  ")}var Cw=function(){return Wt("any",{})},Aw=function(){return Wt("function",{type:Function})},Pw=function(){return Wt("boolean",{type:Boolean})},Rw=function(){return Wt("string",{type:String})},xw=function(){return Wt("number",{type:Number})},Ow=function(){return Wt("array",{type:Array})},kw=function(){return Wt("object",{type:Object})},Nw=function(){return vt("integer",{type:Number,validator:function(t){return Iw(t)}})},Dw=function(){return vt("symbol",{validator:function(t){return typeof t=="symbol"}})};function Mw(t,e){if(e===void 0&&(e="custom validation failed"),typeof t!="function")throw new TypeError("[VueTypes error]: You must provide a function as argument");return vt(t.name||"<<anonymous function>>",{validator:function(n){var r=t(n);return r||Je(this._vueTypes_name+" - "+e),r}})}function $w(t){if(!Wr(t))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var e='oneOf - value should be one of "'+t.join('", "')+'".',n=t.reduce(function(r,i){if(i!=null){var o=i.constructor;r.indexOf(o)===-1&&r.push(o)}return r},[]);return vt("oneOf",{type:n.length>0?n:void 0,validator:function(r){var i=t.indexOf(r)!==-1;return i||Je(e),i}})}function Lw(t){if(!Wr(t))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var e=!1,n=[],r=0;r<t.length;r+=1){var i=t[r];if(Og(i)){if(Ss(i)&&i._vueTypes_name==="oneOf"){n=n.concat(i.type);continue}if(qr(i.validator)&&(e=!0),i.type!==!0&&i.type){n=n.concat(i.type);continue}}n.push(i)}return n=n.filter(function(o,s){return n.indexOf(o)===s}),vt("oneOfType",e?{type:n,validator:function(o){var s=[],a=t.some(function(l){var c=wr(Ss(l)&&l._vueTypes_name==="oneOf"?l.type||null:l,o,!0);return typeof c=="string"&&s.push(c),c===!0});return a||Je("oneOfType - provided value does not match any of the "+s.length+` passed-in validators:
`+ca(s.join(`
`))),a}}:{type:n})}function Vw(t){return vt("arrayOf",{type:Array,validator:function(e){var n,r=e.every(function(i){return(n=wr(t,i,!0))===!0});return r||Je(`arrayOf - value validation error:
`+ca(n)),r}})}function Fw(t){return vt("instanceOf",{type:t})}function jw(t){return vt("objectOf",{type:Object,validator:function(e){var n,r=Object.keys(e).every(function(i){return(n=wr(t,e[i],!0))===!0});return r||Je(`objectOf - value validation error:
`+ca(n)),r}})}function Uw(t){var e=Object.keys(t),n=e.filter(function(i){var o;return!!(!((o=t[i])===null||o===void 0)&&o.required)}),r=vt("shape",{type:Object,validator:function(i){var o=this;if(!dr(i))return!1;var s=Object.keys(i);if(n.length>0&&n.some(function(l){return s.indexOf(l)===-1})){var a=n.filter(function(l){return s.indexOf(l)===-1});return Je(a.length===1?'shape - required property "'+a[0]+'" is not defined.':'shape - required properties "'+a.join('", "')+'" are not defined.'),!1}return s.every(function(l){if(e.indexOf(l)===-1)return o._vueTypes_isLoose===!0||(Je('shape - shape definition does not include a "'+l+'" property. Allowed keys: "'+e.join('", "')+'".'),!1);var c=wr(t[l],i[l],!0);return typeof c=="string"&&Je('shape - "'+l+`" property validation error:
 `+ca(c)),c===!0})}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),r}var Mt=function(){function t(){}return t.extend=function(e){var n=this;if(Wr(e))return e.forEach(function(f){return n.extend(f)}),this;var r=e.name,i=e.validate,o=i!==void 0&&i,s=e.getter,a=s!==void 0&&s,l=Ag(e,["name","validate","getter"]);if(no(this,r))throw new TypeError('[VueTypes error]: Type "'+r+'" already defined');var c,u=l.type;return Ss(u)?(delete l.type,Object.defineProperty(this,r,a?{get:function(){return Hf(r,u,l)}}:{value:function(){var f,d=Hf(r,u,l);return d.validator&&(d.validator=(f=d.validator).bind.apply(f,[d].concat([].slice.call(arguments)))),d}})):(c=a?{get:function(){var f=Object.assign({},l);return o?Wt(r,f):vt(r,f)},enumerable:!0}:{value:function(){var f,d,g=Object.assign({},l);return f=o?Wt(r,g):vt(r,g),g.validator&&(f.validator=(d=g.validator).bind.apply(d,[f].concat([].slice.call(arguments)))),f},enumerable:!0},Object.defineProperty(this,r,c))},Ig(t,null,[{key:"any",get:function(){return Cw()}},{key:"func",get:function(){return Aw().def(this.defaults.func)}},{key:"bool",get:function(){return Pw().def(this.defaults.bool)}},{key:"string",get:function(){return Rw().def(this.defaults.string)}},{key:"number",get:function(){return xw().def(this.defaults.number)}},{key:"array",get:function(){return Ow().def(this.defaults.array)}},{key:"object",get:function(){return kw().def(this.defaults.object)}},{key:"integer",get:function(){return Nw().def(this.defaults.integer)}},{key:"symbol",get:function(){return Dw()}}]),t}();function kg(t){var e;return t===void 0&&(t={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),(e=function(n){function r(){return n.apply(this,arguments)||this}return Cg(r,n),Ig(r,null,[{key:"sensibleDefaults",get:function(){return cs({},this.defaults)},set:function(i){this.defaults=i!==!1?cs({},i!==!0?i:t):{}}}]),r}(Mt)).defaults=cs({},t),e}Mt.defaults={},Mt.custom=Mw,Mt.oneOf=$w,Mt.instanceOf=Fw,Mt.oneOfType=Lw,Mt.arrayOf=Vw,Mt.objectOf=jw,Mt.shape=Uw,Mt.utils={validate:function(t,e){return wr(e,t,!0)===!0},toType:function(t,e,n){return n===void 0&&(n=!1),n?Wt(t,e):vt(t,e)}};(function(t){function e(){return t.apply(this,arguments)||this}return Cg(e,t),e})(kg());const ro=kg({func:void 0,bool:void 0,string:void 0,number:void 0,array:void 0,object:void 0,integer:void 0});ro.extend([{name:"looseBool",getter:!0,type:Boolean,default:void 0},{name:"style",getter:!0,type:[String,Object],default:void 0},{name:"VueNode",getter:!0,type:null}]);const Ng=(t,e,n)=>{Bb(t,`[ant-design-vue: ${e}] ${n}`)},Bw=t=>{if(!t)return!1;if(t.offsetParent)return!0;if(t.getBBox){const e=t.getBBox();if(e.width||e.height)return!0}if(t.getBoundingClientRect){const e=t.getBoundingClientRect();if(e.width||e.height)return!0}return!1};var Dg=typeof global=="object"&&global&&global.Object===Object&&global,Hw=typeof self=="object"&&self&&self.Object===Object&&self,zn=Dg||Hw||Function("return this")(),Ts=zn.Symbol,Mg=Object.prototype,zw=Mg.hasOwnProperty,Ww=Mg.toString,gi=Ts?Ts.toStringTag:void 0;function qw(t){var e=zw.call(t,gi),n=t[gi];try{t[gi]=void 0;var r=!0}catch{}var i=Ww.call(t);return r&&(e?t[gi]=n:delete t[gi]),i}var Gw=Object.prototype,Kw=Gw.toString;function Xw(t){return Kw.call(t)}var Yw="[object Null]",Jw="[object Undefined]",zf=Ts?Ts.toStringTag:void 0;function Eo(t){return t==null?t===void 0?Jw:Yw:zf&&zf in Object(t)?qw(t):Xw(t)}function $g(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Qw="[object AsyncFunction]",Zw="[object Function]",eE="[object GeneratorFunction]",tE="[object Proxy]";function Lg(t){if(!$g(t))return!1;var e=Eo(t);return e==Zw||e==eE||e==Qw||e==tE}var qa=zn["__core-js_shared__"],Wf=function(){var t=/[^.]+$/.exec(qa&&qa.keys&&qa.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function nE(t){return!!Wf&&Wf in t}var rE=Function.prototype,iE=rE.toString;function Er(t){if(t!=null){try{return iE.call(t)}catch{}try{return t+""}catch{}}return""}var oE=/[\\^$.*+?()[\]{}|]/g,sE=/^\[object .+?Constructor\]$/,aE=Function.prototype,lE=Object.prototype,cE=aE.toString,uE=lE.hasOwnProperty,fE=RegExp("^"+cE.call(uE).replace(oE,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function dE(t){if(!$g(t)||nE(t))return!1;var e=Lg(t)?fE:sE;return e.test(Er(t))}function hE(t,e){return t==null?void 0:t[e]}function So(t,e){var n=hE(t,e);return dE(n)?n:void 0}var Ml=So(zn,"Map"),pE=Array.isArray;function Hc(t){return t!=null&&typeof t=="object"}var gE="[object Arguments]";function qf(t){return Hc(t)&&Eo(t)==gE}var Vg=Object.prototype,mE=Vg.hasOwnProperty,vE=Vg.propertyIsEnumerable,yE=qf(function(){return arguments}())?qf:function(t){return Hc(t)&&mE.call(t,"callee")&&!vE.call(t,"callee")};function _E(){return!1}var Fg=typeof nn=="object"&&nn&&!nn.nodeType&&nn,Gf=Fg&&typeof rn=="object"&&rn&&!rn.nodeType&&rn,bE=Gf&&Gf.exports===Fg,Kf=bE?zn.Buffer:void 0,wE=Kf?Kf.isBuffer:void 0,EE=wE||_E,SE=9007199254740991;function jg(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=SE}var TE="[object Arguments]",IE="[object Array]",CE="[object Boolean]",AE="[object Date]",PE="[object Error]",RE="[object Function]",xE="[object Map]",OE="[object Number]",kE="[object Object]",NE="[object RegExp]",DE="[object Set]",ME="[object String]",$E="[object WeakMap]",LE="[object ArrayBuffer]",VE="[object DataView]",FE="[object Float32Array]",jE="[object Float64Array]",UE="[object Int8Array]",BE="[object Int16Array]",HE="[object Int32Array]",zE="[object Uint8Array]",WE="[object Uint8ClampedArray]",qE="[object Uint16Array]",GE="[object Uint32Array]",ye={};ye[FE]=ye[jE]=ye[UE]=ye[BE]=ye[HE]=ye[zE]=ye[WE]=ye[qE]=ye[GE]=!0;ye[TE]=ye[IE]=ye[LE]=ye[CE]=ye[VE]=ye[AE]=ye[PE]=ye[RE]=ye[xE]=ye[OE]=ye[kE]=ye[NE]=ye[DE]=ye[ME]=ye[$E]=!1;function KE(t){return Hc(t)&&jg(t.length)&&!!ye[Eo(t)]}function XE(t){return function(e){return t(e)}}var Ug=typeof nn=="object"&&nn&&!nn.nodeType&&nn,Oi=Ug&&typeof rn=="object"&&rn&&!rn.nodeType&&rn,YE=Oi&&Oi.exports===Ug,Ga=YE&&Dg.process,Xf=function(){try{var t=Oi&&Oi.require&&Oi.require("util").types;return t||Ga&&Ga.binding&&Ga.binding("util")}catch{}}(),Yf=Xf&&Xf.isTypedArray,JE=Yf?XE(Yf):KE,QE=Object.prototype;function Bg(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||QE;return t===n}function ZE(t,e){return function(n){return t(e(n))}}var eS=ZE(Object.keys,Object),tS=Object.prototype,nS=tS.hasOwnProperty;function rS(t){if(!Bg(t))return eS(t);var e=[];for(var n in Object(t))nS.call(t,n)&&n!="constructor"&&e.push(n);return e}function iS(t){return t!=null&&jg(t.length)&&!Lg(t)}var $l=So(zn,"DataView"),Ll=So(zn,"Promise"),Vl=So(zn,"Set"),Fl=So(zn,"WeakMap"),Jf="[object Map]",oS="[object Object]",Qf="[object Promise]",Zf="[object Set]",ed="[object WeakMap]",td="[object DataView]",sS=Er($l),aS=Er(Ml),lS=Er(Ll),cS=Er(Vl),uS=Er(Fl),er=Eo;($l&&er(new $l(new ArrayBuffer(1)))!=td||Ml&&er(new Ml)!=Jf||Ll&&er(Ll.resolve())!=Qf||Vl&&er(new Vl)!=Zf||Fl&&er(new Fl)!=ed)&&(er=function(t){var e=Eo(t),n=e==oS?t.constructor:void 0,r=n?Er(n):"";if(r)switch(r){case sS:return td;case aS:return Jf;case lS:return Qf;case cS:return Zf;case uS:return ed}return e});function Qn(t){const e=typeof t=="function"?t():t,n=He(e);function r(i){n.value=i}return[n,r]}var fS=Symbol("iconContext"),Hg=function(){return Ce(fS,{prefixCls:He("anticon"),rootClassName:He(""),csp:He()})};function zc(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function dS(t,e){return t&&t.contains?t.contains(e):!1}var nd="data-vc-order",hS="vc-icon-key",jl=new Map;function zg(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.mark;return e?e.startsWith("data-")?e:"data-".concat(e):hS}function Wc(t){if(t.attachTo)return t.attachTo;var e=document.querySelector("head");return e||document.body}function pS(t){return t==="queue"?"prependQueue":t?"prepend":"append"}function Wg(t){return Array.from((jl.get(t)||t).children).filter(function(e){return e.tagName==="STYLE"})}function qg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!zc())return null;var n=e.csp,r=e.prepend,i=document.createElement("style");i.setAttribute(nd,pS(r)),n&&n.nonce&&(i.nonce=n.nonce),i.innerHTML=t;var o=Wc(e),s=o.firstChild;if(r){if(r==="queue"){var a=Wg(o).filter(function(l){return["prepend","prependQueue"].includes(l.getAttribute(nd))});if(a.length)return o.insertBefore(i,a[a.length-1].nextSibling),i}o.insertBefore(i,s)}else o.appendChild(i);return i}function gS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Wc(e);return Wg(n).find(function(r){return r.getAttribute(zg(e))===t})}function mS(t,e){var n=jl.get(t);if(!n||!dS(document,n)){var r=qg("",e),i=r.parentNode;jl.set(t,i),t.removeChild(r)}}function vS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Wc(n);mS(r,n);var i=gS(e,n);if(i)return n.csp&&n.csp.nonce&&i.nonce!==n.csp.nonce&&(i.nonce=n.csp.nonce),i.innerHTML!==t&&(i.innerHTML=t),i;var o=qg(t,n);return o.setAttribute(zg(n),e),o}function rd(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){yS(t,i,n[i])})}return t}function yS(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function id(t){return typeof t=="object"&&typeof t.name=="string"&&typeof t.theme=="string"&&(typeof t.icon=="object"||typeof t.icon=="function")}function Ul(t,e,n){return n?cn(t.tag,rd({key:e},n,t.attrs),(t.children||[]).map(function(r,i){return Ul(r,"".concat(e,"-").concat(t.tag,"-").concat(i))})):cn(t.tag,rd({key:e},t.attrs),(t.children||[]).map(function(r,i){return Ul(r,"".concat(e,"-").concat(t.tag,"-").concat(i))}))}function Gg(t){return to(t)[0]}function Kg(t){return t?Array.isArray(t)?t:[t]:[]}var _S=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;function Xg(t){return t&&t.getRootNode&&t.getRootNode()}function bS(t){return zc()?Xg(t)instanceof ShadowRoot:!1}function wS(t){return bS(t)?Xg(t):null}var ES=function(){var e=Hg(),n=e.prefixCls,r=e.csp,i=vo(),o=_S;n&&(o=o.replace(/anticon/g,n.value)),Zr(function(){if(zc()){var s=i.vnode.el,a=wS(s);vS(o,"@ant-design-vue-icons",{prepend:!0,csp:r.value,attachTo:a})}})},SS=["icon","primaryColor","secondaryColor"];function TS(t,e){if(t==null)return{};var n=IS(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function IS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function us(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){CS(t,i,n[i])})}return t}function CS(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ki=Hn({primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1});function AS(t){var e=t.primaryColor,n=t.secondaryColor;ki.primaryColor=e,ki.secondaryColor=n||Gg(e),ki.calculated=!!n}function PS(){return us({},ki)}var Wn=function(e,n){var r=us({},e,n.attrs),i=r.icon,o=r.primaryColor,s=r.secondaryColor,a=TS(r,SS),l=ki;if(o&&(l={primaryColor:o,secondaryColor:s||Gg(o)}),id(i),!id(i))return null;var c=i;return c&&typeof c.icon=="function"&&(c=us({},c,{icon:c.icon(l.primaryColor,l.secondaryColor)})),Ul(c.icon,"svg-".concat(c.name),us({},a,{"data-icon":c.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}))};Wn.props={icon:Object,primaryColor:String,secondaryColor:String,focusable:String};Wn.inheritAttrs=!1;Wn.displayName="IconBase";Wn.getTwoToneColors=PS;Wn.setTwoToneColors=AS;function RS(t,e){return NS(t)||kS(t,e)||OS(t,e)||xS()}function xS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OS(t,e){if(t){if(typeof t=="string")return od(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return od(t,e)}}function od(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function kS(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function NS(t){if(Array.isArray(t))return t}function Yg(t){var e=Kg(t),n=RS(e,2),r=n[0],i=n[1];return Wn.setTwoToneColors({primaryColor:r,secondaryColor:i})}function DS(){var t=Wn.getTwoToneColors();return t.calculated?[t.primaryColor,t.secondaryColor]:t.primaryColor}var MS=tt({name:"InsertStyles",setup:function(){return ES(),function(){return null}}}),$S=["class","icon","spin","rotate","tabindex","twoToneColor","onClick"];function LS(t,e){return US(t)||jS(t,e)||FS(t,e)||VS()}function VS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FS(t,e){if(t){if(typeof t=="string")return sd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sd(t,e)}}function sd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function jS(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function US(t){if(Array.isArray(t))return t}function ad(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){wi(t,i,n[i])})}return t}function wi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function BS(t,e){if(t==null)return{};var n=HS(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function HS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}Yg(q0.primary);var ii=function(e,n){var r,i=ad({},e,n.attrs),o=i.class,s=i.icon,a=i.spin,l=i.rotate,c=i.tabindex,u=i.twoToneColor,f=i.onClick,d=BS(i,$S),g=Hg(),v=g.prefixCls,_=g.rootClassName,C=(r={},wi(r,_.value,!!_.value),wi(r,v.value,!0),wi(r,"".concat(v.value,"-").concat(s.name),!!s.name),wi(r,"".concat(v.value,"-spin"),!!a||s.name==="loading"),r),S=c;S===void 0&&f&&(S=-1);var E=l?{msTransform:"rotate(".concat(l,"deg)"),transform:"rotate(".concat(l,"deg)")}:void 0,I=Kg(u),T=LS(I,2),N=T[0],U=T[1];return B("span",ad({role:"img","aria-label":s.name},d,{onClick:f,class:[C,o],tabindex:S}),[B(Wn,{icon:s,primaryColor:N,secondaryColor:U,style:E},null),B(MS,null,null)])};ii.props={spin:Boolean,rotate:Number,icon:Object,twoToneColor:[String,Array]};ii.displayName="AntdIcon";ii.inheritAttrs=!1;ii.getTwoToneColor=DS;ii.setTwoToneColor=Yg;var zS={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};function ld(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){WS(t,i,n[i])})}return t}function WS(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Is=function(e,n){var r=ld({},e,n.attrs);return B(ii,ld({},r,{icon:zS}),null)};Is.displayName="LoadingOutlined";Is.inheritAttrs=!1;function Jg(t){const e=Symbol("contextKey");return{useProvide:(i,o)=>{const s=Hn({});return $r(e,s),Oc(()=>{O(s,i,o||{})}),s},useInject:()=>Ce(e,t)||{}}}const qS=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},GS=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${e}-item`]:{"&:empty":{display:"none"}}}}},KS=aa("Space",t=>[GS(t),qS(t)]);var XS="[object Map]",YS="[object Set]",JS=Object.prototype,QS=JS.hasOwnProperty;function Qg(t){if(t==null)return!0;if(iS(t)&&(pE(t)||typeof t=="string"||typeof t.splice=="function"||EE(t)||JE(t)||yE(t)))return!t.length;var e=er(t);if(e==XS||e==YS)return!t.size;if(Bg(t))return!rS(t).length;for(var n in t)if(QS.call(t,n))return!1;return!0}const ZS=()=>({compactSize:String,compactDirection:ro.oneOf(Tl("horizontal","vertical")).def("horizontal"),isFirstItem:Ri(),isLastItem:Ri()}),qc=Jg(null),eT=(t,e)=>{const n=qc.useInject(),r=H(()=>{if(!n||Qg(n))return"";const{compactDirection:i,isFirstItem:o,isLastItem:s}=n,a=i==="vertical"?"-vertical-":"-";return _o({[`${t.value}-compact${a}item`]:!0,[`${t.value}-compact${a}first-item`]:o,[`${t.value}-compact${a}last-item`]:s,[`${t.value}-compact${a}item-rtl`]:e.value==="rtl"})});return{compactSize:H(()=>n==null?void 0:n.compactSize),compactDirection:H(()=>n==null?void 0:n.compactDirection),compactItemClassnames:r}},tT=()=>({prefixCls:String,size:{type:String},direction:ro.oneOf(Tl("horizontal","vertical")).def("horizontal"),align:ro.oneOf(Tl("start","end","center","baseline")),block:{type:Boolean,default:void 0}}),nT=tt({name:"CompactItem",props:ZS(),setup(t,e){let{slots:n}=e;return qc.useProvide(t),()=>{var r;return(r=n.default)===null||r===void 0?void 0:r.call(n)}}});tT();function rT(t,e,n){const{focusElCls:r,focus:i,borderElCls:o}=n,s=o?"> *":"",a=["hover",i?"focus":null,"active"].filter(Boolean).map(l=>`&:${l} ${s}`).join(",");return{[`&-item:not(${e}-last-item)`]:{marginInlineEnd:-t.lineWidth},"&-item":O(O({[a]:{zIndex:2}},r?{[`&${r}`]:{zIndex:2}}:{}),{[`&[disabled] ${s}`]:{zIndex:0}})}}function iT(t,e,n){const{borderElCls:r}=n,i=r?`> ${r}`:"";return{[`&-item:not(${e}-first-item):not(${e}-last-item) ${i}`]:{borderRadius:0},[`&-item:not(${e}-last-item)${e}-first-item`]:{[`& ${i}, &${t}-sm ${i}, &${t}-lg ${i}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${e}-first-item)${e}-last-item`]:{[`& ${i}, &${t}-sm ${i}, &${t}-lg ${i}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function oT(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:n}=t,r=`${n}-compact`;return{[r]:O(O({},rT(t,r,e)),iT(n,r,e))}}const sT=t=>{const{componentCls:e,colorPrimary:n}=t;return{[e]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${n})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${t.motionEaseOutCirc}`,`opacity 2s ${t.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0}}}}},aT=aa("Wave",t=>[sT(t)]);function lT(t){const e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return e&&e[1]&&e[2]&&e[3]?!(e[1]===e[2]&&e[2]===e[3]):!0}function Ka(t){return t&&t!=="#fff"&&t!=="#ffffff"&&t!=="rgb(255, 255, 255)"&&t!=="rgba(255, 255, 255, 1)"&&lT(t)&&!/rgba\((?:\d*, ){3}0\)/.test(t)&&t!=="transparent"}function cT(t){const{borderTopColor:e,borderColor:n,backgroundColor:r}=getComputedStyle(t);return Ka(e)?e:Ka(n)?n:Ka(r)?r:null}function Xa(t){return Number.isNaN(t)?0:t}const uT=tt({props:{target:Mc(),className:String},setup(t){const e=It(null),[n,r]=Qn(null),[i,o]=Qn([]),[s,a]=Qn(0),[l,c]=Qn(0),[u,f]=Qn(0),[d,g]=Qn(0),[v,_]=Qn(!1);function C(){const{target:m}=t,R=getComputedStyle(m);r(cT(m));const A=R.position==="static",{borderLeftWidth:z,borderTopWidth:ee}=R;a(A?m.offsetLeft:Xa(-parseFloat(z))),c(A?m.offsetTop:Xa(-parseFloat(ee))),f(m.offsetWidth),g(m.offsetHeight);const{borderTopLeftRadius:V,borderTopRightRadius:oe,borderBottomLeftRadius:be,borderBottomRightRadius:X}=R;o([V,oe,X,be].map(re=>Xa(parseFloat(re))))}let S,E,I;const T=()=>{clearTimeout(I),Sl.cancel(E),S==null||S.disconnect()},N=()=>{var m;const R=(m=e.value)===null||m===void 0?void 0:m.parentElement;R&&(wl(null,R),R.parentElement&&R.parentElement.removeChild(R))};ei(()=>{T(),I=setTimeout(()=>{N()},5e3);const{target:m}=t;m&&(E=Sl(()=>{C(),_(!0)}),typeof ResizeObserver<"u"&&(S=new ResizeObserver(C),S.observe(m)))}),br(()=>{T()});const U=m=>{m.propertyName==="opacity"&&N()};return()=>{if(!v.value)return null;const m={left:`${s.value}px`,top:`${l.value}px`,width:`${u.value}px`,height:`${d.value}px`,borderRadius:i.value.map(R=>`${R}px`).join(" ")};return n&&(m["--wave-color"]=n.value),B(Bp,{appear:!0,name:"wave-motion",appearFromClass:"wave-motion-appear",appearActiveClass:"wave-motion-appear",appearToClass:"wave-motion-appear wave-motion-appear-active"},{default:()=>[B("div",{ref:e,class:t.className,style:m,onTransitionend:U},null)]})}}});function fT(t,e){const n=document.createElement("div");return n.style.position="absolute",n.style.left="0px",n.style.top="0px",t==null||t.insertBefore(n,t==null?void 0:t.firstChild),wl(B(uT,{target:t,className:e},null),n),()=>{wl(null,n),n.parentElement&&n.parentElement.removeChild(n)}}function dT(t,e){const n=vo();let r;function i(){var o;const s=El(n);r==null||r(),!(!((o=e==null?void 0:e.value)===null||o===void 0)&&o.disabled||!s)&&(r=fT(s,t.value))}return br(()=>{r==null||r()}),i}const hT=tt({compatConfig:{MODE:3},name:"Wave",props:{disabled:Boolean},setup(t,e){let{slots:n}=e;const r=vo(),{prefixCls:i,wave:o}=ri("wave",t),[,s]=aT(i),a=dT(H(()=>_o(i.value,s.value)),o);let l;const c=()=>{El(r).removeEventListener("click",l,!0)};return ei(()=>{sn(()=>t.disabled,()=>{c(),Zr(()=>{const u=El(r);u==null||u.removeEventListener("click",l,!0),!(!u||u.nodeType!==1||t.disabled)&&(l=f=>{f.target.tagName==="INPUT"||!Bw(f.target)||!u.getAttribute||u.getAttribute("disabled")||u.disabled||u.className.includes("disabled")||u.className.includes("-leave")||a()},u.addEventListener("click",l,!0))})},{immediate:!0,flush:"post"})}),br(()=>{c()}),()=>{var u;return(u=n.default)===null||u===void 0?void 0:u.call(n)[0]}}}),pT=()=>({prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:()=>!1},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:ro.any,href:String,target:String,title:String,onClick:mf(),onMousedown:mf()}),cd=t=>{t&&(t.style.width="0px",t.style.opacity="0",t.style.transform="scale(0)")},ud=t=>{Zr(()=>{t&&(t.style.width=`${t.scrollWidth}px`,t.style.opacity="1",t.style.transform="scale(1)")})},fd=t=>{t&&t.style&&(t.style.width=null,t.style.opacity=null,t.style.transform=null)},gT=tt({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup(t){return()=>{const{existIcon:e,prefixCls:n,loading:r}=t;if(e)return B("span",{class:`${n}-loading-icon`},[B(Is,null,null)]);const i=!!r;return B(Bp,{name:`${n}-loading-icon-motion`,onBeforeEnter:cd,onEnter:ud,onAfterEnter:fd,onBeforeLeave:ud,onLeave:o=>{setTimeout(()=>{cd(o)})},onAfterLeave:fd},{default:()=>[i?B("span",{class:`${n}-loading-icon`},[B(Is,null,null)]):null]})}}}),dd=(t,e)=>({[`> span, > ${t}`]:{"&:not(:last-child)":{[`&, & > ${t}`]:{"&:not(:disabled)":{borderInlineEndColor:e}}},"&:not(:first-child)":{[`&, & > ${t}`]:{"&:not(:disabled)":{borderInlineStartColor:e}}}}}),mT=t=>{const{componentCls:e,fontSize:n,lineWidth:r,colorPrimaryHover:i,colorErrorHover:o}=t;return{[`${e}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:-r,[`&, & > ${e}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[e]:{position:"relative",zIndex:1,"&:hover,\n          &:focus,\n          &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${e}-icon-only`]:{fontSize:n}},dd(`${e}-primary`,i),dd(`${e}-danger`,o)]}};function vT(t,e){return{[`&-item:not(${e}-last-item)`]:{marginBottom:-t.lineWidth},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function yT(t,e){return{[`&-item:not(${e}-first-item):not(${e}-last-item)`]:{borderRadius:0},[`&-item${e}-first-item:not(${e}-last-item)`]:{[`&, &${t}-sm, &${t}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${e}-last-item:not(${e}-first-item)`]:{[`&, &${t}-sm, &${t}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function _T(t){const e=`${t.componentCls}-compact-vertical`;return{[e]:O(O({},vT(t,e)),yT(t.componentCls,e))}}const bT=t=>{const{componentCls:e,iconCls:n}=t;return{[e]:{outline:"none",position:"relative",display:"inline-block",fontWeight:400,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",backgroundColor:"transparent",border:`${t.lineWidth}px ${t.lineType} transparent`,cursor:"pointer",transition:`all ${t.motionDurationMid} ${t.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",lineHeight:t.lineHeight,color:t.colorText,"> span":{display:"inline-block"},[`> ${n} + span, > span + ${n}`]:{marginInlineStart:t.marginXS},"> a":{color:"currentColor"},"&:not(:disabled)":O({},lw(t)),[`&-icon-only${e}-compact-item`]:{flex:"none"},[`&-compact-item${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:-t.lineWidth,insetInlineStart:-t.lineWidth,display:"inline-block",width:t.lineWidth,height:`calc(100% + ${t.lineWidth*2}px)`,backgroundColor:t.colorPrimaryHover,content:'""'}}},"&-compact-vertical-item":{[`&${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-vertical-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:-t.lineWidth,insetInlineStart:-t.lineWidth,display:"inline-block",width:`calc(100% + ${t.lineWidth*2}px)`,height:t.lineWidth,backgroundColor:t.colorPrimaryHover,content:'""'}}}}}}},un=(t,e)=>({"&:not(:disabled)":{"&:hover":t,"&:active":e}}),wT=t=>({minWidth:t.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),ET=t=>({borderRadius:t.controlHeight,paddingInlineStart:t.controlHeight/2,paddingInlineEnd:t.controlHeight/2}),Bl=t=>({cursor:"not-allowed",borderColor:t.colorBorder,color:t.colorTextDisabled,backgroundColor:t.colorBgContainerDisabled,boxShadow:"none"}),Cs=(t,e,n,r,i,o,s)=>({[`&${t}-background-ghost`]:O(O({color:e||void 0,backgroundColor:"transparent",borderColor:n||void 0,boxShadow:"none"},un(O({backgroundColor:"transparent"},o),O({backgroundColor:"transparent"},s))),{"&:disabled":{cursor:"not-allowed",color:r||void 0,borderColor:i||void 0}})}),Gc=t=>({"&:disabled":O({},Bl(t))}),Zg=t=>O({},Gc(t)),As=t=>({"&:disabled":{cursor:"not-allowed",color:t.colorTextDisabled}}),em=t=>O(O(O(O(O({},Zg(t)),{backgroundColor:t.colorBgContainer,borderColor:t.colorBorder,boxShadow:`0 ${t.controlOutlineWidth}px 0 ${t.controlTmpOutline}`}),un({color:t.colorPrimaryHover,borderColor:t.colorPrimaryHover},{color:t.colorPrimaryActive,borderColor:t.colorPrimaryActive})),Cs(t.componentCls,t.colorBgContainer,t.colorBgContainer,t.colorTextDisabled,t.colorBorder)),{[`&${t.componentCls}-dangerous`]:O(O(O({color:t.colorError,borderColor:t.colorError},un({color:t.colorErrorHover,borderColor:t.colorErrorBorderHover},{color:t.colorErrorActive,borderColor:t.colorErrorActive})),Cs(t.componentCls,t.colorError,t.colorError,t.colorTextDisabled,t.colorBorder)),Gc(t))}),ST=t=>O(O(O(O(O({},Zg(t)),{color:t.colorTextLightSolid,backgroundColor:t.colorPrimary,boxShadow:`0 ${t.controlOutlineWidth}px 0 ${t.controlOutline}`}),un({color:t.colorTextLightSolid,backgroundColor:t.colorPrimaryHover},{color:t.colorTextLightSolid,backgroundColor:t.colorPrimaryActive})),Cs(t.componentCls,t.colorPrimary,t.colorPrimary,t.colorTextDisabled,t.colorBorder,{color:t.colorPrimaryHover,borderColor:t.colorPrimaryHover},{color:t.colorPrimaryActive,borderColor:t.colorPrimaryActive})),{[`&${t.componentCls}-dangerous`]:O(O(O({backgroundColor:t.colorError,boxShadow:`0 ${t.controlOutlineWidth}px 0 ${t.colorErrorOutline}`},un({backgroundColor:t.colorErrorHover},{backgroundColor:t.colorErrorActive})),Cs(t.componentCls,t.colorError,t.colorError,t.colorTextDisabled,t.colorBorder,{color:t.colorErrorHover,borderColor:t.colorErrorHover},{color:t.colorErrorActive,borderColor:t.colorErrorActive})),Gc(t))}),TT=t=>O(O({},em(t)),{borderStyle:"dashed"}),IT=t=>O(O(O({color:t.colorLink},un({color:t.colorLinkHover},{color:t.colorLinkActive})),As(t)),{[`&${t.componentCls}-dangerous`]:O(O({color:t.colorError},un({color:t.colorErrorHover},{color:t.colorErrorActive})),As(t))}),CT=t=>O(O(O({},un({color:t.colorText,backgroundColor:t.colorBgTextHover},{color:t.colorText,backgroundColor:t.colorBgTextActive})),As(t)),{[`&${t.componentCls}-dangerous`]:O(O({color:t.colorError},As(t)),un({color:t.colorErrorHover,backgroundColor:t.colorErrorBg},{color:t.colorErrorHover,backgroundColor:t.colorErrorBg}))}),AT=t=>O(O({},Bl(t)),{[`&${t.componentCls}:hover`]:O({},Bl(t))}),PT=t=>{const{componentCls:e}=t;return{[`${e}-default`]:em(t),[`${e}-primary`]:ST(t),[`${e}-dashed`]:TT(t),[`${e}-link`]:IT(t),[`${e}-text`]:CT(t),[`${e}-disabled`]:AT(t)}},Kc=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:n,iconCls:r,controlHeight:i,fontSize:o,lineHeight:s,lineWidth:a,borderRadius:l,buttonPaddingHorizontal:c}=t,u=Math.max(0,(i-o*s)/2-a),f=c-a,d=`${n}-icon-only`;return[{[`${n}${e}`]:{fontSize:o,height:i,padding:`${u}px ${f}px`,borderRadius:l,[`&${d}`]:{width:i,paddingInlineStart:0,paddingInlineEnd:0,[`&${n}-round`]:{width:"auto"},"> span":{transform:"scale(1.143)"}},[`&${n}-loading`]:{opacity:t.opacityLoading,cursor:"default"},[`${n}-loading-icon`]:{transition:`width ${t.motionDurationSlow} ${t.motionEaseInOut}, opacity ${t.motionDurationSlow} ${t.motionEaseInOut}`},[`&:not(${d}) ${n}-loading-icon > ${r}`]:{marginInlineEnd:t.marginXS}}},{[`${n}${n}-circle${e}`]:wT(t)},{[`${n}${n}-round${e}`]:ET(t)}]},RT=t=>Kc(t),xT=t=>{const e=wo(t,{controlHeight:t.controlHeightSM,padding:t.paddingXS,buttonPaddingHorizontal:8,borderRadius:t.borderRadiusSM});return Kc(e,`${t.componentCls}-sm`)},OT=t=>{const e=wo(t,{controlHeight:t.controlHeightLG,fontSize:t.fontSizeLG,borderRadius:t.borderRadiusLG});return Kc(e,`${t.componentCls}-lg`)},kT=t=>{const{componentCls:e}=t;return{[e]:{[`&${e}-block`]:{width:"100%"}}}},NT=aa("Button",t=>{const{controlTmpOutline:e,paddingContentHorizontal:n}=t,r=wo(t,{colorOutlineDefault:e,buttonPaddingHorizontal:n});return[bT(r),xT(r),RT(r),OT(r),kT(r),PT(r),mT(r),oT(t,{focus:!1}),_T(t)]}),DT=()=>({prefixCls:String,size:{type:String}}),tm=Jg(),Hl=tt({compatConfig:{MODE:3},name:"AButtonGroup",props:DT(),setup(t,e){let{slots:n}=e;const{prefixCls:r,direction:i}=ri("btn-group",t),[,,o]=la();tm.useProvide(Hn({size:H(()=>t.size)}));const s=H(()=>{const{size:a}=t;let l="";switch(a){case"large":l="lg";break;case"small":l="sm";break;case"middle":case void 0:break;default:Ng(!a,"Button.Group","Invalid prop `size`.")}return{[`${r.value}`]:!0,[`${r.value}-${l}`]:l,[`${r.value}-rtl`]:i.value==="rtl",[o.value]:!0}});return()=>{var a;return B("div",{class:s.value},[Ji((a=n.default)===null||a===void 0?void 0:a.call(n))])}}}),hd=/^[\u4e00-\u9fa5]{2}$/,pd=hd.test.bind(hd);function Yo(t){return t==="text"||t==="link"}const Ni=tt({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:Eb(pT(),{type:"default"}),slots:Object,setup(t,e){let{slots:n,attrs:r,emit:i,expose:o}=e;const{prefixCls:s,autoInsertSpaceInButton:a,direction:l,size:c}=ri("btn",t),[u,f]=NT(s),d=tm.useInject(),g=Qp(),v=H(()=>{var X;return(X=t.disabled)!==null&&X!==void 0?X:g.value}),_=It(null),C=It(void 0);let S=!1;const E=It(!1),I=It(!1),T=H(()=>a.value!==!1),{compactSize:N,compactItemClassnames:U}=eT(s,l),m=H(()=>typeof t.loading=="object"&&t.loading.delay?t.loading.delay||!0:!!t.loading);sn(m,X=>{clearTimeout(C.value),typeof m.value=="number"?C.value=setTimeout(()=>{E.value=X},m.value):E.value=X},{immediate:!0});const R=H(()=>{const{type:X,shape:re="default",ghost:K,block:ie,danger:st}=t,Te=s.value,We={large:"lg",small:"sm",middle:void 0},Oe=N.value||(d==null?void 0:d.size)||c.value,Et=Oe&&We[Oe]||"";return[U.value,{[f.value]:!0,[`${Te}`]:!0,[`${Te}-${re}`]:re!=="default"&&re,[`${Te}-${X}`]:X,[`${Te}-${Et}`]:Et,[`${Te}-loading`]:E.value,[`${Te}-background-ghost`]:K&&!Yo(X),[`${Te}-two-chinese-chars`]:I.value&&T.value,[`${Te}-block`]:ie,[`${Te}-dangerous`]:!!st,[`${Te}-rtl`]:l.value==="rtl"}]}),A=()=>{const X=_.value;if(!X||a.value===!1)return;const re=X.textContent;S&&pd(re)?I.value||(I.value=!0):I.value&&(I.value=!1)},z=X=>{if(E.value||v.value){X.preventDefault();return}i("click",X)},ee=X=>{i("mousedown",X)},V=(X,re)=>{const K=re?" ":"";if(X.type===ti){let ie=X.children.trim();return pd(ie)&&(ie=ie.split("").join(K)),B("span",null,[ie])}return X};return Oc(()=>{Ng(!(t.ghost&&Yo(t.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),ei(A),vp(A),br(()=>{C.value&&clearTimeout(C.value)}),o({focus:()=>{var X;(X=_.value)===null||X===void 0||X.focus()},blur:()=>{var X;(X=_.value)===null||X===void 0||X.blur()}}),()=>{var X,re;const{icon:K=(X=n.icon)===null||X===void 0?void 0:X.call(n)}=t,ie=Ji((re=n.default)===null||re===void 0?void 0:re.call(n));S=ie.length===1&&!K&&!Yo(t.type);const{type:st,htmlType:Te,href:We,title:Oe,target:Et}=t,mn=E.value?"loading":K,vn=O(O({},r),{title:Oe,disabled:v.value,class:[R.value,r.class,{[`${s.value}-icon-only`]:ie.length===0&&!!mn}],onClick:z,onMousedown:ee});v.value||delete vn.disabled;const qe=K&&!E.value?K:B(gT,{existIcon:!!K,prefixCls:s.value,loading:!!E.value},null),w=ie.map($=>V($,S&&T.value));if(We!==void 0)return u(B("a",ir(ir({},vn),{},{href:We,target:Et,ref:_}),[qe,w]));let F=B("button",ir(ir({},vn),{},{ref:_,type:Te}),[qe,w]);if(!Yo(st)){const $=function(){return F}();F=B(hT,{ref:"wave",disabled:!!E.value},{default:()=>[$]})}return u(F)}}});Ni.Group=Hl;Ni.install=function(t){return t.component(Ni.name,Ni),t.component(Hl.name,Hl),t};var MT=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let nm;const ua=t=>nm=t,rm=Symbol();function zl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Di;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Di||(Di={}));function $T(){const t=Fh(!0),e=t.run(()=>He({}));let n=[],r=[];const i=Ic({install(o){ua(i),i._a=o,o.provide(rm,i),o.config.globalProperties.$pinia=i,r.forEach(s=>n.push(s)),r=[]},use(o){return!this._a&&!MT?r.push(o):n.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const im=()=>{};function gd(t,e,n,r=im){t.push(e);const i=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),r())};return!n&&jh()&&Jv(i),i}function Ir(t,...e){t.slice().forEach(n=>{n(...e)})}const LT=t=>t(),md=Symbol(),Ya=Symbol();function Wl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];zl(i)&&zl(r)&&t.hasOwnProperty(n)&&!Ie(r)&&!Dn(r)?t[n]=Wl(i,r):t[n]=r}return t}const VT=Symbol();function FT(t){return!zl(t)||!t.hasOwnProperty(VT)}const{assign:Sn}=Object;function jT(t){return!!(Ie(t)&&t.effect)}function UT(t,e,n,r){const{state:i,actions:o,getters:s}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=wy(n.state.value[t]);return Sn(u,o,Object.keys(s||{}).reduce((f,d)=>(f[d]=Ic(H(()=>{ua(n);const g=n._s.get(t);return s[d].call(g,g)})),f),{}))}return l=om(t,c,e,n,r,!0),l}function om(t,e,n={},r,i,o){let s;const a=Sn({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],g;const v=r.state.value[t];!o&&!v&&(r.state.value[t]={}),He({});let _;function C(R){let A;c=u=!1,typeof R=="function"?(R(r.state.value[t]),A={type:Di.patchFunction,storeId:t,events:g}):(Wl(r.state.value[t],R),A={type:Di.patchObject,payload:R,storeId:t,events:g});const z=_=Symbol();Zr().then(()=>{_===z&&(c=!0)}),u=!0,Ir(f,A,r.state.value[t])}const S=o?function(){const{state:A}=n,z=A?A():{};this.$patch(ee=>{Sn(ee,z)})}:im;function E(){s.stop(),f=[],d=[],r._s.delete(t)}const I=(R,A="")=>{if(md in R)return R[Ya]=A,R;const z=function(){ua(r);const ee=Array.from(arguments),V=[],oe=[];function be(K){V.push(K)}function X(K){oe.push(K)}Ir(d,{args:ee,name:z[Ya],store:N,after:be,onError:X});let re;try{re=R.apply(this&&this.$id===t?this:N,ee)}catch(K){throw Ir(oe,K),K}return re instanceof Promise?re.then(K=>(Ir(V,K),K)).catch(K=>(Ir(oe,K),Promise.reject(K))):(Ir(V,re),re)};return z[md]=!0,z[Ya]=A,z},T={_p:r,$id:t,$onAction:gd.bind(null,d),$patch:C,$reset:S,$subscribe(R,A={}){const z=gd(f,R,A.detached,()=>ee()),ee=s.run(()=>sn(()=>r.state.value[t],V=>{(A.flush==="sync"?u:c)&&R({storeId:t,type:Di.direct,events:g},V)},Sn({},l,A)));return z},$dispose:E},N=Hn(T);r._s.set(t,N);const m=(r._a&&r._a.runWithContext||LT)(()=>r._e.run(()=>(s=Fh()).run(()=>e({action:I}))));for(const R in m){const A=m[R];if(Ie(A)&&!jT(A)||Dn(A))o||(v&&FT(A)&&(Ie(A)?A.value=v[R]:Wl(A,v[R])),r.state.value[t][R]=A);else if(typeof A=="function"){const z=I(A,R);m[R]=z,a.actions[R]=A}}return Sn(N,m),Sn(le(N),m),Object.defineProperty(N,"$state",{get:()=>r.state.value[t],set:R=>{C(A=>{Sn(A,R)})}}),r._p.forEach(R=>{Sn(N,s.run(()=>R({store:N,app:r._a,pinia:r,options:a})))}),v&&o&&n.hydrate&&n.hydrate(N.$state,v),c=!0,u=!0,N}function sm(t,e,n){let r,i;const o=typeof e=="function";typeof t=="string"?(r=t,i=o?n:e):(i=t,r=t.id);function s(a,l){const c=t_();return a=a||(c?Ce(rm,null):null),a&&ua(a),a=nm,a._s.has(r)||(o?om(r,e,i,a):UT(r,i,a)),a._s.get(r)}return s.$id=r,s}var vd={};/**
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
 */const am=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},BT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},lm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=o>>2,f=(o&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,s||(d=64)),r.push(n[u],n[f],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(am(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||c==null||f==null)throw new HT;const d=o<<2|a>>4;if(r.push(d),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const v=c<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zT=function(t){const e=am(t);return lm.encodeByteArray(e,!0)},Ps=function(t){return zT(t).replace(/\./g,"")},cm=function(t){try{return lm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function WT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qT=()=>WT().__FIREBASE_DEFAULTS__,GT=()=>{if(typeof process>"u"||typeof vd>"u")return;const t=vd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cm(t[1]);return e&&JSON.parse(e)},Xc=()=>{try{return qT()||GT()||KT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},um=t=>{var e,n;return(n=(e=Xc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XT=t=>{const e=um(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fm=()=>{var t;return(t=Xc())===null||t===void 0?void 0:t.config},dm=t=>{var e;return(e=Xc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class YT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function JT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ps(JSON.stringify(n)),Ps(JSON.stringify(s)),""].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function ZT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tI(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nI(){try{return typeof indexedDB=="object"}catch{return!1}}function rI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const iI="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iI,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,To.prototype.create)}}class To{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?oI(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new gn(i,a,r)}}function oI(t,e){return t.replace(sI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sI=/\{\$([^}]+)}/g;function aI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(yd(o)&&yd(s)){if(!Rs(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yd(t){return t!==null&&typeof t=="object"}/**
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
 */function Io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ei(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Si(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lI(t,e){const n=new cI(t,e);return n.subscribe.bind(n)}class cI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ja),i.error===void 0&&(i.error=Ja),i.complete===void 0&&(i.complete=Ja);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ja(){}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tr="[DEFAULT]";/**
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
 */class fI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new YT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hI(e))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tr){return this.instances.has(e)}getOptions(e=tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tr){return this.component?this.component.multipleInstances?e:tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dI(t){return t===tr?void 0:t}function hI(t){return t.instantiationMode==="EAGER"}/**
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
 */class pI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const gI={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},mI=ue.INFO,vI={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},yI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=vI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yc{constructor(e){this.name=e,this._logLevel=mI,this._logHandler=yI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const _I=(t,e)=>e.some(n=>t instanceof n);let _d,bd;function bI(){return _d||(_d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wI(){return bd||(bd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hm=new WeakMap,ql=new WeakMap,pm=new WeakMap,Qa=new WeakMap,Jc=new WeakMap;function EI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Mn(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&hm.set(n,t)}).catch(()=>{}),Jc.set(e,t),e}function SI(t){if(ql.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});ql.set(t,e)}let Gl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ql.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TI(t){Gl=t(Gl)}function II(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Za(this),e,...n);return pm.set(r,e.sort?e.sort():[e]),Mn(r)}:wI().includes(t)?function(...e){return t.apply(Za(this),e),Mn(hm.get(this))}:function(...e){return Mn(t.apply(Za(this),e))}}function CI(t){return typeof t=="function"?II(t):(t instanceof IDBTransaction&&SI(t),_I(t,bI())?new Proxy(t,Gl):t)}function Mn(t){if(t instanceof IDBRequest)return EI(t);if(Qa.has(t))return Qa.get(t);const e=CI(t);return e!==t&&(Qa.set(t,e),Jc.set(e,t)),e}const Za=t=>Jc.get(t);function AI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Mn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Mn(s.result),l.oldVersion,l.newVersion,Mn(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const PI=["get","getKey","getAll","getAllKeys","count"],RI=["put","add","delete","clear"],el=new Map;function wd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(el.get(e))return el.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=RI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||PI.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return el.set(e,o),o}TI(t=>({...t,get:(e,n,r)=>wd(e,n)||t.get(e,n,r),has:(e,n)=>!!wd(e,n)||t.has(e,n)}));/**
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
 */class xI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function OI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kl="@firebase/app",Ed="0.10.10";/**
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
 */const fn=new Yc("@firebase/app"),kI="@firebase/app-compat",NI="@firebase/analytics-compat",DI="@firebase/analytics",MI="@firebase/app-check-compat",$I="@firebase/app-check",LI="@firebase/auth",VI="@firebase/auth-compat",FI="@firebase/database",jI="@firebase/database-compat",UI="@firebase/functions",BI="@firebase/functions-compat",HI="@firebase/installations",zI="@firebase/installations-compat",WI="@firebase/messaging",qI="@firebase/messaging-compat",GI="@firebase/performance",KI="@firebase/performance-compat",XI="@firebase/remote-config",YI="@firebase/remote-config-compat",JI="@firebase/storage",QI="@firebase/storage-compat",ZI="@firebase/firestore",e1="@firebase/vertexai-preview",t1="@firebase/firestore-compat",n1="firebase",r1="10.13.1";/**
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
 */const Xl="[DEFAULT]",i1={[Kl]:"fire-core",[kI]:"fire-core-compat",[DI]:"fire-analytics",[NI]:"fire-analytics-compat",[$I]:"fire-app-check",[MI]:"fire-app-check-compat",[LI]:"fire-auth",[VI]:"fire-auth-compat",[FI]:"fire-rtdb",[jI]:"fire-rtdb-compat",[UI]:"fire-fn",[BI]:"fire-fn-compat",[HI]:"fire-iid",[zI]:"fire-iid-compat",[WI]:"fire-fcm",[qI]:"fire-fcm-compat",[GI]:"fire-perf",[KI]:"fire-perf-compat",[XI]:"fire-rc",[YI]:"fire-rc-compat",[JI]:"fire-gcs",[QI]:"fire-gcs-compat",[ZI]:"fire-fst",[t1]:"fire-fst-compat",[e1]:"fire-vertex","fire-js":"fire-js",[n1]:"fire-js-all"};/**
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
 */const xs=new Map,o1=new Map,Yl=new Map;function Sd(t,e){try{t.container.addComponent(e)}catch(n){fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gr(t){const e=t.name;if(Yl.has(e))return fn.debug(`There were multiple attempts to register component ${e}.`),!1;Yl.set(e,t);for(const n of xs.values())Sd(n,t);for(const n of o1.values())Sd(n,t);return!0}function Qc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t.settings!==void 0}/**
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
 */const s1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new To("app","Firebase",s1);/**
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
 */class a1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
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
 */const oi=r1;function gm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xl,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $n.create("bad-app-name",{appName:String(i)});if(n||(n=fm()),!n)throw $n.create("no-options");const o=xs.get(i);if(o){if(Rs(n,o.options)&&Rs(r,o.config))return o;throw $n.create("duplicate-app",{appName:i})}const s=new pI(i);for(const l of Yl.values())s.addComponent(l);const a=new a1(n,r,s);return xs.set(i,a),a}function mm(t=Xl){const e=xs.get(t);if(!e&&t===Xl&&fm())return gm();if(!e)throw $n.create("no-app",{appName:t});return e}function Ln(t,e,n){var r;let i=(r=i1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fn.warn(a.join(" "));return}Gr(new hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const l1="firebase-heartbeat-database",c1=1,io="firebase-heartbeat-store";let tl=null;function vm(){return tl||(tl=AI(l1,c1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(io)}catch(n){console.warn(n)}}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),tl}async function u1(t){try{const n=(await vm()).transaction(io),r=await n.objectStore(io).get(ym(t));return await n.done,r}catch(e){if(e instanceof gn)fn.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fn.warn(n.message)}}}async function Td(t,e){try{const r=(await vm()).transaction(io,"readwrite");await r.objectStore(io).put(e,ym(t)),await r.done}catch(n){if(n instanceof gn)fn.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fn.warn(r.message)}}}function ym(t){return`${t.name}!${t.options.appId}`}/**
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
 */const f1=1024,d1=30*24*60*60*1e3;class h1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new g1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Id();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=d1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Id(),{heartbeatsToSend:r,unsentEntries:i}=p1(this._heartbeatsCache.heartbeats),o=Ps(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return fn.warn(n),""}}}function Id(){return new Date().toISOString().substring(0,10)}function p1(t,e=f1){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Cd(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class g1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nI()?rI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await u1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cd(t){return Ps(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function m1(t){Gr(new hr("platform-logger",e=>new xI(e),"PRIVATE")),Gr(new hr("heartbeat",e=>new h1(e),"PRIVATE")),Ln(Kl,Ed,t),Ln(Kl,Ed,"esm2017"),Ln("fire-js","")}m1("");function Zc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function _m(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v1=_m,bm=new To("auth","Firebase",_m());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=new Yc("@firebase/auth");function y1(t,...e){Os.logLevel<=ue.WARN&&Os.warn(`Auth (${oi}): ${t}`,...e)}function fs(t,...e){Os.logLevel<=ue.ERROR&&Os.error(`Auth (${oi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,...e){throw eu(t,...e)}function Ht(t,...e){return eu(t,...e)}function wm(t,e,n){const r=Object.assign(Object.assign({},v1()),{[e]:n});return new To("auth","Firebase",r).create(e,{appName:t.name})}function an(t){return wm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bm.create(t,...e)}function Q(t,e,...n){if(!t)throw eu(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fs(e),new Error(e)}function dn(t,e){t||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _1(){return Ad()==="http:"||Ad()==="https:"}function Ad(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_1()||ZT()||"connection"in navigator)?navigator.onLine:!0}function w1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=QT()||eI()}get(){return b1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=new Co(3e4,6e4);function qn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gn(t,e,n,r,i={}){return Sm(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Io(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Em.fetch()(Tm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Sm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},E1),e);try{const i=new I1(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Jo(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jo(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Jo(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Jo(t,"user-disabled",s);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw wm(t,u,c);xt(t,u)}}catch(i){if(i instanceof gn)throw i;xt(t,"network-request-failed",{message:String(i)})}}async function Ao(t,e,n,r,i={}){const o=await Gn(t,e,n,r,i);return"mfaPendingCredential"in o&&xt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Tm(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?tu(t.config,i):`${t.config.apiScheme}://${i}`}function T1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class I1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),S1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ht(t,e,r);return i.customData._tokenResponse=n,i}function Pd(t){return t!==void 0&&t.enterprise!==void 0}class C1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return T1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function A1(t,e){return Gn(t,"GET","/v2/recaptchaConfig",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(t,e){return Gn(t,"POST","/v1/accounts:delete",e)}async function Im(t,e){return Gn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function R1(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=nu(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Mi(nl(i.auth_time)),issuedAtTime:Mi(nl(i.iat)),expirationTime:Mi(nl(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function nl(t){return Number(t)*1e3}function nu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fs("JWT malformed, contained fewer than 3 sections"),null;try{const i=cm(n);return i?JSON.parse(i):(fs("Failed to decode base64 JWT payload"),null)}catch(i){return fs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Rd(t){const e=nu(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&x1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function x1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ks(t){var e;const n=t.auth,r=await t.getIdToken(),i=await oo(t,Im(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Cm(o.providerUserInfo):[],a=N1(t.providerData,s),l=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Ql(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function k1(t){const e=Me(t);await ks(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Cm(t){return t.map(e=>{var{providerId:n}=e,r=Zc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(t,e){const n=await Sm(t,{},async()=>{const r=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Tm(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Em.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function M1(t,e){return Gn(t,"POST","/v2/accounts:revokeToken",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Rd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await D1(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Lr;return r&&(Q(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(Q(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class en{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Zc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new O1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ql(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await oo(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return R1(this,e)}reload(){return k1(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new en(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ks(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(an(this.auth));const e=await this.getIdToken();return await oo(this,P1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:T,isAnonymous:N,providerData:U,stsTokenManager:m}=n;Q(I&&m,e,"internal-error");const R=Lr.fromJSON(this.name,m);Q(typeof I=="string",e,"internal-error"),wn(f,e.name),wn(d,e.name),Q(typeof T=="boolean",e,"internal-error"),Q(typeof N=="boolean",e,"internal-error"),wn(g,e.name),wn(v,e.name),wn(_,e.name),wn(C,e.name),wn(S,e.name),wn(E,e.name);const A=new en({uid:I,auth:e,email:d,emailVerified:T,displayName:f,isAnonymous:N,photoURL:v,phoneNumber:g,tenantId:_,stsTokenManager:R,createdAt:S,lastLoginAt:E});return U&&Array.isArray(U)&&(A.providerData=U.map(z=>Object.assign({},z))),C&&(A._redirectEventId=C),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Lr;i.updateFromServerResponse(n);const o=new en({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ks(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Cm(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Lr;a.updateFromIdToken(r);const l=new en({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ql(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=new Map;function tn(t){dn(t instanceof Function,"Expected a class definition");let e=xd.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xd.set(t,e),e)}/**
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
 */class Am{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Am.type="NONE";const Od=Am;/**
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
 */function ds(t,e,n){return`firebase:${t}:${e}:${n}`}class Vr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=ds(this.userKey,i.apiKey,o),this.fullPersistenceKey=ds("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?en._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vr(tn(Od),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||tn(Od);const s=ds(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(s);if(u){const f=en._fromJSON(e,u);c!==o&&(a=f),o=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Vr(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new Vr(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Om(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nm(e))return"Blackberry";if(Dm(e))return"Webos";if(Rm(e))return"Safari";if((e.includes("chrome/")||xm(e))&&!e.includes("edge/"))return"Chrome";if(km(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pm(t=et()){return/firefox\//i.test(t)}function Rm(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xm(t=et()){return/crios\//i.test(t)}function Om(t=et()){return/iemobile/i.test(t)}function km(t=et()){return/android/i.test(t)}function Nm(t=et()){return/blackberry/i.test(t)}function Dm(t=et()){return/webos/i.test(t)}function ru(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $1(t=et()){var e;return ru(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function L1(){return tI()&&document.documentMode===10}function Mm(t=et()){return ru(t)||km(t)||Dm(t)||Nm(t)||/windows phone/i.test(t)||Om(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t,e=[]){let n;switch(t){case"Browser":n=kd(et());break;case"Worker":n=`${kd(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oi}/${r}`}/**
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
 */class V1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function F1(t,e={}){return Gn(t,"GET","/v2/passwordPolicy",qn(t,e))}/**
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
 */const j1=6;class U1{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:j1,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nd(this),this.idTokenSubscription=new Nd(this),this.beforeStateQueue=new V1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Im(this,{idToken:e}),r=await en._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ut(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ks(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=w1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(an(this));const n=e?Me(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(an(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(an(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await F1(this),n=new U1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new To("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await M1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Vr.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$m(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&y1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Sr(t){return Me(t)}class Nd{constructor(e){this.auth=e,this.observer=null,this.addObserver=lI(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function H1(t){fa=t}function Lm(t){return fa.loadJS(t)}function z1(){return fa.recaptchaEnterpriseScript}function W1(){return fa.gapiScript}function q1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const G1="recaptcha-enterprise",K1="NO_RECAPTCHA";class X1{constructor(e){this.type=G1,this.auth=Sr(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{A1(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new C1(l);return o.tenantId==null?o._agentRecaptchaConfig=c:o._tenantRecaptchaConfigs[o.tenantId]=c,s(c.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Pd(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(c=>{s(c)}).catch(()=>{s(K1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Pd(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=z1();l.length!==0&&(l+=a),Lm(l).then(()=>{i(a,o,s)}).catch(c=>{s(c)})}}).catch(a=>{s(a)})})}}async function Dd(t,e,n,r=!1){const i=new X1(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Zl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Dd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Dd(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t,e){const n=Qc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Rs(o,e??{}))return i;xt(i,"already-initialized")}return n.initialize({options:e})}function J1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Q1(t,e,n){const r=Sr(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Vm(e),{host:s,port:a}=Z1(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),eC()}function Vm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Z1(t){const e=Vm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Md(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Md(s)}}}function Md(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}async function tC(t,e){return Gn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC(t,e){return Ao(t,"POST","/v1/accounts:signInWithPassword",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(t,e){return Ao(t,"POST","/v1/accounts:signInWithEmailLink",qn(t,e))}async function iC(t,e){return Ao(t,"POST","/v1/accounts:signInWithEmailLink",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends iu{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new so(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new so(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zl(e,n,"signInWithPassword",nC);case"emailLink":return rC(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zl(e,r,"signUpPassword",tC);case"emailLink":return iC(e,{idToken:n,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(t,e){return Ao(t,"POST","/v1/accounts:signInWithIdp",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="http://localhost";class pr extends iu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Zc(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new pr(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}buildRequest(){const e={requestUri:oC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Io(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aC(t){const e=Ei(Si(t)).link,n=e?Ei(Si(e)).deep_link_id:null,r=Ei(Si(t)).deep_link_id;return(r?Ei(Si(r)).link:null)||r||n||e||t}class ou{constructor(e){var n,r,i,o,s,a;const l=Ei(Si(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=sC((i=l.mode)!==null&&i!==void 0?i:null);Q(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=aC(e);try{return new ou(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.providerId=si.PROVIDER_ID}static credential(e,n){return so._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ou.parseLink(n);return Q(r,"argument-error"),so._fromEmailAndCode(e,r.code,r.tenantId)}}si.PROVIDER_ID="password";si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Po extends Fm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Po{constructor(){super("facebook.com")}static credential(e){return pr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Po{constructor(){super("github.com")}static credential(e){return pr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Po{constructor(){super("twitter.com")}static credential(e,n){return pr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(t,e){return Ao(t,"POST","/v1/accounts:signUp",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await en._fromIdTokenResponse(e,r,i),s=$d(r);return new gr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$d(r);return new gr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $d(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends gn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ns.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ns(e,n,r,i)}}function jm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ns._fromErrorAndOperation(t,o,e,r):o})}async function cC(t,e,n=!1){const r=await oo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gr._forOperation(t,"link",r)}/**
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
 */async function uC(t,e,n=!1){const{auth:r}=t;if(Ut(r.app))return Promise.reject(an(r));const i="reauthenticate";try{const o=await oo(t,jm(r,i,e,t),n);Q(o.idToken,r,"internal-error");const s=nu(o.idToken);Q(s,r,"internal-error");const{sub:a}=s;return Q(t.uid===a,r,"user-mismatch"),gr._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Um(t,e,n=!1){if(Ut(t.app))return Promise.reject(an(t));const r="signIn",i=await jm(t,r,e),o=await gr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function fC(t,e){return Um(Sr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bm(t){const e=Sr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dC(t,e,n){if(Ut(t.app))return Promise.reject(an(t));const r=Sr(t),s=await Zl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lC).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Bm(t),l}),a=await gr._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function hC(t,e,n){return Ut(t.app)?Promise.reject(an(t)):fC(Me(t),si.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bm(t),r})}function pC(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function gC(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function mC(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function vC(t){return Me(t).signOut()}const Ds="__sak";/**
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
 */class Hm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ds,"1"),this.storage.removeItem(Ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=1e3,_C=10;class zm extends Hm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);L1()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_C):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zm.type="LOCAL";const bC=zm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm extends Hm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wm.type="SESSION";const qm=Wm;/**
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
 */function wC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async c=>c(n.origin,o)),l=await wC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}da.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class EC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=su("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(d.data.response);break;default:clearTimeout(u),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function SC(t){zt().location.href=t}/**
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
 */function Gm(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function TC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CC(){return Gm()?self:null}/**
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
 */const Km="firebaseLocalStorageDb",AC=1,Ms="firebaseLocalStorage",Xm="fbase_key";class Ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ha(t,e){return t.transaction([Ms],e?"readwrite":"readonly").objectStore(Ms)}function PC(){const t=indexedDB.deleteDatabase(Km);return new Ro(t).toPromise()}function ec(){const t=indexedDB.open(Km,AC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ms,{keyPath:Xm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ms)?e(r):(r.close(),await PC(),e(await ec()))})})}async function Ld(t,e,n){const r=ha(t,!0).put({[Xm]:e,value:n});return new Ro(r).toPromise()}async function RC(t,e){const n=ha(t,!1).get(e),r=await new Ro(n).toPromise();return r===void 0?null:r.value}function Vd(t,e){const n=ha(t,!0).delete(e);return new Ro(n).toPromise()}const xC=800,OC=3;class Ym{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ec(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=da._getInstance(CC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TC(),!this.activeServiceWorker)return;this.sender=new EC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ec();return await Ld(e,Ds,"1"),await Vd(e,Ds),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ld(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=ha(i,!1).getAll();return new Ro(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ym.type="LOCAL";const kC=Ym;new Co(3e4,6e4);/**
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
 */function NC(t,e){return e?tn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class au extends iu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DC(t){return Um(t.auth,new au(t),t.bypassAuthState)}function MC(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),uC(n,new au(t),t.bypassAuthState)}async function $C(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),cC(n,new au(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DC;case"linkViaPopup":case"linkViaRedirect":return $C;case"reauthViaPopup":case"reauthViaRedirect":return MC;default:xt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=new Co(2e3,1e4);class kr extends Jm{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,kr.currentPopupAction&&kr.currentPopupAction.cancel(),kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LC.get())};e()}}kr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC="pendingRedirect",hs=new Map;class FC extends Jm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hs.get(this.auth._key());if(!e){try{const r=await jC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hs.set(this.auth._key(),e)}return this.bypassAuthState||hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jC(t,e){const n=HC(e),r=BC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UC(t,e){hs.set(t._key(),e)}function BC(t){return tn(t._redirectPersistence)}function HC(t){return ds(VC,t.config.apiKey,t.name)}async function zC(t,e,n=!1){if(Ut(t.app))return Promise.reject(an(t));const r=Sr(t),i=NC(r,e),s=await new FC(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=10*60*1e3;class qC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fd(e))}saveEventToCache(e){this.cachedEventUids.add(Fd(e)),this.lastProcessedEventTime=Date.now()}}function Fd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KC(t,e={}){return Gn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YC=/^https?/;async function JC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KC(t);for(const n of e)try{if(QC(n))return}catch{}xt(t,"unauthorized-domain")}function QC(t){const e=Jl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!YC.test(n))return!1;if(XC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ZC=new Co(3e4,6e4);function jd(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eA(t){return new Promise((e,n)=>{var r,i,o;function s(){jd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jd(),n(Ht(t,"network-request-failed"))},timeout:ZC.get()})}if(!((i=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=zt().gapi)===null||o===void 0)&&o.load)s();else{const a=q1("iframefcb");return zt()[a]=()=>{gapi.load?s():n(Ht(t,"network-request-failed"))},Lm(`${W1()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ps=null,e})}let ps=null;function tA(t){return ps=ps||eA(t),ps}/**
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
 */const nA=new Co(5e3,15e3),rA="__/auth/iframe",iA="emulator/auth/iframe",oA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aA(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tu(e,iA):`https://${t.config.authDomain}/${rA}`,r={apiKey:e.apiKey,appName:t.name,v:oi},i=sA.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Io(r).slice(1)}`}async function lA(t){const e=await tA(t),n=zt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:aA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oA,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Ht(t,"network-request-failed"),a=zt().setTimeout(()=>{o(s)},nA.get());function l(){zt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const cA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uA=500,fA=600,dA="_blank",hA="http://localhost";class Ud{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pA(t,e,n,r=uA,i=fA){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},cA),{width:r.toString(),height:i.toString(),top:o,left:s}),c=et().toLowerCase();n&&(a=xm(c)?dA:n),Pm(c)&&(e=e||hA,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if($1(c)&&a!=="_self")return gA(e||"",a),new Ud(null);const f=window.open(e||"",a,u);Q(f,t,"popup-blocked");try{f.focus()}catch{}return new Ud(f)}function gA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const mA="__/auth/handler",vA="emulator/auth/handler",yA=encodeURIComponent("fac");async function Bd(t,e,n,r,i,o){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:oi,eventId:i};if(e instanceof Fm){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",aI(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))s[u]=f}if(e instanceof Po){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(s.scopes=u.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${yA}=${encodeURIComponent(l)}`:"";return`${_A(t)}?${Io(a).slice(1)}${c}`}function _A({config:t}){return t.emulator?tu(t,vA):`https://${t.authDomain}/${mA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="webStorageSupport";class bA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qm,this._completeRedirectFn=zC,this._overrideRedirectResult=UC}async _openPopup(e,n,r,i){var o;dn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Bd(e,n,r,Jl(),i);return pA(e,s,su())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Bd(e,n,r,Jl(),i);return SC(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(dn(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lA(e),r=new qC(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rl,{type:rl},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[rl];s!==void 0&&n(!!s),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mm()||Rm()||ru()}}const wA=bA;var Hd="@firebase/auth",zd="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TA(t){Gr(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;Q(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$m(t)},c=new B1(r,i,o,l);return J1(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gr(new hr("auth-internal",e=>{const n=Sr(e.getProvider("auth").getImmediate());return(r=>new EA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(Hd,zd,SA(t)),Ln(Hd,zd,"esm2017")}/**
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
 */const IA=5*60,CA=dm("authIdTokenMaxAge")||IA;let Wd=null;const AA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CA)return;const i=n==null?void 0:n.token;Wd!==i&&(Wd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function PA(t=mm()){const e=Qc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Y1(t,{popupRedirectResolver:wA,persistence:[kC,bC,qm]}),r=dm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=AA(o.toString());gC(n,s,()=>s(n.currentUser)),pC(n,a=>s(a))}}const i=um("auth");return i&&Q1(n,`http://${i}`),n}function RA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}H1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Ht("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",RA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TA("Browser");var xA="firebase",OA="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln(xA,OA,"app");/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let ai="10.13.1";/**
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
 */const Kr=new Yc("@firebase/firestore");function $s(t,...e){if(Kr.logLevel<=ue.DEBUG){const n=e.map(cu);Kr.debug(`Firestore (${ai}): ${t}`,...n)}}function lu(t,...e){if(Kr.logLevel<=ue.ERROR){const n=e.map(cu);Kr.error(`Firestore (${ai}): ${t}`,...n)}}function Zm(t,...e){if(Kr.logLevel<=ue.WARN){const n=e.map(cu);Kr.warn(`Firestore (${ai}): ${t}`,...n)}}function cu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ee(t="Unexpected state"){const e=`FIRESTORE (${ai}) INTERNAL ASSERTION FAILED: `+t;throw lu(e),new Error(e)}function gt(t,e){t||Ee()}function xo(t,e){return t}/**
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
 */const qd="ok",kA="cancelled",$i="unknown",ne="invalid-argument",NA="deadline-exceeded",DA="not-found",MA="permission-denied",tc="unauthenticated",$A="resource-exhausted",Xr="failed-precondition",LA="aborted",VA="out-of-range",ev="unimplemented",FA="internal",jA="unavailable";class G extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class BA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HA{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(gt(typeof e.accessToken=="string"),new tv(e.accessToken,new nt(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class zA{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class WA{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new zA(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GA{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(gt(typeof e.token=="string"),new qA(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class KA{constructor(e,n,r,i,o,s,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ao{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ao("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ao&&e.projectId===this.projectId&&e.database===this.database}}class lo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ee(),r===void 0?r=e.length-n:r>e.length-n&&Ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return lo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof lo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends lo{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(ne,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const XA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends lo{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return XA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new G(ne,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(ne,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(ne,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new G(ne,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class Ve{constructor(e){this.path=e}static fromPath(e){return new Ve(xe.fromString(e))}static fromName(e){return new Ve(xe.fromString(e).popFirst(5))}static empty(){return new Ve(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ve(new xe(e.slice()))}}/**
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
 */function nv(t,e,n){if(!n)throw new G(ne,`Function ${t}() cannot be called with an empty ${e}.`)}function Gd(t){if(!Ve.isDocumentKey(t))throw new G(ne,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kd(t){if(Ve.isDocumentKey(t))throw new G(ne,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ee()}function li(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(ne,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pa(t);throw new G(ne,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function rv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let Qo=null;function YA(){return Qo===null?Qo=function(){return 268435456+Math.round(2147483648*Math.random())}():Qo++,"0x"+Qo.toString(16)}/**
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
 */function JA(t){return t==null}function Ls(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Xd,ae;function Yd(t){if(t===void 0)return lu("RPC_ERROR","HTTP error has no status"),$i;switch(t){case 200:return qd;case 400:return Xr;case 401:return tc;case 403:return MA;case 404:return DA;case 409:return LA;case 416:return VA;case 429:return $A;case 499:return kA;case 500:return $i;case 501:return ev;case 503:return jA;case 504:return NA;default:return t>=200&&t<300?qd:t>=400&&t<500?Xr:t>=500&&t<600?FA:$i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ae=Xd||(Xd={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";class ZA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${i}/databases/${o}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get R(){return!1}P(n,r,i,o,s){const a=YA(),l=this.V(n,r.toUriEncodedString());$s("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.I(c,o,s),this.p(n,l,c,i).then(u=>($s("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Zm("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}g(n,r,i,o,s,a){return this.P(n,r,i,o,s)}I(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ai}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}V(n,r){const i=QA[n];return`${this.m}/v1/${r}:${i}`}terminate(){}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,i){var o;const s=JSON.stringify(i);let a;try{a=await this.F(n,{method:"POST",headers:r,body:s})}catch(l){const c=l;throw new G(Yd(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(o=l==null?void 0:l.error)===null||o===void 0?void 0:o.message;throw new G(Yd(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class tP{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=eP(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function iv(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */function Jd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Oo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class nP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new nP("Invalid base64 string: "+o):o}}(e);return new hn(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new hn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}hn.EMPTY_BYTE_STRING=new hn("");const rP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(gt(!!t),typeof t=="string"){let e=0;const n=rP.exec(t);if(gt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function co(t){return typeof t=="string"?hn.fromBase64String(t):hn.fromUint8Array(t)}/**
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
 */class mt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(ne,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(ne,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(ne,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(ne,"Timestamp seconds out of range: "+e)}static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new mt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sv(t){const e=t.mapValue.fields.__previous_value__;return ov(e)?sv(e):e}function uo(t){const e=mr(t.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo={fields:{__type__:{stringValue:"__max__"}}};function vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ov(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:function(n){var r,i;return((i=(((r=n==null?void 0:n.mapValue)===null||r===void 0?void 0:r.fields)||{}).__type__)===null||i===void 0?void 0:i.stringValue)==="__vector__"}(t)?10:11:Ee()}function Vs(t,e){if(t===e)return!0;const n=vr(t);if(n!==vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uo(t).isEqual(uo(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=mr(i.timestampValue),a=mr(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return co(i.bytesValue).isEqual(co(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Pe(i.geoPointValue.latitude)===Pe(o.geoPointValue.latitude)&&Pe(i.geoPointValue.longitude)===Pe(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Pe(i.integerValue)===Pe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Pe(i.doubleValue),a=Pe(o.doubleValue);return s===a?Ls(s)===Ls(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return iv(t.arrayValue.values||[],e.arrayValue.values||[],Vs);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(Jd(s)!==Jd(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!Vs(s[l],a[l])))return!1;return!0}(t,e);default:return Ee()}}function fo(t,e){return(t.values||[]).find(n=>Vs(n,e))!==void 0}function Fs(t,e){if(t===e)return 0;const n=vr(t),r=vr(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Pe(o.integerValue||o.doubleValue),l=Pe(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Qd(t.timestampValue,e.timestampValue);case 4:return Qd(uo(t),uo(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(o,s){const a=co(o),l=co(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ke(a[c],l[c]);if(u!==0)return u}return ke(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=ke(Pe(o.latitude),Pe(s.latitude));return a!==0?a:ke(Pe(o.longitude),Pe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Zd(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,l,c,u;const f=o.fields||{},d=s.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,v=(l=d.value)===null||l===void 0?void 0:l.arrayValue,_=ke(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0);return _!==0?_:Zd(g,v)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===Zo&&s===Zo)return 0;if(o===Zo)return 1;if(s===Zo)return-1;const a=o.fields||{},l=Object.keys(a),c=s.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let f=0;f<l.length&&f<u.length;++f){const d=ke(l[f],u[f]);if(d!==0)return d;const g=Fs(a[l[f]],c[u[f]]);if(g!==0)return g}return ke(l.length,u.length)}(t.mapValue,e.mapValue);default:throw Ee()}}function Qd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=mr(t),r=mr(e),i=ke(n.seconds,r.seconds);return i!==0?i:ke(n.nanos,r.nanos)}function Zd(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=Fs(n[i],r[i]);if(o)return o}return ke(n.length,r.length)}function eh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function av(t){return!!t&&"arrayValue"in t}function th(t){return!!t&&"nullValue"in t}function nh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function il(t){return!!t&&"mapValue"in t}function Li(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Oo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Li(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Li(t.arrayValue.values[n]);return e}return Object.assign({},t)}class rh{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class lv{}class kt extends lv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new iP(e,n,r):n==="array-contains"?new aP(e,r):n==="in"?new lP(e,r):n==="not-in"?new cP(e,r):n==="array-contains-any"?new uP(e,r):new kt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oP(e,r):new sP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fs(n,this.value)):n!==null&&vr(this.value)===vr(n)&&this.matchesComparison(Fs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ko extends lv{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new ko(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class iP extends kt{constructor(e,n,r){super(e,n,r),this.key=Ve.fromName(r.referenceValue)}matches(e){const n=Ve.comparator(e.key,this.key);return this.matchesComparison(n)}}class oP extends kt{constructor(e,n){super(e,"in",n),this.keys=cv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sP extends kt{constructor(e,n){super(e,"not-in",n),this.keys=cv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Ve.fromName(r.referenceValue))}class aP extends kt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return av(n)&&fo(n.arrayValue,this.value)}}class lP extends kt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fo(this.value.arrayValue,n)}}class cP extends kt{constructor(e,n){super(e,"not-in",n)}matches(e){if(fo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fo(this.value.arrayValue,n)}}class uP extends kt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!av(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fo(this.value.arrayValue,r))}}/**
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
 */class nc{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class $e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new $e(e)}static min(){return new $e(new mt(0,0))}static max(){return new $e(new mt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class js{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new js(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new js(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new es(this.root,e,this.comparator,!1)}getReverseIterator(){return new es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new es(this.root,e,this.comparator,!0)}}class es{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??Le.RED,this.left=i??Le.EMPTY,this.right=o??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new Le(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Le.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,n,r,i,o){return this}insert(e,n,r){return new Le(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ho{constructor(e){this.comparator=e,this.data=new js(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ih(this.data.getIterator())}getIteratorFrom(e){return new ih(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ho)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ho(this.comparator);return n.data=e,n}}class ih{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new yr([])}unionWith(e){let n=new ho(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return iv(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!il(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Li(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Li(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());il(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vs(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];il(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Oo(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new ht(Li(this.value))}}/**
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
 */class jt{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new jt(e,0,$e.min(),$e.min(),$e.min(),ht.empty(),0)}static newFoundDocument(e,n,r,i){return new jt(e,1,n,$e.min(),r,i,0)}static newNoDocument(e,n){return new jt(e,2,n,$e.min(),$e.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,$e.min(),$e.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fP{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.C=null}}function oh(t,e=null,n=[],r=[],i=null,o=null,s=null){return new fP(t,e,n,r,i,o,s)}/**
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
 */class uv{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function dP(t){return t.collectionGroup!==null}function hP(t){const e=xo(t);if(e.S===null){e.S=[];const n=new Set;for(const o of e.explicitOrderBy)e.S.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new ho(it.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.S.push(new nc(o,r))}),n.has(it.keyField().canonicalString())||e.S.push(new nc(it.keyField(),r))}return e.S}function pP(t){const e=xo(t);return e.N||(e.N=gP(e,hP(t))),e.N}function gP(t,e){if(t.limitType==="F")return oh(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new nc(i.field,o)});const n=t.endAt?new rh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new rh(t.startAt.position,t.startAt.inclusive):null;return oh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function rc(t,e){const n=t.filters.concat([e]);return new uv(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ls(e)?"-0":e}}function mP(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Ls(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):fv(t,e)}/**
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
 */class ga{constructor(){this._=void 0}}class vP extends ga{}class yP extends ga{constructor(e){super(),this.elements=e}}class _P extends ga{constructor(e){super(),this.elements=e}}class bP extends ga{constructor(e,n){super(),this.serializer=e,this.q=n}}class ur{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ur}static exists(e){return new ur(void 0,e)}static updateTime(e){return new ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class ma{}class dv extends ma{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class uu extends ma{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}class hv extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wP extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const EP={asc:"ASCENDING",desc:"DESCENDING"},SP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TP={and:"AND",or:"OR"};class IP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ic(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function CP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AP(t,e){return ic(t,e.toTimestamp())}function Vi(t){return gt(!!t),$e.fromTimestamp(function(n){const r=mr(n);return new mt(r.seconds,r.nanos)}(t))}function fu(t,e){return oc(t,e).canonicalString()}function oc(t,e){const n=function(i){return new xe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Us(t,e){return fu(t.databaseId,e.path)}function sc(t,e){const n=function(i){const o=xe.fromString(i);return gt(gv(o)),o}(e);if(n.get(1)!==t.databaseId.projectId)throw new G(ne,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(ne,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ve(function(i){return gt(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(n))}function sh(t,e,n){return{name:Us(t,e),fields:n.value.mapValue.fields}}function PP(t,e){return"found"in e?function(r,i){gt(!!i.found),i.found.name,i.found.updateTime;const o=sc(r,i.found.name),s=Vi(i.found.updateTime),a=i.found.createTime?Vi(i.found.createTime):$e.min(),l=new ht({mapValue:{fields:i.found.fields}});return jt.newFoundDocument(o,s,a,l)}(t,e):"missing"in e?function(r,i){gt(!!i.missing),gt(!!i.readTime);const o=sc(r,i.missing),s=Vi(i.readTime);return jt.newNoDocument(o,s)}(t,e):Ee()}function RP(t,e){let n;if(e instanceof dv)n={update:sh(t,e.key,e.value)};else if(e instanceof hv)n={delete:Us(t,e.key)};else if(e instanceof uu)n={update:sh(t,e.key,e.data),updateMask:DP(e.fieldMask)};else{if(!(e instanceof wP))return Ee();n={verify:Us(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof vP)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof yP)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _P)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof bP)return{fieldPath:s.field.canonicalString(),increment:a.q};throw Ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:AP(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:Ee()}(t,e.precondition)),n}function xP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=function(c,u){return fu(c.databaseId,u)}(t,i);const o=function(c){if(c.length!==0)return pv(ko.create(c,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:Rr(d.field),direction:OP(d.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=function(c,u){return c.useProto3Json||JA(u)?u:{value:u}}(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{B:n,parent:i}}function OP(t){return EP[t]}function kP(t){return SP[t]}function NP(t){return TP[t]}function Rr(t){return{fieldPath:t.canonicalString()}}function pv(t){return t instanceof kt?function(n){if(n.op==="=="){if(nh(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NAN"}};if(th(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(nh(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NOT_NAN"}};if(th(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rr(n.field),op:kP(n.op),value:n.value}}}(t):t instanceof ko?function(n){const r=n.getFilters().map(i=>pv(i));return r.length===1?r[0]:{compositeFilter:{op:NP(n.op),filters:r}}}(t):Ee()}function DP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t){return new IP(t,!0)}/**
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
 */class MP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.Y=!1}Z(){if(this.Y)throw new G(Xr,"The client has already been terminated.")}P(e,n,r,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.P(e,oc(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===tc&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G($i,o.toString())})}g(e,n,r,i,o){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.g(e,oc(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===tc&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G($i,s.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function hu(t,e){const n=xo(t),r={writes:e.map(i=>RP(n.serializer,i))};await n.P("Commit",n.serializer.databaseId,xe.emptyPath(),r)}async function $P(t,e){const n=xo(t),r={documents:e.map(a=>Us(n.serializer,a))},i=await n.g("BatchGetDocuments",n.serializer.databaseId,xe.emptyPath(),r,e.length),o=new Map;i.forEach(a=>{const l=PP(n.serializer,a);o.set(l.key.toString(),l)});const s=[];return e.forEach(a=>{const l=o.get(a.toString());gt(!!l),s.push(l)}),s}async function LP(t,e){const n=xo(t),{B:r,parent:i}=xP(n.serializer,pP(e));return(await n.g("RunQuery",n.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter(o=>!!o.document).map(o=>function(a,l,c){const u=sc(a,l.name),f=Vi(l.updateTime),d=l.createTime?Vi(l.createTime):$e.min(),g=new ht({mapValue:{fields:l.fields}}),v=jt.newFoundDocument(u,f,d,g);return c&&v.setHasCommittedMutations(),c?v.setHasCommittedMutations():v}(n.serializer,o.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new Map;function No(t){if(t._terminated)throw new G(Xr,"The client has already been terminated.");if(!Fi.has(t)){$s("ComponentProvider","Initializing Datastore");const e=function(o){return new ZA(o,fetch.bind(null))}(function(o,s,a,l){return new KA(o,s,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,rv(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=du(t._databaseId),r=function(o,s,a,l){return new MP(o,s,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);Fi.set(t,r)}return Fi.get(t)}class ah{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(ne,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(ne,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(o,s,a,l){if(s===!0&&l===!0)throw new G(ne,`${o} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new G(ne,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new G(ne,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new G(ne,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class va{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ah({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(Xr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(Xr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ah(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UA;switch(r.type){case"firstParty":return new WA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(ne,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Fi.get(n);r&&($s("ComponentProvider","Removing Datastore"),Fi.delete(n),r.terminate())}(this),Promise.resolve()}}function VP(t,e){const n=mm(),r="(default)",i=Qc(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const o=XT("firestore");o&&FP(i,...o)}return i}function FP(t,e,n,r={}){var i;const o=(t=li(t,va))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Zm("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=nt.MOCK_USER;else{a=JT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(ne,"mockUserToken must contain 'sub' or 'user_id' field!");l=new nt(c)}t._authCredentials=new BA(new tv(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ci(this.firestore,e,this._query)}}class Ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}}class ln extends ci{constructor(e,n,r){super(e,n,function(o){return new uv(o)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new Ve(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function lh(t,e,...n){if(t=Me(t),nv("collection","path",e),t instanceof va){const r=xe.fromString(e,...n);return Kd(r),new ln(t,null,r)}{if(!(t instanceof Ze||t instanceof ln))throw new G(ne,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Kd(r),new ln(t.firestore,null,r)}}function gs(t,e,...n){if(t=Me(t),arguments.length===1&&(e=tP.newId()),nv("doc","path",e),t instanceof va){const r=xe.fromString(e,...n);return Gd(r),new Ze(t,null,new Ve(r))}{if(!(t instanceof Ze||t instanceof ln))throw new G(ne,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Gd(r),new Ze(t.firestore,t instanceof ln?t.converter:null,new Ve(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yr(hn.fromBase64String(e))}catch(n){throw new G(ne,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yr(hn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(ne,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this._methodName=e}}/**
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
 */class gu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(ne,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(ne,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
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
 */class mu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const jP=/^__.*__$/;class UP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new uu(e,this.data,this.fieldMask,n,this.fieldTransforms):new dv(e,this.data,n,this.fieldTransforms)}}class mv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new uu(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class vu{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.tt(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new vu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.st(e),i}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.tt(),i}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return Bs(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(vv(this.et)&&jP.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class BP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||du(e)}ht(e,n,r,i=!1){return new vu({et:e,methodName:n,lt:r,path:it.emptyPath(),it:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yu(t){const e=t._freezeSettings(),n=du(t._databaseId);return new BP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function HP(t,e,n,r,i,o={}){const s=t.ht(o.merge||o.mergeFields?2:0,e,n,i);_u("Data must be an object, but it was:",s,r);const a=yv(r,s);let l,c;if(o.merge)l=new yr(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const u=[];for(const f of o.mergeFields){const d=ac(e,f,n);if(!s.contains(d))throw new G(ne,`Field '${d}' is specified in your field mask but missing from your input data.`);bv(u,d)||u.push(d)}l=new yr(u),c=s.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=s.fieldTransforms;return new UP(new ht(a),l,c)}class _a extends pu{_toFieldTransform(e){if(e.et!==2)throw e.et===1?e._t(`${this._methodName}() can only appear at the top level of your update data`):e._t(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _a}}function zP(t,e,n,r){const i=t.ht(1,e,n);_u("Data must be an object, but it was:",i,r);const o=[],s=ht.empty();Oo(r,(l,c)=>{const u=bu(e,l,n);c=Me(c);const f=i.ot(u);if(c instanceof _a)o.push(u);else{const d=Do(c,f);d!=null&&(o.push(u),s.set(u,d))}});const a=new yr(o);return new mv(s,a,i.fieldTransforms)}function WP(t,e,n,r,i,o){const s=t.ht(1,e,n),a=[ac(e,r,n)],l=[i];if(o.length%2!=0)throw new G(ne,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<o.length;d+=2)a.push(ac(e,o[d])),l.push(o[d+1]);const c=[],u=ht.empty();for(let d=a.length-1;d>=0;--d)if(!bv(c,a[d])){const g=a[d];let v=l[d];v=Me(v);const _=s.ot(g);if(v instanceof _a)c.push(g);else{const C=Do(v,_);C!=null&&(c.push(g),u.set(g,C))}}const f=new yr(c);return new mv(u,f,s.fieldTransforms)}function qP(t,e,n,r=!1){return Do(n,t.ht(r?4:3,e))}function Do(t,e){if(_v(t=Me(t)))return _u("Unsupported field value:",e,t),yv(t,e);if(t instanceof pu)return function(r,i){if(!vv(i.et))throw i._t(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i._t(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=Do(a,i.ut(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=mt.fromDate(r);return{timestampValue:ic(i.serializer,o)}}if(r instanceof mt){const o=new mt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ic(i.serializer,o)}}if(r instanceof gu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yr)return{bytesValue:CP(i.serializer,r._byteString)};if(r instanceof Ze){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i._t(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:fu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof mu)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(l=>{if(typeof l!="number")throw a._t("VectorValues must only contain numeric values.");return fv(a.serializer,l)})}}}}}}(r,i);throw i._t(`Unsupported field value: ${pa(r)}`)}(t,e)}function yv(t,e){const n={};return function(i){for(const o in i)if(Object.prototype.hasOwnProperty.call(i,o))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oo(t,(r,i)=>{const o=Do(i,e.nt(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function _v(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof gu||t instanceof Yr||t instanceof Ze||t instanceof pu||t instanceof mu)}function _u(t,e,n){if(!_v(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=pa(n);throw r==="an object"?e._t(t+" a custom object"):e._t(t+" "+r)}}function ac(t,e,n){if((e=Me(e))instanceof ya)return e._internalPath;if(typeof e=="string")return bu(t,e);throw Bs("Field path arguments must be of type string or ",t,!1,void 0,n)}const GP=new RegExp("[~\\*/\\[\\]]");function bu(t,e,n){if(e.search(GP)>=0)throw Bs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ya(...e.split("."))._internalPath}catch{throw Bs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bs(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new G(ne,a+t+l)}function bv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ev(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ev extends wv{data(){return super.data()}}class KP{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Sv(t,e){return typeof e=="string"?bu(t,e):e instanceof ya?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{}class XP extends wu{}function YP(t,e,...n){let r=[];e instanceof wu&&r.push(e),r=r.concat(n),function(o){const s=o.filter(l=>l instanceof Eu).length,a=o.filter(l=>l instanceof ba).length;if(s>1||s>0&&a>0)throw new G(ne,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ba extends XP{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ba(e,n,r)}_apply(e){const n=this._parse(e);return Tv(e._query,n),new ci(e.firestore,e.converter,rc(e._query,n))}_parse(e){const n=yu(e.firestore);return function(o,s,a,l,c,u,f){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new G(ne,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){uh(f,u);const g=[];for(const v of f)g.push(ch(l,o,v));d={arrayValue:{values:g}}}else d=ch(l,o,f)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||uh(f,u),d=qP(a,s,f,u==="in"||u==="not-in");return kt.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function JP(t,e,n){const r=e,i=Sv("where",t);return ba._create(i,r,n)}class Eu extends wu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Eu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ko.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const l of a)Tv(s,l),s=rc(s,l)}(e._query,n),new ci(e.firestore,e.converter,rc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ch(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new G(ne,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dP(e)&&n.indexOf("/")!==-1)throw new G(ne,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!Ve.isDocumentKey(r))throw new G(ne,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return eh(t,new Ve(r))}if(n instanceof Ze)return eh(t,n._key);throw new G(ne,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pa(n)}.`)}function uh(t,e){if(!Array.isArray(t)||t.length===0)throw new G(ne,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tv(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(ne,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(ne,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Iv extends class{convertValue(n,r="none"){switch(vr(n)){case 0:return null;case 1:return n.booleanValue;case 2:return Pe(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(co(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 11:return this.convertObject(n.mapValue,r);case 10:return this.convertVectorValue(n.mapValue);default:throw Ee()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const i={};return Oo(n,(o,s)=>{i[o]=this.convertValue(s,r)}),i}convertVectorValue(n){var r,i,o;const s=(o=(i=(r=n.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(a=>Pe(a.doubleValue));return new mu(s)}convertGeoPoint(n){return new gu(Pe(n.latitude),Pe(n.longitude))}convertArray(n,r){return(n.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(n,r){switch(r){case"previous":const i=sv(n);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(uo(n));default:return null}}convertTimestamp(n){const r=mr(n);return new mt(r.seconds,r.nanos)}convertDocumentKey(n,r){const i=xe.fromString(n);gt(gv(i));const o=new ao(i.get(1),i.get(3)),s=new Ve(i.popFirst(5));return o.isEqual(r)||lu(`Document ${s} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),s}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function ol(t){const e=No((t=li(t,Ze)).firestore),n=new Iv(t.firestore);return $P(e,[t._key]).then(r=>{gt(r.length===1);const i=r[0];return new wv(t.firestore,n,t._key,i.isFoundDocument()?i:null,t.converter)})}function ZP(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new G(ev,"limitToLast() queries require specifying at least one orderBy() clause")})((t=li(t,ci))._query);const e=No(t.firestore),n=new Iv(t.firestore);return LP(e,t._query).then(r=>{const i=r.map(o=>new Ev(t.firestore,n,o.key,o,t.converter));return t._query.limitType==="L"&&i.reverse(),new KP(t,i)})}function eR(t,e,n,...r){const i=yu((t=li(t,Ze)).firestore);let o;return o=typeof(e=Me(e))=="string"||e instanceof ya?WP(i,"updateDoc",t._key,e,n,r):zP(i,"updateDoc",t._key,e),hu(No(t.firestore),[o.toMutation(t._key,ur.exists(!0))])}function tR(t){return hu(No((t=li(t,Ze)).firestore),[new hv(t._key,ur.none())])}function nR(t,e){const n=gs(t=li(t,ln)),r=QP(t.converter,e),i=HP(yu(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return hu(No(t.firestore),[i.toMutation(n._key,ur.exists(!1))]).then(()=>n)}(function(){(function(n){ai=n})(`${oi}_lite`),Gr(new hr("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new va(new HA(e.getProvider("auth-internal")),new GA(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new G(ne,'"projectId" not provided in firebase.initializeApp.');return new ao(a.options.projectId,l)}(i,n),i);return r&&o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ln("firestore-lite","4.7.1",""),Ln("firestore-lite","4.7.1","esm2017")})();const rR={apiKey:"AIzaSyCI9MC9qMkmjuV23QEVVfLmaw6Gywu82sY",authDomain:"vue3-project-mrs.firebaseapp.com",projectId:"vue3-project-mrs",storageBucket:"vue3-project-mrs.appspot.com",messagingSenderId:"587619424480",appId:"1:587619424480:web:9ea9ac223c778164fc5885"};gm(rR);const mi=VP(),Qt=PA();/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const xr=typeof document<"u";function Cv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function iR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Cv(t.default)}const he=Object.assign;function sl(t,e){const n={};for(const r in e){const i=e[r];n[r]=Ot(i)?i.map(t):t(i)}return n}const ji=()=>{},Ot=Array.isArray,Av=/#/g,oR=/&/g,sR=/\//g,aR=/=/g,lR=/\?/g,Pv=/\+/g,cR=/%5B/g,uR=/%5D/g,Rv=/%5E/g,fR=/%60/g,xv=/%7B/g,dR=/%7C/g,Ov=/%7D/g,hR=/%20/g;function Su(t){return encodeURI(""+t).replace(dR,"|").replace(cR,"[").replace(uR,"]")}function pR(t){return Su(t).replace(xv,"{").replace(Ov,"}").replace(Rv,"^")}function lc(t){return Su(t).replace(Pv,"%2B").replace(hR,"+").replace(Av,"%23").replace(oR,"%26").replace(fR,"`").replace(xv,"{").replace(Ov,"}").replace(Rv,"^")}function gR(t){return lc(t).replace(aR,"%3D")}function mR(t){return Su(t).replace(Av,"%23").replace(lR,"%3F")}function vR(t){return t==null?"":mR(t).replace(sR,"%2F")}function po(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const yR=/\/$/,_R=t=>t.replace(yR,"");function al(t,e,n="/"){let r,i={},o="",s="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),o=e.slice(l+1,a>-1?a:e.length),i=t(o)),a>-1&&(r=r||e.slice(0,a),s=e.slice(a,e.length)),r=SR(r??e,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:po(s)}}function bR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function fh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function wR(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Jr(e.matched[r],n.matched[i])&&kv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function kv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ER(t[n],e[n]))return!1;return!0}function ER(t,e){return Ot(t)?dh(t,e):Ot(e)?dh(e,t):t===e}function dh(t,e){return Ot(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function SR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let o=n.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(s).join("/")}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var go;(function(t){t.pop="pop",t.push="push"})(go||(go={}));var Ui;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ui||(Ui={}));function TR(t){if(!t)if(xr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),_R(t)}const IR=/^[^#]+#/;function CR(t,e){return t.replace(IR,"#")+e}function AR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const wa=()=>({left:window.scrollX,top:window.scrollY});function PR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=AR(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function hh(t,e){return(history.state?history.state.position-e:-1)+t}const cc=new Map;function RR(t,e){cc.set(t,e)}function xR(t){const e=cc.get(t);return cc.delete(t),e}let OR=()=>location.protocol+"//"+location.host;function Nv(t,e){const{pathname:n,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){let a=i.includes(t.slice(o))?t.slice(o).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),fh(l,"")}return fh(n,t)+r+i}function kR(t,e,n,r){let i=[],o=[],s=null;const a=({state:d})=>{const g=Nv(t,location),v=n.value,_=e.value;let C=0;if(d){if(n.value=g,e.value=d,s&&s===v){s=null;return}C=_?d.position-_.position:0}else r(g);i.forEach(S=>{S(n.value,v,{delta:C,type:go.pop,direction:C?C>0?Ui.forward:Ui.back:Ui.unknown})})};function l(){s=n.value}function c(d){i.push(d);const g=()=>{const v=i.indexOf(d);v>-1&&i.splice(v,1)};return o.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(he({},d.state,{scroll:wa()}),"")}function f(){for(const d of o)d();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function ph(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?wa():null}}function NR(t){const{history:e,location:n}=window,r={value:Nv(t,n)},i={value:e.state};i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:OR()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function s(l,c){const u=he({},e.state,ph(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});o(l,u,!0),r.value=l}function a(l,c){const u=he({},i.value,e.state,{forward:l,scroll:wa()});o(u.current,u,!0);const f=he({},ph(r.value,l,null),{position:u.position+1},c);o(l,f,!1),r.value=l}return{location:r,state:i,push:a,replace:s}}function DR(t){t=TR(t);const e=NR(t),n=kR(t,e.state,e.location,e.replace);function r(o,s=!0){s||n.pauseListeners(),history.go(o)}const i=he({location:"",base:t,go:r,createHref:CR.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function MR(t){return typeof t=="string"||t&&typeof t=="object"}function Dv(t){return typeof t=="string"||typeof t=="symbol"}const Mv=Symbol("");var gh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gh||(gh={}));function Qr(t,e){return he(new Error,{type:t,[Mv]:!0},e)}function Xt(t,e){return t instanceof Error&&Mv in t&&(e==null||!!(t.type&e))}const mh="[^/]+?",$R={sensitive:!1,strict:!1,start:!0,end:!0},LR=/[.+*?^${}()[\]/\\]/g;function VR(t,e){const n=he({},$R,e),r=[];let i=n.start?"^":"";const o=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const d=c[f];let g=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(LR,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:_,optional:C,regexp:S}=d;o.push({name:v,repeatable:_,optional:C});const E=S||mh;if(E!==mh){g+=10;try{new RegExp(`(${E})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${v}" (${E}): `+T.message)}}let I=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(I=C&&c.length<2?`(?:/${I})`:"/"+I),C&&(I+="?"),i+=I,g+=20,C&&(g+=-8),_&&(g+=-20),E===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(s),f={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",v=o[d-1];f[v.name]=g&&v.repeatable?g.split("/"):g}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:_,optional:C}=g,S=v in c?c[v]:"";if(Ot(S)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const E=Ot(S)?S.join("/"):S;if(!E)if(C)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=E}}return u||"/"}return{re:s,score:r,keys:o,parse:a,stringify:l}}function FR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $v(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const o=FR(r[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-r.length)===1){if(vh(r))return 1;if(vh(i))return-1}return i.length-r.length}function vh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jR={type:0,value:""},UR=/[a-zA-Z0-9_]/;function BR(t){if(!t)return[[]];if(t==="/")return[[jR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a=0,l,c="",u="";function f(){c&&(n===0?o.push({type:0,value:c}):n===1||n===2||n===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),s()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:UR.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),s(),i}function HR(t,e,n){const r=VR(BR(t.path),n),i=he(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function zR(t,e){const n=[],r=new Map;e=wh({strict:!1,end:!0,sensitive:!1},e);function i(f){return r.get(f)}function o(f,d,g){const v=!g,_=_h(f);_.aliasOf=g&&g.record;const C=wh(e,f),S=[_];if("alias"in f){const T=typeof f.alias=="string"?[f.alias]:f.alias;for(const N of T)S.push(_h(he({},_,{components:g?g.record.components:_.components,path:N,aliasOf:g?g.record:_})))}let E,I;for(const T of S){const{path:N}=T;if(d&&N[0]!=="/"){const U=d.record.path,m=U[U.length-1]==="/"?"":"/";T.path=d.record.path+(N&&m+N)}if(E=HR(T,d,C),g?g.alias.push(E):(I=I||E,I!==E&&I.alias.push(E),v&&f.name&&!bh(E)&&s(f.name)),Lv(E)&&l(E),_.children){const U=_.children;for(let m=0;m<U.length;m++)o(U[m],E,g&&g.children[m])}g=g||E}return I?()=>{s(I)}:ji}function s(f){if(Dv(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(s),f.alias.forEach(s))}}function a(){return n}function l(f){const d=GR(f,n);n.splice(d,0,f),f.record.name&&!bh(f)&&r.set(f.record.name,f)}function c(f,d){let g,v={},_,C;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Qr(1,{location:f});C=g.record.name,v=he(yh(d.params,g.keys.filter(I=>!I.optional).concat(g.parent?g.parent.keys.filter(I=>I.optional):[]).map(I=>I.name)),f.params&&yh(f.params,g.keys.map(I=>I.name))),_=g.stringify(v)}else if(f.path!=null)_=f.path,g=n.find(I=>I.re.test(_)),g&&(v=g.parse(_),C=g.record.name);else{if(g=d.name?r.get(d.name):n.find(I=>I.re.test(d.path)),!g)throw Qr(1,{location:f,currentLocation:d});C=g.record.name,v=he({},d.params,f.params),_=g.stringify(v)}const S=[];let E=g;for(;E;)S.unshift(E.record),E=E.parent;return{name:C,path:_,params:v,matched:S,meta:qR(S)}}t.forEach(f=>o(f));function u(){n.length=0,r.clear()}return{addRoute:o,resolve:c,removeRoute:s,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function yh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function _h(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:WR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function WR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function bh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qR(t){return t.reduce((e,n)=>he(e,n.meta),{})}function wh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function GR(t,e){let n=0,r=e.length;for(;n!==r;){const o=n+r>>1;$v(t,e[o])<0?r=o:n=o+1}const i=KR(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function KR(t){let e=t;for(;e=e.parent;)if(Lv(e)&&$v(t,e)===0)return e}function Lv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function XR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const o=r[i].replace(Pv," "),s=o.indexOf("="),a=po(s<0?o:o.slice(0,s)),l=s<0?null:po(o.slice(s+1));if(a in e){let c=e[a];Ot(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Eh(t){let e="";for(let n in t){const r=t[n];if(n=gR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(r)?r.map(o=>o&&lc(o)):[r&&lc(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function YR(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ot(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const JR=Symbol(""),Sh=Symbol(""),Ea=Symbol(""),Tu=Symbol(""),uc=Symbol("");function vi(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function An(t,e,n,r,i,o=s=>s()){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Qr(4,{from:n,to:e})):d instanceof Error?l(d):MR(d)?l(Qr(2,{from:e,to:d})):(s&&r.enterCallbacks[i]===s&&typeof d=="function"&&s.push(d),a())},u=o(()=>t.call(r&&r.instances[i],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function ll(t,e,n,r,i=o=>o()){const o=[];for(const s of t)for(const a in s.components){let l=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(Cv(l)){const u=(l.__vccOpts||l)[e];u&&o.push(An(u,n,r,s,a,i))}else{let c=l();o.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);const f=iR(u)?u.default:u;s.mods[a]=u,s.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&An(g,n,r,s,a,i)()}))}}return o}function Th(t){const e=Ce(Ea),n=Ce(Tu),r=H(()=>{const l=Se(t.to);return e.resolve(l)}),i=H(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Jr.bind(null,u));if(d>-1)return d;const g=Ih(l[c-2]);return c>1&&Ih(u)===g&&f[f.length-1].path!==g?f.findIndex(Jr.bind(null,l[c-2])):d}),o=H(()=>i.value>-1&&tx(n.params,r.value.params)),s=H(()=>i.value>-1&&i.value===n.matched.length-1&&kv(n.params,r.value.params));function a(l={}){return ex(l)?e[Se(t.replace)?"replace":"push"](Se(t.to)).catch(ji):Promise.resolve()}return{route:r,href:H(()=>r.value.href),isActive:o,isExactActive:s,navigate:a}}const QR=tt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Th,setup(t,{slots:e}){const n=Hn(Th(t)),{options:r}=Ce(Ea),i=H(()=>({[Ch(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ch(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:cn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),ZR=QR;function ex(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function tx(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Ot(i)||i.length!==r.length||r.some((o,s)=>o!==i[s]))return!1}return!0}function Ih(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ch=(t,e,n)=>t??e??n,nx=tt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ce(uc),i=H(()=>t.route||r.value),o=Ce(Sh,0),s=H(()=>{let c=Se(o);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=H(()=>i.value.matched[s.value]);$r(Sh,H(()=>s.value+1)),$r(JR,a),$r(uc,i);const l=He();return sn(()=>[l.value,a.value,t.name],([c,u,f],[d,g,v])=>{u&&(u.instances[f]=c,g&&g!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Jr(u,g)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Ah(n.default,{Component:d,route:c});const g=f.props[u],v=g?g===!0?c.params:typeof g=="function"?g(c):g:null,C=cn(d,he({},v,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Ah(n.default,{Component:C,route:c})||C}}});function Ah(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rx=nx;function ix(t){const e=zR(t.routes,t),n=t.parseQuery||XR,r=t.stringifyQuery||Eh,i=t.history,o=vi(),s=vi(),a=vi(),l=It(En);let c=En;xr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sl.bind(null,w=>""+w),f=sl.bind(null,vR),d=sl.bind(null,po);function g(w,F){let $,W;return Dv(w)?($=e.getRecordMatcher(w),W=F):W=w,e.addRoute(W,$)}function v(w){const F=e.getRecordMatcher(w);F&&e.removeRoute(F)}function _(){return e.getRoutes().map(w=>w.record)}function C(w){return!!e.getRecordMatcher(w)}function S(w,F){if(F=he({},F||l.value),typeof w=="string"){const p=al(n,w,F.path),y=e.resolve({path:p.path},F),P=i.createHref(p.fullPath);return he(p,y,{params:d(y.params),hash:po(p.hash),redirectedFrom:void 0,href:P})}let $;if(w.path!=null)$=he({},w,{path:al(n,w.path,F.path).path});else{const p=he({},w.params);for(const y in p)p[y]==null&&delete p[y];$=he({},w,{params:f(p)}),F.params=f(F.params)}const W=e.resolve($,F),fe=w.hash||"";W.params=u(d(W.params));const we=bR(r,he({},w,{hash:pR(fe),path:W.path})),h=i.createHref(we);return he({fullPath:we,hash:fe,query:r===Eh?YR(w.query):w.query||{}},W,{redirectedFrom:void 0,href:h})}function E(w){return typeof w=="string"?al(n,w,l.value.path):he({},w)}function I(w,F){if(c!==w)return Qr(8,{from:F,to:w})}function T(w){return m(w)}function N(w){return T(he(E(w),{replace:!0}))}function U(w){const F=w.matched[w.matched.length-1];if(F&&F.redirect){const{redirect:$}=F;let W=typeof $=="function"?$(w):$;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=E(W):{path:W},W.params={}),he({query:w.query,hash:w.hash,params:W.path!=null?{}:w.params},W)}}function m(w,F){const $=c=S(w),W=l.value,fe=w.state,we=w.force,h=w.replace===!0,p=U($);if(p)return m(he(E(p),{state:typeof p=="object"?he({},fe,p.state):fe,force:we,replace:h}),F||$);const y=$;y.redirectedFrom=F;let P;return!we&&wR(r,W,$)&&(P=Qr(16,{to:y,from:W}),We(W,W,!0,!1)),(P?Promise.resolve(P):z(y,W)).catch(b=>Xt(b)?Xt(b,2)?b:Te(b):ie(b,y,W)).then(b=>{if(b){if(Xt(b,2))return m(he({replace:h},E(b.to),{state:typeof b.to=="object"?he({},fe,b.to.state):fe,force:we}),F||y)}else b=V(y,W,!0,h,fe);return ee(y,W,b),b})}function R(w,F){const $=I(w,F);return $?Promise.reject($):Promise.resolve()}function A(w){const F=mn.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(w):w()}function z(w,F){let $;const[W,fe,we]=ox(w,F);$=ll(W.reverse(),"beforeRouteLeave",w,F);for(const p of W)p.leaveGuards.forEach(y=>{$.push(An(y,w,F))});const h=R.bind(null,w,F);return $.push(h),qe($).then(()=>{$=[];for(const p of o.list())$.push(An(p,w,F));return $.push(h),qe($)}).then(()=>{$=ll(fe,"beforeRouteUpdate",w,F);for(const p of fe)p.updateGuards.forEach(y=>{$.push(An(y,w,F))});return $.push(h),qe($)}).then(()=>{$=[];for(const p of we)if(p.beforeEnter)if(Ot(p.beforeEnter))for(const y of p.beforeEnter)$.push(An(y,w,F));else $.push(An(p.beforeEnter,w,F));return $.push(h),qe($)}).then(()=>(w.matched.forEach(p=>p.enterCallbacks={}),$=ll(we,"beforeRouteEnter",w,F,A),$.push(h),qe($))).then(()=>{$=[];for(const p of s.list())$.push(An(p,w,F));return $.push(h),qe($)}).catch(p=>Xt(p,8)?p:Promise.reject(p))}function ee(w,F,$){a.list().forEach(W=>A(()=>W(w,F,$)))}function V(w,F,$,W,fe){const we=I(w,F);if(we)return we;const h=F===En,p=xr?history.state:{};$&&(W||h?i.replace(w.fullPath,he({scroll:h&&p&&p.scroll},fe)):i.push(w.fullPath,fe)),l.value=w,We(w,F,$,h),Te()}let oe;function be(){oe||(oe=i.listen((w,F,$)=>{if(!vn.listening)return;const W=S(w),fe=U(W);if(fe){m(he(fe,{replace:!0}),W).catch(ji);return}c=W;const we=l.value;xr&&RR(hh(we.fullPath,$.delta),wa()),z(W,we).catch(h=>Xt(h,12)?h:Xt(h,2)?(m(h.to,W).then(p=>{Xt(p,20)&&!$.delta&&$.type===go.pop&&i.go(-1,!1)}).catch(ji),Promise.reject()):($.delta&&i.go(-$.delta,!1),ie(h,W,we))).then(h=>{h=h||V(W,we,!1),h&&($.delta&&!Xt(h,8)?i.go(-$.delta,!1):$.type===go.pop&&Xt(h,20)&&i.go(-1,!1)),ee(W,we,h)}).catch(ji)}))}let X=vi(),re=vi(),K;function ie(w,F,$){Te(w);const W=re.list();return W.length?W.forEach(fe=>fe(w,F,$)):console.error(w),Promise.reject(w)}function st(){return K&&l.value!==En?Promise.resolve():new Promise((w,F)=>{X.add([w,F])})}function Te(w){return K||(K=!w,be(),X.list().forEach(([F,$])=>w?$(w):F()),X.reset()),w}function We(w,F,$,W){const{scrollBehavior:fe}=t;if(!xr||!fe)return Promise.resolve();const we=!$&&xR(hh(w.fullPath,0))||(W||!$)&&history.state&&history.state.scroll||null;return Zr().then(()=>fe(w,F,we)).then(h=>h&&PR(h)).catch(h=>ie(h,w,F))}const Oe=w=>i.go(w);let Et;const mn=new Set,vn={currentRoute:l,listening:!0,addRoute:g,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:C,getRoutes:_,resolve:S,options:t,push:T,replace:N,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:o.add,beforeResolve:s.add,afterEach:a.add,onError:re.add,isReady:st,install(w){const F=this;w.component("RouterLink",ZR),w.component("RouterView",rx),w.config.globalProperties.$router=F,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Se(l)}),xr&&!Et&&l.value===En&&(Et=!0,T(i.location).catch(fe=>{}));const $={};for(const fe in En)Object.defineProperty($,fe,{get:()=>l.value[fe],enumerable:!0});w.provide(Ea,F),w.provide(Tu,ep($)),w.provide(uc,l);const W=w.unmount;mn.add(w),w.unmount=function(){mn.delete(w),mn.size<1&&(c=En,oe&&oe(),oe=null,l.value=En,Et=!1,K=!1),W()}}};function qe(w){return w.reduce((F,$)=>F.then(()=>A($)),Promise.resolve())}return vn}function ox(t,e){const n=[],r=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let s=0;s<o;s++){const a=e.matched[s];a&&(t.matched.find(c=>Jr(c,a))?r.push(a):n.push(a));const l=t.matched[s];l&&(e.matched.find(c=>Jr(c,l))||i.push(l))}return[n,r,i]}function sx(){return Ce(Ea)}function ax(t){return Ce(Tu)}const lx="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let cx=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+=lx[n[t]&63];return e};const Hs=sm("database",{state:()=>({documents:[],loadingDoc:!1,error:null}),actions:{async getUrls(){if(this.documents.length===0){this.loadingDoc=!0;try{const t=YP(lh(mi,"urls"),JP("user","==",Qt.currentUser.uid));(await ZP(t)).forEach(n=>{this.documents.push({id:n.id,...n.data()})})}catch(t){console.log(t)}finally{this.loadingDoc=!1}}},async addUrl(t){try{const e={name:t,short:cx(),user:Qt.currentUser.uid},n=await nR(lh(mi,"urls"),e);this.documents.push({...e,id:n.id})}catch(e){console.log(e)}},async readUrl(t){try{const e=gs(mi,"urls",t),n=await ol(e);if(!n.exists())throw new Error("No existe el documento");if(n.data().user!==Qt.currentUser.uid)throw new Error("No tienes permisos para eliminar este documento");return n.data().name}catch(e){console.log(e.message)}finally{}},async updateUrl(t,e){try{const n=gs(mi,"urls",t),r=await ol(n);if(!r.exists())throw new Error("No existe el documento");if(r.data().user!==Qt.currentUser.uid)throw new Error("No tienes permisos para eliminar este documento");await eR(n,{name:e}),this.documents=this.documents.map(i=>i.id===t?{...i,name:e}:i),Bi.push("/")}catch(n){console.log(n.message)}finally{}},async deleteUrl(t){try{const e=gs(mi,"urls",t),n=await ol(e);if(!n.exists())throw new Error("No existe el documento");if(n.data().user!==Qt.currentUser.uid)throw new Error("No tienes permisos para eliminar este documento");await tR(e),this.documents=this.documents.filter(r=>r.id!==t)}catch(e){console.log(e.message)}finally{}}}}),ux={key:0},fx={key:1,class:"lista"},dx=["onClick"],hx=["onClick"],px={__name:"Home",setup(t){const e=Mo(),n=Hs(),r=sx();n.getUrls();const i=He(""),o=()=>{n.addUrl(i.value)};return(s,a)=>{var l;return Ue(),_t("div",null,[a[4]||(a[4]=ge("h1",null,"Home ",-1)),ge("p",null,yi((l=Se(e).userData)==null?void 0:l.email),1),ge("form",{onSubmit:na(o,["prevent"])},[jr(ge("input",{type:"text",placeholder:"Ingrese la URL","onUpdate:modelValue":a[0]||(a[0]=c=>i.value=c)},null,512),[[Ur,i.value]]),a[1]||(a[1]=ge("button",{type:"submit"},"Agregar",-1))],32),Se(n).loadingDoc?(Ue(),_t("p",ux,"loading docs...")):(Ue(),_t("ul",fx,[(Ue(!0),_t(rt,null,qy(Se(n).documents,c=>(Ue(),_t("li",{key:c.id},[Vt(yi(c.id)+" ",1),a[2]||(a[2]=ge("br",null,null,-1)),Vt(" "+yi(c.name)+" ",1),a[3]||(a[3]=ge("br",null,null,-1)),Vt(" "+yi(c.short)+" ",1),ge("button",{onClick:u=>Se(n).deleteUrl(c.id)},"Eliminar",8,dx),ge("button",{onClick:u=>Se(r).push(`/edit/${c.id}`)},"Editar",8,hx)]))),128))]))])}}},gx=["disabled"],mx={__name:"Login",setup(t){const e=Mo(),n=He(""),r=He(""),i=async()=>{if(!n.value||r.value.length<6)return alert("Campos vacios");await e.loginUser(n.value,r.value)};return(o,s)=>(Ue(),_t("div",null,[s[2]||(s[2]=ge("h1",null,"Login",-1)),ge("form",{onSubmit:na(i,["prevent"])},[jr(ge("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":s[0]||(s[0]=a=>n.value=a)},null,512),[[Ur,n.value,void 0,{trim:!0}]]),jr(ge("input",{type:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":s[1]||(s[1]=a=>r.value=a)},null,512),[[Ur,r.value,void 0,{trim:!0}]]),ge("button",{type:"submit",disabled:Se(e).loadingUser},"Acceso",8,gx)],32)]))}},vx=["disabled"],yx={__name:"Register",setup(t){const e=Mo(),n=He(""),r=He(""),i=async()=>{if(!n.value||r.value.length<6)return alert("Campos vacios");await e.registerUser(n.value,r.value)};return(o,s)=>(Ue(),_t("div",null,[s[2]||(s[2]=ge("h1",null,"Register",-1)),ge("form",{onSubmit:na(i,["prevent"])},[jr(ge("input",{type:"email",name:"email",placeholder:"Ingrese email","onUpdate:modelValue":s[0]||(s[0]=a=>n.value=a)},null,512),[[Ur,n.value,void 0,{trim:!0}]]),jr(ge("input",{type:"password",name:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":s[1]||(s[1]=a=>r.value=a)},null,512),[[Ur,r.value,void 0,{trim:!0}]]),ge("button",{type:"submit",disabled:Se(e).loadingUser},"Crear usuario",8,vx)],32)]))}},_x={__name:"Editar",setup(t){const e=ax(),n=Hs(),r=()=>{n.updateUrl(e.params.id,i.value)},i=He("");return ei(async()=>{i.value=await n.readUrl(e.params.id)}),(o,s)=>(Ue(),_t("div",null,[s[2]||(s[2]=ge("h1",null,"Editar",-1)),ge("form",{onSubmit:na(r,["prevent"])},[jr(ge("input",{type:"text",placeholder:"Ingrese la URL","onUpdate:modelValue":s[0]||(s[0]=a=>i.value=a)},null,512),[[Ur,i.value]]),s[1]||(s[1]=ge("button",{type:"submit"},"Editar",-1))],32)]))}},Ph=async(t,e,n)=>{const r=Mo();r.loadingSession=!0,await r.currentUser()?n():n("/login"),r.loadingSession=!1},bx=[{path:"/",component:px,beforeEnter:[Ph]},{path:"/edit/:id",component:_x,beforeEnter:[Ph]},{path:"/login",component:mx},{path:"/register",component:yx}],Bi=ix({routes:bx,history:DR()}),Mo=sm("userStore",{state:()=>({userData:null,loadingUser:!1,loadingSession:!1}),actions:{async registerUser(t,e){this.loadingUser=!0;try{const{user:n}=await dC(Qt,t,e);this.userData={email:n.email,uid:n.uid},Bi.push("/")}catch(n){console.log(n)}finally{this.loadingUser=!1}},async loginUser(t,e){this.loadingUser=!0;try{const{user:n}=await hC(Qt,t,e);this.userData={email:n.email,uid:n.uid},Bi.push("/")}catch(n){console.log(n)}finally{this.loadingUser=!1}},async logOutUser(){Hs().$reset();try{await vC(Qt),this.userData=null,Bi.push("/login")}catch{console.log(err)}},currentUser(){return new Promise((t,e)=>{mC(Qt,n=>{n?this.userData={email:n.email,uid:n.uid}:(this.userData=null,Hs().$reset()),t(n)},n=>{console.log("error"),e(n)})})}}}),wx={key:0},Ex={key:1},Sx={__name:"App",setup(t){const e=Mo();return(n,r)=>{const i=Ni,o=$u("router-link"),s=$u("router-view");return Ue(),_t("div",null,[Se(e).loadingSession?(Ue(),_t("div",Ex,r[7]||(r[7]=[ge("p",null,"Loading...",-1)]))):(Ue(),_t("div",wx,[B(i,{type:"primary"},{default:_i(()=>r[1]||(r[1]=[Vt("Primary")])),_:1}),ge("nav",null,[Se(e).userData?(Ue(),ns(o,{key:0,to:"/"},{default:_i(()=>r[2]||(r[2]=[Vt("Home")])),_:1})):Ho("",!0),r[5]||(r[5]=Vt(" | ")),Se(e).userData?Ho("",!0):(Ue(),ns(o,{key:1,to:"/login"},{default:_i(()=>r[3]||(r[3]=[Vt("Login")])),_:1})),r[6]||(r[6]=Vt(" | ")),Se(e).userData?Ho("",!0):(Ue(),ns(o,{key:2,to:"/register"},{default:_i(()=>r[4]||(r[4]=[Vt("Register")])),_:1})),Se(e).userData?(Ue(),_t("button",{key:3,onClick:r[0]||(r[0]=(...a)=>Se(e).logOutUser&&Se(e).logOutUser(...a))},"Logout")):Ho("",!0)])])),B(s)])}}};db(Sx).use(Bi).use($T()).mount("#app")});export default Tx();
