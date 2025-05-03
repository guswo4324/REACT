import React, { Component } from 'react';
import axios from "axios";

//axios로 post 방식의 호출을 하는 문법은 
//get 방식으로 호출했을 때와 거의 동일하다.
//다른 점은 post 함수의 파라미터로 json과 같은 형태의 데이터를 넣고
//http body에 담아 url을 호출할수있다

class R062_AxiosPost extends Component{
    componentDidMount() {
        //json데이터는 {key1 : value1, key2 : value2} 형태로 사용하고
        //http body에 담겨 전송된다
        axios.post('http://date.jsontest.com/', {
            a:"react", b:200
        })
        .then(response => {alert(response.data.date)})
    }

    render() {
        return (
            <h1>axios post</h1>
        )
    }
}

export default R062_AxiosPost;