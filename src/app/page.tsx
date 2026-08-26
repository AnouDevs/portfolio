import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}