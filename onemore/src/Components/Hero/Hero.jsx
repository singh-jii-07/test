import React from 'react'
import "./Hero.css"
import Button from '../Button/Button'
const Hero = () => {
  return (
    <div className="hero">
        <div className="text">
<h2>
    Explore the World, One  <br />Country at a Time
</h2>
<p>
    Discover the history. Culture, and beauty of each nation sort,search and  <br />filter though countries to find the details you need.
</p>
<Button name="Start Exploring"/>
        </div>
        <div className="img">
        <img src="https://imgs.search.brave.com/NoUizPgBJK-aOV-YmB_IOsfSnwjDYobvEQnOAOjh8xU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTEvVHJh/dmVsLVdvcmxkLVBO/Ry1QaG90b3MucG5n" alt="" />
        </div>
    </div>
  )
}

export default Hero
