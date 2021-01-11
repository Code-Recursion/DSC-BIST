import React from "react";
import topBanner from "../resources/Home/header-bg.png";
import dscLogo from "../resources/Home/vertical-light-logo.svg";
import homeHero from "../resources/Home/Home-hero-img.svg";
import gear from "../resources/Home/gear.svg";
import googleDev from "../resources/Home/google-dev.svg";
import dscLogoDark from "../resources/Home/DarkVertical.svg";
import copy from "../resources/Home/copy.svg";

import reward from "../resources/Home/reward.svg";
import people from "../resources/Home/people.svg";
import bar from "../resources/Home/bar-chart-2.svg";

import award from "../resources/Home/award.svg";
import user from "../resources/Home/users.svg";
import checkCircle from "../resources/Home/check-circle.svg";

import bist from "../resources/Home/bist.png";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      {/* 1 Home - 1 start */}
      <section className="section-home-1">
        <div className="row m-0 bg-grey top-main-container">
          <div className="col-12 col-lg-8 p-0">
            <img src={topBanner} class="img-fluid top-banner" alt="topbanner" />
          </div>
        

          <div className="col-12 col-lg-4 p-0 bg-grey my-lg-auto py-2 top-container">
            <img src={dscLogo} class="img-container top-dsc-logo" alt="dsclogo" />

            <a
              href="https://dsc.community.dev/bansal-institute-of-science-and-technology-bhopal/"
              className="chapter-link">
              <button className="btn-purple mx-auto d-lg-block d-flex mt-2">Chapter</button>
            </a>
          </div>
        </div>
        <h4 className="sub-heading text-center mt-2">
          Helping students bridge the gap between
          <span className="text-purple">&nbsp;theory</span>
          &nbsp;and
          <span className="text-purple">&nbsp;practice</span>
        </h4>

        <div className="floating-anim mx-auto d-lg-flex d-block ">
          <img src={gear} alt="" className="gear d-lg-block d-none" />
          <img src={homeHero} alt="" className=" img-fluid mx-auto mt-lg-0 mt-5" />
        </div>
      </section>
      {/* 1 Home - 1 end */}

      {/* 2 Home - 2 Start */}

      <section className="section-home-2 d-lg-flex d-block justify-content-center align-items-center">
        <div className="container">
          <div className="row m-0 p-0">
            <div className="col-12 text-center">
              <img className="img-fluid mt-5" src={dscLogo} alt="google-dev" />
            </div>
            <div className="col-12 text-center">
              <p className="sub-heading">
                Developer Student clubs is a flagship program by &nbsp;
                <span>
                  <img className=" google-dev" src={googleDev} alt="google-dev" />
                </span>
              </p>
            </div>
            <div className="col-12">
              <p className="text-center">
                Developer Student Clubs are university based community groups for students
                interested in Google developer technologies.Students from all undergraduate or
                graduate programs with an interest in growing as a developer are welcome. By joining
                a DSC, students grow their knowledge in a peer-to-peer learning environment and
                build solutions for local businesses and their community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 Home - 2 End */}

      {/* 3 Home - 3 Start */}
      <section className="section-home-3 d-lg-flex d-block justify-content-center align-items-center">
        <div className="container">
          <h2 className="heading text-center mb-5">Opportunities DSCs provide students with</h2>

          <div className="row mx-lg-5 mx-0 mt-2">
            <div className="col-lg-6 col-12">
              <ul>
                <li className="sub-heading mb-lg-5 mb-2">
                  Grow their knowledge on developer technologies and more through peer to peer
                  workshops and events.
                </li>
                <li className="sub-heading">
                  Gain relevant industry experience by solving problems for local organizations with
                  technology based solutions.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-12">
              <ul>
                <li className="sub-heading mb-lg-5 mb-2">
                  Showcase their prototypes and solutions to their local community and industry
                  leaders.
                </li>
                <li className="sub-heading">
                  Getting inspiration to become world-class developers and changemakers from sharing
                  others' success stories.
                </li>
              </ul>
            </div>
          </div>
          <div class="card-group mx-lg-5 mx-3">
            <div class="card mx-lg-2">
              <div class="card-body text-center">
                <p className="text-center">
                  <img src={award} />
                </p>
                <h4 className="text-center">Why DSC?</h4>
                <p className="text-center">
                  For students to learn development skills, solve problems through technology and
                  inspire them to be world class developers and changemakers.
                </p>
              </div>
            </div>
            <div class="card mx-lg-2">
              <p className="text-center">
                <img src={user} />
              </p>
              <h4 className="text-center">Target Audience</h4>
              <p className="text-center">
                DSC activities are targeted at University students and any others including faculty
                members who want to learn development skills & work to solve real-life problems.
              </p>
            </div>
            <div class="card mx-lg-2">
              <div class="card-body text-center">
                <p className="text-center">
                  <img src={checkCircle} />
                </p>
                <h4 className="text-center">Concept of DSC</h4>
                <p className="text-center">
                  DSC activities are targeted at
                  University students and any
                  others including faculty members
                  who want to learn development
                  skills and work to solve real-life
                  problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3 Home - 3 end */}

      {/* 4 Home - 4 start */}
      <section className="section-home-4 d-flex flex-column justify-content-center align-items-center">
        <h2 className="sub-heading mb-5">
          Google's developer community programs empower you to :{" "}
        </h2>
        <div className="section-4-inner-container d-flex justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center m-0 p-0 bg-purple">
            <div className="col-12 col-lg-3 m-0 p-0 d-flex justify-content-around">
              <div className="section-4-card">
                <div className="p-4">
                  <img src={people} />
                </div>
                <div className="text-white">Connect with fellow developers in your area.</div>
              </div>
            </div>
            <div className="col-12 col-lg-3 m-0 p-0 d-flex justify-content-around">
              <div className="section-4-card">
                <div className="p-4">
                  <img src={bar} />
                </div>
                <div className="text-white">
                  Get inspired by those around you, hear from industry experts, and solve problems
                  together.
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 m-0 p-0 d-flex justify-content-around">
              <div className="section-4-card">
                <div className="p-4">
                  <img src={reward} />
                </div>
                <div className="text-white">
                  Learn new skills through in-person training sessions and workshops.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Home - 6 start */}
      <section className="section-home-6">
        <div className="h-100 row m-0">
          <div className="col-lg-6 col-12 h-50 p-0">
            <div>
              <iframe
                className=""
                width="100%"
                height="390px"
                src="https://maps.google.com/maps?width=675&amp;height=312&amp;hl=en&amp;q=Developer%20Student%20Clubs%20Bansal%20Institute%20of%20Science%20and%20Technology%20kokta%20bhopal+(Developer%20Student%20Clubs%20Bansal%20Institute%20of%20Science%20and%20Technology)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-0">
            <div className="bist-img-container m-0">
              <img className="img-fluid" src={bist} />
            </div>
          </div>

          <div className="col-12 bg-footer h-50 ">
            <div className="footer-section">
              <div className="row d-flex justify-content-center align-items-center my-2 mx-0">
                <div class="col-lg-3 col-12 text-center">
                  <div className="row m-0">
                    <img src={dscLogoDark} alt="logo" />
                    <p className="text-lg-left text-light-grey">
                      <p className="p-0 m-0">Ajay Singh</p>
                      <p className="p-0 m-0">Developer Student Clubs Lead </p>
                      <p className="p-0 m-0">
                        <a href="tel:738-997-2225">
                          <span className="text-light-grey">7389972225</span>
                        </a>
                        |
                        <a href="mailto:someone@example.com">
                          <span className="text-light-grey">dsc.bist@gmail.com</span>
                        </a>
                      </p>
                      <p className="p-0 m-0">Kokta, Anand Nagar, Raisen Road</p>
                      <p className="p-0 m-0">Bhopal 462021 (M.P.) INDIA</p>
                    </p>
                  </div>
                </div>
                <div class="col-lg-3 col-12 text-center text-white p-0">
                  <p className="">Programs</p>
                  <a href="https://developers.google.com/community/dsc">
                    <p className="text-light-grey">Developer Student Clubs</p>
                  </a>
                  <a href="https://developers.google.com/community/experts">
                    <p className="text-light-grey">Google Developer Experts</p>
                  </a>
                  <a href="https://developers.google.com/community/gdg">
                    <p className="text-light-grey">Google Developer Groups</p>
                  </a>
                  <a href="https://developers.google.com/community/gdg">
                    <p className="text-light-grey">Women Techmakers</p>
                  </a>
                  <a herf="https://dsc.community.dev/bansal-institute-of-science-and-technology-bhopal/">
                    <button className="btn-purple-hover">Chapter</button>
                  </a>
                </div>
                <div class="col-lg-2 col-12 text-center text-white p-0 mt-lg-0 mt-4">
                  <p className="">Developers</p>
                  <a href="https://console.cloud.google.com/">
                    <p className="text-light-grey">Google Cloud Platform</p>
                  </a>
                  <a href="https://firebase.google.com/">
                    <p className="text-light-grey">Firebase Console</p>
                  </a>
                  <a href="https://flutter.dev/">
                    <p className="text-light-grey">Flutter</p>
                  </a>
                </div>
                <div class="col-lg-2 col-12 text-center text-white p-0">
                  <p className="">Contribute</p>
                  <a href="mailto:helloajaysingh1@gmail.com?cc=dsc.bist@gmail.com&bcc=rupalgupta951@gmail.com,dhotesurekha39@gmail.com,aarti6264744312@gmail.com,gyanendrak874@gmail.com&subject=Found%20a%20bug%20in%20DSC-BIST%20Website&body=Hello%20i%20am%20%7Bname%7D%2C%20i%20have%20found%20a%20bug%20on%20your%20website%20DSC-BIST.%0D%0ADescription%20%3A%0D%0AFixes%20%3A%0D%0A%0D%0Acontribute%20%3A%20https%3A%2F%2Fgithub.com%2FCode-Recursion%2FDSC-BIST">
                    <p className="text-light-grey">Found a bug?</p>
                  </a>
                  <a href="https://github.com/Code-Recursion/DSC-BIST">
                    <p className="text-light-grey">Contribute</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center text-white bg-purple p-1">
          Made by Team of DSC-BIST 2020 Copyright &nbsp;
          <span>
            <img src={copy} />
          </span>
        </footer>
      </section>
      {/* 6 Home - 6 end */}
    </>
  );
};

export default Home;
