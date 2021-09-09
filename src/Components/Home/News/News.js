import React from 'react';
import NewsSlider from '../NewsSlider/NewsSlider';

const News = () => {
    return (
        <section className="container-fluid">
            <div className="py-5">
                <h1 className="brand-heading text-center">Latest News.</h1>
                <p className="brand-text text-center">Check Out some of Our Thinking</p>
                
                <NewsSlider />
            </div>

            <div
                style={{
                    width: '3px',
                    height: '70px',
                    background: 'red',
                    margin: 'auto',
                }}
                className="border-st-footer"
            ></div>
        </section>
    );
};

export default News;