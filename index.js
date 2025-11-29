import{a as u,S as d,i as l}from"./assets/vendor-CNqCr-V-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function f(o){const r="https://pixabay.com/api/",a={key:"53454682-c39aa10f124dd5ded9ba537e3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(r,{params:a})).data}function m({largeImageURL:o,webformatURL:r,tags:a,likes:i,views:e,comments:t,downloads:n}){return`
<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${a}"
      loading="lazy"
    />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b> ${i}</p>
    <p class="info-item"><b>Views</b> ${e}</p>
    <p class="info-item"><b>Comments</b> ${t}</p>
    <p class="info-item"><b>Downloads</b> ${n}</p>
  </div>
</li>`}function p(o){return o.map(m).join("")}function y(){s.gallery.innerHTML=""}function g(){s.loader.classList.remove("hidden")}function c(){s.loader.classList.add("hidden")}const s={form:document.querySelector(".form"),input:document.querySelector("input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let h=new d(".gallery a",{captionsData:"alt",captionDelay:250});s.form.addEventListener("submit",async o=>{o.preventDefault();const r=s.input.value.trim();if(!r){l.warning({message:"Please enter a search query!"});return}y(),g();const a=await f(r);if(!a.hits||a.hits.length===0){c(),l.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}const i=p(a.hits);s.gallery.innerHTML=i,c(),h.refresh()});
//# sourceMappingURL=index.js.map
