import './App.css';
//import './List.css';
//import './components/TodoList.css';
import React from 'react';
import TodoList from './components/TodoList';
//import angdo from './angdo.jpg'
//import BackgroundExample from './example/BackgroundExample';

function App() {
  return (
    <div className="App">
      {
        //<BackgroundExample/>
        // <img 
        //   src={process.env.REACT_APP_PUBLIC_URL+'/angdo1.jpg'}
        //   className="App-logo"
        //   alt="앵두"
        // />
        /* <img src={angdo} className="app-logo" alt="앵두" /> */
        <TodoList />
      }
    </div>

  );

}

export default App;
