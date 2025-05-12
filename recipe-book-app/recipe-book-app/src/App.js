import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import RecipeList from './components/RecipeList';
import'./components/RecipeList.css';
import './pages/Pages.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipeList" element={<RecipeList />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

function NotFound() {
  return(
    <div className='not-found-page'>
      <h2>404 - 페이지를 찾을 수 없습니다</h2>
      <p>요청하신 페이지가 존재하지 않습니다.</p>
      <Link to="/" className='btn btn-primary'>홈으로 돌아가기</Link>
    </div>
  )
}


export default App;
