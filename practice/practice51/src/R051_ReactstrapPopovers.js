import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

//html요소 클릭 시 메세지 박스(tooltip과 거의 동일)

class R051_ReactstrapPopover extends Component {
    render() {
        return (
            <>
                {/* Button 태그의 id값을 
                UncontrolledPopover 태그의 target속성 값과 동일하게 해주면
                버튼 클릭 시 unControlledPopover 태그 영역이 나타남 */}
                <Button id="Popover_id" type="button">
                    Popover button
                </Button>

                {/* placement로 위치 바꿀수있다.(top, bottom left, right) */}
                <UncontrolledPopover placement="right" target="Popover_id">
                    <PopoverHeader>React 200</PopoverHeader>
                    <PopoverBody>Aenean id magna id risus</PopoverBody>
                </UncontrolledPopover>
            </>
        )
    }
}

export default R051_ReactstrapPopover;