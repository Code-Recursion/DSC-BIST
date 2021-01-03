import React from "react";
import team from "../resources/workshop/team.svg";
import "../styles/home.css";
import "../styles/workshop.css";

const Workshop = () => {
  return (
  <>
  <h1>Workshop</h1>;
  <section>

             <header className="container">
         
                <h1 className="text-purple text-center">Top Events</h1>
                <p className="text-center sub-heading">Come learn , Share and Connect with us</p>
            
            </header>


        <div className="container">
            <div className="row">
                
                <div className="col-md">
                    <img src={team} alt="" className="img-fluid" />
                </div>

                <div className="col-md">
                    <div className=" container mt-5">
                        <div className="font-weight-bold m-3 p-3">Roadmap - Get started with Competitive Programming</div>
                        <div className="m-3 p-3 div-bdr">
                            Date:26 sept 2020-1:45PM (IST) <br></br>
                            Register Here: http://bit.ly/get-started-with-cp <br></br>
                            Event Venue- Online Zoom meet
                        </div>
                    </div>

                </div>
            </div>
        </div>    
        </section>
        
      
      </>   
    )

};

export default Workshop;
