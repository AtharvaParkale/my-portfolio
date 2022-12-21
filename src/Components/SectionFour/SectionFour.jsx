import React from 'react'
import './SectionFour.css'
import sec_image from '../../assets/images/sectionFour.svg'

function SectionFour() {
    return (
        <div className='sectionFour_container' id="section-four">
            <div className="sectionFour_one">
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
                    ➡️Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Deleniti accusantium nisi distinctio! <br /><br />
                    ➡️Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Deleniti accusantium nisi distinctio! <br /><br />
                    ➡️Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Deleniti accusantium nisi distinctio! <br />
                </p>
            </div>
            <div className="sectionFour_two">
                <div className="secFour_img1 sectionFour_imageholder">
                    <img src={sec_image} alt="Image1" />
                </div>
                <div className="secFour_img2 sectionFour_imageholder">
                    <img src={sec_image} alt="Image1" />
                </div>
                <div className="secFour_img3 sectionFour_imageholder">
                    <img src={sec_image} alt="Image1" />
                </div>
            </div>
        </div>
    )
}

export default SectionFour