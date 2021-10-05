// css import
require('./css/style.css');
const bestData = require('./json/best.json');
console.log(bestData);
// 라우터 import
const { initialRoutes, historyRouterPush } = require('./router');

const bestId = bestData.map((el, id) => id + 1);
console.log(bestId);
const bestmediaName = bestData.map((el) => el.mediaName);
const bestTitle = bestData.map((el) => el.title);
const bestUrl = bestData.map((el) => el.url);

// // state를 기반으로 렌더링
let state = { id: bestId, mediaName: bestmediaName, title: bestTitle, url: bestUrl };
console.log(state);

const $app = document.querySelector('#app');

// 렌더 함수
const bestRender = ({ id, mediaName, title, url }) => {
  $app.innerHTML = `
  <a href="${url}" class="rank-div">
    <h1>${id}</h1>
    <div>
	    <p>${title}</p>
	    <p>${mediaName}</p>
    </div>
  </a>
  `;
};

bestRender(state);
// 각 라우터의 내용으로 교체될 DOM
console.log($app);

// // state 수정하는 함수
// // 실행 시 state에 새 state를 추가하여 다시 렌더링

// // 렌더 함수에 state를 넣어 렌더링

// // state 수정
// setState({ title: 'Hello ' });
// setState({ description: 'World ' });

// 기본 경로
initialRoutes('history', $app);

// 페이지가 로드되면 각 li 클릭 시 해당 라우터의 hbs 렌더링
window.onload = () => {
  const historyLinker = document.querySelectorAll('li.history');

  historyLinker.forEach((el) => {
    el.addEventListener('click', (e) => {
      // 클릭한 li의 route 속성값을 교체할 DOM과 함께 라우터 함수에 전달
      const pathName = e.target.getAttribute('route');
      historyRouterPush(pathName, $app);
    });
  });
};
