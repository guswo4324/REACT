import React from "react";

function BasicJSX(){
    // JSX를 사용한 선언
    const element = <h1>Hello, Donur</h1>;

    // JSX  없이 동일한 요소 생성
    // React.createElement가 null인 이유 : props가 없기 때문에
    // React.createElement 문법 : const element = createElement(type, props, ...children)
    const elementWithoutJSX = React.createElement('h1', null, 'hello, Ddochi');
    
    return(
        <div>
            {element}
            <hr/>
            {elementWithoutJSX}
            <p>위 두 요소는 동일하게 렌더링됩니다.</p>
        </div>
    )

}

export default BasicJSX;