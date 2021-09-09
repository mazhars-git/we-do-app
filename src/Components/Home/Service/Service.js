import React from 'react';
import ServiceContent from './ServiceContent';
import "../CSS/Servie.css";

const Service = () => {
    const serviceInfos= [
        {
            item: 'Digital Strategy'
        },
        {
            item: 'UX Design'
        },
        {
            item: 'Product Design'
        },
        {
            item: 'Content Strategy'
        },
        {
            item: 'Design & Concept'
        },
        {
            item: 'Social Media'
        },
        {
            item: 'Media Planing'
        },
        {
            item: 'Brand Identity'
        },
        {
            item: 'SEO Optimization'
        }
    ]

    return (
        <section className="container" id="service">
            <div
                style={{
                    width: '3px',
                    height: '70px',
                    background: 'red',
                    margin: 'auto',
                }}
                
            ></div>

            <div className="py-5">
                <h1 className="brand-heading border-style">Services.</h1>
                <p className="brand-text">WE WORK WITH YOU, NOT FOR YOU.</p>
                <div className="row service-box">
                    {
                        serviceInfos.map(info => <ServiceContent info={info}></ServiceContent>)
                    }
                </div>
                <div className="border-st-bottom"></div>
            </div>
        </section>
    );
};

export default Service;