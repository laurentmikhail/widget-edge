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
    const maskValue = typeof iconMask === 'string' ? iconMask.toLowerCase() : iconMask;
    const shouldMask = maskValue === true || maskValue === 'true' || maskValue === 'yes' || maskValue === 'on';

    if (iconUrl) {
        if (iconColor && shouldMask) {
            const span = el('span', {
                width: iconSize,
                height: iconSize,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0',
                backgroundColor: color,
                WebkitMaskImage: `url("${iconUrl}")`,
                WebkitMaskPosition: 'center',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskImage: `url("${iconUrl}")`,
                maskPosition: 'center',
                maskSize: 'contain',
                maskRepeat: 'no-repeat'
            });
            inlineSvgIcon(iconUrl, span);
            return span;
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

function inlineSvgIcon(iconUrl, target) {
    fetch(iconUrl)
        .then((response) => response.ok ? response.text() : '')
        .then((svgText) => {
            if (!svgText || !/<svg[\s>]/i.test(svgText)) return;
            target.style.backgroundColor = 'transparent';
            target.style.WebkitMaskImage = '';
            target.style.maskImage = '';
            target.innerHTML = sanitizeSvg(svgText);
            const svg = target.querySelector('svg');
            if (!svg) return;
            svg.style.width = '100%';
            svg.style.height = '100%';
            svg.style.display = 'block';
        })
        .catch(() => { });
}

function sanitizeSvg(svgText) {
    return svgText
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/\son\w+="[^"]*"/gi, '')
        .replace(/\son\w+='[^']*'/gi, '')
        .replace(/\sfill=(["'])(?!none\1)[^"']*\1/gi, ' fill="currentColor"')
        .replace(/\sstroke=(["'])(?!none\1)[^"']*\1/gi, ' stroke="currentColor"');
}
