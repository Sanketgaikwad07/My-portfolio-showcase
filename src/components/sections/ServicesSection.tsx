
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const ServicesSection = () => {
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

    const section = document.getElementById('services');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

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
    <section id="services" className="py-20 px-4 bg-secondary/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-5 -right-5 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-accent/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            My <span className="text-accent bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-500 group hover:shadow-xl hover:shadow-accent/10 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-accent group-hover:text-accent/80 group-hover:scale-105 transition-all duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground hover:text-foreground hover:translate-x-2 transition-all duration-300">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:animate-pulse"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-lg text-muted-foreground mb-6 hover:text-foreground transition-colors duration-300">
              Ready to bring your ideas to life with modern web technologies?
            </p>
            <a 
              href="#contact"
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
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
