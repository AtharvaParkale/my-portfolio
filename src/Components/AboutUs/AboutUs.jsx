import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.css'
import bgOne from './Images/bg1.png'
import section4_image1 from './Images/section4_image1.png'
import section4_image2 from './Images/section4_image2.png'
import section4_image3 from './Images/section4_image3.png'
import section4_image4 from './Images/section4_image4.png'
import section4_image5 from './Images/section4_image5.png'
import Footer from '../Footer/Footer'

function AboutUs() {
    return (
        <div className='aboustUs_container'>
            <div className="aboutUs_section aboutUs_section2">
                <img src={bgOne} alt="" />
            </div>
            <div className="aboutUs_section aboutUs_section1">
                <div className="aboutUs_section1_header">
                    <h1>About Businus.com</h1>
                    <p>Since 1994, Businus.com is a multidisciplinary
                        and integrated problem solver to resolve
                        your current business concerns. Businus.com
                        is lead by stalwarts and professionally
                        qualified experts in various fields who bring
                        n decades of experience on to the table to help
                        simplify complex business needs. We have developed expertise
                        in catering to the legal, financial and management needs of corporate's, startup's and social enterprises alike. Our approach to problem solving is more proactive than reactive. We are a Trusted Business Partner. Our focus is to build a healthy and lasting relationship with the clients by providing them with quality products and services through its high caliber knowledge base, value added professional advice, continuous professional development, commitment and ethical & honest approach .</p>
                </div>
            </div>
            <div className="aboutUs_section aboutUs_section3">
                <h1>Our Mission</h1>
                <p>We believe that for a nation to grow, it’s businesses must grow. Our mission is to act as catalysts for business growth by offering quality products and services.</p>
            </div>
            <div className="aboutUs_section aboutUs_section4">
                <div className="aboutUs_section4_header">
                    <h1>Our Values</h1>
                </div>
                <div className="aboutUs_section4_inner">
                    <div className="aboutUs_section4_card aboutUs_section4_card1">
                        <div className="section4_card_image">
                            <img src={section4_image1} alt="Image 1" />
                        </div>
                        <div className="section4_card_header">
                            <h6>Teamwork</h6>
                            <p>Our professional team is a winning combination.</p>
                        </div>
                    </div>

                    <div className="aboutUs_section4_card aboutUs_section4_card2">
                        <div className="section4_card_image">
                            <img src={section4_image2} alt="Image 1" />
                        </div>
                        <div className="section4_card_header">
                            <h6>Teamwork</h6>
                            <p>Our professional team is a winning combination.</p>
                        </div>
                    </div>
                    <div className="aboutUs_section4_card aboutUs_section4_card3">
                        <div className="section4_card_image">
                            <img src={section4_image3} alt="Image 1" />
                        </div>
                        <div className="section4_card_header">
                            <h6>Teamwork</h6>
                            <p>Our professional team is a winning combination.</p>
                        </div>
                    </div>
                    <div className="aboutUs_section4_card aboutUs_section4_card4">
                        <div className="section4_card_image">
                            <img src={section4_image4} alt="Image 1" />
                        </div>
                        <div className="section4_card_header">
                            <h6>Teamwork</h6>
                            <p>Our professional team is a winning combination.</p>
                        </div>
                    </div>
                    <div className="aboutUs_section4_card aboutUs_section4_card5">
                        <div className="section4_card_image">
                            <img src={section4_image5} alt="Image 1" />
                        </div>
                        <div className="section4_card_header">
                            <h6>Teamwork</h6>
                            <p>Our professional team is a winning combination.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutUs