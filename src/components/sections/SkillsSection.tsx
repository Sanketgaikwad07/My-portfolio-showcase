
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ['Java', 'JavaScript', 'Spring Boot', 'React']
    },
    {
      title: "Databases",
      skills: ['MySQL', 'PostgreSQL']
    },
    {
      title: "Tools",
      skills: ['Figma', 'Canva', 'Flowbite', 'Jira', 'AWS (Basic)', 'Postman', 'Render', 'Git', 'GitHub']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            My <span className="text-accent bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className={`text-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${(categoryIndex + 1) * 200}ms` }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-accent hover:scale-105 transition-transform duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {category.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className={`px-6 py-3 bg-card/80 backdrop-blur-sm border border-border rounded-xl text-lg font-medium hover:border-accent hover:bg-accent/10 hover:scale-110 transition-all duration-300 cursor-default shadow-lg hover:shadow-xl hover:shadow-accent/20 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                      }`}
                      style={{ animationDelay: `${(categoryIndex + 1) * 200 + index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className={`mt-12 p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 max-w-4xl mx-auto hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '800ms' }}>
            <h4 className="text-lg font-semibold mb-4 text-accent">Specializations</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300">• Backend Development with Java & Spring Boot</li>
              <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300">• Full-Stack Web Applications</li>
              <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300">• RESTful API Design & Development</li>
              <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300">• Database Design & Management</li>
              <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300">• Frontend Development with React</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
