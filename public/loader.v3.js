"use strict";(()=>{var c="https://pibfkswjeidelzxxvzsg.supabase.co/storage/v1/object/public/widget-assets/freedom-250",k={eyebrow:"KNOW BEFORE YOU GO",title:"The Digital Fan Guide is live!",description:"Build your race-day itinerary with interactive maps, guides & schedules - right at your fingertips.",ctaText:"Get Started",ctaUrl:"#",imageUrl:`${c}/fan-guide-map.png`,maxWidth:940,zIndex:2147483647,colors:{navy:"#16224C",navyDark:"#0E1734",red:"#CF1B2F",goldLight:"#EBB34C",goldMid:"#D89B3E",goldDeep:"#B96C1E"},fonts:{baskervville:`${c}/Baskervville-Variable.ttf`,baskervvilleItalic:`${c}/Baskervville-Italic-Variable.ttf`,eurostile:`${c}/Eurostile-Oblique.otf`,eurostileBold:`${c}/Eurostile-BoldOblique.otf`,vintageGoods:`${c}/VintageGoods.otf`}};function E(){return{...k}}function v(e={}){let t=L(k,e),n=$(t);if(z(n))return{host:null,close:()=>{}};let o=document.createElement("div");o.setAttribute("data-widget-template","freedom-fan-guide-banner");let g=o.attachShadow?o.attachShadow({mode:"open"}):o,m=document.createElement("style");m.textContent=F(t),g.appendChild(m);let u=r("div","f250-widget-shell"),a=r("section","f250-banner");a.setAttribute("aria-label",t.ariaLabel||"Digital fan guide");let s=r("div","f250-rule");a.appendChild(s);let l=r("div","f250-image-panel"),i=document.createElement("img");i.src=t.imageUrl,i.alt=t.imageAlt||"Course map",i.loading="lazy",i.decoding="async",i.className="f250-map",l.appendChild(i);let h=r("div","f250-image-overlay");l.appendChild(h),l.appendChild(B(t.liveLabel||"Live")),a.appendChild(l);let d=r("div","f250-content"),w=r("span","f250-eyebrow");w.textContent=t.eyebrow,d.appendChild(w);let x=document.createElement("h3");x.className="f250-title",x.textContent=t.title,d.appendChild(x);let b=document.createElement("p");b.className="f250-description",b.textContent=t.description,d.appendChild(b),a.appendChild(d);let y=r("div","f250-actions"),f=document.createElement("a");f.className="f250-cta",f.href=t.ctaUrl||"#",f.target=t.ctaTarget||"_blank",f.rel="noopener noreferrer",f.textContent=t.ctaText||"Get Started",y.appendChild(f);let p=document.createElement("button");return p.className="f250-close",p.type="button",p.setAttribute("aria-label",t.closeLabel||"Dismiss"),p.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"></path></svg>',p.addEventListener("click",()=>{S(n),o.remove()}),y.appendChild(p),a.appendChild(y),u.appendChild(a),g.appendChild(u),document.body.appendChild(o),{host:o,close:()=>o.remove()}}function B(e){let t=r("span","f250-live-badge"),n=r("span","f250-live-dot");return t.appendChild(n),t.appendChild(document.createTextNode(e)),t}function F(e){let t=e.colors||{},n=e.fonts||{};return`
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700;800&family=Saira+Condensed:wght@500;600;700;800&display=swap');

@font-face {
  font-family: 'F250 Baskervville';
  src: url('${C(n.baskervville)}') format('truetype');
  font-weight: 400 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'F250 Eurostile';
  src: url('${C(n.eurostileBold||n.eurostile)}') format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

*, *::before, *::after { box-sizing: border-box; }

:host {
  --f250-navy: ${t.navy||"#16224C"};
  --f250-navy-dark: ${t.navyDark||"#0E1734"};
  --f250-red: ${t.red||"#CF1B2F"};
  --f250-gold-light: ${t.goldLight||"#EBB34C"};
  --f250-gold-mid: ${t.goldMid||"#D89B3E"};
  --f250-gold-deep: ${t.goldDeep||"#B96C1E"};
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
  z-index: ${Number(e.zIndex)||2147483647};
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
  max-width: ${D(e.maxWidth||940)};
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
`}function $(e){return`f250-fan-guide-dismissed:${e.widgetId||"default"}`}function z(e){try{return sessionStorage.getItem(e)==="1"}catch{return!1}}function S(e){try{sessionStorage.setItem(e,"1")}catch{}}function L(e,t){let n={...e,...t};return n.colors={...e.colors||{},...t.colors||{}},n.fonts={...e.fonts||{},...t.fonts||{}},n}function r(e,t){let n=document.createElement(e);return t&&(n.className=t),n}function D(e){return typeof e=="number"?`${e}px`:String(e)}function C(e){return String(e||"").replace(/['"\\\n\r]/g,"")}function I(e){document.readyState!=="loading"?e():document.addEventListener("DOMContentLoaded",e)}async function G(e){if(e.dataset.widgetMounted==="true")return;e.dataset.widgetMounted="true";let t=e.dataset.widgetId,n=e.dataset.demo,o=e.dataset.template||n;if(n==="freedom-fan-guide-banner"){v({...E(),widgetId:"demo"});return}if(!t)return;let g=e.getAttribute("src"),m=g?new URL(g,document.baseURI).origin:location.origin||"",u=e.dataset.apiBase||m,a;try{let i=e.dataset.noCache==="true",h=i?`?t=${Date.now()}`:"",d=await fetch(`${u}/api/widget/${encodeURIComponent(t)}${h}`,{cache:i?"no-store":"default"});if(!d.ok)throw new Error(`Widget config failed: ${d.status}`);a=await d.json()}catch(i){console.error("[loader.v3] failed to load widget",i);return}let s=a?.config??a,l=s?.template||s?.type||o;if(l==="freedom-fan-guide-banner"){v({...s?.settings||s?.banner||s,widgetId:t});return}console.warn("[loader.v3] unknown template",l)}I(()=>{document.querySelectorAll('script[src*="loader.v3.js"]').forEach(G)});})();
