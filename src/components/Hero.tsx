import { FaGithub, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="flex flex-col items-center px-14 pt-20 pb-24 text-center"
    >
      <h1 className="text-[54px] font-bold text-ink">
        Hey World, I&apos;m AnouDev!
      </h1>
      <div className="mt-3 h-[3px] w-20 bg-sage-underline" />

      <Image
        src="/anou-dev-photo.jpg"
        alt="AnouDev"
        width={340}
        height={360}
        className="mt-10 h-[360px] w-[340px] rounded-full object-cover"
        priority
      />

      <p className="mt-6 max-w-xl font-mono text-2xl text-script">
        Fullstack developer passionate about building clean, well-structured web
        applications from scratch.
      </p>
      <p className="mt-4 max-w-xl font-mono text-2xl text-script">
        Currently sharpening my TypeScript and system design skills through
        real, end-to-end projects.
      </p>

      <p className="mt-8 text-2xl text-accent">
        Fullstack Developer · Next.js · TypeScript
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 text-white hover:bg-accent-hover"
        >
          See my projects
        </a>

        <a
          href="/cv.pdf"
          className="rounded-full border border-accent px-6 py-3 text-accent hover:bg-accent hover:text-white"
        >
          Download CV
        </a>
      </div>

      <div className="mt-10 flex gap-6">
        <a
          href="https://github.com/AnouDevs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-ink hover:bg-accent hover:text-white"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="mailto:anou_web@hotmail.com"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-ink hover:bg-accent hover:text-white"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
    </section>
  );
}
