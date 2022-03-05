import React from "react";
import { Slider } from "../slider/Slider";
import './Costs.scss';

export const Costs = () => {
  return (
    <div className="costs-div">
      <h1>Costs</h1>
      <Slider name='Wood' min={0} max={200} type={"WOOD"} />
      <Slider name='Food' min={0} max={200} type={"FOOD"} />
      <Slider name='Gold' min={0} max={200} type={"GOLD"} />
    </div>
  )
}
