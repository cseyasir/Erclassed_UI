import React, { useState, useEffect } from 'react'
import { Link ,useNavigate } from 'react-router-dom';


function Home() {
    const [roleId, setRoleId] = useState(localStorage.getItem('roleId'));
    const navigate = useNavigate();
   
    useEffect(() => {
        // Continuously check local storage for changes in roleId
        const intervalId = setInterval(() => {
          setRoleId(localStorage.getItem('roleId'));
        }, 1000); 
        // return () => clearInterval(intervalId);
    }, []);
    function Regrester(){
       
       if(roleId==1 || roleId==2){
        navigate("/Reg");
       }
       else{
     
        alert("Please login to regrister")
        navigate("/Login");
       }
    }
    const Web = () => {
        localStorage.setItem('Course', 'Web development');
      };
      const AI = () => {
        localStorage.setItem('Course', 'AI');
      };
      const Computerfun = () => {
        localStorage.setItem('Course', 'Computer Fundemantals');
      };
      const class9th = () => {
        localStorage.setItem('Course', '9th');
      };
      const class8th = () => {
        localStorage.setItem('Course', '8th');
      };
      const class7ht = () => {
        localStorage.setItem('Course', '7th');
      };
    return (
        <>

            <div class="container-xxl bg-white p-0">
        
                <div class="container-fluid p-0 mb-5">
                
          
                        <div class="owl-carousel-item position-relative">
           
                            <img class="img-fluid" src="img/carousel-2.jpg" alt="" width="90%" height="30%"/>
                            <div class="position-absolute top-0 start-0 w-100 h-80 d-flex align-items-center carousl" >
                                <div class="container">
                                    <div class="row justify-content-start">
                                        <div class="col-10 col-lg-8">
                                            <h3 class="display-3 text-white animated slideInDown mb-4">Make A Brighter Future Path For Your Child</h3>
                                            <p class="fs-5 fw-medium text-white mb-4 pb-2">Our Tuition are going to be the best in the area</p>
                                            <p class="fs-5 fw-medium text-white mb-4 pb-2">Student will get 100 % pratical Knowledge of subjects</p>
                                            <Link to="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
                                            <Link to="" class="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                </div>
                {/* <!-- Carousel End -->


        <!-- Facilities Start --> */}
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="text-center mx-auto mb-5 wow fadeInUp schooldata" data-wow-delay="0.1s" >
                            <h1 class="mb-3">Tuition Facilities</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div class="row g-4">
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="facility-item">
                                    <div class="facility-icon bg-primary">
                                        <span class="bg-primary"></span>
                                        <i class="fa fa-laptop fa-3x text-primary"></i>
                                        <span class="bg-primary"></span>
                                    </div>
                                    <div class="facility-text bg-primary">
                                        <h3 class="text-primary mb-3">Pratical Knowledge</h3>
                                        <p class="mb-0">
Practical knowledge is gained through hands-on experience and application of theoretical concepts in real-world situations.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="facility-item">
                                    <div class="facility-icon bg-success">
                                        <span class="bg-success"></span>
                                        <i class="fa fa-wrench fa-3x text-success"></i>
                                        <span class="bg-success"></span>
                                    </div>
                                    <div class="facility-text bg-success">
                                        <h3 class="text-success mb-3">Sharp Calculation Skills</h3>
                                        <p class="mb-0">Sharp calculation skills involve swiftly and accurately performing mathematical computations, problem-solving.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="facility-item">
                                    <div class="facility-icon bg-warning">
                                        <span class="bg-warning"></span>
                                        <i class="fa fa-book fa-3x text-warning"></i>
                                        <span class="bg-warning"></span>
                                    </div>
                                    <div class="facility-text bg-warning">
                                        <h3 class="text-warning mb-3">Domain Knowledge</h3>
                                        <p class="mb-0">
Domain knowledge involves expertise within a specific field of subject like Physics, Chemisty, Math and IT Subjects etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div class="facility-item">
                                    <div class="facility-icon bg-info">
                                        <span class="bg-info"></span>
                                        <i class="fa fa-chalkboard-teacher fa-3x text-info"></i>
                                        <span class="bg-info"></span>
                                    </div>
                                    <div class="facility-text bg-info">
                                        <h3 class="text-info mb-3">Positive Learning</h3>
                                        <p class="mb-0">Positive learning fosters growth, curiosity, and skill development, creating a dynamic environment for continuous improvement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Facilities End -->


        <!-- About Start --> */}
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="row g-5 align-items-center">
                            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <h1 class="mb-4">Learn More About Our Work And Our Cultural Activities</h1>
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <p class="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>
                                <div class="row g-4 align-items-center">
                                    <div class="col-sm-6">
                                        <a class="btn btn-primary rounded-pill py-3 px-5" href="">Read More</a>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" width="45px;" height="45px;" />
                                            <div class="ms-3">
                                                <h6 class="text-primary mb-1">Jhon Doe</h6>
                                                <small>CEO & Founder</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <img class="img-fluid w-75 rounded-circle bg-light p-3" src="img/about-1.jpg" alt="" />
                                    </div>
                                    <div class="col-6 text-start top" >
                                        <img class="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-2.jpg" alt="" />
                                    </div>
                                    <div class="col-6 text-end top">
                                        <img class="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-3.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- About End -->



        <!-- Classes Start --> */}
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="text-center mx-auto mb-5 wow fadeInUp schooldata" data-wow-delay="0.1s">
                            <h1 class="mb-3">Tuition Classes</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="classes-item">
                                    <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                        <img class="img-fluid rounded-circle" src="img/Computer.jpg" alt="" />
                                    </div>
                                    <div class="bg-light rounded p-4 pt-5 mt-n5">
                                        <a class="d-block text-center h3 mt-3 mb-4" href="">Computer Fundmentals</a>
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center">
                                                <img class="rounded-circle flex-shrink-0" src="img/Er.yasir.jpeg" alt="" width=" 45px;" height="45px;" />
                                                <div class="ms-3">
                                                    <h6 class="text-primary mb-1">Er.Yasir Arfat</h6>
                                                    <small>Teacher</small>
                                                </div>
                                            </div>
                                            <span class="bg-primary text-white rounded-pill py-2 px-3"  onClick={()=>{Regrester();Computerfun()}}>Regrester</span>
                 
                                        </div>
         
                                        <div class="row g-1">
                                            <div class="col-4">
                                                <div class="border-top border-3 border-primary pt-2">
                                                    <h6 class="text-primary mb-1">Age:</h6>
                                                    <small>10-19</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="border-top border-3 border-success pt-2">
                                                    <h6 class="text-success mb-1">Time:</h6>
                                                    <small>6-7 PM</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="border-top border-3 border-warning pt-2">
                                                    <h6 class="text-warning mb-1">Capacity:</h6>
                                                    <small>30 Students</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="classes-item">
                                    <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                        <img class="img-fluid rounded-circle" src="img/AI.jpg" alt="" />
                                    </div>
                                    <div class="bg-light rounded p-4 pt-5 mt-n5">
                                        <a class="d-block text-center h3 mt-3 mb-4" href="">AI Technology</a>
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center">
                                                <img class="rounded-circle flex-shrink-0" src="img/Er.Shuail.png" alt="" width=" 45px;" height="45px;" />
                                                <div class="ms-3">
                                                    <h6 class="text-primary mb-1">Er.Sheikh Shuail</h6>
                                                    <small>Teacher</small>
                                                </div>
                                            </div>
                                            <span class="bg-primary text-white rounded-pill py-2 px-3" onClick={()=>{Regrester();AI()}}>Regrister</span>
                                        </div>
                                        <div class="row g-1">
                                            <div class="col-4">
                                                <div class="border-top border-3 border-primary pt-2">
                                                    <h6 class="text-primary mb-1">Age:</h6>
                                                    <small>10-19 Years</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="border-top border-3 border-success pt-2">
                                                    <h6 class="text-success mb-1">Time:</h6>
                                                    <small>Sat,Sun 1-3 PM</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="border-top border-3 border-warning pt-2">
                                                    <h6 class="text-warning mb-1">Capacity:</h6>
                                                    <small>30 Students</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="classes-item">
                                    <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                        <img class="img-fluid rounded-circle" src="img/web.jpg" alt="" />
                                    </div>
                                    <div class="bg-light rounded p-4 pt-5 mt-n5">
                                        <a class="d-block text-center h3 mt-3 mb-4" href="">Web Development</a>
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center">
                                                <img class="rounded-circle flex-shrink-0" src="img/Er.Shuail.png" alt="" width=" 45px;" height="45px;" />
                                                <div class="ms-3">
                                                    <h6 class="text-primary mb-1">Er.Sheikh Shuail</h6>
                                                    <small>Teacher</small>
                                                </div>
                                            </div>
                                            <span class="bg-primary text-white rounded-pill py-2 px-3"  onClick={()=>{Regrester();Web()}}>Regrester</span>
                                        </div>
                                        <div class="row g-1">
                                            <div class="col-4">
                                                <div class="border-top border-3 border-primary pt-2">
                                                    <h6 class="text-primary mb-1">Age:</h6>
                                                    <small>10-19 Years</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="border-top border-3 border-success pt-2">
                                                    <h6 class="text-success mb-1">Time:</h6>
                                                    <small>Sat,Sun 3-5 pm</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="border-top border-3 border-warning pt-2">
                                                    <h6 class="text-warning mb-1">Capacity:</h6>
                                                    <small>30 Students</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="classes-item">
                                    <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                        <img class="img-fluid rounded-circle" src="img/classes-4.jpg" alt="" />
                                    </div>
                                    <div class="bg-light rounded p-4 pt-5 mt-n5">
                                        <a class="d-block text-center h3 mt-3 mb-4" href="">9th Class</a>
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center">
                                                <img class="rounded-circle flex-shrink-0 pic_size" src="img/Er.yasir.jpeg" alt="" />
                                                <div class="ms-3">
                                                    <h6 class="text-primary mb-1">Er.Yasir Arfat</h6>
                                                    <small>Teacher</small>
                                                </div>
                                            </div>
                                            <span class="bg-primary text-white rounded-pill py-2 px-3"  onClick={()=>{Regrester();class9th()}}>Regrester</span>
                                        </div>
                                        <div class="row g-1">
                                            <div class="col-4">
                                                <div class="border-top border-3 border-primary pt-2">
                                                    <h6 class="text-primary mb-1">Age:</h6>
                                                    <small>3-5 Years</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="border-top border-3 border-success pt-2">
                                                    <h6 class="text-success mb-1">Time:</h6>
                                                    <small>9-10 AM</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="border-top border-3 border-warning pt-2">
                                                    <h6 class="text-warning mb-1">Capacity:</h6>
                                                    <small>30 Kids</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="classes-item">
                                    <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                        <img class="img-fluid rounded-circle" src="img/classes-5.jpg" alt="" />
                                    </div>
                                    <div class="bg-light rounded p-4 pt-5 mt-n5">
                                        <a class="d-block text-center h3 mt-3 mb-4" href="">8th Class</a>
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center">
                                                <img class="rounded-circle flex-shrink-0 pic_size" src="img/Er.Shuail.png" alt="" />
                                                <div class="ms-3">
                                                    <h6 class="text-primary mb-1">Er.Sheikh Shuail</h6>
                                                    <small>Teacher</small>
                                                </div>
                                            </div>
                                            <span class="bg-primary text-white rounded-pill py-2 px-3"  onClick={()=>{Regrester();class8th()}}>Regrester</span>
                                        </div>
                                        <div class="row g-1">
                                            <div class="col-4">
                                                <div class="border-top border-3 border-primary pt-2">
                                                    <h6 class="text-primary mb-1">Age:</h6>
                                                    <small>3-5 Years</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="border-top border-3 border-success pt-2">
                                                    <h6 class="text-success mb-1">Time:</h6>
                                                    <small>9-10 AM</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="border-top border-3 border-warning pt-2">
                                                    <h6 class="text-warning mb-1">Capacity:</h6>
                                                    <small>30 Kids</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="classes-item">
                                    <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                        <img class="img-fluid rounded-circle" src="img/classes-6.jpg" alt="" />
                                    </div>
                                    <div class="bg-light rounded p-4 pt-5 mt-n5">
                                        <a class="d-block text-center h3 mt-3 mb-4" href="">7th Class to 1st Class</a>
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center">
                                                <img class="rounded-circle flex-shrink-0 pic_size" src="img/user.jpg" alt="" />
                                                <div class="ms-3">
                                                    <h6 class="text-primary mb-1">Both teachers</h6>
                                                    <small>Teacher</small>
                                                </div>
                                            </div>
                                            <span class="bg-primary text-white rounded-pill py-2 px-3"  onClick={()=>{Regrester();class7ht()}}>Regrester</span>
                                        </div>
                                        <div class="row g-1">
                                            <div class="col-4">
                                                <div class="border-top border-3 border-primary pt-2">
                                                    <h6 class="text-primary mb-1">Age:</h6>
                                                    <small>3-5 Years</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="border-top border-3 border-success pt-2">
                                                    <h6 class="text-success mb-1">Time:</h6>
                                                    <small>9-10 AM</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="border-top border-3 border-warning pt-2">
                                                    <h6 class="text-warning mb-1">Capacity:</h6>
                                                    <small>30 Kids</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Classes End -->


        <!-- Appointment Start --> */}
        
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="bg-light rounded">
                            <div class="row g-0">
                                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div class="h-100 d-flex flex-column justify-content-center p-5">
                                        <h1 class="mb-4">Make Appointment</h1>
                                        <form>
                                            <div class="row g-3">
                                                <div class="col-sm-6">
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control border-0" id="gname" placeholder="Gurdian Name" />
                                                        <label for="gname">Gurdian Name</label>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-floating">
                                                        <input type="email" class="form-control border-0" id="gmail" placeholder="Gurdian Email" />
                                                        <label for="gmail">Gurdian Email</label>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control border-0" id="cname" placeholder="Child Name" />
                                                        <label for="cname">Child Name</label>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control border-0" id="cage" placeholder="Child Age" />
                                                        <label for="cage">Child Age</label>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-floating">
                                                        <textarea class="form-control border-0 message" placeholder="Leave a message here" id="message" ></textarea>
                                                        <label for="message">Message</label>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <button class="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-lg-6 wow fadeIn min_heigh" data-wow-delay="0.5s" >
                                    <div class="position-relative h-100">
                                        <img class="position-absolute w-50 h-50 rounded flip_pic" src="img/appointment.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Appointment End -->


        <!-- Team Start --> */}
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="text-center mx-auto mb-5 wow fadeInUp schooldata" data-wow-delay="0.1s" >
                            <h1 class="mb-3">Popular Teachers</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                                eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="team-item position-relative">
                                    <img class="img-fluid rounded-circle w-80" src="img/Er.yasir.jpeg" alt="" />
                                    <div class="team-text">
                                        <h3>Er.Yasir Arfat</h3>
                                        <p>Software Engineer</p>
                                        <div class="d-flex align-items-center">
                                            <Link class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></Link>
                                            <Link class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-twitter"></i></Link>
                                            <Link class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="team-item position-relative">
                                    {/* <img class="img-fluid rounded-circle w-75" src="img/team-2.jpg" alt="" />
                                    <div class="team-text">
                                        <h3>Full Name</h3>
                                        <p>Designation</p>
                                        <div class="d-flex align-items-center">
                                            <Link class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></Link>
                                            <Link class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-twitter"></i></Link>
                                            <Link class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-instagram"></i></Link>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="team-item position-relative">
                                    <img class="img-fluid rounded-circle w-80" src="img/Er.Shuail.png" alt="" />
                                    <div class="team-text">
                                        <h3>Er.Sheikh Suhail</h3>
                                        <p>Software Engineer</p>
                                        <div class="d-flex align-items-center">
                                            <Link class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></Link>
                                            <Link class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-twitter"></i></Link>
                                            <Link class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Team End --> */}


              





                {/* <!-- Back to Top --> */}
                <Link to="/" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></Link>
            </div>


        </>
    )
}
export default Home;
