import React from "react";
import topBanner from "../resources/Home/header-bg.png";
import dscLogo from "../resources/Home/vertical-light-logo.svg";
import homeHero from "../resources/Home/Home-hero-img.svg";
import gear from "../resources/Home/gear.svg";
import googleDev from "../resources/Home/google-dev.svg";

import "../styles/home.css";

const Home = () => {
  return (
    <>
      {/* 1 Home - 1 start */}
      <section className="section-home-1">
        <div className="row m-0 bg-grey top-main-container">
          <div className="col-12 col-lg-8 p-0">
            <img
              src={topBanner}
              class="img-fluid top-banner"
              alt="topbanner"
            />
          </div>

          <div className="col-12 col-lg-4 p-0 bg-grey my-lg-auto py-2 top-container">
            <img
              src={dscLogo}
              class="img-container top-dsc-logo"
              alt="dsclogo"
            />

            <a
              href="https://dsc.community.dev/bansal-institute-of-science-and-technology-bhopal/"
              target="_blank"
            >
              <button className="btn-purple mx-auto d-lg-block d-flex mt-2">
                Chapter
              </button>
            </a>
          </div>
        </div>
        <h4 className="sub-heading text-center mt-2">
          Helping students bridge the gap between
          <span className="text-purple">
            &nbsp;theory
          </span>
          &nbsp;and
          <span className="text-purple">
            &nbsp;practice
          </span>
        </h4>

        <div className="floating-anim mx-auto d-lg-flex d-block ">
          <img
            src={gear}
            alt=""
            className="gear d-lg-block d-none"
          />
          <img
            src={homeHero}
            alt=""
            className=" img-fluid mx-auto mt-lg-0 mt-5"
          />
        </div>
      </section>
      {/* 1 Home - 1 end */}

      {/* 2 Home - 2 Start */}

      <section className="section-home-2 d-lg-flex d-block justify-content-center align-items-center">
        <div className="container">
          <div className="row m-0 p-0">
            <div className="col-12 text-center">
              <img
                className="img-fluid mt-lg-auto mt-5"
                src={dscLogo}
                alt="google-dev"
              />
            </div>
            <div className="col-12 text-center">
              <p className="sub-heading mt-lg-auto mt-2">
                Developer Student clubs is a
                flagship program by &nbsp;
                <span>
                  <img
                    className=" google-dev"
                    src={googleDev}
                    alt="google-dev"
                  />
                </span>
              </p>
            </div>
            <div className="col-12">
              <p className="text-center mt-lg-auto mt-5">
                Developer Student Clubs are
                university based community groups
                for students interested in Google
                developer technologies.Students
                from all undergraduate or graduate
                programs with an interest in
                growing as a developer are
                welcome. By joining a DSC,
                students grow their knowledge in a
                peer-to-peer learning environment
                and build solutions for local
                businesses and their community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 Home - 2 End */}
    </>
  );
};

export default Home;
