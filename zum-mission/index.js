require('./css/style.css');
const { initialRoutes, historyRouterPush } = require('./router');

const appDiv = document.querySelector('#app');

initialRoutes(appDiv);

window.onload = () => {
  const historyLinker = document.querySelectorAll('.history');

  historyLinker.forEach((element) => {
    element.addEventListener('click', (e) => {
      const pathName = e.target.getAttribute('route');
      historyRouterPush(pathName, appDiv);
    });
  });
};
