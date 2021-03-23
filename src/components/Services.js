import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my experience</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Design</h3>
              <p>
                I belive in creating clean and intuitive web interfaces. Form
                and function need to work hand in hand to create the best user
                experience.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>

              <h3>MERN + </h3>
              <p>
                MongoDB, Express, ReactJS, and NodeJS. Other technologies I've
                used are Sequelize with MySQL and Jest.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
              </div>

              <h3>GitHub</h3>
              <p>Experience with version control on GitHub</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
              </div>
              <h3>Collaboration</h3>
              <p>
                Working with team members from different technological
                backgrounds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;