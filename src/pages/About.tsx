
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/sections/AboutSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
