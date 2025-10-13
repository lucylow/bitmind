import{w as ve,u as ge,v as be,y as ye,M as m,z as K,R as l,d as xe,i as v,a as B,b as g,x as a,B as M,e as ce,t as le,l as h,k as G,m as Ce,D as W,E as oe,O as _,C as F,F as ae,n as N,A as H,T as ke,G as Se,P as We,c as $e,f as Re}from"./index-BI3SGv-5.js";import{c as u,n as w,r as d,o as J,U as Te}from"./index-Dzw8JyCX.js";const p=ge({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),Ae={state:p,subscribe(n){return ye(p,()=>n(p))},subscribeKey(n,e){return be(p,n,e)},showTooltip({message:n,triggerRect:e,variant:t}){p.open=!0,p.message=n,p.triggerRect=e,p.variant=t},hide(){p.open=!1,p.message="",p.triggerRect={width:0,height:0,top:0,left:0}}},I=ve(Ae),de={isUnsupportedChainView(){return l.state.view==="UnsupportedChain"||l.state.view==="SwitchNetwork"&&l.state.history.includes("UnsupportedChain")},async safeClose(){if(this.isUnsupportedChainView()){m.shake();return}if(await K.isSIWXCloseDisabled()){m.shake();return}(l.state.view==="DataCapture"||l.state.view==="DataCaptureOtpConfirm")&&xe.disconnect(),m.close()}},Ee=v`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;var Oe=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};let Q=class extends g{render(){return a`<slot></slot>`}};Q.styles=[B,Ee];Q=Oe([u("wui-card")],Q);const Ne=v`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var j=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};let $=class extends g{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,a`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){M.close()}};$.styles=[B,Ne];j([w()],$.prototype,"message",void 0);j([w()],$.prototype,"backgroundColor",void 0);j([w()],$.prototype,"iconColor",void 0);j([w()],$.prototype,"icon",void 0);$=j([u("wui-alertbar")],$);const Ie=v`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var we=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};const Pe={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let V=class extends g{constructor(){super(),this.unsubscribe=[],this.open=M.state.open,this.onOpen(!0),this.unsubscribe.push(M.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=M.state,o=Pe[t];return a`
      <wui-alertbar
        message=${e}
        backgroundColor=${o==null?void 0:o.backgroundColor}
        iconColor=${o==null?void 0:o.iconColor}
        icon=${o==null?void 0:o.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};V.styles=Ie;we([d()],V.prototype,"open",void 0);V=we([u("w3m-alertbar")],V);const _e=v`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    :host(:not([size='sm'])) button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var U=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};let R=class extends g{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){this.dataset.size=this.size;let e="",t="";switch(this.size){case"lg":e="--wui-border-radius-xs",t="--wui-spacing-1xs";break;case"sm":e="--wui-border-radius-3xs",t="--wui-spacing-xxs";break;default:e="--wui-border-radius-xxs",t="--wui-spacing-2xs";break}return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
    `,a`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};R.styles=[B,ce,le,_e];U([w()],R.prototype,"size",void 0);U([w({type:Boolean})],R.prototype,"disabled",void 0);U([w()],R.prototype,"icon",void 0);U([w()],R.prototype,"iconColor",void 0);R=U([u("wui-icon-link")],R);const De=v`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var ue=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};let X=class extends g{constructor(){super(...arguments),this.imageSrc=""}render(){return a`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?a`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:a`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};X.styles=[B,ce,le,De];ue([w()],X.prototype,"imageSrc",void 0);X=ue([u("wui-select")],X);const Be=v`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var x=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};const je=["SmartSessionList"];function q(){var r,c,S,b,E,O,z;const n=(c=(r=l.state.data)==null?void 0:r.connector)==null?void 0:c.name,e=(b=(S=l.state.data)==null?void 0:S.wallet)==null?void 0:b.name,t=(O=(E=l.state.data)==null?void 0:E.network)==null?void 0:O.name,o=e??n,s=F.getConnectors();return{Connect:`Connect ${s.length===1&&((z=s[0])==null?void 0:z.id)==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:o??"Connect Wallet",ConnectingWalletConnect:o??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:o?`Get ${o}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:t??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:ae.state.socialProvider?ae.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email"}}let f=class extends g{constructor(){super(),this.unsubscribe=[],this.heading=q()[l.state.view],this.network=h.state.activeCaipNetwork,this.networkImage=G.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=l.state.view,this.viewDirection="",this.headerText=q()[l.state.view],this.unsubscribe.push(Ce.subscribeNetworkImages(()=>{this.networkImage=G.getNetworkImage(this.network)}),l.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=q()[e]},W.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),h.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=G.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return a`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){oe.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),l.push("WhatIsAWallet")}async onClose(){await de.safeClose()}rightHeaderTemplate(){var t,o,s;const e=(s=(o=(t=_)==null?void 0:t.state)==null?void 0:o.features)==null?void 0:s.smartSessions;return l.state.view!=="Account"||!e?this.closeButtonTemplate():a`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>l.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return a`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=je.includes(this.view);return a`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?a`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var b;const{view:e}=l.state,t=e==="Connect",o=_.state.enableEmbedded,s=e==="ApproveTransaction",i=e==="ConnectingSiwe",r=e==="Account",c=_.state.enableNetworkSwitch,S=s||i||t&&o;return r&&c?a`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${J((b=this.network)==null?void 0:b.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${J(this.networkImage)}
      ></wui-select>`:this.showBack&&!S?a`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:a`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(oe.sendEvent({type:"track",event:"CLICK_NETWORKS"}),l.push("Networks"))}isAllowedNetworkSwitch(){const e=h.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,o=e==null?void 0:e.find(({id:s})=>{var i;return s===((i=this.network)==null?void 0:i.id)});return t||!o}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=l.state;let t=W.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=W.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var o;const{history:e}=l.state,t=(o=this.shadowRoot)==null?void 0:o.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){l.goBack()}};f.styles=Be;x([d()],f.prototype,"heading",void 0);x([d()],f.prototype,"network",void 0);x([d()],f.prototype,"networkImage",void 0);x([d()],f.prototype,"showBack",void 0);x([d()],f.prototype,"prevHistoryLength",void 0);x([d()],f.prototype,"view",void 0);x([d()],f.prototype,"viewDirection",void 0);x([d()],f.prototype,"headerText",void 0);f=x([u("w3m-header")],f);const Ue=v`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var A=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};let y=class extends g{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return a`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?a`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:this.iconType==="default"?a`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:a`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};y.styles=[B,Ue];A([w()],y.prototype,"backgroundColor",void 0);A([w()],y.prototype,"iconColor",void 0);A([w()],y.prototype,"icon",void 0);A([w()],y.prototype,"message",void 0);A([w()],y.prototype,"loading",void 0);A([w()],y.prototype,"iconType",void 0);y=A([u("wui-snackbar")],y);const Le=v`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var pe=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};const ze={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Y=class extends g{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=N.state.open,this.unsubscribe.push(N.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t,svg:o}=N.state,s=ze[t],{icon:i,iconColor:r}=o??s??{};return a`
      <wui-snackbar
        message=${e}
        backgroundColor=${s==null?void 0:s.backgroundColor}
        iconColor=${r}
        icon=${i}
        .loading=${t==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),N.state.autoClose&&(this.timeout=setTimeout(()=>N.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Y.styles=Le;pe([d()],Y.prototype,"open",void 0);Y=pe([u("w3m-snackbar")],Y);const He=v`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var L=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};let T=class extends g{constructor(){super(),this.unsubscribe=[],this.open=I.state.open,this.message=I.state.message,this.triggerRect=I.state.triggerRect,this.variant=I.state.variant,this.unsubscribe.push(I.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,a`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};T.styles=[He];L([d()],T.prototype,"open",void 0);L([d()],T.prototype,"message",void 0);L([d()],T.prototype,"triggerRect",void 0);L([d()],T.prototype,"variant",void 0);T=L([u("w3m-tooltip"),u("w3m-tooltip")],T);const Ke=v`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var Z=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};let D=class extends g{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=l.state.view,this.viewDirection="",this.unsubscribe.push(l.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){var e;this.resizeObserver=new ResizeObserver(([t])=>{const o=`${t==null?void 0:t.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",o),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=o,this.style.animation="unset"},W.ANIMATION_DURATIONS.ModalHeight)}),(e=this.resizeObserver)==null||e.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return a`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return a`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return a`<w3m-account-view></w3m-account-view>`;case"AllWallets":return a`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return a`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return a`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return a`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return a`<w3m-connect-view></w3m-connect-view>`;case"Create":return a`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return a`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return a`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return a`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return a`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return a`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return a`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return a`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return a`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return a`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return a`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return a`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return a`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return a`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return a`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return a`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return a`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return a`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return a`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return a`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return a`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return a`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return a`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return a`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return a`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return a`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return a`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return a`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return a`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return a`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return a`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return a`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return a`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return a`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return a`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return a`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return a`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return a`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return a`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return a`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return a`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return a`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return a`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return a`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return a`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return a`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return a`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return a`<w3m-pay-loading-view></w3m-pay-loading-view>`;default:return a`<w3m-connect-view></w3m-connect-view>`}}onViewChange(e){I.hide();let t=W.VIEW_DIRECTION.Next;const{history:o}=l.state;o.length<this.prevHistoryLength&&(t=W.VIEW_DIRECTION.Prev),this.prevHistoryLength=o.length,this.viewDirection=t,setTimeout(()=>{this.view=e},W.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};D.styles=Ke;Z([d()],D.prototype,"view",void 0);Z([d()],D.prototype,"viewDirection",void 0);D=Z([u("w3m-router")],D);const Me=v`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var k=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};const se="scroll-lock";class C extends g{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=_.state.enableEmbedded,this.open=m.state.open,this.caipAddress=h.state.activeCaipAddress,this.caipNetwork=h.state.activeCaipNetwork,this.shake=m.state.shake,this.filterByNamespace=F.state.filterByNamespace,this.initializeTheming(),H.prefetchAnalyticsConfig(),this.unsubscribe.push(m.subscribeKey("open",e=>e?this.onOpen():this.onClose()),m.subscribeKey("shake",e=>this.shake=e),h.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),h.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),_.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),F.subscribeKey("filterByNamespace",e=>{var t;this.filterByNamespace!==e&&!((t=h.getAccountData(e))!=null&&t.caipAddress)&&(H.fetchRecommendedWallets(),this.filterByNamespace=e)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){m.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?a`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?a`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return a` <wui-card
      shake="${this.shake}"
      data-embedded="${J(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){await de.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=ke.state,o=Te.getColorTheme(t);Se(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),N.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=se,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${se}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",o=>{if(o.key==="Escape")this.handleClose();else if(o.key==="Tab"){const{tagName:s}=o.target;s&&!s.includes("W3M-")&&!s.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=h.state.isSwitchingNamespace,o=l.state.view==="ProfileWallets";e?await this.onConnected({caipAddress:e,isSwitchingNamespace:t,isInProfileView:o}):!t&&!this.enableEmbedded&&!o&&m.close(),await K.initializeIfEnabled(e),this.caipAddress=e,h.setIsSwitchingNamespace(!1)}async onConnected(e){if(e.isInProfileView)return;const{chainNamespace:t,chainId:o,address:s}=We.parseCaipAddress(e.caipAddress),i=`${t}:${o}`,r=!$e.getPlainAddress(this.caipAddress),c=await K.getSessions({address:s,caipNetworkId:i}),S=K.getSIWX()?c.some(O=>O.data.accountAddress===s):!0,b=e.isSwitchingNamespace&&S&&!this.enableEmbedded,E=this.enableEmbedded&&r;b?l.goBack():E&&m.close()}onNewNetwork(e){var ee,te,ie;const t=this.caipNetwork,o=(ee=t==null?void 0:t.caipNetworkId)==null?void 0:ee.toString(),s=t==null?void 0:t.chainNamespace,i=(te=e==null?void 0:e.caipNetworkId)==null?void 0:te.toString(),r=e==null?void 0:e.chainNamespace,c=o!==i,b=c&&!(s!==r),E=(t==null?void 0:t.name)===Re.UNSUPPORTED_NETWORK_NAME,O=l.state.view==="ConnectingExternal",z=l.state.view==="ProfileWallets",me=!((ie=h.getAccountData(e==null?void 0:e.chainNamespace))!=null&&ie.caipAddress),he=l.state.view==="UnsupportedChain",fe=m.state.open;let P=!1;this.enableEmbedded&&l.state.view==="SwitchNetwork"&&(P=!0),fe&&!O&&!z&&(me?c&&(P=!0):(he||b&&!E)&&(P=!0)),P&&l.state.view!=="SIWXSignMessage"&&l.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(H.prefetch(),H.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}C.styles=Me;k([w({type:Boolean})],C.prototype,"enableEmbedded",void 0);k([d()],C.prototype,"open",void 0);k([d()],C.prototype,"caipAddress",void 0);k([d()],C.prototype,"caipNetwork",void 0);k([d()],C.prototype,"shake",void 0);k([d()],C.prototype,"filterByNamespace",void 0);let ne=class extends C{};ne=k([u("w3m-modal")],ne);let re=class extends C{};re=k([u("appkit-modal")],re);export{re as AppKitModal,ne as W3mModal,C as W3mModalBase};
