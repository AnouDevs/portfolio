import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProjectsSection />
    </main>
  );
}