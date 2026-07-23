import { demoFreedomFanGuideConfig, renderFreedomFanGuideBanner } from './templates/freedom-fan-guide-banner.js';

function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
}

async function mount(scriptTag) {
    if (scriptTag.dataset.widgetMounted === 'true') return;
    scriptTag.dataset.widgetMounted = 'true';

    const id = scriptTag.dataset.widgetId;
    const demo = scriptTag.dataset.demo;
    const template = scriptTag.dataset.template || demo;

    if (demo === 'freedom-fan-guide-banner') {
        renderFreedomFanGuideBanner(demoFreedomFanGuideConfig());
        return;
    }

    if (!id) return;

    const srcUrl = scriptTag.getAttribute('src');
    const selfOrigin = srcUrl ? new URL(srcUrl, document.baseURI).origin : (location.origin || '');
    const base = scriptTag.dataset.apiBase || selfOrigin;

    let payload;
    try {
        const noCache = scriptTag.dataset.noCache === 'true';
        const cachePart = noCache ? `?t=${Date.now()}` : '';
        const response = await fetch(`${base}/api/widget/${encodeURIComponent(id)}${cachePart}`, { cache: noCache ? 'no-store' : 'default' });
        if (!response.ok) throw new Error(`Widget config failed: ${response.status}`);
        payload = await response.json();
    } catch (error) {
        console.error('[loader.v3] failed to load widget', error);
        return;
    }

    const config = payload?.config ?? payload;
    const resolvedTemplate = config?.template || config?.type || template;

    if (resolvedTemplate === 'freedom-fan-guide-banner') {
        renderFreedomFanGuideBanner(config?.settings || config?.banner || config);
        return;
    }

    console.warn('[loader.v3] unknown template', resolvedTemplate);
}

ready(() => {
    document
        .querySelectorAll('script[src*="loader.v3.js"]')
        .forEach(mount);
});
