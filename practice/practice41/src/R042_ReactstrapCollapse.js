import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

//Collapse 패키지는 특정 영역을 펼치고 숨기는 기능을 제공
//버튼 이벤트로 펼치고 숨기는 기능 제어 가능
//상단부터 점차적으로 펼쳐지고 하단부터 숨겨지는 함수 show(), hide()

class R042_ReactstrapCollapse extends Component {
    render() {
        return (
            <div>
                <Button color="warning" id="toggle">
                    펼치기/접기
                </Button>
                <UncontrolledCollapse toggle="#toggle">
                    <Card>
                        <CardBody>
                            REACT 200
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        )
    }
}

export default R042_ReactstrapCollapse;