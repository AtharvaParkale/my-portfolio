import React from "react";
import "./SectionFour.css";
import assign_img from "../../assets/images/assign_img-min.png";

function SectionFour() {
  return (
    <div className="sectionFour_container" id="section-four">
      <div className="four-inner">
        <div className="four-one">
          <div className="four-one-inner">
            <h2>Have a new project</h2>
            <p>Let's connect and create awesome products together</p>

            <a
              href="#section-eight"
              
            >
              <button>Contact me</button>
            </a>
          </div>
        </div>
        <div className="four-two">
          <div className="four-image-holder">
            <img src={assign_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
