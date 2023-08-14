import React from "react";
// Import your CSS file for styling
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar  navbar-expand bg-dark navbar-dark">
        <div class="container-fluid">
          <div>
            <img
              src="https://images.vexels.com/media/users/3/144524/raw/fdfe18cc8108550335a9117e297f2fa1-library-logo-template-design.jpg "
              alt="logo.."
              height={"40px"}
              width={"80px"}
            ></img>
          </div>
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <Link class="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/Library"}>
                Library
              </Link>
            </li>
            
          </ul>
          
          <Link className="btn btn-primary text-dark mx-1" to="/Login">
            Login
          </Link>
          <Link className="btn btn-primary text-dark mx-1" to="/Signup">
            SignUp
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
