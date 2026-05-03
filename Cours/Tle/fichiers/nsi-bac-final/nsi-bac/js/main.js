/* ============================================================
   NSI BAC — main.js — Navigation & UI
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Burger menu
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => navLinks.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!e.target.closest('nav')) navLinks.classList.remove('open');
    });
  }

  // Active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });

  // TOC IntersectionObserver
  const tocLinks = document.querySelectorAll('.toc a[href^="#"]');
  if (tocLinks.length) {
    const headings = Array.from(document.querySelectorAll('h2[id], h3[id]'));
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          tocLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.toc a[href="#${e.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-60px 0px -60% 0px' });
    headings.forEach(h => obs.observe(h));
  }

  // Tabs
  document.querySelectorAll('.tab-list').forEach(list => {
    list.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabs = btn.closest('.tabs');
        tabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        tabs.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = tabs.querySelector(`#${btn.dataset.tab}`);
        if (panel) panel.classList.add('active');
      });
    });
  });

  // Accordéons
  document.querySelectorAll('.accordion-header').forEach(hdr => {
    hdr.addEventListener('click', () => {
      const item = hdr.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const isOpen = item.classList.toggle('open');
      body.style.maxHeight = isOpen ? body.scrollHeight + 'px' : '0';
    });
  });

  // Corrections exercices
  document.querySelectorAll('.toggle-correction').forEach(btn => {
    btn.addEventListener('click', () => {
      const corr = btn.nextElementSibling;
      if (!corr) return;
      corr.classList.toggle('visible');
      btn.textContent = corr.classList.contains('visible') ? '▲ Masquer la correction' : '▼ Voir la correction';
    });
  });

  // Copy code buttons
  document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Copier';
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(pre.querySelector('code')?.textContent || pre.textContent).then(() => {
        btn.textContent = '✓ Copié';
        setTimeout(() => (btn.textContent = 'Copier'), 2000);
      });
    });
    pre.appendChild(btn);
  });
});
