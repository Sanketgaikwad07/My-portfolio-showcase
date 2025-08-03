
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Clock } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture with Time/Date on the right - moved down */}
          <div className={`mb-12 mt-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="flex items-center justify-center gap-12 md:gap-16">
              {/* Profile Picture */}
              <div className="w-32 h-32 md:w-40 md:h-40 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-accent/20 to-accent/40 p-1 animate-pulse">
                  <img
                    src="/lovable-uploads/33a1fb0b-15e7-495a-acaa-e709eac13c98.png"
                    alt="Sanket Gaikwad"
                    className="w-full h-full rounded-full object-cover border-2 border-accent/50"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-accent/20 to-transparent"></div>
              </div>
              
              {/* Live Time and Date - More to the right */}
              <div className="text-left ml-12">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-sm border border-border rounded-full">
                  <Clock className="w-5 h-5 text-accent" />
                  <div className="text-center">
                    <div className="text-lg font-mono text-accent font-semibold">
                      {formatTime(currentTime)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {formatDate(currentTime)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-gradient">
              Sanket Gaikwad
            </h1>
            <div className="text-xl md:text-2xl text-accent mb-4 font-medium">
              Software Developer
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Master's student in Computer Science with a strong interest in backend development.
              Looking for an entry-level role to apply my skills and grow as a software engineer.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className={`flex justify-center space-x-6 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a 
              href="https://github.com/sanketgaikwad07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20"
            >
              <Github className="w-6 h-6 text-accent" />
            </a>
            <a 
              href="https://linkedin.com/in/sanket-gaikwad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20"
            >
              <Linkedin className="w-6 h-6 text-accent" />
            </a>
            <a 
              href="mailto:sanketgaikwad1820@gmail.com"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20"
            >
              <Mail className="w-6 h-6 text-accent" />
            </a>
          </div>
          
          <div className={`transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <ArrowDown 
              className="w-8 h-8 text-accent mx-auto animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300" 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
