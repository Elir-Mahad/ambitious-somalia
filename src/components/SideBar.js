import React from "react";
import { slide as Menu } from "react-burger-menu";
// import { Link } from "react-router-dom";
//
function SideBar(props) {
  //
  return (
    <Menu {...props}>
      {/*  */}
      <Link
      //
      // to="/"
      >
        <a>Home</a>
      </Link>
      <Link>
        <a>Resources</a>
      </Link>
      <Link>
        <a>Philosophy</a>
      </Link>
      <Link>
        <a>Ecosystems</a>
      </Link>
      {/*  */}
    </Menu>
  );
}

export default SideBar;
