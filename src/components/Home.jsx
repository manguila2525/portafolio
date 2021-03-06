import React, { Fragment } from 'react';
import MaikolImg from '../assets/img/maikolSinFondo2.png';
import pdf from '../assets/downloads/Maikol-SanchezCv.pdf';
const Home = () => {
  return (
    <Fragment >
      <span id="home" className=""></span>
      <div className="row row__home">
        <div className="col-md-6 my-3 order-1 order-sm-0">
          <h1 className="title text-white">I'm <span className="title__focus">Maikol</span> Sanchez;</h1>
          <h2>Computer Engineering
            University Alejandro de Humboldt.
            Caracas, Venezuela.</h2>
          <a href={pdf} download="MaikolSanchezCV">
            <div className="nav-link "> <button className="btn btn-primary btn-focus">DOWNLOAD CV</button></div>
          </a>

        </div>
        <div className="col-md-6 order-0 order-sm-1 d-flex justify-content-center">

          <img src={MaikolImg} alt="Maikol" className="img__home " />
        </div>

      </div>
    </Fragment>
  );
}

export default Home;
