import React from "react";

function StyleExample() {

    const style = {
        color: 'blue',
        backgroundColor: 'lightgray',
        fontsize: '20px',
        padding: '10px',
    };

    return (
        <div style={style}>
            인라인 스타일 예제
        </div>
    );
}

export default StyleExample;