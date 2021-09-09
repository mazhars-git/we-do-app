import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slImage_1 from '../../../images/news slider/01-min.jpg';
import slImage_2 from '../../../images/news slider/02-min.jpg';
import slImage_3 from '../../../images/news slider/03-min.jpg';
import slImage_4 from '../../../images/news slider/04-min.jpg';
import slImage_5 from '../../../images/news slider/05-min.jpg';
import slImage_6 from '../../../images/news slider/06-min.jpg';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

import SwiperCore, {
    Pagination, Autoplay
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Pagination, Autoplay]);

const NewsSlider = () => {

    return (
        <section className="container">
            <Swiper 
                slidesPerView={3} 
                spaceBetween={30} 
                autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                    }} pagination={{
                    "clickable": true
                }}
            >

                <SwiperSlide><img className="img-fluid" src={slImage_2} alt="" />
                    <div class="carousel-caption d-none d-md-block">
                        <h6 className="text-white">CAREER/MARKETING</h6>
                        <p>How to become a best sell marketer in a year</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide><img className="img-fluid" src={slImage_1} alt="" />
                    <div class="carousel-caption d-none d-md-block">
                        <h6>CAREERS</h6>
                        <p>Winnings tactics for a new digital agency</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide><img className="img-fluid" src={slImage_3} alt="" />
                    <div class="carousel-caption d-none d-md-block">
                        <h6>DESIGN/UX</h6>
                        <p>How to drive your customer experience</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={slImage_4} alt="" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={slImage_5} alt="" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={slImage_6} alt="" /></SwiperSlide>

            </Swiper>
              
        </section>
    );
};

export default NewsSlider;