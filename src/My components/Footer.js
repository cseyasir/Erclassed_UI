import React from 'react'
import {Link} from 'react-router-dom';
 function Footer() {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div class="container-fluid bg-dark text-white-50 footer pt-3 mt-2 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-3">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-2">Get In Touch</h3>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>134 C02 New Askok Nagar, New Delhi,INDIA</p>
                      
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+917889308062</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>erclasses134@gmail.com</p>
                        <div class="d-flex pt-2">
                            <Link class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></Link>
                            <Link class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></Link>
                            <Link class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></Link>
                            <Link class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Quick Links</h3>
                        <Link  class="btn btn-link text-white-50" to="/">Home</Link>
                        <Link class="btn btn-link text-white-50" to="Contact">Contact Us</Link>
                        {/* <Link class="btn btn-link text-white-50" href="">About Us</Link> */}
                       
                        <Link class="btn btn-link text-white-50" href="">Terms & Condition</Link>
                    </div>
                    <div class="col-lg-3 col-md-6">
                     
                       
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Newsletter</h3>
                        <p></p>
                        <div class="position-relative mx-auto max_400">
                            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; ER Classes, All Right Reserved. 
							

							Designed By Er.Yasir Arfat
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}
    </>
    
  )
}
export default Footer;