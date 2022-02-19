import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 
const galleryRef = document.querySelector('.gallery');

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

galleryRef.addEventListener('click', OpenModal);

let picture = '';

function createModal(event) {
	picture = basicLightbox.create(`
    <img src=${event.target.dataset.source}>`);
}


function OpenModal(event) {
	event.preventDefault();
window.addEventListener('keydown', EscCloseModal);

createModal(event);
picture.show()
}


function EscCloseModal(event) {
	event.preventDefault();
	window.removeEventListener('keydown', EscCloseModal);

	if(event.code === 'Escape'){
    picture.close()
	}
}
