import React, { useState } from 'react';

function AddCityForm({ onAdd }) {
    const[city, setCity] = useState('');
    const[url, setUrl] = useState('');
    const[sub, setSub] = useState('');
    const[rating, setRating] = useState('3');

    const handleSubmit = (e) => {
        //새로고침방지
        e.preventDefault();
        console.log(`city.trim:${city.trim()}`);

        if(!city.trim()) {
            console.log('빈 도시는 추가 할 수 없습니다')
            return;
        }

        onAdd({ 
            city, 
            url, 
            sub, 
            rating:Number(rating), 
        });

        setCity('')
        setUrl('')
        setSub('')
        setRating('3')
    };

    return(
        <div className="container">
            <form className="add-destination-form" onSubmit={handleSubmit}>
                <h2>새로운 여행지 추가</h2>
                <div className="form-group">
                    <h4>여행지 이름</h4>
                    <label>
                        <input 
                            type="text" 
                            placeholder='예:파리'
                            value={city} 
                            onChange={(e) => setCity(e.target.value)} 
                        >
                        </input>
                    </label>
                    <h4>이미지 URL(선택사항)</h4>
                    <label>
                        <input 
                            type="text" 
                            placeholder='https://placehold.co/300x200?text=Barcelona'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)} 
                        >
                        </input>
                    </label>
                    <h4>설명</h4>
                    <label>
                        <textarea 
                            placeholder='이 여행지에 대한 설명을 작성하세요'
                            value={sub} 
                            onChange={(e) => setSub(e.target.value)} 
                        >
                        </textarea>
                    </label>
                </div>
                <h4>평점(1-5)</h4>
                <div className="rating-input">
                    <div className="sort-control">
                        <input 
                            type="range" 
                            min="1" 
                            max="5" 
                            value={rating}
                            onChange={(e) => setRating(e.target.value)} 
                            style={{width:"1100px"}}
                        >    
                        </input>
                    </div>
                    <p>{`${rating}`}</p>
                </div>
                <button type="submit" className="submit-btn">여행지 추가</button>
            </form>
        </div>
    );
}

export default AddCityForm;