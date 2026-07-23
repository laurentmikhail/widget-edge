"use strict";(()=>{var c="https://pibfkswjeidelzxxvzsg.supabase.co/storage/v1/object/public/widget-assets/freedom-250",C={eyebrow:"KNOW BEFORE YOU GO",title:"The Digital Fan Guide is live!",description:"Build your race-day itinerary with interactive maps, guides & schedules - right at your fingertips.",ctaText:"Get Started",ctaUrl:"#",imageUrl:`${c}/fan-guide-map.png`,maxWidth:940,zIndex:2147483647,colors:{navy:"#16224C",navyDark:"#0E1734",red:"#CF1B2F",goldLight:"#EBB34C",goldMid:"#D89B3E",goldDeep:"#B96C1E"},fonts:{baskervville:`${c}/Baskervville-Variable.ttf`,baskervvilleItalic:`${c}/Baskervville-Italic-Variable.ttf`,eurostile:`${c}/Eurostile-Oblique.otf`,eurostileBold:`${c}/Eurostile-BoldOblique.otf`,vintageGoods:`${c}/VintageGoods.otf`}};function k(){return{...C}}function v(t={}){let e=F(C,t),n=document.createElement("div");n.setAttribute("data-widget-template","freedom-fan-guide-banner");let u=n.attachShadow?n.attachShadow({mode:"open"}):n,g=document.createElement("style");g.textContent=B(e),u.appendChild(g);let h=i("div","f250-widget-shell"),r=i("section","f250-banner");r.setAttribute("aria-label",e.ariaLabel||"Digital fan guide");let m=i("div","f250-rule");r.appendChild(m);let o=i("div","f250-image-panel"),a=document.createElement("img");a.src=e.imageUrl,a.alt=e.imageAlt||"Course map",a.loading="lazy",a.decoding="async",a.className="f250-map",o.appendChild(a);let d=i("div","f250-image-overlay");o.appendChild(d),o.appendChild(E(e.liveLabel||"Live")),r.appendChild(o);let s=i("div","f250-content"),l=i("span","f250-eyebrow");l.textContent=e.eyebrow,s.appendChild(l);let x=document.createElement("h3");x.className="f250-title",x.textContent=e.title,s.appendChild(x);let b=document.createElement("p");b.className="f250-description",b.textContent=e.description,s.appendChild(b),r.appendChild(s);let y=i("div","f250-actions"),f=document.createElement("a");f.className="f250-cta",f.href=e.ctaUrl||"#",f.target=e.ctaTarget||"_blank",f.rel="noopener noreferrer",f.textContent=e.ctaText||"Get Started",y.appendChild(f);let p=document.createElement("button");return p.className="f250-close",p.type="button",p.setAttribute("aria-label",e.closeLabel||"Dismiss"),p.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"></path></svg>',p.addEventListener("click",()=>n.remove()),y.appendChild(p),r.appendChild(y),h.appendChild(r),u.appendChild(h),document.body.appendChild(n),{host:n,close:()=>n.remove()}}function E(t){let e=i("span","f250-live-badge"),n=i("span","f250-live-dot");return e.appendChild(n),e.appendChild(document.createTextNode(t)),e}function B(t){let e=t.colors||{},n=t.fonts||{};return`
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700;800&family=Saira+Condensed:wght@500;600;700;800&display=swap');

@font-face {
  font-family: 'F250 Baskervville';
  src: url('${w(n.baskervville)}') format('truetype');
  font-weight: 400 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'F250 Eurostile';
  src: url('${w(n.eurostileBold||n.eurostile)}') format('opentype');
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
  max-width: ${$(t.maxWidth||940)};
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
  transform: scale(1.9);
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
`}function F(t,e){let n={...t,...e};return n.colors={...t.colors||{},...e.colors||{}},n.fonts={...t.fonts||{},...e.fonts||{}},n}function i(t,e){let n=document.createElement(t);return e&&(n.className=e),n}function $(t){return typeof t=="number"?`${t}px`:String(t)}function w(t){return String(t||"").replace(/['"\\\n\r]/g,"")}function z(t){document.readyState!=="loading"?t():document.addEventListener("DOMContentLoaded",t)}async function L(t){if(t.dataset.widgetMounted==="true")return;t.dataset.widgetMounted="true";let e=t.dataset.widgetId,n=t.dataset.demo,u=t.dataset.template||n;if(n==="freedom-fan-guide-banner"){v(k());return}if(!e)return;let g=t.getAttribute("src"),h=g?new URL(g,document.baseURI).origin:location.origin||"",r=t.dataset.apiBase||h,m;try{let d=t.dataset.noCache==="true",s=d?`?t=${Date.now()}`:"",l=await fetch(`${r}/api/widget/${encodeURIComponent(e)}${s}`,{cache:d?"no-store":"default"});if(!l.ok)throw new Error(`Widget config failed: ${l.status}`);m=await l.json()}catch(d){console.error("[loader.v3] failed to load widget",d);return}let o=m?.config??m,a=o?.template||o?.type||u;if(a==="freedom-fan-guide-banner"){v(o?.settings||o?.banner||o);return}console.warn("[loader.v3] unknown template",a)}z(()=>{document.querySelectorAll('script[src*="loader.v3.js"]').forEach(L)});})();
