import React, { useState, useEffect } from "react";
import "./Footer.css";
import { HiArrowCircleUp } from "react-icons/hi";
import { Link } from "react-scroll";

function Footer() {
  const [footerArrow, setFooterArrow] = useState(false);

  const setArrow = () => {
    if (window.scrollY < 110) {
      setFooterArrow(false);
    } else {
      setFooterArrow(true);
    }
  };
  useEffect(() => {
    setArrow();
    window.addEventListener("scroll", setArrow);
  });

  return (
    <>
      <div className="footer_container">
        <span>Made with ❤️ by Atharva Parkale</span>
      </div>
      {footerArrow ? (
        <div className="scroll_up">
          <Link to="section-one" >
            <HiArrowCircleUp size={60} />
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Footer;
