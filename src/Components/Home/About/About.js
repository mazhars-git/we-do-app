import React from 'react';
import aboutImg_1 from '../../../images/img/about_01.jpg';
import aboutImg_2 from '../../../images/img/about_02.jpg';
import aboutImg_3 from '../../../images/img/about_03.jpg';
import '../CSS/About.css';

const About = () => {
    return (
        <section id="about">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="brand-heading border-style">About.</h1>
                        <p className="brand-text">WE'RE MORE THEN A DIGITAL AGENCY.</p>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <p>Lorem ipsu dolor sit amet consectuar adipisng elit. Tempore corrpted temporitus fuga earum asperioses. alias excepturit sit Impedit, fugit laudantium.</p>
                    </div>
                </div>
                
                <div className="row py-5">
                    <div className="col-md-8 mb-3">
                        <div className="team-container">
                            <img className="img-fluid" src={aboutImg_1} alt="" />
                            <div className="team-content-box p-3">
                                <div className="team-content">
                                    <h4>Teamwork</h4>
                                    <p>Committed and Creative</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-container mb-3">
                            <img className="img-fluid" src={aboutImg_2} alt="" />
                            <div className="team-content-box p-3">
                                <div className="team-content">
                                    <h4>Philosophy</h4>
                                    <p>Trust Pays Of</p>
                                </div>
                            </div>
                        </div>

                        <div className="team-container">
                            <img className="img-fluid" src={aboutImg_3} alt="" />
                            <div className="team-content-box p-3">
                                <div className="team-content">
                                    <h4>Office</h4>
                                    <p>Berlin, UK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row py-3 about-bottom">
                    <div className="col-md-4">
                        <h4 className="mb-5 fw-bold">Who We Are</h4>
                        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward will have multiple touchingpoints for offshoring.</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="mb-5 fw-bold">Our Philosophy</h4>
                        <p>A new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time.</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="mb-5 fw-bold">How We Work</h4>
                        <p>Capitalize on low hanging fruit to  identify a ballpark value added activity to beta test. Override the digital divide with additional clicktroughs from DevOps.
                        </p>
                    </div>
                </div>
            </div>     
            
            <div className="border-st-bottom"></div>
        </section>
    );
};

export default About;