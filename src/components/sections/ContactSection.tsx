import { Mail, MapPin, Phone, Linkedin, Github, FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "infazrumy@gmail.com", href: "mailto:infazrumy@gmail.com" },
  { icon: Phone, label: "Phone", value: "+94 767 046 956", href: "tel:+94767046956" },
  { icon: MapPin, label: "Location", value: "Colombo, Sri Lanka", href: null },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/infaz-rumy/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/infazrumy", label: "GitHub" },
  { icon: FileText, href: "https://infazrumy.medium.com/", label: "Medium" },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:infazrumy@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening email client..." });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Looking for a skilled developer for your next project? I'm available for freelance work and exciting opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:text-primary transition-all"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold mb-2">Services I Offer</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Full-Stack Web Application Development</li>
                <li>• Backend API Development (.NET, Spring Boot)</li>
                <li>• Cloud Architecture & DevOps (AWS, Azure)</li>
                <li>• Database Design & Optimization</li>
                <li>• Technical Consultation & Code Review</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[140px] resize-none"
                  required
                />
              </div>
              <Button type="submit" variant="gradient" size="lg" className="w-full gap-2">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
