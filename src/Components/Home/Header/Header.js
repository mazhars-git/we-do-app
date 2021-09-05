import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import '../CSS/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faRocket, faSearchDollar } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <section className="container header-area text-white">
            <MainMenu></MainMenu>
            <div className="py-5">
                <h1 className="py-5" style={{fontSize: '60px', fontWeight: '700'}}>We're a digital <br/> agency.</h1>
                <button className="btn-brand">Getting Started</button>
            </div>

           
            <div className="row">
                <div className="col-md-4">
                    <div className="content-box">
                        <FontAwesomeIcon className="box-icon" icon={faSearchDollar} />
                        <h3>Future Vision.</h3>
                        <p>It is long establish fact that a reader will be distracted by the readable content of a page.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-box">
                    <FontAwesomeIcon className="box-icon" icon={faRocket} />
                    <h3>Product Design.</h3>
                    <p>There are many variations of passages of available, but the majority alteration in some form.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-box">
                    <FontAwesomeIcon className="box-icon" icon={faChartPie} />
                    <h3>Innovative Solutions.</h3>
                    <p>It is long establish fact that a reader will be distracted by the readable content of a page.</p>
                    </div>
                </div>
            </div>
           
        </section>
    );
};

export default Header;