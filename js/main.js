// Header scroll
const header = document.getElementById('mainHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 400);
});

// Mobile menu
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== FORMULARIO → WHATSAPP =====
(function() {
  const form = document.getElementById('formContacto');
  if (!form) return;

  // Rate limiting — máximo 3 envíos por minuto
  let submitCount = 0;
  let resetTimer = null;

  // Sanitizar: elimina caracteres peligrosos
  function sanitize(str) {
    return String(str)
      .replace(/[<>"'`]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
      .trim()
      .slice(0, 500); // máximo 500 chars por campo
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. HONEYPOT — si tiene valor, es un bot
    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value !== '') {
      console.warn('[Security] Bot detectado via honeypot');
      return;
    }

    // 2. RATE LIMITING
    submitCount++;
    if (submitCount > 3) {
      alert('Demasiados intentos. Esperá un momento antes de volver a enviar.');
      return;
    }
    if (!resetTimer) {
      resetTimer = setTimeout(() => {
        submitCount = 0;
        resetTimer = null;
      }, 60000); // reinicia cada 60 segundos
    }

    // 3. SANITIZAR todos los campos
    const nombre   = sanitize(form.nombre.value);
    const apellido = sanitize(form.apellido.value);
    const email    = sanitize(form.email.value);
    const telefono = sanitize(form.telefono.value);
    const empresa  = sanitize(form.empresa.value);
    const pais     = sanitize(form.pais.value);
    const mensaje  = sanitize(form.mensaje.value);

    // 4. VALIDAR email mínimamente
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor ingresá un email válido.');
      return;
    }

    // 5. ARMAR Y ENVIAR mensaje a WhatsApp
    const texto =
      `*Nueva consulta desde la web*\n\n` +
      `👤 *Nombre:* ${nombre} ${apellido}\n` +
      `🏢 *Empresa:* ${empresa}\n` +
      `🌍 *País:* ${pais}\n` +
      `📞 *Teléfono:* ${telefono}\n` +
      `✉️ *Email:* ${email}\n\n` +
      `📝 *Mensaje:*\n${mensaje}`;

    const url = `https://wa.me/5491134007699?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    // 6. RESET del formulario
    form.reset();
  });
})();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== HERO VIDEO CAROUSEL =====
(function() {
  const vid = document.querySelector('.hv-video');
  if (!vid) return;
  vid.play().catch(() => {}); // autoplay silencioso
})();