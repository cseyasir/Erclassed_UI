import React, { useState, useEffect } from 'react'
import { Link ,useNavigate } from 'react-router-dom';
function Reg() {
    const [course, setCourse] = useState(localStorage.getItem('Course'));
    useEffect(() => {
        // Continuously check local storage for changes in roleId
        const intervalId = setInterval(() => {
          setCourse(localStorage.getItem('Course'));
        }, 1000); 
        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <div class="container-xxl py-3">
                <div class="container">
                    <div class="text-center mx-auto mb-4 wow fadeInUp schooldata " data-wow-delay="0.1s" >
                        <h1 class="mb-1 text-center">Regristration form</h1>

                    </div>
                    <div class="row g-4 mb-1">
                        <div class="col-md-4 col-lg-5 text-center wow fadeInUp " data-wow-delay="0.1s">
                            <div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" width="75px;" height=" 75px;">
                                <img class="img-fluid" src="img/form.gif" alt="" />
                            </div>

                        </div>
                        {/* <div class="col-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                        <div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" width = "75px;" height=" 75px;">
                            <i class="fa fa-envelope-open fa-2x text-primary"></i>
                        </div>
                        <h6>info@example.com</h6>
                    </div> */}
                        <div class="pl-5 col-lg-7 text-center wow fadeInUp min_heigh" data-wow-delay="0.5s">
                            <form >
                                <div class="row g-3 w-100 ">
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control border-0" id="name" placeholder="Your Name" />
                                            <label for="name">First Name</label>
                                        </div>

                                        <div class="form-floating pt-2">
                                            <input type="text" class="form-control border-0" id="name" placeholder="Your Name" />
                                            <label for="name">Last Name</label>
                                        </div>
                                        <div class="form-floating pt-2">
                                            <input type="text" class="form-control border-0" id="name" placeholder="Your Name" />
                                            <label for="name">Email</label>
                                        </div>
                                        <div class="form-floating pt-2">
                                            <input type="text" class="form-control border-0" id="Course" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)}/>
                                            <label for="name">Course</label>
                                        </div>
                                        {/* <div class="form-floating pt-2">
                                           <span><label>
                                                <input type="radio" name="userType" value="parent" /> Parent
                                             </label> 
                                            <label>
                                                <input type="radio" name="userType" value="student" /> Student
                                            </label></span> 

                                        </div> */}



                                    </div>


                                    <div class="col-12">
                                        <button class="btn btn-primary w-50 py-3" type="submit">Regrister</button>

                                    </div>
                                    <hr></hr>
                                    {/* <div className='row '>
                                        <div class="col-6">

                                            <button class=" btn btn-primary w-100" type="submit">SignUp</button>

                                        </div>
                                        <div class="col-6">
                                            Click forget link to get your password
                                            <Link to="#">Forget Password</Link>

                                        </div>
                                    </div> */}

                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <div class="bg-light rounded">
                    <div class="row g-0">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div class="h-100 d-flex flex-column justify-content-center p-5">
                                <p class="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                             
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeIn min_heigh" data-wow-delay="0.5s">
                        <form>
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="text" class="form-control border-0" id="name" placeholder="Your Name"/>
                                                <label for="name">User Name</label>
                                            </div>
                                            <div class="form-floating pt-4">
                                                <input type="email" class="form-control border-0" id="email" placeholder="Your Email"/>
                                                <label for="email">Password</label>
                                            </div>

                                        </div>
                                      
                                        
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">Login</button>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
        </>

    )
}
export default Reg;