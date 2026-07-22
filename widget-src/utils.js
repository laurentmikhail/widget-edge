export function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
}

export function toUnit(v, u = 'px') {
    return v == null || v === 'auto' ? 'auto' : (typeof v === 'number' ? `${v}${u}` : v);
}

export function el(tag, styles) {
    const n = document.createElement(tag);
    if (styles) Object.assign(n.style, styles);
    return n;
}

export function appendText(node, text) {
    const value = text == null ? '' : String(text);
    if (/[\r\n]/.test(value)) node.style.whiteSpace = 'pre-line';
    node.appendChild(document.createTextNode(value));
}

export function setText(node, text) {
    const value = text == null ? '' : String(text);
    if (/[\r\n]/.test(value)) node.style.whiteSpace = 'pre-line';
    node.textContent = value;
}

export function applyBorder(node, border) {
    if (!border) return;
    const enabledValue = border.enabled ?? border.on ?? border.show;
    const enabled = typeof enabledValue === 'string' ? enabledValue.toLowerCase() : enabledValue;
    if (enabled === false || enabled === 'false' || enabled === 'no' || enabled === 'off') {
        node.style.border = '0';
        return;
    }
    if (!(enabled === true || enabled === 'true' || enabled === 'yes' || enabled === 'on')) return;
    const width = toUnit(border.width ?? border.strokeWidth ?? border.stroke ?? 1);
    const color = border.color || 'currentColor';
    node.style.border = `${width} solid ${color}`;
}

export function makeIcon({ iconUrl, iconSvg, iconName, icon, iconColor, iconMask, size = 20, getNamedIcon } = {}) {
    const iconSize = toUnit(size);
    const color = iconColor || 'currentColor';

    if (iconUrl) {
        if (iconColor && iconMask === true) {
            return el('span', {
                width: iconSize,
                height: iconSize,
                display: 'inline-block',
                flexShrink: '0',
                backgroundColor: color,
                WebkitMask: `url("${iconUrl}") center / contain no-repeat`,
                mask: `url("${iconUrl}") center / contain no-repeat`
            });
        }
        const img = el('img', { width: iconSize, height: iconSize, objectFit: 'contain', display: 'block', flexShrink: '0' });
        img.src = iconUrl;
        return img;
    }

    const namedSvg = iconName && getNamedIcon ? getNamedIcon(iconName) : null;
    const svg = iconSvg || namedSvg;
    if (svg) {
        const span = el('span', { width: iconSize, height: iconSize, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', color });
        span.innerHTML = svg;
        return span;
    }

    if (icon) {
        const span = el('span', { color, fontSize: iconSize, lineHeight: '1', flexShrink: '0' });
        span.textContent = icon;
        return span;
    }

    return null;
}
