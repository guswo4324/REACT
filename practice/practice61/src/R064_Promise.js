import React, { Component } from 'react';

//promise는 콜백 함수와 같이 비동기적으로 동작하는 코드를 동기적으로 구현할 때 사용(순서지정)
//promise를 사용하면 콜백 함수와 달리, 코드 가독성을 높일 수 있고
//예외 처리도 쉽게 할 수 있다.

//promise는 대기, 이행, 거부의 개념이 있다.
//대기 상태에서 이행 상태로 변할때 then() 함수안의 코드가 실행
class R064_Promise extends Component {
    componentDidMount(){
        //Promise라는 객체를 생성해 promise를 사용
        //파라미터로 하나의 함수(resolve)만 받을 경우, 이행 함수로 사용
        //timeout 함수를 실행해 1.5초 후에 resolve함수가 실행 
        //=> 이때 promise는 이행상태 => .then(function(result) 실행
        new Promise(resolve => {
            setTimeout(function() {
                resolve('react');
            },1500);
        })
        //resolve함수에서 파라미터로 전달된 결과값(react)을 result라는 파라미터로 받아 사용
        //result 변수에 200을 붙여 반환, 그 순간 대기하고 있던 
        //.then(result => 실행
        .then(function(result) {
            console.log(result);
            return result + 200;
        })
        //.then(function(result) {랑 .then(result => {랑 같은 함수
        .then(result => {
            console.log(result);
        })
    }

    render() {
        return (
            <h1>Promise</h1>
        )
    }
}

export default R064_Promise;