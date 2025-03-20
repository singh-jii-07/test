import React, { useState } from "react";
import data from "../Data/cardoneData.json";
import "./cardOne.css";
import { toast } from "react-toastify";
const CardOne = () => {
  const [add, setAdd] = useState(false);
  const clickHandler = () => {
    setAdd(!add);
    add ? toast.error("bhai hat gaya ") : toast.success("bhai ho gaya add");
  };
  return (
    <div className="food-tem">
      {data.map((index, info) => {
        return (
          <div key={info} className="food">
            <div className="food-body">
              <div className="text">
                <h1>{index.name}</h1>
                <p>{index.description}</p>
              </div>
              <div className="image">
                <img src={index.image} alt="" />
                <button onClick={clickHandler}>{`${
                  add ? "Added" : "Add"
                }`}</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardOne;
