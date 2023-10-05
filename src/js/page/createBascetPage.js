import {createDescr} from '/src/js/components/createDescr/createDescr.js';
import {createMainTitle} from
  '/src/js/components/createMainTitle/createMainTitle.js';

export const createBascetPage = () => {
  const bascet = document.createElement('div');
  const bascetList = document.createElement('ul');
  const title = createMainTitle('Корзина');
  const descr = createDescr('Страница находится в разработке');

  bascet.classList.add('bascet-page', 'page');
  bascetList.classList.add('bascet-page__list', 'list-reset');


  bascet.append(title, descr, bascetList);

  return {
    bascet,
    bascetList,
  };
};
