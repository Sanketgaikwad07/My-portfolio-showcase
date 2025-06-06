
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-accent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated Backend and Full-Stack Developer driven by curiosity and a 
                never-give-up attitude. As a Computer Science graduate, I bring strong 
                foundational skills and a passion for creating efficient, scalable solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in development focuses on backend technologies, particularly Java 
                and Spring Boot, while also maintaining expertise in frontend frameworks 
                like React to deliver complete full-stack solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest 
                technologies to build applications that make a real difference.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium">Bachelor's in Computer Science</h4>
                  <p className="text-muted-foreground">PVP College</p>
                  <p className="text-sm text-muted-foreground">2021 - 2024</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Status</h3>
                <p className="text-muted-foreground">
                  Fresh Graduate with Strong Technical Foundation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
