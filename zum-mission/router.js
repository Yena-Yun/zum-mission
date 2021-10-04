// template
const homeTemplate = require('./pages/home.hbs');
const aboutTemplate = require('./pages/about.hbs');

const Home = homeTemplate();
const About = aboutTemplate();

const routes = {
  '/': Home,
  '/home': Home,
  '/about': About,
};

// 기본 경로 지정
function initialRoutes(element) {
  renderHTML(element, routes['/']);
  // onpopstate: 앞으로 가기, 뒤로 가기
  window.onpopstate = () => renderHTML(element, routes[window.location.pathname]);
}

// pathname: 클릭한 메뉴의 경로, element: 해당 경로의 내용을 넣을 태그(#history-app)
function historyRouterPush(pathName, element) {
  // pushState: 주소가 바뀌고 뒤로가기 버튼 활성화 - 페이지는 새로 갱신되지 않고 주소만 바뀌는 효과
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(element, routes[pathName]);
}

// render
function renderHTML(element, route) {
  element.innerHTML = route;
}

module.exports = {
  initialRoutes,
  historyRouterPush,
};
