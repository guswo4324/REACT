import React, { Component } from 'react';
import { Badge } from 'reactstrap';
//import { Badge, Button } from 'reactstrap'; 

//Badge 패키지는 부모 요소에 추가로 특정 문자열이나 숫자 표시할때 사용

class R035_ReactstrapBadges extends Component {
    render() {
        return (
            <div>
                {/* 텍스트 옆에 배지 추가 */}
                <h1>PRODUCT NAME <Badge color="secondary">hit</Badge></h1>
                {/* 버튼 안에 배지 추가 */}
                <button color="light" outline>
                    Accessor <Badge color="dark">4</Badge>
                </button>
                {/* pill속성을 추가하면 테두리를 둥글게 */}
                <Badge color="danger" pill>pill</Badge>
                {/* 링크 추가 */}
                <Badge href="https://www.naver.com" color="light">GoLink</Badge>
            </div>
        )
    }
}

export default R035_ReactstrapBadges;