import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

import "../styles/header.css";

const Header = ({ initialAnimation, sections, onNavItemClick }) => {
  const [navMobileOpen, setNavMobileOpen] = useState(false);
  // console.log("sections", sections);
  const sectionsArr = Object.keys(sections);
  // console.log("sectionsArr-", sectionsArr);

  return (
    <div className="padding-wrapper">
      <div className="nav-wrapper">
        <div className="header-title-container">
          <h2 className="header-title" onClick={() => onNavItemClick("home")}>
            Karem Ceron
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
