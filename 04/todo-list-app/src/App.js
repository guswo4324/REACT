import './App.css';
import React, { useState } from 'react';
//import AddTodoForm from './components/AddTodoForm';
//import Button from './events/Button';
import TodoList from './components/TodoList'

function App() {

  return (
    <div className="App">
        <TodoList />
        {/* <br/>
        <Button/> */}
    </div>
  );

}

export default App;
