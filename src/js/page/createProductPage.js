import {createDescr} from '../components/createDescr.js';
import {createMainTitle} from '../components/createMainTitle.js';

export const createProductPage = (title) => {
  const product = document.createElement('div');
  const productList = document.createElement('ul');
  const mainTitle = createMainTitle(title);
  const descr = createDescr('Страница находится в разработке');

  product.classList.add('product-page', 'page');
  productList.classList.add('product-page__list', 'list-reset');


  product.append(mainTitle, descr, productList);
  return {
    product,
    productList,
  };
};
