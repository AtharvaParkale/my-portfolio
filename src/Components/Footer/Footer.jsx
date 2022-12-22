import React, { useState, useEffect } from 'react'
import './Footer.css'
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { HiArrowCircleUp } from 'react-icons/hi';
import { BsYoutube } from 'react-icons/bs';
import footerLogo from '../../assets/images/businusDashboardLogo.7b4efcab.png';
import { Link } from "react-scroll";
import footer1 from '../../assets/images/footr1.png'
import footer2 from '../../assets/images/footer2.png'
import footer3 from '../../assets/images/footer3.png'
import footer4 from '../../assets/images/footer4.png'
import { Link as LinkPage } from 'react-router-dom';



function Footer() {
    const [footerArrow, setFooterArrow] = useState(false);

    const setArrow = () => {
        console.log(window.scrollY);
        if (window.scrollY < 110) {
            setFooterArrow(false);
        }
        else {
            setFooterArrow(true);
        }
    }
    useEffect(() => {
        setArrow();
        window.addEventListener("scroll", setArrow)
    })


    return (
        <>
            <div className='footer_container'>
                <span>Made with ❤️ by Atharva Parkale</span>
            </div>
            {footerArrow ? <div className="scroll_up">
                <Link to="section-one" smooth={true} duration={900} >
                    <HiArrowCircleUp size={60} />
                </Link>
            </div> : ""
            }
        </>
    )
}

export default Footer