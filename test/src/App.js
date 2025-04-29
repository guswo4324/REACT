import React, { useState } from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import './App.css';
import './Addaction.css';

function App() {
  // const[city, setCity] = useState([
  //   {num:1, name:'제주도'},
  //   {num:2, name:'하와이'},
  //   {num:3, name:'바르셀로나'},
  // ])

  

  return (
    <div ClassName="App">
        <Header/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;
