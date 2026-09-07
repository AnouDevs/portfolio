"use client";

import { FaGithub, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section
      id="about"
      className="flex flex-col items-center px-6 pt-16 pb-16 text-center md:px-14 md:pt-20 md:pb-24"
    >
      <h1 className="text-[32px] font-bold text-ink md:text-[54px]">
        {t.heroTitle}
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
        {t.heroIntro1}
      </p>
      <p className="mt-4 max-w-xl font-mono text-2xl text-script">
        {t.heroIntro2}
      </p>

      <p className="mt-8 text-2xl text-accent">{t.heroTagline}</p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 text-white hover:bg-accent-hover"
        >
          {t.heroCtaProjects}
        </a>

        <a
          href="/cv.pdf"
          className="rounded-full border border-accent px-6 py-3 text-accent hover:bg-accent hover:text-white"
        >
          {t.heroCtaCV}
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
