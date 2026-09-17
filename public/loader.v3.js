"use strict";(()=>{var k="https://pibfkswjeidelzxxvzsg.supabase.co/storage/v1/object/public/widget-assets/freedom-250",$={eyebrow:"KNOW BEFORE YOU GO",title:"The Digital Fan Guide is live!",description:"Build your race-day itinerary with interactive maps, guides & schedules - right at your fingertips.",ctaText:"Get Started",ctaUrl:"#",imageUrl:`${k}/fan-guide-map.png`,maxWidth:940,zIndex:2147483647,colors:{navy:"#16224C",navyDark:"#0E1734",red:"#CF1B2F",goldLight:"#EBB34C",goldMid:"#D89B3E",goldDeep:"#B96C1E"},fonts:{baskervville:`${k}/Baskervville-Variable.ttf`,baskervvilleItalic:`${k}/Baskervville-Italic-Variable.ttf`,eurostile:`${k}/Eurostile-Oblique.otf`,eurostileBold:`${k}/Eurostile-BoldOblique.otf`,vintageGoods:`${k}/VintageGoods.otf`}};function L(){return{...$}}function F(t={}){let e=T($,t),n=M(e);if(N(n))return{host:null,close:()=>{}};let o=document.createElement("div");o.setAttribute("data-widget-template","freedom-fan-guide-banner");let x=o.attachShadow?o.attachShadow({mode:"open"}):o,y=document.createElement("style");y.textContent=j(e),x.appendChild(y);let v=c("div","f250-widget-shell"),r=c("section","f250-banner");r.setAttribute("aria-label",e.ariaLabel||"Digital fan guide");let u=c("div","f250-rule");r.appendChild(u);let i=c("div","f250-image-panel"),s=document.createElement("img");s.src=e.imageUrl,s.alt=e.imageAlt||"Course map",s.loading="lazy",s.decoding="async",s.className="f250-map",i.appendChild(s);let f=c("div","f250-image-overlay");i.appendChild(f),i.appendChild(U(e.liveLabel||"Live")),r.appendChild(i);let g=c("div","f250-content"),m=c("span","f250-eyebrow");m.textContent=e.eyebrow,g.appendChild(m);let b=document.createElement("h3");b.className="f250-title",b.textContent=e.title,g.appendChild(b);let l=document.createElement("p");l.className="f250-description",l.textContent=e.description,g.appendChild(l),r.appendChild(g);let d=c("div","f250-actions"),p=document.createElement("a");p.className="f250-cta",p.href=e.ctaUrl||"#",p.target=e.ctaTarget||"_blank",p.rel="noopener noreferrer",p.textContent=e.ctaText||"Get Started",d.appendChild(p);let h=document.createElement("button");return h.className="f250-close",h.type="button",h.setAttribute("aria-label",e.closeLabel||"Dismiss"),h.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"></path></svg>',h.addEventListener("click",()=>{O(n),o.remove()}),d.appendChild(h),r.appendChild(d),v.appendChild(r),x.appendChild(v),document.body.appendChild(o),{host:o,close:()=>o.remove()}}function U(t){let e=c("span","f250-live-badge"),n=c("span","f250-live-dot");return e.appendChild(n),e.appendChild(document.createTextNode(t)),e}function j(t){let e=t.colors||{},n=t.fonts||{};return`
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700;800&family=Saira+Condensed:wght@500;600;700;800&display=swap');

@font-face {
  font-family: 'F250 Baskervville';
  src: url('${S(n.baskervville)}') format('truetype');
  font-weight: 400 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'F250 Eurostile';
  src: url('${S(n.eurostileBold||n.eurostile)}') format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

*, *::before, *::after { box-sizing: border-box; }

:host {
  --f250-navy: ${e.navy||"#16224C"};
  --f250-navy-dark: ${e.navyDark||"#0E1734"};
  --f250-red: ${e.red||"#CF1B2F"};
  --f250-gold-light: ${e.goldLight||"#EBB34C"};
  --f250-gold-mid: ${e.goldMid||"#D89B3E"};
  --f250-gold-deep: ${e.goldDeep||"#B96C1E"};
  --f250-gold-gradient: linear-gradient(180deg, var(--f250-gold-light) 0%, var(--f250-gold-mid) 45%, var(--f250-gold-deep) 100%);
  --f250-display: 'F250 Baskervville', Georgia, 'Times New Roman', serif;
  --f250-sans: 'Libre Franklin', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  --f250-condensed: 'Saira Condensed', 'F250 Eurostile', 'Libre Franklin', sans-serif;
}

.f250-widget-shell {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${Number(t.zIndex)||2147483647};
  display: flex;
  justify-content: center;
  padding: 0 16px 20px;
  pointer-events: none;
  font-family: var(--f250-sans);
}

.f250-banner {
  pointer-events: auto;
  position: relative;
  width: 100%;
  max-width: ${R(t.maxWidth||940)};
  display: flex;
  align-items: stretch;
  background: var(--f250-navy-dark);
  border-radius: 12px;
  box-shadow: 0 18px 44px rgba(14, 23, 52, 0.16);
  overflow: hidden;
  animation: f250-rise 420ms cubic-bezier(.2,.7,.3,1) both;
}

.f250-rule {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--f250-red);
  z-index: 3;
}

.f250-image-panel {
  position: relative;
  flex: none;
  width: 132px;
  min-height: 124px;
  overflow: hidden;
}

.f250-map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.3);
  transform-origin: center;
}

.f250-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(22,34,76,0.15), rgba(22,34,76,0.6));
}

.f250-live-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--f250-red);
  color: #fff;
  font-family: var(--f250-condensed);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 700;
  font-size: 10px;
  line-height: 1;
  padding: 4px 8px;
  border-radius: 3px;
}

.f250-live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  animation: f250-pulse 2s ease-out infinite;
}

.f250-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 20px 22px;
}

.f250-eyebrow {
  font-family: var(--f250-condensed);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: 700;
  font-size: 12px;
  color: var(--f250-gold-light);
}

.f250-title {
  margin: 0;
  font-family: var(--f250-display);
  font-weight: 700;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.12;
}

.f250-description {
  margin: 0;
  color: rgba(255,255,255,0.7);
  font-size: 14px;
  line-height: 1.45;
}

.f250-actions {
  flex: none;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 20px 22px;
}

.f250-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  min-height: 44px;
  background: var(--f250-gold-light);
  background-image: var(--f250-gold-gradient);
  color: var(--f250-navy);
  font-family: var(--f250-condensed);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
  font-size: 14px;
  line-height: 1;
  padding: 12px 18px;
  border-radius: 4px;
  text-decoration: none;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.22);
  white-space: nowrap;
}

.f250-cta:hover { filter: brightness(1.04); }

.f250-close {
  flex: none;
  width: 34px;
  height: 34px;
  border: 0;
  background: rgba(255,255,255,0.08);
  border-radius: 8px;
  color: rgba(255,255,255,0.7);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.f250-close:hover {
  background: rgba(255,255,255,0.16);
  color: #fff;
}

@keyframes f250-pulse {
  0%, 100% { transform: scale(1); opacity: .5; }
  50% { transform: scale(2.1); opacity: 0; }
}

@keyframes f250-rise {
  from { transform: translateY(120%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@media (max-width: 640px) {
  .f250-widget-shell {
    padding: 0 12px 16px;
  }

  .f250-banner {
    max-width: 414px;
    display: block;
    border-radius: 14px;
    box-shadow: 0 16px 38px rgba(14,23,52,.5);
  }

  .f250-image-panel {
    display: none;
  }

  .f250-content {
    padding: 18px 18px 0;
    gap: 4px;
  }

  .f250-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
  }

  .f250-eyebrow::before {
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--f250-red);
    box-shadow: 0 0 0 3px rgba(207,27,47,0.18);
  }

  .f250-title {
    font-size: 1.3rem;
    padding-right: 28px;
  }

  .f250-description {
    font-size: 13px;
    line-height: 1.45;
    color: rgba(255,255,255,.72);
  }

  .f250-actions {
    padding: 12px 18px 18px;
    display: block;
  }

  .f250-cta {
    width: 100%;
    min-height: 44px;
    font-size: 14px;
    padding: 13px;
  }

  .f250-close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 30px;
    height: 30px;
    z-index: 4;
  }
}

@media (max-width: 340px) {
  .f250-title { font-size: 1.12rem; }
  .f250-description { font-size: 12px; }
  .f250-content { padding-left: 14px; padding-right: 14px; }
  .f250-actions { padding-left: 14px; padding-right: 14px; }
}

@media (prefers-reduced-motion: reduce) {
  .f250-banner,
  .f250-live-dot {
    animation: none;
  }
}
`}function M(t){return`f250-fan-guide-dismissed:${t.widgetId||"default"}`}function N(t){try{return sessionStorage.getItem(t)==="1"}catch{return!1}}function O(t){try{sessionStorage.setItem(t,"1")}catch{}}function T(t,e){let n={...t,...e};return n.colors={...t.colors||{},...e.colors||{}},n.fonts={...t.fonts||{},...e.fonts||{}},n}function c(t,e){let n=document.createElement(t);return e&&(n.className=e),n}function R(t){return typeof t=="number"?`${t}px`:String(t)}function S(t){return String(t||"").replace(/['"\\\n\r]/g,"")}var E=new URL("widget-assets/freshwater/",document.currentScript?.src||document.baseURI).href,G={title:"The Festival Guide is live",eyebrow:"Plan your festival day",liveLabel:"Now live",description:"Seven wine regions, three stages, three food zones \u2014 find it all on the map",mobileDescription:"Map, schedule & more",ctaText:"Open the Guide",ctaUrl:"https://map.visitmke.org/?event=visit-milwaukee&area=freshwater-food--wine-festival&floor=area-12-level-1&view=map&in-map=event",imageUrl:`${E}guide.png`,imageAlt:"Freshwater Festival Guide showing restaurants, the festival map and schedule",maxWidth:940,zIndex:2147483647};function I(){return{...G}}function B(t={}){let e={...G,...t},n=document.createElement("div");n.setAttribute("data-widget-template","freshwater-guide-banner");let o=n.attachShadow({mode:"open"}),x=document.createElement("style"),y=Number(e.maxWidth)>0?Math.min(Number(e.maxWidth),940):940;x.textContent=`
      ${[400,500,600].map(w=>`@font-face {font-family: 'Freshwater Poppins';font-weight:${w};font-style:normal;font-display:swap;src:url('${E}poppins-${w}.woff2') format('woff2');}`).join(`
`)}
      :host {font-family:'Freshwater Poppins',system-ui,sans-serif;color:#fff;}
      *,*::before,*::after {box-sizing:border-box;}
      [hidden] {display:none!important;}
      .shell {position:fixed;bottom:0;left:16px;right:16px;z-index:${Number(e.zIndex)||2147483647};pointer-events:none;display:flex;justify-content:center;}
      .banner {pointer-events:auto;width:100%;max-width:${y}px;display:flex;background:#100f0f;border-top:3px solid #3a94ac;border-radius:12px 12px 0 0;overflow:hidden;box-shadow:0 -10px 34px rgba(16,15,15,.22);padding-bottom:env(safe-area-inset-bottom);animation:rise 340ms cubic-bezier(.2,.7,.3,1) both;max-height:85vh;overflow-y:auto;}
      .image {flex:none;width:132px;position:relative;background:#1b1a19;}
      .image img {position:absolute;width:100%;height:100%;object-fit:cover;object-position:center;}
      .body {flex:1;min-width:0;display:flex;align-items:center;gap:16px;padding:20px 22px;}
      .content {display:grid;gap:4px;min-width:0;flex:1;}
      .labels {display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
      .live {font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;background:#2b7286;border-radius:999px;padding:3px 8px;}
      .eyebrow {font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#7ec6da;}
      h3 {margin:0;font-size:24px;line-height:1.12;font-weight:600;letter-spacing:-.01em;text-wrap:pretty;}
      p {margin:0;font-size:14px;line-height:1.45;color:#d6cfcb;max-width:52ch;}
      .mobile-description {display:none;}
      .actions {flex:none;display:flex;align-items:center;gap:6px;}
      a {display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 18px;border-radius:8px;background:#2b7286;color:#fff;font-size:14px;font-weight:500;text-decoration:none;white-space:nowrap;transition:background 180ms;}
      a:hover {background:#347f95;}
      a:active {background:#225f70;transform:scale(.97);}
      button {font:inherit;cursor:pointer;border:0;color:#cfc7c2;}
      .close {width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:rgba(246,243,239,.1);}
      .close:hover {background:rgba(246,243,239,.18);color:#fff;}
      a:focus-visible,button:focus-visible {outline:3px solid #7ec6da;outline-offset:3px;}
      .pill {pointer-events:auto;position:fixed;right:24px;bottom:calc(20px + env(safe-area-inset-bottom));display:inline-flex;align-items:center;gap:10px;min-height:44px;padding:8px 18px;border-radius:999px;background:#100f0f;color:#fff;font-size:14px;font-weight:500;box-shadow:0 6px 20px rgba(16,15,15,.28);animation:pop 220ms cubic-bezier(.2,.7,.3,1) both;}
      .icon {display:flex;width:26px;height:26px;border-radius:8px;background:#3a94ac;align-items:center;justify-content:center;}
      @keyframes rise {from {transform:translateY(120%);}to {transform:translateY(0);}}
      @keyframes pop {from {transform:translateY(20px) scale(.96);opacity:0;}to {transform:translateY(0) scale(1);opacity:1;}}
      @media(max-width:1100px) {h3 {font-size:24px;}}
      @media(min-width:641px) and (max-width:760px) {.body {flex-wrap:wrap;gap:10px;padding:16px;}.actions {width:100%;}h3 {font-size:22px;}}
      @media(max-width:640px) {
        .shell {left:10px;right:10px;}.banner {max-width:414px;display:block;box-shadow:0 -10px 30px rgba(16,15,15,.3);position:relative;}
        .image,.eyebrow,.desktop-description {display:none;}.body {display:grid;gap:12px;padding:16px 18px 18px;}.content {gap:4px;padding-right:36px;}
        .live {font-size:10px;padding:4px 9px;}h3 {font-size:20px;line-height:1.2;}.mobile-description {display:block;font-size:13px;line-height:1.45;}
        .actions {display:block;}a {width:100%;min-height:44px;padding:10px 18px;}.close {position:absolute;right:12px;top:12px;width:32px;height:32px;}
        .pill {right:16px;bottom:calc(16px + env(safe-area-inset-bottom));gap:9px;padding:8px 16px;}
      }
      @media(prefers-reduced-motion:reduce) {.banner,.pill {animation:none;}a {transition:none;}}
    `,o.appendChild(x);let v=a("div","shell"),r=a("section","banner");r.setAttribute("aria-label","Festival Guide");let u=a("div","image"),i=a("img");i.src=new URL(e.imageUrl,E).href,i.alt=e.imageAlt,i.decoding="async",u.appendChild(i),r.appendChild(u);let s=a("div","body"),f=a("div","content"),g=a("div","labels");g.append(a("span","live",e.liveLabel),a("span","eyebrow",e.eyebrow)),f.append(g,a("h3","",e.title),a("p","desktop-description",e.description),a("p","mobile-description",e.mobileDescription));let m=a("div","actions"),b=a("a","",e.ctaText);b.href=e.ctaUrl,b.target="_blank",b.rel="noopener noreferrer";let l=a("button","close");l.type="button",l.setAttribute("aria-label","Dismiss Festival Guide banner"),l.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',m.append(b,l),s.append(f,m),r.appendChild(s);let d=a("button","pill");d.type="button",d.setAttribute("aria-label","Open the Festival Guide banner");let p=a("span","icon");p.setAttribute("aria-hidden","true"),p.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15"/></svg>',d.append(p,document.createTextNode("Festival Guide"));let h=`freshwater-guide-dismissed:${e.widgetId||"default"}`,z=!1;try{z=localStorage.getItem(h)==="1"}catch{}e.initialState==="pill"&&(z=!0);function C(w,A=!1,D=!0){if(r.hidden=w,d.hidden=!w,d.setAttribute("aria-expanded",String(!w)),D)try{localStorage.setItem(h,w?"1":"0")}catch{}A&&(w?d:l).focus()}return l.addEventListener("click",()=>C(!0,!0)),d.addEventListener("click",()=>C(!1,!0)),C(z,!1,!1),v.append(r,d),o.appendChild(v),document.body.appendChild(n),{host:n,close:()=>C(!0),destroy:()=>n.remove()}}function a(t,e,n){let o=document.createElement(t);return e&&(o.className=e),n!==void 0&&(o.textContent=n),o}function W(t){document.readyState!=="loading"?t():document.addEventListener("DOMContentLoaded",t)}async function Y(t){if(t.dataset.widgetMounted==="true")return;t.dataset.widgetMounted="true";let e=t.dataset.widgetId,n=t.dataset.demo,o=t.dataset.template||n,x=t.dataset.initialState==="pill"?"pill":void 0;if(n==="freshwater-guide-banner"){B({...I(),widgetId:"demo",initialState:x});return}if(n==="freedom-fan-guide-banner"){F({...L(),widgetId:"demo"});return}if(!e)return;let y=t.getAttribute("src"),v=y?new URL(y,document.baseURI).origin:location.origin||"",r=t.dataset.apiBase||v,u;try{let f=t.dataset.noCache==="true",g=f?`?t=${Date.now()}`:"",m=await fetch(`${r}/api/widget/${encodeURIComponent(e)}${g}`,{cache:f?"no-store":"default"});if(!m.ok)throw new Error(`Widget config failed: ${m.status}`);u=await m.json()}catch(f){console.error("[loader.v3] failed to load widget",f);return}let i=u?.config??u,s=i?.template||i?.type||o;if(s==="freshwater-guide-banner"){B({...i?.settings||i?.banner||i,widgetId:e,initialState:x});return}if(s==="freedom-fan-guide-banner"){F({...i?.settings||i?.banner||i,widgetId:e});return}console.warn("[loader.v3] unknown template",s)}W(()=>{document.querySelectorAll('script[src*="loader.v3.js"]').forEach(Y)});})();
