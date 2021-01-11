import React from "react";

import "../styles/workshop.css";
import "../index.css";


import cloudimage from "../resources/Workshop/Frame 7.svg";
import group from "../resources/Workshop/Group.svg";


const Workshop = () => {
      {/* 1 workshop - 1 start */}
  return ( 
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
             <h3 className="text-center mt-5" >
                <span className="text-purple">Expanding</span>  &nbsp;
                <span className="textsmall">at-home learning with </span>
                <span className="text-black">&nbsp;30 days Tech</span>&nbsp;
                <span className="text-bold-purple">&nbsp;Talk</span>
              </h3>
             <p className="sub  mt-5 ">
                 opportunity to kickstart your career in google cloud and get hands on practice with Google Cloud Platform
       </p>

              
            <div className="row " id="pack" >
             <div className="col-9">
             <div className="text-center mt-lg-auto">
               <p className="p-0 m-0">Date: 9 Oct 2020 - 8:00PM (IST) </p>
               <p className="p-0 m-0">Register: bitly.com/gcpcc-student</p>
               <p className="p-0 m-0">Event Venue: Online Zoom meet</p>
                
            </div>
            </div>
             <div className="col-2 " id="grp"><img src={group}/> </div>
             <div className="col-1"></div>
            </div>   
        
          </div>
         </div> 
      </div>
    </div>
    {/* 1 workshop - 1 end */}
</section>
 
  );};
export default Workshop;
