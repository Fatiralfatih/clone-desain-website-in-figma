
const loader = document.querySelector('#loader');
const mainContent = document.querySelector('#main-content');
const navbar = document.querySelector('nav');
const footer = document.querySelector('footer');
document.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {
    loader.remove()
    navbar.style.display = 'block';
    mainContent.style.display = 'block';
    footer.style.display = 'block'
  }, 1000);

});
