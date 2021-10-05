const homeTemplate = require('./pages/home.hbs');
const lifeTemplate = require('./pages/life.hbs');
const foodTemplate = require('./pages/food.hbs');
const tourTemplate = require('./pages/tour.hbs');
const cultureTemplate = require('./pages/culture.hbs');
const favoriteTemplate = require('./pages/favorite.hbs');

const bestData = require('./json/best.json');
const lifeData = require('./json/life.json');
const foodData = require('./json/food.json');
const tourData = require('./json/tour.json');
const cultureData = require('./json/culture.json');

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

// state를 기반으로 렌더링
const bestState = bestData.map(
  (el, id) => `
  <div>
    <h1>${id + 1}</h1>
    <div>
	    <p>${el.title}</p>
	    <p>${el.mediaName}</p>
    </div>
  </div>
  `
);

const lifeTop = lifeData.map((el, id) => {
  if (id < 4)
    return `
  <div>
    <img src=${el.imageUrl} />
    <p>${el.title}</p>
    <p>${el.summaryContent}</p>
    <p>${el.mediaName}</p>
  </div>
  `;
});

const foodTop = foodData.map((el, id) => {
  if (id < 4)
    return `
  <div>
    <img src=${el.imageUrl} />
    <p>${el.title}</p>
    <p>${el.summaryContent}</p>
    <p>${el.mediaName}</p>
  </div>
  `;
});

const tourTop = tourData.map((el, id) => {
  if (id < 4)
    return `
  <div>
    <img src=${el.imageUrl} />
    <p>${el.title}</p>
    <p>${el.summaryContent}</p>
    <p>${el.mediaName}</p>
  </div>
  `;
});

const cultureTop = cultureData.map((el, id) => {
  if (id < 4)
    return `
  <div>
    <img src=${el.imageUrl} />
    <p>${el.title}</p>
    <p>${el.summaryContent}</p>
    <p>${el.mediaName}</p>
  </div>
  `;
});

const lifeState = lifeData.map((el, id) => {
  // const br = document.createElement('br');
  // console.log(br);

  const articleId = id + 1;

  // id가 4의 배수일 때 뒤에 br 태그를 추가하여 줄바꿈
  if (articleId % 4 === 0) {
    return `
  <div class="article-div">
    <img class="article-img" src=${el.imageUrl} />
    <p class="article-title">${el.title}</p>
    <p class="article-content">${el.summaryContent}</p>
    <p class="article-media">${el.mediaName}</p>
  </div>
  <br />
  `;
  } else {
    return `
  <div class="article-div">
    <img class="article-img" src=${el.imageUrl} />
    <p class="article-title">${el.title}</p>
    <p class="article-content">${el.summaryContent}</p>
    <p class="article-media">${el.mediaName}</p>
  </div>
  `;
  }
});

const foodState = foodData.map(
  (el) => `
  <div>
    <img src=${el.imageUrl} />
    <p>${el.title}</p>
    <p>${el.summaryContent}</p>
    <p>${el.mediaName}</p>
  </div>
  `
);

const tourState = tourData.map(
  (el) => `
  <div>
    <img src=${el.imageUrl} />
    <p>${el.title}</p>
    <p>${el.summaryContent}</p>
    <p>${el.mediaName}</p>
  </div>
  `
);

const cultureState = cultureData.map(
  (el) => `
  <div>
    <img src=${el.imageUrl} />
    <p>${el.title}</p>
    <p>${el.summaryContent}</p>
    <p>${el.mediaName}</p>
  </div>
  `
);

function initialRoutes(mode, el) {
  renderHTML(el, routes['/']);

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

  if (route === routes['/home']) {
    el.innerHTML = lifeTop + foodTop + tourTop + cultureTop + bestState;
  } else if (route === routes['/life']) {
    el.innerHTML = lifeState;
  } else if (route === routes['/food']) {
    el.innerHTML = foodState;
  } else if (route === routes['/tour']) {
    el.innerHTML = tourState;
  } else if (route === routes['/culture']) {
    el.innerHTML = cultureState;
  }
}

module.exports = {
  initialRoutes,
  historyRouterPush,
};
