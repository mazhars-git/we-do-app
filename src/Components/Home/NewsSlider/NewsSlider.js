import React from 'react';
import sliderImage_1 from '../../../images/news slider/01-min.jpg';
import sliderImage_2 from '../../../images/news slider/02-min.jpg';
import sliderImage_3 from '../../../images/news slider/03-min.jpg';
import sliderImage_4 from '../../../images/news slider/04-min.jpg';
import sliderImage_5 from '../../../images/news slider/05-min.jpg';
import sliderImage_6 from '../../../images/news slider/06-min.jpg';



const NewsSlider = () => {
   

    return (
        <section className="container">
            <div className="row">
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators slider-button">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>

                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src={sliderImage_1} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 className="text-white">CAREER/MARKETING</h5>
                                <p>How to become a best sell marketer in a year</p>
                            </div>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={sliderImage_2} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>CAREERS</h5>
                                <p>Winnings tactics for a new digital agency</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={sliderImage_3} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={sliderImage_4} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>DESIGN/UX</h5>
                                <p>How to drive your customer experience</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={sliderImage_5} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={sliderImage_6} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsSlider;