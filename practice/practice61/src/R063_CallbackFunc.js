import React, { Component } from 'react';

//자바스크립트는 비동기적으로 동작한다 
//그래서 먼저 실행된 작업이 끝나지 않았더라도
//다음작업이 시작될 수 있다.
//콜백함수를 이용하면 특정코드에 순서를 정해 원하는 시점에 실행할 수 있다.

class R063_CallbackFunc extends Component{
    componentDidMount() {
        //logPrint라는 함수를 호출하는데 파라미터로 1과 함수를 전달
        this.logPrint(1, function(return1){
            console.log("return1 : "+return1);
            //this.logPrint(1, function(return1) 실행에서 반환된 return 값(2)을 파라미터로 전달
            this.logPrint(return1, function(return2){
                console.log("return2 : "+return2);
            })
            //11줄 this와 14줄 this는 다르다
            //동일하게 사용하기위해서 .bind(this)를 함수에 붙여준다
        }.bind(this))
    }

    logPrint(param, callback) {
        console.log("logPrint parm : "+param);
        //this.logPrint(1, function(return1) 이 문장때문에
        //logPrint함수는 전달받은 파라미터 param에 자기자신 1을 더해 2를 할당
        //2가 된 param 변수를 callback함수에 다시 파라미터로 넣고 함수 실행
        param += param
        callback(param);
    }

    render() {
        return (
            <h1>Callback Function</h1>
        )
    }
}

export default R063_CallbackFunc;