
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Database, Globe, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const roles = ['Java Full Stack Developer', 'Backend Engineer', 'Frontend Developer', 'Software Engineer'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      setDisplayText(currentRole.slice(0, charIndex + 1));
      charIndex++;
      
      if (charIndex === currentRole.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            setDisplayText(currentRole.slice(0, charIndex - 1));
            charIndex--;
            
            if (charIndex === 0) {
              clearInterval(deleteInterval);
              setCurrentIndex((prev) => (prev + 1) % roles.length);
            }
          }, 100);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80)'
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/85"></div>
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-accent/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent/15"></div>
      
      {/* Animated tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code 
          className="absolute top-20 left-10 text-accent/40 animate-pulse" 
          style={{ transform: 'rotate(15deg)' }} 
          size={28} 
        />
        <Database 
          className="absolute top-32 right-16 text-accent/35 animate-pulse" 
          style={{ transform: 'rotate(-10deg)', animationDelay: '1s' }} 
          size={24} 
        />
        <Globe 
          className="absolute bottom-32 left-16 text-accent/45 animate-pulse" 
          style={{ transform: 'rotate(20deg)', animationDelay: '2s' }} 
          size={32} 
        />
        <Sparkles 
          className="absolute top-1/2 right-32 text-accent/30 animate-pulse" 
          style={{ transform: 'rotate(-15deg)', animationDelay: '0.5s' }} 
          size={20} 
        />
        <Code 
          className="absolute bottom-20 right-12 text-accent/35 animate-pulse" 
          style={{ transform: 'rotate(25deg)', animationDelay: '1.5s' }} 
          size={26} 
        />
      </div>

      {/* Live Time and Date with glass effect */}
      <div className="absolute top-16 right-8 text-right bg-background/20 backdrop-blur-sm rounded-lg p-4 border border-accent/20">
        <div className="text-2xl font-mono text-accent font-bold">
          {formatTime(currentTime)}
        </div>
        <div className="text-sm text-muted-foreground mt-1">
          {formatDate(currentTime)}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Profile Picture with enhanced styling - moved down */}
          <div className="relative mt-8">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-accent/50 relative mx-auto">
              <img 
                src="https://i.postimg.cc/ryWCPxxy/mypic.jpg" 
                alt="Sanket Gaikwad"
                className="w-full h-full object-cover object-center"
              />
              {/* Profile picture overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
            </div>
            {/* Glowing ring effect */}
            <div className="absolute inset-0 w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-accent/30 animate-pulse mx-auto"></div>
          </div>

          {/* Main content with glass morphism effect */}
          <div className="space-y-6 bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-accent/20">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">Sanket</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground h-8">
              <span className="border-r-2 border-accent animate-pulse">
                {displayText}
              </span>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Crafting seamless digital experiences from backend architecture to frontend interfaces. 
              Welcome to my portfolio showcasing innovative web solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg backdrop-blur-sm bg-background/20 hover:scale-105 transition-all duration-300"
              >
                About Me
              </Button>
            </div>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="text-accent hover:text-accent/80 transition-colors mt-8 animate-bounce"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
