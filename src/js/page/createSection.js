export const createSection = () => {
  const section = document.createElement('section');
  const app = document.createElement('div');

  section.classList.add('main-section');
  app.classList.add('container', 'app-container');
  app.id = 'app';

  section.append(app);

  return {
    section,
    app,
  };
};
