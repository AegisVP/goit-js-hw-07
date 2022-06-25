import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRootEl = document.querySelector("div.gallery");
const galleryHtmlMarkup = galleryItems.map(createImageCardMarkup).join("");
let instanceModal;

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
	openModalImage(e.target.dataset.source);
}

function openModalImage(src) {
	if (instanceModal?.visible()) {
		instanceModal.close();
	}

	instanceModal = basicLightbox.create(
		`<img src="${src}" width="1280" alt="original">`,
		{
			onClose: () => {
				window.removeEventListener("keydown", onKeyboardClick);
			},
		}
	);
	instanceModal.show();
	window.addEventListener("keydown", onKeyboardClick);
	// console.log(instanceModal.element().querySelector('img').src);
}

function closeModal() {
	instanceModal.close();
}

function onKeyboardClick(e) {
	const oldSrcIndex = findCurrentSrcIndex(
		instanceModal.element().querySelector("img").src
	);

	console.log("oldSrcIndex", oldSrcIndex);

	switch (e?.code) {
		case "Escape":
			closeModal();
			return;

		case "ArrowLeft":
		case "ArrowDown":
			openModalImage(
				galleryItems[
					oldSrcIndex === 0 ? galleryItems.length - 1 : oldSrcIndex - 1
				].original
			);
			break;

		case "ArrowRight":
		case "ArrowUp":
		case "Space":
			openModalImage(
				galleryItems[
					oldSrcIndex === galleryItems.length - 1 ? 0 : oldSrcIndex + 1
				].original
			);
			break;
	}
}

function findCurrentSrcIndex(src) {
	for (let i = 0; i < galleryItems.length; i += 1) {
		if (galleryItems[i].original === src) return i;
	}
	return;
}
