import React from 'react'
import data from'../Data/cardoneData.json'
const CardOne = () => {
  return (
    <div>
      {
        data.map((index,info)=>{
            return(
                <div key={info}>
                  
                </div>
            )
        })
      }
    </div>
  )
}

export default CardOne
