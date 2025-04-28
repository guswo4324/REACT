import React, { Component } from 'react';

//class형 컴포넌트에는 Component와 PureComponent가 있다. 
//두 컴포넌트 모두 props와 state의 변경에 따라 render() 함수를 호출하는데 변경에 대한 기준이 다르다.
//Component에서는 비교대상이 완전히 동일하지 않으면 변경이 발생했다고 본다

class R027_ComponentClass extends Component{
    constructor (props) {
        super(props);
        this.state = {
            //state에 문자열 변수와 객체가 포함된 배열 변수를 선언하고 초기값 저장
            StateString: 'react',
            StateArrayObj: ['react', { react: '200' }]
        }
    }

    buttonClick = (type) => {
        if(type === 'String'){
            /* [문자열 변경]버튼을 클릭하면 
            StateString: 'react' 문자열 변수와 동일한 state값을 setState() 함수로 선언 및 초기화 
            이때 컴포넌트는 state 값이 변경됐다고 간주해 render() 함수 실행 */
            this.setState({ StateString: 'react' });
        }else{
            /* [객체 배열 변경] 버튼을 클릭하면, 
            배열 변수와 동일한 state값을 setState() 함수로 선언 및 초기화
            이때 컴포넌트는 state값이 변경됐다고 간주해 render() 함수 실행 */
            this.setState({ StateArrayObj: ['react', { react: '200' }] });
        }
    }

    render() {
        console.log('render() 실행')
        return (
            <div>
                <button onClick={e => this.buttonClick('String')}> 
                문자열 변경</button>
                <button onClick={e => this.buttonClick('ArrayObject')}>
                객체배열 변경</button>
            </div>
        )
    }
}

export default R027_ComponentClass;