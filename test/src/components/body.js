import React, { useState } from 'react';

//function return
//export default
function Body() {
    //value : 입력값
    //SetValue : 변경값
    let [value, SetValue] = useState('');

    return(
        <div className="main-content">
            <div className="container">
                <form className="add-destination-form">
                    <h2>새로운 여행지 추가</h2>
                    <form className="form-group">
                        <h4>여행지 이름</h4>
                        <label>
                            <input type="text" placeholder='예:파리'></input>
                        </label>
                        <h4>이미지 URL(선택사항)</h4>
                        <label>
                            <input type="text" placeholder='https://example.com/image.jpg'></input>
                        </label>
                        <h4>설명</h4>
                        <label>
                            <textarea placeholder='이 여행지에 대한 설명을 작성하세요'></textarea>
                        </label>
                    </form>
                    <h4>평점(1-5)</h4>
                    <div className="rating-input">
                        <div className="sort-control">
                            <input type="range" min="1" max="5" onChange={(e) => SetValue(e.target.value)} style={{width:"1100px"}}></input>
                        </div>
                        <p>{`${value}`}</p>
                    </div>
                    <button className="submit-btn">여행지 추가</button>
                </form>
            </div>
        
            <div className="container">
                <h2>인기 여행지</h2> 
                <div className="travel-grid">
                    <div className="travel-card">
                        <img className="travel-card-image" src="https://placehold.co/300x200?text=jejudo"></img>
                        <content className="travel-card-content">
                            <h3>제주도</h3>
                            <rating className="travel-card-rating">★★★★★(5/5)
                                <p>아름다운 자연 경관 독특한 문화를 가진 한국의 대표적인 휴양지</p>
                            </rating>
                        </content>
                    </div>
                    <div className="travel-card">
                        <img className="travel-card-image" src="https://placehold.co/300x200?text=Hawaii"></img>
                        <content className = "travel-card-content">
                            <h3>하와이</h3>
                            <rating className="travel-card-rating">★★★★★(5/5)</rating>
                            <p>에메랄드 빛 바다와 화산지형이 어우러진 열대 천국으로, 독특한 플라네시안 문화와 여유로운 알로하 정신을 느낄 수 있는 곳</p>
                        </content>
                    </div>
                    <div className="travel-card">
                        <img className="travel-card-image" src="https://placehold.co/300x200?text=Barcelona"></img>
                        <content className = "travel-card-content">
                            <h3 >바르셀로나</h3>
                            <rating className="travel-card-rating">★★★★☆(4/5)</rating>
                            <p>가우디의 건축물과 지중해의 해변을 모두 즐길 수 있는 매력적인 도시입니다.</p>
                        </content>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;