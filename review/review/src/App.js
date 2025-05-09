import './App.css';
import './components/Body.css';
import './components/AddCity.css';
import React from 'react';
import Header from './components/Header';
//import Body from './components/Body';
import CityList from './components/CityList';
import Footer from './components/Footer';

function App() {
  return(
    <div className='App'>
        <Header/>
        <CityList/>
        {/* <Body/> */}
        <Footer/> 
    </div>
  );
}

export default App;