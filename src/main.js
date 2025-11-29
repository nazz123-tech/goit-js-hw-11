import { getImagesByQuery } from './js/pixabay-api.js';
import {
  imageTemplate,
  createImages,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

export const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('input'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Lightbox instance
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250
});

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = refs.input.value.trim();
  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!'
    });
    return;
  }

  clearGallery();
  showLoader();

 
    const data = await getImagesByQuery(query);

    if (!data.hits || data.hits.length === 0) {
      hideLoader();
      iziToast.warning({
        message: 'Sorry, there are no images matching your search query. Please try again!'
      });
      return;
    }

    const markup = createImages(data.hits);
    refs.gallery.innerHTML = markup;

    hideLoader();

    lightbox.refresh(); // update SimpleLightbox

   
});