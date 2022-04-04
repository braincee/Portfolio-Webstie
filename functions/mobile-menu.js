const hamburger = document.querySelector('.fa-bars');
const mobileMenu = document.getElementById('mobile-menu');
const cancelBtn = document.getElementById('btn-cancel');
const displayMobile = Array.from(document.querySelectorAll('#mobile-menu ul li a'));

function showMenu() {
  hamburger.style.display = 'none';
  mobileMenu.style.display = 'block';
}

function hideMenu() {
  hamburger.style.display = 'block';
  mobileMenu.style.display = 'none';
}

hamburger.addEventListener('click', showMenu);
cancelBtn.addEventListener('click', hideMenu);

displayMobile.forEach((e) => {
  e.addEventListener('click', hideMenu);
});