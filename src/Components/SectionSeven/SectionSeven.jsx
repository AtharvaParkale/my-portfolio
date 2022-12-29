import React, { useEffect, useState } from "react";
import "./SectionSeven.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import timerimg from '../../assets/images/thumbnails/timer.png'
import wackimg from '../../assets/images/thumbnails/wack.png'
import webcamimg from '../../assets/images/thumbnails/webcam.png'
import clockimg from '../../assets/images/thumbnails/clock.png'
import canvasimg from '../../assets/images/thumbnails/canvas.png'
import yuvaimg from '../../assets/images/thumbnails/yuva.png'

function SectionSeven() {
  const [nCard, setNCard] = useState(4);

  const setNumCard = (n) => {
    if (window.innerWidth < 600) {
      setNCard(1);
    } else {
      setNCard(3);
    }
  };

  useEffect(() => {
    setNumCard(nCard);
    window.addEventListener("scroll", setNumCard);
  }, [nCard]);

  return (
    <div className="sectionSeven_container" id="section-seven">
      <div className="sectionSeven_header">
        <h1>JS Projects</h1>
      </div>
      <div className="sectionSeven_cardholders">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={nCard}
          navigation
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="card">
              <div className="card_image">
                <img src={wackimg} alt="Profile" />
              </div>
              <h2>Wack a mole</h2>

              <a href="https://spectacular-gecko-eecfcc.netlify.app/" target="_blank" rel="noreferrer">
                <button>View</button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card_image">
                <img src={clockimg} alt="Profile" />
              </div>

              <h2>JS Clock</h2>
              <a href="https://stunning-sunburst-616ee9.netlify.app/" target="_blank" rel="noreferrer">
                <button>View</button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card_image">
                <img src={yuvaimg} alt="Profile" />
              </div>

              <h2>YM Website</h2>
              <a href="https://yuvamarathivit.in/" target="_blank" rel="noreferrer">
                <button>View</button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card_image">
                <img src={canvasimg} alt="Profile" />
              </div>

              <h2>Canvas</h2>
              <a href="https://symphonious-lokum-a2e1bb.netlify.app/" target="_blank" rel="noreferrer">
                <button>View</button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card_image">
                <img src={timerimg} alt="Profile" />
              </div>

              <h2>Timer</h2>
              <a href="https://mellow-daffodil-2c1830.netlify.app/" target="_blank" rel="noreferrer">
                <button>View</button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card_image">
                <img src={webcamimg} alt="Profile" />
              </div>

              <h2>Web Cam</h2>
              <a href="https://zesty-choux-b7a6ab.netlify.app/" target="_blank" rel="noreferrer">
                <button>View</button>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SectionSeven;
