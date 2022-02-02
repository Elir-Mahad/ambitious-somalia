import React from "react";
import { slide as Menu } from "react-burger-menu";
// import { Link } from "react-router-dom";
import { CgMenuMotion } from "react-icons/cg";
import { CgMenuRight } from "react-icons/cg";
//
function SideBar(props) {
  //
  return (
    <Menu
      //
      customBurgerIcon={<CgMenuRight />}
      customCrossIcon={<CgMenuMotion />}
      right
      {...props}
    >
      {/*  */}
      {/* <Link to="/"> */}
      <p>Home</p>
      {/* </Link> */}
      {/* <Link> */}
      <p>Resources</p>
      {/* </Link> */}
      {/* <Link> */}
      <p>Philosophy</p>
      {/* </Link> */}
      {/* <Link> */}
      <p>Ecosystems</p>
      {/* </Link> */}
      <button className="greenMenubutton">Anything missing ?</button>
      {/*  */}
    </Menu>
  );
}

export default SideBar;
