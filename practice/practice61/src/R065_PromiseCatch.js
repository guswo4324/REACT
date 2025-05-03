import React, { Component } from 'react';

//Promise 상태가 대기, 이행, 거부 중 거부 상태가 됐을 때 catch 함수를 실행
//대기상태의 Promise에 에러가 발생해 이행으로 상태 변화를 하지 못하는 경우

class R065_PromiseCatch extends Component {
    componentDidMount() {
        //Promise라는 객체를 생성해 promise를 사용
        //파라미터로 2개의 함수를 받으면, 
        //첫번째 함수(resolve)는 이행함수, 두번째 함수(reject)는 거부함수로 사용
        new Promise((resolve, reject) => {
            //거부 함수 실행
            reject(Error("ERROR Info"));
        })
        //거부 함수가 실행되면 이행상태가 되지 못하기 때문에 then함수는 실행 X
        .then(result => console.log("then "+result))
        //promise 상태가 거부로 변하면서 catch 함수가 실행
        //reject함수에서 ERROR Info로 거부했던 에러 정보 출력
        .catch(result => console.log("catch : "+result));
    }

    render() {
        return (
            <h1>Promise Catch</h1>
        );
    }
}

export default R065_PromiseCatch;