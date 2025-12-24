import { GraduationCap, Award } from "lucide-react";
import westminsterLogo from "@/assets/logos/westminster.png";
import aquinasLogo from "@/assets/logos/aquinas.png";
import dsSenanayakeLogo from "@/assets/logos/ds-senanayake.png";

const education = [
  {
    institution: "University of Westminster",
    logo: westminsterLogo,
    degree: "B.Sc. (Hons) Computer Science",
    period: "2019 - 2024",
    grade: "Second Class Upper",
    location: "UK",
  },
  {
    institution: "Aquinas College of Higher Studies",
    logo: aquinasLogo,
    degree: "Diploma in ICT",
    period: "2015",
    location: "Sri Lanka",
  },
  {
    institution: "D.S Senanayake College",
    logo: dsSenanayakeLogo,
    degree: "G.C.E Advanced Level",
    period: "2018",
    grade: "Physical Science",
    location: "Sri Lanka",
  },
];

const certifications = [
  {
    title: "Data Structure & Algorithmic Toolbox",
    issuer: "University of California San Diego (Coursera)",
    year: "2020",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and academic excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-6 rounded-xl bg-card border border-border card-hover"
                >
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-lg bg-secondary p-2 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold truncate">{edu.institution}</h4>
                      <p className="text-primary font-medium text-sm">{edu.degree}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <span className="font-mono">{edu.period}</span>
                        {edu.grade && (
                          <>
                            <span>•</span>
                            <span>{edu.grade}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-6 rounded-xl bg-card border border-border card-hover"
                >
                  <h4 className="font-semibold mb-1">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-accent/10 text-accent font-medium">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {["English", "Tamil", "Sinhala"].map((lang) => (
                  <div
                    key={lang}
                    className="px-4 py-2 rounded-lg bg-card border border-border"
                  >
                    <span className="font-medium">{lang}</span>
                    <span className="text-muted-foreground text-sm ml-2">Fluent</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
