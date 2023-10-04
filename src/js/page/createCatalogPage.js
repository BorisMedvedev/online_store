import {createCardProduct} from '../components/createCardProduct.js';
import {createDescr} from '../components/createDescr.js';
import {createMainTitle} from '../components/createMainTitle.js';
import {productArray} from '../productArray.js';

export const createCatalogPage = () => {
  const catalog = document.createElement('div');
  const catalogList = document.createElement('ul');
  const title = createMainTitle('Каталог');
  const descr = createDescr('Страница находится в разработке');

  catalog.classList.add('catalog-page', 'page');
  catalogList.classList.add(
      'catalog-page__list',
      'main-page__list',
      'list-reset');

  catalog.append(title, descr, catalogList);

  productArray.forEach(card => {
    catalogList.append(createCardProduct(card));
  });

  return {
    catalog,
    catalogList,
  };
};

