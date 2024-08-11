import Image from "next/image";
import React from "react";
import "@/styles/_innerSpotlight.scss";

const InnerSpotlight = ({ spotlight , subtitle , title }) => {
  return (
    <>
      <div className="spotlight-inner">
        <Image
          src={spotlight}
          height={445}
          width={1440}
          alt="spotlight"
          className="inner-spotlight img-fluid"
        />
        <div className="spotlight-text text-center">
            <h3 className="inner-sub-title text-white">{subtitle}</h3>
            <h2 className="inner-title">{title}</h2>
        </div>
      </div>
    </>
  );
};

export default InnerSpotlight;
