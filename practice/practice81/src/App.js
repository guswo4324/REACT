import React, {Component} from 'react';
import {connect} from 'react-redux';
import StrAddButton from './R083_StrAddButton';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        {/* str : state.data.str str변수로 할당한 값을 화면에 출력
        redux를 사용하면 밑에 주석 처럼 코드가 길어짐
        접근하는 스토어 변수가 많아질수록 코드 효율이 좋아짐 */}
        {/* <span>{this.props.store.getState().data.str}</span><br/> */}
        <span>{this.props.str}</span><br/>
        {/* <StrAddButton store={this.props.store}/> */}
        <StrAddButton AppProp="200"/>
      </div>
    );
  }
}
//mapStateToProps 함수는 첫 번째 파라미터로, 
//스토어의 state 변수를 두 번재 파라미터로 부모 컴포넌트에서 전달한 props 변수를 받는다
let mapStateToProps = (state, props) => {
  console.log('Props from index.js : ' + props.indexProp)
  return {
    str : state.data.str,
  };
};

//connect 함수의 첫번째 파라미터는 mapStateTopProps 함수로, 스토어의 state값에 접근할 수 있다.
App = connect(mapStateToProps, null)(App);

export default App;