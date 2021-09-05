import React from 'react';
import SwiperReact from '../SwiperReact/SwiperReact';

const Project = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Works.</h1>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <button className="btn-brand text-black">View All</button>
                </div>
            </div>
            <p>THINGS WE'VE MADE</p>
            
            <SwiperReact />

        </section>
    );
};

export default Project;