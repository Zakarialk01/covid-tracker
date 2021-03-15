import React from "react";

import { Link, useLocation } from "react-router-dom";
import "./Chart.css";

function Chart() {
  return (
    <div>
      <div className="topnav">
        <Link className="active" as={Link} to="/">
          🦠
        </Link>
        <Link className="active" as={Link} to="/">
          {" "}
          About
        </Link>
        <Link className="active" as={Link} to="/stats">
          Stats
        </Link>
        <Link className="active" as={Link} to="/country">
          Search by country
        </Link>
      </div>
    </div>
  );
}

export default Chart;
