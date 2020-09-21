import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-item btn" to="/">
            Home
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
