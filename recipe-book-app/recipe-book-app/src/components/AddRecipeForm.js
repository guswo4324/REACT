import React, { useState } from 'react';

function AddRecipeForm({ onAdd }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [method, setMethod] = useState('');
  const [time, setTime] = useState(30);
  const [level, setLevel] = useState('normal');
  
  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!text.trim()) {
      console.log('빈 레시피는 추가 할 수 없습니다');
      return;
    }

    onAdd({
      name,
      text,
      method,
      time:Number(time), 
      level
    });

    setName('');
    setText('');
    setMethod('');
    setTime(30);
    setLevel('normal');
  };

  return (
    <div className="container">
      <div className="add-recipe-form" onSubmit={handleSubmit}>
        <h2>새 레시피 추가</h2>
        <form className="form-group">
          <h4>레시피 제목</h4>
          <label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="예 : 김치볶음밥"
            />
          </label>
          <h4>재료</h4>
          <label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="예: 밥 1공기, 김치 100g, 햄 50g..."
            />
          </label>
          <h4>조리 방법</h4>
          <label>
            <input
              type="text"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              placeholder="단계별로 조리 방법을 설명해주세요."
            />
          </label>
          <h4>조리 시간(분)</h4>
          <label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>
          <h4>난이도</h4>
          <label>
            <select value={level} onChange={handleLevelChange}>
              <option value="hard">어려움</option>
              <option value="normal">보통</option>
              <option value="eazy">쉬움</option>
            </select>
          </label>
          <button className="submit-btn" type="submit">레시피 추가</button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;