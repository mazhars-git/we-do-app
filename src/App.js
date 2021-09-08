import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Service from './Components/Home/Service/Service';
import About from './Components/Home/About/About';
import SwiperReact from './Components/Home/SwiperReact/SwiperReact';
import Review from './Components/Home/Review/Review';
import News from './Components/Home/News/News';
import NewsSlider from './Components/Home/NewsSlider/NewsSlider';
import Works from './Components/Home/Works/Works';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/services">
            <Service />
        </Route>
        <Route path="/works">
            <Works />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/review">
            <Review />
        </Route>
        <Route path="/news">
            <News />
        </Route>
        <Route path="/swiper">
            <SwiperReact />
        </Route>
        <Route path="/newsSlider">
            <NewsSlider />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
