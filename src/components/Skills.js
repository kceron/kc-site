const Skills = () => {
  return (
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
          <dt className="skill-bold">Frontend Testing</dt>
          <dd>Web Automation - Playwright</dd>
          <dd>Jest, React Testing Library, WCAG/ANDI</dd>
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
      </dl>
    </div>
  );
};

export default Skills;
