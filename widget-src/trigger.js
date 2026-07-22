import { appendText, applyBorder, el, makeIcon, toUnit } from './utils.js';
import { getIconSvgByName } from './icons.js';
import { openFlowingBanner } from './banner.js';

export function renderTrigger(root, cfg, ctx) {
    const t = cfg.trigger || {};
    const isFloating = ctx.installMode === 'floating';
    const btn = el('button');
    btn.setAttribute('aria-label', t.ariaLabel || t.text || 'Open widget');
    btn.style.border = '0'; btn.style.cursor = 'pointer'; btn.style.fontWeight = String(t.weight ?? 600);
    btn.style.background = t.colors?.bg || '#111'; btn.style.color = t.colors?.fg || '#fff';
    btn.style.transition = 'background .2s ease, transform .2s ease, opacity .2s ease';
    btn.style.display = 'inline-flex'; btn.style.justifyContent = 'center'; btn.style.alignItems = 'center';
    btn.style.gap = t.iconOnly ? '0' : '8px'; btn.style.boxShadow = '0 4px 12px rgba(0,0,0,.15)';
    applyBorder(btn, t.border);

    if (t.colors?.hover) {
        btn.addEventListener('mouseenter', () => btn.style.background = t.colors.hover);
        btn.addEventListener('mouseleave', () => btn.style.background = t.colors.bg || '#111');
    }

    if (isFloating) {
        const defaultW = t.iconOnly ? 56 : 'auto';
        const W = toUnit(t.size?.w ?? defaultW);
        const H = toUnit(t.size?.h ?? 56);
        btn.style.width = W;
        btn.style.height = H;

        const defaultRadius = t.iconOnly ? '50%' : '30px';
        btn.style.borderRadius = toUnit(t.radius ?? defaultRadius);

        btn.style.padding = t.iconOnly ? '0' : '0 24px';
    } else {
        const inlineCfg = t.inline || {};
        const inlineSize = inlineCfg.size || {};
        btn.style.width = toUnit(inlineSize.w ?? 180); btn.style.height = toUnit(inlineSize.h ?? 44);
        btn.style.fontSize = inlineCfg.fontSize || 'inherit'; btn.style.borderRadius = toUnit(t.radius ?? 12);
        btn.style.padding = '0 16px';
    }

    const iconEl = makeIcon({
        iconUrl: t.iconUrl,
        iconSvg: t.iconSvg,
        iconName: t.iconName,
        icon: t.icon,
        iconColor: t.iconColor,
        iconMask: t.iconMask,
        size: t.iconSize ?? 24,
        getNamedIcon: getIconSvgByName
    });

    if (iconEl) btn.appendChild(iconEl);
    if (!t.iconOnly) appendText(btn, t.text || 'Click');
    root.appendChild(btn);

    let activeBanner = null;
    btn.addEventListener('click', () => {
        if (activeBanner) { activeBanner.close(); return; }
        const hostEl = ctx.hostEl; let baseZ = 2147483647;
        if (hostEl) { const z = parseInt(getComputedStyle(hostEl).zIndex || '0', 10); if (Number.isFinite(z)) baseZ = z; }

        if (isFloating) {
            btn.style.transform = 'scale(0.9)'; btn.style.opacity = '0'; btn.style.pointerEvents = 'none';
        }

        activeBanner = openFlowingBanner({
            anchorEl: isFloating ? hostEl : btn,
            banner: cfg.banner || {},
            overlayZBase: baseZ,
            placementMode: isFloating ? 'side' : 'below',
            onClose: () => {
                if (isFloating) {
                    btn.style.transform = 'scale(1)'; btn.style.opacity = '1'; btn.style.pointerEvents = '';
                }
                activeBanner = null;
            }
        });
    });
}
