import { galleryItems } from "./gallery-items.js";

const mainContainerGalleryRef = document.querySelector(".gallery");

function createGalleryCardEl(galleres) {
  return galleres
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item" href="${original}">
                  <img class="gallery__image" src="${preview}" alt="${description}" />
                </a> `;
    })
    .join("");
}

mainContainerGalleryRef.insertAdjacentHTML(
  "beforeend",
  createGalleryCardEl(galleryItems)
);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
