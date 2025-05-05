import React, { Component } from 'react';
import cookie from 'react-cookies';

class R085_cookieSave extends Component {
    componentDidMount() {
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + 60)
        //react-cookies 패키지 save 함수는 세 가지 파라미터를 받는다.
        //첫 번째는 쿠기의 키(userid), 두 번째는 쿠키 값(react200), 세 번째는 쿠키 옵션이다
        cookie.save('userid', "react200"
            , { 
                //path는 쿠키 값을 저장하는 서버 경로
                //ex) path가 '/react'라면 localhost:3000/react에서만 확인가능
                //path가 '/'라면 모든 페이지에서 쿠키에 접근 가능
                path: '/',
                //expires : 쿠키의 유효시간(60분 동안 유지)
                expires,
                //secure : 웹 서버가 https로 통신하는 경우만 쿠키 저장
                //secure: true,
                //httpOnly : document.cookie라는 js코드로 쿠키에 비정상적으로 접속하는 것을 막는 옵션
                //httpOnly: true
            }
        );
    }

    render() {
        return (
            <><h3>react-cookies Save</h3></>
        )
    }
}

export default R085_cookieSave;