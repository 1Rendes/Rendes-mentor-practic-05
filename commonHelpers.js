import{a as d}from"./assets/vendor-bdb8a163.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(c){if(c.ep)return;c.ep=!0;const o=r(c);fetch(c.href,o)}})();function f(t,s){const r=[];return s.forEach(n=>{t.includes(n.difficulty)&&r.push(n)}),r}d.defaults.baseURL="https://dummyjson.com/recipes";async function h(){const{data:t}=await d("");return t}async function g(t){const{data:s}=await d(`/${t}`);return s}async function y(t){const{data:s}=await d("/search",{params:{q:t}});return s}const L="/Rendes-mentor-practic-05/assets/icons-09f5cae6.svg",e={recipesList:document.querySelector(".recipes"),bodyEl:document.querySelector("body"),switchEl:document.querySelector("#switch-theme"),form:document.querySelector(".form"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),parcing:document.querySelector(".parcing"),recipes:"",applyFilter:document.querySelector(".filter"),theme:document.querySelector(".theme"),pathToIcons:L,header:document.querySelector(".header"),checkboxGroup:document.querySelector(".checkbox-group")};function a(t){e.recipesList.innerHTML="";const s=t.map(({id:r,image:n,name:c,difficulty:o,cuisine:i})=>`<li class="recipe-item" data-id='${r}'>
    <img
        class="recipe-image"
        src=${n}
        alt=${c}
    />
    <div class="recipe-dscr">
        <p class="recipe-name">Name: ${c}</p>
        <p class="recipe-cuisine">Cuisine: ${i}</p>
        <p class="recipe-difficulty">Difficulty: ${o}</p>
    </div>`).join("");e.recipesList.insertAdjacentHTML("beforeend",s)}function b({name:t,difficulty:s,cuisine:r,caloriesPerServing:n,image:c,ingredients:o,instructions:i,prepTimeMinutes:u,cookTimeMinutes:m}){const p=`<h2 class="food-name"><b>Name:</b> ${t}</h2>
          <div class="common-container">
            <div class="descr-container">
              <p class="food-cuisine"><b>Cuisine:</b> ${r}</p>
              <p class="difficulty"><b>Difficulty:</b> ${s}</p>
              <p class="ingredients"><b>Inredients:</b> ${o}</p>
              <p class="instructions"><b>Instructions:</b> ${i}</p>
              <p class="prep-time"><b>Preparation time:</b> ${u} minutes</p>
              <p class="cook-time"><b>Cook time:</b> ${m} minutes</p>
              <p class="calories"><b>Calories:</b> ${n}</p>
            </div>
            <img class="large-image" src="${c}" alt="Food image" />
          </div>`;e.parcing.insertAdjacentHTML("beforeend",p)}async function k(t){t.preventDefault();const s=t.target.elements.query.value.trim();if(!s)return alert("Search request must not be blank");const{recipes:r}=await y(s);e.recipes=r,r.length?a(r):e.recipesList.innerHTML='<h2 class="empty-result">No matches found</h2>'}function l(t,s){const r=JSON.stringify(s);localStorage.setItem(t,r)}function v(t){const s=localStorage.getItem(t);try{return JSON.parse(s)}catch{return s}}function E(t){e.bodyEl.classList.toggle("dark-theme"),e.modal.classList.toggle("dark-theme"),e.header.classList.toggle("dark-theme"),e.checkboxGroup.classList.toggle("dark-theme"),e.bodyEl.classList.contains("dark-theme")?(l("theme","dark"),e.theme.innerHTML=`
      <svg class="moon" height="30" width="30">
        <use href="${e.pathToIcons}#moon"></use>
      </svg>`):(l("theme","white"),e.theme.innerHTML=`
      <svg class="sun" height="30" width="30">
        <use href="${e.pathToIcons}#sun"></use>
      </svg>`)}async function S(t){const{recipes:s}=await h();e.recipes=s,a(s)}function $(t){t.preventDefault();const s=t.target.form,r=[];for(const c of s)c.checked&&r.push(c.value);if(!r.length)return a(e.recipes);const n=f(r,e.recipes);n.length?a(n):e.recipesList.innerHTML='<h2 class="empty-result">No matches found</h2>'}async function T(t){if(!t.target.closest("li"))return;e.parcing.innerHTML="";const s=t.target.closest("li").dataset.id,r=await g(s);e.backdrop.classList.remove("hidden"),b(r),e.backdrop.addEventListener("click",n=>{(n.target.classList.contains("backdrop")||n.target.classList.contains("close-button"))&&(e.backdrop.classList.add("hidden"),e.backdrop.removeEventListener)}),document.addEventListener("keyup",n=>{n.key==="Escape"&&(e.backdrop.classList.add("hidden"),e.backdrop.removeEventListener)})}function q(){v("theme")==="dark"&&(e.bodyEl.classList.toggle("dark-theme"),e.modal.classList.toggle("dark-theme"),e.header.classList.toggle("dark-theme"),e.checkboxGroup.classList.toggle("dark-theme"),e.theme.innerHTML=`
      <svg class="moon" height="30" width="30">
        <use href="${e.pathToIcons}#moon"></use>
      </svg>`)}document.addEventListener("DOMContentLoaded",q);document.addEventListener("DOMContentLoaded",S);document.addEventListener("click",T);e.form.addEventListener("submit",k);e.switchEl.addEventListener("click",E);e.applyFilter.addEventListener("change",$);
//# sourceMappingURL=commonHelpers.js.map
