import React from "react";

function CityItem( {city} ) {
    return(
        <div className="travel-card">
            <div className="travel-card-content">
                <img className="travel-card-image" src={city.url} alt={city.city}/>
                <h3>{city.city}</h3>
                <div className="travel-card-rating">
                    {"★".repeat(city.rating)}{"☆".repeat(5-city.rating)} ({city.rating}/5)
                </div>
                <p>{city.exp}</p>
            </div>
        </div>
    )
}

export default CityItem;