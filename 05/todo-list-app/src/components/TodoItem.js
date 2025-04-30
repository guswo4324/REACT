import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) { 

    const handleCheckboxChange=(id, e) => {
        e.stopPropagation();
        console.log(`체크박스 변경 Id:${id}, checked:${e.target.checked}`);
        onToggle(id, e);
    };

    return(
        <li 
            className={`todo-item ${todo.completed ? 'completed': ' '}`}
            onClick={() => onToggle(todo.id)}
        >
            <input 
                type="checkbox" 
                className='checkbox' 
                checked={todo.completed}
                onChange={(e) => handleCheckboxChange(todo.id, e)} 
            />
            <span>{todo.text}</span>
            <div className="todo-actions">
                <button classname="edit-btn">수정</button>
                <button className="delete-btn" onClick={(e) => onDelete(todo.id, e)}>
                    삭제
                </button>
            </div>
        </li>
    ); 
}

export default TodoItem;