import React from "react";
import "../css/Contact.css";
function Contact() {
  return (
    <div id="contact" className="container my-5 text-white">
      <h1>Contact Me</h1>
      <hr />
      <div className="row my-5">
        <div className="col text-lg-center">
          <img
            className="p-1"
            src="https://img.icons8.com/?size=100&id=89362&format=png&color=000000"
            alt=""
            height={40}
            width={40}
          />
          <span className="ms-2 fs-3 ">
            <a href="mailto:rm_indore10@yahoo.com">rm_indore10@yahoo.com</a>{" "}
          </span>
        </div>
        <div className="col text-lg-center">
          <img
            src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000"
            className="p-1"
            alt=""
            height={40}
            width={40}
          />
          <span className="ms-2 fs-3 ">
            <a href="https://www.linkedin.com/in/sanjay-verma-70b47b323">
              LinkedIn
            </a>{" "}
          </span>
        </div>
        <div className="col text-lg-center">
          <img
            className="p-1"
            src="https://img.icons8.com/?size=100&id=9729&format=png&color=000000"
            alt=""
            height={40}
            width={40}
          />
          <span className="ms-2 fs-3">
            <a href="tel:+919826189859">+91 9826189859</a>
          </span>
        </div>
      </div>
      <div className="row my-4 d-flex flex-row gap-5 justify-content-center text-center">
        <div className="col-lg-5 ">
          <img
            className="p-1"
            src="https://img.icons8.com/?size=100&id=7880&format=png&color=000000"
            alt=""
            height={40}
            width={40}
          />
          <span className="ms-2 fs-3">Indore, India</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
