import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import News from '../News/News';
import Project from '../Project/Project';
import Review from '../Review/Review';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div className="home-section">
            <Header />
            <Service />
            <Project />
            <About />
            <Review />
            <News />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;