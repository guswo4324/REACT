import React, { Component } from 'react';

//Ref는 'reference'의 약자로 참조 라는 뜻
//react에서 element의 값을 얻거나 수정할 때 보통 javascript나 jquery를 사용한다.
//이때 id나 class와 같은 속성으로 element에 접근한다.
//Ref를 사용하면 element가 참조하는 변수에 접근해 변경하고 element를 제어할 수 있다

class R073_ReactRef extends Component {
    //input 박스에 focus 테투리를 굵게 처리
    constructor(props){
        super(props);
        //createRef 함수로 Ref변수 inputRef를 생성
        this.InputRef = React.createRef();
    } 

    RefFocus = (e) => {
        this.InputRef.current.focus();
    }

    JavascriptFocus() {
        document.getElementById('id').focus();
    }

    render() {
        return (
            <>  
                {/* element에 ref속성을 추가하고 Ref변수에 inputRef를 할당하도록 참조
                이때 참조에 대한 정보가 ref의 current라는 속성에 할당 */}
                <input id="id" type ="text" ref={this.InputRef}/>
                {/* inputRef.current에 접근해 focus이벤트 발생 */}
                <input type="button" value="Ref Focus" onClick={this.RefFocus}/>
                {/* Javascript를 사용해 id값으로 input태그에 접근해 focus이벤트 발생 */}
                <input type="button" value="Javascript Focus" onClick={this.JavascriptFocus}/>
            </>
        )
    }

}

export default R073_ReactRef;