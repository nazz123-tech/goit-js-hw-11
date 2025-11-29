import{a as d,S as f,i as l}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function m(a){const t="https://pixabay.com/api/",o={key:"53454682-c39aa10f124dd5ded9ba537e3",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(t,{params:o})).data}let c=null;function p({largeImageURL:a,webformatURL:t,tags:o,likes:s,views:e,comments:r,downloads:i}){return`
<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img class="gallery-image" src="${t}" alt="${o}" />
  </a>
  <div class="info">
    <p><b>Likes:</b> ${s}</p>
    <p><b>Views:</b> ${e}</p>
    <p><b>Comments:</b> ${r}</p>
    <p><b>Downloads:</b> ${i}</p>
  </div>
</li>`}function y(a){return a.map(p).join("")}function g(){n.gallery.innerHTML=""}function h(a,{append:t=!1}={}){const o=y(a);t?n.gallery.insertAdjacentHTML("beforeend",o):n.gallery.innerHTML=o,c||(c=new f(".gallery a",{captionsData:"alt",captionDelay:250})),c.refresh()}function b(){n.loader.classList.remove("hidden")}function u(){n.loader.classList.add("hidden")}const n={form:document.querySelector(".form"),input:document.querySelector("input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",async a=>{a.preventDefault();const t=n.input.value.trim();if(!t){l.warning({message:"Enter a search query!"});return}g(),b();try{const o=await m(t);if(!o.hits.length){u(),l.error({message:"No images found!"});return}h(o.hits)}catch{l.error({message:"Something went wrong"})}u()});
//# sourceMappingURL=index.js.map
