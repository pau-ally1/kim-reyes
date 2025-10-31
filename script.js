const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('.nav-link, .btn').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href')?.substring(1) || link.dataset.target;
    if (!targetId) return;
    document.getElementById(targetId).scrollIntoView({behavior:'smooth', block:'start'});

    
    if(navLinks.classList.contains('show')) navLinks.classList.remove('show');
  });
});
