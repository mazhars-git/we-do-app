import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import News from '../News/News';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div className="home-section">
            <Header />
            <Service />
            <Works />
            <About />
            <Review />
            <News />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;