
import React, { useState } from 'react';
import './App.css';
// import Welcome from './components/Welcome'
// import Greeting from './components/Greeting'
//import UserProfile from './components/UserProfile';
//import ProductCard from './components/ProductCard';
// import Button from './components/Button';
//import Card from './components/Card';
import TodoList from './components/TodoList';

function App() {
  // const handleClick = () => alert('안녕하세요');

  // 함수를 Props로 전달하기
  const [todos, setTodos] = useState([
    { id: 1, text: '산책하기', completed: true },
    { id: 2, text: '공부하기', completed: true },
    { id: 3, text: '점심먹기', completed: false },
  ]);

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      {/* <UserProfile
        name="둘리"
        age={20}
        location="쌍문동"
        hobbies={['친구랑 밥먹기','희동이라 놀기', '호이호이']}
      /> */}
      {/* <ProductCard
      name="스마트폰"
      price={1000000}
      discount={10}
      isAvailable={true}
      />

      <ProductCard
      name="노트북"
      price={2000000}
      discount={16}
      isAvailable={false}
      /> */}
      {/* <Button text="로그인" onClick={handleClick} color="green" />
      <Button text="회원가입" color="ligthgreen" size="large" />
      <Button /> */}
      {/* <Card title="공지사항">
        <p>이것은 카드 내부의 콘텐츠 입니다</p>
        <button>자세히 보기</button>
      </Card>
      <Card title="최신 게시물">
        <ul>
          <li>첫번째 게시물</li>
          <li>두번째 게시물</li>
          <li>세번째 게시물</li>
        </ul>
      </Card> */}
      
    
      <h1>할 일 목록</h1>
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default App;
