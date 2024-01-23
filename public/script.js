
const loader = document.querySelector('#loader');

const mainContent = document.querySelector('#main-content');

document.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {
    loader.remove()
    mainContent.style.display = 'block'
  }, 2000);

});