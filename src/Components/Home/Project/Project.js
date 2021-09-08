import React from 'react';
import SwiperReact from '../SwiperReact/SwiperReact';

const Project = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="brand-heading border-style">Works.</h1>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-self-center">
                   <div >
                        <button className="btn-brand text-black">View All</button>
                   </div>
                </div>
            </div>
            <p className="brand-text">THINGS WE'VE MADE</p>
            
            <SwiperReact />

        </section>
    );
};

export default Project;