import React, { Component } from 'react';

//props를 하위 컴포넌트 태그 안쪽에 선언해 전달하는 것 이외에도 
//하위 컴포넌트 태그 사이에 작성된 node를 전달할 수 있다.

class R023_PropsNode extends Component{
    render() {
        return (
            //하위 컴포넌트 태그 사이에 <span> 태그를 추가하면 props에 담아 하위 컴포넌트에 전달한다
            <div stylele={{padding: "0px"}}>
                {this.props.childeren}
            </div>
        )
    }
}

export default R023_PropsNode;