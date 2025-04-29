import React, { Component } from 'react';

//웹에서는 클라이언트와 서버가 http 프로토콜을 통해 요청과 응답을 주고받는다
//http에서 GET과 POST를 가장 많이 사용한다
//GET은 데이터를 조회해 가져와 사용하는것이다

//GET 방식은 http://example.com?a=1&b=2와 같이 url?뒤에 파라미터명=값 형태로 필요한 데이터를 전달
//주로 데이터 조회나 검색 기능

class R059_FetchGet extends Component {
    componentDidMount = async () => {
        //response라는 변수는 json형태이기 때문에 json() 함수로 사용할 수 있도록 변환해 
        //body라는 변수에 할당 이때 fetch 함수의 비동기적 특징 때문에 
        //const response = await fetch('http://date.jsontest.com/'); 보다
        //const body = await response.json(); 먼저 실행될 수 있어서 에러가 발생할 수 있다.

        //이를 해결할 수 있는 것이 async와 await 문법
        //비동기 함수를 실행하는 함수에 async를 추가하고 
        //동기적으로 처리돼야하는 함수 구문 앞에 await를 추가
        const response = await fetch('http://date.jsontest.com/');
        const body = await response.json();
        alert(body.date)
    }

    render() {
        return (
            <h1>fetch get</h1>
        )
    }
}

export default R059_FetchGet;