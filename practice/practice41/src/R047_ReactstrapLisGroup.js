import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

//List Group 패키지는 정돈된 스타일의 목록을 표시할 때 사용
//<ListGroup>과 <ListGroupItem> 태그는 html에서 목록을 만드는 태그인 <ul>, <li>로 변환된다
//<Button>과 링크(<a> 태그)에 별도의 태그를 추가하지 않고 속성 값으로 간편하게 사용 가능

class R047_ReactstrapListGroup extends Component {
    render() {
        return (
            <>
                {/* 리스트그룹 */}
                <ListGroup>
                    {/* 리스트목록 요소 추가 */}
                    <ListGroupItem color="danger" className="justify-content-between">Badge
                        <Badge pill>200</Badge>
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">Disable</ListGroupItem>
                    <ListGroupItem tag="a" href="https://www.naver.com">Link</ListGroupItem>
                    <ListGroupItem tag="button" 
                    action onClick={e => alert("button")}>Button</ListGroupItem>
                </ListGroup>
            </>
        )
    }
}

export default R047_ReactstrapListGroup;