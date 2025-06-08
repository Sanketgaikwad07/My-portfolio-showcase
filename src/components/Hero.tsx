
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Database, Globe, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-accent/8 animate-[fade-in_4s_ease-in-out_infinite_alternate]"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-accent/3 to-transparent animate-[fade-in_6s_ease-in-out_infinite_alternate-reverse]"></div>
      
      {/* Floating tech icons with enhanced animations */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-20 left-10 text-accent/30 animate-bounce hover:text-accent/50" style={{ animationDelay: '0s', animationDuration: '3s' }} size={28} />
        <Database className="absolute top-32 right-16 text-accent/25 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} size={24} />
        <Globe className="absolute bottom-32 left-16 text-accent/35 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} size={32} />
        <Sparkles className="absolute top-1/2 right-32 text-accent/20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '5s' }} size={20} />
        <Code className="absolute bottom-20 right-12 text-accent/25 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '4.5s' }} size={26} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Picture at the top */}
          <div className="animate-fade-in">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-accent/30 hover:border-accent/60 transition-all duration-500 hover:shadow-accent/30 hover:scale-105 transform">
              <img 
                src="https://i.postimg.cc/ryWCPxxy/mypic.jpg" 
                alt="Sanket Gaikwad"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Main content */}
          <div className="animate-fade-in space-y-6" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent animate-pulse">Sanket</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Java Full Stack Developer
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.9s' }}>
              Crafting seamless digital experiences from backend architecture to frontend interfaces. 
              Welcome to my portfolio showcasing innovative web solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/25"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
              >
                About Me
              </Button>
            </div>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-accent hover:text-accent/80 transition-colors mt-8 transform hover:scale-110 duration-300"
              style={{ animationDelay: '1.5s' }}
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
