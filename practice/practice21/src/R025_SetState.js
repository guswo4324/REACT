import React, { Component } from 'react';

//this.state.변수명=value와 같이 state를 직접 변경하면 render() 함수를 호출하지 않으므로
//화면에 보이는 state 값은 바뀌기 전 상태로 남게 된다.
//setState() 함수로 state를 변경해야 render() 함수를 호출해 변경된 값을 화면에 보여줄 수 있다.
class R025_SetState extends Component {
    constructor (props){
        super(props);
        this.state = {
            StateString: 'react',
        }
    }

    StateChange = (flag) => {
        // eslint-disable-next-line react/no-direct-mutation-state 
        if(flag === 'direct') this.state.StateString = '리액트';
        if(flag === 'setstate') this.setState({StateString : '리액트'});
    }

    render() {
        return (
            <div style={{padding: "0px"}}>
            {/* this.state.변수명=value 문법으로 state를 직접 변경한다.
            이때 StateString 값은 '리액트'로 변경되지만 render() 함수를 호출하지 않으므로
            화면에는 이전 값인 this.state={StateString: 'react'} -> 'react'로 표시 */}
            <button onClick={(e) => this.StateChange('direct', e)}>
            state 직접 변경</button>

            {/* setState() 함수로 state를 변경한다.
            이때 StateString 값은 '리액트로'로 변경되고 render() 함수를 다시 호출해 
            화면에는 변경된 값인 this.setState({StateString : '리액트'} '리액트'로 표시 */}
            <button onClick={(e) => this.StateChange('setstate', e)}>
            setState로 변경</button><br/>
            [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R025_SetState;