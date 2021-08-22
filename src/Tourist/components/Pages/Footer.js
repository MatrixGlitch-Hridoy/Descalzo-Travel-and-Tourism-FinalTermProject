import React from 'react';
import "./Home.css";

const Footer = () => {
    return (
        <>
        <div>
           
      <section class="contact wrapper">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 mb-5">
              <h1>Contact Us</h1>
            </div>
          </div>

          <div class="row mt-1">
            <div class="col-lg-4">
              <div class="info">
                <div class="address mb-4 mt-md-3">
                  <i class="fas fa-map-marker-alt"></i>
                  <h4>Location:</h4>
                  <p>Dutta Road, Karwanbazar, Dhaka – 1205</p>
                </div>

                <div class="email mb-4 mt-2">
                  <i class="fas fa-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@bdhonda.com</p>
                </div>

                <div class="phone mt-2">
                  <i class="fas fa-mobile-alt"></i>
                  <h4>Phone:</h4>
                  <p>029632273</p>
                </div>
              </div>
            </div>

            <div class="col-lg-8 mt-5 mt-lg-0">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="text-center mt-5">
                  <button class="btn border-0 rounded btn-warning">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div class="footer-area wrapper mt-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-6 pb-md-0 pb-5">
              <div class="footer-link">
                <a href="">Download Now</a>
                <a href="">License</a>
              </div>
              <div class="footer-link pt-3">
                <a href="">About</a>
                <a href="">Features</a>
                <a href="">Pricing</a>
                <a href="">Careers</a>
                <a href="">Help</a>
                <a href="">Privacy Policy</a>
              </div>
              
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="copyright ms-md-auto w-25">
                <p class="">Get the App</p>
                <img src="images/pngegg.png" alt="" class="img-fluid" />
              </div>
                
              </div>
            </div>
            <div class="copyright pt-3 ps-md-2">&copy; 2020 bike. All rights reserved</div>
          </div>
        </div>
      </div>
      </>
    );
};

export default Footer;