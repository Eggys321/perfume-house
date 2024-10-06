import React from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import hamburgerIcon from "../assets/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import { Outlet, Link } from "react-router-dom";


const OffCanvass = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div variant="primary" className="d-lg-none" onClick={handleShow}>
        <img src={hamburgerIcon} alt="" />
      </div>
      <Offcanvas className="container" show={show} onHide={handleClose} {...props}>
        <div className="pt-5">
        <button className="login-btn w-100 mb-2">
            <Link to="/auth/signin" className="text-decoration-none login-btn">
              Log In
            </Link>
          </button>
          <button className="sign-up-btn w-100">
            <Link to="/auth/signup" className="text-decoration-none sign-up-btn ">
              Sign Up
            </Link>
          </button>
        </div>
      </Offcanvas>
    </>
  );
};

export default OffCanvass;
