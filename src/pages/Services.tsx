
import Navigation from '@/components/Navigation';
import ServicesSection from '@/components/sections/ServicesSection';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Services;
