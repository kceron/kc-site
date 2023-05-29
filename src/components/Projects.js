const Projects = () => {
  return (
    <>
      <div className="padding-wrapper skills-container">
        <p className="skills-text">
          This site and my projects have been built using:
        </p>
        <dl>
          <div>
            <dt className="skill-bold">Languages</dt>
            <dd>JavaScript, CSS, Ruby, HTML, SQL</dd>
          </div>
          <div>
            <dt className="skill-bold">Libraries</dt>
            <dd>React, RTK, Ant Design of React, Rails, SASS, Material UI</dd>
          </div>
          <div>
            <dt className="skill-bold">Design Software</dt>
            <dd>Figma</dd>
          </div>
          <div>
            <dt className="skill-bold">Version Control</dt>
            <dd>Git/GitHub</dd>
          </div>
          <div>
            <dt className="skill-bold">RDBMS</dt>
            <dd>MySQL, PostgreSQL</dd>
          </div>
          <div>
            <dt className="skill-bold">Frontend Testing</dt>
            <dd>Jest, React Testing Library, WCAG/ANDI</dd>
          </div>
        </dl>
      </div>

      <div className="padding-wrapper projects-container">
        <h3 className="subtitle shine">PROJECTS</h3>
        <div className="projects">
          <p style={{ paddingTop: "12%", fontSize: "28px" }}>👷🏻‍♀️ 🚧 🚜</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
