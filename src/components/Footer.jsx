import React, { Fragment } from 'react';
import copyToClipBoard from '../assets/js/functions';
const Footer = () => {
  return (
    <Fragment>
      <footer id="contact2" className="container-fluid bg-footer border-top ">
        <div className="container d-flex flex-wrap justify-content-between align-items-center py-3">
          <p className="col-md-4 mb-0 text-muted">Ing. Maikol Sanchez</p>

          <a href="#home" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-white">
            <h1>M<span className="title__focus">S</span></h1>
          </a>

          <ul className="nav col-md-4 justify-content-end align-center">
            <li className="nav-item"><span onClick={() => copyToClipBoard("phone")} className="button-copied nav-link px-2 text-muted"><i className="fas fa-phone-square"></i> <span id="phone">+584242985200</span> </span></li>
            <li className="nav-item"><a rel="noreferrer" target="_blank" href="https://www.instagram.com/maikolsanchez2525/" className="nav-link px-2 text-muted"><i className="fab fa-instagram"></i></a></li>
            <li className="nav-item"><a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100048009842020" className="nav-link px-2 text-muted"><i className="fab fa-facebook-square"></i></a></li>
            <li className="nav-item"><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/maikol-sanchez-68ba501a3/" className="nav-link px-2 text-muted"><i className="fab fa-linkedin"></i></a></li>

          </ul>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
