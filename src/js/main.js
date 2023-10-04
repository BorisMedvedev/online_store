import Navigo from 'navigo';
import {createHeader} from './components/createHeader.js';
import {createMainContainer} from './components/createMainContainer.js';
import {createSection} from './page/createSection.js';
import {createMainPage} from './page/createMainPage.js';
import {createCatalogPage} from './page/createCatalogPage.js';
import {createBascetPage} from './page/createBascetPage.js';
export const router = new Navigo('/');
const init = () => {
  const app = document.body;
  const header = createHeader();
  const main = createMainContainer();
  const section = createSection();
  const catalog = createCatalogPage();
  const bascet = createBascetPage();

  main.append(section.section);
  app.append(header, main);

  const mainPage = createMainPage();

  router.on('/', () => {
    section.app.innerHTML = '';
    section.app.append(mainPage.mainPage);
  });
  router.on('/catalog', () => {
    section.app.innerHTML = '';
    section.app.append(catalog.catalog);
  });
  router.on('/bascet', () => {
    section.app.innerHTML = '';
    section.app.append(bascet.bascet);
  });
  router.resolve();
};
init();
