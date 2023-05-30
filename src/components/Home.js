import React, { useState, useEffect } from "react";
import resume from "../docs/DevResume.pdf";
import "../styles/sections.css";

const Home = ({ initialAnimation }) => {
  // console.log(initialAnimation);

  return (
    <div className="padding-wrapper home-page">
      {!initialAnimation && (
        <>
          <div className="content-first-block">
            <h3>About me</h3>
          </div>

          <div className="content-second-block">
            <p className="home-text">
              I am a Full-Stack Developer located in NYC. I have experience
              building web applications using React, RTK, JavaScript, Ruby on
              Rails, SQL and CSS.
            </p>
            <p className="home-text">
              For the past couple of years I've been working on the frontend
              using mainly React, JavaScript and CSS. Which has now become one
              of my favorite things!
            </p>
            <div className="padding-wrapper resume-wrapper">
              <a href={resume} download>
                <button id="downloadBtn" className="main-btn">
                  DOWNLOAD RESUME
                </button>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
