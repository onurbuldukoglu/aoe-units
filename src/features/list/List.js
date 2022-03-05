import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sagaActions } from "../../saga/sagaActions";
import './List.scss';

export const List = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.units.units);


  return (
    <div className="list-div">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><Link to={`/Units/${item.name}`} name={item.name} onClick={(e) => dispatch({ type: sagaActions.DETAIL, value: e.target.name })}>{item.name}</Link></td>
                <td>{item.age}</td>
                <td>
                  {(item.cost && item.cost.Wood) ? `Wood: ${item.cost.Wood}` : null }
                  {' '}
                  {(item.cost && item.cost.Food) ? `Food: ${item.cost.Food}` : null }
                  {' '}
                  {(item.cost && item.cost.Gold) ? `Gold: ${item.cost.Gold}` : null }
                </td> 
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}