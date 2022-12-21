import React, { useState } from 'react'
import './SectionSix.css'
import img1 from '../../assets/images/sec6_img1.png'
import img2 from '../../assets/images/sec6_img2.png'
import img3 from '../../assets/images/sec6_img3.png'
import img4 from '../../assets/images/sec6_img4.png'
import img5 from '../../assets/images/sec6_img5.png'

// className={"menu " + (menuOpen && "menu_active")}

function SectionSix() {
    const [btn1, setBtn1] = useState(true)
    const [btn2, setBtn2] = useState(false)
    const [btn3, setBtn3] = useState(false)
    const [btn4, setBtn4] = useState(false)
    const [btn5, setBtn5] = useState(false)
    return (
        <div className='sectionSix_container' id="section-six">
            <div className="sectionSix_navbar">
                <button className={"sectionSix_beforeBtnclick " + (btn1 && "btn_active")}
                    onClick={() => {
                        setBtn1(true);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                    }}>Section-1</button>
                <button className={"sectionSix_beforeBtnclick " + (btn2 && "btn_active")}
                    onClick={() => {
                        setBtn1(false);
                        setBtn2(true);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                    }}
                >Section-2</button>
                <button className={"sectionSix_beforeBtnclick " + (btn3 && "btn_active")}
                    onClick={() => {
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(true);
                        setBtn4(false);
                        setBtn5(false);
                    }}
                >Section-3</button>
                <button className={"sectionSix_beforeBtnclick " + (btn4 && "btn_active")}
                    onClick={() => {
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(true);
                        setBtn5(false);
                    }}
                >Section-4</button>
                <button className={"sectionSix_beforeBtnclick " + (btn5 && "btn_active")}
                    onClick={() => {
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(true);
                    }}
                >Section-5</button>
            </div>
            <div className="sectionSix_content">
                <div className="sectionSix_contentSection sectionSix_contentSection_one">
                    {
                        btn1 ?
                            <>
                                <h1>This is section -1</h1>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Culpa earum facere
                                    distinctio, eum ipsum temporibus officia
                                    odit dicta possimus in modi fugiat cupiditate,
                                    saepe porro sed? Consectetur ab veniam est voluptas
                                    quidem, blanditiis eaque culpa, molestias aut quas
                                    deserunt illo.<br /><br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Quidem non hic incidunt quis, nisi a!
                                </p>
                            </> :
                            btn2 ?
                                <>
                                    <h1>This is section -2</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Illo quas sit eaque
                                        dolorum? Error, veniam ad quia enim qui dolorem?.
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing<br /><br />
                                        elit. Quidem non hic incidunt quis, nisi a!
                                    </p>
                                </> :
                                btn3 ?
                                    <>
                                        <h1>This is section -3</h1>
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            Voluptates tempora nesciunt facere? Fuga unde quam ipsam
                                            facere est explicabo culpa in ratione,
                                            quod id laudantium dolore error ab quia eos.<br /><br />
                                            elit. Quidem non hic incidunt quis, nisi a!
                                        </p>
                                    </> :
                                    btn4 ?
                                        <>
                                            <h1>This is section -4</h1>
                                            <p>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Voluptates tempora nesciunt facere? Fuga unde quam ipsam
                                                facere est explicabo culpa in ratione,
                                                quod id laudantium dolore error ab quia eos.<br /><br />
                                                elit. Quidem non hic incidunt quis, nisi a!
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, sed.
                                            </p>
                                        </> :
                                        btn5 ?
                                            <>
                                                <h1>This is section -5</h1>
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                    Voluptates tempora nesciunt facere? Fuga unde quam ipsam
                                                    facere est explicabo culpa in ratione,
                                                    quod id laudantium dolore error ab quia eos.<br /><br />

                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, sed.
                                                </p>
                                            </> : ""
                    }
                </div>
                <div className="sectionSix_contentSection sectionSix_contentSection_two">
                    <div className="sec6_images">
                        {
                            btn1?<img src={img1} alt="Image1" />:
                            btn2?<img src={img2} alt="Image2" />:
                            btn3?<img src={img3} alt="Image3" />:
                            btn4?<img src={img4} alt="Image4" />:
                            btn5?<img src={img5} alt="Image5" />:""
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionSix