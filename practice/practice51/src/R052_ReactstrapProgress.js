import React, { Component } from 'react';
import { Progress } from 'reactstrap';

//Progress 패키지는 전체 작업에 대한 현재 진행 상태를 표현(진행 바)
//내부에 문자열, 색상 적용 가능

class R051_ReactstrapPopover extends Component {
    constructor(props) {
        super(props);
        this.state = { progress : 0}
    }

    componentDidMount() { this.progress() }

    //componentDidMount() 함수가 실행되면서 progress() 함수 호출 
    //setTimeout 0.1초마다 실행
    //진행상태 값 1씩 증가시켜 setState()함수로 변경
    progress =()=> {
        if(this.state.progress !== 100) {
            setTimeout(function() {
                //setState()함수가 실행될 때마다 render()함수가 실행 1씩 증가
                this.setState({progress: this.state.progress+1});
                this.progress();
            }.bind(this), 100);
        }
    }

    render() {
        return (
            <>
                <Progress color="info" value={this.state.progress}>
                    {this.state.progress}%</Progress><br/>
                <Progress multi>
                    <Progress bar color="warning" value="25">25%</Progress>
                    <Progress bar color="success" value="35">Wow!</Progress>
                    <Progress bar value="15">Meh</Progress>
                    <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
                </Progress>
            </>
        )
    }
}

export default R051_ReactstrapPopover;