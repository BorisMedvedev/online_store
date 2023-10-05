import {getProductList}
  from '/src/js/components/createProductList/createProductList';
import {createMainTitle} from
  '/src/js/components/createMainTitle/createMainTitle.js';
import {URL} from '/src/js/config';

export const createMainPage = () => {
  const mainPage = document.createElement('div');
  const title = createMainTitle('Главная страница');

  mainPage.classList.add('main-page', 'page');

  const products = getProductList();
  products.getProducts(`${URL}/wp-json/wp/v1/products?count=4`);

  mainPage.append(title, products.productsList);


  return mainPage;
};
