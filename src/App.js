import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/App.css'

//COMPONENTS
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Briefcase from './components/Briefcase';
import Footer from './components/Footer';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar></Navbar>
        <div className="container">

          <Home></Home>
        </div>
        <About></About>
        <Briefcase></Briefcase>
        <div className="container-fluid">
          <Contact></Contact>
        </div>
        <Footer></Footer>
      </Router>
    </Fragment>
  );
}

export default App;
