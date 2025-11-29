import { refs } from "../main";

// Template for a single image
export function imageTemplate({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads
}) {
  return `
<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
      loading="lazy"
    />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b> ${likes}</p>
    <p class="info-item"><b>Views</b> ${views}</p>
    <p class="info-item"><b>Comments</b> ${comments}</p>
    <p class="info-item"><b>Downloads</b> ${downloads}</p>
  </div>
</li>`;
}

// Creates full HTML for array of images
export function createImages(arr) {
  return arr.map(imageTemplate).join('');
}

// Clears gallery before new search
export function clearGallery() {
  refs.gallery.innerHTML = '';
}

// Shows loader
export function showLoader() {
  refs.loader.classList.remove('hidden');
}

// Hides loader
export function hideLoader() {
  refs.loader.classList.add('hidden');
}
