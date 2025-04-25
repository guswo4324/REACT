import React from 'react';
import './App.css';
//import ImportComponent from './R003_ImportComponent';
//import LIfecycleEx from './R004_LifecycleEx'
//import LifecycleEx from './R005_LifecycleEx'
//import LifecycleEx from './R006_LifecycleEx';
import LifecycleEx from './R007_LifecycleEx';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
       {/* <p>HTML 적용하기</p> */}
       <p>CSS 적용하기</p>
       {/* <ImportComponent></ImportComponent> */}
       {/* <LifecycleEx></LifecycleEx> */}
      <LifecycleEx
        prop_value = 'FromApp.js'
      />
    </div>
  );
}

export default App;
