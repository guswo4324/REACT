//component 의 생성, 변경, 소멸의 과정 중 
//shouldComponentUpdate() 함수는 component의 변경 과정에 속함

import React, { Component } from 'react';

class R008_LifecycleEx extends Component {
    static getDerivedStateFromPorps(props, state){
        console.log('2. getDerivedStateFromProps Call :'+props.prop_value);
        return {tmp_state:props.prop_value};
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    //생성
    componentDidMount() {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : '+this.state.tmp_state);
        this.setState({tmp_state2 : true});
    }
    //변경 state2 : true에서 state의 변경이 발생 -> 변경 단계의 생명주기 함수 실행
    //shouldComponentUpdate()는 boolean 유형의 데이터를 반환하는데
    //return 값이 true일 경우 render() 함수를 한번 더 호출
    shouldComponentUpdate(props, state) {
        console.log('6. shouldComponentUpdate Call / tmp_state2 = '+state.tmp_state2);
        return state.tmp_state2;
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS shouldComponentUpdate FUNCTION]</h2>
        )
    }
}

export default R008_LifecycleEx;

//shouldComponentUpdate() 함수의 반환 값에 따라 render() 함수를 재실행할 수 있따는 점을 이용하면
//props나 state 변수가 변경될 때 화면을 다시 그리며 제어할 수 있다