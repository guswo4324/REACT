import React from 'react';
import ReactDOM from'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducers from './reducers';

//redux는 컨텍스트와 마찬가지로 데이터를 필요한 컴포넌트에서만 요청해 사용할 수 있다.
//컨텍스트는 부모 컴포넌트에서 생성한 데이터에 모든 자식 컴포넌트에서 접근할 수 있다.
//하지만 redux에서는 컴포넌트 외부의 스토어라는 곳에서 관리함
//그래서 컴포넌트의 위치에 상관없이 스토어에 접근해 데이터를 사용하고 변경할 수 있다.

//createStore 함수의 파라미터로 reducers 폴더 경로를 넘긴다
//reducers 폴더의 index.js에는 데이터 초기값을 설정하고 데이터를 변경해주는 함수가 있는데
//이 함수를 리듀서라고 함

//redux는 데이터를 스토어 > 컴포넌트 > 액션 > 리듀서 > 스토어 
//과정을 통해 변경한다
const store = createStore(reducers);

const listener = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
};

//store를 구독하면 store 데이터에 변화가 있을 때 
//listener 함수 내부의 render 함수를 실행하고 변경된 데이터를 렌더링 한다.
store.subscribe(listener);
//const listener = () render 함수를 listener 함수로 감쌌기 때문에 
//초기 렌더링을 위해 수동으로 render 함수를 실행시킴
listener();