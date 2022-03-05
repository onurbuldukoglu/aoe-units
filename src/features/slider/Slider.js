import React, { useRef, useCallback, useEffect } from "react";
import "./Slider.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../../saga/sagaActions";

export const Slider = (props) => {
  const { min, max, name, type } = props;
  const cost = useSelector((state) => state.costs.costs[name]);
  const dispatch = useDispatch();
  const minVal = cost.min;
  const maxVal = cost.max;
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);
  const checkboxRef = useRef(null);
  const getPercent = useCallback((value) => {
    Math.round(((value-min) / (max - min)) * 100);
  }, [min, max]);

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    dispatch({ type: `SET_${type}`, costs: { min: minVal, max: maxVal, active: checkboxRef.current.checked }});
    dispatch({ type: sagaActions.FILTER })
  }, [minVal, maxVal]);

  return (
    <div className='slider-div'>
      <div className='slider-name'>
        <input type='checkbox' data-testid={`${name}-checkbox`} name={name} checked={cost.active} ref={checkboxRef} className="checkbox" onChange={(e) => {dispatch({ type: `TOGGLE_${type}`, value: e.target.checked })}} />
        <p>{name}</p>
      </div>
      <input
        data-testid={name}
        disabled={!cost.active}
        type={"range"} 
        min={min} 
        max={max} 
        className={classNames("thumb thumb-z-3", {
          "thumb-z-5": minVal > max - 20
        })}  
        value={minVal} 
        ref={minValRef} 
        onChange={(e) => {
          const value = Math.min(+e.target.value, maxVal-1);
          dispatch({ type: `SET_${type}`, costs: { min: value, max: maxVal, active: checkboxRef.current.checked }});
          e.target.value = value.toString();
        }} 
      />
      <input
        disabled={!cost.active}
        type={"range"} 
        min={min} 
        max={max}
        className="thumb thumb-z-4"
        value={maxVal}
        ref={maxValRef}
        onChange={(e) => {
          const value = Math.max(+e.target.value, minVal + 1);
          dispatch({ type: `SET_${type}`, costs: { min: minVal, max: value, active: checkboxRef.current.checked }});
          e.target.value = value.toString;
        }} />
      <div className="slider">
        <div className="slider-track" />
        <div ref={range} className="slider-range" />
        <div className="slider-values" data-testid={`${name}-values`}>{minVal} - {maxVal}</div>
      </div>
    </div>
  )
}

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
