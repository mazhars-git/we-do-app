import React from 'react';
import aboutImg_1 from '../../../images/img/about_01.jpg';
import aboutImg_2 from '../../../images/img/about_02.jpg';
import aboutImg_3 from '../../../images/img/about_03.jpg';

const About = () => {
    return (
        <section className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>About.</h1>
                    <p style={{color: 'red'}}>WE'RE MORE THEN A DIGITAL AGENCY.</p>
                </div>
                <div className="col-md-6">
                    <p>Lorem ipsu dolor sit amet consectuar adipisng elit. Tempore corrpted temporitus fuga earum asperioses. alias excepturit sit Impedit, fugit laudantium.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <img className="img-fluid" src={aboutImg_1} alt="" />
                </div>
                <div className="col-md-4">
                    <div className="mb-3"><img className="img-fluid" src={aboutImg_2} alt="" /></div>
                    <div><img className="img-fluid" src={aboutImg_3} alt="" /></div>
                </div>
            </div>

            <div className="row pt-3">
                <div className="col-md-4">
                    <h3>Who We Are</h3>
                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward will have multiple touchingpoints for offshoring.</p>
                </div>
                <div className="col-md-4">
                    <h3>Our Philosophy</h3>
                    <p>A new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time.</p>
                </div>
                <div className="col-md-4">
                    <h3>How We Work</h3>
                    <p>Capitalize on low hanging fruit to  identify a ballpark value added activity to beta test. Override the digital divide with additional clicktroughs from DevOps.
                    </p>
                </div>
            </div>
            <div>
                
            </div>
        </section>
    );
};

export default About;