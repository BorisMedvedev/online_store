import {router} from '../main.js';
import {logoLink} from '../components/svg.js';

export const createHeader = () => {
  const header = document.createElement('header');
  const headerContainer = document.createElement('div');
  const headerNav = document.createElement('nav');
  const headerLinkMain = document.createElement('button');
  const headerLinkCatalog = document.createElement('button');
  const headerBtnBascet = document.createElement('button');
  const logo = document.createElement('a');


  header.classList.add('header');
  headerContainer.classList.add('container', 'header__container');
  headerNav.classList.add('header__nav');
  headerLinkMain.classList.add('header__link', 'btn-reset');
  headerLinkCatalog.classList.add('header__link', 'btn-reset');
  headerBtnBascet.classList.add('header__bascet-btn', 'btn-reset');
  logo.classList.add('logo');


  headerLinkMain.textContent = 'Главная страница';
  headerLinkCatalog.textContent = 'Каталог';
  logo.innerHTML = logoLink;

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
