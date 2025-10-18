// toggle mobile menu
document.addEventListener('DOMContentLoaded', function(){
  const hamb = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamb && hamb.addEventListener('click', () => navLinks.classList.toggle('open'));

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile menu
        navLinks.classList.remove('open');
      }
    });
  });

  // simple contact form -> open mail client with mailto
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = encodeURIComponent(form.name.value || '');
      const email = encodeURIComponent(form.email.value || '');
      const message = encodeURIComponent(form.message.value || '');
      const subject = encodeURIComponent(`[Website] Tin nhắn từ ${name}`);
      const body = encodeURIComponent(`Tên: ${name}%0AEmail: ${email}%0A%0A${message}`);
      window.location.href = `mailto:anhph9741@ut.edu.vn?subject=${subject}&body=${body}`;
    });
  }

  // set year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const avatars = document.querySelectorAll('.hero-image .avatar');
  const nextBtn = document.querySelector('.hero-image .avatar-btn.next');
  const prevBtn = document.querySelector('.hero-image .avatar-btn.prev');
  let currentAvatar = 0;

  function showAvatar(index) {
    avatars.forEach((img, i) => img.classList.toggle('active', i === index));
  }

  if(nextBtn && prevBtn && avatars.length > 0){
    nextBtn.addEventListener('click', () => {
      currentAvatar = (currentAvatar + 1) % avatars.length;
      showAvatar(currentAvatar);
    });

    prevBtn.addEventListener('click', () => {
      currentAvatar = (currentAvatar - 1 + avatars.length) % avatars.length;
      showAvatar(currentAvatar);
    });
  }
});
