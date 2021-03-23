import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>It's time to start creating.</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "React"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link
          smooth={true}
          to="contacts"
          offset={-110}
          className="btn-main-offer"
        >
          contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
