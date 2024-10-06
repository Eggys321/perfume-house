import React from "react";
import { useState } from "react";
import navBrand from "../assets/Group 9283.svg";
import navLogo from "../assets/Group 9283.png";
import { Outlet, Link } from "react-router-dom";
import OffCanvass from "../componenets/OffCanvass";

const Navbar = () => {
  return (
    <>
      <nav className="container py-4 d-flex justify-content-between align-items-center">
        <div className="d-none d-md-block">
          <img src={navBrand} alt="nav-logo" />
        </div>
        <div className="d-md-none">
          <img src={navLogo} alt="nav-logo" />
        </div>

        <div className="d-none d-lg-flex gap-5 w-25">
          <button className="login-btn w-75">
            <Link to="/auth/signin" className="text-decoration-none login-btn">
              Log In
            </Link>
          </button>   
          <button className="sign-up-btn w-75">
            <Link to="/auth/signup" className="text-decoration-none sign-up-btn ">
              Sign Up
            </Link>
          </button>
        </div>

        <div className="d-lg-none">
          {["top"].map((placement, idx) => (
            <OffCanvass key={idx} placement={placement} name={placement} />
          ))}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
