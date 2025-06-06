
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Add your CV file URL here
    const cvUrl = '/path-to-your-cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Sanket_Gaikwad_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent/20">
            <img 
              src="https://i.postimg.cc/ryWCPxxy/mypic.jpg" 
              alt="Sanket Gaikwad"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-accent">Sanket</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Backend & Full-Stack Developer passionate about building scalable web applications 
            with modern technologies like Java, Spring Boot, and React.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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

          <div className="mb-16">
            <div className="bg-card border border-border rounded-lg p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-4 text-accent">Download CV</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get my complete resume with detailed experience and projects
              </p>
              <Button 
                onClick={downloadCV}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
