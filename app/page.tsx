import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";

// METADATA
export const metadata = { title: "Inicio" };

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <TechStack />
      <ContactSection />
    </>
  );
};

export default HomePage;
