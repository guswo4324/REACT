import React, { Component } from 'react';

class R007_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps Call :'+props.prop_value);
        return {tmp_state:props.prop_value};
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    //작성한 함수들 중 가장 마지막으로 실행
    //화면이 모두 그려진 후에 실행돼야하는 이벤트 처리, 초기화 등 가장 많이 활용되는 함수
    componentDidMount(){
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : '+this.state.tmp_state);
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
        )
    }
}

export default R007_LifecycleEx;