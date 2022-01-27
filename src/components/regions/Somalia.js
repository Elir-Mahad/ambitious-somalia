import React from "react";
import { Link } from "react-router-dom";

function Somalia() {
  return (
    <div>
      <h1 className="regionName">Somalia</h1>
      <div className="allCities">
        {/*  */}
        <Link
          className="mogadishubg"
          style={{ textDecoration: "none" }}
          to="/mogadishu "
        >
          <div className="cityBox">
            <p className="cityName">Mogadishu</p>
          </div>
        </Link>
        {/*  */}
        <Link
          className="kismaayobg"
          style={{ textDecoration: "none" }}
          to="/kismaayo"
        >
          <div className="cityBox">
            <p className="cityName">Kismaayo</p>
          </div>
        </Link>
        {/*  */}
        <Link
          className="bosasobg"
          style={{ textDecoration: "none" }}
          to="/bosaso"
        >
          <div className="cityBox">
            <p className="cityName">Bosaso</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Somalia;
