import React from 'react';
import aboutImg from '../assets/img/about2.png';
import javascript from '../assets/img/javascript.png';
import react from '../assets/img/react.png';
import nodejs from '../assets/img/nodejs.png';
const About = () => {
  return (
    <div className="bg-white pt-1" id="about">
      <div className="container-fluid">
        <div className="row justify-items-center align-items-center">
          <div className="col-md-6 d-flex justify-content-center">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col-md-6 d-md-block">
            <h1 className="display-2 bold title__about my-2 text-muted">About Me</h1>
            <div className="row align-items-center">

              <div className="col-6 about__description">
                <strong className=" text-second">Knowledge of:</strong>
                <ul className="text-muted">
                  <li >HTML - HTML 5.</li>
                  <li>CSS.</li>
                  <li>Vuetify.</li>
                  <li>Bootstrap.</li>
                  <li>UX UI Web Designer with Figma.</li>
                  <li>Proyect documentation</li>
                </ul>
              </div>
              <div className="col-6 about__description">
                <strong>Monitoring of:</strong>
                <ul className="text-muted">
                  <li>MySQL</li>
                  <li>Oracle</li>
                  <li>Postgre SQL</li>
                  <li>NoSql MongoDB</li>
                </ul>
              </div>
              <div className="col-12">
                <strong>Knowledge in the área of programming and web deloper:</strong>
                <ul className="row text-muted">
                  <li className="col-6 col-md-12">Javascript</li>
                  <li className="col-6 col-md-12">Nodejs</li>
                  <li className="col-6 col-md-12">Express</li>
                  <li className="col-6 col-md-12">Vue</li>
                  <li className="col-6 col-md-12">ReactJs</li>
                  <li className="col-6 col-md-12">Git</li>
                  <li className="col-6 col-md-12">Github</li>
                </ul>
              </div>
            </div>

            <div className="container d-none d-md-block">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <img src={javascript} alt="" className="img-group" />
                </div>
                <div className="col-md-4">
                  <img src={react} alt="" className="img-group" />
                </div>
                <div className="col-md-4">
                  <img src={nodejs} alt="" className="img-group" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
