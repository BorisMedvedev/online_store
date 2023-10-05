import {createCardProduct} from
  '/src/js/components/createCardProduct/createCardProduct.js';
import {createMainTitle} from
  '/src/js/components/createMainTitle/createMainTitle.js';
import {productArray} from '/src/js/productArray.js';

export const createMainPage = () => {
  const mainPage = document.createElement('div');
  const mainPageList = document.createElement('ul');
  const title = createMainTitle('Главная страница');

  mainPage.classList.add('main-page', 'page');
  mainPageList.classList.add('main-page__list', 'list-reset');

  productArray.forEach(card => {
    mainPageList.append(createCardProduct(card));
  });

  mainPage.append(title, mainPageList);

  return {
    mainPage,
    mainPageList,
  };
};
