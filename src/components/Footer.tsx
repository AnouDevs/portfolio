"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="w-full bg-footer px-6 py-[18px] text-center">
      <p className="font-mono text-lg text-white">
        © 2026 AnouDev. {t.footerRights}
      </p>
    </footer>
  );
}
