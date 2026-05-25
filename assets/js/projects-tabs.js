(() => {
  const tabGroups = document.querySelectorAll('[data-project-tabs]');

  tabGroups.forEach((group) => {
    const tabs = Array.from(group.querySelectorAll('[data-tab-target]'));
    const page = group.closest('.project-library');
    const panels = page ? Array.from(page.querySelectorAll('[data-tab-panel]')) : [];

    if (!tabs.length || !panels.length) return;

    const activateTab = (target) => {
      tabs.forEach((tab) => {
        const isActive = tab.dataset.tabTarget === target;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        tab.tabIndex = isActive ? 0 : -1;
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.tabPanel === target;
        panel.classList.toggle('is-active', isActive);
        panel.hidden = !isActive;
      });
    };

    tabs.forEach((tab) => {
      tab.tabIndex = tab.classList.contains('is-active') ? 0 : -1;

      tab.addEventListener('click', () => {
        activateTab(tab.dataset.tabTarget);
      });

      tab.addEventListener('keydown', (event) => {
        const currentIndex = tabs.indexOf(tab);
        let nextIndex = null;

        if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
        if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = tabs.length - 1;

        if (nextIndex !== null) {
          event.preventDefault();
          tabs[nextIndex].focus();
          activateTab(tabs[nextIndex].dataset.tabTarget);
        }
      });
    });
  });
})();
