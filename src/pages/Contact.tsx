
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
