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

// entry point
function initialRoutes(mode, el) {
  renderHTML(el, routes['/']);

  if (mode === 'history') {
    window.onpopstate = () => renderHTML(el, routes[window.location.pathname]);
  }
}

// set browser history
function historyRouterPush(pathName, el) {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(el, routes[pathName]);
}

// render
function renderHTML(el, route) {
  el.innerHTML = route;
}

module.exports = {
  initialRoutes,
  historyRouterPush,
};
