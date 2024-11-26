import React from "react";
import "./Kira.css";
import ImgKira from "../../images/image-kira.jpg";

const Kira = () => {
  return (
    <>
      <div className="Kira">
        <div className="Kira_NameAndIcon">
          <div className="Kira_icon">
            <img src={ImgKira} alt="" />
          </div>
          <div className="Kira_name">
            <h3 className="Kira_name-1">Kira Whittle</h3>
            <p className="Kira_name-2">Verified Graduate</p>
          </div>
        </div>

        <h3 className="Kira_parr-1">
          Such a life-changing experience. Highly recommended!
        </h3>
        <p className="Kira_parr-2">
          “ Before joining the bootcamp, I’ve never written a line of code. I
          needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I’ve
          often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend! ”
        </p>
      </div>
    </>
  );
};

export default Kira;
