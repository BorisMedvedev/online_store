import {getProductList}
  from '/src/js/components/createProductList/createProductList';
import {createMainTitle} from
  '/src/js/components/createMainTitle/createMainTitle.js';
import {URL} from '/src/js/config';

export const createCatalogPage = () => {
  const catalog = document.createElement('div');
  const title = createMainTitle('Каталог');

  catalog.classList.add('catalog-page', 'page');

  const products = getProductList();
  products.getProducts(`${URL}/wp-json/wp/v1/products`);

  catalog.append(title, products.productsList);


  return catalog;
};

