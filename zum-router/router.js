const homeTemplate = require('./pages/home.hbs');
const lifeTemplate = require('./pages/life.hbs');
const foodTemplate = require('./pages/food.hbs');
const tourTemplate = require('./pages/tour.hbs');
const cultureTemplate = require('./pages/culture.hbs');
const favoriteTemplate = require('./pages/favorite.hbs');

const bestData = require('./json/best.json');
const lifeData = require('./json/life.json');

const Home = homeTemplate();
const Life = lifeTemplate();
const Food = foodTemplate();
const Tour = tourTemplate();
const Culture = cultureTemplate();
const Favorite = favoriteTemplate();

const routes = {
  '/': Home,
  '/home': Home,
  '/life': Life,
  '/food': Food,
  '/tour': Tour,
  '/culture': Culture,
  '/favorite': Favorite,
};

const bestId = bestData.map((el, id) => id + 1);
const bestMediaName = bestData.map((el) => el.mediaName);
const bestTitle = bestData.map((el) => el.title);
const bestUrl = bestData.map((el) => el.url);

// // state를 기반으로 렌더링
let bestState = { id: bestId, mediaName: bestMediaName, title: bestTitle, url: bestUrl };

// 렌더 함수
const bestRender = ({ id, mediaName, title, url }, el) => {
  el.innerHTML = `
  <div>
    <h1>${id}</h1>
    <div>
	    <p>${title}</p>
	    <p>${mediaName}</p>
    </div>
  </div>
  `;
};

const lifeState = lifeData.map(
  (el, id) => `
  <div>
    <img src=${el.imageUrl} />
    <p>${el.title}</p>
    <p>${el.summaryContent}</p>
    <p>${el.mediaName}</p>
  </div>`
);

// const lifeId = lifeData.map((el, id) => id + 1);
// const lifeTitle = lifeData.map((el) => el.title);
// const lifeImageUrl = lifeData.map((el) => el.mediaName);
// const lifeMediaName = lifeData.map((el) => el.mediaName);
// const lifeUrl = lifeData.map((el) => el.url);
// const lifeSummary = lifeData.map((el) => el.url);

// // // state를 기반으로 렌더링
// let lifeState = {
//   id: lifeId,
//   title: lifeTitle,
//   imageUrl: lifeImageUrl,
//   mediaName: lifeMediaName,
//   url: lifeUrl,
//   summaryContent: lifeSummary,
// };

// 렌더 함수
const lifeRender = (state, el) => {
  el.innerHTML = state;
};

function initialRoutes(mode, el) {
  renderHTML(el, routes['/']);
  renderHTML(el, routes['/life']);

  if (mode === 'history') {
    window.onpopstate = () => renderHTML(el, routes[window.location.pathname]);
  }
}

function historyRouterPush(pathName, el) {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(el, routes[pathName]);
}

function renderHTML(el, route) {
  el.innerHTML = route;

  bestRender(bestState, el);

  if (route === routes['/life']) {
    lifeRender(lifeState, el);
  }
}

module.exports = {
  initialRoutes,
  historyRouterPush,
};
