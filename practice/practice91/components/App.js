import React, { Component } from 'react';
import { Route  } from 'react-router-dom';
//import reactRouter from './R089_reactdRouter';
//import reactRouter2 from './R089_reactRouter2';
//import reactDebounce from './R094_reactDebounce';
import reactThrottle from './R095_reactThrottle';

//css
import '../css/new.css';

//header
import HeaderAdmin from './Header/Header admin';

//footer
import Footer from './Footer/Footer';

//login
import LoginForm from './LoginForm';

import floatingPopulationList from './Floating_population/floatingPopulationList';
import rechartsSimpleLineChart from './Floating_population/rechartsSimpleLineChart';
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderAdmin/>
        {/* <Route exact path='/' component={reactRouter} />
        <Route exact path='/reacdtRouter2' component={reactRouter2} /> */}
        <Route exact path='/' component={LoginForm} />
        {/* <Route exact path='/Debounce' component={reactDebounce} /> */}
        <Route exact path='/Debounce' component={reactThrottle} />
        <Route path='/floatPopulationList' component={floatingPopulationList}/>
        <Route path='/floatPopulationList' component={rechartsSimpleLineChart}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
