
import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About <span className="text-accent bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground/90 transition-colors duration-300">
                🚀 <strong className="text-accent">The Journey Begins:</strong> From writing my first "Hello World" in college to 
                architecting full-stack applications, my coding journey has been nothing short of an adventure. 
                What started as curiosity quickly became a passion for solving complex problems through elegant code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground/90 transition-colors duration-300">
                💡 <strong className="text-accent">The Problem Solver:</strong> I thrive on challenges that others might call "impossible." 
                Whether it's optimizing database queries that improve performance by 300% or building scalable 
                REST APIs that handle thousands of requests, I approach each problem with creativity and determination.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground/90 transition-colors duration-300">
                🎯 <strong className="text-accent">Beyond the Code:</strong> When I'm not crafting backend magic with Java and Spring Boot, 
                you'll find me exploring the latest tech trends, contributing to open-source projects, or mentoring 
                fellow developers. I believe technology should make life better, and I'm here to build solutions that matter.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground/90 transition-colors duration-300">
                🌟 <strong className="text-accent">The Vision:</strong> As a fresh graduate with an old soul for clean code, I'm ready to 
                transform ideas into reality and build the next generation of web applications.
              </p>
            </div>
            
            <div className={`bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`} style={{ animationDelay: '600ms' }}>
              <h3 className="text-2xl font-semibold mb-6 text-accent">Education</h3>
              <div className="space-y-6">
                <div className="transform hover:translate-x-2 transition-transform duration-300">
                  <h4 className="text-lg font-medium">MSc (Scientific Computing)</h4>
                  <p className="text-muted-foreground">Savitribai Phule Pune University</p>
                  <p className="text-sm text-muted-foreground">Current - 2025</p>
                </div>
                <div className="transform hover:translate-x-2 transition-transform duration-300">
                  <h4 className="text-lg font-medium">Bachelor's in Computer Science</h4>
                  <p className="text-muted-foreground">PVP College</p>
                  <p className="text-sm text-muted-foreground">2021 - 2024</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Current Status</h3>
                <p className="text-muted-foreground">
                  Graduate Student | Ready for Impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
