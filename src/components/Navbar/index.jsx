import React from "react";
import { Link } from "react-router-dom";
export default () => (
  <nav>
    <div className="nav-wrapper blue darken-1">
      <ul className="col s12">
        <li>
          <Link to="/">All images</Link>
        </li>
        <li>
          <Link to="/add">Add image</Link>
        </li>
      </ul>
    </div>
  </nav>
);
