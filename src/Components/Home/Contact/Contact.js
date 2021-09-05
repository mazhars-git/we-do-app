import { faFacebook, faFacebookF, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <section className="container pt-5 text-center">
            <div className="row py-5">
                <div className="col-md-4">
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank"> <FontAwesomeIcon icon={faFacebookF}/></a></li>
                        <li><a href="https://www.facebook.com" target="_blank"> <FontAwesomeIcon icon={faTwitter}/></a></li>
                        <li><a href="https://www.facebook.com" target="_blank"> <FontAwesomeIcon icon={faInstagram}/></a></li>
                        <li><a href="https://www.facebook.com" target="_blank"> <FontAwesomeIcon icon={faGithub}/></a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h1>Let's Talk?</h1>
                </div>
                <div className="col-md-4">
                    <button className="btn-brand">Make an enquiry!</button>
                </div>
            </div>

            <div className="row py-5 text-center">
                <div className="col-md-6">
                    <h2>WeDo</h2>
                    <p>+21 30 310 0010</p>
                </div>
                <div className="col-md-6">
                    <h2>Melboume.</h2>
                    <p>+21 201 161 0011</p>
                </div>
            </div>
            
        </section>
    );
};

export default Contact;