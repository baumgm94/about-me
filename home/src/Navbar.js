import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-end p-3 bg-slate-300">
      <Link className="pr-5 pt-5" to="/">
        Home
      </Link>

      <Link className="pr-5 pt-5" to="/about">
        About
      </Link>

      <Link className="pr-5 pt-5" to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
