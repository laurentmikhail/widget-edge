import { el } from './utils.js';

export function makeFloatingHost(install = {}) {
    const host = el('div', { position: 'fixed', zIndex: String(install.zIndex ?? 2147483647), overflow: 'visible' });
    const a = install.anchor || 'bottom-right', ox = install.offsetX ?? 20, oy = install.offsetY ?? 20;
    if (a.includes('bottom')) host.style.bottom = oy + 'px';
    if (a.includes('top')) host.style.top = oy + 'px';
    if (a.includes('right')) host.style.right = ox + 'px';
    if (a.includes('left')) host.style.left = ox + 'px';
    const root = host.attachShadow ? host.attachShadow({ mode: 'open' }) : host;
    return { host, root };
}
