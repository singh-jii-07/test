import React from 'react'
import data from'../Data/cardoneData.json'
import "./cardOne.css"
const CardOne = () => {
  return (
    <div className='food-tem'>
      {
        data.map((index,info)=>{
            return(
                <div key={info} className='food'>
                  <div className='food-body'>
                  <div className="text">
                    <h1>{index.name}</h1>
                    <p>{index.description}</p>
                  </div>
                  <div className="image">
                    <img src={index.image} alt="" />
                  <button>{index.button}</button>
                  </div>
                  </div>
                  
                </div>
            )
        })
      }
    </div>
  )
}

export default CardOne
