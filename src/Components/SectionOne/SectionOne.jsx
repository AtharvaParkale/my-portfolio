import React, { useState, useEffect } from "react";
import "./SectionOne.css";
import { Link } from "react-scroll";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import no_bg from "../../assets/images/no-bg-min.jpg";

function SectionOne() {
  const [secBtn1, setSecBtn1] = useState(false);
  const [secBtn2, setSecBtn2] = useState(false);
  const [secBtn3, setSecBtn3] = useState(false);
  const [secBtn4, setSecBtn4] = useState(false);
  const [secBtn5, setSecBtn5] = useState(false);
  const [secBtn7, setSecBtn7] = useState(false);

  useEffect(() => {
   
  }, []);
  
  return (
    <>
      <div className="sectionOne_container" id="section-one">
        <div className="sectionOne_innercontainer1">
          <div className="sectionone_header">
            <h1>
              Hola , I a'm
              <br />
              <span>Atharva Parkale</span>
            </h1>
            <p>
              A fullstack web developer and a problem solver !<br />
              Currently I am pursuing computer science engineering at VIT
              Vellore .
            </p>
          </div>
          <div className="sectionone_buttons">
            {/* <input type="text" id="btn-1" placeholder="Enter Your Email" /> */}
            <Link to="section-eight" className="btn2_link">
              {" "}
              <button id="btn-2">
                <p>Contact me </p>
                <DoubleArrowIcon />{" "}
              </button>
            </Link>
          </div>
        </div>

        <div className="sectionOne_innercontainer2">
          <div className="sectionOne_innercontainer2-image-holder">
            <img src={no_bg} alt="Atharva Parkale" className="my-home-image" />
          </div>
        </div>
      </div>
      <div className="sectionOne_navbar">
        <Link to="section-two" className="link_holder">
          <button
            className={
              "sectionbutton_unactive " + (secBtn1 && "sectionbutton_active")
            }
            onClick={() => {
              setSecBtn1(true);
              setSecBtn2(false);
              setSecBtn3(false);
              setSecBtn4(false);
              setSecBtn5(false);
              setSecBtn7(false);
            }}
          >
            About Me
          </button>
        </Link>

        <Link to="section-three" className="link_holder">
          <button
            className={
              "sectionbutton_unactive " + (secBtn2 && "sectionbutton_active")
            }
            onClick={() => {
              setSecBtn1(false);
              setSecBtn2(true);
              setSecBtn3(false);
              setSecBtn4(false);
              setSecBtn5(false);
              setSecBtn7(false);
            }}
          >
            Skills
          </button>
        </Link>

        <Link to="section-six" className="link_holder">
          <button
            className={
              "sectionbutton_unactive " + (secBtn3 && "sectionbutton_active")
            }
            onClick={() => {
              setSecBtn1(false);
              setSecBtn2(false);
              setSecBtn3(true);
              setSecBtn4(false);
              setSecBtn5(false);
              setSecBtn7(false);
            }}
          >
            Projects
          </button>
        </Link>

        <Link to="section-seven" className="link_holder">
          <button
            className={
              "sectionbutton_unactive " + (secBtn4 && "sectionbutton_active")
            }
            onClick={() => {
              setSecBtn1(false);
              setSecBtn2(false);
              setSecBtn3(false);
              setSecBtn4(true);
              setSecBtn5(false);
              setSecBtn7(false);
            }}
          >
            My work
          </button>
        </Link>

        <Link to="section-four" className="link_holder">
          <button
            className={
              "sectionbutton_unactive " + (secBtn5 && "sectionbutton_active")
            }
            onClick={() => {
              setSecBtn1(false);
              setSecBtn2(false);
              setSecBtn3(false);
              setSecBtn4(false);
              setSecBtn5(true);
              setSecBtn7(false);
            }}
          >
            Assign
          </button>
        </Link>

        <Link to="section-eight" className="link_holder">
          <button
            className={
              "sectionbutton_unactive " + (secBtn7 && "sectionbutton_active")
            }
            onClick={() => {
              setSecBtn1(false);
              setSecBtn2(false);
              setSecBtn3(false);
              setSecBtn4(false);
              setSecBtn5(false);
              setSecBtn7(true);
            }}
          >
            Contact
          </button>
        </Link>
      </div>
    </>
  );
}

export default SectionOne;
