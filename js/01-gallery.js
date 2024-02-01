
import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector("ul.gallery")

function renderCreate (galleryItems) {
    return galleryItems.reduce((acc, {preview, original, description}) => acc + `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a> `,"")
}

galleryRef.insertAdjacentHTML("afterbegin", renderCreate(galleryItems));

function handleGallery(event) {
    event.preventDefault();
   if (!event.target.dataset.source) return;
   const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
    )
   instance.show()
   window.addEventListener("keydown", onCloseImage)


   function onCloseImage (event) {

    if (event.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onCloseImage);
    }
     
  }
}

galleryRef.addEventListener("click", handleGallery)





// function onCloseImage (event) {
//   console.log(event.code)
//   if (event.code.key === "Escape")
//   instance.close()
// }
// window.addEventListener("keydown", onCloseImage)





// instance.show()
// instance.close()