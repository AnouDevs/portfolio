import type { Skill } from "@/types/skill";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiShadcnui,
  SiDrizzle,
  SiPostgresql,
  SiGithub,
  SiFramer,
} from "react-icons/si";

const skills: Skill[] = [
  { name: "Next.js", brandColor: "#000000", icon: SiNextdotjs },
  { name: "TypeScript", brandColor: "#3178C6", icon: SiTypescript },
  { name: "React", brandColor: "#61DAFB", icon: SiReact },
  { name: "Tailwind CSS", brandColor: "#06B6D4", icon: SiTailwindcss },
  { name: "shadcn/ui", brandColor: "#000000", icon: SiShadcnui },
  { name: "Drizzle ORM", brandColor: "#C5F74F", icon: SiDrizzle },
  { name: "PostgreSQL", brandColor: "#4169E1", icon: SiPostgresql },
  { name: "Git/GitHub", brandColor: "#181717", icon: SiGithub },
  { name: "Framer Motion", brandColor: "#0055FF", icon: SiFramer },
];

export default skills;
