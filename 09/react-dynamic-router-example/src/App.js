import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import PostComment from './pages/PostComment';
import ProductDetail from './pages/ProductDetail';
// import About from './pages/About';
// import TodoList from './components/TodoList';


function App() {

  const userId = '핑구';
  const postId ='1';
  const commentId ='2';

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to={`/users/${userId}`}>프로필</Link>
            </li>
            <li>
              <Link to={`/post/${postId}/comments/${commentId }`}>댓글상세</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* /users/${userId} 랑 /users/:userId 같아야함*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId?" element={<UserProfile />} />
          <Route path="/post/:postId/comments/:commentId" element={<PostComment/>} />
          <Route path="/post/:postId/comments/:commentId/productDetail/:productId" element={<ProductDetail/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <p>&copy;2025리액트 TodoList App</p>
      </footer>
    </div>
  );
}

function NotFound() {
  return(
    //url에 다른페이지 입력시 오류
    <div className='not-found-page'>
      <h2>404 - 페이지를 찾을 수 없습니다</h2>
      <p>요청하신 페이지가 존재하지 않습니다.</p>
      <Link to="/" className='btn btn-primary'>홈으로 돌아가기</Link>
    </div>
  )
}


export default App;
