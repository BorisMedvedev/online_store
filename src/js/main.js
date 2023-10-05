import Navigo from 'navigo';
import {createHeader} from '/src/js/components/createHeader/createHeader.js';
import {createMainContainer} from
  '/src/js/components/createMainContainer/createMainContainer.js';
import {createSection} from '/src/js/page/createSection.js';

export const router = new Navigo('/');
const init = () => {
  const app = document.body;
  const header = createHeader();
  const main = createMainContainer();
  const section = createSection();

  main.append(section.section);
  app.append(header, main);

  router.on('/', async () => {
    const moduleMain = await import('/src/js/page/createMainPage.js');
    const mainPage = moduleMain.createMainPage();
    section.app.innerHTML = '';
    section.app.append(mainPage);
  });
  router.on('/catalog', async () => {
    const moduleCatalog = await import('/src/js/page/createCatalogPage.js');
    const catalog = moduleCatalog.createCatalogPage();
    section.app.innerHTML = '';
    section.app.append(catalog);
  });
  router.on('/bascet', async () => {
    const moduleBascet = await import('/src/js/page/createBascetPage.js');
    const bascet = moduleBascet.createBascetPage();
    section.app.innerHTML = '';
    section.app.append(bascet);
  });
  router.on('/product/:title', async ({data}) => {
    const moduleProduct = await import('/src/js/page/createProductPage.js');
    const product = moduleProduct.createProductPage(data.title);
    section.app.innerHTML = '';
    section.app.append(product.product);
  });
  router.resolve();
};
init();


