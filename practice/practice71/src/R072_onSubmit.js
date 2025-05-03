import React, { Component } from 'react';

//onSubmit 이벤트는 <form>태그에 사용한다
//<form> 태그 안에 있는 type이 submit인 <input> 태그를 클릭하거나
//<input> 태그에 커서를 놓고 enter를 누르면 onSubmit 이벤트 발생

class R072_onSubmit extends Component {
    //Submit이라는 함수를 선언하고 id값이 inputId인 태그의 value 값을 inputValue 변수에 할당
    Submit(e) {
        var inputValue = document.getElementById("inputId").value;
        console.log("inputValue : "+inputValue);
        //새로고침 방지
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.Submit}>
                <input type="text" name="inputName" id="inputId"/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default R072_onSubmit;