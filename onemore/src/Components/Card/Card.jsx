import React from 'react'
import "./Card.css"
import countryData from '../Api/CountryData.json'
const Card = () => {
  return (
    <div className='card-contaner'>
        {countryData.map((country,index)=>{
            // const{name,capital,official_language,currency,famour_for}=country
            return(
                <div className="card" key={index}>
                <div className="card-body">
                  <h2>
                    {country.name}
                  </h2>
                  <p>
                    <span>Capital:</span>
                    {country.capital}
                  </p>
                  <p>
                    <span>official_language:</span>
                    {country.official_language}
                  </p>
                  <p>
                    <span>Currency:</span>
                    {country.currency}
                  </p>
                  <p>
                    <span>famous_for:</span>
                    {country.famous_for}
                  </p>
                </div>
              </div>
            )
        })}
      
    </div>
  )
}

export default Card
