import './App.css';
import './components/TodoList.css';
import React from 'react';
//import AddTodoForm from './components/AddTodoForm';
//import Button from './events/Button';
//import TodoList from './components/TodoList';
//import NestedButton from './event/NestedButton';
//import ControlledForm from './form/ControlledForm';
import UncontrolledForm from './form/UncontrolledForm';

function App() {

  return (
    <div className="App">
        {/* <TodoList />
        <br/> */}
        <UncontrolledForm/> 
    </div>
  );

}

export default App;
