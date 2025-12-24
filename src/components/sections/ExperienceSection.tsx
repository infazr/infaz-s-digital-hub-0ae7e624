import digiratinaLogo from "@/assets/logos/digiratina.png";
import inexisLogo from "@/assets/logos/inexis.png";

const experiences = [
  {
    company: "Digiratina Technology Solutions",
    logo: digiratinaLogo,
    roles: [
      {
        title: "Associate Tech Lead",
        period: "Apr 2025 - Present",
        description: "Leading the Hubbed web migration project (phase two). Managing parcel collection network system for Australia.",
        technologies: ["ASP.Net Core", "Spring Boot", "Java", "PostgreSQL", "AWS ECS", "Docker"],
      },
      {
        title: "Senior Software Engineer",
        period: "Jun 2023 - Apr 2025",
        description: "Continued development on Hubbed migration project with expanded responsibilities.",
        technologies: ["ASP.Net Core", "Spring Boot", "AWS SQS", "AWS ECR"],
      },
      {
        title: "Software Engineer",
        period: "Oct 2022 - Jun 2023",
        description: "Worked on Hubbed, Resfly (travel agent app), and NewsQuake (NLNA management). Designed database structures and integrated data sync systems.",
        technologies: ["ASP.Net Core", "Angular", "Redis", "Azure Container Apps"],
      },
      {
        title: "Associate Software Engineer",
        period: "Apr 2022 - Oct 2022",
        description: "Built internal EMS application and contributed to umrahme.com frontend development.",
        technologies: ["React", "TypeScript", "PostgreSQL", "Docker Compose", "Nginx"],
      },
    ],
  },
  {
    company: "Inexis Consulting",
    logo: inexisLogo,
    roles: [
      {
        title: "Trainee Cloud Engineer",
        period: "Jan 2021 - Apr 2022",
        description: "Full-stack development on pawloyalty.com, an all-in-one pet care software with retail management and CRM features.",
        technologies: ["React", "TypeScript", "AWS Systems Manager"],
      },
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Work Experience</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            4+ years of progressive experience in software development and leadership
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {experiences.map((exp) => (
            <div key={exp.company} className="relative">
              {/* Company Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-card border border-border p-1.5 sm:p-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{exp.company}</h3>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-border space-y-6 sm:space-y-8">
                {exp.roles.map((role, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[21px] sm:-left-[25px] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-4 border-background" />
                    
                    <div className="p-4 sm:p-6 rounded-xl bg-card border border-border card-hover">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2 sm:mb-3">
                        <h4 className="font-semibold text-base sm:text-lg">{role.title}</h4>
                        <span className="text-xs sm:text-sm text-muted-foreground font-mono">
                          {role.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 sm:mb-4">{role.description}</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {role.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
