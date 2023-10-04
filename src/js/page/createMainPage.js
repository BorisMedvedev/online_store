import {createCardProduct} from '../components/createCardProduct.js';
import {createMainTitle} from '../components/createMainTitle.js';
import {productArray} from '../productArray.js';

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
