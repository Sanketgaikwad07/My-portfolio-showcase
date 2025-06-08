
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Database, Globe, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-accent/8"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-accent/3 to-transparent"></div>
      
      {/* Static tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code 
          className="absolute top-20 left-10 text-accent/30" 
          style={{ transform: 'rotate(15deg)' }} 
          size={28} 
        />
        <Database 
          className="absolute top-32 right-16 text-accent/25" 
          style={{ transform: 'rotate(-10deg)' }} 
          size={24} 
        />
        <Globe 
          className="absolute bottom-32 left-16 text-accent/35" 
          style={{ transform: 'rotate(20deg)' }} 
          size={32} 
        />
        <Sparkles 
          className="absolute top-1/2 right-32 text-accent/20" 
          style={{ transform: 'rotate(-15deg)' }} 
          size={20} 
        />
        <Code 
          className="absolute bottom-20 right-12 text-accent/25" 
          style={{ transform: 'rotate(25deg)' }} 
          size={26} 
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Picture */}
          <div>
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-accent/30">
              <img 
                src="https://i.postimg.cc/ryWCPxxy/mypic.jpg" 
                alt="Sanket Gaikwad"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">Sanket</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground h-8">
              <span className="border-r-2 border-accent">
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
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg shadow-lg"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg"
              >
                About Me
              </Button>
            </div>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="text-accent hover:text-accent/80 transition-colors mt-8"
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
