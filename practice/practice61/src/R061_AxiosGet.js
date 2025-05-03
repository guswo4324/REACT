import React, { Component } from 'react';
import axios from "axios";

//axios도 fetch와 마찬가지로 비동기 통신 지원

class R061_AxiosGet extends Component {
    componentDidMount() {
        //axios.get('호출 url') 문법으로  get 방식의 http 호출
        //url호출되면 then 함수가 실행 이때 호출 결과로  response가 반환
        //response와 호출된 변수명 사이에 data를 붙이면 변수를 사용할 수 있다.
        axios.get('http://date.jsontest.com/')
        .then(response => {alert(response.data.date)})
    }

    render() {
        return (
            <h1>axios get</h1>
        )
    }
}

export default R061_AxiosGet;