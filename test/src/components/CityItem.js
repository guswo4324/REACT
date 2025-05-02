import React from 'react';

function CityItem({ city, onDetailClick, addView }) { 

    return(
        <div className="travel-card">
            <img className="travel-card-image" src={city.url} alt={`${city.city}`}></img>
            <div className = "travel-card-content">
                <h3>{city.city}</h3>
                <div className="travel-card-rating">
                    {"★".repeat(city.rating)}{"☆".repeat(5-city.rating)} ({city.rating}/5)                
                </div>
                <p>{city.sub}</p>
                <button className="detail-btn" onClick={onDetailClick || addView}>
                    상세정보
                </button> 
            </div>
        </div>
    ); 
}

export default CityItem;