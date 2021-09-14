import React from "react";
import "../styles.css";
import Navbar from "./navbar";
import Footer from "./footer";
function Contact() {
  function text(e) {
    e.target.value = "Please fill the text field";
  }
  function text1(e) {
    e.target.value = "Name";
  }
  function text2(e) {
    e.target.value = "Email";
  }
  function text3(e) {
    e.target.value = "Add a message";
  }
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <h1>
              <u>Contact Us</u>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              placeHolder="Name"
              onMouseEnter={text}
              onMouseLeave={text1}
            />
            <br />
            <input
              type="text"
              placeHolder="Email"
              onMouseEnter={text}
              onMouseLeave={text2}
            />
            <br />
            <textarea
              type="text"
              placeHolder="Add a message"
              onMouseEnter={text}
              onMouseLeave={text3}
              rows="4"
            />
            <br />
            <button type="Submit" value="Submit">
              Submit
            </button>
          </div>
          <div className="col-md-6 contact-head">
            <a href="mailTo: hr.contact.ten@gmail.com">
              Email: <br />
              hr.contact.ten@gmail.com
            </a>
            <p>
              Phone:
              <br /> +918595986120
            </p>
            <p>Address: Delhi</p>
          </div>
        </div>
      </div>
      <div className="container faq-col">
        <div className="row">
          <div className="col-lg">
            <h1>
              <b>
                <u>FAQ</u>
              </b>
            </h1>
            <p className="faq-head">Frequently asked questions</p>
            <p className="faq-body">
              What is The Entrepreneurship Network (TEN) ? <br />
              The Entrepreneurship Network (TEN) is a community based Edu-Tech
              group whose objective is to provide quality learning and
              expertise. Our current customer segment, at present, stands at
              500+ colleges and 15000+ students, with new institutions coming in
              all the time.
            </p>
            <p className="faq-body">
              Why do I join TEN ?<br /> TEN would enable you to accelerate your
              aspirations by providing an opportunity to master the most desired
              skill-sets in today's market.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
