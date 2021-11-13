import React, { Fragment } from 'react';

import pdf from '../assets/downloads/Maikol-SanchezCv.pdf';
const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark  text-center position-sticky top-0 bg-1">
        <div className="container">

          <div className="navbar__brand">
            <h1>M<span className="title__focus">S</span></h1>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="navbar__group d-md-flex  collapse navbar-collapse" id="navbarSupportedContent">
            <a href="#home" className="nav-link sr-only sr-only-focusable">Home</a>
            <a href="#about" className="nav-link">About Me</a>
            {/* <a href="#portafolio" className="nav-link">Portafolio</a> */}
            <a href="#contact" className="nav-link">Contact</a>
            <a href={pdf} download="MaikolSanchezCV">
              <div className="nav-link text-end"><button className="btn btn-primary btn-focus">CV DOWNLOAD</button></div>
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
