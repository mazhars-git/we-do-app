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



import SwiperCore, {
    Pagination
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Pagination]);

const SwiperReact = () => {
    return (
        <div className="container py-5">
            <>
                <Swiper 
                    slidesPerView={3} 
                    spaceBetween={30} 
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                        }} pagination={{
                        "clickable": true
                      }} navigation={true} className="mySwiper"
                >

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


                <>
                    <Swiper slidesPerView={3} spaceBetween={30} centeredSlides={true} 
                        autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                    }} pagination={{
                    "clickable": true
                    }} navigation={true} className="mySwiper">

                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </>
            
            
            </>
           
        </div>
    );
};

export default SwiperReact;