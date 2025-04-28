import React, { Component } from 'react'
import datatype from 'prop-types';

//porps의 자료형을 선언할 때 prop-types를 사용
//자료형 설정 대신 isRequired를 조건으로 추가하면, 변수값이 없는 경우 경고 메시지가 발생할 수 있다.
class R021_PropsRequired extends Component {
    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props
        return (
            <div style={{padding: "0px"}}>
                {/* ReactString 변수값은 비어있기 때문에 
                상위 컴포넌트에서 전달받은 REactNumber 변수값만 화면에 출력 */}
                {ReactString}{ReactNumber}
            </div>
        )
    }
}
//ReactString이라는 props값을 필수 값으로 지정
//하지만 상위 컴포넌트에서 ReactString이라는 변수를 전달하지 않았기 때문에 경고 메시지 발생
R021_PropsRequired.propTypes = {
    ReactString: datatype.isRequired,
}

export default R021_PropsRequired;