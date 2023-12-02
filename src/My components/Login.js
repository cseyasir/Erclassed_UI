import React from 'react'
import { Link,useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const HandleLogin = () => {
       
        localStorage.removeItem("roleId");
        // Assuming you have a state for user name and password
        const userName = document.getElementById('name').value;
        const password = document.getElementById('password').value;
    
        // Check if the user's name contains "Student" or "Parent"
        if (userName.includes('student')) {
          // If the user name contains "Student," store role ID as 1
          localStorage.setItem('roleId', '1');
          localStorage.setItem('Username',userName);
          navigate('/Std_Dashboard');
          
        } else if (userName.includes('parent')) {
          // If the user name contains "Parent," store role ID as 2
          localStorage.setItem('roleId', '2');
          localStorage.setItem('Username',userName);
          navigate('/Par_Dashboard');
        }
      
        
    
        // Perform other login logic here
      };
    return (
        <>
            <div class="container-xxl py-3">
                <div class="container">
                    <div class="text-center mx-auto mb-4 wow fadeInUp schooldata " data-wow-delay="0.1s" >
                        <h1 class="mb-1 text-center">Login</h1>

                    </div>
                    <div class="row g-4 mb-1">
                        <div class="col-md-4 col-lg-5 text-center wow fadeInUp " data-wow-delay="0.1s">
                            <div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" width="75px;" height=" 75px;">
                                <img class="img-fluid" src="img/education.gif" alt="" />
                            </div>

                        </div>

                        <div class="pl-5 col-lg-7 text-center wow fadeInUp min_heigh" data-wow-delay="0.5s">
                            <form >
                                <div class="row g-3 w-100 ">
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control border-0" id="name" placeholder="Your Name" />
                                            <label for="name">User Name</label>
                                        </div>

                                        <div class="form-floating pt-4">
                                            <input type="password" class="form-control border-0" id="password" placeholder="Your Password" />
                                            <label for="email">Password</label>
                                        </div>

                                    </div>


                                    <div class="col-12">
                                        <button class="btn btn-primary w-50 py-3" type="submit" onClick={HandleLogin}>Login</button>

                                    </div>
                                    <hr></hr>
                                    <div className='row '>
                                        <div class="col-6">

                                            <Link to="/Sign" class=" btn btn-primary w-100"> SignUp</Link>

                                        </div>
                                        <div class="col-6">
                                            Click forget link to get your password
                                            <Link to="#">Forget Password</Link>

                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}
export default Login;