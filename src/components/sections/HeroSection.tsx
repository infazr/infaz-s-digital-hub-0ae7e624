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
      <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Profile Image - Left Side */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start order-1">
            <div className="relative section-fade">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl scale-110" />
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
                <img
                  src={profileImage}
                  alt="Infaz Rumy - Associate Tech Lead"
                  className="w-full h-full object-cover animate-float"
                />
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="lg:col-span-3 text-center lg:text-left order-2">
            <div className="section-fade animate-delay-100">
              <span className="inline-block px-4 py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                Available for Freelance Projects
              </span>
            </div>
            
            <h1 className="section-fade animate-delay-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Infaz Rumy</span>
            </h1>
            
            <p className="section-fade animate-delay-200 text-lg sm:text-xl lg:text-2xl font-medium text-muted-foreground mb-3 sm:mb-4">
              Associate Tech Lead
            </p>
            
            <p className="section-fade animate-delay-300 text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              4+ years crafting high-quality software solutions. Specialized in .NET, React, and Cloud Technologies. 
              Passionate about building scalable systems and sharing knowledge.
            </p>

            <div className="section-fade animate-delay-400 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button variant="gradient" size="lg" asChild className="w-full sm:w-auto">
                <a href="#contact">Hire Me</a>
              </Button>
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                <a href="#experience">View My Work</a>
              </Button>
            </div>

            <div className="section-fade animate-delay-400 flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-200 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon size={18} className="sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};
