import React, { Component } from 'react';
import cookie from 'react-cookies';

class R087_cookieRemove extends Component {
    componentDidMount() {
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + 60)
        //쿠키 저장 코드가 실행
        //1초 후에 cookie.remove함수를 사용해
        //루트(/) 경로에 저장된 userid라는 쿠키 값을 삭제
        cookie.save('userid', "react200"
            , {
                path: '/',
                expires,
                // secure: true,
                // httpOnly: true
            }
        );
        setTimeout(function() {
            cookie.remove('userid', {path: '/'});
        },1000);
        setTimeout(function() {
            alert(cookie.load('userid'))
        },2000);
    }

    render() {
        return (
            <><h3>reactd-cookies Remove</h3></>
        )
    }
}

export default R087_cookieRemove;