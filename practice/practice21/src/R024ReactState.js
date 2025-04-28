import React, { Component } from 'react';

//Props를 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 사용했다면
//state는 하나의 컴포넌트 안에서 전역 변수처럼 사용한다
class R024_ReactState extends Component {
    constructor (props) {
        super(props);
        this.state = {
            StateString: this.props.reactString,
            stateNumber: 200,
        }
    }

    render() {
        return (
            <div style={{padding: "0px"}}>
                {this.state.StateString}{this.state.StateNumber}
            </div>
        )
    }
}

export default R024_ReactState;

