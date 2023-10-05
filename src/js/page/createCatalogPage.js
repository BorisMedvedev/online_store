import {createDescr} from '/src/js/components/createDescr.js';
import {createMainTitle} from '/src/js/components/createMainTitle.js';

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

  return {
    catalog,
    catalogList,
  };
};

