import { Code2, Cloud, Database, Users } from "lucide-react";

const skills = [
  { category: "Backend", items: [".NET Core", "ASP.NET", "Spring Boot", "Java", "C#"] },
  { category: "Frontend", items: ["React", "TypeScript", "JavaScript", "Angular", "Ember.js"] },
  { category: "Database", items: ["PostgreSQL", "MS SQL", "MongoDB", "Redis"] },
  { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Nginx", "Jenkins"] },
];

const highlights = [
  { icon: Code2, title: "Full-Stack Development", description: "End-to-end application development" },
  { icon: Cloud, title: "Cloud Technologies", description: "AWS, Azure, containerization" },
  { icon: Database, title: "Database Design", description: "Schema design & optimization" },
  { icon: Users, title: "Team Leadership", description: "Mentoring & project management" },
];

const domains = ["Human Resource", "eCommerce", "Logistics", "Pet Care", "Travel"];

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">About Me</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            An engineer with a passion for building high-quality software solutions and continuous learning.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-4 sm:p-6 rounded-xl bg-card border border-border card-hover text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 text-primary mb-3 sm:mb-4">
                <item.icon size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="p-4 sm:p-6 rounded-xl bg-card border border-border">
                <h4 className="font-medium text-primary mb-3 sm:mb-4 text-sm sm:text-base">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Expertise */}
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Domain Expertise</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {domains.map((domain) => (
              <span
                key={domain}
                className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-border bg-card text-xs sm:text-sm font-medium hover:border-primary/50 transition-colors"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
