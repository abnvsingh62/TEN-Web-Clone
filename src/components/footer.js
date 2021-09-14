import React from "react";
import "../styles.css";
import img12 from "../images/img12.jpg";
import img13 from "../images/img13.jpg";
import img14 from "../images/img14.jpg";
function Footer() {
  const year = new Date().getFullYear();
  function text(e) {
    e.target.value = "Please fill the text field";
  }
  function text1(e) {
    e.target.value = "Full Name";
  }
  function text2(e) {
    e.target.value = "College Name";
  }
  function text3(e) {
    e.target.value = "Mobile No.";
  }
  function text4(e) {
    e.target.value = "Email";
  }
  return (
    <div>
      <div className="container bg-light">
        <div className="row footer-des">
          <div className="col-sm-3">
            <a href="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/">
              <img alt="images" src={img12} width="20%" />
            </a>
            <a href="https://twitter.com/We_Are_TEN?s=08">
              <img alt="images" src={img13} width="20%" />
            </a>
            <a href="https://www.instagram.com/theentrepreneurshipnetwork/">
              <img alt="images" src={img14} width="21%" />
            </a>
          </div>
          <div className="col-sm-3">
          <p><b>Subscribe to our newsletter</b></p>
          <input type="text" placeHolder="Full Name" onMouseEnter={text}
              onMouseLeave={text1}/>
          <input type="text" placeHolder="College Name" onMouseEnter={text}
              onMouseLeave={text2}/>
          <br />
          <input type="text" placeHolder="Mobile No." onMouseEnter={text}
              onMouseLeave={text3}/>
          <input type="text" placeHolder="Email" onMouseEnter={text}
              onMouseLeave={text4}/>
          <br />
          <input type="checkbox" />
          Join TEN's Discord Community
          <br />
          <a href="https://discord.com/invite/A8zBusy">
          <button type="Submit" value="submit">
            Submit
          </button>
          </a>
          </div>
          <div className="col-sm-3">
            <a href="./about.js">About Us</a>
            <br />
            <a href="./contact.js">
              FAQ's
              <br />
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <footer>
        <p className="footer-content">
          ⓒ {year} Limitless Technologies - The Entrepreneurship Network
        </p>
      </footer>
    </div>
  );
}

export default Footer;
