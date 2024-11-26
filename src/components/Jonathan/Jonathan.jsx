import React from "react";
import "./Jonathan.css";
import ImgJonathan from "../../images/image-jonathan.jpg";
const Jonathan = () => {
  return (
    <>
      <div className="Jonathan">
        <div className="Jonathan_NameAndIcon">
          <div className="Jonathan_icon">
            <img src={ImgJonathan} alt="" />
          </div>
          <div className="Jonathan_name">
            <h3 className="Jonathan_name-1">Jonathan Walters</h3>
            <p className="Jonathan_name-2">Verified Graduate</p>
          </div>
        </div>

        <p className="Jonathan_parr-1">
          The team was very supportive and kept me motivated
        </p>

        <p className="Jonathan_parr-2">
          “ I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I’ve made in myself. ”
        </p>
      </div>
    </>
  );
};

export default Jonathan;
