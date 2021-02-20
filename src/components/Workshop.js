import React from "react";
import team from "../resources/workshop/team.svg";
import "../styles/home.css";
import "../styles/workshop.css";

import "../styles/workshop.css";
import "../index.css";

import cloudimage from "../resources/workshop/Frame 7.svg";
import group from "../resources/workshop/Group.svg";

const Workshop = () => {
  return (
    <>
      <h1>Workshop</h1>;
      {/* workshop-3 start */}
      <section>
        <header className="container">
          <h1 className="text-purple text-center">Top Events</h1>
          <p className="text-center sub-heading">
            Come learn , Share and Connect with us
          </p>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-md">
              <img src={team} alt="" className="img-fluid" />
            </div>

            <div className="col-md d-flex justify-content-center align-items-center">
              <div>
                <h5 className="sub py-4">
                  RoadMap - Get started with Competitive Programming
                </h5>
                <div className="div-bdr py-4">
                  <ul type="none" className="m-0 p-0">
                    <li>Date: 26 sept 2020-1:45PM (IST)</li>
                    <li>
                      Register Here:
                      <a
                        href="http://bit.ly/get-started-with-cp"
                        target="_blank"
                      >
                        http://bit.ly/get-started-with-cp{" "}
                      </a>
                    </li>
                    <li>Event Venue: Online Zoom meet</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* workshop-3 ended*/}

      {/* 1 workshop - 1 start */}
      <section>
        <div className="container">
          <div className="row m-0">
            <div className=" col-12 col-sm-12 col-md-12 col-lg-6">
              <div id="img-wrap">
                <img src={cloudimage} alt="" id="cloud-box-img" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="workshop">
                <h3 className="text-center mt-5">
                  <span className="text-purple">Expanding</span> &nbsp;
                  <span className="textsmall">at-home learning with </span>
                  <span className="text-black">&nbsp;30 days Tech</span>&nbsp;
                  <span className="text-bold-purple">&nbsp;Talk</span>
                </h3>
                <p className="sub  mt-5 ">
                  opportunity to kickstart your career in google cloud and get hands on practice
                  with Google Cloud Platform
                </p>

                <div className="row " id="pack">
                  <div className="col-9">
                    <div className="text-center mt-lg-auto">
                      <p className="p-0 m-0">Date: 9 Oct 2020 - 8:00PM (IST) </p>
                      <p className="p-0 m-0">Register: bitly.com/gcpcc-student</p>
                      <p className="p-0 m-0">Event Venue: Online Zoom meet</p>
                    </div>
                  </div>
                  <div className="col-2 " id="grp">
                    <img src={group} />{" "}
                  </div>
                  <div className="col-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 workshop - 2 end */}
      </section>
    </>
  );
};
export default Workshop;
