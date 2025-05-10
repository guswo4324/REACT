import React from "react";

function CityModal( {city, onClose} ) {
    return(
        <div className="detail-view">
            <div className="detail-content">
                <div className = "travel-card-content">
                    <button className="close-btn" onClick={onClose}>✕</button>
                    <img className="detail-image" src={city.url} alt={city.city}/>
                    <h3>{city.city}</h3>
                    <div className="rating">
                        {"★".repeat(city.rating)}{"☆".repeat(5-city.rating)} ({city.rating}/5)
                    </div>
                    <div className="description">
                        {city.exp}
                    </div>
                    <div className="visit-count">
                        이 여행지 페이지 방문 횟수 : {city.view}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CityModal;