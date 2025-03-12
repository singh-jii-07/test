import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div id='Card1'>
      <div className="card-img">
        <img src={props.img} alt="" />
      </div>
      <div className="card-text">
        <p>{props.title}</p>
        <p>{props.price}</p>
      </div>
    </div>
  )
}

export default Card
