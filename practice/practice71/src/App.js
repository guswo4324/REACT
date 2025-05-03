import React from 'react';
//import ReactOnKey from './R071_OnKey';
//import ReactonSubmit from './R072_onSubmit';
//import ReactRef from './R073_ReactRef';
//import Currying from './R074_ReactCurrying';
//import ReactHoc from './R075_ReactHoc';
//import ContextApi from './Context/R076_ContextApi';
//import ContextApi from './Context/R077_ContextApi';
import StrAddButton from './R079_StrAddButton';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      {/* <ReactOnKey/> */}
      {/* <ReactonSubmit/> */}
      {/* <ReactRef/> */}
      {/* <Currying/> */}
      {/* <ReactHoc name='React200'/> */}
      {/* <ContextApi/> */}
      <span>{this.props.store.getState().data.str}</span><br/>
      <StrAddButton store={this.props.store}/>
    </div>
  );
}

export default App;
