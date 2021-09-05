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
import Project from './Components/Home/Project/Project';
import About from './Components/Home/About/About';
import SwiperReact from './Components/Home/SwiperReact/SwiperReact';
import Review from './Components/Home/Review/Review';
import News from './Components/Home/News/News';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/services">
            <Service />
        </Route>
        <Route path="/works">
            <Project />
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
      </Switch>
    </Router>
  );
}

export default App;
