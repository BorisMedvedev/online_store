import {createDescr} from '/src/js/components/createDescr/createDescr.js';
import {createMainTitle} from
  '/src/js/components/createMainTitle/createMainTitle.js';

export const createCatalogPage = () => {
  const catalog = document.createElement('div');
  const title = createMainTitle('Каталог');
  const descr = createDescr('Страница находится в разработке');

  catalog.classList.add('catalog-page', 'page');

  catalog.append(title, descr);

  return catalog;
};

