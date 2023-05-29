import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

import {
  IconGithub_badge,
  IconLinkedin,
  IconEmailOutline,
} from "../images/svgIcons";
import "../styles/header.css";

const Header = ({ initialAnimation, sections, onNavItemClick }) => {
  const [navMobileOpen, setNavMobileOpen] = useState(false);
  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);
  // console.log("sections", sections);
  const sectionsArr = Object.keys(sections);
  // console.log("sectionsArr-", sectionsArr);
  // useEffect(() => {
  //   // add shadow animation to ask if user would like to see the weather
  //   if ("geolocation" in navigator) {
  //     // navigator.geolocation.getCurrentPosition(successCallback);
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     });

  //     console.log("Latitude is:", lat);
  //     console.log("Longitude is:", long);
  //   } else {
  //     // Use a third-party geolocation service
  //     console.log("Browser does not support the Geolocation API");
  //   }
  // }, [lat, long]);

  return (
    <div className="padding-wrapper">
      <div className="nav-wrapper">
        <div className="header-title-container">
          <h2 className="header-title">
            Karem Ceron
            {/* <a href="">Karem Ceron</a> */}
          </h2>
        </div>

        <div className="nav-desktop">
          {!initialAnimation && (
            <nav className="nav-list">
              {sectionsArr.map((section) => {
                return (
                  <div className="header-nav-item" key={section}>
                    <a
                      className={sections[section] ? "selected-section" : ""}
                      onClick={() => onNavItemClick(section)}
                    >
                      {section}
                    </a>
                  </div>
                );
              })}
            </nav>
          )}
        </div>

        <div
          className="nav-mobile menu-toggle"
          onClick={() => setNavMobileOpen(!navMobileOpen)}
        >
          {!navMobileOpen ? (
            <HiMenuAlt4 size={26} className="" />
          ) : (
            <GrClose size={24} className="" />
          )}
        </div>
      </div>

      {navMobileOpen && (
        <div className="nav-list-mobile nav-overlay">
          {sectionsArr.map((section) => {
            return (
              <div className="header-nav-item a-mobile-box">
                <a
                  className={sections[section] ? "selected-section" : ""}
                  onClick={() => {
                    onNavItemClick(section);
                    setNavMobileOpen(!navMobileOpen);
                  }}
                >
                  {section}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Header;
