import './TodoList.css';
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import { CATEGORIES, FILTERS } from '../constants/categories';
import classNames from 'classnames';

function TodoList() {
    // 할 일 목록
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트 공부하기',
            completed: false,
            priority: 'medium',
            important: true,
            category: 'general',
        },
        {
            id: 2,
            text: 'useState 이해하기',
            completed: true,
            priority: 'medium',
            important: false,
            category: 'general',
        },
        {
            id: 3,
            text: 'TodoList 만들기',
            completed: false,
            priority: 'medium',
            important: false,
            category: 'general',
        },
    ]);

    // 필터 상태
    const [filter, setFilter] = useState('all');

    // 카테고리 상태
    const [selectedCategory, setSelectedCategory] = useState('general');

    // 할 일 완료 상태 토글 함수
    const toggleTodo = (id, e) => {
    // console.log(`할 일 토글ID:${id}, 이벤트 타입:${e.type}`);
        setTodos(
            todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // 새 할 일 추가 함수
    const addTodo = (text, priority) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            priority: priority,
            completed: false,
            important: false,
            category: selectedCategory,
        };
        // console.log(`새 할 일:${JSON.stringify(newTodo)}`);
        setTodos([...todos, newTodo]);
    };

    // 할 일 삭제 함수
    const deleteTodo = (id, e) => {
        // 이벤트 전파(버블링) 중지
        e.stopPropagation();
        // console.log(`할 일 삭제 Id:${id}, 이벤트 타입:${e.type}`);
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // 캡쳐링 단계 이벤트 핸들러
    const handleContainerClickCapture = (e) => {
    // console.log(`캡쳐링 단계: ${e.target.tagName} 요소 클릭 감지`);
    };

    // 필터링 된 할 일 목록
    const filteredTodos = todos.filter((todo) => {
        // console.log(`filteredTodos:${filter}`);
        if (filter === 'all') return true;
        else if (filter === 'completed') return todo.completed;
        else if (filter === 'active') return !todo.completed;
        else if (filter === 'important') return todo.important;
        return true;
    });

    const handleSelectedCategory= (id) => {
        setSelectedCategory(id);
        console.log(`selected category id: ${selectedCategory}`);
    }

    // 중요 상태 토글 함수
    const toggleImportant = (id) => {
        console.log(`중요 토글ID:${id}`);
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, important: !todo.important } : todo
            )
        );
        console.log(`중요 todos:${JSON.stringify(todos)}`);
    };

    return (
        <div
        className="todo-container"
        onClickCapture={handleContainerClickCapture}
        >
            <h1>To Do List</h1>
            {/* 카테고리 버튼 추가 */}
            <div className="category-selector">
                {CATEGORIES.map((category) => (
                <button
                    key={category.id}
                    className={`category-btn ${
                        selectedCategory === category.id ? 'selected' : ''
                    }`}
                    onClick={() => handleSelectedCategory(category.id)}
                >   
                    {/* map한걸 category.icon이랑 category.name 씀 */}
                    {category.icon}
                    <span>{category.name}</span>
                </button>
                ))}
            </div>
            <AddTodoForm onAdd={addTodo} />
            {/* 버튼 3개 추가 */}
            <div className="filters">
                {FILTERS.map((filterType) => (
                    <button
                        key={filterType}
                        className={classNames({ active: filter === filterType })}
                        onClick={() => setFilter(filterType)}
                    >
                        {
                            filterType === 'all' ? '전체' : 
                            filterType === 'active' ? '미완료' : 
                            filterType === 'completed' ? '완료' : '중요'
                        }
                    </button>
                ))}
            </div>
            {/* 할일이 없습니다 (filterType별) */}
            {filteredTodos.length === 0 && (
                <p className="empty-message">  
                {
                    filter === 'all' 
                    ? '새 할일을 추가해주세요' 
                    : filter === 'active' 
                    ? '미완료 중요 할일이 없습니다' 
                    : filter === 'completed' 
                    ? '완료 중요 할 일이 없습니다' 
                    : '중요할 일이 없습니다' 
                }
                </p>
            )}
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                        onImportant={toggleImportant}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;