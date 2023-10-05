import './createProductList.css';

export const createProductList = () => {
  const productList = document.createElement('ul');
  productList.classList.add('product-list', 'list-reset');

  return productList;
};
