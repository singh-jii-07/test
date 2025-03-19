import React from 'react'
import Data from '../Api/data.json'
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import'./Style.css'
import Button from '../Button/Button';

const Card = () => {
  return (
    <div>
  <div className="button">
  <div className="button1">
    <Button name="+ Register"/>
 </div>
 <div className="button2">
    <Button name="Export"/>
 </div>
 <div className="button2">
    <Button name="Layout"/>
 </div>
  </div>

  
    <div className='card'>
      {
        Data.map((card,index)=>{
       return(
        
        <div key={index} className='card-body'>
            <div className="img">
                <div className="customer-img">
                <img src={card.image} alt="" />
                </div>
                
                <div className="customer-name">
                <h1>
                {card.Customer}
            </h1>
                </div>
             
            </div>
           
           <div className="number">
            <h2>{card.LastInvoice}</h2>
           </div>
           <div className="icon">
            <div className="icon1">
            <FaEye />
            </div>
           <div className="icon2">
           <FaPen />
           </div>
           <div className="icon3">
           <BsThreeDotsVertical />
           </div>
           
           </div>
        </div>
       )
        })
      }
      
    </div>
    </div>
  )
}

export default Card
