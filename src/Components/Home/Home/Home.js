import React from 'react';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div className="home-section">
            <Header />
            <Service />
            <Project />
        </div>
    );
};

export default Home;