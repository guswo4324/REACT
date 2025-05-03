import React, { Component } from 'react';

//onKeyDown, onKeyPress : 키를 눌렀을 때 동작
//OnKeyUp : 눌러 있던 키에서 손을 땠을 때 동작

class R071_OnKey extends Component {
    OnKey(event, e) {
        var val = e.target.value;
        console.log('evnet : '+event+", value: "+val);
    }

    render() {
        return (
            <>
                onKeyDown : <input type="text"
                onKeyDown={e => this.OnKey("onKeyDown", e)}/><br/>
                onKeyPress : <input type="text"
                onKeyPress={e => this.OnKey("onKeyPress", e)}/><br/>
                onKeyUp : <input type ="text"
                onKeyUp={e => this.OnKey("onKeyUp", e)}/>
            </>
        )
    }
}

export default R071_OnKey;