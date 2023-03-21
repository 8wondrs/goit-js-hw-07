import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', onImgClick);

let instance;

const galleryItemsMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
});

galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup.join(''));

function onImgClick(event) {
  if (event.target.nodeName !== 'IMG') return;
  event.preventDefault();

  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
  `);

  instance.show();

  document.addEventListener('keydown', onEscPress);
}

function onEscPress(event) {
  if (event.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', onEscPress);
  }
}
