import "../assets/css/nav.css";
import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import logoIMG from "../assets/img/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isTransformed, setIsTransformed] = useState(false);
  const toggleChange = () => {
    setIsTransformed((prvState) => !prvState);
  };

  return (
    <div className="navbar">
      <div id="logo">
        <img src={logoIMG} />
        <p>Sarvatrah</p>
      </div>
      <div id={isTransformed ? "menu" : "onMenu"}>
        <ul>
          <li>
            <p>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link
                to="/adventure"
                style={{ textDecoration: "none", color: "black" }}
              >
                Adventure
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link
                to="/activity"
                style={{ textDecoration: "none", color: "black" }}
              >
                Activities
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link
                to="/holiday_list"
                style={{ textDecoration: "none", color: "black" }}
              >
                Holiday
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link
                to="/pilgri"
                style={{ textDecoration: "none", color: "black" }}
              >
                Pilgrimage
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link
                to="/booking"
                style={{ textDecoration: "none", color: "black" }}
              >
                Booking
              </Link>
            </p>
          </li>
        </ul>
      </div>
      <div id="loginFunc">
        <p>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            Register / Sign In
          </Link>
        </p>
      </div>
      <div id="profile">
        <i className="profile" style={{ fontSize: "36px", color: "black" }}>
          <FaRegUserCircle />
        </i>
      </div>
      <div
        className={`mobile_menu ${isTransformed ? "change" : ""}`}
        onClick={toggleChange}
      >
        <div className="bar1"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default Navbar;
