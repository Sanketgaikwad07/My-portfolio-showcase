
const Skills = () => {
  const skills = [
    'Java', 'Spring Boot', 'MySQL', 'React', 'JavaScript', 'Node.js', 
    'HTML/CSS', 'Git'
  ];

  const technologies = [
    'Java', 'Spring Boot', 'MySQL', 'React', 'JavaScript', 'Node.js', 
    'HTML', 'CSS', 'Bootstrap', 'JWT', 'Redux', 'Axios', 'Postman', 
    'Figma', 'Git', 'GitHub'
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Skills & <span className="text-accent">Technologies</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-accent">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-accent">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-accent transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-card rounded-lg border border-border max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold mb-4 text-accent">Specializations</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Backend Development with Java & Spring Boot</li>
              <li>• Full-Stack Web Applications</li>
              <li>• RESTful API Design & Development</li>
              <li>• Database Design & Management</li>
              <li>• Frontend Development with React</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
