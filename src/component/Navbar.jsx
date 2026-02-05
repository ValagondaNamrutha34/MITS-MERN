import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>

      <nav className="navbar">
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>

          <li>
            <Link className="link" to="/about">About</Link>
          </li>

          <li>
            <Link className="link" to="/contact">Contact</Link>
          </li>

          <li>
            <Link className="link" to="/service">Service</Link>
          </li>

          <li>
            <Link className="link" to="/hook">Hook</Link>
          </li>

          <li>
            <Link className="link" to="/login">Login</Link>
          </li>

          <li>
            <Link className="link" to="/signup">Signup</Link>
          </li>
          
          
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

