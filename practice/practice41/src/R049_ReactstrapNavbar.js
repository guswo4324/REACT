import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

//웹사이트의 내부 페이지들로 쉽게 이동할 수 있도록 메뉴리스트와 링크를 제공

class R049_ReactstrapNavbar extends Component {
    constructor(props) {
        super(props);
        // Navbar 리스트의 표시상태를 state변수로 선언하고 초기값으로 미표시(false) 할당
        this.state = { collapsed: false }
    }

    toggle = () => {
        this.setState({collapsed: !this.state.collapsed})
    }

    render() {
        return (
            <>  
                <Navbar color="faded" light>
                    {/* NavbarBrand 태그는 네비게이션에서 무조건 표시되는 영역 */}
                    <NavbarBrand href="/" className="mr-auto">Navbar</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="mr-2" />
                    <Collapse isOpen={this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="#">react</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com">200</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        )
    }
}

export default R049_ReactstrapNavbar;