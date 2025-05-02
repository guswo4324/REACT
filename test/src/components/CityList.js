import React, { useState } from 'react';
import AddCityForm from './AddCityForm';
import CityItem from './CityItem';
import CityModal from './CityModal';

function TodoList() {

    const [todos, setTodos] = useState([
        {
            id:1, 
            city:'제주도', 
            url:"https://placehold.co/300x200?text=jejudo", 
            sub:'아름다운 자연 경관 독특한 문화를 가진 한국의 대표적인 휴양지', 
            rating: 5
        },
        {
            id:2, 
            city:'하와이', 
            url:"https://placehold.co/300x200?text=Hawaii", 
            sub:'에메랄드 빛 바다와 화산지형이 어우러진 열대 천국으로, 독특한 플라네시안 문화와 여유로운 알로하 정신을 느낄 수 있는 곳', 
            rating:5
        },
        {
            id:3, 
            city:'바르셀로나', 
            url:"https://placehold.co/300x200?text=Barcelona", 
            sub:'가우디의 건축물과 지중해의 해변을 모두 즐길 수 있는 매력적인 도시입니다.', 
            rating:4
        },
    ]);

    //새 도시 추가 함수(객체 통째로 넘기기 때문)
    const addCity = ({city, url, sub, rating}) => {
        const newCity = {
            id: Date.now(),
            city:city,
            url:url,
            sub:sub,
            rating:rating,
        };
        console.log(`새 도시:${JSON.stringify(newCity)}`);
        setTodos([...todos, newCity]);
    };
    
    //도시 삭제 함수
    // const DeleteCity = (id, e) => {

    //     e.stopPropagation();

    //     console.log(`할 일 삭제 Id:${id}, 이벤트타입 e:${e.type}`);
    //     //1번인 아닌 애들만 필터 -> 2,3만 남은걸 todos에 넣음
    //     setTodos(todos.filter((city) => city.id !== id));
    // }


    //select 정렬 함수
    // const handleSelectChange = (e) => {
    //     const value = e.target.value;
    //     const copy = [...todos]

    //     if(value === "이름순") {
    //         copy.sort((a,b) => a.city.toUpperCase() < b.city.toLowerCase() ? -1 : 1);
    //     }
    //     else if(value === "평점순") {
    //         copy.sort((a,b) => b.rating - a.rating); //내림차순
    //     }
    //     setTodos(copy);
    // }

    //모달
    const [selectedCity, setSelectedCity] = useState(null);

    //캡쳐링 단계 이벤트 핸들러
    const handleContainerClickCapture=(e) => {
        console.log(`캡쳐링 단계: ${e.target.tagName} 요소 클릭 감지`);
    };

    const [view, setView] = useState(1);

    const addView = () => {
        setView(view + 1);
    }
    
    return(
        <div className="main-content" onClickCapture={handleContainerClickCapture}>
            <AddCityForm onAdd={addCity}/>
            <div className="container">
                <h2>인기 여행지</h2> 
                <select 
                    className="sort-control"
                    onChange={(e) => {
                        const value = e.target.value;
                        const copy = [...todos]

                        if(value === "이름순") {
                            copy.sort((a,b) => a.city.toUpperCase() < b.city.toLowerCase() ? -1 : 1);
                        }
                        else if(value === "평점순") {
                            copy.sort((a,b) => b.rating - a.rating); //내림차순
                        }
                        setTodos(copy);
                    }}
                >
                    <option>이름순</option>
                    <option>평점순</option>
                </select>
                <div className="travel-grid">
                    {todos.map(city => (
                        <CityItem 
                            key={city.id} 
                            city={city} 
                            onDetailClick={() => {
                                setSelectedCity(city);
                                addView();
                                }
                            }
 
                            //onDelete={DeleteCity}
                        />
                    ))}
                </div>
            </div>
            {
                selectedCity && 
                    //CItyModal에 city랑 onClose 들어가야함
                    <CityModal
                        city={selectedCity}
                        onClose={() => setSelectedCity(null)}
                        view={view}
                    />
            }
        </div>
    );
}

export default TodoList;
