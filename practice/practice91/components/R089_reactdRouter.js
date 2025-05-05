import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Link는 <a> 태그와 동일하게 동작
//<Route>태그에 정의한 path를 Link 속성에 연결해 놓으면
//링크를 클릭했을 때 라우팅된 컴포넌트로 이동한다

class R089_reacdtRouter extends Component {
    render() {
        return (
            <>
                <h1>path='/'</h1>
                <h3>R089_reactdRouter</h3>
                {/* <link> 태그 추가하고 to 속성에 연결할 path를 입력
                이때 path는 App.js의 <Route>태그에서 특정 컴포넌트로 라우팅 처리가 돼 있어야 한다.
                개발자 도구 Elements 탭에서 <Link> 태그의 코드 보면
                <a>태그인 것을 확인할 수 있다. */}
                <Link to={'/reactRouter2'}>reactRouter2</Link>
            </>
        )
    }
}

export default R089_reacdtRouter;

//단순히 path 별로 라우팅이 잘됐는지 확인하기 위해 path와 컴포넌트명을 화면에 출력한다
//루트경로(/)로 호출했을 때 다음과 같이 R089_reacdtRouter 컴포넌트가 연결되는 것을 확인할 수 있다.