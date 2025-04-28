import React, { Component } from 'react';
//기본알림 Alert, 알림삭제 UncontrolledAlert 나열
import { Alert, UncontrolledAlert } from 'reactstrap';

//bootstrap은 프론트엔드 디자인을 쉽게 구현할 수 있도록 구도와주는 hjtml, css, js, 프레임워크
//bootstrap을 react에서 사용할 수 있도록 패키지로 만든것이 reactstrap이다.
//Alerts 패키지는 알림영역에 대한 기능을 제공

class R034_ReactstrapAlerts extends Component {
    render() {

        return (
            <div>
                <Alert color="light">
                    Simple Alert [color : light]
                </Alert>
                <UncontrolledAlert color="warning">
                    UncontrolledAlert [color : warning]
                </UncontrolledAlert>
            </div>
        )
    }
}

export default R034_ReactstrapAlerts;