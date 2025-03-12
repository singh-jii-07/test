import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import "./Show.css";
import Card from "../Card/Card";
import { data } from "../data/data";
import { useState } from "react";
import Button from "../Button/Button";

const Show = () => {
  const [index, setIndex] =useState(0);
  const [show, setShow] = useState(1);
  const prevHandle=()=>{
    setIndex(index===0?data.length-1:index-1);
    setShow(show===0?data.length-1:show-1);
  }
  const nextHandle=()=>{
    setIndex(index===data.length-1?0:index+1);
    setShow(show===data.length-1?0:show+1);
  }
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <p className="ep">New In</p>
      </div>
      <div className="card1">
        <button onClick={prevHandle}>pre</button>
      <div>
        <Card img={data[index].img} title={data[index].p1} price={data[index].p2} />
      </div>
      <div>
        <Card img={data[show].img} title={data[show].p1} price={data[show].p2} />
      </div>
     <button onClick={nextHandle}>Next</button>
      </div>
    </div>
  );
};

export default Show;
