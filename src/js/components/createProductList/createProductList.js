import {createCardProduct}
  from '/src/js/components/createCardProduct/createCardProduct';
import './createProductList.css';

export const getProductList = () => {
  const productsList = document.createElement('div');
  productsList.classList.add('product-list', 'list-reset');

  // Функция получения списка
  const getProducts = async function(URI) {
    try {
      const response = await fetch(URI);

      if (response.status === 404) {
        throw new Error('Товары не найдены');
      }

      const data = await response.json();

      const list = document.createElement('ul');
      list.classList.add('product-list__list');

      for (const product of data) {
        const productCard = createCardProduct(product);
        list.append(productCard);
      }

      console.log(data);
      productsList.append(list);
    } catch (error) {
      const msg = document.createElement('span');
      msg.classList.add('products-list__msg');
      msg.textContent = error.message;
      productsList.append(msg);
    }
  };

  return {
    productsList,
    getProducts,
  };
};
