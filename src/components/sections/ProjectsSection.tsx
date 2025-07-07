
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { useState, useEffect } from 'react';

const ProjectsSection = () => {
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

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'HomeyBite',
      description: 'Online tiffin services platform with comprehensive meal ordering system, user management, and delivery tracking.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'React', 'CSS', 'Postman', 'Figma'],
      highlights: ['User Authentication', 'Meal Ordering System', 'Admin Dashboard', 'Responsive Design']
    },
    {
      title: 'Medico',
      description: 'Medical billing system designed to streamline healthcare billing processes with patient management and invoice generation.',
      technologies: ['Node.js', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      highlights: ['Patient Management', 'Billing System', 'Invoice Generation', 'Healthcare Focus']
    },
    {
      title: 'Smart Contract Manager',
      description: 'Contract management system for handling smart contracts with automated workflows and document management.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'CSS'],
      highlights: ['Contract Management', 'Automated Workflows', 'Document Handling', 'Smart Features']
    },
    {
      title: 'Todo App',
      description: 'A modern task management application with real-time updates, categorization, and priority management features.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      highlights: ['Real-time Updates', 'Task Categories', 'Priority Management', 'User Dashboard']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Featured <span className="text-accent bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          {/* GitHub Section */}
          <div className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-500 text-center hover:shadow-xl hover:shadow-accent/10 hover:scale-105 group">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Github className="w-12 h-12 text-accent group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                </div>
                <CardTitle className="text-2xl text-accent group-hover:text-accent/80 transition-colors duration-300">
                  View All Projects on GitHub
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  Explore my complete portfolio of projects, including source code, documentation, and contribution history.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://github.com/Sanketgaikwad07', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Visit GitHub Profile
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-500 group hover:shadow-xl hover:shadow-accent/10 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-accent group-hover:text-accent/80 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center hover:text-foreground hover:translate-x-1 transition-all duration-300">
                          <span className="w-2 h-2 bg-accent rounded-full mr-2 group-hover:animate-pulse"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-secondary/80 text-secondary-foreground rounded-lg text-sm font-medium hover:bg-accent/20 hover:scale-110 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
