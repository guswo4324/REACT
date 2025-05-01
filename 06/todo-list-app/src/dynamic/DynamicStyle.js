import React from "react";

function DynamicStyle({isActive}) {

    const style = {
        color: isActive ? 'blue' : 'green',
        backgroundColor: isActive ? 'lightgray' : 'yellow',
        fontsize: isActive ? '20px' : '30px',
        padding: isActive ? '10px' : '2px',
    };

    return (
        <div style={style}>
            동적스타일 예제
        </div>
    );

}

export default DynamicStyle