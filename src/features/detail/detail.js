import React from "react";
import { useSelector } from "react-redux";
import './Detail.scss';

export const Detail = () => {
  const unit = useSelector((state) => state.detail.detail.unit);
  return (
    <div className="detail-div">
      <h1>{unit.name}</h1>
      <table>
        <tbody>
          <tr>
            <td className="key">ID:</td>
            <td>{unit.id}</td>
          </tr>
          <tr>
            <td className="key">Description:</td>
            <td>{unit.description}</td>
          </tr>
          <tr>
            <td className="key">Required Age:</td>
            <td>{unit.age}</td>
          </tr>
          <tr>
            <td className="key">Wood Cost:</td>
            <td>{unit.cost ? unit.cost.Wood : null}</td>
          </tr>
          <tr>
            <td className="key">Food Cost:</td>
            <td>{unit.cost ? unit.cost.Food : null}</td>
          </tr>
          <tr>
            <td className="key">Gold Cost:</td>
            <td>{unit.cost ? unit.cost.Gold : null}</td>
          </tr>
          <tr>
            <td className="key">Build Time:</td>
            <td>{unit.build_time}</td>
          </tr>
          <tr>
            <td className="key">Reload Time:</td>
            <td>{unit.reload_time}</td>
          </tr>
          <tr>
            <td className="key">Hit Points:</td>
            <td>{unit.hit_points}</td>
          </tr>
          <tr>
            <td className="key">Attack:</td>
            <td>{unit.attack}</td>
          </tr>
          <tr>
            <td className="key">Accuracy:</td>
            <td>{unit.accuracy}</td>
          </tr>
        </tbody>
        
      </table>
    </div> 
  )
}
