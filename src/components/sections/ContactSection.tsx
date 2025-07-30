
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-secondary/90 backdrop-blur-sm"></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Let's <span className="text-accent bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Connect</span>
          </h2>
          
          <p className={`text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-accent">Get In Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a project in mind, need technical consultation, or just want to 
                  say hello, I'm always excited to connect with fellow developers and potential collaborators.
                </p>
              </div>
              
              <div className="space-y-4">
                <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10">
                  <CardContent className="flex items-center p-6">
                    <div className="p-3 bg-accent/10 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <a 
                        href="mailto:sanketgaikwad1820@gmail.com"
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        sanketgaikwad1820@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10">
                  <CardContent className="flex items-center p-6">
                    <div className="p-3 bg-accent/10 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">Pune, Maharashtra, India</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10">
                  <CardContent className="flex items-center p-6">
                    <div className="p-3 bg-accent/10 rounded-lg mr-4">
                      <MessageCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Response Time</h4>
                      <p className="text-muted-foreground">Usually within 24 hours</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-accent">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/sanketgaikwad07" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg hover:border-accent hover:bg-accent/10 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                  >
                    <Github className="w-5 h-5 text-accent" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/sanket-gaikwad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg hover:border-accent hover:bg-accent/10 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                  >
                    <Linkedin className="w-5 h-5 text-accent" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className={`bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/30 transition-all duration-1000 delay-600 hover:shadow-xl hover:shadow-accent/10 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <CardHeader>
                <CardTitle className="text-2xl text-accent flex items-center">
                  <Send className="w-6 h-6 mr-2" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20 transition-all duration-300 hover:border-accent/50"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20 transition-all duration-300 hover:border-accent/50"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20 transition-all duration-300 hover:border-accent/50 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
