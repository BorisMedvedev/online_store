import './createCardProduct.css';
import {router} from '/src/js/main';

export const createCardProduct = (obj) => {
  const cardItem = document.createElement('li');
  const card = document.createElement('article');
  const cardImg = document.createElement('img');
  const cardTitle = document.createElement('h3');
  const linkTitle = document.createElement('a');
  const cardDesc = document.createElement('p');
  const cardBtn = document.createElement('button');
  const cardPrice = document.createElement('span');
  const quantity = document.createElement('span');

  cardBtn.classList.add('btn-reset', 'site-btn');
  cardItem.classList.add('card-item');
  card.classList.add('card');
  cardDesc.classList.add('descr');
  quantity.classList.add('quantity');

  cardImg.src = obj.image;
  cardTitle.textContent = obj.title;
  cardDesc.textContent = obj.desc;
  cardBtn.textContent = 'В корзину';
  const price = obj.price.toLocaleString(
      'fr-FR', {style: 'decimal', minimumFractionDigits: 0});
  cardPrice.textContent = `${price} ₽`;
  quantity.textContent = `В наличии ${obj.quantity} шт`;


  linkTitle.href = '#';

  linkTitle.append(cardTitle);
  card.append(cardImg, linkTitle, cardDesc, cardPrice, quantity, cardBtn);
  cardItem.append(card);

  linkTitle.addEventListener('click', (e) => {
    e.preventDefault();
    router.navigate('/product');
  });

  return cardItem;
};
