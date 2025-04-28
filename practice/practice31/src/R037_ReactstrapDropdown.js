import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMeun, DropdownItem } from 'reactstrap';

//Dropdown 패키지는 대표메뉴를 크릭하면 하위 메뉴리스트가 표시되는 기능
//이때 대표 메뉴를 누를 때마다 하위 메뉴 리스트를 번갈아가며 표시, 미표시를 해야한다.
//이를 위해서는 현재 하위 메뉴리스트 상태가 표시인지 미표시인지 대한 정보가 필요

class R037_ReactstrapDropdown extends Component {
    constructor (props) {
        super(props);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = (e) => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }
    
    render() {
        return (
            //isOpen 값이 ture이면 하위 메뉴가 표시, false이면 미표시, 초기값은 false로 저장
            //버튼 영역을 클릭하면 toggle함수가 실행, 
            //이때 하위 메뉴 표시상태 값을 반대로(true이면 false, false이면 true로)만들어준다
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret> 버튼 Dropdown</DropdownToggle>
                <DropdownMeun>
                    <DropdownItem header>헤더</DropdownItem>
                    {/* disabled 버튼 클릭해도 반응 X */}
                    <DropdownItem disabled>비활성화 버튼</DropdownItem>
                    {/* a 태글 ㅗ버튼을 감사면 버튼을 클릭했을 때 이동 */}
                    <a href="https://www.naver.com/">
                        <DropdownItem>네이버로 이동</DropdownItem>
                    </a>
                    <DropdownItem onClick={e => alert("Alert 버튼")}>
                    Alert 버튼</DropdownItem>
                </DropdownMeun>
            </ButtonDropdown>
        )
    }
}

export default R037_ReactstrapDropdown;