export const createCardProduct = (obj) => {
  const cardItem = document.createElement('li');
  const card = document.createElement('article');
  const cardImg = document.createElement('img');
  const cardTitle = document.createElement('h3');
  const cardDesc = document.createElement('p');
  const cardBtn = document.createElement('button');

  cardBtn.classList.add('btn-reset', 'site-btn');
  cardItem.classList.add('card-item');
  card.classList.add('card');

  cardImg.src = obj.img;
  cardTitle.textContent = obj.title;
  cardDesc.textContent = obj.descr;
  cardBtn.textContent = 'В корзину';

  card.append(cardImg, cardTitle, cardDesc, cardBtn);
  cardItem.append(card);

  return cardItem;
};
