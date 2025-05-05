import React, { Component } from 'react';
import { throttle } from 'lodash';

//throttle도 debounce와 동일하게 시간 조건을 추가해 실행 횟수를 제한
//차이점은 debounce가 연속된 이벤트 중 마지막 이벤트가 발생한 시점부터 특정 시간이 지났을 때 동작한다면
//throttle은 발생한 이벤트 수와 관계없이 지정한 시간 단위당 최대 한번만 동작

class R095_reactThrottle extends Component {
    throttleFunc = throttle(() => {
        //throttle 함수에 1초의 실행 시간 간격을 할당한다.
        //throttleFunc 함수는 글자가 입력될 때마다 호출되지만
        //throttle함수는 1초마다 0개 또는 1개의 로그를 출력(1초 단위로 데이터 호출)
        //ex) 0초(r), 1초(rea), 2초(react)
        console.log("Throttle API Call");
    },1000);

    render() {
        return (
            <>
                <h2>검색어 입력</h2>
                <input type="text" onChange={this.throttleFunc}/>
            </>
        )
    }
}

export default R095_reactThrottle;