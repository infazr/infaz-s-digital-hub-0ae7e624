import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/infaz-rumy/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/infazrumy", label: "GitHub" },
  { icon: FileText, href: "https://infazrumy.medium.com/", label: "Medium" },
  { icon: Mail, href: "mailto:infazrumy@gmail.com", label: "Email" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="section-fade">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                Available for Freelance Projects
              </span>
            </div>
            
            <h1 className="section-fade animate-delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Infaz Rumy</span>
            </h1>
            
            <p className="section-fade animate-delay-200 text-xl sm:text-2xl font-medium text-muted-foreground mb-4">
              Associate Tech Lead
            </p>
            
            <p className="section-fade animate-delay-300 text-base sm:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              4+ years crafting high-quality software solutions. Specialized in .NET, React, and Cloud Technologies. 
              Passionate about building scalable systems and sharing knowledge.
            </p>

            <div className="section-fade animate-delay-400 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button variant="gradient" size="lg" asChild>
                <a href="#contact">Hire Me</a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="#experience">View My Work</a>
              </Button>
            </div>

            <div className="section-fade animate-delay-400 flex items-center justify-center lg:justify-start gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-200 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative section-fade animate-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl scale-125" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-background">
                <img
                  src={profileImage}
                  alt="Infaz Rumy - Associate Tech Lead"
                  className="w-full h-full object-contain animate-float drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
