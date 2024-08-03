import React from "react";
import { character } from "./../../data/data";
import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">LOGOO🎭</div>
      <input className="text-field" type="text" placeholder="search ..." />
      <div className="navbar__result">Found X characters</div>
      <button className="heart">
        <HeartIcon className="icon" />
        <span className="badge">2</span>
      </button>
    </nav>
  );
}

export default Navbar;
