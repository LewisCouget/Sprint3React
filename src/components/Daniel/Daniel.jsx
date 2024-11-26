import React from "react";
import "./Daniel.css";
import ImgDaniel from "../../images/image-daniel.jpg";
import "../../images/bg-pattern-quotation.svg";

const Daniel = () => {
  return (
    <>
      <div className="Daniel">
        <div className="Comillas">
          <div className="Danniel_NameAndIcon">
            <div className="Daniel_icon">
              <img src={ImgDaniel} alt="" />
            </div>
            <div className="Daniel_name">
              <h3 className="Daniel_name-1">Daniel Clifford</h3>
              <p className="Daniel_name-2">Verified Graduate</p>
            </div>
          </div>

          <p className="Daniel_parr-1">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </p>
          <p className="Daniel_parr-2">
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </div>
      </div>
    </>
  );
};

export default Daniel;
