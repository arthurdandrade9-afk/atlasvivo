(() => {
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = 'styles.css?draft=collection-3d-v19';
  document.head.append(style);

  const heroTitle = document.querySelector('#hero h1');
  if (heroTitle && !document.querySelector('.hero-low-ticket')) {
    const lowTicketHeadline = document.createElement('div');
    lowTicketHeadline.className = 'hero-low-ticket';
    lowTicketHeadline.innerHTML = '<div class="hero-low-ticket__number">150 <span>MAPAS VISUAIS</span></div><strong>para aulas de Catequese</strong>';
    heroTitle.before(lowTicketHeadline);
  }

  const productImage = document.querySelector('#produto > img');
  if (!productImage || document.querySelector('.product-showcase')) return;
  const productTitle = document.querySelector('#produto h2');
  if (productTitle) productTitle.textContent = 'Explore a grande história da Bíblia.';
  const showcase = document.createElement('div');
  showcase.className = 'product-showcase';
  showcase.setAttribute('aria-label', 'Coleção Atlas Vivo em materiais digitais');
  const featuredMaterials = [
    ['assets/capas/01-atlas-vivo-da-biblia.png', 'Atlas Vivo da Bíblia', 'main'],
    ['assets/capas/02-bonus-30-aberturas.png', '30 Aberturas', 'bonus-1'],
    ['assets/capas/03-bonus-guia-lider-narradora.png', 'Guia Líder-Narradora', 'bonus-2'],
    ['assets/capas/04-bonus-cartoes-o-que-voce-viu.png', 'Cartões O Que Você Viu?', 'bonus-3'],
    ['assets/capas/05-bonus-ponte-da-semana.png', 'A Ponte da Semana', 'bonus-4'],
    ['assets/capas/06-bonus-aula-viva-15-minutos.png', 'Aula Viva em 15 Minutos', 'bonus-5'],
    ['assets/capas/07-order-bump-primeiros-fundamentos.png', 'Primeiros Fundamentos da Fé', 'bonus-6'],
    ['assets/capas/08-order-bump-biblia-inteira.png', 'A Bíblia Inteira', 'bonus-7']
  ];
  showcase.innerHTML = featuredMaterials.map(([src, alt, role]) => `<img class="product-book product-book--${role}" src="${src}" alt="${alt}">`).join('');
  productImage.before(showcase);

  document.querySelectorAll('.collection-offer .offer-cover').forEach((cover) => {
    if (cover.parentElement?.classList.contains('offer-cover-wrap')) return;
    const mockup = document.createElement('div');
    mockup.className = 'offer-cover-wrap';
    cover.before(mockup);
    mockup.append(cover);
  });
})();
