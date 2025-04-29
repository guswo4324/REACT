import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class R048_ReactstrapModal extends Component {
    constructor(props) {
        super(props);
        // Modal 팝업의 표시 상태를 state 변수로 선언, 초기값으로 미표시(false)를 할당
        this.state = { modal: false }
    }

    toggle = () => {
        this.setState({modal: !this.state.modal})
    }

    render() {
        return (
            <>
                {/* 버튼 클릭시 this.setState({modal: !this.state.modal}) 때문에 상태를 반대로 변경 */}
                <Button color="warning" onClick={this.toggle}>Modal 버튼</Button>
                {/* 팝업창으로 표시할 영역을 Modal태그로 묶는다
                toggle = () => 함수에 따라 isOpen이면 표시, false이면 미표시
                fade={true} 이면 서서히 표시  */}
                <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
                    {/* 팝업 헤더 영역 */}
                    <ModalHeader toggle={this.toggle}>Modal Header</ModalHeader>
                    {/* 팝업 바디 영역 */}
                    <ModalBody>
                        The generated Lorem Ipsum is very good.
                    </ModalBody>
                    {/* 팝업 푸터 영역 */}
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>확인</Button>
                        <Button color="secondary" onClick={this.toggle}>닫기</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default R048_ReactstrapModal;