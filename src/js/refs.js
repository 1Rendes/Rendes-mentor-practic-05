import pathIcons from '../img/icons.svg';

export const refs = {
  recipesList: document.querySelector('.recipes'),
  bodyEl: document.querySelector('body'),
  switchEl: document.querySelector('#switch-theme'),
  form: document.querySelector('.form'),
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  parcing: document.querySelector('.parcing'),
  recipes: '',
  filtered: '',
  applyFilter: document.querySelector('.filter'),
  theme: document.querySelector('.theme'),
  pathToIcons: pathIcons,
  header: document.querySelector('.header'),
  checkboxGroup: document.querySelector('.checkbox-group'),
  loadMoreBtn: document.querySelector('#loadMore'),
  currentPage: 1,
};
