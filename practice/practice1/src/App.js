import React from 'react';
import './App.css'; 
//import ImportComponent from './R003_ImportComponent'; --3
//import LIfecycleEx from './R004_LifecycleEx' --4
//import LifecycleEx from './R005_LifecycleEx' --5
//import LifecycleEx from './R006_LifecycleEx'; --6
//import LifecycleEx from './R007_LifecycleEx'; --7
//import LifecycleEx from './R008_LifecycleEx' --8
//import Es6 from './R009_Es6' --9
import Variable from './R010_Variable'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      {/* <p>HTML 적용하기</p> */}
      <p>CSS 적용하기</p>
      {/* <ImportComponent></ImportComponent> */}
      {/* <LifecycleEx></LifecycleEx> */}
      {/* <LifecycleEx
        prop_value = 'FromApp.js'
      /> */}
      {/* <Es6/> */}
      <Variable/>
    </div>
  );
}

export default App;
