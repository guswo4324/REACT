import React from "react";

function CityModal({ city, onClose, view }) {

    return(
        <div className="modal-background">
            <div className="modal-box">
                <div className="travel-card">
                    <div className = "travel-card-content">                        
                        <button className="close-btn" onClick={onClose}>✕</button>
                        <h3>{city.city}</h3>
                        <img className="travel-card-image" src={city.url} alt={`${city.city}`}></img>
                        <div className="travel-card-rating">
                            {"★".repeat(city.rating)}{"☆".repeat(5-city.rating)} ({city.rating}/5)                
                        </div>
                        <p>{city.sub}</p><br/>
                        <p style={{fontSize:"15px" , color:"gray", fontStyle:"oblique"}}>이 여행지 페이지 방문 횟수: {view} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CityModal;