import React, { Component } from 'react';

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>
// }

//클래스형 컴포넌트
class Welcome extends Component {
    render() {
        return <h1>Welcome, {this.props.name}</h1>
    }
}

export default Welcome;