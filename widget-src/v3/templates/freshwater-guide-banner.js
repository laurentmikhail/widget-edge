const ASSETS_BASE = new URL('widget-assets/freshwater/', document.currentScript?.src || document.baseURI).href;
const DEFAULT_CONFIG = {
    title: 'The Festival Guide is live',
    eyebrow: 'Plan your festival day',
    liveLabel: 'Now live',
    description: 'Seven wine regions, three stages, three food zones — find it all on the map',
    mobileDescription: 'Map, schedule & more',
    ctaText: 'Open the Guide',
    ctaUrl: 'https://map.visitmke.org/?event=visit-milwaukee&area=freshwater-food--wine-festival&floor=area-12-level-1&view=map&in-map=event',
    imageUrl: `${ASSETS_BASE}guide.png`,
    imageAlt: 'Freshwater Festival Guide showing restaurants, the festival map and schedule',
    maxWidth: 940,
    zIndex: 2147483647
};

export function demoFreshwaterGuideConfig() {
    return { ...DEFAULT_CONFIG };
}

export function renderFreshwaterGuideBanner(config = {}) {
    const cfg = { ...DEFAULT_CONFIG, ...config };
    const host = document.createElement('div');
    host.setAttribute('data-widget-template', 'freshwater-guide-banner');
    const root = host.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    const maxWidth = Number(cfg.maxWidth) > 0 ? Math.min(Number(cfg.maxWidth), 940) : 940;
    style.textContent = `
      ${[400, 500, 600].map(weight => `@font-face {font-family: 'Freshwater Poppins';font-weight:${weight};font-style:normal;font-display:swap;src:url('${ASSETS_BASE}poppins-${weight}.woff2') format('woff2');}`).join('\n')}
      :host {font-family:'Freshwater Poppins',system-ui,sans-serif;color:#fff;}
      *,*::before,*::after {box-sizing:border-box;}
      [hidden] {display:none!important;}
      .shell {position:fixed;bottom:0;left:16px;right:16px;z-index:${Number(cfg.zIndex) || 2147483647};pointer-events:none;display:flex;justify-content:center;}
      .banner {pointer-events:auto;width:100%;max-width:${maxWidth}px;display:flex;background:#100f0f;border-top:3px solid #3a94ac;border-radius:12px 12px 0 0;overflow:hidden;box-shadow:0 -10px 34px rgba(16,15,15,.22);padding-bottom:env(safe-area-inset-bottom);animation:rise 340ms cubic-bezier(.2,.7,.3,1) both;max-height:85vh;overflow-y:auto;}
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
    `;
    root.appendChild(style);
    const shell = node('div', 'shell');
    const banner = node('section', 'banner');
    banner.setAttribute('aria-label', 'Festival Guide');
    const imagePanel = node('div', 'image');
    const image = node('img');
    image.src = new URL(cfg.imageUrl, ASSETS_BASE).href;
    image.alt = cfg.imageAlt;
    image.decoding = 'async';
    imagePanel.appendChild(image);
    banner.appendChild(imagePanel);
    const body = node('div', 'body');
    const content = node('div', 'content');
    const labels = node('div', 'labels');
    labels.append(node('span', 'live', cfg.liveLabel), node('span', 'eyebrow', cfg.eyebrow));
    content.append(labels, node('h3', '', cfg.title), node('p', 'desktop-description', cfg.description), node('p', 'mobile-description', cfg.mobileDescription));
    const actions = node('div', 'actions');
    const cta = node('a', '', cfg.ctaText);
    cta.href = cfg.ctaUrl;
    cta.target = '_blank';
    cta.rel = 'noopener noreferrer';
    const close = node('button', 'close');
    close.type = 'button';
    close.setAttribute('aria-label', 'Dismiss Festival Guide banner');
    close.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>';
    actions.append(cta, close);
    body.append(content, actions);
    banner.appendChild(body);
    const pill = node('button', 'pill');
    pill.type = 'button';
    pill.setAttribute('aria-label', 'Open the Festival Guide banner');
    const icon = node('span', 'icon');
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15"/></svg>';
    pill.append(icon, document.createTextNode('Festival Guide'));
    const key = `freshwater-guide-dismissed:${cfg.widgetId || 'default'}`;
    let dismissed = false;
    try { dismissed = localStorage.getItem(key) === '1'; } catch { /* Storage may be unavailable. */ }
    function setDismissed(value, focus = false) {
        banner.hidden = value;
        pill.hidden = !value;
        pill.setAttribute('aria-expanded', String(!value));
        try { localStorage.setItem(key, value ? '1' : '0'); } catch { /* Keep controls working without storage. */ }
        if (focus) (value ? pill : close).focus();
    }
    close.addEventListener('click', () => setDismissed(true, true));
    pill.addEventListener('click', () => setDismissed(false, true));
    setDismissed(dismissed);
    shell.append(banner, pill);
    root.appendChild(shell);
    document.body.appendChild(host);
    return { host, close: () => setDismissed(true), destroy: () => host.remove() };
}

function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
}
