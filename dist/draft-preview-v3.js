(() => {
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = 'styles.css?draft=collection-3d-v20';
  document.head.append(style);
  const offerRasterStyles = document.createElement('link');
  offerRasterStyles.rel = 'stylesheet';
  offerRasterStyles.href = 'offer-raster.css?v=1';
  offerRasterStyles.dataset.offerRasterStyles = 'true';
  document.head.append(offerRasterStyles);
  const characterHuntStyles = document.createElement('link');
  characterHuntStyles.rel = 'stylesheet';
  characterHuntStyles.href = 'character-hunt.css?v=1';
  characterHuntStyles.dataset.characterHuntStyles = 'true';
  document.head.append(characterHuntStyles);
  const heroRasterStyles = document.createElement('link');
  heroRasterStyles.rel = 'stylesheet';
  heroRasterStyles.href = 'hero-raster.css?v=1';
  heroRasterStyles.dataset.heroRasterStyles = 'true';
  document.head.append(heroRasterStyles);

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

  const heroTitle = document.querySelector('#hero h1');
  if (heroTitle && !document.querySelector('.hero-low-ticket')) {
    const lowTicketHeadline = document.createElement('div');
    lowTicketHeadline.className = 'hero-low-ticket';
    lowTicketHeadline.innerHTML = '<div class="hero-low-ticket__number">150 <span>MAPAS VISUAIS</span></div><strong>para aulas de Catequese</strong>';
    heroTitle.before(lowTicketHeadline);
  }

  const priceAnchor = document.querySelector('.collection-offer .value-anchor');
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

  const collectionOffer = document.querySelector('.collection-offer');
  const collectionButton = collectionOffer?.querySelector('.btn');
  if (priceAnchor && collectionOffer && collectionButton && !collectionOffer.querySelector('.offer-raster-anchor')) {
    const rasterAnchor = document.createElement('div');
    rasterAnchor.className = 'offer-raster-anchor';
    const rasterImage = document.createElement('img');
    rasterImage.src = './assets/mockups/oferta-colecao-raster.png';
    rasterImage.alt = 'Oferta da coleção completa: 8 itens, acesso vitalício por R$ 37';
    rasterImage.width = 1040;
    rasterImage.height = 1517;
    rasterAnchor.append(rasterImage, collectionButton);
    priceAnchor.before(rasterAnchor);
    collectionOffer.classList.add('collection-offer--raster-anchor');
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
