import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        onClick={() => history.push("/")}
        src="/netflix.png"
        alt="Netflix Logo"
        className="nav__logo"
      />

      <img
        onClick={() => history.push("/profile")}
        src="/avatar.png"
        alt="Netflix Avatar"
        className="nav__avatar"
      />
    </div>
  );
};

export default Navbar;
