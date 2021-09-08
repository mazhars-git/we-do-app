import { faFacebook, faFacebookF, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../CSS/Contact.css';

const Contact = () => {
    return (
        <section className="pt-5 text-center" id="contact">
            <div className="contact-top">
                <div className="container py-4">
                    <div className="row py-5">
                        <div className="col-md-4 align-self-center pb-4">
                            <ul className="d-flex justify-content-center social-icon">
                                <li><a href="https://www.facebook.com" target="_blank"> <FontAwesomeIcon icon={faFacebook}/></a></li>
                                <li><a href="https://www.facebook.com" target="_blank"> <FontAwesomeIcon icon={faTwitter}/></a></li>
                                <li><a href="https://www.facebook.com" target="_blank"> <FontAwesomeIcon icon={faInstagram}/></a></li>
                                <li><a href="https://www.facebook.com" target="_blank"> <FontAwesomeIcon icon={faGithub}/></a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 pb-3 align-self-center">
                            <h1>Let's Talk?</h1>
                        </div>
                        <div className="col-md-4 align-self-center">
                            <button className="btn-brand">Make an enquiry!</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-bottom">
                <div className="container">
                    <div className="row py-2 text-center">
                        <div className="col-md-6 pb-4">
                            <h2>WeDo</h2>
                            <p>+21 30 310 0010</p>
                        </div>
                        <div className="col-md-6">
                            <h2>Melboume.</h2>
                            <p>+21 201 161 0011</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Contact;