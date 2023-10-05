import {createDescr} from '/src/js/components/createDescr/createDescr.js';
import {createMainTitle} from
  '/src/js/components/createMainTitle/createMainTitle.js';

export const createBascetPage = () => {
  const bascet = document.createElement('div');
  const title = createMainTitle('Корзина');
  const descr = createDescr('Страница находится в разработке');

  bascet.classList.add('bascet-page', 'page');


  bascet.append(title, descr);

  return bascet;
};
