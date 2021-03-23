import React from "react";
import author from "./Headshot.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
          Thank you for visiting my Bio page and taking an interest in my body of work. I am an aspiring software engineer located out of Chicago, Illinois pursuing a career in tech. I have been in the finance/analytics field for 5 years, graduating Magna Cum Laude from the University of Missouri-Columbia in 2016 as a double major in Finance & Real Estate, and International Business – Spanish. I have industry experience with Data Science applications such as Tableau, Tagitek, and Sungard. I have recently obtained certification from the University of Northwestern for coding, and have experience using html, CSS, Javascript, Visual Basic, and several other computing languages.
          </p>
            <a
            className="hyper-link"
            href="https://www.linkedin.com/in/vasliejoshua/"
            target="_blank"
            >
            LinkedIn
          </a>
          <br></br>
          <a
            className="hyper-link"
            href="https://github.com/joshuavaslie2021"
            target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;