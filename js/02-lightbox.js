import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRootEl = document.querySelector("div.gallery");
const galleryHtmlMarkup = galleryItems.map(createImageCardMarkup).join("");



// const lightbox = new SimpleLightbox(".gallery a", { });

galleryRootEl.insertAdjacentHTML("afterbegin", galleryHtmlMarkup);
// galleryRootEl.addEventListener("click", onGalleryClick);

// let instance;
// let instanceEl;

function createImageCardMarkup({ preview, original, description } = {}) {
	return `
      <a class="gallery__item" href="${original}">
	      <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
      </a>`;
}

// function onGalleryClick(e) {
//   e.preventDefault();
  
//   console.log(lightbox);
//   lightbox.open();
// }


    (function () {
			var $gallery = new SimpleLightbox(".gallery a", { captionDelay: 250 });
		})();