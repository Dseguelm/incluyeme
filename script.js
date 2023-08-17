const hamburgerMenu = document.getElementById('hamburgerMenu');
const navMenu = document.getElementById('navMenu');
const closeIcon = document.getElementById('closeIcon');

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  navMenu.classList.remove('active');
});
