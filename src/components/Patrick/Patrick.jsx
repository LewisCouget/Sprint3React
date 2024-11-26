import React from "react";
import "./Patrick.css";
import ImgPatrick from "../../images/image-patrick.jpg";
const Patrick = () => {
  return (
    <>
      <div className="Patrick">
        <div className="Patrick_NameAndIcon">
          <div className="Patrick_icon">
            <img src={ImgPatrick} alt="" />
          </div>
          <div className="Patrick_name">
            <h3 className="Patrick_name-1">Patrick Abrams</h3>
            <p className="Patrick_name-2">Verified Graduate</p>
          </div>
        </div>

        <p className="Patrick_parr-1">
          Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experiences was
          easy.
        </p>

        <p className="Patrick_parr-2">
          “ The staff seem genuinely concerned about my progress which I find
          really refreshing. The program gave me the confidence necessary to be
          able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the personal
          attention you need from an incredible community of smart and amazing
          people. ”
        </p>
      </div>
    </>
  );
};

export default Patrick;
