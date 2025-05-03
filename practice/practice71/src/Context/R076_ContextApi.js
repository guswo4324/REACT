import React from 'react';
import Children from './R076_contextChildren';

//props를 사용하면 데이터를 부모컴포넌트에서 자식 컴포넌트로 전송할 수 있다.
//그런데 만약 손자 컴포넌트가 부모 컴포넌트의 데이터를 필요로 한다면
//자식 컴포넌트가 중간에서 데이터를 전달해야한다.
//이때 자식 컴포넌트가 부모 컴포넌트의 데이터가 필요하지 않은 상황이라면 불필요한 코드를 작성하게 된다. 
//컨텍스트는 데이터의 공급자와 소비자를 정의하고 데이터가 필요한 컴포넌트만 사용할 수 있게 구현 가능

const { Provider, Consumer } = React.createContext()
export { Consumer }

class R076_ContextApi extends React.Component {
    render() {
        return (
            <Provider value='React200'>
                <Children />
            </Provider>
        )
    }
}

export default R076_ContextApi;