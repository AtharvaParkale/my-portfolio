import React, { useState, useEffect } from "react";
import "./SectionOne.css";
import section_image from "../../assets/images/section1_image.jpg";
import coding_gif from "../../assets/images/coding gif.gif";
import { Link } from "react-scroll";
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import no_bg from '../../assets/images/no-bg.jpg'

function SectionOne() {
  const [secBtn1, setSecBtn1] = useState(false);
  const [secBtn2, setSecBtn2] = useState(false);
  const [secBtn3, setSecBtn3] = useState(false);
  const [secBtn4, setSecBtn4] = useState(false);
  const [secBtn5, setSecBtn5] = useState(false);
  const [secBtn6, setSecBtn6] = useState(false);
  const [secBtn7, setSecBtn7] = useState(false);

  const changeNavColor = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 690) {
      setSecBtn1(true);
      setSecBtn2(false);
      setSecBtn3(false);
      setSecBtn4(false);
      setSecBtn5(false);
      setSecBtn6(false);
      setSecBtn7(false);
    } else {
      setSecBtn1(false);
    }

    if (window.scrollY >= 1490) {
      setSecBtn1(false);
      setSecBtn2(true);
      setSecBtn3(false);
      setSecBtn4(false);
      setSecBtn5(false);
      setSecBtn6(false);
      setSecBtn7(false);
    } else {
      setSecBtn2(false);
    }

    if (window.scrollY >= 2180) {
      setSecBtn1(false);
      setSecBtn2(false);
      setSecBtn3(true);
      setSecBtn4(false);
      setSecBtn5(false);
      setSecBtn6(false);
      setSecBtn7(false);
    } else {
      setSecBtn3(false);
    }
    if (window.scrollY >= 2890) {
      setSecBtn1(false);
      setSecBtn2(false);
      setSecBtn3(false);
      setSecBtn4(true);
      setSecBtn5(false);
      setSecBtn6(false);
      setSecBtn7(false);
    } else {
      setSecBtn4(false);
    }

    if (window.scrollY >= 2890) {
      setSecBtn1(false);
      setSecBtn2(false);
      setSecBtn3(false);
      setSecBtn4(true);
      setSecBtn5(false);
      setSecBtn6(false);
      setSecBtn7(false);
    } else {
      setSecBtn4(false);
    }
    if (window.scrollY >= 3690) {
      setSecBtn1(false);
      setSecBtn2(false);
      setSecBtn3(false);
      setSecBtn4(false);
      setSecBtn5(true);
      setSecBtn6(false);
      setSecBtn7(false);
    } else {
      setSecBtn5(false);
    }
    if (window.scrollY >= 4400) {
      setSecBtn1(false);
      setSecBtn2(false);
      setSecBtn3(false);
      setSecBtn4(false);
      setSecBtn5(false);
      setSecBtn6(true);
      setSecBtn7(false);
    } else {
      setSecBtn6(false);
    }
    if (window.scrollY >= 5170) {
      setSecBtn1(false);
      setSecBtn2(false);
      setSecBtn3(false);
      setSecBtn4(false);
      setSecBtn5(false);
      setSecBtn6(false);
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
            <button id="btn-2"><p>Contact me </p><DoubleArrowIcon/> </button>
          </div>
        </div>

        <div className="sectionOne_innercontainer2">
          <div className="sectionOne_innercontainer2-image-holder">
            <img src={no_bg} alt="" />
          </div>
        </div>
      </div>
      <div className="sectionOne_navbar">
        <Link
          to="section-two"
          smooth={true}
          duration={750}
          className="link_holder"
        >
          <button
            className={
              "sectionbutton_unactive " + (secBtn1 && "sectionbutton_active")
            }
         
          >
            About Me
          </button>
        </Link>

        <Link
          to="section-three"
          smooth={true}
          duration={750}
          className="link_holder"
        >
          <button
            className={
              "sectionbutton_unactive " + (secBtn2 && "sectionbutton_active")
            }
            onClick={() => {
              setSecBtn1(false);
              // setSecBtn2(true);
              // setSecBtn3(false);
              // setSecBtn4(false);
              // setSecBtn5(false);
              // setSecBtn6(false);
              // setSecBtn7(false);
            }}
          >
            Skills
          </button>
        </Link>

        <Link
          to="section-six"
          smooth={true}
          duration={750}
          className="link_holder"
        >
          <button
            className={
              "sectionbutton_unactive " + (secBtn3 && "sectionbutton_active")
            }
            onClick={() => {
              // setSecBtn1(false);
              // setSecBtn2(false);
              // // setSecBtn3(true);
              // setSecBtn4(false);
              // setSecBtn5(false);
              // setSecBtn6(false);
              // setSecBtn7(false);
            }}
          >
            My work
          </button>
        </Link>

        <Link
          to="section-seven"
          smooth={true}
          duration={750}
          className="link_holder"
        >
          <button
            className={
              "sectionbutton_unactive " + (secBtn4 && "sectionbutton_active")
            }
            onClick={() => {
           
            }}
          >
            Projects
          </button>
        </Link>

        <Link
          to="section-four"
          smooth={true}
          duration={750}
          className="link_holder"
        >
          <button
            className={
              "sectionbutton_unactive " + (secBtn5 && "sectionbutton_active")
            }
            onClick={() => {
              // setSecBtn1(false);
              // setSecBtn2(false);
              // setSecBtn3(false);
              // setSecBtn4(false);
              // // setSecBtn5(true);
              // setSecBtn6(false);
              // setSecBtn7(false);
            }}
          >
            Qualification
          </button>
        </Link>

        <Link
          to="section-five"
          smooth={true}
          duration={750}
          className="link_holder"
        >
          <button
            className={
              "sectionbutton_unactive " + (secBtn6 && "sectionbutton_active")
            }
            onClick={() => {
              // setSecBtn1(false);
              // setSecBtn2(false);
              // setSecBtn3(false);
              // setSecBtn4(false);
              // setSecBtn5(false);
              // // setSecBtn6(true);
              // setSecBtn7(false);
            }}
          >
            Assign
          </button>
        </Link>

        <Link
          to="section-eight"
          smooth={true}
          duration={750}
          className="link_holder"
        >
          <button
            className={
              "sectionbutton_unactive " + (secBtn7 && "sectionbutton_active")
            }
            onClick={() => {
              // setSecBtn1(false);
              // setSecBtn2(false);
              // setSecBtn3(false);
              // setSecBtn4(false);
              // setSecBtn5(false);
              // setSecBtn6(false);
              // setSecBtn7(true);
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
