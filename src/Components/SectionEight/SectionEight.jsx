import React from 'react'
import './SectionEight.css'
import familyImage from '../../assets/images/family_image.jpg'
import { Link } from 'react-router-dom'

function SectionEight() {
    return (
        <div className='sectionEight_container' id="section-eight">
            <div className="sectionEight_innercontainer sectionEight_innercontainer1">
                <div className="sectionEight_innercontainerImage">
                    <img src={familyImage} alt="Image" />
                </div>
                <div className="sectionEight_innercontainerContent">
                    <div className="content_header">
                        <h2>Lorem, ipsum.</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <button className="content_button">
                        <Link to='demoform'>Book a demo</Link>
                    </button>
                </div>
            </div>
            <div className="sectionEight_innercontainer sectionEight_innercontainer2">
                <div className="content_header2 sectionEight_innercontainerContent">
                    <div className="content_header">
                        <h2 >Lorem, ipsum.</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <button className="content_button">
                        <Link to ='freetrial'>Request a free trial</Link>
                    </button>
                </div>
                <div className="sectionEight_innercontainerImage">
                    <img src={familyImage} alt="Image" />
                </div>
            </div>
        </div>
    )
}

export default SectionEight
