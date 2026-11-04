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
  const heroCta = document.querySelector('#hero .btn[data-checkout="completo"]');
  if (heroCta) {
    heroCta.href = '#oferta';
    heroCta.removeAttribute('data-checkout');
  }
});
