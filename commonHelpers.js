import{a as d}from"./assets/vendor-bdb8a163.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=c(n);fetch(n.href,o)}})();function f(t,s){const c=[];return s.forEach(i=>{t.includes(i.difficulty)&&c.push(i)}),c}d.defaults.baseURL="https://dummyjson.com/recipes";async function h(){const{data:t}=await d("");return t}async function g(t){const{data:s}=await d(`/${t}`);return s}async function y(t){const{data:s}=await d("/search",{params:{q:t}});return s}const L="/Rendes-mentor-practic-05/assets/icons-9ea402f2.svg",e={recipesList:document.querySelector(".recipes"),bodyEl:document.querySelector("body"),switchEl:document.querySelector("#switch-theme"),form:document.querySelector(".form"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),parcing:document.querySelector(".parcing"),recipes:"",applyFilter:document.querySelector(".filter"),theme:document.querySelector(".theme"),pathToIcons:L};function a(t){e.recipesList.innerHTML="";const s=t.map(({id:c,image:i,name:n,difficulty:o,cuisine:r})=>`<li class="recipe-item" data-id='${c}'>
    <img
        class="recipe-image"
        src=${i}
        alt=${n}
    />
    <div class="recipe-dscr">
        <p class="recipe-name">Name: ${n}</p>
        <p class="recipe-cuisine">Cuisine: ${r}</p>
        <p class="recipe-difficulty">Difficulty: ${o}</p>
    </div>`).join("");e.recipesList.insertAdjacentHTML("beforeend",s)}function b({name:t,difficulty:s,cuisine:c,caloriesPerServing:i,image:n,ingredients:o,instructions:r,prepTimeMinutes:u,cookTimeMinutes:p}){const m=`<h2 class="food-name"><b>Name:</b> ${t}</h2>
          <div class="common-container">
            <div class="descr-container">
              <p class="food-cuisine"><b>Cuisine:</b> ${c}</p>
              <p class="difficulty"><b>Difficulty:</b> ${s}</p>
              <p class="ingredients"><b>Inredients:</b> ${o}</p>
              <p class="instructions"><b>Instructions:</b> ${r}</p>
              <p class="prep-time"><b>Preparation time:</b> ${u} minutes</p>
              <p class="cook-time"><b>Cook time:</b> ${p} minutes</p>
              <p class="calories"><b>Calories:</b> ${i}</p>
            </div>
            <img class="large-image" src="${n}" alt="Food image" />
          </div>`;e.parcing.insertAdjacentHTML("beforeend",m)}async function v(t){t.preventDefault();const s=t.target.elements.query.value.trim(),{recipes:c}=await y(s);e.recipes=c,c.length?a(c):e.recipesList.innerHTML='<h2 class="empty-result">No matches found</h2>'}function l(t,s){const c=JSON.stringify(s);localStorage.setItem(t,c)}function k(t){const s=localStorage.getItem(t);try{return JSON.parse(s)}catch{return s}}function E(t){e.bodyEl.classList.toggle("dark-theme"),e.modal.classList.toggle("dark-theme"),e.bodyEl.classList.contains("dark-theme")?(l("theme","dark"),e.theme.innerHTML=`
      <svg class="moon" height="30" width="30">
        <use href="${e.pathToIcons}#moon"></use>
      </svg>`):(l("theme","white"),e.theme.innerHTML=`
      <svg class="sun" height="30" width="30">
        <use href="${e.pathToIcons}#sun"></use>
      </svg>`)}async function $(t){const{recipes:s}=await h();e.recipes=s,a(s)}function T(t){t.preventDefault();const s=t.target.form,c=[];for(const n of s)n.checked&&c.push(n.value);if(!c.length)return a(e.recipes);const i=f(c,e.recipes);i.length?a(i):e.recipesList.innerHTML='<h2 class="empty-result">No matches found</h2>'}async function S(t){if(!t.target.closest("li"))return;e.parcing.innerHTML="";const s=t.target.closest("li").dataset.id,c=await g(s);e.backdrop.classList.remove("hidden"),b(c),e.backdrop.addEventListener("click",i=>{(i.target.classList.contains("backdrop")||i.target.classList.contains("close-button"))&&(e.backdrop.classList.add("hidden"),e.backdrop.removeEventListener)}),document.addEventListener("keyup",i=>{i.key==="Escape"&&(e.backdrop.classList.add("hidden"),e.backdrop.removeEventListener)})}function w(){k("theme")==="dark"&&(e.bodyEl.classList.toggle("dark-theme"),e.modal.classList.toggle("dark-theme"),e.theme.innerHTML=`
      <svg class="moon" height="30" width="30">
        <use href="${e.pathToIcons}#moon"></use>
      </svg>`)}document.addEventListener("DOMContentLoaded",w);document.addEventListener("DOMContentLoaded",$);document.addEventListener("click",S);e.form.addEventListener("submit",v);e.switchEl.addEventListener("click",E);e.applyFilter.addEventListener("change",T);
//# sourceMappingURL=commonHelpers.js.map
