
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: 'Backend Development',
      description: 'Robust server-side applications using Java, Spring Boot, and modern backend technologies.',
      features: ['RESTful API Development', 'Database Design & Management', 'Authentication & Authorization', 'Performance Optimization']
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete web applications from frontend to backend with seamless integration.',
      features: ['React Frontend Development', 'Backend API Integration', 'Responsive Design', 'End-to-End Testing']
    },
    {
      title: 'Database Solutions',
      description: 'Efficient database design and management for scalable applications.',
      features: ['MySQL Database Design', 'Query Optimization', 'Data Migration', 'Backup & Recovery']
    },
    {
      title: 'API Development',
      description: 'Well-documented and secure APIs for modern web and mobile applications.',
      features: ['RESTful API Design', 'API Documentation', 'Security Implementation', 'Third-party Integrations']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-accent">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent transition-all duration-300 group hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-accent group-hover:text-accent/80 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to bring your ideas to life with modern web technologies?
            </p>
            <a 
              href="#contact"
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Let's Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
