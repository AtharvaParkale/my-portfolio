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
            I am a full-stack developer with over one year of experience in
            ReactJs and NodeJs. I am passionate about building elegant, simple,
            and functional software.
            <br /> I love to update my tech stack with the latest technologies.
            I have completed two internships until now, and have worked on many
            different projects.
          </p>

          <div className="stat-holder">
            <div className="stat">
              <h2 className="stat-val">10+</h2>

              <p>Projects</p>
            </div>
            <div className="stat">
              <h2 className="stat-val">02+ yr</h2>
              <p>Dev Experience</p>
            </div>
            <div className="stat">
              <h2 className="stat-val">02</h2>
              <p>Internships</p>
            </div>
          </div>
          <div className="cv-button">
            <button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1E81AjE1bZV_f2ubWjR8MY66caw1H7sev/view?usp=sharing",
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
