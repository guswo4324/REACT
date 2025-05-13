import React, { Component } from 'react';
import { Route } from "react-router-dom";

//프록시란, 클라이언트가 다른 서버에 간접적으로 접속할 수 있도록 중계해주는 프로그램
//예) 웹 브라우저(클라이언트)에 react 서버(localhost:3000)을 띄우고 
//react 페이지에서 node api를 호출해 데이터를 표시할 수 있다.
//이때 프록시를 설정하면 node 서버 url을 
//localhost:5000/users가 아닌 /users로 간략하게 사용할 수 있다.
//프록시는 보통 보안이나 캐시 목적으로 사용함

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

import reactProxy from './R109_reactProxy';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/reactProxy' component={reactProxy} />
        <Footer/>
      </div>
    );
  }
}

export default App;