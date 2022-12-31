import React, { useState, useEffect } from "react";
import "./SectionOne.css";
import { Link } from "react-scroll";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import no_bg from "../../assets/images/no-bg.jpg";

function SectionOne() {
  const [secBtn1, setSecBtn1] = useState(false);
  const [secBtn2, setSecBtn2] = useState(false);
  const [secBtn3, setSecBtn3] = useState(false);
  const [secBtn4, setSecBtn4] = useState(false);
  const [secBtn5, setSecBtn5] = useState(false);
  const [secBtn7, setSecBtn7] = useState(false);

  const changeNavColor = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 500 && window.innerWidth > 500) {
      //About me
      setSecBtn1(true);
      setSecBtn2(false);
      setSecBtn3(false);
      setSecBtn4(false);
      setSecBtn5(false);
      setSecBtn7(false);
    } else if (window.scrollY >= 420 && window.innerWidth <= 500) {
      //About me
      setSecBtn1(true);
      setSecBtn2(false);
      setSecBtn3(false);
      setSecBtn4(false);
      setSecBtn5(false);
      setSecBtn7(false);
    } else {
      setSecBtn1(false);
    }

    if (window.scrollY >= 1200 && window.innerWidth > 500) {
      //Skills
      setSecBtn1(false);
      setSecBtn2(true);
      setSecBtn3(false);
      setSecBtn4(false);
      setSecBtn5(false);
      setSecBtn7(false);
    } else if (window.scrollY >= 1200 && window.innerWidth <= 500) {
      //Skills
      // console.log("Skills");
      setSecBtn1(false);
      setSecBtn2(true);
      setSecBtn3(false);
      setSecBtn4(false);
      setSecBtn5(false);
      setSecBtn7(false);
    } else {
      setSecBtn2(false);
    }

    if (window.scrollY >= 1900 && window.innerWidth > 500) {
      //my work
      setSecBtn1(false);
      setSecBtn2(false);
      setSecBtn3(true);
      setSecBtn4(false);
      setSecBtn5(false);
      setSecBtn7(false);
    } else if (window.scrollY >= 2100 && window.innerWidth <= 500) {
      //Skills
      // console.log("Skills");
      setSecBtn1(false);
      setSecBtn2(false);
      setSecBtn3(true);
      setSecBtn4(false);
      setSecBtn5(false);
      setSecBtn7(false);
    } else {
      setSecBtn3(false);
    }

    if (window.scrollY >= 2600 && window.innerWidth > 500) {
      setSecBtn1(false);
      setSecBtn2(false);
      setSecBtn3(false);
      setSecBtn4(true);
      setSecBtn5(false);
      setSecBtn7(false);
    } else if (window.scrollY >= 2800 && window.innerWidth <= 500) {
      //Skills
      // console.log("Skills");
      setSecBtn1(false);
      setSecBtn2(false);
      setSecBtn3(false);
      setSecBtn4(true);
      setSecBtn5(false);
      setSecBtn7(false);
    } else {
      setSecBtn4(false);
    }

    if (window.scrollY >= 3500 && window.innerWidth > 500) {
      setSecBtn1(false);
      setSecBtn2(false);
      setSecBtn3(false);
      setSecBtn4(false);
      setSecBtn5(true);
      setSecBtn7(false);
    } else if (window.scrollY >= 3490 && window.innerWidth <= 500) {
      //Skills
      // console.log("Skills");
      setSecBtn1(false);
      setSecBtn2(false);
      setSecBtn3(false);
      setSecBtn4(false);
      setSecBtn5(true);
      setSecBtn7(false);
    } else {
      setSecBtn5(false);
    }

    if (window.scrollY >= 4136 && window.innerWidth > 500) {
      setSecBtn1(false);
      setSecBtn2(false);
      setSecBtn3(false);
      setSecBtn4(false);
      setSecBtn5(false);
      setSecBtn7(true);
    } else if (window.scrollY >= 4460 && window.innerWidth <= 500) {
      //Skills
      // console.log("Skills");
      setSecBtn1(false);
      setSecBtn2(false);
      setSecBtn3(false);
      setSecBtn4(false);
      setSecBtn5(false);
      setSecBtn7(true);
    } else {
      setSecBtn7(false);
    }
  };
  useEffect(() => {
    changeNavColor();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeNavColor);
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
            <img src={no_bg} alt="" />
          </div>
        </div>
      </div>
      <div className="sectionOne_navbar">
        <Link to="section-two" className="link_holder">
          <button
            className={
              "sectionbutton_unactive " + (secBtn1 && "sectionbutton_active")
            }
          >
            About Me
          </button>
        </Link>

        <Link to="section-three" className="link_holder">
          <button
            className={
              "sectionbutton_unactive " + (secBtn2 && "sectionbutton_active")
            }
          >
            Skills
          </button>
        </Link>

        <Link to="section-six" className="link_holder">
          <button
            className={
              "sectionbutton_unactive " + (secBtn3 && "sectionbutton_active")
            }
          >
            My work
          </button>
        </Link>

        <Link to="section-seven" className="link_holder">
          <button
            className={
              "sectionbutton_unactive " + (secBtn4 && "sectionbutton_active")
            }
            onClick={() => {}}
          >
            Projects
          </button>
        </Link>

        <Link to="section-four" className="link_holder">
          <button
            className={
              "sectionbutton_unactive " + (secBtn5 && "sectionbutton_active")
            }
          >
            Assign
          </button>
        </Link>

        {/* <Link
          to="section-five"
          smooth={true}
          duration={750}
          className="link_holder"
        >
          <button
            className={
              "sectionbutton_unactive " + (secBtn6 && "sectionbutton_active")
            }
          
          >
            Qualification
          </button>
        </Link> */}

        <Link to="section-eight" className="link_holder">
          <button
            className={
              "sectionbutton_unactive " + (secBtn7 && "sectionbutton_active")
            }
          >
            Contact
          </button>
        </Link>
      </div>
    </>
  );
}

export default SectionOne;
