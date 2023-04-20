import React from "react";
import "./card.componant.scss";

const Card = ({title, imgUrl})=> {
    return (
    <div className='card'>
        <div className='background-image' style={{backgroundImage: `url(${imgUrl})`}}/> 
        <div className="card-text-container">
        <h2>{title}</h2>
        <p>Explore now</p>
        </div>
    </div>
    )
}

export default Card;

