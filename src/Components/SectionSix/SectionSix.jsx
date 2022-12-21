import React, { useState } from "react";
import "./SectionSix.css";
// import img1 from "../../assets/images/sec6_img1.png";
import img2 from "../../assets/images/sec6_img2.png";
import img3 from "../../assets/images/sec6_img3.png";
import img4 from "../../assets/images/sec6_img4.png";
import img5 from "../../assets/images/sec6_img5.png";
import video1 from "../../assets/videos/calendar.mp4";

// className={"menu " + (menuOpen && "menu_active")}

function SectionSix() {
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);
  const [btn5, setBtn5] = useState(false);
  return (
    <div className="sectionSix_container" id="section-six">
      <div className="sectionSix_navbar">
        <button
          className={"sectionSix_beforeBtnclick " + (btn1 && "btn_active")}
          onClick={() => {
            setBtn1(true);
            setBtn2(false);
            setBtn3(false);
            setBtn4(false);
            setBtn5(false);
          }}
        >
          Calendar
        </button>
        <button
          className={"sectionSix_beforeBtnclick " + (btn2 && "btn_active")}
          onClick={() => {
            setBtn1(false);
            setBtn2(true);
            setBtn3(false);
            setBtn4(false);
            setBtn5(false);
          }}
        >
          GST
        </button>
        <button
          className={"sectionSix_beforeBtnclick " + (btn3 && "btn_active")}
          onClick={() => {
            setBtn1(false);
            setBtn2(false);
            setBtn3(true);
            setBtn4(false);
            setBtn5(false);
          }}
        >
          Credit
        </button>
        <button
          className={"sectionSix_beforeBtnclick " + (btn4 && "btn_active")}
          onClick={() => {
            setBtn1(false);
            setBtn2(false);
            setBtn3(false);
            setBtn4(true);
            setBtn5(false);
          }}
        >
          Days
        </button>
        <button
          className={"sectionSix_beforeBtnclick " + (btn5 && "btn_active")}
          onClick={() => {
            setBtn1(false);
            setBtn2(false);
            setBtn3(false);
            setBtn4(false);
            setBtn5(true);
          }}
        >
          Banking
        </button>
      </div>
      <div className="sectionSix_content">
        <div className="sectionSix_contentSection sectionSix_contentSection_one">
          {btn1 ? (
            <>
              <h2>Calendar </h2>
              <p>
                This web app helps the user to mark an event on the calendar. I
                have used ReactJS and AWS APIs to build this web app. <br />
                <br />
                <button>
                  <a
                    href="https://github.com/AtharvaParkale/events-calendar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Check
                  </a>
                </button>
              </p>
            </>
          ) : btn2 ? (
            <>
              <h2>GST Calculator</h2>
              <p>
                This is an advanced GST calculator made using ReactJs. This web
                app helps the user to calculate GST at different rates. It also
                provides a full breakdown of GST.
                <br />
                <br />
                <a
                  href="https://gst-calculator-by-atharva.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Check</button>
                </a>
              </p>
            </>
          ) : btn3 ? (
            <>
              <h2>Credit Calculator</h2>
              <p>
                This calculator can be used for calculating the tax payable
                under CGST, IGST and SGST and also for calculating Input tax
                credit which is allowed in all scenarios. This web app is made
                using ReactJS.
                <br />
                <br />
                <a
                  href="https://input-credit-calculator-by-atharva.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Check</button>
                </a>
              </p>
            </>
          ) : btn4 ? (
            <>
              <h2>Days Calculator</h2>
              <p>
                A basic web-app which calculates the number of days, minutes,
                hours, weeks etc between two dates. This web app is made using
                ReactJs
                <br />
                <br />
                <a
                  href="https://days-calculator-by-atharvaparkale.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Check</button>
                </a>
              </p>
            </>
          ) : btn5 ? (
            <>
              <h2>Banking System</h2>
              <p>
                This is basic banking system made using reactjs and firebase.
                This web app enables the user to send money to other user.
                <br />
                <br />
                <a
                  href="https://clever-banach-b6b540.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Check</button>
                </a>
              </p>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="sectionSix_contentSection sectionSix_contentSection_two">
          <div className="sec6_images">
            {btn1 ? (
              //   <img src={img1} alt="Image1" />
              <video autoPlay loop muted>
                <source src={video1} type="video/mp4" />
              </video>
            ) : btn2 ? (
              <img src={img2} alt="Image2" />
            ) : btn3 ? (
              <img src={img3} alt="Image3" />
            ) : btn4 ? (
              <img src={img4} alt="Image4" />
            ) : btn5 ? (
              <img src={img5} alt="Image5" />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
