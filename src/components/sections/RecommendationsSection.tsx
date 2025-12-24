import { Quote, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const recommendations = [
  {
    name: "Nazik Zayan",
    title: "100+ Software Projects Delivered | Helping Businesses Build, Launch & Scale",
    date: "April 2023",
    relationship: "Worked together at Digiratina",
    content: "Infaz has an insatiable thirst for knowledge and continuous learning. I have known Infaz for the past one year since the day I met him at Digiratina. He is a very talented and a proactive individual, I have worked with him on several projects and witnessed how dedicated, hardworking, decisive and reliable he is when it comes to software development and meeting timelines. He is also someone who is very pragmatic in doing the tasks.",
  },
  {
    name: "Lakmal Silva, PMP, CSM",
    title: "PMP® Certified | Certified ScrumMaster® | Program Manager",
    date: "December 2025",
    relationship: "Worked on the same team",
    content: "I'm happy to recommend Infaz, a highly dedicated and reliable team member. He consistently delivers tasks with full commitment, never misses deadlines, and always goes the extra mile when the team needs support. Infaz is skilled across many areas and brings a positive, collaborative attitude to everything he does. I also had the chance to work with him on extracurricular activities at Digiratina, including the Speechcraft program, where he was enthusiastic and extremely supportive. He is a great team player, a good friend, and someone any organization would be lucky to have.",
  },
  {
    name: "Eshadi Gunasekara",
    title: "Recruitment Specialist | HR & Administration | Talent Acquisition | Technical Recruiter",
    date: "December 2025",
    relationship: "Worked at Digiratina",
    content: "I had the pleasure of working with Infaz for over a year, and he has always shown great talent, dedication, and commitment. He has been a big help to the HR team, managing interviews professionally and efficiently, and always ready to support whenever needed. Infaz is friendly, cooperative, and a true team player. His contributions have been valuable to both the team and the company. I highly recommend Infaz.",
  },
];

export const RecommendationsSection = () => {
  return (
    <section id="recommendations" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recommendations from colleagues and leaders I've worked with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recommendations.map((rec) => (
            <div
              key={rec.name}
              className="p-6 rounded-xl bg-card border border-border card-hover flex flex-col"
            >
              <div className="text-primary mb-4">
                <Quote size={32} />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                "{rec.content}"
              </p>
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold">{rec.name}</h4>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{rec.title}</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <span>{rec.date}</span>
                  <span>•</span>
                  <span>{rec.relationship}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.linkedin.com/in/infaz-rumy/"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Linkedin size={18} />
              View All Recommendations on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
