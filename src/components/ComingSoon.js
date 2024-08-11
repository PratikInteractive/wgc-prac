
import React from "react";
import "@/styles/_comingSoon.scss";


const Comingsoon = ({heading,descp}) => {
  return (
    <>
      <div className="comingSoon">
        <div className="container">
          <h1 className="title text-white mb-1">{heading}</h1>
          <p className="sub-title text-white">{descp}</p>
        </div>
      </div>
    </>
  );
};

export default Comingsoon;
