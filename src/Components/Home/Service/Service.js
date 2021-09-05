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
        <section className="container py-5">
            <h1>Services.</h1>
            <h5>WE WORK WITH YOU, NOT FOR YOU.</h5>
            <div className="row service-box">
                {
                    serviceInfos.map(info => <ServiceContent info={info}></ServiceContent>)
                }
            </div>
            <div className="service-bottom">

            </div>
        </section>
    );
};

export default Service;