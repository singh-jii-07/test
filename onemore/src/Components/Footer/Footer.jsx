import React from 'react'
import Footerinfo from '../Api/FooterData.json'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='Footer'>
      {
        Footerinfo.map((info,set)=>{
            return(
               <div className="icon" key={set}>
               <div className=" icon-logo">
                {info.name}
               </div>
               <div className="icon-text">
                {info.title} <br />
                {info.famous_for}
               </div>
               </div>
            )
        })
      }
    </div>
  )
}

export default Footer
