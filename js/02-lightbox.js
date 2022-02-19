import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

galleryRef = document.querySelector('.gallery');

const markup = galleryItems.map((item) =>
 `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
    />
  </a>
</div>`).join('');

galleryRef.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});