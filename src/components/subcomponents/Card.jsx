import React, { Fragment } from 'react';
import expoImg from '../../assets/img/img-card/expoautosgroup.jpeg';
import javascript from '../../assets/img/javascript.png';
import react from '../../assets/img/react.png';
import nodejs from '../../assets/img/nodejs.png';

const Card = ({ data }) => {
  console.log(data)
  const view = e => {
    const dataBrief = document.querySelector("#dataBrief")
    const imgData = dataBrief.querySelector(".briefcase__img")
    const titleData = dataBrief.querySelector(".title__brief")
    const descriptionData = dataBrief.querySelector(".description__brief")
    titleData.textContent = data.name
    descriptionData.textContent = data.description
    imgData.setAttribute("src", data.image)
    dataBrief.style.cssText = "display:block;"
  }
  return (

    <Fragment>
      <div className="col-md-4 col-12 carrusel" onClick={view}>
        <div className="card">
          <div className="card__header">{data.name}</div>
          <div className="card__img">
            <img src={data.image} alt={data.name} />
          </div>
          <div className="card__group">
            <img src={javascript} alt="" className="card__img--group" />
            <img src={react} alt="" className="card__img--group" />
            <img src={nodejs} alt="" className="card__img--group" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
