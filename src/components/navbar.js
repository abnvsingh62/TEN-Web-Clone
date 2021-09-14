import React from "react";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="nav-title">The Entrepreneurship Network</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="home.js"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Online Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  We're Hiring
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Certification
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Alumni Team
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Forum
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Hackathan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Membership Regisration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Campus Ambassador Program
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mentorship
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Social Media
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="contact.js">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Complaints
                    </a>
                  </li>
                </ul>
              </li>
              <button type="button" class="btn btn-danger">
                Cart
              </button>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search here..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
