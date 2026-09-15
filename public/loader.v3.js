"use strict";(()=>{var v="https://pibfkswjeidelzxxvzsg.supabase.co/storage/v1/object/public/widget-assets/freedom-250",S={eyebrow:"KNOW BEFORE YOU GO",title:"The Digital Fan Guide is live!",description:"Build your race-day itinerary with interactive maps, guides & schedules - right at your fingertips.",ctaText:"Get Started",ctaUrl:"#",imageUrl:`${v}/fan-guide-map.png`,maxWidth:940,zIndex:2147483647,colors:{navy:"#16224C",navyDark:"#0E1734",red:"#CF1B2F",goldLight:"#EBB34C",goldMid:"#D89B3E",goldDeep:"#B96C1E"},fonts:{baskervville:`${v}/Baskervville-Variable.ttf`,baskervvilleItalic:`${v}/Baskervville-Italic-Variable.ttf`,eurostile:`${v}/Eurostile-Oblique.otf`,eurostileBold:`${v}/Eurostile-BoldOblique.otf`,vintageGoods:`${v}/VintageGoods.otf`}};function L(){return{...S}}function z(t={}){let e=O(S,t),n=j(e);if(M(n))return{host:null,close:()=>{}};let i=document.createElement("div");i.setAttribute("data-widget-template","freedom-fan-guide-banner");let h=i.attachShadow?i.attachShadow({mode:"open"}):i,w=document.createElement("style");w.textContent=U(e),h.appendChild(w);let b=g("div","f250-widget-shell"),a=g("section","f250-banner");a.setAttribute("aria-label",e.ariaLabel||"Digital fan guide");let s=g("div","f250-rule");a.appendChild(s);let d=g("div","f250-image-panel"),r=document.createElement("img");r.src=e.imageUrl,r.alt=e.imageAlt||"Course map",r.loading="lazy",r.decoding="async",r.className="f250-map",d.appendChild(r);let y=g("div","f250-image-overlay");d.appendChild(y),d.appendChild(D(e.liveLabel||"Live")),a.appendChild(d);let p=g("div","f250-content"),k=g("span","f250-eyebrow");k.textContent=e.eyebrow,p.appendChild(k);let x=document.createElement("h3");x.className="f250-title",x.textContent=e.title,p.appendChild(x);let c=document.createElement("p");c.className="f250-description",c.textContent=e.description,p.appendChild(c),a.appendChild(p);let l=g("div","f250-actions"),f=document.createElement("a");f.className="f250-cta",f.href=e.ctaUrl||"#",f.target=e.ctaTarget||"_blank",f.rel="noopener noreferrer",f.textContent=e.ctaText||"Get Started",l.appendChild(f);let m=document.createElement("button");return m.className="f250-close",m.type="button",m.setAttribute("aria-label",e.closeLabel||"Dismiss"),m.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"></path></svg>',m.addEventListener("click",()=>{N(n),i.remove()}),l.appendChild(m),a.appendChild(l),b.appendChild(a),h.appendChild(b),document.body.appendChild(i),{host:i,close:()=>i.remove()}}function D(t){let e=g("span","f250-live-badge"),n=g("span","f250-live-dot");return e.appendChild(n),e.appendChild(document.createTextNode(t)),e}function U(t){let e=t.colors||{},n=t.fonts||{};return`
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700;800&family=Saira+Condensed:wght@500;600;700;800&display=swap');

@font-face {
  font-family: 'F250 Baskervville';
  src: url('${$(n.baskervville)}') format('truetype');
  font-weight: 400 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'F250 Eurostile';
  src: url('${$(n.eurostileBold||n.eurostile)}') format('opentype');
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
  max-width: ${T(t.maxWidth||940)};
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
`}function j(t){return`f250-fan-guide-dismissed:${t.widgetId||"default"}`}function M(t){try{return sessionStorage.getItem(t)==="1"}catch{return!1}}function N(t){try{sessionStorage.setItem(t,"1")}catch{}}function O(t,e){let n={...t,...e};return n.colors={...t.colors||{},...e.colors||{}},n.fonts={...t.fonts||{},...e.fonts||{}},n}function g(t,e){let n=document.createElement(t);return e&&(n.className=e),n}function T(t){return typeof t=="number"?`${t}px`:String(t)}function $(t){return String(t||"").replace(/['"\\\n\r]/g,"")}var F=new URL("widget-assets/freshwater/",document.currentScript?.src||document.baseURI).href,G={title:"The Festival Guide is live",eyebrow:"Plan your festival day",liveLabel:"Now live",description:"Seven wine regions, three stages, three food zones \u2014 find it all on the map",mobileDescription:"Map, schedule & more",ctaText:"Open the Guide",ctaUrl:"https://map.visitmke.org/?event=visit-milwaukee&area=freshwater-food--wine-festival&floor=area-12-level-1&view=map&in-map=event",imageUrl:`${F}guide.png`,imageAlt:"Freshwater Festival Guide showing restaurants, the festival map and schedule",maxWidth:940,zIndex:2147483647};function I(){return{...G}}function E(t={}){let e={...G,...t},n=document.createElement("div");n.setAttribute("data-widget-template","freshwater-guide-banner");let i=n.attachShadow({mode:"open"}),h=document.createElement("style"),w=Number(e.maxWidth)>0?Math.min(Number(e.maxWidth),940):940;h.textContent=`
      ${[400,500,600].map(u=>`@font-face {font-family: 'Freshwater Poppins';font-weight:${u};font-style:normal;font-display:swap;src:url('${F}poppins-${u}.woff2') format('woff2');}`).join(`
`)}
      :host {font-family:'Freshwater Poppins',system-ui,sans-serif;color:#fff;}
      *,*::before,*::after {box-sizing:border-box;}
      [hidden] {display:none!important;}
      .shell {position:fixed;bottom:0;left:16px;right:16px;z-index:${Number(e.zIndex)||2147483647};pointer-events:none;display:flex;justify-content:center;}
      .banner {pointer-events:auto;width:100%;max-width:${w}px;display:flex;background:#100f0f;border-top:3px solid #3a94ac;border-radius:12px 12px 0 0;overflow:hidden;box-shadow:0 -10px 34px rgba(16,15,15,.22);padding-bottom:env(safe-area-inset-bottom);animation:rise 340ms cubic-bezier(.2,.7,.3,1) both;max-height:85vh;overflow-y:auto;}
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
    `,i.appendChild(h);let b=o("div","shell"),a=o("section","banner");a.setAttribute("aria-label","Festival Guide");let s=o("div","image"),d=o("img");d.src=new URL(e.imageUrl,F).href,d.alt=e.imageAlt,d.decoding="async",s.appendChild(d),a.appendChild(s);let r=o("div","body"),y=o("div","content"),p=o("div","labels");p.append(o("span","live",e.liveLabel),o("span","eyebrow",e.eyebrow)),y.append(p,o("h3","",e.title),o("p","desktop-description",e.description),o("p","mobile-description",e.mobileDescription));let k=o("div","actions"),x=o("a","",e.ctaText);x.href=e.ctaUrl,x.target="_blank",x.rel="noopener noreferrer";let c=o("button","close");c.type="button",c.setAttribute("aria-label","Dismiss Festival Guide banner"),c.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',k.append(x,c),r.append(y,k),a.appendChild(r);let l=o("button","pill");l.type="button",l.setAttribute("aria-label","Open the Festival Guide banner");let f=o("span","icon");f.setAttribute("aria-hidden","true"),f.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15"/></svg>',l.append(f,document.createTextNode("Festival Guide"));let m=`freshwater-guide-dismissed:${e.widgetId||"default"}`,B=!1;try{B=localStorage.getItem(m)==="1"}catch{}function C(u,A=!1){a.hidden=u,l.hidden=!u,l.setAttribute("aria-expanded",String(!u));try{localStorage.setItem(m,u?"1":"0")}catch{}A&&(u?l:c).focus()}return c.addEventListener("click",()=>C(!0,!0)),l.addEventListener("click",()=>C(!1,!0)),C(B),b.append(a,l),i.appendChild(b),document.body.appendChild(n),{host:n,close:()=>C(!0),destroy:()=>n.remove()}}function o(t,e,n){let i=document.createElement(t);return e&&(i.className=e),n!==void 0&&(i.textContent=n),i}function R(t){document.readyState!=="loading"?t():document.addEventListener("DOMContentLoaded",t)}async function W(t){if(t.dataset.widgetMounted==="true")return;t.dataset.widgetMounted="true";let e=t.dataset.widgetId,n=t.dataset.demo,i=t.dataset.template||n;if(n==="freshwater-guide-banner"){E({...I(),widgetId:"demo"});return}if(n==="freedom-fan-guide-banner"){z({...L(),widgetId:"demo"});return}if(!e)return;let h=t.getAttribute("src"),w=h?new URL(h,document.baseURI).origin:location.origin||"",b=t.dataset.apiBase||w,a;try{let r=t.dataset.noCache==="true",y=r?`?t=${Date.now()}`:"",p=await fetch(`${b}/api/widget/${encodeURIComponent(e)}${y}`,{cache:r?"no-store":"default"});if(!p.ok)throw new Error(`Widget config failed: ${p.status}`);a=await p.json()}catch(r){console.error("[loader.v3] failed to load widget",r);return}let s=a?.config??a,d=s?.template||s?.type||i;if(d==="freshwater-guide-banner"){E({...s?.settings||s?.banner||s,widgetId:e});return}if(d==="freedom-fan-guide-banner"){z({...s?.settings||s?.banner||s,widgetId:e});return}console.warn("[loader.v3] unknown template",d)}R(()=>{document.querySelectorAll('script[src*="loader.v3.js"]').forEach(W)});})();
