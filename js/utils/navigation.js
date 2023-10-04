import Navigo from 'navigo';
import {createBascetPage} from '../page/createBascetPage.js';
import {createCatalogPage} from '../page/createCatalogPage.js';
import {createMainPage} from '../page/createMainPage.js';


const mainPage = createMainPage();
const catalog = createCatalogPage();
const bascet = createBascetPage();
const app = document.getElementById('app');

export const router = new Navigo('/');

router.on('/', () => {
  app.innerHTML = '';
  app.append(mainPage.mainPage);
});
router.on('/catalog', () => {
  app.innerHTML = '';
  app.append(catalog.catalog);
});
router.on('/bascet', () => {
  app.innerHTML = '';
  app.append(bascet.bascet);
});

router.resolve();
