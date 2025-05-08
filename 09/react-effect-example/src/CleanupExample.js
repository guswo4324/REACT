import React, {useState, useEffect} from "react";

function CleanupExample() {
    const [isVisible, setIsVisible] = useState(true);

    return(
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? '숨기기' : '보이기'}
            </button>
            {/* isVisible이 true이면서 */}
            {isVisible && <Timer/>}
        </div>
    )
}

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log('타이머 시작');
        const intervalId = setInterval(() => {
            //prevSeconds라는 변수를 저장하고 prevSeconds에 + 1을 해서 보여줌
            // return {seconds}에 넘겨줌 (화면상 실제로 보이는 해주는코드)
            setSeconds((prevSeconds) => prevSeconds + 1)
            // 실제 1초
        }, 1000);


            //cleanup 함수
        return () => {
            console.log('타이머 정리'); 
            clearInterval(intervalId); //1초마다 실행되는 intervalId(함수)의 내용을 정리
        }

    }, []); // []: 마운트 시에만 실행

    return <p>타이머 : {seconds}초</p>

}

export default CleanupExample;