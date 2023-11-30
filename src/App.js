import logo from './logo.svg';
import './App.css';
import Home from './My components/Home'

import Login from './My components/Login';
import Nav from './My components/Nav'
import Sign from'./My components/Sign'
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Footer from './My components/Footer';
import Std_Dash from './My components/Student_Dash'
import Parent_Dashboard from './My components/Parent_Dashboard';
import Regristration from'./My components/Reg';
import Contact from './My components/Contact';

function App() {
  return (
    <div className="App">
  
  <BrowserRouter>
      <Nav></Nav>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="Login" element={<Login/>} />
        <Route exact path="Sign" element={<Sign/>} />
        <Route exact path="Std_Dashboard" element={<Std_Dash/>} />
        <Route exact path="Par_Dashboard" element={<Parent_Dashboard/>} />
        <Route exact path="Reg" element={<Regristration/>} />
        <Route exact path="Contact" element={<Contact/>}/>
        
       
      
    </Routes>   
   <Footer></Footer>
    </BrowserRouter>
       
      
    </div>
  );
}

export default App;
