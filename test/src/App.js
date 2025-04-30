import './App.css';
import './Addaction.css';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import CityList from './components/CityList';

function App() {
  return (
    <div ClassName="App">
        <Header/>

        <CityList/>

        <Footer/>
    </div>
  );
}

export default App;
