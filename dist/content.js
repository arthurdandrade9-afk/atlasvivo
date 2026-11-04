window.ATLAS_CONTENT = {
  checkout: {
    principal: 'https://pay.cakto.com.br/wbvmvj4',
    completo: 'https://pay.cakto.com.br/3ch2keu_1209682'
  },
  pricing: {
    principal: 'R$ 27',
    completo: 'R$ 37'
  },
  guarantee: '7 dias',
  testimonials: [],
  about: {
    eyebrow: 'Quem somos',
    title: 'Uma história que será apresentada em breve.',
    body: ''
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Microsoft Clarity — project "atlas". The tag is async and does not block the landing page.
  if (!document.querySelector('script[data-clarity-project="z8iv0uc7cl"]')) {
    window.clarity = window.clarity || function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
    const clarityTag = document.createElement('script');
    clarityTag.async = true;
    clarityTag.dataset.clarityProject = 'z8iv0uc7cl';
    clarityTag.src = 'https://www.clarity.ms/tag/z8iv0uc7cl';
    document.head.append(clarityTag);
  }
  if (!document.querySelector('link[data-offer-raster-styles]')) {
    const offerRasterStyles = document.createElement('link');
    offerRasterStyles.rel = 'stylesheet';
    offerRasterStyles.href = 'offer-raster.css?v=1';
    offerRasterStyles.dataset.offerRasterStyles = 'true';
    document.head.append(offerRasterStyles);
  }
  if (!document.querySelector('link[data-character-hunt-styles]')) {
    const characterHuntStyles = document.createElement('link');
    characterHuntStyles.rel = 'stylesheet';
    characterHuntStyles.href = 'character-hunt.css?v=1';
    characterHuntStyles.dataset.characterHuntStyles = 'true';
    document.head.append(characterHuntStyles);
  }
  if (!document.querySelector('link[data-hero-raster-styles]')) {
    const heroRasterStyles = document.createElement('link');
    heroRasterStyles.rel = 'stylesheet';
    heroRasterStyles.href = 'hero-raster.css?v=1';
    heroRasterStyles.dataset.heroRasterStyles = 'true';
    document.head.append(heroRasterStyles);
  }

  const hero = document.querySelector('#hero');
  if (hero && !hero.querySelector('.hero-raster')) {
    const heroRaster = document.createElement('div');
    heroRaster.className = 'hero-raster';
    heroRaster.innerHTML = '<img src="assets/mockups/hero-atlas-raster.png" alt="Atlas Vivo da Bíblia: 150 mapas visuais para aulas de catequese" width="1091" height="1474"><a class="hero-raster__video-cta" href="#vsl" aria-label="Assistir ao vídeo de apresentação do Atlas"></a>';
    hero.append(heroRaster);
    hero.classList.add('hero--raster');
  }

  const mechanismSection = document.querySelector('#mecanismo');
  if (mechanismSection && !document.querySelector('.character-hunt-explainer')) {
    const characterHunt = document.createElement('section');
    characterHunt.className = 'character-hunt-explainer';
    characterHunt.innerHTML = '<em>O GRANDE DIFERENCIAL DO ATLAS</em><h2>A mecânica que transforma cada cena em descoberta.</h2><figure><img src="assets/mecanismo/caca-personagem-biblico.png" alt="Como funciona a Caça ao Personagem Bíblico: observar a cena, encontrar personagens, conectar com a Bíblia e refletir com a turma." loading="lazy" width="1200" height="1500"></figure>';
    mechanismSection.before(characterHunt);
  }

  const mechanismSteps = [
    ['assets/mecanismo/etapa-01-escolher-livro.png', 'Escolha o livro do dia', 'Escolha o livro que será trabalhado e separe o mapa visual com o aprofundamento correspondente.'],
    ['assets/mecanismo/etapa-02-preparar-aula.png', 'Prepare o conteúdo da aula', 'Com base no livro escolhido, organize o conteúdo e os pontos que você quer destacar no encontro.'],
    ['assets/mecanismo/etapa-03-escolher-uso.png', 'Escolha como usar', 'Imprima na papelaria ou apresente no projetor — a opção mais recomendada para envolver toda a turma.'],
    ['assets/mecanismo/etapa-04-dar-aula.png', 'Dê a aula e desafie a turma', 'Depois, desafie os alunos a encontrar cada personagem bíblico. Ao encontrarem, explique a história dele ali mesmo.']
  ];
  document.querySelectorAll('.mechanism-card').forEach((card, index) => {
    const step = mechanismSteps[index];
    if (!step) return;
    const [src, title, description] = step;
    const image = card.querySelector('img');
    if (image) { image.src = src; image.alt = title; }
    const heading = card.querySelector('h3');
    if (heading) heading.textContent = title;
    const copy = card.querySelector('p');
    if (copy) copy.textContent = description;
  });

  const draftStylesheet = document.createElement('link');
  draftStylesheet.rel = 'stylesheet';
  draftStylesheet.href = 'styles.css?draft=collection-3d-v20';
  document.head.append(draftStylesheet);

  const heroCta = document.querySelector('#hero .btn[data-checkout="completo"]');
  if (heroCta) {
    heroCta.href = '#oferta';
    heroCta.removeAttribute('data-checkout');
  }

  const heroTitle = document.querySelector('#hero h1');
  if (heroTitle && !document.querySelector('.hero-low-ticket')) {
    const lowTicketHeadline = document.createElement('div');
    lowTicketHeadline.className = 'hero-low-ticket';
    lowTicketHeadline.innerHTML = '<div class="hero-low-ticket__number">150 <span>MAPAS VISUAIS</span></div><strong>para aulas de Catequese</strong>';
    heroTitle.before(lowTicketHeadline);
  }

  const collectionItems = [
    ['MATERIAL PRINCIPAL', 'assets/capas/01-atlas-vivo-da-biblia.png'],
    ['BÔNUS 1', 'assets/capas/02-bonus-30-aberturas.png'],
    ['BÔNUS 2', 'assets/capas/03-bonus-guia-lider-narradora.png'],
    ['BÔNUS 3', 'assets/capas/04-bonus-cartoes-o-que-voce-viu.png'],
    ['BÔNUS 4', 'assets/capas/05-bonus-ponte-da-semana.png'],
    ['BÔNUS 5', 'assets/capas/06-bonus-aula-viva-15-minutos.png'],
    ['BÔNUS 6', 'assets/capas/07-order-bump-primeiros-fundamentos.png'],
    ['BÔNUS 7', 'assets/capas/08-order-bump-biblia-inteira.png']
  ];
  document.querySelectorAll('.collection-offer .offer-check').forEach((item, index) => {
    const [label, cover] = collectionItems[index] ?? [];
    const title = item.querySelector('b');
    if (!label || !cover || !title) return;
    const image = document.createElement('img');
    image.className = 'offer-cover';
    image.src = cover;
    image.alt = `Capa de ${title.textContent.trim()}`;
    image.loading = 'lazy';
    const mockup = document.createElement('div');
    mockup.className = 'offer-cover-wrap';
    mockup.append(image);
    const badge = document.createElement('span');
    badge.className = 'bonus-number';
    badge.textContent = label;
    title.prepend(badge);
    item.insertBefore(mockup, title.parentElement);
  });

  const collectionOffer = document.querySelector('.collection-offer');
  if (collectionOffer) {
    const priceAnchor = collectionOffer.querySelector('.value-anchor');
    const originalPrice = priceAnchor?.querySelector('strong');
    const originalLabel = priceAnchor?.querySelector('span:first-child');
    const originalTotal = priceAnchor?.querySelector('del');
    if (priceAnchor && originalPrice && originalLabel && originalTotal && !priceAnchor.querySelector('.value-anchor__price')) {
      originalLabel.classList.add('value-anchor__label');
      originalTotal.classList.add('value-anchor__total');
      const price = document.createElement('div');
      price.className = 'value-anchor__price';
      price.innerHTML = '<span>por apenas</span><b>R$ 37</b>';
      originalPrice.replaceWith(price);
    }
    const urgency = document.createElement('p');
    urgency.className = 'offer-urgency';
    urgency.textContent = 'Escolha inteligente: por apenas R$ 10 a mais, você libera os 7 bônus da coleção.';
    collectionOffer.querySelector('.value-anchor')?.before(urgency);

    const collectionButton = collectionOffer.querySelector('.btn');
    if (priceAnchor && collectionButton && !collectionOffer.querySelector('.offer-raster-anchor')) {
      const rasterAnchor = document.createElement('div');
      rasterAnchor.className = 'offer-raster-anchor';
      const rasterImage = document.createElement('img');
      rasterImage.src = './assets/mockups/oferta-colecao-raster.png';
      rasterImage.alt = 'Oferta da coleção completa: 8 itens, acesso vitalício por R$ 37';
      rasterImage.width = 1040;
      rasterImage.height = 1517;
      rasterAnchor.append(rasterImage, collectionButton);
      urgency.before(rasterAnchor);
      collectionOffer.classList.add('collection-offer--raster-anchor');
    }
  }

  const soloOffer = document.querySelector('.solo-offer');
  if (soloOffer && !soloOffer.querySelector('.solo-inclusions')) {
    const inclusions = document.createElement('div');
    inclusions.className = 'solo-inclusions';
    inclusions.innerHTML = '<img src="assets/capas/01-atlas-vivo-da-biblia.png" alt="Capa do Atlas Vivo da Bíblia"><div><b>INCLUSO NO ATLAS</b><span>✓ 151 páginas visuais pelos 73 livros</span><span>✓ Mapas, cenas, cidades e personagens</span><span>✓ Perguntas para conduzir a descoberta</span></div>';
    soloOffer.querySelector('.btn')?.before(inclusions);
  }

  const productImage = document.querySelector('#produto > img');
  if (productImage) {
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
  }
});
