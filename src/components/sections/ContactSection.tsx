
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const downloadCV = () => {
    const cvUrl = 'https://drive.google.com/file/d/1F0fdeyQkRfxZL1ejCn6QTsLjaptuy1cb/view?usp=drivesdk';
    window.open(cvUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sanketgaikwad1820@gmail.com',
      href: 'mailto:sanketgaikwad1820@gmail.com',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9404561820',
      href: 'tel:9404561820',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sanket gaikwad',
      href: 'https://linkedin.com/in/sanket-gaikwad',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'sanketgaikwad07',
      href: 'https://github.com/sanketgaikwad07',
      color: 'from-gray-400 to-gray-600'
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left side - Contact Info */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-accent/10 to-transparent p-8 rounded-2xl border border-accent/20">
                  <h3 className="text-3xl font-bold mb-6 text-accent">Let's Connect</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question, want to discuss a project, or just want to say hi, 
                    feel free to reach out!
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {contactInfo.map((contact, index) => (
                    <div 
                      key={contact.label}
                      className="group relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/10">
                        <div className="flex items-center space-x-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <contact.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-1">{contact.label}</h4>
                            <a 
                              href={contact.href}
                              target={contact.href.startsWith('http') ? '_blank' : undefined}
                              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm break-all"
                            >
                              {contact.value}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right side - Contact Form */}
            <div className="space-y-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground/90">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20 transition-all duration-200 hover:bg-background/70"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground/90">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20 transition-all duration-200 hover:bg-background/70"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-foreground/90">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20 min-h-[120px] transition-all duration-200 hover:bg-background/70 resize-none"
                        placeholder="Tell me about your project!"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 group"
                    >
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 shadow-xl">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Download className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h4 className="font-bold text-xl mb-3 text-accent">Download Resume</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get a detailed overview of my skills and experience
                    </p>
                    <Button 
                      onClick={downloadCV}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 group"
                    >
                      <Download className="mr-2 h-4 w-4 group-hover:bounce" />
                      Download CV
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
