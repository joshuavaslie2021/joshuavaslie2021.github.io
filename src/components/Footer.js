import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Chicago, Illinois 60423</p>
            </div>
            <div className="d-flex">
              <a href="tel:815-2749590">+1 (815) 274 - 9590</a>
            </div>
            <div className="d-flex">
              <p>joshuavaslie2021@u.Northwestern.edu</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a href="#home" className="footer-nav">Home</a>
                <br />
                <a href="#about" className="footer-nav">About me</a>
                <br />
              </div>
              <div className="col">
                <a href="#services" className="footer-nav">Experience</a>
                <br />
                <a href="#portfolio" className="footer-nav">Portfolio</a>
                <br />
                <a href="#contacts" className="footer-nav">Contacts</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://github.com/joshuavaslie2021"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://github.com/joshuavaslie2021"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://github.com/joshuavaslie2021"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://github.com/joshuavaslie2021"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Group 5 Medica LLC | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;