const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const overlay = document.querySelector('.overlay')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navLinks.classList.toggle('active')
  overlay.classList.toggle('active')
})
