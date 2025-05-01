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
    const addTodo = (text, priority) => {
        const newTodo = {
            id:Date.now(),
            text: text,
            priority: priority,
            completed: false,
        };

        console.log(`새 할 일:${JSON.stringify(newTodo)}`);
        setTodos([...todos, newTodo]);
    };

    //할 일 삭제 함수
    const DeleteTodo = (id, e) => {

        e.stopPropagation();

        console.log(`할 일 삭제 Id:${id}, 이벤트타입 e:${e.type}`);
        //1번인 아닌 애들만 필터 -> 2,3만 남은걸 todos에 넣음
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    
    //캡쳐링 단계 이벤트 핸들러
    const handleContainerClickCapture=(e) => {
        console.log(`캡쳐링 단계: ${e.target.tagName} 요소 클릭 감지`);
    };

    return(      
        <div classname="todo-container" onClickCapture={handleContainerClickCapture}>
            <h1>To Do List</h1>
            <div>
                <AddTodoForm onAdd={addTodo}/>
                <ul className="todo-list">
                {todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        onToggle={toggleTodo}
                        onDelete={DeleteTodo}
                    />
                ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;