import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
    </div>
  );
}

export default Navbar;
