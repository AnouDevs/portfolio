import type { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "kpop-goodies-shop",
    description:
      "K-pop goodies order management app (photocards, posters, pins). Solo capstone project built at the end of a fullstack bootcamp, featuring role-based access control and a full order flow.",
    tech: [
      "Next.js",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "Better Auth",
      "shadcn/ui",
      "Tailwind CSS",
    ],
    demoUrl: "https://kpop-goodies-shop.vercel.app",
    codeUrl: "https://github.com/AnouDevs/kpop-goodies-shop",
  },
];

export default projects;
