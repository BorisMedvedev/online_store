import {createCardProduct}
  from '/src/js/components/createCardProduct/createCardProduct';
import {createMainTitle} from
  '/src/js/components/createMainTitle/createMainTitle.js';
const bascetArrayNew = JSON.parse(localStorage.getItem('bascet')) || [];

export const createBascetPage = () => {
  const bascet = document.createElement('div');
  const bascetList = document.createElement('ul');
  const title = createMainTitle('Корзина');

  bascet.classList.add('bascet-page', 'page');
  bascetList.classList.add('list-reset', 'card-list');

  for (const card of bascetArrayNew) {
    const newCard = createCardProduct(card);
    console.log(newCard);
    bascetList.append(newCard);
  }

  bascet.append(title, bascetList);
  console.log(bascetArrayNew);
  return bascet;
};
