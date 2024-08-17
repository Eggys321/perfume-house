import React from "react";
import { useState } from "react";
import navBrand from "../assets/Group 9283.svg";
import navLogo from "../assets/Group 9283.png";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { GiHamburgerMenu } from "react-icons/gi";
import hamburgerIcon from "../assets/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="container py-5 d-flex justify-content-between align-items-center">
        <div className="d-none d-md-block">
          <img src={navBrand} alt="nav-logo" />
        </div>
        <div className="d-md-none">
          <img src={navLogo} alt="nav-logo" />
        </div>

        <div className="d-none d-lg-flex gap-5 w-25">
          <button className="login-btn w-75">Log In</button>
          <button className="sign-up-btn w-75">Sign In</button>
        </div>
        <div className="d-lg-none">
          <div variant="primary" className="d-lg-none" onClick={handleShow}>
            <img src={hamburgerIcon} alt="" />
          </div>

          <Alert variant="info" className="d-none d-lg-block">
            Resize your browser to show the responsive offcanvas toggle.
          </Alert>

          <Offcanvas show={show} onHide={handleClose} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p className="mb-0">
                This is content within an <code>.offcanvas-lg</code>.
              </p>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
