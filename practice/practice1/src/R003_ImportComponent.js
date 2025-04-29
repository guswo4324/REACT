import React, { Component } from 'react';

//Component란, 특정 코드 뭉치를 다른 부분에 이식하거나 재사용하기 위해 사용하는 코드 블록 단위를 말한다
// component를 파일 단위로 작성한 후 필요한 위치에서 임포트해 사용할 수 있다.
class R003_ImportComponent extends Component {
    render() {
        return (
            <h2>[THIS IS IMPORTED COMPONENT]</h2>
        )
    }
}

export default R003_ImportComponent;