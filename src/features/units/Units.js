import React from "react";
import { Ages } from "../ages/Ages";
import { Costs } from "../costs/Costs";
import { List } from "../list/List";

export const Units = () => {
  return (
    <div className="units-div">
      <Ages />
      <Costs />
      <List />
    </div>
  )
}
