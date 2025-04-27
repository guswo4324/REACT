import React, { Component } from 'react';

class R019_PropsBoolean extends Component {
    render() {
        let {BooleanTrueFalse} = this.props

        return (
            <div style={{padding: "10px"}}>
                {/* 변수가 ture이면 2, false이면 1 */}
                {BooleanTrueFalse ? '2. ' : '1. '}
                {/* 값이 없을 경우 기본값으로 ture가 화면에 출력
                boolean 변수는 직접 화면에 출력할 수 없으므로 출력을 하기 위해 
                toString() 함수를 사용해 문자열로 변환
                 */}
                {BooleanTrueFalse.toString()}
            </div>
        )

    }
}

export default R019_PropsBoolean;