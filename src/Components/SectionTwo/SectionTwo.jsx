import React from "react";
import "./SectionTwo.css";
import problem_image from "../../assets/images/about_me3-min.jpg";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

function SectionTwo() {
  return (
    <div className="sectionTwo_container" id="section-two">
      <div className="sectionTwo_innercontainer1">
        <div className="problem_image">
          <img src={problem_image} alt="problem" />
        </div>
      </div>
      <div className="sectionTwo_innercontainer2">
        <div className="about_text">
          <h1>About Me</h1>
          <p className="txt_abt">
            I’m a software developer with over a year of experience, passionate about building elegant and functional software that solves real-world problems.
            I graduated from VIT Vellore in 2024 with a B.Tech in Computer Science.
            I enjoy designing efficient systems, writing clean code, and continuously improving my craft. I love turning ideas into impactful digital products that make a difference.
          </p>
          <div className="stat-holder">
            <div className="stat">
              <h2 className="stat-val">10+</h2>

              <p>Projects</p>
            </div>
            <div className="stat">
              <h2 className="stat-val">02+ yr</h2>
              <p>Experience</p>
            </div>
            <div className="stat">
              <h2 className="stat-val">300+ ques</h2>
              <p>LeetCode</p>
            </div>
          </div>
          <div className="cv-button">
            <button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1Gwp_rbDtyokpwqeA_xujt9dciQGnnAT7/view?usp=drive_link",
                  "_blank"
                );
              }}
            >
              <span>Download CV</span> <FileDownloadOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
