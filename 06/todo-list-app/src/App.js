import './App.css';
import './List.css';
import './components/TodoList.css';
import React from 'react';
import TodoList from './components/TodoList';
//import SimpleList from '../../../06/todo-list-app/src/list/SimpleList';
//import UserGrid from './list/UserGrid';
//import ConditionalComponent from './dynamic/ConditionalComponent';
//import StyleExample from './dynamic/StyleExample';
//import DynamicStyle from './dynamic/DynamicStyle';

function App() {
  //const isLoggedIn = false;
  //const isActive = false;

  return (
    <div className="App">
      {/* <StyleExample/> */}
      {/* <DynamicStyle isActive={isActive} /> */}
      {/* <ConditionalComponent isLoggedIn={isLoggedIn}/> 
      <UserGrid/>
      <SimpleList/> */}
      <TodoList/>
    </div>
  );

}

export default App;
