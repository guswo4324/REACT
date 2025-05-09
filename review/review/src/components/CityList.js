import React,{ useState } from "react";
import AddCityForm from "./AddCityForm";
import CityItem from "./CityItem";

function CityList() {

    const [todos, setTodos] = useState([
        {
            id:1,
            city:'제주도',
            url:'https://placehold.co/300x200?text=Jeju',
            exp:'아름다운 자연 경관과 독특한 문화를 가진 한국의 대표적인 휴양지입니다.',
            rating:4,
        },
        {
            id:2,
            city:'하와이',
            url:'https://placehold.co/300x200?text=Hawaii',
            exp:'에메랄드 빛 바다와 화산 지형이 어우러진 열대 천국으로, 독특한 폴리네시안 문화와 여유로운 알로하 정신을 느낄 수 있는 곳입니다.',
            rating:5,
        },
        {
            id:3,
            city:'바르셀로나',
            url:'https://placehold.co/300x200?text=Barcelona',
            exp:'가우디의 건축물과 지중해의 해변을 모두 즐길 수 있는 매력적인 도시입니다.',
            rating:3,
        },
    ]);

    const addCity = ({city, url, exp, rating}) => {
        const newCity = {
            id:Date.now(),
            city:city,
            url:url,
            exp:exp,
            rating:rating,
        };
        setTodos([...todos, newCity]);
    };

    return(
        <div className="main-content">
            <AddCityForm onAdd={addCity}/>
            <div className="container">
                <h2>인기여행지</h2>
                <div className="travel-grid">
                    {todos.map(city => (
                        <CityItem
                            key={city.id}
                            city={city}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CityList;