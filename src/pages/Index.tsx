import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { RecommendationsSection } from "@/components/sections/RecommendationsSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Infaz Rumy | Associate Tech Lead & Full-Stack Developer</title>
        <meta
          name="description"
          content="Infaz Rumy - Associate Tech Lead with 4+ years of experience in .NET, React, and Cloud Technologies. Available for freelance projects. Based in Colombo, Sri Lanka."
        />
        <meta
          name="keywords"
          content="Infaz Rumy, Software Engineer, Full-Stack Developer, .NET Developer, React Developer, Colombo, Sri Lanka, Freelance Developer"
        />
        <meta property="og:title" content="Infaz Rumy | Associate Tech Lead & Full-Stack Developer" />
        <meta
          property="og:description"
          content="Associate Tech Lead with 4+ years of experience. Specialized in .NET, React, and Cloud Technologies."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://infazrumy.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <ArticlesSection />
          <RecommendationsSection />
          <ToolsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
