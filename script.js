const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('contextmenu', event => event.preventDefault());
});