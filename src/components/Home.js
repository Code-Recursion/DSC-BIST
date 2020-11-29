import React from "react";
import topBanner from "../resources/Home/header-bg.png";
import dscLogo from "../resources/Home/vertical-light-logo.svg";
import homeHero from "../resources/Home/Home-hero-img.svg";
import gear from "../resources/Home/gear.svg";

import "../styles/home.css";
const Home = () => {
  return (
    <>
      <section>
        <div className="row m-0 bg-grey top-main-container">
          <div className="col-12 col-lg-8 p-0">
            <img
              src={topBanner}
              class="img-fluid top-banner"
              alt="Responsive image"
            />
          </div>

          <div className="col-12 col-lg-4 p-0 bg-grey my-lg-auto py-2 top-container">
            <img
              src={dscLogo}
              class="img-container top-dsc-logo"
              alt="Responsive image"
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

        <div className="floating-anim mx-auto d-lg-flex d-block">
          <img
            src={gear}
            alt=""
            className="gear d-lg-block d-none"
          />
          <img
            src={homeHero}
            alt=""
            className=" img-fluid mx-auto"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
