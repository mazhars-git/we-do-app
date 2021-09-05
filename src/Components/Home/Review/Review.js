import React from 'react';
import reviewImage from '../../../images/img/client_01.jpg';

const Review = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-5">
                    <img className="img-fluid" src={reviewImage} alt="" />
                </div>
                <div className="col-md-7">
                    <h1>What Clients Say.</h1>
                    <p>WE'RE MORE THEN A DIGITAL AGENCY</p>
                    <p style={{fontSize: '22px', lineHeight: '35px'}} className="my-5">We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achive continuous and sustainable growth of our clients.</p>

                    <h6 className="pt-5">ARON SMITH, UX DESIGNER</h6>
                </div>
            </div>
        </div>
    );
};

export default Review;