import React from 'react';

function CityItem({ city }) { 
    return(
        <li className={`city-item ${city.completed ? 'completed': ' '}`}
        onClick={() => onToggle(city.id)}>
            <span>{city.text}</span>
            <div className="city-actions">
                <button className="delete-btn" onClick={(e) => onDelete(city.id, e)}>삭제</button>
            </div>
        </li>
    ); 
}

export default CityItem;