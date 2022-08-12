import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Lessons = (props) => {
  const location = useLocation();
  const data = location.state?.title;

  console.log("data", data);
  // if data is undefined redirect to homepage

  if (!data) {
    return <Navigate replace to="/dashboard/courses" />;
  } else {
    return (
      <div>
        <h1>{data.title}</h1>
        <div style={{ whiteSpace: "pre-line" }}>  {data.description}</div>
      
      </div>
    );
  }
};
export default Lessons;
