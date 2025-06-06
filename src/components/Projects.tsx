
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
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
      title: 'Zose',
      description: 'E-commerce platform for clothing with complete shopping cart functionality, user authentication, and payment integration.',
      technologies: ['Java', 'Spring Boot', 'React', 'JavaScript', 'JWT', 'Redux', 'Axios'],
      highlights: ['E-commerce Platform', 'Shopping Cart', 'JWT Authentication', 'State Management']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="text-accent">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent transition-colors group">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent group-hover:text-accent/80 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      Source Code
                    </Button>
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

export default Projects;
