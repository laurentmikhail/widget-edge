export function ready(fn) {
    document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn);
}

export function toUnit(v, u = 'px') {
    return v == null || v === 'auto' ? 'auto' : (typeof v === 'number' ? `${v}${u}` : v);
}

export function el(tag, styles) {
    const n = document.createElement(tag);
    if (styles) Object.assign(n.style, styles);
    return n;
}
