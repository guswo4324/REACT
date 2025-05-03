import React, { Component } from 'react';
import { add } from './actions';

//props에 스토어를 담아 하위 컴포넌트로 전달하면, 
//전달받은 컴포넌트에서 스토어에 접근할 수 있다
//컴포넌트에서 dispatch 함수를 사용하면 스토어 데이터를 변경할 수 있다.

class StrAddButton extends Component {
    render() {
        return (
            <input value='Add200' type="button" onClick={this.addString}/>
        )
    }

    //dispatch 함수를 통해 add함수(actions 폴더의 index.js)의 반환 값을 스토어에 전달한다
    //이때 add함수의 type 값을 리듀서(reducers 폴더의 Index.js)에서 참고해 스토어 데이터를 변경
    //결론적으로 dispatch 함수는 리듀서에 액션을 전달하고
    //리듀선에서는 액션에 작성된 작업 내용을 읽어 스토어 데이터를 변경
    addString = () => {
        this.props.store.dispatch(add());
    }
}

export default StrAddButton;