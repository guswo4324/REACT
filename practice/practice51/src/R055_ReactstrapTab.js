import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

//Tab 패키지는 사용자 동작에 따라 특정 영역에 다른 내용을 표시할 때 사용
//클릭 이벤트에 따라 원하는 영역을 표시해야할 경우 간편하게 사용 가능

class R055_ReactstrapTab extends Component {
    constructor (props) {
        super(props);
        //표시할 tab 영역의 id를 상태 변수로 선언
        //초기값으로 첫번째 탭의 tabid인 React로 할당
        this.state = { TabState:'React' }
    }

    //파라미터로 넘어온 값(tabnum)이 현재 tabid의 상태(TabState)값과 다르다면
    //변경된 값으로 상태(TabState)값을 수정
    toggle = (tabnum) => {
        if(this.state.TabState !== tabnum) this.setState({TabState:tabnum});
    }

    render() {
        return (
            <>
                <Nav tabs>
                    <NavItem>
                        {/* 클릭하면 toggle함수 호출 후 
                        파라미터로 표시할 tab 영역의 tabid값을 넘긴다 */}
                        <NavLink onClick={() => { this.toggle('React'); }}>First Tab</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => { this.toggle('200'); }}>Second Tab</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.TabState}>
                    <TabPane tabId="React"><h3>React</h3></TabPane>
                    <TabPane tabId="200"><h3>200</h3></TabPane>
                </TabContent>
            </>
        )
    }
}

export default R055_ReactstrapTab;