import React from "react";
import "./Jeanette.css";
import ImgJeanette from "../../images/image-jeanette.jpg";

const Jeanette = () => {
  return (
    <>
      <div className="Jeanette">
        <div className="Jeanette_NameAndIcon">
          <div className="Jeanette_icon">
            <img src={ImgJeanette} alt="" />
          </div>
          <div className="Jeanette_name">
            <h3 className="Jeanette_name-1">Jeanette Harmon</h3>
            <p className="Jeanette_name-2">Verified Graduate</p>
          </div>
        </div>
        <h3 className="Jeanette_parr-1">
          An overall wonderful and rewarding experience
        </h3>
        <p className="Jeanette_parr-2">
          “ Thank you for the wonderful experience! I now have a job I really
          enjoy, and make a good living while doing something I love. ”
        </p>
      </div>
    </>
  );
};
export default Jeanette;
