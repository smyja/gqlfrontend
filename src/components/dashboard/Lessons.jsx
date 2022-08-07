import React from "react";
import { NavLink,useLocation } from "react-router-dom";


const Lessons = (props) => {
  const location = useLocation(); 
  const data = location.state?.title;

  return (<div>

    <h1>{data.title}</h1>
    <p>{data.description}</p>
  

  </div>);
};

export default Lessons;
