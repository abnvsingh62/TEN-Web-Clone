import React from "react";
import "../styles.css";
import Navbar from "./navbar";
import Footer from "./footer";
import img1 from "../images/img1.jpg";
import img2 from "../images/about-img.png";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.webp";
import img5 from "../images/img5.webp";
import img6 from "../images/img6.webp";
import img7 from "../images/img7.webp";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";
import img10 from "../images/img10.png";
import img11 from "../images/img11.gif";
function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img alt="images" src={img1} width="100%" height="100%"/>
            <h1 className="heading-text">
              A World of Knowledge at
              <br />
              Your Fingertips
            </h1>
          </div>
        </div>
      </div>

      <div className="container about-color">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="">About US</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h1 className="about-text">
              Learning Together From the Comfort of Your Home
            </h1>
            <a href="about.js">
              <button type="button" class="btn btn-light">
                Learn More
              </button>
            </a>
          </div>
          <div className="col-md-6">
            <img alt="images" src={img2} width="100%" />
          </div>
        </div>
      </div>

      <div className="container discord-sec">
        <div className="row">
          <div className="col-lg-12">
            <img alt="images" src={img3} width="100%" height="100%"/>
            <p className="discord-para1">Welcome to</p>
            <p className="discord-para2">THE NEXT BIG THING</p>
            <a href="https://discord.com/invite/A8zBusy">
              <button type="button" class="btn btn-primary discord-button">
                Join TEN Virtual Campus
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img alt="images" src={img4} width="100%" height="100%" />
            <p className="our-course">Our Couses</p>
            <p className="enter-course">
              Your New <br />
              Journey Begins Here, <br />
              Today
            </p>
          </div>
          <div className="col-md-6 about-color">
            <p className="explore-sec">
              Entrepreneurship
              <br />
              made fun
            </p>
            <a href="#">
              <button type="button" class="btn btn-dark explore-sec-button">
                Explore Here
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img alt="images" src={img5} width="100%" height="100%" />
          </div>
          <div className="col-sm-4 about-color explore-sec">
            <p>
              Digital
              <br /> Marketing
            </p>
            <a href="#">
              <button type="button" class="btn btn-dark explore-sec-button">
                Explore Here
              </button>
            </a>
          </div>
          <div className="col-sm-4">
            <img alt="images" src={img6} width="100%" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 about-color explore-sec">
            <p>
              Product Management
              <br /> like a pro
            </p>
            <a href="#">
              <button type="button" class="btn btn-dark explore-sec-button">
                Explore Here
              </button>
            </a>
          </div>
          <div className="col-md-6">
            <img alt="images" src={img7} width="100%" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg benefit">
            <h1>Our Course Benefits</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img alt="images" src={img8} width="50%" />
            <h1>
              <u>Expert Teachers</u>
            </h1>
            <p className="spacing">
              Our instructors are more adept at monitoring student problems and
              assessing their level of understanding and progress, and they
              provide much more relevant, useful feedback. We are experts in
              developing and testing hypotheses about learning difficulties or
              instructional strategies.
            </p>
          </div>
          <div className="col-sm-4">
            <img alt="images" src={img9} width="50%" />
            <h1>
              <u>Online Community</u>
            </h1>
            <p className="spacing">
              Feel like home, with a "family of invisible friends".
            </p>
          </div>
          <div className="col-sm-4">
            <img alt="images" src={img10} width="50%" />
            <h1>
              <u>Flexible Curriculum</u>
            </h1>
            <p className="spacing">
              Our expert teachers design and curate the curriculum using best
              practices and careful consideration of how people learn and retain
              information with the ongoing tech trends in the professional
              domain. We've debated every facet of our methodology, from the
              order in which to teach concepts, the analogies used to clarify
              them and how exercises should be structured to deliver the maximum
              educational punch.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg">
            <u>
              <h1 className="testo">Testimonials</h1>
            </u>
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <div
              id="carouselExampleIndicators"
              className="carousel slide bg-secondary"
              data-bs-ride="carousel"
            >
              <div className="caro carousel-inner">
                <div className="carousel-item active " data-bs-interval="10000">
                  <p>
                    <br />
                    <br />
                    <br />
                    Working with TEN is a great opportunity for the students who
                    <br />
                    want to extend their career in digital marketing! <br />​
                    -Aakriti Malik, DM Intern
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                  <p>
                    <br />
                    <br />
                    <br />
                    Working with TEN as a digital marketing intern has been a
                    great experience. I learnt a lot of new stuff and worked on
                    <br />
                    different tasks which helped me understand the marketing
                    field better. <br />​ ​ -Harsh Rajput, General Management
                    Intern
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                  <p>
                    <br />
                    <br />
                    <br />
                    TEN was my first ever experience into internship. Even
                    though I didn't have much of an idea about my
                    responsibilities, my mentors
                    <br /> at TEN and fellow colleagues helped me a lot in
                    making me understand my roles and were very cooperative
                    throughout. <br />​ ​ -Anjali Srivastava, Content Intern
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                  <p>
                    <br />
                    <br />
                    <br />
                    I thoroughly enjoyed my internship during this pandemic
                    situation and gained valuable experience under my belt. I
                    know this <br />
                    internship will be instrumental in getting myself a job and
                    it would be glowing reference on my CV. I was very hesitant
                    at the time of <br />
                    joining TEN due to my inexperience, but now I feel so happy
                    that I was able to be a part of it as it has made me so much
                    more
                    <br /> confident and empowered. As much as this organization
                    changes, I hope that it’s class remains constant. <br />
                    Thank you team TEN! <br />​ -Kshema Unni, Business
                    Development Intern
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg">
            <img alt="images" src={img11} height="70%" width="100%" />
            <div className="power">
              <p className="power-heading">Power of TEN Consulting</p>
              <a href="https://www.consulting.entrepreneurshipnetwork.net/">
                <button
                  type="button"
                  class="btn btn-danger explore-sec-button1"
                >
                  Explore Here >
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
