import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 
const galleryRef = document.querySelector('.gallary');

const markup = galleryRef.map((item) => 
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

galleryRef.innerHTML = markup

