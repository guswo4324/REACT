import React, { Component } from 'react';

//this.state.변수명=value와 같이 직접 state를 변경하면 
// render() 함수를 호출하지 않으므로 
//화면에 보이는 state 값은 바뀌기 전 상태로 남게 된다.

//이때 forceUpdate() 함수로 화면을 새로 고침하면, 
//render() 함수를 호출해 변경된 값을 화면에 보여줄 수 있다.

class R026_ForceUpdate extends Component {
    constructor (props) {
        super(props);
        this.state = {
            //constructor()함수가 실행되고 render() 함수에서 화면을 그리기 때문에
            //{this.state.StateString}은 react로 표시
            StateString: 'react',
        }
    }

    StateChange = () => {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.StateString = '리액트';
        //강제로 새로고침 -> render() 함수 다시 실행시켜 화면에 변경된 state 값을 표시할 수 있다.
        this.forceUpdate();
    }

    render() {
        return (
            <div style={{padding: "0px"}}>
                {/* state 직접 변경 버튼을 눌렀을 때 this.state.변수명=value 문법으로
                state를 직접 변경한다. 이때 StateString 값은 '리액트'로 변경 */}
                <button onClick={(e) => this.StateChange(e)}>
                    State 직접변경</button><br/>
                    [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R026_ForceUpdate;