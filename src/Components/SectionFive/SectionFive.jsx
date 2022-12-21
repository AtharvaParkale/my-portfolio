import React from 'react'
import './SectionFive.css'
import sec_image from '../../assets/images/sectionFour.svg'

function SectionFive() {
    return (
        <div className='sectionFive_container' id="section-five">
            <div className="sectionFive_two">
                <div className="secFive_img1 sectionFive_imageholder">
                    <img src={sec_image} alt="Image1" />
                </div>
                <div className="secFive_img2 sectionFive_imageholder">
                    <img src={sec_image} alt="Image1" />
                </div>
                <div className="secFive_img3 sectionFive_imageholder">
                    <img src={sec_image} alt="Image1" />
                </div>
            </div>
            <div className="sectionFive_one">
                <h1>Lorem, ipsum dolor.</h1>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Similique laudantium adipisci
                    nulla amet beatae officiis
                    suscipit laboriosam perspiciatis!
                    Sapiente eveniet, aspernatur qui
                    labore rem autem. Lorem, ipsum
                    dolor sit amet consectetur
                    adipisicing elit. Nisi, nemo.
                </p>
                <p>
                ➡️ Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Deleniti accusantium nisi distinctio! <br /><br />
                ➡️ Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Deleniti accusantium nisi distinctio! <br /><br />
                ➡️ Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Deleniti accusantium nisi distinctio! <br />
                </p>
            </div>

        </div>
    )
}

export default SectionFive