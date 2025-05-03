import React from 'react';

export default function withHocComponent(InComponent, InComponentName) {
    return class OutComponent extends React.Component {
        componentDidMount () {
            console.log(`3. InComponentName : ${InComponentName}`)
        }
        render () {
            console.log('1. InComponent render')
            //파라미터로 전달받은 InComponent 변수는 R075_ReacdtHoc 컴포넌트 자체다
            //R075_ReactdHoc 컴포넌트를 return하면서 props값을 전달
            //props에는 App.jsp에서 전달한 name 변수가 있다.
            //컴포넌트가 return되면 R075_ReactHoc 컴포넌트의 render함수가 실행되고 
            //props.name값이 화면에 출력
            return (<InComponent { ...this.props }/>)
        }
    }
}

//하이오더 컴포넌트를 구현하면, 
//여러 컴포넌트에 동일하게 적용돼야 하는 공통 기능을 코드 중복없이 사용할 수 있다
//withHocComponent.js코드에서 예를 들면 
//console.log('1. InComponent render')의 console.log를 모든 컴포넌트에서 출력해야 하는데
//hoc을 구현하지 않았다면 각각의 컴포넌트에서 동일한 코드를 작성해야함