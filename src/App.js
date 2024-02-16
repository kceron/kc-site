import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import devCat from "./images/devCat.svg";
import Footer from "./components/Footer";

function App() {
  const [sections, setSections] = useState({
    home: true,
    skills: false,
    projects: false,
    contact: false,
  });
  const [initialAnimation, setInitialAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitialAnimation(false);
    }, 2000);
  }, []);

  const onNavItemClick = (section) => {
    // console.log("nav item clicked section-", section);
    const newState = {};
    for (const property in sections) {
      if (property === section) {
        newState[section] = true;
      } else {
        newState[property] = false;
      }
    }
    setSections(newState);
  };

  return (
    <div className="App">
      {/* <div className="toggle-color">COLOR ICON</div> */}
      <Header
        initialAnimation={initialAnimation}
        sections={sections}
        onNavItemClick={onNavItemClick}
      />

      {initialAnimation && (
        <img
          src={devCat}
          alt="Developer girl with cat"
          className="splash-img center-element"
        />
      )}

      {sections.home ? (
        <Home initialAnimation={initialAnimation} />
      ) : sections.projects ? (
        <Projects />
      ) : sections.skills ? (
        <Skills />
      ) : sections.contact ? (
        <Contact />
      ) : null}

      <Footer />
    </div>
  );
}

export default App;
