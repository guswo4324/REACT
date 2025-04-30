import React from 'react';

function NestedButton() {

    const handleParentClick = (evnet) => {
        console.log('div 부모 클릭');
    };

    const handleChildClick = (event) => {
        //이벤트 버블링 중지(자식 호출하는데 부모까지 같이 호출되는 문제를 중지시키는 방법
        //(event.stopPropagation))
        event.stopPropagation(); 
        console.log('button 자식 클릭')
    };

    return(
        <div onClick={handleParentClick}>
            부모&nbsp;
            <button onClick={handleChildClick}>자식</button>
        </div>
    );
}

export default NestedButton;