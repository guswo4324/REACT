import React, { Component } from 'react';

//props의 기본값은 부모 컴포넌트에서 값이 넘어 오지 않았을 때 사용한다.
//defaultProps라는 문법을 사용한다.
class R022_PropsDefault extends Component {
    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props
        return (
            <div style={{padding: "0px"}}>
                {/* ReactString 변수값은 비어있기 때문에 리액트 값이 화면에 표시
                ReactNumber 변수값은 상위 컴포넌트에서 전달됐기때문에 400은 값이 무시됨 */}
                {ReactString}{ReactNumber}
            </div>
        )
    }
}

//ReactString과 REactNumber 변수에 각각 기본값 저장
R022_PropsDefault.defaultProps = {
    ReactString: "리액트",
    ReactNumber: 400
}

export default R022_PropsDefault;