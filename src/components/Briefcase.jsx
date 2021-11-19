import React, { Fragment, useEffect } from 'react';
import Card from './subcomponents/Card';
import imgJavascript from '../assets/img/img-card/expoautosgroup.jpeg';
import expoImg from '../assets/img/img-card/expoautosgroup.jpeg';
import piopioImg from '../assets/img/img-card/piopio.jpg';
const Briefcase = () => {

  const data = [
    {
      name: "Expoautosgroup",
      image: expoImg,
      description: `Project carried out for a vehicle dealer.

      The system of creation, reading, updating and deletion of data was carried out.
      
      The development of the website was also carried out where customers can visit everything managed by the system.`
    },
    {
      name: "Los Pio Pio",
      image: piopioImg,
      description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos, hic ratione minima ipsum illo odit omnis dolorum facere perspiciatis expedita quas dolore! Molestias ullam nisi aliquam accusamus beatae quas."
    }

  ]


  const closeBrief = () => {
    const dataBrief = document.querySelector("#dataBrief")
    dataBrief.style.cssText = "display:none;"
    console.log("algfo")
  }
  return (
    <Fragment>

      <div className="container text-white my-3">
        <div className="mt-5 d-md-block d-none"></div>
        <h1>Briefcase</h1>
        <h2 className="text-center">Some of the projects I have done</h2>
        <div className="group-circle d-flex d-md-none justify-content-around animate__animated animate__pulse animate__infinite">
          <i class="far fa-hand-point-up"></i>
          <i class="fas fa-arrow-left"></i>
          <i class="far fa-hand-point-up"></i>
        </div>
        <div className="">
          <div className="move">

            <div className="row group-cards">
              {
                data.map(card =>
                  <Card data={card}></Card>
                )
              }
            </div>
          </div>
        </div>

      </div>
      <div className="briefcase" id="dataBrief">

        <div className="d-flex justify-content-end close" onClick={closeBrief}>
          <i class="fas fa-arrow-circle-up"></i>
        </div>
        <div className="briefcase__box">

          <img className="briefcase__img" alt="" />
        </div>

        <div className="container">
          <div className="briefcase__title">
            <h1 className="title__brief"></h1>
          </div>
          <div className="briefcase__description text-center">
            <h3 className="description__brief"></h3>

            <div className="d-flex justify-content-center">
              <button className=" briefcase__btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Briefcase;
