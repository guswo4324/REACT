import React, { Component } from 'react';

//onMouseMove 특정 tag 영역 안에서 마우스 커서가 움직일 때 발생
//onMouseOver 특정 tag 영역 안에 마우스 커서가 진입할 때 발생
//onMouseOut 특정 tag 영역 안에 마우스 커서가 진입했다가 벗어날 때 발생

class R070_onMouseOut extends Component {
    MouseOut(tag) {
        console.log('TAG : '+tag);
    }

    render() {
        return (
            <>
                <div onMouseOut={(e => this.MouseOut("div"))}>
                    <h3>DIV onMouseOut</h3>
                </div>
                <input type="text" onMouseOut={e => this.MouseOut("input")}/>
                <select onMouseOut={e => this.MouseOut("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default R070_onMouseOut;