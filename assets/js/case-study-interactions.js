(() => {
  const tabGroups = document.querySelectorAll('[data-case-tabs]');

  tabGroups.forEach((group) => {
    const tabs = Array.from(group.querySelectorAll('[data-case-tab-target]'));
    const panels = Array.from(group.querySelectorAll('[data-case-tab-panel]'));
    if (!tabs.length || !panels.length) return;

    const activate = (target) => {
      tabs.forEach((tab) => {
        const active = tab.dataset.caseTabTarget === target;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
        tab.tabIndex = active ? 0 : -1;
      });
      panels.forEach((panel) => {
        const active = panel.dataset.caseTabPanel === target;
        panel.hidden = !active;
        panel.classList.toggle('is-active', active);
      });
    };

    tabs.forEach((tab) => {
      tab.tabIndex = tab.classList.contains('is-active') ? 0 : -1;
      tab.addEventListener('click', () => activate(tab.dataset.caseTabTarget));
      tab.addEventListener('keydown', (event) => {
        const index = tabs.indexOf(tab);
        let next = null;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next !== null) {
          event.preventDefault();
          tabs[next].focus();
          activate(tabs[next].dataset.caseTabTarget);
        }
      });
    });
  });

  const modal = document.querySelector('[data-case-modal]');
  if (!modal) return;

  const modalMedia = modal.querySelector('[data-modal-media]');
  const modalTitle = modal.querySelector('[data-modal-title]');
  const modalCaption = modal.querySelector('[data-modal-caption]');
  let previousFocus = null;

  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = '';
    modalMedia.innerHTML = '';
    if (previousFocus) previousFocus.focus();
  };

  const openModal = (button) => {
    previousFocus = document.activeElement;
    const src = button.dataset.modalSrc;
    const type = button.dataset.modalType || 'image';
    const title = button.dataset.modalTitle || button.textContent.trim();
    const caption = button.dataset.modalCaption || '';

    modalTitle.textContent = title;
    modalCaption.textContent = caption;
    modalMedia.innerHTML = '';

    if (type === 'video') {
      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.setAttribute('title', title);
      iframe.setAttribute('allowfullscreen', '');
      iframe.style.width = '100%';
      iframe.style.aspectRatio = '16 / 9';
      iframe.style.border = '0';
      modalMedia.appendChild(iframe);
    } else {
      const img = document.createElement('img');
      img.src = src;
      img.alt = title;
      modalMedia.appendChild(img);
    }

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    const closeButton = modal.querySelector('[data-modal-close]');
    if (closeButton) closeButton.focus();
  };

  document.querySelectorAll('[data-modal-src]').forEach((button) => {
    button.addEventListener('click', () => openModal(button));
  });

  modal.querySelectorAll('[data-modal-close]').forEach((closer) => {
    closer.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });
})();
