import React, { Component } from 'react';

//컴포넌트 단위로 element를 return할 때 하나의 <html>태그로 전체를 감싸지 않으면 에러가 발생
//이때 <Fragments>태그로 감싸면 불필요한 <html> 태그를 추가하지 않고 사용할 수 있다.

class R032_Fragments extends Component {
    render() {
        return (
            //<React.Fragment> 감싸져 있지 않으면 에러
            <React.Fragment>
                <p>P TAG</p>
                <span>SPAN TAG</span>
            </React.Fragment>
        )
    }
}

export default R032_Fragments;