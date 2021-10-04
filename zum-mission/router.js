const homeTemplate = require('./pages/home.hbs');
const lifeTemplate = require('./pages/life.hbs');

const Home = homeTemplate();
const Life = lifeTemplate();

const routes = {
  '/': Home,
  '/home': Home,
  '/life': Life,
};

// 기본 경로 지정
function initialRoutes(element) {
  renderHTML(element, routes['/']);
  window.onpopstate = () => renderHTML(element, routes[window.location.pathname]);
}

// pathname: 클릭한 메뉴의 경로, element: 해당 경로의 내용을 넣을 태그(#app)
function historyRouterPush(element, pathName) {
  // pushState: 주소가 바뀌고 뒤로가기 버튼 활성화 - 페이지는 새로 갱신되지 않고 주소만 바뀌는 효과
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(element, routes[pathName]);
}

function renderHTML(element, route) {
  element.innerHTML = route;
}

module.exports = {
  initialRoutes,
  historyRouterPush,
};
