import { getAllRecipies } from './api-recipies';
import { filterRecipesList } from './filter';
import { saveToLS } from './localstorage';
import { calcPageQuan } from './pagination';
import { refs } from './refs';
import { renderRecipesList } from './render-functions';

export function onClickChangeTheme() {
  refs.bodyEl.classList.toggle('dark-theme');
  refs.modal.classList.toggle('dark-theme');
  refs.header.classList.toggle('dark-theme');
  refs.checkboxGroup.classList.toggle('dark-theme');
  if (refs.bodyEl.classList.contains('dark-theme')) {
    saveToLS('theme', 'dark');
    refs.theme.innerHTML = `
      <svg class="moon" height="30" width="30">
        <use href="${refs.pathToIcons}#moon"></use>
      </svg>`;
  } else {
    saveToLS('theme', 'white');
    refs.theme.innerHTML = `
      <svg class="sun" height="30" width="30">
        <use href="${refs.pathToIcons}#sun"></use>
      </svg>`;
  }
}

export async function onDomContentLoaded() {
  const { recipes, total } = await getAllRecipies();
  refs.currentPage = 1;
  refs.recipes = recipes;
  if (calcPageQuan(total) > 1) {
    refs.loadMoreBtn.classList.remove('hidden');
  } else refs.loadMoreBtn.classList.add('hidden');
  refs.recipesList.innerHTML = '';
  renderRecipesList(
    recipes.slice(refs.currentPage * 12 - 12, refs.currentPage * 12)
  );
}

export function onFilterActivate(e) {
  refs.currentPage = 1;
  refs.loadMoreBtn.classList.remove('hidden');
  const elements = e.target.form;
  const condition = [];
  for (const element of elements) {
    if (element.checked) {
      condition.push(element.value);
    }
  }
  if (!condition.length) {
    refs.filtered = '';
    refs.recipesList.innerHTML = '';
    return renderRecipesList(
      refs.recipes.slice(refs.currentPage * 12 - 12, refs.currentPage * 12)
    );
  }
  refs.filtered = filterRecipesList(condition, refs.recipes);
  if (refs.filtered.length) {
    refs.currentPage = 1;
    refs.recipesList.innerHTML = '';
    renderRecipesList(
      refs.filtered.slice(refs.currentPage * 12 - 12, refs.currentPage * 12)
    );
    if (calcPageQuan(refs.filtered.length) > 1) {
      refs.loadMoreBtn.classList.remove('hidden');
    } else refs.loadMoreBtn.classList.add('hidden');
  } else {
    refs.loadMoreBtn.classList.add('hidden');
    refs.recipesList.innerHTML =
      '<h2 class="empty-result">No matches found</h2>';
  }
}

export function onShowMoreClick() {
  refs.loadMoreBtn.classList.add('hidden');
  refs.currentPage++;
  if (refs.filtered.length) {
    renderRecipesList(
      refs.filtered.slice(refs.currentPage * 12 - 12, refs.currentPage * 12)
    );
  } else {
    renderRecipesList(
      refs.recipes.slice(refs.currentPage * 12 - 12, refs.currentPage * 12)
    );
  }
  const scrollSize =
    refs.recipesList.firstChild.getBoundingClientRect().height + 50;
  window.scrollBy({
    top: scrollSize,
    behavior: 'smooth',
  });
  if (
    refs.currentPage === calcPageQuan(refs.filtered.length) ||
    refs.currentPage === calcPageQuan(refs.recipes.length)
  ) {
    refs.loadMoreBtn.classList.add('hidden');
  } else refs.loadMoreBtn.classList.remove('hidden');
}
