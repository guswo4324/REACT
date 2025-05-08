import React, { useState, useEffect } from 'react';
import CleanupExample from './CleanupExample';

//useEffect
//1. 렌더링 될 때마다
//2. 첫 렌더링만
//3. 어떤 상태가 바뀔때 
//4. clean up : 컴포넌트가 빠지는 경우, 이벤트 리스터(종료)

function App() {

  // const [count, setCount] = useState(1);
  // const [name, setName] = useState('QWER');

  // // useEffect 기본형태
  // // useEffect (() => {})

  // //useEffect 기본 형태
  // useEffect(() => {
  //   //실행할 부수 효과
  //   console.log(`~~~~~~~~${name}`);
  //   document.title = `카운트: ${count}`;
  // }, [name]);

  // // 첫 마운트 되었을 때, 첫 렌더링 되었을 때
  // useEffect(() => {
  //   console.log(`컴포넌트 마운트(첫 실행) 되었습니다:${count}`);
  // }, []);

  // return (
  //   <div className="App">
  //     <p>카운트: {count}</p>
  //     <button onClick={() => setCount(count + 1)}>증가</button>
  //     <br/>
  //     <input
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //       placeholer="이름을 입력하세요"
  //     />
  //   </div>
  // );
  return <CleanupExample/>;
}

export default App;
