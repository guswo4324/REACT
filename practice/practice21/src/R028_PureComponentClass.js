import React, { PureComponent } from 'react';

//PureComponent에서는 비교 대상의 값을 비교해 동일하지 않으면 변경이 발생했다고 본다.
//불필요한 render() 함수 실행을 줄이면 페이지 성능을 향상시킬 수 있다.

class R028_PureComponentClass extends PureComponent{
    constructor (props) {
        super(props);
        this.state = {
            StateString: 'react',
            StateArrayObj: ['react', { react: '200'}]
        }
    }

    buttonClick = (type) => {
        //StateString 값이 동일해서 render() 함수를 실행하지 않음
        if(type === 'String'){
            this.setState({ StateString: 'react' });
        }else{
        //버튼 클릭하면 컴포넌트는 state 값이 변경됐다고 간주 -> render() 함수 실행
        //PureComponent에서는 기본적으로 변수값만 비교하지만 예외적으로 객체에 대해서는 참조값을 비교한다.
        //{react: '200' }의 데이터는 같지만 참조 값이 다름
            this.setState({ StateArrayObj: ['react', { react: '200' }] });
        }
    }

    render() {
        console.log('render() 실행')
        return (
            <div>
                <button onClick={e => this.butoonClick('String')}> 문자열 변경</button>
                <button onClick={e => this.buttonClick('ArrayObject')}>객체 배열 변경</button>
            </div>
        )
    }
}

export default R028_PureComponentClass;