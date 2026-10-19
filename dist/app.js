(() => { const c=window.ATLAS_CONTENT; document.querySelectorAll('[data-checkout="principal"]').forEach(a=>a.href=c.checkout.principal);document.querySelectorAll('[data-checkout="completo"]').forEach(a=>a.href=c.checkout.completo);document.querySelectorAll('[data-loop]').forEach(t=>{[...t.children].forEach(x=>t.append(x.cloneNode(true)));t.setAttribute('aria-live','off');}); })();

