import React,{useEffect,useState} from 'react'
import './SectionSeven.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import profile_picture from '../../assets/images/profile_picture.jpg'


function SectionSeven() {
    const [nCard, setNCard] = useState(4);

    const setNumCard=(n)=>{
        if(window.innerWidth<600){
            // console.log("hi jhbhbas")
            setNCard(1);
        }
        else{
            setNCard(3);
        }
    }

    useEffect(() => {
      setNumCard(nCard);
      window.addEventListener("scroll", setNumCard)
    },[nCard])
    
    return (
        <div className='sectionSeven_container' id="section-seven">
            <div className="sectionSeven_header">
                <h1>Lorem ipsum dolor</h1>
            </div>
            <div className="sectionSeven_cardholders">
                {/* <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div> */}
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={nCard}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide >
                        <div className='card'>
                            <div className="card_image">
                                <img src={profile_picture} alt="Profile" />
                            </div>
                            <p>Lorem ipsum dolor, sit
                                amet consectetur adipisicing elit. Atque incidunt sunt, magni cupiditate ab est.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='card'>
                            <div className="card_image">
                                <img src={profile_picture} alt="Profile" />
                            </div>
                            <p>Lorem ipsum dolor, sit
                                amet consectetur adipisicing elit. Atque incidunt sunt, magni cupiditate ab est.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='card'>
                            <div className="card_image">
                                <img src={profile_picture} alt="Profile" />
                            </div>
                            <p>Lorem ipsum dolor, sit
                                amet consectetur adipisicing elit. Atque incidunt sunt, magni cupiditate ab est.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='card'>
                            <div className="card_image">
                                <img src={profile_picture} alt="Profile" />
                            </div>
                            <p>Lorem ipsum dolor, sit
                                amet consectetur adipisicing elit. Atque incidunt sunt, magni cupiditate ab est.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='card'>
                            <div className="card_image">
                                <img src={profile_picture} alt="Profile" />
                            </div>
                            <p>Lorem ipsum dolor, sit
                                amet consectetur adipisicing elit. Atque incidunt sunt, magni cupiditate ab est.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='card'>
                            <div className="card_image">
                                <img src={profile_picture} alt="Profile" />
                            </div>
                            <p>Lorem ipsum dolor, sit
                                amet consectetur adipisicing elit. Atque incidunt sunt, magni cupiditate ab est.</p>
                        </div>
                    </SwiperSlide>




                </Swiper>

            </div>
        </div>
    )
}

export default SectionSeven