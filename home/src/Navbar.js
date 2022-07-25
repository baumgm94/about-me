import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex text-lg justify-end p-3 bg-slate-300">
      <Link className="pr-10 pt-2" to="/">
        Home
      </Link>

      <Link className="pr-10 pt-2" to="/about">
        About
      </Link>

      <Link className="pr-10 pt-2" to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
