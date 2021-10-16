/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=function(t,e,i,r){return new(i||(i=Promise))((function(s,o){function n(t){try{a(r.next(t))}catch(t){o(t)}}function l(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(n,l)}a((r=r.apply(t,e||[])).next())}))};const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new Map;class s{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=r.get(this.cssText);return e&&void 0===t&&(r.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const o=t=>new s("string"==typeof t?t:t+"",i),n=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new s(r,i)},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return o(e)})(t):t;var a,c;const d={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Eh(i,e);void 0!==r&&(this._$Eu.set(r,i),t.push(r))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),r=window.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=u){var r,s;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const n=(null!==(s=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==s?s:d.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(t,e){var i,r,s;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),l=t.converter,a=null!==(s=null!==(r=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==r?r:"function"==typeof l?l:null)&&void 0!==s?s:d.fromAttribute;this._$Ei=n,this[n]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}var f,v;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null===(a=globalThis.reactiveElementPolyfillSupport)||void 0===a||a.call(globalThis,{ReactiveElement:p}),(null!==(c=globalThis.reactiveElementVersions)&&void 0!==c?c:globalThis.reactiveElementVersions=[]).push("1.0.0");const m=globalThis.trustedTypes,g=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,y="?"+$,b=`<${y}>`,_=document,A=(t="")=>_.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,P=/>/g,R=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,k=/"/g,O=/^(?:script|style|textarea)$/i,T=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),U=T(1),H=(T(2),Symbol.for("lit-noChange")),j=Symbol.for("lit-nothing"),N=new WeakMap,M=_.createTreeWalker(_,129,null,!1),z=(t,e)=>{const i=t.length-1,r=[];let s,o=2===e?"<svg>":"",n=E;for(let e=0;e<i;e++){const i=t[e];let l,a,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,a=n.exec(i),null!==a);)d=n.lastIndex,n===E?"!--"===a[1]?n=S:void 0!==a[1]?n=P:void 0!==a[2]?(O.test(a[2])&&(s=RegExp("</"+a[2],"g")),n=R):void 0!==a[3]&&(n=R):n===R?">"===a[0]?(n=null!=s?s:E,c=-1):void 0===a[1]?c=-2:(c=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?R:'"'===a[3]?k:C):n===k||n===C?n=R:n===S||n===P?n=E:(n=R,s=void 0);const h=n===R&&t[e+1].startsWith("/>")?" ":"";o+=n===E?i+b:c>=0?(r.push(l),i.slice(0,c)+"$lit$"+i.slice(c)+$+h):i+$+(-2===c?(r.push(void 0),e):h)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==g?g.createHTML(l):l,r]};class D{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,o=0;const n=t.length-1,l=this.parts,[a,c]=z(t,e);if(this.el=D.createElement(a,i),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=M.nextNode())&&l.length<n;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[o++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?W:"@"===e[1]?q:F})}else l.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(O.test(r.tagName)){const t=r.textContent.split($),e=t.length-1;if(e>0){r.textContent=m?m.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],A()),M.nextNode(),l.push({type:2,index:++s});r.append(t[e],A())}}}else if(8===r.nodeType)if(r.data===y)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf($,t+1));)l.push({type:7,index:s}),t+=$.length-1}s++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,r){var s,o,n,l;if(e===H)return e;let a=void 0!==r?null===(s=i._$Cl)||void 0===s?void 0:s[r]:i._$Cu;const c=x(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,i,r)),void 0!==r?(null!==(n=(l=i)._$Cl)&&void 0!==n?n:l._$Cl=[])[r]=a:i._$Cu=a),void 0!==a&&(e=L(t,a._$AS(t,e.values),a,r)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:r}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(i,!0);M.currentNode=s;let o=M.nextNode(),n=0,l=0,a=r[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new I(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new K(o,this,t)),this.v.push(e),a=r[++l]}n!==(null==a?void 0:a.index)&&(o=M.nextNode(),n++)}return s}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{constructor(t,e,i,r){var s;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cg=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),x(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==H&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return w(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==j&&x(this._$AH)?this._$AA.nextSibling.data=t:this.S(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=D.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(i);else{const t=new B(s,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new D(t)),e}M(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new I(this.A(A()),this.A(A()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,r,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const s=this.strings;let o=!1;if(void 0===s)t=L(this,t,e,0),o=!x(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{const r=t;let n,l;for(t=s[0],n=0;n<s.length-1;n++)l=L(this,r[i+n],e,n),l===H&&(l=this._$AH[n]),o||(o=!x(l)||l!==this._$AH[n]),l===j?t=j:t!==j&&(t+=(null!=l?l:"")+s[n+1]),this._$AH[n]=l}o&&!r&&this.k(t)}k(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends F{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===j?void 0:t}}class W extends F{constructor(){super(...arguments),this.type=4}k(t){t&&t!==j?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class q extends F{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=L(this,t,e,0))&&void 0!==i?i:j)===H)return;const r=this._$AH,s=t===j&&r!==j||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==j&&(r===j||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}var Z,J,G;null===(f=globalThis.litHtmlPolyfillSupport)||void 0===f||f.call(globalThis,D,I),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.0.0");class Q extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var r,s;const o=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let n=o._$litPart$;if(void 0===n){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=n=new I(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return H}}Q.finalized=!0,Q._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:Q}),null===(J=globalThis.litElementPolyfillSupport)||void 0===J||J.call(globalThis,{LitElement:Q}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.0.0");const X=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e);let Y=class extends Q{render(){return U` <div class="chip card-category"><slot></slot></div> `}};Y.styles=n`
    .chip {
      display: inline-block;
      color: #292929;
      transition: background 300ms ease 0s;
      box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
      padding: 1px 4px;
      margin: 0 2px;
      height: 12px;
      font-size: 10px;
      line-height: 12px;
      text-align: center;
      border-radius: 25px;
      background-color: var(--color-chip-bg);
    }

    .chip:hover {
      background-color: var(--color-chip-bg-hover);
    }
  `,Y=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([X("medium-category-chip")],Y);const tt=n`
  :root {
    font-family: "Roboto Slab", serif;
  }
`,et=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function it(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):et(t,e)}var rt=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const st=n``;let ot=class extends Q{render(){return U`
      <div class="chips">
        ${this.categories.map((t=>U`<medium-category-chip>${t}</medium-category-chip>`))}
      </div>
    `}};ot.styles=[tt,st],rt([it()],ot.prototype,"categories",void 0),ot=rt([X("medium-category-chips")],ot);const nt=(lt=class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ut){this.ut=new Set;for(const t in e)this.ut.add(t);return this.render(e)}this.ut.forEach((t=>{null==e[t]&&(this.ut.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const r=e[t];null!=r&&(this.ut.add(t),t.includes("-")?i.setProperty(t,r):i[t]=r)}return H}},(...t)=>({_$litDirective$:lt,values:t}));var lt,at=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const ct=n`
  :host {
    max-width: 100%;
  }

  .card {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
    width: 320px;
    border-radius: 12px;
    transform: scale(0.95, 0.95);
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  }

  .card:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1, 1);
    z-index: 2;
  }

  .card-time {
    font-size: 12px;
    color: #ad7d52;
    vertical-align: middle;
    margin-left: 5px;
  }

  .card-clock-info {
    float: right;
  }

  .card-img {
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .card-info-hover {
    position: absolute;
    padding: 16px;
    width: 100%;
    opacity: 0;
    top: 0;
  }

  .card-img--hover {
    transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;
  }

  .card-info {
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 16px 24px;
    height: 155px;
  }

  .card-category {
    font-family: "Raleway", sans-serif;
    font-size: 10px;
    letter-spacing: 1.2px;
    font-weight: 500;
    color: #868686;
  }

  .card-title a {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: "Roboto Slab", serif;
    text-decoration: none;
    color: black;
  }

  .card-footer {
    margin-top: auto;
    font-size: 13px;
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    width: 100%;
  }

  .card-author {
    font-weight: 600;
    text-decoration: none;
    color: var(--color-action);
  }

  .card-date {
    float: right;
  }

  .card:hover .card-img--hover {
    height: 100%;
    opacity: 0.3;
  }

  .card:hover .card-info {
    background-color: transparent;
    position: relative;
  }

  .card:hover .card-info-hover {
    opacity: 1;
  }

  medium-category-chips {
    margin-top: auto;
  }

  @media only screen and (max-width: 580px) {
    .card {
      width: 100%;
      transform: scale(1, 1);
      border-radius: 0;
      margin-top: 10px;
    }
    .card-img,
    .card-info,
    .card-img--hover {
      border-radius: 0 !important;
    }
  }
`;let dt=class extends Q{render(){return U`
      <article class="card card--1">
        <div class="card-img"></div>
        <a href="${this.article.link}" target="_blank" class="card_link">
          <div
            class="card-img--hover"
            style=${nt({backgroundImage:`url('${this.article.thumbnail}')`})}
          ></div>
        </a>
        <div class="card-info">
          <div class="card-title">
            <a target="_blank" href="${this.article.link}"
              >${this.article.title}</a
            >
          </div>

          <medium-category-chips
            .categories="${this.article.categories}"
          ></medium-category-chips>

          <div class="card-footer">
            <span>by</span>
            <a
              target="_blank"
              href="${this.article.userLink}"
              class="card-author"
              title="author"
              >${this.article.author}</a
            >
            <span class="card-date"
              >${new Date(this.article.pubDate).toLocaleDateString()}</span
            >
          </div>
        </div>
      </article>
    `}};dt.styles=[tt,ct],at([it()],dt.prototype,"article",void 0),dt=at([X("medium-article-card")],dt);var ht=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const ut=n`
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;let pt=class extends Q{constructor(){super(...arguments),this.articles=[]}render(){return U`
      <section class="cards">
        ${this.articles.map((t=>U`<medium-article-card
              .article="${t}"
            ></medium-article-card>`))}
      </section>
    `}};pt.styles=ut,ht([it()],pt.prototype,"articles",void 0),pt=ht([X("medium-articles")],pt);var ft=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const vt=n`
  .avatar {
    width: 50px;
    border-radius: 50%;
    box-shadow: 0px 13px 10px -7px rgb(0 0 0 / 10%);
  }
`;let mt=class extends Q{render(){return U` <img class="avatar" src="${this.image}" /> `}};mt.styles=[tt,vt],ft([it()],mt.prototype,"image",void 0),mt=ft([X("medium-avatar")],mt);var gt=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const $t=n`
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }
  h1 {
    font-weight: 300;
  }

  medium-avatar {
    margin-left: 15px;
  }
`;let yt=class extends Q{render(){return U`
      <div class="header">
        <h1>${this.title}</h1>
        <medium-avatar image=${this.image}></medium-avatar>
      </div>
    `}};yt.styles=[tt,$t],gt([it()],yt.prototype,"title",void 0),gt([it()],yt.prototype,"image",void 0),yt=gt([X("medium-header")],yt);var bt=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n},_t=function(t,e,i,r){return new(i||(i=Promise))((function(s,o){function n(t){try{a(r.next(t))}catch(t){o(t)}}function l(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(n,l)}a((r=r.apply(t,e||[])).next())}))};let At=class extends Q{constructor(){super(),this.innerHTML+='\n<style>\n  @import url("https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700");\n  @import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");\n  :root {\n    --color-action: #e31b6d;\n    --color-bg: #d2dbdd;\n    --color-chip-bg: #f2f2f2;\n    --color-chip-bg-hover: #e6e6e6;\n  }\n\n  #medium-portfolio-app {\n    font-family: "Roboto Slab", serif;\n    background-color: var(--color-bg);\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 0px;\n  }\n  </style>\n'}get hideHeader(){return null!==this.getAttribute("hideHeader")}get mediumUsername(){var t;return null!==(t=this.getAttribute("username"))&&void 0!==t?t:""}get maxArticles(){var t;const e=null!==(t=this.getAttribute("maxArticles"))&&void 0!==t?t:10;return isNaN(+e)?10:+e}firstUpdated(){return _t(this,void 0,void 0,(function*(){yield this.loadRssFeed()}))}loadRssFeed(){return _t(this,void 0,void 0,(function*(){this.rssFeed=yield function(e="mariusbongarts11",i){return t(this,void 0,void 0,(function*(){const{feed:r,items:s,status:o}=yield function(e){return t(this,void 0,void 0,(function*(){let t=`https://medium.com/feed/@${e}`;return(yield fetch(`https://api.rss2json.com/v1/api.json?rss_url=${t}`)).json()}))}(e),n=s.filter((t=>t.thumbnail)).slice(0,i).map((t=>Object.assign(Object.assign({},t),{userLink:r.link})));if(!r||"ok"!==o)throw new Error("Pass a valid medium username.");return{feed:r,articles:n}}))}(this.mediumUsername,this.maxArticles)}))}createRenderRoot(){return this}render(){return this.rssFeed?U`
          <div id="medium-portfolio-app">
            ${this.hideHeader?"":U`<medium-header
                  title="${this.rssFeed.feed.title}"
                  image="${this.rssFeed.feed.image}"
                ></medium-header>`}

            <medium-articles
              .articles="${this.rssFeed.articles}"
            ></medium-articles>
          </div>
        `:U``}};bt([it()],At.prototype,"rssFeed",void 0),At=bt([X("medium-portfolio")],At)})();