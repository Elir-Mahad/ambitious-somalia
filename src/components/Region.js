import React from "react";
import Somalia from "./regions/Somalia";
import Somaliland from "./regions/Somaliland";
import SideBar from "./SideBar";

function Region() {
  return (
    <div className="landing">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <Somalia />
        <Somaliland />
      </div>
    </div>
  );
}

export default Region;
