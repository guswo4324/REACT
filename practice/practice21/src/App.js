import React from 'react';
import './App.css';
//import PropsRequired from './R021_PropsRequired';
//import PropsDefault from './R022_PropsDefault';
//import PropsNode from './R023_PropsNode';
//import SetState from './R025_SetState';
//import ForceUpdate from './R026_ForceUpdate';
//import ComponentClass from './R027_ComponentClass';
//import PureComponentClass from './R028_PureComponentClass';
//import ShallowEqual from './R029_ShallowEqual';
import FunctionComponent from './R030_FunctionComponent';

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
      {/* <SetState/> */}
      {/* <ForceUpdate/> */}
      {/* <ComponentClass/> */}
      {/* <PureComponentClass/> */}
      {/* <ShallowEqual/> */}
      <FunctionComponent content="[THIS IS FunctionComponent]"/> 
    </div>
  );
}

export default App;

