
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
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10 animate-[pulse_4s_ease-in-out_infinite]"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-accent/8 animate-[fade-in_6s_ease-in-out_infinite_alternate]"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-accent/3 to-transparent animate-[fade-in_8s_ease-in-out_infinite_alternate-reverse]"></div>
      
      {/* Enhanced floating tech icons with more complex animations */}
      <div className="absolute inset-0 pointer-events-none">
        <Code 
          className="absolute top-20 left-10 text-accent/30 animate-[bounce_3s_ease-in-out_infinite] hover:text-accent/50 transition-all duration-500" 
          style={{ 
            animationDelay: '0s',
            transform: 'rotate(15deg)'
          }} 
          size={28} 
        />
        <Database 
          className="absolute top-32 right-16 text-accent/25 animate-[bounce_4s_ease-in-out_infinite] transition-all duration-500 hover:scale-125" 
          style={{ 
            animationDelay: '1s',
            transform: 'rotate(-10deg)'
          }} 
          size={24} 
        />
        <Globe 
          className="absolute bottom-32 left-16 text-accent/35 animate-[bounce_3.5s_ease-in-out_infinite] transition-all duration-500 hover:scale-110" 
          style={{ 
            animationDelay: '2s',
            transform: 'rotate(20deg)'
          }} 
          size={32} 
        />
        <Sparkles 
          className="absolute top-1/2 right-32 text-accent/20 animate-[bounce_5s_ease-in-out_infinite] transition-all duration-500 hover:text-accent/40" 
          style={{ 
            animationDelay: '0.5s',
            transform: 'rotate(-15deg)'
          }} 
          size={20} 
        />
        <Code 
          className="absolute bottom-20 right-12 text-accent/25 animate-[bounce_4.5s_ease-in-out_infinite] transition-all duration-500 hover:scale-125" 
          style={{ 
            animationDelay: '2.5s',
            transform: 'rotate(25deg)'
          }} 
          size={26} 
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Enhanced Profile Picture with more animations */}
          <div className="animate-[fade-in_1s_ease-out] hover:animate-pulse">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-accent/30 hover:border-accent/60 transition-all duration-700 hover:shadow-accent/40 hover:scale-110 transform animate-[float_6s_ease-in-out_infinite]">
              <img 
                src="https://i.postimg.cc/ryWCPxxy/mypic.jpg" 
                alt="Sanket Gaikwad"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Enhanced main content with staggered animations */}
          <div className="animate-[fade-in_1s_ease-out_0.3s_both] space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent animate-[pulse_2s_ease-in-out_infinite]">Sanket</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground animate-[fade-in_1s_ease-out_0.6s_both] h-8">
              <span className="border-r-2 border-accent animate-[blink_1s_infinite]">
                {displayText}
              </span>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-[fade-in_1s_ease-out_0.9s_both] hover:text-foreground transition-colors duration-300">
              Crafting seamless digital experiences from backend architecture to frontend interfaces. 
              Welcome to my portfolio showcasing innovative web solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fade-in_1s_ease-out_1.2s_both]">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/25 animate-[float_4s_ease-in-out_infinite_0.5s]"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 animate-[float_4s_ease-in-out_infinite_1s]"
              >
                About Me
              </Button>
            </div>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-[bounce_2s_infinite_1.5s] text-accent hover:text-accent/80 transition-colors mt-8 transform hover:scale-110 duration-300"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
