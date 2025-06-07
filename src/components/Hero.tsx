
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-accent">Sanket</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Java Full Stack Developer
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
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
              className="animate-bounce text-accent hover:text-accent/80 transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-accent/20">
              <img 
                src="https://i.postimg.cc/ryWCPxxy/mypic.jpg" 
                alt="Sanket Gaikwad"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
