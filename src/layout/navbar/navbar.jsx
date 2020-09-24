import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link className="nav-item" to="/">
          Home
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
