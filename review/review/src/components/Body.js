import React, { useState } from "react";

function CityList() {

    const [value, setValue] = useState('3');

    return(
        <div className="main-content">
            <div className="container">
                <div className="add-destination-form">
                    <h2>새로운 여행지 추가</h2>
                    <form className="form-group">
                        <label>여행지 이름</label>
                        <input type="text" placeholder="예:파리"></input>
                        <label>이미지 URL(선택사항)</label>
                        <input type="text" placeholder="https://example.com/image.jpg"></input>
                        <label>설명</label>
                        <textarea placeholder="이 여행지에 대한 설명을 작성하세요"></textarea>
                        <label>평점(1-5)</label>
                    </form>
                    <div className="rating-input">
                        <input 
                            type="range" 
                            min="1" max="5" 
                            style={{width:"1100px"}}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <p>{value}</p>
                    </div>
                    <button className="submit-btn">여행지 추가</button>
                </div>
                <h2>인기여행지</h2>
                <div className="travel-grid">
                    <div className="travel-card">
                        <div className="travel-card-content">
                            <img className="travel-card-image" src="https://placehold.co/300x200?text=Jeju" alt=""/>
                            <h3>제주도</h3>
                            <div className="travel-card-rating">
                                ★★★★☆
                            </div>
                            <p>아름다운 자연 경관과 독특한 문화를 가진 한국의 대표적인 휴양지입니다.</p>
                        </div>
                    </div>
                    <div className="travel-card">
                        <div className="travel-card-content">
                            <img className="travel-card-image" src="https://placehold.co/300x200?text=Hawaii" alt=""/>
                            <h3>하와이</h3>
                            <div className="travel-card-rating">
                                ★★★★★
                            </div>
                            <p>에메랄드 빛 바다와 화산 지형이 어우러진 열대 천국으로, 독특한 폴리네시안 문화와 여유로운 알로하 정신을 느낄 수 있는 곳입니다.</p>
                        </div>
                    </div>
                    <div className="travel-card">
                        <div className="travel-card-content">
                            <img className="travel-card-image" src="https://placehold.co/300x200?text=Barcelona" alt=""/>
                            <h3>바르셀로나</h3>
                            <div className="travel-card-rating">
                                ★★★☆☆
                            </div>
                            <p>가우디의 건축물과 지중해의 해변을 모두 즐길 수 있는 매력적인 도시입니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityList;