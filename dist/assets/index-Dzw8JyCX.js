const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-CiWXczOG.js","assets/index-BI3SGv-5.js","assets/index-B5usV-ku.css","assets/all-wallets-CUho5jjM.js","assets/arrow-bottom-circle-BnaODG9Y.js","assets/app-store-BU5l15L4.js","assets/apple-DpqJy0wi.js","assets/arrow-bottom-Cma7odfM.js","assets/arrow-left-s7FKy3PL.js","assets/arrow-right-CLRjdqAw.js","assets/arrow-top-W5VK_lwJ.js","assets/bank-BHEPUmiR.js","assets/browser-KSvCC38V.js","assets/bin-BcLpne-l.js","assets/bitcoin-1bR7fSmR.js","assets/card-BzgfBelP.js","assets/checkmark-D-Ca9n9E.js","assets/checkmark-bold-BPjt-yL3.js","assets/chevron-bottom-BoQiBlvg.js","assets/chevron-left-BzT89YMJ.js","assets/chevron-right-DzQc_r6e.js","assets/chevron-top-yyIjnu5e.js","assets/chrome-store-DOdKvgnn.js","assets/clock-CpFGV8r6.js","assets/close-BwUkqbAl.js","assets/compass-Ci1iNBCg.js","assets/coinPlaceholder-kniY0F6E.js","assets/copy-BS1ve7vi.js","assets/cursor-D2tV8R6N.js","assets/cursor-transparent-K4-n70eI.js","assets/circle-CJ2k1AH4.js","assets/desktop-SweWAcBD.js","assets/disconnect-B-X-N1Pk.js","assets/discord-B0Cnpl5a.js","assets/ethereum-BZ7sVM6a.js","assets/etherscan-CFIF76XE.js","assets/extension-C2-6UUJh.js","assets/external-link-BBTsiD0I.js","assets/facebook-BEeHjzy1.js","assets/farcaster-CX-pwTdG.js","assets/filters-CyV-NKBz.js","assets/github-Cr0pPwBd.js","assets/google-BVyEt5pr.js","assets/help-circle-VE38lEx3.js","assets/image-DP1aUFF3.js","assets/id-B5jg-HCT.js","assets/info-circle-B5aEmbo1.js","assets/lightbulb-CmRRrYgs.js","assets/mail-CFhsL3k0.js","assets/mobile-DavAp5D6.js","assets/more-B2vvI7LI.js","assets/network-placeholder-CW8qK1rR.js","assets/nftPlaceholder-D05oFZ9L.js","assets/off-CZGP94TT.js","assets/play-store-BDR-4qrs.js","assets/plus--A77FsG2.js","assets/qr-code-B1xDROuo.js","assets/recycle-horizontal-WDgcSdq5.js","assets/refresh-NmLSMnIy.js","assets/search-7QMIbrbY.js","assets/send-B5eYWaud.js","assets/swapHorizontal-Fe2faQbP.js","assets/swapHorizontalMedium-BhNKai8i.js","assets/swapHorizontalBold-C-Q7oKhJ.js","assets/swapHorizontalRoundedBold-Cdfsv5Tz.js","assets/swapVertical-DlN6ETnA.js","assets/solana-Cea1F_Va.js","assets/telegram-BfWfb_Yd.js","assets/three-dots-C1hvehl7.js","assets/twitch-CzyIdc_Q.js","assets/x-BDXCZ4Wo.js","assets/twitterIcon-CZbsEUaZ.js","assets/user-BTY9D_Qy.js","assets/verify-vuC3RyTb.js","assets/verify-filled-Cygvd4bg.js","assets/wallet-DdmV0Vx5.js","assets/walletconnect-CXFT50WL.js","assets/wallet-placeholder-CiX8fFPn.js","assets/warning-circle-C7jkrqfX.js","assets/info-D3b-ptxK.js","assets/exclamation-triangle-BLQCUyV_.js","assets/reown-logo-CYXOm8UK.js","assets/x-mark-CFWmS5nO.js"])))=>i.map(i=>d[i]);
import{I as N,J as q,i as b,a as E,b as $,x as f,s as Y,K as V,t as H,_ as o,e as K}from"./index-BI3SGv-5.js";const w={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:i,truncate:a}){return t.length<=e+i?t:a==="end"?`${t.substring(0,e)}...`:a==="start"?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`},generateAvatarColors(t){const i=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),a=this.hexToRgb(i),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(n==null?void 0:n.replace("px","")),c=`${s}% ${s}% at 65% 40%`,u=[];for(let h=0;h<5;h+=1){const v=this.tintColor(a,.15*h);u.push(`rgb(${v[0]}, ${v[1]}, ${v[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${c}
   `},hexToRgb(t){const e=parseInt(t,16),i=e>>16&255,a=e>>8&255,n=e&255;return[i,a,n]},tintColor(t,e){const[i,a,n]=t,r=Math.round(i+(255-i)*e),s=Math.round(a+(255-a)*e),c=Math.round(n+(255-n)*e);return[r,s,c]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){var e;return t||(typeof window<"u"&&window.matchMedia&&typeof window.matchMedia=="function"?(e=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&e.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,i){return t.toString().length>=e?Number(t).toFixed(i):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function X(t,e){const{kind:i,elements:a}=e;return{kind:i,elements:a,finisher(n){customElements.get(t)||customElements.define(t,n)}}}function Z(t,e){return customElements.get(t)||customElements.define(t,e),e}function x(t){return function(i){return typeof i=="function"?Z(t,i):X(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:N},Q=(t=J,e,i)=>{const{kind:a,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),a==="accessor"){const{name:s}=i;return{set(c){const u=e.get.call(this);e.set.call(this,c),this.requestUpdate(s,u,t)},init(c){return c!==void 0&&this.C(s,void 0,t,c),c}}}if(a==="setter"){const{name:s}=i;return function(c){const u=this[s];e.call(this,c),this.requestUpdate(s,u,t)}}throw Error("Unsupported decorator location: "+a)};function l(t){return(e,i)=>typeof i=="object"?Q(t,e,i):((a,n,r)=>{const s=n.hasOwnProperty(r);return n.constructor.createProperty(r,a),s?Object.getOwnPropertyDescriptor(n,r):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function St(t){return l({...t,state:!0,attribute:!1})}const tt=b`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var _=function(t,e,i,a){var n=arguments.length,r=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,a);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let d=class extends ${render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&w.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&w.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&w.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&w.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&w.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&w.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&w.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&w.getSpacingStyles(this.margin,3)};
    `,f`<slot></slot>`}};d.styles=[E,tt];_([l()],d.prototype,"flexDirection",void 0);_([l()],d.prototype,"flexWrap",void 0);_([l()],d.prototype,"flexBasis",void 0);_([l()],d.prototype,"flexGrow",void 0);_([l()],d.prototype,"flexShrink",void 0);_([l()],d.prototype,"alignItems",void 0);_([l()],d.prototype,"justifyContent",void 0);_([l()],d.prototype,"columnGap",void 0);_([l()],d.prototype,"rowGap",void 0);_([l()],d.prototype,"gap",void 0);_([l()],d.prototype,"padding",void 0);_([l()],d.prototype,"margin",void 0);d=_([x("wui-flex")],d);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=t=>t??Y;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=t=>t===null||typeof t!="object"&&typeof t!="function",it=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F={ATTRIBUTE:1,CHILD:2},W=t=>(...e)=>({_$litDirective$:t,values:e});let U=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,a){this._$Ct=e,this._$AM=i,this._$Ci=a}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=(t,e)=>{var a;const i=t._$AN;if(i===void 0)return!1;for(const n of i)(a=n._$AO)==null||a.call(n,e,!1),T(n,e);return!0},L=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while((i==null?void 0:i.size)===0)},G=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),at(e)}};function rt(t){this._$AN!==void 0?(L(this),this._$AM=t,G(this)):this._$AM=t}function ot(t,e=!1,i=0){const a=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(a))for(let r=i;r<a.length;r++)T(a[r],!1),L(a[r]);else a!=null&&(T(a,!1),L(a));else T(this,t)}const at=t=>{t.type==F.CHILD&&(t._$AP??(t._$AP=ot),t._$AQ??(t._$AQ=rt))};class nt extends U{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,a){super._$AT(e,i,a),G(this),this.isConnected=e._$AU}_$AO(e,i=!0){var a,n;e!==this.isConnected&&(this.isConnected=e,e?(a=this.reconnected)==null||a.call(this):(n=this.disconnected)==null||n.call(this)),i&&(T(this,e),L(this))}setValue(e){if(it(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class st{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class ct{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=t=>!et(t)&&typeof t.then=="function",B=1073741823;class lt extends nt{constructor(){super(...arguments),this._$Cwt=B,this._$Cbt=[],this._$CK=new st(this),this._$CX=new ct}render(...e){return e.find(i=>!j(i))??V}update(e,i){const a=this._$Cbt;let n=a.length;this._$Cbt=i;const r=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<i.length&&!(c>this._$Cwt);c++){const u=i[c];if(!j(u))return this._$Cwt=c,u;c<n&&u===a[c]||(this._$Cwt=B,n=0,Promise.resolve(u).then(async h=>{for(;s.get();)await s.get();const v=r.deref();if(v!==void 0){const D=v._$Cbt.indexOf(u);D>-1&&D<v._$Cwt&&(v._$Cwt=D,v.setValue(h))}}))}return V}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ut=W(lt);class dt{constructor(){this.cache=new Map}set(e,i){this.cache.set(e,i)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const C=new dt,_t=b`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var A=function(t,e,i,a){var n=arguments.length,r=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,a);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const M={add:async()=>(await o(async()=>{const{addSvg:t}=await import("./add-CiWXczOG.js");return{addSvg:t}},__vite__mapDeps([0,1,2]))).addSvg,allWallets:async()=>(await o(async()=>{const{allWalletsSvg:t}=await import("./all-wallets-CUho5jjM.js");return{allWalletsSvg:t}},__vite__mapDeps([3,1,2]))).allWalletsSvg,arrowBottomCircle:async()=>(await o(async()=>{const{arrowBottomCircleSvg:t}=await import("./arrow-bottom-circle-BnaODG9Y.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([4,1,2]))).arrowBottomCircleSvg,appStore:async()=>(await o(async()=>{const{appStoreSvg:t}=await import("./app-store-BU5l15L4.js");return{appStoreSvg:t}},__vite__mapDeps([5,1,2]))).appStoreSvg,apple:async()=>(await o(async()=>{const{appleSvg:t}=await import("./apple-DpqJy0wi.js");return{appleSvg:t}},__vite__mapDeps([6,1,2]))).appleSvg,arrowBottom:async()=>(await o(async()=>{const{arrowBottomSvg:t}=await import("./arrow-bottom-Cma7odfM.js");return{arrowBottomSvg:t}},__vite__mapDeps([7,1,2]))).arrowBottomSvg,arrowLeft:async()=>(await o(async()=>{const{arrowLeftSvg:t}=await import("./arrow-left-s7FKy3PL.js");return{arrowLeftSvg:t}},__vite__mapDeps([8,1,2]))).arrowLeftSvg,arrowRight:async()=>(await o(async()=>{const{arrowRightSvg:t}=await import("./arrow-right-CLRjdqAw.js");return{arrowRightSvg:t}},__vite__mapDeps([9,1,2]))).arrowRightSvg,arrowTop:async()=>(await o(async()=>{const{arrowTopSvg:t}=await import("./arrow-top-W5VK_lwJ.js");return{arrowTopSvg:t}},__vite__mapDeps([10,1,2]))).arrowTopSvg,bank:async()=>(await o(async()=>{const{bankSvg:t}=await import("./bank-BHEPUmiR.js");return{bankSvg:t}},__vite__mapDeps([11,1,2]))).bankSvg,browser:async()=>(await o(async()=>{const{browserSvg:t}=await import("./browser-KSvCC38V.js");return{browserSvg:t}},__vite__mapDeps([12,1,2]))).browserSvg,bin:async()=>(await o(async()=>{const{binSvg:t}=await import("./bin-BcLpne-l.js");return{binSvg:t}},__vite__mapDeps([13,1,2]))).binSvg,bitcoin:async()=>(await o(async()=>{const{bitcoinSvg:t}=await import("./bitcoin-1bR7fSmR.js");return{bitcoinSvg:t}},__vite__mapDeps([14,1,2]))).bitcoinSvg,card:async()=>(await o(async()=>{const{cardSvg:t}=await import("./card-BzgfBelP.js");return{cardSvg:t}},__vite__mapDeps([15,1,2]))).cardSvg,checkmark:async()=>(await o(async()=>{const{checkmarkSvg:t}=await import("./checkmark-D-Ca9n9E.js");return{checkmarkSvg:t}},__vite__mapDeps([16,1,2]))).checkmarkSvg,checkmarkBold:async()=>(await o(async()=>{const{checkmarkBoldSvg:t}=await import("./checkmark-bold-BPjt-yL3.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([17,1,2]))).checkmarkBoldSvg,chevronBottom:async()=>(await o(async()=>{const{chevronBottomSvg:t}=await import("./chevron-bottom-BoQiBlvg.js");return{chevronBottomSvg:t}},__vite__mapDeps([18,1,2]))).chevronBottomSvg,chevronLeft:async()=>(await o(async()=>{const{chevronLeftSvg:t}=await import("./chevron-left-BzT89YMJ.js");return{chevronLeftSvg:t}},__vite__mapDeps([19,1,2]))).chevronLeftSvg,chevronRight:async()=>(await o(async()=>{const{chevronRightSvg:t}=await import("./chevron-right-DzQc_r6e.js");return{chevronRightSvg:t}},__vite__mapDeps([20,1,2]))).chevronRightSvg,chevronTop:async()=>(await o(async()=>{const{chevronTopSvg:t}=await import("./chevron-top-yyIjnu5e.js");return{chevronTopSvg:t}},__vite__mapDeps([21,1,2]))).chevronTopSvg,chromeStore:async()=>(await o(async()=>{const{chromeStoreSvg:t}=await import("./chrome-store-DOdKvgnn.js");return{chromeStoreSvg:t}},__vite__mapDeps([22,1,2]))).chromeStoreSvg,clock:async()=>(await o(async()=>{const{clockSvg:t}=await import("./clock-CpFGV8r6.js");return{clockSvg:t}},__vite__mapDeps([23,1,2]))).clockSvg,close:async()=>(await o(async()=>{const{closeSvg:t}=await import("./close-BwUkqbAl.js");return{closeSvg:t}},__vite__mapDeps([24,1,2]))).closeSvg,compass:async()=>(await o(async()=>{const{compassSvg:t}=await import("./compass-Ci1iNBCg.js");return{compassSvg:t}},__vite__mapDeps([25,1,2]))).compassSvg,coinPlaceholder:async()=>(await o(async()=>{const{coinPlaceholderSvg:t}=await import("./coinPlaceholder-kniY0F6E.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([26,1,2]))).coinPlaceholderSvg,copy:async()=>(await o(async()=>{const{copySvg:t}=await import("./copy-BS1ve7vi.js");return{copySvg:t}},__vite__mapDeps([27,1,2]))).copySvg,cursor:async()=>(await o(async()=>{const{cursorSvg:t}=await import("./cursor-D2tV8R6N.js");return{cursorSvg:t}},__vite__mapDeps([28,1,2]))).cursorSvg,cursorTransparent:async()=>(await o(async()=>{const{cursorTransparentSvg:t}=await import("./cursor-transparent-K4-n70eI.js");return{cursorTransparentSvg:t}},__vite__mapDeps([29,1,2]))).cursorTransparentSvg,circle:async()=>(await o(async()=>{const{circleSvg:t}=await import("./circle-CJ2k1AH4.js");return{circleSvg:t}},__vite__mapDeps([30,1,2]))).circleSvg,desktop:async()=>(await o(async()=>{const{desktopSvg:t}=await import("./desktop-SweWAcBD.js");return{desktopSvg:t}},__vite__mapDeps([31,1,2]))).desktopSvg,disconnect:async()=>(await o(async()=>{const{disconnectSvg:t}=await import("./disconnect-B-X-N1Pk.js");return{disconnectSvg:t}},__vite__mapDeps([32,1,2]))).disconnectSvg,discord:async()=>(await o(async()=>{const{discordSvg:t}=await import("./discord-B0Cnpl5a.js");return{discordSvg:t}},__vite__mapDeps([33,1,2]))).discordSvg,ethereum:async()=>(await o(async()=>{const{ethereumSvg:t}=await import("./ethereum-BZ7sVM6a.js");return{ethereumSvg:t}},__vite__mapDeps([34,1,2]))).ethereumSvg,etherscan:async()=>(await o(async()=>{const{etherscanSvg:t}=await import("./etherscan-CFIF76XE.js");return{etherscanSvg:t}},__vite__mapDeps([35,1,2]))).etherscanSvg,extension:async()=>(await o(async()=>{const{extensionSvg:t}=await import("./extension-C2-6UUJh.js");return{extensionSvg:t}},__vite__mapDeps([36,1,2]))).extensionSvg,externalLink:async()=>(await o(async()=>{const{externalLinkSvg:t}=await import("./external-link-BBTsiD0I.js");return{externalLinkSvg:t}},__vite__mapDeps([37,1,2]))).externalLinkSvg,facebook:async()=>(await o(async()=>{const{facebookSvg:t}=await import("./facebook-BEeHjzy1.js");return{facebookSvg:t}},__vite__mapDeps([38,1,2]))).facebookSvg,farcaster:async()=>(await o(async()=>{const{farcasterSvg:t}=await import("./farcaster-CX-pwTdG.js");return{farcasterSvg:t}},__vite__mapDeps([39,1,2]))).farcasterSvg,filters:async()=>(await o(async()=>{const{filtersSvg:t}=await import("./filters-CyV-NKBz.js");return{filtersSvg:t}},__vite__mapDeps([40,1,2]))).filtersSvg,github:async()=>(await o(async()=>{const{githubSvg:t}=await import("./github-Cr0pPwBd.js");return{githubSvg:t}},__vite__mapDeps([41,1,2]))).githubSvg,google:async()=>(await o(async()=>{const{googleSvg:t}=await import("./google-BVyEt5pr.js");return{googleSvg:t}},__vite__mapDeps([42,1,2]))).googleSvg,helpCircle:async()=>(await o(async()=>{const{helpCircleSvg:t}=await import("./help-circle-VE38lEx3.js");return{helpCircleSvg:t}},__vite__mapDeps([43,1,2]))).helpCircleSvg,image:async()=>(await o(async()=>{const{imageSvg:t}=await import("./image-DP1aUFF3.js");return{imageSvg:t}},__vite__mapDeps([44,1,2]))).imageSvg,id:async()=>(await o(async()=>{const{idSvg:t}=await import("./id-B5jg-HCT.js");return{idSvg:t}},__vite__mapDeps([45,1,2]))).idSvg,infoCircle:async()=>(await o(async()=>{const{infoCircleSvg:t}=await import("./info-circle-B5aEmbo1.js");return{infoCircleSvg:t}},__vite__mapDeps([46,1,2]))).infoCircleSvg,lightbulb:async()=>(await o(async()=>{const{lightbulbSvg:t}=await import("./lightbulb-CmRRrYgs.js");return{lightbulbSvg:t}},__vite__mapDeps([47,1,2]))).lightbulbSvg,mail:async()=>(await o(async()=>{const{mailSvg:t}=await import("./mail-CFhsL3k0.js");return{mailSvg:t}},__vite__mapDeps([48,1,2]))).mailSvg,mobile:async()=>(await o(async()=>{const{mobileSvg:t}=await import("./mobile-DavAp5D6.js");return{mobileSvg:t}},__vite__mapDeps([49,1,2]))).mobileSvg,more:async()=>(await o(async()=>{const{moreSvg:t}=await import("./more-B2vvI7LI.js");return{moreSvg:t}},__vite__mapDeps([50,1,2]))).moreSvg,networkPlaceholder:async()=>(await o(async()=>{const{networkPlaceholderSvg:t}=await import("./network-placeholder-CW8qK1rR.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([51,1,2]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await o(async()=>{const{nftPlaceholderSvg:t}=await import("./nftPlaceholder-D05oFZ9L.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([52,1,2]))).nftPlaceholderSvg,off:async()=>(await o(async()=>{const{offSvg:t}=await import("./off-CZGP94TT.js");return{offSvg:t}},__vite__mapDeps([53,1,2]))).offSvg,playStore:async()=>(await o(async()=>{const{playStoreSvg:t}=await import("./play-store-BDR-4qrs.js");return{playStoreSvg:t}},__vite__mapDeps([54,1,2]))).playStoreSvg,plus:async()=>(await o(async()=>{const{plusSvg:t}=await import("./plus--A77FsG2.js");return{plusSvg:t}},__vite__mapDeps([55,1,2]))).plusSvg,qrCode:async()=>(await o(async()=>{const{qrCodeIcon:t}=await import("./qr-code-B1xDROuo.js");return{qrCodeIcon:t}},__vite__mapDeps([56,1,2]))).qrCodeIcon,recycleHorizontal:async()=>(await o(async()=>{const{recycleHorizontalSvg:t}=await import("./recycle-horizontal-WDgcSdq5.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([57,1,2]))).recycleHorizontalSvg,refresh:async()=>(await o(async()=>{const{refreshSvg:t}=await import("./refresh-NmLSMnIy.js");return{refreshSvg:t}},__vite__mapDeps([58,1,2]))).refreshSvg,search:async()=>(await o(async()=>{const{searchSvg:t}=await import("./search-7QMIbrbY.js");return{searchSvg:t}},__vite__mapDeps([59,1,2]))).searchSvg,send:async()=>(await o(async()=>{const{sendSvg:t}=await import("./send-B5eYWaud.js");return{sendSvg:t}},__vite__mapDeps([60,1,2]))).sendSvg,swapHorizontal:async()=>(await o(async()=>{const{swapHorizontalSvg:t}=await import("./swapHorizontal-Fe2faQbP.js");return{swapHorizontalSvg:t}},__vite__mapDeps([61,1,2]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await o(async()=>{const{swapHorizontalMediumSvg:t}=await import("./swapHorizontalMedium-BhNKai8i.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([62,1,2]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await o(async()=>{const{swapHorizontalBoldSvg:t}=await import("./swapHorizontalBold-C-Q7oKhJ.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([63,1,2]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await o(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./swapHorizontalRoundedBold-Cdfsv5Tz.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([64,1,2]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await o(async()=>{const{swapVerticalSvg:t}=await import("./swapVertical-DlN6ETnA.js");return{swapVerticalSvg:t}},__vite__mapDeps([65,1,2]))).swapVerticalSvg,solana:async()=>(await o(async()=>{const{solanaSvg:t}=await import("./solana-Cea1F_Va.js");return{solanaSvg:t}},__vite__mapDeps([66,1,2]))).solanaSvg,telegram:async()=>(await o(async()=>{const{telegramSvg:t}=await import("./telegram-BfWfb_Yd.js");return{telegramSvg:t}},__vite__mapDeps([67,1,2]))).telegramSvg,threeDots:async()=>(await o(async()=>{const{threeDotsSvg:t}=await import("./three-dots-C1hvehl7.js");return{threeDotsSvg:t}},__vite__mapDeps([68,1,2]))).threeDotsSvg,twitch:async()=>(await o(async()=>{const{twitchSvg:t}=await import("./twitch-CzyIdc_Q.js");return{twitchSvg:t}},__vite__mapDeps([69,1,2]))).twitchSvg,twitter:async()=>(await o(async()=>{const{xSvg:t}=await import("./x-BDXCZ4Wo.js");return{xSvg:t}},__vite__mapDeps([70,1,2]))).xSvg,twitterIcon:async()=>(await o(async()=>{const{twitterIconSvg:t}=await import("./twitterIcon-CZbsEUaZ.js");return{twitterIconSvg:t}},__vite__mapDeps([71,1,2]))).twitterIconSvg,user:async()=>(await o(async()=>{const{userSvg:t}=await import("./user-BTY9D_Qy.js");return{userSvg:t}},__vite__mapDeps([72,1,2]))).userSvg,verify:async()=>(await o(async()=>{const{verifySvg:t}=await import("./verify-vuC3RyTb.js");return{verifySvg:t}},__vite__mapDeps([73,1,2]))).verifySvg,verifyFilled:async()=>(await o(async()=>{const{verifyFilledSvg:t}=await import("./verify-filled-Cygvd4bg.js");return{verifyFilledSvg:t}},__vite__mapDeps([74,1,2]))).verifyFilledSvg,wallet:async()=>(await o(async()=>{const{walletSvg:t}=await import("./wallet-DdmV0Vx5.js");return{walletSvg:t}},__vite__mapDeps([75,1,2]))).walletSvg,walletConnect:async()=>(await o(async()=>{const{walletConnectSvg:t}=await import("./walletconnect-CXFT50WL.js");return{walletConnectSvg:t}},__vite__mapDeps([76,1,2]))).walletConnectSvg,walletConnectLightBrown:async()=>(await o(async()=>{const{walletConnectLightBrownSvg:t}=await import("./walletconnect-CXFT50WL.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([76,1,2]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await o(async()=>{const{walletConnectBrownSvg:t}=await import("./walletconnect-CXFT50WL.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([76,1,2]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await o(async()=>{const{walletPlaceholderSvg:t}=await import("./wallet-placeholder-CiX8fFPn.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([77,1,2]))).walletPlaceholderSvg,warningCircle:async()=>(await o(async()=>{const{warningCircleSvg:t}=await import("./warning-circle-C7jkrqfX.js");return{warningCircleSvg:t}},__vite__mapDeps([78,1,2]))).warningCircleSvg,x:async()=>(await o(async()=>{const{xSvg:t}=await import("./x-BDXCZ4Wo.js");return{xSvg:t}},__vite__mapDeps([70,1,2]))).xSvg,info:async()=>(await o(async()=>{const{infoSvg:t}=await import("./info-D3b-ptxK.js");return{infoSvg:t}},__vite__mapDeps([79,1,2]))).infoSvg,exclamationTriangle:async()=>(await o(async()=>{const{exclamationTriangleSvg:t}=await import("./exclamation-triangle-BLQCUyV_.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([80,1,2]))).exclamationTriangleSvg,reown:async()=>(await o(async()=>{const{reownSvg:t}=await import("./reown-logo-CYXOm8UK.js");return{reownSvg:t}},__vite__mapDeps([81,1,2]))).reownSvg,"x-mark":async()=>(await o(async()=>{const{xMarkSvg:t}=await import("./x-mark-CFWmS5nO.js");return{xMarkSvg:t}},__vite__mapDeps([82,1,2]))).xMarkSvg};async function gt(t){if(C.has(t))return C.get(t);const i=(M[t]??M.copy)();return C.set(t,i),i}let m=class extends ${constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,f`${ut(gt(this.name),f`<div class="fallback"></div>`)}`}};m.styles=[E,H,_t];A([l()],m.prototype,"size",void 0);A([l()],m.prototype,"name",void 0);A([l()],m.prototype,"color",void 0);A([l()],m.prototype,"aspectRatio",void 0);m=A([x("wui-icon")],m);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=W(class extends U{constructor(t){var e;if(super(t),t.type!==F.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var a,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((a=this.nt)!=null&&a.has(r))&&this.st.add(r);return this.render(e)}const i=t.element.classList;for(const r of this.st)r in e||(i.remove(r),this.st.delete(r));for(const r in e){const s=!!e[r];s===this.st.has(r)||(n=this.nt)!=null&&n.has(r)||(s?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return V}}),vt=b`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600,
  .wui-font-micro-500 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var O=function(t,e,i,a){var n=arguments.length,r=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,a);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let y=class extends ${constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,f`<slot class=${ht(e)}></slot>`}};y.styles=[E,vt];O([l()],y.prototype,"variant",void 0);O([l()],y.prototype,"color",void 0);O([l()],y.prototype,"align",void 0);O([l()],y.prototype,"lineClamp",void 0);y=O([x("wui-text")],y);const pt=b`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var p=function(t,e,i,a){var n=arguments.length,r=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,a);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let g=class extends ${constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,i=this.size==="lg",a=this.size==="xl",n=i?"12%":"16%",r=i?"xxs":a?"s":"3xl",s=this.background==="gray",c=this.background==="opaque",u=this.backgroundColor==="accent-100"&&c||this.backgroundColor==="success-100"&&c||this.backgroundColor==="error-100"&&c||this.backgroundColor==="inverse-100"&&c;let h=`var(--wui-color-${this.backgroundColor})`;return u?h=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(h=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${h};
       --local-bg-mix: ${u||s?"100%":n};
       --local-border-radius: var(--wui-border-radius-${r});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,f` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};g.styles=[E,K,pt];p([l()],g.prototype,"size",void 0);p([l()],g.prototype,"backgroundColor",void 0);p([l()],g.prototype,"iconColor",void 0);p([l()],g.prototype,"iconSize",void 0);p([l()],g.prototype,"background",void 0);p([l({type:Boolean})],g.prototype,"border",void 0);p([l()],g.prototype,"borderColor",void 0);p([l()],g.prototype,"icon",void 0);g=p([x("wui-icon-box")],g);const wt=b`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-object-fit='cover']) img {
    object-fit: cover;
    object-position: center center;
  }

  :host([data-object-fit='contain']) img {
    object-fit: contain;
    object-position: center center;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;var I=function(t,e,i,a){var n=arguments.length,r=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,a);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let S=class extends ${constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,f`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};S.styles=[E,H,wt];I([l()],S.prototype,"src",void 0);I([l()],S.prototype,"alt",void 0);I([l()],S.prototype,"size",void 0);I([l()],S.prototype,"objectFit",void 0);S=I([x("wui-image")],S);const ft=b`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }

  :host([data-size='xs']) {
    height: var(--wui-spacing-2l);
    padding: 0 var(--wui-spacing-3xs) !important;
  }

  :host([data-size='xs']) > wui-text {
    transform: translateY(2%);
  }
`;var z=function(t,e,i,a){var n=arguments.length,r=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,a);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let R=class extends ${constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"||this.size==="xs"?"mini-700":"micro-700";return f`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};R.styles=[E,ft];z([l()],R.prototype,"variant",void 0);z([l()],R.prototype,"size",void 0);R=z([x("wui-tag")],R);const mt=b`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var k=function(t,e,i,a){var n=arguments.length,r=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,a);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let P=class extends ${constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,f`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};P.styles=[E,mt];k([l()],P.prototype,"color",void 0);k([l()],P.prototype,"size",void 0);P=k([x("wui-loading-spinner")],P);export{w as U,ht as a,x as c,W as e,nt as f,l as n,Et as o,St as r};
