import React from 'react';
import br_1 from '../../../images/brand/1.png';
import br_2 from '../../../images/brand/2.png';
import br_3 from '../../../images/brand/3.png';
import br_4 from '../../../images/brand/4.png';
import br_5 from '../../../images/brand/5.png';
import br_6 from '../../../images/brand/6.png';
import '../CSS/Review.css';

const OurBrand = () => {
    return (
        <section>
            <div className="container brand-border">
                <div className="row text-center">
                    <div className="col-md-2">
                        <img src={br_1} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img src={br_2} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img src={br_3} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img src={br_4} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img src={br_5} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img src={br_6} alt="" />
                    </div>
                </div>
            </div>
            <div className="border-st-bottom"></div>
        </section>
    );
};

export default OurBrand;