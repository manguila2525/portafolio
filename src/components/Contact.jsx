import React, { Fragment } from 'react';
import emailjs, { sendForm } from 'emailjs-com';
const Contact = () => {

  //  ENVIAR MENSAJE AL CORREO ELECTRONICO
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_px1e1d9', e.target, 'user_hhtwIZvPfG23hg2LF8JwX')
      .then((result) => {
        alert("Mensaje enviado correctamente!!!");
      }, (error) => {
        alert(error)
      });
  }
  return (
    <Fragment>
      <div id="contact" className="row justify-content-center">
        <h1>Contact</h1>
        <form className="form__about col-4" onSubmit={sendEmail}>
          <div className="mb-3" >
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" name="to_name" id="name" className="form-control" />
          </div>
          <div className="mb-3" >
            <label htmlFor="from_name" className="form-label">Email:</label>
            <input type="text" name="from_namee" id="from_name" className="form-control" />
          </div>
          <textarea name="message" cols="30" rows="10"></textarea>
          <button className="btn btn-success form-control" type="submit">Send</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Contact;
