import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
//임시 페이지 컴포넌트

const TodoList = () => (<div>할일 목록 페이지</div>);

function App() {
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
              <Link to="/todos">할 일 목록</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <p>&copy;2025날강두 TodoList App</p>
      </footer>
    </div>
  );
}

export default App;
