import {createMainTitle} from
  '/src/js/components/createMainTitle/createMainTitle.js';

export const createProductPage = () => {
  const product = document.createElement('div');
  const mainTitle = createMainTitle('title');

  product.classList.add('product-page', 'page');

  product.append(mainTitle);
  return product;
};

