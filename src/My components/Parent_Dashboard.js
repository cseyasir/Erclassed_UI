import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Parent_Dashboard() {
  const [userName, setUserName] = useState(localStorage.getItem('Username'));




  function logout() {
    localStorage.clear();
  }

  return (
    <>
      <div className="row">
        <div className="col-3 border bg-dark">
          <div>
            <i className="fa fa-user fa-3x text-success"></i>
            <p className='text-light'>Welcome Parent {userName.split('@')[0]}</p>
            <Link to="/" onClick={logout}>
              LogOut
            </Link>
            <br />
            <Link to="">Forget password</Link> <br />
            <Link to="">Courses</Link> <br />
          </div>
        </div>
        <div className="col-8">
        
        </div>
      </div>
    </>
  );
}

export default  Parent_Dashboard;

