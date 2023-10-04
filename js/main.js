import {createHeader} from './components/createHeader.js';
import {createMainContainer} from './components/createMainContainer.js';
import {createSection} from './page/createSection.js';
import {navigation} from './utils/navigation.js';

const init = () => {
  const app = document.body;
  const header = createHeader();
  const main = createMainContainer();
  const section = createSection();

  main.append(section.section);
  app.append(header, main);
  navigation();
};
init();