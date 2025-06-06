
const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold font-mono mb-4">
                Sanket<span className="text-accent">.</span>
              </div>
              <p className="text-muted-foreground">
                Backend & Full-Stack Developer passionate about creating 
                efficient and scalable web solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent">Connect</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a 
                    href="mailto:sanketgaikwad1820@gmail.com"
                    className="hover:text-accent transition-colors"
                  >
                    sanketgaikwad1820@gmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/in/sanket-gaikwad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/sanketgaikwad07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Sanket Gaikwad. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
