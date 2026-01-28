import { el, toUnit } from './utils.js';
import { getIconSvgByName } from './icons.js';

/* =========================================================
 [C-1] Detailed Banner Content Builder
========================================================= */
function _buildDetailedContent(panel, banner, isMobile) {
    const content = banner.content || {};
    const ctaCfg = banner.cta || {};

    // --- Background Logic ---
    panel.style.backgroundColor = banner.background?.color || '#fff';
    panel.style.color = banner.text?.color || '#000';
    if (banner.background?.image) {
        panel.style.backgroundImage = `url("${banner.background.image}")`;
        panel.style.backgroundSize = banner.bgFit || 'cover';
        panel.style.backgroundPosition = banner.bgPosition || 'center';
        panel.style.backgroundRepeat = 'no-repeat';
        panel.style.color = banner.text?.color || '#fff';
    }

    if (banner.presentedBy) {
        const presentedBar = el('div', { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '8px', fontSize: '12px', color: banner.presentedBy.textColor || '#666', background: banner.presentedBy.bgColor || '#f0f0f0' });
        const pText = el('span'); pText.textContent = banner.presentedBy.text || 'Presented by';
        const pLogo = el('img', { height: '18px' });
        pLogo.src = banner.presentedBy.logoUrl;
        presentedBar.appendChild(pText); presentedBar.appendChild(pLogo);
        panel.appendChild(presentedBar);
    }

    const mainContainer = el('div', { display: 'flex', padding: '24px 32px', gap: '24px' });
    mainContainer.className = 'yx-main-container';

    const eventLogoEl = banner.eventLogoUrl ? el('img', { height: '40px', marginBottom: '16px', alignSelf: 'flex-start' }) : null;
    if (eventLogoEl) eventLogoEl.src = banner.eventLogoUrl;

    const titleEl = content.title ? el('h2', { fontSize: '28px', fontWeight: '800', margin: '0 0 12px', lineHeight: '1.2' }) : null;
    if (titleEl) titleEl.textContent = content.title;

    const descriptionEl = content.description ? el('p', { fontSize: '16px', margin: '0 0 24px', opacity: '0.8' }) : null;
    if (descriptionEl) descriptionEl.textContent = content.description;

    // --- CTA Button ---
    let ctaBtn = null;
    if (ctaCfg.text && ctaCfg.url) {
        ctaBtn = el('a', { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 20px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', background: ctaCfg.bg, color: ctaCfg.color, textAlign: 'center', marginTop: 'auto' });
        ctaBtn.href = ctaCfg.url;
        ctaBtn.target = '_blank';
        ctaBtn.rel = 'noopener';

        if (ctaCfg.iconUrl) {
            const img = el('img', { width: '20px', height: '20px', objectFit: 'contain', display: 'block' });
            img.src = ctaCfg.iconUrl;
            ctaBtn.appendChild(img);
        } else {
            const pinIconSvg = getIconSvgByName('pin');
            if (pinIconSvg) {
                const iconSpan = el('span', { display: 'flex', alignItems: 'center' });
                iconSpan.innerHTML = pinIconSvg;
                ctaBtn.appendChild(iconSpan);
            }
        }
        ctaBtn.appendChild(document.createTextNode(ctaCfg.text));
    }

    const _renderScrollableSection = (items = [], type = 'card') => {
        const container = el('div', { display: 'flex', gap: '12px', overflowX: 'auto', padding: '4px 0', scrollSnapType: 'x mandatory', scrollbarWidth: 'none' });
        items.forEach(item => {
            if (type === 'card' && item.imageUrl) {
                const card = el('a', { display: 'flex', flexDirection: 'column', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none', color: '#000', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '160px', minWidth: '160px', scrollSnapAlign: 'start', flexShrink: '0' });
                card.href = item.url; card.target = '_blank'; card.rel = 'noopener';

                const img = el('img', { width: '100%', height: '80px', objectFit: 'cover', display: 'block' });
                img.src = item.imageUrl;
                card.appendChild(img);

                const cardContent = el('div', { padding: '8px 12px', flexGrow: '1', display: 'flex', flexDirection: 'column' });
                const tag = el('div', { fontSize: '12px', opacity: '0.7', marginBottom: '4px' }); tag.textContent = item.tag; cardContent.appendChild(tag);
                const title = el('div', { fontWeight: '600', fontSize: '14px', lineHeight: '1.4', height: '39.2px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', webkitLineClamp: '2', webkitBoxOrient: 'vertical' }); title.textContent = item.title; cardContent.appendChild(title);
                card.appendChild(cardContent); container.appendChild(card);
            } else if (type === 'partner' && item.logoUrl) {
                const link = el('a', { display: 'inline-block', flexShrink: '0' });
                link.href = item.url; link.target = '_blank'; link.rel = 'noopener';
                const logo = el('img', { height: '30px', opacity: '0.8' });
                logo.src = item.logoUrl;
                link.appendChild(logo); container.appendChild(link);
            }
        });
        return container;
    };

    const rightColContent = document.createDocumentFragment();
    if (content.cards?.length) {
        const cardsTitle = el('h3', { fontSize: '16px', fontWeight: '600', margin: '0 0 12px' });
        // NEW VARIABLE: cardsTitle
        cardsTitle.textContent = content.cardsTitle || 'Take a look at what you can find';
        rightColContent.appendChild(cardsTitle);
        rightColContent.appendChild(_renderScrollableSection(content.cards, 'card'));
    }
    if (content.partners?.length) {
        const partnersTitle = el('h3', { fontSize: '16px', fontWeight: '600', margin: '20px 0 12px' });
        // NEW VARIABLE: partnersTitle
        partnersTitle.textContent = content.partnersTitle || 'Our Partners';
        rightColContent.appendChild(partnersTitle);
        rightColContent.appendChild(_renderScrollableSection(content.partners, 'partner'));
    }

    if (isMobile) {
        const mobileCol = el('div', { display: 'flex', flexDirection: 'column', minWidth: '0' });
        if (eventLogoEl) mobileCol.appendChild(eventLogoEl);
        if (titleEl) mobileCol.appendChild(titleEl);
        if (descriptionEl) mobileCol.appendChild(descriptionEl);
        mobileCol.appendChild(rightColContent);
        if (ctaBtn) mobileCol.appendChild(ctaBtn);
        mainContainer.appendChild(mobileCol);
    } else {
        const leftCol = el('div', { flex: '0 0 30%', display: 'flex', flexDirection: 'column' });
        leftCol.className = 'yx-left-col';

        const rightCol = el('div', { flex: '1 1 70%', overflow: 'hidden', minWidth: '0' });
        rightCol.className = 'yx-right-col';

        if (eventLogoEl) leftCol.appendChild(eventLogoEl);
        if (titleEl) leftCol.appendChild(titleEl);
        if (descriptionEl) leftCol.appendChild(descriptionEl);
        if (ctaBtn) leftCol.appendChild(ctaBtn);
        rightCol.appendChild(rightColContent);
        mainContainer.appendChild(leftCol);
        mainContainer.appendChild(rightCol);
    }
    panel.appendChild(mainContainer);
}

/* =========================================================
 [C-2] Classic Banner Content Builder
========================================================= */
function _buildClassicContent(panel, banner, closeFn) {
    const content = banner.content || {};
    const ctaCfg = banner.cta || {};

    // --- Background Logic ---
    panel.style.backgroundColor = banner.background?.color || '#0f172a';
    panel.style.color = banner.text?.color || '#fff';

    if (banner.background?.image) {
        panel.style.backgroundImage = `url("${banner.background.image}")`;
        panel.style.backgroundSize = banner.bgFit || 'cover';
        panel.style.backgroundPosition = banner.bgPosition || 'center';
        panel.style.backgroundRepeat = 'no-repeat';
    }

    const inner = el('div', {
        position: 'relative', display: 'flex', alignItems: 'center',
        gap: '16px',
        padding: '16px 40px 16px 24px',
        width: '100%', boxSizing: 'border-box'
    });
    inner.classList.add('yx-banner-inner');

    // --- Column 1: Title ---
    const titleCol = el('div', { flex: '1 1 30%' });
    titleCol.classList.add('yx-title-col');
    if (content.title) { const titleEl = el('div', { fontWeight: '600', fontSize: '20px', lineHeight: '1.3' }); titleEl.classList.add('yx-title-text'); titleEl.textContent = content.title; titleCol.appendChild(titleEl); }
    inner.appendChild(titleCol);

    // --- Column 2: Description ---
    const descCol = el('div', { flex: '1 1 45%' });
    descCol.classList.add('yx-description-col');
    if (content.description) { const descEl = el('div', { fontSize: '15px', opacity: '0.85', lineHeight: '1.4' }); descEl.textContent = content.description; descCol.appendChild(descEl); }
    inner.appendChild(descCol);

    // --- Column 3: Button ---
    const buttonCol = el('div', { flex: '0 0 auto', display: 'flex', justifyContent: 'flex-end' });
    if (ctaCfg.text && ctaCfg.url) {
        const ctaBtn = el('a', { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: ctaCfg.bg || '#c95624', color: ctaCfg.color || '#fff', padding: '12px 18px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', whiteSpace: 'nowrap' });
        ctaBtn.classList.add('yx-cta-btn');
        ctaBtn.href = ctaCfg.url; ctaBtn.target = '_blank'; ctaBtn.rel = 'noopener';

        if (ctaCfg.iconUrl) {
            const img = el('img', { width: '20px', height: '20px', objectFit: 'contain', display: 'block' });
            img.src = ctaCfg.iconUrl;
            ctaBtn.appendChild(img);
        } else {
            const pinIconSvg = getIconSvgByName('pin');
            if (pinIconSvg) { const iconSpan = el('span', { display: 'flex', alignItems: 'center' }); iconSpan.innerHTML = pinIconSvg; ctaBtn.appendChild(iconSpan); }
        }

        ctaBtn.appendChild(document.createTextNode(ctaCfg.text));
        buttonCol.appendChild(ctaBtn);
    }
    inner.appendChild(buttonCol);
    panel.appendChild(inner);
}

/* =========================================================
 [C-3] Main Banner Function
========================================================= */
export function openFlowingBanner({ anchorEl, banner = {}, onClose, overlayZBase = 2147483647, placementMode = 'side' }) {
    const maxW = toUnit(banner.size?.maxW ?? 800);
    const minH = banner.size?.minH ?? 'auto';

    const isAutoOpen = placementMode === 'center';

    const transformOrigin = isAutoOpen ? 'center bottom' : (placementMode === 'below' ? 'center top' : 'right center');
    const initialTransform = isAutoOpen ? 'translate(-50%, 20px)' : 'scale(0.95)';
    const finalTransform = isAutoOpen ? 'translate(-50%, 0)' : 'scale(1)';

    // The Panel serves as the "Frame" for all content
    const panel = el('div', {
        position: 'fixed', width: `min(92vw, ${maxW})`, maxHeight: '90vh',
        overflowY: isAutoOpen ? 'visible' : 'hidden',
        minHeight: toUnit(minH), zIndex: String(overlayZBase + 1),
        borderRadius: toUnit(banner.radius ?? 16), fontFamily: 'system-ui, sans-serif',
        boxSizing: 'border-box', boxShadow: '0 12px 36px rgba(0,0,0,.25)',
        transform: initialTransform, opacity: '0', transformOrigin: transformOrigin,
        transition: 'transform .3s cubic-bezier(.2,.8,.2,1), opacity .3s ease'
    });
    panel.classList.add('yx-panel');

    const isMobile = window.screen.width <= 768;
    if (isMobile) { panel.classList.add('yx-mobile'); }

    const styles = el('style');
    styles.textContent = `
    .yx-panel.yx-mobile .yx-title-col { flex-basis: 70% !important; }
    .yx-panel.yx-mobile .yx-description-col { display: none !important; }
    .yx-panel.yx-mobile .yx-title-text { font-size: 18px !important; line-height: 1.1 !important; }
    .yx-panel.yx-mobile .yx-banner-inner { gap: 10px !important; padding: 12px 10px 12px 16px !important; }
    .yx-panel.yx-mobile .yx-cta-btn { padding: 8px 12px !important; font-size: 14px !important; min-width: 100px; justify-content: center; }
    .yx-panel.yx-mobile .yx-cta-btn span { display: none !important; }
    .yx-panel.yx-mobile .yx-main-container { padding: 24px 15px !important; }
    .yx-panel.yx-mobile h2 { font-size: 24px !important; }
  `;
    panel.appendChild(styles);

    function close() {
        if (anchorEl) { window.removeEventListener('scroll', place, true); window.removeEventListener('resize', place); }
        panel.style.transform = initialTransform; panel.style.opacity = '0';
        panel.addEventListener('transitionend', () => { panel.remove(); onClose && onClose(); }, { once: true });
    }

    // --- CONDITIONAL CLOSE BUTTON CREATION ---
    let closeBtn;

    if (isAutoOpen) {
        // STYLE 1: "Outside" Close Button
        closeBtn = el('button', {
            position: 'absolute',
            bottom: '100%', left: '0', marginBottom: '8px',
            width: '30px', height: '30px', borderRadius: '50%',
            border: '0', background: '#000', color: '#fff',
            fontSize: '20px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: '100', boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        });
    } else {
        // STYLE 2: "Inside" Close Button
        closeBtn = el('button', {
            position: 'absolute', top: '10px', right: '10px',
            border: '0', background: 'transparent',
            color: banner.closeButtonColor || 'inherit',
            fontSize: '24px', cursor: 'pointer', lineHeight: '1', zIndex: '100'
        });
    }

    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', close);
    panel.appendChild(closeBtn);

    if (banner.layout === 'detailed') {
        _buildDetailedContent(panel, banner, isMobile);
    } else {
        _buildClassicContent(panel, banner);
    }

    document.body.appendChild(panel);

    // Positioning
    if (isAutoOpen) {
        panel.style.left = '50%';
        panel.style.bottom = '20px';
    } else {
        place();
        window.addEventListener('scroll', place, { passive: true, capture: true });
        window.addEventListener('resize', place);
    }

    function place() {
        if (!anchorEl) return;
        const r = anchorEl.getBoundingClientRect(); const pw = panel.offsetWidth, ph = panel.offsetHeight; const off = banner.offset ?? 10; let top, left;
        if (placementMode === 'below') { top = r.bottom + off; const align = banner.inlineAlign || 'left'; if (align === 'right') { left = r.right - pw; } else { left = r.left; } }
        else { top = r.top + (r.height - ph) / 2; left = r.right - pw - off; }
        top = Math.max(8, Math.min(top, window.innerHeight - ph - 8)); left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
        panel.style.top = Math.round(top) + 'px'; panel.style.left = Math.round(left) + 'px';
    }

    requestAnimationFrame(() => {
        panel.style.transform = finalTransform;
        panel.style.opacity = '1';
    });
    return { close, panel };
}
