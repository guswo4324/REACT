import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

function TodoList() {
    //할 일 목록(false가 -없는 상태)
    const [todos, setTodos] = useState([
        {
            id:1, 
            text:'리액트 공부하기', 
            completed:false, 
            priority:'medium', 
            important:true,
        },
        {
            id:2, 
            text:'useState 이해하기', 
            completed:false, 
            priority:'medium', 
            important:false,
        },
        {
            id:3, 
            text:'ToDoList 만들기', 
            completed:false, 
            priority:'medium', 
            important:false,
        },
    ]);

    //새 할 일 추가 함수
    const addTodo = (text, priority, important) => {
        const newTodo = {
            id:Date.now(),
            text: text,
            priority: priority,
            important: important,
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
    
    //할 일 완료 상태 토글 함수
    //...todo : 객체복사하고 setTodos에 넣음(completed)
    const toggleTodo = (id) => {
        setTodos(
        todos.map((todo) => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        );
    };

    //필터상태 선언 버튼(전체, 미완료, 완료)
    const [filter, setFilter] = useState('all');

    //필터링 된 할 일 목록
    //filteredTodos에는 아무것도 없는상태
    //filter가 'all'이면 todo의 전체를 반환
    //filter가 'completed'이면 todo의 completed된 상태만 반환
    //반환 된 todo들을 filter를 걸어 todos에 넣음
    const filteredTodos = todos.filter((todo) => 
    {
        // console.log(`filteredTodos:${}`);
        if(filter === 'all'){
            return true;
        } else if(filter === 'completed'){
            return todo.completed;
        } else if(filter === 'active') {
            return !todo.completed;
        } else if(filter === 'important') {
            return todo.important;
        }
        return true;
    })

    //중요 상태 토글 함수
    //...todo : 객체복사하고 setTodos에 넣음(completed)
    const toggleImportant = (id) => {
        setTodos(
        todos.map((todo) => 
            todo.id === id ? { ...todo, important: !todo.important } : todo
        )
        );
    };


    //캡쳐링 단계 이벤트 핸들러
    const handleContainerClickCapture=(e) => {
        console.log(`캡쳐링 단계: ${e.target.tagName} 요소 클릭 감지`);
    };

    return(      
        <div classname="todo-container" onClickCapture={handleContainerClickCapture}>
            <h1>To Do List</h1>
            <div>
                <AddTodoForm onAdd={addTodo}/>
                <div className="filters">
                    <button 
                        className={filter === 'all' ? 'active' : ' '}
                        onClick={() => setFilter('all')}
                    >
                        전체
                    </button>
                    <button 
                        className={filter === 'active' ? 'active' : ' '}
                        onClick={() => setFilter('active')}
                    >
                        미완료
                    </button>
                    <button 
                        className={filter === 'completed' ? 'active' : ' '}
                        onClick={() => setFilter('completed')}
                    >
                        완료
                    </button>
                    <button
                        className={filter === 'important' ? 'active' : ' '}
                        onClick={() => setFilter('important')}
                    >
                        중요
                    </button>
                </div>
                <ul className="todo-list">
                {/* {todos.map((todo) => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        onToggle={toggleTodo}
                        onDelete={DeleteTodo}
                    />
                ))} */}

                {filteredTodos.map((todo) => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        onToggle={toggleTodo}
                        onDelete={DeleteTodo}
                        onImportant={toggleImportant}
                    />
                ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;