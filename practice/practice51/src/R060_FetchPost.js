import React, { Component } from 'react';

//GET이 데이터를 조회해 가져와 사용하는 용도로 사용한다면
//POST는 서버의 상태나 데이터를 변경하는 등의 수행 작업에 사용

class R060_FetchPost extends Component {
    //GET 방식
    // componentDidMount = async () => {
    //     const response = await fetch('http://date.jsontest.com/');
    //     const body = await response.json();
    //     alert(body.date)
    // }

    //POST 방식(두번째 파라미터에 post 호출에 대한 정보 추가)
    componentDidMount = async () => {
        const response = await fetch('http://date.jsontest.com/', {
            method: 'POST',
            //어떤 형태의 데이터를 사용할지 지정
            //json형태의 데이터를 사용하기위해 (Content-Type변수 사용해서 application/json 할당)
            headers: {
                'Content-Type': 'application/json',
            },
            //호출한 url에서는 body의 데이터를 사용하지 않아서 어떤 형식으로 사용하는지만 확인
            body: { a:"react", b:200 },
        });
        const body = await response.json();
        alert(body.date)
    }

    render() {
        return (
            <h1>fetch post</h1>
        )
    }
}

export default R060_FetchPost;