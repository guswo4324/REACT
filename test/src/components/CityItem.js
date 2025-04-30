import React from 'react';

function CityItem({ city, onDelete }) { 
    return(
        <div className="travel-card">
            <img className="travel-card-image" src={city.url} alt={`${city.city}`}></img>
            <content className = "travel-card-content">
                <h3>{city.city}</h3>
                <rating className="travel-card-rating">
                    {"★".repeat(city.rating)}{"☆".repeat(5-city.rating)} ({city.rating}/5)                
                </rating>
                <p>{city.sub}</p>
                {/* <button className="delete-btn" onClick={(e) => onDelete(city.id, e)}>
                    삭제
                </button> */}
            </content>
        </div>
    ); 
}

export default CityItem;