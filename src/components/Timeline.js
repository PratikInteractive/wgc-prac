import React from "react";
import "@/styles/_timeline.scss";
import Image from "next/image";

const Timeline = ({year,title,descp,unique,iframe,img,row,imgClass,containerParent,videoClass}) => {
  return (
    <>
      <div className={`container timeline ${containerParent}`}>
        <div className={`timeline-row ${unique} ${row}`}>
          <div className={`timeline-split ${videoClass}`}>
            <div className="pill">{year}</div>
            <h3 className="title text-golden mb-1">{title}
              
            </h3>
            <p className="descp">{descp}
               
            </p>
          </div>
          <div className={`timeline-split ${imgClass}`}>
            {iframe && (
              <iframe
                src={iframe}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="iframe-class"
              ></iframe>
            )}
            {img && ( // Check if img exists
              <Image
                src={img} // Use 'img' here
                width="350"
                height="80"
                alt="Logo"
                className="img-fluid"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
