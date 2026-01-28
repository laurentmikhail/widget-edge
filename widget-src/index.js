import { ready } from './utils.js';
import { makeFloatingHost } from './floating-host.js';
import { renderTrigger } from './trigger.js';
import { openFlowingBanner } from './banner.js';

async function mount(scriptTag) {
    const id = scriptTag.dataset.widgetId; if (!id) return;
    const srcUrl = scriptTag.getAttribute('src');
    const selfOrigin = srcUrl ? new URL(srcUrl, document.baseURI).origin : (location.origin || '');
    const base = scriptTag.dataset.apiBase || selfOrigin;

    let payload;
    try {
        const r = await fetch(`${base}/api/widget/${encodeURIComponent(id)}`, { cache: 'no-store' });
        if (!r.ok) { try { console.error('[loader] fetch failed', r.status, await r.text()); } catch { }; return; }
        payload = await r.json();
    } catch (e) { console.error('[loader] network error', e); return; }

    const config = payload?.config ?? payload;
    const type = payload?.type ?? config?.type ?? 'composite';
    const installMode = (config?.install?.mode || 'inline');

    if (installMode === 'modal') {
        openFlowingBanner({
            anchorEl: null,
            banner: config.banner || {},
            placementMode: 'center'
        });
        return;
    }

    let host, root;
    if (installMode === 'floating') { ({ host, root } = makeFloatingHost(config.install)); }
    else { host = document.createElement('div'); host.style.display = 'inline-block'; root = host.attachShadow ? host.attachShadow({ mode: 'open' }) : host; }

    scriptTag.parentNode.insertBefore(host, scriptTag.nextSibling);

    if (type === 'composite' || type === 'button') {
        renderTrigger(root, { ...config, _slug: id }, { installMode, hostEl: host });
    }

    if (config?.analytics?.url) {
        try { navigator.sendBeacon?.(config.analytics.url, JSON.stringify({ e: 'impression', id })); } catch { }
    }
}

ready(() => { document.querySelectorAll('script[src*="loader.v1.js"][data-widget-id]').forEach(mount); });
