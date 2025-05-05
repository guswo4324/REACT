import React, { Component } from 'react';
import {connect} from 'react-redux';
import { add } from './actions';

//connect 함수의 두 번째 파라미터 mapDispatchToProps 함수로,
//dispatch 함수를 컴포넌트 함수에 바인딩 할 수 있따.
//즉 컴포넌트 함수가 실행되면 바인딩된 dispatch 함수가 실행된다

class StrAddButton extends Component {
    render() {
        return (
            //<input value='Add200' type="button" onCLick={this.addString}/>
            <input value='Add200' type="button" onCLick={this.props.addString}/>
        )
    }
    //기존의 addSTring 함수는  dispatch함수를 호출하기 위해 컴포넌트 내에 새로운 함수를 선언했다.
    //addString: () => dispatch(add())에서 두 함수를 바인딩했기 때문에 함수 선언은 불필요
    //addString = () => {
    //    this.props.store.dispatch(add());
    //}
}

//mapDispatchToProps 함수는 첫 번째 파라미터로 
//dispatch함수를 두 번째 파라미터로 부모 컴포넌트에서 전달한 props 변수를 받는다
let mapDispatchToProps = (dispatch, props) => {
    console.log('Props from App.js : ' + props.AppProp)
    return {
        //dispatch 함수를 컴포넌트 내 함수인 addString에 바인딩
        //addSTring 함수는 props에 할당
        addString : () => dispatch(add())
    };
};
//connect 함수의 두 번째 파라미터는 mapDispatchToProps 함수로,
//리듀서에 액션을 전달하는 함수인 dispatch를 인자로 받아 사용할 수 있다.
StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);

export default StrAddButton;