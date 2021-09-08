import React from 'react';
import NewsSlider from '../NewsSlider/NewsSlider';

const News = () => {
    return (
        <section className="container py-5">
            <h1 className="brand-heading text-center">Latest News.</h1>
            <p className="brand-text text-center">Check Out some of Our Thinking</p>

            <div className="w-75 m-auto">
             <NewsSlider />
            </div>

        </section>
    );
};

export default News;