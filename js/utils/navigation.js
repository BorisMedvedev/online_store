import {createBascetPage} from '../page/createBascetPage.js';
import {createCatalogPage} from '../page/createCatalogPage.js';
import {createMainPage} from '../page/createMainPage.js';

export const navigation = (page) => {
  const mainPage = createMainPage();
  const catalog = createCatalogPage();
  const bascet = createBascetPage();
  const app = document.getElementById('app');
  switch (page) {
    case 'catalog':
      app.innerHTML = '';
      app.append(catalog.catalog);
      break;
    case 'bascet':
      app.innerHTML = '';
      app.append(bascet.bascet);
      break;

    default:
      app.innerHTML = '';
      app.append(mainPage.mainPage);
      break;
  }
};
