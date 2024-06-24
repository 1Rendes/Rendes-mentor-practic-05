import{a as d}from"./assets/vendor-bdb8a163.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function f(t,s){const n=[];return s.forEach(c=>{t.includes(c.difficulty)&&n.push(c)}),n}d.defaults.baseURL="https://dummyjson.com/recipes";async function h(){const{data:t}=await d("");return t}async function g(t){const{data:s}=await d(`/${t}`);return s}async function y(t){const{data:s}=await d("/search",{params:{q:t}});return s}const e={recipesList:document.querySelector(".recipes"),bodyEl:document.querySelector("body"),switchEl:document.querySelector("#switch-theme"),form:document.querySelector(".form"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),parcing:document.querySelector(".parcing"),recipes:"",applyFilter:document.querySelector(".filter"),theme:document.querySelector(".theme"),pathToIcons:":/img/icons.svg"};function a(t){e.recipesList.innerHTML="";const s=t.map(({id:n,image:c,name:i,difficulty:r,cuisine:o})=>`<li class="recipe-item" data-id='${n}'>
    <img
        class="recipe-image"
        src=${c}
        alt=${i}
    />
    <div class="recipe-dscr">
        <p class="recipe-name">Name: ${i}</p>
        <p class="recipe-cuisine">Cuisine: ${o}</p>
        <p class="recipe-difficulty">Difficulty: ${r}</p>
    </div>`).join("");e.recipesList.insertAdjacentHTML("beforeend",s)}function L({name:t,difficulty:s,cuisine:n,caloriesPerServing:c,image:i,ingredients:r,instructions:o,prepTimeMinutes:u,cookTimeMinutes:p}){const m=`<h2 class="food-name"><b>Name:</b> ${t}</h2>
          <div class="common-container">
            <div class="descr-container">
              <p class="food-cuisine"><b>Cuisine:</b> ${n}</p>
              <p class="difficulty"><b>Difficulty:</b> ${s}</p>
              <p class="ingredients"><b>Inredients:</b> ${r}</p>
              <p class="instructions"><b>Instructions:</b> ${o}</p>
              <p class="prep-time"><b>Preparation time:</b> ${u} minutes</p>
              <p class="cook-time"><b>Cook time:</b> ${p} minutes</p>
              <p class="calories"><b>Calories:</b> ${c}</p>
            </div>
            <img class="large-image" src="${i}" alt="Food image" />
          </div>`;e.parcing.insertAdjacentHTML("beforeend",m)}async function b(t){t.preventDefault();const s=t.target.elements.query.value.trim(),{recipes:n}=await y(s);e.recipes=n,n.length?a(n):e.recipesList.innerHTML='<h2 class="empty-result">No matches found</h2>'}function l(t,s){const n=JSON.stringify(s);localStorage.setItem(t,n)}function v(t){const s=localStorage.getItem(t);try{return JSON.parse(s)}catch{return s}}function k(t){e.bodyEl.classList.toggle("dark-theme"),e.modal.classList.toggle("dark-theme"),e.bodyEl.classList.contains("dark-theme")?(l("theme","dark"),e.theme.innerHTML=`
      <svg class="moon" height="30" width="30">
        <use href="${e.pathToIcons}#moon"></use>
      </svg>`):(l("theme","white"),e.theme.innerHTML=`
      <svg class="sun" height="30" width="30">
        <use href="${e.pathToIcons}#sun"></use>
      </svg>`)}async function E(t){const{recipes:s}=await h();e.recipes=s,a(s)}function $(t){t.preventDefault();const s=t.target.form,n=[];for(const i of s)i.checked&&n.push(i.value);if(!n.length)return a(e.recipes);const c=f(n,e.recipes);c.length?a(c):e.recipesList.innerHTML='<h2 class="empty-result">No matches found</h2>'}async function T(t){if(!t.target.closest("li"))return;e.parcing.innerHTML="";const s=t.target.closest("li").dataset.id,n=await g(s);e.backdrop.classList.remove("hidden"),L(n),e.backdrop.addEventListener("click",c=>{(c.target.classList.contains("backdrop")||c.target.classList.contains("close-button"))&&(e.backdrop.classList.add("hidden"),e.backdrop.removeEventListener)}),document.addEventListener("keyup",c=>{c.key==="Escape"&&(e.backdrop.classList.add("hidden"),e.backdrop.removeEventListener)})}function S(){v("theme")==="dark"&&(e.bodyEl.classList.toggle("dark-theme"),e.modal.classList.toggle("dark-theme"),e.theme.innerHTML=`
      <svg class="moon" height="30" width="30">
        <use href="${e.pathToIcons}#moon"></use>
      </svg>`)}document.addEventListener("DOMContentLoaded",S);document.addEventListener("DOMContentLoaded",E);document.addEventListener("click",T);e.form.addEventListener("submit",b);e.switchEl.addEventListener("click",k);e.applyFilter.addEventListener("change",$);
//# sourceMappingURL=commonHelpers.js.map
