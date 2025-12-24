import { Heart, Linkedin, Github, FileText, Mail } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/infaz-rumy/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/infazrumy", label: "GitHub" },
  { icon: FileText, href: "https://infazrumy.medium.com/", label: "Medium" },
  { icon: Mail, href: "mailto:infazrumy@gmail.com", label: "Email" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#articles", label: "Articles" },
  { href: "#tools", label: "Tools" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 border-t border-border">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#" className="font-mono font-bold text-base sm:text-lg text-foreground">
              <span className="text-primary">&lt;</span>
              infaz
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2">
              Associate Tech Lead & Full-Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                aria-label={link.label}
              >
                <link.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Infaz Rumy. Built with{" "}
            <Heart size={12} className="text-destructive fill-destructive sm:w-[14px] sm:h-[14px]" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};
