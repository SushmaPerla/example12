import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <button>
        <Link to="/home">Home</Link>
      </button>
    </div>
  );
}

export default Navbar;
