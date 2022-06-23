import { galleryItems } from "./gallery-items.js";
import * as basicLightbox from "basiclightbox";
// Change code below this line

console.log(galleryItems);

const galleryRootEl = document.querySelector("div.gallery");
const galleryHtmlMarkup = galleryItems.map(createImageCardMarkup).join("");

galleryRootEl.insertAdjacentHTML("afterbegin", galleryHtmlMarkup);
galleryRootEl.addEventListener("click", onGalleryClick);

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

function onGalleryClick(e) {
	e.preventDefault();
	const src = e.target.dataset.source;
	console.log(src);

	const instance = basicLightbox.create();
	console.log("instance", instance);
}
