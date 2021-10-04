import homeTemplate from './pages/home.hbs';
import lifeTemplate from './pages/life.hbs';

const Home = homeTemplate();
const Life = lifeTemplate();

const routes = {
  '/': Home,
  '/home': Home,
  '/life': Life,
};

// 기본 경로 지정
function initialRoutes(mode, el) {
  console.log(el);
  renderHTML(el, routes['/']);
  if (mode === 'history') {
    window.onpopstate = () => renderHTML(el, routes[window.location.pathname]);
  }
}

// pathname: 클릭한 메뉴의 경로, element: 해당 경로의 내용을 넣을 태그(#app)
function historyRouterPush(pathName, el) {
  // pushState: 주소가 바뀌고 뒤로가기 버튼 활성화 - 페이지는 새로 갱신되지 않고 주소만 바뀌는 효과
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(el, routes[pathName]);
}

function renderHTML(el, route) {
  el.innerHTML = route;
}

module.exports = {
  initialRoutes,
  historyRouterPush,
};
