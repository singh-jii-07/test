import React from 'react'
import Hero from '../Components/Hero/Hero'
import Heading from '../Components/Heading/Heading'
import Card from '../Components/Card/Card'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Heading  name="Here are the interesting Facts We're proud of"/>
      <Card/>
    </div>
  )
}

export default Home
