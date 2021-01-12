import React, { useState } from "react";
import ParticlesBg from "particles-bg";

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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Ajay Singh",
      designation: "Lead",
      linkedin: "https://www.linkedin.com/in/hello-ajay-singh/",
      github: "https://github.com/Code-Recursion/",
      twitter: "https://twitter.com/code_recursion/",
      other: "",
      picture: Ajay_Singh,
    },
    {
      id: 2,
      name: "Aarti Khankul",
      designation: "Core Team Member",
      linkedin: "https://www.linkedin.com/in/aarti-khankul-2a562719b/",
      github: "https://github.com/Aarti3530/",
      twitter: "https://twitter.com/",
      other: "",
      picture: Aarti_Khankul,
    },

    {
      id: 3,
      name: "Surekha Dhote",
      designation: "Core Team Member",
      linkedin: "https://www.linkedin.com/in/surekha-dhote-626798187/",
      github: "https://github.com/Surekhadhote/",
      twitter: "https://twitter.com/",
      other: "",
      picture: Surekha_Dhote,
    },
    {
      id: 4,
      name: "Rupal Gupta",
      designation: "Core Team Member",
      linkedin: "https://www.linkedin.com/in/rupal-gupta-2bb32b1a8/",
      github: "https://github.com/Rupal-Gupta29/",
      twitter: "https://twitter.com/",
      other: "blog/webiste/medium/youtube",
      picture: Rupal_Gupta,
    },
    {
      id: 5,
      name: "Damini Bisen",
      designation: "Core Team Member",
      linkedin: "https://www.linkedin.com/in/damini-bisen-6318761a6/",
      github: "https://github.com/Damini02/",
      twitter: "https://twitter.com/",
      other: "",
      picture: Damini_Bisen,
    },
    {
      id: 6,
      name: "Gyanendra Kumar",
      designation: "Team Member",
      linkedin: "https://www.linkedin.com/in/gaurav-verma-5b3a42193/",
      github: "https://github.com/GauravGhost/",
      twitter: "https://twitter.com/Gyanendrak874/",
      other: "",
      picture: Gyanendra_Kumar,
    },
    {
      id: 7,
      name: "Aakash Panwar",
      designation: "Team Member",
      linkedin: "https://www.linkedin.com/in/aakash-panwar-5bb2101a4/",
      github: "https://github.com/Aakash574/",
      twitter: "https://twitter.com/",
      other: "",
      picture: Aakash_Panwar,
    },
  ]);

  const CardMarkup = () =>
    team.map((member) => (
      <div key={member.id} className="col col-12 col-sm-6 col-md-4 col-lg-4">
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid team-img" src={member.picture} alt="" />
          </div>
          <div className="team-content">
            <h3 className="name">{member.name}</h3>
            <h4 className="title"> {member.designation}</h4>
          </div>
          <ul className="social">
            <li>
              <a href={member.linkedin}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a href={member.github}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              {/*<a href="https://www.instagram.com/_invincible_aj_/">
              <FontAwesomeIcon icon={faInsmember.instagram} />
            </a>*/}
            </li>
          </ul>
        </div>
      </div>
    ));

  return (
    <>
      <section className="sec">
        <div className="container">
          <div className="team-description">
            <div className="team-heading">
              <h1 className="heading mb-5">Meet Our Team</h1>
              <p className="m-auto sub-heading">
                The goal of &nbsp;
                <span className="text-purple">
                  Developer Student Club Bansal Institute of Science and Technology
                </span>
                &nbsp; is to create a strong community of passionate developers, helping students
                with beginner to advanced level of knowledge through interactive and free workshops. The team
                is ready to provide students with opportunities to attend amazing events and improve
                their skills.
              </p>
            </div>
          </div>

          <div className="row">
            <CardMarkup />
          </div>
        </div>
      </section>
      <ParticlesBg type="polygon" num={1} bg={true} />
    </>
  );
};

export default App;
