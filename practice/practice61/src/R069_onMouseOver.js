import React, { Component } from 'react';

//onMouseMove 특정 tag 영역 안에서 마우스 커서가 움직일 때 발생
//onMouseOver 특정 tag 영역 안에 마우스 커서가 진입할 때 발생

class R069_onMouseOver extends Component {
    MouseOver(tag) {
        console.log('TAG : '+tag);
    }

    render() {
        return (
            <>
                <div onMouseOver={(e => this.MouseOver("div"))}>
                    <h3>DIV onMouseOver</h3>
                </div>
                <input type="text" onMouseOver={e => this.MouseOver("input")}/>
                <select onMouseOver={e => this.MouseOver("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default R069_onMouseOver;