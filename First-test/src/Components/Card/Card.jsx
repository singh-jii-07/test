import React from "react";
import CardData from '../Api/Api.json'
import "./Card.css"
const Card = () => {
  return (
    <div className="card">
      {CardData.map((card, index) => {
        return (
          <div className="card-body" key={index}>
            <div  className="name">
                
              <h1>
                <span>
                    Name:
                </span>
                {card.name}
                </h1>
            </div>
            <div className="email">
                <h2>
                    <span>
                        Email:</span>{card.email}</h2>
            </div>
            <div className="age">
                <h3>
                    <span>
                        Age:
                        </span>{card.age}</h3>
            </div>
            <div className="place">
                <p>
                    <span>
                        Place:</span>{card.place}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
