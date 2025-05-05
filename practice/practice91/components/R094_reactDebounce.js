import React, { Component } from 'react';
import { debounce } from 'lodash';

//debounce는 연속된 이벤트 호출이 일어나는 상황에 사용
//마지막 이벤트가 실행되고 일정시간동안, 추가 이벤트가 발생하지 않을 때 실행되는  함수
//debounce는 꼭 필요한 시점에만 함수를 실행해 서버 자원을 효율적으로 사용

class R094_reactDebounce extends Component {
    //debounce 없으면 react 입력 시 re, rea, reac, react가 입력되는 시점에 모두 데이터를 호출함
    //디바운스를 사용하면 react라는 글자가 모두 작성되고 지연시간 1초가 지난 후 데이터를 한번만 호출
    debounceFunc = debounce(() => {
        console.log("Debounce API Call");
    }, 1000);

    render() {
        return (
            <>
                <h2>검색어 입력</h2>
                <input type="text" onChange={this.debounceFunc} />
            </>
        )
    }
}

export default R094_reactDebounce;