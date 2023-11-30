import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';

 function Nav() {
    const [roleId, setRoleId] = useState(localStorage.getItem('roleId'));
    const [userName, setUserName] = useState(localStorage.getItem('Username'));

    useEffect(() => {
      // Continuously check local storage for changes in roleId
      const intervalId = setInterval(() => {
        setRoleId(localStorage.getItem('roleId'));
      }, 1000); // Check every 1000 milliseconds (1 second)
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);
    function logout(){
       localStorage.clear();


    }
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <Link to="index.html" class="navbar-brand">
                <h1 class="m-0 text-primary"><i class="fa fa-book-reader me-3"></i>ER Classes</h1>
            </Link>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <Link to="/" class="nav-item nav-link active">Home</Link>
                    {/* <Link to="about.html" class="nav-item nav-link">About Us</Link> */}
                    <Link to="Contact" class="nav-item nav-link">Contact Us</Link>
                    {roleId === '1' && (<>
                        <Link to="/" class="nav-item nav-link" onClick={logout}>LogOut</Link>
              <Link to="/Std_Dashboard" className="nav-item nav-link">
                Dashboard
              </Link>
              <span className='nav-item nav-link text-warning'>Welcome Student {userName.split('@')[0]} <i className="fa fa-user fa- text-success"></i></span>
              
           
                    </>
                         
            )}
                {roleId === '2' && (<>
                        <Link to="/" class="nav-item nav-link" onClick={logout}>LogOut</Link>
              <Link to="/Par_Dashboard" className="nav-item nav-link">
                Dashboard
              </Link>
              <span className='nav-item nav-link text-warning'>Welcome Parent {userName.split('@')[0]} <i className="fa fa-user fa- text-success"></i></span>
                    </>
                         
            )}
                       {(roleId !== '1' && roleId !== '2') && (
              <Link to="Login" className="nav-item nav-link">
                Login
              </Link>
            )}
                    
                </div>
                
            </div>
        </nav>
    </>
  )
}
export default Nav;