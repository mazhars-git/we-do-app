import React from 'react';
import '../CSS/Footer.css';

const Footer = () => {
    return (
        <section className="footer text-light">
            <div className="container">
                <div className="row footer-content">
                    <div className="col-md-6">
                        <p>2021 &copy; <span style={{color: 'white'}}>WeDo</span>, All rights reserved</p>
                    </div>

                    <div className="col-md-6">
                       <ul className="d-flex justify-content-end">
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                       </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;