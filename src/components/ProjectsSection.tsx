import Image from "next/image";
import projects from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white px-6 py-16 md:px-14 md:py-20">
      <h2 className="text-center text-4xl font-bold text-ink">Projects</h2>
      <div className="mx-auto mt-2 h-[3px] w-16 bg-sage-underline" />

      <div className="mt-10 flex justify-center gap-6 overflow-x-auto pb-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="w-[262px] shrink-0 rounded-xl border border-card-border p-5"
          >
            <div className="relative h-32 w-full overflow-hidden rounded-md">
              <Image
                src="/kpop-goodies-preview.png"
                alt={project.title}
                fill
                priority
                sizes="262px"
                className="object-cover"
              />
            </div>

            <h3 className="mt-5 text-center text-2xl font-bold tracking-wide text-ink">
              {project.title}
            </h3>
            <p className="mt-10 text-center text-sm text-script">
              {project.tech.join(", ")}
            </p>
            <p className="mt-5 text-sm text-[#722f37]">{project.description}</p>

            <div className="mt-4 flex items-center justify-between">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-4 py-2 text-sm text-white hover:bg-accent-hover"
              >
                Live demo
              </a>

              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-accent px-4 py-2 text-sm text-accent hover:bg-accent hover:text-white"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
