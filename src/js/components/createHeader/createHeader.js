import './createHeader.css';
import {router} from '/src/js/main.js';
import {logoLink} from '/src/js/components/svg.js';
const array = JSON.parse(localStorage.getItem('bascet')) || [];
export const createHeader = () => {
  const header = document.createElement('header');
  const headerContainer = document.createElement('div');
  const headerNav = document.createElement('nav');
  const headerLinkMain = document.createElement('button');
  const headerLinkCatalog = document.createElement('button');
  const headerBtnBascet = document.createElement('button');
  const headerBtnBascetNum = document.createElement('span');
  const logo = document.createElement('a');
  const num = array.length;

  header.classList.add('header');
  headerContainer.classList.add('container', 'header__container');
  headerNav.classList.add('header__nav');
  headerLinkMain.classList.add('header__link', 'btn-reset');
  headerLinkCatalog.classList.add('header__link', 'btn-reset');
  headerBtnBascet.classList.add('header__bascet-btn', 'btn-reset');
  logo.classList.add('logo');
  headerBtnBascetNum.classList.add('bascet-num');
  headerBtnBascetNum.textContent = num;

  headerLinkMain.textContent = 'Главная страница';
  headerLinkCatalog.textContent = 'Каталог';
  logo.innerHTML = logoLink;

  headerBtnBascet.append(headerBtnBascetNum);
  headerNav.append(headerLinkMain, headerLinkCatalog);
  headerContainer.append(logo, headerNav, headerBtnBascet);
  header.append(headerContainer);

  headerLinkMain.addEventListener('click', (e) => {
    e.preventDefault();
    router.navigate('/');
  });
  headerLinkCatalog.addEventListener('click', (e) => {
    e.preventDefault();
    router.navigate('/catalog');
  });
  headerBtnBascet.addEventListener('click', (e) => {
    e.preventDefault();
    router.navigate('/bascet');
  });

  return header;
};
