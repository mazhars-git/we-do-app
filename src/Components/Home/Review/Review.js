import React from 'react';
import reviewImage from '../../../images/img/client_01.jpg';
import OurBrand from '../OurBrand/OurBrand';
import '../CSS/Review.css';

const Review = () => {
    return (
        <section>
            <div className="container review-area">
                <div className="row">
                    <div className="col-md-5 review-image">
                        <div className="img-box">
                            <img className="img-fluid" src={reviewImage} alt="" />
                            <div className="shape"></div>
                        </div>
                    </div>
                    
                    <div className="col-md-7 align-self-center">
                    <div className="review-content">
                            <h1 className="brand-heading border-style">What Clients Say.</h1>
                            <p className="brand-text">WE'RE MORE THEN A DIGITAL AGENCY</p>
                            <p style={{fontSize: '22px', lineHeight: '35px'}} className="my-5">We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achive continuous and sustainable growth of our clients.</p>

                            <p className="client-name">ARON SMITH, UX DESIGNER</p>
                    </div>
                    </div>
                </div>
            </div>
            <OurBrand />
        </section>
    );
};

export default Review;