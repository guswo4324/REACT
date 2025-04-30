import React, { useState } from 'react';
import AddCityForm from './AddCityForm';
import CityItem from './CityItem';

function TodoList() {
    //도시 목록(false가 -없는 상태)\
    //id key값 불러오기위해서
    const [todos, setTodos] = useState([
        {id:1, text:'제주도', url: 'https://placehold.co/300x200?text=jejudo', rating:5},
        {id:2, text:'하와이', url: 'https://placehold.co/300x200?text=Hawaii', rating:5},
        {id:3, text:'바르셀로나', url: 'https://placehold.co/300x200?text=Barcelona', rating:4},
    ]);

    //새 도시 추가 함수
    const addTodo = (text, url, rating) => {
        const newTodo = {
            id:Date.now(),
            text: text,
            url:url,
            rating: rating,
        };
        console.log(`새 도시:${JSON.stringify(newTodo)}`);
        setTodos([...todos, newTodo]);
    };

    
    //캡쳐링 단계 이벤트 핸들러
    const handleContainerClickCapture=(e) => {
        console.log(`캡쳐링 단계: ${e.target.tagName} 요소 클릭 감지`);
    };

    return(
        <div className="main-content" onClickCapture={handleContainerClickCapture}>
            <AddCityForm onAdd={addTodo}/>
            <div className="container">
            <h2>인기 여행지</h2> 
            <div className="travel-grid">
                <div className="travel-card">

                    {todos.map(city => (
                        <CityItem key={city.id} todo={city} />
                    ))}

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

export default TodoList;