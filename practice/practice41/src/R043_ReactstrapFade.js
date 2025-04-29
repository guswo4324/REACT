import React, { Component } from 'react';
import { Button, Fade } from 'reactstrap';

//서서히 나타내고 숨기는 기능 제공
//기능을 버튼이벤트로 제어 가능

class R043_ReactstrapFade extends Component {
    constructor(props){
        super(props);
        this.state = { fadeInOut: true}
    }

    toggle = (e) => {
        this.setState({ fadeInOut: !this.state.fadeInOut })
    }

    render() {
        return (
            <div>
                <Button color="success" onClick={this.toggle}>Fade In/Out</Button>
                <Fade in={this.state.fadeInOut} tag="h1">
                    짱구
                </Fade>
            </div>
        )
    }
}

export default R043_ReactstrapFade;