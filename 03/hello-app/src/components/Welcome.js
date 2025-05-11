import React, { Component } from 'react';

//함수형 컴포넌트
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>
// }

//함수형 컴포넌트나 클래스형 컴포넌트에서 props를 실제로 이용하려면
//App.js에서 import해서         
// 
//<div>
//   <Welcome name="Alice" />
//</div>

//이런식으로 써야함
//출력결과 : Hello, Alice(함수형 컴포넌트) // Welcome, Alice(클래스형 컴포넌트)

//클래스형 컴포넌트
class Welcome extends Component {
    render() {
        return <h1>Welcome, {this.props.name}</h1>
    }
}

export default Welcome;