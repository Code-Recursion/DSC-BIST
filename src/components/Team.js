import React, {Component} from "react";
import ParticlesBg from 'particles-bg';

 // CSS Import
import "../styles/team.css";
import "../index.css";

// Team image Import;
import Rupal_Gupta from "../resources/team/avatar/Rupal_Gupta.jpg";
import Aarti_Khankul from "../resources/team/avatar/Aarti_Khankul.jpg";
import Damini_Bisen from "../resources/team/avatar/Damini_Bisen.jpg";
import Gyanendra_Kumar from "../resources/team/avatar/Gyanendra_Kumar.jpeg";
import Ajay_Singh from "../resources/team/avatar/Ajay_Singh.png";
import Surekha_Dhote from "../resources/team/avatar/Surekha_Dhote.jpeg";
import Aakash_Panwar from "../resources/team/avatar/Aakash_Panwar.jpg";

// fontAwesome;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { render } from "@testing-library/react";



const Team = () => {
	render()
    {
		return (
		<>
        <section className="sec">
            <div className="container">
			<div class="team-description">
				<div class="team-heading">
					<h1 className="heading">Meet Our Team</h1>
					<p className="sub-heading">The goal of the <span className="text-purple">DSC-BIST</span> team is to create a passionate developers through interactive and free workshops which is related to <span className="text-purple">coud computing, App Development, web Development, etc.</span> We collaborate to provide students with opportunities to attend amazing events and improve their skills.</p>
				</div>
			</div>
		        <div className="row">
		            <div className="col col-12 col-sm-6 col-md-4 col-lg-4">
			            <div className="our-team">
			                <div className="picture">
				                <img className="img-fluid team-img" src={Ajay_Singh} />
			                </div>
			                <div className="team-content">
				                <h3 className="name">Ajay Singh</h3>
				                <h4 className="title"> Web Development</h4>
			                </div>
			                <ul className="social">
				                <li><a href="https://www.linkedin.com/in/hello-ajay-singh/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
				                <li><a href="https://github.com/Code-Recursion"><FontAwesomeIcon icon={faGithub} /></a></li>
				                <li><a href="https://www.instagram.com/_invincible_aj_/"><FontAwesomeIcon icon={faInstagram}/></a></li>
			                </ul>
			            </div>
		            </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4">
			            <div className="our-team">
			                <div className="picture">
				                <img className="img-fluid team-img" src={Aarti_Khankul} />
			                </div>
			                <div className="team-content">
				                <h3 className="name">Aarti khankul</h3>
				                <h4 className="title">Android Development</h4>
			                </div>
			                <ul className="social">
				                <li><a href="https://www.linkedin.com/in/aarti-khankul-2a562719b/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
				                <li><a href="https://github.com/Aarti3530"><FontAwesomeIcon icon={faGithub} /></a></li>
				                <li><a href="https://www.instagram.com/arru3530/"><FontAwesomeIcon icon={faInstagram}/></a></li>
			                </ul>
			            </div>
		            </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4">
			            <div className="our-team">
			                <div className="picture">
				                <img className="img-fluid team-img" src={Rupal_Gupta} />
			                </div>
			                <div className="team-content">
				                <h3 className="name">Rupal Gupta</h3>
				                <h4 className="title">Web Development</h4>
			                </div>
			                <ul className="social">
				                <li><a href="https://www.linkedin.com/in/rupal-gupta-2bb32b1a8" ><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
				                <li><a href="https://github.com/Rupal-Gupta29"><FontAwesomeIcon icon={faGithub} /></a></li>
				                <li><a><FontAwesomeIcon icon={faInstagram}/></a></li>
			                </ul>
			            </div>
		            </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4">
			            <div className="our-team">
			                <div className="picture">
				                <img className="img-fluid team-img" src={Surekha_Dhote} />
			                </div>
			                <div className="team-content">
				                <h3 className="name">Surekha Dhote</h3>
				                <h4 className="title">Web Developer</h4>
			                </div>
			                <ul className="social">
				                <li><a href="https://www.instagram.com/surekhadhote0002/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
				                <li><a href="https://github.com/Surekhadhote"><FontAwesomeIcon icon={faGithub} /></a></li>
				                <li><a href="https://www.linkedin.com/in/surekha-dhote-626798187/"><FontAwesomeIcon icon={faInstagram}/></a></li>
			                </ul>
			            </div>
		            </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4">
			            <div className="our-team">
			                <div className="picture">
				                <img className="img-fluid team-img" src={Damini_Bisen} />
			                </div>
			                <div className="team-content">
				                <h3 className="name">Damini Bisen</h3>
				                <h4 className="title">web Designing</h4>
			                </div>
			                <ul className="social">
				                <li><a href="https://www.linkedin.com/in/damini-bisen-6318761a6/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
				                <li><a href="https://github.com/Damini02"><FontAwesomeIcon icon={faGithub} /></a></li>
				                <li><a href="https://www.instagram.com/_.daminii._/"><FontAwesomeIcon icon={faInstagram}/></a></li>
			                </ul>
			            </div>
		            </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4">
			            <div className="our-team">
			                <div className="picture">
				                <img className="img-fluid team-img" src={Gyanendra_Kumar} />
			                </div>
			                <div className="team-content">
				                <h3 className="name">Gyanendra Kumar</h3>
				                <h4 className="title">Programmer</h4>
			                </div>
			                <ul className="social">
				                <li><a href="https://www.linkedin.com/in/gaurav-verma-5b3a42193/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
				                <li><a href="https://github.com/GauravGhost"><FontAwesomeIcon icon={faGithub} /></a></li>
				                <li><a href="https://www.instagram.com/gaurav.ghost/" ><FontAwesomeIcon icon={faInstagram}/></a></li>
			                </ul>
			            </div>
		            </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4">
			            <div className="our-team">
			                <div className="picture">
				                <img className="img-fluid team-img" src={Aakash_Panwar} />
			                </div>
			                <div className="team-content">
				                <h3 className="name">Aakash panwar</h3>
				                <h4 className="title">Designing</h4>
			                </div>
			                <ul className="social">
				                <li><a href="https://www.linkedin.com/mwlite/in/aakash-panwar-5bb2101a4"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
				                <li><a href="https://github.com/Aakash574"><FontAwesomeIcon icon={faGithub} /></a></li>
				                <li><a href="https://www.instagram.com/aakash_panwar9/"><FontAwesomeIcon icon={faInstagram}/></a></li>
			                </ul>
			            </div>
		            </div>
		        </div>
	        </div>
        </section>
		<ParticlesBg type="polygon" num={1} bg={true}/>
		</>
	);
};
};

export default Team;