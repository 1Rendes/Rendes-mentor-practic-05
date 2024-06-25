import { loadFromLS } from './localstorage';
import { refs } from './refs';

export function onLoadedDomTheme() {
  const checkTheme = loadFromLS('theme');
  if (checkTheme === 'dark') {
    refs.bodyEl.classList.toggle('dark-theme');
    refs.modal.classList.toggle('dark-theme');
    refs.header.classList.toggle('dark-theme');
    refs.theme.innerHTML = `
      <svg class="moon" height="30" width="30">
        <use href="${refs.pathToIcons}#moon"></use>
      </svg>`;
  }
}
