
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Footer from '@/components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Projects;
