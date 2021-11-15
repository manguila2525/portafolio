import React, { Fragment } from 'react';
import emailjs from 'emailjs-com';

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
      <div id="contact" className="row justify-content-center py-5">
        <form className="form__about col-12 col-md-6 p-5" onSubmit={sendEmail}>
          <h1 className="display-2 bold title__about my-2 text-white">Contact</h1>
          <div className="mb-3" >
            <label htmlFor="name" className="form-label text-muted">Name:</label>
            <input type="text" name="to_name" id="name" className="form-control" placeholder="Your name" />
          </div>
          <div className="mb-3" >
            <label htmlFor="from_name" className="form-label text-muted">Email:</label>
            <input type="text" name="from_namee" id="from_name" placeholder="Your email" className="form-control" />
          </div>
          <textarea name="message" placeholder="Send your message" className="form-control mb-3" cols="49" rows="10"></textarea>
          <button className="btn btn-primary btn-focus form-control" type="submit">Send</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Contact;
