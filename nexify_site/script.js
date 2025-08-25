// menu mobile
const burger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
burger?.addEventListener('click', () => {
  const open = nav.classList.toggle('show');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// formulário fake (exemplo)
const form = document.getElementById('form');
const ok = document.getElementById('ok');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  // Validação simples
  const data = Object.fromEntries(new FormData(form).entries());
  if(!data.nome || !data.email || !data.mensagem){
    alert('Preencha todos os campos!');
    return;
  }
  ok.hidden = false;
  form.reset();
  // Aqui você pode integrar com um backend ou serviço de e-mail.
});
