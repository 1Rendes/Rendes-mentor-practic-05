import{a as d}from"./assets/vendor-bdb8a163.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const r of c)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(c){const r={};return c.integrity&&(r.integrity=c.integrity),c.referrerPolicy&&(r.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?r.credentials="include":c.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(c){if(c.ep)return;c.ep=!0;const r=n(c);fetch(c.href,r)}})();function f(t,s){const n=[];return s.forEach(i=>{t.includes(i.difficulty)&&n.push(i)}),n}d.defaults.baseURL="https://dummyjson.com/recipes";async function h(){const{data:t}=await d("");return t}async function g(t){const{data:s}=await d(`/${t}`);return s}async function y(t){const{data:s}=await d("/search",{params:{q:t}});return s}const L="/Rendes-mentor-practic-05/assets/icons-601d02d7.svg",e={recipesList:document.querySelector(".recipes"),bodyEl:document.querySelector("body"),switchEl:document.querySelector("#switch-theme"),form:document.querySelector(".form"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),parcing:document.querySelector(".parcing"),recipes:"",applyFilter:document.querySelector(".filter"),theme:document.querySelector(".theme"),pathToIcons:L,header:document.querySelector(".header")};function a(t){e.recipesList.innerHTML="";const s=t.map(({id:n,image:i,name:c,difficulty:r,cuisine:o})=>`<li class="recipe-item" data-id='${n}'>
    <img
        class="recipe-image"
        src=${i}
        alt=${c}
    />
    <div class="recipe-dscr">
        <p class="recipe-name">Name: ${c}</p>
        <p class="recipe-cuisine">Cuisine: ${o}</p>
        <p class="recipe-difficulty">Difficulty: ${r}</p>
    </div>`).join("");e.recipesList.insertAdjacentHTML("beforeend",s)}function b({name:t,difficulty:s,cuisine:n,caloriesPerServing:i,image:c,ingredients:r,instructions:o,prepTimeMinutes:u,cookTimeMinutes:m}){const p=`<h2 class="food-name"><b>Name:</b> ${t}</h2>
          <div class="common-container">
            <div class="descr-container">
              <p class="food-cuisine"><b>Cuisine:</b> ${n}</p>
              <p class="difficulty"><b>Difficulty:</b> ${s}</p>
              <p class="ingredients"><b>Inredients:</b> ${r}</p>
              <p class="instructions"><b>Instructions:</b> ${o}</p>
              <p class="prep-time"><b>Preparation time:</b> ${u} minutes</p>
              <p class="cook-time"><b>Cook time:</b> ${m} minutes</p>
              <p class="calories"><b>Calories:</b> ${i}</p>
            </div>
            <img class="large-image" src="${c}" alt="Food image" />
          </div>`;e.parcing.insertAdjacentHTML("beforeend",p)}async function v(t){t.preventDefault();const s=t.target.elements.query.value.trim();if(!s)return alert("Search request must not be blank");const{recipes:n}=await y(s);e.recipes=n,n.length?a(n):e.recipesList.innerHTML='<h2 class="empty-result">No matches found</h2>'}function l(t,s){const n=JSON.stringify(s);localStorage.setItem(t,n)}function k(t){const s=localStorage.getItem(t);try{return JSON.parse(s)}catch{return s}}function E(t){e.bodyEl.classList.toggle("dark-theme"),e.modal.classList.toggle("dark-theme"),e.header.classList.toggle("dark-theme"),e.bodyEl.classList.contains("dark-theme")?(l("theme","dark"),e.theme.innerHTML=`
      <svg class="moon" height="30" width="30">
        <use href="${e.pathToIcons}#moon"></use>
      </svg>`):(l("theme","white"),e.theme.innerHTML=`
      <svg class="sun" height="30" width="30">
        <use href="${e.pathToIcons}#sun"></use>
      </svg>`)}async function $(t){const{recipes:s}=await h();e.recipes=s,a(s)}function S(t){t.preventDefault();const s=t.target.form,n=[];for(const c of s)c.checked&&n.push(c.value);if(!n.length)return a(e.recipes);const i=f(n,e.recipes);i.length?a(i):e.recipesList.innerHTML='<h2 class="empty-result">No matches found</h2>'}async function T(t){if(!t.target.closest("li"))return;e.parcing.innerHTML="";const s=t.target.closest("li").dataset.id,n=await g(s);e.backdrop.classList.remove("hidden"),b(n),e.backdrop.addEventListener("click",i=>{(i.target.classList.contains("backdrop")||i.target.classList.contains("close-button"))&&(e.backdrop.classList.add("hidden"),e.backdrop.removeEventListener)}),document.addEventListener("keyup",i=>{i.key==="Escape"&&(e.backdrop.classList.add("hidden"),e.backdrop.removeEventListener)})}function q(){k("theme")==="dark"&&(e.bodyEl.classList.toggle("dark-theme"),e.modal.classList.toggle("dark-theme"),e.header.classList.toggle("dark-theme"),e.theme.innerHTML=`
      <svg class="moon" height="30" width="30">
        <use href="${e.pathToIcons}#moon"></use>
      </svg>`)}document.addEventListener("DOMContentLoaded",q);document.addEventListener("DOMContentLoaded",$);document.addEventListener("click",T);e.form.addEventListener("submit",v);e.switchEl.addEventListener("click",E);e.applyFilter.addEventListener("change",S);
//# sourceMappingURL=commonHelpers.js.map
