import React, { Component } from 'react';
import datatype from 'prop-types';
//props값을 객체로 하위 컴포넌트에 전달할 경우, 자료형을 object로 선언
//하지만 객체 형태(객체 내부 변수들)의 자료형을 선언할 때는
//'shape'라는 유형을 사용


class R020_PropsObjVal extends Component {
    render() {
        let {
            ObjectJson
        } = this.props
        return (
            <div style={{padding: "0px"}}>
                {JSON.stringify(ObjectJson)}
            </div>
        )
    }
}

//shape 유형을 사용해 객체 변수 ObjectJson의 내부 key값(react, twohundred)에 대해 자료형을 선언(string, number 등)
//twohundred가 문자열("200")로 전달됐지만 자료형이 number로 선언됐다.
//(App.js에서)<PropsObjVal ObjectJson={{react:"리액트", twohundred:"200"}}/>
//자료형이 일치하지 않아 경고 메시지 발생
R020_PropsObjVal.propTypes = {
    ObjectJson: datatype.shape({
        react: datatype.string,
        twohundred: datatype.number
    })
}

export default R020_PropsObjVal;