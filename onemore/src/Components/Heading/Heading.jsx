import React from 'react'
import "./Heading.css"
const Heading = (props) => {
  return (
    <div>
      <div className="heading">
        <h2>
         {props.name}
        </h2>
      </div>
    </div>
  )
}

export default Heading
