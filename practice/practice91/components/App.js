import React, { Component } from 'react';
import { Route  } from 'react-router-dom';
//import reactRouter from './R089_reactdRouter';
//import reactRouter2 from './R089_reactRouter2';
import reactDebounce from './R094_reactDebounce';

//css
import '../css/new.css';

//header
import HeaderAdmin from './Header/Header admin';

//footer
import Footer from './Footer/Footer';

//login
import LoginForm from './LoginForm';
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderAdmin/>
        {/* <Route exact path='/' component={reactRouter} />
        <Route exact path='/reacdtRouter2' component={reactRouter2} /> */}
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/Debounce' component={reactDebounce} />
        <Footer/>
      </div>
    )
  }
}

export default App;
