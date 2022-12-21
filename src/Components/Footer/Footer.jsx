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
                <div className="footer_top">
                    <div className="footer_top_inner1 footer_top_inner">
                        <h5>Company</h5>
                        <p> <LinkPage to="/aboutus">About us</LinkPage></p>
                        <p><LinkPage to="/contactus">Contact us</LinkPage></p>
                    </div>
                    <div className="footer_top_inner2 footer_top_inner">
                        <h5>Find Us</h5>
                        <div className="social_icons">
                            <a href="https://www.facebook.com/businusdotcom" target="_blank"><FaFacebook size={30} id='facebook' /></a>
                            <a href="https://twitter.com/businusdotcom" target="_blank"><AiFillTwitterSquare size={30} id='twitter' /></a>
                            <a href="https://www.linkedin.com/company/businusdotcom/" target="_blank"><AiFillLinkedin size={30} id='linkedin' /></a>
                            <a href="https://www.instagram.com/businusdotcom/" target="_blank"> <FaInstagramSquare size={30} id='instagram' /></a>
                            <a href="https://www.youtube.com/channel/UCyuXLlNdLhlgF97f89yYrpg" target="_blank"><BsYoutube size={30} id='youtube' /></a>
                        </div>
                    </div>
                    <div className="footer_top_inner3 footer_top_inner">
                        <h5>Subscribe</h5>
                        <div className="footer_email">
                            <p>Your Email</p>
                            <input type="email" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className="footer_top_inner4 footer_top_inner">
                        <div className='footer_logo'>
                            <img src={footerLogo} alt="Businus.Dashboard" />
                        </div>
                    </div>
                </div>

                <div className="footer_bottom">
                    <div className="footer_div">
                        <LinkPage to='termscondition'>
                            <img src={footer1} alt="Footer1" />
                            <span>Terms and Conditions</span>
                        </LinkPage>
                        {/* </Link> */}
                    </div>
                    <div className="footer_div">
                        <LinkPage to='privacypolicy'>
                            <img src={footer2} alt="Footer2" />
                            <span>Privacy Policy</span>
                        </LinkPage>
                    </div>
                    <p>Copyright ©️ businusdashboard.com 2022</p>
                    <div className="footer_div">
                        <LinkPage to='confpolicy'>
                            <img src={footer3} alt="Footer3" />
                            <span>Confidentiality Policy</span>
                        </LinkPage>
                    </div>
                    <div className="footer_div">
                        <LinkPage to='discpolicy'>
                            <img src={footer4} alt="Footer4" />
                            <span>Disclaimer Policy</span>
                        </LinkPage>
                    </div>
                </div>
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