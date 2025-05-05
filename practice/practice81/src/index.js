import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';


//const store = createStore(reducers);

const CallMiddleware = store => nextMiddle => action => {
  console.log('1. reducer 실행 전');
  console.log('2. action.type : '+action.type+', store str : ' + store.getState().data.str);
  let result = nextMiddle(action);
  console.log('3. reducer 실행 후');
  console.log('4. action.type : '+action.type+', store str : '+store.getState().data.str);
  return result;
}

const store = createStore(reducers, applyMiddleware(CallMiddleware));


const listener = () => {
  ReactDOM.render(
    //Provider에 데이터를 넘겨주면 중간 컴포넌트에서 props 값을 다시 전달해줄 필요 없이
    //모든 하위 컴포넌트에서 데이터를 사용할 수 있다.
    //컨텍스트 api에서 사용했던 Provider와 동일한 기능을 함
    <Provider store={store}>
      {/* App 컴포넌트에서 사용할 변수 indexProp에 react 문자열 할당해 props로 전달 */}
      <App indexProp="react"/>
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(listener);
listener();