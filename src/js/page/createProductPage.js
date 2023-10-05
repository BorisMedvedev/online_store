import {createDescr} from '/src/js/components/createDescr/createDescr.js';
import {createMainTitle} from
  '/src/js/components/createMainTitle/createMainTitle.js';

export const createProductPage = (title) => {
  const product = document.createElement('div');
  const mainTitle = createMainTitle(title);
  const descr = createDescr('Страница находится в разработке');

  product.classList.add('product-page', 'page');


  product.append(mainTitle, descr);
  return product;
};
