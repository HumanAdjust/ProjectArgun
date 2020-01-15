import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';    
// 브라우저 상에 React 컴포넌트를 보여주기 위해서 ReactDOM.render(렌더링 결과물, 그릴 DOM) 함수를 사용합니다.
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// public/index.html 파일에 있는 id가 'root'인 DOM을 찾아 App 컴포넌트를 렌더링 해줍니다.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
