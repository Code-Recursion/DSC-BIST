import React from "react";

import "../styles/contact.css";
import "../index.css";

import mail_box_img from "../resources/Contact/contact-mail.svg";
import instagram from "../resources/Contact/instagram.svg";
import facebook from "../resources/Contact/facebook.svg";
import twitter from "../resources/Contact/twitter.svg";
import linkedin from "../resources/Contact/linkedin.svg";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div id="heading-wraper">
          <h1 className="contact-heading">Contact Us</h1>
          <h2 className="contact-sub-heading">
            Our Team is Happy to Answer your Question's
          </h2>
        </div>
        <div id="contact-wraper">
          <div className="row no-gutters">
            <div className=" col-12 col-sm-12 col-md-12 col-lg-6">
              <div id="img-box">
                <img src={mail_box_img} alt="" id="mail-box-img" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="contact-form">
                <form id="form" action="">
                  <input
                    class="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <input
                    class="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <textarea
                    class="form-control"
                    type="text"
                    name="message"
                    placeholder="Message"
                    cols="30"
                    rows="5"
                  ></textarea>
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                  >
                    SUBMIT
                  </button>
                </form>

                <div className="social-contact">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/dsc_bist/"
                  >
                    <img src={instagram} alt="" />
                  </a>

<<<<<<< HEAD
                  <a href="#">
=======
                  <a rel="noreferrer" target="_blank" href="#">
>>>>>>> 468ec03 (Contact Page Update)
                    <img src={facebook} alt="" />
                  </a>

                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://twitter.com/DSC_BIST"
                  >
                    <img src={twitter} alt="" />
                  </a>

                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="www.linkedin.com/groups/8975174"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
