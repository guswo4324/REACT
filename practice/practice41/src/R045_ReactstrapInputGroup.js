import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

class R045_ReactstrapInputGroup extends Component {
    render() {
        return (
            <>
            {/* <input> 태그와 고정 텍스트 표시 영역(@reactmail.com)을 묶어 사용한다
            <inputgroupaddon>태그의 addonType 속성값을 append로 하면 
            <input> 태그의 오른쪽에 표시하기 적합한 스타일이 적용 */}
            <InputGroup>
                <Input placeHolder="userid" />
                <InputGroupAddon addonType="append">
                    <InputGroupText>@reactmail.com</InputGroupText>
                </InputGroupAddon>
            </InputGroup>

            {/* <input> 태그와 버튼 영역을 묶어 사용한다
            <inputgroupaddon>태그의 addonType 속성값을 prepend로 하면 
            <input> 태그의 왼쪽에 표시하기 적합한 스타일이 적용 */}
            <InputGroup>
                <InputGroupAddon addonType="prepend"><Button>
                버튼</Button></InputGroupAddon>
                <Input />
            </InputGroup>
            </>
        )
    }
}

export default R045_ReactstrapInputGroup;