export function getIconSvgByName(name) {
    const ICONS = {
        pin: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>`,
        sparkles: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M5 8l2-4 2 4 4 2-4 2-2 4-2-4-4-2 4-2zm10-3l1-3 1 3 3 1-3 1-1 3-1-3-3-1 3-1zm1 9l1-2 1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/></svg>`,
        info: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M11 17h2v-6h-2v6zm0-8h2V7h-2v2zm1-7C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>`,
        bell: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zm6-6V11a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2z"/></svg>`
    };
    return ICONS[name] || null;
}
