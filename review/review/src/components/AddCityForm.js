import React, { useState } from "react";

function AddCityForm({ onAdd }) {
    
    const [city, setCity] = useState('');
    const [url, setUrl] = useState('');
    const [exp, setExp] = useState('');
    const [rating, setRating] = useState(3);
    const [view, setView] = useState(1);
    
    const handleSubmit = (e) => {
        //새로고침 방지
        e.preventDefault();

        if(!city.trim()) {
            console.log("빈 도시는 추가 못함");
            return;
        }

        onAdd({
            city, 
            url, 
            exp, 
            rating:Number(rating),
            view,
        });

        setCity('')
        setUrl('')
        setExp('')
        setRating(3)
        setView(1)
    }

    return(
        <div className="container">
            <form className="add-destination-form" onSubmit={handleSubmit}>
                <h2>새로운 여행지 추가</h2>
                <form className="form-group">
                    <label>여행지 이름</label>
                    <input 
                        type="text" 
                        placeholder="예:파리"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <label>이미지 URL(선택사항)</label>
                    <input 
                        type="text" 
                        placeholder="https://example.com/image.jpg"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <label>설명</label>
                    <textarea 
                        placeholder="이 여행지에 대한 설명을 작성하세요"
                        value={exp}
                        onChange={(e) => setExp(e.target.value)}
                    />
                    <label>평점(1-5)</label>
                </form>
                <div className="rating-input">
                    <input 
                        type="range" 
                        min="1" max="5" 
                        style={{width:"1100px"}}
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                    <p>{`${rating}`}</p>
                </div>
                <button type="submit" className="submit-btn">여행지 추가</button>
            </form>
        </div>
    )
}

export default AddCityForm;