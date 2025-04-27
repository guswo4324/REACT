import React from 'react';
import './App.css'; 
//import SpreadOperator from './R011_SpreadOperator'
//import ClassPrototype from './R012_Class&Prototype'
//import ArrowFunc from './R013_ArrowFunction'
//import ForEach from './R014_ForEach'
//import Map from './R015_Map'
//import Jquery from './R016_Jquery'
//import Props from './R017_Props'
//import PropsDatatype from './R018_PropsDatatype'
//import PropsBoolean from './R019_PropsBoolean'
import PropsObjVal from './R020_PropsObjVal'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* <SpreadOperator/>   */}
      {/* <ClassPrototype/> */}
      {/* <ArrowFunc/> */}
      {/* <ForEach/> */}
      {/* <Map/> */}
      {/* <Jquery/> */}
      {/* <Props props_val="THIS IS PROPS"/> */}
      {/* <PropsDatatype
        String="react"
        Number={200}
        Boolean={1==1}
        Array={[0, 1, 8]}
        ObjectJson={{react:"리액트", twohundred:"200"}}
        Function={console.log("FunctionProps: function!")}
      /> */}
      {/* <PropsBoolean BooleanTrueFalse={false}/>
      <PropsBoolean BooleanTrueFalse/> */}
      <PropsObjVal ObjectJson={{react:"리액트", twohundred:"200"}}/>
    </div>
  );
}

export default App;
