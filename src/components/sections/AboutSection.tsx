
const AboutSection = () => {
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
                🚀 <strong>The Journey Begins:</strong> From writing my first "Hello World" in college to 
                architecting full-stack applications, my coding journey has been nothing short of an adventure. 
                What started as curiosity quickly became a passion for solving complex problems through elegant code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                💡 <strong>The Problem Solver:</strong> I thrive on challenges that others might call "impossible." 
                Whether it's optimizing database queries that improve performance by 300% or building scalable 
                REST APIs that handle thousands of requests, I approach each problem with creativity and determination.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                🎯 <strong>Beyond the Code:</strong> When I'm not crafting backend magic with Java and Spring Boot, 
                you'll find me exploring the latest tech trends, contributing to open-source projects, or mentoring 
                fellow developers. I believe technology should make life better, and I'm here to build solutions that matter.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                🌟 <strong>The Vision:</strong> As a fresh graduate with an old soul for clean code, I'm ready to 
                transform ideas into reality and build the next generation of web applications.
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
                <h3 className="text-2xl font-semibold mb-4 text-accent">Current Status</h3>
                <p className="text-muted-foreground">
                  Fresh Graduate | Ready for Impact
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
