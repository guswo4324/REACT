import React, { useState, useEffect } from 'react';

//함수형 컴포넌트에서 클래스형 컴포넌트와 같이 
//state와 생명주기 함수와 같ㄴ은 기능을 사용하기 위해 hook을 이용한다\
//hook함수에는 useState()와 useEffect()가 있다

function R031_ReactHook(props){
    //useState() 함수로 state 변수값을 선언, 할당한다 -> 두 가지 인자가 배열에 반환
    //contents -> state 변수명 
    //setContents -> state 변수값을 변경해주는 함수
    const [contents, setContents] = useState('[This IS REACT');

    //useEffect()함수는 생명주기 함수 componentDidMount()와 같이 
    //return되는 html코드들이 화면에 그려진 이후 실행
    //최초페이지가 로딩될때 한번 실행되고 setContents()함수로 state값이 변경되면 한 번 더 실행
    useEffect(() => {
        console.log('useEffect');
    });

    return (
        <div style={{padding: "0px"}}>
            <h2>{contents}</h2>
            {/* 버튼 클릭하면 setContents() 함수로 contents값을 수정
            state값이 변경되면 THIS IS REACT -> THIS IS HOOK으로 변경 */}
            <button onClick={() =>setContents('[THIS IS HOOK]')}>버튼</button>
        </div>
    )
}

export default R031_ReactHook;