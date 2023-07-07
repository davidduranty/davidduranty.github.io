import React from "react";
import { NavLink } from "react-router-dom";

const Arrow = (props) => {
  return (
    
      <div className="arrow">
        {props.right && (
          <NavLink to={props.right} className="right hover">
            <span>&#10093;</span>
          </NavLink>
        )}
        {props.left && (
          <NavLink to={props.left} className="left hover">
            <span>&#10092;</span>
          </NavLink>
        )}
      </div>

  );
};

export default Arrow;
