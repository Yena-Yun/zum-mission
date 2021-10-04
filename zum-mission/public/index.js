// require('./css/style.css');

import { initialRoutes, historyRouterPush } from '../router';

const historyAppDiv = document.querySelector('#history-app');
console.log(historyAppDiv);

initialRoutes('history', historyAppDiv);

window.onload = () => {
  const historyLinker = document.querySelectorAll('li.history');
  console.log(historyLinker);

  historyLinker.forEach((element) => {
    element.addEventListener('click', (e) => {
      const pathName = e.target.getAttribute('route');
      console.log(pathName);
      historyRouterPush(pathName, historyAppDiv);
    });
  });
};
