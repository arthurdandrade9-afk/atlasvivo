import fs from 'node:fs';

const siteRoot = new URL('../dist/', import.meta.url);
const indexFile = new URL('index.html', siteRoot);
const html = fs.readFileSync(indexFile, 'utf8');
const requiredIds = [
  'hero', 'vsl', 'demonstrativos', 'mecanismo', 'produto', 'inclusos',
  'provas', 'quem-somos', 'oferta', 'faq', 'cta-final'
];
const missing = requiredIds.filter((id) => !html.includes(`id="${id}"`));

if (missing.length) throw new Error(`Missing sections: ${missing.join(', ')}`);

const requiredAssets = [
  'assets/atlas/atlas-001.jpg',
  'assets/atlas/atlas-008.jpg',
  'assets/capas/01-atlas-vivo-da-biblia.png',
  'assets/capas/08-order-bump-biblia-inteira.png',
  'assets/mockups/bundle-buque-apostilas-a4.png'
];

for (const relativePath of requiredAssets) {
  const absolutePath = new URL(`../dist/${relativePath}`, import.meta.url);
  if (!fs.existsSync(absolutePath)) throw new Error(`Missing asset: ${relativePath}`);
}

if (!html.includes('assets/mockups/bundle-buque-apostilas-a4.png') || !html.includes('class="hero-bundle"')) {
  throw new Error('Hero must feature the complete A4 bundle mockup.');
}
if (!html.includes('assets/stream/atlas-vsl.mp4') || !html.includes('<video')) {
  throw new Error('VSL video must be embedded in the VSL section.');
}
if (!fs.existsSync(new URL('../dist/assets/stream/atlas-vsl.mp4', import.meta.url))) {
  throw new Error('Missing embedded VSL video asset.');
}
const vslSection = html.match(/<section id="vsl"[\s\S]*?<\/section>/)?.[0] ?? '';
if (!vslSection.includes('href="#oferta"') || !vslSection.includes('Ver preços e materiais')) {
  throw new Error('VSL section must include a direct CTA to the offer.');
}
if (html.includes('A partir de R$ 17')) {
  throw new Error('Hero must not show the retired starting-price badge.');
}

const heroIndex = html.indexOf('id="hero"');
const vslIndex = html.indexOf('id="vsl"');
const demoIndex = html.indexOf('id="demonstrativos"');
if (!(heroIndex < vslIndex && vslIndex < demoIndex)) {
  throw new Error('Expected hero, VSL, then demonstratives in this order.');
}
if (!html.includes('class="demo-track loop-track" data-loop')) {
  throw new Error('Demonstratives must use the shared continuous loop track.');
}
const demoSection = html.match(/<section id="demonstrativos"[\s\S]*?<\/section>/)?.[0] ?? '';
const atlasDemoCount = (demoSection.match(/assets\/atlas\/atlas-\d{3}\.jpg/g) ?? []).length;
if (atlasDemoCount !== 10) throw new Error(`Expected 10 Atlas demonstratives, found ${atlasDemoCount}.`);
if (demoSection.includes('assets/capas/')) throw new Error('Demonstratives must not include bonus covers.');
if (!demoSection.includes('Um pouquinho do que te aguarda no nosso Atlas.')) {
  throw new Error('Demonstratives need the approved anticipation heading.');
}
if (demoSection.includes('10 páginas do Atlas para a criança explorar.')) {
  throw new Error('Demonstratives must not retain the retired heading.');
}

const styles = fs.readFileSync(new URL('../dist/styles.css', import.meta.url), 'utf8');
if (!html.includes('href="styles.css?v=')) {
  throw new Error('Stylesheet needs a versioned URL so the current offer styling is always loaded.');
}
if (!styles.includes('animation:glide 55s linear infinite')) {
  throw new Error('Demonstratives must keep a visible continuous animation.');
}
if (styles.includes('@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.demo-track{animation:none')) {
  throw new Error('Reduced-motion styles must not stop the requested demonstrative carousel.');
}

for (const word of ['Observe', 'Encontre', 'Converse']) {
  if (!html.includes(word)) throw new Error(`Missing mechanism word: ${word}`);
}
const mechanismSection = html.match(/<section id="mecanismo"[\s\S]*?<\/section>/)?.[0] ?? '';
for (const image of ['etapa-01-escolha-projetar-imprimir.png', 'etapa-02-observe.png', 'etapa-03-encontre.png', 'etapa-04-converse.png']) {
  const relativePath = `assets/mecanismo/${image}`;
  if (!mechanismSection.includes(relativePath)) throw new Error(`Missing visual mechanism stage: ${image}`);
  if (!fs.existsSync(new URL(`../dist/${relativePath}`, import.meta.url))) throw new Error(`Missing visual mechanism asset: ${image}`);
}
for (const stage of ['Escolha como usar', 'Observe', 'Encontre', 'Converse']) {
  if (!mechanismSection.includes(stage)) throw new Error(`Missing mechanism stage: ${stage}`);
}
if ((mechanismSection.match(/class="mechanism-card"/g) ?? []).length !== 4) {
  throw new Error('Mechanism must present four visual stages.');
}
if (!html.includes('73 livros')) throw new Error('Missing Atlas scope statement.');

for (const item of ['30 Aberturas', 'Guia Líder-Narradora', 'Cartões', 'A Ponte da Semana', 'Aula Viva', 'Primeiros Fundamentos', 'Bíblia Inteira']) {
  if (!html.includes(item)) throw new Error(`Missing included item: ${item}`);
}
for (const benefit of ['Uma rota visual pelos 73 livros', 'Para preparar a atenção', 'Para conduzir a narrativa', 'Para fazer a turma participar', 'Para envolver a família', 'Para montar uma aula objetiva', 'Para aprofundar fundamentos', 'Para planejar a visão do todo']) {
  if (!html.includes(benefit)) throw new Error(`Missing collection benefit: ${benefit}`);
}
if (!(html.indexOf('id="provas"') < html.indexOf('id="quem-somos"'))) {
  throw new Error('Quem somos must be below social proof.');
}
const quemSomosSection = html.match(/<section id="quem-somos"[\s\S]*?<\/section>/)?.[0] ?? '';
if (!quemSomosSection.includes('assets/stream/quem-somos.mp4') || !quemSomosSection.includes('<video')) {
  throw new Error('Quem somos needs its dedicated embedded video.');
}
if (!fs.existsSync(new URL('../dist/assets/stream/quem-somos.mp4', import.meta.url))) {
  throw new Error('Missing Quem somos video asset.');
}
const proofSection = html.match(/<section id="provas"[\s\S]*?<\/section>/)?.[0] ?? '';
const proofCount = (proofSection.match(/assets\/provas\/prova-social-\d+\.(?:jfif|png)/g) ?? []).length;
if (proofCount !== 8) throw new Error(`Expected 8 real social proof images, found ${proofCount}.`);
if (!proofSection.includes('class="proof-track loop-track" data-loop')) {
  throw new Error('Social proof must use a continuous proof carousel.');
}

const content = fs.readFileSync(new URL('../dist/content.js', import.meta.url), 'utf8');
for (const text of ['R$ 27', 'R$ 37', '7 dias', 'ACESSO VITALÍCIO']) {
  if (!html.includes(text) && !content.includes(text)) throw new Error(`Missing commercial value: ${text}`);
}
if (html.includes('R$ 17')) throw new Error('The retired R$ 17 price must not remain on the page.');
if (!content.includes("principal: 'https://pay.cakto.com.br/wbvmvj4'")) {
  throw new Error('The Atlas base CTA must use its Cakto checkout.');
}
if (!content.includes("completo: 'https://pay.cakto.com.br/3ch2keu_1209682'")) {
  throw new Error('The Atlas + bonus CTA must use its Cakto checkout.');
}
if (!html.includes('<link rel="preconnect" href="https://pay.cakto.com.br">')) {
  throw new Error('The page must preconnect to the checkout host.');
}
const heroSection = html.match(/<section id="hero"[\s\S]*?<\/section>/)?.[0] ?? '';
if (!heroSection.includes('ACESSO VITALÍCIO')) {
  throw new Error('The hero must make lifetime access explicit.');
}
const offerSection = html.match(/<section id="oferta"[\s\S]*?<\/section>/)?.[0] ?? '';
if (!offerSection.includes('ACESSO VITALÍCIO')) {
  throw new Error('The offer anchor must make lifetime access explicit.');
}
for (const text of ['151 páginas', 'R$ 597', '8 materiais', 'Atlas Vivo da Bíblia — 151 páginas']) {
  if (!offerSection.includes(text)) throw new Error(`Missing collection value detail: ${text}`);
}
const offerChecks = (offerSection.match(/class="offer-check"/g) ?? []).length;
if (offerChecks !== 8) throw new Error(`Expected 8 checked collection items, found ${offerChecks}.`);
const soloOffer = offerSection.match(/<article class="solo-offer">[\s\S]*?<\/article>/)?.[0] ?? '';
if (!soloOffer.includes('151 páginas')) {
  throw new Error('Atlas avulso must clearly state its 151 pages.');
}
if (!styles.includes('.value-anchor') || !styles.includes('.offer-check')) {
  throw new Error('Offer needs green value-anchor and checked-deliverable styling.');
}
if (!styles.includes('.value-prices{grid-template-columns:1fr')) {
  throw new Error('Both offer cards must use the same full-width presentation.');
}
if (html.includes('assets/personagens/') || html.includes('class="guide-character"')) {
  throw new Error('Illustrated PNG guide characters must not appear in the final landing page.');
}

console.log('Landing structure is present.');
