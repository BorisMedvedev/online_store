import Navigo from 'navigo';
import {createHeader} from '/src/js/components/createHeader/createHeader.js';
import {createMainContainer} from
  '/src/js/components/createMainContainer/createMainContainer.js';
import {createSection} from '/src/js/page/createSection.js';
import {fetchDataFromApi} from '/src/js/api/getApi.js';
import {createCardProduct} from '/src/js/components/createCardProduct/createCardProduct';

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
    section.app.append(mainPage.mainPage);
  });
  router.on('/catalog', async () => {
    const moduleCatalog = await import('/src/js/page/createCatalogPage.js');
    const catalog = moduleCatalog.createCatalogPage();
    section.app.innerHTML = '';
    section.app.append(catalog.catalog);
  });
  router.on('/bascet', async () => {
    const moduleBascet = await import('/src/js/page/createBascetPage.js');
    const bascet = moduleBascet.createBascetPage();
    section.app.innerHTML = '';
    section.app.append(bascet.bascet);
  });
  router.on('/product/:title', async ({data}) => {
    const moduleProduct = await import('/src/js/page/createProductPage.js');
    const product = moduleProduct.createProductPage(data.title);
    section.app.innerHTML = '';
    section.app.append(product.product);
  });
  router.resolve();

  // fetchDataFromApi()
  //     .then(data => {
  //       for (const card of data) {
  //         const mainPageList = document.createElement('ul');
  //         const app = document.querySelector('.main-page__list');
  //         mainPageList.innerHTML = '';
  //         app.append(createCardProduct(card));
  //         console.log(data);
  //       }
  //     })
  //     .catch(error => {
  //       // Обработка ошибки
  //       console.error(error);
  //     });
};
init();


