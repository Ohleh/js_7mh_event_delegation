import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector("ul.gallery")




function renderCreate (galleryItems) {
    return galleryItems.reduce((acc, {preview, original, description}) => acc + `
    <li class="gallery__item" class="gallery">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>

 </li>`,"")
}

galleryRef.insertAdjacentHTML("afterbegin", renderCreate(galleryItems));


let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});


function handleGallery(event) {
    event.preventDefault();
gallery.on('show.simplelightbox', function (e) {});
}

galleryRef.addEventListener("click", handleGallery)