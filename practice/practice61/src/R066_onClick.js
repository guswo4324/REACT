import React, { Component } from 'react';

//onClick 이벤트는 특정 element가 클릭됐을 때 정의된 함수를  호출하는 방식으로 사용

class R066_onClick extends Component {
    buttonClick = (param) => {
        //param변수가 문자열이 아니라면 Click a라는 문자열을 param변수에 할당 
        if(typeof param != 'string') param = "Click a"
        console.log('param : ' + param);
    }

    render() {
        return (
            <>
                <button onClick={(e => this.buttonClick("Click button"))}>
                Click button</button>
                <div onClick={e => this.buttonClick("Click div")}>Click div</div>
                <a href="https://www.naver.com" onClick={this.buttonClick}>Click a</a>
            </>
        )
    }
}

export default R066_onClick;