import React from 'react';
import NewsSlider from '../NewsSlider/NewsSlider';

const News = () => {
    return (
        <section className="container-fluid py-5">
            <h1 className="brand-heading text-center">Latest News.</h1>
            <p className="brand-text text-center">Check Out some of Our Thinking</p>

            
            <NewsSlider />
        </section>
    );
};

export default News;