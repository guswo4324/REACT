import React, { Component } from 'react';

//커링은 함수의 재사용성을 높이기 위해 함수 자체를 return하는 함수
//함수를 하나만 사용할 때는 필요한 모든 파라미터를 한 번에 넣어야 한다.
//커링을 사용하면 함수를 분리할 수 있으므로 파라미터도 나눠 전달 가능

class R074_ReactCurrying extends Component {

    //c, d를 더해주는 함수 생성(+연산자는 숫자와 문자열에 사용할 수 있다)
    plusNumOrString(c, d){
        return c + d;
    }

    //PlusFunc1 함수는 this.plusNumOrString(a, b)를 return하는 또 다른 함수를 return함
    PlusFunc1(a){
        return function(b){
            return this.plusNumOrString(a, b)
        }.bind(this)
    }

    //PlusFunc2 함수는 PlusFunc1 함수를 화살표 함수로 간단하게 표현한것(완전히 동일한 함수)
    PlusFunc2 = a => b => this.plusNumOrString(a, b)

    //PlusFunc 함수는 파라미터를 1개(a)만 받는다. 
    //PlusFunc1 함수를 호출할 때 변수 a와 상수 200을 파라미터로 함께 전달
    
    PlusFunc(a){
        return this.PlusFunc1(a)(200)
    }

    render() {
        return (
            <>  
            {/* PlusFunc 함수를 호출하면서 숫자 100과 문자열 react를 전달
            고정으로 더해주는 숫자 200은 return this.PlusFunc1(a)(200)로 파라미터로 넣어주기 때문에
            PlusFunc 함수를 호출할 때 각각 200을 전달하지 않아도 된다*/}
                <input 
                    type="button" 
                    value="NumberPlus" 
                    onClick={e => alert(this.PlusFunc(100))}
                />
                <input 
                    type="button" 
                    value="StringPlus" 
                    onClick={e => alert(this.PlusFunc("react"))}
                />
            </>
            //NumberPlus 버튼을 클릭했을 때 100+200의 결과인 300 
            //StringPlus 버튼을 클릭했을 때 react+200의 결과인 react200이 팝업으로 뜸
        )
    }
}

export default R074_ReactCurrying;