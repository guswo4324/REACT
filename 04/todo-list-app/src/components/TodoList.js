import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

function TodoList() {
      //할 일 목록(false가 -없는 상태)
    const [todos, setTodos] = useState([
        {id:1, text:'리액트 공부하기', completed:false},
        {id:2, text:'useState 이해하기', completed:false},
        {id:3, text:'ToDoList 만들기', completed:false},
    ]);

    //할 일 완료 상태 토글 함수
    //...todo : 객체복사하고 setTodos에 넣음(completed)
    const toggleTodo = (id) => {
        setTodos(
        todos.map((todo) => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        );
    };

    //새 할 일 추가 함수
    const addTodo = (text) => {
        const newTodo = {
            id:Date.now(),
            text: text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    return(      
        <div>
            <h1>To Do List</h1>
            <div>
                <AddTodoForm onAdd={addTodo}/>
                <ul className="todo-list">
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} 
                    onToggle={toggleTodo}/>
                ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;