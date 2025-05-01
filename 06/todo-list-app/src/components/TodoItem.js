import React from 'react';
import classNames from 'classnames';

function TodoItem({ todo, onToggle, onDelete, onImportant }) { 

    //우선순위에 따라 색상 결정
    const getPriorityColor = (priority) => {
        console.log(`priority:${priority}`);
        switch(priority) {
            case 'high':
                return '#ff5252';
            case 'medium':
                return '#ffb74d';
            case 'low':
                return '#81c784';
            default:
                return '#ffb74d';
        }
    }

    const handleCheckboxChange=(id, e) => {
        //자식호출 했을때 부모요소 같이 실행되는것을 막음
        e.stopPropagation();
        console.log(`체크박스 변경 Id:${id}, checked:${e.target.checked}`);
        onToggle(id, e);
    };

    const onImportantChange=(id, e) => {
        //자식호출 했을때 부모요소 같이 실행되는것을 막음
        e.stopPropagation();
        console.log(`중요 Id:${id}, checked:${e.target.checked}`);
        onImportant(id, e);
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
            <span 
                className="priority-badge" 
                style={{backgroundColor:getPriorityColor(todo.priority)}}>
                {
                    todo.priority === 'high' 
                        ? '높음' 
                        : todo.priority === 'medium' 
                        ? '중간' 
                        : '낮음'
                }
            </span>
            <button 
                className={classNames('star-btn', {active: todo.onImportant})}
                onClick={(e) => onImportantChange(todo.id, e)}
            >
                ★
            </button>
            <div className="todo-actions">
                <button className="delete-btn" onClick={(e) => onDelete(todo.id, e)}>
                    삭제
                </button>
            </div>
        </li>
    ); 
}

export default TodoItem;