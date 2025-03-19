import React from 'react'
import CardData from'../Data/cardtwoData.json'
import "./CardTwo.css"
const CardTwo = () => {
  return (
    <div>

<h1>Feature item</h1>
    <div className='data-food'>
        
      {
        
        CardData.map((index,info)=>{
          
            return(
                
                <div className='data-fo' key={info}>
                    <div className='data-body'>
                     <div className="img">
                          <img src={index.image} alt="" />
                     </div>
                     <div className="food-text">
                        <p>{index.name}</p>
                        <p>{index.price}</p>
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

export default CardTwo
