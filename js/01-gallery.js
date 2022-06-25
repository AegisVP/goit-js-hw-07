import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRootEl = document.querySelector("div.gallery");
const galleryHtmlMarkup = galleryItems.map(createImageCardMarkup).join("");

galleryRootEl.insertAdjacentHTML("afterbegin", galleryHtmlMarkup);
galleryRootEl.addEventListener("click", onGalleryClick);

let instance;
let instanceEl;

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
	console.log("src", src);

	instance = basicLightbox.create(
		`<img src="${src}" width="1280" alt="original">`,
		{
			onClose: () => {
				window.removeEventListener("keydown", onEscapeCloseModal);
			},
		}
	);
	instance.show();
	instanceEl = instance.element();
	console.log("instanceEl", instanceEl);

	window.addEventListener("keydown", onEscapeCloseModal);
}

function onEscapeCloseModal(e) {
	if (e.code === "Escape") return;

	console.log(e.code);
	instance.close();
}
