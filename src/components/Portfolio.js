import React from "react";
import stock from "./stock.gif";
import forecast from './stock.gif'



// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // React Employee Directory
  const openPopupboxEmpDir = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={stock}
          alt="React Employee Directory Project..."
        />
        <p id="description">
          This application allows the user to search for "employees" using the
          randomuserAPI. The idea is to have an application that allows
          management to search for an employee's contact information quickly.
          This application uses React, Node, and Express.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/joshuavaslie2021/19-EMPLOYEE-DIRECTORY",
              "_blank"
            )
          }
        >
          https://github.com/joshuavaslie2021/19-EMPLOYEE-DIRECTORY
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/joshuavaslie2021/19-EMPLOYEE-DIRECTORY",
              "_blank"
            )
          }
        >
          https://github.com/joshuavaslie2021/19-EMPLOYEE-DIRECTORY
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "React Employee Directory App",
        },
      },
    });
  };

  const popupboxConfigEmpDir = {
    titleBar: {
      enable: true,
      text: "Employee Directory App",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Five Day Forecast App
  const openPopupboxForecast = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={forecast}
          alt="Five Day Forecast Project..."
        />
        <p id="description">
          A five day forecast weather application that uses the Weather API from
          openweathermap.org. This application uses JavaScript, HTML, and CSS.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://joshuavaslie2021.github.io/06-WEATHER-DASHBOARD/index.html",
              "_blank"
            )
          }
        >
          https://joshuavaslie2021.github.io/06-WEATHER-DASHBOARD/index.html
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://joshuavaslie2021.github.io/06-WEATHER-DASHBOARD/index.html", "_blank")
          }
        >
          https://joshuavaslie2021.github.io/06-WEATHER-DASHBOARD/index.html
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Five Day Forecast App",
        },
      },
    });
  };

  const popupboxConfigForecast = {
    titleBar: {
      enable: true,
      text: "Five Day Forecast App",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  

  const popupboxConfigTMDMS = {
    titleBar: {
      enable: true,
      text: "Employee database project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Burger
  const openPopupboxstock = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={stock}
          alt="Burger Todo application..."
        />
        <p id="description">
          A burger app that is essentially a todo list application. This
          application uses Node, Express, and MySQL.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://powerful-thicket-55045.herokuapp.com/", "_blank")
          }
        >
         https://powerful-thicket-55045.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/joshuavaslie2021/burger", "_blank")
          }
        >
          https://github.com/joshuavaslie2021/burger
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Burger todo App",
        },
      },
    });
  };

  const popupboxConfigstock = {
    titleBar: {
      enable: true,
      text: "Burger Todo App",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          
          <div className="portfolio-image-box" onClick={openPopupboxEmpDir}>
            <img
              className="portfolio-image"
              src={stock}
              alt="React Employee Directory App..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxForecast}>
            <img
              className="portfolio-image"
              src={forecast}
              alt="Five Day Forecast App..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          
          <div className="portfolio-image-box" onClick={openPopupboxstock}>
            <img
              className="portfolio-image"
              src={stock}
              alt="Burger todo App..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      
      <PopupboxContainer {...popupboxConfigEmpDir} />
      <PopupboxContainer {...popupboxConfigForecast} />
      <PopupboxContainer {...popupboxConfigTMDMS} />
      <PopupboxContainer {...popupboxConfigstock} />
      
    </div>
  );
};

export default Portfolio;