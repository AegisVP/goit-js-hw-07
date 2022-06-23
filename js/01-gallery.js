import { galleryItems } from "./gallery-items.js";
import * as basicLightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";
// Change code below this line

console.log(galleryItems);

const galleryRootEl = document.querySelector('div.gallery');
const galleryHtmlMarkup = galleryItems.map(createImageCardMarkup).join('');

galleryRootEl.insertAdjacentHTML('afterbegin', galleryHtmlMarkup);

function createImageCardMarkup({ preview, original, description } = {}) {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}

galleryRootEl.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  const src = e.target.dataset.source;
  console.log(src);

  const instance = basicLightbox.create();
  console.log("instance", instance);

}