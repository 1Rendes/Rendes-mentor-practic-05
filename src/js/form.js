import { getRecepieByQuery } from './api-recipies';
import { renderRecipesList } from './render-functions';
import { refs } from './refs';
import { calcPageQuan } from './pagination';

export async function findFood(e) {
  e.preventDefault();
  const query = e.target.elements.query.value.trim();
  if (!query) {
    return alert('Search request must not be blank');
  }
  const { recipes, total } = await getRecepieByQuery(query);
  refs.recipes = recipes;
  if (recipes.length) {
    refs.currentPage = 1;
    console.log(refs.recipes);
    refs.recipesList.innerHTML = '';
    renderRecipesList(
      recipes.slice(refs.currentPage * 12 - 12, refs.currentPage * 12)
    );
    if (calcPageQuan(total) > 1) {
      refs.loadMoreBtn.classList.remove('hidden');
    } else refs.loadMoreBtn.classList.add('hidden');
  } else {
    refs.loadMoreBtn.classList.add('hidden');
    refs.recipesList.innerHTML =
      '<h2 class="empty-result">No matches found</h2>';
  }
}
