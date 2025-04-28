import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

//Breadcrumbs 패키지는 페이지 위치 경로를 지정한 웹 네이게잇녀 역한
//웹사이트 상단에 표시되는 메뉴 리스트에 사용, 특정 메뉴를 선택하면 해당하는 페이지 위치로 이동시킴

class R036_ReactstrapBreadcrumbs extends Component {
    render() {
        return (
            <div id="top">
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="#top">Go_top</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#bottom">Go_bottom</BreadcrumbItem>
                </Breadcrumb>
                <div id="bottom" style={{marginTop:"1000px"}}>
                    <span>bottom</span>
                </div>
            </div>
        )
    }
}

export default R036_ReactstrapBreadcrumbs;