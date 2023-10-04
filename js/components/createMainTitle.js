export const createMainTitle = (text) => {
  const title = document.createElement('h2');
  title.classList.add('main-title');
  title.textContent = text;

  return title;
};
