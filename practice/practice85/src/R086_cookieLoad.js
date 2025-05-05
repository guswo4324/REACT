import React, { Component } from 'react';
import cookie from 'react-cookies';

class R086_cookieLoad extends Component {
    componentDidMount() {
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + 60)
        cookie.save('userid', "reacdt200"
            , {
                path: '/',
                expires,
                // secure: true
                // httpOnly: true
            }
        );
        //setTimeout함수를 사용해 1초 후에 alert를 띄움
        //쿠키가 저장되기까지 충분한 시간을 두기 위해
        setTimeout(function() {
            //cookie.load(key) 형태로 웹브라우저에 저장된 쿠키 중 
            //userid라는 key를 가진 쿠키의 value를 가져온다
            //cookie.save('userid', "react" 
            //저장된 쿠키를 1초 후에 가져와 alert함수로 표시
            alert(cookie.load('userid'))
        },1000);
    }

    render() {
        return (
            <><h3>react-cookies Load</h3></>
        )
    }
}

export default R086_cookieLoad;