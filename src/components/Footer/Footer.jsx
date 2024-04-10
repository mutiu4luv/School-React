import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div class=" ">
        {/* <!-- Footer --> */}
        <footer class="text-center text-lg-start  footer-main-div">
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section class="">
            <div class="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div class="c-rw-div">
                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 class="text-uppercase fw-bold">Company name</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#037a33af",
                      height: "2px",
                    }}
                  />
                  <div className="jbi-foot">
                    OUR WORLD INTERNATIONAL NURSERY & PRIMARY SCHOOL
                  </div>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold">Products</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <Link to="/" class="text-white text-decoration-none">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link to="/" class="text-white text-decoration-none">
                      Portal
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" class="text-white text-decoration-none">
                      Contact Us
                    </Link>
                  </p>
                  <p>
                    <Link to class="text-white text-decoration-none">
                      About Us
                    </Link>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold">Contact Us</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#037a33af",
                      height: "2px",
                    }}
                  />
                  <p>
                    <i class="fas fa-home mr-5"></i> OUR WORLD Int. School
                    Secretariate:Road 19 A1 Federal Housing Umuguma Owerri
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-5"></i>{" "}
                    ourworldintschool1@gmail.com
                  </p>
                  <p>
                    <i class="fas fa-phone mr-5"></i> +2349032402902
                  </p>
                  <p>
                    <i class="fas fa-print mr-5">+2349077231031</i>
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          <div class="text-center p-3 mt-3 copy-right-div ">
            © 2023 Copyright:
            <Link
              to="/"
              class="text-white text-decoration-none "
              style={{ marginLeft: "5px" }}
            >
              OUR WORLD INT'L. NUSERY & PRIMARY SCHOOL
            </Link>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
    </div>
  );
};

export default Footer;
