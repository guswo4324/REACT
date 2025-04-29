import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

//Spinner 패키지는 어떤 작업이 진행되고 있음을 표시, 움직이는 원형태의 디자인을 제공
//색상, 너비, 높이 값 지정 가능

class R053_ReactstrapSpinner extends Component {
    render() {
        return (
            <>  
                <Spinner color="secondary" />
                <Spinner color="success" />
                <Spinner type="grow" color="dark" />
                <Spinner type="grow" color="info" />
                <Spinner size="sm" color="primary" />
                <Spinner style={{ width: '10rem', height: '0.5rem' }} color="dark"/><br/>
                <Spinner style={{ width: '10rem', height: '10rem' }} color="secondary" />
                <Spinner style={{ width: '3rem', heigth: '10rem' }} type="grow" color="primary" />
            </>
        )
    }
}

export default R053_ReactstrapSpinner;