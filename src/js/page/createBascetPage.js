import {createCardProduct}
  from '/src/js/components/createCardProduct/createCardProduct';
import {createDescr} from '/src/js/components/createDescr/createDescr.js';
import {createMainTitle} from
  '/src/js/components/createMainTitle/createMainTitle.js';
const bascetArrayNew = JSON.parse(localStorage.getItem('bascet')) || [];

export const createBascetPage = () => {
  const bascet = document.createElement('div');
  const bascetList = document.createElement('ul');
  const title = createMainTitle('Корзина');
  const descr = createDescr('Страница находится в разработке');

  bascet.classList.add('bascet-page', 'page');
  bascetList.classList.add('list-reset', 'card-list');

  for (const card of bascetArrayNew) {
    const newCard = createCardProduct(card);
    console.log(newCard);
    bascetList.append(newCard);
  }

  bascet.append(title, descr, bascetList);
  console.log(bascetArrayNew);
  return bascet;
};
