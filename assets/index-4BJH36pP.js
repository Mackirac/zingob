var me=Object.defineProperty;var be=(h,p,w)=>p in h?me(h,p,{enumerable:!0,configurable:!0,writable:!0,value:w}):h[p]=w;var ye=(h,p)=>()=>(p||h((p={exports:{}}).exports,p),p.exports);var ct=(h,p,w)=>(be(h,typeof p!="symbol"?p+"":p,w),w);var $e=ye((ve,it)=>{(async()=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();function h(){}function p(t){return t()}function w(){return Object.create(null)}function x(t){t.forEach(p)}function lt(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function xt(t){return Object.keys(t).length===0}function X(t,e){t.appendChild(e)}function A(t,e,r){t.insertBefore(e,r||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function at(t,e){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function S(t){return document.createElement(t)}function st(t){return document.createTextNode(t)}function Z(){return st("")}function ut(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function j(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function At(t){return Array.from(t.childNodes)}function Et(t,e){e=""+e,t.data!==e&&(t.data=e)}function E(t,e,r){t.classList.toggle(e,!!r)}function Lt(t,e,{bubbles:r=!1,cancelable:n=!1}={}){return new CustomEvent(t,{detail:e,bubbles:r,cancelable:n})}let q;function B(t){q=t}function ft(){if(!q)throw new Error("Function called outside component initialization");return q}function dt(t){ft().$$.on_mount.push(t)}function Tt(){const t=ft();return(e,r,{cancelable:n=!1}={})=>{const o=t.$$.callbacks[e];if(o){const c=Lt(e,r,{cancelable:n});return o.slice().forEach(l=>{l.call(t,c)}),!c.defaultPrevented}return!0}}const L=[],ht=[];let T=[];const gt=[],Ot=Promise.resolve();let G=!1;function Nt(){G||(G=!0,Ot.then(pt))}function J(t){T.push(t)}const Q=new Set;let O=0;function pt(){if(O!==0)return;const t=q;do{try{for(;O<L.length;){const e=L[O];O++,B(e),St(e.$$)}}catch(e){throw L.length=0,O=0,e}for(B(null),L.length=0,O=0;ht.length;)ht.pop()();for(let e=0;e<T.length;e+=1){const r=T[e];Q.has(r)||(Q.add(r),r())}T.length=0}while(L.length);for(;gt.length;)gt.pop()();G=!1,Q.clear(),B(t)}function St(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}function jt(t){const e=[],r=[];T.forEach(n=>t.indexOf(n)===-1?e.push(n):r.push(n)),r.forEach(n=>n()),T=e}const W=new Set;let k;function V(){k={r:0,c:[],p:k}}function Y(){k.r||x(k.c),k=k.p}function m(t,e){t&&t.i&&(W.delete(t),t.i(e))}function b(t,e,r,n){if(t&&t.o){if(W.has(t))return;W.add(t),k.c.push(()=>{W.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}else n&&n()}function I(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function _t(t){t&&t.c()}function tt(t,e,r){const{fragment:n,after_update:o}=t.$$;n&&n.m(e,r),J(()=>{const c=t.$$.on_mount.map(p).filter(lt);t.$$.on_destroy?t.$$.on_destroy.push(...c):x(c),t.$$.on_mount=[]}),o.forEach(J)}function et(t,e){const r=t.$$;r.fragment!==null&&(jt(r.after_update),x(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(L.push(t),Nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(t,e,r,n,o,c,l=null,a=[-1]){const i=q;B(t);const s=t.$$={fragment:null,ctx:[],props:c,update:h,not_equal:o,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:w(),dirty:a,skip_bound:!1,root:e.target||i.$$.root};l&&l(s.root);let g=!1;if(s.ctx=r?r(t,e.props||{},(_,F,...H)=>{const P=H.length?H[0]:F;return s.ctx&&o(s.ctx[_],s.ctx[_]=P)&&(!s.skip_bound&&s.bound[_]&&s.bound[_](P),g&&qt(t,_)),F}):[],s.update(),g=!0,x(s.before_update),s.fragment=n?n(s.ctx):!1,e.target){if(e.hydrate){const _=At(e.target);s.fragment&&s.fragment.l(_),_.forEach(v)}else s.fragment&&s.fragment.c();e.intro&&m(t.$$.fragment),tt(t,e.target,e.anchor),pt()}B(i)}class rt{constructor(){ct(this,"$$");ct(this,"$$set")}$destroy(){et(this,1),this.$destroy=h}$on(e,r){if(!lt(r))return h;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const o=n.indexOf(r);o!==-1&&n.splice(o,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Bt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Bt);const Ct="/zingo/assets/card_reader_bg-Rq7y8wX7.wasm",Mt=async(t={},e)=>{let r;if(e.startsWith("data:")){const n=e.replace(/^data:.*?base64,/,"");let o;if(typeof Buffer=="function"&&typeof Buffer.from=="function")o=Buffer.from(n,"base64");else if(typeof atob=="function"){const c=atob(n);o=new Uint8Array(c.length);for(let l=0;l<c.length;l++)o[l]=c.charCodeAt(l)}else throw new Error("Cannot decode base64-encoded data URL");r=await WebAssembly.instantiate(o,t)}else{const n=await fetch(e),o=n.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&o.startsWith("application/wasm"))r=await WebAssembly.instantiateStreaming(n,t);else{const c=await n.arrayBuffer();r=await WebAssembly.instantiate(c,t)}}return r.instance.exports};let y;function Pt(t){y=t}const Wt=typeof TextDecoder>"u"?(0,it.require)("util").TextDecoder:TextDecoder;let mt=new Wt("utf-8",{ignoreBOM:!0,fatal:!0});mt.decode();let R=null;function C(){return(R===null||R.byteLength===0)&&(R=new Uint8Array(y.memory.buffer)),R}function It(t,e){return t=t>>>0,mt.decode(C().subarray(t,t+e))}const $=new Array(128).fill(void 0);$.push(void 0,null,!0,!1);let M=$.length;function Rt(t){M===$.length&&$.push($.length+1);const e=M;return M=$[e],$[e]=t,e}let ot=0;const Ut=typeof TextEncoder>"u"?(0,it.require)("util").TextEncoder:TextEncoder;let U=new Ut("utf-8");const zt=typeof U.encodeInto=="function"?function(t,e){return U.encodeInto(t,e)}:function(t,e){const r=U.encode(t);return e.set(r),{read:t.length,written:r.length}};function Dt(t,e,r){if(r===void 0){const a=U.encode(t),i=e(a.length,1)>>>0;return C().subarray(i,i+a.length).set(a),ot=a.length,i}let n=t.length,o=e(n,1)>>>0;const c=C();let l=0;for(;l<n;l++){const a=t.charCodeAt(l);if(a>127)break;c[o+l]=a}if(l!==n){l!==0&&(t=t.slice(l)),o=r(o,n,n=l+t.length*3,1)>>>0;const a=C().subarray(o+l,o+n),i=zt(t,a);l+=i.written}return ot=l,o}let z=null;function D(){return(z===null||z.byteLength===0)&&(z=new Int32Array(y.memory.buffer)),z}function Ft(t){return $[t]}function Ht(t){t<132||($[t]=M,M=t)}function Kt(t){const e=Ft(t);return Ht(t),e}function Xt(t,e){return t=t>>>0,C().subarray(t/1,t/1+e)}function Zt(t){try{const l=y.__wbindgen_add_to_stack_pointer(-16),a=Dt(t,y.__wbindgen_malloc,y.__wbindgen_realloc),i=ot;y.create_card_from_code(l,a,i);var e=D()[l/4+0],r=D()[l/4+1],n=D()[l/4+2],o=D()[l/4+3];if(o)throw Kt(n);var c=Xt(e,r).slice();return y.__wbindgen_free(e,r*1,1),c}finally{y.__wbindgen_add_to_stack_pointer(16)}}function Gt(t,e){const r=It(t,e);return Rt(r)}URL=globalThis.URL;const N=await Mt({"./card_reader_bg.js":{__wbindgen_string_new:Gt}},Ct),Jt=N.memory,Qt=N.create_card_from_code,Vt=N.__wbindgen_add_to_stack_pointer,Yt=N.__wbindgen_malloc,te=N.__wbindgen_realloc,ee=N.__wbindgen_free,ne=Object.freeze(Object.defineProperty({__proto__:null,__wbindgen_add_to_stack_pointer:Vt,__wbindgen_free:ee,__wbindgen_malloc:Yt,__wbindgen_realloc:te,create_card_from_code:Qt,memory:Jt},Symbol.toStringTag,{value:"Module"}));Pt(ne);function re(t){let e,r,n=t[0].value+"",o,c,l;return{c(){e=S("div"),r=S("span"),o=st(n),j(r,"class","number svelte-17fe4fj"),E(r,"checked",t[0].checked),E(r,"wild_card",t[1]),j(e,"aria-hidden","true"),j(e,"class","svelte-17fe4fj"),E(e,"bingo",t[0].bingo)},m(a,i){A(a,e,i),X(e,r),X(r,o),c||(l=[ut(e,"click",t[2]),ut(e,"keydown",t[2])],c=!0)},p(a,[i]){i&1&&n!==(n=a[0].value+"")&&Et(o,n),i&1&&E(r,"checked",a[0].checked),i&2&&E(r,"wild_card",a[1]),i&1&&E(e,"bingo",a[0].bingo)},i:h,o:h,d(a){a&&v(e),c=!1,x(l)}}}function oe(t,e,r){let{state:n}=e,{wild_card:o=!1}=e;const c=Tt(),l=()=>{o||(r(0,n.checked=!n.checked,n),c("change",{checked:n.checked}))};return t.$$set=a=>{"state"in a&&r(0,n=a.state),"wild_card"in a&&r(1,o=a.wild_card)},[n,o,l]}class bt extends rt{constructor(e){super(),nt(this,e,oe,re,K,{state:0,wild_card:1})}}function yt(t,e,r){const n=t.slice();return n[6]=e[r],n[8]=r,n}function $t(t,e,r){const n=t.slice();return n[6]=e[r],n[10]=r,n}function wt(t){let e,r,n,o=I(Array(u)),c=[];for(let a=0;a<o.length;a+=1)c[a]=kt(yt(t,o,a));const l=a=>b(c[a],1,1,()=>{c[a]=null});return{c(){e=S("div"),r=S("div");for(let a=0;a<c.length;a+=1)c[a].c();j(r,"class","card-border svelte-6p65qw"),j(e,"class","container svelte-6p65qw")},m(a,i){A(a,e,i),X(e,r);for(let s=0;s<c.length;s+=1)c[s]&&c[s].m(r,null);n=!0},p(a,i){if(i&7){o=I(Array(u));let s;for(s=0;s<o.length;s+=1){const g=yt(a,o,s);c[s]?(c[s].p(g,i),m(c[s],1)):(c[s]=kt(g),c[s].c(),m(c[s],1),c[s].m(r,null))}for(V(),s=o.length;s<c.length;s+=1)l(s);Y()}},i(a){if(!n){for(let i=0;i<o.length;i+=1)m(c[i]);n=!0}},o(a){c=c.filter(Boolean);for(let i=0;i<c.length;i+=1)b(c[i]);n=!1},d(a){a&&v(e),at(c,a)}}}function ce(t){let e,r;return e=new bt({props:{state:t[0][t[8]*u+t[10]]}}),e.$on("change",t[2]),{c(){_t(e.$$.fragment)},m(n,o){tt(e,n,o),r=!0},p(n,o){const c={};o&1&&(c.state=n[0][n[8]*u+n[10]]),e.$set(c)},i(n){r||(m(e.$$.fragment,n),r=!0)},o(n){b(e.$$.fragment,n),r=!1},d(n){et(e,n)}}}function ie(t){let e,r;return e=new bt({props:{state:t[0][t[8]*u+t[10]],wild_card:!0}}),{c(){_t(e.$$.fragment)},m(n,o){tt(e,n,o),r=!0},p(n,o){const c={};o&1&&(c.state=n[0][n[8]*u+n[10]]),e.$set(c)},i(n){r||(m(e.$$.fragment,n),r=!0)},o(n){b(e.$$.fragment,n),r=!1},d(n){et(e,n)}}}function vt(t){let e,r,n,o;const c=[ie,ce],l=[];function a(i,s){return i[8]===i[1]&&i[10]===i[1]?0:1}return e=a(t),r=l[e]=c[e](t),{c(){r.c(),n=Z()},m(i,s){l[e].m(i,s),A(i,n,s),o=!0},p(i,s){r.p(i,s)},i(i){o||(m(r),o=!0)},o(i){b(r),o=!1},d(i){i&&v(n),l[e].d(i)}}}function kt(t){let e,r,n=I(Array(u)),o=[];for(let l=0;l<n.length;l+=1)o[l]=vt($t(t,n,l));const c=l=>b(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();e=Z()},m(l,a){for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(l,a);A(l,e,a),r=!0},p(l,a){if(a&7){n=I(Array(u));let i;for(i=0;i<n.length;i+=1){const s=$t(l,n,i);o[i]?(o[i].p(s,a),m(o[i],1)):(o[i]=vt(s),o[i].c(),m(o[i],1),o[i].m(e.parentNode,e))}for(V(),i=n.length;i<o.length;i+=1)c(i);Y()}},i(l){if(!r){for(let a=0;a<n.length;a+=1)m(o[a]);r=!0}},o(l){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)b(o[a]);r=!1},d(l){l&&v(e),at(o,l)}}}function le(t){let e,r,n=t[0]&&wt(t);return{c(){n&&n.c(),e=Z()},m(o,c){n&&n.m(o,c),A(o,e,c),r=!0},p(o,[c]){o[0]?n?(n.p(o,c),c&1&&m(n,1)):(n=wt(o),n.c(),m(n,1),n.m(e.parentNode,e)):n&&(V(),b(n,1,1,()=>{n=null}),Y())},i(o){r||(m(n),r=!0)},o(o){b(n),r=!1},d(o){o&&v(e),n&&n.d(o)}}}const u=5;function ae(t,e,r){let{code:n}=e;const o=Math.floor(u/2);let c,l;const a=(s,g)=>{let _=[...Array(u)].map((f,d)=>s*u+d),F=[...Array(u)].map((f,d)=>d*u+g),H=[...Array(u)].map((f,d)=>d*u+d),P=[];for(let f=0;f<u;f++)for(let d=0;d<u;d++)f+d+1===u&&P.push(f*u+d);let he=l.filter((f,d)=>_.includes(d)).every(f=>f.checked),ge=l.filter((f,d)=>F.includes(d)).every(f=>f.checked),pe=s===g&&l.filter((f,d)=>H.includes(d)).every(f=>f.checked),_e=s+g+1===u&&l.filter((f,d)=>P.includes(d)).every(f=>f.checked);return he||ge||pe||_e},i=()=>{let s=[];for(let g=0;g<u;g++)for(let _=0;_<u;_++)s.push({...l[g*u+_],bingo:a(g,_)});r(0,l=s)};return dt(()=>{try{c=Zt(n);let s=[];c.forEach(g=>{s.push({value:`${g}`,checked:!1,bingo:!1})}),s.splice(o*u+o,0,{value:"Z",checked:!0,bingo:!1}),r(0,l=s)}catch(s){console.error(s)}}),t.$$set=s=>{"code"in s&&r(3,n=s.code)},[l,o,i,n]}class se extends rt{constructor(e){super(),nt(this,e,ae,le,K,{code:3})}}function ue(t){let e;return{c(){e=S("main"),e.innerHTML='<div id="cards"></div>'},m(r,n){A(r,e,n)},p:h,i:h,o:h,d(r){r&&v(e)}}}function fe(t,e,r){let{cards:n}=e;return dt(()=>{r(0,n=document.querySelector("#cards"));let o=window.location.href.split("?")[1];(o?o.split("&"):[]).forEach(c=>{new se({target:n,props:{code:c}})})}),t.$$set=o=>{"cards"in o&&r(0,n=o.cards)},[n]}class de extends rt{constructor(e){super(),nt(this,e,fe,ue,K,{cards:0})}}new de({target:document.getElementById("app")})})()});export default $e();