import React from 'react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide_1 from '../../../images/work slider/02-min-1-1024x683.jpg';
import slide_2 from '../../../images/work slider/03-min-1-1024x683.jpg';
import slide_3 from '../../../images/work slider/04-min-1-1024x683.jpg';
import slide_4 from '../../../images/work slider/05-min-1-1024x683.jpg';
import slide_5 from '../../../images/work slider/07-min-1024x683.jpg';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';



// import "swiper/css";
// import "swiper/css/pagination";

import SwiperCore, {
    Pagination
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Pagination]);

const SwiperReact = () => {
    return (
        <div className="container py-5">
            <>
                <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                "clickable": true
                }} className="mySwiper">
                <SwiperSlide><img className="img-fluid" src={slide_1} alt="" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={slide_2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={slide_3} alt="" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={slide_4} alt="" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={slide_5} alt="" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={slide_2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={slide_5} alt="" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={slide_4} alt="" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={slide_3} alt="" /></SwiperSlide>
                </Swiper>
            </>
           
        </div>
    );
};

export default SwiperReact;