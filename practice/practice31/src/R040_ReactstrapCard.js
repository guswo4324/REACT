import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
    
//Card 패키지는 이미지 제목, 부제목, 내용, 버튼 등을 한 세트로 묶는다
//Card 단위로 리스트를 만들어 반복해서 출력하면 정형화된 콘텐츠 목록을 만들 수 있다.

class R040_ReactstrapCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardImg top height="200px" src="https://han.gl/rxRfr" alt="Card image" />
                    <CardBody>
                        <CardTitle>Card 제목</CardTitle>
                        <CardSubtitle>Card 부제목</CardSubtitle>
                        <CardText>Card 내용 카드왕유희왕</CardText>
                        {/* <button> 버튼</button> */}
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default R040_ReactstrapCard;