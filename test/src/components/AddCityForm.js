import React, { useState } from 'react';

function AddCityForm({ onAdd }) {
    const [value, SetValue] = useState('');

    const[text, setText, url, setUrl, sub, setSub, rating, setRating] = useState('');

    const handleInputChange=(e) => {
        console.log(`입력 변경:${e.target.value}`);
        setText(e.target.value);
        setUrl(e.target.value);
        setSub(e.target.value);
        setRating(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`text.trim:${text.trim()}`);

        if(!text.trim()) {
            console.log('빈 도시는 추가 할 수 없습니다')
            return;
        }
        onAdd(text);
        setText('')
        onAdd(url);
        setUrl('')
        onAdd(sub);
        setSub('')
        onAdd(rating);
        setRating('')
    };

    return(
        <div className="container">
            <form className="add-destination-form" onSubmit={handleSubmit}>
                <h2>새로운 여행지 추가</h2>
                <form className="form-group">
                    <h4>여행지 이름</h4>
                    <label>
                        <input type="text" value={text} onChange={handleInputChange} placeholder='예:파리'></input>
                    </label>
                    <h4>이미지 URL(선택사항)</h4>
                    <label>
                        <input type="text" value={url} placeholder='https://example.com/image.jpg'></input>
                    </label>
                    <h4>설명</h4>
                    <label>
                        <textarea value={sub} placeholder='이 여행지에 대한 설명을 작성하세요'></textarea>
                    </label>
                </form>
                <h4>평점(1-5)</h4>
                <div className="rating-input">
                    <div className="sort-control">
                        <input type="range" min="1" max="5" value={rating} onChange={(e) => SetValue(e.target.value)} style={{width:"1100px"}}></input>
                    </div>
                    <p>{`${value}`}</p>
                </div>
                <button className="submit-btn">여행지 추가</button>
            </form>
        </div>
    );
}

export default AddCityForm;