import React, { Component } from 'react';
import { shallowEqualArrays } from 'shallow-equal';

//shallow-equal 패키지는 PureComponent 에서 state값의 변경을 비교하는 것과 동일한 기능을 하는 함수 제공
//shallowEqualArrays() 함수를 사용하면 문자열과 배열은 값만 비교한다.
//객체는 PureComponent와 동일하게 참조 값을 비교한다.

class R029_ShallowEqual extends Component {
    constructor (props) {
        super(props);
        this.state = { StateString: 'react'}
    }
    //shouldComponentUpdate() 함수는 변경된 props와 state 값을 파라미터로 받을 수 있고
    //반환 값이 true일 때 render() 함수 실행
    //this.setState({StateString : 'react'}) state값이 변경됐는데
    //원래 Component 클래스에서는 변경으로 인식해 render() 함수를 실행시킨다.
    //그런데 shouldComponentUpdate() 함수에서 shallowEqualArrays() 함수로 값만 비교하기 때문에
    //false를 반환하고 render() 함수를 실행하지 않음
    shouldComponentUpdate(nextProps, nextState){
        return !shallowEqualArrays(this.state, nextState)
    }

    componentDidMount() {
        const object = {react : '200'};
        const Array1 = ['리액트', object];
        //react: '200'은 값은 같지만, 서로 다른 참조 값을 갖는 다른 객체
        //shallowEqualArrays() 함수 비교결과 false 반환
        const Array2 = ['리액트', object];
        const Array3 = ['리액트', {react : '200'}];

        console.log('shallowEqualArrays(Array1, Array2) : '
        + shallowEqualArrays(Array1, Array2));
        
        console.log('shallowEqualArrays(Array2, Array3) : '
        + shallowEqualArrays(Array2, Array3));

        this.setState({StateString : 'react'})
    }

    render() {
        console.log('render() 실행')
        return (
            <div>
                <button onClick={e => this.buttonClick('String')}>문자열 변경</button>
                <button onClick={e => this.buttonClick('ArrayObject')}>객체 배열 변경</button>
            </div>
        )
    }
}

export default R029_ShallowEqual;