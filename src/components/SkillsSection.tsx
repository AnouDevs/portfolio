import skills from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="px-14 py-20 text-center">
      <h2 className="text-4xl font-bold text-ink">Skills</h2>
      <div className="mx-auto mt-2 h-[3px] w-16 bg-sage-underline" />

      <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="flex items-center gap-2 rounded-full bg-chip-bg px-5 py-3"
            >
              <Icon size={18} color={skill.brandColor} />
              <span className="text-sm text-ink">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}