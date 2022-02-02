import React from "react";
import SideBar from "../SideBar";
import { CgChevronDownO } from "react-icons/cg";
import iriselogo from "../../assets/iriselogo.png";
import simadlogo from "../../assets/simadlogo.png";
//
function MogResources() {
  return (
    <div className="reswrapper">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <a
          href="https://elir-mahad.github.io/ambitious-somalia/"
          className="menuHook"
        >
          Explore your ecosystem
        </a>
        <div className="resTextBox">
          <p className="heading">keys Mogadishu </p>
          <p className="hook">
            Keys navigates the ecosystem to help <br />
            <span className="focus">
              find the right resources for you{" "}
            </span>{" "}
            <br />
          </p>
        </div>
        {/*  */}
        <div className="resbox">
          <button className="resdownbut">
            Explore your ecosystem
            <span className="resdownicon">
              <CgChevronDownO />
            </span>
          </button>
        </div>
        {/*  */}
        <div>
          <h2 className="directoryHeading">Complete directory</h2>
          <div className="row">
            <div className="company">
              <img
                alt="logo of irise company"
                className="companylogo"
                src={iriselogo}
              />
              <h2 className="companyname">Irisehub</h2>
              <p className="companyinfo">
                Rise is the first innovation and technology hub that is launched
                in Mogadishu with the aim of unlocking the potential of
                Somalia’s talents and accelerating changes and economic
                development.{" "}
              </p>
              <a className="companylink" href="https://irisehub.so/">
                Read more +
              </a>
            </div>
            {/*  */}
            <div className="company">
              <img
                alt="logo of simad labs"
                className="companylogo"
                src={simadlogo}
              />
              <h2 className="companyname">Simad labs</h2>
              <p className="companyinfo">
                At SIMAD iLab, we help make a positive impact on Somalia and the
                world through entrepreneurship. Our team is proactively engaged
                in startups’ journey from inception to exit, to empower and
                enable founders.
              </p>
              <a className="companylink" href="https://ilab.simad.edu.so/">
                Read more +
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MogResources;
