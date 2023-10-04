import Navigo from 'navigo';
import {createHeader} from './components/createHeader.js';
import {createMainContainer} from './components/createMainContainer.js';
import {createSection} from './page/createSection.js';
export const router = new Navigo('/');
const init = () => {
  const app = document.body;
  const header = createHeader();
  const main = createMainContainer();
  const section = createSection();

  main.append(section.section);
  app.append(header, main);

  router.on('/', async () => {
    const moduleMain = await import('./page/createMainPage.js');
    const mainPage = moduleMain.createMainPage();
    section.app.innerHTML = '';
    section.app.append(mainPage.mainPage);
  });
  router.on('/catalog', async () => {
    const moduleCatalog = await import('./page/createCatalogPage.js');
    const catalog = moduleCatalog.createCatalogPage();
    section.app.innerHTML = '';
    section.app.append(catalog.catalog);
  });
  router.on('/bascet', async () => {
    const moduleBascet = await import('./page/createBascetPage.js');
    const bascet = moduleBascet.createBascetPage();
    section.app.innerHTML = '';
    section.app.append(bascet.bascet);
  });
  router.on('/product/:title', async ({data}) => {
    const moduleProduct = await import('./page/createProductPage.js');
    const product = moduleProduct.createProductPage(data.title);
    section.app.innerHTML = '';
    section.app.append(product.product);
  });
  router.resolve();
};
init();
