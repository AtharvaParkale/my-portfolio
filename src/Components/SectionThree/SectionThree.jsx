import React from "react";
import "./SectionThree.css";
import materialuiicon from "../../assets/images/skills/materialui.svg";
import htmlicon from "../../assets/images/skills/html.svg";
import cssicon from "../../assets/images/skills/css.svg";
import javascripticon from "../../assets/images/skills/javascript.svg";
import mongoicon from "../../assets/images/skills/mongodb.svg";
import expressicon from "../../assets/images/skills/express.jpg";
import firebaseicon from "../../assets/images/skills/firebase.svg";
import reacticon from "../../assets/images/skills/react.svg";
import nodejsicon from "../../assets/images/skills/nodejs.svg";

function SectionThree() {
  return (
    <div className="sectionThree_container" id="section-three">
      <div className="skills-holder">
        <div className="skills-header">
          <h1>Skills</h1>
          <span>My tech stack</span>
        </div>
        <div className="icon-holder">
          <div className="icon-holder-row">
            <div className="icon-box">
              <div className="icon-image">
                <img src={htmlicon} alt="html" />
              </div>
              <span>Html</span>
            </div>
            <div className="icon-box">
              <div className="icon-image">
                <img src={cssicon} alt="css" />
              </div>
              <span>Css</span>
            </div>
            <div className="icon-box">
              <div className="icon-image">
                <img src={javascripticon} alt="javascript" />
              </div>
              <span>Javascript</span>
            </div>
          </div>

          <div className="icon-holder-row">
            <div className="icon-box">
              <div className="icon-image">
                <img src={reacticon} alt="react" />
              </div>
              <span>React</span>
            </div>
            <div className="icon-box">
              <div className="icon-image">
                <img src={nodejsicon} alt="node" />
              </div>
              <span>NodeJS</span>
            </div>
            <div className="icon-box">
              <div className="icon-image">
                <img src={expressicon} alt="express" />
              </div>
              <span>Express</span>
            </div>
          </div>

          <div className="icon-holder-row">
            <div className="icon-box">
              <div className="icon-image">
                <img src={mongoicon} alt="mongo" />
              </div>
              <span>MongoDB</span>
            </div>
            <div className="icon-box">
              <div className="icon-image">
                <img src={materialuiicon} alt="material" />
              </div>
              <span>MaterialUI</span>
            </div>
            <div className="icon-box">
              <div className="icon-image">
                <img src={firebaseicon} alt="firebase" />
              </div>
              <span>Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
