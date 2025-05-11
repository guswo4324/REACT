import React, { useState } from 'react';

function AddTodoForm({ onAdd }) {
    const[text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!text.trim()) return;

        onAdd(text);

        setText('')
    };

    return(
        <form className="add-form" onSubmit={handleSubmit }>
            <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} 
                placeholder="새 할 일 입력"
            />
            <button type="submit">추가</button>
        </form>
    );
}

export default AddTodoForm;