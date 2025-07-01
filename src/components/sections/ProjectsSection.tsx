
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsSection = () => {
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
