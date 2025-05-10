import React,{ useState } from "react";
import AddCityForm from "./AddCityForm";
import CityItem from "./CityItem";
import CityModal from "./CityModal";

function CityList() {

    const [todos, setTodos] = useState([
        {
            id:1,
            city:'제주도',
            url:'https://placehold.co/300x200?text=Jeju',
            exp:'아름다운 자연 경관과 독특한 문화를 가진 한국의 대표적인 휴양지입니다.',
            rating:4,
            view:1,
        },
        {
            id:2,
            city:'하와이',
            url:'https://placehold.co/300x200?text=Hawaii',
            exp:'에메랄드 빛 바다와 화산 지형이 어우러진 열대 천국으로, 독특한 폴리네시안 문화와 여유로운 알로하 정신을 느낄 수 있는 곳입니다.',
            rating:5,
            view:1,
        },
        {
            id:3,
            city:'바르셀로나',
            url:'https://placehold.co/300x200?text=Barcelona',
            exp:'가우디의 건축물과 지중해의 해변을 모두 즐길 수 있는 매력적인 도시입니다.',
            rating:3,
            view:1,
        },
    ]);

    const addCity = ({city, url, exp, rating, view}) => {
        const newCity = {
            id:Date.now(),
            city:city,
            url:url,
            exp:exp,
            rating:rating,
            view:view,
        };
        setTodos([...todos, newCity]);
    };

    const handleSelectChange = (e) => {
        const value = e.target.value;
        const copy =[...todos];

        if(value === "이름순") {
            copy.sort((a,b) => a.city.toUpperCase() < b.city.toLowerCase() ? -1 : 1);
        }
        else if(value === "평점순") {
            copy.sort((a,b) => b.rating - a.rating);
        }
        setTodos(copy);
    }

    const [selectedCity, setSelectedCity] = useState(null);

    const addview = (id) => {
        setTodos(todos.map((city) => 
            city.id === id ? {...city, view:city.view + 1} : city
        ));
    };

    return(
        <div className="main-content">
            <AddCityForm onAdd={addCity}/>
            <div className="container">
                <h2>인기여행지</h2>
                <select 
                    className="sort-control"
                    onChange={handleSelectChange}
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
                                addview(city.id);
                            }}
                        />
                        
                    ))}
                </div>
            </div>
            {
                selectedCity && 
                    <CityModal
                        city={selectedCity}
                        onClose={() => setSelectedCity(null)}
                    />
            }
        </div>
    );
}

export default CityList;