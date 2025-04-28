import React from 'react';
import './App.css';
//import PropsRequired from './R021_PropsRequired'
//import PropsDefault from './R022_PropsDefault'
//import PropsNode from './R023_PropsNode';
import SetState from './R025_SetState'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* <PropsRequired ReactNumber={200}/> */}
      {/* <PropsDefault ReactNumber={200}/>     */}
      {/* <PropsNode>
        <span>node from App.js</span>
      </PropsNode> */}
      <SetState/>
    </div>
  );
}

export default App;

