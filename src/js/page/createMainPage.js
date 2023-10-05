import {createMainTitle} from
  '/src/js/components/createMainTitle/createMainTitle.js';

export const createMainPage = () => {
  const mainPage = document.createElement('div');
  const title = createMainTitle('Главная страница');

  mainPage.classList.add('main-page', 'page');

  mainPage.append(title);

  return mainPage;
};
