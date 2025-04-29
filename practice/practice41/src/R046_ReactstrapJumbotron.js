import React, { Component } from 'react';
import { Jumbotron, Button} from 'reactstrap';

class R046_ReactstrapJumbotron extends Component {
    render() {
        return (
            <>
            {/* jumbotron태그로 하위 태그들을 묶어주면 넓은 영역을 차지하는 div태그가 생성
            jumbotron태그에 배경색, 배경이미지 등 추가 속성 적용 가능 */}
                <Jumbotron style={{backgroundColor: "#D38C7C"}}>
                    <h1 className="display-4">REACT 200</h1>
                    <p className="h4">Contrary to popular belief,
                    I want to be good at REACT</p>
                    <hr className="my-2" />
                    <p>There are mnay people that are skillfull developer</p>
                    <p ClassName="lead">
                        <Button color="danger">Go Detail</Button>
                    </p>
                </Jumbotron>
            </>
        )
    }
}

export default R046_ReactstrapJumbotron;