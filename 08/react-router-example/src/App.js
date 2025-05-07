import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import About from './pages/About';
// import Contact from './pages/Contact';
import Home from './pages/Home';
import './App.css';
import UserProFile from './pages/UserProfile';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/user/날강두7">날두</Link>
            </li> 
            <li>
              <Link to="/product">제품</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} /> */} 
          <Route path="/user/:userId" element={<UserProFile />} />
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<ProductDetail />}/>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
