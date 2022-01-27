import React from "react";
import { Link } from "react-router-dom";
//
function Somaliland() {
  return (
    <div>
      <h1 className="regionName"> Somaliland</h1>
      <div className="allCities">
        {/*  */}
        <Link
          className="hargeysabg"
          style={{ textDecoration: "none" }}
          to="/hargeisa"
        >
          <div className="cityBox">
            <p className="cityName">Hargeisa</p>
          </div>
        </Link>
        {/*  */}
        <Link
          className="burcobg"
          style={{ textDecoration: "none" }}
          to="/burco"
        >
          <div className="cityBox">
            <p className="cityName">Burco</p>
          </div>
        </Link>
        {/*  */}
        <Link
          style={{ textDecoration: "none" }}
          className="berberabg"
          to="/berbera"
        >
          <div className="cityBox">
            <p className="cityName">Berbera</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Somaliland;
