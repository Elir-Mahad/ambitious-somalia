import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import SideBar from "../SideBar";
import Shake from "react-reveal/Shake";

export default function Mogadishu() {
  //
  const [blurOne, setBlurOne] = useState(" ");

  const [blurTwo, setBlurTwo] = useState("blur(3px)");

  const [blurThree, setBlurThree] = useState("blur(3px)");

  useEffect(() => {
    //
    window.addEventListener("scroll", listenToScroll);
    //
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    //
    const winScroll =
      //
      document.body.scrollTop || document.documentElement.scrollTop;
    //
    if (winScroll > 200) {
      // if the window is above 200
      setBlurOne("blur(3px)");
      // blue firxt box
      setBlurTwo("blur(0px)");
      // remove blue from 2nd box
    } else {
      // otherwise
      setBlurOne("blur(0px)");
      // show first box
      setBlurTwo("blur(3px)");
      // blur second box
    }
    //
    if (winScroll > 600) {
      // if window is greater than 600
      setBlurTwo("blur(3px)");
      // blur the second box
      setBlurThree("blur(0px)");
      // remove blur from third box
    } else {
      // otherwise
      setBlurThree("blur(3px)");
      // blur third box
    }
  };

  //
  return (
    <div className="mogPage">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <a className="menuHook">Explore your ecosystem</a>
        <div>
          <Fade duration={5000}>
            <div style={{ filter: blurOne }} className="textBox1">
              <p className="heading">keys Stockholm </p>
              <p className="hook">
                Connecting <br />
                <span className="focus">entrepreneurs </span> <br />
                to their <span className="focus">ecosystem</span> <br />
              </p>
            </div>
          </Fade>
          {/*  */}
          <Fade duration={5000}>
            <div style={{ filter: blurTwo }} className="textBox2">
              <p className="hook2">
                Discover your own <br />
                <span className="focus">personal startup ecosystem </span>{" "}
                <br />
                with resources relevant to you <br />
              </p>
            </div>
          </Fade>
          {/*  */}
          <Fade duration={5000}>
            <div style={{ filter: blurThree }} className="textBox3">
              <p className="hook2">
                The Nordic heavyweight champion of investments, exits and
                opportunities. Stockholm's investor-heavy, flat-hierarchy
                community and solid tech and design talent makes it one of the
                <span className="focus">
                  brightest beacons for entrepreneurship in the world
                </span>
              </p>
              {/* <button className="resourcesbutton">
                Explore your ecosystem
              </button> */}
            </div>
          </Fade>
          <div className="resbox">
            <Shake duration={25000} forever={true}>
              <button className="resourcesbutton">
                Explore your ecosystem
              </button>
            </Shake>
          </div>
        </div>
      </div>
    </div>
  );
}
