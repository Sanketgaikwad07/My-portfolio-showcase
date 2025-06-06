
const Skills = () => {
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'React', level: 75 },
    { name: 'JavaScript', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'Git', level: 75 }
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
              <h3 className="text-2xl font-semibold mb-8 text-accent">Expertise Level</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
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
              
              <div className="mt-8 p-6 bg-card rounded-lg border border-border">
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
